!(function (t, i, s) {
  "use strict";function e(i, e) {
    var r = 0;for ((i.length === s || i === t) && (i = [i]); i[r];) e.call(this, i[r], r), r++;
  }function r(i) {
    var s, e, o;i = i || {}, o = i.$ || o || t.jQuery, s = this instanceof o, s ? i.root = e = this : e = o(i.root || i.scroller);var n = new r.fn.constructor(e, i, o);return (n.autoUpdate && n.autoUpdate(), n);
  }function o() {
    return new Date().getTime();
  }function n(i, s, r) {
    i._eventHandlers = i._eventHandlers || [{ element: i.scroller, handler: function handler(t) {
        i.scroll(t);
      }, type: "scroll" }, { element: i.root, handler: function handler() {
        i.update();
      }, type: "transitionend animationend" }, { element: i.scroller, handler: function handler() {
        i.update();
      }, type: "keyup" }, { element: i.bar, handler: function handler(t) {
        t.preventDefault(), i.selection(), i.drag.now = 1;
      }, type: "touchstart mousedown" }, { element: document, handler: function handler() {
        i.selection(1), i.drag.now = 0;
      }, type: "mouseup blur touchend" }, { element: document, handler: function handler(t) {
        2 != t.button && i._pos0(t);
      }, type: "touchstart mousedown" }, { element: document, handler: function handler(t) {
        i.drag.now && i.drag(t);
      }, type: "mousemove touchmove" }, { element: t, handler: function handler() {
        i.update();
      }, type: "resize" }, { element: i.root, handler: function handler() {
        i.update();
      }, type: "sizeChange" }], e(i._eventHandlers, function (t) {
      t.element && s(t.element, t.type, t.handler, r);
    });
  }function l(t, i, s, e) {
    var r = "data-baron-" + i + "-id";if ("on" == s) t.setAttribute(r, e);else {
      if ("off" != s) return t.getAttribute(r);t.removeAttribute(r);
    }
  }function c(t) {
    l(t.root, t.direction) && console.log("Error! Baron for this node already initialized", t.root);var i = new g.prototype.constructor(t);return (n(i, t.event, "on"), l(i.root, t.direction, "on", d.length), d.push(i), i.update(), i);
  }function a(t) {
    var i = {};t = t || {};for (var s in t) t.hasOwnProperty(s) && (i[s] = t[s]);return i;
  }function h(t) {
    var i = a(t);i.direction = i.direction || "v";var s = t.event || function (t, s, e, r) {
      i.$(t)[r || "on"](s, e);
    };return (i.event = function (t, i, r, o) {
      e(t, function (t) {
        s(t, i, r, o);
      });
    }, i);
  }function u(t) {
    if (this.events && this.events[t]) for (var i = 0; i < this.events[t].length; i++) {
      var s = Array.prototype.slice.call(arguments, 1);this.events[t][i].apply(this, s);
    }
  }if (t) {
    var f = r,
        p = ["left", "top", "right", "bottom", "width", "height"],
        d = [],
        v = { v: { x: "Y", pos: p[1], oppos: p[3], crossPos: p[0], crossOpPos: p[2], size: p[5], crossSize: p[4], client: "clientHeight", crossClient: "clientWidth", crossScroll: "scrollWidth", offset: "offsetHeight", crossOffset: "offsetWidth", offsetPos: "offsetTop", scroll: "scrollTop", scrollSize: "scrollHeight" }, h: { x: "X", pos: p[0], oppos: p[2], crossPos: p[1], crossOpPos: p[3], size: p[4], crossSize: p[5], client: "clientWidth", crossClient: "clientHeight", crossScroll: "scrollHeight", offset: "offsetWidth", crossOffset: "offsetHeight", offsetPos: "offsetLeft", scroll: "scrollLeft", scrollSize: "scrollWidth" } };r._instances = d, r.fn = { constructor: function constructor(t, i, s) {
        var r = h(i);r.$ = s, this.length = 0, e.call(this, t, function (t, s) {
          var e = +l(t, r.direction);if (e == e && d[e] && !i) this[s] = d[e];else {
            var o = a(r);r.root && r.scroller ? (o.scroller = r.$(r.scroller, t), o.scroller.length || (o.scroller = t)) : o.scroller = t, o.root = t, this[s] = c(o);
          }this.length = s + 1;
        }), this.params = r;
      }, dispose: function dispose() {
        var t = this.params;e(this, function (i) {
          i.dispose(t);
        }), this.params = null;
      }, update: function update() {
        for (var t = 0; this[t];) this[t].update.apply(this[t], arguments), t++;
      }, baron: function baron(t) {
        return (t.root = [], t.scroller = this.params.scroller, e.call(this, this, function (i) {
          t.root.push(i.root);
        }), t.direction = "v" == this.params.direction ? "h" : "v", t._chain = !0, r(t));
      } };var g = {};g.prototype = { _debounce: function _debounce(t, i) {
        var e,
            r,
            n = this,
            l = function l() {
          if (n._disposed) return (clearTimeout(e), e = n = null, s);var c = o() - r;i > c && c >= 0 ? e = setTimeout(l, i - c) : (e = null, t());
        };return function () {
          r = o(), e || (e = setTimeout(l, i));
        };
      }, constructor: function constructor(t) {
        function i(t, i) {
          return h(t, i)[0];
        }function e(t) {
          var i = this.barMinSize || 20;t > 0 && i > t && (t = i), this.bar && h(this.bar).css(this.origin.size, parseInt(t, 10) + "px");
        }function r(t) {
          if (this.bar) {
            var i = h(this.bar).css(this.origin.pos),
                s = +t + "px";s && s != i && h(this.bar).css(this.origin.pos, s);
          }
        }function n() {
          return d[this.origin.client] - this.barTopLimit - this.bar[this.origin.offset];
        }function l(t) {
          return t * n.call(this) + this.barTopLimit;
        }function c(t) {
          return (t - this.barTopLimit) / n.call(this);
        }function a() {
          return !1;
        }var h, f, p, d, g, m, b, C, y, w, $;return (w = y = o(), h = this.$ = t.$, this.event = t.event, this.events = {}, this.root = t.root, this.scroller = i(t.scroller), this.bar = i(t.bar, this.root), d = this.track = i(t.track, this.root), !this.track && this.bar && (d = this.bar.parentNode), this.clipper = this.scroller.parentNode, this.direction = t.direction, this.origin = v[this.direction], this.barOnCls = t.barOnCls || "_baron", this.scrollingCls = t.scrollingCls, this.barTopLimit = 0, C = 1e3 * t.pause || 0, this.cursor = function (t) {
          return t["client" + this.origin.x] || (((t.originalEvent || t).touches || {})[0] || {})["page" + this.origin.x];
        }, this.pos = function (t) {
          var i = "page" + this.origin.x + "Offset",
              e = this.scroller[i] ? i : this.origin.scroll;return (t !== s && (this.scroller[e] = t), this.scroller[e]);
        }, this.rpos = function (t) {
          var i,
              s = this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client];return (i = t ? this.pos(t * s) : this.pos(), i / (s || 1));
        }, this.barOn = function (t) {
          this.barOnCls && (t || this.scroller[this.origin.client] >= this.scroller[this.origin.scrollSize] ? h(this.root).hasClass(this.barOnCls) && h(this.root).removeClass(this.barOnCls) : h(this.root).hasClass(this.barOnCls) || h(this.root).addClass(this.barOnCls));
        }, this._pos0 = function (t) {
          p = this.cursor(t) - f;
        }, this.drag = function (t) {
          var i = c.call(this, this.cursor(t) - p),
              s = this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client];this.scroller[this.origin.scroll] = i * s;
        }, this.selection = function (t) {
          this.event(document, "selectpos selectstart", a, t ? "off" : "on");
        }, this.resize = function () {
          function t() {
            var t, s, e, r;if (s = i.scroller[i.origin.crossOffset]) if ((i.barOn(), t = i.scroller[i.origin.crossClient], "v" == i.direction)) {
              var n = s - t;e = h(i.clipper).css(i.origin.crossSize), r = i.clipper[i.origin.crossClient] + n + "px", e != r && h(i.scroller).css(i.origin.crossSize, r);
            } else e = h(i.clipper).css(i.origin.crossSize), r = i.scroller[i.origin.crossClient] + "px", e != r && h(i.clipper).css(i.origin.crossSize, r);Array.prototype.unshift.call(arguments, "resize"), u.apply(i, arguments), w = o();
          }var i = this,
              s = 0;o() - w < C && (clearTimeout(g), s = C), s ? g = setTimeout(t, s) : t();
        }, this.updatePositions = function () {
          var t,
              i = this;i.bar && (t = (d[i.origin.client] - i.barTopLimit) * i.scroller[i.origin.client] / i.scroller[i.origin.scrollSize], parseInt($, 10) != parseInt(t, 10) && (e.call(i, t), $ = t), f = l.call(i, i.rpos()), r.call(i, f)), Array.prototype.unshift.call(arguments, "scroll"), u.apply(i, arguments), y = o();
        }, this.scroll = function () {
          var t = 0,
              i = this;o() - y < C && (clearTimeout(m), t = C), o() - y < C && (clearTimeout(m), t = C), t ? m = setTimeout(function () {
            i.updatePositions();
          }, t) : i.updatePositions(), i.scrollingCls && (b || this.$(this.scroller).addClass(this.scrollingCls), clearTimeout(b), b = setTimeout(function () {
            i.$(i.scroller).removeClass(i.scrollingCls), b = s;
          }, 300));
        }, this);
      }, update: function update(t) {
        return (u.call(this, "upd", t), this.resize(1), this.updatePositions(), this);
      }, dispose: function dispose(t) {
        n(this, this.event, "off"), l(this.root, t.direction, "off"), this.$(this.scroller).css(this.origin.crossSize, ""), this.barOn(!0), u.call(this, "dispose"), this._disposed = !0;
      }, on: function on(t, i, s) {
        for (var e = t.split(" "), r = 0; r < e.length; r++) "init" == e[r] ? i.call(this, s) : (this.events[e[r]] = this.events[e[r]] || [], this.events[e[r]].push(function (t) {
          i.call(this, t || s);
        }));
      } }, r.fn.constructor.prototype = r.fn, g.prototype.constructor.prototype = g.prototype, r.noConflict = function () {
      return (t.baron = f, r);
    }, r.version = "0.7.10", i && i.fn && (i.fn.baron = r), t.baron = r, t.module && module.exports && (module.exports = r.noConflict());
  }
})(window, window.$), (function (t, s) {
  var e = function e(t) {
    function e(t, i, e) {
      var r = 1 == e ? "pos" : "oppos";l < (c.minView || 0) && (i = s), this.$(n[t]).css(this.origin.pos, "").css(this.origin.oppos, "").removeClass(c.outside), i !== s && (i += "px", this.$(n[t]).css(this.origin[r], i).addClass(c.outside));
    }function r(t) {
      try {
        i = document.createEvent("WheelEvent"), i.initWebKitWheelEvent(t.originalEvent.wheelDeltaX, t.originalEvent.wheelDeltaY), f.dispatchEvent(i), t.preventDefault();
      } catch (t) {}
    }function o(t) {
      var i;for (var s in t) c[s] = t[s];if (n = this.$(c.elements, this.scroller)) {
        l = this.scroller[this.origin.client];for (var e = 0; e < n.length; e++) i = {}, i[this.origin.size] = n[e][this.origin.offset], n[e].parentNode !== this.scroller && this.$(n[e].parentNode).css(i), i = {}, i[this.origin.crossSize] = n[e].parentNode[this.origin.crossClient], this.$(n[e]).css(i), l -= n[e][this.origin.offset], u[e] = n[e].parentNode[this.origin.offsetPos], a[e] = a[e - 1] || 0, h[e] = h[e - 1] || Math.min(u[e], 0), n[e - 1] && (a[e] += n[e - 1][this.origin.offset], h[e] += n[e - 1][this.origin.offset]), (0 != e || 0 != u[e]) && (this.event(n[e], "mousewheel", r, "off"), this.event(n[e], "mousewheel", r));c.limiter && n[0] && (this.track && this.track != this.scroller ? (i = {}, i[this.origin.pos] = n[0].parentNode[this.origin.offset], this.$(this.track).css(i)) : this.barTopLimit = n[0].parentNode[this.origin.offset], this.scroll()), c.limiter === !1 && (this.barTopLimit = 0);
      }var o = { element: n, handler: function handler() {
          for (var t, i = d(this)[0].parentNode, s = i.offsetTop, e = 0; e < n.length; e++) n[e] === this && (t = e);var r = s - a[t];c.scroll ? c.scroll({ x1: v.scroller.scrollTop, x2: r }) : v.scroller.scrollTop = r;
        }, type: "click" };c.clickable && (this._eventHandlers.push(o), p(o.element, o.type, o.handler, "on"));
    }var n,
        l,
        c = { outside: "", inside: "", before: "", after: "", past: "", future: "", radius: 0, minView: 0 },
        a = [],
        h = [],
        u = [],
        f = this.scroller,
        p = this.event,
        d = this.$,
        v = this;this.on("init", o, t);var g = [],
        m = [];this.on("init scroll", function () {
      var t, i, r;if (n) {
        for (var o, f = 0; f < n.length; f++) t = 0, u[f] - this.pos() < h[f] + c.radius ? (t = 1, i = a[f]) : u[f] - this.pos() > h[f] + l - c.radius ? (t = 2, i = this.scroller[this.origin.client] - n[f][this.origin.offset] - a[f] - l) : (t = 3, i = s), r = !1, (u[f] - this.pos() < h[f] || u[f] - this.pos() > h[f] + l) && (r = !0), (t != g[f] || r != m[f]) && (e.call(this, f, i, t), g[f] = t, m[f] = r, o = !0);if (o) for (f = 0; f < n.length; f++) 1 == g[f] && c.past && this.$(n[f]).addClass(c.past).removeClass(c.future), 2 == g[f] && c.future && this.$(n[f]).addClass(c.future).removeClass(c.past), 3 == g[f] ? ((c.future || c.past) && this.$(n[f]).removeClass(c.past).removeClass(c.future), c.inside && this.$(n[f]).addClass(c.inside)) : c.inside && this.$(n[f]).removeClass(c.inside), g[f] != g[f + 1] && 1 == g[f] && c.before ? this.$(n[f]).addClass(c.before).removeClass(c.after) : g[f] != g[f - 1] && 2 == g[f] && c.after ? this.$(n[f]).addClass(c.after).removeClass(c.before) : this.$(n[f]).removeClass(c.before).removeClass(c.after), c.grad && (m[f] ? this.$(n[f]).addClass(c.grad) : this.$(n[f]).removeClass(c.grad));
      }
    }), this.on("resize upd", function (t) {
      o.call(this, t && t.fix);
    });
  };baron.fn.fix = function (t) {
    for (var i = 0; this[i];) e.call(this[i], t), i++;return this;
  };
})(window), (function (t) {
  var i = t.MutationObserver || t.WebKitMutationObserver || t.MozMutationObserver || null,
      s = function s() {
    function t() {
      o.root[o.origin.offset] ? e() : s();
    }function s() {
      r || (r = setInterval(function () {
        o.root[o.origin.offset] && (e(), o.update());
      }, 300));
    }function e() {
      clearInterval(r), r = null;
    }var r,
        o = this,
        n = o._debounce(function () {
      o.update();
    }, 300);this._observer = new i(function () {
      t(), o.update(), n();
    }), this.on("init", function () {
      o._observer.observe(o.root, { childList: !0, subtree: !0, characterData: !0 }), t();
    }), this.on("dispose", function () {
      o._observer.disconnect(), e(), delete o._observer;
    });
  };baron.fn.autoUpdate = function (t) {
    if (!i) return this;for (var e = 0; this[e];) s.call(this[e], t), e++;return this;
  };
})(window), (function () {
  var t = function t(_t) {
    var i,
        s,
        e,
        r,
        o,
        n = this;r = _t.screen || .9, _t.forward && (i = this.$(_t.forward, this.clipper), o = { element: i, handler: function handler() {
        var i = n.pos() - _t.delta || 30;n.pos(i);
      }, type: "click" }, this._eventHandlers.push(o), this.event(o.element, o.type, o.handler, "on")), _t.backward && (s = this.$(_t.backward, this.clipper), o = { element: s, handler: function handler() {
        var i = n.pos() + _t.delta || 30;n.pos(i);
      }, type: "click" }, this._eventHandlers.push(o), this.event(o.element, o.type, o.handler, "on")), _t.track && (e = _t.track === !0 ? this.track : this.$(_t.track, this.clipper)[0], e && (o = { element: e, handler: function handler(t) {
        var i = t["offset" + n.origin.x],
            s = n.bar[n.origin.offsetPos],
            e = 0;s > i ? e = -1 : i > s + n.bar[n.origin.offset] && (e = 1);var o = n.pos() + e * r * n.scroller[n.origin.client];n.pos(o);
      }, type: "mousedown" }, this._eventHandlers.push(o), this.event(o.element, o.type, o.handler, "on")));
  };baron.fn.controls = function (i) {
    for (var s = 0; this[s];) t.call(this[s], i), s++;return this;
  };
})(window), (function () {
  var t = function t(_t2) {
    function i() {
      return m.scroller[m.origin.scroll] + m.scroller[m.origin.offset];
    }function s() {
      return m.scroller[m.origin.scrollSize];
    }function e() {
      return m.scroller[m.origin.client];
    }function r(t, i) {
      var s = 5e-4 * t;return Math.floor(i - s * (t + 550));
    }function o(t) {
      h = t, t ? (n(), l = setInterval(n, 200)) : clearInterval(l);
    }function n() {
      var n,
          l,
          h = {},
          $ = i(),
          z = s(),
          T = 1 == b;if ((l = 0, b > 0 && (l = 40), n = r(y, l), $ >= z - y && b > -1 ? T && (y += n) : y = 0, 0 > y && (y = 0), h[f] = y + "px", e() <= s())) {
        m.$(u).css(h);for (var O = 0; O < v.length; O++) m.$(v[O].self).css(v[O].property, Math.min(y / p * 100, 100) + "%");
      }g && y && m.$(m.root).addClass(g), 0 == y && _t2.onCollapse && _t2.onCollapse(), b = 0, c = setTimeout(function () {
        b = -1;
      }, w), d && y > p && !a && (d(), a = !0), 0 == y ? C++ : C = 0, C > 1 && (o(!1), a = !1, g && m.$(m.root).removeClass(g));
    }var l,
        c,
        a,
        h,
        u = this.$(_t2.block),
        f = _t2.size || this.origin.size,
        p = _t2.limit || 80,
        d = _t2.onExpand,
        v = _t2.elements || [],
        g = _t2.inProgress || "",
        m = this,
        b = 0,
        C = 0,
        y = 0,
        w = _t2.waiting || 500;this.on("init", function () {
      o(!0);
    }), this.on("dispose", function () {
      o(!1);
    }), this.event(this.scroller, "mousewheel DOMMouseScroll", function (t) {
      var e = t.wheelDelta < 0 || t.originalEvent && t.originalEvent.wheelDelta < 0 || t.detail > 0;e && (b = 1, clearTimeout(c), !h && i() >= s() && o(!0));
    });
  };baron.fn.pull = function (i) {
    for (var s = 0; this[s];) t.call(this[s], i), s++;return this;
  };
})(window);
window.addEventListener('load', function (event) {

	navigation.init();
	screenLocker.check();
	settings.init();

	window.addEventListener('resize', function () {
		navigation.check();
		screenLocker.check();
	}, false);

	// Sidebar
	document.addEventListener('mousedown', function (event) {
		if (event.target.hasAttribute('data-sidebar-toggle') && navigation.state === 0) {
			navigation.show();
			event.target.classList.remove(navigation.togglerHideClass);
		} else if (event.target.hasAttribute('data-sidebar-toggle') && navigation.state === 1) {
			navigation.close();
			settings.close();
			event.target.classList.add(navigation.togglerHideClass);
		}
	}, false);

	// Group and links
	document.addEventListener('mousedown', function (event) {
		if (event.target.hasAttribute('data-navigation-item') || event.target.parentNode.hasAttribute('data-navigation-item')) {
			var target = event.target.hasAttribute('data-navigation-item') ? event.target : event.target.parentNode;
			navigation.link(target);
		} else if (event.target.hasAttribute('data-navigation-group') || event.target.parentNode.hasAttribute('data-navigation-group')) {
			var target = event.target.hasAttribute('data-navigation-group') ? event.target : event.target.parentNode;
			navigation.group(target);
		}
	}, true);
}, false);
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/*

	show(@domEl, @function)

*/

var Modal = (function () {
	function Modal() {
		_classCallCheck(this, Modal);

		this.modals = document.querySelectorAll('[data-popup]');
		this.transition = 400;
		this.classes = ['opacity', 'visible'];
	}

	_createClass(Modal, [{
		key: 'show',
		value: function show() {
			var popup = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
			var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

			if (popup === null) return;
			popup.classList.add(this.classes[1]);
			popup.classList.add(this.classes[0]);
			if (callback !== null && typeof callback === 'function') {
				var timeout = setTimeout(function () {
					callback();
				}, this.transition);
			}
		}
	}, {
		key: 'close',
		value: function close() {
			var _this = this;

			var popup = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
			var callback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

			if (popup === null) return;
			popup.classList.remove(this.classes[0]);
			var timeout = setTimeout(function () {
				popup.classList.remove(_this.classes[1]);
				if (callback !== null && typeof callback === 'function') {
					callback.call(overlay);
				}
			}, this.transition);
		}
	}]);

	return Modal;
})();

window.modal = new Modal();
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/*

	Метод Check проверяет ширину окна и если она меньше брекпоинта
	то скрывает сайдбар, если больше - то показывает
	первый коллбек - открытие
	второй коллбек - закрытие
	Check(@function, @function)


	Navigation.state
	0 - закрыто
	1 - открыто

*/

var Navigation = (function () {
	function Navigation() {
		_classCallCheck(this, Navigation);

		this.transitionTime = 550;
		this.self = document.querySelector('[data-navigation-panel]');
		this.settings = document.querySelector('[data-navigation-panel]');
		this.toggler = document.querySelector('[data-sidebar-toggle]');
		this.links = document.querySelectorAll('[data-navigation-item]');
		this.groups = document.querySelectorAll('[data-navigation-group]');
		this.breakpoint = 1100;
		// classes
		this.hideClass = 'navbar-hidden';
		this.togglerHideClass = 'note-hidden';
		this.linkActive = 'choosed';
		this.groupActive = 'opened';
		this.groupSetActive = 'group-content-opened';
		// states
		this.state = window.innerWidth > this.breakpoint ? 1 : 0;
	}

	_createClass(Navigation, [{
		key: 'init',
		value: function init() {
			var windowWidth = window.innerWidth;
			if (windowWidth > this.breakpoint) {
				this.show();
			} else {
				this.close();
			}
		}
	}, {
		key: 'close',
		value: function close() {
			var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

			this.self.classList.add(this.hideClass);
			this.toggler.classList.add(this.togglerHideClass);
			this.state = 0;
			if (callback !== null && typeof callback === 'function') {
				var timeout = setTimeout(function () {
					callback();
				}, this.transition);
			}
		}
	}, {
		key: 'show',
		value: function show() {
			var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

			this.self.classList.remove(this.hideClass);
			this.toggler.classList.remove(this.togglerHideClass);
			this.state = 1;
			if (callback !== null && typeof callback === 'function') {
				var timeout = setTimeout(function () {
					callback();
				}, this.transition);
			}
		}
	}, {
		key: 'check',
		value: function check() {
			var showCallback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
			var closeCallback = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

			var windowWidth = window.innerWidth;
			if (windowWidth > this.breakpoint && this.state === 0) {
				this.show(showCallback);
			} else if (windowWidth <= this.breakpoint && this.state === 1) {
				this.close(closeCallback);
				settings.close();
			}
		}
	}, {
		key: 'group',
		value: function group() {
			var _this = this;

			var domEl = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

			if (domEl === null) return;
			if (domEl.getAttribute('data-navigation-group') === 'active') {
				domEl.classList.remove(this.groupActive);
				domEl.querySelector('[data-navigation-groupset]').classList.remove(this.groupSetActive);
				domEl.setAttribute('data-navigation-group', null);
				return;
			}
			// single element only active
			[].forEach.call(this.groups, function (el) {
				el.classList.remove(_this.groupActive);
				el.querySelector('[data-navigation-groupset]').classList.remove(_this.groupSetActive);
				el.setAttribute('data-navigation-group', null);
			});
			domEl.classList.add(this.groupActive);
			domEl.setAttribute('data-navigation-group', 'active');
			domEl.querySelector('[data-navigation-groupset]').classList.add(this.groupSetActive);
		}
	}, {
		key: 'link',
		value: function link() {
			var _this2 = this;

			var domEl = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

			if (domEl === null || domEl.getAttribute('data-navigation-item') === 'active') return;
			[].forEach.call(this.links, function (el) {
				el.classList.remove(_this2.linkActive);
				el.setAttribute('data-navigation-item', null);
			});
			domEl.classList.add(this.linkActive);
			domEl.setAttribute('data-navigation-item', 'active');
		}
	}]);

	return Navigation;
})();

window.navigation = new Navigation();

// "use strict"
// var w = document.documentElement.clientWidth;

// function closeNav () {
// 		$(".navbar").addClass("navbar-hidden");
// 		$(".note").addClass("note-hidden");
// 		$('.settings-sidebar').addClass('settings-sidebar-none');
// 	}
// function showNav () {
// 		$(".navbar").removeClass("navbar-hidden");
// 		$(".note").removeClass("note-hidden");
// 		$('.settings-sidebar').removeClass('settings-sidebar-none');
// 	}

// function showSidebar () {
// 	$('.settings-sidebar').removeClass("settings-sidebar-hidden");
// 		setTimeout("$('.settings-sidebar').css({'z-index': 3})", 450);
// }
// function closeSidebar () {
// 		$('.settings-sidebar').addClass('settings-sidebar-hidden');
// 		$('.settings-sidebar').css({'z-index': 0});

// }

// $( window ).resize(function() {
// 	w = document.documentElement.clientWidth;
// 	if (w < 1100) {
// 		closeNav();
// 	} else {
// 		showNav();
// 	};
// });

// $(".note").on("click", function() {
// 	if ($(".note").hasClass("note-hidden")) {
// 		showNav();

// 	} else {
// 		closeNav();
// 		closeSidebar();
// 	}
// })

// $('.group').find('.name').on("click", function () {
// 	var group = $(this).parent();
// 	if ( group.hasClass("opened") ) {

// 		group.removeClass("opened");
// 		group.find(".group-content").toggleClass("group-content-opened");
// 	}
// 	else {

// 		group.addClass("opened");
// 		group.find(".group-content").toggleClass("group-content-opened");
// 	}

// });

// $('.items').on("click", function () {
// 	var item = $(this);
// 	if ( !item.hasClass("choosed") ) {
// 		item.addClass('choosed');
// 		item.siblings().removeClass('choosed');
// 	};
// });

// $('.icon-box').on('click', function () {
// 	if ($('.settings-sidebar').hasClass('settings-sidebar-hidden')) {
// 		showSidebar();
// 	} else {
// 		closeSidebar();
// 	}
// })

// $('.settings-sidebar')
// 	.find('.settings-sidebar-header')
// 		.find('.closebtn').on('click', function () {
// 			closeSidebar();
// 		})
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/*

	State
	0 - скрыт
	1 - открыт

*/

var Overlay = (function () {
	function Overlay() {
		_classCallCheck(this, Overlay);

		this.state = 0;
		this.self = document.querySelector('[data-overlay]');
		this.transition = 600;
		this.classes = ['opacity', 'visible'];
	}

	_createClass(Overlay, [{
		key: 'show',
		value: function show() {
			var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

			if (this.state === 1) return;
			this.self.classList.add(this.classes[0]);
			this.self.classList.add(this.classes[1]);
			this.state = 1;
			if (callback !== null && typeof callback === 'function') {
				var timeout = setTimeout(function () {
					callback();
				}, this.transition);
			}
		}
	}, {
		key: 'close',
		value: function close() {
			var _this = this;

			var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

			if (this.state === 0) return;
			this.self.classList.remove(this.classes[0]);
			this.state = 0;
			var timeout = setTimeout(function () {
				_this.self.classList.remove(_this.classes[1]);
				if (callback !== null && typeof callback === 'function') {
					callback();
				}
			}, this.transition);
		}
	}]);

	return Overlay;
})();

window.overlay = new Overlay();
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ScreenLocker = (function () {
	function ScreenLocker() {
		_classCallCheck(this, ScreenLocker);

		this.modal = document.querySelector('[data-popup="mobile"]');
		this.widthBreakpoint = 979;
		this.heightBreakpoint = 499;
		this.state = 0;
	}

	_createClass(ScreenLocker, [{
		key: 'check',
		value: function check() {
			// if (this.state === 1) return;
			var w = window.innerWidth,
			    h = window.innerHeight;
			if (w <= this.widthBreakpoint || h <= this.heightBreakpoint) {
				this.lock();
				// this.state = 1;
			} else {
					this.unlock();
				}
		}
	}, {
		key: 'lock',
		value: function lock() {
			var _this = this;

			overlay.show(modal.show(this.modal));
			document.addEventListener('mousedown', function (event) {
				if (event.target.hasAttribute('data-close-popup')) {
					modal.close(_this.modal, overlay.close);
				}
			}, false);
		}
	}, {
		key: 'unlock',
		value: function unlock() {
			overlay.close();
		}
	}]);

	return ScreenLocker;
})();

window.screenLocker = new ScreenLocker();
//
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/*

	State
	0 - closed
	1 - opened

*/

var Settings = (function () {
	function Settings() {
		_classCallCheck(this, Settings);

		this.self = document.querySelector('[data-settings]');
		this.transition = 550;
		this.togglers = document.querySelectorAll('[data-settings-toggle]');
		this.activeClass = 'settings-sidebar-visible';
		this.state = 0;
	}

	_createClass(Settings, [{
		key: 'init',
		value: function init() {
			var _this = this;

			[].forEach.call(this.togglers, function (el) {
				el.addEventListener('mousedown', function (event) {
					_this.toggle();
				}, true);
			});
		}
	}, {
		key: 'show',
		value: function show() {
			if (this.state === 1) return;
			this.self.classList.add(this.activeClass);
			this.state = 1;
		}
	}, {
		key: 'close',
		value: function close() {
			if (this.state === 0) return;
			this.self.classList.remove(this.activeClass);
			this.state = 0;
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			if (this.state === 0) {
				this.show();
			} else {
				this.close();
			}
		}
	}]);

	return Settings;
})();

window.settings = new Settings();
//# sourceMappingURL=maps/app.js.map
