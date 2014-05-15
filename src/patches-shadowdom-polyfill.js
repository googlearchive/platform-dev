/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

(function() {

  // convenient global
  window.wrap = ShadowDOMPolyfill.wrapIfNeeded;
  window.unwrap = ShadowDOMPolyfill.unwrapIfNeeded;

  // users may want to customize other types
  // TODO(sjmiles): 'button' is now supported by ShadowDOMPolyfill, but
  // I've left this code here in case we need to temporarily patch another
  // type
  /*
  (function() {
    var elts = {HTMLButtonElement: 'button'};
    for (var c in elts) {
      window[c] = function() { throw 'Patched Constructor'; };
      window[c].prototype = Object.getPrototypeOf(
          document.createElement(elts[c]));
    }
  })();
  */

  // patch in prefixed name
  Object.defineProperty(Element.prototype, 'webkitShadowRoot',
      Object.getOwnPropertyDescriptor(Element.prototype, 'shadowRoot'));

  var originalCreateShadowRoot = Element.prototype.createShadowRoot;
  Element.prototype.createShadowRoot = function() {
    var root = originalCreateShadowRoot.call(this);
    CustomElements.watchShadow(this);
    return root;
  };

  Element.prototype.webkitCreateShadowRoot = Element.prototype.createShadowRoot;
})();
