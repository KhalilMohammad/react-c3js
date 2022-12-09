"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactDom = require("react-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var c3;
var C3Chart = /*#__PURE__*/function (_React$Component) {
  _inherits(C3Chart, _React$Component);
  var _super = _createSuper(C3Chart);
  function C3Chart() {
    _classCallCheck(this, C3Chart);
    return _super.apply(this, arguments);
  }
  _createClass(C3Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      c3 = require('c3');
      this.updateChart(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      this.updateChart(newProps);
      if (newProps.onPropsChanged) {
        newProps.onPropsChanged(this.props, newProps, this.chart);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyChart();
    }
  }, {
    key: "destroyChart",
    value: function destroyChart() {
      try {
        this.chart = this.chart.destroy();
      } catch (err) {
        throw new Error('Internal C3 error', err);
      }
    }
  }, {
    key: "generateChart",
    value: function generateChart(mountNode, config) {
      var newConfig = Object.assign({
        bindto: mountNode
      }, config);
      return c3.generate(newConfig);
    }
  }, {
    key: "loadNewData",
    value: function loadNewData(data) {
      this.chart.load(data);
    }
  }, {
    key: "unloadData",
    value: function unloadData() {
      this.chart.unload();
    }
  }, {
    key: "updateChart",
    value: function updateChart(config) {
      if (!this.chart) {
        this.chart = this.generateChart((0, _reactDom.findDOMNode)(this), config);
      }
      if (config.unloadBeforeLoad) {
        this.unloadData();
      }
      this.loadNewData(config.data);
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className ? " ".concat(this.props.className) : '';
      var style = this.props.style ? this.props.style : {};
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        style: style
      });
    }
  }], [{
    key: "displayName",
    get: function get() {
      return 'C3Chart';
    }
  }, {
    key: "propTypes",
    get: function get() {
      return {
        data: _propTypes["default"].object.isRequired,
        title: _propTypes["default"].object,
        size: _propTypes["default"].object,
        padding: _propTypes["default"].object,
        color: _propTypes["default"].object,
        interaction: _propTypes["default"].object,
        transition: _propTypes["default"].object,
        oninit: _propTypes["default"].func,
        onrendered: _propTypes["default"].func,
        onmouseover: _propTypes["default"].func,
        onmouseout: _propTypes["default"].func,
        onresize: _propTypes["default"].func,
        onresized: _propTypes["default"].func,
        axis: _propTypes["default"].object,
        grid: _propTypes["default"].object,
        regions: _propTypes["default"].array,
        legend: _propTypes["default"].object,
        tooltip: _propTypes["default"].object,
        subchart: _propTypes["default"].object,
        zoom: _propTypes["default"].object,
        point: _propTypes["default"].object,
        line: _propTypes["default"].object,
        area: _propTypes["default"].object,
        bar: _propTypes["default"].object,
        pie: _propTypes["default"].object,
        donut: _propTypes["default"].object,
        gauge: _propTypes["default"].object,
        className: _propTypes["default"].string,
        style: _propTypes["default"].object,
        unloadBeforeLoad: _propTypes["default"].bool,
        onPropsChanged: _propTypes["default"].func
      };
    }
  }]);
  return C3Chart;
}(_react["default"].Component);
var _default = C3Chart;
exports["default"] = _default;
