!function o(i,d,s){function u(t,e){if(!d[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(r)return r(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=d[t]={exports:{}},i[t][0].call(n.exports,function(e){return u(i[t][1][e]||e)},n,n.exports,o,i,d,s)}return d[t].exports}for(var r="function"==typeof require&&require,e=0;e<s.length;e++)u(s[e]);return u}({1:[function(e,t,n){"use strict";e("./vendor/focus-visible-polyfill")},{"./vendor/focus-visible-polyfill":2}],2:[function(e,t,n){"use strict";function o(t){var i=!0,n=!1,o=null,d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function u(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function e(e){i=!1}function r(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(i=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",function(e){e.metaKey||e.altKey||e.ctrlKey||(s(t.activeElement)&&u(t.activeElement),i=!0)},!0),document.addEventListener("mousedown",e,!0),document.addEventListener("pointerdown",e,!0),document.addEventListener("touchstart",e,!0),document.addEventListener("visibilitychange",function(e){"hidden"===document.visibilityState&&(n&&(i=!0),r())},!0),r(),t.addEventListener("focus",function(e){var t,n,o;s(e.target)&&(i||(t=e.target,n=t.type,"INPUT"===(o=t.tagName)&&d[n]&&!t.readOnly)||"TEXTAREA"===o&&!t.readOnly||t.isContentEditable)&&u(e.target)},!0),t.addEventListener("blur",function(e){s(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout(function(){n=!1},100),(e=e.target).hasAttribute("data-focus-visible-added"))&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))},!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var i;window.applyFocusVisiblePolyfill=o;try{i=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(i=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(i)}"undefined"!=typeof document&&o(document)},{}]},{},[1]);