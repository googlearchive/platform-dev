/*
 * Copyright 2014 The Polymer Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
(function(scope) {

var urlResolver = scope.urlResolver;
var Loader = scope.Loader;

function StyleResolver() {
  this.loader = new Loader(this.regex);
}
StyleResolver.prototype = {
  regex: /@import\s+(?:url)?["'\(]*([^'"\)]*)['"\)]*;/g,
  // Recursively replace @imports with the text at that url
  resolve: function(text, url, callback) {
    var done = function(map) {
      callback(this.flatten(text, url, map));
    }.bind(this);
    this.loader.process(text, url, done);
  },
  // resolve the textContent of a style node
  resolveNode: function(style, callback) {
    var text = style.textContent;
    var url = style.ownerDocument.baseURI;
    var done = function(text) {
      style.textContent = text;
      callback(style);
    };
    this.resolve(text, url, done);
  },
  // flatten all the @imports to text
  flatten: function(text, base, map) {
    var matches = this.loader.extractUrls(text, base);
    var match, url, intermediate;
    for (var i = 0; i < matches.length; i++) {
      match = matches[i];
      url = match.url;
      // resolve any css text to be relative to the importer
      intermediate = urlResolver.resolveCssText(map[url], url);
      // flatten intermediate @imports
      intermediate = this.flatten(intermediate, url, map);
      text = text.replace(match.matched, intermediate);
    }
    return text;
  }
};

var styleResolver = new StyleResolver();
var loader = {
  cacheStyles: function(styles, callback) {
    var css = [];
    for (var i=0, l=styles.length, s; (i<l) && (s=styles[i]); i++) {
      css.push(s.textContent);
    }
    cacheCssText(css.join('\n'), callback);
  },
  xhrStyles: function(styles, callback) {
    var loaded=0, l = styles.length;
    // called in the context of the style
    function loadedStyle(style) {
      //console.log(style.textContent);
      loaded++;
      if (loaded === l && callback) {
        callback();
      }
    }
    for (var i=0, s; (i<l) && (s=styles[i]); i++) {
      styleResolver.resolveNode(s, loadedStyle);
    }
  },
};

// use the platform to preload styles
var preloadElement = document.createElement('preloader');
preloadElement.style.display = 'none';
var preloadRoot = preloadElement.createShadowRoot();
document.head.appendChild(preloadElement);

function cacheCssText(cssText, callback) {
  var style = createStyleElement(cssText);
  if (callback) {
    style.addEventListener('load', callback);
    style.addEventListener('error', callback);
  }
  preloadRoot.appendChild(style);
}

function createStyleElement(cssText, scope) {
  scope = scope || document;
  scope = scope.createElement ? scope : scope.ownerDocument;
  var style = scope.createElement('style');
  style.textContent = cssText;
  return style;
}

function xhrLoadStyle(style, callback) {
  styleResolver.resolveNode(style, function(){
    callback(style);
  });
}

// exports
scope.loader = loader;
scope.styleResolver = styleResolver;

})(window.Platform);
