"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this));
    _this.state = {};
    return _this;
  }
  /**
   * 返回首页
   */


  _createClass(Page, [{
    key: "goHome",
    value: function goHome() {
      this.props.loadData();
    }
    /**
     * 上一页
     */

  }, {
    key: "goPrev",
    value: function goPrev() {
      this.props.loadData();
    }
    /**
     * 下一页
     */

  }, {
    key: "goNext",
    value: function goNext() {
      this.props.loadData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          curPage = _this$props.curPage,
          hasMore = _this$props.hasMore;

      var style = _objectSpread({
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-evently",
        alignItems: "center"
      }, this.props.style);

      var btnSty = {
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      };
      var zySty = {
        fontSize: "30px",
        color: "#000",
        fontWeight: "800",
        cursor: "pointer"
      };
      var preSty = {
        fontSize: "40px",
        color: curPage === 1 ? "#000" : "#4c4c4c",
        fontWeight: "800",
        cursor: "pointer"
      };
      var nextSty = {
        fontSize: "40px",
        color: hasMore ? "#000" : "#4c4c4c",
        fontWeight: "800",
        cursor: "pointer"
      };

      var DEFAULT_HOME = _react["default"].createElement("i", {
        className: "iconfont icon-zhuye",
        style: zySty
      });

      var DEFAULT_PREV = _react["default"].createElement("i", {
        className: "iconfont icon-icon-test1",
        style: preSty
      });

      var DEFAULT_NEXT = _react["default"].createElement("i", {
        className: "iconfont icon-icon-test2",
        style: nextSty
      });

      return _react["default"].createElement("div", {
        className: "page-toggle-component",
        style: style
      }, _react["default"].createElement("div", {
        style: btnSty,
        onClick: this.goHome.bind(this)
      }, this.props.homeBtn ? this.props.homeBtn : DEFAULT_HOME), _react["default"].createElement("div", {
        style: btnSty,
        onClick: this.goPrev.bind(this)
      }, this.props.prevBtn ? this.props.prevBtn : DEFAULT_PREV), _react["default"].createElement("div", {
        style: btnSty,
        onClick: this.goNext.bind(this)
      }, this.props.nextBtn ? this.props.nextBtn : DEFAULT_NEXT));
    }
  }]);

  return Page;
}(_react["default"].Component);

exports["default"] = Page;