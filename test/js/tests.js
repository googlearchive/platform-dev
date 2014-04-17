/*
 * Copyright 2013 The Polymer Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

htmlSuite('loader and build', function() {
  htmlTest('html/dev-loader.html');
  htmlTest('html/dev-loader-swizzled.html');
  // htmlTest('html/production-loader.html');
  htmlTest('html/loader-forcepoly.html');
});

htmlSuite('integration', function() {
  htmlTest('html/web-components.html');
  htmlTest('html/smoke.html');
  htmlTest('html/smoke.html?shadow&register');
  htmlTest('html/ce-import.html');
  htmlTest('html/ce-import.html?shadow');
  htmlTest('html/ce-upgrade-order.html');
});

htmlSuite('URL Loader', function() {
  htmlTest('html/url.html');
  htmlTest('html/loader-deduplicate.html');
});

htmlSuite('styling', function() {
  htmlTest('html/styling/pseudo-scoping.html');
  htmlTest('html/styling/pseudo-scoping.html?shadow&register');
  htmlTest('html/styling/pseudo-scoping-strict.html');
  htmlTest('html/styling/pseudo-scoping-strict.html?shadow&register');
  htmlTest('html/styling/polyfill-directive.html');
  htmlTest('html/styling/polyfill-rule.html');
  htmlTest('html/styling/colon-host.html');
  htmlTest('html/styling/colon-host.html?shadow&register');
  htmlTest('html/styling/combinators.html?shadow&register');
  htmlTest('html/styling/combinators-shadow.html');
  htmlTest('html/styling/combinators-shadow.html?shadow&register');
  htmlTest('html/styling/before-content.html');
  htmlTest('html/styling/before-content.html?shadow&register');
  htmlTest('html/styling/before-content.html');
  htmlTest('html/styling/style-import.html');
  htmlTest('html/styling/recursive-style-import.html');
});

htmlSuite('Library Cooperation', function() {
  htmlTest('html/jquery-shadowdom-polyfill.html');
});
