define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js"
], function(_exports, _polymerElement) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.HexagonLoader = void 0;
  function _templateObject_f20eb320ec1811e8b82a759f7a2fb17c() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\ndiv {\n  position: relative;\n  width: 255px;\n  height: 232.5px;\n  margin: 0 auto;\n}\n\nhex-a-gon:nth-of-type(1) {\n  display: block;\n  margin-left: -56.25px;\n  margin-top: -97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(2) {\n  display: block;\n  margin-left: -18.75px;\n  margin-top: -97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(3) {\n  display: block;\n  margin-left: 18.75px;\n  margin-top: -97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(4) {\n  display: block;\n  margin-left: 56.25px;\n  margin-top: -97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\nhex-a-gon:nth-of-type(5) {\n  display: block;\n  margin-left: -75px;\n  margin-top: -65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(6) {\n  display: block;\n  margin-left: -37.5px;\n  margin-top: -65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(7) {\n  display: block;\n  margin-left: 0px;\n  margin-top: -65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(8) {\n  display: block;\n  margin-left: 37.5px;\n  margin-top: -65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\nhex-a-gon:nth-of-type(9) {\n  display: block;\n  margin-left: 75px;\n  margin-top: -65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\nhex-a-gon:nth-of-type(10) {\n  display: block;\n  margin-left: -93.75px;\n  margin-top: -32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(11) {\n  display: block;\n  margin-left: -56.25px;\n  margin-top: -32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(12) {\n  display: block;\n  margin-left: -18.75px;\n  margin-top: -32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(13) {\n  display: block;\n  margin-left: 18.75px;\n  margin-top: -32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\nhex-a-gon:nth-of-type(14) {\n  display: block;\n  margin-left: 56.25px;\n  margin-top: -32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\nhex-a-gon:nth-of-type(15) {\n  display: block;\n  margin-left: 93.75px;\n  margin-top: -32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\nhex-a-gon:nth-of-type(16) {\n  display: block;\n  margin-left: -112.5px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(17) {\n  display: block;\n  margin-left: -75px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(18) {\n  display: block;\n  margin-left: -37.5px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(19) {\n  display: block;\n  margin-left: 0px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\nhex-a-gon:nth-of-type(20) {\n  display: block;\n  margin-left: 37.5px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\nhex-a-gon:nth-of-type(21) {\n  display: block;\n  margin-left: 75px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\nhex-a-gon:nth-of-type(22) {\n  display: block;\n  margin-left: 112.5px;\n  margin-top: 0px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\nhex-a-gon:nth-of-type(23) {\n  display: block;\n  margin-left: -93.75px;\n  margin-top: 32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(24) {\n  display: block;\n  margin-left: -56.25px;\n  margin-top: 32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(25) {\n  display: block;\n  margin-left: -18.75px;\n  margin-top: 32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(26) {\n  display: block;\n  margin-left: 18.75px;\n  margin-top: 32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\nhex-a-gon:nth-of-type(27) {\n  display: block;\n  margin-left: 56.25px;\n  margin-top: 32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\nhex-a-gon:nth-of-type(28) {\n  display: block;\n  margin-left: 93.75px;\n  margin-top: 32.625px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.25s;\n          animation-delay: 0.25s;\n}\nhex-a-gon:nth-of-type(29) {\n  display: block;\n  margin-left: -75px;\n  margin-top: 65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(30) {\n  display: block;\n  margin-left: -37.5px;\n  margin-top: 65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(31) {\n  display: block;\n  margin-left: 0px;\n  margin-top: 65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(32) {\n  display: block;\n  margin-left: 37.5px;\n  margin-top: 65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\nhex-a-gon:nth-of-type(33) {\n  display: block;\n  margin-left: 75px;\n  margin-top: 65.25px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\nhex-a-gon:nth-of-type(34) {\n  display: block;\n  margin-left: -56.25px;\n  margin-top: 97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\nhex-a-gon:nth-of-type(35) {\n  display: block;\n  margin-left: -18.75px;\n  margin-top: 97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.05s;\n          animation-delay: 0.05s;\n}\nhex-a-gon:nth-of-type(36) {\n  display: block;\n  margin-left: 18.75px;\n  margin-top: 97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\nhex-a-gon:nth-of-type(37) {\n  display: block;\n  margin-left: 56.25px;\n  margin-top: 97.875px;\n  -webkit-animation: scaleIt 1.5s ease-in-out infinite both;\n          animation: scaleIt 1.5s ease-in-out infinite both;\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s;\n}\n\n@-webkit-keyframes scaleIt {\n  25%,100% {\n    -webkit-transform: scale(1) translate(-50%, -50%);\n            transform: scale(1) translate(-50%, -50%);\n  }\n  50% {\n    -webkit-transform: scale(0) translate(-50%, -50%);\n            transform: scale(0) translate(-50%, -50%);\n  }\n}\n\n@keyframes scaleIt {\n  25%,100% {\n    -webkit-transform: scale(1) translate(-50%, -50%);\n            transform: scale(1) translate(-50%, -50%);\n  }\n  50% {\n    -webkit-transform: scale(0) translate(-50%, -50%);\n            transform: scale(0) translate(-50%, -50%);\n  }\n}</style>\n<div>\n    <template is="dom-repeat" items="[[items]]">\n        <hex-a-gon color="[[color]]"></hex-a-gon>\n    </template>\n</div>'
    ]);
    _templateObject_f20eb320ec1811e8b82a759f7a2fb17c = function() {
      return data;
    };
    return data;
  }
  var HexagonLoader = (function(_PolymerElement) {
    babelHelpers.inherits(HexagonLoader, _PolymerElement);
    function HexagonLoader() {
      babelHelpers.classCallCheck(this, HexagonLoader);
      return babelHelpers.possibleConstructorReturn(
        this,
        (HexagonLoader.__proto__ || Object.getPrototypeOf(HexagonLoader)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      HexagonLoader,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                HexagonLoader.prototype.__proto__ ||
                  Object.getPrototypeOf(HexagonLoader.prototype),
                "connectedCallback",
                this
              )
              .call(this);
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_f20eb320ec1811e8b82a759f7a2fb17c()
            );
          }
        },
        {
          key: "properties",
          get: function get() {
            return {
              color: { name: "color", type: "String", value: "orange" },
              size: { name: "size", type: "String", value: "medium" },
              loading: { name: "loading", type: "Boolean" },
              itemCount: { name: "itemCount", type: "Number", value: 92 }
            };
          }
        },
        {
          key: "tag",
          get: function get() {
            return "hexagon-loader";
          }
        }
      ]
    );
    return HexagonLoader;
  })(_polymerElement.PolymerElement);
  _exports.HexagonLoader = HexagonLoader;
  window.customElements.define(HexagonLoader.tag, HexagonLoader);
});
