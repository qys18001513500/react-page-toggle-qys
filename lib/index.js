"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var DEFAULT_PROPS = {
  headerHeight: "20%",
  actBtnColor: "#000",
  // 激活状态下按钮默认颜色
  btnColor: "#4c4c4c",
  cursor: "not-allowed",
  actCursor: "pointer"
};

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
  /****** 返回首页 *******/


  _createClass(Page, [{
    key: "goHome",
    value: function goHome() {
      this.props.loadData(0);
    }
    /****** 上一页 *******/

  }, {
    key: "goPrev",
    value: function goPrev() {
      if (this.props.currentPage > 1) {
        var startIndex = (this.props.currentPage - 1 - this.props.length) * this.props.length;
        this.props.loadData(startIndex);
      }
    }
    /****** 下一页 *******/

  }, {
    key: "goNext",
    value: function goNext() {
      if (this.props.hasMoreItems) {
        var startIndex = (this.props.currentPage + 1 - this.props.length) * this.props.length;
        this.props.loadData(startIndex);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentPage = _this$props.currentPage,
          hasMoreItems = _this$props.hasMoreItems;

      var style = _objectSpread({
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        boxShadow: "rgba(0,0,0,.8) 0px 0px 10px 0px",
        boxSizing: "border-box",
        position: "relative",
        borderRadius: "8px"
      }, this.props.style);

      var headerSty = {
        height: !this.props.headerHeight ? DEFAULT_PROPS.headerHeight : this.props.headerHeight,
        display: "flex"
      };
      var titleSty = {
        width: "80%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        paddingLeft: "15px"
      };
      var btnWrapSty = {
        width: "20%",
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
      };
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
        color: currentPage === 1 ? DEFAULT_PROPS.btnColor : DEFAULT_PROPS.actBtnColor,
        fontWeight: "800",
        cursor: currentPage === 1 ? DEFAULT_PROPS.cursor : DEFAULT_PROPS.actCursor
      };
      var nextSty = {
        fontSize: "40px",
        color: hasMoreItems ? DEFAULT_PROPS.actBtnColor : DEFAULT_PROPS.btnColor,
        fontWeight: "800",
        cursor: hasMoreItems ? DEFAULT_PROPS.actCursor : DEFAULT_PROPS.cursor
      };

      var contentSty = _objectSpread({
        width: "100%",
        height: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }, this.props.contentSty);

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
      }, _react["default"].createElement("header", {
        style: headerSty
      }, _react["default"].createElement("section", {
        style: titleSty
      }, this.props.title), _react["default"].createElement("section", {
        style: btnWrapSty
      }, _react["default"].createElement("div", {
        style: btnSty,
        onClick: this.goHome.bind(this)
      }, this.props.homeBtn ? this.props.homeBtn : DEFAULT_HOME), _react["default"].createElement("div", {
        style: btnSty,
        onClick: this.goPrev.bind(this)
      }, this.props.prevBtn ? this.props.prevBtn : DEFAULT_PREV), _react["default"].createElement("div", {
        style: btnSty,
        onClick: this.goNext.bind(this)
      }, this.props.nextBtn ? this.props.nextBtn : DEFAULT_NEXT))), _react["default"].createElement("section", {
        className: "page-toggle-component-content",
        style: contentSty
      }, this.props.children));
    }
  }]);

  return Page;
}(_react["default"].Component);

exports["default"] = Page;
Page.propTypes = {
  loadData: _propTypes["default"].func.isRequired,
  length: _propTypes["default"].number.isRequired,
  currentPage: _propTypes["default"].number.isRequired,
  hasMoreItems: _propTypes["default"].bool.isRequired,
  style: _propTypes["default"].object,
  headerHeight: _propTypes["default"].string,
  contentSty: _propTypes["default"].object,
  title: _propTypes["default"].object,
  homeBtn: _propTypes["default"].object,
  prevBtn: _propTypes["default"].object,
  nextBtn: _propTypes["default"].object
};