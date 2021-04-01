/*!
 * @dbetka/vue-material-icons v0.2.0
 * (c) dbetka
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var materialIcons = require('material-icons');

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var check = {
  isUndefined: function isUndefined(value) {
    return typeof value === 'undefined';
  },
  isString: function isString(value) {
    return typeof value === 'string';
  },
  isNumber: function isNumber(value) {
    return typeof value === 'number';
  },
  isNull: function isNull(value) {
    return value === null;
  },
  isObject: function isObject(value) {
    return _typeof(value) === 'object' && check.isNotNull(value);
  },
  isArray: function isArray(value) {
    return Array.isArray(value);
  },
  isFunction: function isFunction(value) {
    return typeof value === 'function';
  },
  isBoolean: function isBoolean(value) {
    return typeof value === 'boolean';
  },
  isDefined: function isDefined(value) {
    return check.isUndefined(value) === false;
  },
  isNotString: function isNotString(value) {
    return check.isString(value) === false;
  },
  isNotNumber: function isNotNumber(value) {
    return check.isNumber(value) === false;
  },
  isNotNull: function isNotNull(value) {
    return check.isNull(value) === false;
  },
  isNotObject: function isNotObject(value) {
    return check.isObject(value) === false;
  },
  isNotArray: function isNotArray(value) {
    return check.isArray(value) === false;
  },
  isNotFunction: function isNotFunction(value) {
    return check.isFunction(value) === false;
  },
  isNotBoolean: function isNotBoolean(value) {
    return check.isBoolean(value) === false;
  }
};

var array = {
  removeItem: function removeItem(array, toRemove) {
    var indexToRemove = array.indexOf(toRemove);
    return array.splice(indexToRemove, 1);
  },
  removeItemByIndex: function removeItemByIndex(array, indexToRemove) {
    return array.splice(indexToRemove, 1);
  }
};

var number = {
  roundTo: function roundTo(value, precision) {
    return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
  }
};

var object = {
  /**
   * Deep merge two objects.
   * @param target
   * @param sources
   */
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();

    if (check.isObject(target) && check.isObject(source)) {
      for (var key in source) {
        if (check.isObject(source[key])) {
          if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
          object.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }

    return object.mergeDeep.apply(object, [target].concat(sources));
  }
};

var promise = {
  timeout: function timeout(_timeout) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        return resolve();
      }, _timeout);
    });
  }
};

var requestHost = '';

function makeFetch(_ref) {
  var url = _ref.url,
      config = _ref.config;
  return new Promise(function (resolve, reject) {
    fetch(url, Object.assign(Object.assign({}, config), {}, {
      headers: {
        'Content-Type': 'application/json'
      }
    })).then(resolve)["catch"](reject);
  });
}

function addBodyToConfig(config, data) {
  if (check.isDefined(data)) {
    config.body = JSON.stringify(data);
  }
}

var request = {
  setHost: function setHost(newHost) {
    requestHost = newHost;
  },
  getHost: function getHost() {
    return requestHost;
  },
  dataToPathVariables: function dataToPathVariables(data) {
    var pathData = '';

    if (Object.keys(data).length > 0) {
      pathData += '?';
      pathData += Object.entries(data).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            val = _ref3[1];

        return key + '=' + val;
      }).join('&');
    }

    return pathData;
  },
  get: function get(_ref4) {
    var _ref4$url = _ref4.url,
        url = _ref4$url === void 0 ? '/' : _ref4$url,
        _ref4$data = _ref4.data,
        data = _ref4$data === void 0 ? {} : _ref4$data,
        _ref4$config = _ref4.config,
        config = _ref4$config === void 0 ? {} : _ref4$config;
    var pathVariables = request.dataToPathVariables(data);
    var fullUrl = requestHost + url + pathVariables;
    return makeFetch({
      url: fullUrl,
      config: Object.assign({
        method: 'GET'
      }, config)
    });
  },
  post: function post(_ref5) {
    var _ref5$url = _ref5.url,
        url = _ref5$url === void 0 ? '/' : _ref5$url,
        data = _ref5.data,
        _ref5$config = _ref5.config,
        config = _ref5$config === void 0 ? {} : _ref5$config;
    var fullUrl = requestHost + url;
    addBodyToConfig(config, data);
    return makeFetch({
      url: fullUrl,
      config: Object.assign({
        method: 'POST'
      }, config)
    });
  },
  put: function put(_ref6) {
    var _ref6$url = _ref6.url,
        url = _ref6$url === void 0 ? '/' : _ref6$url,
        _ref6$data = _ref6.data,
        data = _ref6$data === void 0 ? {} : _ref6$data,
        _ref6$config = _ref6.config,
        config = _ref6$config === void 0 ? {} : _ref6$config;
    var fullUrl = requestHost + url;
    addBodyToConfig(config, data);
    return makeFetch({
      url: fullUrl,
      config: Object.assign({
        method: 'PUT'
      }, config)
    });
  },
  "delete": function _delete(_ref7) {
    var _ref7$url = _ref7.url,
        url = _ref7$url === void 0 ? '/' : _ref7$url,
        _ref7$data = _ref7.data,
        data = _ref7$data === void 0 ? {} : _ref7$data,
        _ref7$config = _ref7.config,
        config = _ref7$config === void 0 ? {} : _ref7$config;
    var fullUrl = requestHost + url;
    addBodyToConfig(config, data);
    return makeFetch({
      url: fullUrl,
      config: Object.assign({
        method: 'DELETE'
      }, config)
    });
  }
};

var validate = {
  hasNumber: function hasNumber(data) {
    return /\d/.test(data);
  },
  hasNotNumber: function hasNotNumber(data) {
    return !this.hasNumber(data);
  },
  isEmail: function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  isNotEmail: function isNotEmail(email) {
    return !this.isEmail(email);
  },
  isLonger: function isLonger(data, length) {
    return data.length > length;
  },
  isShorter: function isShorter(data, length) {
    return data && data.length ? data.length < length : true;
  },
  isNullOrEmpty: function isNullOrEmpty(data) {
    return ['', undefined, null].includes(data);
  },
  isUndefined: function isUndefined(data) {
    return check.isUndefined(data);
  },
  inRange: function inRange(value, start, end) {
    return value >= start && value <= end;
  },
  inNotRange: function inNotRange(value, start, end) {
    return !this.inRange(value, start, end);
  },
  contain: function contain(value, array) {
    return array.includes(value);
  },
  notContain: function notContain(value, array) {
    return !this.contain(value, array);
  },
  isBoolean: function isBoolean(value) {
    return check.isBoolean(value);
  },
  isNotBoolean: function isNotBoolean(value) {
    return check.isNotBoolean(value);
  }
};

var uCheck = check;
var uObject = object;
var uArray = array;
var uNumber = number;
var uPromise = promise;
var uRequest = request;
var uValidate = validate;
var index = {
  check: check,
  object: object,
  array: array,
  number: number,
  promise: promise,
  request: request,
  validate: validate
};

exports.default = index;
exports.uArray = uArray;
exports.uCheck = uCheck;
exports.uNumber = uNumber;
exports.uObject = uObject;
exports.uPromise = uPromise;
exports.uRequest = uRequest;
exports.uValidate = uValidate;

});

unwrapExports(dist);
var dist_1 = dist.uArray;
var dist_2 = dist.uCheck;
var dist_3 = dist.uNumber;
var dist_4 = dist.uObject;
var dist_5 = dist.uPromise;
var dist_6 = dist.uRequest;
var dist_7 = dist.uValidate;

//
var script = {
  name: 'a-icon',
  props: {
    type: {
      type: String,
      "default": ''
    },
    name: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      "default": undefined
    },
    filled: {
      type: Boolean
    },
    outlined: {
      type: Boolean
    },
    round: {
      type: Boolean
    },
    sharp: {
      type: Boolean
    },
    twoTone: {
      type: Boolean
    }
  },
  computed: {
    style: function style() {
      var style = '';

      if (dist_2.isDefined(this.size)) {
        style += "font-size: ".concat(this.size, "px;");
        style += "width: ".concat(this.size, "px;");
        style += "height: ".concat(this.size, "px;");
      }

      return style;
    },
    typeClassFromType: function typeClassFromType() {
      switch (this.type) {
        case materialIcons.ICONS_TYPES.filled:
          return 'f-filled';

        case materialIcons.ICONS_TYPES.outlined:
          return 'f-outlined';

        case materialIcons.ICONS_TYPES.round:
          return 'f-round';

        case materialIcons.ICONS_TYPES.sharp:
          return 'f-sharp';

        case materialIcons.ICONS_TYPES['two-tone']:
          return 'f-two-tone';

        default:
          return '';
      }
    },
    typeClassFromParams: function typeClassFromParams() {
      if (this.filled) return 'f-filled';
      if (this.outlined) return 'f-outlined';
      if (this.round) return 'f-round';
      if (this.sharp) return 'f-sharp';
      if (this.twoTone) return 'f-two-tone';else return '';
    },
    classes: function classes() {
      return [this.typeClassFromType, this.typeClassFromParams];
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('i', _vm._g({
    staticClass: "a-icon",
    "class": _vm.classes,
    style: _vm.style
  }, Object.assign({}, _vm.$listeners)), [_vm._v("\n  " + _vm._s(_vm.name) + "\n  "), _vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var ICONS = {
  '10k': '10k',
  '10mp': '10mp',
  '11mp': '11mp',
  '12mp': '12mp',
  '13mp': '13mp',
  '14mp': '14mp',
  '15mp': '15mp',
  '16mp': '16mp',
  '17mp': '17mp',
  '18mp': '18mp',
  '19mp': '19mp',
  '1k': '1k',
  '1k_plus': '1k_plus',
  '1x_mobiledata': '1x_mobiledata',
  '20mp': '20mp',
  '21mp': '21mp',
  '22mp': '22mp',
  '23mp': '23mp',
  '24mp': '24mp',
  '2k': '2k',
  '2k_plus': '2k_plus',
  '2mp': '2mp',
  '30fps': '30fps',
  '30fps_select': '30fps_select',
  '360': '360',
  '3d_rotation': '3d_rotation',
  '3g_mobiledata': '3g_mobiledata',
  '3k': '3k',
  '3k_plus': '3k_plus',
  '3mp': '3mp',
  '3p': '3p',
  '4g_mobiledata': '4g_mobiledata',
  '4g_plus_mobiledata': '4g_plus_mobiledata',
  '4k': '4k',
  '4k_plus': '4k_plus',
  '4mp': '4mp',
  '5g': '5g',
  '5k': '5k',
  '5k_plus': '5k_plus',
  '5mp': '5mp',
  '60fps': '60fps',
  '60fps_select': '60fps_select',
  '6_ft_apart': '6_ft_apart',
  '6k': '6k',
  '6k_plus': '6k_plus',
  '6mp': '6mp',
  '7k': '7k',
  '7k_plus': '7k_plus',
  '7mp': '7mp',
  '8k': '8k',
  '8k_plus': '8k_plus',
  '8mp': '8mp',
  '9k': '9k',
  '9k_plus': '9k_plus',
  '9mp': '9mp',
  'ac_unit': 'ac_unit',
  'access_alarm': 'access_alarm',
  'access_alarms': 'access_alarms',
  'access_time': 'access_time',
  'access_time_filled': 'access_time_filled',
  'accessibility': 'accessibility',
  'accessibility_new': 'accessibility_new',
  'accessible': 'accessible',
  'accessible_forward': 'accessible_forward',
  'account_balance': 'account_balance',
  'account_balance_wallet': 'account_balance_wallet',
  'account_box': 'account_box',
  'account_circle': 'account_circle',
  'account_tree': 'account_tree',
  'ad_units': 'ad_units',
  'adb': 'adb',
  'add': 'add',
  'add_a_photo': 'add_a_photo',
  'add_alarm': 'add_alarm',
  'add_alert': 'add_alert',
  'add_box': 'add_box',
  'add_business': 'add_business',
  'add_chart': 'add_chart',
  'add_circle': 'add_circle',
  'add_circle_outline': 'add_circle_outline',
  'add_comment': 'add_comment',
  'add_ic_call': 'add_ic_call',
  'add_link': 'add_link',
  'add_location': 'add_location',
  'add_location_alt': 'add_location_alt',
  'add_moderator': 'add_moderator',
  'add_photo_alternate': 'add_photo_alternate',
  'add_reaction': 'add_reaction',
  'add_road': 'add_road',
  'add_shopping_cart': 'add_shopping_cart',
  'add_task': 'add_task',
  'add_to_drive': 'add_to_drive',
  'add_to_home_screen': 'add_to_home_screen',
  'add_to_photos': 'add_to_photos',
  'add_to_queue': 'add_to_queue',
  'addchart': 'addchart',
  'adjust': 'adjust',
  'admin_panel_settings': 'admin_panel_settings',
  'agriculture': 'agriculture',
  'air': 'air',
  'airline_seat_flat': 'airline_seat_flat',
  'airline_seat_flat_angled': 'airline_seat_flat_angled',
  'airline_seat_individual_suite': 'airline_seat_individual_suite',
  'airline_seat_legroom_extra': 'airline_seat_legroom_extra',
  'airline_seat_legroom_normal': 'airline_seat_legroom_normal',
  'airline_seat_legroom_reduced': 'airline_seat_legroom_reduced',
  'airline_seat_recline_extra': 'airline_seat_recline_extra',
  'airline_seat_recline_normal': 'airline_seat_recline_normal',
  'airplane_ticket': 'airplane_ticket',
  'airplanemode_active': 'airplanemode_active',
  'airplanemode_inactive': 'airplanemode_inactive',
  'airplay': 'airplay',
  'airport_shuttle': 'airport_shuttle',
  'alarm': 'alarm',
  'alarm_add': 'alarm_add',
  'alarm_off': 'alarm_off',
  'alarm_on': 'alarm_on',
  'album': 'album',
  'align_horizontal_center': 'align_horizontal_center',
  'align_horizontal_left': 'align_horizontal_left',
  'align_horizontal_right': 'align_horizontal_right',
  'align_vertical_bottom': 'align_vertical_bottom',
  'align_vertical_center': 'align_vertical_center',
  'align_vertical_top': 'align_vertical_top',
  'all_inbox': 'all_inbox',
  'all_inclusive': 'all_inclusive',
  'all_out': 'all_out',
  'alt_route': 'alt_route',
  'alternate_email': 'alternate_email',
  'analytics': 'analytics',
  'anchor': 'anchor',
  'android': 'android',
  'animation': 'animation',
  'announcement': 'announcement',
  'aod': 'aod',
  'apartment': 'apartment',
  'api': 'api',
  'app_blocking': 'app_blocking',
  'app_registration': 'app_registration',
  'app_settings_alt': 'app_settings_alt',
  'approval': 'approval',
  'apps': 'apps',
  'architecture': 'architecture',
  'archive': 'archive',
  'arrow_back': 'arrow_back',
  'arrow_back_ios': 'arrow_back_ios',
  'arrow_back_ios_new': 'arrow_back_ios_new',
  'arrow_circle_down': 'arrow_circle_down',
  'arrow_circle_up': 'arrow_circle_up',
  'arrow_downward': 'arrow_downward',
  'arrow_drop_down': 'arrow_drop_down',
  'arrow_drop_down_circle': 'arrow_drop_down_circle',
  'arrow_drop_up': 'arrow_drop_up',
  'arrow_forward': 'arrow_forward',
  'arrow_forward_ios': 'arrow_forward_ios',
  'arrow_left': 'arrow_left',
  'arrow_right': 'arrow_right',
  'arrow_right_alt': 'arrow_right_alt',
  'arrow_upward': 'arrow_upward',
  'art_track': 'art_track',
  'article': 'article',
  'aspect_ratio': 'aspect_ratio',
  'assessment': 'assessment',
  'assignment': 'assignment',
  'assignment_ind': 'assignment_ind',
  'assignment_late': 'assignment_late',
  'assignment_return': 'assignment_return',
  'assignment_returned': 'assignment_returned',
  'assignment_turned_in': 'assignment_turned_in',
  'assistant': 'assistant',
  'assistant_direction': 'assistant_direction',
  'assistant_photo': 'assistant_photo',
  'atm': 'atm',
  'attach_email': 'attach_email',
  'attach_file': 'attach_file',
  'attach_money': 'attach_money',
  'attachment': 'attachment',
  'attractions': 'attractions',
  'attribution': 'attribution',
  'audiotrack': 'audiotrack',
  'auto_awesome': 'auto_awesome',
  'auto_awesome_mosaic': 'auto_awesome_mosaic',
  'auto_awesome_motion': 'auto_awesome_motion',
  'auto_delete': 'auto_delete',
  'auto_fix_high': 'auto_fix_high',
  'auto_fix_normal': 'auto_fix_normal',
  'auto_fix_off': 'auto_fix_off',
  'auto_graph': 'auto_graph',
  'auto_stories': 'auto_stories',
  'autofps_select': 'autofps_select',
  'autorenew': 'autorenew',
  'av_timer': 'av_timer',
  'baby_changing_station': 'baby_changing_station',
  'backpack': 'backpack',
  'backspace': 'backspace',
  'backup': 'backup',
  'backup_table': 'backup_table',
  'badge': 'badge',
  'bakery_dining': 'bakery_dining',
  'balcony': 'balcony',
  'ballot': 'ballot',
  'bar_chart': 'bar_chart',
  'batch_prediction': 'batch_prediction',
  'bathroom': 'bathroom',
  'bathtub': 'bathtub',
  'battery_alert': 'battery_alert',
  'battery_charging_full': 'battery_charging_full',
  'battery_full': 'battery_full',
  'battery_saver': 'battery_saver',
  'battery_std': 'battery_std',
  'battery_unknown': 'battery_unknown',
  'beach_access': 'beach_access',
  'bed': 'bed',
  'bedroom_baby': 'bedroom_baby',
  'bedroom_child': 'bedroom_child',
  'bedroom_parent': 'bedroom_parent',
  'bedtime': 'bedtime',
  'beenhere': 'beenhere',
  'bento': 'bento',
  'bike_scooter': 'bike_scooter',
  'biotech': 'biotech',
  'blender': 'blender',
  'block': 'block',
  'bloodtype': 'bloodtype',
  'bluetooth': 'bluetooth',
  'bluetooth_audio': 'bluetooth_audio',
  'bluetooth_connected': 'bluetooth_connected',
  'bluetooth_disabled': 'bluetooth_disabled',
  'bluetooth_drive': 'bluetooth_drive',
  'bluetooth_searching': 'bluetooth_searching',
  'blur_circular': 'blur_circular',
  'blur_linear': 'blur_linear',
  'blur_off': 'blur_off',
  'blur_on': 'blur_on',
  'bolt': 'bolt',
  'book': 'book',
  'book_online': 'book_online',
  'bookmark': 'bookmark',
  'bookmark_add': 'bookmark_add',
  'bookmark_added': 'bookmark_added',
  'bookmark_border': 'bookmark_border',
  'bookmark_remove': 'bookmark_remove',
  'bookmarks': 'bookmarks',
  'border_all': 'border_all',
  'border_bottom': 'border_bottom',
  'border_clear': 'border_clear',
  'border_color': 'border_color',
  'border_horizontal': 'border_horizontal',
  'border_inner': 'border_inner',
  'border_left': 'border_left',
  'border_outer': 'border_outer',
  'border_right': 'border_right',
  'border_style': 'border_style',
  'border_top': 'border_top',
  'border_vertical': 'border_vertical',
  'branding_watermark': 'branding_watermark',
  'breakfast_dining': 'breakfast_dining',
  'brightness_1': 'brightness_1',
  'brightness_2': 'brightness_2',
  'brightness_3': 'brightness_3',
  'brightness_4': 'brightness_4',
  'brightness_5': 'brightness_5',
  'brightness_6': 'brightness_6',
  'brightness_7': 'brightness_7',
  'brightness_auto': 'brightness_auto',
  'brightness_high': 'brightness_high',
  'brightness_low': 'brightness_low',
  'brightness_medium': 'brightness_medium',
  'broken_image': 'broken_image',
  'browser_not_supported': 'browser_not_supported',
  'brunch_dining': 'brunch_dining',
  'brush': 'brush',
  'bubble_chart': 'bubble_chart',
  'bug_report': 'bug_report',
  'build': 'build',
  'build_circle': 'build_circle',
  'bungalow': 'bungalow',
  'burst_mode': 'burst_mode',
  'bus_alert': 'bus_alert',
  'business': 'business',
  'business_center': 'business_center',
  'cabin': 'cabin',
  'cable': 'cable',
  'cached': 'cached',
  'cake': 'cake',
  'calculate': 'calculate',
  'calendar_today': 'calendar_today',
  'calendar_view_day': 'calendar_view_day',
  'calendar_view_month': 'calendar_view_month',
  'calendar_view_week': 'calendar_view_week',
  'call': 'call',
  'call_end': 'call_end',
  'call_made': 'call_made',
  'call_merge': 'call_merge',
  'call_missed': 'call_missed',
  'call_missed_outgoing': 'call_missed_outgoing',
  'call_received': 'call_received',
  'call_split': 'call_split',
  'call_to_action': 'call_to_action',
  'camera': 'camera',
  'camera_alt': 'camera_alt',
  'camera_enhance': 'camera_enhance',
  'camera_front': 'camera_front',
  'camera_indoor': 'camera_indoor',
  'camera_outdoor': 'camera_outdoor',
  'camera_rear': 'camera_rear',
  'camera_roll': 'camera_roll',
  'cameraswitch': 'cameraswitch',
  'campaign': 'campaign',
  'cancel': 'cancel',
  'cancel_presentation': 'cancel_presentation',
  'cancel_schedule_send': 'cancel_schedule_send',
  'car_rental': 'car_rental',
  'car_repair': 'car_repair',
  'card_giftcard': 'card_giftcard',
  'card_membership': 'card_membership',
  'card_travel': 'card_travel',
  'carpenter': 'carpenter',
  'cases': 'cases',
  'casino': 'casino',
  'cast': 'cast',
  'cast_connected': 'cast_connected',
  'cast_for_education': 'cast_for_education',
  'catching_pokemon': 'catching_pokemon',
  'category': 'category',
  'celebration': 'celebration',
  'cell_wifi': 'cell_wifi',
  'center_focus_strong': 'center_focus_strong',
  'center_focus_weak': 'center_focus_weak',
  'chair': 'chair',
  'chair_alt': 'chair_alt',
  'chalet': 'chalet',
  'change_circle': 'change_circle',
  'change_history': 'change_history',
  'charging_station': 'charging_station',
  'chat': 'chat',
  'chat_bubble': 'chat_bubble',
  'chat_bubble_outline': 'chat_bubble_outline',
  'check': 'check',
  'check_box': 'check_box',
  'check_box_outline_blank': 'check_box_outline_blank',
  'check_circle': 'check_circle',
  'check_circle_outline': 'check_circle_outline',
  'checklist': 'checklist',
  'checklist_rtl': 'checklist_rtl',
  'checkroom': 'checkroom',
  'chevron_left': 'chevron_left',
  'chevron_right': 'chevron_right',
  'child_care': 'child_care',
  'child_friendly': 'child_friendly',
  'chrome_reader_mode': 'chrome_reader_mode',
  'circle': 'circle',
  'circle_notifications': 'circle_notifications',
  'class': 'class',
  'clean_hands': 'clean_hands',
  'cleaning_services': 'cleaning_services',
  'clear': 'clear',
  'clear_all': 'clear_all',
  'close': 'close',
  'close_fullscreen': 'close_fullscreen',
  'closed_caption': 'closed_caption',
  'closed_caption_disabled': 'closed_caption_disabled',
  'closed_caption_off': 'closed_caption_off',
  'cloud': 'cloud',
  'cloud_circle': 'cloud_circle',
  'cloud_done': 'cloud_done',
  'cloud_download': 'cloud_download',
  'cloud_off': 'cloud_off',
  'cloud_queue': 'cloud_queue',
  'cloud_upload': 'cloud_upload',
  'code': 'code',
  'code_off': 'code_off',
  'coffee': 'coffee',
  'coffee_maker': 'coffee_maker',
  'collections': 'collections',
  'collections_bookmark': 'collections_bookmark',
  'color_lens': 'color_lens',
  'colorize': 'colorize',
  'comment': 'comment',
  'comment_bank': 'comment_bank',
  'commute': 'commute',
  'compare': 'compare',
  'compare_arrows': 'compare_arrows',
  'compass_calibration': 'compass_calibration',
  'compress': 'compress',
  'computer': 'computer',
  'confirmation_number': 'confirmation_number',
  'connect_without_contact': 'connect_without_contact',
  'connected_tv': 'connected_tv',
  'construction': 'construction',
  'contact_mail': 'contact_mail',
  'contact_page': 'contact_page',
  'contact_phone': 'contact_phone',
  'contact_support': 'contact_support',
  'contactless': 'contactless',
  'contacts': 'contacts',
  'content_copy': 'content_copy',
  'content_cut': 'content_cut',
  'content_paste': 'content_paste',
  'content_paste_off': 'content_paste_off',
  'control_camera': 'control_camera',
  'control_point': 'control_point',
  'control_point_duplicate': 'control_point_duplicate',
  'copy_all': 'copy_all',
  'copyright': 'copyright',
  'coronavirus': 'coronavirus',
  'corporate_fare': 'corporate_fare',
  'cottage': 'cottage',
  'countertops': 'countertops',
  'create': 'create',
  'create_new_folder': 'create_new_folder',
  'credit_card': 'credit_card',
  'credit_card_off': 'credit_card_off',
  'credit_score': 'credit_score',
  'crib': 'crib',
  'crop': 'crop',
  'crop_16_9': 'crop_16_9',
  'crop_3_2': 'crop_3_2',
  'crop_5_4': 'crop_5_4',
  'crop_7_5': 'crop_7_5',
  'crop_din': 'crop_din',
  'crop_free': 'crop_free',
  'crop_landscape': 'crop_landscape',
  'crop_original': 'crop_original',
  'crop_portrait': 'crop_portrait',
  'crop_rotate': 'crop_rotate',
  'crop_square': 'crop_square',
  'dangerous': 'dangerous',
  'dark_mode': 'dark_mode',
  'dashboard': 'dashboard',
  'dashboard_customize': 'dashboard_customize',
  'data_saver_off': 'data_saver_off',
  'data_saver_on': 'data_saver_on',
  'data_usage': 'data_usage',
  'date_range': 'date_range',
  'deck': 'deck',
  'dehaze': 'dehaze',
  'delete': 'delete',
  'delete_forever': 'delete_forever',
  'delete_outline': 'delete_outline',
  'delete_sweep': 'delete_sweep',
  'delivery_dining': 'delivery_dining',
  'departure_board': 'departure_board',
  'description': 'description',
  'design_services': 'design_services',
  'desktop_access_disabled': 'desktop_access_disabled',
  'desktop_mac': 'desktop_mac',
  'desktop_windows': 'desktop_windows',
  'details': 'details',
  'developer_board': 'developer_board',
  'developer_board_off': 'developer_board_off',
  'developer_mode': 'developer_mode',
  'device_hub': 'device_hub',
  'device_thermostat': 'device_thermostat',
  'device_unknown': 'device_unknown',
  'devices': 'devices',
  'devices_other': 'devices_other',
  'dialer_sip': 'dialer_sip',
  'dialpad': 'dialpad',
  'dining': 'dining',
  'dinner_dining': 'dinner_dining',
  'directions': 'directions',
  'directions_bike': 'directions_bike',
  'directions_boat': 'directions_boat',
  'directions_boat_filled': 'directions_boat_filled',
  'directions_bus': 'directions_bus',
  'directions_bus_filled': 'directions_bus_filled',
  'directions_car': 'directions_car',
  'directions_car_filled': 'directions_car_filled',
  'directions_off': 'directions_off',
  'directions_railway': 'directions_railway',
  'directions_railway_filled': 'directions_railway_filled',
  'directions_run': 'directions_run',
  'directions_subway': 'directions_subway',
  'directions_subway_filled': 'directions_subway_filled',
  'directions_transit': 'directions_transit',
  'directions_transit_filled': 'directions_transit_filled',
  'directions_walk': 'directions_walk',
  'dirty_lens': 'dirty_lens',
  'disabled_by_default': 'disabled_by_default',
  'disc_full': 'disc_full',
  'dns': 'dns',
  'do_disturb': 'do_disturb',
  'do_disturb_alt': 'do_disturb_alt',
  'do_disturb_off': 'do_disturb_off',
  'do_disturb_on': 'do_disturb_on',
  'do_not_disturb': 'do_not_disturb',
  'do_not_disturb_alt': 'do_not_disturb_alt',
  'do_not_disturb_off': 'do_not_disturb_off',
  'do_not_disturb_on': 'do_not_disturb_on',
  'do_not_disturb_on_total_silence': 'do_not_disturb_on_total_silence',
  'do_not_step': 'do_not_step',
  'do_not_touch': 'do_not_touch',
  'dock': 'dock',
  'document_scanner': 'document_scanner',
  'domain': 'domain',
  'domain_disabled': 'domain_disabled',
  'domain_verification': 'domain_verification',
  'done': 'done',
  'done_all': 'done_all',
  'done_outline': 'done_outline',
  'donut_large': 'donut_large',
  'donut_small': 'donut_small',
  'door_back': 'door_back',
  'door_front': 'door_front',
  'door_sliding': 'door_sliding',
  'doorbell': 'doorbell',
  'double_arrow': 'double_arrow',
  'downhill_skiing': 'downhill_skiing',
  'download': 'download',
  'download_done': 'download_done',
  'download_for_offline': 'download_for_offline',
  'downloading': 'downloading',
  'drafts': 'drafts',
  'drag_handle': 'drag_handle',
  'drag_indicator': 'drag_indicator',
  'draw': 'draw',
  'drive_eta': 'drive_eta',
  'drive_file_move': 'drive_file_move',
  'drive_file_rename_outline': 'drive_file_rename_outline',
  'drive_folder_upload': 'drive_folder_upload',
  'dry': 'dry',
  'dry_cleaning': 'dry_cleaning',
  'duo': 'duo',
  'dvr': 'dvr',
  'dynamic_feed': 'dynamic_feed',
  'dynamic_form': 'dynamic_form',
  'e_mobiledata': 'e_mobiledata',
  'earbuds': 'earbuds',
  'earbuds_battery': 'earbuds_battery',
  'east': 'east',
  'eco': 'eco',
  'edgesensor_high': 'edgesensor_high',
  'edgesensor_low': 'edgesensor_low',
  'edit': 'edit',
  'edit_attributes': 'edit_attributes',
  'edit_calendar': 'edit_calendar',
  'edit_location': 'edit_location',
  'edit_location_alt': 'edit_location_alt',
  'edit_note': 'edit_note',
  'edit_notifications': 'edit_notifications',
  'edit_off': 'edit_off',
  'edit_road': 'edit_road',
  'eject': 'eject',
  'elderly': 'elderly',
  'electric_bike': 'electric_bike',
  'electric_car': 'electric_car',
  'electric_moped': 'electric_moped',
  'electric_rickshaw': 'electric_rickshaw',
  'electric_scooter': 'electric_scooter',
  'electrical_services': 'electrical_services',
  'elevator': 'elevator',
  'email': 'email',
  'emergency': 'emergency',
  'emoji_emotions': 'emoji_emotions',
  'emoji_events': 'emoji_events',
  'emoji_flags': 'emoji_flags',
  'emoji_food_beverage': 'emoji_food_beverage',
  'emoji_nature': 'emoji_nature',
  'emoji_objects': 'emoji_objects',
  'emoji_people': 'emoji_people',
  'emoji_symbols': 'emoji_symbols',
  'emoji_transportation': 'emoji_transportation',
  'engineering': 'engineering',
  'enhanced_encryption': 'enhanced_encryption',
  'equalizer': 'equalizer',
  'error': 'error',
  'error_outline': 'error_outline',
  'escalator': 'escalator',
  'escalator_warning': 'escalator_warning',
  'euro': 'euro',
  'euro_symbol': 'euro_symbol',
  'ev_station': 'ev_station',
  'event': 'event',
  'event_available': 'event_available',
  'event_busy': 'event_busy',
  'event_note': 'event_note',
  'event_seat': 'event_seat',
  'exit_to_app': 'exit_to_app',
  'expand': 'expand',
  'expand_less': 'expand_less',
  'expand_more': 'expand_more',
  'explicit': 'explicit',
  'explore': 'explore',
  'explore_off': 'explore_off',
  'exposure': 'exposure',
  'exposure_neg_1': 'exposure_neg_1',
  'exposure_neg_2': 'exposure_neg_2',
  'exposure_plus_1': 'exposure_plus_1',
  'exposure_plus_2': 'exposure_plus_2',
  'exposure_zero': 'exposure_zero',
  'extension': 'extension',
  'extension_off': 'extension_off',
  'face': 'face',
  'face_retouching_natural': 'face_retouching_natural',
  'face_retouching_off': 'face_retouching_off',
  'facebook': 'facebook',
  'fact_check': 'fact_check',
  'family_restroom': 'family_restroom',
  'fast_forward': 'fast_forward',
  'fast_rewind': 'fast_rewind',
  'fastfood': 'fastfood',
  'favorite': 'favorite',
  'favorite_border': 'favorite_border',
  'featured_play_list': 'featured_play_list',
  'featured_video': 'featured_video',
  'feed': 'feed',
  'feedback': 'feedback',
  'female': 'female',
  'fence': 'fence',
  'festival': 'festival',
  'fiber_dvr': 'fiber_dvr',
  'fiber_manual_record': 'fiber_manual_record',
  'fiber_new': 'fiber_new',
  'fiber_pin': 'fiber_pin',
  'fiber_smart_record': 'fiber_smart_record',
  'file_copy': 'file_copy',
  'file_download': 'file_download',
  'file_download_done': 'file_download_done',
  'file_download_off': 'file_download_off',
  'file_present': 'file_present',
  'file_upload': 'file_upload',
  'filter': 'filter',
  'filter_1': 'filter_1',
  'filter_2': 'filter_2',
  'filter_3': 'filter_3',
  'filter_4': 'filter_4',
  'filter_5': 'filter_5',
  'filter_6': 'filter_6',
  'filter_7': 'filter_7',
  'filter_8': 'filter_8',
  'filter_9': 'filter_9',
  'filter_9_plus': 'filter_9_plus',
  'filter_alt': 'filter_alt',
  'filter_b_and_w': 'filter_b_and_w',
  'filter_center_focus': 'filter_center_focus',
  'filter_drama': 'filter_drama',
  'filter_frames': 'filter_frames',
  'filter_hdr': 'filter_hdr',
  'filter_list': 'filter_list',
  'filter_none': 'filter_none',
  'filter_tilt_shift': 'filter_tilt_shift',
  'filter_vintage': 'filter_vintage',
  'find_in_page': 'find_in_page',
  'find_replace': 'find_replace',
  'fingerprint': 'fingerprint',
  'fire_extinguisher': 'fire_extinguisher',
  'fireplace': 'fireplace',
  'first_page': 'first_page',
  'fit_screen': 'fit_screen',
  'fitness_center': 'fitness_center',
  'flag': 'flag',
  'flaky': 'flaky',
  'flare': 'flare',
  'flash_auto': 'flash_auto',
  'flash_off': 'flash_off',
  'flash_on': 'flash_on',
  'flashlight_off': 'flashlight_off',
  'flashlight_on': 'flashlight_on',
  'flatware': 'flatware',
  'flight': 'flight',
  'flight_land': 'flight_land',
  'flight_takeoff': 'flight_takeoff',
  'flip': 'flip',
  'flip_camera_android': 'flip_camera_android',
  'flip_camera_ios': 'flip_camera_ios',
  'flip_to_back': 'flip_to_back',
  'flip_to_front': 'flip_to_front',
  'flourescent': 'flourescent',
  'flutter_dash': 'flutter_dash',
  'fmd_bad': 'fmd_bad',
  'fmd_good': 'fmd_good',
  'folder': 'folder',
  'folder_open': 'folder_open',
  'folder_shared': 'folder_shared',
  'folder_special': 'folder_special',
  'follow_the_signs': 'follow_the_signs',
  'font_download': 'font_download',
  'font_download_off': 'font_download_off',
  'food_bank': 'food_bank',
  'format_align_center': 'format_align_center',
  'format_align_justify': 'format_align_justify',
  'format_align_left': 'format_align_left',
  'format_align_right': 'format_align_right',
  'format_bold': 'format_bold',
  'format_clear': 'format_clear',
  'format_color_fill': 'format_color_fill',
  'format_color_reset': 'format_color_reset',
  'format_color_text': 'format_color_text',
  'format_indent_decrease': 'format_indent_decrease',
  'format_indent_increase': 'format_indent_increase',
  'format_italic': 'format_italic',
  'format_line_spacing': 'format_line_spacing',
  'format_list_bulleted': 'format_list_bulleted',
  'format_list_numbered': 'format_list_numbered',
  'format_list_numbered_rtl': 'format_list_numbered_rtl',
  'format_paint': 'format_paint',
  'format_quote': 'format_quote',
  'format_shapes': 'format_shapes',
  'format_size': 'format_size',
  'format_strikethrough': 'format_strikethrough',
  'format_textdirection_l_to_r': 'format_textdirection_l_to_r',
  'format_textdirection_r_to_l': 'format_textdirection_r_to_l',
  'format_underlined': 'format_underlined',
  'forum': 'forum',
  'forward': 'forward',
  'forward_10': 'forward_10',
  'forward_30': 'forward_30',
  'forward_5': 'forward_5',
  'forward_to_inbox': 'forward_to_inbox',
  'foundation': 'foundation',
  'free_breakfast': 'free_breakfast',
  'free_cancellation': 'free_cancellation',
  'fullscreen': 'fullscreen',
  'fullscreen_exit': 'fullscreen_exit',
  'functions': 'functions',
  'g_mobiledata': 'g_mobiledata',
  'g_translate': 'g_translate',
  'gamepad': 'gamepad',
  'games': 'games',
  'garage': 'garage',
  'gavel': 'gavel',
  'generating_tokens': 'generating_tokens',
  'gesture': 'gesture',
  'get_app': 'get_app',
  'gif': 'gif',
  'gite': 'gite',
  'golf_course': 'golf_course',
  'gpp_bad': 'gpp_bad',
  'gpp_good': 'gpp_good',
  'gpp_maybe': 'gpp_maybe',
  'gps_fixed': 'gps_fixed',
  'gps_not_fixed': 'gps_not_fixed',
  'gps_off': 'gps_off',
  'grade': 'grade',
  'gradient': 'gradient',
  'grading': 'grading',
  'grain': 'grain',
  'graphic_eq': 'graphic_eq',
  'grass': 'grass',
  'grid_3x3': 'grid_3x3',
  'grid_4x4': 'grid_4x4',
  'grid_goldenratio': 'grid_goldenratio',
  'grid_off': 'grid_off',
  'grid_on': 'grid_on',
  'grid_view': 'grid_view',
  'group': 'group',
  'group_add': 'group_add',
  'group_off': 'group_off',
  'group_work': 'group_work',
  'groups': 'groups',
  'h_mobiledata': 'h_mobiledata',
  'h_plus_mobiledata': 'h_plus_mobiledata',
  'hail': 'hail',
  'handyman': 'handyman',
  'hardware': 'hardware',
  'hd': 'hd',
  'hdr_auto': 'hdr_auto',
  'hdr_auto_select': 'hdr_auto_select',
  'hdr_enhanced_select': 'hdr_enhanced_select',
  'hdr_off': 'hdr_off',
  'hdr_off_select': 'hdr_off_select',
  'hdr_on': 'hdr_on',
  'hdr_on_select': 'hdr_on_select',
  'hdr_plus': 'hdr_plus',
  'hdr_strong': 'hdr_strong',
  'hdr_weak': 'hdr_weak',
  'headphones': 'headphones',
  'headphones_battery': 'headphones_battery',
  'headset': 'headset',
  'headset_mic': 'headset_mic',
  'headset_off': 'headset_off',
  'healing': 'healing',
  'health_and_safety': 'health_and_safety',
  'hearing': 'hearing',
  'hearing_disabled': 'hearing_disabled',
  'height': 'height',
  'help': 'help',
  'help_center': 'help_center',
  'help_outline': 'help_outline',
  'hevc': 'hevc',
  'hide_image': 'hide_image',
  'hide_source': 'hide_source',
  'high_quality': 'high_quality',
  'highlight': 'highlight',
  'highlight_alt': 'highlight_alt',
  'highlight_off': 'highlight_off',
  'hiking': 'hiking',
  'history': 'history',
  'history_edu': 'history_edu',
  'history_toggle_off': 'history_toggle_off',
  'holiday_village': 'holiday_village',
  'home': 'home',
  'home_max': 'home_max',
  'home_mini': 'home_mini',
  'home_repair_service': 'home_repair_service',
  'home_work': 'home_work',
  'horizontal_distribute': 'horizontal_distribute',
  'horizontal_rule': 'horizontal_rule',
  'horizontal_split': 'horizontal_split',
  'hot_tub': 'hot_tub',
  'hotel': 'hotel',
  'hotel_class': 'hotel_class',
  'hourglass_bottom': 'hourglass_bottom',
  'hourglass_disabled': 'hourglass_disabled',
  'hourglass_empty': 'hourglass_empty',
  'hourglass_full': 'hourglass_full',
  'hourglass_top': 'hourglass_top',
  'house': 'house',
  'house_siding': 'house_siding',
  'houseboat': 'houseboat',
  'how_to_reg': 'how_to_reg',
  'how_to_vote': 'how_to_vote',
  'http': 'http',
  'https': 'https',
  'hvac': 'hvac',
  'ice_skating': 'ice_skating',
  'icecream': 'icecream',
  'image': 'image',
  'image_aspect_ratio': 'image_aspect_ratio',
  'image_not_supported': 'image_not_supported',
  'image_search': 'image_search',
  'imagesearch_roller': 'imagesearch_roller',
  'import_contacts': 'import_contacts',
  'import_export': 'import_export',
  'important_devices': 'important_devices',
  'inbox': 'inbox',
  'indeterminate_check_box': 'indeterminate_check_box',
  'info': 'info',
  'input': 'input',
  'insert_chart': 'insert_chart',
  'insert_chart_outlined': 'insert_chart_outlined',
  'insert_comment': 'insert_comment',
  'insert_drive_file': 'insert_drive_file',
  'insert_emoticon': 'insert_emoticon',
  'insert_invitation': 'insert_invitation',
  'insert_link': 'insert_link',
  'insert_photo': 'insert_photo',
  'insights': 'insights',
  'integration_instructions': 'integration_instructions',
  'inventory': 'inventory',
  'inventory_2': 'inventory_2',
  'invert_colors': 'invert_colors',
  'invert_colors_off': 'invert_colors_off',
  'ios_share': 'ios_share',
  'iron': 'iron',
  'iso': 'iso',
  'kayaking': 'kayaking',
  'keyboard': 'keyboard',
  'keyboard_alt': 'keyboard_alt',
  'keyboard_arrow_down': 'keyboard_arrow_down',
  'keyboard_arrow_left': 'keyboard_arrow_left',
  'keyboard_arrow_right': 'keyboard_arrow_right',
  'keyboard_arrow_up': 'keyboard_arrow_up',
  'keyboard_backspace': 'keyboard_backspace',
  'keyboard_capslock': 'keyboard_capslock',
  'keyboard_hide': 'keyboard_hide',
  'keyboard_return': 'keyboard_return',
  'keyboard_tab': 'keyboard_tab',
  'keyboard_voice': 'keyboard_voice',
  'king_bed': 'king_bed',
  'kitchen': 'kitchen',
  'kitesurfing': 'kitesurfing',
  'label': 'label',
  'label_important': 'label_important',
  'label_off': 'label_off',
  'landscape': 'landscape',
  'language': 'language',
  'laptop': 'laptop',
  'laptop_chromebook': 'laptop_chromebook',
  'laptop_mac': 'laptop_mac',
  'laptop_windows': 'laptop_windows',
  'last_page': 'last_page',
  'launch': 'launch',
  'layers': 'layers',
  'layers_clear': 'layers_clear',
  'leaderboard': 'leaderboard',
  'leak_add': 'leak_add',
  'leak_remove': 'leak_remove',
  'legend_toggle': 'legend_toggle',
  'lens': 'lens',
  'lens_blur': 'lens_blur',
  'library_add': 'library_add',
  'library_add_check': 'library_add_check',
  'library_books': 'library_books',
  'library_music': 'library_music',
  'light': 'light',
  'light_mode': 'light_mode',
  'lightbulb': 'lightbulb',
  'line_style': 'line_style',
  'line_weight': 'line_weight',
  'linear_scale': 'linear_scale',
  'link': 'link',
  'link_off': 'link_off',
  'linked_camera': 'linked_camera',
  'liquor': 'liquor',
  'list': 'list',
  'list_alt': 'list_alt',
  'live_help': 'live_help',
  'live_tv': 'live_tv',
  'living': 'living',
  'local_activity': 'local_activity',
  'local_airport': 'local_airport',
  'local_atm': 'local_atm',
  'local_bar': 'local_bar',
  'local_cafe': 'local_cafe',
  'local_car_wash': 'local_car_wash',
  'local_convenience_store': 'local_convenience_store',
  'local_dining': 'local_dining',
  'local_drink': 'local_drink',
  'local_fire_department': 'local_fire_department',
  'local_florist': 'local_florist',
  'local_gas_station': 'local_gas_station',
  'local_grocery_store': 'local_grocery_store',
  'local_hospital': 'local_hospital',
  'local_hotel': 'local_hotel',
  'local_laundry_service': 'local_laundry_service',
  'local_library': 'local_library',
  'local_mall': 'local_mall',
  'local_movies': 'local_movies',
  'local_offer': 'local_offer',
  'local_parking': 'local_parking',
  'local_pharmacy': 'local_pharmacy',
  'local_phone': 'local_phone',
  'local_pizza': 'local_pizza',
  'local_play': 'local_play',
  'local_police': 'local_police',
  'local_post_office': 'local_post_office',
  'local_printshop': 'local_printshop',
  'local_see': 'local_see',
  'local_shipping': 'local_shipping',
  'local_taxi': 'local_taxi',
  'location_city': 'location_city',
  'location_disabled': 'location_disabled',
  'location_off': 'location_off',
  'location_on': 'location_on',
  'location_searching': 'location_searching',
  'lock': 'lock',
  'lock_clock': 'lock_clock',
  'lock_open': 'lock_open',
  'login': 'login',
  'logout': 'logout',
  'looks': 'looks',
  'looks_3': 'looks_3',
  'looks_4': 'looks_4',
  'looks_5': 'looks_5',
  'looks_6': 'looks_6',
  'looks_one': 'looks_one',
  'looks_two': 'looks_two',
  'loop': 'loop',
  'loupe': 'loupe',
  'low_priority': 'low_priority',
  'loyalty': 'loyalty',
  'lte_mobiledata': 'lte_mobiledata',
  'lte_plus_mobiledata': 'lte_plus_mobiledata',
  'luggage': 'luggage',
  'lunch_dining': 'lunch_dining',
  'mail': 'mail',
  'mail_outline': 'mail_outline',
  'male': 'male',
  'manage_accounts': 'manage_accounts',
  'manage_search': 'manage_search',
  'map': 'map',
  'maps_home_work': 'maps_home_work',
  'maps_ugc': 'maps_ugc',
  'margin': 'margin',
  'mark_as_unread': 'mark_as_unread',
  'mark_chat_read': 'mark_chat_read',
  'mark_chat_unread': 'mark_chat_unread',
  'mark_email_read': 'mark_email_read',
  'mark_email_unread': 'mark_email_unread',
  'markunread': 'markunread',
  'markunread_mailbox': 'markunread_mailbox',
  'masks': 'masks',
  'maximize': 'maximize',
  'media_bluetooth_off': 'media_bluetooth_off',
  'media_bluetooth_on': 'media_bluetooth_on',
  'mediation': 'mediation',
  'medical_services': 'medical_services',
  'medication': 'medication',
  'meeting_room': 'meeting_room',
  'memory': 'memory',
  'menu': 'menu',
  'menu_book': 'menu_book',
  'menu_open': 'menu_open',
  'merge_type': 'merge_type',
  'message': 'message',
  'mic': 'mic',
  'mic_external_off': 'mic_external_off',
  'mic_external_on': 'mic_external_on',
  'mic_none': 'mic_none',
  'mic_off': 'mic_off',
  'microwave': 'microwave',
  'military_tech': 'military_tech',
  'minimize': 'minimize',
  'miscellaneous_services': 'miscellaneous_services',
  'missed_video_call': 'missed_video_call',
  'mms': 'mms',
  'mobile_friendly': 'mobile_friendly',
  'mobile_off': 'mobile_off',
  'mobile_screen_share': 'mobile_screen_share',
  'mobiledata_off': 'mobiledata_off',
  'mode': 'mode',
  'mode_comment': 'mode_comment',
  'mode_edit': 'mode_edit',
  'mode_edit_outline': 'mode_edit_outline',
  'mode_night': 'mode_night',
  'mode_standby': 'mode_standby',
  'model_training': 'model_training',
  'monetization_on': 'monetization_on',
  'money': 'money',
  'money_off': 'money_off',
  'money_off_csred': 'money_off_csred',
  'monitor': 'monitor',
  'monitor_weight': 'monitor_weight',
  'monochrome_photos': 'monochrome_photos',
  'mood': 'mood',
  'mood_bad': 'mood_bad',
  'moped': 'moped',
  'more': 'more',
  'more_horiz': 'more_horiz',
  'more_time': 'more_time',
  'more_vert': 'more_vert',
  'motion_photos_auto': 'motion_photos_auto',
  'motion_photos_off': 'motion_photos_off',
  'motion_photos_on': 'motion_photos_on',
  'motion_photos_pause': 'motion_photos_pause',
  'motion_photos_paused': 'motion_photos_paused',
  'mouse': 'mouse',
  'move_to_inbox': 'move_to_inbox',
  'movie': 'movie',
  'movie_creation': 'movie_creation',
  'movie_filter': 'movie_filter',
  'moving': 'moving',
  'mp': 'mp',
  'multiline_chart': 'multiline_chart',
  'multiple_stop': 'multiple_stop',
  'museum': 'museum',
  'music_note': 'music_note',
  'music_off': 'music_off',
  'music_video': 'music_video',
  'my_location': 'my_location',
  'nat': 'nat',
  'nature': 'nature',
  'nature_people': 'nature_people',
  'navigate_before': 'navigate_before',
  'navigate_next': 'navigate_next',
  'navigation': 'navigation',
  'near_me': 'near_me',
  'near_me_disabled': 'near_me_disabled',
  'nearby_error': 'nearby_error',
  'nearby_off': 'nearby_off',
  'network_cell': 'network_cell',
  'network_check': 'network_check',
  'network_locked': 'network_locked',
  'network_wifi': 'network_wifi',
  'new_label': 'new_label',
  'new_releases': 'new_releases',
  'next_plan': 'next_plan',
  'next_week': 'next_week',
  'nfc': 'nfc',
  'night_shelter': 'night_shelter',
  'nightlife': 'nightlife',
  'nightlight': 'nightlight',
  'nightlight_round': 'nightlight_round',
  'nights_stay': 'nights_stay',
  'no_accounts': 'no_accounts',
  'no_backpack': 'no_backpack',
  'no_cell': 'no_cell',
  'no_drinks': 'no_drinks',
  'no_encryption': 'no_encryption',
  'no_encryption_gmailerrorred': 'no_encryption_gmailerrorred',
  'no_flash': 'no_flash',
  'no_food': 'no_food',
  'no_luggage': 'no_luggage',
  'no_meals': 'no_meals',
  'no_meeting_room': 'no_meeting_room',
  'no_photography': 'no_photography',
  'no_sim': 'no_sim',
  'no_stroller': 'no_stroller',
  'no_transfer': 'no_transfer',
  'nordic_walking': 'nordic_walking',
  'north': 'north',
  'north_east': 'north_east',
  'north_west': 'north_west',
  'not_accessible': 'not_accessible',
  'not_interested': 'not_interested',
  'not_listed_location': 'not_listed_location',
  'not_started': 'not_started',
  'note': 'note',
  'note_add': 'note_add',
  'note_alt': 'note_alt',
  'notes': 'notes',
  'notification_add': 'notification_add',
  'notification_important': 'notification_important',
  'notifications': 'notifications',
  'notifications_active': 'notifications_active',
  'notifications_none': 'notifications_none',
  'notifications_off': 'notifications_off',
  'notifications_paused': 'notifications_paused',
  'offline_bolt': 'offline_bolt',
  'offline_pin': 'offline_pin',
  'offline_share': 'offline_share',
  'ondemand_video': 'ondemand_video',
  'online_prediction': 'online_prediction',
  'opacity': 'opacity',
  'open_in_browser': 'open_in_browser',
  'open_in_full': 'open_in_full',
  'open_in_new': 'open_in_new',
  'open_in_new_off': 'open_in_new_off',
  'open_with': 'open_with',
  'other_houses': 'other_houses',
  'outbound': 'outbound',
  'outbox': 'outbox',
  'outdoor_grill': 'outdoor_grill',
  'outlet': 'outlet',
  'outlined_flag': 'outlined_flag',
  'padding': 'padding',
  'pages': 'pages',
  'pageview': 'pageview',
  'paid': 'paid',
  'palette': 'palette',
  'pan_tool': 'pan_tool',
  'panorama': 'panorama',
  'panorama_fish_eye': 'panorama_fish_eye',
  'panorama_horizontal': 'panorama_horizontal',
  'panorama_horizontal_select': 'panorama_horizontal_select',
  'panorama_photosphere': 'panorama_photosphere',
  'panorama_photosphere_select': 'panorama_photosphere_select',
  'panorama_vertical': 'panorama_vertical',
  'panorama_vertical_select': 'panorama_vertical_select',
  'panorama_wide_angle': 'panorama_wide_angle',
  'panorama_wide_angle_select': 'panorama_wide_angle_select',
  'paragliding': 'paragliding',
  'park': 'park',
  'party_mode': 'party_mode',
  'password': 'password',
  'pattern': 'pattern',
  'pause': 'pause',
  'pause_circle': 'pause_circle',
  'pause_circle_filled': 'pause_circle_filled',
  'pause_circle_outline': 'pause_circle_outline',
  'pause_presentation': 'pause_presentation',
  'payment': 'payment',
  'payments': 'payments',
  'pedal_bike': 'pedal_bike',
  'pending': 'pending',
  'pending_actions': 'pending_actions',
  'people': 'people',
  'people_alt': 'people_alt',
  'people_outline': 'people_outline',
  'perm_camera_mic': 'perm_camera_mic',
  'perm_contact_calendar': 'perm_contact_calendar',
  'perm_data_setting': 'perm_data_setting',
  'perm_device_information': 'perm_device_information',
  'perm_identity': 'perm_identity',
  'perm_media': 'perm_media',
  'perm_phone_msg': 'perm_phone_msg',
  'perm_scan_wifi': 'perm_scan_wifi',
  'person': 'person',
  'person_add': 'person_add',
  'person_add_alt': 'person_add_alt',
  'person_add_alt_1': 'person_add_alt_1',
  'person_add_disabled': 'person_add_disabled',
  'person_off': 'person_off',
  'person_outline': 'person_outline',
  'person_pin': 'person_pin',
  'person_pin_circle': 'person_pin_circle',
  'person_remove': 'person_remove',
  'person_remove_alt_1': 'person_remove_alt_1',
  'person_search': 'person_search',
  'personal_injury': 'personal_injury',
  'personal_video': 'personal_video',
  'pest_control': 'pest_control',
  'pest_control_rodent': 'pest_control_rodent',
  'pets': 'pets',
  'phone': 'phone',
  'phone_android': 'phone_android',
  'phone_bluetooth_speaker': 'phone_bluetooth_speaker',
  'phone_callback': 'phone_callback',
  'phone_disabled': 'phone_disabled',
  'phone_enabled': 'phone_enabled',
  'phone_forwarded': 'phone_forwarded',
  'phone_in_talk': 'phone_in_talk',
  'phone_iphone': 'phone_iphone',
  'phone_locked': 'phone_locked',
  'phone_missed': 'phone_missed',
  'phone_paused': 'phone_paused',
  'phonelink': 'phonelink',
  'phonelink_erase': 'phonelink_erase',
  'phonelink_lock': 'phonelink_lock',
  'phonelink_off': 'phonelink_off',
  'phonelink_ring': 'phonelink_ring',
  'phonelink_setup': 'phonelink_setup',
  'photo': 'photo',
  'photo_album': 'photo_album',
  'photo_camera': 'photo_camera',
  'photo_camera_back': 'photo_camera_back',
  'photo_camera_front': 'photo_camera_front',
  'photo_filter': 'photo_filter',
  'photo_library': 'photo_library',
  'photo_size_select_actual': 'photo_size_select_actual',
  'photo_size_select_large': 'photo_size_select_large',
  'photo_size_select_small': 'photo_size_select_small',
  'piano': 'piano',
  'piano_off': 'piano_off',
  'picture_as_pdf': 'picture_as_pdf',
  'picture_in_picture': 'picture_in_picture',
  'picture_in_picture_alt': 'picture_in_picture_alt',
  'pie_chart': 'pie_chart',
  'pie_chart_outline': 'pie_chart_outline',
  'pin': 'pin',
  'pin_drop': 'pin_drop',
  'pivot_table_chart': 'pivot_table_chart',
  'place': 'place',
  'plagiarism': 'plagiarism',
  'play_arrow': 'play_arrow',
  'play_circle': 'play_circle',
  'play_circle_filled': 'play_circle_filled',
  'play_circle_outline': 'play_circle_outline',
  'play_disabled': 'play_disabled',
  'play_for_work': 'play_for_work',
  'play_lesson': 'play_lesson',
  'playlist_add': 'playlist_add',
  'playlist_add_check': 'playlist_add_check',
  'playlist_play': 'playlist_play',
  'plumbing': 'plumbing',
  'plus_one': 'plus_one',
  'podcasts': 'podcasts',
  'point_of_sale': 'point_of_sale',
  'policy': 'policy',
  'poll': 'poll',
  'polymer': 'polymer',
  'pool': 'pool',
  'portable_wifi_off': 'portable_wifi_off',
  'portrait': 'portrait',
  'post_add': 'post_add',
  'power': 'power',
  'power_input': 'power_input',
  'power_off': 'power_off',
  'power_settings_new': 'power_settings_new',
  'precision_manufacturing': 'precision_manufacturing',
  'pregnant_woman': 'pregnant_woman',
  'present_to_all': 'present_to_all',
  'preview': 'preview',
  'price_change': 'price_change',
  'price_check': 'price_check',
  'print': 'print',
  'print_disabled': 'print_disabled',
  'priority_high': 'priority_high',
  'privacy_tip': 'privacy_tip',
  'private_connectivity': 'private_connectivity',
  'production_quantity_limits': 'production_quantity_limits',
  'psychology': 'psychology',
  'public': 'public',
  'public_off': 'public_off',
  'publish': 'publish',
  'published_with_changes': 'published_with_changes',
  'push_pin': 'push_pin',
  'qr_code': 'qr_code',
  'qr_code_2': 'qr_code_2',
  'qr_code_scanner': 'qr_code_scanner',
  'query_builder': 'query_builder',
  'query_stats': 'query_stats',
  'question_answer': 'question_answer',
  'queue': 'queue',
  'queue_music': 'queue_music',
  'queue_play_next': 'queue_play_next',
  'quickreply': 'quickreply',
  'quiz': 'quiz',
  'r_mobiledata': 'r_mobiledata',
  'radar': 'radar',
  'radio': 'radio',
  'radio_button_checked': 'radio_button_checked',
  'radio_button_unchecked': 'radio_button_unchecked',
  'railway_alert': 'railway_alert',
  'ramen_dining': 'ramen_dining',
  'rate_review': 'rate_review',
  'raw_off': 'raw_off',
  'raw_on': 'raw_on',
  'read_more': 'read_more',
  'real_estate_agent': 'real_estate_agent',
  'receipt': 'receipt',
  'receipt_long': 'receipt_long',
  'recent_actors': 'recent_actors',
  'recommend': 'recommend',
  'record_voice_over': 'record_voice_over',
  'redeem': 'redeem',
  'redo': 'redo',
  'reduce_capacity': 'reduce_capacity',
  'refresh': 'refresh',
  'remember_me': 'remember_me',
  'remove': 'remove',
  'remove_circle': 'remove_circle',
  'remove_circle_outline': 'remove_circle_outline',
  'remove_done': 'remove_done',
  'remove_from_queue': 'remove_from_queue',
  'remove_moderator': 'remove_moderator',
  'remove_red_eye': 'remove_red_eye',
  'remove_shopping_cart': 'remove_shopping_cart',
  'reorder': 'reorder',
  'repeat': 'repeat',
  'repeat_on': 'repeat_on',
  'repeat_one': 'repeat_one',
  'repeat_one_on': 'repeat_one_on',
  'replay': 'replay',
  'replay_10': 'replay_10',
  'replay_30': 'replay_30',
  'replay_5': 'replay_5',
  'replay_circle_filled': 'replay_circle_filled',
  'reply': 'reply',
  'reply_all': 'reply_all',
  'report': 'report',
  'report_gmailerrorred': 'report_gmailerrorred',
  'report_off': 'report_off',
  'report_problem': 'report_problem',
  'request_page': 'request_page',
  'request_quote': 'request_quote',
  'reset_tv': 'reset_tv',
  'restart_alt': 'restart_alt',
  'restaurant': 'restaurant',
  'restaurant_menu': 'restaurant_menu',
  'restore': 'restore',
  'restore_from_trash': 'restore_from_trash',
  'restore_page': 'restore_page',
  'reviews': 'reviews',
  'rice_bowl': 'rice_bowl',
  'ring_volume': 'ring_volume',
  'roofing': 'roofing',
  'room': 'room',
  'room_preferences': 'room_preferences',
  'room_service': 'room_service',
  'rotate_90_degrees_ccw': 'rotate_90_degrees_ccw',
  'rotate_left': 'rotate_left',
  'rotate_right': 'rotate_right',
  'rounded_corner': 'rounded_corner',
  'router': 'router',
  'rowing': 'rowing',
  'rss_feed': 'rss_feed',
  'rsvp': 'rsvp',
  'rtt': 'rtt',
  'rule': 'rule',
  'rule_folder': 'rule_folder',
  'run_circle': 'run_circle',
  'running_with_errors': 'running_with_errors',
  'rv_hookup': 'rv_hookup',
  'safety_divider': 'safety_divider',
  'sailing': 'sailing',
  'sanitizer': 'sanitizer',
  'satellite': 'satellite',
  'save': 'save',
  'save_alt': 'save_alt',
  'saved_search': 'saved_search',
  'savings': 'savings',
  'scanner': 'scanner',
  'scatter_plot': 'scatter_plot',
  'schedule': 'schedule',
  'schedule_send': 'schedule_send',
  'schema': 'schema',
  'school': 'school',
  'science': 'science',
  'score': 'score',
  'screen_lock_landscape': 'screen_lock_landscape',
  'screen_lock_portrait': 'screen_lock_portrait',
  'screen_lock_rotation': 'screen_lock_rotation',
  'screen_rotation': 'screen_rotation',
  'screen_search_desktop': 'screen_search_desktop',
  'screen_share': 'screen_share',
  'screenshot': 'screenshot',
  'sd': 'sd',
  'sd_card': 'sd_card',
  'sd_card_alert': 'sd_card_alert',
  'sd_storage': 'sd_storage',
  'search': 'search',
  'search_off': 'search_off',
  'security': 'security',
  'security_update': 'security_update',
  'security_update_good': 'security_update_good',
  'security_update_warning': 'security_update_warning',
  'segment': 'segment',
  'select_all': 'select_all',
  'self_improvement': 'self_improvement',
  'sell': 'sell',
  'send': 'send',
  'send_and_archive': 'send_and_archive',
  'send_to_mobile': 'send_to_mobile',
  'sensor_door': 'sensor_door',
  'sensor_window': 'sensor_window',
  'sensors': 'sensors',
  'sensors_off': 'sensors_off',
  'sentiment_dissatisfied': 'sentiment_dissatisfied',
  'sentiment_neutral': 'sentiment_neutral',
  'sentiment_satisfied': 'sentiment_satisfied',
  'sentiment_satisfied_alt': 'sentiment_satisfied_alt',
  'sentiment_very_dissatisfied': 'sentiment_very_dissatisfied',
  'sentiment_very_satisfied': 'sentiment_very_satisfied',
  'set_meal': 'set_meal',
  'settings': 'settings',
  'settings_accessibility': 'settings_accessibility',
  'settings_applications': 'settings_applications',
  'settings_backup_restore': 'settings_backup_restore',
  'settings_bluetooth': 'settings_bluetooth',
  'settings_brightness': 'settings_brightness',
  'settings_cell': 'settings_cell',
  'settings_ethernet': 'settings_ethernet',
  'settings_input_antenna': 'settings_input_antenna',
  'settings_input_component': 'settings_input_component',
  'settings_input_composite': 'settings_input_composite',
  'settings_input_hdmi': 'settings_input_hdmi',
  'settings_input_svideo': 'settings_input_svideo',
  'settings_overscan': 'settings_overscan',
  'settings_phone': 'settings_phone',
  'settings_power': 'settings_power',
  'settings_remote': 'settings_remote',
  'settings_suggest': 'settings_suggest',
  'settings_system_daydream': 'settings_system_daydream',
  'settings_voice': 'settings_voice',
  'share': 'share',
  'share_location': 'share_location',
  'shield': 'shield',
  'shop': 'shop',
  'shop_2': 'shop_2',
  'shop_two': 'shop_two',
  'shopping_bag': 'shopping_bag',
  'shopping_basket': 'shopping_basket',
  'shopping_cart': 'shopping_cart',
  'short_text': 'short_text',
  'shortcut': 'shortcut',
  'show_chart': 'show_chart',
  'shower': 'shower',
  'shuffle': 'shuffle',
  'shuffle_on': 'shuffle_on',
  'shutter_speed': 'shutter_speed',
  'sick': 'sick',
  'signal_cellular_0_bar': 'signal_cellular_0_bar',
  'signal_cellular_4_bar': 'signal_cellular_4_bar',
  'signal_cellular_alt': 'signal_cellular_alt',
  'signal_cellular_connected_no_internet_0_bar': 'signal_cellular_connected_no_internet_0_bar',
  'signal_cellular_connected_no_internet_4_bar': 'signal_cellular_connected_no_internet_4_bar',
  'signal_cellular_no_sim': 'signal_cellular_no_sim',
  'signal_cellular_nodata': 'signal_cellular_nodata',
  'signal_cellular_null': 'signal_cellular_null',
  'signal_cellular_off': 'signal_cellular_off',
  'signal_wifi_0_bar': 'signal_wifi_0_bar',
  'signal_wifi_4_bar': 'signal_wifi_4_bar',
  'signal_wifi_4_bar_lock': 'signal_wifi_4_bar_lock',
  'signal_wifi_bad': 'signal_wifi_bad',
  'signal_wifi_connected_no_internet_4': 'signal_wifi_connected_no_internet_4',
  'signal_wifi_off': 'signal_wifi_off',
  'signal_wifi_statusbar_4_bar': 'signal_wifi_statusbar_4_bar',
  'signal_wifi_statusbar_connected_no_internet_4': 'signal_wifi_statusbar_connected_no_internet_4',
  'signal_wifi_statusbar_null': 'signal_wifi_statusbar_null',
  'sim_card': 'sim_card',
  'sim_card_alert': 'sim_card_alert',
  'sim_card_download': 'sim_card_download',
  'single_bed': 'single_bed',
  'sip': 'sip',
  'skateboarding': 'skateboarding',
  'skip_next': 'skip_next',
  'skip_previous': 'skip_previous',
  'sledding': 'sledding',
  'slideshow': 'slideshow',
  'slow_motion_video': 'slow_motion_video',
  'smart_button': 'smart_button',
  'smart_display': 'smart_display',
  'smart_screen': 'smart_screen',
  'smart_toy': 'smart_toy',
  'smartphone': 'smartphone',
  'smoke_free': 'smoke_free',
  'smoking_rooms': 'smoking_rooms',
  'sms': 'sms',
  'sms_failed': 'sms_failed',
  'snippet_folder': 'snippet_folder',
  'snooze': 'snooze',
  'snowboarding': 'snowboarding',
  'snowmobile': 'snowmobile',
  'snowshoeing': 'snowshoeing',
  'soap': 'soap',
  'social_distance': 'social_distance',
  'sort': 'sort',
  'sort_by_alpha': 'sort_by_alpha',
  'source': 'source',
  'south': 'south',
  'south_east': 'south_east',
  'south_west': 'south_west',
  'spa': 'spa',
  'space_bar': 'space_bar',
  'space_dashboard': 'space_dashboard',
  'speaker': 'speaker',
  'speaker_group': 'speaker_group',
  'speaker_notes': 'speaker_notes',
  'speaker_notes_off': 'speaker_notes_off',
  'speaker_phone': 'speaker_phone',
  'speed': 'speed',
  'spellcheck': 'spellcheck',
  'splitscreen': 'splitscreen',
  'sports': 'sports',
  'sports_bar': 'sports_bar',
  'sports_baseball': 'sports_baseball',
  'sports_basketball': 'sports_basketball',
  'sports_cricket': 'sports_cricket',
  'sports_esports': 'sports_esports',
  'sports_football': 'sports_football',
  'sports_golf': 'sports_golf',
  'sports_handball': 'sports_handball',
  'sports_hockey': 'sports_hockey',
  'sports_kabaddi': 'sports_kabaddi',
  'sports_mma': 'sports_mma',
  'sports_motorsports': 'sports_motorsports',
  'sports_rugby': 'sports_rugby',
  'sports_score': 'sports_score',
  'sports_soccer': 'sports_soccer',
  'sports_tennis': 'sports_tennis',
  'sports_volleyball': 'sports_volleyball',
  'square_foot': 'square_foot',
  'stacked_bar_chart': 'stacked_bar_chart',
  'stacked_line_chart': 'stacked_line_chart',
  'stairs': 'stairs',
  'star': 'star',
  'star_border': 'star_border',
  'star_border_purple500': 'star_border_purple500',
  'star_half': 'star_half',
  'star_outline': 'star_outline',
  'star_purple500': 'star_purple500',
  'star_rate': 'star_rate',
  'stars': 'stars',
  'stay_current_landscape': 'stay_current_landscape',
  'stay_current_portrait': 'stay_current_portrait',
  'stay_primary_landscape': 'stay_primary_landscape',
  'stay_primary_portrait': 'stay_primary_portrait',
  'sticky_note_2': 'sticky_note_2',
  'stop': 'stop',
  'stop_circle': 'stop_circle',
  'stop_screen_share': 'stop_screen_share',
  'storage': 'storage',
  'store': 'store',
  'store_mall_directory': 'store_mall_directory',
  'storefront': 'storefront',
  'storm': 'storm',
  'straighten': 'straighten',
  'stream': 'stream',
  'streetview': 'streetview',
  'strikethrough_s': 'strikethrough_s',
  'stroller': 'stroller',
  'style': 'style',
  'subdirectory_arrow_left': 'subdirectory_arrow_left',
  'subdirectory_arrow_right': 'subdirectory_arrow_right',
  'subject': 'subject',
  'subscript': 'subscript',
  'subscriptions': 'subscriptions',
  'subtitles': 'subtitles',
  'subtitles_off': 'subtitles_off',
  'subway': 'subway',
  'summarize': 'summarize',
  'superscript': 'superscript',
  'supervised_user_circle': 'supervised_user_circle',
  'supervisor_account': 'supervisor_account',
  'support': 'support',
  'support_agent': 'support_agent',
  'surfing': 'surfing',
  'surround_sound': 'surround_sound',
  'swap_calls': 'swap_calls',
  'swap_horiz': 'swap_horiz',
  'swap_horizontal_circle': 'swap_horizontal_circle',
  'swap_vert': 'swap_vert',
  'swap_vertical_circle': 'swap_vertical_circle',
  'swipe': 'swipe',
  'switch_account': 'switch_account',
  'switch_camera': 'switch_camera',
  'switch_left': 'switch_left',
  'switch_right': 'switch_right',
  'switch_video': 'switch_video',
  'sync': 'sync',
  'sync_alt': 'sync_alt',
  'sync_disabled': 'sync_disabled',
  'sync_problem': 'sync_problem',
  'system_security_update': 'system_security_update',
  'system_security_update_good': 'system_security_update_good',
  'system_security_update_warning': 'system_security_update_warning',
  'system_update': 'system_update',
  'system_update_alt': 'system_update_alt',
  'tab': 'tab',
  'tab_unselected': 'tab_unselected',
  'table_chart': 'table_chart',
  'table_rows': 'table_rows',
  'table_view': 'table_view',
  'tablet': 'tablet',
  'tablet_android': 'tablet_android',
  'tablet_mac': 'tablet_mac',
  'tag': 'tag',
  'tag_faces': 'tag_faces',
  'takeout_dining': 'takeout_dining',
  'tap_and_play': 'tap_and_play',
  'tapas': 'tapas',
  'task': 'task',
  'task_alt': 'task_alt',
  'taxi_alert': 'taxi_alert',
  'terrain': 'terrain',
  'text_fields': 'text_fields',
  'text_format': 'text_format',
  'text_rotate_up': 'text_rotate_up',
  'text_rotate_vertical': 'text_rotate_vertical',
  'text_rotation_angledown': 'text_rotation_angledown',
  'text_rotation_angleup': 'text_rotation_angleup',
  'text_rotation_down': 'text_rotation_down',
  'text_rotation_none': 'text_rotation_none',
  'text_snippet': 'text_snippet',
  'textsms': 'textsms',
  'texture': 'texture',
  'theater_comedy': 'theater_comedy',
  'theaters': 'theaters',
  'thermostat': 'thermostat',
  'thermostat_auto': 'thermostat_auto',
  'thumb_down': 'thumb_down',
  'thumb_down_alt': 'thumb_down_alt',
  'thumb_down_off_alt': 'thumb_down_off_alt',
  'thumb_up': 'thumb_up',
  'thumb_up_alt': 'thumb_up_alt',
  'thumb_up_off_alt': 'thumb_up_off_alt',
  'thumbs_up_down': 'thumbs_up_down',
  'time_to_leave': 'time_to_leave',
  'timelapse': 'timelapse',
  'timeline': 'timeline',
  'timer': 'timer',
  'timer_10': 'timer_10',
  'timer_10_select': 'timer_10_select',
  'timer_3': 'timer_3',
  'timer_3_select': 'timer_3_select',
  'timer_off': 'timer_off',
  'title': 'title',
  'toc': 'toc',
  'today': 'today',
  'toggle_off': 'toggle_off',
  'toggle_on': 'toggle_on',
  'toll': 'toll',
  'tonality': 'tonality',
  'topic': 'topic',
  'touch_app': 'touch_app',
  'tour': 'tour',
  'toys': 'toys',
  'track_changes': 'track_changes',
  'traffic': 'traffic',
  'train': 'train',
  'tram': 'tram',
  'transfer_within_a_station': 'transfer_within_a_station',
  'transform': 'transform',
  'transgender': 'transgender',
  'transit_enterexit': 'transit_enterexit',
  'translate': 'translate',
  'travel_explore': 'travel_explore',
  'trending_down': 'trending_down',
  'trending_flat': 'trending_flat',
  'trending_up': 'trending_up',
  'trip_origin': 'trip_origin',
  'try': 'try',
  'tty': 'tty',
  'tune': 'tune',
  'tungsten': 'tungsten',
  'turned_in': 'turned_in',
  'turned_in_not': 'turned_in_not',
  'tv': 'tv',
  'tv_off': 'tv_off',
  'two_wheeler': 'two_wheeler',
  'umbrella': 'umbrella',
  'unarchive': 'unarchive',
  'undo': 'undo',
  'unfold_less': 'unfold_less',
  'unfold_more': 'unfold_more',
  'unpublished': 'unpublished',
  'unsubscribe': 'unsubscribe',
  'upcoming': 'upcoming',
  'update': 'update',
  'update_disabled': 'update_disabled',
  'upgrade': 'upgrade',
  'upload': 'upload',
  'upload_file': 'upload_file',
  'usb': 'usb',
  'usb_off': 'usb_off',
  'verified': 'verified',
  'verified_user': 'verified_user',
  'vertical_align_bottom': 'vertical_align_bottom',
  'vertical_align_center': 'vertical_align_center',
  'vertical_align_top': 'vertical_align_top',
  'vertical_distribute': 'vertical_distribute',
  'vertical_split': 'vertical_split',
  'vibration': 'vibration',
  'video_call': 'video_call',
  'video_camera_back': 'video_camera_back',
  'video_camera_front': 'video_camera_front',
  'video_label': 'video_label',
  'video_library': 'video_library',
  'video_settings': 'video_settings',
  'video_stable': 'video_stable',
  'videocam': 'videocam',
  'videocam_off': 'videocam_off',
  'videogame_asset': 'videogame_asset',
  'videogame_asset_off': 'videogame_asset_off',
  'view_agenda': 'view_agenda',
  'view_array': 'view_array',
  'view_carousel': 'view_carousel',
  'view_column': 'view_column',
  'view_comfy': 'view_comfy',
  'view_compact': 'view_compact',
  'view_day': 'view_day',
  'view_headline': 'view_headline',
  'view_in_ar': 'view_in_ar',
  'view_list': 'view_list',
  'view_module': 'view_module',
  'view_quilt': 'view_quilt',
  'view_sidebar': 'view_sidebar',
  'view_stream': 'view_stream',
  'view_week': 'view_week',
  'vignette': 'vignette',
  'villa': 'villa',
  'visibility': 'visibility',
  'visibility_off': 'visibility_off',
  'voice_chat': 'voice_chat',
  'voice_over_off': 'voice_over_off',
  'voicemail': 'voicemail',
  'volume_down': 'volume_down',
  'volume_mute': 'volume_mute',
  'volume_off': 'volume_off',
  'volume_up': 'volume_up',
  'volunteer_activism': 'volunteer_activism',
  'vpn_key': 'vpn_key',
  'vpn_lock': 'vpn_lock',
  'vrpano': 'vrpano',
  'wallpaper': 'wallpaper',
  'warning': 'warning',
  'warning_amber': 'warning_amber',
  'wash': 'wash',
  'watch': 'watch',
  'watch_later': 'watch_later',
  'water': 'water',
  'water_damage': 'water_damage',
  'waterfall_chart': 'waterfall_chart',
  'waves': 'waves',
  'wb_auto': 'wb_auto',
  'wb_cloudy': 'wb_cloudy',
  'wb_incandescent': 'wb_incandescent',
  'wb_iridescent': 'wb_iridescent',
  'wb_shade': 'wb_shade',
  'wb_sunny': 'wb_sunny',
  'wb_twilight': 'wb_twilight',
  'wc': 'wc',
  'web': 'web',
  'web_asset': 'web_asset',
  'web_asset_off': 'web_asset_off',
  'weekend': 'weekend',
  'west': 'west',
  'whatshot': 'whatshot',
  'wheelchair_pickup': 'wheelchair_pickup',
  'where_to_vote': 'where_to_vote',
  'widgets': 'widgets',
  'wifi': 'wifi',
  'wifi_calling': 'wifi_calling',
  'wifi_calling_3': 'wifi_calling_3',
  'wifi_lock': 'wifi_lock',
  'wifi_off': 'wifi_off',
  'wifi_protected_setup': 'wifi_protected_setup',
  'wifi_tethering': 'wifi_tethering',
  'wifi_tethering_error_rounded': 'wifi_tethering_error_rounded',
  'wifi_tethering_off': 'wifi_tethering_off',
  'window': 'window',
  'wine_bar': 'wine_bar',
  'work': 'work',
  'work_off': 'work_off',
  'work_outline': 'work_outline',
  'workspaces': 'workspaces',
  'wrap_text': 'wrap_text',
  'wrong_location': 'wrong_location',
  'wysiwyg': 'wysiwyg',
  'yard': 'yard',
  'youtube_searched_for': 'youtube_searched_for',
  'zoom_in': 'zoom_in',
  'zoom_out': 'zoom_out',
  'zoom_out_map': 'zoom_out_map'
};

var ICONS_TYPES = {
  'filled': 'Material Icons',
  'outlined': 'Material Icons Outlined',
  'round': 'Material Icons Round',
  'sharp': 'Material Icons Sharp',
  'two-tone': 'Material Icons Two Tone'
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import \"src/__csscache__/Material-Icons.css\";\n@import \"src/__csscache__/Material-Icons-Outlined.css\";\n@import \"src/__csscache__/Material-Icons-Round.css\";\n@import \"src/__csscache__/Material-Icons-Sharp.css\";\n@import \"src/__csscache__/Material-Icons-Two-Tone.css\";\n.a-icon {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: \"liga\";\n}\n.a-icon.f-filled {\n  font-family: \"Material Icons\";\n}\n.a-icon.f-outlined {\n  font-family: \"Material Icons Outlined\";\n}\n.a-icon.f-round {\n  font-family: \"Material Icons Round\";\n}\n.a-icon.f-sharp {\n  font-family: \"Material Icons Sharp\";\n}\n.a-icon.f-two-tone {\n  font-family: \"Material Icons Two Tone\";\n}";
styleInject(css_248z);

//   const cssId = 'dbetka-material-icons'; // you could encode the css path itself to generate id..
//   if (!document.getElementById(cssId)) {
//     const head = document.getElementsByTagName('head')[0];
//     const link = document.createElement('link');
//     link.id = cssId + '-' + key;
//     link.rel = 'stylesheet';
//     link.href = CSSLink;
//     head.appendChild(link);
//   }
// }

var ICONS_GETTER = function ICONS_GETTER() {
  return ICONS;
};

var ICONS_TYPES_GETTER = function ICONS_TYPES_GETTER() {
  return ICONS_TYPES;
};

var components = {
  AIcon: __vue_component__
};
//   install () {
//     const list = Object.values(ICONS_TYPES)
//       .map(type => 'https://fonts.googleapis.com/css2?family=' + type.replace(' ', '+'));
//     for (const [key, CSSLink] of list.entries()) createCSSLink(CSSLink, key);
//   },
// };

var IconComputed = {
  install: function install(Vue, options) {
    Vue.mixin({
      computed: {
        ICONS: ICONS_GETTER,
        ICONS_TYPES: ICONS_TYPES_GETTER
      }
    });
  }
};
var index = {
  install: function install(Vue, options) {
    // IconFonts.install();
    IconComputed.install(Vue, options);

    for (var componentName in components) {
      var component = components[componentName];
      Vue.component(component.name, component);
    }
  }
};

exports.AIcon = __vue_component__;
exports.ICONS = ICONS;
exports.ICONS_TYPES = ICONS_TYPES;
exports.IconComputed = IconComputed;
exports.default = index;
//# sourceMappingURL=index.js.map
