/*
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

htmlSuite('loader and build', function() {
  htmlTest('html/dev-loader.html');
  htmlTest('html/dev-loader-swizzled.html');
  htmlTest('html/loader-forcepoly.html');
});

htmlSuite('integration', function() {
  htmlTest('html/web-components.html');
  htmlTest('html/smoke.html');
  htmlTest('html/smoke.html?shadow');
  htmlTest('html/ce-import.html');
  htmlTest('html/ce-import.html?shadow');
  htmlTest('html/ce-upgrade-order.html');
});

htmlSuite('styling', function() {
  htmlTest('html/styling/pseudo-scoping.html');
  htmlTest('html/styling/pseudo-scoping.html?shadow');
  htmlTest('html/styling/pseudo-scoping-strict.html');
  htmlTest('html/styling/pseudo-scoping-strict.html?shadow');
  htmlTest('html/styling/polyfill-directive.html');
  htmlTest('html/styling/polyfill-rule.html');
  htmlTest('html/styling/colon-host.html');
  htmlTest('html/styling/colon-host.html?shadow');
  htmlTest('html/styling/combinators.html?shadow');
  htmlTest('html/styling/combinators-shadow.html');
  htmlTest('html/styling/combinators-shadow.html?shadow');
  htmlTest('html/styling/compressed.html');
  htmlTest('html/styling/before-content.html');
  htmlTest('html/styling/before-content.html?shadow');
  htmlTest('html/styling/before-content.html');
  htmlTest('html/styling/style-import.html');
  htmlTest('html/styling/css-animation.html');
});

htmlSuite('Library Cooperation', function() {
  htmlTest('html/jquery-shadowdom-polyfill.html');
});
