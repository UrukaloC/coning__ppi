function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }! function(t) {
    "use strict";

    function e(t) {
        if (void 0 === Function.prototype.name) {
            var e = /function\s([^(]{1,})\(/,
                i = e.exec(t.toString());
            return i && i.length > 1 ? i[1].trim() : ""
        }
        return void 0 === t.prototype ? t.constructor.name : t.prototype.constructor.name
    }

    function i(t) { return /true/.test(t) ? !0 : /false/.test(t) ? !1 : isNaN(1 * t) ? t : parseFloat(t) }

    function n(t) { return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() }
    var s = "6.2.0",
        o = {
            version: s,
            _plugins: {},
            _uuids: [],
            rtl: function() { return "rtl" === t("html").attr("dir") },
            plugin: function(t, i) {
                var s = i || e(t),
                    o = n(s);
                this._plugins[o] = this[s] = t
            },
            registerPlugin: function(t, i) {
                var s = i ? n(i) : e(t.constructor).toLowerCase();
                t.uuid = this.GetYoDigits(6, s), t.$element.attr("data-" + s) || t.$element.attr("data-" + s, t.uuid), t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t), t.$element.trigger("init.zf." + s), this._uuids.push(t.uuid)
            },
            unregisterPlugin: function(t) {
                var i = n(e(t.$element.data("zfPlugin").constructor));
                this._uuids.splice(this._uuids.indexOf(t.uuid), 1), t.$element.removeAttr("data-" + i).removeData("zfPlugin").trigger("destroyed.zf." + i);
                for (var s in t) t[s] = null
            },
            reInit: function(e) {
                var i = e instanceof t;
                try {
                    if (i) e.each(function() { t(this).data("zfPlugin")._init() });
                    else {
                        var s = typeof e,
                            o = this,
                            a = { object: function(e) { e.forEach(function(e) { e = n(e), t("[data-" + e + "]").foundation("_init") }) }, string: function() { e = n(e), t("[data-" + e + "]").foundation("_init") }, undefined: function() { this.object(Object.keys(o._plugins)) } };
                        a[s](e)
                    }
                } catch (r) { console.error(r) } finally { return e }
            },
            GetYoDigits: function(t, e) { return t = t || 6, Math.round(Math.pow(36, t + 1) - Math.random() * Math.pow(36, t)).toString(36).slice(1) + (e ? "-" + e : "") },
            reflow: function(e, n) {
                "undefined" == typeof n ? n = Object.keys(this._plugins) : "string" == typeof n && (n = [n]);
                var s = this;
                t.each(n, function(n, o) {
                    var a = s._plugins[o],
                        r = t(e).find("[data-" + o + "]").addBack("[data-" + o + "]");
                    r.each(function() {
                        var e = t(this),
                            n = {};
                        if (e.data("zfPlugin")) return void console.warn("Tried to initialize " + o + " on an element that already has a Foundation plugin.");
                        if (e.attr("data-options")) {
                            e.attr("data-options").split(";").forEach(function(t, e) {
                                var s = t.split(":").map(function(t) { return t.trim() });
                                s[0] && (n[s[0]] = i(s[1]))
                            })
                        }
                        try { e.data("zfPlugin", new a(t(this), n)) } catch (s) { console.error(s) } finally { return }
                    })
                })
            },
            getFnName: e,
            transitionend: function(t) {
                var e, i = { transition: "transitionend", WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend" },
                    n = document.createElement("div");
                for (var s in i) "undefined" != typeof n.style[s] && (e = i[s]);
                return e ? e : (e = setTimeout(function() { t.triggerHandler("transitionend", [t]) }, 1), "transitionend")
            }
        };
    o.util = {
        throttle: function(t, e) {
            var i = null;
            return function() {
                var n = this,
                    s = arguments;
                null === i && (i = setTimeout(function() { t.apply(n, s), i = null }, e))
            }
        }
    };
    var a = function(i) {
        var n = typeof i,
            s = t("meta.foundation-mq"),
            a = t(".no-js");
        if (s.length || t('<meta class="foundation-mq">').appendTo(document.head), a.length && a.removeClass("no-js"), "undefined" === n) o.MediaQuery._init(), o.reflow(this);
        else {
            if ("string" !== n) throw new TypeError("We're sorry, " + n + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
            var r = Array.prototype.slice.call(arguments, 1),
                l = this.data("zfPlugin");
            if (void 0 === l || void 0 === l[i]) throw new ReferenceError("We're sorry, '" + i + "' is not an available method for " + (l ? e(l) : "this element") + ".");
            1 === this.length ? l[i].apply(l, r) : this.each(function(e, n) { l[i].apply(t(n).data("zfPlugin"), r) })
        }
        return this
    };
    window.Foundation = o, t.fn.foundation = a,
        function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() { return (new Date).getTime() });
            for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
                var i = t[e];
                window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var n = 0;
                window.requestAnimationFrame = function(t) {
                    var e = Date.now(),
                        i = Math.max(n + 16, e);
                    return setTimeout(function() { t(n = i) }, i - e)
                }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = { start: Date.now(), now: function() { return Date.now() - this.start } })
        }(), Function.prototype.bind || (Function.prototype.bind = function(t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var e = Array.prototype.slice.call(arguments, 1),
                i = this,
                n = function() {},
                s = function() { return i.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments))) };
            return this.prototype && (n.prototype = this.prototype), s.prototype = new n, s
        })
}(jQuery), ! function(t) {
    function e(t, e, n, s) {
        var o, a, r, l, u = i(t);
        if (e) {
            var d = i(e);
            a = u.offset.top + u.height <= d.height + d.offset.top, o = u.offset.top >= d.offset.top, r = u.offset.left >= d.offset.left, l = u.offset.left + u.width <= d.width
        } else a = u.offset.top + u.height <= u.windowDims.height + u.windowDims.offset.top, o = u.offset.top >= u.windowDims.offset.top, r = u.offset.left >= u.windowDims.offset.left, l = u.offset.left + u.width <= u.windowDims.width;
        var h = [a, o, r, l];
        return n ? r === l == !0 : s ? o === a == !0 : -1 === h.indexOf(!1)
    }

    function i(t, e) {
        if (t = t.length ? t[0] : t, t === window || t === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var i = t.getBoundingClientRect(),
            n = t.parentNode.getBoundingClientRect(),
            s = document.body.getBoundingClientRect(),
            o = window.pageYOffset,
            a = window.pageXOffset;
        return { width: i.width, height: i.height, offset: { top: i.top + o, left: i.left + a }, parentDims: { width: n.width, height: n.height, offset: { top: n.top + o, left: n.left + a } }, windowDims: { width: s.width, height: s.height, offset: { top: o, left: a } } }
    }

    function n(t, e, n, s, o, a) {
        var r = i(t),
            l = e ? i(e) : null;
        switch (n) {
            case "top":
                return { left: Foundation.rtl() ? l.offset.left - r.width + l.width : l.offset.left, top: l.offset.top - (r.height + s) };
            case "left":
                return { left: l.offset.left - (r.width + o), top: l.offset.top };
            case "right":
                return { left: l.offset.left + l.width + o, top: l.offset.top };
            case "center top":
                return { left: l.offset.left + l.width / 2 - r.width / 2, top: l.offset.top - (r.height + s) };
            case "center bottom":
                return { left: a ? o : l.offset.left + l.width / 2 - r.width / 2, top: l.offset.top + l.height + s };
            case "center left":
                return { left: l.offset.left - (r.width + o), top: l.offset.top + l.height / 2 - r.height / 2 };
            case "center right":
                return { left: l.offset.left + l.width + o + 1, top: l.offset.top + l.height / 2 - r.height / 2 };
            case "center":
                return { left: r.windowDims.offset.left + r.windowDims.width / 2 - r.width / 2, top: r.windowDims.offset.top + r.windowDims.height / 2 - r.height / 2 };
            case "reveal":
                return { left: (r.windowDims.width - r.width) / 2, top: r.windowDims.offset.top + s };
            case "reveal full":
                return { left: r.windowDims.offset.left, top: r.windowDims.offset.top };
            default:
                return { left: Foundation.rtl() ? l.offset.left - r.width + l.width : l.offset.left, top: l.offset.top + l.height + s }
        }
    }
    Foundation.Box = { ImNotTouchingYou: e, GetDimensions: i, GetOffsets: n }
}(jQuery), ! function(t) {
    function e(t) { var e = {}; for (var i in t) e[t[i]] = t[i]; return e }
    var i = { 9: "TAB", 13: "ENTER", 27: "ESCAPE", 32: "SPACE", 37: "ARROW_LEFT", 38: "ARROW_UP", 39: "ARROW_RIGHT", 40: "ARROW_DOWN" },
        n = {},
        s = {
            keys: e(i),
            parseKey: function(t) { var e = i[t.which || t.keyCode] || String.fromCharCode(t.which).toUpperCase(); return t.shiftKey && (e = "SHIFT_" + e), t.ctrlKey && (e = "CTRL_" + e), t.altKey && (e = "ALT_" + e), e },
            handleKey: function(e, i, s) {
                var o, a, r, l = n[i],
                    u = this.parseKey(e);
                return l ? (o = "undefined" == typeof l.ltr ? l : Foundation.rtl() ? t.extend({}, l.ltr, l.rtl) : t.extend({}, l.rtl, l.ltr), a = o[u], r = s[a], void(r && "function" == typeof r ? (r.apply(), (s.handled || "function" == typeof s.handled) && s.handled.apply()) : (s.unhandled || "function" == typeof s.unhandled) && s.unhandled.apply())) : console.warn("Component not defined!")
            },
            findFocusable: function(e) { return e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() { return t(this).is(":visible") && !(t(this).attr("tabindex") < 0) }) },
            register: function(t, e) { n[t] = e }
        };
    Foundation.Keyboard = s
}(jQuery), ! function(t) {
    function e(t) {
        var e = {};
        return "string" != typeof t ? e : (t = t.trim().slice(1, -1)) ? e = t.split("&").reduce(function(t, e) {
            var i = e.replace(/\+/g, " ").split("="),
                n = i[0],
                s = i[1];
            return n = decodeURIComponent(n), s = void 0 === s ? null : decodeURIComponent(s), t.hasOwnProperty(n) ? Array.isArray(t[n]) ? t[n].push(s) : t[n] = [t[n], s] : t[n] = s, t
        }, {}) : e
    }
    var i = {
        queries: [],
        current: "",
        _init: function() {
            var i, n = this,
                s = t(".foundation-mq").css("font-family");
            i = e(s);
            for (var o in i) n.queries.push({ name: o, value: "only screen and (min-width: " + i[o] + ")" });
            this.current = this._getCurrentSize(), this._watcher()
        },
        atLeast: function(t) { var e = this.get(t); return e ? window.matchMedia(e).matches : !1 },
        get: function(t) { for (var e in this.queries) { var i = this.queries[e]; if (t === i.name) return i.value } return null },
        _getCurrentSize: function() {
            var t;
            for (var e in this.queries) {
                var i = this.queries[e];
                window.matchMedia(i.value).matches && (t = i)
            }
            return "object" == typeof t ? t.name : t
        },
        _watcher: function() {
            var e = this;
            t(window).on("resize.zf.mediaquery", function() {
                var i = e._getCurrentSize();
                i !== e.current && (t(window).trigger("changed.zf.mediaquery", [i, e.current]), e.current = i)
            })
        }
    };
    Foundation.MediaQuery = i, window.matchMedia || (window.matchMedia = function() {
        "use strict";
        var t = window.styleMedia || window.media;
        if (!t) {
            var e = document.createElement("style"),
                i = document.getElementsByTagName("script")[0],
                n = null;
            e.type = "text/css", e.id = "matchmediajs-test", i.parentNode.insertBefore(e, i), n = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle, t = { matchMedium: function(t) { var i = "@media " + t + "{ #matchmediajs-test { width: 1px; } }"; return e.styleSheet ? e.styleSheet.cssText = i : e.textContent = i, "1px" === n.width } }
        }
        return function(e) { return { matches: t.matchMedium(e || "all"), media: e || "all" } }
    }()), Foundation.MediaQuery = i
}(jQuery), ! function(t) {
    function e(t, e, i) {
        function n(r) { a || (a = window.performance.now()), o = r - a, i.apply(e), t > o ? s = window.requestAnimationFrame(n, e) : (window.cancelAnimationFrame(s), e.trigger("finished.zf.animate", [e]).triggerHandler("finished.zf.animate", [e])) }
        var s, o, a = null;
        s = window.requestAnimationFrame(n)
    }

    function i(e, i, o, a) {
        function r() { e || i.hide(), l(), a && a.apply(i) }

        function l() { i[0].style.transitionDuration = 0, i.removeClass(u + " " + d + " " + o) }
        if (i = t(i).eq(0), i.length) {
            var u = e ? n[0] : n[1],
                d = e ? s[0] : s[1];
            l(), i.addClass(o).css("transition", "none"), requestAnimationFrame(function() { i.addClass(u), e && i.show() }), requestAnimationFrame(function() { i[0].offsetWidth, i.css("transition", "").addClass(d) }), i.one(Foundation.transitionend(i), r)
        }
    }
    var n = ["mui-enter", "mui-leave"],
        s = ["mui-enter-active", "mui-leave-active"],
        o = { animateIn: function(t, e, n) { i(!0, t, e, n) }, animateOut: function(t, e, n) { i(!1, t, e, n) } };
    Foundation.Move = e, Foundation.Motion = o
}(jQuery), ! function(t) {
    var e = {
        Feather: function(e) {
            var i = arguments.length <= 1 || void 0 === arguments[1] ? "zf" : arguments[1];
            e.attr("role", "menubar");
            var n = e.find("li").attr({ role: "menuitem" }),
                s = "is-" + i + "-submenu",
                o = s + "-item",
                a = "is-" + i + "-submenu-parent";
            e.find("a:first").attr("tabindex", 0), n.each(function() {
                var e = t(this),
                    i = e.children("ul");
                i.length && (e.addClass(a).attr({ "aria-haspopup": !0, "aria-expanded": !1, "aria-label": e.children("a:first").text() }), i.addClass("submenu " + s).attr({ "data-submenu": "", "aria-hidden": !0, role: "menu" })), e.parent("[data-submenu]").length && e.addClass("is-submenu-item " + o)
            })
        },
        Burn: function(t, e) {
            var i = (t.find("li").removeAttr("tabindex"), "is-" + e + "-submenu"),
                n = i + "-item",
                s = "is-" + e + "-submenu-parent";
            t.find("*").removeClass(i + " " + n + " " + s + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
        }
    };
    Foundation.Nest = e
}(jQuery), ! function(t) {
    function e(t, e, i) {
        var n, s, o = this,
            a = e.duration,
            r = Object.keys(t.data())[0] || "timer",
            l = -1;
        this.isPaused = !1, this.restart = function() { l = -1, clearTimeout(s), this.start() }, this.start = function() { this.isPaused = !1, clearTimeout(s), l = 0 >= l ? a : l, t.data("paused", !1), n = Date.now(), s = setTimeout(function() { e.infinite && o.restart(), i() }, l), t.trigger("timerstart.zf." + r) }, this.pause = function() {
            this.isPaused = !0, clearTimeout(s), t.data("paused", !0);
            var e = Date.now();
            l -= e - n, t.trigger("timerpaused.zf." + r)
        }
    }

    function i(e, i) {
        function n() { s--, 0 === s && i() }
        var s = e.length;
        0 === s && i(), e.each(function() { this.complete ? n() : "undefined" != typeof this.naturalWidth && this.naturalWidth > 0 ? n() : t(this).one("load", function() { n() }) })
    }
    Foundation.Timer = e, Foundation.onImagesLoaded = i
}(jQuery),
function(t) {
    function e() { this.removeEventListener("touchmove", i), this.removeEventListener("touchend", e), u = !1 }

    function i(i) {
        if (t.spotSwipe.preventDefault && i.preventDefault(), u) {
            var n, s = i.touches[0].pageX,
                a = (i.touches[0].pageY, o - s);
            l = (new Date).getTime() - r, Math.abs(a) >= t.spotSwipe.moveThreshold && l <= t.spotSwipe.timeThreshold && (n = a > 0 ? "left" : "right"), n && (i.preventDefault(), e.call(this), t(this).trigger("swipe", n).trigger("swipe" + n))
        }
    }

    function n(t) { 1 == t.touches.length && (o = t.touches[0].pageX, a = t.touches[0].pageY, u = !0, r = (new Date).getTime(), this.addEventListener("touchmove", i, !1), this.addEventListener("touchend", e, !1)) }

    function s() { this.addEventListener && this.addEventListener("touchstart", n, !1) }
    t.spotSwipe = { version: "1.0.0", enabled: "ontouchstart" in document.documentElement, preventDefault: !1, moveThreshold: 75, timeThreshold: 200 };
    var o, a, r, l, u = !1;
    t.event.special.swipe = { setup: s }, t.each(["left", "up", "down", "right"], function() { t.event.special["swipe" + this] = { setup: function() { t(this).on("swipe", t.noop) } } })
}(jQuery), ! function(t) {
    t.fn.addTouch = function() {
        this.each(function(i, n) { t(n).bind("touchstart touchmove touchend touchcancel", function() { e(event) }) });
        var e = function(t) {
            var e, i = t.changedTouches,
                n = i[0],
                s = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup" },
                o = s[t.type];
            "MouseEvent" in window && "function" == typeof window.MouseEvent ? e = window.MouseEvent(o, { bubbles: !0, cancelable: !0, screenX: n.screenX, screenY: n.screenY, clientX: n.clientX, clientY: n.clientY }) : (e = document.createEvent("MouseEvent"), e.initMouseEvent(o, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null)), n.target.dispatchEvent(e)
        }
    }
}(jQuery), ! function(t) {
    function e() { o(), n(), s(), i() }

    function i(e) {
        var i = t("[data-yeti-box]"),
            n = ["dropdown", "tooltip", "reveal"];
        if (e && ("string" == typeof e ? n.push(e) : "object" == typeof e && "string" == typeof e[0] ? n.concat(e) : console.error("Plugin names must be strings")), i.length) {
            var s = n.map(function(t) { return "closeme.zf." + t }).join(" ");
            t(window).off(s).on(s, function(e, i) {
                var n = e.namespace.split(".")[0],
                    s = t("[data-" + n + "]").not('[data-yeti-box="' + i + '"]');
                s.each(function() {
                    var e = t(this);
                    e.triggerHandler("close.zf.trigger", [e])
                })
            })
        }
    }

    function n(e) {
        var i = void 0,
            n = t("[data-resize]");
        n.length && t(window).off("resize.zf.trigger").on("resize.zf.trigger", function(s) { i && clearTimeout(i), i = setTimeout(function() { a || n.each(function() { t(this).triggerHandler("resizeme.zf.trigger") }), n.attr("data-events", "resize") }, e || 10) })
    }

    function s(e) {
        var i = void 0,
            n = t("[data-scroll]");
        n.length && t(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function(s) { i && clearTimeout(i), i = setTimeout(function() { a || n.each(function() { t(this).triggerHandler("scrollme.zf.trigger") }), n.attr("data-events", "scroll") }, e || 10) })
    }

    function o() {
        if (!a) return !1;
        var e = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),
            i = function(e) {
                var i = t(e[0].target);
                switch (i.attr("data-events")) {
                    case "resize":
                        i.triggerHandler("resizeme.zf.trigger", [i]);
                        break;
                    case "scroll":
                        i.triggerHandler("scrollme.zf.trigger", [i, window.pageYOffset]);
                        break;
                    default:
                        return !1
                }
            };
        if (e.length)
            for (var n = 0; n <= e.length - 1; n++) {
                var s = new a(i);
                s.observe(e[n], { attributes: !0, childList: !1, characterData: !1, subtree: !1, attributeFilter: ["data-events"] })
            }
    }
    var a = function() {
            for (var t = ["WebKit", "Moz", "O", "Ms", ""], e = 0; e < t.length; e++)
                if (t[e] + "MutationObserver" in window) return window[t[e] + "MutationObserver"];
            return !1
        }(),
        r = function(e, i) { e.data(i).split(" ").forEach(function(n) { t("#" + n)["close" === i ? "trigger" : "triggerHandler"](i + ".zf.trigger", [e]) }) };
    t(document).on("click.zf.trigger", "[data-open]", function() { r(t(this), "open") }), t(document).on("click.zf.trigger", "[data-close]", function() {
        var e = t(this).data("close");
        e ? r(t(this), "close") : t(this).trigger("close.zf.trigger")
    }), t(document).on("click.zf.trigger", "[data-toggle]", function() { r(t(this), "toggle") }), t(document).on("close.zf.trigger", "[data-closable]", function(e) { e.stopPropagation(); var i = t(this).data("closable"); "" !== i ? Foundation.Motion.animateOut(t(this), i, function() { t(this).trigger("closed.zf") }) : t(this).fadeOut().trigger("closed.zf") }), t(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function() {
        var e = t(this).data("toggle-focus");
        t("#" + e).triggerHandler("toggle.zf.trigger", [t(this)])
    }), t(window).load(function() { e() }), Foundation.IHearYou = e
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i) {
            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Abide")
        }
        return _createClass(e, [{ key: "_init", value: function() { this.$inputs = this.$element.find("input, textarea, select").not("[data-abide-ignore]"), this._events() } }, {
            key: "_events",
            value: function() {
                var e = this;
                this.$element.off(".abide").on("reset.zf.abide", function() { e.resetForm() }).on("submit.zf.abide", function() { return e.validateForm() }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(i) { e.validateInput(t(i.target)) }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(i) { e.validateInput(t(i.target)) })
            }
        }, { key: "_reflow", value: function() { this._init() } }, {
            key: "requiredCheck",
            value: function(t) {
                if (!t.attr("required")) return !0;
                var e = !0;
                switch (t[0].type) {
                    case "checkbox":
                    case "radio":
                        e = t[0].checked;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        var i = t.find("option:selected");
                        i.length && i.val() || (e = !1);
                        break;
                    default:
                        t.val() && t.val().length || (e = !1)
                }
                return e
            }
        }, { key: "findFormError", value: function(t) { var e = t.siblings(this.options.formErrorSelector); return e.length || (e = t.parent().find(this.options.formErrorSelector)), e } }, {
            key: "findLabel",
            value: function(t) {
                var e = t[0].id,
                    i = this.$element.find('label[for="' + e + '"]');
                return i.length ? i : t.closest("label")
            }
        }, {
            key: "addErrorClasses",
            value: function(t) {
                var e = this.findLabel(t),
                    i = this.findFormError(t);
                e.length && e.addClass(this.options.labelErrorClass), i.length && i.addClass(this.options.formErrorClass), t.addClass(this.options.inputErrorClass).attr("data-invalid", "")
            }
        }, {
            key: "removeErrorClasses",
            value: function(t) {
                var e = this.findLabel(t),
                    i = this.findFormError(t);
                e.length && e.removeClass(this.options.labelErrorClass), i.length && i.removeClass(this.options.formErrorClass), t.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "validateInput",
            value: function(t) {
                var e = this.requiredCheck(t),
                    i = !1,
                    n = !0,
                    s = t.attr("data-validator"),
                    o = !0;
                switch (t[0].type) {
                    case "radio":
                        i = this.validateRadio(t.attr("name"));
                        break;
                    case "checkbox":
                        i = e;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        i = e;
                        break;
                    default:
                        i = this.validateText(t)
                }
                s && (n = this.matchValidation(t, s, t.attr("required"))), t.attr("data-equalto") && (o = this.options.validators.equalTo(t));
                var a = -1 === [e, i, n, o].indexOf(!1),
                    r = (a ? "valid" : "invalid") + ".zf.abide";
                return this[a ? "removeErrorClasses" : "addErrorClasses"](t), t.trigger(r, [t]), a
            }
        }, {
            key: "validateForm",
            value: function() {
                var e = [],
                    i = this;
                this.$inputs.each(function() { e.push(i.validateInput(t(this))) });
                var n = -1 === e.indexOf(!1);
                return this.$element.find("[data-abide-error]").css("display", n ? "none" : "block"), this.$element.trigger((n ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), n
            }
        }, { key: "validateText", value: function(t, e) { e = e || t.attr("pattern") || t.attr("type"); var i = t.val(); return i.length ? this.options.patterns.hasOwnProperty(e) ? this.options.patterns[e].test(i) : e && e !== t.attr("type") ? new RegExp(e).test(i) : !0 : !0 } }, {
            key: "validateRadio",
            value: function(e) {
                var i = this.$element.find(':radio[name="' + e + '"]'),
                    n = [],
                    s = this;
                return i.each(function() {
                    var e = t(this),
                        i = s.requiredCheck(e);
                    n.push(i), i && s.removeErrorClasses(e)
                }), -1 === n.indexOf(!1)
            }
        }, {
            key: "matchValidation",
            value: function(t, e, i) {
                var n = this;
                i = !!i;
                var s = e.split(" ").map(function(e) { return n.options.validators[e](t, i, t.parent()) });
                return -1 === s.indexOf(!1)
            }
        }, {
            key: "resetForm",
            value: function() {
                var e = this.$element,
                    i = this.options;
                t("." + i.labelErrorClass, e).not("small").removeClass(i.labelErrorClass), t("." + i.inputErrorClass, e).not("small").removeClass(i.inputErrorClass), t(i.formErrorSelector + "." + i.formErrorClass).removeClass(i.formErrorClass), e.find("[data-abide-error]").css("display", "none"), t(":input", e).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr("data-invalid"), e.trigger("formreset.zf.abide", [e])
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this;
                this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() { e.removeErrorClasses(t(this)) }), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = { validateOn: "fieldChange", labelErrorClass: "is-invalid-label", inputErrorClass: "is-invalid-input", formErrorSelector: ".form-error", formErrorClass: "is-visible", liveValidate: !1, patterns: { alpha: /^[a-zA-Z]+$/, alpha_numeric: /^[a-zA-Z0-9]+$/, integer: /^[-+]?\d+$/, number: /^[-+]?\d*(?:[\.\,]\d+)?$/, card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, cvv: /^([0-9]){3,4}$/, email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/, url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/, domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/, datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/, date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/, time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/, dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/, month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/, day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/, color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/ }, validators: { equalTo: function(e, i, n) { return t("#" + e.attr("data-equalto")).val() === e.val() } } }, Foundation.plugin(e, "Abide")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Accordion"), Foundation.Keyboard.register("Accordion", { ENTER: "toggle", SPACE: "toggle", ARROW_DOWN: "next", ARROW_UP: "previous" }) }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("li"), 0 === this.$tabs.length && (this.$tabs = this.$element.children("[data-accordion-item]")), this.$tabs.each(function(e, i) {
                    var n = t(i),
                        s = n.find("[data-tab-content]"),
                        o = s[0].id || Foundation.GetYoDigits(6, "accordion"),
                        a = i.id || o + "-label";
                    n.find("a:first").attr({ "aria-controls": o, role: "tab", id: a, "aria-expanded": !1, "aria-selected": !1 }), s.attr({ role: "tabpanel", "aria-labelledby": a, "aria-hidden": !0, id: o })
                });
                var e = this.$element.find(".is-active").children("[data-tab-content]");
                e.length && this.down(e, !0), this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                this.$tabs.each(function() {
                    var i = t(this),
                        n = i.children("[data-tab-content]");
                    n.length && i.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(t) { t.preventDefault(), i.hasClass("is-active") ? (e.options.allowAllClosed || i.siblings().hasClass("is-active")) && e.up(n) : e.down(n) }).on("keydown.zf.accordion", function(t) { Foundation.Keyboard.handleKey(t, "Accordion", { toggle: function() { e.toggle(n) }, next: function() { i.next().find("a").focus().trigger("click.zf.accordion") }, previous: function() { i.prev().find("a").focus().trigger("click.zf.accordion") }, handled: function() { t.preventDefault(), t.stopPropagation() } }) })
                })
            }
        }, {
            key: "toggle",
            value: function(t) {
                if (t.parent().hasClass("is-active")) {
                    if (!this.options.allowAllClosed && !t.parent().siblings().hasClass("is-active")) return;
                    this.up(t)
                } else this.down(t)
            }
        }, {
            key: "down",
            value: function(e, i) {
                var n = this;
                if (!this.options.multiExpand && !i) {
                    var s = this.$element.find(".is-active").children("[data-tab-content]");
                    s.length && this.up(s)
                }
                e.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active"), e.slideDown(n.options.slideSpeed, function() { n.$element.trigger("down.zf.accordion", [e]) }), t("#" + e.attr("aria-labelledby")).attr({ "aria-expanded": !0, "aria-selected": !0 })
            }
        }, {
            key: "up",
            value: function(e) {
                var i = e.parent().siblings(),
                    n = this,
                    s = this.options.multiExpand ? i.hasClass("is-active") : e.parent().hasClass("is-active");
                (this.options.allowAllClosed || s) && (e.slideUp(n.options.slideSpeed, function() { n.$element.trigger("up.zf.accordion", [e]) }), e.attr("aria-hidden", !0).parent().removeClass("is-active"), t("#" + e.attr("aria-labelledby")).attr({ "aria-expanded": !1, "aria-selected": !1 }))
            }
        }, { key: "destroy", value: function() { this.$element.find("[data-tab-content]").slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), Foundation.unregisterPlugin(this) } }]), e
    }();
    e.defaults = { slideSpeed: 250, multiExpand: !1, allowAllClosed: !1 }, Foundation.plugin(e, "Accordion")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), Foundation.Nest.Feather(this.$element, "accordion"), this._init(), Foundation.registerPlugin(this, "AccordionMenu"), Foundation.Keyboard.register("AccordionMenu", { ENTER: "toggle", SPACE: "toggle", ARROW_RIGHT: "open", ARROW_UP: "up", ARROW_DOWN: "down", ARROW_LEFT: "close", ESCAPE: "closeAll", TAB: "down", SHIFT_TAB: "up" }) }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({ role: "tablist", "aria-multiselectable": this.options.multiOpen }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function() {
                    var e = this.id || Foundation.GetYoDigits(6, "acc-menu-link"),
                        i = t(this),
                        n = i.children("[data-submenu]"),
                        s = n[0].id || Foundation.GetYoDigits(6, "acc-menu"),
                        o = n.hasClass("is-active");
                    i.attr({ "aria-controls": s, "aria-expanded": o, role: "tab", id: e }), n.attr({ "aria-labelledby": e, "aria-hidden": !o, role: "tabpanel", id: s })
                });
                var e = this.$element.find(".is-active");
                if (e.length) {
                    var i = this;
                    e.each(function() { i.down(t(this)) })
                }
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                this.$element.find("li").each(function() {
                    var i = t(this).children("[data-submenu]");
                    i.length && t(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(t) { t.preventDefault(), e.toggle(i) })
                }).on("keydown.zf.accordionmenu", function(i) {
                    var n, s, o = t(this),
                        a = o.parent("ul").children("li"),
                        r = o.children("[data-submenu]");
                    a.each(function(e) { return t(this).is(o) ? (n = a.eq(Math.max(0, e - 1)), s = a.eq(Math.min(e + 1, a.length - 1)), t(this).children("[data-submenu]:visible").length && (s = o.find("li:first-child")), t(this).is(":first-child") ? n = o.parents("li").first() : n.children("[data-submenu]:visible").length && (n = n.find("li:last-child")), void(t(this).is(":last-child") && (s = o.parents("li").first().next("li")))) : void 0 }), Foundation.Keyboard.handleKey(i, "AccordionMenu", { open: function() { r.is(":hidden") && (e.down(r), r.find("li").first().focus()) }, close: function() { r.length && !r.is(":hidden") ? e.up(r) : o.parent("[data-submenu]").length && (e.up(o.parent("[data-submenu]")), o.parents("li").first().focus()) }, up: function() { n.focus() }, down: function() { s.focus() }, toggle: function() { o.children("[data-submenu]").length && e.toggle(o.children("[data-submenu]")) }, closeAll: function() { e.hideAll() }, handled: function() { i.preventDefault(), i.stopImmediatePropagation() } })
                })
            }
        }, { key: "hideAll", value: function() { this.$element.find("[data-submenu]").slideUp(this.options.slideSpeed) } }, { key: "toggle", value: function(t) { t.is(":animated") || (t.is(":hidden") ? this.down(t) : this.up(t)) } }, {
            key: "down",
            value: function(t) {
                var e = this;
                this.options.multiOpen || this.up(this.$element.find(".is-active").not(t.parentsUntil(this.$element).add(t))),
                    t.addClass("is-active").attr({ "aria-hidden": !1 }).parent(".is-accordion-submenu-parent").attr({ "aria-expanded": !0 }), Foundation.Move(this.options.slideSpeed, t, function() { t.slideDown(e.options.slideSpeed, function() { e.$element.trigger("down.zf.accordionMenu", [t]) }) })
            }
        }, {
            key: "up",
            value: function(t) {
                var e = this;
                Foundation.Move(this.options.slideSpeed, t, function() { t.slideUp(e.options.slideSpeed, function() { e.$element.trigger("up.zf.accordionMenu", [t]) }) });
                var i = t.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", !0);
                i.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1)
            }
        }, { key: "destroy", value: function() { this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), Foundation.Nest.Burn(this.$element, "accordion"), Foundation.unregisterPlugin(this) } }]), e
    }();
    e.defaults = { slideSpeed: 250, multiOpen: !0 }, Foundation.plugin(e, "AccordionMenu")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), Foundation.Nest.Feather(this.$element, "drilldown"), this._init(), Foundation.registerPlugin(this, "Drilldown"), Foundation.Keyboard.register("Drilldown", { ENTER: "open", SPACE: "open", ARROW_RIGHT: "next", ARROW_UP: "up", ARROW_DOWN: "down", ARROW_LEFT: "previous", ESCAPE: "close", TAB: "down", SHIFT_TAB: "up" }) }
        return _createClass(e, [{ key: "_init", value: function() { this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent"), this.$submenus = this.$submenuAnchors.children("[data-submenu]"), this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "menuitem"), this._prepareMenu(), this._keyboardEvents() } }, {
            key: "_prepareMenu",
            value: function() {
                var e = this;
                this.$submenuAnchors.each(function() {
                    var i = t(this),
                        n = i.find("a:first");
                    e.options.parentLink && n.clone().prependTo(i.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'), n.data("savedHref", n.attr("href")).removeAttr("href"), i.children("[data-submenu]").attr({ "aria-hidden": !0, tabindex: 0, role: "menu" }), e._events(i)
                }), this.$submenus.each(function() {
                    var i = t(this),
                        n = i.find(".js-drilldown-back");
                    n.length || i.prepend(e.options.backButton), e._back(i)
                }), this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = t(this.options.wrapper).addClass("is-drilldown").css(this._getMaxDims()), this.$element.wrap(this.$wrapper))
            }
        }, {
            key: "_events",
            value: function(e) {
                var i = this;
                e.off("click.zf.drilldown").on("click.zf.drilldown", function(n) {
                    if (t(n.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (n.stopImmediatePropagation(), n.preventDefault()), i._show(e), i.options.closeOnClick) {
                        var s = t("body").not(i.$wrapper);
                        s.off(".zf.drilldown").on("click.zf.drilldown", function(t) { t.preventDefault(), i._hideAll(), s.off(".zf.drilldown") })
                    }
                })
            }
        }, {
            key: "_keyboardEvents",
            value: function() {
                var e = this;
                this.$menuItems.add(this.$element.find(".js-drilldown-back")).on("keydown.zf.drilldown", function(i) {
                    var n, s, o = t(this),
                        a = o.parent("ul").children("li");
                    a.each(function(e) { return t(this).is(o) ? (n = a.eq(Math.max(0, e - 1)), void(s = a.eq(Math.min(e + 1, a.length - 1)))) : void 0 }), Foundation.Keyboard.handleKey(i, "Drilldown", { next: function() { o.is(e.$submenuAnchors) && (e._show(o), o.on(Foundation.transitionend(o), function() { o.find("ul li").filter(e.$menuItems).first().focus() })) }, previous: function() { e._hide(o.parent("ul")), o.parent("ul").on(Foundation.transitionend(o), function() { setTimeout(function() { o.parent("ul").parent("li").focus() }, 1) }) }, up: function() { n.focus() }, down: function() { s.focus() }, close: function() { e._back() }, open: function() { o.is(e.$menuItems) ? o.is(e.$submenuAnchors) && (e._show(o), setTimeout(function() { o.find("ul li").filter(e.$menuItems).first().focus() }, 1)) : (e._hide(o.parent("ul")), setTimeout(function() { o.parent("ul").parent("li").focus() }, 1)) }, handled: function() { i.preventDefault(), i.stopImmediatePropagation() } })
                })
            }
        }, {
            key: "_hideAll",
            value: function() {
                var t = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
                t.one(Foundation.transitionend(t), function(e) { t.removeClass("is-active is-closing") }), this.$element.trigger("closed.zf.drilldown")
            }
        }, {
            key: "_back",
            value: function(t) {
                var e = this;
                t.off("click.zf.drilldown"), t.children(".js-drilldown-back").on("click.zf.drilldown", function(i) { i.stopImmediatePropagation(), e._hide(t) })
            }
        }, {
            key: "_menuLinkEvents",
            value: function() {
                var t = this;
                this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function(e) { setTimeout(function() { t._hideAll() }, 0) })
            }
        }, { key: "_show", value: function(t) { t.children("[data-submenu]").addClass("is-active"), this.$element.trigger("open.zf.drilldown", [t]) } }, { key: "_hide", value: function(t) { t.addClass("is-closing").one(Foundation.transitionend(t), function() { t.removeClass("is-active is-closing"), t.blur() }), t.trigger("hide.zf.drilldown", [t]) } }, {
            key: "_getMaxDims",
            value: function() {
                var e = 0,
                    i = {};
                return this.$submenus.add(this.$element).each(function() {
                    var i = t(this).children("li").length;
                    e = i > e ? i : e
                }), i["min-height"] = e * this.$menuItems[0].getBoundingClientRect().height + "px", i["max-width"] = this.$element[0].getBoundingClientRect().width + "px", i
            }
        }, {
            key: "destroy",
            value: function() {
                this._hideAll(), Foundation.Nest.Burn(this.$element, "drilldown"), this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role").off(".zf.drilldown").end().off("zf.drilldown"), this.$element.find("a").each(function() {
                    var e = t(this);
                    e.data("savedHref") && e.attr("href", e.data("savedHref")).removeData("savedHref")
                }), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = { backButton: '<li class="js-drilldown-back"><a>Back</a></li>', wrapper: "<div></div>", parentLink: !1, closeOnClick: !1 }, Foundation.plugin(e, "Drilldown")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Dropdown"), Foundation.Keyboard.register("Dropdown", { ENTER: "open", SPACE: "open", ESCAPE: "close", TAB: "tab_forward", SHIFT_TAB: "tab_backward" }) }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element.attr("id");
                this.$anchor = t('[data-toggle="' + e + '"]') || t('[data-open="' + e + '"]'), this.$anchor.attr({ "aria-controls": e, "data-is-focus": !1, "data-yeti-box": e, "aria-haspopup": !0, "aria-expanded": !1 }), this.options.positionClass = this.getPositionClass(), this.counter = 4, this.usedPositions = [], this.$element.attr({ "aria-hidden": "true", "data-yeti-box": e, "data-resize": e, "aria-labelledby": this.$anchor[0].id || Foundation.GetYoDigits(6, "dd-anchor") }), this._events()
            }
        }, { key: "getPositionClass", value: function() { var t = this.$element[0].className.match(/\b(top|left|right)\b/g); return t = t ? t[0] : "" } }, { key: "_reposition", value: function(t) { this.usedPositions.push(t ? t : "bottom"), !t && this.usedPositions.indexOf("top") < 0 ? this.$element.addClass("top") : "top" === t && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(t) : "left" === t && this.usedPositions.indexOf("right") < 0 ? this.$element.removeClass(t).addClass("right") : "right" === t && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(t).addClass("left") : !t && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.addClass("left") : "top" === t && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(t).addClass("left") : "left" === t && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(t) : "right" === t && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(t) : this.$element.removeClass(t), this.classChanged = !0, this.counter-- } }, {
            key: "_setPosition",
            value: function() {
                if ("false" === this.$anchor.attr("aria-expanded")) return !1;
                var t = this.getPositionClass(),
                    e = Foundation.Box.GetDimensions(this.$element),
                    i = (Foundation.Box.GetDimensions(this.$anchor), "left" === t ? "left" : "right" === t ? "left" : "top"),
                    n = "top" === i ? "height" : "width";
                "height" === n ? this.options.vOffset : this.options.hOffset;
                if (e.width >= e.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.$element)) return this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({ width: e.windowDims.width - 2 * this.options.hOffset, height: "auto" }), this.classChanged = !0, !1;
                for (this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, t, this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.$element) && this.counter;) this._reposition(t), this._setPosition()
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                this.$element.on({ "open.zf.trigger": this.open.bind(this), "close.zf.trigger": this.close.bind(this), "toggle.zf.trigger": this.toggle.bind(this), "resizeme.zf.trigger": this._setPosition.bind(this) }), this.options.hover && (this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() { clearTimeout(e.timeout), e.timeout = setTimeout(function() { e.open(), e.$anchor.data("hover", !0) }, e.options.hoverDelay) }).on("mouseleave.zf.dropdown", function() { clearTimeout(e.timeout), e.timeout = setTimeout(function() { e.close(), e.$anchor.data("hover", !1) }, e.options.hoverDelay) }), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() { clearTimeout(e.timeout) }).on("mouseleave.zf.dropdown", function() { clearTimeout(e.timeout), e.timeout = setTimeout(function() { e.close(), e.$anchor.data("hover", !1) }, e.options.hoverDelay) })), this.$anchor.add(this.$element).on("keydown.zf.dropdown", function(i) {
                    var n = t(this),
                        s = Foundation.Keyboard.findFocusable(e.$element);
                    Foundation.Keyboard.handleKey(i, "Dropdown", {
                        tab_forward: function() { e.$element.find(":focus").is(s.eq(-1)) && (e.options.trapFocus ? (s.eq(0).focus(), i.preventDefault()) : e.close()) },
                        tab_backward: function() {
                            (e.$element.find(":focus").is(s.eq(0)) || e.$element.is(":focus")) && (e.options.trapFocus ? (s.eq(-1).focus(), i.preventDefault()) : e.close())
                        },
                        open: function() { n.is(e.$anchor) && (e.open(), e.$element.attr("tabindex", -1).focus(), i.preventDefault()) },
                        close: function() { e.close(), e.$anchor.focus() }
                    })
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var e = t(document.body).not(this.$element),
                    i = this;
                e.off("click.zf.dropdown").on("click.zf.dropdown", function(t) { i.$anchor.is(t.target) || i.$anchor.find(t.target).length || i.$element.find(t.target).length || (i.close(), e.off("click.zf.dropdown")) })
            }
        }, {
            key: "open",
            value: function() {
                if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchor.addClass("hover").attr({ "aria-expanded": !0 }), this._setPosition(), this.$element.addClass("is-open").attr({ "aria-hidden": !1 }), this.options.autoFocus) {
                    var t = Foundation.Keyboard.findFocusable(this.$element);
                    t.length && t.eq(0).focus()
                }
                this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdown", [this.$element])
            }
        }, {
            key: "close",
            value: function() {
                if (!this.$element.hasClass("is-open")) return !1;
                if (this.$element.removeClass("is-open").attr({ "aria-hidden": !0 }), this.$anchor.removeClass("hover").attr("aria-expanded", !1), this.classChanged) {
                    var t = this.getPositionClass();
                    t && this.$element.removeClass(t), this.$element.addClass(this.options.positionClass).css({ height: "", width: "" }), this.classChanged = !1, this.counter = 4, this.usedPositions.length = 0
                }
                this.$element.trigger("hide.zf.dropdown", [this.$element])
            }
        }, {
            key: "toggle",
            value: function() {
                if (this.$element.hasClass("is-open")) {
                    if (this.$anchor.data("hover")) return;
                    this.close()
                } else this.open()
            }
        }, { key: "destroy", value: function() { this.$element.off(".zf.trigger").hide(), this.$anchor.off(".zf.dropdown"), Foundation.unregisterPlugin(this) } }]), e
    }();
    e.defaults = { hoverDelay: 250, hover: !1, hoverPane: !1, vOffset: 1, hOffset: 1, positionClass: "", trapFocus: !1, autoFocus: !1, closeOnClick: !1 }, Foundation.plugin(e, "Dropdown")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), Foundation.Nest.Feather(this.$element, "dropdown"), this._init(), Foundation.registerPlugin(this, "DropdownMenu"), Foundation.Keyboard.register("DropdownMenu", { ENTER: "open", SPACE: "open", ARROW_RIGHT: "next", ARROW_UP: "up", ARROW_DOWN: "down", ARROW_LEFT: "previous", ESCAPE: "close" }) }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var t = this.$element.find("li.is-dropdown-submenu-parent");
                this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), this.$element.hasClass(this.options.rightClass) || "right" === this.options.alignment || Foundation.rtl() ? (this.options.alignment = "right", t.addClass("opens-left")) : t.addClass("opens-right"), this.changed = !1, this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var e = this,
                    i = "ontouchstart" in window || "undefined" != typeof window.ontouchstart,
                    n = "is-dropdown-submenu-parent";
                (this.options.clickOpen || i) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", function(s) {
                    var o = t(s.target).parentsUntil("ul", "." + n),
                        a = o.hasClass(n),
                        r = "true" === o.attr("data-is-click");
                    o.children(".is-dropdown-submenu");
                    if (a)
                        if (r) {
                            if (!e.options.closeOnClick || !e.options.clickOpen && !i || e.options.forceFollow && i) return;
                            s.stopImmediatePropagation(), s.preventDefault(), e._hide(o)
                        } else s.preventDefault(), s.stopImmediatePropagation(), e._show(o.children(".is-dropdown-submenu")), o.add(o.parentsUntil(e.$element, "." + n)).attr("data-is-click", !0)
                }), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function(i) {
                    i.stopImmediatePropagation();
                    var s = t(this),
                        o = s.hasClass(n);
                    o && (clearTimeout(e.delay), e.delay = setTimeout(function() { e._show(s.children(".is-dropdown-submenu")) }, e.options.hoverDelay))
                }).on("mouseleave.zf.dropdownmenu", function(i) {
                    var s = t(this),
                        o = s.hasClass(n);
                    if (o && e.options.autoclose) {
                        if ("true" === s.attr("data-is-click") && e.options.clickOpen) return !1;
                        clearTimeout(e.delay), e.delay = setTimeout(function() { e._hide(s) }, e.options.closingTime)
                    }
                }), this.$menuItems.on("keydown.zf.dropdownmenu", function(i) {
                    var n, s, o = t(i.target).parentsUntil("ul", '[role="menuitem"]'),
                        a = e.$tabs.index(o) > -1,
                        r = a ? e.$tabs : o.siblings("li").add(o);
                    r.each(function(e) { return t(this).is(o) ? (n = r.eq(e - 1), void(s = r.eq(e + 1))) : void 0 });
                    var l = function() { o.is(":last-child") || s.children("a:first").focus() },
                        u = function() { n.children("a:first").focus() },
                        d = function() {
                            var t = o.children("ul.is-dropdown-submenu");
                            t.length && (e._show(t), o.find("li > a:first").focus())
                        },
                        h = function() {
                            var t = o.parent("ul").parent("li");
                            t.children("a:first").focus(), e._hide(t)
                        },
                        c = { open: d, close: function() { e._hide(e.$element), e.$menuItems.find("a:first").focus() }, handled: function() { i.preventDefault(), i.stopImmediatePropagation() } };
                    a ? e.vertical ? "left" === e.options.alignment ? t.extend(c, { down: l, up: u, next: d, previous: h }) : t.extend(c, { down: l, up: u, next: h, previous: d }) : t.extend(c, { next: l, previous: u, down: d, up: h }) : "left" === e.options.alignment ? t.extend(c, { next: d, previous: h, down: l, up: u }) : t.extend(c, { next: h, previous: d, down: l, up: u }), Foundation.Keyboard.handleKey(i, "DropdownMenu", c)
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var e = t(document.body),
                    i = this;
                e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(t) {
                    var n = i.$element.find(t.target);
                    n.length || (i._hide(), e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
                })
            }
        }, {
            key: "_show",
            value: function(e) {
                var i = this.$tabs.index(this.$tabs.filter(function(i, n) { return t(n).find(e).length > 0 })),
                    n = e.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                this._hide(n, i), e.css("visibility", "hidden").addClass("js-dropdown-active").attr({ "aria-hidden": !1 }).parent("li.is-dropdown-submenu-parent").addClass("is-active").attr({ "aria-expanded": !0 });
                var s = Foundation.Box.ImNotTouchingYou(e, null, !0);
                if (!s) {
                    var o = "left" === this.options.alignment ? "-right" : "-left",
                        a = e.parent(".is-dropdown-submenu-parent");
                    a.removeClass("opens" + o).addClass("opens-" + this.options.alignment), s = Foundation.Box.ImNotTouchingYou(e, null, !0), s || a.removeClass("opens-" + this.options.alignment).addClass("opens-inner"), this.changed = !0
                }
                e.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownmenu", [e])
            }
        }, {
            key: "_hide",
            value: function(t, e) {
                var i;
                i = t && t.length ? t : void 0 !== e ? this.$tabs.not(function(t, i) { return t === e }) : this.$element;
                var n = i.hasClass("is-active") || i.find(".is-active").length > 0;
                if (n) {
                    if (i.find("li.is-active").add(i).attr({ "aria-expanded": !1, "data-is-click": !1 }).removeClass("is-active"), i.find("ul.js-dropdown-active").attr({ "aria-hidden": !0 }).removeClass("js-dropdown-active"), this.changed || i.find("opens-inner").length) {
                        var s = "left" === this.options.alignment ? "right" : "left";
                        i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + s), this.changed = !1
                    }
                    this.$element.trigger("hide.zf.dropdownmenu", [i])
                }
            }
        }, { key: "destroy", value: function() { this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), t(document.body).off(".zf.dropdownmenu"), Foundation.Nest.Burn(this.$element, "dropdown"), Foundation.unregisterPlugin(this) } }]), e
    }();
    e.defaults = { disableHover: !1, autoclose: !0, hoverDelay: 50, clickOpen: !1, closingTime: 500, alignment: "left", closeOnClick: !0, verticalClass: "vertical", rightClass: "align-right", forceFollow: !0 }, Foundation.plugin(e, "DropdownMenu")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Equalizer") }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element.attr("data-equalizer") || "",
                    i = this.$element.find('[data-equalizer-watch="' + e + '"]');
                this.$watched = i.length ? i : this.$element.find("[data-equalizer-watch]"), this.$element.attr("data-resize", e || Foundation.GetYoDigits(6, "eq")), this.hasNested = this.$element.find("[data-equalizer]").length > 0, this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0, this.isOn = !1;
                var n, s = this.$element.find("img");
                this.options.equalizeOn ? (n = this._checkMQ(), t(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), (void 0 !== n && n === !1 || void 0 === n) && (s.length ? Foundation.onImagesLoaded(s, this._reflow.bind(this)) : this._reflow())
            }
        }, { key: "_pauseEvents", value: function() { this.isOn = !1, this.$element.off(".zf.equalizer resizeme.zf.trigger") } }, {
            key: "_events",
            value: function() {
                var t = this;
                this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", function(e) { e.target !== t.$element[0] && t._reflow() }) : this.$element.on("resizeme.zf.trigger", this._reflow.bind(this)), this.isOn = !0
            }
        }, { key: "_checkMQ", value: function() { var t = !Foundation.MediaQuery.atLeast(this.options.equalizeOn); return t ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), t } }, { key: "_killswitch", value: function() {} }, { key: "_reflow", value: function() { return !this.options.equalizeOnStack && this._isStacked() ? (this.$watched.css("height", "auto"), !1) : void(this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this))) } }, { key: "_isStacked", value: function() { return this.$watched[0].offsetTop !== this.$watched[1].offsetTop } }, {
            key: "getHeights",
            value: function(t) {
                for (var e = [], i = 0, n = this.$watched.length; n > i; i++) this.$watched[i].style.height = "auto", e.push(this.$watched[i].offsetHeight);
                t(e)
            }
        }, {
            key: "getHeightsByRow",
            value: function(e) {
                var i = this.$watched.first().offset().top,
                    n = [],
                    s = 0;
                n[s] = [];
                for (var o = 0, a = this.$watched.length; a > o; o++) {
                    this.$watched[o].style.height = "auto";
                    var r = t(this.$watched[o]).offset().top;
                    r != i && (s++, n[s] = [], i = r), n[s].push([this.$watched[o], this.$watched[o].offsetHeight])
                }
                for (var l = 0, u = n.length; u > l; l++) {
                    var d = t(n[l]).map(function() { return this[1] }).get(),
                        h = Math.max.apply(null, d);
                    n[l].push(h)
                }
                e(n)
            }
        }, {
            key: "applyHeight",
            value: function(t) {
                var e = Math.max.apply(null, t);
                this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", e), this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "applyHeightByRow",
            value: function(e) {
                this.$element.trigger("preequalized.zf.equalizer");
                for (var i = 0, n = e.length; n > i; i++) {
                    var s = e[i].length,
                        o = e[i][s - 1];
                    if (2 >= s) t(e[i][0][0]).css({ height: "auto" });
                    else {
                        this.$element.trigger("preequalizedrow.zf.equalizer");
                        for (var a = 0, r = s - 1; r > a; a++) t(e[i][a][0]).css({ height: o });
                        this.$element.trigger("postequalizedrow.zf.equalizer")
                    }
                }
                this.$element.trigger("postequalized.zf.equalizer")
            }
        }, { key: "destroy", value: function() { this._pauseEvents(), this.$watched.css("height", "auto"), Foundation.unregisterPlugin(this) } }]), e
    }();
    e.defaults = { equalizeOnStack: !0, equalizeByRow: !1, equalizeOn: "" }, Foundation.plugin(e, "Equalizer")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, n), this.rules = [], this.currentPath = "", this._init(), this._events(), Foundation.registerPlugin(this, "Interchange") }
        return _createClass(e, [{ key: "_init", value: function() { this._addBreakpoints(), this._generateRules(), this._reflow() } }, { key: "_events", value: function() { t(window).on("resize.zf.interchange", Foundation.util.throttle(this._reflow.bind(this), 50)) } }, {
            key: "_reflow",
            value: function() {
                var t;
                for (var e in this.rules) {
                    var i = this.rules[e];
                    window.matchMedia(i.query).matches && (t = i)
                }
                t && this.replace(t.path)
            }
        }, {
            key: "_addBreakpoints",
            value: function() {
                for (var t in Foundation.MediaQuery.queries) {
                    var i = Foundation.MediaQuery.queries[t];
                    e.SPECIAL_QUERIES[i.name] = i.value
                }
            }
        }, {
            key: "_generateRules",
            value: function(t) {
                var i, n = [];
                i = this.options.rules ? this.options.rules : this.$element.data("interchange").match(/\[.*?\]/g);
                for (var s in i) {
                    var o = i[s].slice(1, -1).split(", "),
                        a = o.slice(0, -1).join(""),
                        r = o[o.length - 1];
                    e.SPECIAL_QUERIES[r] && (r = e.SPECIAL_QUERIES[r]), n.push({ path: a, query: r })
                }
                this.rules = n
            }
        }, {
            key: "replace",
            value: function(e) {
                if (this.currentPath !== e) {
                    var i = this,
                        n = "replaced.zf.interchange";
                    "IMG" === this.$element[0].nodeName ? this.$element.attr("src", e).load(function() { i.currentPath = e }).trigger(n) : e.match(/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i) ? this.$element.css({ "background-image": "url(" + e + ")" }).trigger(n) : t.get(e, function(s) { i.$element.html(s).trigger(n), t(s).foundation(), i.currentPath = e })
                }
            }
        }, { key: "destroy", value: function() {} }]), e
    }();
    e.defaults = { rules: null }, e.SPECIAL_QUERIES = { landscape: "screen and (orientation: landscape)", portrait: "screen and (orientation: portrait)", retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)" }, Foundation.plugin(e, "Interchange")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Magellan") }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element[0].id || Foundation.GetYoDigits(6, "magellan");
                this.$targets = t("[data-magellan-target]"), this.$links = this.$element.find("a"), this.$element.attr({ "data-resize": e, "data-scroll": e, id: e }), this.$active = t(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events()
            }
        }, {
            key: "calcPoints",
            value: function() {
                var e = this,
                    i = document.body,
                    n = document.documentElement;
                this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, n.clientHeight)), this.docHeight = Math.round(Math.max(i.scrollHeight, i.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)), this.$targets.each(function() {
                    var i = t(this),
                        n = Math.round(i.offset().top - e.options.threshold);
                    i.targetPoint = n, e.points.push(n)
                })
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                t("html, body"), { duration: e.options.animationDuration, easing: e.options.animationEasing };
                t(window).one("load", function() { e.options.deepLinking && location.hash && e.scrollToLoc(location.hash), e.calcPoints(), e._updateActive() }), this.$element.on({ "resizeme.zf.trigger": this.reflow.bind(this), "scrollme.zf.trigger": this._updateActive.bind(this) }).on("click.zf.magellan", 'a[href^="#"]', function(t) {
                    t.preventDefault();
                    var i = this.getAttribute("href");
                    e.scrollToLoc(i)
                })
            }
        }, {
            key: "scrollToLoc",
            value: function(e) {
                var i = Math.round(t(e).offset().top - this.options.threshold / 2 - this.options.barOffset);
                t("html, body").stop(!0).animate({ scrollTop: i }, this.options.animationDuration, this.options.animationEasing)
            }
        }, { key: "reflow", value: function() { this.calcPoints(), this._updateActive() } }, {
            key: "_updateActive",
            value: function() {
                var t, e = parseInt(window.pageYOffset, 10);
                if (e + this.winHeight === this.docHeight) t = this.points.length - 1;
                else if (e < this.points[0]) t = 0;
                else {
                    var i = this.scrollPos < e,
                        n = this,
                        s = this.points.filter(function(t, s) { return i ? e >= t : t - n.options.threshold <= e });
                    t = s.length ? s.length - 1 : 0
                }
                if (this.$active.removeClass(this.options.activeClass), this.$active = this.$links.eq(t).addClass(this.options.activeClass), this.options.deepLinking) {
                    var o = this.$active[0].getAttribute("href");
                    window.history.pushState ? window.history.pushState(null, null, o) : window.location.hash = o
                }
                this.scrollPos = e, this.$element.trigger("update.zf.magellan", [this.$active])
            }
        }, {
            key: "destroy",
            value: function() {
                if (this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass), this.options.deepLinking) {
                    var t = this.$active[0].getAttribute("href");
                    window.location.hash.replace(t, "")
                }
                Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = { animationDuration: 500, animationEasing: "linear", threshold: 50, activeClass: "active", deepLinking: !1, barOffset: 0 }, Foundation.plugin(e, "Magellan")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this.$lastTrigger = t(), this._init(), this._events(), Foundation.registerPlugin(this, "OffCanvas") }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element.attr("id");
                if (this.$element.attr("aria-hidden", "true"), t(document).find('[data-open="' + e + '"], [data-close="' + e + '"], [data-toggle="' + e + '"]').attr("aria-expanded", "false").attr("aria-controls", e), this.options.closeOnClick)
                    if (t(".js-off-canvas-exit").length) this.$exiter = t(".js-off-canvas-exit");
                    else {
                        var i = document.createElement("div");
                        i.setAttribute("class", "js-off-canvas-exit"), t("[data-off-canvas-content]").append(i), this.$exiter = t(i)
                    }
                this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, "g").test(this.$element[0].className), this.options.isRevealed && (this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2], this._setMQChecker()), this.options.transitionTime || (this.options.transitionTime = 1e3 * parseFloat(window.getComputedStyle(t("[data-off-canvas-wrapper]")[0]).transitionDuration))
            }
        }, { key: "_events", value: function() { this.$element.off(".zf.trigger .zf.offcanvas").on({ "open.zf.trigger": this.open.bind(this), "close.zf.trigger": this.close.bind(this), "toggle.zf.trigger": this.toggle.bind(this), "keydown.zf.offcanvas": this._handleKeyboard.bind(this) }), this.options.closeOnClick && this.$exiter.length && this.$exiter.on({ "click.zf.offcanvas": this.close.bind(this) }) } }, {
            key: "_setMQChecker",
            value: function() {
                var e = this;
                t(window).on("changed.zf.mediaquery", function() { Foundation.MediaQuery.atLeast(e.options.revealOn) ? e.reveal(!0) : e.reveal(!1) }).one("load.zf.offcanvas", function() { Foundation.MediaQuery.atLeast(e.options.revealOn) && e.reveal(!0) })
            }
        }, {
            key: "reveal",
            value: function(t) {
                var e = this.$element.find("[data-close]");
                t ? (this.close(), this.isRevealed = !0, this.$element.off("open.zf.trigger toggle.zf.trigger"), e.length && e.hide()) : (this.isRevealed = !1, this.$element.on({ "open.zf.trigger": this.open.bind(this), "toggle.zf.trigger": this.toggle.bind(this) }), e.length && e.show())
            }
        }, {
            key: "open",
            value: function(e, i) {
                if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                    var n = this;
                    t(document.body);
                    this.options.forceTop && t("body").scrollTop(0), Foundation.Move(this.options.transitionTime, this.$element, function() { t("[data-off-canvas-wrapper]").addClass("is-off-canvas-open is-open-" + n.options.position), n.$element.addClass("is-open") }), this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas"), this.options.closeOnClick && this.$exiter.addClass("is-visible"), i && (this.$lastTrigger = i.attr("aria-expanded", "true")), this.options.autoFocus && this.$element.one(Foundation.transitionend(this.$element), function() { n.$element.find("a, button").eq(0).focus() }), this.options.trapFocus && (t("[data-off-canvas-content]").attr("tabindex", "-1"), this._trapFocus())
                }
            }
        }, {
            key: "_trapFocus",
            value: function() {
                var t = Foundation.Keyboard.findFocusable(this.$element),
                    e = t.eq(0),
                    i = t.eq(-1);
                t.off(".zf.offcanvas").on("keydown.zf.offcanvas", function(t) { 9 !== t.which && 9 !== t.keycode || (t.target !== i[0] || t.shiftKey || (t.preventDefault(), e.focus()), t.target === e[0] && t.shiftKey && (t.preventDefault(), i.focus())) })
            }
        }, {
            key: "close",
            value: function(e) {
                if (this.$element.hasClass("is-open") && !this.isRevealed) {
                    var i = this;
                    t("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-" + i.options.position), i.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), this.options.closeOnClick && this.$exiter.removeClass("is-visible"), this.$lastTrigger.attr("aria-expanded", "false"), this.options.trapFocus && t("[data-off-canvas-content]").removeAttr("tabindex")
                }
            }
        }, { key: "toggle", value: function(t, e) { this.$element.hasClass("is-open") ? this.close(t, e) : this.open(t, e) } }, { key: "_handleKeyboard", value: function(t) { 27 === t.which && (t.stopPropagation(), t.preventDefault(), this.close(), this.$lastTrigger.focus()) } }, {
            key: "destroy",
            value: function() {
                this.close(), this.$element.off(".zf.trigger .zf.offcanvas"),
                    this.$exiter.off(".zf.offcanvas"), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = { closeOnClick: !0, transitionTime: 0, position: "left", forceTop: !0, isRevealed: !1, revealOn: null, autoFocus: !0, revealClass: "reveal-for-", trapFocus: !1 }, Foundation.plugin(e, "OffCanvas")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Orbit"), Foundation.Keyboard.register("Orbit", { ltr: { ARROW_RIGHT: "next", ARROW_LEFT: "previous" }, rtl: { ARROW_LEFT: "next", ARROW_RIGHT: "previous" } }) }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                this.$wrapper = this.$element.find("." + this.options.containerClass), this.$slides = this.$element.find("." + this.options.slideClass);
                var t = this.$element.find("img"),
                    e = this.$slides.filter(".is-active");
                e.length || this.$slides.eq(0).addClass("is-active"), this.options.useMUI || this.$slides.addClass("no-motionui"), t.length ? Foundation.onImagesLoaded(t, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(), this.options.bullets && this._loadBullets(), this._events(), this.options.autoPlay && this.$slides.length > 1 && this.geoSync(), this.options.accessible && this.$wrapper.attr("tabindex", 0)
            }
        }, { key: "_loadBullets", value: function() { this.$bullets = this.$element.find("." + this.options.boxOfBullets).find("button") } }, {
            key: "geoSync",
            value: function() {
                var t = this;
                this.timer = new Foundation.Timer(this.$element, { duration: this.options.timerDelay, infinite: !1 }, function() { t.changeSlide(!0) }), this.timer.start()
            }
        }, {
            key: "_prepareForOrbit",
            value: function() {
                var t = this;
                this._setWrapperHeight(function(e) { t._setSlideHeight(e) })
            }
        }, {
            key: "_setWrapperHeight",
            value: function(e) {
                var i, n = 0,
                    s = 0;
                this.$slides.each(function() { i = this.getBoundingClientRect().height, t(this).attr("data-slide", s), s && t(this).css({ position: "relative", display: "none" }), n = i > n ? i : n, s++ }), s === this.$slides.length && (this.$wrapper.css({ height: n }), e(n))
            }
        }, { key: "_setSlideHeight", value: function(e) { this.$slides.each(function() { t(this).css("max-height", e) }) } }, {
            key: "_events",
            value: function() {
                var e = this;
                if (this.$slides.length > 1) {
                    if (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(t) { t.preventDefault(), e.changeSlide(!0) }).on("swiperight.zf.orbit", function(t) { t.preventDefault(), e.changeSlide(!1) }), this.options.autoPlay && (this.$slides.on("click.zf.orbit", function() { e.$element.data("clickedOn", !e.$element.data("clickedOn")), e.timer[e.$element.data("clickedOn") ? "pause" : "start"]() }), this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function() { e.timer.pause() }).on("mouseleave.zf.orbit", function() { e.$element.data("clickedOn") || e.timer.start() })), this.options.navButtons) {
                        var i = this.$element.find("." + this.options.nextClass + ", ." + this.options.prevClass);
                        i.attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function() { e.changeSlide(t(this).hasClass(e.options.nextClass)) })
                    }
                    this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                        if (/is-active/g.test(this.className)) return !1;
                        var i = t(this).data("slide"),
                            n = i > e.$slides.filter(".is-active").data("slide"),
                            s = e.$slides.eq(i);
                        e.changeSlide(n, s, i)
                    }), this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(i) { Foundation.Keyboard.handleKey(i, "Orbit", { next: function() { e.changeSlide(!0) }, previous: function() { e.changeSlide(!1) }, handled: function() { t(i.target).is(e.$bullets) && e.$bullets.filter(".is-active").focus() } }) })
                }
            }
        }, {
            key: "changeSlide",
            value: function(t, e, i) {
                var n = this.$slides.filter(".is-active").eq(0);
                if (/mui/g.test(n[0].className)) return !1;
                var s, o = this.$slides.first(),
                    a = this.$slides.last(),
                    r = t ? "Right" : "Left",
                    l = t ? "Left" : "Right",
                    u = this;
                s = e ? e : t ? this.options.infiniteWrap ? n.next("." + this.options.slideClass).length ? n.next("." + this.options.slideClass) : o : n.next("." + this.options.slideClass) : this.options.infiniteWrap ? n.prev("." + this.options.slideClass).length ? n.prev("." + this.options.slideClass) : a : n.prev("." + this.options.slideClass), s.length && (this.options.bullets && (i = i || this.$slides.index(s), this._updateBullets(i)), this.options.useMUI ? (Foundation.Motion.animateIn(s.addClass("is-active").css({ position: "absolute", top: 0 }), this.options["animInFrom" + r], function() { s.css({ position: "relative", display: "block" }).attr("aria-live", "polite") }), Foundation.Motion.animateOut(n.removeClass("is-active"), this.options["animOutTo" + l], function() { n.removeAttr("aria-live"), u.options.autoPlay && !u.timer.isPaused && u.timer.restart() })) : (n.removeClass("is-active is-in").removeAttr("aria-live").hide(), s.addClass("is-active is-in").attr("aria-live", "polite").show(), this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), this.$element.trigger("slidechange.zf.orbit", [s]))
            }
        }, {
            key: "_updateBullets",
            value: function(t) {
                var e = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(),
                    i = e.find("span:last").detach();
                this.$bullets.eq(t).addClass("is-active").append(i)
            }
        }, { key: "destroy", value: function() { this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(), Foundation.unregisterPlugin(this) } }]), e
    }();
    e.defaults = { bullets: !0, navButtons: !0, animInFromRight: "slide-in-right", animOutToRight: "slide-out-right", animInFromLeft: "slide-in-left", animOutToLeft: "slide-out-left", autoPlay: !0, timerDelay: 5e3, infiniteWrap: !0, swipe: !0, pauseOnHover: !0, accessible: !0, containerClass: "orbit-container", slideClass: "orbit-slide", boxOfBullets: "orbit-bullets", nextClass: "orbit-next", prevClass: "orbit-previous", useMUI: !0 }, Foundation.plugin(e, "Orbit")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = t(i), this.rules = this.$element.data("responsive-menu"), this.currentMq = null, this.currentPlugin = null, this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveMenu") }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                for (var e = {}, n = this.rules.split(" "), s = 0; s < n.length; s++) {
                    var o = n[s].split("-"),
                        a = o.length > 1 ? o[0] : "small",
                        r = o.length > 1 ? o[1] : o[0];
                    null !== i[r] && (e[a] = i[r])
                }
                this.rules = e, t.isEmptyObject(e) || this._checkMediaQueries()
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                t(window).on("changed.zf.mediaquery", function() { e._checkMediaQueries() })
            }
        }, {
            key: "_checkMediaQueries",
            value: function() {
                var e, n = this;
                t.each(this.rules, function(t) { Foundation.MediaQuery.atLeast(t) && (e = t) }), e && (this.currentPlugin instanceof this.rules[e].plugin || (t.each(i, function(t, e) { n.$element.removeClass(e.cssClass) }), this.$element.addClass(this.rules[e].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin = new this.rules[e].plugin(this.$element, {})))
            }
        }, { key: "destroy", value: function() { this.currentPlugin.destroy(), t(window).off(".zf.ResponsiveMenu"), Foundation.unregisterPlugin(this) } }]), e
    }();
    e.defaults = {};
    var i = { dropdown: { cssClass: "dropdown", plugin: Foundation._plugins["dropdown-menu"] || null }, drilldown: { cssClass: "drilldown", plugin: Foundation._plugins.drilldown || null }, accordion: { cssClass: "accordion-menu", plugin: Foundation._plugins["accordion-menu"] || null } };
    Foundation.plugin(e, "ResponsiveMenu")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = t(i), this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), this._events(), Foundation.registerPlugin(this, "ResponsiveToggle") }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element.data("responsive-toggle");
                e || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), this.$targetMenu = t("#" + e), this.$toggler = this.$element.find("[data-toggle]"), this._update()
            }
        }, { key: "_events", value: function() { t(window).on("changed.zf.mediaquery", this._update.bind(this)), this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this)) } }, { key: "_update", value: function() { Foundation.MediaQuery.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide()) } }, { key: "toggleMenu", value: function() { Foundation.MediaQuery.atLeast(this.options.hideFor) || (this.$targetMenu.toggle(0), this.$element.trigger("toggled.zf.responsiveToggle")) } }, { key: "destroy", value: function() {} }]), e
    }();
    e.defaults = { hideFor: "medium" }, Foundation.plugin(e, "ResponsiveToggle")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    function e() { return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent) }
    var i = function() {
        function i(e, n) { _classCallCheck(this, i), this.$element = e, this.options = t.extend({}, i.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Reveal"), Foundation.Keyboard.register("Reveal", { ENTER: "open", SPACE: "open", ESCAPE: "close", TAB: "tab_forward", SHIFT_TAB: "tab_backward" }) }
        return _createClass(i, [{
            key: "_init",
            value: function() {
                if (this.id = this.$element.attr("id"), this.isActive = !1, this.cached = { mq: Foundation.MediaQuery.current }, this.isiOS = e(), this.isiOS && this.$element.addClass("is-ios"), this.$anchor = t(t('[data-open="' + this.id + '"]').length ? '[data-open="' + this.id + '"]' : '[data-toggle="' + this.id + '"]'), this.$anchor.length) {
                    var i = this.$anchor[0].id || Foundation.GetYoDigits(6, "reveal");
                    this.$anchor.attr({ "aria-controls": this.id, id: i, "aria-haspopup": !0, tabindex: 0 }), this.$element.attr({ "aria-labelledby": i })
                }(this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({ role: "dialog", "aria-hidden": !0, "data-yeti-box": this.id, "data-resize": this.id }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(t("body")), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#" + this.id && t(window).one("load.zf.reveal", this.open.bind(this))
            }
        }, { key: "_makeOverlay", value: function(e) { var i = t("<div></div>").addClass("reveal-overlay").attr({ tabindex: -1, "aria-hidden": !0 }).appendTo("body"); return i } }, {
            key: "_updatePosition",
            value: function() {
                var e, i = this.$element.outerWidth(),
                    n = t(window).width(),
                    s = this.$element.outerHeight(),
                    o = t(window).height(),
                    a = parseInt((n - i) / 2, 10);
                e = s > o ? parseInt(Math.min(100, o / 10), 10) : parseInt((o - s) / 4, 10), this.$element.css({ top: e + "px" }), this.$overlay || this.$element.css({ left: a + "px" })
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                this.$element.on({ "open.zf.trigger": this.open.bind(this), "close.zf.trigger": this.close.bind(this), "toggle.zf.trigger": this.toggle.bind(this), "resizeme.zf.trigger": function() { e._updatePosition() } }), this.$anchor.length && this.$anchor.on("keydown.zf.reveal", function(t) { 13 !== t.which && 32 !== t.which || (t.stopPropagation(), t.preventDefault(), e.open()) }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(i) { i.target === e.$element[0] || t.contains(e.$element[0], i.target) || e.close() }), this.options.deepLink && t(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this))
            }
        }, { key: "_handleState", value: function(t) { window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open() } }, {
            key: "open",
            value: function() {
                var e = this;
                if (this.options.deepLink) {
                    var i = "#" + this.id;
                    window.history.pushState ? window.history.pushState(null, null, i) : window.location.hash = i
                }
                if (this.isActive = !0, this.$element.css({ visibility: "hidden" }).show().scrollTop(0), this.options.overlay && this.$overlay.css({ visibility: "hidden" }).show(), this._updatePosition(), this.$element.hide().css({ visibility: "" }), this.$overlay && this.$overlay.css({ visibility: "" }).hide(), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id), this.options.animationIn ? (this.options.overlay && Foundation.Motion.animateIn(this.$overlay, "fade-in"), Foundation.Motion.animateIn(this.$element, this.options.animationIn, function() { this.focusableElements = Foundation.Keyboard.findFocusable(this.$element) })) : (this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay)), this.$element.attr({ "aria-hidden": !1, tabindex: -1 }).focus(), this.$element.trigger("open.zf.reveal"), this.isiOS) {
                    var n = window.pageYOffset;
                    t("html, body").addClass("is-reveal-open").scrollTop(n)
                } else t("body").addClass("is-reveal-open");
                t("body").addClass("is-reveal-open").attr("aria-hidden", !(!this.options.overlay && !this.options.fullScreen)), setTimeout(function() { e._extraHandlers() }, 0)
            }
        }, {
            key: "_extraHandlers",
            value: function() {
                var e = this;
                this.focusableElements = Foundation.Keyboard.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || t("body").on("click.zf.reveal", function(i) { i.target === e.$element[0] || t.contains(e.$element[0], i.target) || e.close() }), this.options.closeOnEsc && t(window).on("keydown.zf.reveal", function(t) { Foundation.Keyboard.handleKey(t, "Reveal", { close: function() { e.options.closeOnEsc && (e.close(), e.$anchor.focus()) } }), 0 === e.focusableElements.length && t.preventDefault() }), this.$element.on("keydown.zf.reveal", function(i) {
                    var n = t(this);
                    Foundation.Keyboard.handleKey(i, "Reveal", {
                        tab_forward: function() { e.$element.find(":focus").is(e.focusableElements.eq(-1)) && (e.focusableElements.eq(0).focus(), i.preventDefault()) },
                        tab_backward: function() {
                            (e.$element.find(":focus").is(e.focusableElements.eq(0)) || e.$element.is(":focus")) && (e.focusableElements.eq(-1).focus(), i.preventDefault())
                        },
                        open: function() { e.$element.find(":focus").is(e.$element.find("[data-close]")) ? setTimeout(function() { e.$anchor.focus() }, 1) : n.is(e.focusableElements) && e.open() },
                        close: function() { e.options.closeOnEsc && (e.close(), e.$anchor.focus()) }
                    })
                })
            }
        }, {
            key: "close",
            value: function() {
                function e() { i.isiOS ? t("html, body").removeClass("is-reveal-open") : t("body").removeClass("is-reveal-open"), t("body").attr({ "aria-hidden": !1, tabindex: "" }), i.$element.attr("aria-hidden", !0), i.$element.trigger("closed.zf.reveal") }
                if (!this.isActive || !this.$element.is(":visible")) return !1;
                var i = this;
                this.options.animationOut ? (this.options.overlay ? Foundation.Motion.animateOut(this.$overlay, "fade-out", e) : e(), Foundation.Motion.animateOut(this.$element, this.options.animationOut)) : (this.options.overlay ? this.$overlay.hide(0, e) : e(), this.$element.hide(this.options.hideDelay)), this.options.closeOnEsc && t(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && t("body").off("click.zf.reveal"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, i.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.pathname) : window.location.hash = "")
            }
        }, { key: "toggle", value: function() { this.isActive ? this.close() : this.open() } }, { key: "destroy", value: function() { this.options.overlay && this.$overlay.hide().off().remove(), this.$element.hide().off(), this.$anchor.off(".zf"), t(window).off(".zf.reveal:" + this.id), Foundation.unregisterPlugin(this) } }]), i
    }();
    i.defaults = { animationIn: "", animationOut: "", showDelay: 0, hideDelay: 0, closeOnClick: !0, closeOnEsc: !0, multipleOpened: !1, vOffset: 100, hOffset: 0, fullScreen: !1, btmOffsetPct: 10, overlay: !0, resetOnClose: !1, deepLink: !1 }, Foundation.plugin(i, "Reveal")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    function e(t, e) { return t / e }

    function i(t, e, i, n) { return Math.abs(t.position()[e] + t[n]() / 2 - i) }
    var n = function() {
        function n(e, i) { _classCallCheck(this, n), this.$element = e, this.options = t.extend({}, n.defaults, this.$element.data(), i), this._init(), Foundation.registerPlugin(this, "Slider"), Foundation.Keyboard.register("Slider", { ltr: { ARROW_RIGHT: "increase", ARROW_UP: "increase", ARROW_DOWN: "decrease", ARROW_LEFT: "decrease", SHIFT_ARROW_RIGHT: "increase_fast", SHIFT_ARROW_UP: "increase_fast", SHIFT_ARROW_DOWN: "decrease_fast", SHIFT_ARROW_LEFT: "decrease_fast" }, rtl: { ARROW_LEFT: "increase", ARROW_RIGHT: "decrease", SHIFT_ARROW_LEFT: "increase_fast", SHIFT_ARROW_RIGHT: "decrease_fast" } }) }
        return _createClass(n, [{
            key: "_init",
            value: function() {
                this.inputs = this.$element.find("input"), this.handles = this.$element.find("[data-slider-handle]"), this.$handle = this.handles.eq(0), this.$input = this.inputs.length ? this.inputs.eq(0) : t("#" + this.$handle.attr("aria-controls")), this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
                var e = !1,
                    i = this;
                (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0, this.$element.addClass(this.options.disabledClass)), this.inputs.length || (this.inputs = t().add(this.$input), this.options.binding = !0), this._setInitAttr(0), this._events(this.$handle), this.handles[1] && (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(1), this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : t("#" + this.$handle2.attr("aria-controls")), this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), e = !0, this._setHandlePos(this.$handle, this.options.initialStart, !0, function() { i._setHandlePos(i.$handle2, i.options.initialEnd, !0) }), this._setInitAttr(1), this._events(this.$handle2)), e || this._setHandlePos(this.$handle, this.options.initialStart, !0)
            }
        }, {
            key: "_setHandlePos",
            value: function(t, i, n, s) {
                i = parseFloat(i), i < this.options.start ? i = this.options.start : i > this.options.end && (i = this.options.end);
                var o = this.options.doubleSided;
                if (o)
                    if (0 === this.handles.index(t)) {
                        var a = parseFloat(this.$handle2.attr("aria-valuenow"));
                        i = i >= a ? a - this.options.step : i
                    } else {
                        var r = parseFloat(this.$handle.attr("aria-valuenow"));
                        i = r >= i ? r + this.options.step : i
                    }
                this.options.vertical && !n && (i = this.options.end - i);
                var l = this,
                    u = this.options.vertical,
                    d = u ? "height" : "width",
                    h = u ? "top" : "left",
                    c = t[0].getBoundingClientRect()[d],
                    f = this.$element[0].getBoundingClientRect()[d],
                    p = e(i, this.options.end).toFixed(2),
                    m = (f - c) * p,
                    v = (100 * e(m, f)).toFixed(this.options.decimal);
                i = parseFloat(i.toFixed(this.options.decimal));
                var g = {};
                if (this._setValues(t, i), o) {
                    var w, y = 0 === this.handles.index(t),
                        b = ~~(100 * e(c, f));
                    if (y) g[h] = v + "%", w = parseFloat(this.$handle2[0].style[h]) - v + b, s && "function" == typeof s && s();
                    else {
                        var $ = parseFloat(this.$handle[0].style[h]);
                        w = v - (isNaN($) ? this.options.initialStart / ((this.options.end - this.options.start) / 100) : $) + b
                    }
                    g["min-" + d] = w + "%"
                }
                this.$element.one("finished.zf.animate", function() { l.$element.trigger("moved.zf.slider", [t]) });
                var C = this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime;
                Foundation.Move(C, t, function() { t.css(h, v + "%"), l.options.doubleSided ? l.$fill.css(g) : l.$fill.css(d, 100 * p + "%") })
            }
        }, {
            key: "_setInitAttr",
            value: function(t) {
                var e = this.inputs.eq(t).attr("id") || Foundation.GetYoDigits(6, "slider");
                this.inputs.eq(t).attr({ id: e, max: this.options.end, min: this.options.start, step: this.options.step }), this.handles.eq(t).attr({ role: "slider", "aria-controls": e, "aria-valuemax": this.options.end, "aria-valuemin": this.options.start, "aria-valuenow": 0 === t ? this.options.initialStart : this.options.initialEnd, "aria-orientation": this.options.vertical ? "vertical" : "horizontal", tabindex: 0 })
            }
        }, {
            key: "_setValues",
            value: function(t, e) {
                var i = this.options.doubleSided ? this.handles.index(t) : 0;
                this.inputs.eq(i).val(e), t.attr("aria-valuenow", e)
            }
        }, {
            key: "_handleEvent",
            value: function(t, n, s) {
                var o, a;
                if (s) o = this._adjustValue(null, s), a = !0;
                else {
                    t.preventDefault();
                    var r = this,
                        l = this.options.vertical,
                        u = l ? "height" : "width",
                        d = l ? "top" : "left",
                        h = l ? t.pageY : t.pageX,
                        c = this.$handle[0].getBoundingClientRect()[u] / 2,
                        f = this.$element[0].getBoundingClientRect()[u],
                        p = this.$element.offset()[d] - h,
                        m = p > 0 ? -c : -f > p - c ? f : Math.abs(p),
                        v = e(m, f);
                    if (o = (this.options.end - this.options.start) * v, Foundation.rtl() && !this.options.vertical && (o = this.options.end - o), o = r._adjustValue(null, o), a = !1, !n) {
                        var g = i(this.$handle, d, m, u),
                            w = i(this.$handle2, d, m, u);
                        n = w >= g ? this.$handle : this.$handle2
                    }
                }
                this._setHandlePos(n, o, a)
            }
        }, {
            key: "_adjustValue",
            value: function(t, e) {
                var i, n, s, o, a = this.options.step,
                    r = parseFloat(a / 2);
                return i = t ? parseFloat(t.attr("aria-valuenow")) : e, n = i % a, s = i - n, o = s + a, 0 === n ? i : i = i >= s + r ? o : s
            }
        }, {
            key: "_events",
            value: function(e) {
                if (this.options.disabled) return !1;
                var i, n = this;
                if (this.inputs.off("change.zf.slider").on("change.zf.slider", function(e) {
                        var i = n.inputs.index(t(this));
                        n._handleEvent(e, n.handles.eq(i), t(this).val())
                    }), this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function(e) { return n.$element.data("dragging") ? !1 : void(t(e.target).is("[data-slider-handle]") || (n.options.doubleSided ? n._handleEvent(e) : n._handleEvent(e, n.$handle))) }), this.options.draggable) {
                    this.handles.addTouch();
                    var s = t("body");
                    e.off("mousedown.zf.slider").on("mousedown.zf.slider", function(o) { e.addClass("is-dragging"), n.$fill.addClass("is-dragging"), n.$element.data("dragging", !0), i = t(o.currentTarget), s.on("mousemove.zf.slider", function(t) { t.preventDefault(), n._handleEvent(t, i) }).on("mouseup.zf.slider", function(t) { n._handleEvent(t, i), e.removeClass("is-dragging"), n.$fill.removeClass("is-dragging"), n.$element.data("dragging", !1), s.off("mousemove.zf.slider mouseup.zf.slider") }) })
                }
                e.off("keydown.zf.slider").on("keydown.zf.slider", function(e) {
                    var i, s = t(this),
                        o = n.options.doubleSided ? n.handles.index(s) : 0,
                        a = parseFloat(n.inputs.eq(o).val());
                    Foundation.Keyboard.handleKey(e, "Slider", { decrease: function() { i = a - n.options.step }, increase: function() { i = a + n.options.step }, decrease_fast: function() { i = a - 10 * n.options.step }, increase_fast: function() { i = a + 10 * n.options.step }, handled: function() { e.preventDefault(), n._setHandlePos(s, i, !0) } })
                })
            }
        }, { key: "destroy", value: function() { this.handles.off(".zf.slider"), this.inputs.off(".zf.slider"), this.$element.off(".zf.slider"), Foundation.unregisterPlugin(this) } }]), n
    }();
    n.defaults = { start: 0, end: 100, step: 1, initialStart: 0, initialEnd: 100, binding: !1, clickSelect: !0, vertical: !1, draggable: !0, disabled: !1, doubleSided: !1, decimal: 2, moveTime: 200, disabledClass: "disabled", invertVertical: !1 }, Foundation.plugin(n, "Slider")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    function e(t) { return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * t }
    var i = function() {
        function i(e, n) { _classCallCheck(this, i), this.$element = e, this.options = t.extend({}, i.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Sticky") }
        return _createClass(i, [{
            key: "_init",
            value: function() {
                var e = this.$element.parent("[data-sticky-container]"),
                    i = this.$element[0].id || Foundation.GetYoDigits(6, "sticky"),
                    n = this;
                e.length || (this.wasWrapped = !0), this.$container = e.length ? e : t(this.options.container).wrapInner(this.$element), this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({ "data-resize": i }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, t(window).one("load.zf.sticky", function() { "" !== n.options.anchor ? n.$anchor = t("#" + n.options.anchor) : n._parsePoints(), n._setSizes(function() { n._calc(!1) }), n._events(i.split("-").reverse().join("-")) })
            }
        }, {
            key: "_parsePoints",
            value: function() {
                var e = this.options.topAnchor,
                    i = this.options.btmAnchor,
                    n = [e, i],
                    s = {};
                if (e && i)
                    for (var o = 0, a = n.length; a > o && n[o]; o++) {
                        var r;
                        if ("number" == typeof n[o]) r = n[o];
                        else {
                            var l = n[o].split(":"),
                                u = t("#" + l[0]);
                            r = u.offset().top, l[1] && "bottom" === l[1].toLowerCase() && (r += u[0].getBoundingClientRect().height)
                        }
                        s[o] = r
                    } else s = { 0: 1, 1: document.documentElement.scrollHeight };
                this.points = s
            }
        }, {
            key: "_events",
            value: function(e) {
                var i = this,
                    n = this.scrollListener = "scroll.zf." + e;
                this.isOn || (this.canStick && (this.isOn = !0, t(window).off(n).on(n, function(t) { 0 === i.scrollCount ? (i.scrollCount = i.options.checkEvery, i._setSizes(function() { i._calc(!1, window.pageYOffset) })) : (i.scrollCount--, i._calc(!1, window.pageYOffset)) })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function(t, s) { i._setSizes(function() { i._calc(!1), i.canStick ? i.isOn || i._events(e) : i.isOn && i._pauseListeners(n) }) }))
            }
        }, { key: "_pauseListeners", value: function(e) { this.isOn = !1, t(window).off(e), this.$element.trigger("pause.zf.sticky") } }, { key: "_calc", value: function(t, e) { return t && this._setSizes(), this.canStick ? (e || (e = window.pageYOffset), void(e >= this.topPoint ? e <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0))) : (this.isStuck && this._removeSticky(!0), !1) } }, {
            key: "_setSticky",
            value: function() {
                var t = this.options.stickTo,
                    e = "top" === t ? "marginTop" : "marginBottom",
                    i = "top" === t ? "bottom" : "top",
                    n = {};
                n[e] = this.options[e] + "em", n[t] = 0, n[i] = "auto", n.left = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"], 10), this.isStuck = !0, this.$element.removeClass("is-anchored is-at-" + i).addClass("is-stuck is-at-" + t).css(n).trigger("sticky.zf.stuckto:" + t)
            }
        }, {
            key: "_removeSticky",
            value: function(t) {
                var e = this.options.stickTo,
                    i = "top" === e,
                    n = {},
                    s = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                    o = i ? "marginTop" : "marginBottom",
                    a = i ? "bottom" : "top",
                    r = t ? "top" : "bottom";
                n[o] = 0, t && !i || i && !t ? (n[e] = s, n[a] = 0) : (n[e] = 0, n[a] = s), n.left = "", this.isStuck = !1, this.$element.removeClass("is-stuck is-at-" + e).addClass("is-anchored is-at-" + r).css(n).trigger("sticky.zf.unstuckfrom:" + r)
            }
        }, {
            key: "_setSizes",
            value: function(t) {
                this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn), this.canStick || t();
                var e = this.$container[0].getBoundingClientRect().width,
                    i = window.getComputedStyle(this.$container[0]),
                    n = parseInt(i["padding-right"], 10);
                this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), this.$element.css({ "max-width": e - n + "px" });
                var s = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                this.containerHeight = s, this.$container.css({ height: s }), this.elemHeight = s, this.isStuck && this.$element.css({ left: this.$container.offset().left + parseInt(i["padding-left"], 10) }), this._setBreakPoints(s, function() { t && t() })
            }
        }, {
            key: "_setBreakPoints",
            value: function(t, i) {
                if (!this.canStick) {
                    if (!i) return !1;
                    i()
                }
                var n = e(this.options.marginTop),
                    s = e(this.options.marginBottom),
                    o = this.points ? this.points[0] : this.$anchor.offset().top,
                    a = this.points ? this.points[1] : o + this.anchorHeight,
                    r = window.innerHeight;
                "top" === this.options.stickTo ? (o -= n, a -= t + n) : "bottom" === this.options.stickTo && (o -= r - (t + s), a -= r - s), this.topPoint = o, this.bottomPoint = a, i && i()
            }
        }, { key: "destroy", value: function() { this._removeSticky(!0), this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({ height: "", top: "", bottom: "", "max-width": "" }).off("resizeme.zf.trigger"), this.$anchor.off("change.zf.sticky"), t(window).off(this.scrollListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({ height: "" }), Foundation.unregisterPlugin(this) } }]), i
    }();
    i.defaults = { container: "<div data-sticky-container></div>", stickTo: "top", anchor: "", topAnchor: "", btmAnchor: "", marginTop: 1, marginBottom: 1, stickyOn: "medium", stickyClass: "sticky", containerClass: "sticky-container", checkEvery: -1 }, Foundation.plugin(i, "Sticky")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Tabs"), Foundation.Keyboard.register("Tabs", { ENTER: "open", SPACE: "open", ARROW_RIGHT: "next", ARROW_UP: "previous", ARROW_DOWN: "next", ARROW_LEFT: "previous" }) }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this;
                if (this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = t('[data-tabs-content="' + this.$element[0].id + '"]'), this.$tabTitles.each(function() {
                        var i = t(this),
                            n = i.find("a"),
                            s = i.hasClass("is-active"),
                            o = n[0].hash.slice(1),
                            a = n[0].id ? n[0].id : o + "-label",
                            r = t("#" + o);
                        i.attr({ role: "presentation" }), n.attr({ role: "tab", "aria-controls": o, "aria-selected": s, id: a }), r.attr({ role: "tabpanel", "aria-hidden": !s, "aria-labelledby": a }), s && e.options.autoFocus && n.focus()
                    }), this.options.matchHeight) {
                    var i = this.$tabContent.find("img");
                    i.length ? Foundation.onImagesLoaded(i, this._setHeight.bind(this)) : this._setHeight()
                }
                this._events()
            }
        }, { key: "_events", value: function() { this._addKeyHandler(), this._addClickHandler(), this.options.matchHeight && t(window).on("changed.zf.mediaquery", this._setHeight.bind(this)) } }, {
            key: "_addClickHandler",
            value: function() {
                var e = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function(i) { i.preventDefault(), i.stopPropagation(), t(this).hasClass("is-active") || e._handleTabChange(t(this)) })
            }
        }, {
            key: "_addKeyHandler",
            value: function() {
                var e = this;
                e.$element.find("li:first-of-type"), e.$element.find("li:last-of-type");
                this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(i) {
                    if (9 !== i.which) {
                        i.stopPropagation(), i.preventDefault();
                        var n, s, o = t(this),
                            a = o.parent("ul").children("li");
                        a.each(function(i) { return t(this).is(o) ? void(e.options.wrapOnKeys ? (n = 0 === i ? a.last() : a.eq(i - 1), s = i === a.length - 1 ? a.first() : a.eq(i + 1)) : (n = a.eq(Math.max(0, i - 1)), s = a.eq(Math.min(i + 1, a.length - 1)))) : void 0 }), Foundation.Keyboard.handleKey(i, "Tabs", { open: function() { o.find('[role="tab"]').focus(), e._handleTabChange(o) }, previous: function() { n.find('[role="tab"]').focus(), e._handleTabChange(n) }, next: function() { s.find('[role="tab"]').focus(), e._handleTabChange(s) } })
                    }
                })
            }
        }, {
            key: "_handleTabChange",
            value: function(e) {
                var i = e.find('[role="tab"]'),
                    n = i[0].hash,
                    s = this.$tabContent.find(n),
                    o = this.$element.find("." + this.options.linkClass + ".is-active").removeClass("is-active").find('[role="tab"]').attr({ "aria-selected": "false" });
                t("#" + o.attr("aria-controls")).removeClass("is-active").attr({ "aria-hidden": "true" }), e.addClass("is-active"), i.attr({ "aria-selected": "true" }), s.addClass("is-active").attr({ "aria-hidden": "false" }), this.$element.trigger("change.zf.tabs", [e])
            }
        }, {
            key: "selectTab",
            value: function(t) {
                var e;
                e = "object" == typeof t ? t[0].id : t, e.indexOf("#") < 0 && (e = "#" + e);
                var i = this.$tabTitles.find('[href="' + e + '"]').parent("." + this.options.linkClass);
                this._handleTabChange(i)
            }
        }, {
            key: "_setHeight",
            value: function() {
                var e = 0;
                this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
                    var i = t(this),
                        n = i.hasClass("is-active");
                    n || i.css({ visibility: "hidden", display: "block" });
                    var s = this.getBoundingClientRect().height;
                    n || i.css({ visibility: "", display: "" }), e = s > e ? s : e
                }).css("height", e + "px")
            }
        }, { key: "destroy", value: function() { this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(), this.options.matchHeight && t(window).off("changed.zf.mediaquery"), Foundation.unregisterPlugin(this) } }]), e
    }();
    e.defaults = { autoFocus: !1, wrapOnKeys: !0, matchHeight: !1, linkClass: "tabs-title", panelClass: "tabs-panel" }, Foundation.plugin(e, "Tabs")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, i.data(), n), this.className = "", this._init(), this._events(), Foundation.registerPlugin(this, "Toggler") }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e;
                this.options.animate ? (e = this.options.animate.split(" "), this.animationIn = e[0], this.animationOut = e[1] || null) : (e = this.$element.data("toggler"), this.className = "." === e[0] ? e.slice(1) : e);
                var i = this.$element[0].id;
                t('[data-open="' + i + '"], [data-close="' + i + '"], [data-toggle="' + i + '"]').attr("aria-controls", i), this.$element.attr("aria-expanded", !this.$element.is(":hidden"))
            }
        }, { key: "_events", value: function() { this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this)) } }, { key: "toggle", value: function() { this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]() } }, {
            key: "_toggleClass",
            value: function() {
                this.$element.toggleClass(this.className);
                var t = this.$element.hasClass(this.className);
                t ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), this._updateARIA(t)
            }
        }, {
            key: "_toggleAnimate",
            value: function() {
                var t = this;
                this.$element.is(":hidden") ? Foundation.Motion.animateIn(this.$element, this.animationIn, function() { this.trigger("on.zf.toggler"), t._updateARIA(!0) }) : Foundation.Motion.animateOut(this.$element, this.animationOut, function() { this.trigger("off.zf.toggler"), t._updateARIA(!1) })
            }
        }, { key: "_updateARIA", value: function(t) { this.$element.attr("aria-expanded", !!t) } }, { key: "destroy", value: function() { this.$element.off(".zf.toggler"), Foundation.unregisterPlugin(this) } }]), e
    }();
    e.defaults = { animate: !1 }, Foundation.plugin(e, "Toggler")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e }
}();
! function(t) {
    var e = function() {
        function e(i, n) { _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this.isActive = !1, this.isClick = !1, this._init(), Foundation.registerPlugin(this, "Tooltip") }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element.attr("aria-describedby") || Foundation.GetYoDigits(6, "tooltip");
                this.options.positionClass = this._getPositionClass(this.$element), this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? t(this.options.template) : this._buildTemplate(e), this.template.appendTo(document.body).text(this.options.tipText).hide(), this.$element.attr({ title: "", "aria-describedby": e, "data-yeti-box": e, "data-toggle": e, "data-resize": e }).addClass(this.triggerClass), this.usedPositions = [], this.counter = 4, this.classChanged = !1, this._events()
            }
        }, { key: "_getPositionClass", value: function(t) { if (!t) return ""; var e = t[0].className.match(/\b(top|left|right)\b/g); return e = e ? e[0] : "" } }, {
            key: "_buildTemplate",
            value: function(e) {
                var i = (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim(),
                    n = t("<div></div>").addClass(i).attr({ role: "tooltip", "aria-hidden": !0, "data-is-active": !1, "data-is-focus": !1, id: e });
                return n
            }
        }, { key: "_reposition", value: function(t) { this.usedPositions.push(t ? t : "bottom"), !t && this.usedPositions.indexOf("top") < 0 ? this.template.addClass("top") : "top" === t && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : "left" === t && this.usedPositions.indexOf("right") < 0 ? this.template.removeClass(t).addClass("right") : "right" === t && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(t).addClass("left") : !t && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.addClass("left") : "top" === t && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(t).addClass("left") : "left" === t && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : "right" === t && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : this.template.removeClass(t), this.classChanged = !0, this.counter-- } }, {
            key: "_setPosition",
            value: function() {
                var t = this._getPositionClass(this.template),
                    e = Foundation.Box.GetDimensions(this.template),
                    i = Foundation.Box.GetDimensions(this.$element),
                    n = "left" === t ? "left" : "right" === t ? "left" : "top",
                    s = "top" === n ? "height" : "width";
                "height" === s ? this.options.vOffset : this.options.hOffset;
                if (e.width >= e.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.template)) return this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({ width: i.windowDims.width - 2 * this.options.hOffset, height: "auto" }), !1;
                for (this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center " + (t || "bottom"), this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.template) && this.counter;) this._reposition(t), this._setPosition()
            }
        }, {
            key: "show",
            value: function() {
                if ("all" !== this.options.showOn && !Foundation.MediaQuery.atLeast(this.options.showOn)) return !1;
                var t = this;
                this.template.css("visibility", "hidden").show(), this._setPosition(), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({ "data-is-active": !0, "aria-hidden": !1 }), t.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}), this.$element.trigger("show.zf.tooltip")
            }
        }, {
            key: "hide",
            value: function() {
                var t = this;
                this.template.stop().attr({ "aria-hidden": !0, "data-is-active": !1 }).fadeOut(this.options.fadeOutDuration, function() { t.isActive = !1, t.isClick = !1, t.classChanged && (t.template.removeClass(t._getPositionClass(t.template)).addClass(t.options.positionClass), t.usedPositions = [], t.counter = 4, t.classChanged = !1) }), this.$element.trigger("hide.zf.tooltip")
            }
        }, {
            key: "_events",
            value: function() {
                var t = this,
                    e = (this.template, !1);
                this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function(e) { t.isActive || (t.timeout = setTimeout(function() { t.show() }, t.options.hoverDelay)) }).on("mouseleave.zf.tooltip", function(i) { clearTimeout(t.timeout), (!e || !t.isClick && t.options.clickOpen) && t.hide() }), this.options.clickOpen && this.$element.on("mousedown.zf.tooltip", function(e) { e.stopImmediatePropagation(), t.isClick ? t.hide() : (t.isClick = !0, !t.options.disableHover && t.$element.attr("tabindex") || t.isActive || t.show()) }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(e) { t.isActive ? t.hide() : t.show() }), this.$element.on({ "close.zf.trigger": this.hide.bind(this) }), this.$element.on("focus.zf.tooltip", function(i) { return e = !0, t.isClick ? !1 : void t.show() }).on("focusout.zf.tooltip", function(i) { e = !1, t.isClick = !1, t.hide() }).on("resizeme.zf.trigger", function() { t.isActive && t._setPosition() })
            }
        }, { key: "toggle", value: function() { this.isActive ? this.hide() : this.show() } }, { key: "destroy", value: function() { this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tootip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize"), this.template.remove(), Foundation.unregisterPlugin(this) } }]), e
    }();
    e.defaults = { disableForTouch: !1, hoverDelay: 200, fadeInDuration: 150, fadeOutDuration: 150, disableHover: !1, templateClasses: "", tooltipClass: "tooltip", triggerClass: "has-tip", showOn: "small", template: "", tipText: "", touchCloseText: "Tap to close.", clickOpen: !0, positionClass: "", vOffset: 10, hOffset: 12 }, Foundation.plugin(e, "Tooltip")
}(jQuery);;
! function(n, e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : n.MotionUI = e(n.jQuery) }(this, function(n) {
    "use strict";

    function e(e, a, r, u) {
        function s() { e || a.hide(), m(), u && u.apply(a) }

        function m() { a[0].style.transitionDuration = 0, a.removeClass(d + " " + c + " " + r) }
        if (a = n(a).eq(0), a.length) {
            if (null === o) return e ? a.show() : a.hide(), void u();
            var d = e ? i[0] : i[1],
                c = e ? t[0] : t[1];
            m(), a.addClass(r), a.css("transition", "none"), requestAnimationFrame(function() { a.addClass(d), e && a.show() }), requestAnimationFrame(function() { a[0].offsetWidth, a.css("transition", ""), a.addClass(c) }), a.one("transitionend", s)
        }
    }! function() {
        Date.now || (Date.now = function() { return (new Date).getTime() });
        for (var n = ["webkit", "moz"], e = 0; e < n.length && !window.requestAnimationFrame; ++e) {
            var i = n[e];
            window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var t = 0;
            window.requestAnimationFrame = function(n) {
                var e = Date.now(),
                    i = Math.max(t + 16, e);
                return setTimeout(function() { n(t = i) }, i - e)
            }, window.cancelAnimationFrame = clearTimeout
        }
    }();
    var i = ["mui-enter", "mui-leave"],
        t = ["mui-enter-active", "mui-leave-active"],
        o = function() {
            var n = { transition: "transitionend", WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend" },
                e = window.document.createElement("div");
            for (var i in n)
                if ("undefined" != typeof e.style[i]) return n[i];
            return null
        }(),
        a = { animateIn: function(n, i, t) { e(!0, n, i, t) }, animateOut: function(n, i, t) { e(!1, n, i, t) } };
    return a
});;
/**
 * @file
 * Custom sub-theme behaviors.
 *
 */
(function($, Drupal) {

    Drupal.behaviors.exampleBehavior = {
        attach: function(context, settings) {

            /* Why join us */
            $(document).ready(function() {



                var firstelement = $('#block-whyjoinus .field-item, #block-whyjoinus .field-item.active .field-paragraph--field-link .field-item').first().text();
                $('#block-whyjoinus .field-item, #block-whyjoinus .field-item.active .field-paragraph--field-link .field-item').first().addClass('selected');
                $("#wju-text").html(firstelement);
                $('#block-whyjoinus .field-item, #block-whyjoinus .field-item.active .field-paragraph--field-link .field-item').each(function() {
                    $(this).mouseenter(function() {
                        $(this).addClass('active');


                    });
                    $(this).mouseleave(function() {
                        $(this).removeClass('active')
                        $('wju-text').hide();
                        $('#block-whyjoinus .field-item, #block-whyjoinus .field-item.active .field-paragraph--field-link .field-item').first().show();
                        $(firstelement).addClass("active");
                    });
                });

                $('#block-whyjoinus .field-item').each(function() {

                    $(this).click(function() {

                        $('#block-whyjoinus .field-item').not(this).each((function() {
                            $(this).removeClass('selected');
                            $("#wju-text").removeAttr("style")
                            $("#wju-text").removeClass('selected');

                        }));
                        $("#wju-text").addClass('selected');
                        $(this).addClass('selected');

                        var str = $(".field-name-field-icon-text", this).text();
                        $("#wju-text").text(str);
                        //$("#wju-text").show(str);
                        $("#wju-text").animate({
                            "margin-right": "220px",
                            "right": "0"
                        }, 300);
                    });
                });

                /**
                 * Fix svg icons with and height for iconslider
                 */
                $('#block-iconslider circle').each(function(i, circle) {
                    $(circle).attr('r', '35');
                });

                $('#block-iconslider svg[x="25"][y="25"]').each(function(i, svg) {
                    var $svg = $(svg);
                    $svg.attr('x', '33');
                    $svg.attr('y', '33');
                });

                $('#block-iconslider svg[width="50"][height="50"]').each(function(i, svg) {
                    var $svg = $(svg);

                    $svg.attr('width', '35');
                    $svg.attr('height', '35');
                });

                $("#block-lifeatsymphony2columntext .button").off('click').on('click', function() {
                    var stContentTop = $('.st-content').scrollTop();
                    var breezyElement = $("#bzOpeningsContainer");
                    var jobsBlockElement = $("#block-views-block-jobs-block-1");

                    var jobsTop = breezyElement.length ? (breezyElement.parent().offset().top - 125) : jobsBlockElement.offset().top;

                    $('.st-content').animate({ scrollTop: stContentTop + jobsTop }, 'slow');
                });
            });

            $(document).ready(function($) {

                $('#tabs').tabulous({
                    effect: 'slideLeft' // scale, slideLeft, scaleUp or flip
                });


                $('#block-iconslider ul li').each(function() {
                    $(this).mouseenter(function() {
                        $(this).addClass('marked');


                    });
                    $(this).mouseleave(function() {
                        $(this).removeClass('marked')
                    });
                });

            });


            /* Show more - show less element*/

            $('#slickbox').hide();
            $('#slick-hide').hide();
            // shows the slickbox on clicking the noted link
            $('#slick-show').click(function() {
                $('#slickbox').show('slow');
                $(this).hide();
                $('#slick-hide').show();
                return false;

            });
            // hides the slickbox on clicking the noted link
            $('#slick-hide').click(function() {
                $('#slickbox').hide('slow');
                $(this).hide();
                $('#slick-show').show();
                return false;
            });

            // toggles the slickbox on clicking the noted link
            $('#slick-toggle').click(function() {
                $('#slickbox').toggle(400);
                return false;
            });








            /* toggle open menu */
            $(document).ready(function() {
                $("#close-sidebar").click(function() {
                    $(".st-container.st-effect-12").toggleClass("st-menu-open");
                });
            });

            /* slick slider: partners (/work) */
            $('.slider-partners').slick({
                dots: true,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                responsive: [{
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });

            /* slick slider: values (/community) */
            $('.slider-values').slick({
                fade: true,
                cssEase: 'linear',
                dots: true,
                arrows: true,
            });

            /* slider blog */
            $('#block-views-block-blog-block-1 .view-content').slick({
                fade: true,
                cssEase: 'linear',
                dots: true,
                arrows: true,
            });

            /* subscribe form (/community) */
            function validateEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

            $("#subscribe-success, #subscribe-failure").hide();

            $("#subscribe-btn").click(function() {
                $("#subscribe-success, #subscribe-failure").hide();

                var email = $("#email-address").val();
                if (validateEmail(email)) {
                    $.ajax({
                        method: "POST",
                        url: "https://script.google.com/macros/s/AKfycbzkVJNjmd84LdyMn1Oe7M12Rza-X7k0mUjl2xkrHxJsA7Bi9V_t/exec",
                        data: {
                            email: email
                        }
                    }).done(function(res) {

                        if (res.result === "success")
                            $("#subscribe-success").show(300);
                        else
                            $("#subscribe-failure").show(300);
                    });
                } else {
                    $("#subscribe-failure").show(300);
                }
            });

            /* homepage navigation */

            function inHoverState(hovered_menu_option) {
                var menu_state = menu_states[hovered_menu_option.attr("id")];

                if ($(window).width() >= 575) {
                    hovered_menu_option.toggleClass("active").text(menu_state.over);
                }
                $(".full-container").css("background-color", menu_state.color);
                $(".full-container").css("background-image");
                $(".white-able, .sprite-dna").toggleClass("white");
                //   $("#homebox a:not(.active)").css("color", "white");
                $("#homebox a.active").css("color", "rgba(255,255,255,0.2)");
                //  $("#homebox a:not(.active)").css("color", "rgba(255,255,255,0.2)");
                //$(".full-container").toggleClass('test')
            }

            function outHoverState(hovered_menu_option) {
                var menu_state = menu_states[hovered_menu_option.attr("id")];

                $(".full-container").css("background-color", "#fff");
                $(".full-container").css("background-image");
                $(".white-able, .sprite-dna").toggleClass("white");
                $("#homebox a.active").css("color", "black");
                hovered_menu_option.toggleClass("active").text(menu_state.orig);
            }

            $('#homebox a:not(.white-able)').each(function() {
                $(this).toggleClass("active");
            });

            // effects on hover
            $("#homebox a:not(.white-able)").hover(function() {
                    // if ($(window).width() >= 575) {
                    inHoverState($(this));
                    // }
                },
                function() {
                    outHoverState($(this));
                });

            /* hamburger icon black/white toggle */
            var waypoints = $('.full-container:first').waypoint({
                handler: function() {
                    $("#nav-btn").toggleClass("white");
                },
                context: '.st-content',
                offset: 100
            })

            /* orbit slide numbers */
            function slideNumber() {
                var $slides = $('.orbit-slide');
                var $activeSlide = $slides.filter('.is-active');
                var activeNum = $slides.index($activeSlide) + 1;
                $('.slide-number').innerHTML = activeNum;
                //console.log(activeNum);
                $('.orbit-sn').html(activeNum);
            }
            $('[data-orbit]').on('slidechange.zf.orbit', slideNumber);

            if ($('.orbit-caption').length) {
                $('.orbit-slide-number p').hide();
            }

            /* arrow down on headerimage */
            $("#arrow-down").click(function() {
                $('.st-content').animate({
                        scrollTop: $("#main").offset().top
                    },
                    'slow');
            });

            /* open careers btn
            $("#block-weregrowing .button").click(function() {
              $('.st-content').animate({
                  scrollTop: $("#block-seeajobyoureexcitedaboutapplytoday").offset().top
                },
                'fast');
            }); */

            /* st menu screen height adapt */
            if ($(window).height() < 700) {
                $(".st-menu .title").css("margin", "3rem 0 0 4rem");
                $(".st-menu ul li a").css("padding", "0.3rem 1em 0.3rem 4rem");
            }

            if (($(window).height() < 700) && ($(window).width() > 700)) {
                $("#homebox").css("height", "55vh");
            }

            /* hide orbit if there's 1 image */
            if ($('.orbit li').length == 1) {
                $('.orbit-bullets').hide();
                $('.orbit-slide-number').hide();
                $('.orbit-previous').hide();
                $('.orbit-next').hide();
            }

            /* footer links in new window */
            $('nav#block-footer a').click(function() {
                $(this).attr('target', '_blank');
            });



        }
    };

})(jQuery, Drupal);;
/**
 * @file
 * DNA config
 *
 */
(function($, Drupal) {

    /**
     * dnaBehavior
     */
    Drupal.behaviors.dnaBehavior = {
        attach: function(context, settings) {

            function rand(min, max) {
                return Math.round(Math.random() * (max - min) + min);
            }

            function shuffle(array) {
                var currentIndex = array.length,
                    temporaryValue, randomIndex;

                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }

            function generate_dna(config, parent_selector) {
                // Make the grid

                var cols = Math.round(config.left_max_x / config.average_width_height);
                var rows = (Math.round(config.max_height / config.average_width_height) + 2) / config.row_skip;
                var width_height = Math.round(config.left_max_x / cols);
                var dna_positions = [];

                console.log('cols', cols, 'rows', rows, 'widh_he', width_height)

                // First let's generate the DNA positions
                for (var side = 0; side <= 1; side++) {
                    var x = 0,
                        y = -width_height;
                    var skipped = 0;

                    for (var i = 0; i < rows; i++) {
                        for (var j = 0; j < cols; j++) {
                            var final_x = (x + rand(0, config.average_scatter));
                            var final_y = (y + rand(0, config.average_scatter));
                            if (final_y > config.max_height) break;
                            var excluded = false;

                            // Excluded area?
                            for (var k = 0; k < config.force_exclude.length; k++) {
                                $excluded_elem = $(config.force_exclude[k]);
                                var excluded_left = $excluded_elem.offset().left - config.force_exclude_padding;
                                var excluded_right = $excluded_elem.offset().left + $excluded_elem.width() + config.force_exclude_padding;
                                var excluded_top = $excluded_elem.offset().top - config.force_exclude_padding;
                                var excluded_bottom = $excluded_elem.offset().top + $excluded_elem.height() + config.force_exclude_padding;

                                if (final_x >= excluded_left && final_x <= excluded_right && final_y >= excluded_top && final_y <= excluded_bottom) {
                                    excluded = true;
                                    break;
                                }
                            }

                            // Show all grid elements
                            if (config.debug && !excluded) {
                                $("<div class='debug_el'></div>").appendTo(parent_selector).css({
                                    top: final_y + 'px',
                                    left: final_x + 'px'
                                });
                            }

                            dna_positions.push({
                                "x": final_x,
                                "y": final_y
                            });

                            x += width_height;
                        }
                        x = side * config.right_min_x;
                        y += width_height * config.row_skip;
                    }
                }

                dna_positions = shuffle(dna_positions);
                for (var i = 0; i < dna_positions.length; i += config.average_grid_skip) {
                    // Show chosen grid elements
                    if (config.debug) {
                        $("<div class='debug_el red'></div>").appendTo(parent_selector).css({
                            top: dna_positions[i].y + 'px',
                            left: dna_positions[i].x + 'px'
                        });
                    }

                    var dna = rand(1, 49);
                    $("<i class='sprite-dna sprite-dna-" + dna + "'></i>").appendTo(parent_selector).css({
                        top: dna_positions[i].y + 'px',
                        left: dna_positions[i].x + 'px'
                    });
                }
            }

            function generate_static_dna(config, parent_selector) {
                var cols = 2;
                var rows = Math.round(((config.max_height / config.average_width_height) + 4) / config.row_skip);
                var height = Math.round(config.max_height / rows);

                //console.log('max', config.max_height, 'rows', rows, 'height', height);

                var y = 100;
                for (var i = 0; i < rows; i++) {
                    var x;
                    for (var j = 1; j <= cols; j++) {
                        if (j % 2 !== 0)
                            x = rand(1, 10);
                        else
                            x = rand(85, 97);

                        var dna = rand(1, 49);
                        $("<i class='sprite-dna sprite-dna-" + dna + "'></i>").appendTo(parent_selector).css({
                            top: y + 'px',
                            left: x + '%'
                        }); //X is in percentage

                        y += height / 2;
                    }

                }
            }

            $(window).load(function() {
                var dna_config = {
                    "left_max_x": Math.round(window.innerWidth * 0.2) + 1,
                    "right_min_x": Math.round(window.innerWidth * 0.2) * 4 + 20, // 20 is a bit of padding
                    "max_height": $("body.not-front .st-content-inner").height() - 200,
                    "average_width_height": 200,
                    "average_scatter": 100,
                    "average_grid_skip": 2,
                    "row_skip": 2.5,
                    "force_exclude": [".orbit-caption"],
                    "force_exclude_padding": 100,
                    "debug": false
                };

                //generate_dna(dna_config, ".subpage");
                if ($(window).width() > 1200) {
                    generate_static_dna(dna_config, "body.not-front .st-content-inner");
                }

                $(window).resize(function() {
                    if ($(window).width() < 1200) {
                        $(".sprite-dna").css("display", "none");
                    } else {
                        $(".sprite-dna").css("display", "block");
                    }
                });
            });


            /* random DNA on people block */
            $(document).ready(function() {

                var min = 1;
                var dnamax = 47;
                var peoplemax = $('.block-views-block-symphony-people-block-1 .view-content .views-row').length;

                var dna = Math.floor(Math.random() * (dnamax - min + 1)) + min;
                var people = Math.floor(Math.random() * (peoplemax - min + 1)) + min;

                function rollPeople() {
                    return (Math.floor(Math.random() * people) + min);
                }

                function rollDna() {
                    return (Math.floor(Math.random() * dna) + min);
                }

                for (i = 0; i < 4; i++) {
                    $('<i class="sprite-dna sprite-dna-' + rollDna() + ' views-row"></i>').insertAfter('.block-views-block-symphony-people-block-1 .view-content .people-row:nth-child(' + rollPeople() + ')');
                }

                if ($(window).width() < 1000) {
                    $(".sprite-dna.views-row").css("display", "none");
                } else {
                    $(".sprite-dna.views-row").css("display", "block");
                }

            });



        }
    };

})(jQuery, Drupal);;
/**
 * sidebarEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var SidebarMenuEffects = (function() {

    function hasParentClass(e, classname) {
        if (e === document) return false;
        if (classie.has(e, classname)) {
            return true;
        }
        return e.parentNode && hasParentClass(e.parentNode, classname);
    }

    // http://coveroverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function(a) { if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    function init() {

        var container = document.getElementById('st-container'),
            buttons = Array.prototype.slice.call(document.querySelectorAll('#nav-btn')),
            // event type (if mobile use touch events)
            //eventtype = mobilecheck() ? 'touchstart' : 'click',
            eventtype = 'click',
            resetMenu = function() {
                classie.toggleClass(container, 'st-menu-open');
            },
            bodyClickFn = function(evt) {
                if (!hasParentClass(evt.target, 'st-menu')) {
                    resetMenu();
                    document.removeEventListener(eventtype, bodyClickFn);
                }
            };

        buttons.forEach(function(el, i) {
            var effect = el.getAttribute('data-effect');

            el.addEventListener(eventtype, function(ev) {
                ev.stopPropagation();
                ev.preventDefault();
                container.className = 'st-container'; // clear
                classie.add(container, effect);
                setTimeout(function() {
                    //console.log('321', classie)
                    classie.toggleClass(container, 'st-menu-open');
                }, 25);
                document.addEventListener(eventtype, bodyClickFn);
            });
        });

    }

    init();

})();;
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function(window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);;
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
! function(a) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery) }(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(b, c) { return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" })
    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) { a(c).attr("data-slick-index", b) }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({ height: b }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function(a) { a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d)) }, complete: function() { c && c.call() } })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() { e.disableTransition(), c.call() }, e.options.speed))
    }, b.prototype.getNavTarget = function() {
        var b = this,
            c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) { a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "") }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this,
            e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) { a = d; break }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { a(this).attr("style", a(this).data("originalStyling")) }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function() { c.disableTransition(a), b.call() }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() { b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay()) }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() { var a = this; return a.currentSlide }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) { var b = this; return b.options[a] }, b.prototype.getNavigableIndexes = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() { return this }, b.prototype.getSlideCount = function() { var c, d, e, b = this; return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) { return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0 }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) { a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c }) }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) { a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c }) }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }))
    }, b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    e = document.createElement("img");
                e.onload = function() { c.animate({ opacity: 0 }, 100, function() { c.attr("src", d).animate({ opacity: 1 }, 200, function() { c.removeAttr("data-lazy").removeClass("slick-loading") }), b.$slider.trigger("lazyLoaded", [b, c, d]) }) }, e.onerror = function() { c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]) }, e.src = d
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({ data: { message: "next" } })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({ data: { message: "previous" } })
    }, b.prototype.preventDefault = function(a) { a.preventDefault() }, b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, g, c = this,
            d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() { e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad() }, g.onerror = function() { 3 > b ? setTimeout(function() { c.progressiveLazyLoad(b + 1) }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad()) }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }, b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) { return b.options.mobileFirst ? a - c : c - a })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() { b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition() }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) { var d = this; return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit()) }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) { c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) }), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this,
            g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
        else if ("multiple" === h) a.each(e, function(a, c) { b.options[a] = c });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(), b.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
            d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() { a(this).attr("id", "") })
        }
    }, b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() { i.postSlide(d) }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() { i.postSlide(d) }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() { i.postSlide(e) })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() { i.postSlide(e) }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() { var a, b, c, d, e = this; return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical" }, b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
                case "left":
                case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) { var d, e, f, g, h, b = this; return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0) }, b.prototype.swipeStart = function(a) { var c, b = this; return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0)) }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }, a.fn.slick = function() {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});;
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) { this.group.queueTrigger(this, t) }, t.prototype.trigger = function(t) { this.enabled && this.callback && this.callback.apply(this, t) }, t.prototype.destroy = function() { this.context.remove(this), this.group.remove(this), delete i[this.key] }, t.prototype.disable = function() { return this.enabled = !1, this }, t.prototype.enable = function() { return this.context.refresh(), this.enabled = !0, this }, t.prototype.next = function() { return this.group.next(this) }, t.prototype.previous = function() { return this.group.previous(this) }, t.invokeAll = function(t) { var e = []; for (var o in i) e.push(i[o]); for (var n = 0, r = e.length; r > n; n++) e[n][t]() }, t.destroyAll = function() { t.invokeAll("destroy") }, t.disableAll = function() { t.invokeAll("disable") }, t.enableAll = function() { t.invokeAll("enable") }, t.refreshAll = function() { t.Context.refreshAll() }, t.viewportHeight = function() { return window.innerHeight || document.documentElement.clientHeight }, t.viewportWidth = function() { return document.documentElement.clientWidth }, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function() { return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function() { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) { window.setTimeout(t, 1e3 / 60) }

    function e(t) { this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler() }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() { e.handleResize(), e.didResize = !1 }
        var e = this;
        this.adapter.on("resize.waypoints", function() { e.didResize || (e.didResize = !0, n.requestAnimationFrame(t)) })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() { e.handleScroll(), e.didScroll = !1 }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() { n.Context.refreshAll() }, e.prototype.handleScroll = function() {
        var t = {},
            e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s],
                    l = o.oldScroll < a.triggerPoint,
                    h = o.newScroll >= a.triggerPoint,
                    p = l && h,
                    u = !l && !h;
                (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll }
    }, e.prototype.innerHeight = function() { return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight() }, e.prototype.remove = function(t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, e.prototype.innerWidth = function() { return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth() }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() { for (var t in o) o[t].flushTriggers() }), this
    }, e.findOrCreateByElement = function(t) { return e.findByElement(t) || new e(t) }, e.refreshAll = function() { for (var t in o) o[t].refresh() }, e.findByElement = function(t) { return o[t.waypointContextKey] }, window.onload = function() { r && r(), e.refreshAll() }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) { return t.triggerPoint - e.triggerPoint }

    function e(t, e) { return e.triggerPoint - t.triggerPoint }

    function i(t) { this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this }
    var o = { vertical: {}, horizontal: {} },
        n = window.Waypoint;
    i.prototype.add = function(t) { this.waypoints.push(t) }, i.prototype.clearTriggerQueues = function() { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) { this.waypoints.sort(t); var i = n.Adapter.inArray(e, this.waypoints); return i ? this.waypoints[i - 1] : null }, i.prototype.queueTrigger = function(t, e) { this.triggerQueues[e].push(t) }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() { return this.waypoints[0] }, i.prototype.last = function() { return this.waypoints[this.waypoints.length - 1] }, i.findOrCreate = function(t) { return o[t.axis][t.name] || new i(t) }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) { this.$element = e(t) }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) { t.prototype[i] = function() { var t = Array.prototype.slice.call(arguments); return this.$element[i].apply(this.$element, t) } }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) { t[o] = e[o] }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() { var n = t.extend({}, o, { element: this }); "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n)) }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();;
/*!
 * Select2 4.0.6-rc.1
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function(root, jQuery) {
            if (jQuery === undefined) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if (typeof window !== 'undefined') {
                    jQuery = require('jquery');
                } else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function(jQuery) {
    // This is needed so we can catch the AMD loader configuration and use it
    // The inner file should be wrapped (by `banner.start.js`) in a function that
    // returns the AMD loader references.
    var S2 = (function() {
        // Restore the Select2 AMD loader so it can be used
        // Needed mostly in the language files, where the loader is not inserted
        if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
            var S2 = jQuery.fn.select2.amd;
        }
        var S2;
        (function() {
            if (!S2 || !S2.requirejs) {
                if (!S2) { S2 = {}; } else { require = S2; }
                /**
                 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
                 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
                 */
                //Going sloppy to avoid 'use strict' string cost, but strict practices should
                //be followed.
                /*global setTimeout: false */

                var requirejs, require, define;
                (function(undef) {
                    var main, req, makeMap, handlers,
                        defined = {},
                        waiting = {},
                        config = {},
                        defining = {},
                        hasOwn = Object.prototype.hasOwnProperty,
                        aps = [].slice,
                        jsSuffixRegExp = /\.js$/;

                    function hasProp(obj, prop) {
                        return hasOwn.call(obj, prop);
                    }

                    /**
                     * Given a relative module name, like ./something, normalize it to
                     * a real name that can be mapped to a path.
                     * @param {String} name the relative name
                     * @param {String} baseName a real name that the name arg is relative
                     * to.
                     * @returns {String} normalized name
                     */
                    function normalize(name, baseName) {
                        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
                            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
                            baseParts = baseName && baseName.split("/"),
                            map = config.map,
                            starMap = (map && map['*']) || {};

                        //Adjust any relative paths.
                        if (name) {
                            name = name.split('/');
                            lastIndex = name.length - 1;

                            // If wanting node ID compatibility, strip .js from end
                            // of IDs. Have to do this here, and not in nameToUrl
                            // because node allows either .js or non .js to map
                            // to same file.
                            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                            }

                            // Starts with a '.' so need the baseName
                            if (name[0].charAt(0) === '.' && baseParts) {
                                //Convert baseName to array, and lop off the last part,
                                //so that . matches that 'directory' and not name of the baseName's
                                //module. For instance, baseName of 'one/two/three', maps to
                                //'one/two/three.js', but we want the directory, 'one/two' for
                                //this normalization.
                                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                                name = normalizedBaseParts.concat(name);
                            }

                            //start trimDots
                            for (i = 0; i < name.length; i++) {
                                part = name[i];
                                if (part === '.') {
                                    name.splice(i, 1);
                                    i -= 1;
                                } else if (part === '..') {
                                    // If at the start, or previous value is still ..,
                                    // keep them so that when converted to a path it may
                                    // still work when converted to a path, even though
                                    // as an ID it is less than ideal. In larger point
                                    // releases, may be better to just kick out an error.
                                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                                        continue;
                                    } else if (i > 0) {
                                        name.splice(i - 1, 2);
                                        i -= 2;
                                    }
                                }
                            }
                            //end trimDots

                            name = name.join('/');
                        }

                        //Apply map config if available.
                        if ((baseParts || starMap) && map) {
                            nameParts = name.split('/');

                            for (i = nameParts.length; i > 0; i -= 1) {
                                nameSegment = nameParts.slice(0, i).join("/");

                                if (baseParts) {
                                    //Find the longest baseName segment match in the config.
                                    //So, do joins on the biggest to smallest lengths of baseParts.
                                    for (j = baseParts.length; j > 0; j -= 1) {
                                        mapValue = map[baseParts.slice(0, j).join('/')];

                                        //baseName segment has  config, find if it has one for
                                        //this name.
                                        if (mapValue) {
                                            mapValue = mapValue[nameSegment];
                                            if (mapValue) {
                                                //Match, update name to the new value.
                                                foundMap = mapValue;
                                                foundI = i;
                                                break;
                                            }
                                        }
                                    }
                                }

                                if (foundMap) {
                                    break;
                                }

                                //Check for a star map match, but just hold on to it,
                                //if there is a shorter segment match later in a matching
                                //config, then favor over this star map.
                                if (!foundStarMap && starMap && starMap[nameSegment]) {
                                    foundStarMap = starMap[nameSegment];
                                    starI = i;
                                }
                            }

                            if (!foundMap && foundStarMap) {
                                foundMap = foundStarMap;
                                foundI = starI;
                            }

                            if (foundMap) {
                                nameParts.splice(0, foundI, foundMap);
                                name = nameParts.join('/');
                            }
                        }

                        return name;
                    }

                    function makeRequire(relName, forceSync) {
                        return function() {
                            //A version of a require function that passes a moduleName
                            //value for items that may need to
                            //look up paths relative to the moduleName
                            var args = aps.call(arguments, 0);

                            //If first arg is not require('string'), and there is only
                            //one arg, it is the array form without a callback. Insert
                            //a null so that the following concat is correct.
                            if (typeof args[0] !== 'string' && args.length === 1) {
                                args.push(null);
                            }
                            return req.apply(undef, args.concat([relName, forceSync]));
                        };
                    }

                    function makeNormalize(relName) {
                        return function(name) {
                            return normalize(name, relName);
                        };
                    }

                    function makeLoad(depName) {
                        return function(value) {
                            defined[depName] = value;
                        };
                    }

                    function callDep(name) {
                        if (hasProp(waiting, name)) {
                            var args = waiting[name];
                            delete waiting[name];
                            defining[name] = true;
                            main.apply(undef, args);
                        }

                        if (!hasProp(defined, name) && !hasProp(defining, name)) {
                            throw new Error('No ' + name);
                        }
                        return defined[name];
                    }

                    //Turns a plugin!resource to [plugin, resource]
                    //with the plugin being undefined if the name
                    //did not have a plugin prefix.
                    function splitPrefix(name) {
                        var prefix,
                            index = name ? name.indexOf('!') : -1;
                        if (index > -1) {
                            prefix = name.substring(0, index);
                            name = name.substring(index + 1, name.length);
                        }
                        return [prefix, name];
                    }

                    //Creates a parts array for a relName where first part is plugin ID,
                    //second part is resource ID. Assumes relName has already been normalized.
                    function makeRelParts(relName) {
                        return relName ? splitPrefix(relName) : [];
                    }

                    /**
                     * Makes a name map, normalizing the name, and using a plugin
                     * for normalization if necessary. Grabs a ref to plugin
                     * too, as an optimization.
                     */
                    makeMap = function(name, relParts) {
                        var plugin,
                            parts = splitPrefix(name),
                            prefix = parts[0],
                            relResourceName = relParts[1];

                        name = parts[1];

                        if (prefix) {
                            prefix = normalize(prefix, relResourceName);
                            plugin = callDep(prefix);
                        }

                        //Normalize according
                        if (prefix) {
                            if (plugin && plugin.normalize) {
                                name = plugin.normalize(name, makeNormalize(relResourceName));
                            } else {
                                name = normalize(name, relResourceName);
                            }
                        } else {
                            name = normalize(name, relResourceName);
                            parts = splitPrefix(name);
                            prefix = parts[0];
                            name = parts[1];
                            if (prefix) {
                                plugin = callDep(prefix);
                            }
                        }

                        //Using ridiculous property names for space reasons
                        return {
                            f: prefix ? prefix + '!' + name : name, //fullName
                            n: name,
                            pr: prefix,
                            p: plugin
                        };
                    };

                    function makeConfig(name) {
                        return function() {
                            return (config && config.config && config.config[name]) || {};
                        };
                    }

                    handlers = {
                        require: function(name) {
                            return makeRequire(name);
                        },
                        exports: function(name) {
                            var e = defined[name];
                            if (typeof e !== 'undefined') {
                                return e;
                            } else {
                                return (defined[name] = {});
                            }
                        },
                        module: function(name) {
                            return {
                                id: name,
                                uri: '',
                                exports: defined[name],
                                config: makeConfig(name)
                            };
                        }
                    };

                    main = function(name, deps, callback, relName) {
                        var cjsModule, depName, ret, map, i, relParts,
                            args = [],
                            callbackType = typeof callback,
                            usingExports;

                        //Use name if no relName
                        relName = relName || name;
                        relParts = makeRelParts(relName);

                        //Call the callback to define the module, if necessary.
                        if (callbackType === 'undefined' || callbackType === 'function') {
                            //Pull out the defined dependencies and pass the ordered
                            //values to the callback.
                            //Default to [require, exports, module] if no deps
                            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
                            for (i = 0; i < deps.length; i += 1) {
                                map = makeMap(deps[i], relParts);
                                depName = map.f;

                                //Fast path CommonJS standard dependencies.
                                if (depName === "require") {
                                    args[i] = handlers.require(name);
                                } else if (depName === "exports") {
                                    //CommonJS module spec 1.1
                                    args[i] = handlers.exports(name);
                                    usingExports = true;
                                } else if (depName === "module") {
                                    //CommonJS module spec 1.1
                                    cjsModule = args[i] = handlers.module(name);
                                } else if (hasProp(defined, depName) ||
                                    hasProp(waiting, depName) ||
                                    hasProp(defining, depName)) {
                                    args[i] = callDep(depName);
                                } else if (map.p) {
                                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                                    args[i] = defined[depName];
                                } else {
                                    throw new Error(name + ' missing ' + depName);
                                }
                            }

                            ret = callback ? callback.apply(defined[name], args) : undefined;

                            if (name) {
                                //If setting exports via "module" is in play,
                                //favor that over return value and exports. After that,
                                //favor a non-undefined return value over exports use.
                                if (cjsModule && cjsModule.exports !== undef &&
                                    cjsModule.exports !== defined[name]) {
                                    defined[name] = cjsModule.exports;
                                } else if (ret !== undef || !usingExports) {
                                    //Use the return value from the function.
                                    defined[name] = ret;
                                }
                            }
                        } else if (name) {
                            //May just be an object definition for the module. Only
                            //worry about defining if have a module name.
                            defined[name] = callback;
                        }
                    };

                    requirejs = require = req = function(deps, callback, relName, forceSync, alt) {
                        if (typeof deps === "string") {
                            if (handlers[deps]) {
                                //callback in this case is really relName
                                return handlers[deps](callback);
                            }
                            //Just return the module wanted. In this scenario, the
                            //deps arg is the module name, and second arg (if passed)
                            //is just the relName.
                            //Normalize module name, if it contains . or ..
                            return callDep(makeMap(deps, makeRelParts(callback)).f);
                        } else if (!deps.splice) {
                            //deps is a config object, not an array.
                            config = deps;
                            if (config.deps) {
                                req(config.deps, config.callback);
                            }
                            if (!callback) {
                                return;
                            }

                            if (callback.splice) {
                                //callback is an array, which means it is a dependency list.
                                //Adjust args if there are dependencies
                                deps = callback;
                                callback = relName;
                                relName = null;
                            } else {
                                deps = undef;
                            }
                        }

                        //Support require(['a'])
                        callback = callback || function() {};

                        //If relName is a function, it is an errback handler,
                        //so remove it.
                        if (typeof relName === 'function') {
                            relName = forceSync;
                            forceSync = alt;
                        }

                        //Simulate async callback;
                        if (forceSync) {
                            main(undef, deps, callback, relName);
                        } else {
                            //Using a non-zero value because of concern for what old browsers
                            //do, and latest browsers "upgrade" to 4 if lower value is used:
                            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
                            //If want a value immediately, use require('id') instead -- something
                            //that works in almond on the global level, but not guaranteed and
                            //unlikely to work in other AMD implementations.
                            setTimeout(function() {
                                main(undef, deps, callback, relName);
                            }, 4);
                        }

                        return req;
                    };

                    /**
                     * Just drops the config on the floor, but returns req in case
                     * the config return value is used.
                     */
                    req.config = function(cfg) {
                        return req(cfg);
                    };

                    /**
                     * Expose module registry for debugging and tooling
                     */
                    requirejs._defined = defined;

                    define = function(name, deps, callback) {
                        if (typeof name !== 'string') {
                            throw new Error('See almond README: incorrect module build, no module name');
                        }

                        //This module may not have dependencies
                        if (!deps.splice) {
                            //deps is not an array, so probably means
                            //an object literal or factory function for
                            //the value. Adjust args.
                            callback = deps;
                            deps = [];
                        }

                        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
                            waiting[name] = [name, deps, callback];
                        }
                    };

                    define.amd = {
                        jQuery: true
                    };
                }());

                S2.requirejs = requirejs;
                S2.require = require;
                S2.define = define;
            }
        }());
        S2.define("almond", function() {});

        /* global jQuery:false, $:false */
        S2.define('jquery', [], function() {
            var _$ = jQuery || $;

            if (_$ == null && console && console.error) {
                console.error(
                    'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
                    'found. Make sure that you are including jQuery before Select2 on your ' +
                    'web page.'
                );
            }

            return _$;
        });

        S2.define('select2/utils', [
            'jquery'
        ], function($) {
            var Utils = {};

            Utils.Extend = function(ChildClass, SuperClass) {
                var __hasProp = {}.hasOwnProperty;

                function BaseConstructor() {
                    this.constructor = ChildClass;
                }

                for (var key in SuperClass) {
                    if (__hasProp.call(SuperClass, key)) {
                        ChildClass[key] = SuperClass[key];
                    }
                }

                BaseConstructor.prototype = SuperClass.prototype;
                ChildClass.prototype = new BaseConstructor();
                ChildClass.__super__ = SuperClass.prototype;

                return ChildClass;
            };

            function getMethods(theClass) {
                var proto = theClass.prototype;

                var methods = [];

                for (var methodName in proto) {
                    var m = proto[methodName];

                    if (typeof m !== 'function') {
                        continue;
                    }

                    if (methodName === 'constructor') {
                        continue;
                    }

                    methods.push(methodName);
                }

                return methods;
            }

            Utils.Decorate = function(SuperClass, DecoratorClass) {
                var decoratedMethods = getMethods(DecoratorClass);
                var superMethods = getMethods(SuperClass);

                function DecoratedClass() {
                    var unshift = Array.prototype.unshift;

                    var argCount = DecoratorClass.prototype.constructor.length;

                    var calledConstructor = SuperClass.prototype.constructor;

                    if (argCount > 0) {
                        unshift.call(arguments, SuperClass.prototype.constructor);

                        calledConstructor = DecoratorClass.prototype.constructor;
                    }

                    calledConstructor.apply(this, arguments);
                }

                DecoratorClass.displayName = SuperClass.displayName;

                function ctr() {
                    this.constructor = DecoratedClass;
                }

                DecoratedClass.prototype = new ctr();

                for (var m = 0; m < superMethods.length; m++) {
                    var superMethod = superMethods[m];

                    DecoratedClass.prototype[superMethod] =
                        SuperClass.prototype[superMethod];
                }

                var calledMethod = function(methodName) {
                    // Stub out the original method if it's not decorating an actual method
                    var originalMethod = function() {};

                    if (methodName in DecoratedClass.prototype) {
                        originalMethod = DecoratedClass.prototype[methodName];
                    }

                    var decoratedMethod = DecoratorClass.prototype[methodName];

                    return function() {
                        var unshift = Array.prototype.unshift;

                        unshift.call(arguments, originalMethod);

                        return decoratedMethod.apply(this, arguments);
                    };
                };

                for (var d = 0; d < decoratedMethods.length; d++) {
                    var decoratedMethod = decoratedMethods[d];

                    DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
                }

                return DecoratedClass;
            };

            var Observable = function() {
                this.listeners = {};
            };

            Observable.prototype.on = function(event, callback) {
                this.listeners = this.listeners || {};

                if (event in this.listeners) {
                    this.listeners[event].push(callback);
                } else {
                    this.listeners[event] = [callback];
                }
            };

            Observable.prototype.trigger = function(event) {
                var slice = Array.prototype.slice;
                var params = slice.call(arguments, 1);

                this.listeners = this.listeners || {};

                // Params should always come in as an array
                if (params == null) {
                    params = [];
                }

                // If there are no arguments to the event, use a temporary object
                if (params.length === 0) {
                    params.push({});
                }

                // Set the `_type` of the first object to the event
                params[0]._type = event;

                if (event in this.listeners) {
                    this.invoke(this.listeners[event], slice.call(arguments, 1));
                }

                if ('*' in this.listeners) {
                    this.invoke(this.listeners['*'], arguments);
                }
            };

            Observable.prototype.invoke = function(listeners, params) {
                for (var i = 0, len = listeners.length; i < len; i++) {
                    listeners[i].apply(this, params);
                }
            };

            Utils.Observable = Observable;

            Utils.generateChars = function(length) {
                var chars = '';

                for (var i = 0; i < length; i++) {
                    var randomChar = Math.floor(Math.random() * 36);
                    chars += randomChar.toString(36);
                }

                return chars;
            };

            Utils.bind = function(func, context) {
                return function() {
                    func.apply(context, arguments);
                };
            };

            Utils._convertData = function(data) {
                for (var originalKey in data) {
                    var keys = originalKey.split('-');

                    var dataLevel = data;

                    if (keys.length === 1) {
                        continue;
                    }

                    for (var k = 0; k < keys.length; k++) {
                        var key = keys[k];

                        // Lowercase the first letter
                        // By default, dash-separated becomes camelCase
                        key = key.substring(0, 1).toLowerCase() + key.substring(1);

                        if (!(key in dataLevel)) {
                            dataLevel[key] = {};
                        }

                        if (k == keys.length - 1) {
                            dataLevel[key] = data[originalKey];
                        }

                        dataLevel = dataLevel[key];
                    }

                    delete data[originalKey];
                }

                return data;
            };

            Utils.hasScroll = function(index, el) {
                // Adapted from the function created by @ShadowScripter
                // and adapted by @BillBarry on the Stack Exchange Code Review website.
                // The original code can be found at
                // http://codereview.stackexchange.com/q/13338
                // and was designed to be used with the Sizzle selector engine.

                var $el = $(el);
                var overflowX = el.style.overflowX;
                var overflowY = el.style.overflowY;

                //Check both x and y declarations
                if (overflowX === overflowY &&
                    (overflowY === 'hidden' || overflowY === 'visible')) {
                    return false;
                }

                if (overflowX === 'scroll' || overflowY === 'scroll') {
                    return true;
                }

                return ($el.innerHeight() < el.scrollHeight ||
                    $el.innerWidth() < el.scrollWidth);
            };

            Utils.escapeMarkup = function(markup) {
                var replaceMap = {
                    '\\': '&#92;',
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    '\'': '&#39;',
                    '/': '&#47;'
                };

                // Do not try to escape the markup if it's not a string
                if (typeof markup !== 'string') {
                    return markup;
                }

                return String(markup).replace(/[&<>"'\/\\]/g, function(match) {
                    return replaceMap[match];
                });
            };

            // Append an array of jQuery nodes to a given element.
            Utils.appendMany = function($element, $nodes) {
                // jQuery 1.7.x does not support $.fn.append() with an array
                // Fall back to a jQuery object collection using $.fn.add()
                if ($.fn.jquery.substr(0, 3) === '1.7') {
                    var $jqNodes = $();

                    $.map($nodes, function(node) {
                        $jqNodes = $jqNodes.add(node);
                    });

                    $nodes = $jqNodes;
                }

                $element.append($nodes);
            };

            // Cache objects in Utils.__cache instead of $.data (see #4346)
            Utils.__cache = {};

            var id = 0;
            Utils.GetUniqueElementId = function(element) {
                // Get a unique element Id. If element has no id, 
                // creates a new unique number, stores it in the id 
                // attribute and returns the new id. 
                // If an id already exists, it simply returns it.

                var select2Id = element.getAttribute('data-select2-id');
                if (select2Id == null) {
                    // If element has id, use it.
                    if (element.id) {
                        select2Id = element.id;
                        element.setAttribute('data-select2-id', select2Id);
                    } else {
                        element.setAttribute('data-select2-id', ++id);
                        select2Id = id.toString();
                    }
                }
                return select2Id;
            };

            Utils.StoreData = function(element, name, value) {
                // Stores an item in the cache for a specified element.
                // name is the cache key.    
                var id = Utils.GetUniqueElementId(element);
                if (!Utils.__cache[id]) {
                    Utils.__cache[id] = {};
                }

                Utils.__cache[id][name] = value;
            };

            Utils.GetData = function(element, name) {
                // Retrieves a value from the cache by its key (name)
                // name is optional. If no name specified, return 
                // all cache items for the specified element.
                // and for a specified element.
                var id = Utils.GetUniqueElementId(element);
                if (name) {
                    if (Utils.__cache[id]) {
                        return Utils.__cache[id][name] != null ?
                            Utils.__cache[id][name] :
                            $(element).data(name); // Fallback to HTML5 data attribs.
                    }
                    return $(element).data(name); // Fallback to HTML5 data attribs.
                } else {
                    return Utils.__cache[id];
                }
            };

            Utils.RemoveData = function(element) {
                // Removes all cached items for a specified element.
                var id = Utils.GetUniqueElementId(element);
                if (Utils.__cache[id] != null) {
                    delete Utils.__cache[id];
                }
            };

            return Utils;
        });

        S2.define('select2/results', [
            'jquery',
            './utils'
        ], function($, Utils) {
            function Results($element, options, dataAdapter) {
                this.$element = $element;
                this.data = dataAdapter;
                this.options = options;

                Results.__super__.constructor.call(this);
            }

            Utils.Extend(Results, Utils.Observable);

            Results.prototype.render = function() {
                var $results = $(
                    '<ul class="select2-results__options" role="tree"></ul>'
                );

                if (this.options.get('multiple')) {
                    $results.attr('aria-multiselectable', 'true');
                }

                this.$results = $results;

                return $results;
            };

            Results.prototype.clear = function() {
                this.$results.empty();
            };

            Results.prototype.displayMessage = function(params) {
                var escapeMarkup = this.options.get('escapeMarkup');

                this.clear();
                this.hideLoading();

                var $message = $(
                    '<li role="treeitem" aria-live="assertive"' +
                    ' class="select2-results__option"></li>'
                );

                var message = this.options.get('translations').get(params.message);

                $message.append(
                    escapeMarkup(
                        message(params.args)
                    )
                );

                $message[0].className += ' select2-results__message';

                this.$results.append($message);
            };

            Results.prototype.hideMessages = function() {
                this.$results.find('.select2-results__message').remove();
            };

            Results.prototype.append = function(data) {
                this.hideLoading();

                var $options = [];

                if (data.results == null || data.results.length === 0) {
                    if (this.$results.children().length === 0) {
                        this.trigger('results:message', {
                            message: 'noResults'
                        });
                    }

                    return;
                }

                data.results = this.sort(data.results);

                for (var d = 0; d < data.results.length; d++) {
                    var item = data.results[d];

                    var $option = this.option(item);

                    $options.push($option);
                }

                this.$results.append($options);
            };

            Results.prototype.position = function($results, $dropdown) {
                var $resultsContainer = $dropdown.find('.select2-results');
                $resultsContainer.append($results);
            };

            Results.prototype.sort = function(data) {
                var sorter = this.options.get('sorter');

                return sorter(data);
            };

            Results.prototype.highlightFirstItem = function() {
                var $options = this.$results
                    .find('.select2-results__option[aria-selected]');

                var $selected = $options.filter('[aria-selected=true]');

                // Check if there are any selected options
                if ($selected.length > 0) {
                    // If there are selected options, highlight the first
                    $selected.first().trigger('mouseenter');
                } else {
                    // If there are no selected options, highlight the first option
                    // in the dropdown
                    $options.first().trigger('mouseenter');
                }

                this.ensureHighlightVisible();
            };

            Results.prototype.setClasses = function() {
                var self = this;

                this.data.current(function(selected) {
                    var selectedIds = $.map(selected, function(s) {
                        return s.id.toString();
                    });

                    var $options = self.$results
                        .find('.select2-results__option[aria-selected]');

                    $options.each(function() {
                        var $option = $(this);

                        var item = Utils.GetData(this, 'data');

                        // id needs to be converted to a string when comparing
                        var id = '' + item.id;

                        if ((item.element != null && item.element.selected) ||
                            (item.element == null && $.inArray(id, selectedIds) > -1)) {
                            $option.attr('aria-selected', 'true');
                        } else {
                            $option.attr('aria-selected', 'false');
                        }
                    });

                });
            };

            Results.prototype.showLoading = function(params) {
                this.hideLoading();

                var loadingMore = this.options.get('translations').get('searching');

                var loading = {
                    disabled: true,
                    loading: true,
                    text: loadingMore(params)
                };
                var $loading = this.option(loading);
                $loading.className += ' loading-results';

                this.$results.prepend($loading);
            };

            Results.prototype.hideLoading = function() {
                this.$results.find('.loading-results').remove();
            };

            Results.prototype.option = function(data) {
                var option = document.createElement('li');
                option.className = 'select2-results__option';

                var attrs = {
                    'role': 'treeitem',
                    'aria-selected': 'false'
                };

                if (data.disabled) {
                    delete attrs['aria-selected'];
                    attrs['aria-disabled'] = 'true';
                }

                if (data.id == null) {
                    delete attrs['aria-selected'];
                }

                if (data._resultId != null) {
                    option.id = data._resultId;
                }

                if (data.title) {
                    option.title = data.title;
                }

                if (data.children) {
                    attrs.role = 'group';
                    attrs['aria-label'] = data.text;
                    delete attrs['aria-selected'];
                }

                for (var attr in attrs) {
                    var val = attrs[attr];

                    option.setAttribute(attr, val);
                }

                if (data.children) {
                    var $option = $(option);

                    var label = document.createElement('strong');
                    label.className = 'select2-results__group';

                    var $label = $(label);
                    this.template(data, label);

                    var $children = [];

                    for (var c = 0; c < data.children.length; c++) {
                        var child = data.children[c];

                        var $child = this.option(child);

                        $children.push($child);
                    }

                    var $childrenContainer = $('<ul></ul>', {
                        'class': 'select2-results__options select2-results__options--nested'
                    });

                    $childrenContainer.append($children);

                    $option.append(label);
                    $option.append($childrenContainer);
                } else {
                    this.template(data, option);
                }

                Utils.StoreData(option, 'data', data);

                return option;
            };

            Results.prototype.bind = function(container, $container) {
                var self = this;

                var id = container.id + '-results';

                this.$results.attr('id', id);

                container.on('results:all', function(params) {
                    self.clear();
                    self.append(params.data);

                    if (container.isOpen()) {
                        self.setClasses();
                        self.highlightFirstItem();
                    }
                });

                container.on('results:append', function(params) {
                    self.append(params.data);

                    if (container.isOpen()) {
                        self.setClasses();
                    }
                });

                container.on('query', function(params) {
                    self.hideMessages();
                    self.showLoading(params);
                });

                container.on('select', function() {
                    if (!container.isOpen()) {
                        return;
                    }

                    self.setClasses();
                    self.highlightFirstItem();
                });

                container.on('unselect', function() {
                    if (!container.isOpen()) {
                        return;
                    }

                    self.setClasses();
                    self.highlightFirstItem();
                });

                container.on('open', function() {
                    // When the dropdown is open, aria-expended="true"
                    self.$results.attr('aria-expanded', 'true');
                    self.$results.attr('aria-hidden', 'false');

                    self.setClasses();
                    self.ensureHighlightVisible();
                });

                container.on('close', function() {
                    // When the dropdown is closed, aria-expended="false"
                    self.$results.attr('aria-expanded', 'false');
                    self.$results.attr('aria-hidden', 'true');
                    self.$results.removeAttr('aria-activedescendant');
                });

                container.on('results:toggle', function() {
                    var $highlighted = self.getHighlightedResults();

                    if ($highlighted.length === 0) {
                        return;
                    }

                    $highlighted.trigger('mouseup');
                });

                container.on('results:select', function() {
                    var $highlighted = self.getHighlightedResults();

                    if ($highlighted.length === 0) {
                        return;
                    }

                    var data = Utils.GetData($highlighted[0], 'data');

                    if ($highlighted.attr('aria-selected') == 'true') {
                        self.trigger('close', {});
                    } else {
                        self.trigger('select', {
                            data: data
                        });
                    }
                });

                container.on('results:previous', function() {
                    var $highlighted = self.getHighlightedResults();

                    var $options = self.$results.find('[aria-selected]');

                    var currentIndex = $options.index($highlighted);

                    // If we are already at te top, don't move further
                    // If no options, currentIndex will be -1
                    if (currentIndex <= 0) {
                        return;
                    }

                    var nextIndex = currentIndex - 1;

                    // If none are highlighted, highlight the first
                    if ($highlighted.length === 0) {
                        nextIndex = 0;
                    }

                    var $next = $options.eq(nextIndex);

                    $next.trigger('mouseenter');

                    var currentOffset = self.$results.offset().top;
                    var nextTop = $next.offset().top;
                    var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

                    if (nextIndex === 0) {
                        self.$results.scrollTop(0);
                    } else if (nextTop - currentOffset < 0) {
                        self.$results.scrollTop(nextOffset);
                    }
                });

                container.on('results:next', function() {
                    var $highlighted = self.getHighlightedResults();

                    var $options = self.$results.find('[aria-selected]');

                    var currentIndex = $options.index($highlighted);

                    var nextIndex = currentIndex + 1;

                    // If we are at the last option, stay there
                    if (nextIndex >= $options.length) {
                        return;
                    }

                    var $next = $options.eq(nextIndex);

                    $next.trigger('mouseenter');

                    var currentOffset = self.$results.offset().top +
                        self.$results.outerHeight(false);
                    var nextBottom = $next.offset().top + $next.outerHeight(false);
                    var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

                    if (nextIndex === 0) {
                        self.$results.scrollTop(0);
                    } else if (nextBottom > currentOffset) {
                        self.$results.scrollTop(nextOffset);
                    }
                });

                container.on('results:focus', function(params) {
                    params.element.addClass('select2-results__option--highlighted');
                });

                container.on('results:message', function(params) {
                    self.displayMessage(params);
                });

                if ($.fn.mousewheel) {
                    this.$results.on('mousewheel', function(e) {
                        var top = self.$results.scrollTop();

                        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

                        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
                        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

                        if (isAtTop) {
                            self.$results.scrollTop(0);

                            e.preventDefault();
                            e.stopPropagation();
                        } else if (isAtBottom) {
                            self.$results.scrollTop(
                                self.$results.get(0).scrollHeight - self.$results.height()
                            );

                            e.preventDefault();
                            e.stopPropagation();
                        }
                    });
                }

                this.$results.on('mouseup', '.select2-results__option[aria-selected]',
                    function(evt) {
                        var $this = $(this);

                        var data = Utils.GetData(this, 'data');

                        if ($this.attr('aria-selected') === 'true') {
                            if (self.options.get('multiple')) {
                                self.trigger('unselect', {
                                    originalEvent: evt,
                                    data: data
                                });
                            } else {
                                self.trigger('close', {});
                            }

                            return;
                        }

                        self.trigger('select', {
                            originalEvent: evt,
                            data: data
                        });
                    });

                this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
                    function(evt) {
                        var data = Utils.GetData(this, 'data');

                        self.getHighlightedResults()
                            .removeClass('select2-results__option--highlighted');

                        self.trigger('results:focus', {
                            data: data,
                            element: $(this)
                        });
                    });
            };

            Results.prototype.getHighlightedResults = function() {
                var $highlighted = this.$results
                    .find('.select2-results__option--highlighted');

                return $highlighted;
            };

            Results.prototype.destroy = function() {
                this.$results.remove();
            };

            Results.prototype.ensureHighlightVisible = function() {
                var $highlighted = this.getHighlightedResults();

                if ($highlighted.length === 0) {
                    return;
                }

                var $options = this.$results.find('[aria-selected]');

                var currentIndex = $options.index($highlighted);

                var currentOffset = this.$results.offset().top;
                var nextTop = $highlighted.offset().top;
                var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

                var offsetDelta = nextTop - currentOffset;
                nextOffset -= $highlighted.outerHeight(false) * 2;

                if (currentIndex <= 2) {
                    this.$results.scrollTop(0);
                } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
                    this.$results.scrollTop(nextOffset);
                }
            };

            Results.prototype.template = function(result, container) {
                var template = this.options.get('templateResult');
                var escapeMarkup = this.options.get('escapeMarkup');

                var content = template(result, container);

                if (content == null) {
                    container.style.display = 'none';
                } else if (typeof content === 'string') {
                    container.innerHTML = escapeMarkup(content);
                } else {
                    $(container).append(content);
                }
            };

            return Results;
        });

        S2.define('select2/keys', [

        ], function() {
            var KEYS = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };

            return KEYS;
        });

        S2.define('select2/selection/base', [
            'jquery',
            '../utils',
            '../keys'
        ], function($, Utils, KEYS) {
            function BaseSelection($element, options) {
                this.$element = $element;
                this.options = options;

                BaseSelection.__super__.constructor.call(this);
            }

            Utils.Extend(BaseSelection, Utils.Observable);

            BaseSelection.prototype.render = function() {
                var $selection = $(
                    '<span class="select2-selection" role="combobox" ' +
                    ' aria-haspopup="true" aria-expanded="false">' +
                    '</span>'
                );

                this._tabindex = 0;

                if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
                    this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
                } else if (this.$element.attr('tabindex') != null) {
                    this._tabindex = this.$element.attr('tabindex');
                }

                $selection.attr('title', this.$element.attr('title'));
                $selection.attr('tabindex', this._tabindex);

                this.$selection = $selection;

                return $selection;
            };

            BaseSelection.prototype.bind = function(container, $container) {
                var self = this;

                var id = container.id + '-container';
                var resultsId = container.id + '-results';

                this.container = container;

                this.$selection.on('focus', function(evt) {
                    self.trigger('focus', evt);
                });

                this.$selection.on('blur', function(evt) {
                    self._handleBlur(evt);
                });

                this.$selection.on('keydown', function(evt) {
                    self.trigger('keypress', evt);

                    if (evt.which === KEYS.SPACE) {
                        evt.preventDefault();
                    }
                });

                container.on('results:focus', function(params) {
                    self.$selection.attr('aria-activedescendant', params.data._resultId);
                });

                container.on('selection:update', function(params) {
                    self.update(params.data);
                });

                container.on('open', function() {
                    // When the dropdown is open, aria-expanded="true"
                    self.$selection.attr('aria-expanded', 'true');
                    self.$selection.attr('aria-owns', resultsId);

                    self._attachCloseHandler(container);
                });

                container.on('close', function() {
                    // When the dropdown is closed, aria-expanded="false"
                    self.$selection.attr('aria-expanded', 'false');
                    self.$selection.removeAttr('aria-activedescendant');
                    self.$selection.removeAttr('aria-owns');

                    self.$selection.focus();
                    window.setTimeout(function() {
                        self.$selection.focus();
                    }, 0);

                    self._detachCloseHandler(container);
                });

                container.on('enable', function() {
                    self.$selection.attr('tabindex', self._tabindex);
                });

                container.on('disable', function() {
                    self.$selection.attr('tabindex', '-1');
                });
            };

            BaseSelection.prototype._handleBlur = function(evt) {
                var self = this;

                // This needs to be delayed as the active element is the body when the tab
                // key is pressed, possibly along with others.
                window.setTimeout(function() {
                    // Don't trigger `blur` if the focus is still in the selection
                    if (
                        (document.activeElement == self.$selection[0]) ||
                        ($.contains(self.$selection[0], document.activeElement))
                    ) {
                        return;
                    }

                    self.trigger('blur', evt);
                }, 1);
            };

            BaseSelection.prototype._attachCloseHandler = function(container) {
                var self = this;

                $(document.body).on('mousedown.select2.' + container.id, function(e) {
                    var $target = $(e.target);

                    var $select = $target.closest('.select2');

                    var $all = $('.select2.select2-container--open');

                    $all.each(function() {
                        var $this = $(this);

                        if (this == $select[0]) {
                            return;
                        }

                        var $element = Utils.GetData(this, 'element');

                        $element.select2('close');
                    });
                });
            };

            BaseSelection.prototype._detachCloseHandler = function(container) {
                $(document.body).off('mousedown.select2.' + container.id);
            };

            BaseSelection.prototype.position = function($selection, $container) {
                var $selectionContainer = $container.find('.selection');
                $selectionContainer.append($selection);
            };

            BaseSelection.prototype.destroy = function() {
                this._detachCloseHandler(this.container);
            };

            BaseSelection.prototype.update = function(data) {
                throw new Error('The `update` method must be defined in child classes.');
            };

            return BaseSelection;
        });

        S2.define('select2/selection/single', [
            'jquery',
            './base',
            '../utils',
            '../keys'
        ], function($, BaseSelection, Utils, KEYS) {
            function SingleSelection() {
                SingleSelection.__super__.constructor.apply(this, arguments);
            }

            Utils.Extend(SingleSelection, BaseSelection);

            SingleSelection.prototype.render = function() {
                var $selection = SingleSelection.__super__.render.call(this);

                $selection.addClass('select2-selection--single');

                $selection.html(
                    '<span class="select2-selection__rendered"></span>' +
                    '<span class="select2-selection__arrow" role="presentation">' +
                    '<b role="presentation"></b>' +
                    '</span>'
                );

                return $selection;
            };

            SingleSelection.prototype.bind = function(container, $container) {
                var self = this;

                SingleSelection.__super__.bind.apply(this, arguments);

                var id = container.id + '-container';

                this.$selection.find('.select2-selection__rendered')
                    .attr('id', id)
                    .attr('role', 'textbox')
                    .attr('aria-readonly', 'true');
                this.$selection.attr('aria-labelledby', id);

                this.$selection.on('mousedown', function(evt) {
                    // Only respond to left clicks
                    if (evt.which !== 1) {
                        return;
                    }

                    self.trigger('toggle', {
                        originalEvent: evt
                    });
                });

                this.$selection.on('focus', function(evt) {
                    // User focuses on the container
                });

                this.$selection.on('blur', function(evt) {
                    // User exits the container
                });

                container.on('focus', function(evt) {
                    if (!container.isOpen()) {
                        self.$selection.focus();
                    }
                });
            };

            SingleSelection.prototype.clear = function() {
                var $rendered = this.$selection.find('.select2-selection__rendered');
                $rendered.empty();
                $rendered.removeAttr('title'); // clear tooltip on empty
            };

            SingleSelection.prototype.display = function(data, container) {
                var template = this.options.get('templateSelection');
                var escapeMarkup = this.options.get('escapeMarkup');

                return escapeMarkup(template(data, container));
            };

            SingleSelection.prototype.selectionContainer = function() {
                return $('<span></span>');
            };

            SingleSelection.prototype.update = function(data) {
                if (data.length === 0) {
                    this.clear();
                    return;
                }

                var selection = data[0];

                var $rendered = this.$selection.find('.select2-selection__rendered');
                var formatted = this.display(selection, $rendered);

                $rendered.empty().append(formatted);
                $rendered.attr('title', selection.title || selection.text);
            };

            return SingleSelection;
        });

        S2.define('select2/selection/multiple', [
            'jquery',
            './base',
            '../utils'
        ], function($, BaseSelection, Utils) {
            function MultipleSelection($element, options) {
                MultipleSelection.__super__.constructor.apply(this, arguments);
            }

            Utils.Extend(MultipleSelection, BaseSelection);

            MultipleSelection.prototype.render = function() {
                var $selection = MultipleSelection.__super__.render.call(this);

                $selection.addClass('select2-selection--multiple');

                $selection.html(
                    '<ul class="select2-selection__rendered"></ul>'
                );

                return $selection;
            };

            MultipleSelection.prototype.bind = function(container, $container) {
                var self = this;

                MultipleSelection.__super__.bind.apply(this, arguments);

                this.$selection.on('click', function(evt) {
                    self.trigger('toggle', {
                        originalEvent: evt
                    });
                });

                this.$selection.on(
                    'click',
                    '.select2-selection__choice__remove',
                    function(evt) {
                        // Ignore the event if it is disabled
                        if (self.options.get('disabled')) {
                            return;
                        }

                        var $remove = $(this);
                        var $selection = $remove.parent();

                        var data = Utils.GetData($selection[0], 'data');

                        self.trigger('unselect', {
                            originalEvent: evt,
                            data: data
                        });
                    }
                );
            };

            MultipleSelection.prototype.clear = function() {
                var $rendered = this.$selection.find('.select2-selection__rendered');
                $rendered.empty();
                $rendered.removeAttr('title');
            };

            MultipleSelection.prototype.display = function(data, container) {
                var template = this.options.get('templateSelection');
                var escapeMarkup = this.options.get('escapeMarkup');

                return escapeMarkup(template(data, container));
            };

            MultipleSelection.prototype.selectionContainer = function() {
                var $container = $(
                    '<li class="select2-selection__choice">' +
                    '<span class="select2-selection__choice__remove" role="presentation">' +
                    '&times;' +
                    '</span>' +
                    '</li>'
                );

                return $container;
            };

            MultipleSelection.prototype.update = function(data) {
                this.clear();

                if (data.length === 0) {
                    return;
                }

                var $selections = [];

                for (var d = 0; d < data.length; d++) {
                    var selection = data[d];

                    var $selection = this.selectionContainer();
                    var formatted = this.display(selection, $selection);

                    $selection.append(formatted);
                    $selection.attr('title', selection.title || selection.text);

                    Utils.StoreData($selection[0], 'data', selection);

                    $selections.push($selection);
                }

                var $rendered = this.$selection.find('.select2-selection__rendered');

                Utils.appendMany($rendered, $selections);
            };

            return MultipleSelection;
        });

        S2.define('select2/selection/placeholder', [
            '../utils'
        ], function(Utils) {
            function Placeholder(decorated, $element, options) {
                this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

                decorated.call(this, $element, options);
            }

            Placeholder.prototype.normalizePlaceholder = function(_, placeholder) {
                if (typeof placeholder === 'string') {
                    placeholder = {
                        id: '',
                        text: placeholder
                    };
                }

                return placeholder;
            };

            Placeholder.prototype.createPlaceholder = function(decorated, placeholder) {
                var $placeholder = this.selectionContainer();

                $placeholder.html(this.display(placeholder));
                $placeholder.addClass('select2-selection__placeholder')
                    .removeClass('select2-selection__choice');

                return $placeholder;
            };

            Placeholder.prototype.update = function(decorated, data) {
                var singlePlaceholder = (
                    data.length == 1 && data[0].id != this.placeholder.id
                );
                var multipleSelections = data.length > 1;

                if (multipleSelections || singlePlaceholder) {
                    return decorated.call(this, data);
                }

                this.clear();

                var $placeholder = this.createPlaceholder(this.placeholder);

                this.$selection.find('.select2-selection__rendered').append($placeholder);
            };

            return Placeholder;
        });

        S2.define('select2/selection/allowClear', [
            'jquery',
            '../keys',
            '../utils'
        ], function($, KEYS, Utils) {
            function AllowClear() {}

            AllowClear.prototype.bind = function(decorated, container, $container) {
                var self = this;

                decorated.call(this, container, $container);

                if (this.placeholder == null) {
                    if (this.options.get('debug') && window.console && console.error) {
                        console.error(
                            'Select2: The `allowClear` option should be used in combination ' +
                            'with the `placeholder` option.'
                        );
                    }
                }

                this.$selection.on('mousedown', '.select2-selection__clear',
                    function(evt) {
                        self._handleClear(evt);
                    });

                container.on('keypress', function(evt) {
                    self._handleKeyboardClear(evt, container);
                });
            };

            AllowClear.prototype._handleClear = function(_, evt) {
                // Ignore the event if it is disabled
                if (this.options.get('disabled')) {
                    return;
                }

                var $clear = this.$selection.find('.select2-selection__clear');

                // Ignore the event if nothing has been selected
                if ($clear.length === 0) {
                    return;
                }

                evt.stopPropagation();

                var data = Utils.GetData($clear[0], 'data');

                var previousVal = this.$element.val();
                this.$element.val(this.placeholder.id);

                var unselectData = {
                    data: data
                };
                this.trigger('clear', unselectData);
                if (unselectData.prevented) {
                    this.$element.val(previousVal);
                    return;
                }

                for (var d = 0; d < data.length; d++) {
                    unselectData = {
                        data: data[d]
                    };

                    // Trigger the `unselect` event, so people can prevent it from being
                    // cleared.
                    this.trigger('unselect', unselectData);

                    // If the event was prevented, don't clear it out.
                    if (unselectData.prevented) {
                        this.$element.val(previousVal);
                        return;
                    }
                }

                this.$element.trigger('change');

                this.trigger('toggle', {});
            };

            AllowClear.prototype._handleKeyboardClear = function(_, evt, container) {
                if (container.isOpen()) {
                    return;
                }

                if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
                    this._handleClear(evt);
                }
            };

            AllowClear.prototype.update = function(decorated, data) {
                decorated.call(this, data);

                if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
                    data.length === 0) {
                    return;
                }

                var $remove = $(
                    '<span class="select2-selection__clear">' +
                    '&times;' +
                    '</span>'
                );
                Utils.StoreData($remove[0], 'data', data);

                this.$selection.find('.select2-selection__rendered').prepend($remove);
            };

            return AllowClear;
        });

        S2.define('select2/selection/search', [
            'jquery',
            '../utils',
            '../keys'
        ], function($, Utils, KEYS) {
            function Search(decorated, $element, options) {
                decorated.call(this, $element, options);
            }

            Search.prototype.render = function(decorated) {
                var $search = $(
                    '<li class="select2-search select2-search--inline">' +
                    '<input class="select2-search__field" type="search" tabindex="-1"' +
                    ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
                    ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
                    '</li>'
                );

                this.$searchContainer = $search;
                this.$search = $search.find('input');

                var $rendered = decorated.call(this);

                this._transferTabIndex();

                return $rendered;
            };

            Search.prototype.bind = function(decorated, container, $container) {
                var self = this;

                decorated.call(this, container, $container);

                container.on('open', function() {
                    self.$search.trigger('focus');
                });

                container.on('close', function() {
                    self.$search.val('');
                    self.$search.removeAttr('aria-activedescendant');
                    self.$search.trigger('focus');
                });

                container.on('enable', function() {
                    self.$search.prop('disabled', false);

                    self._transferTabIndex();
                });

                container.on('disable', function() {
                    self.$search.prop('disabled', true);
                });

                container.on('focus', function(evt) {
                    self.$search.trigger('focus');
                });

                container.on('results:focus', function(params) {
                    self.$search.attr('aria-activedescendant', params.id);
                });

                this.$selection.on('focusin', '.select2-search--inline', function(evt) {
                    self.trigger('focus', evt);
                });

                this.$selection.on('focusout', '.select2-search--inline', function(evt) {
                    self._handleBlur(evt);
                });

                this.$selection.on('keydown', '.select2-search--inline', function(evt) {
                    evt.stopPropagation();

                    self.trigger('keypress', evt);

                    self._keyUpPrevented = evt.isDefaultPrevented();

                    var key = evt.which;

                    if (key === KEYS.BACKSPACE && self.$search.val() === '') {
                        var $previousChoice = self.$searchContainer
                            .prev('.select2-selection__choice');

                        if ($previousChoice.length > 0) {
                            var item = Utils.GetData($previousChoice[0], 'data');

                            self.searchRemoveChoice(item);

                            evt.preventDefault();
                        }
                    }
                });

                // Try to detect the IE version should the `documentMode` property that
                // is stored on the document. This is only implemented in IE and is
                // slightly cleaner than doing a user agent check.
                // This property is not available in Edge, but Edge also doesn't have
                // this bug.
                var msie = document.documentMode;
                var disableInputEvents = msie && msie <= 11;

                // Workaround for browsers which do not support the `input` event
                // This will prevent double-triggering of events for browsers which support
                // both the `keyup` and `input` events.
                this.$selection.on(
                    'input.searchcheck',
                    '.select2-search--inline',
                    function(evt) {
                        // IE will trigger the `input` event when a placeholder is used on a
                        // search box. To get around this issue, we are forced to ignore all
                        // `input` events in IE and keep using `keyup`.
                        if (disableInputEvents) {
                            self.$selection.off('input.search input.searchcheck');
                            return;
                        }

                        // Unbind the duplicated `keyup` event
                        self.$selection.off('keyup.search');
                    }
                );

                this.$selection.on(
                    'keyup.search input.search',
                    '.select2-search--inline',
                    function(evt) {
                        // IE will trigger the `input` event when a placeholder is used on a
                        // search box. To get around this issue, we are forced to ignore all
                        // `input` events in IE and keep using `keyup`.
                        if (disableInputEvents && evt.type === 'input') {
                            self.$selection.off('input.search input.searchcheck');
                            return;
                        }

                        var key = evt.which;

                        // We can freely ignore events from modifier keys
                        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
                            return;
                        }

                        // Tabbing will be handled during the `keydown` phase
                        if (key == KEYS.TAB) {
                            return;
                        }

                        self.handleSearch(evt);
                    }
                );
            };

            /**
             * This method will transfer the tabindex attribute from the rendered
             * selection to the search box. This allows for the search box to be used as
             * the primary focus instead of the selection container.
             *
             * @private
             */
            Search.prototype._transferTabIndex = function(decorated) {
                this.$search.attr('tabindex', this.$selection.attr('tabindex'));
                this.$selection.attr('tabindex', '-1');
            };

            Search.prototype.createPlaceholder = function(decorated, placeholder) {
                this.$search.attr('placeholder', placeholder.text);
            };

            Search.prototype.update = function(decorated, data) {
                var searchHadFocus = this.$search[0] == document.activeElement;

                this.$search.attr('placeholder', '');

                decorated.call(this, data);

                this.$selection.find('.select2-selection__rendered')
                    .append(this.$searchContainer);

                this.resizeSearch();
                if (searchHadFocus) {
                    var isTagInput = this.$element.find('[data-select2-tag]').length;
                    if (isTagInput) {
                        // fix IE11 bug where tag input lost focus
                        this.$element.focus();
                    } else {
                        this.$search.focus();
                    }
                }
            };

            Search.prototype.handleSearch = function() {
                this.resizeSearch();

                if (!this._keyUpPrevented) {
                    var input = this.$search.val();

                    this.trigger('query', {
                        term: input
                    });
                }

                this._keyUpPrevented = false;
            };

            Search.prototype.searchRemoveChoice = function(decorated, item) {
                this.trigger('unselect', {
                    data: item
                });

                this.$search.val(item.text);
                this.handleSearch();
            };

            Search.prototype.resizeSearch = function() {
                this.$search.css('width', '25px');

                var width = '';

                if (this.$search.attr('placeholder') !== '') {
                    width = this.$selection.find('.select2-selection__rendered').innerWidth();
                } else {
                    var minimumWidth = this.$search.val().length + 1;

                    width = (minimumWidth * 0.75) + 'em';
                }

                this.$search.css('width', width);
            };

            return Search;
        });

        S2.define('select2/selection/eventRelay', [
            'jquery'
        ], function($) {
            function EventRelay() {}

            EventRelay.prototype.bind = function(decorated, container, $container) {
                var self = this;
                var relayEvents = [
                    'open', 'opening',
                    'close', 'closing',
                    'select', 'selecting',
                    'unselect', 'unselecting',
                    'clear', 'clearing'
                ];

                var preventableEvents = [
                    'opening', 'closing', 'selecting', 'unselecting', 'clearing'
                ];

                decorated.call(this, container, $container);

                container.on('*', function(name, params) {
                    // Ignore events that should not be relayed
                    if ($.inArray(name, relayEvents) === -1) {
                        return;
                    }

                    // The parameters should always be an object
                    params = params || {};

                    // Generate the jQuery event for the Select2 event
                    var evt = $.Event('select2:' + name, {
                        params: params
                    });

                    self.$element.trigger(evt);

                    // Only handle preventable events if it was one
                    if ($.inArray(name, preventableEvents) === -1) {
                        return;
                    }

                    params.prevented = evt.isDefaultPrevented();
                });
            };

            return EventRelay;
        });

        S2.define('select2/translation', [
            'jquery',
            'require'
        ], function($, require) {
            function Translation(dict) {
                this.dict = dict || {};
            }

            Translation.prototype.all = function() {
                return this.dict;
            };

            Translation.prototype.get = function(key) {
                return this.dict[key];
            };

            Translation.prototype.extend = function(translation) {
                this.dict = $.extend({}, translation.all(), this.dict);
            };

            // Static functions

            Translation._cache = {};

            Translation.loadPath = function(path) {
                if (!(path in Translation._cache)) {
                    var translations = require(path);

                    Translation._cache[path] = translations;
                }

                return new Translation(Translation._cache[path]);
            };

            return Translation;
        });

        S2.define('select2/diacritics', [

        ], function() {
            var diacritics = {
                '\u24B6': 'A',
                '\uFF21': 'A',
                '\u00C0': 'A',
                '\u00C1': 'A',
                '\u00C2': 'A',
                '\u1EA6': 'A',
                '\u1EA4': 'A',
                '\u1EAA': 'A',
                '\u1EA8': 'A',
                '\u00C3': 'A',
                '\u0100': 'A',
                '\u0102': 'A',
                '\u1EB0': 'A',
                '\u1EAE': 'A',
                '\u1EB4': 'A',
                '\u1EB2': 'A',
                '\u0226': 'A',
                '\u01E0': 'A',
                '\u00C4': 'A',
                '\u01DE': 'A',
                '\u1EA2': 'A',
                '\u00C5': 'A',
                '\u01FA': 'A',
                '\u01CD': 'A',
                '\u0200': 'A',
                '\u0202': 'A',
                '\u1EA0': 'A',
                '\u1EAC': 'A',
                '\u1EB6': 'A',
                '\u1E00': 'A',
                '\u0104': 'A',
                '\u023A': 'A',
                '\u2C6F': 'A',
                '\uA732': 'AA',
                '\u00C6': 'AE',
                '\u01FC': 'AE',
                '\u01E2': 'AE',
                '\uA734': 'AO',
                '\uA736': 'AU',
                '\uA738': 'AV',
                '\uA73A': 'AV',
                '\uA73C': 'AY',
                '\u24B7': 'B',
                '\uFF22': 'B',
                '\u1E02': 'B',
                '\u1E04': 'B',
                '\u1E06': 'B',
                '\u0243': 'B',
                '\u0182': 'B',
                '\u0181': 'B',
                '\u24B8': 'C',
                '\uFF23': 'C',
                '\u0106': 'C',
                '\u0108': 'C',
                '\u010A': 'C',
                '\u010C': 'C',
                '\u00C7': 'C',
                '\u1E08': 'C',
                '\u0187': 'C',
                '\u023B': 'C',
                '\uA73E': 'C',
                '\u24B9': 'D',
                '\uFF24': 'D',
                '\u1E0A': 'D',
                '\u010E': 'D',
                '\u1E0C': 'D',
                '\u1E10': 'D',
                '\u1E12': 'D',
                '\u1E0E': 'D',
                '\u0110': 'D',
                '\u018B': 'D',
                '\u018A': 'D',
                '\u0189': 'D',
                '\uA779': 'D',
                '\u01F1': 'DZ',
                '\u01C4': 'DZ',
                '\u01F2': 'Dz',
                '\u01C5': 'Dz',
                '\u24BA': 'E',
                '\uFF25': 'E',
                '\u00C8': 'E',
                '\u00C9': 'E',
                '\u00CA': 'E',
                '\u1EC0': 'E',
                '\u1EBE': 'E',
                '\u1EC4': 'E',
                '\u1EC2': 'E',
                '\u1EBC': 'E',
                '\u0112': 'E',
                '\u1E14': 'E',
                '\u1E16': 'E',
                '\u0114': 'E',
                '\u0116': 'E',
                '\u00CB': 'E',
                '\u1EBA': 'E',
                '\u011A': 'E',
                '\u0204': 'E',
                '\u0206': 'E',
                '\u1EB8': 'E',
                '\u1EC6': 'E',
                '\u0228': 'E',
                '\u1E1C': 'E',
                '\u0118': 'E',
                '\u1E18': 'E',
                '\u1E1A': 'E',
                '\u0190': 'E',
                '\u018E': 'E',
                '\u24BB': 'F',
                '\uFF26': 'F',
                '\u1E1E': 'F',
                '\u0191': 'F',
                '\uA77B': 'F',
                '\u24BC': 'G',
                '\uFF27': 'G',
                '\u01F4': 'G',
                '\u011C': 'G',
                '\u1E20': 'G',
                '\u011E': 'G',
                '\u0120': 'G',
                '\u01E6': 'G',
                '\u0122': 'G',
                '\u01E4': 'G',
                '\u0193': 'G',
                '\uA7A0': 'G',
                '\uA77D': 'G',
                '\uA77E': 'G',
                '\u24BD': 'H',
                '\uFF28': 'H',
                '\u0124': 'H',
                '\u1E22': 'H',
                '\u1E26': 'H',
                '\u021E': 'H',
                '\u1E24': 'H',
                '\u1E28': 'H',
                '\u1E2A': 'H',
                '\u0126': 'H',
                '\u2C67': 'H',
                '\u2C75': 'H',
                '\uA78D': 'H',
                '\u24BE': 'I',
                '\uFF29': 'I',
                '\u00CC': 'I',
                '\u00CD': 'I',
                '\u00CE': 'I',
                '\u0128': 'I',
                '\u012A': 'I',
                '\u012C': 'I',
                '\u0130': 'I',
                '\u00CF': 'I',
                '\u1E2E': 'I',
                '\u1EC8': 'I',
                '\u01CF': 'I',
                '\u0208': 'I',
                '\u020A': 'I',
                '\u1ECA': 'I',
                '\u012E': 'I',
                '\u1E2C': 'I',
                '\u0197': 'I',
                '\u24BF': 'J',
                '\uFF2A': 'J',
                '\u0134': 'J',
                '\u0248': 'J',
                '\u24C0': 'K',
                '\uFF2B': 'K',
                '\u1E30': 'K',
                '\u01E8': 'K',
                '\u1E32': 'K',
                '\u0136': 'K',
                '\u1E34': 'K',
                '\u0198': 'K',
                '\u2C69': 'K',
                '\uA740': 'K',
                '\uA742': 'K',
                '\uA744': 'K',
                '\uA7A2': 'K',
                '\u24C1': 'L',
                '\uFF2C': 'L',
                '\u013F': 'L',
                '\u0139': 'L',
                '\u013D': 'L',
                '\u1E36': 'L',
                '\u1E38': 'L',
                '\u013B': 'L',
                '\u1E3C': 'L',
                '\u1E3A': 'L',
                '\u0141': 'L',
                '\u023D': 'L',
                '\u2C62': 'L',
                '\u2C60': 'L',
                '\uA748': 'L',
                '\uA746': 'L',
                '\uA780': 'L',
                '\u01C7': 'LJ',
                '\u01C8': 'Lj',
                '\u24C2': 'M',
                '\uFF2D': 'M',
                '\u1E3E': 'M',
                '\u1E40': 'M',
                '\u1E42': 'M',
                '\u2C6E': 'M',
                '\u019C': 'M',
                '\u24C3': 'N',
                '\uFF2E': 'N',
                '\u01F8': 'N',
                '\u0143': 'N',
                '\u00D1': 'N',
                '\u1E44': 'N',
                '\u0147': 'N',
                '\u1E46': 'N',
                '\u0145': 'N',
                '\u1E4A': 'N',
                '\u1E48': 'N',
                '\u0220': 'N',
                '\u019D': 'N',
                '\uA790': 'N',
                '\uA7A4': 'N',
                '\u01CA': 'NJ',
                '\u01CB': 'Nj',
                '\u24C4': 'O',
                '\uFF2F': 'O',
                '\u00D2': 'O',
                '\u00D3': 'O',
                '\u00D4': 'O',
                '\u1ED2': 'O',
                '\u1ED0': 'O',
                '\u1ED6': 'O',
                '\u1ED4': 'O',
                '\u00D5': 'O',
                '\u1E4C': 'O',
                '\u022C': 'O',
                '\u1E4E': 'O',
                '\u014C': 'O',
                '\u1E50': 'O',
                '\u1E52': 'O',
                '\u014E': 'O',
                '\u022E': 'O',
                '\u0230': 'O',
                '\u00D6': 'O',
                '\u022A': 'O',
                '\u1ECE': 'O',
                '\u0150': 'O',
                '\u01D1': 'O',
                '\u020C': 'O',
                '\u020E': 'O',
                '\u01A0': 'O',
                '\u1EDC': 'O',
                '\u1EDA': 'O',
                '\u1EE0': 'O',
                '\u1EDE': 'O',
                '\u1EE2': 'O',
                '\u1ECC': 'O',
                '\u1ED8': 'O',
                '\u01EA': 'O',
                '\u01EC': 'O',
                '\u00D8': 'O',
                '\u01FE': 'O',
                '\u0186': 'O',
                '\u019F': 'O',
                '\uA74A': 'O',
                '\uA74C': 'O',
                '\u01A2': 'OI',
                '\uA74E': 'OO',
                '\u0222': 'OU',
                '\u24C5': 'P',
                '\uFF30': 'P',
                '\u1E54': 'P',
                '\u1E56': 'P',
                '\u01A4': 'P',
                '\u2C63': 'P',
                '\uA750': 'P',
                '\uA752': 'P',
                '\uA754': 'P',
                '\u24C6': 'Q',
                '\uFF31': 'Q',
                '\uA756': 'Q',
                '\uA758': 'Q',
                '\u024A': 'Q',
                '\u24C7': 'R',
                '\uFF32': 'R',
                '\u0154': 'R',
                '\u1E58': 'R',
                '\u0158': 'R',
                '\u0210': 'R',
                '\u0212': 'R',
                '\u1E5A': 'R',
                '\u1E5C': 'R',
                '\u0156': 'R',
                '\u1E5E': 'R',
                '\u024C': 'R',
                '\u2C64': 'R',
                '\uA75A': 'R',
                '\uA7A6': 'R',
                '\uA782': 'R',
                '\u24C8': 'S',
                '\uFF33': 'S',
                '\u1E9E': 'S',
                '\u015A': 'S',
                '\u1E64': 'S',
                '\u015C': 'S',
                '\u1E60': 'S',
                '\u0160': 'S',
                '\u1E66': 'S',
                '\u1E62': 'S',
                '\u1E68': 'S',
                '\u0218': 'S',
                '\u015E': 'S',
                '\u2C7E': 'S',
                '\uA7A8': 'S',
                '\uA784': 'S',
                '\u24C9': 'T',
                '\uFF34': 'T',
                '\u1E6A': 'T',
                '\u0164': 'T',
                '\u1E6C': 'T',
                '\u021A': 'T',
                '\u0162': 'T',
                '\u1E70': 'T',
                '\u1E6E': 'T',
                '\u0166': 'T',
                '\u01AC': 'T',
                '\u01AE': 'T',
                '\u023E': 'T',
                '\uA786': 'T',
                '\uA728': 'TZ',
                '\u24CA': 'U',
                '\uFF35': 'U',
                '\u00D9': 'U',
                '\u00DA': 'U',
                '\u00DB': 'U',
                '\u0168': 'U',
                '\u1E78': 'U',
                '\u016A': 'U',
                '\u1E7A': 'U',
                '\u016C': 'U',
                '\u00DC': 'U',
                '\u01DB': 'U',
                '\u01D7': 'U',
                '\u01D5': 'U',
                '\u01D9': 'U',
                '\u1EE6': 'U',
                '\u016E': 'U',
                '\u0170': 'U',
                '\u01D3': 'U',
                '\u0214': 'U',
                '\u0216': 'U',
                '\u01AF': 'U',
                '\u1EEA': 'U',
                '\u1EE8': 'U',
                '\u1EEE': 'U',
                '\u1EEC': 'U',
                '\u1EF0': 'U',
                '\u1EE4': 'U',
                '\u1E72': 'U',
                '\u0172': 'U',
                '\u1E76': 'U',
                '\u1E74': 'U',
                '\u0244': 'U',
                '\u24CB': 'V',
                '\uFF36': 'V',
                '\u1E7C': 'V',
                '\u1E7E': 'V',
                '\u01B2': 'V',
                '\uA75E': 'V',
                '\u0245': 'V',
                '\uA760': 'VY',
                '\u24CC': 'W',
                '\uFF37': 'W',
                '\u1E80': 'W',
                '\u1E82': 'W',
                '\u0174': 'W',
                '\u1E86': 'W',
                '\u1E84': 'W',
                '\u1E88': 'W',
                '\u2C72': 'W',
                '\u24CD': 'X',
                '\uFF38': 'X',
                '\u1E8A': 'X',
                '\u1E8C': 'X',
                '\u24CE': 'Y',
                '\uFF39': 'Y',
                '\u1EF2': 'Y',
                '\u00DD': 'Y',
                '\u0176': 'Y',
                '\u1EF8': 'Y',
                '\u0232': 'Y',
                '\u1E8E': 'Y',
                '\u0178': 'Y',
                '\u1EF6': 'Y',
                '\u1EF4': 'Y',
                '\u01B3': 'Y',
                '\u024E': 'Y',
                '\u1EFE': 'Y',
                '\u24CF': 'Z',
                '\uFF3A': 'Z',
                '\u0179': 'Z',
                '\u1E90': 'Z',
                '\u017B': 'Z',
                '\u017D': 'Z',
                '\u1E92': 'Z',
                '\u1E94': 'Z',
                '\u01B5': 'Z',
                '\u0224': 'Z',
                '\u2C7F': 'Z',
                '\u2C6B': 'Z',
                '\uA762': 'Z',
                '\u24D0': 'a',
                '\uFF41': 'a',
                '\u1E9A': 'a',
                '\u00E0': 'a',
                '\u00E1': 'a',
                '\u00E2': 'a',
                '\u1EA7': 'a',
                '\u1EA5': 'a',
                '\u1EAB': 'a',
                '\u1EA9': 'a',
                '\u00E3': 'a',
                '\u0101': 'a',
                '\u0103': 'a',
                '\u1EB1': 'a',
                '\u1EAF': 'a',
                '\u1EB5': 'a',
                '\u1EB3': 'a',
                '\u0227': 'a',
                '\u01E1': 'a',
                '\u00E4': 'a',
                '\u01DF': 'a',
                '\u1EA3': 'a',
                '\u00E5': 'a',
                '\u01FB': 'a',
                '\u01CE': 'a',
                '\u0201': 'a',
                '\u0203': 'a',
                '\u1EA1': 'a',
                '\u1EAD': 'a',
                '\u1EB7': 'a',
                '\u1E01': 'a',
                '\u0105': 'a',
                '\u2C65': 'a',
                '\u0250': 'a',
                '\uA733': 'aa',
                '\u00E6': 'ae',
                '\u01FD': 'ae',
                '\u01E3': 'ae',
                '\uA735': 'ao',
                '\uA737': 'au',
                '\uA739': 'av',
                '\uA73B': 'av',
                '\uA73D': 'ay',
                '\u24D1': 'b',
                '\uFF42': 'b',
                '\u1E03': 'b',
                '\u1E05': 'b',
                '\u1E07': 'b',
                '\u0180': 'b',
                '\u0183': 'b',
                '\u0253': 'b',
                '\u24D2': 'c',
                '\uFF43': 'c',
                '\u0107': 'c',
                '\u0109': 'c',
                '\u010B': 'c',
                '\u010D': 'c',
                '\u00E7': 'c',
                '\u1E09': 'c',
                '\u0188': 'c',
                '\u023C': 'c',
                '\uA73F': 'c',
                '\u2184': 'c',
                '\u24D3': 'd',
                '\uFF44': 'd',
                '\u1E0B': 'd',
                '\u010F': 'd',
                '\u1E0D': 'd',
                '\u1E11': 'd',
                '\u1E13': 'd',
                '\u1E0F': 'd',
                '\u0111': 'd',
                '\u018C': 'd',
                '\u0256': 'd',
                '\u0257': 'd',
                '\uA77A': 'd',
                '\u01F3': 'dz',
                '\u01C6': 'dz',
                '\u24D4': 'e',
                '\uFF45': 'e',
                '\u00E8': 'e',
                '\u00E9': 'e',
                '\u00EA': 'e',
                '\u1EC1': 'e',
                '\u1EBF': 'e',
                '\u1EC5': 'e',
                '\u1EC3': 'e',
                '\u1EBD': 'e',
                '\u0113': 'e',
                '\u1E15': 'e',
                '\u1E17': 'e',
                '\u0115': 'e',
                '\u0117': 'e',
                '\u00EB': 'e',
                '\u1EBB': 'e',
                '\u011B': 'e',
                '\u0205': 'e',
                '\u0207': 'e',
                '\u1EB9': 'e',
                '\u1EC7': 'e',
                '\u0229': 'e',
                '\u1E1D': 'e',
                '\u0119': 'e',
                '\u1E19': 'e',
                '\u1E1B': 'e',
                '\u0247': 'e',
                '\u025B': 'e',
                '\u01DD': 'e',
                '\u24D5': 'f',
                '\uFF46': 'f',
                '\u1E1F': 'f',
                '\u0192': 'f',
                '\uA77C': 'f',
                '\u24D6': 'g',
                '\uFF47': 'g',
                '\u01F5': 'g',
                '\u011D': 'g',
                '\u1E21': 'g',
                '\u011F': 'g',
                '\u0121': 'g',
                '\u01E7': 'g',
                '\u0123': 'g',
                '\u01E5': 'g',
                '\u0260': 'g',
                '\uA7A1': 'g',
                '\u1D79': 'g',
                '\uA77F': 'g',
                '\u24D7': 'h',
                '\uFF48': 'h',
                '\u0125': 'h',
                '\u1E23': 'h',
                '\u1E27': 'h',
                '\u021F': 'h',
                '\u1E25': 'h',
                '\u1E29': 'h',
                '\u1E2B': 'h',
                '\u1E96': 'h',
                '\u0127': 'h',
                '\u2C68': 'h',
                '\u2C76': 'h',
                '\u0265': 'h',
                '\u0195': 'hv',
                '\u24D8': 'i',
                '\uFF49': 'i',
                '\u00EC': 'i',
                '\u00ED': 'i',
                '\u00EE': 'i',
                '\u0129': 'i',
                '\u012B': 'i',
                '\u012D': 'i',
                '\u00EF': 'i',
                '\u1E2F': 'i',
                '\u1EC9': 'i',
                '\u01D0': 'i',
                '\u0209': 'i',
                '\u020B': 'i',
                '\u1ECB': 'i',
                '\u012F': 'i',
                '\u1E2D': 'i',
                '\u0268': 'i',
                '\u0131': 'i',
                '\u24D9': 'j',
                '\uFF4A': 'j',
                '\u0135': 'j',
                '\u01F0': 'j',
                '\u0249': 'j',
                '\u24DA': 'k',
                '\uFF4B': 'k',
                '\u1E31': 'k',
                '\u01E9': 'k',
                '\u1E33': 'k',
                '\u0137': 'k',
                '\u1E35': 'k',
                '\u0199': 'k',
                '\u2C6A': 'k',
                '\uA741': 'k',
                '\uA743': 'k',
                '\uA745': 'k',
                '\uA7A3': 'k',
                '\u24DB': 'l',
                '\uFF4C': 'l',
                '\u0140': 'l',
                '\u013A': 'l',
                '\u013E': 'l',
                '\u1E37': 'l',
                '\u1E39': 'l',
                '\u013C': 'l',
                '\u1E3D': 'l',
                '\u1E3B': 'l',
                '\u017F': 'l',
                '\u0142': 'l',
                '\u019A': 'l',
                '\u026B': 'l',
                '\u2C61': 'l',
                '\uA749': 'l',
                '\uA781': 'l',
                '\uA747': 'l',
                '\u01C9': 'lj',
                '\u24DC': 'm',
                '\uFF4D': 'm',
                '\u1E3F': 'm',
                '\u1E41': 'm',
                '\u1E43': 'm',
                '\u0271': 'm',
                '\u026F': 'm',
                '\u24DD': 'n',
                '\uFF4E': 'n',
                '\u01F9': 'n',
                '\u0144': 'n',
                '\u00F1': 'n',
                '\u1E45': 'n',
                '\u0148': 'n',
                '\u1E47': 'n',
                '\u0146': 'n',
                '\u1E4B': 'n',
                '\u1E49': 'n',
                '\u019E': 'n',
                '\u0272': 'n',
                '\u0149': 'n',
                '\uA791': 'n',
                '\uA7A5': 'n',
                '\u01CC': 'nj',
                '\u24DE': 'o',
                '\uFF4F': 'o',
                '\u00F2': 'o',
                '\u00F3': 'o',
                '\u00F4': 'o',
                '\u1ED3': 'o',
                '\u1ED1': 'o',
                '\u1ED7': 'o',
                '\u1ED5': 'o',
                '\u00F5': 'o',
                '\u1E4D': 'o',
                '\u022D': 'o',
                '\u1E4F': 'o',
                '\u014D': 'o',
                '\u1E51': 'o',
                '\u1E53': 'o',
                '\u014F': 'o',
                '\u022F': 'o',
                '\u0231': 'o',
                '\u00F6': 'o',
                '\u022B': 'o',
                '\u1ECF': 'o',
                '\u0151': 'o',
                '\u01D2': 'o',
                '\u020D': 'o',
                '\u020F': 'o',
                '\u01A1': 'o',
                '\u1EDD': 'o',
                '\u1EDB': 'o',
                '\u1EE1': 'o',
                '\u1EDF': 'o',
                '\u1EE3': 'o',
                '\u1ECD': 'o',
                '\u1ED9': 'o',
                '\u01EB': 'o',
                '\u01ED': 'o',
                '\u00F8': 'o',
                '\u01FF': 'o',
                '\u0254': 'o',
                '\uA74B': 'o',
                '\uA74D': 'o',
                '\u0275': 'o',
                '\u01A3': 'oi',
                '\u0223': 'ou',
                '\uA74F': 'oo',
                '\u24DF': 'p',
                '\uFF50': 'p',
                '\u1E55': 'p',
                '\u1E57': 'p',
                '\u01A5': 'p',
                '\u1D7D': 'p',
                '\uA751': 'p',
                '\uA753': 'p',
                '\uA755': 'p',
                '\u24E0': 'q',
                '\uFF51': 'q',
                '\u024B': 'q',
                '\uA757': 'q',
                '\uA759': 'q',
                '\u24E1': 'r',
                '\uFF52': 'r',
                '\u0155': 'r',
                '\u1E59': 'r',
                '\u0159': 'r',
                '\u0211': 'r',
                '\u0213': 'r',
                '\u1E5B': 'r',
                '\u1E5D': 'r',
                '\u0157': 'r',
                '\u1E5F': 'r',
                '\u024D': 'r',
                '\u027D': 'r',
                '\uA75B': 'r',
                '\uA7A7': 'r',
                '\uA783': 'r',
                '\u24E2': 's',
                '\uFF53': 's',
                '\u00DF': 's',
                '\u015B': 's',
                '\u1E65': 's',
                '\u015D': 's',
                '\u1E61': 's',
                '\u0161': 's',
                '\u1E67': 's',
                '\u1E63': 's',
                '\u1E69': 's',
                '\u0219': 's',
                '\u015F': 's',
                '\u023F': 's',
                '\uA7A9': 's',
                '\uA785': 's',
                '\u1E9B': 's',
                '\u24E3': 't',
                '\uFF54': 't',
                '\u1E6B': 't',
                '\u1E97': 't',
                '\u0165': 't',
                '\u1E6D': 't',
                '\u021B': 't',
                '\u0163': 't',
                '\u1E71': 't',
                '\u1E6F': 't',
                '\u0167': 't',
                '\u01AD': 't',
                '\u0288': 't',
                '\u2C66': 't',
                '\uA787': 't',
                '\uA729': 'tz',
                '\u24E4': 'u',
                '\uFF55': 'u',
                '\u00F9': 'u',
                '\u00FA': 'u',
                '\u00FB': 'u',
                '\u0169': 'u',
                '\u1E79': 'u',
                '\u016B': 'u',
                '\u1E7B': 'u',
                '\u016D': 'u',
                '\u00FC': 'u',
                '\u01DC': 'u',
                '\u01D8': 'u',
                '\u01D6': 'u',
                '\u01DA': 'u',
                '\u1EE7': 'u',
                '\u016F': 'u',
                '\u0171': 'u',
                '\u01D4': 'u',
                '\u0215': 'u',
                '\u0217': 'u',
                '\u01B0': 'u',
                '\u1EEB': 'u',
                '\u1EE9': 'u',
                '\u1EEF': 'u',
                '\u1EED': 'u',
                '\u1EF1': 'u',
                '\u1EE5': 'u',
                '\u1E73': 'u',
                '\u0173': 'u',
                '\u1E77': 'u',
                '\u1E75': 'u',
                '\u0289': 'u',
                '\u24E5': 'v',
                '\uFF56': 'v',
                '\u1E7D': 'v',
                '\u1E7F': 'v',
                '\u028B': 'v',
                '\uA75F': 'v',
                '\u028C': 'v',
                '\uA761': 'vy',
                '\u24E6': 'w',
                '\uFF57': 'w',
                '\u1E81': 'w',
                '\u1E83': 'w',
                '\u0175': 'w',
                '\u1E87': 'w',
                '\u1E85': 'w',
                '\u1E98': 'w',
                '\u1E89': 'w',
                '\u2C73': 'w',
                '\u24E7': 'x',
                '\uFF58': 'x',
                '\u1E8B': 'x',
                '\u1E8D': 'x',
                '\u24E8': 'y',
                '\uFF59': 'y',
                '\u1EF3': 'y',
                '\u00FD': 'y',
                '\u0177': 'y',
                '\u1EF9': 'y',
                '\u0233': 'y',
                '\u1E8F': 'y',
                '\u00FF': 'y',
                '\u1EF7': 'y',
                '\u1E99': 'y',
                '\u1EF5': 'y',
                '\u01B4': 'y',
                '\u024F': 'y',
                '\u1EFF': 'y',
                '\u24E9': 'z',
                '\uFF5A': 'z',
                '\u017A': 'z',
                '\u1E91': 'z',
                '\u017C': 'z',
                '\u017E': 'z',
                '\u1E93': 'z',
                '\u1E95': 'z',
                '\u01B6': 'z',
                '\u0225': 'z',
                '\u0240': 'z',
                '\u2C6C': 'z',
                '\uA763': 'z',
                '\u0386': '\u0391',
                '\u0388': '\u0395',
                '\u0389': '\u0397',
                '\u038A': '\u0399',
                '\u03AA': '\u0399',
                '\u038C': '\u039F',
                '\u038E': '\u03A5',
                '\u03AB': '\u03A5',
                '\u038F': '\u03A9',
                '\u03AC': '\u03B1',
                '\u03AD': '\u03B5',
                '\u03AE': '\u03B7',
                '\u03AF': '\u03B9',
                '\u03CA': '\u03B9',
                '\u0390': '\u03B9',
                '\u03CC': '\u03BF',
                '\u03CD': '\u03C5',
                '\u03CB': '\u03C5',
                '\u03B0': '\u03C5',
                '\u03C9': '\u03C9',
                '\u03C2': '\u03C3'
            };

            return diacritics;
        });

        S2.define('select2/data/base', [
            '../utils'
        ], function(Utils) {
            function BaseAdapter($element, options) {
                BaseAdapter.__super__.constructor.call(this);
            }

            Utils.Extend(BaseAdapter, Utils.Observable);

            BaseAdapter.prototype.current = function(callback) {
                throw new Error('The `current` method must be defined in child classes.');
            };

            BaseAdapter.prototype.query = function(params, callback) {
                throw new Error('The `query` method must be defined in child classes.');
            };

            BaseAdapter.prototype.bind = function(container, $container) {
                // Can be implemented in subclasses
            };

            BaseAdapter.prototype.destroy = function() {
                // Can be implemented in subclasses
            };

            BaseAdapter.prototype.generateResultId = function(container, data) {
                var id = container.id + '-result-';

                id += Utils.generateChars(4);

                if (data.id != null) {
                    id += '-' + data.id.toString();
                } else {
                    id += '-' + Utils.generateChars(4);
                }
                return id;
            };

            return BaseAdapter;
        });

        S2.define('select2/data/select', [
            './base',
            '../utils',
            'jquery'
        ], function(BaseAdapter, Utils, $) {
            function SelectAdapter($element, options) {
                this.$element = $element;
                this.options = options;

                SelectAdapter.__super__.constructor.call(this);
            }

            Utils.Extend(SelectAdapter, BaseAdapter);

            SelectAdapter.prototype.current = function(callback) {
                var data = [];
                var self = this;

                this.$element.find(':selected').each(function() {
                    var $option = $(this);

                    var option = self.item($option);

                    data.push(option);
                });

                callback(data);
            };

            SelectAdapter.prototype.select = function(data) {
                var self = this;

                data.selected = true;

                // If data.element is a DOM node, use it instead
                if ($(data.element).is('option')) {
                    data.element.selected = true;

                    this.$element.trigger('change');

                    return;
                }

                if (this.$element.prop('multiple')) {
                    this.current(function(currentData) {
                        var val = [];

                        data = [data];
                        data.push.apply(data, currentData);

                        for (var d = 0; d < data.length; d++) {
                            var id = data[d].id;

                            if ($.inArray(id, val) === -1) {
                                val.push(id);
                            }
                        }

                        self.$element.val(val);
                        self.$element.trigger('change');
                    });
                } else {
                    var val = data.id;

                    this.$element.val(val);
                    this.$element.trigger('change');
                }
            };

            SelectAdapter.prototype.unselect = function(data) {
                var self = this;

                if (!this.$element.prop('multiple')) {
                    return;
                }

                data.selected = false;

                if ($(data.element).is('option')) {
                    data.element.selected = false;

                    this.$element.trigger('change');

                    return;
                }

                this.current(function(currentData) {
                    var val = [];

                    for (var d = 0; d < currentData.length; d++) {
                        var id = currentData[d].id;

                        if (id !== data.id && $.inArray(id, val) === -1) {
                            val.push(id);
                        }
                    }

                    self.$element.val(val);

                    self.$element.trigger('change');
                });
            };

            SelectAdapter.prototype.bind = function(container, $container) {
                var self = this;

                this.container = container;

                container.on('select', function(params) {
                    self.select(params.data);
                });

                container.on('unselect', function(params) {
                    self.unselect(params.data);
                });
            };

            SelectAdapter.prototype.destroy = function() {
                // Remove anything added to child elements
                this.$element.find('*').each(function() {
                    // Remove any custom data set by Select2
                    Utils.RemoveData(this);
                });
            };

            SelectAdapter.prototype.query = function(params, callback) {
                var data = [];
                var self = this;

                var $options = this.$element.children();

                $options.each(function() {
                    var $option = $(this);

                    if (!$option.is('option') && !$option.is('optgroup')) {
                        return;
                    }

                    var option = self.item($option);

                    var matches = self.matches(params, option);

                    if (matches !== null) {
                        data.push(matches);
                    }
                });

                callback({
                    results: data
                });
            };

            SelectAdapter.prototype.addOptions = function($options) {
                Utils.appendMany(this.$element, $options);
            };

            SelectAdapter.prototype.option = function(data) {
                var option;

                if (data.children) {
                    option = document.createElement('optgroup');
                    option.label = data.text;
                } else {
                    option = document.createElement('option');

                    if (option.textContent !== undefined) {
                        option.textContent = data.text;
                    } else {
                        option.innerText = data.text;
                    }
                }

                if (data.id !== undefined) {
                    option.value = data.id;
                }

                if (data.disabled) {
                    option.disabled = true;
                }

                if (data.selected) {
                    option.selected = true;
                }

                if (data.title) {
                    option.title = data.title;
                }

                var $option = $(option);

                var normalizedData = this._normalizeItem(data);
                normalizedData.element = option;

                // Override the option's data with the combined data
                Utils.StoreData(option, 'data', normalizedData);

                return $option;
            };

            SelectAdapter.prototype.item = function($option) {
                var data = {};

                data = Utils.GetData($option[0], 'data');

                if (data != null) {
                    return data;
                }

                if ($option.is('option')) {
                    data = {
                        id: $option.val(),
                        text: $option.text(),
                        disabled: $option.prop('disabled'),
                        selected: $option.prop('selected'),
                        title: $option.prop('title')
                    };
                } else if ($option.is('optgroup')) {
                    data = {
                        text: $option.prop('label'),
                        children: [],
                        title: $option.prop('title')
                    };

                    var $children = $option.children('option');
                    var children = [];

                    for (var c = 0; c < $children.length; c++) {
                        var $child = $($children[c]);

                        var child = this.item($child);

                        children.push(child);
                    }

                    data.children = children;
                }

                data = this._normalizeItem(data);
                data.element = $option[0];

                Utils.StoreData($option[0], 'data', data);

                return data;
            };

            SelectAdapter.prototype._normalizeItem = function(item) {
                if (item !== Object(item)) {
                    item = {
                        id: item,
                        text: item
                    };
                }

                item = $.extend({}, {
                    text: ''
                }, item);

                var defaults = {
                    selected: false,
                    disabled: false
                };

                if (item.id != null) {
                    item.id = item.id.toString();
                }

                if (item.text != null) {
                    item.text = item.text.toString();
                }

                if (item._resultId == null && item.id && this.container != null) {
                    item._resultId = this.generateResultId(this.container, item);
                }

                return $.extend({}, defaults, item);
            };

            SelectAdapter.prototype.matches = function(params, data) {
                var matcher = this.options.get('matcher');

                return matcher(params, data);
            };

            return SelectAdapter;
        });

        S2.define('select2/data/array', [
            './select',
            '../utils',
            'jquery'
        ], function(SelectAdapter, Utils, $) {
            function ArrayAdapter($element, options) {
                var data = options.get('data') || [];

                ArrayAdapter.__super__.constructor.call(this, $element, options);

                this.addOptions(this.convertToOptions(data));
            }

            Utils.Extend(ArrayAdapter, SelectAdapter);

            ArrayAdapter.prototype.select = function(data) {
                var $option = this.$element.find('option').filter(function(i, elm) {
                    return elm.value == data.id.toString();
                });

                if ($option.length === 0) {
                    $option = this.option(data);

                    this.addOptions($option);
                }

                ArrayAdapter.__super__.select.call(this, data);
            };

            ArrayAdapter.prototype.convertToOptions = function(data) {
                var self = this;

                var $existing = this.$element.find('option');
                var existingIds = $existing.map(function() {
                    return self.item($(this)).id;
                }).get();

                var $options = [];

                // Filter out all items except for the one passed in the argument
                function onlyItem(item) {
                    return function() {
                        return $(this).val() == item.id;
                    };
                }

                for (var d = 0; d < data.length; d++) {
                    var item = this._normalizeItem(data[d]);

                    // Skip items which were pre-loaded, only merge the data
                    if ($.inArray(item.id, existingIds) >= 0) {
                        var $existingOption = $existing.filter(onlyItem(item));

                        var existingData = this.item($existingOption);
                        var newData = $.extend(true, {}, item, existingData);

                        var $newOption = this.option(newData);

                        $existingOption.replaceWith($newOption);

                        continue;
                    }

                    var $option = this.option(item);

                    if (item.children) {
                        var $children = this.convertToOptions(item.children);

                        Utils.appendMany($option, $children);
                    }

                    $options.push($option);
                }

                return $options;
            };

            return ArrayAdapter;
        });

        S2.define('select2/data/ajax', [
            './array',
            '../utils',
            'jquery'
        ], function(ArrayAdapter, Utils, $) {
            function AjaxAdapter($element, options) {
                this.ajaxOptions = this._applyDefaults(options.get('ajax'));

                if (this.ajaxOptions.processResults != null) {
                    this.processResults = this.ajaxOptions.processResults;
                }

                AjaxAdapter.__super__.constructor.call(this, $element, options);
            }

            Utils.Extend(AjaxAdapter, ArrayAdapter);

            AjaxAdapter.prototype._applyDefaults = function(options) {
                var defaults = {
                    data: function(params) {
                        return $.extend({}, params, {
                            q: params.term
                        });
                    },
                    transport: function(params, success, failure) {
                        var $request = $.ajax(params);

                        $request.then(success);
                        $request.fail(failure);

                        return $request;
                    }
                };

                return $.extend({}, defaults, options, true);
            };

            AjaxAdapter.prototype.processResults = function(results) {
                return results;
            };

            AjaxAdapter.prototype.query = function(params, callback) {
                var matches = [];
                var self = this;

                if (this._request != null) {
                    // JSONP requests cannot always be aborted
                    if ($.isFunction(this._request.abort)) {
                        this._request.abort();
                    }

                    this._request = null;
                }

                var options = $.extend({
                    type: 'GET'
                }, this.ajaxOptions);

                if (typeof options.url === 'function') {
                    options.url = options.url.call(this.$element, params);
                }

                if (typeof options.data === 'function') {
                    options.data = options.data.call(this.$element, params);
                }

                function request() {
                    var $request = options.transport(options, function(data) {
                        var results = self.processResults(data, params);

                        if (self.options.get('debug') && window.console && console.error) {
                            // Check to make sure that the response included a `results` key.
                            if (!results || !results.results || !$.isArray(results.results)) {
                                console.error(
                                    'Select2: The AJAX results did not return an array in the ' +
                                    '`results` key of the response.'
                                );
                            }
                        }

                        callback(results);
                    }, function() {
                        // Attempt to detect if a request was aborted
                        // Only works if the transport exposes a status property
                        if ('status' in $request &&
                            ($request.status === 0 || $request.status === '0')) {
                            return;
                        }

                        self.trigger('results:message', {
                            message: 'errorLoading'
                        });
                    });

                    self._request = $request;
                }

                if (this.ajaxOptions.delay && params.term != null) {
                    if (this._queryTimeout) {
                        window.clearTimeout(this._queryTimeout);
                    }

                    this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
                } else {
                    request();
                }
            };

            return AjaxAdapter;
        });

        S2.define('select2/data/tags', [
            'jquery'
        ], function($) {
            function Tags(decorated, $element, options) {
                var tags = options.get('tags');

                var createTag = options.get('createTag');

                if (createTag !== undefined) {
                    this.createTag = createTag;
                }

                var insertTag = options.get('insertTag');

                if (insertTag !== undefined) {
                    this.insertTag = insertTag;
                }

                decorated.call(this, $element, options);

                if ($.isArray(tags)) {
                    for (var t = 0; t < tags.length; t++) {
                        var tag = tags[t];
                        var item = this._normalizeItem(tag);

                        var $option = this.option(item);

                        this.$element.append($option);
                    }
                }
            }

            Tags.prototype.query = function(decorated, params, callback) {
                var self = this;

                this._removeOldTags();

                if (params.term == null || params.page != null) {
                    decorated.call(this, params, callback);
                    return;
                }

                function wrapper(obj, child) {
                    var data = obj.results;

                    for (var i = 0; i < data.length; i++) {
                        var option = data[i];

                        var checkChildren = (
                            option.children != null &&
                            !wrapper({
                                results: option.children
                            }, true)
                        );

                        var optionText = (option.text || '').toUpperCase();
                        var paramsTerm = (params.term || '').toUpperCase();

                        var checkText = optionText === paramsTerm;

                        if (checkText || checkChildren) {
                            if (child) {
                                return false;
                            }

                            obj.data = data;
                            callback(obj);

                            return;
                        }
                    }

                    if (child) {
                        return true;
                    }

                    var tag = self.createTag(params);

                    if (tag != null) {
                        var $option = self.option(tag);
                        $option.attr('data-select2-tag', true);

                        self.addOptions([$option]);

                        self.insertTag(data, tag);
                    }

                    obj.results = data;

                    callback(obj);
                }

                decorated.call(this, params, wrapper);
            };

            Tags.prototype.createTag = function(decorated, params) {
                var term = $.trim(params.term);

                if (term === '') {
                    return null;
                }

                return {
                    id: term,
                    text: term
                };
            };

            Tags.prototype.insertTag = function(_, data, tag) {
                data.unshift(tag);
            };

            Tags.prototype._removeOldTags = function(_) {
                var tag = this._lastTag;

                var $options = this.$element.find('option[data-select2-tag]');

                $options.each(function() {
                    if (this.selected) {
                        return;
                    }

                    $(this).remove();
                });
            };

            return Tags;
        });

        S2.define('select2/data/tokenizer', [
            'jquery'
        ], function($) {
            function Tokenizer(decorated, $element, options) {
                var tokenizer = options.get('tokenizer');

                if (tokenizer !== undefined) {
                    this.tokenizer = tokenizer;
                }

                decorated.call(this, $element, options);
            }

            Tokenizer.prototype.bind = function(decorated, container, $container) {
                decorated.call(this, container, $container);

                this.$search = container.dropdown.$search || container.selection.$search ||
                    $container.find('.select2-search__field');
            };

            Tokenizer.prototype.query = function(decorated, params, callback) {
                var self = this;

                function createAndSelect(data) {
                    // Normalize the data object so we can use it for checks
                    var item = self._normalizeItem(data);

                    // Check if the data object already exists as a tag
                    // Select it if it doesn't
                    var $existingOptions = self.$element.find('option').filter(function() {
                        return $(this).val() === item.id;
                    });

                    // If an existing option wasn't found for it, create the option
                    if (!$existingOptions.length) {
                        var $option = self.option(item);
                        $option.attr('data-select2-tag', true);

                        self._removeOldTags();
                        self.addOptions([$option]);
                    }

                    // Select the item, now that we know there is an option for it
                    select(item);
                }

                function select(data) {
                    self.trigger('select', {
                        data: data
                    });
                }

                params.term = params.term || '';

                var tokenData = this.tokenizer(params, this.options, createAndSelect);

                if (tokenData.term !== params.term) {
                    // Replace the search term if we have the search box
                    if (this.$search.length) {
                        this.$search.val(tokenData.term);
                        this.$search.focus();
                    }

                    params.term = tokenData.term;
                }

                decorated.call(this, params, callback);
            };

            Tokenizer.prototype.tokenizer = function(_, params, options, callback) {
                var separators = options.get('tokenSeparators') || [];
                var term = params.term;
                var i = 0;

                var createTag = this.createTag || function(params) {
                    return {
                        id: params.term,
                        text: params.term
                    };
                };

                while (i < term.length) {
                    var termChar = term[i];

                    if ($.inArray(termChar, separators) === -1) {
                        i++;

                        continue;
                    }

                    var part = term.substr(0, i);
                    var partParams = $.extend({}, params, {
                        term: part
                    });

                    var data = createTag(partParams);

                    if (data == null) {
                        i++;
                        continue;
                    }

                    callback(data);

                    // Reset the term to not include the tokenized portion
                    term = term.substr(i + 1) || '';
                    i = 0;
                }

                return {
                    term: term
                };
            };

            return Tokenizer;
        });

        S2.define('select2/data/minimumInputLength', [

        ], function() {
            function MinimumInputLength(decorated, $e, options) {
                this.minimumInputLength = options.get('minimumInputLength');

                decorated.call(this, $e, options);
            }

            MinimumInputLength.prototype.query = function(decorated, params, callback) {
                params.term = params.term || '';

                if (params.term.length < this.minimumInputLength) {
                    this.trigger('results:message', {
                        message: 'inputTooShort',
                        args: {
                            minimum: this.minimumInputLength,
                            input: params.term,
                            params: params
                        }
                    });

                    return;
                }

                decorated.call(this, params, callback);
            };

            return MinimumInputLength;
        });

        S2.define('select2/data/maximumInputLength', [

        ], function() {
            function MaximumInputLength(decorated, $e, options) {
                this.maximumInputLength = options.get('maximumInputLength');

                decorated.call(this, $e, options);
            }

            MaximumInputLength.prototype.query = function(decorated, params, callback) {
                params.term = params.term || '';

                if (this.maximumInputLength > 0 &&
                    params.term.length > this.maximumInputLength) {
                    this.trigger('results:message', {
                        message: 'inputTooLong',
                        args: {
                            maximum: this.maximumInputLength,
                            input: params.term,
                            params: params
                        }
                    });

                    return;
                }

                decorated.call(this, params, callback);
            };

            return MaximumInputLength;
        });

        S2.define('select2/data/maximumSelectionLength', [

        ], function() {
            function MaximumSelectionLength(decorated, $e, options) {
                this.maximumSelectionLength = options.get('maximumSelectionLength');

                decorated.call(this, $e, options);
            }

            MaximumSelectionLength.prototype.query =
                function(decorated, params, callback) {
                    var self = this;

                    this.current(function(currentData) {
                        var count = currentData != null ? currentData.length : 0;
                        if (self.maximumSelectionLength > 0 &&
                            count >= self.maximumSelectionLength) {
                            self.trigger('results:message', {
                                message: 'maximumSelected',
                                args: {
                                    maximum: self.maximumSelectionLength
                                }
                            });
                            return;
                        }
                        decorated.call(self, params, callback);
                    });
                };

            return MaximumSelectionLength;
        });

        S2.define('select2/dropdown', [
            'jquery',
            './utils'
        ], function($, Utils) {
            function Dropdown($element, options) {
                this.$element = $element;
                this.options = options;

                Dropdown.__super__.constructor.call(this);
            }

            Utils.Extend(Dropdown, Utils.Observable);

            Dropdown.prototype.render = function() {
                var $dropdown = $(
                    '<span class="select2-dropdown">' +
                    '<span class="select2-results"></span>' +
                    '</span>'
                );

                $dropdown.attr('dir', this.options.get('dir'));

                this.$dropdown = $dropdown;

                return $dropdown;
            };

            Dropdown.prototype.bind = function() {
                // Should be implemented in subclasses
            };

            Dropdown.prototype.position = function($dropdown, $container) {
                // Should be implmented in subclasses
            };

            Dropdown.prototype.destroy = function() {
                // Remove the dropdown from the DOM
                this.$dropdown.remove();
            };

            return Dropdown;
        });

        S2.define('select2/dropdown/search', [
            'jquery',
            '../utils'
        ], function($, Utils) {
            function Search() {}

            Search.prototype.render = function(decorated) {
                var $rendered = decorated.call(this);

                var $search = $(
                    '<span class="select2-search select2-search--dropdown">' +
                    '<input class="select2-search__field" type="search" tabindex="-1"' +
                    ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
                    ' spellcheck="false" role="textbox" />' +
                    '</span>'
                );

                this.$searchContainer = $search;
                this.$search = $search.find('input');

                $rendered.prepend($search);

                return $rendered;
            };

            Search.prototype.bind = function(decorated, container, $container) {
                var self = this;

                decorated.call(this, container, $container);

                this.$search.on('keydown', function(evt) {
                    self.trigger('keypress', evt);

                    self._keyUpPrevented = evt.isDefaultPrevented();
                });

                // Workaround for browsers which do not support the `input` event
                // This will prevent double-triggering of events for browsers which support
                // both the `keyup` and `input` events.
                this.$search.on('input', function(evt) {
                    // Unbind the duplicated `keyup` event
                    $(this).off('keyup');
                });

                this.$search.on('keyup input', function(evt) {
                    self.handleSearch(evt);
                });

                container.on('open', function() {
                    self.$search.attr('tabindex', 0);

                    self.$search.focus();

                    window.setTimeout(function() {
                        self.$search.focus();
                    }, 0);
                });

                container.on('close', function() {
                    self.$search.attr('tabindex', -1);

                    self.$search.val('');
                    self.$search.blur();
                });

                container.on('focus', function() {
                    if (!container.isOpen()) {
                        self.$search.focus();
                    }
                });

                container.on('results:all', function(params) {
                    if (params.query.term == null || params.query.term === '') {
                        var showSearch = self.showSearch(params);

                        if (showSearch) {
                            self.$searchContainer.removeClass('select2-search--hide');
                        } else {
                            self.$searchContainer.addClass('select2-search--hide');
                        }
                    }
                });
            };

            Search.prototype.handleSearch = function(evt) {
                if (!this._keyUpPrevented) {
                    var input = this.$search.val();

                    this.trigger('query', {
                        term: input
                    });
                }

                this._keyUpPrevented = false;
            };

            Search.prototype.showSearch = function(_, params) {
                return true;
            };

            return Search;
        });

        S2.define('select2/dropdown/hidePlaceholder', [

        ], function() {
            function HidePlaceholder(decorated, $element, options, dataAdapter) {
                this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

                decorated.call(this, $element, options, dataAdapter);
            }

            HidePlaceholder.prototype.append = function(decorated, data) {
                data.results = this.removePlaceholder(data.results);

                decorated.call(this, data);
            };

            HidePlaceholder.prototype.normalizePlaceholder = function(_, placeholder) {
                if (typeof placeholder === 'string') {
                    placeholder = {
                        id: '',
                        text: placeholder
                    };
                }

                return placeholder;
            };

            HidePlaceholder.prototype.removePlaceholder = function(_, data) {
                var modifiedData = data.slice(0);

                for (var d = data.length - 1; d >= 0; d--) {
                    var item = data[d];

                    if (this.placeholder.id === item.id) {
                        modifiedData.splice(d, 1);
                    }
                }

                return modifiedData;
            };

            return HidePlaceholder;
        });

        S2.define('select2/dropdown/infiniteScroll', [
            'jquery'
        ], function($) {
            function InfiniteScroll(decorated, $element, options, dataAdapter) {
                this.lastParams = {};

                decorated.call(this, $element, options, dataAdapter);

                this.$loadingMore = this.createLoadingMore();
                this.loading = false;
            }

            InfiniteScroll.prototype.append = function(decorated, data) {
                this.$loadingMore.remove();
                this.loading = false;

                decorated.call(this, data);

                if (this.showLoadingMore(data)) {
                    this.$results.append(this.$loadingMore);
                }
            };

            InfiniteScroll.prototype.bind = function(decorated, container, $container) {
                var self = this;

                decorated.call(this, container, $container);

                container.on('query', function(params) {
                    self.lastParams = params;
                    self.loading = true;
                });

                container.on('query:append', function(params) {
                    self.lastParams = params;
                    self.loading = true;
                });

                this.$results.on('scroll', function() {
                    var isLoadMoreVisible = $.contains(
                        document.documentElement,
                        self.$loadingMore[0]
                    );

                    if (self.loading || !isLoadMoreVisible) {
                        return;
                    }

                    var currentOffset = self.$results.offset().top +
                        self.$results.outerHeight(false);
                    var loadingMoreOffset = self.$loadingMore.offset().top +
                        self.$loadingMore.outerHeight(false);

                    if (currentOffset + 50 >= loadingMoreOffset) {
                        self.loadMore();
                    }
                });
            };

            InfiniteScroll.prototype.loadMore = function() {
                this.loading = true;

                var params = $.extend({}, { page: 1 }, this.lastParams);

                params.page++;

                this.trigger('query:append', params);
            };

            InfiniteScroll.prototype.showLoadingMore = function(_, data) {
                return data.pagination && data.pagination.more;
            };

            InfiniteScroll.prototype.createLoadingMore = function() {
                var $option = $(
                    '<li ' +
                    'class="select2-results__option select2-results__option--load-more"' +
                    'role="treeitem" aria-disabled="true"></li>'
                );

                var message = this.options.get('translations').get('loadingMore');

                $option.html(message(this.lastParams));

                return $option;
            };

            return InfiniteScroll;
        });

        S2.define('select2/dropdown/attachBody', [
            'jquery',
            '../utils'
        ], function($, Utils) {
            function AttachBody(decorated, $element, options) {
                this.$dropdownParent = options.get('dropdownParent') || $(document.body);

                decorated.call(this, $element, options);
            }

            AttachBody.prototype.bind = function(decorated, container, $container) {
                var self = this;

                var setupResultsEvents = false;

                decorated.call(this, container, $container);

                container.on('open', function() {
                    self._showDropdown();
                    self._attachPositioningHandler(container);

                    if (!setupResultsEvents) {
                        setupResultsEvents = true;

                        container.on('results:all', function() {
                            self._positionDropdown();
                            self._resizeDropdown();
                        });

                        container.on('results:append', function() {
                            self._positionDropdown();
                            self._resizeDropdown();
                        });
                    }
                });

                container.on('close', function() {
                    self._hideDropdown();
                    self._detachPositioningHandler(container);
                });

                this.$dropdownContainer.on('mousedown', function(evt) {
                    evt.stopPropagation();
                });
            };

            AttachBody.prototype.destroy = function(decorated) {
                decorated.call(this);

                this.$dropdownContainer.remove();
            };

            AttachBody.prototype.position = function(decorated, $dropdown, $container) {
                // Clone all of the container classes
                $dropdown.attr('class', $container.attr('class'));

                $dropdown.removeClass('select2');
                $dropdown.addClass('select2-container--open');

                $dropdown.css({
                    position: 'absolute',
                    top: -999999
                });

                this.$container = $container;
            };

            AttachBody.prototype.render = function(decorated) {
                var $container = $('<span></span>');

                var $dropdown = decorated.call(this);
                $container.append($dropdown);

                this.$dropdownContainer = $container;

                return $container;
            };

            AttachBody.prototype._hideDropdown = function(decorated) {
                this.$dropdownContainer.detach();
            };

            AttachBody.prototype._attachPositioningHandler =
                function(decorated, container) {
                    var self = this;

                    var scrollEvent = 'scroll.select2.' + container.id;
                    var resizeEvent = 'resize.select2.' + container.id;
                    var orientationEvent = 'orientationchange.select2.' + container.id;

                    var $watchers = this.$container.parents().filter(Utils.hasScroll);
                    $watchers.each(function() {
                        Utils.StoreData(this, 'select2-scroll-position', {
                            x: $(this).scrollLeft(),
                            y: $(this).scrollTop()
                        });
                    });

                    $watchers.on(scrollEvent, function(ev) {
                        var position = Utils.GetData(this, 'select2-scroll-position');
                        $(this).scrollTop(position.y);
                    });

                    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
                        function(e) {
                            self._positionDropdown();
                            self._resizeDropdown();
                        });
                };

            AttachBody.prototype._detachPositioningHandler =
                function(decorated, container) {
                    var scrollEvent = 'scroll.select2.' + container.id;
                    var resizeEvent = 'resize.select2.' + container.id;
                    var orientationEvent = 'orientationchange.select2.' + container.id;

                    var $watchers = this.$container.parents().filter(Utils.hasScroll);
                    $watchers.off(scrollEvent);

                    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
                };

            AttachBody.prototype._positionDropdown = function() {
                var $window = $(window);

                var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
                var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

                var newDirection = null;

                var offset = this.$container.offset();

                offset.bottom = offset.top + this.$container.outerHeight(false);

                var container = {
                    height: this.$container.outerHeight(false)
                };

                container.top = offset.top;
                container.bottom = offset.top + container.height;

                var dropdown = {
                    height: this.$dropdown.outerHeight(false)
                };

                var viewport = {
                    top: $window.scrollTop(),
                    bottom: $window.scrollTop() + $window.height()
                };

                var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
                var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

                var css = {
                    left: offset.left,
                    top: container.bottom
                };

                // Determine what the parent element is to use for calciulating the offset
                var $offsetParent = this.$dropdownParent;

                // For statically positoned elements, we need to get the element
                // that is determining the offset
                if ($offsetParent.css('position') === 'static') {
                    $offsetParent = $offsetParent.offsetParent();
                }

                var parentOffset = $offsetParent.offset();

                css.top -= parentOffset.top;
                css.left -= parentOffset.left;

                if (!isCurrentlyAbove && !isCurrentlyBelow) {
                    newDirection = 'below';
                }

                if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
                    newDirection = 'above';
                } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
                    newDirection = 'below';
                }

                if (newDirection == 'above' ||
                    (isCurrentlyAbove && newDirection !== 'below')) {
                    css.top = container.top - parentOffset.top - dropdown.height;
                }

                if (newDirection != null) {
                    this.$dropdown
                        .removeClass('select2-dropdown--below select2-dropdown--above')
                        .addClass('select2-dropdown--' + newDirection);
                    this.$container
                        .removeClass('select2-container--below select2-container--above')
                        .addClass('select2-container--' + newDirection);
                }

                this.$dropdownContainer.css(css);
            };

            AttachBody.prototype._resizeDropdown = function() {
                var css = {
                    width: this.$container.outerWidth(false) + 'px'
                };

                if (this.options.get('dropdownAutoWidth')) {
                    css.minWidth = css.width;
                    css.position = 'relative';
                    css.width = 'auto';
                }

                this.$dropdown.css(css);
            };

            AttachBody.prototype._showDropdown = function(decorated) {
                this.$dropdownContainer.appendTo(this.$dropdownParent);

                this._positionDropdown();
                this._resizeDropdown();
            };

            return AttachBody;
        });

        S2.define('select2/dropdown/minimumResultsForSearch', [

        ], function() {
            function countResults(data) {
                var count = 0;

                for (var d = 0; d < data.length; d++) {
                    var item = data[d];

                    if (item.children) {
                        count += countResults(item.children);
                    } else {
                        count++;
                    }
                }

                return count;
            }

            function MinimumResultsForSearch(decorated, $element, options, dataAdapter) {
                this.minimumResultsForSearch = options.get('minimumResultsForSearch');

                if (this.minimumResultsForSearch < 0) {
                    this.minimumResultsForSearch = Infinity;
                }

                decorated.call(this, $element, options, dataAdapter);
            }

            MinimumResultsForSearch.prototype.showSearch = function(decorated, params) {
                if (countResults(params.data.results) < this.minimumResultsForSearch) {
                    return false;
                }

                return decorated.call(this, params);
            };

            return MinimumResultsForSearch;
        });

        S2.define('select2/dropdown/selectOnClose', [
            '../utils'
        ], function(Utils) {
            function SelectOnClose() {}

            SelectOnClose.prototype.bind = function(decorated, container, $container) {
                var self = this;

                decorated.call(this, container, $container);

                container.on('close', function(params) {
                    self._handleSelectOnClose(params);
                });
            };

            SelectOnClose.prototype._handleSelectOnClose = function(_, params) {
                if (params && params.originalSelect2Event != null) {
                    var event = params.originalSelect2Event;

                    // Don't select an item if the close event was triggered from a select or
                    // unselect event
                    if (event._type === 'select' || event._type === 'unselect') {
                        return;
                    }
                }

                var $highlightedResults = this.getHighlightedResults();

                // Only select highlighted results
                if ($highlightedResults.length < 1) {
                    return;
                }

                var data = Utils.GetData($highlightedResults[0], 'data');

                // Don't re-select already selected resulte
                if (
                    (data.element != null && data.element.selected) ||
                    (data.element == null && data.selected)
                ) {
                    return;
                }

                this.trigger('select', {
                    data: data
                });
            };

            return SelectOnClose;
        });

        S2.define('select2/dropdown/closeOnSelect', [

        ], function() {
            function CloseOnSelect() {}

            CloseOnSelect.prototype.bind = function(decorated, container, $container) {
                var self = this;

                decorated.call(this, container, $container);

                container.on('select', function(evt) {
                    self._selectTriggered(evt);
                });

                container.on('unselect', function(evt) {
                    self._selectTriggered(evt);
                });
            };

            CloseOnSelect.prototype._selectTriggered = function(_, evt) {
                var originalEvent = evt.originalEvent;

                // Don't close if the control key is being held
                if (originalEvent && originalEvent.ctrlKey) {
                    return;
                }

                this.trigger('close', {
                    originalEvent: originalEvent,
                    originalSelect2Event: evt
                });
            };

            return CloseOnSelect;
        });

        S2.define('select2/i18n/en', [], function() {
            // English
            return {
                errorLoading: function() {
                    return 'The results could not be loaded.';
                },
                inputTooLong: function(args) {
                    var overChars = args.input.length - args.maximum;

                    var message = 'Please delete ' + overChars + ' character';

                    if (overChars != 1) {
                        message += 's';
                    }

                    return message;
                },
                inputTooShort: function(args) {
                    var remainingChars = args.minimum - args.input.length;

                    var message = 'Please enter ' + remainingChars + ' or more characters';

                    return message;
                },
                loadingMore: function() {
                    return 'Loading more results…';
                },
                maximumSelected: function(args) {
                    var message = 'You can only select ' + args.maximum + ' item';

                    if (args.maximum != 1) {
                        message += 's';
                    }

                    return message;
                },
                noResults: function() {
                    return 'No results found';
                },
                searching: function() {
                    return 'Searching…';
                }
            };
        });

        S2.define('select2/defaults', [
            'jquery',
            'require',

            './results',

            './selection/single',
            './selection/multiple',
            './selection/placeholder',
            './selection/allowClear',
            './selection/search',
            './selection/eventRelay',

            './utils',
            './translation',
            './diacritics',

            './data/select',
            './data/array',
            './data/ajax',
            './data/tags',
            './data/tokenizer',
            './data/minimumInputLength',
            './data/maximumInputLength',
            './data/maximumSelectionLength',

            './dropdown',
            './dropdown/search',
            './dropdown/hidePlaceholder',
            './dropdown/infiniteScroll',
            './dropdown/attachBody',
            './dropdown/minimumResultsForSearch',
            './dropdown/selectOnClose',
            './dropdown/closeOnSelect',

            './i18n/en'
        ], function($, require,

            ResultsList,

            SingleSelection, MultipleSelection, Placeholder, AllowClear,
            SelectionSearch, EventRelay,

            Utils, Translation, DIACRITICS,

            SelectData, ArrayData, AjaxData, Tags, Tokenizer,
            MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

            Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
            AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

            EnglishTranslation) {
            function Defaults() {
                this.reset();
            }

            Defaults.prototype.apply = function(options) {
                options = $.extend(true, {}, this.defaults, options);

                if (options.dataAdapter == null) {
                    if (options.ajax != null) {
                        options.dataAdapter = AjaxData;
                    } else if (options.data != null) {
                        options.dataAdapter = ArrayData;
                    } else {
                        options.dataAdapter = SelectData;
                    }

                    if (options.minimumInputLength > 0) {
                        options.dataAdapter = Utils.Decorate(
                            options.dataAdapter,
                            MinimumInputLength
                        );
                    }

                    if (options.maximumInputLength > 0) {
                        options.dataAdapter = Utils.Decorate(
                            options.dataAdapter,
                            MaximumInputLength
                        );
                    }

                    if (options.maximumSelectionLength > 0) {
                        options.dataAdapter = Utils.Decorate(
                            options.dataAdapter,
                            MaximumSelectionLength
                        );
                    }

                    if (options.tags) {
                        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
                    }

                    if (options.tokenSeparators != null || options.tokenizer != null) {
                        options.dataAdapter = Utils.Decorate(
                            options.dataAdapter,
                            Tokenizer
                        );
                    }

                    if (options.query != null) {
                        var Query = require(options.amdBase + 'compat/query');

                        options.dataAdapter = Utils.Decorate(
                            options.dataAdapter,
                            Query
                        );
                    }

                    if (options.initSelection != null) {
                        var InitSelection = require(options.amdBase + 'compat/initSelection');

                        options.dataAdapter = Utils.Decorate(
                            options.dataAdapter,
                            InitSelection
                        );
                    }
                }

                if (options.resultsAdapter == null) {
                    options.resultsAdapter = ResultsList;

                    if (options.ajax != null) {
                        options.resultsAdapter = Utils.Decorate(
                            options.resultsAdapter,
                            InfiniteScroll
                        );
                    }

                    if (options.placeholder != null) {
                        options.resultsAdapter = Utils.Decorate(
                            options.resultsAdapter,
                            HidePlaceholder
                        );
                    }

                    if (options.selectOnClose) {
                        options.resultsAdapter = Utils.Decorate(
                            options.resultsAdapter,
                            SelectOnClose
                        );
                    }
                }

                if (options.dropdownAdapter == null) {
                    if (options.multiple) {
                        options.dropdownAdapter = Dropdown;
                    } else {
                        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

                        options.dropdownAdapter = SearchableDropdown;
                    }

                    if (options.minimumResultsForSearch !== 0) {
                        options.dropdownAdapter = Utils.Decorate(
                            options.dropdownAdapter,
                            MinimumResultsForSearch
                        );
                    }

                    if (options.closeOnSelect) {
                        options.dropdownAdapter = Utils.Decorate(
                            options.dropdownAdapter,
                            CloseOnSelect
                        );
                    }

                    if (
                        options.dropdownCssClass != null ||
                        options.dropdownCss != null ||
                        options.adaptDropdownCssClass != null
                    ) {
                        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

                        options.dropdownAdapter = Utils.Decorate(
                            options.dropdownAdapter,
                            DropdownCSS
                        );
                    }

                    options.dropdownAdapter = Utils.Decorate(
                        options.dropdownAdapter,
                        AttachBody
                    );
                }

                if (options.selectionAdapter == null) {
                    if (options.multiple) {
                        options.selectionAdapter = MultipleSelection;
                    } else {
                        options.selectionAdapter = SingleSelection;
                    }

                    // Add the placeholder mixin if a placeholder was specified
                    if (options.placeholder != null) {
                        options.selectionAdapter = Utils.Decorate(
                            options.selectionAdapter,
                            Placeholder
                        );
                    }

                    if (options.allowClear) {
                        options.selectionAdapter = Utils.Decorate(
                            options.selectionAdapter,
                            AllowClear
                        );
                    }

                    if (options.multiple) {
                        options.selectionAdapter = Utils.Decorate(
                            options.selectionAdapter,
                            SelectionSearch
                        );
                    }

                    if (
                        options.containerCssClass != null ||
                        options.containerCss != null ||
                        options.adaptContainerCssClass != null
                    ) {
                        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

                        options.selectionAdapter = Utils.Decorate(
                            options.selectionAdapter,
                            ContainerCSS
                        );
                    }

                    options.selectionAdapter = Utils.Decorate(
                        options.selectionAdapter,
                        EventRelay
                    );
                }

                if (typeof options.language === 'string') {
                    // Check if the language is specified with a region
                    if (options.language.indexOf('-') > 0) {
                        // Extract the region information if it is included
                        var languageParts = options.language.split('-');
                        var baseLanguage = languageParts[0];

                        options.language = [options.language, baseLanguage];
                    } else {
                        options.language = [options.language];
                    }
                }

                if ($.isArray(options.language)) {
                    var languages = new Translation();
                    options.language.push('en');

                    var languageNames = options.language;

                    for (var l = 0; l < languageNames.length; l++) {
                        var name = languageNames[l];
                        var language = {};

                        try {
                            // Try to load it with the original name
                            language = Translation.loadPath(name);
                        } catch (e) {
                            try {
                                // If we couldn't load it, check if it wasn't the full path
                                name = this.defaults.amdLanguageBase + name;
                                language = Translation.loadPath(name);
                            } catch (ex) {
                                // The translation could not be loaded at all. Sometimes this is
                                // because of a configuration problem, other times this can be
                                // because of how Select2 helps load all possible translation files.
                                if (options.debug && window.console && console.warn) {
                                    console.warn(
                                        'Select2: The language file for "' + name + '" could not be ' +
                                        'automatically loaded. A fallback will be used instead.'
                                    );
                                }

                                continue;
                            }
                        }

                        languages.extend(language);
                    }

                    options.translations = languages;
                } else {
                    var baseTranslation = Translation.loadPath(
                        this.defaults.amdLanguageBase + 'en'
                    );
                    var customTranslation = new Translation(options.language);

                    customTranslation.extend(baseTranslation);

                    options.translations = customTranslation;
                }

                return options;
            };

            Defaults.prototype.reset = function() {
                function stripDiacritics(text) {
                    // Used 'uni range + named function' from http://jsperf.com/diacritics/18
                    function match(a) {
                        return DIACRITICS[a] || a;
                    }

                    return text.replace(/[^\u0000-\u007E]/g, match);
                }

                function matcher(params, data) {
                    // Always return the object if there is nothing to compare
                    if ($.trim(params.term) === '') {
                        return data;
                    }

                    // Do a recursive check for options with children
                    if (data.children && data.children.length > 0) {
                        // Clone the data object if there are children
                        // This is required as we modify the object to remove any non-matches
                        var match = $.extend(true, {}, data);

                        // Check each child of the option
                        for (var c = data.children.length - 1; c >= 0; c--) {
                            var child = data.children[c];

                            var matches = matcher(params, child);

                            // If there wasn't a match, remove the object in the array
                            if (matches == null) {
                                match.children.splice(c, 1);
                            }
                        }

                        // If any children matched, return the new object
                        if (match.children.length > 0) {
                            return match;
                        }

                        // If there were no matching children, check just the plain object
                        return matcher(params, match);
                    }

                    var original = stripDiacritics(data.text).toUpperCase();
                    var term = stripDiacritics(params.term).toUpperCase();

                    // Check if the text contains the term
                    if (original.indexOf(term) > -1) {
                        return data;
                    }

                    // If it doesn't contain the term, don't return anything
                    return null;
                }

                this.defaults = {
                    amdBase: './',
                    amdLanguageBase: './i18n/',
                    closeOnSelect: true,
                    debug: false,
                    dropdownAutoWidth: false,
                    escapeMarkup: Utils.escapeMarkup,
                    language: EnglishTranslation,
                    matcher: matcher,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: false,
                    sorter: function(data) {
                        return data;
                    },
                    templateResult: function(result) {
                        return result.text;
                    },
                    templateSelection: function(selection) {
                        return selection.text;
                    },
                    theme: 'default',
                    width: 'resolve'
                };
            };

            Defaults.prototype.set = function(key, value) {
                var camelKey = $.camelCase(key);

                var data = {};
                data[camelKey] = value;

                var convertedData = Utils._convertData(data);

                $.extend(true, this.defaults, convertedData);
            };

            var defaults = new Defaults();

            return defaults;
        });

        S2.define('select2/options', [
            'require',
            'jquery',
            './defaults',
            './utils'
        ], function(require, $, Defaults, Utils) {
            function Options(options, $element) {
                this.options = options;

                if ($element != null) {
                    this.fromElement($element);
                }

                this.options = Defaults.apply(this.options);

                if ($element && $element.is('input')) {
                    var InputCompat = require(this.get('amdBase') + 'compat/inputData');

                    this.options.dataAdapter = Utils.Decorate(
                        this.options.dataAdapter,
                        InputCompat
                    );
                }
            }

            Options.prototype.fromElement = function($e) {
                var excludedData = ['select2'];

                if (this.options.multiple == null) {
                    this.options.multiple = $e.prop('multiple');
                }

                if (this.options.disabled == null) {
                    this.options.disabled = $e.prop('disabled');
                }

                if (this.options.language == null) {
                    if ($e.prop('lang')) {
                        this.options.language = $e.prop('lang').toLowerCase();
                    } else if ($e.closest('[lang]').prop('lang')) {
                        this.options.language = $e.closest('[lang]').prop('lang');
                    }
                }

                if (this.options.dir == null) {
                    if ($e.prop('dir')) {
                        this.options.dir = $e.prop('dir');
                    } else if ($e.closest('[dir]').prop('dir')) {
                        this.options.dir = $e.closest('[dir]').prop('dir');
                    } else {
                        this.options.dir = 'ltr';
                    }
                }

                $e.prop('disabled', this.options.disabled);
                $e.prop('multiple', this.options.multiple);

                if (Utils.GetData($e[0], 'select2Tags')) {
                    if (this.options.debug && window.console && console.warn) {
                        console.warn(
                            'Select2: The `data-select2-tags` attribute has been changed to ' +
                            'use the `data-data` and `data-tags="true"` attributes and will be ' +
                            'removed in future versions of Select2.'
                        );
                    }

                    Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
                    Utils.StoreData($e[0], 'tags', true);
                }

                if (Utils.GetData($e[0], 'ajaxUrl')) {
                    if (this.options.debug && window.console && console.warn) {
                        console.warn(
                            'Select2: The `data-ajax-url` attribute has been changed to ' +
                            '`data-ajax--url` and support for the old attribute will be removed' +
                            ' in future versions of Select2.'
                        );
                    }

                    $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
                    Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));

                }

                var dataset = {};

                // Prefer the element's `dataset` attribute if it exists
                // jQuery 1.x does not correctly handle data attributes with multiple dashes
                if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
                    dataset = $.extend(true, {}, $e[0].dataset, Utils.GetData($e[0]));
                } else {
                    dataset = Utils.GetData($e[0]);
                }

                var data = $.extend(true, {}, dataset);

                data = Utils._convertData(data);

                for (var key in data) {
                    if ($.inArray(key, excludedData) > -1) {
                        continue;
                    }

                    if ($.isPlainObject(this.options[key])) {
                        $.extend(this.options[key], data[key]);
                    } else {
                        this.options[key] = data[key];
                    }
                }

                return this;
            };

            Options.prototype.get = function(key) {
                return this.options[key];
            };

            Options.prototype.set = function(key, val) {
                this.options[key] = val;
            };

            return Options;
        });

        S2.define('select2/core', [
            'jquery',
            './options',
            './utils',
            './keys'
        ], function($, Options, Utils, KEYS) {
            var Select2 = function($element, options) {
                if (Utils.GetData($element[0], 'select2') != null) {
                    Utils.GetData($element[0], 'select2').destroy();
                }

                this.$element = $element;

                this.id = this._generateId($element);

                options = options || {};

                this.options = new Options(options, $element);

                Select2.__super__.constructor.call(this);

                // Set up the tabindex

                var tabindex = $element.attr('tabindex') || 0;
                Utils.StoreData($element[0], 'old-tabindex', tabindex);
                $element.attr('tabindex', '-1');

                // Set up containers and adapters

                var DataAdapter = this.options.get('dataAdapter');
                this.dataAdapter = new DataAdapter($element, this.options);

                var $container = this.render();

                this._placeContainer($container);

                var SelectionAdapter = this.options.get('selectionAdapter');
                this.selection = new SelectionAdapter($element, this.options);
                this.$selection = this.selection.render();

                this.selection.position(this.$selection, $container);

                var DropdownAdapter = this.options.get('dropdownAdapter');
                this.dropdown = new DropdownAdapter($element, this.options);
                this.$dropdown = this.dropdown.render();

                this.dropdown.position(this.$dropdown, $container);

                var ResultsAdapter = this.options.get('resultsAdapter');
                this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
                this.$results = this.results.render();

                this.results.position(this.$results, this.$dropdown);

                // Bind events

                var self = this;

                // Bind the container to all of the adapters
                this._bindAdapters();

                // Register any DOM event handlers
                this._registerDomEvents();

                // Register any internal event handlers
                this._registerDataEvents();
                this._registerSelectionEvents();
                this._registerDropdownEvents();
                this._registerResultsEvents();
                this._registerEvents();

                // Set the initial state
                this.dataAdapter.current(function(initialData) {
                    self.trigger('selection:update', {
                        data: initialData
                    });
                });

                // Hide the original select
                $element.addClass('select2-hidden-accessible');
                $element.attr('aria-hidden', 'true');

                // Synchronize any monitored attributes
                this._syncAttributes();

                Utils.StoreData($element[0], 'select2', this);

                // Ensure backwards compatibility with $element.data('select2').
                $element.data('select2', this);
            };

            Utils.Extend(Select2, Utils.Observable);

            Select2.prototype._generateId = function($element) {
                var id = '';

                if ($element.attr('id') != null) {
                    id = $element.attr('id');
                } else if ($element.attr('name') != null) {
                    id = $element.attr('name') + '-' + Utils.generateChars(2);
                } else {
                    id = Utils.generateChars(4);
                }

                id = id.replace(/(:|\.|\[|\]|,)/g, '');
                id = 'select2-' + id;

                return id;
            };

            Select2.prototype._placeContainer = function($container) {
                $container.insertAfter(this.$element);

                var width = this._resolveWidth(this.$element, this.options.get('width'));

                if (width != null) {
                    $container.css('width', width);
                }
            };

            Select2.prototype._resolveWidth = function($element, method) {
                var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

                if (method == 'resolve') {
                    var styleWidth = this._resolveWidth($element, 'style');

                    if (styleWidth != null) {
                        return styleWidth;
                    }

                    return this._resolveWidth($element, 'element');
                }

                if (method == 'element') {
                    var elementWidth = $element.outerWidth(false);

                    if (elementWidth <= 0) {
                        return 'auto';
                    }

                    return elementWidth + 'px';
                }

                if (method == 'style') {
                    var style = $element.attr('style');

                    if (typeof(style) !== 'string') {
                        return null;
                    }

                    var attrs = style.split(';');

                    for (var i = 0, l = attrs.length; i < l; i = i + 1) {
                        var attr = attrs[i].replace(/\s/g, '');
                        var matches = attr.match(WIDTH);

                        if (matches !== null && matches.length >= 1) {
                            return matches[1];
                        }
                    }

                    return null;
                }

                return method;
            };

            Select2.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container);
                this.selection.bind(this, this.$container);

                this.dropdown.bind(this, this.$container);
                this.results.bind(this, this.$container);
            };

            Select2.prototype._registerDomEvents = function() {
                var self = this;

                this.$element.on('change.select2', function() {
                    self.dataAdapter.current(function(data) {
                        self.trigger('selection:update', {
                            data: data
                        });
                    });
                });

                this.$element.on('focus.select2', function(evt) {
                    self.trigger('focus', evt);
                });

                this._syncA = Utils.bind(this._syncAttributes, this);
                this._syncS = Utils.bind(this._syncSubtree, this);

                if (this.$element[0].attachEvent) {
                    this.$element[0].attachEvent('onpropertychange', this._syncA);
                }

                var observer = window.MutationObserver ||
                    window.WebKitMutationObserver ||
                    window.MozMutationObserver;

                if (observer != null) {
                    this._observer = new observer(function(mutations) {
                        $.each(mutations, self._syncA);
                        $.each(mutations, self._syncS);
                    });
                    this._observer.observe(this.$element[0], {
                        attributes: true,
                        childList: true,
                        subtree: false
                    });
                } else if (this.$element[0].addEventListener) {
                    this.$element[0].addEventListener(
                        'DOMAttrModified',
                        self._syncA,
                        false
                    );
                    this.$element[0].addEventListener(
                        'DOMNodeInserted',
                        self._syncS,
                        false
                    );
                    this.$element[0].addEventListener(
                        'DOMNodeRemoved',
                        self._syncS,
                        false
                    );
                }
            };

            Select2.prototype._registerDataEvents = function() {
                var self = this;

                this.dataAdapter.on('*', function(name, params) {
                    self.trigger(name, params);
                });
            };

            Select2.prototype._registerSelectionEvents = function() {
                var self = this;
                var nonRelayEvents = ['toggle', 'focus'];

                this.selection.on('toggle', function() {
                    self.toggleDropdown();
                });

                this.selection.on('focus', function(params) {
                    self.focus(params);
                });

                this.selection.on('*', function(name, params) {
                    if ($.inArray(name, nonRelayEvents) !== -1) {
                        return;
                    }

                    self.trigger(name, params);
                });
            };

            Select2.prototype._registerDropdownEvents = function() {
                var self = this;

                this.dropdown.on('*', function(name, params) {
                    self.trigger(name, params);
                });
            };

            Select2.prototype._registerResultsEvents = function() {
                var self = this;

                this.results.on('*', function(name, params) {
                    self.trigger(name, params);
                });
            };

            Select2.prototype._registerEvents = function() {
                var self = this;

                this.on('open', function() {
                    self.$container.addClass('select2-container--open');
                });

                this.on('close', function() {
                    self.$container.removeClass('select2-container--open');
                });

                this.on('enable', function() {
                    self.$container.removeClass('select2-container--disabled');
                });

                this.on('disable', function() {
                    self.$container.addClass('select2-container--disabled');
                });

                this.on('blur', function() {
                    self.$container.removeClass('select2-container--focus');
                });

                this.on('query', function(params) {
                    if (!self.isOpen()) {
                        self.trigger('open', {});
                    }

                    this.dataAdapter.query(params, function(data) {
                        self.trigger('results:all', {
                            data: data,
                            query: params
                        });
                    });
                });

                this.on('query:append', function(params) {
                    this.dataAdapter.query(params, function(data) {
                        self.trigger('results:append', {
                            data: data,
                            query: params
                        });
                    });
                });

                this.on('keypress', function(evt) {
                    var key = evt.which;

                    if (self.isOpen()) {
                        if (key === KEYS.ESC || key === KEYS.TAB ||
                            (key === KEYS.UP && evt.altKey)) {
                            self.close();

                            evt.preventDefault();
                        } else if (key === KEYS.ENTER) {
                            self.trigger('results:select', {});

                            evt.preventDefault();
                        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
                            self.trigger('results:toggle', {});

                            evt.preventDefault();
                        } else if (key === KEYS.UP) {
                            self.trigger('results:previous', {});

                            evt.preventDefault();
                        } else if (key === KEYS.DOWN) {
                            self.trigger('results:next', {});

                            evt.preventDefault();
                        }
                    } else {
                        if (key === KEYS.ENTER || key === KEYS.SPACE ||
                            (key === KEYS.DOWN && evt.altKey)) {
                            self.open();

                            evt.preventDefault();
                        }
                    }
                });
            };

            Select2.prototype._syncAttributes = function() {
                this.options.set('disabled', this.$element.prop('disabled'));

                if (this.options.get('disabled')) {
                    if (this.isOpen()) {
                        this.close();
                    }

                    this.trigger('disable', {});
                } else {
                    this.trigger('enable', {});
                }
            };

            Select2.prototype._syncSubtree = function(evt, mutations) {
                var changed = false;
                var self = this;

                // Ignore any mutation events raised for elements that aren't options or
                // optgroups. This handles the case when the select element is destroyed
                if (
                    evt && evt.target && (
                        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
                    )
                ) {
                    return;
                }

                if (!mutations) {
                    // If mutation events aren't supported, then we can only assume that the
                    // change affected the selections
                    changed = true;
                } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
                    for (var n = 0; n < mutations.addedNodes.length; n++) {
                        var node = mutations.addedNodes[n];

                        if (node.selected) {
                            changed = true;
                        }
                    }
                } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
                    changed = true;
                }

                // Only re-pull the data if we think there is a change
                if (changed) {
                    this.dataAdapter.current(function(currentData) {
                        self.trigger('selection:update', {
                            data: currentData
                        });
                    });
                }
            };

            /**
             * Override the trigger method to automatically trigger pre-events when
             * there are events that can be prevented.
             */
            Select2.prototype.trigger = function(name, args) {
                var actualTrigger = Select2.__super__.trigger;
                var preTriggerMap = {
                    'open': 'opening',
                    'close': 'closing',
                    'select': 'selecting',
                    'unselect': 'unselecting',
                    'clear': 'clearing'
                };

                if (args === undefined) {
                    args = {};
                }

                if (name in preTriggerMap) {
                    var preTriggerName = preTriggerMap[name];
                    var preTriggerArgs = {
                        prevented: false,
                        name: name,
                        args: args
                    };

                    actualTrigger.call(this, preTriggerName, preTriggerArgs);

                    if (preTriggerArgs.prevented) {
                        args.prevented = true;

                        return;
                    }
                }

                actualTrigger.call(this, name, args);
            };

            Select2.prototype.toggleDropdown = function() {
                if (this.options.get('disabled')) {
                    return;
                }

                if (this.isOpen()) {
                    this.close();
                } else {
                    this.open();
                }
            };

            Select2.prototype.open = function() {
                if (this.isOpen()) {
                    return;
                }

                this.trigger('query', {});
            };

            Select2.prototype.close = function() {
                if (!this.isOpen()) {
                    return;
                }

                this.trigger('close', {});
            };

            Select2.prototype.isOpen = function() {
                return this.$container.hasClass('select2-container--open');
            };

            Select2.prototype.hasFocus = function() {
                return this.$container.hasClass('select2-container--focus');
            };

            Select2.prototype.focus = function(data) {
                // No need to re-trigger focus events if we are already focused
                if (this.hasFocus()) {
                    return;
                }

                this.$container.addClass('select2-container--focus');
                this.trigger('focus', {});
            };

            Select2.prototype.enable = function(args) {
                if (this.options.get('debug') && window.console && console.warn) {
                    console.warn(
                        'Select2: The `select2("enable")` method has been deprecated and will' +
                        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
                        ' instead.'
                    );
                }

                if (args == null || args.length === 0) {
                    args = [true];
                }

                var disabled = !args[0];

                this.$element.prop('disabled', disabled);
            };

            Select2.prototype.data = function() {
                if (this.options.get('debug') &&
                    arguments.length > 0 && window.console && console.warn) {
                    console.warn(
                        'Select2: Data can no longer be set using `select2("data")`. You ' +
                        'should consider setting the value instead using `$element.val()`.'
                    );
                }

                var data = [];

                this.dataAdapter.current(function(currentData) {
                    data = currentData;
                });

                return data;
            };

            Select2.prototype.val = function(args) {
                if (this.options.get('debug') && window.console && console.warn) {
                    console.warn(
                        'Select2: The `select2("val")` method has been deprecated and will be' +
                        ' removed in later Select2 versions. Use $element.val() instead.'
                    );
                }

                if (args == null || args.length === 0) {
                    return this.$element.val();
                }

                var newVal = args[0];

                if ($.isArray(newVal)) {
                    newVal = $.map(newVal, function(obj) {
                        return obj.toString();
                    });
                }

                this.$element.val(newVal).trigger('change');
            };

            Select2.prototype.destroy = function() {
                this.$container.remove();

                if (this.$element[0].detachEvent) {
                    this.$element[0].detachEvent('onpropertychange', this._syncA);
                }

                if (this._observer != null) {
                    this._observer.disconnect();
                    this._observer = null;
                } else if (this.$element[0].removeEventListener) {
                    this.$element[0]
                        .removeEventListener('DOMAttrModified', this._syncA, false);
                    this.$element[0]
                        .removeEventListener('DOMNodeInserted', this._syncS, false);
                    this.$element[0]
                        .removeEventListener('DOMNodeRemoved', this._syncS, false);
                }

                this._syncA = null;
                this._syncS = null;

                this.$element.off('.select2');
                this.$element.attr('tabindex',
                    Utils.GetData(this.$element[0], 'old-tabindex'));

                this.$element.removeClass('select2-hidden-accessible');
                this.$element.attr('aria-hidden', 'false');
                Utils.RemoveData(this.$element[0]);
                this.$element.removeData('select2');

                this.dataAdapter.destroy();
                this.selection.destroy();
                this.dropdown.destroy();
                this.results.destroy();

                this.dataAdapter = null;
                this.selection = null;
                this.dropdown = null;
                this.results = null;
            };

            Select2.prototype.render = function() {
                var $container = $(
                    '<span class="select2 select2-container">' +
                    '<span class="selection"></span>' +
                    '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
                    '</span>'
                );

                $container.attr('dir', this.options.get('dir'));

                this.$container = $container;

                this.$container.addClass('select2-container--' + this.options.get('theme'));

                Utils.StoreData($container[0], 'element', this.$element);

                return $container;
            };

            return Select2;
        });

        S2.define('select2/compat/utils', [
            'jquery'
        ], function($) {
            function syncCssClasses($dest, $src, adapter) {
                var classes, replacements = [],
                    adapted;

                classes = $.trim($dest.attr('class'));

                if (classes) {
                    classes = '' + classes; // for IE which returns object

                    $(classes.split(/\s+/)).each(function() {
                        // Save all Select2 classes
                        if (this.indexOf('select2-') === 0) {
                            replacements.push(this);
                        }
                    });
                }

                classes = $.trim($src.attr('class'));

                if (classes) {
                    classes = '' + classes; // for IE which returns object

                    $(classes.split(/\s+/)).each(function() {
                        // Only adapt non-Select2 classes
                        if (this.indexOf('select2-') !== 0) {
                            adapted = adapter(this);

                            if (adapted != null) {
                                replacements.push(adapted);
                            }
                        }
                    });
                }

                $dest.attr('class', replacements.join(' '));
            }

            return {
                syncCssClasses: syncCssClasses
            };
        });

        S2.define('select2/compat/containerCss', [
            'jquery',
            './utils'
        ], function($, CompatUtils) {
            // No-op CSS adapter that discards all classes by default
            function _containerAdapter(clazz) {
                return null;
            }

            function ContainerCSS() {}

            ContainerCSS.prototype.render = function(decorated) {
                var $container = decorated.call(this);

                var containerCssClass = this.options.get('containerCssClass') || '';

                if ($.isFunction(containerCssClass)) {
                    containerCssClass = containerCssClass(this.$element);
                }

                var containerCssAdapter = this.options.get('adaptContainerCssClass');
                containerCssAdapter = containerCssAdapter || _containerAdapter;

                if (containerCssClass.indexOf(':all:') !== -1) {
                    containerCssClass = containerCssClass.replace(':all:', '');

                    var _cssAdapter = containerCssAdapter;

                    containerCssAdapter = function(clazz) {
                        var adapted = _cssAdapter(clazz);

                        if (adapted != null) {
                            // Append the old one along with the adapted one
                            return adapted + ' ' + clazz;
                        }

                        return clazz;
                    };
                }

                var containerCss = this.options.get('containerCss') || {};

                if ($.isFunction(containerCss)) {
                    containerCss = containerCss(this.$element);
                }

                CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

                $container.css(containerCss);
                $container.addClass(containerCssClass);

                return $container;
            };

            return ContainerCSS;
        });

        S2.define('select2/compat/dropdownCss', [
            'jquery',
            './utils'
        ], function($, CompatUtils) {
            // No-op CSS adapter that discards all classes by default
            function _dropdownAdapter(clazz) {
                return null;
            }

            function DropdownCSS() {}

            DropdownCSS.prototype.render = function(decorated) {
                var $dropdown = decorated.call(this);

                var dropdownCssClass = this.options.get('dropdownCssClass') || '';

                if ($.isFunction(dropdownCssClass)) {
                    dropdownCssClass = dropdownCssClass(this.$element);
                }

                var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
                dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

                if (dropdownCssClass.indexOf(':all:') !== -1) {
                    dropdownCssClass = dropdownCssClass.replace(':all:', '');

                    var _cssAdapter = dropdownCssAdapter;

                    dropdownCssAdapter = function(clazz) {
                        var adapted = _cssAdapter(clazz);

                        if (adapted != null) {
                            // Append the old one along with the adapted one
                            return adapted + ' ' + clazz;
                        }

                        return clazz;
                    };
                }

                var dropdownCss = this.options.get('dropdownCss') || {};

                if ($.isFunction(dropdownCss)) {
                    dropdownCss = dropdownCss(this.$element);
                }

                CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

                $dropdown.css(dropdownCss);
                $dropdown.addClass(dropdownCssClass);

                return $dropdown;
            };

            return DropdownCSS;
        });

        S2.define('select2/compat/initSelection', [
            'jquery'
        ], function($) {
            function InitSelection(decorated, $element, options) {
                if (options.get('debug') && window.console && console.warn) {
                    console.warn(
                        'Select2: The `initSelection` option has been deprecated in favor' +
                        ' of a custom data adapter that overrides the `current` method. ' +
                        'This method is now called multiple times instead of a single ' +
                        'time when the instance is initialized. Support will be removed ' +
                        'for the `initSelection` option in future versions of Select2'
                    );
                }

                this.initSelection = options.get('initSelection');
                this._isInitialized = false;

                decorated.call(this, $element, options);
            }

            InitSelection.prototype.current = function(decorated, callback) {
                var self = this;

                if (this._isInitialized) {
                    decorated.call(this, callback);

                    return;
                }

                this.initSelection.call(null, this.$element, function(data) {
                    self._isInitialized = true;

                    if (!$.isArray(data)) {
                        data = [data];
                    }

                    callback(data);
                });
            };

            return InitSelection;
        });

        S2.define('select2/compat/inputData', [
            'jquery',
            '../utils'
        ], function($, Utils) {
            function InputData(decorated, $element, options) {
                this._currentData = [];
                this._valueSeparator = options.get('valueSeparator') || ',';

                if ($element.prop('type') === 'hidden') {
                    if (options.get('debug') && console && console.warn) {
                        console.warn(
                            'Select2: Using a hidden input with Select2 is no longer ' +
                            'supported and may stop working in the future. It is recommended ' +
                            'to use a `<select>` element instead.'
                        );
                    }
                }

                decorated.call(this, $element, options);
            }

            InputData.prototype.current = function(_, callback) {
                function getSelected(data, selectedIds) {
                    var selected = [];

                    if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
                        data.selected = true;
                        selected.push(data);
                    } else {
                        data.selected = false;
                    }

                    if (data.children) {
                        selected.push.apply(selected, getSelected(data.children, selectedIds));
                    }

                    return selected;
                }

                var selected = [];

                for (var d = 0; d < this._currentData.length; d++) {
                    var data = this._currentData[d];

                    selected.push.apply(
                        selected,
                        getSelected(
                            data,
                            this.$element.val().split(
                                this._valueSeparator
                            )
                        )
                    );
                }

                callback(selected);
            };

            InputData.prototype.select = function(_, data) {
                if (!this.options.get('multiple')) {
                    this.current(function(allData) {
                        $.map(allData, function(data) {
                            data.selected = false;
                        });
                    });

                    this.$element.val(data.id);
                    this.$element.trigger('change');
                } else {
                    var value = this.$element.val();
                    value += this._valueSeparator + data.id;

                    this.$element.val(value);
                    this.$element.trigger('change');
                }
            };

            InputData.prototype.unselect = function(_, data) {
                var self = this;

                data.selected = false;

                this.current(function(allData) {
                    var values = [];

                    for (var d = 0; d < allData.length; d++) {
                        var item = allData[d];

                        if (data.id == item.id) {
                            continue;
                        }

                        values.push(item.id);
                    }

                    self.$element.val(values.join(self._valueSeparator));
                    self.$element.trigger('change');
                });
            };

            InputData.prototype.query = function(_, params, callback) {
                var results = [];

                for (var d = 0; d < this._currentData.length; d++) {
                    var data = this._currentData[d];

                    var matches = this.matches(params, data);

                    if (matches !== null) {
                        results.push(matches);
                    }
                }

                callback({
                    results: results
                });
            };

            InputData.prototype.addOptions = function(_, $options) {
                var options = $.map($options, function($option) {
                    return Utils.GetData($option[0], 'data');
                });

                this._currentData.push.apply(this._currentData, options);
            };

            return InputData;
        });

        S2.define('select2/compat/matcher', [
            'jquery'
        ], function($) {
            function oldMatcher(matcher) {
                function wrappedMatcher(params, data) {
                    var match = $.extend(true, {}, data);

                    if (params.term == null || $.trim(params.term) === '') {
                        return match;
                    }

                    if (data.children) {
                        for (var c = data.children.length - 1; c >= 0; c--) {
                            var child = data.children[c];

                            // Check if the child object matches
                            // The old matcher returned a boolean true or false
                            var doesMatch = matcher(params.term, child.text, child);

                            // If the child didn't match, pop it off
                            if (!doesMatch) {
                                match.children.splice(c, 1);
                            }
                        }

                        if (match.children.length > 0) {
                            return match;
                        }
                    }

                    if (matcher(params.term, data.text, data)) {
                        return match;
                    }

                    return null;
                }

                return wrappedMatcher;
            }

            return oldMatcher;
        });

        S2.define('select2/compat/query', [

        ], function() {
            function Query(decorated, $element, options) {
                if (options.get('debug') && window.console && console.warn) {
                    console.warn(
                        'Select2: The `query` option has been deprecated in favor of a ' +
                        'custom data adapter that overrides the `query` method. Support ' +
                        'will be removed for the `query` option in future versions of ' +
                        'Select2.'
                    );
                }

                decorated.call(this, $element, options);
            }

            Query.prototype.query = function(_, params, callback) {
                params.callback = callback;

                var query = this.options.get('query');

                query.call(null, params);
            };

            return Query;
        });

        S2.define('select2/dropdown/attachContainer', [

        ], function() {
            function AttachContainer(decorated, $element, options) {
                decorated.call(this, $element, options);
            }

            AttachContainer.prototype.position =
                function(decorated, $dropdown, $container) {
                    var $dropdownContainer = $container.find('.dropdown-wrapper');
                    $dropdownContainer.append($dropdown);

                    $dropdown.addClass('select2-dropdown--below');
                    $container.addClass('select2-container--below');
                };

            return AttachContainer;
        });

        S2.define('select2/dropdown/stopPropagation', [

        ], function() {
            function StopPropagation() {}

            StopPropagation.prototype.bind = function(decorated, container, $container) {
                decorated.call(this, container, $container);

                var stoppedEvents = [
                    'blur',
                    'change',
                    'click',
                    'dblclick',
                    'focus',
                    'focusin',
                    'focusout',
                    'input',
                    'keydown',
                    'keyup',
                    'keypress',
                    'mousedown',
                    'mouseenter',
                    'mouseleave',
                    'mousemove',
                    'mouseover',
                    'mouseup',
                    'search',
                    'touchend',
                    'touchstart'
                ];

                this.$dropdown.on(stoppedEvents.join(' '), function(evt) {
                    evt.stopPropagation();
                });
            };

            return StopPropagation;
        });

        S2.define('select2/selection/stopPropagation', [

        ], function() {
            function StopPropagation() {}

            StopPropagation.prototype.bind = function(decorated, container, $container) {
                decorated.call(this, container, $container);

                var stoppedEvents = [
                    'blur',
                    'change',
                    'click',
                    'dblclick',
                    'focus',
                    'focusin',
                    'focusout',
                    'input',
                    'keydown',
                    'keyup',
                    'keypress',
                    'mousedown',
                    'mouseenter',
                    'mouseleave',
                    'mousemove',
                    'mouseover',
                    'mouseup',
                    'search',
                    'touchend',
                    'touchstart'
                ];

                this.$selection.on(stoppedEvents.join(' '), function(evt) {
                    evt.stopPropagation();
                });
            };

            return StopPropagation;
        });

        /*!
         * jQuery Mousewheel 3.1.13
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         */

        (function(factory) {
            if (typeof S2.define === 'function' && S2.define.amd) {
                // AMD. Register as an anonymous module.
                S2.define('jquery-mousewheel', ['jquery'], factory);
            } else if (typeof exports === 'object') {
                // Node/CommonJS style for Browserify
                module.exports = factory;
            } else {
                // Browser globals
                factory(jQuery);
            }
        }(function($) {

            var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
                toBind = ('onwheel' in document || document.documentMode >= 9) ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
                slice = Array.prototype.slice,
                nullLowestDeltaTimeout, lowestDelta;

            if ($.event.fixHooks) {
                for (var i = toFix.length; i;) {
                    $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
                }
            }

            var special = $.event.special.mousewheel = {
                version: '3.1.12',

                setup: function() {
                    if (this.addEventListener) {
                        for (var i = toBind.length; i;) {
                            this.addEventListener(toBind[--i], handler, false);
                        }
                    } else {
                        this.onmousewheel = handler;
                    }
                    // Store the line height and page height for this particular element
                    $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
                    $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
                },

                teardown: function() {
                    if (this.removeEventListener) {
                        for (var i = toBind.length; i;) {
                            this.removeEventListener(toBind[--i], handler, false);
                        }
                    } else {
                        this.onmousewheel = null;
                    }
                    // Clean up the data we added to the element
                    $.removeData(this, 'mousewheel-line-height');
                    $.removeData(this, 'mousewheel-page-height');
                },

                getLineHeight: function(elem) {
                    var $elem = $(elem),
                        $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
                    if (!$parent.length) {
                        $parent = $('body');
                    }
                    return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
                },

                getPageHeight: function(elem) {
                    return $(elem).height();
                },

                settings: {
                    adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
                    normalizeOffset: true // calls getBoundingClientRect for each event
                }
            };

            $.fn.extend({
                mousewheel: function(fn) {
                    return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
                },

                unmousewheel: function(fn) {
                    return this.unbind('mousewheel', fn);
                }
            });


            function handler(event) {
                var orgEvent = event || window.event,
                    args = slice.call(arguments, 1),
                    delta = 0,
                    deltaX = 0,
                    deltaY = 0,
                    absDelta = 0,
                    offsetX = 0,
                    offsetY = 0;
                event = $.event.fix(orgEvent);
                event.type = 'mousewheel';

                // Old school scrollwheel delta
                if ('detail' in orgEvent) { deltaY = orgEvent.detail * -1; }
                if ('wheelDelta' in orgEvent) { deltaY = orgEvent.wheelDelta; }
                if ('wheelDeltaY' in orgEvent) { deltaY = orgEvent.wheelDeltaY; }
                if ('wheelDeltaX' in orgEvent) { deltaX = orgEvent.wheelDeltaX * -1; }

                // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
                if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
                    deltaX = deltaY * -1;
                    deltaY = 0;
                }

                // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
                delta = deltaY === 0 ? deltaX : deltaY;

                // New school wheel delta (wheel event)
                if ('deltaY' in orgEvent) {
                    deltaY = orgEvent.deltaY * -1;
                    delta = deltaY;
                }
                if ('deltaX' in orgEvent) {
                    deltaX = orgEvent.deltaX;
                    if (deltaY === 0) { delta = deltaX * -1; }
                }

                // No change actually happened, no reason to go any further
                if (deltaY === 0 && deltaX === 0) { return; }

                // Need to convert lines and pages to pixels if we aren't already in pixels
                // There are three delta modes:
                //   * deltaMode 0 is by pixels, nothing to do
                //   * deltaMode 1 is by lines
                //   * deltaMode 2 is by pages
                if (orgEvent.deltaMode === 1) {
                    var lineHeight = $.data(this, 'mousewheel-line-height');
                    delta *= lineHeight;
                    deltaY *= lineHeight;
                    deltaX *= lineHeight;
                } else if (orgEvent.deltaMode === 2) {
                    var pageHeight = $.data(this, 'mousewheel-page-height');
                    delta *= pageHeight;
                    deltaY *= pageHeight;
                    deltaX *= pageHeight;
                }

                // Store lowest absolute delta to normalize the delta values
                absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

                if (!lowestDelta || absDelta < lowestDelta) {
                    lowestDelta = absDelta;

                    // Adjust older deltas if necessary
                    if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                        lowestDelta /= 40;
                    }
                }

                // Adjust older deltas if necessary
                if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                    // Divide all the things by 40!
                    delta /= 40;
                    deltaX /= 40;
                    deltaY /= 40;
                }

                // Get a whole, normalized value for the deltas
                delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
                deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
                deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);

                // Normalise offsetX and offsetY properties
                if (special.settings.normalizeOffset && this.getBoundingClientRect) {
                    var boundingRect = this.getBoundingClientRect();
                    offsetX = event.clientX - boundingRect.left;
                    offsetY = event.clientY - boundingRect.top;
                }

                // Add information to the event object
                event.deltaX = deltaX;
                event.deltaY = deltaY;
                event.deltaFactor = lowestDelta;
                event.offsetX = offsetX;
                event.offsetY = offsetY;
                // Go ahead and set deltaMode to 0 since we converted to pixels
                // Although this is a little odd since we overwrite the deltaX/Y
                // properties with normalized deltas.
                event.deltaMode = 0;

                // Add event and delta to the front of the arguments
                args.unshift(event, delta, deltaX, deltaY);

                // Clearout lowestDelta after sometime to better
                // handle multiple device types that give different
                // a different lowestDelta
                // Ex: trackpad = 3 and mouse wheel = 120
                if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
                nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

                return ($.event.dispatch || $.event.handle).apply(this, args);
            }

            function nullLowestDelta() {
                lowestDelta = null;
            }

            function shouldAdjustOldDeltas(orgEvent, absDelta) {
                // If this is an older event and the delta is divisable by 120,
                // then we are assuming that the browser is treating this as an
                // older mouse wheel event and that we should divide the deltas
                // by 40 to try and get a more usable deltaFactor.
                // Side note, this actually impacts the reported scroll distance
                // in older browsers and can cause scrolling to be slower than native.
                // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
                return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
            }

        }));

        S2.define('jquery.select2', [
            'jquery',
            'jquery-mousewheel',

            './select2/core',
            './select2/defaults',
            './select2/utils'
        ], function($, _, Select2, Defaults, Utils) {
            if ($.fn.select2 == null) {
                // All methods that should return the element
                var thisMethods = ['open', 'close', 'destroy'];

                $.fn.select2 = function(options) {
                    options = options || {};

                    if (typeof options === 'object') {
                        this.each(function() {
                            var instanceOptions = $.extend(true, {}, options);

                            var instance = new Select2($(this), instanceOptions);
                        });

                        return this;
                    } else if (typeof options === 'string') {
                        var ret;
                        var args = Array.prototype.slice.call(arguments, 1);

                        this.each(function() {
                            var instance = Utils.GetData(this, 'select2');

                            if (instance == null && window.console && console.error) {
                                console.error(
                                    'The select2(\'' + options + '\') method was called on an ' +
                                    'element that is not using Select2.'
                                );
                            }

                            ret = instance[options].apply(instance, args);
                        });

                        // Check if we should be returning `this`
                        if ($.inArray(options, thisMethods) > -1) {
                            return this;
                        }

                        return ret;
                    } else {
                        throw new Error('Invalid arguments for Select2: ' + options);
                    }
                };
            }

            if ($.fn.select2.defaults == null) {
                $.fn.select2.defaults = Defaults;
            }

            return Select2;
        });

        // Return the AMD loader configuration so it can be used outside of this file
        return {
            define: S2.define,
            require: S2.require
        };
    }());

    // Autoload the jQuery bindings
    // We know that all of the modules exist above this, so we're safe
    var select2 = S2.require('jquery.select2');

    // Hold the AMD module references on the jQuery function that was just loaded
    // This allows Select2 to use the internal loader outside of this file, such
    // as in the language files.
    jQuery.fn.select2.amd = S2;

    // Return the Select2 instance for anyone who is importing it.
    return select2;
}));;
/*!
 * strength.js
 * Original author: @aaronlumsden
 * Further changes, comments: @aaronlumsden
 * Licensed under the MIT license
 */
;
(function($, window, document, undefined) {

    var pluginName = "tabulous",
        defaults = {
            effect: 'scale'
        };

    // $('<style>body { background-color: red; color: white; }</style>').appendTo('head');

    function Plugin(element, options) {
        this.element = element;
        this.$elem = $(this.element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function() {

            var links = this.$elem.find('a');
            var firstchild = this.$elem.find('li:first-child').find('a');
            var lastchild = this.$elem.find('li:last-child').after('<span class="tabulousclear"></span>');

            if (this.options.effect == 'scale') {
                tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescale');
            } else if (this.options.effect == 'slideLeft') {
                tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideleft');
            } else if (this.options.effect == 'scaleUp') {
                tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescaleup');
            } else if (this.options.effect == 'flip') {
                tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideflip');
            }

            var firstdiv = this.$elem.find('#tabs_container');
            var firstdivheight = firstdiv.find('div:first').height();

            var alldivs = this.$elem.find('div:first').find('div');

            alldivs.css({ 'position': 'absolute', 'top': '40px' });

            firstdiv.css('height', firstdivheight + 'px');

            firstchild.addClass('tabulous_active');

            links.bind('click', { myOptions: this.options }, function(e) {
                e.preventDefault();

                var $options = e.data.myOptions;
                var effect = $options.effect;

                var mythis = $(this);
                var thisform = mythis.parent().parent().parent();
                var thislink = mythis.attr('href');


                firstdiv.addClass('transition');

                links.removeClass('tabulous_active');
                mythis.addClass('tabulous_active');
                thisdivwidth = thisform.find('div' + thislink).height();

                if (effect == 'scale') {
                    alldivs.removeClass('showscale').addClass('make_transist').addClass('hidescale');
                    thisform.find('div' + thislink).addClass('make_transist').addClass('showscale');
                } else if (effect == 'slideLeft') {
                    alldivs.removeClass('showleft').addClass('make_transist').addClass('hideleft');
                    thisform.find('div' + thislink).addClass('make_transist').addClass('showleft');
                } else if (effect == 'scaleUp') {
                    alldivs.removeClass('showscaleup').addClass('make_transist').addClass('hidescaleup');
                    thisform.find('div' + thislink).addClass('make_transist').addClass('showscaleup');
                } else if (effect == 'flip') {
                    alldivs.removeClass('showflip').addClass('make_transist').addClass('hideflip');
                    thisform.find('div' + thislink).addClass('make_transist').addClass('showflip');
                }


                firstdiv.css('height', thisdivwidth + 'px');




            });






        },

        yourOtherFunction: function(el, options) {
            // some logic
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            new Plugin(this, options);
        });
    };

})(jQuery, window, document);


;
/**
 * @file
 * Removes whitespace from the highlighted region when an alert is closed.
 *
 */
(function($, Drupal) {

    /**
     * Removes whitespace from the highlighted region when an alert is closed.
     */
    Drupal.behaviors.foundationAlertClose = {
        attach: function(context, settings) {

            $('.zurb-foundation-callout').once('foundation-alert').on('closed.zf', function(event) {
                var $target = $(event.target);
                var $region = $target.parent();

                // Remove this alert from the DOM
                $target.remove();

                // Trim newlines out of the highlighted region, so that our :empty
                // selector still works.
                $region.html($region.html().replace(/\n/g, ''));
            });
        }
    };

})(jQuery, Drupal);;
/**
 * @file
 * Adds the active class to active links, for proper top bar rendering.
 *
 */
(function($, Drupal) {

    /**
     * Adds the "active" class to top bar <li> elements with active child links.
     */
    Drupal.behaviors.foundationTopBarActive = {
        attach: function(context, settings) {
            var $active_links = $(context).find('.top-bar .menu-item > a.is-active');
            if ($active_links.length) {
                $active_links.once('foundationTopBarActive').each(function() {
                    $(this).parent().addClass('active');
                });
            }
        }
    };

})(jQuery, Drupal);;