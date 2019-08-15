(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(37);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(39);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(24);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(40);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(18);

var _helpers = __webpack_require__(41);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LangProvider; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var LangContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext([{}, function () {}]);

var LangProvider = function LangProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('cz'),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      lang = _useState2[0],
      setLang = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LangContext.Provider, {
    value: [lang, setLang]
  }, props.children);
};



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortNav; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__);


function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    position:absolute;\n    z-index:1;\n    width:100%;\n    height:100%;\n    max-width:400px;\n    max-height:400px;\n    opacity:0;\n    padding:160px 0;\n    box-sizing:border-box;\n    @media (hover: none)\n        { opacity:1;\n            background-color: rgba(0,0,0,0.5);\n        color:white;}\n    @media(hover: hover){", " &:hover{\n        opacity:1;\n        background-color: rgba(0,0,0,0.5);\n        color:white;}}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    position:relative;\n    box-sizing:border-box;\n    overflow:hidden;\n    text-align:center;\n    width:400px;\n    height:400px;\n    overflow:hidden;\n    margin:5px 5px 5px 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    position:relative;\n    height:400px;\n    width:400px;\n    object-fit:cover;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display:flex;\n    flex-wrap:wrap;\n    justify-content:center;\n    max-width:1650px;\n    margin-left:auto;\n    margin-right:auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Nav = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var PortImg = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject2());
var Box = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.span(_templateObject4(), Box);
function PortNav(props) {
  var lang = props.lang;
  var Articles = props.articles;
  var items = Articles.map(function (article) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Box, {
      className: "index",
      key: article.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/".concat(lang, "portfolio/").concat(article.id)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Overlay, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, article.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PortImg, {
      src: article.image,
      alt: article.name
    })));
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Nav, null, items);
}
;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(18);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(38)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_construction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_construction__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null));
});
/*export default () =>(
    <div>
    
        <h1>Martina Fischmeister *1995</h1>
        <p>


Martina is a czech illustrator and painter, residing and working in Prague.

She finished her degree at Art{"&"}Design Institut, under guidance of doc. Roman Franta and prof. Jiří Lindovský.

She is profesionally making book and editorial illustration but she also enjoys doing comics, tattoo design and oilpainting.

Her illustrations are regularly being published in newspaper Právo, magazine Salon and also in books on the czech and english market.


For the work of Martina Fischmeister the most suitable words are „cool digital“.
Her illustrations definetly represent a trend in the contemporary czech illustration: please note the juicy colours that seem to shine out of the digital monitors as well as magazine‘s pages.
Martina has a sovereign drawing and confident treatment of brushes.
She is clearly very comfortable with drawing the most dreaded thing between illustrators – the human figure and the human face.
In her illustration she cuts them, sinks them under different kinds of liquids and uses interesting lighting. She is a media freerider and her style suits well to different comissions.

</p>
    </div>
)*/

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n          position:relative;\n          top:20vw;\n          right:-40vw;\n          color:black;\n          width:53%;\n          padding-left:5%;\n\n          @media only screen and (max-width:600px){\n          font-size:calc(1.75em + 1vw);}\n\n          @media only screen and (min-width:600px){\n            font-size:calc(2.5em + 2vw)}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n              animation: ", " infinite 20s linear;\n              height: 20vw;\n              width:auto;\n              position:absolute;\n              left:10vw;\n              pointer-events: none;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n            animation: ", " infinite 20s linear;\n            height: 20vw;\n            width:auto;\n            position:absolute;\n            top:17vw;\n            left:0vw;\n            pointer-events: none;\n\n            \n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n              animation: ", " infinite 20s linear;\n              height: 20vw;\n              width:auto;\n              position:absolute;\n              top:34vw;\n              left:10vw;\n              pointer-events: none;\n\n              \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n                    position:relative;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n              position:relative;\n              top:5vw;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nfrom {transform: rotate(0deg);}\n            to {transform: rotate(-360deg);}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n from {transform: rotate(0deg);}\n                to {transform: rotate(360deg);}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var rightSpin = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject());
var leftSpin = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_templateObject2());
var Under = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var Construction = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
var Orange = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject5(), rightSpin);
var Blue = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject6(), leftSpin);
var Yelow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject7(), rightSpin);
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1(_templateObject8());
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Under, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Construction, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Yelow, {
    src: "/graphic/yelow-gear.svg"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Blue, {
    src: "/graphic/blue-gear.svg"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Orange, {
    src: "/graphic/orange-gear.svg"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H1, null, "This page is under construction"));
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Content; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n            width:600px;\n            margin:10px 10px 10px 10px;\n            display:inline-block;\n            overflow:hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nwidth:600px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n              display:flex;\n              flex-wrap:wrap;\n              justify-content:center;\n              margin-left:auto;\n              margin-right:auto;\n              margin-bottom:30px;\n              max-width:2480px;\n              border-bottom: 1px solid gray;\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Contt = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img(_templateObject2());
var Item = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
function Content(props) {
  var content = props.content;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Contt, null, content.resources.map(function (resource) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
      className: "index",
      key: resource.name
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {
      src: resource.image,
      alt: resource.id
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, resource.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, resource.description));
  }));
}
;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(1);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(5);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(2);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(7);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(10);

// EXTERNAL MODULE: C:/Users/lahva/Desktop/ArtFolio/src/LangContext.js
var LangContext = __webpack_require__(8);

// CONCATENATED MODULE: C:/Users/lahva/Desktop/ArtFolio/src/components/LangNav.js



function _templateObject() {
  var data = taggedTemplateLiteral_default()([" \n  display: inline;\n  font-family: Arial;\n  color: black;\n  text-decoration:none;\n  text-align: center;\n  font-size:25px;\n  padding:5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var LLink = external_styled_components_default()(router_["Link"])(_templateObject());
function NBar() {
  var _useContext = Object(external_react_["useContext"])(LangContext["a" /* LangContext */]),
      _useContext2 = slicedToArray_default()(_useContext, 2),
      lang = _useContext2[0],
      setLang = _useContext2[1];

  return external_react_default.a.createElement("div", {
    className: "LangNav"
  }, external_react_default.a.createElement(LLink, {
    onClick: function onClick() {
      return setLang('cz');
    },
    to: "/"
  }, "CZ"), external_react_default.a.createElement(LLink, {
    onClick: function onClick() {
      return setLang('en');
    },
    to: "/en"
  }, "EN"));
}
;
// CONCATENATED MODULE: C:/Users/lahva/Desktop/ArtFolio/src/components/Navigate.js



function Navigate_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  @media only screen and (min-height:450px)  and (orientation:landscape){\n    display:inline;}\n  @media only screen and (min-width:800px) and (orientation: portrait){\n    display:inline;}\n  @media only screen and (max-height:450px) and (orientation:landscape){\n    display:block;}\n  @media only screen and (max-width:800px) and (orientation:portrait){\n    display:block;}\n  font-family: Arial;\n  color: black;\n  text-decoration:none;\n  text-align: center;\n  font-size:25px;\n  margin:10px 20px 10px 20px;\n"]);

  Navigate_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var SLink = external_styled_components_default()(router_["Link"])(Navigate_templateObject());
/* harmony default export */ var Navigate = (function () {
  var _useContext = Object(external_react_["useContext"])(LangContext["a" /* LangContext */]),
      _useContext2 = slicedToArray_default()(_useContext, 2),
      lang = _useContext2[0],
      setLang = _useContext2[1];

  switch (lang) {
    case 'en':
      return external_react_default.a.createElement("div", {
        className: "Navigate"
      }, external_react_default.a.createElement(SLink, {
        to: "/en"
      }, "Portfolio"), external_react_default.a.createElement(SLink, {
        to: "/en/about-me"
      }, "About Me"), external_react_default.a.createElement(SLink, {
        to: "/contact"
      }, "Contact"));

    case 'cz':
      return external_react_default.a.createElement("div", {
        className: "Navigate"
      }, external_react_default.a.createElement(SLink, {
        to: "/"
      }, "Portfolio"), external_react_default.a.createElement(SLink, {
        to: "/o-me"
      }, "O M\u011B"), external_react_default.a.createElement(SLink, {
        to: "/contact"
      }, "Kontakt"));

    default:
      return null;
  }
});
;
// CONCATENATED MODULE: C:/Users/lahva/Desktop/ArtFolio/src/components/SocialNW.js


function SocialNW_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n                width:25px;\n                height:25px;\n                padding:5px;\n"]);

  SocialNW_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var SIcon = external_styled_components_default.a.img(SocialNW_templateObject());
/* harmony default export */ var SocialNW = (function () {
  return external_react_default.a.createElement("div", {
    className: "Social"
  }, external_react_default.a.createElement("a", {
    href: "https://www.facebook.com/martinafischmeister/",
    target: "_blank"
  }, external_react_default.a.createElement(SIcon, {
    src: "/icons/facebook.svg"
  })), external_react_default.a.createElement("a", {
    href: "https://www.instagram.com/fischmeisterr/",
    target: "_blank"
  }, external_react_default.a.createElement(SIcon, {
    src: "/icons/instagram.svg"
  })));
});
// CONCATENATED MODULE: C:/Users/lahva/Desktop/ArtFolio/src/components/Logo.js


function Logo_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    margin:0px;\n    padding:0px;\n    width:auto;\n    height:40px;\n"]);

  Logo_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Logo = external_styled_components_default.a.img(Logo_templateObject());
/* harmony default export */ var components_Logo = (function () {
  return external_react_default.a.createElement(Logo, {
    className: "Logo",
    src: "/icons/logo2.svg"
  });
});
// CONCATENATED MODULE: C:/Users/lahva/Desktop/ArtFolio/src/components/BurgerNav.js



function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n    grid-column:11/13;\n    grid-row:1/2;\n    width:30px;\n    height:auto;\n    padding:10px;\n    margin:auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function BurgerNav_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    @media only screen and (min-height:450px)  and (orientation:landscape){\n        display:none;}\n    @media only screen and (min-width:800px) and (orientation: portrait){\n        display:none;}\n    position:fixed;\n    top:0px;\n    left:0px;\n    z-index:+2;\n    background-color: #ffff;\n    width:100%;\n    padding-bottom:10px;\n    padding-top: 10px; \n    display:grid;\n    grid-template-columns:repeat(12,8.333vw);\n    grid-auto-rows:minmax(1vw,auto);\n    .LangNav{\n    grid-column:1/4;\n    grid-row:1/2;\n    padding:10px;\n  }\n  .Logo{\n    grid-column:1/6;\n    grid-row:1/2;\n    margin-left:10px;}\n  .Social{\n    grid-column:1/13;\n    grid-row:3/4;\n    margin:auto;}\n  .Navigate{\n    grid-column:1/13;\n    grid-row:2/3;\n  }   \n"]);

  BurgerNav_templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Nav = external_styled_components_default.a.nav(BurgerNav_templateObject());
var Img = external_styled_components_default.a.img(_templateObject2());
function BNav() {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      click = _useState2[0],
      setClick = _useState2[1];

  var close = function close() {
    return setClick(false);
  };

  var open = function open() {
    return setClick(true);
  };

  if (click) {
    return external_react_default.a.createElement(Nav, null, external_react_default.a.createElement(Img, {
      src: "/icons/close.svg",
      onClick: close
    }), external_react_default.a.createElement("br", null), external_react_default.a.createElement(NBar, null), external_react_default.a.createElement(Navigate, null), external_react_default.a.createElement(SocialNW, null));
  }

  return external_react_default.a.createElement(Nav, null, external_react_default.a.createElement(components_Logo, null), external_react_default.a.createElement(Img, {
    src: "/icons/menu.svg",
    onClick: open
  }));
}
;
// CONCATENATED MODULE: C:/Users/lahva/Desktop/ArtFolio/src/components/NavBar.js


function NavBar_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  @media only screen and (max-height:450px) and (orientation:landscape){\n    display:none;}\n  @media only screen and (max-width:800px) and (orientation:portrait){\n    display:none;}\n  position:fixed;\n  top:0px;\n  right:0px;\n  z-index:+2;\n  width:100%;\n  background-color: #ffff;\n  padding-bottom:10px;\n  padding-top: 10px;      \n  display:grid;\n  grid-template-columns:repeat(12,8.333vw);\n  grid-auto-rows:minmax(1vw,auto); \n  .LangNav{\n    grid-column:11/13;\n    grid-row:1/2;\n    margin:auto;\n    padding-right:10px;\n  }\n  .Logo{\n    grid-column:1/3;\n    grid-row:1/2;\n    margin-left:10px;}\n  .Social{\n    grid-column:9/11;\n    grid-row:1/2;\n    margin:auto;}\n  .Navigate{\n    grid-column:3/9;\n    grid-row:1/2;\n    margin:auto;\n  }   \n"]);

  NavBar_templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var NavBar = external_styled_components_default.a.nav(NavBar_templateObject());
/* harmony default export */ var components_NavBar = (function () {
  return external_react_default.a.createElement(NavBar, null, external_react_default.a.createElement(NBar, null), external_react_default.a.createElement(Navigate, null), external_react_default.a.createElement(SocialNW, null), external_react_default.a.createElement(components_Logo, null));
});
// CONCATENATED MODULE: C:/Users/lahva/Desktop/ArtFolio/src/App.js


function App_templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n            margin-top:80px;\n            margin-bottom:20px;\n"]);

  App_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function App_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  body {\n    font-family:Arial, Helvetica, sans-serif;\n    margin: 0;\n    padding: 0;\n    width:100%;\n    height:100%;\n    box-sizing:border-box;\n  }\n  a {\n    text-decoration: none;\n    color: black;\n  }\n  img {\n    max-width: 100%;\n  }\n"]);

  App_templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(App_templateObject());
var Body = external_styled_components_default.a.div(App_templateObject2());

function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading...")
  }, external_react_default.a.createElement(GlobalStyle, null), external_react_default.a.createElement(LangContext["b" /* LangProvider */], null, external_react_default.a.createElement(BNav, null), external_react_default.a.createElement(components_NavBar, null), external_react_default.a.createElement(Body, null, external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))));
}

;
/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(11);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "../node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "../node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-styled-components",
  plugins: [],
  hooks: {}
}, {
  location: "..",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\lahva\\Desktop\\ArtFolio\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);




















Object(C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/404 */).then(__webpack_require__.bind(null, 25))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return "src/pages/404";
  }
}), universalOptions);
t_0.template = '../src/pages/404.js';
var t_1 = C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/about-me.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/about-me */).then(__webpack_require__.bind(null, 12))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/about-me.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return "src/pages/about-me";
  }
}), universalOptions);
t_1.template = '../src/pages/about-me.js';
var t_2 = C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/contact.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/contact */).then(__webpack_require__.bind(null, 26))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/contact.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "src/pages/contact";
  }
}), universalOptions);
t_2.template = '../src/pages/contact.js';
var t_3 = C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/en.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/en */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/en.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "src/pages/en";
  }
}), universalOptions);
t_3.template = '../src/pages/en.js';
var t_4 = C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/index */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "src/pages/index";
  }
}), universalOptions);
t_4.template = '../src/pages/index.js';
var t_5 = C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/o-me.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/o-me */).then(__webpack_require__.bind(null, 29))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/o-me.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return "src/pages/o-me";
  }
}), universalOptions);
t_5.template = '../src/pages/o-me.js';
var t_6 = C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/containers/Article",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/containers/Article */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/containers/Article');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "src/containers/Article";
  }
}), universalOptions);
t_6.template = '../src/containers/Article';
var t_7 = C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/containers/ArticleEn",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/containers/ArticleEn */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/containers/ArticleEn');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "src/containers/ArticleEn";
  }
}), universalOptions);
t_7.template = '../src/containers/ArticleEn';
var t_8 = C_Users_lahva_Desktop_ArtFolio_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/about-me",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/about-me */).then(__webpack_require__.bind(null, 12))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/about-me');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return "src/pages/about-me";
  }
}), universalOptions);
t_8.template = '../src/pages/about-me'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '../src/pages/404.js': t_0,
  '../src/pages/about-me.js': t_1,
  '../src/pages/contact.js': t_2,
  '../src/pages/en.js': t_3,
  '../src/pages/index.js': t_4,
  '../src/pages/o-me.js': t_5,
  '../src/containers/Article': t_6,
  '../src/containers/ArticleEn': t_7,
  '../src/pages/about-me': t_8 // Not Found Template

});
var notFoundTemplate = "../src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page "));
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LangContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);




var Message = function Message() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_LangContext__WEBPACK_IMPORTED_MODULE_2__[/* LangContext */ "a"]),
      _useContext2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext, 2),
      lang = _useContext2[0],
      setLang = _useContext2[1];

  switch (lang) {
    case 'en':
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "You can find news and more of my art here:");

    case 'cz':
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Novinky a dal\u0161\xED uk\xE1zky tvorby naleznete zde:");

    default:
      return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Kontakt"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "fischmeister.art@gmail.com", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "tel. 00420 607\xA0028\xA0769", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "I\u010C: 07798164"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Message, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.facebook.com/martinafischmeister/",
    target: "_blank"
  }, "Facebook"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.instagram.com/fischmeisterr/",
    target: "_blank"
  }, "Instagram"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "Behance")));
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_PortNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Portfolio = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(function (_ref) {
  var articlesEn = _ref.articlesEn;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Portfolio, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_PortNav__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    articles: articlesEn,
    lang: "en/"
  }));
}));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_PortNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nposition:relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Portfolio = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(function (_ref) {
  var articles = _ref.articles;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Portfolio, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_PortNav__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    articles: articles,
    lang: ""
  }));
}));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_construction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/*import styled from 'styled-components';*/


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_construction__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null));
});
/*const OMe=styled.div `
margin-left:auto;
margin-right:auto;
text-align:center;
max-width:900px;
`
export default () =>(
    <OMe>
    
        <h1>Martina Fischmeister *1995</h1>
        <p>


Česká ilustrátorka a malířka, žijící v Praze.

Vystudovala Art{"&"}Design Institut v Praze, pod vedením doc. Romana Franty a prof. Jiřího Lindovského.

Profesionálně se věnuje tvorbě knižní a editorial ilustrace, ale také se zabývá tvorbou komiksů a návrhů na tetování.

Její ilustrace pravidelně vycházejí v novinách Právo, v magazínu Salon a také v knihách na českém a anglickém trhu. 

Pro práce Martiny Fischmeister se nejvíce hodí slova „cool digital“.
Její ilustrace rozhodně reprezentují trend v současné české ilustraci: povšimněte si živých barev, které září skrz monitory a stejně tak magazínové stránky.
Martina má silnou kresbu a sebevědomě zachází s digitálními štětci. Snad nejvíce si je jistá v kreslení nejobávanější věci mezi ilustrátory – lidská figura a obličej.
V jejích ilustracích je rozkládá, ořezává a využívá zajímavého osvětlení. Je freerider mezi médii a její styl se hodí na různé zakázky.



</p>
    </OMe>
    )*/

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_PortNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var components_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nmargin-left:auto;\nmargin-right:auto;\ntext-align:center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Article = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(function (_ref) {
  var article = _ref.article,
      articles = _ref.articles;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Article, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Content__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    content: article
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_PortNav__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    articles: articles,
    lang: ""
  }));
}));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_PortNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var components_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\nmargin-left:auto;\nmargin-right:auto;\ntext-align:center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Article = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(function (_ref) {
  var article = _ref.article,
      articlesEn = _ref.articlesEn;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Article, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Content__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    content: article
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_PortNav__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    articles: articlesEn,
    lang: "en/"
  }));
}));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(5);

var _router = __webpack_require__(10);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)(staticInfo.path)
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
__webpack_require__(36);
module.exports = __webpack_require__(42);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(20)["default"];

var _require = __webpack_require__(21),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("C:\\Users\\lahva\\Desktop\\ArtFolio\\artifacts\\react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(20)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(21),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(22),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("C:\\Users\\lahva\\Desktop\\ArtFolio\\artifacts\\react-static-templates.js", function () {
    var _require3 = __webpack_require__(22),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(18);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 11,
	"./": 11,
	"./index": 11,
	"./index.js": 11
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 38;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(23);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(24);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(43);

var _interopRequireDefault = __webpack_require__(44);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(45));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(46));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(47);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(48)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\lahva\\Desktop\\ArtFolio\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);




/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  };

  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(49)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("animate.css/animate.min.css");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-animate-on-scroll");

/***/ })
/******/ ]);
});