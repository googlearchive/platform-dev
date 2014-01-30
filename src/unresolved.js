/*
 * Copyright 2013 The Polymer Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
(function(scope) {
  
  // TODO(sorvell): It's desireable to provide a default stylesheet 
  // that's convenient for styling unresolved elements, but
  // it's cumbersome to have to include this manually in every page.
  // It would make sense to put inside some HTMLImport but 
  // the HTMLImports polyfill does not allow loading of stylesheets that blocks
  // rendering. Therefore this is being tolerated here.
  var TRANSITION_TIME = 0.2;
  var UNRESOLVED = 'unresolved';
  var RESOLVED = 'resolved';
  var UNRESOLVED_SELECTOR = '[' + UNRESOLVED + ']';
  var RESOLVED_SELECTOR = '[' + RESOLVED + ']';
  var style = document.createElement('style');
  
  style.textContent = UNRESOLVED_SELECTOR + ' { ' +
      'opacity: 0; display: block; overflow: hidden; } \n' +
      RESOLVED_SELECTOR +  '{ display: block; overflow: hidden;\n' +
      '-webkit-transition: opacity ' + TRANSITION_TIME + 's; ' +
      'transition: opacity ' + TRANSITION_TIME +'s; }\n';
  var head = document.querySelector('head');
  head.insertBefore(style, head.firstChild);

})(Platform);
