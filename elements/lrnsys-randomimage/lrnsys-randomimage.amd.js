define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/random-image/random-image.js","./node_modules/@polymer/paper-button/paper-button.js"],function(_exports,_polymerLegacy,_randomImage,_paperButton){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrnsysRandomimage=void 0;function _templateObject_5922e67019e711e98bdaa5a74ae10c42(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id=\"list\"><random-image images-list$=\"{{images}}\"></random-image></div>\n    <paper-button raised on-click=\"reload\">Reload</paper-button>\n  "]);_templateObject_5922e67019e711e98bdaa5a74ae10c42=function _templateObject_5922e67019e711e98bdaa5a74ae10c42(){return data};return data}var LrnsysRandomimage=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_5922e67019e711e98bdaa5a74ae10c42()),is:"lrnsys-randomimage",properties:{images:{type:Object,notify:!0,value:function value(){return[]}}},reload:function reload(e){var root=this;this.$.list.innerHTML=this.$.list.innerHTML}});_exports.LrnsysRandomimage=LrnsysRandomimage});