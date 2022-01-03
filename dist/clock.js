"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Clock = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./clock.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Clock = function Clock() {
  (0, _react.useEffect)(function () {
    setInterval(setClock, 1000);
  }, []);
  var secondHand = (0, _react.useRef)(undefined);
  var minuteHand = (0, _react.useRef)(undefined);
  var hourHand = (0, _react.useRef)(undefined);

  function setClock() {
    var currentDate = new Date();
    var seconds = currentDate.getSeconds() / 60;
    var minutes = (seconds + currentDate.getMinutes()) / 60;
    var hours = (minutes + convertTo12Hour(currentDate.getHours())) / 12;
    setRotation(secondHand.current, seconds);
    setRotation(minuteHand.current, minutes);
    setRotation(hourHand.current, hours);
  }

  function setRotation(element, rotationRatio) {
    if (!element) {
      return;
    }

    element.style.setProperty('--rotation', rotationRatio * 360);
  }

  function convertTo12Hour(hour24) {
    return (hour24 + 11) % 12 + 1;
  }

  setClock();
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "clock"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "number number1"
  }, "1"), /*#__PURE__*/_react.default.createElement("div", {
    class: "number number2"
  }, "2"), /*#__PURE__*/_react.default.createElement("div", {
    class: "number number3"
  }, "3"), /*#__PURE__*/_react.default.createElement("div", {
    class: "number number4"
  }, "4"), /*#__PURE__*/_react.default.createElement("div", {
    class: "number number5"
  }, "5"), /*#__PURE__*/_react.default.createElement("div", {
    class: "number number6"
  }, "6"), /*#__PURE__*/_react.default.createElement("div", {
    class: "number number7"
  }, "7"), /*#__PURE__*/_react.default.createElement("div", {
    class: "number number8"
  }, "8"), /*#__PURE__*/_react.default.createElement("div", {
    class: "number number9"
  }, "9"), /*#__PURE__*/_react.default.createElement("div", {
    class: "number number10"
  }, "10"), /*#__PURE__*/_react.default.createElement("div", {
    class: "number number11"
  }, "11"), /*#__PURE__*/_react.default.createElement("div", {
    class: "number number12"
  }, "12"), /*#__PURE__*/_react.default.createElement("div", {
    ref: hourHand,
    class: "hand hour"
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: minuteHand,
    class: "hand minute"
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: secondHand,
    class: "hand second"
  }), /*#__PURE__*/_react.default.createElement("div", {
    class: "center"
  }));
};

exports.Clock = Clock;