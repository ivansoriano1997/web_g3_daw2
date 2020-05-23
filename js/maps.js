/*
 magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
 handlebars v5.0.0-alpha.1

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

 Font Awesome Free 5.5.0 by @fontawesome - https://fontawesome.com
 License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 JavaScript Cookie v2.2.0
 https://github.com/js-cookie/js-cookie

 Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 Released under the MIT license
 baguetteBox.js
 @author  feimosi
 @version 1.11.0
 @url https://github.com/feimosi/baguetteBox.js
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(h) {
    var m = 0;
    return function() {
        return m < h.length ? {
            done: !1,
            value: h[m++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(h) {
    return {
        next: $jscomp.arrayIteratorImpl(h)
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(h, m, c) {
    h != Array.prototype && h != Object.prototype && (h[m] = c.value)
};
$jscomp.getGlobal = function(h) {
    h = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, h];
    for (var m = 0; m < h.length; ++m) {
        var c = h[m];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.SymbolClass = function(h, m) {
    this.$jscomp$symbol$id_ = h;
    $jscomp.defineProperty(this, "description", {
        configurable: !0,
        writable: !0,
        value: m
    })
};
$jscomp.SymbolClass.prototype.toString = function() {
    return this.$jscomp$symbol$id_
};
$jscomp.Symbol = function() {
    function h(c) {
        if (this instanceof h) throw new TypeError("Symbol is not a constructor");
        return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (c || "") + "_" + m++, c)
    }
    var m = 0;
    return h
}();
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var h = $jscomp.global.Symbol.iterator;
    h || (h = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[h] && $jscomp.defineProperty(Array.prototype, h, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.initSymbolAsyncIterator = function() {
    $jscomp.initSymbol();
    var h = $jscomp.global.Symbol.asyncIterator;
    h || (h = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
    $jscomp.initSymbolAsyncIterator = function() {}
};
$jscomp.iteratorPrototype = function(h) {
    $jscomp.initSymbolIterator();
    h = {
        next: h
    };
    h[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return h
};
$jscomp.makeIterator = function(h) {
    var m = "undefined" != typeof Symbol && Symbol.iterator && h[Symbol.iterator];
    return m ? m.call(h) : $jscomp.arrayIterator(h)
};
! function(h, m) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = m() : "function" == typeof define && define.amd ? define(m) : h.moment = m()
}(this, function() {
    function h() {
        return Hd.apply(null, arguments)
    }

    function m(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }

    function c(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }

    function a(e) {
        return void 0 === e
    }

    function b(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }

    function g(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function d(e, a) {
        var p, b = [];
        for (p = 0; p < e.length; ++p) b.push(a(e[p], p));
        return b
    }

    function f(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }

    function k(e, a) {
        for (var p in a) f(a, p) && (e[p] = a[p]);
        return f(a, "toString") && (e.toString = a.toString), f(a, "valueOf") && (e.valueOf = a.valueOf), e
    }

    function l(e, a, b, d) {
        return ic(e, a, b, d, !0).utc()
    }

    function q(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), e._pf
    }

    function C(e) {
        if (null == e._isValid) {
            var a = q(e),
                b = Jd.call(a.parsedDateParts, function(e) {
                    return null != e
                });
            b = !isNaN(e._d.getTime()) && 0 > a.overflow && !a.empty && !a.invalidMonth && !a.invalidWeekday && !a.weekdayMismatch && !a.nullInput && !a.invalidFormat && !a.userInvalidated && (!a.meridiem || a.meridiem && b);
            if (e._strict && (b = b && 0 === a.charsLeftOver &&
                    0 === a.unusedTokens.length && void 0 === a.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return b;
            e._isValid = b
        }
        return e._isValid
    }

    function n(e) {
        var a = l(NaN);
        return null != e ? k(q(a), e) : q(a).userInvalidated = !0, a
    }

    function r(e, p) {
        var b, d, c;
        if (a(p._isAMomentObject) || (e._isAMomentObject = p._isAMomentObject), a(p._i) || (e._i = p._i), a(p._f) || (e._f = p._f), a(p._l) || (e._l = p._l), a(p._strict) || (e._strict = p._strict), a(p._tzm) || (e._tzm = p._tzm), a(p._isUTC) || (e._isUTC = p._isUTC), a(p._offset) || (e._offset = p._offset), a(p._pf) ||
            (e._pf = q(p)), a(p._locale) || (e._locale = p._locale), 0 < wc.length)
            for (b = 0; b < wc.length; b++) a(c = p[d = wc[b]]) || (e[d] = c);
        return e
    }

    function x(e) {
        r(this, e);
        this._d = new Date(null != e._d ? e._d.getTime() : NaN);
        this.isValid() || (this._d = new Date(NaN));
        !1 === xc && (xc = !0, h.updateOffset(this), xc = !1)
    }

    function A(e) {
        return e instanceof x || null != e && null != e._isAMomentObject
    }

    function E(e) {
        return 0 > e ? Math.ceil(e) || 0 : Math.floor(e)
    }

    function t(e) {
        e = +e;
        var a = 0;
        return 0 !== e && isFinite(e) && (a = E(e)), a
    }

    function z(e, a, b) {
        var p, d = Math.min(e.length,
                a.length),
            c = Math.abs(e.length - a.length),
            f = 0;
        for (p = 0; p < d; p++)(b && e[p] !== a[p] || !b && t(e[p]) !== t(a[p])) && f++;
        return f + c
    }

    function F(e) {
        !1 === h.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function G(e, a) {
        var p = !0;
        return k(function() {
            if (null != h.deprecationHandler && h.deprecationHandler(null, e), p) {
                for (var b, d = [], c = 0; c < arguments.length; c++) {
                    if (b = "", "object" == typeof arguments[c]) {
                        for (var f in b += "\n[" + c + "] ", arguments[0]) b += f + ": " + arguments[0][f] +
                            ", ";
                        b = b.slice(0, -2)
                    } else b = arguments[c];
                    d.push(b)
                }
                F(e + "\nArguments: " + Array.prototype.slice.call(d).join("") + "\n" + Error().stack);
                p = !1
            }
            return a.apply(this, arguments)
        }, a)
    }

    function S(e, a) {
        null != h.deprecationHandler && h.deprecationHandler(e, a);
        Wc[e] || (F(a), Wc[e] = !0)
    }

    function L(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }

    function y(e, a) {
        var p, b = k({}, e);
        for (p in a) f(a, p) && (c(e[p]) && c(a[p]) ? (b[p] = {}, k(b[p], e[p]), k(b[p], a[p])) : null != a[p] ? b[p] = a[p] : delete b[p]);
        for (p in e) f(e, p) && !f(a, p) && c(e[p]) && (b[p] = k({}, b[p]));
        return b
    }

    function la(e) {
        null != e && this.set(e)
    }

    function H(e, a) {
        var p = e.toLowerCase();
        Ob[p] = Ob[p + "s"] = Ob[a] = e
    }

    function N(e) {
        return "string" == typeof e ? Ob[e] || Ob[e.toLowerCase()] : void 0
    }

    function R(e) {
        var a, b, d = {};
        for (b in e) f(e, b) && (a = N(b)) && (d[a] = e[b]);
        return d
    }

    function T(e, a, b) {
        var p = "" + Math.abs(e);
        return (0 <= e ? b ? "+" : "" : "-") + Math.pow(10, Math.max(0, a - p.length)).toString().substr(1) + p
    }

    function w(e, a, b, d) {
        var p = d;
        "string" == typeof d && (p = function() {
            return this[d]()
        });
        e && (ub[e] = p);
        a && (ub[a[0]] = function() {
            return T(p.apply(this, arguments), a[1], a[2])
        });
        b && (ub[b] = function() {
            return this.localeData().ordinal(p.apply(this, arguments), e)
        })
    }

    function ha(e, a) {
        return e.isValid() ? (a = Ta(a, e.localeData()), yc[a] = yc[a] || function(e) {
                var a, p, b = e.match(Xc);
                var d = 0;
                for (a = b.length; d < a; d++) ub[b[d]] ? b[d] = ub[b[d]] : b[d] = (p = b[d]).match(/\[[\s\S]/) ? p.replace(/^\[|\]$/g, "") : p.replace(/\\/g, "");
                return function(p) {
                    var d, c = "";
                    for (d = 0; d < a; d++) c += L(b[d]) ? b[d].call(p, e) : b[d];
                    return c
                }
            }(a), yc[a](e)) :
            e.localeData().invalidDate()
    }

    function Ta(e, a) {
        function p(e) {
            return a.longDateFormat(e) || e
        }
        var b = 5;
        for (jc.lastIndex = 0; 0 <= b && jc.test(e);) e = e.replace(jc, p), jc.lastIndex = 0, --b;
        return e
    }

    function v(e, a, b) {
        zc[e] = L(a) ? a : function(e, p) {
            return e && b ? b : a
        }
    }

    function ia(e, a) {
        return f(zc, e) ? zc[e](a._strict, a._locale) : new RegExp(da(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, a, p, b, d) {
            return a || p || b || d
        })))
    }

    function da(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function J(e,
        a) {
        var p, d = a;
        "string" == typeof e && (e = [e]);
        b(a) && (d = function(e, p) {
            p[a] = t(e)
        });
        for (p = 0; p < e.length; p++) Ac[e[p]] = d
    }

    function U(e, a) {
        J(e, function(e, p, b, d) {
            b._w = b._w || {};
            a(e, b._w, b, d)
        })
    }

    function ea(e) {
        return 0 == e % 4 && 0 != e % 100 || 0 == e % 400
    }

    function ka(e, a) {
        return function(p) {
            return null != p ? (M(this, e, p), h.updateOffset(this, a), this) : V(this, e)
        }
    }

    function V(e, a) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + a]() : NaN
    }

    function M(e, a, b) {
        e.isValid() && !isNaN(b) && ("FullYear" === a && ea(e.year()) && 1 === e.month() && 29 === e.date() ?
            e._d["set" + (e._isUTC ? "UTC" : "") + a](b, e.month(), Aa(b, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + a](b))
    }

    function Aa(e, a) {
        if (isNaN(e) || isNaN(a)) return NaN;
        var p = (a % 12 + 12) % 12;
        return e += (a - p) / 12, 1 === p ? ea(e) ? 29 : 28 : 31 - p % 7 % 2
    }

    function Ia(e, a) {
        var p;
        if (!e.isValid()) return e;
        if ("string" == typeof a)
            if (/^\d+$/.test(a)) a = t(a);
            else if (!b(a = e.localeData().monthsParse(a))) return e;
        return p = Math.min(e.date(), Aa(e.year(), a)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](a, p), e
    }

    function hb(e) {
        return null != e ? (Ia(this, e), h.updateOffset(this,
            !0), this) : V(this, "Month")
    }

    function ra() {
        function e(e, a) {
            return a.length - e.length
        }
        var a, b = [],
            d = [],
            c = [];
        for (a = 0; 12 > a; a++) {
            var f = l([2E3, a]);
            b.push(this.monthsShort(f, ""));
            d.push(this.months(f, ""));
            c.push(this.months(f, ""));
            c.push(this.monthsShort(f, ""))
        }
        b.sort(e);
        d.sort(e);
        c.sort(e);
        for (a = 0; 12 > a; a++) b[a] = da(b[a]), d[a] = da(d[a]);
        for (a = 0; 24 > a; a++) c[a] = da(c[a]);
        this._monthsShortRegex = this._monthsRegex = new RegExp("^(" + c.join("|") + ")", "i");
        this._monthsStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
        this._monthsShortStrictRegex =
            new RegExp("^(" + b.join("|") + ")", "i")
    }

    function bb(e) {
        if (100 > e && 0 <= e) {
            var a = Array.prototype.slice.call(arguments);
            a[0] = e + 400;
            a = new Date(Date.UTC.apply(null, a));
            isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e)
        } else a = new Date(Date.UTC.apply(null, arguments));
        return a
    }

    function vb(e, a, b) {
        b = 7 + a - b;
        return -((7 + bb(e, 0, b).getUTCDay() - a) % 7) + b - 1
    }

    function wb(e, a, b, d, c) {
        var p, f;
        a = 1 + 7 * (a - 1) + (7 + b - d) % 7 + vb(e, d, c);
        0 >= a ? (e = p = e - 1, e = (ea(e) ? 366 : 365) + a) : e = a > (ea(e) ? 366 : 365) ? (p = e + 1, a - (ea(e) ? 366 : 365)) : (p = e, a);
        return f = e, {
            year: p,
            dayOfYear: f
        }
    }

    function Ua(e, a, b) {
        var p, d, c = vb(e.year(), a, b);
        c = Math.floor((e.dayOfYear() - c - 1) / 7) + 1;
        return 1 > c ? p = c + Va(d = e.year() - 1, a, b) : c > Va(e.year(), a, b) ? (p = c - Va(e.year(), a, b), d = e.year() + 1) : (d = e.year(), p = c), {
            week: p,
            year: d
        }
    }

    function Va(e, a, b) {
        var p = vb(e, a, b);
        a = vb(e + 1, a, b);
        return ((ea(e) ? 366 : 365) - p + a) / 7
    }

    function xb(e, a) {
        return e.slice(a, 7).concat(e.slice(0, a))
    }

    function Pb() {
        function e(e, a) {
            return a.length - e.length
        }
        var a, b = [],
            d = [],
            c = [],
            f = [];
        for (a = 0; 7 > a; a++) {
            var g = l([2E3, 1]).day(a);
            var k = this.weekdaysMin(g,
                "");
            var q = this.weekdaysShort(g, "");
            g = this.weekdays(g, "");
            b.push(k);
            d.push(q);
            c.push(g);
            f.push(k);
            f.push(q);
            f.push(g)
        }
        b.sort(e);
        d.sort(e);
        c.sort(e);
        f.sort(e);
        for (a = 0; 7 > a; a++) d[a] = da(d[a]), c[a] = da(c[a]), f[a] = da(f[a]);
        this._weekdaysMinRegex = this._weekdaysShortRegex = this._weekdaysRegex = new RegExp("^(" + f.join("|") + ")", "i");
        this._weekdaysStrictRegex = new RegExp("^(" + c.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + b.join("|") +
            ")", "i")
    }

    function Qb() {
        return this.hours() % 12 || 12
    }

    function D(e, a) {
        w(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), a)
        })
    }

    function kc(e, a) {
        return a._meridiemParse
    }

    function yb(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function ib(e) {
        var a = null;
        if (!W[e] && "undefined" != typeof module && module && module.exports) try {
            a = Rb._abbr, require("./locale/" + e), Ja(a)
        } catch (kf) {}
        return W[e]
    }

    function Ja(e, p) {
        var b;
        return e && ((b = a(p) ? aa(e) : B(e, p)) ? Rb = b : "undefined" != typeof console && console.warn &&
            console.warn("Locale " + e + " not found. Did you forget to load it?")), Rb._abbr
    }

    function B(e, a) {
        if (null === a) return delete W[e], null;
        var p = Yc;
        if (a.abbr = e, null != W[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), p = W[e]._config;
        else if (null != a.parentLocale)
            if (null != W[a.parentLocale]) p = W[a.parentLocale]._config;
            else {
                if (null == (p = ib(a.parentLocale))) return Sb[a.parentLocale] || (Sb[a.parentLocale] = []), Sb[a.parentLocale].push({
                    name: e,
                    config: a
                }), null;
                p = p._config
            } return W[e] = new la(y(p, a)), Sb[e] && Sb[e].forEach(function(e) {
            B(e.name, e.config)
        }), Ja(e), W[e]
    }

    function aa(e) {
        var a;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Rb;
        if (!m(e)) {
            if (a = ib(e)) return a;
            e = [e]
        }
        var b;
        a: {
            for (var d, c, f = 0; f < e.length;) {
                a = (c = yb(e[f]).split("-")).length;
                for (b = (b = yb(e[f + 1])) ? b.split("-") : null; 0 < a;) {
                    if (d = ib(c.slice(0, a).join("-"))) {
                        b =
                            d;
                        break a
                    }
                    if (b && b.length >= a && z(c, b, !0) >= a - 1) break;
                    a--
                }
                f++
            }
            b = Rb
        }
        return b
    }

    function X(e) {
        var a, b = e._a;
        return b && -2 === q(e).overflow && (a = 0 > b[Wa] || 11 < b[Wa] ? Wa : 1 > b[Ka] || b[Ka] > Aa(b[Ba], b[Wa]) ? Ka : 0 > b[Y] || 24 < b[Y] || 24 === b[Y] && (0 !== b[Ca] || 0 !== b[Xa] || 0 !== b[jb]) ? Y : 0 > b[Ca] || 59 < b[Ca] ? Ca : 0 > b[Xa] || 59 < b[Xa] ? Xa : 0 > b[jb] || 999 < b[jb] ? jb : -1, q(e)._overflowDayOfYear && (a < Ba || Ka < a) && (a = Ka), q(e)._overflowWeeks && -1 === a && (a = Kd), q(e)._overflowWeekday && -1 === a && (a = Ld), q(e).overflow = a), e
    }

    function Ya(e, a, b) {
        return null != e ? e : null != a ?
            a : b
    }

    function Tb(e) {
        var a, b;
        var d = [];
        if (!e._d) {
            var c = new Date(h.now());
            c = e._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()];
            e._w && null == e._a[Ka] && null == e._a[Wa] && function(e) {
                var a, b, p, d;
                if (null != (a = e._w).GG || null != a.W || null != a.E) {
                    var c = 1;
                    var f = 4;
                    var g = Ya(a.GG, e._a[Ba], Ua(O(), 1, 4).year);
                    var k = Ya(a.W, 1);
                    (1 > (b = Ya(a.E, 1)) || 7 < b) && (d = !0)
                } else c = e._locale._week.dow, f = e._locale._week.doy, k = Ua(O(), c, f), g = Ya(a.gg, e._a[Ba], k.year), k = Ya(a.w, k.week), null != a.d ?
                    (0 > (b = a.d) || 6 < b) && (d = !0) : null != a.e ? (b = a.e + c, (0 > a.e || 6 < a.e) && (d = !0)) : b = c;
                1 > k || k > Va(g, c, f) ? q(e)._overflowWeeks = !0 : null != d ? q(e)._overflowWeekday = !0 : (p = wb(g, k, b, c, f), e._a[Ba] = p.year, e._dayOfYear = p.dayOfYear)
            }(e);
            null != e._dayOfYear && (b = Ya(e._a[Ba], c[Ba]), (e._dayOfYear > (ea(b) ? 366 : 365) || 0 === e._dayOfYear) && (q(e)._overflowDayOfYear = !0), a = bb(b, 0, e._dayOfYear), e._a[Wa] = a.getUTCMonth(), e._a[Ka] = a.getUTCDate());
            for (a = 0; 3 > a && null == e._a[a]; ++a) e._a[a] = d[a] = c[a];
            for (; 7 > a; a++) e._a[a] = d[a] = null == e._a[a] ? 2 === a ? 1 : 0 :
                e._a[a];
            24 === e._a[Y] && 0 === e._a[Ca] && 0 === e._a[Xa] && 0 === e._a[jb] && (e._nextDay = !0, e._a[Y] = 0);
            e._d = (e._useUTC ? bb : function(e, a, b, p, d, c, f) {
                var g;
                return 100 > e && 0 <= e ? (g = new Date(e + 400, a, b, p, d, c, f), isFinite(g.getFullYear()) && g.setFullYear(e)) : g = new Date(e, a, b, p, d, c, f), g
            }).apply(null, d);
            d = e._useUTC ? e._d.getUTCDay() : e._d.getDay();
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm);
            e._nextDay && (e._a[Y] = 24);
            e._w && void 0 !== e._w.d && e._w.d !== d && (q(e).weekdayMismatch = !0)
        }
    }

    function zb(e) {
        var a;
        var b = e._i;
        var d = Md.exec(b) || Nd.exec(b);
        if (d) {
            q(e).iso = !0;
            b = 0;
            for (a = lc.length; b < a; b++)
                if (lc[b][1].exec(d[1])) {
                    var c = lc[b][0];
                    var f = !1 !== lc[b][2];
                    break
                } if (null == c) return void(e._isValid = !1);
            if (d[3]) {
                b = 0;
                for (a = Bc.length; b < a; b++)
                    if (Bc[b][1].exec(d[3])) {
                        var g = (d[2] || " ") + Bc[b][0];
                        break
                    } if (null == g) return void(e._isValid = !1)
            }
            if (!f && null != g) return void(e._isValid = !1);
            if (d[4]) {
                if (!Od.exec(d[4])) return void(e._isValid = !1);
                var k = "Z"
            }
            e._f = c + (g || "") + (k || "");
            ma(e)
        } else e._isValid = !1
    }

    function Ub(e) {
        var a, b = Pd.exec(e._i.replace(/\([^)]*\)|[\n\t]/g,
            " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (b) {
            var d = b[3],
                c = b[2],
                f = b[5],
                g = b[6];
            var k = b[7];
            var l = parseInt(b[4], 10);
            d = [49 >= l ? 2E3 + l : 999 >= l ? 1900 + l : l, Zc.indexOf(d), parseInt(c, 10), parseInt(f, 10), parseInt(g, 10)];
            k = (k && d.push(parseInt(k, 10)), d);
            if (a = b[1], !a || $c.indexOf(a) === (new Date(k[0], k[1], k[2])).getDay() || (q(e).weekdayMismatch = !0, e._isValid = !1)) e._a = k, (a = b[8]) ? b = Qd[a] : b[9] ? b = 0 : (b = parseInt(b[10], 10), a = b % 100, b = (b - a) / 100 * 60 + a), e._tzm = b, e._d = bb.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() -
                e._tzm), q(e).rfc2822 = !0
        } else e._isValid = !1
    }

    function ma(e) {
        if (e._f !== h.ISO_8601)
            if (e._f !== h.RFC_2822) {
                e._a = [];
                q(e).empty = !0;
                var a, b, d, c, g, k, l = "" + e._i,
                    n = l.length,
                    C = 0;
                var m = Ta(e._f, e._locale).match(Xc) || [];
                for (a = 0; a < m.length; a++) {
                    var K = m[a];
                    (b = (l.match(ia(K, e)) || [])[0]) && (0 < (d = l.substr(0, l.indexOf(b))).length && q(e).unusedInput.push(d), l = l.slice(l.indexOf(b) + b.length), C += b.length);
                    ub[K] ? (b ? q(e).empty = !1 : q(e).unusedTokens.push(K), c = K, k = e, null != (g = b) && f(Ac, c) && Ac[c](g, k._a, k, c)) : e._strict && !b && q(e).unusedTokens.push(K)
                }
                q(e).charsLeftOver =
                    n - C;
                0 < l.length && q(e).unusedInput.push(l);
                12 >= e._a[Y] && !0 === q(e).bigHour && 0 < e._a[Y] && (q(e).bigHour = void 0);
                q(e).parsedDateParts = e._a.slice(0);
                q(e).meridiem = e._meridiem;
                a = e._a;
                b = Y;
                K = e._locale;
                m = e._a[Y];
                d = e._meridiem;
                var $a;
                K = null == d ? m : null != K.meridiemHour ? K.meridiemHour(m, d) : (null != K.isPM && (($a = K.isPM(d)) && 12 > m && (m += 12), $a || 12 !== m || (m = 0)), m);
                a[b] = K;
                Tb(e);
                X(e)
            } else Ub(e);
        else zb(e)
    }

    function Ab(e) {
        var p, f, l = e._i,
            K = e._f;
        return e._locale = e._locale || aa(e._l), null === l || void 0 === K && "" === l ? n({
                nullInput: !0
            }) :
            ("string" == typeof l && (e._i = l = e._locale.preparse(l)), A(l) ? new x(X(l)) : (g(l) ? e._d = l : m(K) ? function(e) {
                    var a, b, p;
                    if (0 === e._f.length) return q(e).invalidFormat = !0, e._d = new Date(NaN);
                    for (p = 0; p < e._f.length; p++) {
                        var d = 0;
                        var c = r({}, e);
                        null != e._useUTC && (c._useUTC = e._useUTC);
                        c._f = e._f[p];
                        ma(c);
                        C(c) && (d += q(c).charsLeftOver, d += 10 * q(c).unusedTokens.length, q(c).score = d, (null == b || d < b) && (b = d, a = c))
                    }
                    k(e, a || c)
                }(e) : K ? ma(e) : a(p = e._i) ? e._d = new Date(h.now()) : g(p) ? e._d = new Date(p.valueOf()) : "string" == typeof p ? null === (f = Rd.exec(e._i)) ?
                (zb(e), !1 === e._isValid && (delete e._isValid, Ub(e), !1 === e._isValid && (delete e._isValid, h.createFromInputFallback(e)))) : e._d = new Date(+f[1]) : m(p) ? (e._a = d(p.slice(0), function(e) {
                    return parseInt(e, 10)
                }), Tb(e)) : c(p) ? function(e) {
                    if (!e._d) {
                        var a = R(e._i);
                        e._a = d([a.year, a.month, a.day || a.date, a.hour, a.minute, a.second, a.millisecond], function(e) {
                            return e && parseInt(e, 10)
                        });
                        Tb(e)
                    }
                }(e) : b(p) ? e._d = new Date(p) : h.createFromInputFallback(e), C(e) || (e._d = null), e))
    }

    function ic(e, a, b, d, f) {
        var p, g = {};
        !0 !== b && !1 !== b || (d = b,
            b = void 0);
        var k;
        if (k = c(e)) a: if (k = e, Object.getOwnPropertyNames) k = 0 === Object.getOwnPropertyNames(k).length;
            else {
                for (var l in k)
                    if (k.hasOwnProperty(l)) {
                        k = !1;
                        break a
                    } k = !0
            } return (k || m(e) && 0 === e.length) && (e = void 0), g._isAMomentObject = !0, g._useUTC = g._isUTC = f, g._l = b, g._i = e, g._f = a, g._strict = d, (p = new x(X(Ab(g))))._nextDay && (p.add(1, "d"), p._nextDay = void 0), p
    }

    function O(e, a, b, d) {
        return ic(e, a, b, d, !1)
    }

    function mc(e, a) {
        var b;
        if (1 === a.length && m(a[0]) && (a = a[0]), !a.length) return O();
        var p = a[0];
        for (b = 1; b < a.length; ++b) a[b].isValid() &&
            !a[b][e](p) || (p = a[b]);
        return p
    }

    function Bb(e) {
        var a = R(e);
        e = a.year || 0;
        var b = a.quarter || 0,
            d = a.month || 0,
            c = a.week || a.isoWeek || 0,
            f = a.day || 0,
            g = a.hour || 0,
            k = a.minute || 0,
            l = a.second || 0,
            q = a.millisecond || 0;
        a: {
            for (var h in a)
                if (-1 === Z.call(Vb, h) || null != a[h] && isNaN(a[h])) {
                    a = !1;
                    break a
                } h = !1;
            for (var n = 0; n < Vb.length; ++n)
                if (a[Vb[n]]) {
                    if (h) {
                        a = !1;
                        break a
                    }
                    parseFloat(a[Vb[n]]) !== t(a[Vb[n]]) && (h = !0)
                } a = !0
        }
        this._isValid = a;
        this._milliseconds = +q + 1E3 * l + 6E4 * k + 36E5 * g;
        this._days = +f + 7 * c;
        this._months = +d + 3 * b + 12 * e;
        this._data = {};
        this._locale =
            aa();
        this._bubble()
    }

    function Cb(e) {
        return e instanceof Bb
    }

    function kb(e) {
        return 0 > e ? -1 * Math.round(-1 * e) : Math.round(e)
    }

    function Wb(e, a) {
        w(e, 0, 0, function() {
            var e = this.utcOffset(),
                b = "+";
            return 0 > e && (e = -e, b = "-"), b + T(~~(e / 60), 2) + a + T(~~e % 60, 2)
        })
    }

    function lb(e, a) {
        var b = (a || "").match(e);
        if (null === b) return null;
        b = ((b[b.length - 1] || []) + "").match(Sd) || ["-", 0, 0];
        var p = 60 * b[1] + t(b[2]);
        return 0 === p ? 0 : "+" === b[0] ? p : -p
    }

    function Xb(e, a) {
        var b, p;
        return a._isUTC ? (b = a.clone(), p = (A(e) || g(e) ? e.valueOf() : O(e).valueOf()) -
            b.valueOf(), b._d.setTime(b._d.valueOf() + p), h.updateOffset(b, !1), b) : O(e).local()
    }

    function mb(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }

    function Yb() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }

    function na(e, a) {
        var p, d = e,
            c;
        if (Cb(e)) d = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        };
        else if (b(e)) d = {}, a ? d[a] = e : d.milliseconds = e;
        else if (c = Td.exec(e)) {
            var g = "-" === c[1] ? -1 : 1;
            d = {
                y: 0,
                d: t(c[Ka]) * g,
                h: t(c[Y]) * g,
                m: t(c[Ca]) * g,
                s: t(c[Xa]) * g,
                ms: t(kb(1E3 * c[jb])) * g
            }
        } else if (c = Ud.exec(e)) g = "-" === c[1] ? -1 :
            1, d = {
                y: La(c[2], g),
                M: La(c[3], g),
                w: La(c[4], g),
                d: La(c[5], g),
                h: La(c[6], g),
                m: La(c[7], g),
                s: La(c[8], g)
            };
        else if (null == d) d = {};
        else if ("object" == typeof d && ("from" in d || "to" in d)) {
            var k;
            c = O(d.from);
            var l = O(d.to);
            c.isValid() && l.isValid() ? (l = Xb(l, c), c.isBefore(l) ? k = Zb(c, l) : ((k = Zb(l, c)).milliseconds = -k.milliseconds, k.months = -k.months)) : k = {
                milliseconds: 0,
                months: 0
            };
            g = k;
            (d = {}).ms = g.milliseconds;
            d.M = g.months
        }
        return p = new Bb(d), Cb(e) && f(e, "_locale") && (p._locale = e._locale), p
    }

    function La(e, a) {
        var b = e && parseFloat(e.replace(",",
            "."));
        return (isNaN(b) ? 0 : b) * a
    }

    function Zb(e, a) {
        var b = {};
        return b.months = a.month() - e.month() + 12 * (a.year() - e.year()), e.clone().add(b.months, "M").isAfter(a) && --b.months, b.milliseconds = +a - +e.clone().add(b.months, "M"), b
    }

    function $b(e, a) {
        return function(b, p) {
            var d;
            return null === p || isNaN(+p) || (S(a, "moment()." + a + "(period, number) is deprecated. Please use moment()." + a + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), d = b, b = p, p = d), nb(this, na("string" == typeof b ?
                +b : b, p), e), this
        }
    }

    function nb(e, a, b, d) {
        var p = a._milliseconds,
            c = kb(a._days);
        a = kb(a._months);
        e.isValid() && (d = null == d || d, a && Ia(e, V(e, "Month") + a * b), c && M(e, "Date", V(e, "Date") + c * b), p && e._d.setTime(e._d.valueOf() + p * b), d && h.updateOffset(e, c || a))
    }

    function ac(e, a) {
        var b = 12 * (a.year() - e.year()) + (a.month() - e.month()),
            d = e.clone().add(b, "months");
        return -(b + (0 > a - d ? (a - d) / (d - e.clone().add(b - 1, "months")) : (a - d) / (e.clone().add(b + 1, "months") - d))) || 0
    }

    function Db(e) {
        var a;
        return void 0 === e ? this._locale._abbr : (null != (a = aa(e)) &&
            (this._locale = a), this)
    }

    function nc() {
        return this._locale
    }

    function Da(e, a) {
        return (e % a + a) % a
    }

    function Eb(e, a, b) {
        return 100 > e && 0 <= e ? new Date(e + 400, a, b) - 126227808E5 : (new Date(e, a, b)).valueOf()
    }

    function ob(e, a, b) {
        return 100 > e && 0 <= e ? Date.UTC(e + 400, a, b) - 126227808E5 : Date.UTC(e, a, b)
    }

    function Fb(e, a) {
        w(0, [e, e.length], 0, a)
    }

    function bc(e, a, b, d, c) {
        var p;
        null == e ? e = Ua(this, d, c).year : ((p = Va(e, d, c)) < a && (a = p), e = wb(e, a, b, d, c), e = bb(e.year, 0, e.dayOfYear), e = (this.year(e.getUTCFullYear()), this.month(e.getUTCMonth()), this.date(e.getUTCDate()),
            this));
        return e
    }

    function Cc(e, a) {
        a[jb] = t(1E3 * ("0." + e))
    }

    function oc(e) {
        return e
    }

    function pb(e, a, b, d) {
        var p = aa();
        a = l().set(d, a);
        return p[b](a, e)
    }

    function qb(e, a, d) {
        if (b(e) && (a = e, e = void 0), e = e || "", null != a) return pb(e, a, d, "month");
        var p = [];
        for (a = 0; 12 > a; a++) p[a] = pb(e, a, d, "month");
        return p
    }

    function Gb(a, d, c, f) {
        d = ("boolean" == typeof a ? b(d) && (c = d, d = void 0) : (d = a, a = !1, b(c = d) && (c = d, d = void 0)), d || "");
        var e = aa();
        a = a ? e._week.dow : 0;
        if (null != c) return pb(d, (c + a) % 7, f, "day");
        e = [];
        for (c = 0; 7 > c; c++) e[c] = pb(d, (c + a) % 7, f,
            "day");
        return e
    }

    function pc(a, b, d, c) {
        b = na(b, d);
        return a._milliseconds += c * b._milliseconds, a._days += c * b._days, a._months += c * b._months, a._bubble()
    }

    function Hb(a) {
        return 0 > a ? Math.floor(a) : Math.ceil(a)
    }

    function Ea(a) {
        return function() {
            return this.as(a)
        }
    }

    function Za(a) {
        return function() {
            return this.isValid() ? this._data[a] : NaN
        }
    }

    function cb(a) {
        return (0 < a) - (0 > a) || +a
    }

    function Ib() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var a, b = Dc(this._milliseconds) / 1E3,
            d = Dc(this._days),
            c = Dc(this._months);
        var f = E((a = E(b / 60)) / 60);
        b %= 60;
        a %= 60;
        var g = E(c / 12);
        c %= 12;
        b = b ? b.toFixed(3).replace(/\.?0+$/, "") : "";
        var k = this.asSeconds();
        if (!k) return "P0D";
        var l = 0 > k ? "-" : "",
            q = cb(this._months) !== cb(k) ? "-" : "",
            h = cb(this._days) !== cb(k) ? "-" : "";
        k = cb(this._milliseconds) !== cb(k) ? "-" : "";
        return l + "P" + (g ? q + g + "Y" : "") + (c ? q + c + "M" : "") + (d ? h + d + "D" : "") + (f || a || b ? "T" : "") + (f ? k + f + "H" : "") + (a ? k + a + "M" : "") + (b ? k + b + "S" : "")
    }

    function sa(a, b, d) {
        var e, c;
        return "m" === d ? b ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443" :
            "h" === d ? b ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443" : a + " " + (e = +a, c = {
                    ss: b ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",
                    mm: b ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",
                    hh: b ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",
                    dd: "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",
                    MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",
                    yy: "\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e"
                } [d].split("_"),
                1 == e % 10 && 11 != e % 100 ? c[0] : 2 <= e % 10 && 4 >= e % 10 && (10 > e % 100 || 20 <= e % 100) ? c[1] : c[2])
    }

    function cc(a, b, d) {
        var e, c;
        return a + " " + (e = {
            mm: "munutenn",
            MM: "miz",
            dd: "devezh"
        } [d], 2 !== a ? e : void 0 !== (c = {
            m: "v",
            b: "v",
            d: "z"
        })[e.charAt(0)] ? c[e.charAt(0)] + e.substring(1) : e)
    }

    function Ma(a, b, d) {
        var e = a + " ";
        switch (d) {
            case "ss":
                return e + (1 === a ? "sekunda" : 2 === a || 3 === a || 4 === a ? "sekunde" : "sekundi");
            case "m":
                return b ? "jedna minuta" : "jedne minute";
            case "mm":
                return e + (1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta");
            case "h":
                return b ?
                    "jedan sat" : "jednog sata";
            case "hh":
                return e + (1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati");
            case "dd":
                return e + (1 === a ? "dan" : "dana");
            case "MM":
                return e + (1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci");
            case "yy":
                return e + (1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina")
        }
    }

    function db(a) {
        return 1 < a && 5 > a && 1 != ~~(a / 10)
    }

    function fa(a, b, d, c) {
        var e = a + " ";
        switch (d) {
            case "s":
                return b || c ? "p\u00e1r sekund" : "p\u00e1r sekundami";
            case "ss":
                return b || c ? e + (db(a) ? "sekundy" : "sekund") : e + "sekundami";
            case "m":
                return b ?
                    "minuta" : c ? "minutu" : "minutou";
            case "mm":
                return b || c ? e + (db(a) ? "minuty" : "minut") : e + "minutami";
            case "h":
                return b ? "hodina" : c ? "hodinu" : "hodinou";
            case "hh":
                return b || c ? e + (db(a) ? "hodiny" : "hodin") : e + "hodinami";
            case "d":
                return b || c ? "den" : "dnem";
            case "dd":
                return b || c ? e + (db(a) ? "dny" : "dn\u00ed") : e + "dny";
            case "M":
                return b || c ? "m\u011bs\u00edc" : "m\u011bs\u00edcem";
            case "MM":
                return b || c ? e + (db(a) ? "m\u011bs\u00edce" : "m\u011bs\u00edc\u016f") : e + "m\u011bs\u00edci";
            case "y":
                return b || c ? "rok" : "rokem";
            case "yy":
                return b ||
                    c ? e + (db(a) ? "roky" : "let") : e + "lety"
        }
    }

    function Fa(a, b, d, c) {
        a = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [a + " Tage", a + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [a + " Monate", a + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [a + " Jahre", a + " Jahren"]
        };
        return b ? a[d][0] : a[d][1]
    }

    function oa(a, b, d, c) {
        a = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [a + " Tage", a + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [a + " Monate",
                a + " Monaten"
            ],
            y: ["ein Jahr", "einem Jahr"],
            yy: [a + " Jahre", a + " Jahren"]
        };
        return b ? a[d][0] : a[d][1]
    }

    function Na(a, b, d, c) {
        a = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [a + " Tage", a + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [a + " Monate", a + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [a + " Jahre", a + " Jahren"]
        };
        return b ? a[d][0] : a[d][1]
    }

    function pa(a, b, d, c) {
        a = {
            s: ["m\u00f5ne sekundi", "m\u00f5ni sekund", "paar sekundit"],
            ss: [a + "sekundi", a + "sekundit"],
            m: ["\u00fche minuti",
                "\u00fcks minut"
            ],
            mm: [a + " minuti", a + " minutit"],
            h: ["\u00fche tunni", "tund aega", "\u00fcks tund"],
            hh: [a + " tunni", a + " tundi"],
            d: ["\u00fche p\u00e4eva", "\u00fcks p\u00e4ev"],
            M: ["kuu aja", "kuu aega", "\u00fcks kuu"],
            MM: [a + " kuu", a + " kuud"],
            y: ["\u00fche aasta", "aasta", "\u00fcks aasta"],
            yy: [a + " aasta", a + " aastat"]
        };
        return b ? a[d][2] ? a[d][2] : a[d][1] : c ? a[d][0] : a[d][1]
    }

    function ja(a, b, d, c) {
        b = "";
        switch (d) {
            case "s":
                return c ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
                return c ? "sekunnin" : "sekuntia";
            case "m":
                return c ?
                    "minuutin" : "minuutti";
            case "mm":
                b = c ? "minuutin" : "minuuttia";
                break;
            case "h":
                return c ? "tunnin" : "tunti";
            case "hh":
                b = c ? "tunnin" : "tuntia";
                break;
            case "d":
                return c ? "p\u00e4iv\u00e4n" : "p\u00e4iv\u00e4";
            case "dd":
                b = c ? "p\u00e4iv\u00e4n" : "p\u00e4iv\u00e4\u00e4";
                break;
            case "M":
                return c ? "kuukauden" : "kuukausi";
            case "MM":
                b = c ? "kuukauden" : "kuukautta";
                break;
            case "y":
                return c ? "vuoden" : "vuosi";
            case "yy":
                b = c ? "vuoden" : "vuotta"
        }
        return (10 > a ? c ? Vd[a] : qc[a] : a) + " " + b
    }

    function ba(a, b, d, c) {
        a = {
            s: ["thodde secondanim", "thodde second"],
            ss: [a + " secondanim", a + " second"],
            m: ["eka mintan", "ek minute"],
            mm: [a + " mintanim", a + " mintam"],
            h: ["eka voran", "ek vor"],
            hh: [a + " voranim", a + " voram"],
            d: ["eka disan", "ek dis"],
            dd: [a + " disanim", a + " dis"],
            M: ["eka mhoinean", "ek mhoino"],
            MM: [a + " mhoineanim", a + " mhoine"],
            y: ["eka vorsan", "ek voros"],
            yy: [a + " vorsanim", a + " vorsam"]
        };
        return b ? a[d][0] : a[d][1]
    }

    function Oa(a, b, d) {
        var e = a + " ";
        switch (d) {
            case "ss":
                return e + (1 === a ? "sekunda" : 2 === a || 3 === a || 4 === a ? "sekunde" : "sekundi");
            case "m":
                return b ? "jedna minuta" : "jedne minute";
            case "mm":
                return e + (1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta");
            case "h":
                return b ? "jedan sat" : "jednog sata";
            case "hh":
                return e + (1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati");
            case "dd":
                return e + (1 === a ? "dan" : "dana");
            case "MM":
                return e + (1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci");
            case "yy":
                return e + (1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina")
        }
    }

    function K(a, b, d, c) {
        switch (d) {
            case "s":
                return c || b ? "n\u00e9h\u00e1ny m\u00e1sodperc" : "n\u00e9h\u00e1ny m\u00e1sodperce";
            case "ss":
                return a +
                    (c || b) ? " m\u00e1sodperc" : " m\u00e1sodperce";
            case "m":
                return "egy" + (c || b ? " perc" : " perce");
            case "mm":
                return a + (c || b ? " perc" : " perce");
            case "h":
                return "egy" + (c || b ? " \u00f3ra" : " \u00f3r\u00e1ja");
            case "hh":
                return a + (c || b ? " \u00f3ra" : " \u00f3r\u00e1ja");
            case "d":
                return "egy" + (c || b ? " nap" : " napja");
            case "dd":
                return a + (c || b ? " nap" : " napja");
            case "M":
                return "egy" + (c || b ? " h\u00f3nap" : " h\u00f3napja");
            case "MM":
                return a + (c || b ? " h\u00f3nap" : " h\u00f3napja");
            case "y":
                return "egy" + (c || b ? " \u00e9v" : " \u00e9ve");
            case "yy":
                return a +
                    (c || b ? " \u00e9v" : " \u00e9ve")
        }
        return ""
    }

    function $a(a) {
        return 11 == a % 100 || 1 != a % 10
    }

    function Ga(a, b, d, c) {
        var e = a + " ";
        switch (d) {
            case "s":
                return b || c ? "nokkrar sek\u00fandur" : "nokkrum sek\u00fandum";
            case "ss":
                return $a(a) ? e + (b || c ? "sek\u00fandur" : "sek\u00fandum") : e + "sek\u00fanda";
            case "m":
                return b ? "m\u00edn\u00fata" : "m\u00edn\u00fatu";
            case "mm":
                return $a(a) ? e + (b || c ? "m\u00edn\u00fatur" : "m\u00edn\u00fatum") : b ? e + "m\u00edn\u00fata" : e + "m\u00edn\u00fatu";
            case "hh":
                return $a(a) ? e + (b || c ? "klukkustundir" : "klukkustundum") :
                    e + "klukkustund";
            case "d":
                return b ? "dagur" : c ? "dag" : "degi";
            case "dd":
                return $a(a) ? b ? e + "dagar" : e + (c ? "daga" : "d\u00f6gum") : b ? e + "dagur" : e + (c ? "dag" : "degi");
            case "M":
                return b ? "m\u00e1nu\u00f0ur" : c ? "m\u00e1nu\u00f0" : "m\u00e1nu\u00f0i";
            case "MM":
                return $a(a) ? b ? e + "m\u00e1nu\u00f0ir" : e + (c ? "m\u00e1nu\u00f0i" : "m\u00e1nu\u00f0um") : b ? e + "m\u00e1nu\u00f0ur" : e + (c ? "m\u00e1nu\u00f0" : "m\u00e1nu\u00f0i");
            case "y":
                return b || c ? "\u00e1r" : "\u00e1ri";
            case "yy":
                return $a(a) ? e + (b || c ? "\u00e1r" : "\u00e1rum") : e + (b || c ? "\u00e1r" : "\u00e1ri")
        }
    }

    function dc(a, b, d, c) {
        a = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"]
        };
        return b ? a[d][0] : a[d][1]
    }

    function ec(a) {
        if (a = parseInt(a, 10), isNaN(a)) return !1;
        if (0 > a) return !0;
        if (10 > a) return 4 <= a && 7 >= a;
        if (100 > a) {
            var e = a % 10;
            return ec(0 === e ? a / 10 : e)
        }
        if (1E4 > a) {
            for (; 10 <= a;) a /= 10;
            return ec(a)
        }
        return ec(a / 1E3)
    }

    function Jb(a, b, d, c) {
        return b ? eb(d)[0] : c ? eb(d)[1] : eb(d)[2]
    }

    function eb(a) {
        return Wd[a].split("_")
    }

    function Ha(a,
        b, d, c) {
        var e = a + " ";
        return 1 === a ? e + Jb(0, b, d[0], c) : b ? e + (0 == a % 10 || 10 < a && 20 > a ? eb(d)[1] : eb(d)[0]) : c ? e + eb(d)[1] : e + (0 == a % 10 || 10 < a && 20 > a ? eb(d)[1] : eb(d)[2])
    }

    function ad(a, b, d) {
        return d ? 1 == b % 10 && 11 != b % 100 ? a[2] : a[3] : 1 == b % 10 && 11 != b % 100 ? a[0] : a[1]
    }

    function Kb(a, b, d) {
        return a + " " + ad(bd[d], a, b)
    }

    function fc(a, b, d) {
        return ad(bd[d], a, b)
    }

    function ta(a, b, d, c) {
        switch (d) {
            case "s":
                return b ? "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434" : "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d";
            case "ss":
                return a + (b ? " \u0441\u0435\u043a\u0443\u043d\u0434" : " \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d");
            case "m":
            case "mm":
                return a + (b ? " \u043c\u0438\u043d\u0443\u0442" : " \u043c\u0438\u043d\u0443\u0442\u044b\u043d");
            case "h":
            case "hh":
                return a + (b ? " \u0446\u0430\u0433" : " \u0446\u0430\u0433\u0438\u0439\u043d");
            case "d":
            case "dd":
                return a + (b ? " \u04e9\u0434\u04e9\u0440" : " \u04e9\u0434\u0440\u0438\u0439\u043d");
            case "M":
            case "MM":
                return a + (b ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044b\u043d");
            case "y":
            case "yy":
                return a + (b ? " \u0436\u0438\u043b" : " \u0436\u0438\u043b\u0438\u0439\u043d");
            default:
                return a
        }
    }

    function ua(a, b, d, c) {
        c = "";
        if (b) switch (d) {
            case "s":
                c = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";
                break;
            case "ss":
                c = "%d \u0938\u0947\u0915\u0902\u0926";
                break;
            case "m":
                c = "\u090f\u0915 \u092e\u093f\u0928\u093f\u091f";
                break;
            case "mm":
                c = "%d \u092e\u093f\u0928\u093f\u091f\u0947";
                break;
            case "h":
                c = "\u090f\u0915 \u0924\u093e\u0938";
                break;
            case "hh":
                c = "%d \u0924\u093e\u0938";
                break;
            case "d":
                c =
                    "\u090f\u0915 \u0926\u093f\u0935\u0938";
                break;
            case "dd":
                c = "%d \u0926\u093f\u0935\u0938";
                break;
            case "M":
                c = "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e";
                break;
            case "MM":
                c = "%d \u092e\u0939\u093f\u0928\u0947";
                break;
            case "y":
                c = "\u090f\u0915 \u0935\u0930\u094d\u0937";
                break;
            case "yy":
                c = "%d \u0935\u0930\u094d\u0937\u0947"
        } else switch (d) {
            case "s":
                c = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                break;
            case "ss":
                c = "%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                break;
            case "m":
                c = "\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e";
                break;
            case "mm":
                c = "%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902";
                break;
            case "h":
                c = "\u090f\u0915\u093e \u0924\u093e\u0938\u093e";
                break;
            case "hh":
                c = "%d \u0924\u093e\u0938\u093e\u0902";
                break;
            case "d":
                c = "\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e";
                break;
            case "dd":
                c = "%d \u0926\u093f\u0935\u0938\u093e\u0902";
                break;
            case "M":
                c = "\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e";
                break;
            case "MM":
                c = "%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902";
                break;
            case "y":
                c = "\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e";
                break;
            case "yy":
                c = "%d \u0935\u0930\u094d\u0937\u093e\u0902"
        }
        return c.replace(/%d/i, a)
    }

    function gc(a) {
        return 5 > a % 10 && 1 < a % 10 && 1 != ~~(a / 10) % 10
    }

    function rb(a, b, d) {
        var e = a + " ";
        switch (d) {
            case "ss":
                return e + (gc(a) ? "sekundy" : "sekund");
            case "m":
                return b ? "minuta" : "minut\u0119";
            case "mm":
                return e + (gc(a) ? "minuty" : "minut");
            case "h":
                return b ? "godzina" : "godzin\u0119";
            case "hh":
                return e + (gc(a) ? "godziny" : "godzin");
            case "MM":
                return e + (gc(a) ? "miesi\u0105ce" : "miesi\u0119cy");
            case "yy":
                return e + (gc(a) ? "lata" : "lat")
        }
    }

    function Lb(a,
        b, d) {
        b = " ";
        return (20 <= a % 100 || 100 <= a && 0 == a % 100) && (b = " de "), a + b + {
            ss: "secunde",
            mm: "minute",
            hh: "ore",
            dd: "zile",
            MM: "luni",
            yy: "ani"
        } [d]
    }

    function sb(a, b, d) {
        var e, c;
        return "m" === d ? b ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : a + " " + (e = +a, c = {
                ss: b ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",
                mm: b ? "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442" : "\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",
                hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",
                dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",
                MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",
                yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442"
            } [d].split("_"),
            1 == e % 10 && 11 != e % 100 ? c[0] : 2 <= e % 10 && 4 >= e % 10 && (10 > e % 100 || 20 <= e % 100) ? c[1] : c[2])
    }

    function va(a, b, d, c) {
        var e = a + " ";
        switch (d) {
            case "s":
                return b || c ? "p\u00e1r sek\u00fand" : "p\u00e1r sekundami";
            case "ss":
                return b || c ? e + (1 < a && 5 > a ? "sekundy" : "sek\u00fand") : e + "sekundami";
            case "m":
                return b ? "min\u00fata" : c ? "min\u00fatu" : "min\u00fatou";
            case "mm":
                return b || c ? e + (1 < a && 5 > a ? "min\u00faty" : "min\u00fat") : e + "min\u00fatami";
            case "h":
                return b ? "hodina" : c ? "hodinu" : "hodinou";
            case "hh":
                return b || c ? e + (1 < a && 5 > a ? "hodiny" : "hod\u00edn") :
                    e + "hodinami";
            case "d":
                return b || c ? "de\u0148" : "d\u0148om";
            case "dd":
                return b || c ? e + (1 < a && 5 > a ? "dni" : "dn\u00ed") : e + "d\u0148ami";
            case "M":
                return b || c ? "mesiac" : "mesiacom";
            case "MM":
                return b || c ? e + (1 < a && 5 > a ? "mesiace" : "mesiacov") : e + "mesiacmi";
            case "y":
                return b || c ? "rok" : "rokom";
            case "yy":
                return b || c ? e + (1 < a && 5 > a ? "roky" : "rokov") : e + "rokmi"
        }
    }

    function wa(a, b, d, c) {
        var e = a + " ";
        switch (d) {
            case "s":
                return b || c ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
                return e + (1 === a ? b ? "sekundo" : "sekundi" : 2 === a ? b || c ? "sekundi" : "sekundah" :
                    5 > a ? b || c ? "sekunde" : "sekundah" : "sekund");
            case "m":
                return b ? "ena minuta" : "eno minuto";
            case "mm":
                return e + (1 === a ? b ? "minuta" : "minuto" : 2 === a ? b || c ? "minuti" : "minutama" : 5 > a ? b || c ? "minute" : "minutami" : b || c ? "minut" : "minutami");
            case "h":
                return b ? "ena ura" : "eno uro";
            case "hh":
                return e + (1 === a ? b ? "ura" : "uro" : 2 === a ? b || c ? "uri" : "urama" : 5 > a ? b || c ? "ure" : "urami" : b || c ? "ur" : "urami");
            case "d":
                return b || c ? "en dan" : "enim dnem";
            case "dd":
                return e + (1 === a ? b || c ? "dan" : "dnem" : 2 === a ? b || c ? "dni" : "dnevoma" : b || c ? "dni" : "dnevi");
            case "M":
                return b ||
                    c ? "en mesec" : "enim mesecem";
            case "MM":
                return e + (1 === a ? b || c ? "mesec" : "mesecem" : 2 === a ? b || c ? "meseca" : "mesecema" : 5 > a ? b || c ? "mesece" : "meseci" : b || c ? "mesecev" : "meseci");
            case "y":
                return b || c ? "eno leto" : "enim letom";
            case "yy":
                return e + (1 === a ? b || c ? "leto" : "letom" : 2 === a ? b || c ? "leti" : "letoma" : 5 > a ? b || c ? "leta" : "leti" : b || c ? "let" : "leti")
        }
    }

    function Mb(a, b, d, c) {
        b = Math.floor(a % 1E3 / 100);
        c = Math.floor(a % 100 / 10);
        a %= 10;
        var e = "";
        0 < b && (e += Ec[b] + "vatlh");
        0 < c && (e += ("" !== e ? " " : "") + Ec[c] + "maH");
        0 < a && (e += ("" !== e ? " " : "") + Ec[a]);
        a = "" ===
            e ? "pagh" : e;
        switch (d) {
            case "ss":
                return a + " lup";
            case "mm":
                return a + " tup";
            case "hh":
                return a + " rep";
            case "dd":
                return a + " jaj";
            case "MM":
                return a + " jar";
            case "yy":
                return a + " DIS"
        }
    }

    function xa(a, b, c, d) {
        a = {
            s: ["viensas secunds", "'iensas secunds"],
            ss: [a + " secunds", a + " secunds"],
            m: ["'n m\u00edut", "'iens m\u00edut"],
            mm: [a + " m\u00eduts", a + " m\u00eduts"],
            h: ["'n \u00feora", "'iensa \u00feora"],
            hh: [a + " \u00feoras", a + " \u00feoras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [a + " ziuas", a + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [a + " mesen", a + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [a + " ars", a + " ars"]
        };
        return d ? a[c][0] : b ? a[c][0] : a[c][1]
    }

    function tb(a, b, c) {
        var e, d;
        return "m" === c ? b ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443" : "h" === c ? b ? "\u0433\u043e\u0434\u0438\u043d\u0430" : "\u0433\u043e\u0434\u0438\u043d\u0443" : a + " " + (e = +a, d = {
            ss: b ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434",
            mm: b ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",
            hh: b ? "\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d" : "\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d",
            dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432",
            MM: "\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432",
            yy: "\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432"
        } [c].split("_"), 1 == e % 10 && 11 != e % 100 ? d[0] : 2 <= e % 10 && 4 >= e % 10 && (10 > e % 100 || 20 <= e % 100) ? d[1] : d[2])
    }

    function Nb(a) {
        return function() {
            return a + "\u043e" + (11 === this.hours() ? "\u0431" : "") + "] LT"
        }
    }
    var Jd = Array.prototype.some ? Array.prototype.some : function(a) {
        for (var e = Object(this), b = e.length >>> 0, c = 0; c < b; c++)
            if (c in
                e && a.call(this, e[c], c, e)) return !0;
        return !1
    };
    var wc = h.momentProperties = [],
        xc = !1,
        Wc = {};
    h.suppressDeprecationWarnings = !1;
    h.deprecationHandler = null;
    var Xd = Object.keys ? Object.keys : function(a) {
        var e, b = [];
        for (e in a) f(a, e) && b.push(e);
        return b
    };
    var Ob = {},
        ca = {},
        Xc = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        jc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        yc = {},
        ub = {},
        cd =
        /\d/,
        qa = /\d\d/,
        dd = /\d{3}/,
        Fc = /\d{4}/,
        rc = /[+-]?\d{6}/,
        Q = /\d\d?/,
        ed = /\d\d\d\d?/,
        fd = /\d\d\d\d\d\d?/,
        sc = /\d{1,3}/,
        Gc = /\d{1,4}/,
        tc = /[+-]?\d{1,6}/,
        Yd = /\d+/,
        uc = /[+-]?\d+/,
        Zd = /Z|[+-]\d\d:?\d\d/gi,
        vc = /Z|[+-]\d\d(?::?\d\d)?/gi,
        hc = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        zc = {},
        Ac = {},
        Ba = 0,
        Wa = 1,
        Ka = 2,
        Y = 3,
        Ca = 4,
        Xa = 5,
        jb = 6,
        Kd = 7,
        Ld = 8;
    w("Y", 0, 0, function() {
        var a = this.year();
        return 9999 >= a ? "" + a : "+" + a
    });
    w(0, ["YY",
        2
    ], 0, function() {
        return this.year() % 100
    });
    w(0, ["YYYY", 4], 0, "year");
    w(0, ["YYYYY", 5], 0, "year");
    w(0, ["YYYYYY", 6, !0], 0, "year");
    H("year", "y");
    ca.year = 1;
    v("Y", uc);
    v("YY", Q, qa);
    v("YYYY", Gc, Fc);
    v("YYYYY", tc, rc);
    v("YYYYYY", tc, rc);
    J(["YYYYY", "YYYYYY"], Ba);
    J("YYYY", function(a, b) {
        b[Ba] = 2 === a.length ? h.parseTwoDigitYear(a) : t(a)
    });
    J("YY", function(a, b) {
        b[Ba] = h.parseTwoDigitYear(a)
    });
    J("Y", function(a, b) {
        b[Ba] = parseInt(a, 10)
    });
    h.parseTwoDigitYear = function(a) {
        return t(a) + (68 < t(a) ? 1900 : 2E3)
    };
    var gd = ka("FullYear", !0);
    var Z = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
        var e;
        for (e = 0; e < this.length; ++e)
            if (this[e] === a) return e;
        return -1
    };
    w("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    });
    w("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a)
    });
    w("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a)
    });
    H("month", "M");
    ca.month = 8;
    v("M", Q);
    v("MM", Q, qa);
    v("MMM", function(a, b) {
        return b.monthsShortRegex(a)
    });
    v("MMMM", function(a, b) {
        return b.monthsRegex(a)
    });
    J(["M", "MM"], function(a, b) {
        b[Wa] =
            t(a) - 1
    });
    J(["MMM", "MMMM"], function(a, b, c, d) {
        d = c._locale.monthsParse(a, d, c._strict);
        null != d ? b[Wa] = d : q(c).invalidMonth = a
    });
    var hd = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Zc = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
    w("w", ["ww", 2], "wo", "week");
    w("W", ["WW", 2], "Wo", "isoWeek");
    H("week", "w");
    H("isoWeek", "W");
    ca.week = 5;
    ca.isoWeek = 5;
    v("w", Q);
    v("ww", Q, qa);
    v("W", Q);
    v("WW", Q, qa);
    U(["w", "ww", "W", "WW"], function(a, b, c, d) {
        b[d.substr(0, 1)] = t(a)
    });
    w("d", 0, "do", "day");
    w("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this,
            a)
    });
    w("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a)
    });
    w("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a)
    });
    w("e", 0, 0, "weekday");
    w("E", 0, 0, "isoWeekday");
    H("day", "d");
    H("weekday", "e");
    H("isoWeekday", "E");
    ca.day = 11;
    ca.weekday = 11;
    ca.isoWeekday = 11;
    v("d", Q);
    v("e", Q);
    v("E", Q);
    v("dd", function(a, b) {
        return b.weekdaysMinRegex(a)
    });
    v("ddd", function(a, b) {
        return b.weekdaysShortRegex(a)
    });
    v("dddd", function(a, b) {
        return b.weekdaysRegex(a)
    });
    U(["dd", "ddd", "dddd"], function(a,
        b, c, d) {
        d = c._locale.weekdaysParse(a, d, c._strict);
        null != d ? b.d = d : q(c).invalidWeekday = a
    });
    U(["d", "e", "E"], function(a, b, c, d) {
        b[d] = t(a)
    });
    var $c = "Sun Mon Tue Wed Thu Fri Sat".split(" ");
    w("H", ["HH", 2], 0, "hour");
    w("h", ["hh", 2], 0, Qb);
    w("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    });
    w("hmm", 0, 0, function() {
        return "" + Qb.apply(this) + T(this.minutes(), 2)
    });
    w("hmmss", 0, 0, function() {
        return "" + Qb.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2)
    });
    w("Hmm", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(),
            2)
    });
    w("Hmmss", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
    });
    D("a", !0);
    D("A", !1);
    H("hour", "h");
    ca.hour = 13;
    v("a", kc);
    v("A", kc);
    v("H", Q);
    v("h", Q);
    v("k", Q);
    v("HH", Q, qa);
    v("hh", Q, qa);
    v("kk", Q, qa);
    v("hmm", ed);
    v("hmmss", fd);
    v("Hmm", ed);
    v("Hmmss", fd);
    J(["H", "HH"], Y);
    J(["k", "kk"], function(a, b, c) {
        a = t(a);
        b[Y] = 24 === a ? 0 : a
    });
    J(["a", "A"], function(a, b, c) {
        c._isPm = c._locale.isPM(a);
        c._meridiem = a
    });
    J(["h", "hh"], function(a, b, c) {
        b[Y] = t(a);
        q(c).bigHour = !0
    });
    J("hmm", function(a, b, c) {
        var e =
            a.length - 2;
        b[Y] = t(a.substr(0, e));
        b[Ca] = t(a.substr(e));
        q(c).bigHour = !0
    });
    J("hmmss", function(a, b, c) {
        var e = a.length - 4,
            d = a.length - 2;
        b[Y] = t(a.substr(0, e));
        b[Ca] = t(a.substr(e, 2));
        b[Xa] = t(a.substr(d));
        q(c).bigHour = !0
    });
    J("Hmm", function(a, b, c) {
        c = a.length - 2;
        b[Y] = t(a.substr(0, c));
        b[Ca] = t(a.substr(c))
    });
    J("Hmmss", function(a, b, c) {
        c = a.length - 4;
        var e = a.length - 2;
        b[Y] = t(a.substr(0, c));
        b[Ca] = t(a.substr(c, 2));
        b[Xa] = t(a.substr(e))
    });
    var Rb, $d = ka("Hours", !0),
        Yc = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: "January February March April May June July August September October November December".split(" "),
            monthsShort: Zc,
            week: {
                dow: 0,
                doy: 6
            },
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
            weekdaysShort: $c,
            meridiemParse: /[ap]\.?m?\.?/i
        },
        W = {},
        Sb = {},
        Md = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Nd = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Od = /Z|[+-]\d\d(?::?\d\d)?/,
        lc = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Bc = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS",
                /\d\d\d\d\d\d\.\d+/
            ],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Rd = /^\/?Date\((\-?\d+)/i,
        Pd = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        Qd = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480
        };
    h.createFromInputFallback = G("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function(a) {
            a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
        });
    h.ISO_8601 = function() {};
    h.RFC_2822 = function() {};
    var ae = G("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var a = O.apply(null, arguments);
            return this.isValid() && a.isValid() ? a < this ? this : a : n()
        }),
        be = G("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var a = O.apply(null, arguments);
            return this.isValid() && a.isValid() ? this < a ? this :
                a : n()
        }),
        Vb = "year quarter month week day hour minute second millisecond".split(" ");
    Wb("Z", ":");
    Wb("ZZ", "");
    v("Z", vc);
    v("ZZ", vc);
    J(["Z", "ZZ"], function(a, b, c) {
        c._useUTC = !0;
        c._tzm = lb(vc, a)
    });
    var Sd = /([\+\-]|\d\d)/gi;
    h.updateOffset = function() {};
    var Td = /^(\-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        Ud = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    na.fn = Bb.prototype;
    na.invalid =
        function() {
            return na(NaN)
        };
    var ce = $b(1, "add"),
        de = $b(-1, "subtract");
    h.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    h.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var id = G("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    w(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    });
    w(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    });
    Fb("gggg", "weekYear");
    Fb("ggggg", "weekYear");
    Fb("GGGG", "isoWeekYear");
    Fb("GGGGG", "isoWeekYear");
    H("weekYear", "gg");
    H("isoWeekYear", "GG");
    ca.weekYear = 1;
    ca.isoWeekYear = 1;
    v("G", uc);
    v("g", uc);
    v("GG", Q, qa);
    v("gg", Q, qa);
    v("GGGG", Gc, Fc);
    v("gggg", Gc, Fc);
    v("GGGGG", tc, rc);
    v("ggggg", tc, rc);
    U(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
        b[d.substr(0, 2)] = t(a)
    });
    U(["gg", "GG"], function(a, b, c, d) {
        b[d] = h.parseTwoDigitYear(a)
    });
    w("Q", 0, "Qo", "quarter");
    H("quarter", "Q");
    ca.quarter = 7;
    v("Q", cd);
    J("Q", function(a, b) {
        b[Wa] = 3 * (t(a) - 1)
    });
    w("D",
        ["DD", 2], "Do", "date");
    H("date", "D");
    ca.date = 9;
    v("D", Q);
    v("DD", Q, qa);
    v("Do", function(a, b) {
        return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient
    });
    J(["D", "DD"], Ka);
    J("Do", function(a, b) {
        b[Ka] = t(a.match(Q)[0])
    });
    var jd = ka("Date", !0);
    w("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    H("dayOfYear", "DDD");
    ca.dayOfYear = 4;
    v("DDD", sc);
    v("DDDD", dd);
    J(["DDD", "DDDD"], function(a, b, c) {
        c._dayOfYear = t(a)
    });
    w("m", ["mm", 2], 0, "minute");
    H("minute", "m");
    ca.minute = 14;
    v("m", Q);
    v("mm", Q, qa);
    J(["m", "mm"],
        Ca);
    var ee = ka("Minutes", !1);
    w("s", ["ss", 2], 0, "second");
    H("second", "s");
    ca.second = 15;
    v("s", Q);
    v("ss", Q, qa);
    J(["s", "ss"], Xa);
    var fb, fe = ka("Seconds", !1);
    w("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    });
    w(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    });
    w(0, ["SSS", 3], 0, "millisecond");
    w(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    });
    w(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    });
    w(0, ["SSSSSS", 6], 0, function() {
        return 1E3 * this.millisecond()
    });
    w(0, ["SSSSSSS", 7], 0, function() {
        return 1E4 *
            this.millisecond()
    });
    w(0, ["SSSSSSSS", 8], 0, function() {
        return 1E5 * this.millisecond()
    });
    w(0, ["SSSSSSSSS", 9], 0, function() {
        return 1E6 * this.millisecond()
    });
    H("millisecond", "ms");
    ca.millisecond = 16;
    v("S", sc, cd);
    v("SS", sc, qa);
    v("SSS", sc, dd);
    for (fb = "SSSS"; 9 >= fb.length; fb += "S") v(fb, Yd);
    for (fb = "S"; 9 >= fb.length; fb += "S") J(fb, Cc);
    var ge = ka("Milliseconds", !1);
    w("z", 0, 0, "zoneAbbr");
    w("zz", 0, 0, "zoneName");
    var u = x.prototype;
    u.add = ce;
    u.calendar = function(a, b) {
        var e = a || O(),
            c = Xb(e, this).startOf("day");
        c = h.calendarFormat(this,
            c) || "sameElse";
        var d = b && (L(b[c]) ? b[c].call(this, e) : b[c]);
        return this.format(d || this.localeData().calendar(c, this, O(e)))
    };
    u.clone = function() {
        return new x(this)
    };
    u.diff = function(a, b, c) {
        var e;
        if (!this.isValid() || !(e = Xb(a, this)).isValid()) return NaN;
        switch (a = 6E4 * (e.utcOffset() - this.utcOffset()), N(b)) {
            case "year":
                b = ac(this, e) / 12;
                break;
            case "month":
                b = ac(this, e);
                break;
            case "quarter":
                b = ac(this, e) / 3;
                break;
            case "second":
                b = (this - e) / 1E3;
                break;
            case "minute":
                b = (this - e) / 6E4;
                break;
            case "hour":
                b = (this - e) / 36E5;
                break;
            case "day":
                b = (this - e - a) / 864E5;
                break;
            case "week":
                b = (this - e - a) / 6048E5;
                break;
            default:
                b = this - e
        }
        return c ? b : E(b)
    };
    u.endOf = function(a) {
        if (void 0 === (a = N(a)) || "millisecond" === a || !this.isValid()) return this;
        var e = this._isUTC ? ob : Eb;
        switch (a) {
            case "year":
                var b = e(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                b = e(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case "month":
                b = e(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                b = e(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                b =
                    e(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                b = e(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                b = this._d.valueOf();
                b += 36E5 - Da(b + (this._isUTC ? 0 : 6E4 * this.utcOffset()), 36E5) - 1;
                break;
            case "minute":
                b = this._d.valueOf();
                b += 6E4 - Da(b, 6E4) - 1;
                break;
            case "second":
                b = this._d.valueOf(), b += 1E3 - Da(b, 1E3) - 1
        }
        return this._d.setTime(b), h.updateOffset(this, !0), this
    };
    u.format = function(a) {
        a || (a = this.isUtc() ? h.defaultFormatUtc : h.defaultFormat);
        a = ha(this, a);
        return this.localeData().postformat(a)
    };
    u.from = function(a, b) {
        return this.isValid() && (A(a) && a.isValid() || O(a).isValid()) ? na({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    };
    u.fromNow = function(a) {
        return this.from(O(), a)
    };
    u.to = function(a, b) {
        return this.isValid() && (A(a) && a.isValid() || O(a).isValid()) ? na({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    };
    u.toNow = function(a) {
        return this.to(O(), a)
    };
    u.get = function(a) {
        return L(this[a = N(a)]) ? this[a]() : this
    };
    u.invalidAt = function() {
        return q(this).overflow
    };
    u.isAfter = function(a, b) {
        var e = A(a) ? a : O(a);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (b = N(b) || "millisecond") ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(b).valueOf())
    };
    u.isBefore = function(a, b) {
        var e = A(a) ? a : O(a);
        return !(!this.isValid() || !e.isValid()) && ("millisecond" === (b = N(b) || "millisecond") ? this.valueOf() < e.valueOf() : this.clone().endOf(b).valueOf() < e.valueOf())
    };
    u.isBetween = function(a, b, c, d) {
        a = A(a) ? a : O(a);
        b = A(b) ? b : O(b);
        return !!(this.isValid() && a.isValid() && b.isValid()) &&
            ("(" === (d = d || "()")[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
    };
    u.isSame = function(a, b) {
        var e, c = A(a) ? a : O(a);
        return !(!this.isValid() || !c.isValid()) && ("millisecond" === (b = N(b) || "millisecond") ? this.valueOf() === c.valueOf() : (e = c.valueOf(), this.clone().startOf(b).valueOf() <= e && e <= this.clone().endOf(b).valueOf()))
    };
    u.isSameOrAfter = function(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b)
    };
    u.isSameOrBefore = function(a, b) {
        return this.isSame(a, b) || this.isBefore(a,
            b)
    };
    u.isValid = function() {
        return C(this)
    };
    u.lang = id;
    u.locale = Db;
    u.localeData = nc;
    u.max = be;
    u.min = ae;
    u.parsingFlags = function() {
        return k({}, q(this))
    };
    u.set = function(a, b) {
        if ("object" == typeof a)
            for (var e = function(a) {
                    var e = [],
                        b;
                    for (b in a) e.push({
                        unit: b,
                        priority: ca[b]
                    });
                    return e.sort(function(a, e) {
                        return a.priority - e.priority
                    }), e
                }(a = R(a)), c = 0; c < e.length; c++) this[e[c].unit](a[e[c].unit]);
        else if (L(this[a = N(a)])) return this[a](b);
        return this
    };
    u.startOf = function(a) {
        if (void 0 === (a = N(a)) || "millisecond" === a || !this.isValid()) return this;
        var e = this._isUTC ? ob : Eb;
        switch (a) {
            case "year":
                var b = e(this.year(), 0, 1);
                break;
            case "quarter":
                b = e(this.year(), this.month() - this.month() % 3, 1);
                break;
            case "month":
                b = e(this.year(), this.month(), 1);
                break;
            case "week":
                b = e(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                b = e(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                b = e(this.year(), this.month(), this.date());
                break;
            case "hour":
                b = this._d.valueOf();
                b -= Da(b + (this._isUTC ? 0 : 6E4 * this.utcOffset()),
                    36E5);
                break;
            case "minute":
                b = this._d.valueOf();
                b -= Da(b, 6E4);
                break;
            case "second":
                b = this._d.valueOf(), b -= Da(b, 1E3)
        }
        return this._d.setTime(b), h.updateOffset(this, !0), this
    };
    u.subtract = de;
    u.toArray = function() {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
    };
    u.toObject = function() {
        return {
            years: this.year(),
            months: this.month(),
            date: this.date(),
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        }
    };
    u.toDate =
        function() {
            return new Date(this.valueOf())
        };
    u.toISOString = function(a) {
        if (!this.isValid()) return null;
        var e = (a = !0 !== a) ? this.clone().utc() : this;
        return 0 > e.year() || 9999 < e.year() ? ha(e, a ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : L(Date.prototype.toISOString) ? a ? this.toDate().toISOString() : (new Date(this.valueOf() + 6E4 * this.utcOffset())).toISOString().replace("Z", ha(e, "Z")) : ha(e, a ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    };
    u.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " +
            this._i + " */)";
        var a = "moment",
            b = "";
        this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");
        a = "[" + a + '("]';
        var c = 0 <= this.year() && 9999 >= this.year() ? "YYYY" : "YYYYYY";
        return this.format(a + c + "-MM-DD[T]HH:mm:ss.SSS" + (b + '[")]'))
    };
    u.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    };
    u.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    };
    u.unix = function() {
        return Math.floor(this.valueOf() / 1E3)
    };
    u.valueOf = function() {
        return this._d.valueOf() -
            6E4 * (this._offset || 0)
    };
    u.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    };
    u.year = gd;
    u.isLeapYear = function() {
        return ea(this.year())
    };
    u.weekYear = function(a) {
        return bc.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    };
    u.isoWeekYear = function(a) {
        return bc.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
    };
    u.quarter = u.quarters = function(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 *
            (a - 1) + this.month() % 3)
    };
    u.month = hb;
    u.daysInMonth = function() {
        return Aa(this.year(), this.month())
    };
    u.week = u.weeks = function(a) {
        var e = this.localeData().week(this);
        return null == a ? e : this.add(7 * (a - e), "d")
    };
    u.isoWeek = u.isoWeeks = function(a) {
        var e = Ua(this, 1, 4).week;
        return null == a ? e : this.add(7 * (a - e), "d")
    };
    u.weeksInYear = function() {
        var a = this.localeData()._week;
        return Va(this.year(), a.dow, a.doy)
    };
    u.isoWeeksInYear = function() {
        return Va(this.year(), 1, 4)
    };
    u.date = jd;
    u.day = u.days = function(a) {
        if (!this.isValid()) return null !=
            a ? this : NaN;
        var e, b, c = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (e = a, b = this.localeData(), a = "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = b.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(a - c, "d")) : c
    };
    u.weekday = function(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? e : this.add(a - e, "d")
    };
    u.isoWeekday = function(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        if (null == a) return this.day() || 7;
        var e;
        a = (e = this.localeData(),
            "string" == typeof a ? e.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a);
        return this.day(this.day() % 7 ? a : a - 7)
    };
    u.dayOfYear = function(a) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864E5) + 1;
        return null == a ? e : this.add(a - e, "d")
    };
    u.hour = u.hours = $d;
    u.minute = u.minutes = ee;
    u.second = u.seconds = fe;
    u.millisecond = u.milliseconds = ge;
    u.utcOffset = function(a, b, c) {
        var e, d = this._offset || 0;
        if (!this.isValid()) return null != a ? this : NaN;
        if (null == a) return this._isUTC ? d : mb(this);
        if ("string" == typeof a) {
            if (null ===
                (a = lb(vc, a))) return this
        } else 16 > Math.abs(a) && !c && (a *= 60);
        return !this._isUTC && b && (e = mb(this)), this._offset = a, this._isUTC = !0, null != e && this.add(e, "m"), d !== a && (!b || this._changeInProgress ? nb(this, na(a - d, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, h.updateOffset(this, !0), this._changeInProgress = null)), this
    };
    u.utc = function(a) {
        return this.utcOffset(0, a)
    };
    u.local = function(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(mb(this), "m")), this
    };
    u.parseZone = function() {
        if (null !=
            this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var a = lb(Zd, this._i);
            null != a ? this.utcOffset(a) : this.utcOffset(0, !0)
        }
        return this
    };
    u.hasAlignedHourOffset = function(a) {
        return !!this.isValid() && (a = a ? O(a).utcOffset() : 0, 0 == (this.utcOffset() - a) % 60)
    };
    u.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    };
    u.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    };
    u.isUtcOffset = function() {
        return !!this.isValid() &&
            this._isUTC
    };
    u.isUtc = Yb;
    u.isUTC = Yb;
    u.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    };
    u.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    };
    u.dates = G("dates accessor is deprecated. Use date instead.", jd);
    u.months = G("months accessor is deprecated. Use month instead", hb);
    u.years = G("years accessor is deprecated. Use year instead", gd);
    u.zone = G("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(a, b) {
        return null != a ? ("string" !=
            typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    });
    u.isDSTShifted = G("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!a(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (r(e, this), (e = Ab(e))._a) {
            var b = e._isUTC ? l(e._a) : O(e._a);
            this._isDSTShifted = this.isValid() && 0 < z(e._a, b.toArray())
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var P = la.prototype;
    P.calendar = function(a, b, c) {
        a = this._calendar[a] || this._calendar.sameElse;
        return L(a) ? a.call(b, c) : a
    };
    P.longDateFormat = function(a) {
        var e = this._longDateFormat[a],
            b = this._longDateFormat[a.toUpperCase()];
        return e || !b ? e : (this._longDateFormat[a] = b.replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    };
    P.invalidDate = function() {
        return this._invalidDate
    };
    P.ordinal = function(a) {
        return this._ordinal.replace("%d", a)
    };
    P.preparse = oc;
    P.postformat = oc;
    P.relativeTime = function(a, b, c, d) {
        var e = this._relativeTime[c];
        return L(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
    };
    P.pastFuture =
        function(a, b) {
            var e = this._relativeTime[0 < a ? "future" : "past"];
            return L(e) ? e(b) : e.replace(/%s/i, b)
        };
    P.set = function(a) {
        var e, b;
        for (b in a) L(e = a[b]) ? this[b] = e : this["_" + b] = e;
        this._config = a;
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    };
    P.months = function(a, b) {
        return a ? m(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || hd).test(b) ? "format" : "standalone"][a.month()] : m(this._months) ? this._months :
            this._months.standalone
    };
    P.monthsShort = function(a, b) {
        return a ? m(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[hd.test(b) ? "format" : "standalone"][a.month()] : m(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    };
    P.monthsParse = function(a, b, c) {
        var e;
        if (this._monthsParseExact) {
            var d = a.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; 12 > a; ++a) {
                    var f = l([2E3, a]);
                    this._shortMonthsParse[a] = this.monthsShort(f,
                        "").toLocaleLowerCase();
                    this._longMonthsParse[a] = this.months(f, "").toLocaleLowerCase()
                }
            return c ? "MMM" === b ? -1 !== (e = Z.call(this._shortMonthsParse, d)) ? e : null : -1 !== (e = Z.call(this._longMonthsParse, d)) ? e : null : "MMM" === b ? -1 !== (e = Z.call(this._shortMonthsParse, d)) ? e : -1 !== (e = Z.call(this._longMonthsParse, d)) ? e : null : -1 !== (e = Z.call(this._longMonthsParse, d)) ? e : -1 !== (e = Z.call(this._shortMonthsParse, d)) ? e : null
        }
        this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []);
        for (e = 0; 12 >
            e; e++)
            if ((f = l([2E3, e]), c && !this._longMonthsParse[e] && (this._longMonthsParse[e] = new RegExp("^" + this.months(f, "").replace(".", "") + "$", "i"), this._shortMonthsParse[e] = new RegExp("^" + this.monthsShort(f, "").replace(".", "") + "$", "i")), c || this._monthsParse[e] || (d = "^" + this.months(f, "") + "|^" + this.monthsShort(f, ""), this._monthsParse[e] = new RegExp(d.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[e].test(a)) || c && "MMM" === b && this._shortMonthsParse[e].test(a) || !c && this._monthsParse[e].test(a)) return e
    };
    P.monthsRegex = function(a) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || ra.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (f(this, "_monthsRegex") || (this._monthsRegex = hc), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
    };
    P.monthsShortRegex = function(a) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || ra.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = hc), this._monthsShortStrictRegex &&
            a ? this._monthsShortStrictRegex : this._monthsShortRegex)
    };
    P.week = function(a) {
        return Ua(a, this._week.dow, this._week.doy).week
    };
    P.firstDayOfYear = function() {
        return this._week.doy
    };
    P.firstDayOfWeek = function() {
        return this._week.dow
    };
    P.weekdays = function(a, b) {
        var e = m(this._weekdays) ? this._weekdays : this._weekdays[a && !0 !== a && this._weekdays.isFormat.test(b) ? "format" : "standalone"];
        return !0 === a ? xb(e, this._week.dow) : a ? e[a.day()] : e
    };
    P.weekdaysMin = function(a) {
        return !0 === a ? xb(this._weekdaysMin, this._week.dow) : a ? this._weekdaysMin[a.day()] :
            this._weekdaysMin
    };
    P.weekdaysShort = function(a) {
        return !0 === a ? xb(this._weekdaysShort, this._week.dow) : a ? this._weekdaysShort[a.day()] : this._weekdaysShort
    };
    P.weekdaysParse = function(a, b, c) {
        var e;
        if (this._weekdaysParseExact) {
            var d = a.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; 7 > a; ++a) {
                    var f = l([2E3, 1]).day(a);
                    this._minWeekdaysParse[a] = this.weekdaysMin(f, "").toLocaleLowerCase();
                    this._shortWeekdaysParse[a] = this.weekdaysShort(f,
                        "").toLocaleLowerCase();
                    this._weekdaysParse[a] = this.weekdays(f, "").toLocaleLowerCase()
                }
            return c ? "dddd" === b ? -1 !== (e = Z.call(this._weekdaysParse, d)) ? e : null : "ddd" === b ? -1 !== (e = Z.call(this._shortWeekdaysParse, d)) ? e : null : -1 !== (e = Z.call(this._minWeekdaysParse, d)) ? e : null : "dddd" === b ? -1 !== (e = Z.call(this._weekdaysParse, d)) ? e : -1 !== (e = Z.call(this._shortWeekdaysParse, d)) ? e : -1 !== (e = Z.call(this._minWeekdaysParse, d)) ? e : null : "ddd" === b ? -1 !== (e = Z.call(this._shortWeekdaysParse, d)) ? e : -1 !== (e = Z.call(this._weekdaysParse,
                d)) ? e : -1 !== (e = Z.call(this._minWeekdaysParse, d)) ? e : null : -1 !== (e = Z.call(this._minWeekdaysParse, d)) ? e : -1 !== (e = Z.call(this._weekdaysParse, d)) ? e : -1 !== (e = Z.call(this._shortWeekdaysParse, d)) ? e : null
        }
        this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []);
        for (e = 0; 7 > e; e++)
            if ((f = l([2E3, 1]).day(e), c && !this._fullWeekdaysParse[e] && (this._fullWeekdaysParse[e] = new RegExp("^" + this.weekdays(f, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[e] =
                    new RegExp("^" + this.weekdaysShort(f, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[e] = new RegExp("^" + this.weekdaysMin(f, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[e] || (d = "^" + this.weekdays(f, "") + "|^" + this.weekdaysShort(f, "") + "|^" + this.weekdaysMin(f, ""), this._weekdaysParse[e] = new RegExp(d.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[e].test(a)) || c && "ddd" === b && this._shortWeekdaysParse[e].test(a) || c && "dd" === b && this._minWeekdaysParse[e].test(a) || !c && this._weekdaysParse[e].test(a)) return e
    };
    P.weekdaysRegex = function(a) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Pb.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = hc), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
    };
    P.weekdaysShortRegex = function(a) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Pb.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex =
            hc), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    };
    P.weekdaysMinRegex = function(a) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Pb.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = hc), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    };
    P.isPM = function(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    };
    P.meridiem = function(a, b, c) {
        return 11 < a ?
            c ? "pm" : "PM" : c ? "am" : "AM"
    };
    Ja("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var e = a % 10;
            return a + (1 === t(a % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        }
    });
    h.lang = G("moment.lang is deprecated. Use moment.locale instead.", Ja);
    h.langData = G("moment.langData is deprecated. Use moment.localeData instead.", aa);
    var ab = Math.abs,
        he = Ea("ms"),
        ie = Ea("s"),
        je = Ea("m"),
        ke = Ea("h"),
        le = Ea("d"),
        me = Ea("w"),
        ne = Ea("M"),
        oe = Ea("Q"),
        pe = Ea("y"),
        qe = Za("milliseconds"),
        re = Za("seconds"),
        se = Za("minutes"),
        te = Za("hours"),
        ue = Za("days"),
        ve = Za("months"),
        we = Za("years"),
        gb = Math.round,
        Pa = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        Dc = Math.abs,
        I = Bb.prototype;
    I.isValid = function() {
        return this._isValid
    };
    I.abs = function() {
        var a = this._data;
        return this._milliseconds = ab(this._milliseconds), this._days = ab(this._days), this._months = ab(this._months), a.milliseconds = ab(a.milliseconds), a.seconds = ab(a.seconds), a.minutes = ab(a.minutes), a.hours = ab(a.hours), a.months = ab(a.months), a.years = ab(a.years), this
    };
    I.add = function(a, b) {
        return pc(this,
            a, b, 1)
    };
    I.subtract = function(a, b) {
        return pc(this, a, b, -1)
    };
    I.as = function(a) {
        if (!this.isValid()) return NaN;
        var e;
        var b = this._milliseconds;
        if ("month" === (a = N(a)) || "quarter" === a || "year" === a) switch (e = this._days + b / 864E5, b = this._months + 4800 * e / 146097, a) {
            case "month":
                return b;
            case "quarter":
                return b / 3;
            case "year":
                return b / 12
        } else switch (e = this._days + Math.round(146097 * this._months / 4800), a) {
            case "week":
                return e / 7 + b / 6048E5;
            case "day":
                return e + b / 864E5;
            case "hour":
                return 24 * e + b / 36E5;
            case "minute":
                return 1440 * e + b /
                    6E4;
            case "second":
                return 86400 * e + b / 1E3;
            case "millisecond":
                return Math.floor(864E5 * e) + b;
            default:
                throw Error("Unknown unit " + a);
        }
    };
    I.asMilliseconds = he;
    I.asSeconds = ie;
    I.asMinutes = je;
    I.asHours = ke;
    I.asDays = le;
    I.asWeeks = me;
    I.asMonths = ne;
    I.asQuarters = oe;
    I.asYears = pe;
    I.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864E5 * this._days + this._months % 12 * 2592E6 + 31536E6 * t(this._months / 12) : NaN
    };
    I._bubble = function() {
        var a, b, c, d, f, g = this._milliseconds,
            k = this._days,
            l = this._months,
            q = this._data;
        return 0 <=
            g && 0 <= k && 0 <= l || 0 >= g && 0 >= k && 0 >= l || (g += 864E5 * Hb(146097 * l / 4800 + k), l = k = 0), q.milliseconds = g % 1E3, a = E(g / 1E3), q.seconds = a % 60, b = E(a / 60), q.minutes = b % 60, c = E(b / 60), q.hours = c % 24, l += f = E(4800 * (k += E(c / 24)) / 146097), k -= Hb(146097 * f / 4800), d = E(l / 12), l %= 12, q.days = k, q.months = l, q.years = d, this
    };
    I.clone = function() {
        return na(this)
    };
    I.get = function(a) {
        return a = N(a), this.isValid() ? this[a + "s"]() : NaN
    };
    I.milliseconds = qe;
    I.seconds = re;
    I.minutes = se;
    I.hours = te;
    I.days = ue;
    I.weeks = function() {
        return E(this.days() / 7)
    };
    I.months = ve;
    I.years =
        we;
    I.humanize = function(a) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, b, c, d, f, g, k, l, q, h = this.localeData(),
            n = (e = !a, b = na(this).abs(), c = gb(b.as("s")), d = gb(b.as("m")), f = gb(b.as("h")), g = gb(b.as("d")), k = gb(b.as("M")), l = gb(b.as("y")), (q = c <= Pa.ss && ["s", c] || c < Pa.s && ["ss", c] || 1 >= d && ["m"] || d < Pa.m && ["mm", d] || 1 >= f && ["h"] || f < Pa.h && ["hh", f] || 1 >= g && ["d"] || g < Pa.d && ["dd", g] || 1 >= k && ["M"] || k < Pa.M && ["MM", k] || 1 >= l && ["y"] || ["yy", l])[2] = e, q[3] = 0 < +this, q[4] = h, function(a, e, b, c, d) {
                return d.relativeTime(e ||
                    1, !!b, a, c)
            }.apply(null, q));
        return a && (n = h.pastFuture(+this, n)), h.postformat(n)
    };
    I.toISOString = Ib;
    I.toString = Ib;
    I.toJSON = Ib;
    I.locale = Db;
    I.localeData = nc;
    I.toIsoString = G("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ib);
    I.lang = id;
    w("X", 0, 0, "unix");
    w("x", 0, 0, "valueOf");
    v("x", uc);
    v("X", /[+-]?\d+(\.\d{1,3})?/);
    J("X", function(a, b, c) {
        c._d = new Date(1E3 * parseFloat(a, 10))
    });
    J("x", function(a, b, c) {
        c._d = new Date(t(a))
    });
    h.version = "2.24.0";
    var Hd = O;
    h.fn = u;
    h.min = function() {
        return mc("isBefore",
            [].slice.call(arguments, 0))
    };
    h.max = function() {
        return mc("isAfter", [].slice.call(arguments, 0))
    };
    h.now = function() {
        return Date.now ? Date.now() : +new Date
    };
    h.utc = l;
    h.unix = function(a) {
        return O(1E3 * a)
    };
    h.months = function(a, b) {
        return qb(a, b, "months")
    };
    h.isDate = g;
    h.locale = Ja;
    h.invalid = n;
    h.duration = na;
    h.isMoment = A;
    h.weekdays = function(a, b, c) {
        return Gb(a, b, c, "weekdays")
    };
    h.parseZone = function() {
        return O.apply(null, arguments).parseZone()
    };
    h.localeData = aa;
    h.isDuration = Cb;
    h.monthsShort = function(a, b) {
        return qb(a, b,
            "monthsShort")
    };
    h.weekdaysMin = function(a, b, c) {
        return Gb(a, b, c, "weekdaysMin")
    };
    h.defineLocale = B;
    h.updateLocale = function(a, b) {
        if (null != b) {
            var e, c = Yc;
            null != (e = ib(a)) && (c = e._config);
            (e = new la(b = y(c, b))).parentLocale = W[a];
            W[a] = e;
            Ja(a)
        } else null != W[a] && (null != W[a].parentLocale ? W[a] = W[a].parentLocale : null != W[a] && delete W[a]);
        return W[a]
    };
    h.locales = function() {
        return Xd(W)
    };
    h.weekdaysShort = function(a, b, c) {
        return Gb(a, b, c, "weekdaysShort")
    };
    h.normalizeUnits = N;
    h.relativeTimeRounding = function(a) {
        return void 0 ===
            a ? gb : "function" == typeof a && (gb = a, !0)
    };
    h.relativeTimeThreshold = function(a, b) {
        return void 0 !== Pa[a] && (void 0 === b ? Pa[a] : (Pa[a] = b, "s" === a && (Pa.ss = b - 1), !0))
    };
    h.calendarFormat = function(a, b) {
        var e = a.diff(b, "days", !0);
        return -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse"
    };
    h.prototype = u;
    h.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    };
    h.defineLocale("af", {
        months: "Januarie Februarie Maart April Mei Junie Julie Augustus September Oktober November Desember".split(" "),
        monthsShort: "Jan Feb Mrt Apr Mei Jun Jul Aug Sep Okt Nov Des".split(" "),
        weekdays: "Sondag Maandag Dinsdag Woensdag Donderdag Vrydag Saterdag".split(" "),
        weekdaysShort: "Son Maa Din Woe Don Vry Sat".split(" "),
        weekdaysMin: "So Ma Di Wo Do Vr Sa".split(" "),
        meridiemParse: /vm|nm/i,
        isPM: function(a) {
            return /^nm$/i.test(a)
        },
        meridiem: function(a, b, c) {
            return 12 > a ? c ? "vm" : "VM" : c ? "nm" : "NM"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Vandag om] LT",
            nextDay: "[M\u00f4re om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[Gister om] LT",
            lastWeek: "[Laas] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oor %s",
            past: "%s gelede",
            s: "'n paar sekondes",
            ss: "%d sekondes",
            m: "'n minuut",
            mm: "%d minute",
            h: "'n uur",
            hh: "%d ure",
            d: "'n dag",
            dd: "%d dae",
            M: "'n maand",
            MM: "%d maande",
            y: "'n jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(a) {
            return a + (1 === a || 8 === a || 20 <= a ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("ar-dz", {
        months: "\u062c\u0627\u0646\u0641\u064a \u0641\u064a\u0641\u0631\u064a \u0645\u0627\u0631\u0633 \u0623\u0641\u0631\u064a\u0644 \u0645\u0627\u064a \u062c\u0648\u0627\u0646 \u062c\u0648\u064a\u0644\u064a\u0629 \u0623\u0648\u062a \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),
        monthsShort: "\u062c\u0627\u0646\u0641\u064a \u0641\u064a\u0641\u0631\u064a \u0645\u0627\u0631\u0633 \u0623\u0641\u0631\u064a\u0644 \u0645\u0627\u064a \u062c\u0648\u0627\u0646 \u062c\u0648\u064a\u0644\u064a\u0629 \u0623\u0648\u062a \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),
        weekdays: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0625\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
        weekdaysShort: "\u0627\u062d\u062f \u0627\u062b\u0646\u064a\u0646 \u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0631\u0628\u0639\u0627\u0621 \u062e\u0645\u064a\u0633 \u062c\u0645\u0639\u0629 \u0633\u0628\u062a".split(" "),
        weekdaysMin: "\u0623\u062d \u0625\u062b \u062b\u0644\u0627 \u0623\u0631 \u062e\u0645 \u062c\u0645 \u0633\u0628".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a"
        },
        week: {
            dow: 0,
            doy: 4
        }
    });
    h.defineLocale("ar-kw", {
        months: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648\u0632 \u063a\u0634\u062a \u0634\u062a\u0646\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0646\u0628\u0631 \u062f\u062c\u0646\u0628\u0631".split(" "),
        monthsShort: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648\u0632 \u063a\u0634\u062a \u0634\u062a\u0646\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0646\u0628\u0631 \u062f\u062c\u0646\u0628\u0631".split(" "),
        weekdays: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0625\u062a\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
        weekdaysShort: "\u0627\u062d\u062f \u0627\u062a\u0646\u064a\u0646 \u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0631\u0628\u0639\u0627\u0621 \u062e\u0645\u064a\u0633 \u062c\u0645\u0639\u0629 \u0633\u0628\u062a".split(" "),
        weekdaysMin: "\u062d\u0646\u062b\u0631\u062e\u062c\u0633".split(""),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a"
        },
        week: {
            dow: 0,
            doy: 12
        }
    });
    var xe = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
        },
        kd = function(a) {
            return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : 3 <= a % 100 && 10 >= a % 100 ? 3 : 11 <= a % 100 ? 4 : 5
        },
        ye = {
            s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629",
                "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"
            ],
            m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642",
                "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"
            ],
            h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"],
            d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646",
                "\u064a\u0648\u0645\u064a\u0646"
            ], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"],
            M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"],
            y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646",
                "\u0639\u0627\u0645\u064a\u0646"
            ], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"]
        },
        ya = function(a) {
            return function(e, b, c, d) {
                c = kd(e);
                d = ye[a][kd(e)];
                return 2 === c && (d = d[b ? 0 : 1]), d.replace(/%d/i, e)
            }
        },
        ld = "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" ");
    h.defineLocale("ar-ly", {
        months: ld,
        monthsShort: ld,
        weekdays: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0625\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
        weekdaysShort: "\u0623\u062d\u062f \u0625\u062b\u0646\u064a\u0646 \u062b\u0644\u0627\u062b\u0627\u0621 \u0623\u0631\u0628\u0639\u0627\u0621 \u062e\u0645\u064a\u0633 \u062c\u0645\u0639\u0629 \u0633\u0628\u062a".split(" "),
        weekdaysMin: "\u062d\u0646\u062b\u0631\u062e\u062c\u0633".split(""),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/\u200fM/\u200fYYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0635|\u0645/,
        isPM: function(a) {
            return "\u0645" === a
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\u0635" : "\u0645"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0628\u0639\u062f %s",
            past: "\u0645\u0646\u0630 %s",
            s: ya("s"),
            ss: ya("s"),
            m: ya("m"),
            mm: ya("m"),
            h: ya("h"),
            hh: ya("h"),
            d: ya("d"),
            dd: ya("d"),
            M: ya("M"),
            MM: ya("M"),
            y: ya("y"),
            yy: ya("y")
        },
        preparse: function(a) {
            return a.replace(/\u060c/g,
                ",")
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return xe[a]
            }).replace(/,/g, "\u060c")
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    h.defineLocale("ar-ma", {
        months: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648\u0632 \u063a\u0634\u062a \u0634\u062a\u0646\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0646\u0628\u0631 \u062f\u062c\u0646\u0628\u0631".split(" "),
        monthsShort: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648\u0632 \u063a\u0634\u062a \u0634\u062a\u0646\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0646\u0628\u0631 \u062f\u062c\u0646\u0628\u0631".split(" "),
        weekdays: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0625\u062a\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
        weekdaysShort: "\u0627\u062d\u062f \u0627\u062a\u0646\u064a\u0646 \u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0631\u0628\u0639\u0627\u0621 \u062e\u0645\u064a\u0633 \u062c\u0645\u0639\u0629 \u0633\u0628\u062a".split(" "),
        weekdaysMin: "\u062d\u0646\u062b\u0631\u062e\u062c\u0633".split(""),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a"
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var ze = {
            1: "\u0661",
            2: "\u0662",
            3: "\u0663",
            4: "\u0664",
            5: "\u0665",
            6: "\u0666",
            7: "\u0667",
            8: "\u0668",
            9: "\u0669",
            0: "\u0660"
        },
        Ae = {
            "\u0661": "1",
            "\u0662": "2",
            "\u0663": "3",
            "\u0664": "4",
            "\u0665": "5",
            "\u0666": "6",
            "\u0667": "7",
            "\u0668": "8",
            "\u0669": "9",
            "\u0660": "0"
        };
    h.defineLocale("ar-sa", {
        months: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),
        monthsShort: "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),
        weekdays: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0625\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
        weekdaysShort: "\u0623\u062d\u062f \u0625\u062b\u0646\u064a\u0646 \u062b\u0644\u0627\u062b\u0627\u0621 \u0623\u0631\u0628\u0639\u0627\u0621 \u062e\u0645\u064a\u0633 \u062c\u0645\u0639\u0629 \u0633\u0628\u062a".split(" "),
        weekdaysMin: "\u062d\u0646\u062b\u0631\u062e\u062c\u0633".split(""),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0635|\u0645/,
        isPM: function(a) {
            return "\u0645" === a
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\u0635" : "\u0645"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a"
        },
        preparse: function(a) {
            return a.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(a) {
                return Ae[a]
            }).replace(/\u060c/g, ",")
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return ze[a]
            }).replace(/,/g, "\u060c")
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    h.defineLocale("ar-tn", {
        months: "\u062c\u0627\u0646\u0641\u064a \u0641\u064a\u0641\u0631\u064a \u0645\u0627\u0631\u0633 \u0623\u0641\u0631\u064a\u0644 \u0645\u0627\u064a \u062c\u0648\u0627\u0646 \u062c\u0648\u064a\u0644\u064a\u0629 \u0623\u0648\u062a \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),
        monthsShort: "\u062c\u0627\u0646\u0641\u064a \u0641\u064a\u0641\u0631\u064a \u0645\u0627\u0631\u0633 \u0623\u0641\u0631\u064a\u0644 \u0645\u0627\u064a \u062c\u0648\u0627\u0646 \u062c\u0648\u064a\u0644\u064a\u0629 \u0623\u0648\u062a \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" "),
        weekdays: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0625\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
        weekdaysShort: "\u0623\u062d\u062f \u0625\u062b\u0646\u064a\u0646 \u062b\u0644\u0627\u062b\u0627\u0621 \u0623\u0631\u0628\u0639\u0627\u0621 \u062e\u0645\u064a\u0633 \u062c\u0645\u0639\u0629 \u0633\u0628\u062a".split(" "),
        weekdaysMin: "\u062d\u0646\u062b\u0631\u062e\u062c\u0633".split(""),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0641\u064a %s",
            past: "\u0645\u0646\u0630 %s",
            s: "\u062b\u0648\u0627\u0646",
            ss: "%d \u062b\u0627\u0646\u064a\u0629",
            m: "\u062f\u0642\u064a\u0642\u0629",
            mm: "%d \u062f\u0642\u0627\u0626\u0642",
            h: "\u0633\u0627\u0639\u0629",
            hh: "%d \u0633\u0627\u0639\u0627\u062a",
            d: "\u064a\u0648\u0645",
            dd: "%d \u0623\u064a\u0627\u0645",
            M: "\u0634\u0647\u0631",
            MM: "%d \u0623\u0634\u0647\u0631",
            y: "\u0633\u0646\u0629",
            yy: "%d \u0633\u0646\u0648\u0627\u062a"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Be = {
            1: "\u0661",
            2: "\u0662",
            3: "\u0663",
            4: "\u0664",
            5: "\u0665",
            6: "\u0666",
            7: "\u0667",
            8: "\u0668",
            9: "\u0669",
            0: "\u0660"
        },
        Ce = {
            "\u0661": "1",
            "\u0662": "2",
            "\u0663": "3",
            "\u0664": "4",
            "\u0665": "5",
            "\u0666": "6",
            "\u0667": "7",
            "\u0668": "8",
            "\u0669": "9",
            "\u0660": "0"
        },
        md = function(a) {
            return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : 3 <= a % 100 && 10 >= a % 100 ? 3 : 11 <= a % 100 ? 4 : 5
        },
        De = {
            s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"],
            m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629",
                "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"
            ],
            h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a",
                "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"
            ],
            d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"],
            M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631",
                "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"
            ],
            y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"]
        },
        za = function(a) {
            return function(e, b, c, d) {
                c = md(e);
                d = De[a][md(e)];
                return 2 === c && (d = d[b ? 0 : 1]), d.replace(/%d/i, e)
            }
        },
        nd = "\u064a\u0646\u0627\u064a\u0631 \u0641\u0628\u0631\u0627\u064a\u0631 \u0645\u0627\u0631\u0633 \u0623\u0628\u0631\u064a\u0644 \u0645\u0627\u064a\u0648 \u064a\u0648\u0646\u064a\u0648 \u064a\u0648\u0644\u064a\u0648 \u0623\u063a\u0633\u0637\u0633 \u0633\u0628\u062a\u0645\u0628\u0631 \u0623\u0643\u062a\u0648\u0628\u0631 \u0646\u0648\u0641\u0645\u0628\u0631 \u062f\u064a\u0633\u0645\u0628\u0631".split(" ");
    h.defineLocale("ar", {
        months: nd,
        monthsShort: nd,
        weekdays: "\u0627\u0644\u0623\u062d\u062f \u0627\u0644\u0625\u062b\u0646\u064a\u0646 \u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621 \u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062e\u0645\u064a\u0633 \u0627\u0644\u062c\u0645\u0639\u0629 \u0627\u0644\u0633\u0628\u062a".split(" "),
        weekdaysShort: "\u0623\u062d\u062f \u0625\u062b\u0646\u064a\u0646 \u062b\u0644\u0627\u062b\u0627\u0621 \u0623\u0631\u0628\u0639\u0627\u0621 \u062e\u0645\u064a\u0633 \u062c\u0645\u0639\u0629 \u0633\u0628\u062a".split(" "),
        weekdaysMin: "\u062d\u0646\u062b\u0631\u062e\u062c\u0633".split(""),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/\u200fM/\u200fYYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0635|\u0645/,
        isPM: function(a) {
            return "\u0645" === a
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\u0635" : "\u0645"
        },
        calendar: {
            sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0628\u0639\u062f %s",
            past: "\u0645\u0646\u0630 %s",
            s: za("s"),
            ss: za("s"),
            m: za("m"),
            mm: za("m"),
            h: za("h"),
            hh: za("h"),
            d: za("d"),
            dd: za("d"),
            M: za("M"),
            MM: za("M"),
            y: za("y"),
            yy: za("y")
        },
        preparse: function(a) {
            return a.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,
                function(a) {
                    return Ce[a]
                }).replace(/\u060c/g, ",")
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return Be[a]
            }).replace(/,/g, "\u060c")
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var Hc = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-\u00fcnc\u00fc",
        4: "-\u00fcnc\u00fc",
        100: "-\u00fcnc\u00fc",
        6: "-nc\u0131",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-\u0131nc\u0131",
        90: "-\u0131nc\u0131"
    };
    h.defineLocale("az", {
        months: "yanvar fevral mart aprel may iyun iyul avqust sentyabr oktyabr noyabr dekabr".split(" "),
        monthsShort: "yan fev mar apr may iyn iyl avq sen okt noy dek".split(" "),
        weekdays: "Bazar;Bazar ert\u0259si;\u00c7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131;\u00c7\u0259r\u015f\u0259nb\u0259;C\u00fcm\u0259 ax\u015fam\u0131;C\u00fcm\u0259;\u015e\u0259nb\u0259".split(";"),
        weekdaysShort: "Baz BzE \u00c7Ax \u00c7\u0259r CAx C\u00fcm \u015e\u0259n".split(" "),
        weekdaysMin: "Bz BE \u00c7A \u00c7\u0259 CA C\u00fc \u015e\u0259".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bug\u00fcn saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT",
            lastDay: "[d\u00fcn\u0259n] LT",
            lastWeek: "[ke\u00e7\u0259n h\u0259ft\u0259] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s \u0259vv\u0259l",
            s: "birne\u00e7\u0259 saniy\u0259",
            ss: "%d saniy\u0259",
            m: "bir d\u0259qiq\u0259",
            mm: "%d d\u0259qiq\u0259",
            h: "bir saat",
            hh: "%d saat",
            d: "bir g\u00fcn",
            dd: "%d g\u00fcn",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il"
        },
        meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
        isPM: function(a) {
            return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(a)
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "gec\u0259" : 12 > a ? "s\u0259h\u0259r" : 17 > a ? "g\u00fcnd\u00fcz" : "ax\u015fam"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
        ordinal: function(a) {
            if (0 === a) return a + "-\u0131nc\u0131";
            var e = a % 10;
            return a + (Hc[e] || Hc[a % 100 - e] || Hc[100 <= a ? 100 : null])
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("be", {
        months: {
            format: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f \u043b\u044e\u0442\u0430\u0433\u0430 \u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430 \u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430 \u0442\u0440\u0430\u045e\u043d\u044f \u0447\u044d\u0440\u0432\u0435\u043d\u044f \u043b\u0456\u043f\u0435\u043d\u044f \u0436\u043d\u0456\u045e\u043d\u044f \u0432\u0435\u0440\u0430\u0441\u043d\u044f \u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430 \u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430 \u0441\u043d\u0435\u0436\u043d\u044f".split(" "),
            standalone: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c \u043b\u044e\u0442\u044b \u0441\u0430\u043a\u0430\u0432\u0456\u043a \u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a \u0442\u0440\u0430\u0432\u0435\u043d\u044c \u0447\u044d\u0440\u0432\u0435\u043d\u044c \u043b\u0456\u043f\u0435\u043d\u044c \u0436\u043d\u0456\u0432\u0435\u043d\u044c \u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c \u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a \u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434 \u0441\u043d\u0435\u0436\u0430\u043d\u044c".split(" ")
        },
        monthsShort: "\u0441\u0442\u0443\u0434 \u043b\u044e\u0442 \u0441\u0430\u043a \u043a\u0440\u0430\u0441 \u0442\u0440\u0430\u0432 \u0447\u044d\u0440\u0432 \u043b\u0456\u043f \u0436\u043d\u0456\u0432 \u0432\u0435\u0440 \u043a\u0430\u0441\u0442 \u043b\u0456\u0441\u0442 \u0441\u043d\u0435\u0436".split(" "),
        weekdays: {
            format: "\u043d\u044f\u0434\u0437\u0435\u043b\u044e \u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a \u0430\u045e\u0442\u043e\u0440\u0430\u043a \u0441\u0435\u0440\u0430\u0434\u0443 \u0447\u0430\u0446\u0432\u0435\u0440 \u043f\u044f\u0442\u043d\u0456\u0446\u0443 \u0441\u0443\u0431\u043e\u0442\u0443".split(" "),
            standalone: "\u043d\u044f\u0434\u0437\u0435\u043b\u044f \u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a \u0430\u045e\u0442\u043e\u0440\u0430\u043a \u0441\u0435\u0440\u0430\u0434\u0430 \u0447\u0430\u0446\u0432\u0435\u0440 \u043f\u044f\u0442\u043d\u0456\u0446\u0430 \u0441\u0443\u0431\u043e\u0442\u0430".split(" "),
            isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/
        },
        weekdaysShort: "\u043d\u0434 \u043f\u043d \u0430\u0442 \u0441\u0440 \u0447\u0446 \u043f\u0442 \u0441\u0431".split(" "),
        weekdaysMin: "\u043d\u0434 \u043f\u043d \u0430\u0442 \u0441\u0440 \u0447\u0446 \u043f\u0442 \u0441\u0431".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0433.",
            LLL: "D MMMM YYYY \u0433., HH:mm",
            LLLL: "dddd, D MMMM YYYY \u0433., HH:mm"
        },
        calendar: {
            sameDay: "[\u0421\u0451\u043d\u043d\u044f \u045e] LT",
            nextDay: "[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",
            lastDay: "[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",
            nextWeek: function() {
                return "[\u0423] dddd [\u045e] LT"
            },
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u043f\u0440\u0430\u0437 %s",
            past: "%s \u0442\u0430\u043c\u0443",
            s: "\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434",
            m: sa,
            mm: sa,
            h: sa,
            hh: sa,
            d: "\u0434\u0437\u0435\u043d\u044c",
            dd: sa,
            M: "\u043c\u0435\u0441\u044f\u0446",
            MM: sa,
            y: "\u0433\u043e\u0434",
            yy: sa
        },
        meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
        isPM: function(a) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(a)
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "\u043d\u043e\u0447\u044b" : 12 > a ? "\u0440\u0430\u043d\u0456\u0446\u044b" : 17 > a ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0430\u0440\u0430"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
        ordinal: function(a,
            b) {
            switch (b) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return 2 != a % 10 && 3 != a % 10 || 12 == a % 100 || 13 == a % 100 ? a + "-\u044b" : a + "-\u0456";
                case "D":
                    return a + "-\u0433\u0430";
                default:
                    return a
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("bg", {
        months: "\u044f\u043d\u0443\u0430\u0440\u0438 \u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438 \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0438\u043b \u043c\u0430\u0439 \u044e\u043d\u0438 \u044e\u043b\u0438 \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438 \u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438 \u043d\u043e\u0435\u043c\u0432\u0440\u0438 \u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split(" "),
        monthsShort: "\u044f\u043d\u0440 \u0444\u0435\u0432 \u043c\u0430\u0440 \u0430\u043f\u0440 \u043c\u0430\u0439 \u044e\u043d\u0438 \u044e\u043b\u0438 \u0430\u0432\u0433 \u0441\u0435\u043f \u043e\u043a\u0442 \u043d\u043e\u0435 \u0434\u0435\u043a".split(" "),
        weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u044f\u0434\u0430 \u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a \u043f\u0435\u0442\u044a\u043a \u0441\u044a\u0431\u043e\u0442\u0430".split(" "),
        weekdaysShort: "\u043d\u0435\u0434 \u043f\u043e\u043d \u0432\u0442\u043e \u0441\u0440\u044f \u0447\u0435\u0442 \u043f\u0435\u0442 \u0441\u044a\u0431".split(" "),
        weekdaysMin: "\u043d\u0434 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[\u0414\u043d\u0435\u0441 \u0432] LT",
            nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
            nextWeek: "dddd [\u0432] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0441\u043b\u0435\u0434 %s",
            past: "\u043f\u0440\u0435\u0434\u0438 %s",
            s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            m: "\u043c\u0438\u043d\u0443\u0442\u0430",
            mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
            h: "\u0447\u0430\u0441",
            hh: "%d \u0447\u0430\u0441\u0430",
            d: "\u0434\u0435\u043d",
            dd: "%d \u0434\u043d\u0438",
            M: "\u043c\u0435\u0441\u0435\u0446",
            MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430",
            y: "\u0433\u043e\u0434\u0438\u043d\u0430",
            yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
        ordinal: function(a) {
            var e = a % 10,
                b = a % 100;
            return 0 === a ? a + "-\u0435\u0432" : 0 === b ? a + "-\u0435\u043d" : 10 < b && 20 > b ? a + "-\u0442\u0438" : 1 === e ? a + "-\u0432\u0438" : 2 === e ? a + "-\u0440\u0438" : 7 === e || 8 === e ? a + "-\u043c\u0438" : a + "-\u0442\u0438"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("bm", {
        months: "Zanwuyekalo Fewuruyekalo Marisikalo Awirilikalo M\u025bkalo Zuw\u025bnkalo Zuluyekalo Utikalo S\u025btanburukalo \u0254kut\u0254burukalo Nowanburukalo Desanburukalo".split(" "),
        monthsShort: "Zan Few Mar Awi M\u025b Zuw Zul Uti S\u025bt \u0254ku Now Des".split(" "),
        weekdays: "Kari Nt\u025bn\u025bn Tarata Araba Alamisa Juma Sibiri".split(" "),
        weekdaysShort: "Kar Nt\u025b Tar Ara Ala Jum Sib".split(" "),
        weekdaysMin: "Ka Nt Ta Ar Al Ju Si".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "MMMM [tile] D [san] YYYY",
            LLL: "MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm",
            LLLL: "dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm"
        },
        calendar: {
            sameDay: "[Bi l\u025br\u025b] LT",
            nextDay: "[Sini l\u025br\u025b] LT",
            nextWeek: "dddd [don l\u025br\u025b] LT",
            lastDay: "[Kunu l\u025br\u025b] LT",
            lastWeek: "dddd [t\u025bm\u025bnen l\u025br\u025b] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s k\u0254n\u0254",
            past: "a b\u025b %s b\u0254",
            s: "sanga dama dama",
            ss: "sekondi %d",
            m: "miniti kelen",
            mm: "miniti %d",
            h: "l\u025br\u025b kelen",
            hh: "l\u025br\u025b %d",
            d: "tile kelen",
            dd: "tile %d",
            M: "kalo kelen",
            MM: "kalo %d",
            y: "san kelen",
            yy: "san %d"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Ee = {
            1: "\u09e7",
            2: "\u09e8",
            3: "\u09e9",
            4: "\u09ea",
            5: "\u09eb",
            6: "\u09ec",
            7: "\u09ed",
            8: "\u09ee",
            9: "\u09ef",
            0: "\u09e6"
        },
        Fe = {
            "\u09e7": "1",
            "\u09e8": "2",
            "\u09e9": "3",
            "\u09ea": "4",
            "\u09eb": "5",
            "\u09ec": "6",
            "\u09ed": "7",
            "\u09ee": "8",
            "\u09ef": "9",
            "\u09e6": "0"
        };
    h.defineLocale("bn", {
        months: "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),
        monthsShort: "\u099c\u09be\u09a8\u09c1 \u09ab\u09c7\u09ac \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2 \u0986\u0997 \u09b8\u09c7\u09aa\u09cd\u099f \u0985\u0995\u09cd\u099f\u09cb \u09a8\u09ad\u09c7 \u09a1\u09bf\u09b8\u09c7".split(" "),
        weekdays: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0 \u09b8\u09cb\u09ae\u09ac\u09be\u09b0 \u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0 \u09ac\u09c1\u09a7\u09ac\u09be\u09b0 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 \u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0 \u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(" "),
        weekdaysShort: "\u09b0\u09ac\u09bf \u09b8\u09cb\u09ae \u09ae\u0999\u09cd\u0997\u09b2 \u09ac\u09c1\u09a7 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf \u09b6\u09c1\u0995\u09cd\u09b0 \u09b6\u09a8\u09bf".split(" "),
        weekdaysMin: "\u09b0\u09ac\u09bf \u09b8\u09cb\u09ae \u09ae\u0999\u09cd\u0997 \u09ac\u09c1\u09a7 \u09ac\u09c3\u09b9\u0983 \u09b6\u09c1\u0995\u09cd\u09b0 \u09b6\u09a8\u09bf".split(" "),
        longDateFormat: {
            LT: "A h:mm \u09b8\u09ae\u09df",
            LTS: "A h:mm:ss \u09b8\u09ae\u09df",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df"
        },
        calendar: {
            sameDay: "[\u0986\u099c] LT",
            nextDay: "[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0997\u09a4\u0995\u09be\u09b2] LT",
            lastWeek: "[\u0997\u09a4] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u09aa\u09b0\u09c7",
            past: "%s \u0986\u0997\u09c7",
            s: "\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
            ss: "%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
            m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",
            mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f",
            h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",
            hh: "%d \u0998\u09a8\u09cd\u099f\u09be",
            d: "\u098f\u0995 \u09a6\u09bf\u09a8",
            dd: "%d \u09a6\u09bf\u09a8",
            M: "\u098f\u0995 \u09ae\u09be\u09b8",
            MM: "%d \u09ae\u09be\u09b8",
            y: "\u098f\u0995 \u09ac\u099b\u09b0",
            yy: "%d \u09ac\u099b\u09b0"
        },
        preparse: function(a) {
            return a.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function(a) {
                return Fe[a]
            })
        },
        postformat: function(a) {
            return a.replace(/\d/g,
                function(a) {
                    return Ee[a]
                })
        },
        meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u09b0\u09be\u09a4" === b && 4 <= a || "\u09a6\u09c1\u09aa\u09c1\u09b0" === b && 5 > a || "\u09ac\u09bf\u0995\u09be\u09b2" === b ? a + 12 : a
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "\u09b0\u09be\u09a4" : 10 > a ? "\u09b8\u0995\u09be\u09b2" : 17 > a ? "\u09a6\u09c1\u09aa\u09c1\u09b0" : 20 > a ? "\u09ac\u09bf\u0995\u09be\u09b2" :
                "\u09b0\u09be\u09a4"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var Ge = {
            1: "\u0f21",
            2: "\u0f22",
            3: "\u0f23",
            4: "\u0f24",
            5: "\u0f25",
            6: "\u0f26",
            7: "\u0f27",
            8: "\u0f28",
            9: "\u0f29",
            0: "\u0f20"
        },
        He = {
            "\u0f21": "1",
            "\u0f22": "2",
            "\u0f23": "3",
            "\u0f24": "4",
            "\u0f25": "5",
            "\u0f26": "6",
            "\u0f27": "7",
            "\u0f28": "8",
            "\u0f29": "9",
            "\u0f20": "0"
        };
    h.defineLocale("bo", {
        months: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split(" "),
        monthsShort: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54 \u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split(" "),
        weekdays: "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b \u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b \u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b \u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b \u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74 \u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b \u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split(" "),
        weekdaysShort: "\u0f49\u0f72\u0f0b\u0f58\u0f0b \u0f5f\u0fb3\u0f0b\u0f56\u0f0b \u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b \u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b \u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74 \u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b \u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split(" "),
        weekdaysMin: "\u0f49\u0f72\u0f0b\u0f58\u0f0b \u0f5f\u0fb3\u0f0b\u0f56\u0f0b \u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b \u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b \u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74 \u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b \u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split(" "),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT",
            nextDay: "[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT",
            nextWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT",
            lastDay: "[\u0f41\u0f0b\u0f66\u0f44] LT",
            lastWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0f63\u0f0b",
            past: "%s \u0f66\u0f94\u0f53\u0f0b\u0f63",
            s: "\u0f63\u0f58\u0f0b\u0f66\u0f44",
            ss: "%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d",
            m: "\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42",
            mm: "%d \u0f66\u0f90\u0f62\u0f0b\u0f58",
            h: "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42",
            hh: "%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51",
            d: "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42",
            dd: "%d \u0f49\u0f72\u0f53\u0f0b",
            M: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42",
            MM: "%d \u0f5f\u0fb3\u0f0b\u0f56",
            y: "\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42",
            yy: "%d \u0f63\u0f7c"
        },
        preparse: function(a) {
            return a.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function(a) {
                return He[a]
            })
        },
        postformat: function(a) {
            return a.replace(/\d/g,
                function(a) {
                    return Ge[a]
                })
        },
        meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" === b && 4 <= a || "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" === b && 5 > a || "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" === b ? a + 12 : a
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" :
                10 > a ? "\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66" : 17 > a ? "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" : 20 > a ? "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" : "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    h.defineLocale("br", {
        months: "Genver C'hwevrer Meurzh Ebrel Mae Mezheven Gouere Eost Gwengolo Here Du Kerzu".split(" "),
        monthsShort: "Gen C'hwe Meu Ebr Mae Eve Gou Eos Gwe Her Du Ker".split(" "),
        weekdays: "Sul Lun Meurzh Merc'her Yaou Gwener Sadorn".split(" "),
        weekdaysShort: "Sul Lun Meu Mer Yao Gwe Sad".split(" "),
        weekdaysMin: "Su Lu Me Mer Ya Gw Sa".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h[e]mm A",
            LTS: "h[e]mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY h[e]mm A",
            LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
        },
        calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warc'hoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Dec'h da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "a-benn %s",
            past: "%s 'zo",
            s: "un nebeud segondenno\u00f9",
            ss: "%d eilenn",
            m: "ur vunutenn",
            mm: cc,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: cc,
            M: "ur miz",
            MM: cc,
            y: "ur bloaz",
            yy: function(a) {
                switch (function Id(a) {
                    return 9 < a ? Id(a % 10) : a
                }(a)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return a + " bloaz";
                    default:
                        return a + " vloaz"
                }
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
        ordinal: function(a) {
            return a + (1 === a ? "a\u00f1" : "vet")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("bs", {
        months: "januar februar mart april maj juni juli august septembar oktobar novembar decembar".split(" "),
        monthsShort: "jan. feb. mar. apr. maj. jun. jul. aug. sep. okt. nov. dec.".split(" "),
        monthsParseExact: !0,
        weekdays: "nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),
        weekdaysShort: "ned. pon. uto. sri. \u010det. pet. sub.".split(" "),
        weekdaysMin: "ne po ut sr \u010de pe su".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju\u010der u] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[pro\u0161lu] dddd [u] LT";
                    case 6:
                        return "[pro\u0161le] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[pro\u0161li] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: Ma,
            m: Ma,
            mm: Ma,
            h: Ma,
            hh: Ma,
            d: "dan",
            dd: Ma,
            M: "mjesec",
            MM: Ma,
            y: "godinu",
            yy: Ma
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("ca", {
        months: {
            standalone: "gener febrer mar\u00e7 abril maig juny juliol agost setembre octubre novembre desembre".split(" "),
            format: "de gener;de febrer;de mar\u00e7;d'abril;de maig;de juny;de juliol;d'agost;de setembre;d'octubre;de novembre;de desembre".split(";"),
            isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: "gen. febr. mar\u00e7 abr. maig juny jul. ag. set. oct. nov. des.".split(" "),
        monthsParseExact: !0,
        weekdays: "diumenge dilluns dimarts dimecres dijous divendres dissabte".split(" "),
        weekdaysShort: "dg. dl. dt. dc. dj. dv. ds.".split(" "),
        weekdaysMin: "dg dl dt dc dj dv ds".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "D MMMM [de] YYYY [a les] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
            llll: "ddd D MMM YYYY, H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            nextDay: function() {
                return "[dem\u00e0 a " + (1 !== this.hours() ? "les" : "la") +
                    "] LT"
            },
            nextWeek: function() {
                return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            lastDay: function() {
                return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "d'aqu\u00ed %s",
            past: "fa %s",
            s: "uns segons",
            ss: "%d segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
        ordinal: function(a, b) {
            var e = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "\u00e8";
            return "w" !== b && "W" !== b || (e = "a"), a + e
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Ic = [/^led/i, /^\xfano/i, /^b\u0159e/i, /^dub/i, /^kv\u011b/i, /^(\u010dvn|\u010derven$|\u010dervna)/i, /^(\u010dvc|\u010dervenec|\u010dervence)/i, /^srp/i, /^z\xe1\u0159/i, /^\u0159\xedj/i, /^lis/i, /^pro/i],
        od = /^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i;
    h.defineLocale("cs", {
        months: "leden \u00fanor b\u0159ezen duben kv\u011bten \u010derven \u010dervenec srpen z\u00e1\u0159\u00ed \u0159\u00edjen listopad prosinec".split(" "),
        monthsShort: "led \u00fano b\u0159e dub kv\u011b \u010dvn \u010dvc srp z\u00e1\u0159 \u0159\u00edj lis pro".split(" "),
        monthsRegex: od,
        monthsShortRegex: od,
        monthsStrictRegex: /^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex: /^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i,
        monthsParse: Ic,
        longMonthsParse: Ic,
        shortMonthsParse: Ic,
        weekdays: "ned\u011ble pond\u011bl\u00ed \u00fater\u00fd st\u0159eda \u010dtvrtek p\u00e1tek sobota".split(" "),
        weekdaysShort: "ne po \u00fat st \u010dt p\u00e1 so".split(" "),
        weekdaysMin: "ne po \u00fat st \u010dt p\u00e1 so".split(" "),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY"
        },
        calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[z\u00edtra v] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v ned\u011bli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve st\u0159edu v] LT";
                    case 4:
                        return "[ve \u010dtvrtek v] LT";
                    case 5:
                        return "[v p\u00e1tek v] LT";
                    case 6:
                        return "[v sobotu v] LT"
                }
            },
            lastDay: "[v\u010dera v] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[minulou ned\u011bli v] LT";
                    case 1:
                    case 2:
                        return "[minul\u00e9] dddd [v] LT";
                    case 3:
                        return "[minulou st\u0159edu v] LT";
                    case 4:
                    case 5:
                        return "[minul\u00fd] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "p\u0159ed %s",
            s: fa,
            ss: fa,
            m: fa,
            mm: fa,
            h: fa,
            hh: fa,
            d: fa,
            dd: fa,
            M: fa,
            MM: fa,
            y: fa,
            yy: fa
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("cv", {
        months: "\u043a\u04d1\u0440\u043b\u0430\u0447 \u043d\u0430\u0440\u04d1\u0441 \u043f\u0443\u0448 \u0430\u043a\u0430 \u043c\u0430\u0439 \u04ab\u04d7\u0440\u0442\u043c\u0435 \u0443\u0442\u04d1 \u04ab\u0443\u0440\u043b\u0430 \u0430\u0432\u04d1\u043d \u044e\u043f\u0430 \u0447\u04f3\u043a \u0440\u0430\u0448\u0442\u0430\u0432".split(" "),
        monthsShort: "\u043a\u04d1\u0440 \u043d\u0430\u0440 \u043f\u0443\u0448 \u0430\u043a\u0430 \u043c\u0430\u0439 \u04ab\u04d7\u0440 \u0443\u0442\u04d1 \u04ab\u0443\u0440 \u0430\u0432\u043d \u044e\u043f\u0430 \u0447\u04f3\u043a \u0440\u0430\u0448".split(" "),
        weekdays: "\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d \u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d \u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d \u044e\u043d\u043a\u0443\u043d \u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d \u044d\u0440\u043d\u0435\u043a\u0443\u043d \u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split(" "),
        weekdaysShort: "\u0432\u044b\u0440 \u0442\u0443\u043d \u044b\u0442\u043b \u044e\u043d \u043a\u04d7\u04ab \u044d\u0440\u043d \u0448\u04d1\u043c".split(" "),
        weekdaysMin: "\u0432\u0440 \u0442\u043d \u044b\u0442 \u044e\u043d \u043a\u04ab \u044d\u0440 \u0448\u043c".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]",
            LLL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm",
            LLLL: "dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm"
        },
        calendar: {
            sameDay: "[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            nextDay: "[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            lastDay: "[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            nextWeek: "[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            lastWeek: "[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
            sameElse: "L"
        },
        relativeTime: {
            future: function(a) {
                return a + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(a) ? "\u0440\u0435\u043d" : /\u04ab\u0443\u043b$/i.exec(a) ? "\u0442\u0430\u043d" : "\u0440\u0430\u043d")
            },
            past: "%s \u043a\u0430\u044f\u043b\u043b\u0430",
            s: "\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",
            ss: "%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",
            m: "\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442",
            mm: "%d \u043c\u0438\u043d\u0443\u0442",
            h: "\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442",
            hh: "%d \u0441\u0435\u0445\u0435\u0442",
            d: "\u043f\u04d7\u0440 \u043a\u0443\u043d",
            dd: "%d \u043a\u0443\u043d",
            M: "\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445",
            MM: "%d \u0443\u0439\u04d1\u0445",
            y: "\u043f\u04d7\u0440 \u04ab\u0443\u043b",
            yy: "%d \u04ab\u0443\u043b"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/,
        ordinal: "%d-\u043c\u04d7\u0448",
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("cy", {
        months: "Ionawr Chwefror Mawrth Ebrill Mai Mehefin Gorffennaf Awst Medi Hydref Tachwedd Rhagfyr".split(" "),
        monthsShort: "Ion Chwe Maw Ebr Mai Meh Gor Aws Med Hyd Tach Rhag".split(" "),
        weekdays: "Dydd Sul;Dydd Llun;Dydd Mawrth;Dydd Mercher;Dydd Iau;Dydd Gwener;Dydd Sadwrn".split(";"),
        weekdaysShort: "Sul Llun Maw Mer Iau Gwe Sad".split(" "),
        weekdaysMin: "Su Ll Ma Me Ia Gw Sa".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "mewn %s",
            past: "%s yn \u00f4l",
            s: "ychydig eiliadau",
            ss: "%d eiliad",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function(a) {
            var e = "";
            return 20 < a ? e = 40 === a || 50 === a || 60 === a || 80 === a || 100 === a ? "fed" : "ain" : 0 < a && (e = " af il ydd ydd ed ed ed fed fed fed eg fed eg eg fed eg eg fed eg fed".split(" ")[a]), a + e
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("da", {
        months: "januar februar marts april maj juni juli august september oktober november december".split(" "),
        monthsShort: "jan feb mar apr maj jun jul aug sep okt nov dec".split(" "),
        weekdays: "s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),
        weekdaysShort: "s\u00f8n man tir ons tor fre l\u00f8r".split(" "),
        weekdaysMin: "s\u00f8 ma ti on to fr l\u00f8".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "p\u00e5 dddd [kl.] LT",
            lastDay: "[i g\u00e5r kl.] LT",
            lastWeek: "[i] dddd[s kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "f\u00e5 sekunder",
            ss: "%d sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en m\u00e5ned",
            MM: "%d m\u00e5neder",
            y: "et \u00e5r",
            yy: "%d \u00e5r"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("de-at", {
        months: "J\u00e4nner Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember".split(" "),
        monthsShort: "J\u00e4n. Feb. M\u00e4rz Apr. Mai Juni Juli Aug. Sep. Okt. Nov. Dez.".split(" "),
        monthsParseExact: !0,
        weekdays: "Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),
        weekdaysShort: "So. Mo. Di. Mi. Do. Fr. Sa.".split(" "),
        weekdaysMin: "So Mo Di Mi Do Fr Sa".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: Fa,
            mm: "%d Minuten",
            h: Fa,
            hh: "%d Stunden",
            d: Fa,
            dd: Fa,
            M: Fa,
            MM: Fa,
            y: Fa,
            yy: Fa
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("de-ch", {
        months: "Januar Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember".split(" "),
        monthsShort: "Jan. Feb. M\u00e4rz Apr. Mai Juni Juli Aug. Sep. Okt. Nov. Dez.".split(" "),
        monthsParseExact: !0,
        weekdays: "Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),
        weekdaysShort: "So Mo Di Mi Do Fr Sa".split(" "),
        weekdaysMin: "So Mo Di Mi Do Fr Sa".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: oa,
            mm: "%d Minuten",
            h: oa,
            hh: "%d Stunden",
            d: oa,
            dd: oa,
            M: oa,
            MM: oa,
            y: oa,
            yy: oa
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("de", {
        months: "Januar Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember".split(" "),
        monthsShort: "Jan. Feb. M\u00e4rz Apr. Mai Juni Juli Aug. Sep. Okt. Nov. Dez.".split(" "),
        monthsParseExact: !0,
        weekdays: "Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),
        weekdaysShort: "So. Mo. Di. Mi. Do. Fr. Sa.".split(" "),
        weekdaysMin: "So Mo Di Mi Do Fr Sa".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            ss: "%d Sekunden",
            m: Na,
            mm: "%d Minuten",
            h: Na,
            hh: "%d Stunden",
            d: Na,
            dd: Na,
            M: Na,
            MM: Na,
            y: Na,
            yy: Na
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var pd = "\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9 \u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9 \u0789\u07a7\u0783\u07a8\u0797\u07aa \u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa \u0789\u07ad \u0796\u07ab\u0782\u07b0 \u0796\u07aa\u078d\u07a6\u0787\u07a8 \u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa \u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa \u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa \u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa \u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa".split(" "),
        qd = "\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6 \u0780\u07af\u0789\u07a6 \u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6 \u0784\u07aa\u078b\u07a6 \u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8 \u0780\u07aa\u0786\u07aa\u0783\u07aa \u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa".split(" ");
    h.defineLocale("dv", {
        months: pd,
        monthsShort: pd,
        weekdays: qd,
        weekdaysShort: qd,
        weekdaysMin: "\u0787\u07a7\u078b\u07a8 \u0780\u07af\u0789\u07a6 \u0787\u07a6\u0782\u07b0 \u0784\u07aa\u078b\u07a6 \u0784\u07aa\u0783\u07a7 \u0780\u07aa\u0786\u07aa \u0780\u07ae\u0782\u07a8".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0789\u0786|\u0789\u078a/,
        isPM: function(a) {
            return "\u0789\u078a" === a
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\u0789\u0786" : "\u0789\u078a"
        },
        calendar: {
            sameDay: "[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT",
            nextDay: "[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT",
            nextWeek: "dddd LT",
            lastDay: "[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT",
            lastWeek: "[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s",
            past: "\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s",
            s: "\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0",
            ss: "d% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa",
            m: "\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0",
            mm: "\u0789\u07a8\u0782\u07a8\u0793\u07aa %d",
            h: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0",
            hh: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d",
            d: "\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0",
            dd: "\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d",
            M: "\u0789\u07a6\u0780\u07ac\u0787\u07b0",
            MM: "\u0789\u07a6\u0790\u07b0 %d",
            y: "\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0",
            yy: "\u0787\u07a6\u0780\u07a6\u0783\u07aa %d"
        },
        preparse: function(a) {
            return a.replace(/\u060c/g, ",")
        },
        postformat: function(a) {
            return a.replace(/,/g, "\u060c")
        },
        week: {
            dow: 7,
            doy: 12
        }
    });
    h.defineLocale("el", {
        monthsNominativeEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2 \u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2 \u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2 \u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2 \u039c\u03ac\u03b9\u03bf\u03c2 \u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2 \u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2 \u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2 \u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2 \u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2 \u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2 \u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split(" "),
        monthsGenitiveEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5 \u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5 \u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5 \u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5 \u039c\u03b1\u0390\u03bf\u03c5 \u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5 \u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5 \u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5 \u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 \u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5 \u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5 \u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split(" "),
        months: function(a, b) {
            return a ? "string" == typeof b && /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()] : this._monthsNominativeEl
        },
        monthsShort: "\u0399\u03b1\u03bd \u03a6\u03b5\u03b2 \u039c\u03b1\u03c1 \u0391\u03c0\u03c1 \u039c\u03b1\u03ca \u0399\u03bf\u03c5\u03bd \u0399\u03bf\u03c5\u03bb \u0391\u03c5\u03b3 \u03a3\u03b5\u03c0 \u039f\u03ba\u03c4 \u039d\u03bf\u03b5 \u0394\u03b5\u03ba".split(" "),
        weekdays: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae \u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1 \u03a4\u03c1\u03af\u03c4\u03b7 \u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7 \u03a0\u03ad\u03bc\u03c0\u03c4\u03b7 \u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae \u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split(" "),
        weekdaysShort: "\u039a\u03c5\u03c1 \u0394\u03b5\u03c5 \u03a4\u03c1\u03b9 \u03a4\u03b5\u03c4 \u03a0\u03b5\u03bc \u03a0\u03b1\u03c1 \u03a3\u03b1\u03b2".split(" "),
        weekdaysMin: "\u039a\u03c5 \u0394\u03b5 \u03a4\u03c1 \u03a4\u03b5 \u03a0\u03b5 \u03a0\u03b1 \u03a3\u03b1".split(" "),
        meridiem: function(a, b, c) {
            return 11 < a ? c ? "\u03bc\u03bc" : "\u039c\u039c" : c ? "\u03c0\u03bc" : "\u03a0\u039c"
        },
        isPM: function(a) {
            return "\u03bc" === (a + "").toLowerCase()[0]
        },
        meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendarEl: {
            sameDay: "[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT",
            nextDay: "[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[\u03a7\u03b8\u03b5\u03c2 {}] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 6:
                        return "[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT";
                    default:
                        return "[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT"
                }
            },
            sameElse: "L"
        },
        calendar: function(a, b) {
            var e = this._calendarEl[a],
                c = b && b.hours();
            return L(e) && (e = e.apply(b)), e.replace("{}", 1 == c % 12 ? "\u03c3\u03c4\u03b7" : "\u03c3\u03c4\u03b9\u03c2")
        },
        relativeTime: {
            future: "\u03c3\u03b5 %s",
            past: "%s \u03c0\u03c1\u03b9\u03bd",
            s: "\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
            ss: "%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
            m: "\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
            mm: "%d \u03bb\u03b5\u03c0\u03c4\u03ac",
            h: "\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",
            hh: "%d \u03ce\u03c1\u03b5\u03c2",
            d: "\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1",
            dd: "%d \u03bc\u03ad\u03c1\u03b5\u03c2",
            M: "\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2",
            MM: "%d \u03bc\u03ae\u03bd\u03b5\u03c2",
            y: "\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2",
            yy: "%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u03b7/,
        ordinal: "%d\u03b7",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("en-SG", {
        months: "January February March April May June July August September October November December".split(" "),
        monthsShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var e = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("en-au", {
        months: "January February March April May June July August September October November December".split(" "),
        monthsShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var e = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("en-ca", {
        months: "January February March April May June July August September October November December".split(" "),
        monthsShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "YYYY-MM-DD",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var e = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        }
    });
    h.defineLocale("en-gb", {
        months: "January February March April May June July August September October November December".split(" "),
        monthsShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var e = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("en-ie", {
        months: "January February March April May June July August September October November December".split(" "),
        monthsShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var e = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("en-il", {
        months: "January February March April May June July August September October November December".split(" "),
        monthsShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var e = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        }
    });
    h.defineLocale("en-nz", {
        months: "January February March April May June July August September October November December".split(" "),
        monthsShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        weekdaysShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        weekdaysMin: "Su Mo Tu We Th Fr Sa".split(" "),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var e = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("eo", {
        months: "januaro februaro marto aprilo majo junio julio a\u016dgusto septembro oktobro novembro decembro".split(" "),
        monthsShort: "jan feb mar apr maj jun jul a\u016dg sep okt nov dec".split(" "),
        weekdays: "diman\u0109o lundo mardo merkredo \u0135a\u016ddo vendredo sabato".split(" "),
        weekdaysShort: "dim lun mard merk \u0135a\u016d ven sab".split(" "),
        weekdaysMin: "di lu ma me \u0135a ve sa".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D[-a de] MMMM, YYYY",
            LLL: "D[-a de] MMMM, YYYY HH:mm",
            LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function(a) {
            return "p" === a.charAt(0).toLowerCase()
        },
        meridiem: function(a, b, c) {
            return 11 < a ? c ? "p.t.m." : "P.T.M." :
                c ? "a.t.m." : "A.T.M."
        },
        calendar: {
            sameDay: "[Hodia\u016d je] LT",
            nextDay: "[Morga\u016d je] LT",
            nextWeek: "dddd [je] LT",
            lastDay: "[Hiera\u016d je] LT",
            lastWeek: "[pasinta] dddd [je] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "post %s",
            past: "anta\u016d %s",
            s: "sekundoj",
            ss: "%d sekundoj",
            m: "minuto",
            mm: "%d minutoj",
            h: "horo",
            hh: "%d horoj",
            d: "tago",
            dd: "%d tagoj",
            M: "monato",
            MM: "%d monatoj",
            y: "jaro",
            yy: "%d jaroj"
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var rd = "ene. feb. mar. abr. may. jun. jul. ago. sep. oct. nov. dic.".split(" "),
        Ie = "ene feb mar abr may jun jul ago sep oct nov dic".split(" "),
        Jc = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        sd = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    h.defineLocale("es-do", {
        months: "enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" "),
        monthsShort: function(a,
            b) {
            return a ? /-MMM-/.test(b) ? Ie[a.month()] : rd[a.month()] : rd
        },
        monthsRegex: sd,
        monthsShortRegex: sd,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: Jc,
        longMonthsParse: Jc,
        shortMonthsParse: Jc,
        weekdays: "domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" "),
        weekdaysShort: "dom. lun. mar. mi\u00e9. jue. vie. s\u00e1b.".split(" "),
        weekdaysMin: "do lu ma mi ju vi s\u00e1".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextDay: function() {
                return "[ma\u00f1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastDay: function() {
                return "[ayer a la" +
                    (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d\u00eda",
            dd: "%d d\u00edas",
            M: "un mes",
            MM: "%d meses",
            y: "un a\u00f1o",
            yy: "%d a\u00f1os"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\u00ba",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var td = "ene. feb. mar. abr. may. jun. jul. ago. sep. oct. nov. dic.".split(" "),
        Je = "ene feb mar abr may jun jul ago sep oct nov dic".split(" "),
        Kc = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        ud = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    h.defineLocale("es-us", {
        months: "enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" "),
        monthsShort: function(a,
            b) {
            return a ? /-MMM-/.test(b) ? Je[a.month()] : td[a.month()] : td
        },
        monthsRegex: ud,
        monthsShortRegex: ud,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: Kc,
        longMonthsParse: Kc,
        shortMonthsParse: Kc,
        weekdays: "domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" "),
        weekdaysShort: "dom. lun. mar. mi\u00e9. jue. vie. s\u00e1b.".split(" "),
        weekdaysMin: "do lu ma mi ju vi s\u00e1".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "MM/DD/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextDay: function() {
                return "[ma\u00f1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastDay: function() {
                return "[ayer a la" +
                    (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d\u00eda",
            dd: "%d d\u00edas",
            M: "un mes",
            MM: "%d meses",
            y: "un a\u00f1o",
            yy: "%d a\u00f1os"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\u00ba",
        week: {
            dow: 0,
            doy: 6
        }
    });
    var vd = "ene. feb. mar. abr. may. jun. jul. ago. sep. oct. nov. dic.".split(" "),
        Ke = "ene feb mar abr may jun jul ago sep oct nov dic".split(" "),
        Lc = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        wd = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    h.defineLocale("es", {
        months: "enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" "),
        monthsShort: function(a, b) {
            return a ?
                /-MMM-/.test(b) ? Ke[a.month()] : vd[a.month()] : vd
        },
        monthsRegex: wd,
        monthsShortRegex: wd,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: Lc,
        longMonthsParse: Lc,
        shortMonthsParse: Lc,
        weekdays: "domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" "),
        weekdaysShort: "dom. lun. mar. mi\u00e9. jue. vie. s\u00e1b.".split(" "),
        weekdaysMin: "do lu ma mi ju vi s\u00e1".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextDay: function() {
                return "[ma\u00f1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastDay: function() {
                return "[ayer a la" + (1 !==
                    this.hours() ? "s" : "") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un d\u00eda",
            dd: "%d d\u00edas",
            M: "un mes",
            MM: "%d meses",
            y: "un a\u00f1o",
            yy: "%d a\u00f1os"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\u00ba",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("et", {
        months: "jaanuar veebruar m\u00e4rts aprill mai juuni juuli august september oktoober november detsember".split(" "),
        monthsShort: "jaan veebr m\u00e4rts apr mai juuni juuli aug sept okt nov dets".split(" "),
        weekdays: "p\u00fchap\u00e4ev esmasp\u00e4ev teisip\u00e4ev kolmap\u00e4ev neljap\u00e4ev reede laup\u00e4ev".split(" "),
        weekdaysShort: "PETKNRL".split(""),
        weekdaysMin: "PETKNRL".split(""),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[T\u00e4na,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[J\u00e4rgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s p\u00e4rast",
            past: "%s tagasi",
            s: pa,
            ss: pa,
            m: pa,
            mm: pa,
            h: pa,
            hh: pa,
            d: pa,
            dd: "%d p\u00e4eva",
            M: pa,
            MM: pa,
            y: pa,
            yy: pa
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("eu", {
        months: "urtarrila otsaila martxoa apirila maiatza ekaina uztaila abuztua iraila urria azaroa abendua".split(" "),
        monthsShort: "urt. ots. mar. api. mai. eka. uzt. abu. ira. urr. aza. abe.".split(" "),
        monthsParseExact: !0,
        weekdays: "igandea astelehena asteartea asteazkena osteguna ostirala larunbata".split(" "),
        weekdaysShort: "ig. al. ar. az. og. ol. lr.".split(" "),
        weekdaysMin: "ig al ar az og ol lr".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] HH:mm",
            llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
        },
        calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            ss: "%d segundo",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Le = {
            1: "\u06f1",
            2: "\u06f2",
            3: "\u06f3",
            4: "\u06f4",
            5: "\u06f5",
            6: "\u06f6",
            7: "\u06f7",
            8: "\u06f8",
            9: "\u06f9",
            0: "\u06f0"
        },
        Me = {
            "\u06f1": "1",
            "\u06f2": "2",
            "\u06f3": "3",
            "\u06f4": "4",
            "\u06f5": "5",
            "\u06f6": "6",
            "\u06f7": "7",
            "\u06f8": "8",
            "\u06f9": "9",
            "\u06f0": "0"
        };
    h.defineLocale("fa", {
        months: "\u0698\u0627\u0646\u0648\u06cc\u0647 \u0641\u0648\u0631\u06cc\u0647 \u0645\u0627\u0631\u0633 \u0622\u0648\u0631\u06cc\u0644 \u0645\u0647 \u0698\u0648\u0626\u0646 \u0698\u0648\u0626\u06cc\u0647 \u0627\u0648\u062a \u0633\u067e\u062a\u0627\u0645\u0628\u0631 \u0627\u06a9\u062a\u0628\u0631 \u0646\u0648\u0627\u0645\u0628\u0631 \u062f\u0633\u0627\u0645\u0628\u0631".split(" "),
        monthsShort: "\u0698\u0627\u0646\u0648\u06cc\u0647 \u0641\u0648\u0631\u06cc\u0647 \u0645\u0627\u0631\u0633 \u0622\u0648\u0631\u06cc\u0644 \u0645\u0647 \u0698\u0648\u0626\u0646 \u0698\u0648\u0626\u06cc\u0647 \u0627\u0648\u062a \u0633\u067e\u062a\u0627\u0645\u0628\u0631 \u0627\u06a9\u062a\u0628\u0631 \u0646\u0648\u0627\u0645\u0628\u0631 \u062f\u0633\u0627\u0645\u0628\u0631".split(" "),
        weekdays: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647 \u062f\u0648\u0634\u0646\u0628\u0647 \u0633\u0647\u200c\u0634\u0646\u0628\u0647 \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647 \u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647 \u062c\u0645\u0639\u0647 \u0634\u0646\u0628\u0647".split(" "),
        weekdaysShort: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647 \u062f\u0648\u0634\u0646\u0628\u0647 \u0633\u0647\u200c\u0634\u0646\u0628\u0647 \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647 \u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647 \u062c\u0645\u0639\u0647 \u0634\u0646\u0628\u0647".split(" "),
        weekdaysMin: "\u06cc\u062f\u0633\u0686\u067e\u062c\u0634".split(""),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,
        isPM: function(a) {
            return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(a)
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631" :
                "\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631"
        },
        calendar: {
            sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",
            nextDay: "[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT",
            nextWeek: "dddd [\u0633\u0627\u0639\u062a] LT",
            lastDay: "[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",
            lastWeek: "dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u062f\u0631 %s",
            past: "%s \u067e\u06cc\u0634",
            s: "\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647",
            ss: "\u062b\u0627\u0646\u06cc\u0647 d%",
            m: "\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647",
            mm: "%d \u062f\u0642\u06cc\u0642\u0647",
            h: "\u06cc\u06a9 \u0633\u0627\u0639\u062a",
            hh: "%d \u0633\u0627\u0639\u062a",
            d: "\u06cc\u06a9 \u0631\u0648\u0632",
            dd: "%d \u0631\u0648\u0632",
            M: "\u06cc\u06a9 \u0645\u0627\u0647",
            MM: "%d \u0645\u0627\u0647",
            y: "\u06cc\u06a9 \u0633\u0627\u0644",
            yy: "%d \u0633\u0627\u0644"
        },
        preparse: function(a) {
            return a.replace(/[\u06f0-\u06f9]/g, function(a) {
                return Me[a]
            }).replace(/\u060c/g, ",")
        },
        postformat: function(a) {
            return a.replace(/\d/g,
                function(a) {
                    return Le[a]
                }).replace(/,/g, "\u060c")
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u0645/,
        ordinal: "%d\u0645",
        week: {
            dow: 6,
            doy: 12
        }
    });
    var qc = "nolla yksi kaksi kolme nelj\u00e4 viisi kuusi seitsem\u00e4n kahdeksan yhdeks\u00e4n".split(" "),
        Vd = ["nolla", "yhden", "kahden", "kolmen", "nelj\u00e4n", "viiden", "kuuden", qc[7], qc[8], qc[9]];
    h.defineLocale("fi", {
        months: "tammikuu helmikuu maaliskuu huhtikuu toukokuu kes\u00e4kuu hein\u00e4kuu elokuu syyskuu lokakuu marraskuu joulukuu".split(" "),
        monthsShort: "tammi helmi maalis huhti touko kes\u00e4 hein\u00e4 elo syys loka marras joulu".split(" "),
        weekdays: "sunnuntai maanantai tiistai keskiviikko torstai perjantai lauantai".split(" "),
        weekdaysShort: "su ma ti ke to pe la".split(" "),
        weekdaysMin: "su ma ti ke to pe la".split(" "),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
            sameDay: "[t\u00e4n\u00e4\u00e4n] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s p\u00e4\u00e4st\u00e4",
            past: "%s sitten",
            s: ja,
            ss: ja,
            m: ja,
            mm: ja,
            h: ja,
            hh: ja,
            d: ja,
            dd: ja,
            M: ja,
            MM: ja,
            y: ja,
            yy: ja
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("fo", {
        months: "januar februar mars apr\u00edl mai juni juli august september oktober november desember".split(" "),
        monthsShort: "jan feb mar apr mai jun jul aug sep okt nov des".split(" "),
        weekdays: "sunnudagur m\u00e1nadagur t\u00fdsdagur mikudagur h\u00f3sdagur fr\u00edggjadagur leygardagur".split(" "),
        weekdaysShort: "sun m\u00e1n t\u00fds mik h\u00f3s fr\u00ed ley".split(" "),
        weekdaysMin: "su m\u00e1 t\u00fd mi h\u00f3 fr le".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D. MMMM, YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u00cd dag kl.] LT",
            nextDay: "[\u00cd morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[\u00cd gj\u00e1r kl.] LT",
            lastWeek: "[s\u00ed\u00f0stu] dddd [kl] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "um %s",
            past: "%s s\u00ed\u00f0ani",
            s: "f\u00e1 sekund",
            ss: "%d sekundir",
            m: "ein minuttur",
            mm: "%d minuttir",
            h: "ein t\u00edmi",
            hh: "%d t\u00edmar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein m\u00e1na\u00f0ur",
            MM: "%d m\u00e1na\u00f0ir",
            y: "eitt \u00e1r",
            yy: "%d \u00e1r"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("fr-ca", {
        months: "janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),
        monthsShort: "janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),
        monthsParseExact: !0,
        weekdays: "dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),
        weekdaysShort: "dim. lun. mar. mer. jeu. ven. sam.".split(" "),
        weekdaysMin: "di lu ma me je ve sa".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd\u2019hui \u00e0] LT",
            nextDay: "[Demain \u00e0] LT",
            nextWeek: "dddd [\u00e0] LT",
            lastDay: "[Hier \u00e0] LT",
            lastWeek: "dddd [dernier \u00e0] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(a, b) {
            switch (b) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                    return a + (1 === a ? "er" :
                        "e");
                case "w":
                case "W":
                    return a + (1 === a ? "re" : "e")
            }
        }
    });
    h.defineLocale("fr-ch", {
        months: "janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),
        monthsShort: "janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),
        monthsParseExact: !0,
        weekdays: "dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),
        weekdaysShort: "dim. lun. mar. mer. jeu. ven. sam.".split(" "),
        weekdaysMin: "di lu ma me je ve sa".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd\u2019hui \u00e0] LT",
            nextDay: "[Demain \u00e0] LT",
            nextWeek: "dddd [\u00e0] LT",
            lastDay: "[Hier \u00e0] LT",
            lastWeek: "dddd [dernier \u00e0] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(a, b) {
            switch (b) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                    return a + (1 === a ? "er" : "e");
                case "w":
                case "W":
                    return a + (1 === a ? "re" : "e")
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("fr", {
        months: "janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),
        monthsShort: "janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),
        monthsParseExact: !0,
        weekdays: "dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),
        weekdaysShort: "dim. lun. mar. mer. jeu. ven. sam.".split(" "),
        weekdaysMin: "di lu ma me je ve sa".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd\u2019hui \u00e0] LT",
            nextDay: "[Demain \u00e0] LT",
            nextWeek: "dddd [\u00e0] LT",
            lastDay: "[Hier \u00e0] LT",
            lastWeek: "dddd [dernier \u00e0] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            ss: "%d secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function(a, b) {
            switch (b) {
                case "D":
                    return a + (1 === a ? "er" : "");
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                    return a + (1 === a ? "er" : "e");
                case "w":
                case "W":
                    return a + (1 === a ? "re" : "e")
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var xd = "jan. feb. mrt. apr. mai jun. jul. aug. sep. okt. nov. des.".split(" "),
        Ne = "jan feb mrt apr mai jun jul aug sep okt nov des".split(" ");
    h.defineLocale("fy", {
        months: "jannewaris febrewaris maart april maaie juny july augustus septimber oktober novimber desimber".split(" "),
        monthsShort: function(a, b) {
            return a ? /-MMM-/.test(b) ? Ne[a.month()] : xd[a.month()] : xd
        },
        monthsParseExact: !0,
        weekdays: "snein moandei tiisdei woansdei tongersdei freed sneon".split(" "),
        weekdaysShort: "si. mo. ti. wo. to. fr. so.".split(" "),
        weekdaysMin: "Si Mo Ti Wo To Fr So".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[\u00f4fr\u00fbne] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            ss: "%d sekonden",
            m: "ien min\u00fat",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(a) {
            return a + (1 === a || 8 === a || 20 <= a ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("ga", {
        months: "Ean\u00e1ir;Feabhra;M\u00e1rta;Aibre\u00e1n;Bealtaine;M\u00e9itheamh;I\u00fail;L\u00fanasa;Me\u00e1n F\u00f3mhair;Deaireadh F\u00f3mhair;Samhain;Nollaig".split(";"),
        monthsShort: "Ean\u00e1 Feab M\u00e1rt Aibr Beal M\u00e9it I\u00fail L\u00fana Me\u00e1n Deai Samh Noll".split(" "),
        monthsParseExact: !0,
        weekdays: "D\u00e9 Domhnaigh;D\u00e9 Luain;D\u00e9 M\u00e1irt;D\u00e9 C\u00e9adaoin;D\u00e9ardaoin;D\u00e9 hAoine;D\u00e9 Satharn".split(";"),
        weekdaysShort: "Dom Lua M\u00e1i C\u00e9a D\u00e9a hAo Sat".split(" "),
        weekdaysMin: "Do Lu M\u00e1 Ce D\u00e9 hA Sa".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Inniu ag] LT",
            nextDay: "[Am\u00e1rach ag] LT",
            nextWeek: "dddd [ag] LT",
            lastDay: "[Inn\u00e9 aig] LT",
            lastWeek: "dddd [seo caite] [ag] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "i %s",
            past: "%s \u00f3 shin",
            s: "c\u00fapla soicind",
            ss: "%d soicind",
            m: "n\u00f3im\u00e9ad",
            mm: "%d n\u00f3im\u00e9ad",
            h: "uair an chloig",
            hh: "%d uair an chloig",
            d: "l\u00e1",
            dd: "%d l\u00e1",
            M: "m\u00ed",
            MM: "%d m\u00ed",
            y: "bliain",
            yy: "%d bliain"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function(a) {
            return a + (1 === a ? "d" : 2 == a % 10 ? "na" : "mh")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("gd", {
        months: "Am Faoilleach;An Gearran;Am M\u00e0rt;An Giblean;An C\u00e8itean;An t-\u00d2gmhios;An t-Iuchar;An L\u00f9nastal;An t-Sultain;An D\u00e0mhair;An t-Samhain;An D\u00f9bhlachd".split(";"),
        monthsShort: "Faoi Gear M\u00e0rt Gibl C\u00e8it \u00d2gmh Iuch L\u00f9n Sult D\u00e0mh Samh D\u00f9bh".split(" "),
        monthsParseExact: !0,
        weekdays: "Did\u00f2mhnaich Diluain Dim\u00e0irt Diciadain Diardaoin Dihaoine Disathairne".split(" "),
        weekdaysShort: "Did Dil Dim Dic Dia Dih Dis".split(" "),
        weekdaysMin: "D\u00f2 Lu M\u00e0 Ci Ar Ha Sa".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[An-diugh aig] LT",
            nextDay: "[A-m\u00e0ireach aig] LT",
            nextWeek: "dddd [aig] LT",
            lastDay: "[An-d\u00e8 aig] LT",
            lastWeek: "dddd [seo chaidh] [aig] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ann an %s",
            past: "bho chionn %s",
            s: "beagan diogan",
            ss: "%d diogan",
            m: "mionaid",
            mm: "%d mionaidean",
            h: "uair",
            hh: "%d uairean",
            d: "latha",
            dd: "%d latha",
            M: "m\u00ecos",
            MM: "%d m\u00ecosan",
            y: "bliadhna",
            yy: "%d bliadhna"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function(a) {
            return a + (1 === a ? "d" : 2 == a % 10 ? "na" : "mh")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("gl", {
        months: "xaneiro febreiro marzo abril maio xu\u00f1o xullo agosto setembro outubro novembro decembro".split(" "),
        monthsShort: "xan. feb. mar. abr. mai. xu\u00f1. xul. ago. set. out. nov. dec.".split(" "),
        monthsParseExact: !0,
        weekdays: "domingo luns martes m\u00e9rcores xoves venres s\u00e1bado".split(" "),
        weekdaysShort: "dom. lun. mar. m\u00e9r. xov. ven. s\u00e1b.".split(" "),
        weekdaysMin: "do lu ma m\u00e9 xo ve s\u00e1".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[hoxe " + (1 !== this.hours() ? "\u00e1s" : "\u00e1") + "] LT"
            },
            nextDay: function() {
                return "[ma\u00f1\u00e1 " + (1 !== this.hours() ? "\u00e1s" : "\u00e1") + "] LT"
            },
            nextWeek: function() {
                return "dddd [" + (1 !== this.hours() ? "\u00e1s" : "a") + "] LT"
            },
            lastDay: function() {
                return "[onte " + (1 !== this.hours() ? "\u00e1" : "a") + "] LT"
            },
            lastWeek: function() {
                return "[o] dddd [pasado " + (1 !== this.hours() ? "\u00e1s" :
                    "a") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(a) {
                return 0 === a.indexOf("un") ? "n" + a : "en " + a
            },
            past: "hai %s",
            s: "uns segundos",
            ss: "%d segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un d\u00eda",
            dd: "%d d\u00edas",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\u00ba",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("gom-latn", {
        months: "Janer Febrer Mars Abril Mai Jun Julai Agost Setembr Otubr Novembr Dezembr".split(" "),
        monthsShort: "Jan. Feb. Mars Abr. Mai Jun Jul. Ago. Set. Otu. Nov. Dez.".split(" "),
        monthsParseExact: !0,
        weekdays: "Aitar Somar Mongllar Budvar Brestar Sukrar Son'var".split(" "),
        weekdaysShort: "Ait. Som. Mon. Bud. Bre. Suk. Son.".split(" "),
        weekdaysMin: "Ai Sm Mo Bu Br Su Sn".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "A h:mm [vazta]",
            LTS: "A h:mm:ss [vazta]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [vazta]",
            LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
            llll: "ddd, D MMM YYYY, A h:mm [vazta]"
        },
        calendar: {
            sameDay: "[Aiz] LT",
            nextDay: "[Faleam] LT",
            nextWeek: "[Ieta to] dddd[,] LT",
            lastDay: "[Kal] LT",
            lastWeek: "[Fatlo] dddd[,] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s",
            past: "%s adim",
            s: ba,
            ss: ba,
            m: ba,
            mm: ba,
            h: ba,
            hh: ba,
            d: ba,
            dd: ba,
            M: ba,
            MM: ba,
            y: ba,
            yy: ba
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function(a, b) {
            switch (b) {
                case "D":
                    return a + "er";
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                case "w":
                case "W":
                    return a
            }
        },
        week: {
            dow: 1,
            doy: 4
        },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "rati" === b ? 4 > a ? a : a + 12 : "sokalli" === b ? a : "donparam" === b ?
                12 < a ? a : a + 12 : "sanje" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "rati" : 12 > a ? "sokalli" : 16 > a ? "donparam" : 20 > a ? "sanje" : "rati"
        }
    });
    var Oe = {
            1: "\u0ae7",
            2: "\u0ae8",
            3: "\u0ae9",
            4: "\u0aea",
            5: "\u0aeb",
            6: "\u0aec",
            7: "\u0aed",
            8: "\u0aee",
            9: "\u0aef",
            0: "\u0ae6"
        },
        Pe = {
            "\u0ae7": "1",
            "\u0ae8": "2",
            "\u0ae9": "3",
            "\u0aea": "4",
            "\u0aeb": "5",
            "\u0aec": "6",
            "\u0aed": "7",
            "\u0aee": "8",
            "\u0aef": "9",
            "\u0ae6": "0"
        };
    h.defineLocale("gu", {
        months: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0 \u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0 \u0aae\u0abe\u0ab0\u0acd\u0a9a \u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2 \u0aae\u0ac7 \u0a9c\u0ac2\u0aa8 \u0a9c\u0ac1\u0ab2\u0abe\u0a88 \u0a91\u0a97\u0ab8\u0acd\u0a9f \u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0 \u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0 \u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0 \u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split(" "),
        monthsShort: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1. \u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1. \u0aae\u0abe\u0ab0\u0acd\u0a9a \u0a8f\u0aaa\u0acd\u0ab0\u0abf. \u0aae\u0ac7 \u0a9c\u0ac2\u0aa8 \u0a9c\u0ac1\u0ab2\u0abe. \u0a91\u0a97. \u0ab8\u0aaa\u0acd\u0a9f\u0ac7. \u0a91\u0a95\u0acd\u0a9f\u0acd. \u0aa8\u0ab5\u0ac7. \u0aa1\u0abf\u0ab8\u0ac7.".split(" "),
        monthsParseExact: !0,
        weekdays: "\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0 \u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0 \u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0 \u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0 \u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0 \u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0 \u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split(" "),
        weekdaysShort: "\u0ab0\u0ab5\u0abf \u0ab8\u0acb\u0aae \u0aae\u0a82\u0a97\u0ab3 \u0aac\u0ac1\u0aa7\u0acd \u0a97\u0ac1\u0ab0\u0ac1 \u0ab6\u0ac1\u0a95\u0acd\u0ab0 \u0ab6\u0aa8\u0abf".split(" "),
        weekdaysMin: "\u0ab0 \u0ab8\u0acb \u0aae\u0a82 \u0aac\u0ac1 \u0a97\u0ac1 \u0ab6\u0ac1 \u0ab6".split(" "),
        longDateFormat: {
            LT: "A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
            LTS: "A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7"
        },
        calendar: {
            sameDay: "[\u0a86\u0a9c] LT",
            nextDay: "[\u0a95\u0abe\u0ab2\u0ac7] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT",
            lastWeek: "[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0aae\u0abe",
            past: "%s \u0aaa\u0ac7\u0ab9\u0ab2\u0abe",
            s: "\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb",
            ss: "%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1",
            m: "\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f",
            mm: "%d \u0aae\u0abf\u0aa8\u0abf\u0a9f",
            h: "\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95",
            hh: "%d \u0a95\u0ab2\u0abe\u0a95",
            d: "\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8",
            dd: "%d \u0aa6\u0abf\u0ab5\u0ab8",
            M: "\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb",
            MM: "%d \u0aae\u0ab9\u0abf\u0aa8\u0acb",
            y: "\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7",
            yy: "%d \u0ab5\u0ab0\u0acd\u0ab7"
        },
        preparse: function(a) {
            return a.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function(a) {
                return Pe[a]
            })
        },
        postformat: function(a) {
            return a.replace(/\d/g,
                function(a) {
                    return Oe[a]
                })
        },
        meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u0ab0\u0abe\u0aa4" === b ? 4 > a ? a : a + 12 : "\u0ab8\u0ab5\u0abe\u0ab0" === b ? a : "\u0aac\u0aaa\u0acb\u0ab0" === b ? 10 <= a ? a : a + 12 : "\u0ab8\u0abe\u0a82\u0a9c" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "\u0ab0\u0abe\u0aa4" : 10 > a ? "\u0ab8\u0ab5\u0abe\u0ab0" : 17 > a ? "\u0aac\u0aaa\u0acb\u0ab0" : 20 > a ? "\u0ab8\u0abe\u0a82\u0a9c" : "\u0ab0\u0abe\u0aa4"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    h.defineLocale("he", {
        months: "\u05d9\u05e0\u05d5\u05d0\u05e8 \u05e4\u05d1\u05e8\u05d5\u05d0\u05e8 \u05de\u05e8\u05e5 \u05d0\u05e4\u05e8\u05d9\u05dc \u05de\u05d0\u05d9 \u05d9\u05d5\u05e0\u05d9 \u05d9\u05d5\u05dc\u05d9 \u05d0\u05d5\u05d2\u05d5\u05e1\u05d8 \u05e1\u05e4\u05d8\u05de\u05d1\u05e8 \u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8 \u05e0\u05d5\u05d1\u05de\u05d1\u05e8 \u05d3\u05e6\u05de\u05d1\u05e8".split(" "),
        monthsShort: "\u05d9\u05e0\u05d5\u05f3 \u05e4\u05d1\u05e8\u05f3 \u05de\u05e8\u05e5 \u05d0\u05e4\u05e8\u05f3 \u05de\u05d0\u05d9 \u05d9\u05d5\u05e0\u05d9 \u05d9\u05d5\u05dc\u05d9 \u05d0\u05d5\u05d2\u05f3 \u05e1\u05e4\u05d8\u05f3 \u05d0\u05d5\u05e7\u05f3 \u05e0\u05d5\u05d1\u05f3 \u05d3\u05e6\u05de\u05f3".split(" "),
        weekdays: "\u05e8\u05d0\u05e9\u05d5\u05df \u05e9\u05e0\u05d9 \u05e9\u05dc\u05d9\u05e9\u05d9 \u05e8\u05d1\u05d9\u05e2\u05d9 \u05d7\u05de\u05d9\u05e9\u05d9 \u05e9\u05d9\u05e9\u05d9 \u05e9\u05d1\u05ea".split(" "),
        weekdaysShort: "\u05d0\u05f3 \u05d1\u05f3 \u05d2\u05f3 \u05d3\u05f3 \u05d4\u05f3 \u05d5\u05f3 \u05e9\u05f3".split(" "),
        weekdaysMin: "\u05d0\u05d1\u05d2\u05d3\u05d4\u05d5\u05e9".split(""),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [\u05d1]MMMM YYYY",
            LLL: "D [\u05d1]MMMM YYYY HH:mm",
            LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT",
            nextDay: "[\u05de\u05d7\u05e8 \u05d1\u05be]LT",
            nextWeek: "dddd [\u05d1\u05e9\u05e2\u05d4] LT",
            lastDay: "[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT",
            lastWeek: "[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u05d1\u05e2\u05d5\u05d3 %s",
            past: "\u05dc\u05e4\u05e0\u05d9 %s",
            s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",
            ss: "%d \u05e9\u05e0\u05d9\u05d5\u05ea",
            m: "\u05d3\u05e7\u05d4",
            mm: "%d \u05d3\u05e7\u05d5\u05ea",
            h: "\u05e9\u05e2\u05d4",
            hh: function(a) {
                return 2 === a ? "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd" : a + " \u05e9\u05e2\u05d5\u05ea"
            },
            d: "\u05d9\u05d5\u05dd",
            dd: function(a) {
                return 2 === a ? "\u05d9\u05d5\u05de\u05d9\u05d9\u05dd" : a + " \u05d9\u05de\u05d9\u05dd"
            },
            M: "\u05d7\u05d5\u05d3\u05e9",
            MM: function(a) {
                return 2 === a ? "\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd" :
                    a + " \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"
            },
            y: "\u05e9\u05e0\u05d4",
            yy: function(a) {
                return 2 === a ? "\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd" : 0 == a % 10 && 10 !== a ? a + " \u05e9\u05e0\u05d4" : a + " \u05e9\u05e0\u05d9\u05dd"
            }
        },
        meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,
        isPM: function(a) {
            return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(a)
        },
        meridiem: function(a, b, c) {
            return 5 > a ? "\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8" : 10 > a ? "\u05d1\u05d1\u05d5\u05e7\u05e8" : 12 > a ? c ? '\u05dc\u05e4\u05e0\u05d4"\u05e6' : "\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : 18 > a ? c ? '\u05d0\u05d7\u05d4"\u05e6' : "\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" :
                "\u05d1\u05e2\u05e8\u05d1"
        }
    });
    var Qe = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966"
        },
        Re = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0"
        };
    h.defineLocale("hi", {
        months: "\u091c\u0928\u0935\u0930\u0940 \u092b\u093c\u0930\u0935\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u0948\u0932 \u092e\u0908 \u091c\u0942\u0928 \u091c\u0941\u0932\u093e\u0908 \u0905\u0917\u0938\u094d\u0924 \u0938\u093f\u0924\u092e\u094d\u092c\u0930 \u0905\u0915\u094d\u091f\u0942\u092c\u0930 \u0928\u0935\u092e\u094d\u092c\u0930 \u0926\u093f\u0938\u092e\u094d\u092c\u0930".split(" "),
        monthsShort: "\u091c\u0928. \u092b\u093c\u0930. \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u0948. \u092e\u0908 \u091c\u0942\u0928 \u091c\u0941\u0932. \u0905\u0917. \u0938\u093f\u0924. \u0905\u0915\u094d\u091f\u0942. \u0928\u0935. \u0926\u093f\u0938.".split(" "),
        monthsParseExact: !0,
        weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930 \u0938\u094b\u092e\u0935\u093e\u0930 \u092e\u0902\u0917\u0932\u0935\u093e\u0930 \u092c\u0941\u0927\u0935\u093e\u0930 \u0917\u0941\u0930\u0942\u0935\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930 \u0936\u0928\u093f\u0935\u093e\u0930".split(" "),
        weekdaysShort: "\u0930\u0935\u093f \u0938\u094b\u092e \u092e\u0902\u0917\u0932 \u092c\u0941\u0927 \u0917\u0941\u0930\u0942 \u0936\u0941\u0915\u094d\u0930 \u0936\u0928\u093f".split(" "),
        weekdaysMin: "\u0930 \u0938\u094b \u092e\u0902 \u092c\u0941 \u0917\u0941 \u0936\u0941 \u0936".split(" "),
        longDateFormat: {
            LT: "A h:mm \u092c\u091c\u0947",
            LTS: "A h:mm:ss \u092c\u091c\u0947",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u092c\u091c\u0947",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947"
        },
        calendar: {
            sameDay: "[\u0906\u091c] LT",
            nextDay: "[\u0915\u0932] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0915\u0932] LT",
            lastWeek: "[\u092a\u093f\u091b\u0932\u0947] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u092e\u0947\u0902",
            past: "%s \u092a\u0939\u0932\u0947",
            s: "\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",
            ss: "%d \u0938\u0947\u0915\u0902\u0921",
            m: "\u090f\u0915 \u092e\u093f\u0928\u091f",
            mm: "%d \u092e\u093f\u0928\u091f",
            h: "\u090f\u0915 \u0918\u0902\u091f\u093e",
            hh: "%d \u0918\u0902\u091f\u0947",
            d: "\u090f\u0915 \u0926\u093f\u0928",
            dd: "%d \u0926\u093f\u0928",
            M: "\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",
            MM: "%d \u092e\u0939\u0940\u0928\u0947",
            y: "\u090f\u0915 \u0935\u0930\u094d\u0937",
            yy: "%d \u0935\u0930\u094d\u0937"
        },
        preparse: function(a) {
            return a.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(a) {
                return Re[a]
            })
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return Qe[a]
            })
        },
        meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u0930\u093e\u0924" === b ? 4 > a ? a : a + 12 : "\u0938\u0941\u092c\u0939" === b ? a : "\u0926\u094b\u092a\u0939\u0930" === b ? 10 <= a ? a : a + 12 : "\u0936\u093e\u092e" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "\u0930\u093e\u0924" : 10 > a ? "\u0938\u0941\u092c\u0939" : 17 > a ? "\u0926\u094b\u092a\u0939\u0930" : 20 > a ? "\u0936\u093e\u092e" : "\u0930\u093e\u0924"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    h.defineLocale("hr", {
        months: {
            format: "sije\u010dnja velja\u010de o\u017eujka travnja svibnja lipnja srpnja kolovoza rujna listopada studenoga prosinca".split(" "),
            standalone: "sije\u010danj velja\u010da o\u017eujak travanj svibanj lipanj srpanj kolovoz rujan listopad studeni prosinac".split(" ")
        },
        monthsShort: "sij. velj. o\u017eu. tra. svi. lip. srp. kol. ruj. lis. stu. pro.".split(" "),
        monthsParseExact: !0,
        weekdays: "nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),
        weekdaysShort: "ned. pon. uto. sri. \u010det. pet. sub.".split(" "),
        weekdaysMin: "ne po ut sr \u010de pe su".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju\u010der u] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[pro\u0161lu] dddd [u] LT";
                    case 6:
                        return "[pro\u0161le] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[pro\u0161li] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: Oa,
            m: Oa,
            mm: Oa,
            h: Oa,
            hh: Oa,
            d: "dan",
            dd: Oa,
            M: "mjesec",
            MM: Oa,
            y: "godinu",
            yy: Oa
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var yd = "vas\u00e1rnap h\u00e9tf\u0151n kedden szerd\u00e1n cs\u00fct\u00f6rt\u00f6k\u00f6n p\u00e9nteken szombaton".split(" ");
    h.defineLocale("hu", {
        months: "janu\u00e1r febru\u00e1r m\u00e1rcius \u00e1prilis m\u00e1jus j\u00fanius j\u00falius augusztus szeptember okt\u00f3ber november december".split(" "),
        monthsShort: "jan feb m\u00e1rc \u00e1pr m\u00e1j j\u00fan j\u00fal aug szept okt nov dec".split(" "),
        weekdays: "vas\u00e1rnap h\u00e9tf\u0151 kedd szerda cs\u00fct\u00f6rt\u00f6k p\u00e9ntek szombat".split(" "),
        weekdaysShort: "vas h\u00e9t kedd sze cs\u00fct p\u00e9n szo".split(" "),
        weekdaysMin: "v h k sze cs p szo".split(" "),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm"
        },
        meridiemParse: /de|du/i,
        isPM: function(a) {
            return "u" ===
                a.charAt(1).toLowerCase()
        },
        meridiem: function(a, b, c) {
            return 12 > a ? !0 === c ? "de" : "DE" : !0 === c ? "du" : "DU"
        },
        calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function() {
                return "[" + yd[this.day()] + "] LT[-kor]"
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function() {
                return "[m\u00falt] [" + yd[this.day()] + "] LT[-kor]"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s m\u00falva",
            past: "%s",
            s: K,
            ss: K,
            m: K,
            mm: K,
            h: K,
            hh: K,
            d: K,
            dd: K,
            M: K,
            MM: K,
            y: K,
            yy: K
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("hy-am", {
        months: {
            format: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b \u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b \u0574\u0561\u0580\u057f\u056b \u0561\u057a\u0580\u056b\u056c\u056b \u0574\u0561\u0575\u056b\u057d\u056b \u0570\u0578\u0582\u0576\u056b\u057d\u056b \u0570\u0578\u0582\u056c\u056b\u057d\u056b \u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b \u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b \u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b \u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b \u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split(" "),
            standalone: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580 \u0583\u0565\u057f\u0580\u057e\u0561\u0580 \u0574\u0561\u0580\u057f \u0561\u057a\u0580\u056b\u056c \u0574\u0561\u0575\u056b\u057d \u0570\u0578\u0582\u0576\u056b\u057d \u0570\u0578\u0582\u056c\u056b\u057d \u0585\u0563\u0578\u057d\u057f\u0578\u057d \u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580 \u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580 \u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580 \u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split(" ")
        },
        monthsShort: "\u0570\u0576\u057e \u0583\u057f\u0580 \u0574\u0580\u057f \u0561\u057a\u0580 \u0574\u0575\u057d \u0570\u0576\u057d \u0570\u056c\u057d \u0585\u0563\u057d \u057d\u057a\u057f \u0570\u056f\u057f \u0576\u0574\u0562 \u0564\u056f\u057f".split(" "),
        weekdays: "\u056f\u056b\u0580\u0561\u056f\u056b \u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b \u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b \u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b \u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b \u0578\u0582\u0580\u0562\u0561\u0569 \u0577\u0561\u0562\u0561\u0569".split(" "),
        weekdaysShort: "\u056f\u0580\u056f \u0565\u0580\u056f \u0565\u0580\u0584 \u0579\u0580\u0584 \u0570\u0576\u0563 \u0578\u0582\u0580\u0562 \u0577\u0562\u0569".split(" "),
        weekdaysMin: "\u056f\u0580\u056f \u0565\u0580\u056f \u0565\u0580\u0584 \u0579\u0580\u0584 \u0570\u0576\u0563 \u0578\u0582\u0580\u0562 \u0577\u0562\u0569".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0569.",
            LLL: "D MMMM YYYY \u0569., HH:mm",
            LLLL: "dddd, D MMMM YYYY \u0569., HH:mm"
        },
        calendar: {
            sameDay: "[\u0561\u0575\u057d\u0585\u0580] LT",
            nextDay: "[\u057e\u0561\u0572\u0568] LT",
            lastDay: "[\u0565\u0580\u0565\u056f] LT",
            nextWeek: function() {
                return "dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"
            },
            lastWeek: function() {
                return "[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0570\u0565\u057f\u0578",
            past: "%s \u0561\u057c\u0561\u057b",
            s: "\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",
            ss: "%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",
            m: "\u0580\u0578\u057a\u0565",
            mm: "%d \u0580\u0578\u057a\u0565",
            h: "\u056a\u0561\u0574",
            hh: "%d \u056a\u0561\u0574",
            d: "\u0585\u0580",
            dd: "%d \u0585\u0580",
            M: "\u0561\u0574\u056b\u057d",
            MM: "%d \u0561\u0574\u056b\u057d",
            y: "\u057f\u0561\u0580\u056b",
            yy: "%d \u057f\u0561\u0580\u056b"
        },
        meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
        isPM: function(a) {
            return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(a)
        },
        meridiem: function(a) {
            return 4 > a ? "\u0563\u056b\u0577\u0565\u0580\u057e\u0561" : 12 > a ? "\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561" : 17 > a ? "\u0581\u0565\u0580\u0565\u056f\u057e\u0561" : "\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576"
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
        ordinal: function(a, b) {
            switch (b) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                    return 1 === a ? a + "-\u056b\u0576" : a + "-\u0580\u0564";
                default:
                    return a
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("id", {
        months: "Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember".split(" "),
        monthsShort: "Jan Feb Mar Apr Mei Jun Jul Agt Sep Okt Nov Des".split(" "),
        weekdays: "Minggu Senin Selasa Rabu Kamis Jumat Sabtu".split(" "),
        weekdaysShort: "Min Sen Sel Rab Kam Jum Sab".split(" "),
        weekdaysMin: "Mg Sn Sl Rb Km Jm Sb".split(" "),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? 11 <= a ?
                a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 11 > a ? "pagi" : 15 > a ? "siang" : 19 > a ? "sore" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            ss: "%d detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("is", {
        months: "jan\u00faar febr\u00faar mars apr\u00edl ma\u00ed j\u00fan\u00ed j\u00fal\u00ed \u00e1g\u00fast september okt\u00f3ber n\u00f3vember desember".split(" "),
        monthsShort: "jan feb mar apr ma\u00ed j\u00fan j\u00fal \u00e1g\u00fa sep okt n\u00f3v des".split(" "),
        weekdays: "sunnudagur m\u00e1nudagur \u00feri\u00f0judagur mi\u00f0vikudagur fimmtudagur f\u00f6studagur laugardagur".split(" "),
        weekdaysShort: "sun m\u00e1n \u00feri mi\u00f0 fim f\u00f6s lau".split(" "),
        weekdaysMin: "Su M\u00e1 \u00der Mi Fi F\u00f6 La".split(" "),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
        },
        calendar: {
            sameDay: "[\u00ed dag kl.] LT",
            nextDay: "[\u00e1 morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[\u00ed g\u00e6r kl.] LT",
            lastWeek: "[s\u00ed\u00f0asta] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "eftir %s",
            past: "fyrir %s s\u00ed\u00f0an",
            s: Ga,
            ss: Ga,
            m: Ga,
            mm: Ga,
            h: "klukkustund",
            hh: Ga,
            d: Ga,
            dd: Ga,
            M: Ga,
            MM: Ga,
            y: Ga,
            yy: Ga
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("it-ch", {
        months: "gennaio febbraio marzo aprile maggio giugno luglio agosto settembre ottobre novembre dicembre".split(" "),
        monthsShort: "gen feb mar apr mag giu lug ago set ott nov dic".split(" "),
        weekdays: "domenica luned\u00ec marted\u00ec mercoled\u00ec gioved\u00ec venerd\u00ec sabato".split(" "),
        weekdaysShort: "dom lun mar mer gio ven sab".split(" "),
        weekdaysMin: "do lu ma me gi ve sa".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(a) {
                return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a
            },
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\u00ba",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("it", {
        months: "gennaio febbraio marzo aprile maggio giugno luglio agosto settembre ottobre novembre dicembre".split(" "),
        monthsShort: "gen feb mar apr mag giu lug ago set ott nov dic".split(" "),
        weekdays: "domenica luned\u00ec marted\u00ec mercoled\u00ec gioved\u00ec venerd\u00ec sabato".split(" "),
        weekdaysShort: "dom lun mar mer gio ven sab".split(" "),
        weekdaysMin: "do lu ma me gi ve sa".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(a) {
                return (/^[0-9].+$/.test(a) ?
                    "tra" : "in") + " " + a
            },
            past: "%s fa",
            s: "alcuni secondi",
            ss: "%d secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\u00ba",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("ja", {
        months: "\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),
        monthsShort: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
        weekdays: "\u65e5\u66dc\u65e5 \u6708\u66dc\u65e5 \u706b\u66dc\u65e5 \u6c34\u66dc\u65e5 \u6728\u66dc\u65e5 \u91d1\u66dc\u65e5 \u571f\u66dc\u65e5".split(" "),
        weekdaysShort: "\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),
        weekdaysMin: "\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f".split(""),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            LLLL: "YYYY\u5e74M\u6708D\u65e5 dddd HH:mm",
            l: "YYYY/MM/DD",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm"
        },
        meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
        isPM: function(a) {
            return "\u5348\u5f8c" === a
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\u5348\u524d" : "\u5348\u5f8c"
        },
        calendar: {
            sameDay: "[\u4eca\u65e5] LT",
            nextDay: "[\u660e\u65e5] LT",
            nextWeek: function(a) {
                return a.week() < this.week() ? "[\u6765\u9031]dddd LT" : "dddd LT"
            },
            lastDay: "[\u6628\u65e5] LT",
            lastWeek: function(a) {
                return this.week() < a.week() ? "[\u5148\u9031]dddd LT" : "dddd LT"
            },
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u65e5/,
        ordinal: function(a, b) {
            switch (b) {
                case "d":
                case "D":
                case "DDD":
                    return a + "\u65e5";
                default:
                    return a
            }
        },
        relativeTime: {
            future: "%s\u5f8c",
            past: "%s\u524d",
            s: "\u6570\u79d2",
            ss: "%d\u79d2",
            m: "1\u5206",
            mm: "%d\u5206",
            h: "1\u6642\u9593",
            hh: "%d\u6642\u9593",
            d: "1\u65e5",
            dd: "%d\u65e5",
            M: "1\u30f6\u6708",
            MM: "%d\u30f6\u6708",
            y: "1\u5e74",
            yy: "%d\u5e74"
        }
    });
    h.defineLocale("jv", {
        months: "Januari Februari Maret April Mei Juni Juli Agustus September Oktober Nopember Desember".split(" "),
        monthsShort: "Jan Feb Mar Apr Mei Jun Jul Ags Sep Okt Nop Des".split(" "),
        weekdays: "Minggu Senen Seloso Rebu Kemis Jemuwah Septu".split(" "),
        weekdaysShort: "Min Sen Sel Reb Kem Jem Sep".split(" "),
        weekdaysMin: "Mg Sn Sl Rb Km Jm Sp".split(" "),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "enjing" === b ? a : "siyang" ===
                b ? 11 <= a ? a : a + 12 : "sonten" === b || "ndalu" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 11 > a ? "enjing" : 15 > a ? "siyang" : 19 > a ? "sonten" : "ndalu"
        },
        calendar: {
            sameDay: "[Dinten puniko pukul] LT",
            nextDay: "[Mbenjang pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kala wingi pukul] LT",
            lastWeek: "dddd [kepengker pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "wonten ing %s",
            past: "%s ingkang kepengker",
            s: "sawetawis detik",
            ss: "%d detik",
            m: "setunggal menit",
            mm: "%d menit",
            h: "setunggal jam",
            hh: "%d jam",
            d: "sedinten",
            dd: "%d dinten",
            M: "sewulan",
            MM: "%d wulan",
            y: "setaun",
            yy: "%d taun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("ka", {
        months: {
            standalone: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8 \u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8 \u10db\u10d0\u10e0\u10e2\u10d8 \u10d0\u10de\u10e0\u10d8\u10da\u10d8 \u10db\u10d0\u10d8\u10e1\u10d8 \u10d8\u10d5\u10dc\u10d8\u10e1\u10d8 \u10d8\u10d5\u10da\u10d8\u10e1\u10d8 \u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd \u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8 \u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8 \u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8 \u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split(" "),
            format: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10e1 \u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10e1 \u10db\u10d0\u10e0\u10e2\u10e1 \u10d0\u10de\u10e0\u10d8\u10da\u10d8\u10e1 \u10db\u10d0\u10d8\u10e1\u10e1 \u10d8\u10d5\u10dc\u10d8\u10e1\u10e1 \u10d8\u10d5\u10da\u10d8\u10e1\u10e1 \u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10e1 \u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10e1 \u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10e1 \u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10e1 \u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10e1".split(" ")
        },
        monthsShort: "\u10d8\u10d0\u10dc \u10d7\u10d4\u10d1 \u10db\u10d0\u10e0 \u10d0\u10de\u10e0 \u10db\u10d0\u10d8 \u10d8\u10d5\u10dc \u10d8\u10d5\u10da \u10d0\u10d2\u10d5 \u10e1\u10d4\u10e5 \u10dd\u10e5\u10e2 \u10dc\u10dd\u10d4 \u10d3\u10d4\u10d9".split(" "),
        weekdays: {
            standalone: "\u10d9\u10d5\u10d8\u10e0\u10d0 \u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8 \u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8 \u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8 \u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8 \u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8 \u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split(" "),
            format: "\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1 \u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1 \u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1 \u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1 \u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1 \u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1 \u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split(" "),
            isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/
        },
        weekdaysShort: "\u10d9\u10d5\u10d8 \u10dd\u10e0\u10e8 \u10e1\u10d0\u10db \u10dd\u10d7\u10ee \u10ee\u10e3\u10d7 \u10de\u10d0\u10e0 \u10e8\u10d0\u10d1".split(" "),
        weekdaysMin: "\u10d9\u10d5 \u10dd\u10e0 \u10e1\u10d0 \u10dd\u10d7 \u10ee\u10e3 \u10de\u10d0 \u10e8\u10d0".split(" "),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]",
            nextDay: "[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]",
            lastDay: "[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]",
            nextWeek: "[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]",
            lastWeek: "[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4",
            sameElse: "L"
        },
        relativeTime: {
            future: function(a) {
                return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(a) ? a.replace(/\u10d8$/, "\u10e8\u10d8") : a + "\u10e8\u10d8"
            },
            past: function(a) {
                return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(a) ? a.replace(/(\u10d8|\u10d4)$/, "\u10d8\u10e1 \u10ec\u10d8\u10dc") :
                    /\u10ec\u10d4\u10da\u10d8/.test(a) ? a.replace(/\u10ec\u10d4\u10da\u10d8$/, "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc") : void 0
            },
            s: "\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8",
            ss: "%d \u10ec\u10d0\u10db\u10d8",
            m: "\u10ec\u10e3\u10d7\u10d8",
            mm: "%d \u10ec\u10e3\u10d7\u10d8",
            h: "\u10e1\u10d0\u10d0\u10d7\u10d8",
            hh: "%d \u10e1\u10d0\u10d0\u10d7\u10d8",
            d: "\u10d3\u10e6\u10d4",
            dd: "%d \u10d3\u10e6\u10d4",
            M: "\u10d7\u10d5\u10d4",
            MM: "%d \u10d7\u10d5\u10d4",
            y: "\u10ec\u10d4\u10da\u10d8",
            yy: "%d \u10ec\u10d4\u10da\u10d8"
        },
        dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,
        ordinal: function(a) {
            return 0 === a ? a : 1 === a ? a + "-\u10da\u10d8" : 20 > a || 100 >= a && 0 == a % 20 || 0 == a % 100 ? "\u10db\u10d4-" + a : a + "-\u10d4"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Mc = {
        0: "-\u0448\u0456",
        1: "-\u0448\u0456",
        2: "-\u0448\u0456",
        3: "-\u0448\u0456",
        4: "-\u0448\u0456",
        5: "-\u0448\u0456",
        6: "-\u0448\u044b",
        7: "-\u0448\u0456",
        8: "-\u0448\u0456",
        9: "-\u0448\u044b",
        10: "-\u0448\u044b",
        20: "-\u0448\u044b",
        30: "-\u0448\u044b",
        40: "-\u0448\u044b",
        50: "-\u0448\u0456",
        60: "-\u0448\u044b",
        70: "-\u0448\u0456",
        80: "-\u0448\u0456",
        90: "-\u0448\u044b",
        100: "-\u0448\u0456"
    };
    h.defineLocale("kk", {
        months: "\u049b\u0430\u04a3\u0442\u0430\u0440 \u0430\u049b\u043f\u0430\u043d \u043d\u0430\u0443\u0440\u044b\u0437 \u0441\u04d9\u0443\u0456\u0440 \u043c\u0430\u043c\u044b\u0440 \u043c\u0430\u0443\u0441\u044b\u043c \u0448\u0456\u043b\u0434\u0435 \u0442\u0430\u043c\u044b\u0437 \u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a \u049b\u0430\u0437\u0430\u043d \u049b\u0430\u0440\u0430\u0448\u0430 \u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split(" "),
        monthsShort: "\u049b\u0430\u04a3 \u0430\u049b\u043f \u043d\u0430\u0443 \u0441\u04d9\u0443 \u043c\u0430\u043c \u043c\u0430\u0443 \u0448\u0456\u043b \u0442\u0430\u043c \u049b\u044b\u0440 \u049b\u0430\u0437 \u049b\u0430\u0440 \u0436\u0435\u043b".split(" "),
        weekdays: "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456 \u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456 \u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456 \u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456 \u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456 \u0436\u04b1\u043c\u0430 \u0441\u0435\u043d\u0431\u0456".split(" "),
        weekdaysShort: "\u0436\u0435\u043a \u0434\u04af\u0439 \u0441\u0435\u0439 \u0441\u04d9\u0440 \u0431\u0435\u0439 \u0436\u04b1\u043c \u0441\u0435\u043d".split(" "),
        weekdaysMin: "\u0436\u043a \u0434\u0439 \u0441\u0439 \u0441\u0440 \u0431\u0439 \u0436\u043c \u0441\u043d".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT",
            nextDay: "[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT",
            nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT",
            lastDay: "[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT",
            lastWeek: "[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0456\u0448\u0456\u043d\u0434\u0435",
            past: "%s \u0431\u04b1\u0440\u044b\u043d",
            s: "\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",
            ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434",
            m: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442",
            mm: "%d \u043c\u0438\u043d\u0443\u0442",
            h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",
            hh: "%d \u0441\u0430\u0493\u0430\u0442",
            d: "\u0431\u0456\u0440 \u043a\u04af\u043d",
            dd: "%d \u043a\u04af\u043d",
            M: "\u0431\u0456\u0440 \u0430\u0439",
            MM: "%d \u0430\u0439",
            y: "\u0431\u0456\u0440 \u0436\u044b\u043b",
            yy: "%d \u0436\u044b\u043b"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/,
        ordinal: function(a) {
            return a + (Mc[a] || Mc[a % 10] || Mc[100 <= a ? 100 : null])
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Se = {
            1: "\u17e1",
            2: "\u17e2",
            3: "\u17e3",
            4: "\u17e4",
            5: "\u17e5",
            6: "\u17e6",
            7: "\u17e7",
            8: "\u17e8",
            9: "\u17e9",
            0: "\u17e0"
        },
        Te = {
            "\u17e1": "1",
            "\u17e2": "2",
            "\u17e3": "3",
            "\u17e4": "4",
            "\u17e5": "5",
            "\u17e6": "6",
            "\u17e7": "7",
            "\u17e8": "8",
            "\u17e9": "9",
            "\u17e0": "0"
        };
    h.defineLocale("km", {
        months: "\u1798\u1780\u179a\u17b6 \u1780\u17bb\u1798\u17d2\u1797\u17c8 \u1798\u17b8\u1793\u17b6 \u1798\u17c1\u179f\u17b6 \u17a7\u179f\u1797\u17b6 \u1798\u17b7\u1790\u17bb\u1793\u17b6 \u1780\u1780\u17d2\u1780\u178a\u17b6 \u179f\u17b8\u17a0\u17b6 \u1780\u1789\u17d2\u1789\u17b6 \u178f\u17bb\u179b\u17b6 \u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6 \u1792\u17d2\u1793\u17bc".split(" "),
        monthsShort: "\u1798\u1780\u179a\u17b6 \u1780\u17bb\u1798\u17d2\u1797\u17c8 \u1798\u17b8\u1793\u17b6 \u1798\u17c1\u179f\u17b6 \u17a7\u179f\u1797\u17b6 \u1798\u17b7\u1790\u17bb\u1793\u17b6 \u1780\u1780\u17d2\u1780\u178a\u17b6 \u179f\u17b8\u17a0\u17b6 \u1780\u1789\u17d2\u1789\u17b6 \u178f\u17bb\u179b\u17b6 \u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6 \u1792\u17d2\u1793\u17bc".split(" "),
        weekdays: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799 \u1785\u17d0\u1793\u17d2\u1791 \u17a2\u1784\u17d2\u1782\u17b6\u179a \u1796\u17bb\u1792 \u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd \u179f\u17bb\u1780\u17d2\u179a \u179f\u17c5\u179a\u17cd".split(" "),
        weekdaysShort: "\u17a2\u17b6 \u1785 \u17a2 \u1796 \u1796\u17d2\u179a \u179f\u17bb \u179f".split(" "),
        weekdaysMin: "\u17a2\u17b6 \u1785 \u17a2 \u1796 \u1796\u17d2\u179a \u179f\u17bb \u179f".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,
        isPM: function(a) {
            return "\u179b\u17d2\u1784\u17b6\u1785" === a
        },
        meridiem: function(a,
            b, c) {
            return 12 > a ? "\u1796\u17d2\u179a\u17b9\u1780" : "\u179b\u17d2\u1784\u17b6\u1785"
        },
        calendar: {
            sameDay: "[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT",
            nextDay: "[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT",
            nextWeek: "dddd [\u1798\u17c9\u17c4\u1784] LT",
            lastDay: "[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT",
            lastWeek: "dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s\u1791\u17c0\u178f",
            past: "%s\u1798\u17bb\u1793",
            s: "\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",
            ss: "%d \u179c\u17b7\u1793\u17b6\u1791\u17b8",
            m: "\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",
            mm: "%d \u1793\u17b6\u1791\u17b8",
            h: "\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",
            hh: "%d \u1798\u17c9\u17c4\u1784",
            d: "\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",
            dd: "%d \u1790\u17d2\u1784\u17c3",
            M: "\u1798\u17bd\u1799\u1781\u17c2",
            MM: "%d \u1781\u17c2",
            y: "\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",
            yy: "%d \u1786\u17d2\u1793\u17b6\u17c6"
        },
        dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/,
        ordinal: "\u1791\u17b8%d",
        preparse: function(a) {
            return a.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function(a) {
                return Te[a]
            })
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return Se[a]
            })
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Ue = {
            1: "\u0ce7",
            2: "\u0ce8",
            3: "\u0ce9",
            4: "\u0cea",
            5: "\u0ceb",
            6: "\u0cec",
            7: "\u0ced",
            8: "\u0cee",
            9: "\u0cef",
            0: "\u0ce6"
        },
        Ve = {
            "\u0ce7": "1",
            "\u0ce8": "2",
            "\u0ce9": "3",
            "\u0cea": "4",
            "\u0ceb": "5",
            "\u0cec": "6",
            "\u0ced": "7",
            "\u0cee": "8",
            "\u0cef": "9",
            "\u0ce6": "0"
        };
    h.defineLocale("kn", {
        months: "\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf \u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf \u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd \u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd \u0cae\u0cc6\u0cd5 \u0c9c\u0cc2\u0ca8\u0ccd \u0c9c\u0cc1\u0cb2\u0cc6\u0cd6 \u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd \u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd \u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd \u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd \u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split(" "),
        monthsShort: "\u0c9c\u0ca8 \u0cab\u0cc6\u0cac\u0ccd\u0cb0 \u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd \u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd \u0cae\u0cc6\u0cd5 \u0c9c\u0cc2\u0ca8\u0ccd \u0c9c\u0cc1\u0cb2\u0cc6\u0cd6 \u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd \u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82 \u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5 \u0ca8\u0cb5\u0cc6\u0c82 \u0ca1\u0cbf\u0cb8\u0cc6\u0c82".split(" "),
        monthsParseExact: !0,
        weekdays: "\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0 \u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0 \u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0 \u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0 \u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0 \u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0 \u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split(" "),
        weekdaysShort: "\u0cad\u0cbe\u0ca8\u0cc1 \u0cb8\u0cc6\u0cc2\u0cd5\u0cae \u0cae\u0c82\u0c97\u0cb3 \u0cac\u0cc1\u0ca7 \u0c97\u0cc1\u0cb0\u0cc1 \u0cb6\u0cc1\u0c95\u0ccd\u0cb0 \u0cb6\u0ca8\u0cbf".split(" "),
        weekdaysMin: "\u0cad\u0cbe \u0cb8\u0cc6\u0cc2\u0cd5 \u0cae\u0c82 \u0cac\u0cc1 \u0c97\u0cc1 \u0cb6\u0cc1 \u0cb6".split(" "),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[\u0c87\u0c82\u0ca6\u0cc1] LT",
            nextDay: "[\u0ca8\u0cbe\u0cb3\u0cc6] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT",
            lastWeek: "[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0ca8\u0c82\u0ca4\u0cb0",
            past: "%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6",
            s: "\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1",
            ss: "%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1",
            m: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",
            mm: "%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",
            h: "\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6",
            hh: "%d \u0c97\u0c82\u0c9f\u0cc6",
            d: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8",
            dd: "%d \u0ca6\u0cbf\u0ca8",
            M: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",
            MM: "%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",
            y: "\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7",
            yy: "%d \u0cb5\u0cb0\u0ccd\u0cb7"
        },
        preparse: function(a) {
            return a.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function(a) {
                return Ve[a]
            })
        },
        postformat: function(a) {
            return a.replace(/\d/g,
                function(a) {
                    return Ue[a]
                })
        },
        meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" === b ? 4 > a ? a : a + 12 : "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" === b ? a : "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" === b ? 10 <= a ? a : a + 12 : "\u0cb8\u0c82\u0c9c\u0cc6" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 4 >
                a ? "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" : 10 > a ? "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" : 17 > a ? "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" : 20 > a ? "\u0cb8\u0c82\u0c9c\u0cc6" : "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/,
        ordinal: function(a) {
            return a + "\u0ca8\u0cc6\u0cd5"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    h.defineLocale("ko", {
        months: "1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
        monthsShort: "1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
        weekdays: "\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),
        weekdaysShort: "\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),
        weekdaysMin: "\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY\ub144 MMMM D\uc77c",
            LLL: "YYYY\ub144 MMMM D\uc77c A h:mm",
            LLLL: "YYYY\ub144 MMMM D\uc77c dddd A h:mm",
            l: "YYYY.MM.DD.",
            ll: "YYYY\ub144 MMMM D\uc77c",
            lll: "YYYY\ub144 MMMM D\uc77c A h:mm",
            llll: "YYYY\ub144 MMMM D\uc77c dddd A h:mm"
        },
        calendar: {
            sameDay: "\uc624\ub298 LT",
            nextDay: "\ub0b4\uc77c LT",
            nextWeek: "dddd LT",
            lastDay: "\uc5b4\uc81c LT",
            lastWeek: "\uc9c0\ub09c\uc8fc dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \ud6c4",
            past: "%s \uc804",
            s: "\uba87 \ucd08",
            ss: "%d\ucd08",
            m: "1\ubd84",
            mm: "%d\ubd84",
            h: "\ud55c \uc2dc\uac04",
            hh: "%d\uc2dc\uac04",
            d: "\ud558\ub8e8",
            dd: "%d\uc77c",
            M: "\ud55c \ub2ec",
            MM: "%d\ub2ec",
            y: "\uc77c \ub144",
            yy: "%d\ub144"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,
        ordinal: function(a, b) {
            switch (b) {
                case "d":
                case "D":
                case "DDD":
                    return a + "\uc77c";
                case "M":
                    return a + "\uc6d4";
                case "w":
                case "W":
                    return a + "\uc8fc";
                default:
                    return a
            }
        },
        meridiemParse: /\uc624\uc804|\uc624\ud6c4/,
        isPM: function(a) {
            return "\uc624\ud6c4" === a
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\uc624\uc804" : "\uc624\ud6c4"
        }
    });
    var We = {
            1: "\u0661",
            2: "\u0662",
            3: "\u0663",
            4: "\u0664",
            5: "\u0665",
            6: "\u0666",
            7: "\u0667",
            8: "\u0668",
            9: "\u0669",
            0: "\u0660"
        },
        Xe = {
            "\u0661": "1",
            "\u0662": "2",
            "\u0663": "3",
            "\u0664": "4",
            "\u0665": "5",
            "\u0666": "6",
            "\u0667": "7",
            "\u0668": "8",
            "\u0669": "9",
            "\u0660": "0"
        },
        zd = "\u06a9\u0627\u0646\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645;\u0634\u0648\u0628\u0627\u062a;\u0626\u0627\u0632\u0627\u0631;\u0646\u06cc\u0633\u0627\u0646;\u0626\u0627\u06cc\u0627\u0631;\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646;\u062a\u06d5\u0645\u0645\u0648\u0632;\u0626\u0627\u0628;\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644;\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u0643\u06d5\u0645;\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645;\u0643\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645".split(";");
    h.defineLocale("ku", {
        months: zd,
        monthsShort: zd,
        weekdays: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645\u0645\u0647\u200c \u062f\u0648\u0648\u0634\u0647\u200c\u0645\u0645\u0647\u200c \u0633\u06ce\u0634\u0647\u200c\u0645\u0645\u0647\u200c \u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645\u0645\u0647\u200c \u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645\u0645\u0647\u200c \u0647\u0647\u200c\u06cc\u0646\u06cc \u0634\u0647\u200c\u0645\u0645\u0647\u200c".split(" "),
        weekdaysShort: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645 \u062f\u0648\u0648\u0634\u0647\u200c\u0645 \u0633\u06ce\u0634\u0647\u200c\u0645 \u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645 \u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645 \u0647\u0647\u200c\u06cc\u0646\u06cc \u0634\u0647\u200c\u0645\u0645\u0647\u200c".split(" "),
        weekdaysMin: "\u06cc\u062f\u0633\u0686\u067e\u0647\u0634".split(""),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/,
        isPM: function(a) {
            return /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(a)
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc" : "\u0626\u06ce\u0648\u0627\u0631\u0647\u200c"
        },
        calendar: {
            sameDay: "[\u0626\u0647\u200c\u0645\u0631\u06c6 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            nextDay: "[\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            nextWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            lastDay: "[\u062f\u0648\u06ce\u0646\u06ce \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            lastWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0644\u0647\u200c %s",
            past: "%s",
            s: "\u0686\u0647\u200c\u0646\u062f \u0686\u0631\u0643\u0647\u200c\u06cc\u0647\u200c\u0643",
            ss: "\u0686\u0631\u0643\u0647\u200c %d",
            m: "\u06cc\u0647\u200c\u0643 \u062e\u0648\u0644\u0647\u200c\u0643",
            mm: "%d \u062e\u0648\u0644\u0647\u200c\u0643",
            h: "\u06cc\u0647\u200c\u0643 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631",
            hh: "%d \u0643\u0627\u062a\u0698\u0645\u06ce\u0631",
            d: "\u06cc\u0647\u200c\u0643 \u0695\u06c6\u0698",
            dd: "%d \u0695\u06c6\u0698",
            M: "\u06cc\u0647\u200c\u0643 \u0645\u0627\u0646\u06af",
            MM: "%d \u0645\u0627\u0646\u06af",
            y: "\u06cc\u0647\u200c\u0643 \u0633\u0627\u06b5",
            yy: "%d \u0633\u0627\u06b5"
        },
        preparse: function(a) {
            return a.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(a) {
                return Xe[a]
            }).replace(/\u060c/g, ",")
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return We[a]
            }).replace(/,/g, "\u060c")
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var Nc = {
        0: "-\u0447\u04af",
        1: "-\u0447\u0438",
        2: "-\u0447\u0438",
        3: "-\u0447\u04af",
        4: "-\u0447\u04af",
        5: "-\u0447\u0438",
        6: "-\u0447\u044b",
        7: "-\u0447\u0438",
        8: "-\u0447\u0438",
        9: "-\u0447\u0443",
        10: "-\u0447\u0443",
        20: "-\u0447\u044b",
        30: "-\u0447\u0443",
        40: "-\u0447\u044b",
        50: "-\u0447\u04af",
        60: "-\u0447\u044b",
        70: "-\u0447\u0438",
        80: "-\u0447\u0438",
        90: "-\u0447\u0443",
        100: "-\u0447\u04af"
    };
    h.defineLocale("ky", {
        months: "\u044f\u043d\u0432\u0430\u0440\u044c \u0444\u0435\u0432\u0440\u0430\u043b\u044c \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0435\u043b\u044c \u043c\u0430\u0439 \u0438\u044e\u043d\u044c \u0438\u044e\u043b\u044c \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c \u043e\u043a\u0442\u044f\u0431\u0440\u044c \u043d\u043e\u044f\u0431\u0440\u044c \u0434\u0435\u043a\u0430\u0431\u0440\u044c".split(" "),
        monthsShort: "\u044f\u043d\u0432 \u0444\u0435\u0432 \u043c\u0430\u0440\u0442 \u0430\u043f\u0440 \u043c\u0430\u0439 \u0438\u044e\u043d\u044c \u0438\u044e\u043b\u044c \u0430\u0432\u0433 \u0441\u0435\u043d \u043e\u043a\u0442 \u043d\u043e\u044f \u0434\u0435\u043a".split(" "),
        weekdays: "\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438 \u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af \u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438 \u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438 \u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438 \u0416\u0443\u043c\u0430 \u0418\u0448\u0435\u043c\u0431\u0438".split(" "),
        weekdaysShort: "\u0416\u0435\u043a \u0414\u04af\u0439 \u0428\u0435\u0439 \u0428\u0430\u0440 \u0411\u0435\u0439 \u0416\u0443\u043c \u0418\u0448\u0435".split(" "),
        weekdaysMin: "\u0416\u043a \u0414\u0439 \u0428\u0439 \u0428\u0440 \u0411\u0439 \u0416\u043c \u0418\u0448".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT",
            nextDay: "[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT",
            nextWeek: "dddd [\u0441\u0430\u0430\u0442] LT",
            lastDay: "[\u041a\u0435\u0447\u044d\u044d \u0441\u0430\u0430\u0442] LT",
            lastWeek: "[\u04e8\u0442\u043a\u04e9\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0438\u0447\u0438\u043d\u0434\u0435",
            past: "%s \u043c\u0443\u0440\u0443\u043d",
            s: "\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",
            ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434",
            m: "\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442",
            mm: "%d \u043c\u04af\u043d\u04e9\u0442",
            h: "\u0431\u0438\u0440 \u0441\u0430\u0430\u0442",
            hh: "%d \u0441\u0430\u0430\u0442",
            d: "\u0431\u0438\u0440 \u043a\u04af\u043d",
            dd: "%d \u043a\u04af\u043d",
            M: "\u0431\u0438\u0440 \u0430\u0439",
            MM: "%d \u0430\u0439",
            y: "\u0431\u0438\u0440 \u0436\u044b\u043b",
            yy: "%d \u0436\u044b\u043b"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,
        ordinal: function(a) {
            return a + (Nc[a] || Nc[a % 10] ||
                Nc[100 <= a ? 100 : null])
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("lb", {
        months: "Januar Februar M\u00e4erz Abr\u00ebll Mee Juni Juli August September Oktober November Dezember".split(" "),
        monthsShort: "Jan. Febr. Mrz. Abr. Mee Jun. Jul. Aug. Sept. Okt. Nov. Dez.".split(" "),
        monthsParseExact: !0,
        weekdays: "Sonndeg M\u00e9indeg D\u00ebnschdeg M\u00ebttwoch Donneschdeg Freideg Samschdeg".split(" "),
        weekdaysShort: "So. M\u00e9. D\u00eb. M\u00eb. Do. Fr. Sa.".split(" "),
        weekdaysMin: "So M\u00e9 D\u00eb M\u00eb Do Fr Sa".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
        },
        calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[G\u00ebschter um] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 2:
                    case 4:
                        return "[Leschten] dddd [um] LT";
                    default:
                        return "[Leschte] dddd [um] LT"
                }
            }
        },
        relativeTime: {
            future: function(a) {
                return ec(a.substr(0, a.indexOf(" "))) ?
                    "a " + a : "an " + a
            },
            past: function(a) {
                return ec(a.substr(0, a.indexOf(" "))) ? "viru " + a : "virun " + a
            },
            s: "e puer Sekonnen",
            ss: "%d Sekonnen",
            m: dc,
            mm: "%d Minutten",
            h: dc,
            hh: "%d Stonnen",
            d: dc,
            dd: "%d Deeg",
            M: dc,
            MM: "%d M\u00e9int",
            y: dc,
            yy: "%d Joer"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("lo", {
        months: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99 \u0e81\u0eb8\u0ea1\u0e9e\u0eb2 \u0ea1\u0eb5\u0e99\u0eb2 \u0ec0\u0ea1\u0eaa\u0eb2 \u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2 \u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2 \u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94 \u0eaa\u0eb4\u0e87\u0eab\u0eb2 \u0e81\u0eb1\u0e99\u0e8d\u0eb2 \u0e95\u0eb8\u0ea5\u0eb2 \u0e9e\u0eb0\u0e88\u0eb4\u0e81 \u0e97\u0eb1\u0e99\u0ea7\u0eb2".split(" "),
        monthsShort: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99 \u0e81\u0eb8\u0ea1\u0e9e\u0eb2 \u0ea1\u0eb5\u0e99\u0eb2 \u0ec0\u0ea1\u0eaa\u0eb2 \u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2 \u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2 \u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94 \u0eaa\u0eb4\u0e87\u0eab\u0eb2 \u0e81\u0eb1\u0e99\u0e8d\u0eb2 \u0e95\u0eb8\u0ea5\u0eb2 \u0e9e\u0eb0\u0e88\u0eb4\u0e81 \u0e97\u0eb1\u0e99\u0ea7\u0eb2".split(" "),
        weekdays: "\u0ead\u0eb2\u0e97\u0eb4\u0e94 \u0e88\u0eb1\u0e99 \u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99 \u0e9e\u0eb8\u0e94 \u0e9e\u0eb0\u0eab\u0eb1\u0e94 \u0eaa\u0eb8\u0e81 \u0ec0\u0eaa\u0ebb\u0eb2".split(" "),
        weekdaysShort: "\u0e97\u0eb4\u0e94 \u0e88\u0eb1\u0e99 \u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99 \u0e9e\u0eb8\u0e94 \u0e9e\u0eb0\u0eab\u0eb1\u0e94 \u0eaa\u0eb8\u0e81 \u0ec0\u0eaa\u0ebb\u0eb2".split(" "),
        weekdaysMin: "\u0e97 \u0e88 \u0ead\u0e84 \u0e9e \u0e9e\u0eab \u0eaa\u0e81 \u0eaa".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,
        isPM: function(a) {
            return "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" === a
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2" : "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87"
        },
        calendar: {
            sameDay: "[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            nextDay: "[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            nextWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            lastDay: "[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            lastWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0ead\u0eb5\u0e81 %s",
            past: "%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2",
            s: "\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",
            ss: "%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",
            m: "1 \u0e99\u0eb2\u0e97\u0eb5",
            mm: "%d \u0e99\u0eb2\u0e97\u0eb5",
            h: "1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
            hh: "%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
            d: "1 \u0ea1\u0eb7\u0ec9",
            dd: "%d \u0ea1\u0eb7\u0ec9",
            M: "1 \u0ec0\u0e94\u0eb7\u0ead\u0e99",
            MM: "%d \u0ec0\u0e94\u0eb7\u0ead\u0e99",
            y: "1 \u0e9b\u0eb5",
            yy: "%d \u0e9b\u0eb5"
        },
        dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/,
        ordinal: function(a) {
            return "\u0e97\u0eb5\u0ec8" + a
        }
    });
    var Wd = {
        ss: "sekund\u0117_sekund\u017ei\u0173_sekundes",
        m: "minut\u0117_minut\u0117s_minut\u0119",
        mm: "minut\u0117s_minu\u010di\u0173_minutes",
        h: "valanda_valandos_valand\u0105",
        hh: "valandos_valand\u0173_valandas",
        d: "diena_dienos_dien\u0105",
        dd: "dienos_dien\u0173_dienas",
        M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",
        MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
        y: "metai_met\u0173_metus",
        yy: "metai_met\u0173_metus"
    };
    h.defineLocale("lt", {
        months: {
            format: "sausio vasario kovo baland\u017eio gegu\u017e\u0117s bir\u017eelio liepos rugpj\u016b\u010dio rugs\u0117jo spalio lapkri\u010dio gruod\u017eio".split(" "),
            standalone: "sausis vasaris kovas balandis gegu\u017e\u0117 bir\u017eelis liepa rugpj\u016btis rugs\u0117jis spalis lapkritis gruodis".split(" "),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: "sau vas kov bal geg bir lie rgp rgs spa lap grd".split(" "),
        weekdays: {
            format: "sekmadien\u012f pirmadien\u012f antradien\u012f tre\u010diadien\u012f ketvirtadien\u012f penktadien\u012f \u0161e\u0161tadien\u012f".split(" "),
            standalone: "sekmadienis pirmadienis antradienis tre\u010diadienis ketvirtadienis penktadienis \u0161e\u0161tadienis".split(" "),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort: "Sek Pir Ant Tre Ket Pen \u0160e\u0161".split(" "),
        weekdaysMin: "S P A T K Pn \u0160".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
        },
        calendar: {
            sameDay: "[\u0160iandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Pra\u0117jus\u012f] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "po %s",
            past: "prie\u0161 %s",
            s: function(a, b, c, d) {
                return b ? "kelios sekund\u0117s" : d ? "keli\u0173 sekund\u017ei\u0173" : "kelias sekundes"
            },
            ss: Ha,
            m: Jb,
            mm: Ha,
            h: Jb,
            hh: Ha,
            d: Jb,
            dd: Ha,
            M: Jb,
            MM: Ha,
            y: Jb,
            yy: Ha
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function(a) {
            return a + "-oji"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var bd = {
        ss: ["sekundes", "sekund\u0113m", "sekunde", "sekundes"],
        m: ["min\u016btes", "min\u016bt\u0113m", "min\u016bte", "min\u016btes"],
        mm: ["min\u016btes", "min\u016bt\u0113m", "min\u016bte",
            "min\u016btes"
        ],
        h: ["stundas", "stund\u0101m", "stunda", "stundas"],
        hh: ["stundas", "stund\u0101m", "stunda", "stundas"],
        d: ["dienas", "dien\u0101m", "diena", "dienas"],
        dd: ["dienas", "dien\u0101m", "diena", "dienas"],
        M: ["m\u0113ne\u0161a", "m\u0113ne\u0161iem", "m\u0113nesis", "m\u0113ne\u0161i"],
        MM: ["m\u0113ne\u0161a", "m\u0113ne\u0161iem", "m\u0113nesis", "m\u0113ne\u0161i"],
        y: ["gada", "gadiem", "gads", "gadi"],
        yy: ["gada", "gadiem", "gads", "gadi"]
    };
    h.defineLocale("lv", {
        months: "janv\u0101ris febru\u0101ris marts apr\u012blis maijs j\u016bnijs j\u016blijs augusts septembris oktobris novembris decembris".split(" "),
        monthsShort: "jan feb mar apr mai j\u016bn j\u016bl aug sep okt nov dec".split(" "),
        weekdays: "sv\u0113tdiena pirmdiena otrdiena tre\u0161diena ceturtdiena piektdiena sestdiena".split(" "),
        weekdaysShort: "Sv P O T C Pk S".split(" "),
        weekdaysMin: "Sv P O T C Pk S".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
        },
        calendar: {
            sameDay: "[\u0160odien pulksten] LT",
            nextDay: "[R\u012bt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "p\u0113c %s",
            past: "pirms %s",
            s: function(a, b) {
                return b ? "da\u017eas sekundes" : "da\u017e\u0101m sekund\u0113m"
            },
            ss: Kb,
            m: fc,
            mm: Kb,
            h: fc,
            hh: Kb,
            d: fc,
            dd: Kb,
            M: fc,
            MM: Kb,
            y: fc,
            yy: Kb
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Qa = {
        words: {
            ss: ["sekund", "sekunda", "sekundi"],
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mjesec", "mjeseca", "mjeseci"],
            yy: ["godina", "godine", "godina"]
        },
        correctGrammaticalCase: function(a, b) {
            return 1 === a ? b[0] : 2 <= a && 4 >= a ? b[1] : b[2]
        },
        translate: function(a, b, c) {
            var e = Qa.words[c];
            return 1 === c.length ? b ? e[0] : e[1] : a + " " + Qa.correctGrammaticalCase(a, e)
        }
    };
    h.defineLocale("me", {
        months: "januar februar mart april maj jun jul avgust septembar oktobar novembar decembar".split(" "),
        monthsShort: "jan. feb. mar. apr. maj jun jul avg. sep. okt. nov. dec.".split(" "),
        monthsParseExact: !0,
        weekdays: "nedjelja ponedjeljak utorak srijeda \u010detvrtak petak subota".split(" "),
        weekdaysShort: "ned. pon. uto. sri. \u010det. pet. sub.".split(" "),
        weekdaysMin: "ne po ut sr \u010de pe su".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sjutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju\u010de u] LT",
            lastWeek: function() {
                return "[pro\u0161le] [nedjelje] [u] LT;[pro\u0161log] [ponedjeljka] [u] LT;[pro\u0161log] [utorka] [u] LT;[pro\u0161le] [srijede] [u] LT;[pro\u0161log] [\u010detvrtka] [u] LT;[pro\u0161log] [petka] [u] LT;[pro\u0161le] [subote] [u] LT".split(";")[this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "nekoliko sekundi",
            ss: Qa.translate,
            m: Qa.translate,
            mm: Qa.translate,
            h: Qa.translate,
            hh: Qa.translate,
            d: "dan",
            dd: Qa.translate,
            M: "mjesec",
            MM: Qa.translate,
            y: "godinu",
            yy: Qa.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("mi", {
        months: "Kohi-t\u0101te Hui-tanguru Pout\u016b-te-rangi Paenga-wh\u0101wh\u0101 Haratua Pipiri H\u014dngoingoi Here-turi-k\u014dk\u0101 Mahuru Whiringa-\u0101-nuku Whiringa-\u0101-rangi Hakihea".split(" "),
        monthsShort: "Kohi Hui Pou Pae Hara Pipi H\u014dngoi Here Mahu Whi-nu Whi-ra Haki".split(" "),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: "R\u0101tapu Mane T\u016brei Wenerei T\u0101ite Paraire H\u0101tarei".split(" "),
        weekdaysShort: "Ta Ma T\u016b We T\u0101i Pa H\u0101".split(" "),
        weekdaysMin: "Ta Ma T\u016b We T\u0101i Pa H\u0101".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [i] HH:mm",
            LLLL: "dddd, D MMMM YYYY [i] HH:mm"
        },
        calendar: {
            sameDay: "[i teie mahana, i] LT",
            nextDay: "[apopo i] LT",
            nextWeek: "dddd [i] LT",
            lastDay: "[inanahi i] LT",
            lastWeek: "dddd [whakamutunga i] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "i roto i %s",
            past: "%s i mua",
            s: "te h\u0113kona ruarua",
            ss: "%d h\u0113kona",
            m: "he meneti",
            mm: "%d meneti",
            h: "te haora",
            hh: "%d haora",
            d: "he ra",
            dd: "%d ra",
            M: "he marama",
            MM: "%d marama",
            y: "he tau",
            yy: "%d tau"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\u00ba",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("mk", {
        months: "\u0458\u0430\u043d\u0443\u0430\u0440\u0438 \u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438 \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0438\u043b \u043c\u0430\u0458 \u0458\u0443\u043d\u0438 \u0458\u0443\u043b\u0438 \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438 \u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438 \u043d\u043e\u0435\u043c\u0432\u0440\u0438 \u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split(" "),
        monthsShort: "\u0458\u0430\u043d \u0444\u0435\u0432 \u043c\u0430\u0440 \u0430\u043f\u0440 \u043c\u0430\u0458 \u0458\u0443\u043d \u0458\u0443\u043b \u0430\u0432\u0433 \u0441\u0435\u043f \u043e\u043a\u0442 \u043d\u043e\u0435 \u0434\u0435\u043a".split(" "),
        weekdays: "\u043d\u0435\u0434\u0435\u043b\u0430 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a \u043f\u0435\u0442\u043e\u043a \u0441\u0430\u0431\u043e\u0442\u0430".split(" "),
        weekdaysShort: "\u043d\u0435\u0434 \u043f\u043e\u043d \u0432\u0442\u043e \u0441\u0440\u0435 \u0447\u0435\u0442 \u043f\u0435\u0442 \u0441\u0430\u0431".split(" "),
        weekdaysMin: "\u043de \u043fo \u0432\u0442 \u0441\u0440 \u0447\u0435 \u043f\u0435 \u0441a".split(" "),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT",
            nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043e] LT",
            nextWeek: "[\u0412\u043e] dddd [\u0432\u043e] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u043f\u043e\u0441\u043b\u0435 %s",
            past: "\u043f\u0440\u0435\u0434 %s",
            s: "\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            m: "\u043c\u0438\u043d\u0443\u0442\u0430",
            mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
            h: "\u0447\u0430\u0441",
            hh: "%d \u0447\u0430\u0441\u0430",
            d: "\u0434\u0435\u043d",
            dd: "%d \u0434\u0435\u043d\u0430",
            M: "\u043c\u0435\u0441\u0435\u0446",
            MM: "%d \u043c\u0435\u0441\u0435\u0446\u0438",
            y: "\u0433\u043e\u0434\u0438\u043d\u0430",
            yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
        ordinal: function(a) {
            var b = a % 10,
                e = a % 100;
            return 0 === a ? a + "-\u0435\u0432" : 0 === e ? a + "-\u0435\u043d" : 10 < e && 20 > e ? a + "-\u0442\u0438" : 1 === b ? a + "-\u0432\u0438" : 2 === b ? a + "-\u0440\u0438" : 7 === b || 8 === b ? a + "-\u043c\u0438" : a + "-\u0442\u0438"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("ml", {
        months: "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f \u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f \u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d \u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d \u0d2e\u0d47\u0d2f\u0d4d \u0d1c\u0d42\u0d7a \u0d1c\u0d42\u0d32\u0d48 \u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d \u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c \u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c \u0d28\u0d35\u0d02\u0d2c\u0d7c \u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split(" "),
        monthsShort: "\u0d1c\u0d28\u0d41. \u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41. \u0d2e\u0d3e\u0d7c. \u0d0f\u0d2a\u0d4d\u0d30\u0d3f. \u0d2e\u0d47\u0d2f\u0d4d \u0d1c\u0d42\u0d7a \u0d1c\u0d42\u0d32\u0d48. \u0d13\u0d17. \u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31. \u0d12\u0d15\u0d4d\u0d1f\u0d4b. \u0d28\u0d35\u0d02. \u0d21\u0d3f\u0d38\u0d02.".split(" "),
        monthsParseExact: !0,
        weekdays: "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a \u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a \u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a \u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a \u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a \u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a \u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split(" "),
        weekdaysShort: "\u0d1e\u0d3e\u0d2f\u0d7c \u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e \u0d1a\u0d4a\u0d35\u0d4d\u0d35 \u0d2c\u0d41\u0d27\u0d7b \u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02 \u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f \u0d36\u0d28\u0d3f".split(" "),
        weekdaysMin: "\u0d1e\u0d3e \u0d24\u0d3f \u0d1a\u0d4a \u0d2c\u0d41 \u0d35\u0d4d\u0d2f\u0d3e \u0d35\u0d46 \u0d36".split(" "),
        longDateFormat: {
            LT: "A h:mm -\u0d28\u0d41",
            LTS: "A h:mm:ss -\u0d28\u0d41",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm -\u0d28\u0d41",
            LLLL: "dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41"
        },
        calendar: {
            sameDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT",
            nextDay: "[\u0d28\u0d3e\u0d33\u0d46] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT",
            lastWeek: "[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d",
            past: "%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d",
            s: "\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e",
            ss: "%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d",
            m: "\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",
            mm: "%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",
            h: "\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",
            hh: "%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",
            d: "\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02",
            dd: "%d \u0d26\u0d3f\u0d35\u0d38\u0d02",
            M: "\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02",
            MM: "%d \u0d2e\u0d3e\u0d38\u0d02",
            y: "\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02",
            yy: "%d \u0d35\u0d7c\u0d37\u0d02"
        },
        meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" === b && 4 <= a || "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" === b || "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" === b ? a + 12 :
                a
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" : 12 > a ? "\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46" : 17 > a ? "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" : 20 > a ? "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" : "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"
        }
    });
    h.defineLocale("mn", {
        months: "\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440;\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440;\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split(";"),
        monthsShort: "1 \u0441\u0430\u0440;2 \u0441\u0430\u0440;3 \u0441\u0430\u0440;4 \u0441\u0430\u0440;5 \u0441\u0430\u0440;6 \u0441\u0430\u0440;7 \u0441\u0430\u0440;8 \u0441\u0430\u0440;9 \u0441\u0430\u0440;10 \u0441\u0430\u0440;11 \u0441\u0430\u0440;12 \u0441\u0430\u0440".split(";"),
        monthsParseExact: !0,
        weekdays: "\u041d\u044f\u043c \u0414\u0430\u0432\u0430\u0430 \u041c\u044f\u0433\u043c\u0430\u0440 \u041b\u0445\u0430\u0433\u0432\u0430 \u041f\u04af\u0440\u044d\u0432 \u0411\u0430\u0430\u0441\u0430\u043d \u0411\u044f\u043c\u0431\u0430".split(" "),
        weekdaysShort: "\u041d\u044f\u043c \u0414\u0430\u0432 \u041c\u044f\u0433 \u041b\u0445\u0430 \u041f\u04af\u0440 \u0411\u0430\u0430 \u0411\u044f\u043c".split(" "),
        weekdaysMin: "\u041d\u044f \u0414\u0430 \u041c\u044f \u041b\u0445 \u041f\u04af \u0411\u0430 \u0411\u044f".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D",
            LLL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm",
            LLLL: "dddd, YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm"
        },
        meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i,
        isPM: function(a) {
            return "\u04ae\u0425" === a
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\u04ae\u04e8" : "\u04ae\u0425"
        },
        calendar: {
            sameDay: "[\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440] LT",
            nextDay: "[\u041c\u0430\u0440\u0433\u0430\u0430\u0448] LT",
            nextWeek: "[\u0418\u0440\u044d\u0445] dddd LT",
            lastDay: "[\u04e8\u0447\u0438\u0433\u0434\u04e9\u0440] LT",
            lastWeek: "[\u04e8\u043d\u0433\u04e9\u0440\u0441\u04e9\u043d] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0434\u0430\u0440\u0430\u0430",
            past: "%s \u04e9\u043c\u043d\u04e9",
            s: ta,
            ss: ta,
            m: ta,
            mm: ta,
            h: ta,
            hh: ta,
            d: ta,
            dd: ta,
            M: ta,
            MM: ta,
            y: ta,
            yy: ta
        },
        dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/,
        ordinal: function(a, b) {
            switch (b) {
                case "d":
                case "D":
                case "DDD":
                    return a + " \u04e9\u0434\u04e9\u0440";
                default:
                    return a
            }
        }
    });
    var Ye = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966"
        },
        Ze = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0"
        };
    h.defineLocale("mr", {
        months: "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u090f\u092a\u094d\u0930\u093f\u0932 \u092e\u0947 \u091c\u0942\u0928 \u091c\u0941\u0932\u0948 \u0911\u0917\u0938\u094d\u091f \u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930 \u0911\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930 \u0921\u093f\u0938\u0947\u0902\u092c\u0930".split(" "),
        monthsShort: "\u091c\u093e\u0928\u0947. \u092b\u0947\u092c\u094d\u0930\u0941. \u092e\u093e\u0930\u094d\u091a. \u090f\u092a\u094d\u0930\u093f. \u092e\u0947. \u091c\u0942\u0928. \u091c\u0941\u0932\u0948. \u0911\u0917. \u0938\u092a\u094d\u091f\u0947\u0902. \u0911\u0915\u094d\u091f\u094b. \u0928\u094b\u0935\u094d\u0939\u0947\u0902. \u0921\u093f\u0938\u0947\u0902.".split(" "),
        monthsParseExact: !0,
        weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930 \u0938\u094b\u092e\u0935\u093e\u0930 \u092e\u0902\u0917\u0933\u0935\u093e\u0930 \u092c\u0941\u0927\u0935\u093e\u0930 \u0917\u0941\u0930\u0942\u0935\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930 \u0936\u0928\u093f\u0935\u093e\u0930".split(" "),
        weekdaysShort: "\u0930\u0935\u093f \u0938\u094b\u092e \u092e\u0902\u0917\u0933 \u092c\u0941\u0927 \u0917\u0941\u0930\u0942 \u0936\u0941\u0915\u094d\u0930 \u0936\u0928\u093f".split(" "),
        weekdaysMin: "\u0930 \u0938\u094b \u092e\u0902 \u092c\u0941 \u0917\u0941 \u0936\u0941 \u0936".split(" "),
        longDateFormat: {
            LT: "A h:mm \u0935\u093e\u091c\u0924\u093e",
            LTS: "A h:mm:ss \u0935\u093e\u091c\u0924\u093e",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e"
        },
        calendar: {
            sameDay: "[\u0906\u091c] LT",
            nextDay: "[\u0909\u0926\u094d\u092f\u093e] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0915\u093e\u0932] LT",
            lastWeek: "[\u092e\u093e\u0917\u0940\u0932] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s\u092e\u0927\u094d\u092f\u0947",
            past: "%s\u092a\u0942\u0930\u094d\u0935\u0940",
            s: ua,
            ss: ua,
            m: ua,
            mm: ua,
            h: ua,
            hh: ua,
            d: ua,
            dd: ua,
            M: ua,
            MM: ua,
            y: ua,
            yy: ua
        },
        preparse: function(a) {
            return a.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(a) {
                return Ze[a]
            })
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return Ye[a]
            })
        },
        meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u0930\u093e\u0924\u094d\u0930\u0940" === b ? 4 > a ? a : a + 12 : "\u0938\u0915\u093e\u0933\u0940" === b ? a : "\u0926\u0941\u092a\u093e\u0930\u0940" === b ? 10 <= a ? a : a + 12 : "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" === b ? a + 12 :
                void 0
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "\u0930\u093e\u0924\u094d\u0930\u0940" : 10 > a ? "\u0938\u0915\u093e\u0933\u0940" : 17 > a ? "\u0926\u0941\u092a\u093e\u0930\u0940" : 20 > a ? "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" : "\u0930\u093e\u0924\u094d\u0930\u0940"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    h.defineLocale("ms-my", {
        months: "Januari Februari Mac April Mei Jun Julai Ogos September Oktober November Disember".split(" "),
        monthsShort: "Jan Feb Mac Apr Mei Jun Jul Ogs Sep Okt Nov Dis".split(" "),
        weekdays: "Ahad Isnin Selasa Rabu Khamis Jumaat Sabtu".split(" "),
        weekdaysShort: "Ahd Isn Sel Rab Kha Jum Sab".split(" "),
        weekdaysMin: "Ah Is Sl Rb Km Jm Sb".split(" "),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? 11 <= a ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("ms", {
        months: "Januari Februari Mac April Mei Jun Julai Ogos September Oktober November Disember".split(" "),
        monthsShort: "Jan Feb Mac Apr Mei Jun Jul Ogs Sep Okt Nov Dis".split(" "),
        weekdays: "Ahad Isnin Selasa Rabu Khamis Jumaat Sabtu".split(" "),
        weekdaysShort: "Ahd Isn Sel Rab Kha Jum Sab".split(" "),
        weekdaysMin: "Ah Is Sl Rb Km Jm Sb".split(" "),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" ===
                b ? 11 <= a ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            ss: "%d saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("mt", {
        months: "Jannar Frar Marzu April Mejju \u0120unju Lulju Awwissu Settembru Ottubru Novembru Di\u010bembru".split(" "),
        monthsShort: "Jan Fra Mar Apr Mej \u0120un Lul Aww Set Ott Nov Di\u010b".split(" "),
        weekdays: "Il-\u0126add It-Tnejn It-Tlieta L-Erbg\u0127a Il-\u0126amis Il-\u0120img\u0127a Is-Sibt".split(" "),
        weekdaysShort: "\u0126ad Tne Tli Erb \u0126am \u0120im Sib".split(" "),
        weekdaysMin: "\u0126a Tn Tl Er \u0126a \u0120i Si".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Illum fil-]LT",
            nextDay: "[G\u0127ada fil-]LT",
            nextWeek: "dddd [fil-]LT",
            lastDay: "[Il-biera\u0127 fil-]LT",
            lastWeek: "dddd [li g\u0127adda] [fil-]LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "f\u2019 %s",
            past: "%s ilu",
            s: "ftit sekondi",
            ss: "%d sekondi",
            m: "minuta",
            mm: "%d minuti",
            h: "sieg\u0127a",
            hh: "%d sieg\u0127at",
            d: "\u0121urnata",
            dd: "%d \u0121ranet",
            M: "xahar",
            MM: "%d xhur",
            y: "sena",
            yy: "%d sni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\u00ba",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var $e = {
            1: "\u1041",
            2: "\u1042",
            3: "\u1043",
            4: "\u1044",
            5: "\u1045",
            6: "\u1046",
            7: "\u1047",
            8: "\u1048",
            9: "\u1049",
            0: "\u1040"
        },
        af = {
            "\u1041": "1",
            "\u1042": "2",
            "\u1043": "3",
            "\u1044": "4",
            "\u1045": "5",
            "\u1046": "6",
            "\u1047": "7",
            "\u1048": "8",
            "\u1049": "9",
            "\u1040": "0"
        };
    h.defineLocale("my", {
        months: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e \u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e \u1019\u1010\u103a \u1027\u1015\u103c\u102e \u1019\u1031 \u1007\u103d\u1014\u103a \u1007\u1030\u101c\u102d\u102f\u1004\u103a \u101e\u103c\u1002\u102f\u1010\u103a \u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c \u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c \u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c \u1012\u102e\u1007\u1004\u103a\u1018\u102c".split(" "),
        monthsShort: "\u1007\u1014\u103a \u1016\u1031 \u1019\u1010\u103a \u1015\u103c\u102e \u1019\u1031 \u1007\u103d\u1014\u103a \u101c\u102d\u102f\u1004\u103a \u101e\u103c \u1005\u1000\u103a \u1021\u1031\u102c\u1000\u103a \u1014\u102d\u102f \u1012\u102e".split(" "),
        weekdays: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031 \u1010\u1014\u1004\u103a\u1039\u101c\u102c \u1021\u1004\u103a\u1039\u1002\u102b \u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038 \u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038 \u101e\u1031\u102c\u1000\u103c\u102c \u1005\u1014\u1031".split(" "),
        weekdaysShort: "\u1014\u103d\u1031 \u101c\u102c \u1002\u102b \u101f\u1030\u1038 \u1000\u103c\u102c \u101e\u1031\u102c \u1014\u1031".split(" "),
        weekdaysMin: "\u1014\u103d\u1031 \u101c\u102c \u1002\u102b \u101f\u1030\u1038 \u1000\u103c\u102c \u101e\u1031\u102c \u1014\u1031".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]",
            nextDay: "[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]",
            nextWeek: "dddd LT [\u1019\u103e\u102c]",
            lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]",
            lastWeek: "[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c",
            past: "\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000",
            s: "\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a",
            ss: "%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a",
            m: "\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a",
            mm: "%d \u1019\u102d\u1014\u1005\u103a",
            h: "\u1010\u1005\u103a\u1014\u102c\u101b\u102e",
            hh: "%d \u1014\u102c\u101b\u102e",
            d: "\u1010\u1005\u103a\u101b\u1000\u103a",
            dd: "%d \u101b\u1000\u103a",
            M: "\u1010\u1005\u103a\u101c",
            MM: "%d \u101c",
            y: "\u1010\u1005\u103a\u1014\u103e\u1005\u103a",
            yy: "%d \u1014\u103e\u1005\u103a"
        },
        preparse: function(a) {
            return a.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function(a) {
                return af[a]
            })
        },
        postformat: function(a) {
            return a.replace(/\d/g,
                function(a) {
                    return $e[a]
                })
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("nb", {
        months: "januar februar mars april mai juni juli august september oktober november desember".split(" "),
        monthsShort: "jan. feb. mars april mai juni juli aug. sep. okt. nov. des.".split(" "),
        monthsParseExact: !0,
        weekdays: "s\u00f8ndag mandag tirsdag onsdag torsdag fredag l\u00f8rdag".split(" "),
        weekdaysShort: "s\u00f8. ma. ti. on. to. fr. l\u00f8.".split(" "),
        weekdaysMin: "s\u00f8 ma ti on to fr l\u00f8".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i g\u00e5r kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "noen sekunder",
            ss: "%d sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            M: "en m\u00e5ned",
            MM: "%d m\u00e5neder",
            y: "ett \u00e5r",
            yy: "%d \u00e5r"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var bf = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966"
        },
        cf = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0"
        };
    h.defineLocale("ne", {
        months: "\u091c\u0928\u0935\u0930\u0940 \u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940 \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u093f\u0932 \u092e\u0908 \u091c\u0941\u0928 \u091c\u0941\u0932\u093e\u0908 \u0905\u0917\u0937\u094d\u091f \u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930 \u0905\u0915\u094d\u091f\u094b\u092c\u0930 \u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930 \u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split(" "),
        monthsShort: "\u091c\u0928. \u092b\u0947\u092c\u094d\u0930\u0941. \u092e\u093e\u0930\u094d\u091a \u0905\u092a\u094d\u0930\u093f. \u092e\u0908 \u091c\u0941\u0928 \u091c\u0941\u0932\u093e\u0908. \u0905\u0917. \u0938\u0947\u092a\u094d\u091f. \u0905\u0915\u094d\u091f\u094b. \u0928\u094b\u092d\u0947. \u0921\u093f\u0938\u0947.".split(" "),
        monthsParseExact: !0,
        weekdays: "\u0906\u0907\u0924\u092c\u093e\u0930 \u0938\u094b\u092e\u092c\u093e\u0930 \u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930 \u092c\u0941\u0927\u092c\u093e\u0930 \u092c\u093f\u0939\u093f\u092c\u093e\u0930 \u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930 \u0936\u0928\u093f\u092c\u093e\u0930".split(" "),
        weekdaysShort: "\u0906\u0907\u0924. \u0938\u094b\u092e. \u092e\u0919\u094d\u0917\u0932. \u092c\u0941\u0927. \u092c\u093f\u0939\u093f. \u0936\u0941\u0915\u094d\u0930. \u0936\u0928\u093f.".split(" "),
        weekdaysMin: "\u0906. \u0938\u094b. \u092e\u0902. \u092c\u0941. \u092c\u093f. \u0936\u0941. \u0936.".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "A\u0915\u094b h:mm \u092c\u091c\u0947",
            LTS: "A\u0915\u094b h:mm:ss \u092c\u091c\u0947",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947",
            LLLL: "dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947"
        },
        preparse: function(a) {
            return a.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(a) {
                return cf[a]
            })
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return bf[a]
            })
        },
        meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u0930\u093e\u0924\u093f" === b ? 4 > a ? a : a + 12 : "\u092c\u093f\u0939\u093e\u0928" ===
                b ? a : "\u0926\u093f\u0909\u0901\u0938\u094b" === b ? 10 <= a ? a : a + 12 : "\u0938\u093e\u0901\u091d" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 3 > a ? "\u0930\u093e\u0924\u093f" : 12 > a ? "\u092c\u093f\u0939\u093e\u0928" : 16 > a ? "\u0926\u093f\u0909\u0901\u0938\u094b" : 20 > a ? "\u0938\u093e\u0901\u091d" : "\u0930\u093e\u0924\u093f"
        },
        calendar: {
            sameDay: "[\u0906\u091c] LT",
            nextDay: "[\u092d\u094b\u0932\u093f] LT",
            nextWeek: "[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT",
            lastDay: "[\u0939\u093f\u091c\u094b] LT",
            lastWeek: "[\u0917\u090f\u0915\u094b] dddd[,] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s\u092e\u093e",
            past: "%s \u0905\u0917\u093e\u0921\u093f",
            s: "\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923",
            ss: "%d \u0938\u0947\u0915\u0947\u0923\u094d\u0921",
            m: "\u090f\u0915 \u092e\u093f\u0928\u0947\u091f",
            mm: "%d \u092e\u093f\u0928\u0947\u091f",
            h: "\u090f\u0915 \u0918\u0923\u094d\u091f\u093e",
            hh: "%d \u0918\u0923\u094d\u091f\u093e",
            d: "\u090f\u0915 \u0926\u093f\u0928",
            dd: "%d \u0926\u093f\u0928",
            M: "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",
            MM: "%d \u092e\u0939\u093f\u0928\u093e",
            y: "\u090f\u0915 \u092c\u0930\u094d\u0937",
            yy: "%d \u092c\u0930\u094d\u0937"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var Ad = "jan. feb. mrt. apr. mei jun. jul. aug. sep. okt. nov. dec.".split(" "),
        df = "jan feb mrt apr mei jun jul aug sep okt nov dec".split(" "),
        Oc = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        Bd = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    h.defineLocale("nl-be", {
        months: "januari februari maart april mei juni juli augustus september oktober november december".split(" "),
        monthsShort: function(a, b) {
            return a ? /-MMM-/.test(b) ? df[a.month()] : Ad[a.month()] : Ad
        },
        monthsRegex: Bd,
        monthsShortRegex: Bd,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: Oc,
        longMonthsParse: Oc,
        shortMonthsParse: Oc,
        weekdays: "zondag maandag dinsdag woensdag donderdag vrijdag zaterdag".split(" "),
        weekdaysShort: "zo. ma. di. wo. do. vr. za.".split(" "),
        weekdaysMin: "zo ma di wo do vr za".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "\u00e9\u00e9n minuut",
            mm: "%d minuten",
            h: "\u00e9\u00e9n uur",
            hh: "%d uur",
            d: "\u00e9\u00e9n dag",
            dd: "%d dagen",
            M: "\u00e9\u00e9n maand",
            MM: "%d maanden",
            y: "\u00e9\u00e9n jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(a) {
            return a + (1 === a || 8 === a || 20 <= a ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Cd = "jan. feb. mrt. apr. mei jun. jul. aug. sep. okt. nov. dec.".split(" "),
        ef = "jan feb mrt apr mei jun jul aug sep okt nov dec".split(" "),
        Pc = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        Dd = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    h.defineLocale("nl", {
        months: "januari februari maart april mei juni juli augustus september oktober november december".split(" "),
        monthsShort: function(a, b) {
            return a ? /-MMM-/.test(b) ? ef[a.month()] : Cd[a.month()] : Cd
        },
        monthsRegex: Dd,
        monthsShortRegex: Dd,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: Pc,
        longMonthsParse: Pc,
        shortMonthsParse: Pc,
        weekdays: "zondag maandag dinsdag woensdag donderdag vrijdag zaterdag".split(" "),
        weekdaysShort: "zo. ma. di. wo. do. vr. za.".split(" "),
        weekdaysMin: "zo ma di wo do vr za".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            ss: "%d seconden",
            m: "\u00e9\u00e9n minuut",
            mm: "%d minuten",
            h: "\u00e9\u00e9n uur",
            hh: "%d uur",
            d: "\u00e9\u00e9n dag",
            dd: "%d dagen",
            M: "\u00e9\u00e9n maand",
            MM: "%d maanden",
            y: "\u00e9\u00e9n jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(a) {
            return a + (1 === a || 8 === a || 20 <= a ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("nn", {
        months: "januar februar mars april mai juni juli august september oktober november desember".split(" "),
        monthsShort: "jan feb mar apr mai jun jul aug sep okt nov des".split(" "),
        weekdays: "sundag m\u00e5ndag tysdag onsdag torsdag fredag laurdag".split(" "),
        weekdaysShort: "sun m\u00e5n tys ons tor fre lau".split(" "),
        weekdaysMin: "su m\u00e5 ty on to fr l\u00f8".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I g\u00e5r klokka] LT",
            lastWeek: "[F\u00f8reg\u00e5ande] dddd [klokka] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s sidan",
            s: "nokre sekund",
            ss: "%d sekund",
            m: "eit minutt",
            mm: "%d minutt",
            h: "ein time",
            hh: "%d timar",
            d: "ein dag",
            dd: "%d dagar",
            M: "ein m\u00e5nad",
            MM: "%d m\u00e5nader",
            y: "eit \u00e5r",
            yy: "%d \u00e5r"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var ff = {
            1: "\u0a67",
            2: "\u0a68",
            3: "\u0a69",
            4: "\u0a6a",
            5: "\u0a6b",
            6: "\u0a6c",
            7: "\u0a6d",
            8: "\u0a6e",
            9: "\u0a6f",
            0: "\u0a66"
        },
        gf = {
            "\u0a67": "1",
            "\u0a68": "2",
            "\u0a69": "3",
            "\u0a6a": "4",
            "\u0a6b": "5",
            "\u0a6c": "6",
            "\u0a6d": "7",
            "\u0a6e": "8",
            "\u0a6f": "9",
            "\u0a66": "0"
        };
    h.defineLocale("pa-in", {
        months: "\u0a1c\u0a28\u0a35\u0a30\u0a40 \u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40 \u0a2e\u0a3e\u0a30\u0a1a \u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32 \u0a2e\u0a08 \u0a1c\u0a42\u0a28 \u0a1c\u0a41\u0a32\u0a3e\u0a08 \u0a05\u0a17\u0a38\u0a24 \u0a38\u0a24\u0a70\u0a2c\u0a30 \u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30 \u0a28\u0a35\u0a70\u0a2c\u0a30 \u0a26\u0a38\u0a70\u0a2c\u0a30".split(" "),
        monthsShort: "\u0a1c\u0a28\u0a35\u0a30\u0a40 \u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40 \u0a2e\u0a3e\u0a30\u0a1a \u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32 \u0a2e\u0a08 \u0a1c\u0a42\u0a28 \u0a1c\u0a41\u0a32\u0a3e\u0a08 \u0a05\u0a17\u0a38\u0a24 \u0a38\u0a24\u0a70\u0a2c\u0a30 \u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30 \u0a28\u0a35\u0a70\u0a2c\u0a30 \u0a26\u0a38\u0a70\u0a2c\u0a30".split(" "),
        weekdays: "\u0a10\u0a24\u0a35\u0a3e\u0a30 \u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30 \u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30 \u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30 \u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30 \u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30 \u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split(" "),
        weekdaysShort: "\u0a10\u0a24 \u0a38\u0a4b\u0a2e \u0a2e\u0a70\u0a17\u0a32 \u0a2c\u0a41\u0a27 \u0a35\u0a40\u0a30 \u0a38\u0a3c\u0a41\u0a15\u0a30 \u0a38\u0a3c\u0a28\u0a40".split(" "),
        weekdaysMin: "\u0a10\u0a24 \u0a38\u0a4b\u0a2e \u0a2e\u0a70\u0a17\u0a32 \u0a2c\u0a41\u0a27 \u0a35\u0a40\u0a30 \u0a38\u0a3c\u0a41\u0a15\u0a30 \u0a38\u0a3c\u0a28\u0a40".split(" "),
        longDateFormat: {
            LT: "A h:mm \u0a35\u0a1c\u0a47",
            LTS: "A h:mm:ss \u0a35\u0a1c\u0a47",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47"
        },
        calendar: {
            sameDay: "[\u0a05\u0a1c] LT",
            nextDay: "[\u0a15\u0a32] LT",
            nextWeek: "[\u0a05\u0a17\u0a32\u0a3e] dddd, LT",
            lastDay: "[\u0a15\u0a32] LT",
            lastWeek: "[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0a35\u0a3f\u0a71\u0a1a",
            past: "%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47",
            s: "\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f",
            ss: "%d \u0a38\u0a15\u0a3f\u0a70\u0a1f",
            m: "\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f",
            mm: "%d \u0a2e\u0a3f\u0a70\u0a1f",
            h: "\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e",
            hh: "%d \u0a18\u0a70\u0a1f\u0a47",
            d: "\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28",
            dd: "%d \u0a26\u0a3f\u0a28",
            M: "\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e",
            MM: "%d \u0a2e\u0a39\u0a40\u0a28\u0a47",
            y: "\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32",
            yy: "%d \u0a38\u0a3e\u0a32"
        },
        preparse: function(a) {
            return a.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function(a) {
                return gf[a]
            })
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return ff[a]
            })
        },
        meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u0a30\u0a3e\u0a24" === b ? 4 > a ? a : a + 12 : "\u0a38\u0a35\u0a47\u0a30" === b ? a : "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" === b ? 10 <= a ? a : a + 12 : "\u0a38\u0a3c\u0a3e\u0a2e" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "\u0a30\u0a3e\u0a24" : 10 > a ? "\u0a38\u0a35\u0a47\u0a30" : 17 > a ? "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" : 20 > a ? "\u0a38\u0a3c\u0a3e\u0a2e" :
                "\u0a30\u0a3e\u0a24"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var Qc = "stycze\u0144 luty marzec kwiecie\u0144 maj czerwiec lipiec sierpie\u0144 wrzesie\u0144 pa\u017adziernik listopad grudzie\u0144".split(" "),
        Ed = "stycznia lutego marca kwietnia maja czerwca lipca sierpnia wrze\u015bnia pa\u017adziernika listopada grudnia".split(" ");
    h.defineLocale("pl", {
        months: function(a, b) {
            return a ? "" === b ? "(" + Ed[a.month()] + "|" + Qc[a.month()] + ")" : /D MMMM/.test(b) ? Ed[a.month()] : Qc[a.month()] : Qc
        },
        monthsShort: "sty lut mar kwi maj cze lip sie wrz pa\u017a lis gru".split(" "),
        weekdays: "niedziela poniedzia\u0142ek wtorek \u015broda czwartek pi\u0105tek sobota".split(" "),
        weekdaysShort: "ndz pon wt \u015br czw pt sob".split(" "),
        weekdaysMin: "Nd Pn Wt \u015ar Cz Pt So".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Dzi\u015b o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[W niedziel\u0119 o] LT";
                    case 2:
                        return "[We wtorek o] LT";
                    case 3:
                        return "[W \u015brod\u0119 o] LT";
                    case 6:
                        return "[W sobot\u0119 o] LT";
                    default:
                        return "[W] dddd [o] LT"
                }
            },
            lastDay: "[Wczoraj o] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
                    case 3:
                        return "[W zesz\u0142\u0105 \u015brod\u0119 o] LT";
                    case 6:
                        return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
                    default:
                        return "[W zesz\u0142y] dddd [o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            ss: rb,
            m: rb,
            mm: rb,
            h: rb,
            hh: rb,
            d: "1 dzie\u0144",
            dd: "%d dni",
            M: "miesi\u0105c",
            MM: rb,
            y: "rok",
            yy: rb
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("pt-br", {
        months: "Janeiro Fevereiro Mar\u00e7o Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro".split(" "),
        monthsShort: "Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez".split(" "),
        weekdays: "Domingo Segunda-feira Ter\u00e7a-feira Quarta-feira Quinta-feira Sexta-feira S\u00e1bado".split(" "),
        weekdaysShort: "Dom Seg Ter Qua Qui Sex S\u00e1b".split(" "),
        weekdaysMin: "Do 2\u00aa 3\u00aa 4\u00aa 5\u00aa 6\u00aa S\u00e1".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [\u00e0s] HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY [\u00e0s] HH:mm"
        },
        calendar: {
            sameDay: "[Hoje \u00e0s] LT",
            nextDay: "[Amanh\u00e3 \u00e0s] LT",
            nextWeek: "dddd [\u00e0s] LT",
            lastDay: "[Ontem \u00e0s] LT",
            lastWeek: function() {
                return 0 === this.day() || 6 === this.day() ? "[\u00daltimo] dddd [\u00e0s] LT" :
                    "[\u00daltima] dddd [\u00e0s] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "h\u00e1 %s",
            s: "poucos segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um m\u00eas",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\u00ba"
    });
    h.defineLocale("pt", {
        months: "Janeiro Fevereiro Mar\u00e7o Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro".split(" "),
        monthsShort: "Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez".split(" "),
        weekdays: "Domingo Segunda-feira Ter\u00e7a-feira Quarta-feira Quinta-feira Sexta-feira S\u00e1bado".split(" "),
        weekdaysShort: "Dom Seg Ter Qua Qui Sex S\u00e1b".split(" "),
        weekdaysMin: "Do 2\u00aa 3\u00aa 4\u00aa 5\u00aa 6\u00aa S\u00e1".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Hoje \u00e0s] LT",
            nextDay: "[Amanh\u00e3 \u00e0s] LT",
            nextWeek: "dddd [\u00e0s] LT",
            lastDay: "[Ontem \u00e0s] LT",
            lastWeek: function() {
                return 0 === this.day() || 6 === this.day() ? "[\u00daltimo] dddd [\u00e0s] LT" : "[\u00daltima] dddd [\u00e0s] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "h\u00e1 %s",
            s: "segundos",
            ss: "%d segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um m\u00eas",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\u00ba",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("ro", {
        months: "ianuarie februarie martie aprilie mai iunie iulie august septembrie octombrie noiembrie decembrie".split(" "),
        monthsShort: "ian. febr. mart. apr. mai iun. iul. aug. sept. oct. nov. dec.".split(" "),
        monthsParseExact: !0,
        weekdays: "duminic\u0103 luni mar\u021bi miercuri joi vineri s\u00e2mb\u0103t\u0103".split(" "),
        weekdaysShort: "Dum Lun Mar Mie Joi Vin S\u00e2m".split(" "),
        weekdaysMin: "Du Lu Ma Mi Jo Vi S\u00e2".split(" "),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[m\u00e2ine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "peste %s",
            past: "%s \u00een urm\u0103",
            s: "c\u00e2teva secunde",
            ss: Lb,
            m: "un minut",
            mm: Lb,
            h: "o or\u0103",
            hh: Lb,
            d: "o zi",
            dd: Lb,
            M: "o lun\u0103",
            MM: Lb,
            y: "un an",
            yy: Lb
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Rc = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i,
        /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i
    ];
    h.defineLocale("ru", {
        months: {
            format: "\u044f\u043d\u0432\u0430\u0440\u044f \u0444\u0435\u0432\u0440\u0430\u043b\u044f \u043c\u0430\u0440\u0442\u0430 \u0430\u043f\u0440\u0435\u043b\u044f \u043c\u0430\u044f \u0438\u044e\u043d\u044f \u0438\u044e\u043b\u044f \u0430\u0432\u0433\u0443\u0441\u0442\u0430 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f \u043e\u043a\u0442\u044f\u0431\u0440\u044f \u043d\u043e\u044f\u0431\u0440\u044f \u0434\u0435\u043a\u0430\u0431\u0440\u044f".split(" "),
            standalone: "\u044f\u043d\u0432\u0430\u0440\u044c \u0444\u0435\u0432\u0440\u0430\u043b\u044c \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0435\u043b\u044c \u043c\u0430\u0439 \u0438\u044e\u043d\u044c \u0438\u044e\u043b\u044c \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c \u043e\u043a\u0442\u044f\u0431\u0440\u044c \u043d\u043e\u044f\u0431\u0440\u044c \u0434\u0435\u043a\u0430\u0431\u0440\u044c".split(" ")
        },
        monthsShort: {
            format: "\u044f\u043d\u0432. \u0444\u0435\u0432\u0440. \u043c\u0430\u0440. \u0430\u043f\u0440. \u043c\u0430\u044f \u0438\u044e\u043d\u044f \u0438\u044e\u043b\u044f \u0430\u0432\u0433. \u0441\u0435\u043d\u0442. \u043e\u043a\u0442. \u043d\u043e\u044f\u0431. \u0434\u0435\u043a.".split(" "),
            standalone: "\u044f\u043d\u0432. \u0444\u0435\u0432\u0440. \u043c\u0430\u0440\u0442 \u0430\u043f\u0440. \u043c\u0430\u0439 \u0438\u044e\u043d\u044c \u0438\u044e\u043b\u044c \u0430\u0432\u0433. \u0441\u0435\u043d\u0442. \u043e\u043a\u0442. \u043d\u043e\u044f\u0431. \u0434\u0435\u043a.".split(" ")
        },
        weekdays: {
            standalone: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0433 \u043f\u044f\u0442\u043d\u0438\u0446\u0430 \u0441\u0443\u0431\u0431\u043e\u0442\u0430".split(" "),
            format: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a \u0432\u0442\u043e\u0440\u043d\u0438\u043a \u0441\u0440\u0435\u0434\u0443 \u0447\u0435\u0442\u0432\u0435\u0440\u0433 \u043f\u044f\u0442\u043d\u0438\u0446\u0443 \u0441\u0443\u0431\u0431\u043e\u0442\u0443".split(" "),
            isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/
        },
        weekdaysShort: "\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),
        weekdaysMin: "\u0432\u0441 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),
        monthsParse: Rc,
        longMonthsParse: Rc,
        shortMonthsParse: Rc,
        monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
        monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
        monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,
        monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0433.",
            LLL: "D MMMM YYYY \u0433., H:mm",
            LLLL: "dddd, D MMMM YYYY \u0433., H:mm"
        },
        calendar: {
            sameDay: "[\u0421\u0435\u0433\u043e\u0434\u043d\u044f, \u0432] LT",
            nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",
            nextWeek: function(a) {
                if (a.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";
                switch (this.day()) {
                    case 0:
                        return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd, [\u0432] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd, [\u0432] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd, [\u0432] LT"
                }
            },
            lastWeek: function(a) {
                if (a.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";
                switch (this.day()) {
                    case 0:
                        return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd, [\u0432] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd, [\u0432] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd, [\u0432] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0447\u0435\u0440\u0435\u0437 %s",
            past: "%s \u043d\u0430\u0437\u0430\u0434",
            s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",
            ss: sb,
            m: sb,
            mm: sb,
            h: "\u0447\u0430\u0441",
            hh: sb,
            d: "\u0434\u0435\u043d\u044c",
            dd: sb,
            M: "\u043c\u0435\u0441\u044f\u0446",
            MM: sb,
            y: "\u0433\u043e\u0434",
            yy: sb
        },
        meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,
        isPM: function(a) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(a)
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "\u043d\u043e\u0447\u0438" : 12 > a ? "\u0443\u0442\u0440\u0430" : 17 > a ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0435\u0440\u0430"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
        ordinal: function(a, b) {
            switch (b) {
                case "M":
                case "d":
                case "DDD":
                    return a + "-\u0439";
                case "D":
                    return a + "-\u0433\u043e";
                case "w":
                case "W":
                    return a + "-\u044f";
                default:
                    return a
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Fd = "\u062c\u0646\u0648\u0631\u064a \u0641\u064a\u0628\u0631\u0648\u0631\u064a \u0645\u0627\u0631\u0686 \u0627\u067e\u0631\u064a\u0644 \u0645\u0626\u064a \u062c\u0648\u0646 \u062c\u0648\u0644\u0627\u0621\u0650 \u0622\u06af\u0633\u067d \u0633\u064a\u067e\u067d\u0645\u0628\u0631 \u0622\u06aa\u067d\u0648\u0628\u0631 \u0646\u0648\u0645\u0628\u0631 \u068a\u0633\u0645\u0628\u0631".split(" "),
        Sc = "\u0622\u0686\u0631 \u0633\u0648\u0645\u0631 \u0627\u06b1\u0627\u0631\u0648 \u0627\u0631\u0628\u0639 \u062e\u0645\u064a\u0633 \u062c\u0645\u0639 \u0687\u0646\u0687\u0631".split(" ");
    h.defineLocale("sd", {
        months: Fd,
        monthsShort: Fd,
        weekdays: Sc,
        weekdaysShort: Sc,
        weekdaysMin: Sc,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd\u060c D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
        isPM: function(a) {
            return "\u0634\u0627\u0645" ===
                a
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645"
        },
        calendar: {
            sameDay: "[\u0627\u0684] LT",
            nextDay: "[\u0633\u0680\u0627\u06bb\u064a] LT",
            nextWeek: "dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT",
            lastDay: "[\u06aa\u0627\u0644\u0647\u0647] LT",
            lastWeek: "[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u067e\u0648\u0621",
            past: "%s \u0627\u06b3",
            s: "\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a",
            ss: "%d \u0633\u064a\u06aa\u0646\u068a",
            m: "\u0647\u06aa \u0645\u0646\u067d",
            mm: "%d \u0645\u0646\u067d",
            h: "\u0647\u06aa \u06aa\u0644\u0627\u06aa",
            hh: "%d \u06aa\u0644\u0627\u06aa",
            d: "\u0647\u06aa \u068f\u064a\u0646\u0647\u0646",
            dd: "%d \u068f\u064a\u0646\u0647\u0646",
            M: "\u0647\u06aa \u0645\u0647\u064a\u0646\u0648",
            MM: "%d \u0645\u0647\u064a\u0646\u0627",
            y: "\u0647\u06aa \u0633\u0627\u0644",
            yy: "%d \u0633\u0627\u0644"
        },
        preparse: function(a) {
            return a.replace(/\u060c/g, ",")
        },
        postformat: function(a) {
            return a.replace(/,/g,
                "\u060c")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("se", {
        months: "o\u0111\u0111ajagem\u00e1nnu guovvam\u00e1nnu njuk\u010dam\u00e1nnu cuo\u014bom\u00e1nnu miessem\u00e1nnu geassem\u00e1nnu suoidnem\u00e1nnu borgem\u00e1nnu \u010dak\u010dam\u00e1nnu golggotm\u00e1nnu sk\u00e1bmam\u00e1nnu juovlam\u00e1nnu".split(" "),
        monthsShort: "o\u0111\u0111j guov njuk cuo mies geas suoi borg \u010dak\u010d golg sk\u00e1b juov".split(" "),
        weekdays: "sotnabeaivi vuoss\u00e1rga ma\u014b\u014beb\u00e1rga gaskavahkku duorastat bearjadat l\u00e1vvardat".split(" "),
        weekdaysShort: "sotn vuos ma\u014b gask duor bear l\u00e1v".split(" "),
        weekdaysMin: "svmgdbL".split(""),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
        },
        calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s gea\u017ees",
            past: "ma\u014bit %s",
            s: "moadde sekunddat",
            ss: "%d sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta m\u00e1nnu",
            MM: "%d m\u00e1nut",
            y: "okta jahki",
            yy: "%d jagit"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("si", {
        months: "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2 \u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2 \u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4 \u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca \u0db8\u0dd0\u0dba\u0dd2 \u0da2\u0dd6\u0db1\u0dd2 \u0da2\u0dd6\u0dbd\u0dd2 \u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4 \u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca \u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca \u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca \u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split(" "),
        monthsShort: "\u0da2\u0db1 \u0db4\u0dd9\u0db6 \u0db8\u0dcf\u0dbb\u0dca \u0d85\u0db4\u0dca \u0db8\u0dd0\u0dba\u0dd2 \u0da2\u0dd6\u0db1\u0dd2 \u0da2\u0dd6\u0dbd\u0dd2 \u0d85\u0d9c\u0ddd \u0dc3\u0dd0\u0db4\u0dca \u0d94\u0d9a\u0dca \u0db1\u0ddc\u0dc0\u0dd0 \u0daf\u0dd9\u0dc3\u0dd0".split(" "),
        weekdays: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf \u0dc3\u0db3\u0dd4\u0daf\u0dcf \u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf \u0db6\u0daf\u0dcf\u0daf\u0dcf \u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf \u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf \u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split(" "),
        weekdaysShort: "\u0d89\u0dbb\u0dd2 \u0dc3\u0db3\u0dd4 \u0d85\u0d9f \u0db6\u0daf\u0dcf \u0db6\u0dca\u200d\u0dbb\u0dc4 \u0dc3\u0dd2\u0d9a\u0dd4 \u0dc3\u0dd9\u0db1".split(" "),
        weekdaysMin: "\u0d89 \u0dc3 \u0d85 \u0db6 \u0db6\u0dca\u200d\u0dbb \u0dc3\u0dd2 \u0dc3\u0dd9".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "a h:mm",
            LTS: "a h:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY MMMM D",
            LLL: "YYYY MMMM D, a h:mm",
            LLLL: "YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss"
        },
        calendar: {
            sameDay: "[\u0d85\u0daf] LT[\u0da7]",
            nextDay: "[\u0dc4\u0dd9\u0da7] LT[\u0da7]",
            nextWeek: "dddd LT[\u0da7]",
            lastDay: "[\u0d8a\u0dba\u0dda] LT[\u0da7]",
            lastWeek: "[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s\u0d9a\u0dd2\u0db1\u0dca",
            past: "%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb",
            s: "\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba",
            ss: "\u0dad\u0dad\u0dca\u0db4\u0dbb %d",
            m: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0",
            mm: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d",
            h: "\u0db4\u0dd0\u0dba",
            hh: "\u0db4\u0dd0\u0dba %d",
            d: "\u0daf\u0dd2\u0db1\u0dba",
            dd: "\u0daf\u0dd2\u0db1 %d",
            M: "\u0db8\u0dcf\u0dc3\u0dba",
            MM: "\u0db8\u0dcf\u0dc3 %d",
            y: "\u0dc0\u0dc3\u0dbb",
            yy: "\u0dc0\u0dc3\u0dbb %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,
        ordinal: function(a) {
            return a + " \u0dc0\u0dd0\u0db1\u0dd2"
        },
        meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,
        isPM: function(a) {
            return "\u0db4.\u0dc0." === a ||
                "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" === a
        },
        meridiem: function(a, b, c) {
            return 11 < a ? c ? "\u0db4.\u0dc0." : "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" : c ? "\u0db4\u0dd9.\u0dc0." : "\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4"
        }
    });
    h.defineLocale("sk", {
        months: "janu\u00e1r febru\u00e1r marec apr\u00edl m\u00e1j j\u00fan j\u00fal august september okt\u00f3ber november december".split(" "),
        monthsShort: "jan feb mar apr m\u00e1j j\u00fan j\u00fal aug sep okt nov dec".split(" "),
        weekdays: "nede\u013ea pondelok utorok streda \u0161tvrtok piatok sobota".split(" "),
        weekdaysShort: "ne po ut st \u0161t pi so".split(" "),
        weekdaysMin: "ne po ut st \u0161t pi so".split(" "),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v nede\u013eu o] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [o] LT";
                    case 3:
                        return "[v stredu o] LT";
                    case 4:
                        return "[vo \u0161tvrtok o] LT";
                    case 5:
                        return "[v piatok o] LT";
                    case 6:
                        return "[v sobotu o] LT"
                }
            },
            lastDay: "[v\u010dera o] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[minul\u00fa nede\u013eu o] LT";
                    case 1:
                    case 2:
                        return "[minul\u00fd] dddd [o] LT";
                    case 3:
                        return "[minul\u00fa stredu o] LT";
                    case 4:
                    case 5:
                        return "[minul\u00fd] dddd [o] LT";
                    case 6:
                        return "[minul\u00fa sobotu o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: va,
            ss: va,
            m: va,
            mm: va,
            h: va,
            hh: va,
            d: va,
            dd: va,
            M: va,
            MM: va,
            y: va,
            yy: va
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("sl", {
        months: "januar februar marec april maj junij julij avgust september oktober november december".split(" "),
        monthsShort: "jan. feb. mar. apr. maj. jun. jul. avg. sep. okt. nov. dec.".split(" "),
        monthsParseExact: !0,
        weekdays: "nedelja ponedeljek torek sreda \u010detrtek petek sobota".split(" "),
        weekdaysShort: "ned. pon. tor. sre. \u010det. pet. sob.".split(" "),
        weekdaysMin: "ne po to sr \u010de pe so".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v] [nedeljo] [ob] LT";
                    case 3:
                        return "[v] [sredo] [ob] LT";
                    case 6:
                        return "[v] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[v] dddd [ob] LT"
                }
            },
            lastDay: "[v\u010deraj ob] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[prej\u0161njo] [nedeljo] [ob] LT";
                    case 3:
                        return "[prej\u0161njo] [sredo] [ob] LT";
                    case 6:
                        return "[prej\u0161njo] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prej\u0161nji] dddd [ob] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u010dez %s",
            past: "pred %s",
            s: wa,
            ss: wa,
            m: wa,
            mm: wa,
            h: wa,
            hh: wa,
            d: wa,
            dd: wa,
            M: wa,
            MM: wa,
            y: wa,
            yy: wa
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("sq", {
        months: "Janar Shkurt Mars Prill Maj Qershor Korrik Gusht Shtator Tetor N\u00ebntor Dhjetor".split(" "),
        monthsShort: "Jan Shk Mar Pri Maj Qer Kor Gus Sht Tet N\u00ebn Dhj".split(" "),
        weekdays: "E Diel;E H\u00ebn\u00eb;E Mart\u00eb;E M\u00ebrkur\u00eb;E Enjte;E Premte;E Shtun\u00eb".split(";"),
        weekdaysShort: "Die H\u00ebn Mar M\u00ebr Enj Pre Sht".split(" "),
        weekdaysMin: "D H Ma M\u00eb E P Sh".split(" "),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function(a) {
            return "M" === a.charAt(0)
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "PD" : "MD"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Sot n\u00eb] LT",
            nextDay: "[Nes\u00ebr n\u00eb] LT",
            nextWeek: "dddd [n\u00eb] LT",
            lastDay: "[Dje n\u00eb] LT",
            lastWeek: "dddd [e kaluar n\u00eb] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "n\u00eb %s",
            past: "%s m\u00eb par\u00eb",
            s: "disa sekonda",
            ss: "%d sekonda",
            m: "nj\u00eb minut\u00eb",
            mm: "%d minuta",
            h: "nj\u00eb or\u00eb",
            hh: "%d or\u00eb",
            d: "nj\u00eb dit\u00eb",
            dd: "%d dit\u00eb",
            M: "nj\u00eb muaj",
            MM: "%d muaj",
            y: "nj\u00eb vit",
            yy: "%d vite"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Ra = {
        words: {
            ss: ["\u0441\u0435\u043a\u0443\u043d\u0434\u0430", "\u0441\u0435\u043a\u0443\u043d\u0434\u0435",
                "\u0441\u0435\u043a\u0443\u043d\u0434\u0438"
            ],
            m: ["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442", "\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435"],
            mm: ["\u043c\u0438\u043d\u0443\u0442", "\u043c\u0438\u043d\u0443\u0442\u0435", "\u043c\u0438\u043d\u0443\u0442\u0430"],
            h: ["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442", "\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"],
            hh: ["\u0441\u0430\u0442", "\u0441\u0430\u0442\u0430", "\u0441\u0430\u0442\u0438"],
            dd: ["\u0434\u0430\u043d",
                "\u0434\u0430\u043d\u0430", "\u0434\u0430\u043d\u0430"
            ],
            MM: ["\u043c\u0435\u0441\u0435\u0446", "\u043c\u0435\u0441\u0435\u0446\u0430", "\u043c\u0435\u0441\u0435\u0446\u0438"],
            yy: ["\u0433\u043e\u0434\u0438\u043d\u0430", "\u0433\u043e\u0434\u0438\u043d\u0435", "\u0433\u043e\u0434\u0438\u043d\u0430"]
        },
        correctGrammaticalCase: function(a, b) {
            return 1 === a ? b[0] : 2 <= a && 4 >= a ? b[1] : b[2]
        },
        translate: function(a, b, c) {
            var e = Ra.words[c];
            return 1 === c.length ? b ? e[0] : e[1] : a + " " + Ra.correctGrammaticalCase(a, e)
        }
    };
    h.defineLocale("sr-cyrl", {
        months: "\u0458\u0430\u043d\u0443\u0430\u0440 \u0444\u0435\u0431\u0440\u0443\u0430\u0440 \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0438\u043b \u043c\u0430\u0458 \u0458\u0443\u043d \u0458\u0443\u043b \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440 \u043e\u043a\u0442\u043e\u0431\u0430\u0440 \u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440 \u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split(" "),
        monthsShort: "\u0458\u0430\u043d. \u0444\u0435\u0431. \u043c\u0430\u0440. \u0430\u043f\u0440. \u043c\u0430\u0458 \u0458\u0443\u043d \u0458\u0443\u043b \u0430\u0432\u0433. \u0441\u0435\u043f. \u043e\u043a\u0442. \u043d\u043e\u0432. \u0434\u0435\u0446.".split(" "),
        monthsParseExact: !0,
        weekdays: "\u043d\u0435\u0434\u0435\u0459\u0430 \u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a \u0443\u0442\u043e\u0440\u0430\u043a \u0441\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a \u043f\u0435\u0442\u0430\u043a \u0441\u0443\u0431\u043e\u0442\u0430".split(" "),
        weekdaysShort: "\u043d\u0435\u0434. \u043f\u043e\u043d. \u0443\u0442\u043e. \u0441\u0440\u0435. \u0447\u0435\u0442. \u043f\u0435\u0442. \u0441\u0443\u0431.".split(" "),
        weekdaysMin: "\u043d\u0435 \u043f\u043e \u0443\u0442 \u0441\u0440 \u0447\u0435 \u043f\u0435 \u0441\u0443".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[\u0434\u0430\u043d\u0430\u0441 \u0443] LT",
            nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";
                    case 3:
                        return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";
                    case 6:
                        return "[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[\u0443] dddd [\u0443] LT"
                }
            },
            lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT",
            lastWeek: function() {
                return "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT;[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT;[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT;[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT;[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT;[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT;[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT".split(";")[this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0437\u0430 %s",
            past: "\u043f\u0440\u0435 %s",
            s: "\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
            ss: Ra.translate,
            m: Ra.translate,
            mm: Ra.translate,
            h: Ra.translate,
            hh: Ra.translate,
            d: "\u0434\u0430\u043d",
            dd: Ra.translate,
            M: "\u043c\u0435\u0441\u0435\u0446",
            MM: Ra.translate,
            y: "\u0433\u043e\u0434\u0438\u043d\u0443",
            yy: Ra.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Sa = {
        words: {
            ss: ["sekunda",
                "sekunde", "sekundi"
            ],
            m: ["jedan minut", "jedne minute"],
            mm: ["minut", "minute", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mesec", "meseca", "meseci"],
            yy: ["godina", "godine", "godina"]
        },
        correctGrammaticalCase: function(a, b) {
            return 1 === a ? b[0] : 2 <= a && 4 >= a ? b[1] : b[2]
        },
        translate: function(a, b, c) {
            var e = Sa.words[c];
            return 1 === c.length ? b ? e[0] : e[1] : a + " " + Sa.correctGrammaticalCase(a, e)
        }
    };
    h.defineLocale("sr", {
        months: "januar februar mart april maj jun jul avgust septembar oktobar novembar decembar".split(" "),
        monthsShort: "jan. feb. mar. apr. maj jun jul avg. sep. okt. nov. dec.".split(" "),
        monthsParseExact: !0,
        weekdays: "nedelja ponedeljak utorak sreda \u010detvrtak petak subota".split(" "),
        weekdaysShort: "ned. pon. uto. sre. \u010det. pet. sub.".split(" "),
        weekdaysMin: "ne po ut sr \u010de pe su".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedelju] [u] LT";
                    case 3:
                        return "[u] [sredu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju\u010de u] LT",
            lastWeek: function() {
                return "[pro\u0161le] [nedelje] [u] LT;[pro\u0161log] [ponedeljka] [u] LT;[pro\u0161log] [utorka] [u] LT;[pro\u0161le] [srede] [u] LT;[pro\u0161log] [\u010detvrtka] [u] LT;[pro\u0161log] [petka] [u] LT;[pro\u0161le] [subote] [u] LT".split(";")[this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pre %s",
            s: "nekoliko sekundi",
            ss: Sa.translate,
            m: Sa.translate,
            mm: Sa.translate,
            h: Sa.translate,
            hh: Sa.translate,
            d: "dan",
            dd: Sa.translate,
            M: "mesec",
            MM: Sa.translate,
            y: "godinu",
            yy: Sa.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("ss", {
        months: "Bhimbidvwane Indlovana Indlov'lenkhulu Mabasa Inkhwekhweti Inhlaba Kholwane Ingci Inyoni Imphala Lweti Ingongoni".split(" "),
        monthsShort: "Bhi Ina Inu Mab Ink Inh Kho Igc Iny Imp Lwe Igo".split(" "),
        weekdays: "Lisontfo Umsombuluko Lesibili Lesitsatfu Lesine Lesihlanu Umgcibelo".split(" "),
        weekdaysShort: "Lis Umb Lsb Les Lsi Lsh Umg".split(" "),
        weekdaysMin: "Li Us Lb Lt Ls Lh Ug".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Namuhla nga] LT",
            nextDay: "[Kusasa nga] LT",
            nextWeek: "dddd [nga] LT",
            lastDay: "[Itolo nga] LT",
            lastWeek: "dddd [leliphelile] [nga] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "nga %s",
            past: "wenteka nga %s",
            s: "emizuzwana lomcane",
            ss: "%d mzuzwana",
            m: "umzuzu",
            mm: "%d emizuzu",
            h: "lihora",
            hh: "%d emahora",
            d: "lilanga",
            dd: "%d emalanga",
            M: "inyanga",
            MM: "%d tinyanga",
            y: "umnyaka",
            yy: "%d iminyaka"
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function(a, b, c) {
            return 11 > a ? "ekuseni" : 15 > a ? "emini" : 19 > a ? "entsambama" : "ebusuku"
        },
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "ekuseni" === b ? a : "emini" === b ? 11 <= a ? a : a + 12 : "entsambama" === b || "ebusuku" === b ? 0 === a ? 0 :
                a + 12 : void 0
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: "%d",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("sv", {
        months: "januari februari mars april maj juni juli augusti september oktober november december".split(" "),
        monthsShort: "jan feb mar apr maj jun jul aug sep okt nov dec".split(" "),
        weekdays: "s\u00f6ndag m\u00e5ndag tisdag onsdag torsdag fredag l\u00f6rdag".split(" "),
        weekdaysShort: "s\u00f6n m\u00e5n tis ons tor fre l\u00f6r".split(" "),
        weekdaysMin: "s\u00f6 m\u00e5 ti on to fr l\u00f6".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Ig\u00e5r] LT",
            nextWeek: "[P\u00e5] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "f\u00f6r %s sedan",
            s: "n\u00e5gra sekunder",
            ss: "%d sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en m\u00e5nad",
            MM: "%d m\u00e5nader",
            y: "ett \u00e5r",
            yy: "%d \u00e5r"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: function(a) {
            var b = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("sw", {
        months: "Januari Februari Machi Aprili Mei Juni Julai Agosti Septemba Oktoba Novemba Desemba".split(" "),
        monthsShort: "Jan Feb Mac Apr Mei Jun Jul Ago Sep Okt Nov Des".split(" "),
        weekdays: "Jumapili Jumatatu Jumanne Jumatano Alhamisi Ijumaa Jumamosi".split(" "),
        weekdaysShort: "Jpl Jtat Jnne Jtan Alh Ijm Jmos".split(" "),
        weekdaysMin: "J2 J3 J4 J5 Al Ij J1".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[leo saa] LT",
            nextDay: "[kesho saa] LT",
            nextWeek: "[wiki ijayo] dddd [saat] LT",
            lastDay: "[jana] LT",
            lastWeek: "[wiki iliyopita] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s baadaye",
            past: "tokea %s",
            s: "hivi punde",
            ss: "sekunde %d",
            m: "dakika moja",
            mm: "dakika %d",
            h: "saa limoja",
            hh: "masaa %d",
            d: "siku moja",
            dd: "masiku %d",
            M: "mwezi mmoja",
            MM: "miezi %d",
            y: "mwaka mmoja",
            yy: "miaka %d"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var hf = {
            1: "\u0be7",
            2: "\u0be8",
            3: "\u0be9",
            4: "\u0bea",
            5: "\u0beb",
            6: "\u0bec",
            7: "\u0bed",
            8: "\u0bee",
            9: "\u0bef",
            0: "\u0be6"
        },
        jf = {
            "\u0be7": "1",
            "\u0be8": "2",
            "\u0be9": "3",
            "\u0bea": "4",
            "\u0beb": "5",
            "\u0bec": "6",
            "\u0bed": "7",
            "\u0bee": "8",
            "\u0bef": "9",
            "\u0be6": "0"
        };
    h.defineLocale("ta", {
        months: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf \u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf \u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd \u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd \u0bae\u0bc7 \u0b9c\u0bc2\u0ba9\u0bcd \u0b9c\u0bc2\u0bb2\u0bc8 \u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd \u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd \u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd \u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd \u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split(" "),
        monthsShort: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf \u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf \u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd \u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd \u0bae\u0bc7 \u0b9c\u0bc2\u0ba9\u0bcd \u0b9c\u0bc2\u0bb2\u0bc8 \u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd \u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd \u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd \u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd \u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split(" "),
        weekdays: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8 \u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8 \u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8 \u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8 \u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8 \u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8 \u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split(" "),
        weekdaysShort: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1 \u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd \u0baa\u0bc1\u0ba4\u0ba9\u0bcd \u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd \u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf \u0b9a\u0ba9\u0bbf".split(" "),
        weekdaysMin: "\u0b9e\u0bbe \u0ba4\u0bbf \u0b9a\u0bc6 \u0baa\u0bc1 \u0bb5\u0bbf \u0bb5\u0bc6 \u0b9a".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, HH:mm",
            LLLL: "dddd, D MMMM YYYY, HH:mm"
        },
        calendar: {
            sameDay: "[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT",
            nextDay: "[\u0ba8\u0bbe\u0bb3\u0bc8] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT",
            lastWeek: "[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0b87\u0bb2\u0bcd",
            past: "%s \u0bae\u0bc1\u0ba9\u0bcd",
            s: "\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",
            ss: "%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",
            m: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",
            mm: "%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
            h: "\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",
            hh: "%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",
            d: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd",
            dd: "%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd",
            M: "\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",
            MM: "%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
            y: "\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",
            yy: "%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/,
        ordinal: function(a) {
            return a + "\u0bb5\u0ba4\u0bc1"
        },
        preparse: function(a) {
            return a.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function(a) {
                return jf[a]
            })
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return hf[a]
            })
        },
        meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
        meridiem: function(a, b, c) {
            return 2 > a ? " \u0baf\u0bbe\u0bae\u0bae\u0bcd" : 6 > a ? " \u0bb5\u0bc8\u0b95\u0bb1\u0bc8" : 10 > a ? " \u0b95\u0bbe\u0bb2\u0bc8" : 14 > a ? " \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" : 18 > a ? " \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1" : 22 > a ? " \u0bae\u0bbe\u0bb2\u0bc8" : " \u0baf\u0bbe\u0bae\u0bae\u0bcd"
        },
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u0baf\u0bbe\u0bae\u0bae\u0bcd" === b ? 2 > a ? a : a + 12 : "\u0bb5\u0bc8\u0b95\u0bb1\u0bc8" === b || "\u0b95\u0bbe\u0bb2\u0bc8" === b ? a : "\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" ===
                b && 10 <= a ? a : a + 12
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    h.defineLocale("te", {
        months: "\u0c1c\u0c28\u0c35\u0c30\u0c3f \u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f \u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d \u0c2e\u0c47 \u0c1c\u0c42\u0c28\u0c4d \u0c1c\u0c41\u0c32\u0c48 \u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41 \u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d \u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d \u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d \u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split(" "),
        monthsShort: "\u0c1c\u0c28. \u0c2b\u0c3f\u0c2c\u0c4d\u0c30. \u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f \u0c0f\u0c2a\u0c4d\u0c30\u0c3f. \u0c2e\u0c47 \u0c1c\u0c42\u0c28\u0c4d \u0c1c\u0c41\u0c32\u0c48 \u0c06\u0c17. \u0c38\u0c46\u0c2a\u0c4d. \u0c05\u0c15\u0c4d\u0c1f\u0c4b. \u0c28\u0c35. \u0c21\u0c3f\u0c38\u0c46.".split(" "),
        monthsParseExact: !0,
        weekdays: "\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02 \u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02 \u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02 \u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02 \u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02 \u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02 \u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split(" "),
        weekdaysShort: "\u0c06\u0c26\u0c3f \u0c38\u0c4b\u0c2e \u0c2e\u0c02\u0c17\u0c33 \u0c2c\u0c41\u0c27 \u0c17\u0c41\u0c30\u0c41 \u0c36\u0c41\u0c15\u0c4d\u0c30 \u0c36\u0c28\u0c3f".split(" "),
        weekdaysMin: "\u0c06 \u0c38\u0c4b \u0c2e\u0c02 \u0c2c\u0c41 \u0c17\u0c41 \u0c36\u0c41 \u0c36".split(" "),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[\u0c28\u0c47\u0c21\u0c41] LT",
            nextDay: "[\u0c30\u0c47\u0c2a\u0c41] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT",
            lastWeek: "[\u0c17\u0c24] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0c32\u0c4b",
            past: "%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02",
            s: "\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41",
            ss: "%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41",
            m: "\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",
            mm: "%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41",
            h: "\u0c12\u0c15 \u0c17\u0c02\u0c1f",
            hh: "%d \u0c17\u0c02\u0c1f\u0c32\u0c41",
            d: "\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41",
            dd: "%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41",
            M: "\u0c12\u0c15 \u0c28\u0c46\u0c32",
            MM: "%d \u0c28\u0c46\u0c32\u0c32\u0c41",
            y: "\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",
            yy: "%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\u0c35/,
        ordinal: "%d\u0c35",
        meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" === b ? 4 > a ? a : a + 12 : "\u0c09\u0c26\u0c2f\u0c02" === b ? a : "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" === b ? 10 <= a ? a : a + 12 : "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" : 10 > a ? "\u0c09\u0c26\u0c2f\u0c02" : 17 > a ? "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" : 20 > a ? "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" :
                "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    h.defineLocale("tet", {
        months: "Janeiru Fevereiru Marsu Abril Maiu Ju\u00f1u Jullu Agustu Setembru Outubru Novembru Dezembru".split(" "),
        monthsShort: "Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez".split(" "),
        weekdays: "Domingu Segunda Tersa Kuarta Kinta Sesta Sabadu".split(" "),
        weekdaysShort: "Dom Seg Ters Kua Kint Sest Sab".split(" "),
        weekdaysMin: "Do Seg Te Ku Ki Ses Sa".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Ohin iha] LT",
            nextDay: "[Aban iha] LT",
            nextWeek: "dddd [iha] LT",
            lastDay: "[Horiseik iha] LT",
            lastWeek: "dddd [semana kotuk] [iha] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "iha %s",
            past: "%s liuba",
            s: "minutu balun",
            ss: "minutu %d",
            m: "minutu ida",
            mm: "minutu %d",
            h: "oras ida",
            hh: "oras %d",
            d: "loron ida",
            dd: "loron %d",
            M: "fulan ida",
            MM: "fulan %d",
            y: "tinan ida",
            yy: "tinan %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var b = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Tc = {
        0: "-\u0443\u043c",
        1: "-\u0443\u043c",
        2: "-\u044e\u043c",
        3: "-\u044e\u043c",
        4: "-\u0443\u043c",
        5: "-\u0443\u043c",
        6: "-\u0443\u043c",
        7: "-\u0443\u043c",
        8: "-\u0443\u043c",
        9: "-\u0443\u043c",
        10: "-\u0443\u043c",
        12: "-\u0443\u043c",
        13: "-\u0443\u043c",
        20: "-\u0443\u043c",
        30: "-\u044e\u043c",
        40: "-\u0443\u043c",
        50: "-\u0443\u043c",
        60: "-\u0443\u043c",
        70: "-\u0443\u043c",
        80: "-\u0443\u043c",
        90: "-\u0443\u043c",
        100: "-\u0443\u043c"
    };
    h.defineLocale("tg", {
        months: "\u044f\u043d\u0432\u0430\u0440 \u0444\u0435\u0432\u0440\u0430\u043b \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0435\u043b \u043c\u0430\u0439 \u0438\u044e\u043d \u0438\u044e\u043b \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043d\u0442\u044f\u0431\u0440 \u043e\u043a\u0442\u044f\u0431\u0440 \u043d\u043e\u044f\u0431\u0440 \u0434\u0435\u043a\u0430\u0431\u0440".split(" "),
        monthsShort: "\u044f\u043d\u0432 \u0444\u0435\u0432 \u043c\u0430\u0440 \u0430\u043f\u0440 \u043c\u0430\u0439 \u0438\u044e\u043d \u0438\u044e\u043b \u0430\u0432\u0433 \u0441\u0435\u043d \u043e\u043a\u0442 \u043d\u043e\u044f \u0434\u0435\u043a".split(" "),
        weekdays: "\u044f\u043a\u0448\u0430\u043d\u0431\u0435 \u0434\u0443\u0448\u0430\u043d\u0431\u0435 \u0441\u0435\u0448\u0430\u043d\u0431\u0435 \u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0435 \u043f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435 \u04b7\u0443\u043c\u044a\u0430 \u0448\u0430\u043d\u0431\u0435".split(" "),
        weekdaysShort: "\u044f\u0448\u0431 \u0434\u0448\u0431 \u0441\u0448\u0431 \u0447\u0448\u0431 \u043f\u0448\u0431 \u04b7\u0443\u043c \u0448\u043d\u0431".split(" "),
        weekdaysMin: "\u044f\u0448 \u0434\u0448 \u0441\u0448 \u0447\u0448 \u043f\u0448 \u04b7\u043c \u0448\u0431".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u0418\u043c\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",
            nextDay: "[\u041f\u0430\u0433\u043e\u04b3 \u0441\u043e\u0430\u0442\u0438] LT",
            lastDay: "[\u0414\u0438\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",
            nextWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u043e\u044f\u043d\u0434\u0430 \u0441\u043e\u0430\u0442\u0438] LT",
            lastWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043e\u0430\u0442\u0438] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0431\u0430\u044a\u0434\u0438 %s",
            past: "%s \u043f\u0435\u0448",
            s: "\u044f\u043a\u0447\u0430\u043d\u0434 \u0441\u043e\u043d\u0438\u044f",
            m: "\u044f\u043a \u0434\u0430\u049b\u0438\u049b\u0430",
            mm: "%d \u0434\u0430\u049b\u0438\u049b\u0430",
            h: "\u044f\u043a \u0441\u043e\u0430\u0442",
            hh: "%d \u0441\u043e\u0430\u0442",
            d: "\u044f\u043a \u0440\u04ef\u0437",
            dd: "%d \u0440\u04ef\u0437",
            M: "\u044f\u043a \u043c\u043e\u04b3",
            MM: "%d \u043c\u043e\u04b3",
            y: "\u044f\u043a \u0441\u043e\u043b",
            yy: "%d \u0441\u043e\u043b"
        },
        meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u0448\u0430\u0431" === b ? 4 > a ? a : a + 12 : "\u0441\u0443\u0431\u04b3" === b ? a : "\u0440\u04ef\u0437" === b ? 11 <= a ? a : a + 12 : "\u0431\u0435\u0433\u043e\u04b3" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "\u0448\u0430\u0431" : 11 > a ? "\u0441\u0443\u0431\u04b3" : 16 > a ? "\u0440\u04ef\u0437" : 19 > a ? "\u0431\u0435\u0433\u043e\u04b3" : "\u0448\u0430\u0431"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/,
        ordinal: function(a) {
            return a + (Tc[a] || Tc[a % 10] || Tc[100 <= a ? 100 : null])
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("th", {
        months: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21 \u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c \u0e21\u0e35\u0e19\u0e32\u0e04\u0e21 \u0e40\u0e21\u0e29\u0e32\u0e22\u0e19 \u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21 \u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19 \u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21 \u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21 \u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19 \u0e15\u0e38\u0e25\u0e32\u0e04\u0e21 \u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19 \u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split(" "),
        monthsShort: "\u0e21.\u0e04. \u0e01.\u0e1e. \u0e21\u0e35.\u0e04. \u0e40\u0e21.\u0e22. \u0e1e.\u0e04. \u0e21\u0e34.\u0e22. \u0e01.\u0e04. \u0e2a.\u0e04. \u0e01.\u0e22. \u0e15.\u0e04. \u0e1e.\u0e22. \u0e18.\u0e04.".split(" "),
        monthsParseExact: !0,
        weekdays: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c \u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c \u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23 \u0e1e\u0e38\u0e18 \u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35 \u0e28\u0e38\u0e01\u0e23\u0e4c \u0e40\u0e2a\u0e32\u0e23\u0e4c".split(" "),
        weekdaysShort: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c \u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c \u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23 \u0e1e\u0e38\u0e18 \u0e1e\u0e24\u0e2b\u0e31\u0e2a \u0e28\u0e38\u0e01\u0e23\u0e4c \u0e40\u0e2a\u0e32\u0e23\u0e4c".split(" "),
        weekdaysMin: "\u0e2d\u0e32. \u0e08. \u0e2d. \u0e1e. \u0e1e\u0e24. \u0e28. \u0e2a.".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",
            LLLL: "\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm"
        },
        meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,
        isPM: function(a) {
            return "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" === a
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" : "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"
        },
        calendar: {
            sameDay: "[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
            nextDay: "[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
            nextWeek: "dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT",
            lastDay: "[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
            lastWeek: "[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0e2d\u0e35\u0e01 %s",
            past: "%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",
            s: "\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
            ss: "%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
            m: "1 \u0e19\u0e32\u0e17\u0e35",
            mm: "%d \u0e19\u0e32\u0e17\u0e35",
            h: "1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
            hh: "%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
            d: "1 \u0e27\u0e31\u0e19",
            dd: "%d \u0e27\u0e31\u0e19",
            M: "1 \u0e40\u0e14\u0e37\u0e2d\u0e19",
            MM: "%d \u0e40\u0e14\u0e37\u0e2d\u0e19",
            y: "1 \u0e1b\u0e35",
            yy: "%d \u0e1b\u0e35"
        }
    });
    h.defineLocale("tl-ph", {
        months: "Enero Pebrero Marso Abril Mayo Hunyo Hulyo Agosto Setyembre Oktubre Nobyembre Disyembre".split(" "),
        monthsShort: "Ene Peb Mar Abr May Hun Hul Ago Set Okt Nob Dis".split(" "),
        weekdays: "Linggo Lunes Martes Miyerkules Huwebes Biyernes Sabado".split(" "),
        weekdaysShort: "Lin Lun Mar Miy Huw Biy Sab".split(" "),
        weekdaysMin: "Li Lu Ma Mi Hu Bi Sab".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm"
        },
        calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L"
        },
        relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            ss: "%d segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(a) {
            return a
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Ec = "pagh wa\u2019 cha\u2019 wej loS vagh jav Soch chorgh Hut".split(" ");
    h.defineLocale("tlh", {
        months: "tera\u2019 jar wa\u2019;tera\u2019 jar cha\u2019;tera\u2019 jar wej;tera\u2019 jar loS;tera\u2019 jar vagh;tera\u2019 jar jav;tera\u2019 jar Soch;tera\u2019 jar chorgh;tera\u2019 jar Hut;tera\u2019 jar wa\u2019maH;tera\u2019 jar wa\u2019maH wa\u2019;tera\u2019 jar wa\u2019maH cha\u2019".split(";"),
        monthsShort: "jar wa\u2019;jar cha\u2019;jar wej;jar loS;jar vagh;jar jav;jar Soch;jar chorgh;jar Hut;jar wa\u2019maH;jar wa\u2019maH wa\u2019;jar wa\u2019maH cha\u2019".split(";"),
        monthsParseExact: !0,
        weekdays: "lojmItjaj DaSjaj povjaj ghItlhjaj loghjaj buqjaj ghInjaj".split(" "),
        weekdaysShort: "lojmItjaj DaSjaj povjaj ghItlhjaj loghjaj buqjaj ghInjaj".split(" "),
        weekdaysMin: "lojmItjaj DaSjaj povjaj ghItlhjaj loghjaj buqjaj ghInjaj".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa\u2019leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa\u2019Hu\u2019] LT",
            lastWeek: "LLL",
            sameElse: "L"
        },
        relativeTime: {
            future: function(a) {
                return -1 !== a.indexOf("jaj") ? a.slice(0, -3) + "leS" : -1 !== a.indexOf("jar") ? a.slice(0, -3) + "waQ" : -1 !== a.indexOf("DIS") ? a.slice(0, -3) + "nem" : a + " pIq"
            },
            past: function(a) {
                return -1 !== a.indexOf("jaj") ? a.slice(0, -3) + "Hu\u2019" : -1 !== a.indexOf("jar") ? a.slice(0, -3) + "wen" : -1 !== a.indexOf("DIS") ?
                    a.slice(0, -3) + "ben" : a + " ret"
            },
            s: "puS lup",
            ss: Mb,
            m: "wa\u2019 tup",
            mm: Mb,
            h: "wa\u2019 rep",
            hh: Mb,
            d: "wa\u2019 jaj",
            dd: Mb,
            M: "wa\u2019 jar",
            MM: Mb,
            y: "wa\u2019 DIS",
            yy: Mb
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Uc = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'\u00fcnc\u00fc",
        4: "'\u00fcnc\u00fc",
        100: "'\u00fcnc\u00fc",
        6: "'nc\u0131",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'\u0131nc\u0131",
        90: "'\u0131nc\u0131"
    };
    h.defineLocale("tr", {
        months: "Ocak \u015eubat Mart Nisan May\u0131s Haziran Temmuz A\u011fustos Eyl\u00fcl Ekim Kas\u0131m Aral\u0131k".split(" "),
        monthsShort: "Oca \u015eub Mar Nis May Haz Tem A\u011fu Eyl Eki Kas Ara".split(" "),
        weekdays: "Pazar Pazartesi Sal\u0131 \u00c7ar\u015famba Per\u015fembe Cuma Cumartesi".split(" "),
        weekdaysShort: "Paz Pts Sal \u00c7ar Per Cum Cts".split(" "),
        weekdaysMin: "Pz Pt Sa \u00c7a Pe Cu Ct".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bug\u00fcn saat] LT",
            nextDay: "[yar\u0131n saat] LT",
            nextWeek: "[gelecek] dddd [saat] LT",
            lastDay: "[d\u00fcn] LT",
            lastWeek: "[ge\u00e7en] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s \u00f6nce",
            s: "birka\u00e7 saniye",
            ss: "%d saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir g\u00fcn",
            dd: "%d g\u00fcn",
            M: "bir ay",
            MM: "%d ay",
            y: "bir y\u0131l",
            yy: "%d y\u0131l"
        },
        ordinal: function(a, b) {
            switch (b) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                    return a;
                default:
                    if (0 === a) return a + "'\u0131nc\u0131";
                    var c = a % 10;
                    return a + (Uc[c] || Uc[a % 100 - c] || Uc[100 <= a ? 100 : null])
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("tzl", {
        months: "Januar Fevraglh Mar\u00e7 Avr\u00efu Mai G\u00fcn Julia Guscht Setemvar Listop\u00e4ts Noemvar Zecemvar".split(" "),
        monthsShort: "Jan Fev Mar Avr Mai G\u00fcn Jul Gus Set Lis Noe Zec".split(" "),
        weekdays: "S\u00faladi L\u00fane\u00e7i Maitzi M\u00e1rcuri Xh\u00faadi Vi\u00e9ner\u00e7i S\u00e1turi".split(" "),
        weekdaysShort: "S\u00fal L\u00fan Mai M\u00e1r Xh\u00fa Vi\u00e9 S\u00e1t".split(" "),
        weekdaysMin: "S\u00fa L\u00fa Ma M\u00e1 Xh Vi S\u00e1".split(" "),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM [dallas] YYYY",
            LLL: "D. MMMM [dallas] YYYY HH.mm",
            LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
        },
        meridiemParse: /d'o|d'a/i,
        isPM: function(a) {
            return "d'o" === a.toLowerCase()
        },
        meridiem: function(a, b, c) {
            return 11 < a ? c ? "d'o" : "D'O" : c ? "d'a" : "D'A"
        },
        calendar: {
            sameDay: "[oxhi \u00e0] LT",
            nextDay: "[dem\u00e0 \u00e0] LT",
            nextWeek: "dddd [\u00e0] LT",
            lastDay: "[ieiri \u00e0] LT",
            lastWeek: "[s\u00fcr el] dddd [lasteu \u00e0] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "osprei %s",
            past: "ja%s",
            s: xa,
            ss: xa,
            m: xa,
            mm: xa,
            h: xa,
            hh: xa,
            d: xa,
            dd: xa,
            M: xa,
            MM: xa,
            y: xa,
            yy: xa
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    h.defineLocale("tzm-latn", {
        months: "innayr br\u02e4ayr\u02e4 mar\u02e4s\u02e4 ibrir mayyw ywnyw ywlywz \u0263w\u0161t \u0161wtanbir kt\u02e4wbr\u02e4 nwwanbir dwjnbir".split(" "),
        monthsShort: "innayr br\u02e4ayr\u02e4 mar\u02e4s\u02e4 ibrir mayyw ywnyw ywlywz \u0263w\u0161t \u0161wtanbir kt\u02e4wbr\u02e4 nwwanbir dwjnbir".split(" "),
        weekdays: "asamas aynas asinas akras akwas asimwas asi\u1e0dyas".split(" "),
        weekdaysShort: "asamas aynas asinas akras akwas asimwas asi\u1e0dyas".split(" "),
        weekdaysMin: "asamas aynas asinas akras akwas asimwas asi\u1e0dyas".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            ss: "%d imik",
            m: "minu\u1e0d",
            mm: "%d minu\u1e0d",
            h: "sa\u025ba",
            hh: "%d tassa\u025bin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn"
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    h.defineLocale("tzm", {
        months: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54 \u2d31\u2d55\u2d30\u2d62\u2d55 \u2d4e\u2d30\u2d55\u2d5a \u2d49\u2d31\u2d54\u2d49\u2d54 \u2d4e\u2d30\u2d62\u2d62\u2d53 \u2d62\u2d53\u2d4f\u2d62\u2d53 \u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63 \u2d56\u2d53\u2d5b\u2d5c \u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54 \u2d3d\u2d5f\u2d53\u2d31\u2d55 \u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54 \u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split(" "),
        monthsShort: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54 \u2d31\u2d55\u2d30\u2d62\u2d55 \u2d4e\u2d30\u2d55\u2d5a \u2d49\u2d31\u2d54\u2d49\u2d54 \u2d4e\u2d30\u2d62\u2d62\u2d53 \u2d62\u2d53\u2d4f\u2d62\u2d53 \u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63 \u2d56\u2d53\u2d5b\u2d5c \u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54 \u2d3d\u2d5f\u2d53\u2d31\u2d55 \u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54 \u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split(" "),
        weekdays: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59 \u2d30\u2d62\u2d4f\u2d30\u2d59 \u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59 \u2d30\u2d3d\u2d54\u2d30\u2d59 \u2d30\u2d3d\u2d61\u2d30\u2d59 \u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59 \u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split(" "),
        weekdaysShort: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59 \u2d30\u2d62\u2d4f\u2d30\u2d59 \u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59 \u2d30\u2d3d\u2d54\u2d30\u2d59 \u2d30\u2d3d\u2d61\u2d30\u2d59 \u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59 \u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split(" "),
        weekdaysMin: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59 \u2d30\u2d62\u2d4f\u2d30\u2d59 \u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59 \u2d30\u2d3d\u2d54\u2d30\u2d59 \u2d30\u2d3d\u2d61\u2d30\u2d59 \u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59 \u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT",
            nextDay: "[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT",
            nextWeek: "dddd [\u2d34] LT",
            lastDay: "[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT",
            lastWeek: "dddd [\u2d34] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s",
            past: "\u2d62\u2d30\u2d4f %s",
            s: "\u2d49\u2d4e\u2d49\u2d3d",
            ss: "%d \u2d49\u2d4e\u2d49\u2d3d",
            m: "\u2d4e\u2d49\u2d4f\u2d53\u2d3a",
            mm: "%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a",
            h: "\u2d59\u2d30\u2d44\u2d30",
            hh: "%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f",
            d: "\u2d30\u2d59\u2d59",
            dd: "%d o\u2d59\u2d59\u2d30\u2d4f",
            M: "\u2d30\u2d62o\u2d53\u2d54",
            MM: "%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f",
            y: "\u2d30\u2d59\u2d33\u2d30\u2d59",
            yy: "%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f"
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    h.defineLocale("ug-cn", {
        months: "\u064a\u0627\u0646\u06cb\u0627\u0631 \u0641\u06d0\u06cb\u0631\u0627\u0644 \u0645\u0627\u0631\u062a \u0626\u0627\u067e\u0631\u06d0\u0644 \u0645\u0627\u064a \u0626\u0649\u064a\u06c7\u0646 \u0626\u0649\u064a\u06c7\u0644 \u0626\u0627\u06cb\u063a\u06c7\u0633\u062a \u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631 \u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631 \u0646\u0648\u064a\u0627\u0628\u0649\u0631 \u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split(" "),
        monthsShort: "\u064a\u0627\u0646\u06cb\u0627\u0631 \u0641\u06d0\u06cb\u0631\u0627\u0644 \u0645\u0627\u0631\u062a \u0626\u0627\u067e\u0631\u06d0\u0644 \u0645\u0627\u064a \u0626\u0649\u064a\u06c7\u0646 \u0626\u0649\u064a\u06c7\u0644 \u0626\u0627\u06cb\u063a\u06c7\u0633\u062a \u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631 \u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631 \u0646\u0648\u064a\u0627\u0628\u0649\u0631 \u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split(" "),
        weekdays: "\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5 \u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5 \u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5 \u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5 \u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5 \u062c\u06c8\u0645\u06d5 \u0634\u06d5\u0646\u0628\u06d5".split(" "),
        weekdaysShort: "\u064a\u06d5 \u062f\u06c8 \u0633\u06d5 \u0686\u0627 \u067e\u06d5 \u062c\u06c8 \u0634\u06d5".split(" "),
        weekdaysMin: "\u064a\u06d5 \u062f\u06c8 \u0633\u06d5 \u0686\u0627 \u067e\u06d5 \u062c\u06c8 \u0634\u06d5".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649",
            LLL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm",
            LLLL: "dddd\u060c YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm"
        },
        meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" ===
                b || "\u0633\u06d5\u06be\u06d5\u0631" === b || "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" === b ? a : "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" === b || "\u0643\u06d5\u0686" === b ? a + 12 : 11 <= a ? a : a + 12
        },
        meridiem: function(a, b, c) {
            a = 100 * a + b;
            return 600 > a ? "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" : 900 > a ? "\u0633\u06d5\u06be\u06d5\u0631" : 1130 > a ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" : 1230 > a ? "\u0686\u06c8\u0634" : 1800 > a ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" :
                "\u0643\u06d5\u0686"
        },
        calendar: {
            sameDay: "[\u0628\u06c8\u06af\u06c8\u0646 \u0633\u0627\u0626\u06d5\u062a] LT",
            nextDay: "[\u0626\u06d5\u062a\u06d5 \u0633\u0627\u0626\u06d5\u062a] LT",
            nextWeek: "[\u0643\u06d0\u0644\u06d5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",
            lastDay: "[\u062a\u06c6\u0646\u06c8\u06af\u06c8\u0646] LT",
            lastWeek: "[\u0626\u0627\u0644\u062f\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0643\u06d0\u064a\u0649\u0646",
            past: "%s \u0628\u06c7\u0631\u06c7\u0646",
            s: "\u0646\u06d5\u0686\u0686\u06d5 \u0633\u06d0\u0643\u0648\u0646\u062a",
            ss: "%d \u0633\u06d0\u0643\u0648\u0646\u062a",
            m: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a",
            mm: "%d \u0645\u0649\u0646\u06c7\u062a",
            h: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a",
            hh: "%d \u0633\u0627\u0626\u06d5\u062a",
            d: "\u0628\u0649\u0631 \u0643\u06c8\u0646",
            dd: "%d \u0643\u06c8\u0646",
            M: "\u0628\u0649\u0631 \u0626\u0627\u064a",
            MM: "%d \u0626\u0627\u064a",
            y: "\u0628\u0649\u0631 \u064a\u0649\u0644",
            yy: "%d \u064a\u0649\u0644"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,
        ordinal: function(a, b) {
            switch (b) {
                case "d":
                case "D":
                case "DDD":
                    return a + "-\u0643\u06c8\u0646\u0649";
                case "w":
                case "W":
                    return a + "-\u06be\u06d5\u067e\u062a\u06d5";
                default:
                    return a
            }
        },
        preparse: function(a) {
            return a.replace(/\u060c/g, ",")
        },
        postformat: function(a) {
            return a.replace(/,/g, "\u060c")
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    h.defineLocale("uk", {
        months: {
            format: "\u0441\u0456\u0447\u043d\u044f \u043b\u044e\u0442\u043e\u0433\u043e \u0431\u0435\u0440\u0435\u0437\u043d\u044f \u043a\u0432\u0456\u0442\u043d\u044f \u0442\u0440\u0430\u0432\u043d\u044f \u0447\u0435\u0440\u0432\u043d\u044f \u043b\u0438\u043f\u043d\u044f \u0441\u0435\u0440\u043f\u043d\u044f \u0432\u0435\u0440\u0435\u0441\u043d\u044f \u0436\u043e\u0432\u0442\u043d\u044f \u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430 \u0433\u0440\u0443\u0434\u043d\u044f".split(" "),
            standalone: "\u0441\u0456\u0447\u0435\u043d\u044c \u043b\u044e\u0442\u0438\u0439 \u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c \u043a\u0432\u0456\u0442\u0435\u043d\u044c \u0442\u0440\u0430\u0432\u0435\u043d\u044c \u0447\u0435\u0440\u0432\u0435\u043d\u044c \u043b\u0438\u043f\u0435\u043d\u044c \u0441\u0435\u0440\u043f\u0435\u043d\u044c \u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c \u0436\u043e\u0432\u0442\u0435\u043d\u044c \u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434 \u0433\u0440\u0443\u0434\u0435\u043d\u044c".split(" ")
        },
        monthsShort: "\u0441\u0456\u0447 \u043b\u044e\u0442 \u0431\u0435\u0440 \u043a\u0432\u0456\u0442 \u0442\u0440\u0430\u0432 \u0447\u0435\u0440\u0432 \u043b\u0438\u043f \u0441\u0435\u0440\u043f \u0432\u0435\u0440 \u0436\u043e\u0432\u0442 \u043b\u0438\u0441\u0442 \u0433\u0440\u0443\u0434".split(" "),
        weekdays: function(a, b) {
            var c = {
                nominative: "\u043d\u0435\u0434\u0456\u043b\u044f \u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a \u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a \u0441\u0435\u0440\u0435\u0434\u0430 \u0447\u0435\u0442\u0432\u0435\u0440 \u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f \u0441\u0443\u0431\u043e\u0442\u0430".split(" "),
                accusative: "\u043d\u0435\u0434\u0456\u043b\u044e \u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a \u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a \u0441\u0435\u0440\u0435\u0434\u0443 \u0447\u0435\u0442\u0432\u0435\u0440 \u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e \u0441\u0443\u0431\u043e\u0442\u0443".split(" "),
                genitive: "\u043d\u0435\u0434\u0456\u043b\u0456 \u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430 \u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430 \u0441\u0435\u0440\u0435\u0434\u0438 \u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430 \u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456 \u0441\u0443\u0431\u043e\u0442\u0438".split(" ")
            };
            return !0 === a ? c.nominative.slice(1, 7).concat(c.nominative.slice(0, 1)) : a ? c[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(b) ? "genitive" : "nominative"][a.day()] : c.nominative
        },
        weekdaysShort: "\u043d\u0434 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),
        weekdaysMin: "\u043d\u0434 \u043f\u043d \u0432\u0442 \u0441\u0440 \u0447\u0442 \u043f\u0442 \u0441\u0431".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0440.",
            LLL: "D MMMM YYYY \u0440., HH:mm",
            LLLL: "dddd, D MMMM YYYY \u0440., HH:mm"
        },
        calendar: {
            sameDay: Nb("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "),
            nextDay: Nb("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
            lastDay: Nb("[\u0412\u0447\u043e\u0440\u0430 "),
            nextWeek: Nb("[\u0423] dddd ["),
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return Nb("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return Nb("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this)
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "\u0437\u0430 %s",
            past: "%s \u0442\u043e\u043c\u0443",
            s: "\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",
            ss: tb,
            m: tb,
            mm: tb,
            h: "\u0433\u043e\u0434\u0438\u043d\u0443",
            hh: tb,
            d: "\u0434\u0435\u043d\u044c",
            dd: tb,
            M: "\u043c\u0456\u0441\u044f\u0446\u044c",
            MM: tb,
            y: "\u0440\u0456\u043a",
            yy: tb
        },
        meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
        isPM: function(a) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(a)
        },
        meridiem: function(a, b, c) {
            return 4 > a ? "\u043d\u043e\u0447\u0456" : 12 > a ? "\u0440\u0430\u043d\u043a\u0443" : 17 > a ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u043e\u0440\u0430"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
        ordinal: function(a, b) {
            switch (b) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return a + "-\u0439";
                case "D":
                    return a + "-\u0433\u043e";
                default:
                    return a
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Gd = "\u062c\u0646\u0648\u0631\u06cc \u0641\u0631\u0648\u0631\u06cc \u0645\u0627\u0631\u0686 \u0627\u067e\u0631\u06cc\u0644 \u0645\u0626\u06cc \u062c\u0648\u0646 \u062c\u0648\u0644\u0627\u0626\u06cc \u0627\u06af\u0633\u062a \u0633\u062a\u0645\u0628\u0631 \u0627\u06a9\u062a\u0648\u0628\u0631 \u0646\u0648\u0645\u0628\u0631 \u062f\u0633\u0645\u0628\u0631".split(" "),
        Vc = "\u0627\u062a\u0648\u0627\u0631 \u067e\u06cc\u0631 \u0645\u0646\u06af\u0644 \u0628\u062f\u06be \u062c\u0645\u0639\u0631\u0627\u062a \u062c\u0645\u0639\u06c1 \u06c1\u0641\u062a\u06c1".split(" ");
    return h.defineLocale("ur", {
        months: Gd,
        monthsShort: Gd,
        weekdays: Vc,
        weekdaysShort: Vc,
        weekdaysMin: Vc,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd\u060c D MMMM YYYY HH:mm"
        },
        meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
        isPM: function(a) {
            return "\u0634\u0627\u0645" ===
                a
        },
        meridiem: function(a, b, c) {
            return 12 > a ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645"
        },
        calendar: {
            sameDay: "[\u0622\u062c \u0628\u0648\u0642\u062a] LT",
            nextDay: "[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT",
            nextWeek: "dddd [\u0628\u0648\u0642\u062a] LT",
            lastDay: "[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT",
            lastWeek: "[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s \u0628\u0639\u062f",
            past: "%s \u0642\u0628\u0644",
            s: "\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688",
            ss: "%d \u0633\u06cc\u06a9\u0646\u0688",
            m: "\u0627\u06cc\u06a9 \u0645\u0646\u0679",
            mm: "%d \u0645\u0646\u0679",
            h: "\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1",
            hh: "%d \u06af\u06be\u0646\u0679\u06d2",
            d: "\u0627\u06cc\u06a9 \u062f\u0646",
            dd: "%d \u062f\u0646",
            M: "\u0627\u06cc\u06a9 \u0645\u0627\u06c1",
            MM: "%d \u0645\u0627\u06c1",
            y: "\u0627\u06cc\u06a9 \u0633\u0627\u0644",
            yy: "%d \u0633\u0627\u0644"
        },
        preparse: function(a) {
            return a.replace(/\u060c/g, ",")
        },
        postformat: function(a) {
            return a.replace(/,/g, "\u060c")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), h.defineLocale("uz-latn", {
        months: "Yanvar Fevral Mart Aprel May Iyun Iyul Avgust Sentabr Oktabr Noyabr Dekabr".split(" "),
        monthsShort: "Yan Fev Mar Apr May Iyun Iyul Avg Sen Okt Noy Dek".split(" "),
        weekdays: "Yakshanba Dushanba Seshanba Chorshanba Payshanba Juma Shanba".split(" "),
        weekdaysShort: "Yak Dush Sesh Chor Pay Jum Shan".split(" "),
        weekdaysMin: "Ya Du Se Cho Pa Ju Sha".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[Bugun soat] LT [da]",
            nextDay: "[Ertaga] LT [da]",
            nextWeek: "dddd [kuni soat] LT [da]",
            lastDay: "[Kecha soat] LT [da]",
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: "L"
        },
        relativeTime: {
            future: "Yaqin %s ichida",
            past: "Bir necha %s oldin",
            s: "soniya",
            ss: "%d soniya",
            m: "bir daqiqa",
            mm: "%d daqiqa",
            h: "bir soat",
            hh: "%d soat",
            d: "bir kun",
            dd: "%d kun",
            M: "bir oy",
            MM: "%d oy",
            y: "bir yil",
            yy: "%d yil"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), h.defineLocale("uz", {
        months: "\u044f\u043d\u0432\u0430\u0440 \u0444\u0435\u0432\u0440\u0430\u043b \u043c\u0430\u0440\u0442 \u0430\u043f\u0440\u0435\u043b \u043c\u0430\u0439 \u0438\u044e\u043d \u0438\u044e\u043b \u0430\u0432\u0433\u0443\u0441\u0442 \u0441\u0435\u043d\u0442\u044f\u0431\u0440 \u043e\u043a\u0442\u044f\u0431\u0440 \u043d\u043e\u044f\u0431\u0440 \u0434\u0435\u043a\u0430\u0431\u0440".split(" "),
        monthsShort: "\u044f\u043d\u0432 \u0444\u0435\u0432 \u043c\u0430\u0440 \u0430\u043f\u0440 \u043c\u0430\u0439 \u0438\u044e\u043d \u0438\u044e\u043b \u0430\u0432\u0433 \u0441\u0435\u043d \u043e\u043a\u0442 \u043d\u043e\u044f \u0434\u0435\u043a".split(" "),
        weekdays: "\u042f\u043a\u0448\u0430\u043d\u0431\u0430 \u0414\u0443\u0448\u0430\u043d\u0431\u0430 \u0421\u0435\u0448\u0430\u043d\u0431\u0430 \u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430 \u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430 \u0416\u0443\u043c\u0430 \u0428\u0430\u043d\u0431\u0430".split(" "),
        weekdaysShort: "\u042f\u043a\u0448 \u0414\u0443\u0448 \u0421\u0435\u0448 \u0427\u043e\u0440 \u041f\u0430\u0439 \u0416\u0443\u043c \u0428\u0430\u043d".split(" "),
        weekdaysMin: "\u042f\u043a \u0414\u0443 \u0421\u0435 \u0427\u043e \u041f\u0430 \u0416\u0443 \u0428\u0430".split(" "),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
            nextDay: "[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]",
            nextWeek: "dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
            lastDay: "[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
            lastWeek: "[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430",
            past: "\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d",
            s: "\u0444\u0443\u0440\u0441\u0430\u0442",
            ss: "%d \u0444\u0443\u0440\u0441\u0430\u0442",
            m: "\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430",
            mm: "%d \u0434\u0430\u043a\u0438\u043a\u0430",
            h: "\u0431\u0438\u0440 \u0441\u043e\u0430\u0442",
            hh: "%d \u0441\u043e\u0430\u0442",
            d: "\u0431\u0438\u0440 \u043a\u0443\u043d",
            dd: "%d \u043a\u0443\u043d",
            M: "\u0431\u0438\u0440 \u043e\u0439",
            MM: "%d \u043e\u0439",
            y: "\u0431\u0438\u0440 \u0439\u0438\u043b",
            yy: "%d \u0439\u0438\u043b"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), h.defineLocale("vi", {
        months: "th\u00e1ng 1;th\u00e1ng 2;th\u00e1ng 3;th\u00e1ng 4;th\u00e1ng 5;th\u00e1ng 6;th\u00e1ng 7;th\u00e1ng 8;th\u00e1ng 9;th\u00e1ng 10;th\u00e1ng 11;th\u00e1ng 12".split(";"),
        monthsShort: "Th01 Th02 Th03 Th04 Th05 Th06 Th07 Th08 Th09 Th10 Th11 Th12".split(" "),
        monthsParseExact: !0,
        weekdays: "ch\u1ee7 nh\u1eadt;th\u1ee9 hai;th\u1ee9 ba;th\u1ee9 t\u01b0;th\u1ee9 n\u0103m;th\u1ee9 s\u00e1u;th\u1ee9 b\u1ea3y".split(";"),
        weekdaysShort: "CN T2 T3 T4 T5 T6 T7".split(" "),
        weekdaysMin: "CN T2 T3 T4 T5 T6 T7".split(" "),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function(a) {
            return /^ch$/i.test(a)
        },
        meridiem: function(a, b, c) {
            return 12 > a ? c ? "sa" : "SA" : c ? "ch" : "CH"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [n\u0103m] YYYY",
            LLL: "D MMMM [n\u0103m] YYYY HH:mm",
            LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[H\u00f4m nay l\u00fac] LT",
            nextDay: "[Ng\u00e0y mai l\u00fac] LT",
            nextWeek: "dddd [tu\u1ea7n t\u1edbi l\u00fac] LT",
            lastDay: "[H\u00f4m qua l\u00fac] LT",
            lastWeek: "dddd [tu\u1ea7n r\u1ed3i l\u00fac] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s t\u1edbi",
            past: "%s tr\u01b0\u1edbc",
            s: "v\u00e0i gi\u00e2y",
            ss: "%d gi\u00e2y",
            m: "m\u1ed9t ph\u00fat",
            mm: "%d ph\u00fat",
            h: "m\u1ed9t gi\u1edd",
            hh: "%d gi\u1edd",
            d: "m\u1ed9t ng\u00e0y",
            dd: "%d ng\u00e0y",
            M: "m\u1ed9t th\u00e1ng",
            MM: "%d th\u00e1ng",
            y: "m\u1ed9t n\u0103m",
            yy: "%d n\u0103m"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(a) {
            return a
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), h.defineLocale("x-pseudo", {
        months: "J~\u00e1\u00f1\u00fa\u00e1~r\u00fd F~\u00e9br\u00fa~\u00e1r\u00fd ~M\u00e1rc~h \u00c1p~r\u00edl ~M\u00e1\u00fd ~J\u00fa\u00f1\u00e9~ J\u00fal~\u00fd \u00c1\u00fa~g\u00fast~ S\u00e9p~t\u00e9mb~\u00e9r \u00d3~ct\u00f3b~\u00e9r \u00d1~\u00f3v\u00e9m~b\u00e9r ~D\u00e9c\u00e9~mb\u00e9r".split(" "),
        monthsShort: "J~\u00e1\u00f1 ~F\u00e9b ~M\u00e1r ~\u00c1pr ~M\u00e1\u00fd ~J\u00fa\u00f1 ~J\u00fal ~\u00c1\u00fag ~S\u00e9p ~\u00d3ct ~\u00d1\u00f3v ~D\u00e9c".split(" "),
        monthsParseExact: !0,
        weekdays: "S~\u00fa\u00f1d\u00e1~\u00fd M\u00f3~\u00f1d\u00e1\u00fd~ T\u00fa\u00e9~sd\u00e1\u00fd~ W\u00e9d~\u00f1\u00e9sd~\u00e1\u00fd T~h\u00fars~d\u00e1\u00fd ~Fr\u00edd~\u00e1\u00fd S~\u00e1t\u00far~d\u00e1\u00fd".split(" "),
        weekdaysShort: "S~\u00fa\u00f1 ~M\u00f3\u00f1 ~T\u00fa\u00e9 ~W\u00e9d ~Th\u00fa ~Fr\u00ed ~S\u00e1t".split(" "),
        weekdaysMin: "S~\u00fa M\u00f3~ T\u00fa ~W\u00e9 T~h Fr~ S\u00e1".split(" "),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[T~\u00f3d\u00e1~\u00fd \u00e1t] LT",
            nextDay: "[T~\u00f3m\u00f3~rr\u00f3~w \u00e1t] LT",
            nextWeek: "dddd [\u00e1t] LT",
            lastDay: "[\u00dd~\u00e9st~\u00e9rd\u00e1~\u00fd \u00e1t] LT",
            lastWeek: "[L~\u00e1st] dddd [\u00e1t] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u00ed~\u00f1 %s",
            past: "%s \u00e1~g\u00f3",
            s: "\u00e1 ~f\u00e9w ~s\u00e9c\u00f3~\u00f1ds",
            ss: "%d s~\u00e9c\u00f3\u00f1~ds",
            m: "\u00e1 ~m\u00ed\u00f1~\u00fat\u00e9",
            mm: "%d m~\u00ed\u00f1\u00fa~t\u00e9s",
            h: "\u00e1~\u00f1 h\u00f3~\u00far",
            hh: "%d h~\u00f3\u00fars",
            d: "\u00e1 ~d\u00e1\u00fd",
            dd: "%d d~\u00e1\u00fds",
            M: "\u00e1 ~m\u00f3\u00f1~th",
            MM: "%d m~\u00f3\u00f1t~hs",
            y: "\u00e1 ~\u00fd\u00e9\u00e1r",
            yy: "%d \u00fd~\u00e9\u00e1rs"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), h.defineLocale("yo", {
        months: "S\u1eb9\u0301r\u1eb9\u0301 E\u0300re\u0300le\u0300 \u1eb8r\u1eb9\u0300na\u0300 I\u0300gbe\u0301 E\u0300bibi O\u0300ku\u0300du Ag\u1eb9mo O\u0300gu\u0301n Owewe \u1ecc\u0300wa\u0300ra\u0300 Be\u0301lu\u0301 \u1ecc\u0300p\u1eb9\u0300\u0300".split(" "),
        monthsShort: "S\u1eb9\u0301r E\u0300rl \u1eb8rn I\u0300gb E\u0300bi O\u0300ku\u0300 Ag\u1eb9 O\u0300gu\u0301 Owe \u1ecc\u0300wa\u0300 Be\u0301l \u1ecc\u0300p\u1eb9\u0300\u0300".split(" "),
        weekdays: "A\u0300i\u0300ku\u0301 Aje\u0301 I\u0300s\u1eb9\u0301gun \u1eccj\u1ecd\u0301ru\u0301 \u1eccj\u1ecd\u0301b\u1ecd \u1eb8ti\u0300 A\u0300ba\u0301m\u1eb9\u0301ta".split(" "),
        weekdaysShort: "A\u0300i\u0300k Aje\u0301 I\u0300s\u1eb9\u0301 \u1eccjr \u1eccjb \u1eb8ti\u0300 A\u0300ba\u0301".split(" "),
        weekdaysMin: "A\u0300i\u0300 Aj I\u0300s \u1eccr \u1eccb \u1eb8t A\u0300b".split(" "),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[O\u0300ni\u0300 ni] LT",
            nextDay: "[\u1ecc\u0300la ni] LT",
            nextWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT",
            lastDay: "[A\u0300na ni] LT",
            lastWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ni\u0301 %s",
            past: "%s k\u1ecdja\u0301",
            s: "i\u0300s\u1eb9ju\u0301 aaya\u0301 die",
            ss: "aaya\u0301 %d",
            m: "i\u0300s\u1eb9ju\u0301 kan",
            mm: "i\u0300s\u1eb9ju\u0301 %d",
            h: "wa\u0301kati kan",
            hh: "wa\u0301kati %d",
            d: "\u1ecdj\u1ecd\u0301 kan",
            dd: "\u1ecdj\u1ecd\u0301 %d",
            M: "osu\u0300 kan",
            MM: "osu\u0300 %d",
            y: "\u1ecddu\u0301n kan",
            yy: "\u1ecddu\u0301n %d"
        },
        dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/,
        ordinal: "\u1ecdj\u1ecd\u0301 %d",
        week: {
            dow: 1,
            doy: 4
        }
    }), h.defineLocale("zh-cn", {
        months: "\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),
        monthsShort: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
        weekdays: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),
        weekdaysShort: "\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),
        weekdaysMin: "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",
            LLLL: "YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",
            l: "YYYY/M/D",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
        },
        meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u51cc\u6668" === b || "\u65e9\u4e0a" === b || "\u4e0a\u5348" === b ? a : "\u4e0b\u5348" === b || "\u665a\u4e0a" ===
                b ? a + 12 : 11 <= a ? a : a + 12
        },
        meridiem: function(a, b, c) {
            a = 100 * a + b;
            return 600 > a ? "\u51cc\u6668" : 900 > a ? "\u65e9\u4e0a" : 1130 > a ? "\u4e0a\u5348" : 1230 > a ? "\u4e2d\u5348" : 1800 > a ? "\u4e0b\u5348" : "\u665a\u4e0a"
        },
        calendar: {
            sameDay: "[\u4eca\u5929]LT",
            nextDay: "[\u660e\u5929]LT",
            nextWeek: "[\u4e0b]ddddLT",
            lastDay: "[\u6628\u5929]LT",
            lastWeek: "[\u4e0a]ddddLT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
        ordinal: function(a, b) {
            switch (b) {
                case "d":
                case "D":
                case "DDD":
                    return a + "\u65e5";
                case "M":
                    return a + "\u6708";
                case "w":
                case "W":
                    return a + "\u5468";
                default:
                    return a
            }
        },
        relativeTime: {
            future: "%s\u5185",
            past: "%s\u524d",
            s: "\u51e0\u79d2",
            ss: "%d \u79d2",
            m: "1 \u5206\u949f",
            mm: "%d \u5206\u949f",
            h: "1 \u5c0f\u65f6",
            hh: "%d \u5c0f\u65f6",
            d: "1 \u5929",
            dd: "%d \u5929",
            M: "1 \u4e2a\u6708",
            MM: "%d \u4e2a\u6708",
            y: "1 \u5e74",
            yy: "%d \u5e74"
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), h.defineLocale("zh-hk", {
        months: "\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),
        monthsShort: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
        weekdays: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),
        weekdaysShort: "\u9031\u65e5 \u9031\u4e00 \u9031\u4e8c \u9031\u4e09 \u9031\u56db \u9031\u4e94 \u9031\u516d".split(" "),
        weekdaysMin: "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
        },
        meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u51cc\u6668" === b || "\u65e9\u4e0a" === b || "\u4e0a\u5348" === b ? a : "\u4e2d\u5348" === b ? 11 <= a ? a : a + 12 : "\u4e0b\u5348" === b ||
                "\u665a\u4e0a" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            a = 100 * a + b;
            return 600 > a ? "\u51cc\u6668" : 900 > a ? "\u65e9\u4e0a" : 1130 > a ? "\u4e0a\u5348" : 1230 > a ? "\u4e2d\u5348" : 1800 > a ? "\u4e0b\u5348" : "\u665a\u4e0a"
        },
        calendar: {
            sameDay: "[\u4eca\u5929]LT",
            nextDay: "[\u660e\u5929]LT",
            nextWeek: "[\u4e0b]ddddLT",
            lastDay: "[\u6628\u5929]LT",
            lastWeek: "[\u4e0a]ddddLT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
        ordinal: function(a, b) {
            switch (b) {
                case "d":
                case "D":
                case "DDD":
                    return a + "\u65e5";
                case "M":
                    return a +
                        "\u6708";
                case "w":
                case "W":
                    return a + "\u9031";
                default:
                    return a
            }
        },
        relativeTime: {
            future: "%s\u5167",
            past: "%s\u524d",
            s: "\u5e7e\u79d2",
            ss: "%d \u79d2",
            m: "1 \u5206\u9418",
            mm: "%d \u5206\u9418",
            h: "1 \u5c0f\u6642",
            hh: "%d \u5c0f\u6642",
            d: "1 \u5929",
            dd: "%d \u5929",
            M: "1 \u500b\u6708",
            MM: "%d \u500b\u6708",
            y: "1 \u5e74",
            yy: "%d \u5e74"
        }
    }), h.defineLocale("zh-tw", {
        months: "\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),
        monthsShort: "1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
        weekdays: "\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),
        weekdaysShort: "\u9031\u65e5 \u9031\u4e00 \u9031\u4e8c \u9031\u4e09 \u9031\u56db \u9031\u4e94 \u9031\u516d".split(" "),
        weekdaysMin: "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY\u5e74M\u6708D\u65e5",
            LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
            l: "YYYY/M/D",
            ll: "YYYY\u5e74M\u6708D\u65e5",
            lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
            llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
        },
        meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "\u51cc\u6668" === b || "\u65e9\u4e0a" === b || "\u4e0a\u5348" === b ? a : "\u4e2d\u5348" === b ? 11 <= a ? a : a + 12 : "\u4e0b\u5348" === b ||
                "\u665a\u4e0a" === b ? a + 12 : void 0
        },
        meridiem: function(a, b, c) {
            a = 100 * a + b;
            return 600 > a ? "\u51cc\u6668" : 900 > a ? "\u65e9\u4e0a" : 1130 > a ? "\u4e0a\u5348" : 1230 > a ? "\u4e2d\u5348" : 1800 > a ? "\u4e0b\u5348" : "\u665a\u4e0a"
        },
        calendar: {
            sameDay: "[\u4eca\u5929] LT",
            nextDay: "[\u660e\u5929] LT",
            nextWeek: "[\u4e0b]dddd LT",
            lastDay: "[\u6628\u5929] LT",
            lastWeek: "[\u4e0a]dddd LT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
        ordinal: function(a, b) {
            switch (b) {
                case "d":
                case "D":
                case "DDD":
                    return a + "\u65e5";
                case "M":
                    return a +
                        "\u6708";
                case "w":
                case "W":
                    return a + "\u9031";
                default:
                    return a
            }
        },
        relativeTime: {
            future: "%s\u5167",
            past: "%s\u524d",
            s: "\u5e7e\u79d2",
            ss: "%d \u79d2",
            m: "1 \u5206\u9418",
            mm: "%d \u5206\u9418",
            h: "1 \u5c0f\u6642",
            hh: "%d \u5c0f\u6642",
            d: "1 \u5929",
            dd: "%d \u5929",
            M: "1 \u500b\u6708",
            MM: "%d \u500b\u6708",
            y: "1 \u5e74",
            yy: "%d \u5e74"
        }
    }), h.locale("en"), h
});
(function(h, m) {
    "object" === typeof exports && "object" === typeof module ? module.exports = m() : "function" === typeof define && define.amd ? define([], m) : "object" === typeof exports ? exports.Handlebars = m() : h.Handlebars = m()
})(this, function() {
    return function(h) {
        function m(a) {
            if (c[a]) return c[a].exports;
            var b = c[a] = {
                exports: {},
                id: a,
                loaded: !1
            };
            h[a].call(b.exports, b, b.exports, m);
            b.loaded = !0;
            return b.exports
        }
        var c = {};
        m.m = h;
        m.c = c;
        m.p = "";
        return m(0)
    }([function(h, m, c) {
            function a(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }

            function b(a) {
                if (a &&
                    a.__esModule) return a;
                var b = {};
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                b["default"] = a;
                return b
            }

            function g() {
                var a = new f.HandlebarsEnvironment;
                q.extend(a, f);
                a.SafeString = k["default"];
                a.Exception = l["default"];
                a.Utils = q;
                a.escapeExpression = q.escapeExpression;
                a.VM = C;
                a.template = function(b) {
                    return C.template(b, a)
                };
                return a
            }
            m.__esModule = !0;
            var d = c(1),
                f = b(d);
            d = c(15);
            var k = a(d);
            d = c(3);
            var l = a(d);
            d = c(2);
            var q = b(d);
            d = c(16);
            var C = b(d);
            c = c(17);
            c = a(c);
            d = g();
            d.create = g;
            c["default"](d);
            d["default"] = d;
            m["default"] = d;
            h.exports = m["default"]
        }, function(h, m, c) {
            function a(a, b, c) {
                this.helpers = a || {};
                this.partials = b || {};
                this.decorators = c || {};
                d.registerDefaultHelpers(this);
                f.registerDefaultDecorators(this)
            }
            m.__esModule = !0;
            m.HandlebarsEnvironment = a;
            var b = c(2),
                g = (h = c(3)) && h.__esModule ? h : {
                    "default": h
                },
                d = c(4),
                f = c(12);
            c = (c = c(14)) && c.__esModule ? c : {
                "default": c
            };
            m.VERSION = "4.0.12";
            m.COMPILER_REVISION = 7;
            m.REVISION_CHANGES = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1",
                7: ">= 4.0.0"
            };
            a.prototype = {
                constructor: a,
                logger: c["default"],
                log: c["default"].log,
                registerHelper: function(a, c) {
                    if ("[object Object]" === b.toString.call(a)) {
                        if (c) throw new g["default"]("Arg not supported with multiple helpers");
                        b.extend(this.helpers, a)
                    } else this.helpers[a] = c
                },
                unregisterHelper: function(a) {
                    delete this.helpers[a]
                },
                registerPartial: function(a, c) {
                    if ("[object Object]" === b.toString.call(a)) b.extend(this.partials, a);
                    else {
                        if ("undefined" === typeof c) throw new g["default"]('Attempting to register a partial called "' +
                            a + '" as undefined');
                        this.partials[a] = c
                    }
                },
                unregisterPartial: function(a) {
                    delete this.partials[a]
                },
                registerDecorator: function(a, c) {
                    if ("[object Object]" === b.toString.call(a)) {
                        if (c) throw new g["default"]("Arg not supported with multiple decorators");
                        b.extend(this.decorators, a)
                    } else this.decorators[a] = c
                },
                unregisterDecorator: function(a) {
                    delete this.decorators[a]
                }
            };
            m.log = c["default"].log;
            m.createFrame = b.createFrame;
            m.logger = c["default"]
        }, function(h, m) {
            function c(a) {
                return b[a]
            }

            function a(a) {
                for (var b = 1; b <
                    arguments.length; b++)
                    for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
                return a
            }
            m.__esModule = !0;
            m.extend = a;
            m.indexOf = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            };
            m.escapeExpression = function(a) {
                if ("string" !== typeof a) {
                    if (a && a.toHTML) return a.toHTML();
                    if (null == a) return "";
                    if (!a) return a + "";
                    a = "" + a
                }
                return d.test(a) ? a.replace(g, c) : a
            };
            m.isEmpty = function(a) {
                return a || 0 === a ? l(a) && 0 === a.length ? !0 : !1 : !0
            };
            m.createFrame = function(b) {
                var c =
                    a({}, b);
                c._parent = b;
                return c
            };
            var b = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                },
                g = /[&<>"'`=]/g,
                d = /[&<>"'`=]/,
                f = Object.prototype.toString;
            m.toString = f;
            var k = function(a) {
                return "function" === typeof a
            };
            k(/x/) && (m.isFunction = k = function(a) {
                return "function" === typeof a && "[object Function]" === f.call(a)
            });
            m.isFunction = k;
            var l = Array.isArray || function(a) {
                return a && "object" === typeof a ? "[object Array]" === f.call(a) : !1
            };
            m.isArray = l
        }, function(h, m) {
            function c(b, g) {
                var d = g &&
                    g.loc,
                    f = void 0,
                    k = void 0;
                d && (f = d.start.line, k = d.start.column, b += " - " + f + ":" + k);
                for (var l = Error.prototype.constructor.call(this, b), q = 0; q < a.length; q++) this[a[q]] = l[a[q]];
                Error.captureStackTrace && Error.captureStackTrace(this, c);
                try {
                    d && (this.lineNumber = f, Object.defineProperty ? Object.defineProperty(this, "column", {
                        value: k,
                        enumerable: !0
                    }) : this.column = k)
                } catch (C) {}
            }
            m.__esModule = !0;
            var a = "description fileName lineNumber message name number stack".split(" ");
            c.prototype = Error();
            m["default"] = c;
            h.exports = m["default"]
        },
        function(h, m, c) {
            function a(a) {
                return a && a.__esModule ? a : {
                    "default": a
                }
            }
            m.__esModule = !0;
            m.registerDefaultHelpers = function(a) {
                b["default"](a);
                g["default"](a);
                d["default"](a);
                f["default"](a);
                k["default"](a);
                l["default"](a);
                q["default"](a)
            };
            h = c(5);
            var b = a(h);
            h = c(6);
            var g = a(h);
            h = c(7);
            var d = a(h);
            h = c(8);
            var f = a(h);
            h = c(9);
            var k = a(h);
            h = c(10);
            var l = a(h);
            c = c(11);
            var q = a(c)
        },
        function(h, m, c) {
            m.__esModule = !0;
            var a = c(2);
            m["default"] = function(b) {
                b.registerHelper("blockHelperMissing", function(c, d) {
                    var f = d.inverse,
                        g =
                        d.fn;
                    return !0 === c ? g(this) : !1 === c || null == c ? f(this) : a.isArray(c) ? 0 < c.length ? b.helpers.each(c, d) : f(this) : g(c, d)
                })
            };
            h.exports = m["default"]
        },
        function(h, m, c) {
            m.__esModule = !0;
            var a = c(2),
                b = (c = c(3)) && c.__esModule ? c : {
                    "default": c
                };
            m["default"] = function(c) {
                c.registerHelper("each", function(c, f) {
                    function d(a, b, d) {
                        m && (m.key = a, m.index = b, m.first = 0 === b, m.last = !!d);
                        n += g(c[a], {
                            data: m,
                            blockParams: [c[a], a]
                        })
                    }
                    if (!f) throw new b["default"]("Must pass iterator to #each");
                    var g = f.fn,
                        q = f.inverse,
                        h = 0,
                        n = "",
                        m = void 0;
                    a.isFunction(c) &&
                        (c = c.call(this));
                    f.data && (m = a.createFrame(f.data));
                    if (c && "object" === typeof c)
                        if (a.isArray(c))
                            for (var x = c.length; h < x; h++) h in c && d(h, h, h === c.length - 1);
                        else {
                            x = void 0;
                            for (var A in c) c.hasOwnProperty(A) && (void 0 !== x && d(x, h - 1), x = A, h++);
                            void 0 !== x && d(x, h - 1, !0)
                        } 0 === h && (n = q(this));
                    return n
                })
            };
            h.exports = m["default"]
        },
        function(h, m, c) {
            m.__esModule = !0;
            var a = (c = c(3)) && c.__esModule ? c : {
                "default": c
            };
            m["default"] = function(b) {
                b.registerHelper("helperMissing", function() {
                    if (1 !== arguments.length) throw new a["default"]('Missing helper: "' +
                        arguments[arguments.length - 1].name + '"');
                })
            };
            h.exports = m["default"]
        },
        function(h, m, c) {
            m.__esModule = !0;
            var a = c(2);
            m["default"] = function(b) {
                b.registerHelper("if", function(b, c) {
                    a.isFunction(b) && (b = b.call(this));
                    return !c.hash.includeZero && !b || a.isEmpty(b) ? c.inverse(this) : c.fn(this)
                });
                b.registerHelper("unless", function(a, c) {
                    return b.helpers["if"].call(this, a, {
                        fn: c.inverse,
                        inverse: c.fn,
                        hash: c.hash
                    })
                })
            };
            h.exports = m["default"]
        },
        function(h, m) {
            m.__esModule = !0;
            m["default"] = function(c) {
                c.registerHelper("log", function() {
                    for (var a = [void 0], b = arguments[arguments.length - 1], g = 0; g < arguments.length - 1; g++) a.push(arguments[g]);
                    g = 1;
                    null != b.hash.level ? g = b.hash.level : b.data && null != b.data.level && (g = b.data.level);
                    a[0] = g;
                    c.log.apply(c, a)
                })
            };
            h.exports = m["default"]
        },
        function(h, m) {
            m.__esModule = !0;
            m["default"] = function(c) {
                c.registerHelper("lookup", function(a, b) {
                    return a && a[b]
                })
            };
            h.exports = m["default"]
        },
        function(h, m, c) {
            m.__esModule = !0;
            var a = c(2);
            m["default"] = function(b) {
                b.registerHelper("with", function(b, c) {
                    a.isFunction(b) && (b = b.call(this));
                    var d = c.fn;
                    return a.isEmpty(b) ? c.inverse(this) : d(b, {
                        data: c.data,
                        blockParams: [b]
                    })
                })
            };
            h.exports = m["default"]
        },
        function(h, m, c) {
            m.__esModule = !0;
            m.registerDefaultDecorators = function(b) {
                a["default"](b)
            };
            var a = (h = c(13)) && h.__esModule ? h : {
                "default": h
            }
        },
        function(h, m, c) {
            m.__esModule = !0;
            var a = c(2);
            m["default"] = function(b) {
                b.registerDecorator("inline", function(b, c, f, k) {
                    var d = b;
                    c.partials || (c.partials = {}, d = function(d, g) {
                        var k = f.partials;
                        f.partials = a.extend({}, k, c.partials);
                        var l = b(d, g);
                        f.partials = k;
                        return l
                    });
                    c.partials[k.args[0]] = k.fn;
                    return d
                })
            };
            h.exports = m["default"]
        },
        function(h, m, c) {
            m.__esModule = !0;
            var a = c(2),
                b = {
                    methodMap: ["debug", "info", "warn", "error"],
                    level: "info",
                    lookupLevel: function(c) {
                        if ("string" === typeof c) {
                            var d = a.indexOf(b.methodMap, c.toLowerCase());
                            c = 0 <= d ? d : parseInt(c, 10)
                        }
                        return c
                    },
                    log: function(a) {
                        a = b.lookupLevel(a);
                        if ("undefined" !== typeof console && b.lookupLevel(b.level) <= a) {
                            var c = b.methodMap[a];
                            console[c] || (c = "log");
                            for (var f = arguments.length, g = Array(1 < f ? f - 1 : 0), l = 1; l < f; l++) g[l - 1] = arguments[l];
                            console[c].apply(console, g)
                        }
                    }
                };
            m["default"] = b;
            h.exports = m["default"]
        },
        function(h, m) {
            function c(a) {
                this.string = a
            }
            m.__esModule = !0;
            c.prototype.toString = c.prototype.toHTML = function() {
                return "" + this.string
            };
            m["default"] = c;
            h.exports = m["default"]
        },
        function(h, m, c) {
            function a(a, b, c, f, g, k, l) {
                function q(b) {
                    var d = 1 >= arguments.length || void 0 === arguments[1] ? {} : arguments[1],
                        g = l;
                    !l || b == l[0] || b === a.nullContext && null === l[0] || (g = [b].concat(l));
                    return c(a, b, a.helpers, a.partials, d.data || f, k && [d.blockParams].concat(k),
                        g)
                }
                q = d(c, q, a, l, f, k);
                q.program = b;
                q.depth = l ? l.length : 0;
                q.blockParams = g || 0;
                return q
            }

            function b() {
                return ""
            }

            function g(a, b) {
                b && "root" in b || (b = b ? l.createFrame(b) : {}, b.root = a);
                return b
            }

            function d(a, b, c, d, g, k) {
                if (a.decorator) {
                    var l = {};
                    b = a.decorator(b, l, c, d && d[0], g, k, d);
                    f.extend(b, l)
                }
                return b
            }
            m.__esModule = !0;
            m.checkRevision = function(a) {
                var b = a && a[0] || 1,
                    c = l.COMPILER_REVISION;
                if (b !== c) {
                    if (b < c) throw new k["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                        l.REVISION_CHANGES[c] + ") or downgrade your runtime to an older version (" + l.REVISION_CHANGES[b] + ").");
                    throw new k["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").");
                }
            };
            m.template = function(b, c) {
                function l(a) {
                    function c(a) {
                        return "" + b.main(h, a, h.helpers, h.partials, l, m, k)
                    }
                    var f = 1 >= arguments.length || void 0 === arguments[1] ? {} : arguments[1],
                        l = f.data;
                    q(f);
                    !f.partial && b.useData && (l = g(a, l));
                    var k = void 0,
                        m = b.useBlockParams ? [] : void 0;
                    b.useDepths && (k = f.depths ? a != f.depths[0] ? [a].concat(f.depths) : f.depths : [a]);
                    c = d(b.main, c, h, f.depths || [], l, m);
                    return c(a, f)
                }

                function q(a) {
                    if (a.partial) h.helpers = a.helpers, h.partials = a.partials, h.decorators = a.decorators;
                    else if (h.helpers = h.merge(a.helpers, c.helpers), b.usePartial && (h.partials = h.merge(a.partials, c.partials)), b.usePartial || b.useDecorators) h.decorators = h.merge(a.decorators, c.decorators)
                }
                if (!c) throw new k["default"]("No environment passed to template");
                if (!b ||
                    !b.main) throw new k["default"]("Unknown template object: " + typeof b);
                b.main.decorator = b.main_d;
                c.VM.checkRevision(b.compiler);
                var h = {
                    strict: function(a, b) {
                        if (!(b in a)) throw new k["default"]('"' + b + '" not defined in ' + a);
                        return a[b]
                    },
                    lookup: function(a, b) {
                        for (var c = a.length, d = 0; d < c; d++)
                            if (a[d] && null != a[d][b]) return a[d][b]
                    },
                    lambda: function(a, b) {
                        return "function" === typeof a ? a.call(b) : a
                    },
                    escapeExpression: f.escapeExpression,
                    invokePartial: function(a, d, g) {
                        g.hash && (d = f.extend({}, d, g.hash));
                        a = c.VM.resolvePartial.call(this,
                            a, d, g);
                        var l = c.VM.invokePartial.call(this, a, d, g);
                        null == l && c.compile && (g.partials[g.name] = c.compile(a, b.compilerOptions, c), l = g.partials[g.name](d, g));
                        if (null != l) {
                            if (g.indent) {
                                a = l.split("\n");
                                d = 0;
                                for (l = a.length; d < l && (a[d] || d + 1 !== l); d++) a[d] = g.indent + a[d];
                                l = a.join("\n")
                            }
                            return l
                        }
                        throw new k["default"]("The partial " + g.name + " could not be compiled when running in runtime-only mode");
                    },
                    fn: function(a) {
                        var c = b[a];
                        c.decorator = b[a + "_d"];
                        return c
                    },
                    programs: [],
                    program: function(b, c, d, f, g) {
                        var l = this.programs[b],
                            k = this.fn(b);
                        c || g || f || d ? l = a(this, b, k, c, d, f, g) : l || (l = this.programs[b] = a(this, b, k));
                        return l
                    },
                    data: function(a, b) {
                        for (; a && b--;) a = a._parent;
                        return a
                    },
                    merge: function(a, b) {
                        var c = a || b;
                        a && b && a !== b && (c = f.extend({}, b, a));
                        return c
                    },
                    nullContext: Object.seal({}),
                    noop: c.VM.noop,
                    compilerInfo: b.compiler
                };
                l.isTop = !0;
                return l
            };
            m.wrapProgram = a;
            m.resolvePartial = function(a, b, c) {
                a ? a.call || c.name || (c.name = a, a = c.partials[a]) : a = "@partial-block" === c.name ? c.data["partial-block"] : c.partials[c.name];
                return a
            };
            m.invokePartial =
                function(a, c, d) {
                    var g = d.data && d.data["partial-block"];
                    d.partial = !0;
                    var q = void 0;
                    d.fn && d.fn !== b && function() {
                        d.data = l.createFrame(d.data);
                        var a = d.fn;
                        q = d.data["partial-block"] = function(b) {
                            var c = 1 >= arguments.length || void 0 === arguments[1] ? {} : arguments[1];
                            c.data = l.createFrame(c.data);
                            c.data["partial-block"] = g;
                            return a(b, c)
                        };
                        a.partials && (d.partials = f.extend({}, d.partials, a.partials))
                    }();
                    void 0 === a && q && (a = q);
                    if (void 0 === a) throw new k["default"]("The partial " + d.name + " could not be found");
                    if (a instanceof Function) return a(c, d)
                };
            m.noop = b;
            var f = function(a) {
                    if (a && a.__esModule) return a;
                    var b = {};
                    if (null != a)
                        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                    b["default"] = a;
                    return b
                }(c(2)),
                k = (h = c(3)) && h.__esModule ? h : {
                    "default": h
                },
                l = c(1)
        },
        function(h, m) {
            (function(c) {
                m.__esModule = !0;
                m["default"] = function(a) {
                    var b = "undefined" !== typeof c ? c : window,
                        g = b.Handlebars;
                    a.noConflict = function() {
                        b.Handlebars === a && (b.Handlebars = g);
                        return a
                    }
                };
                h.exports = m["default"]
            }).call(m, function() {
                return this
            }())
        }
    ])
});
(function() {
    function h(a, b) {
        var c = Object.keys(b).reduce(function(a, c) {
            var d = b[c];
            d.icon ? a[d.iconName] = d.icon : a[c] = d;
            return a
        }, {});
        "function" === typeof g.hooks.addPack ? g.hooks.addPack(a, c) : g.styles[a] = d({}, g.styles[a] || {}, c);
        "fas" === a && h("fa", b)
    }
    var m = {};
    try {
        "undefined" !== typeof window && (m = window)
    } catch (k) {}
    var c = (m.navigator || {}).userAgent;
    c = void 0 === c ? "" : c;
    ~c.indexOf("MSIE") || c.indexOf("Trident/");
    try {
        var a = !0
    } catch (k) {
        a = !1
    }
    c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var b = c.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    "xs sm lg fw ul li border pull-left pull-right spin pulse rotate-90 rotate-180 rotate-270 flip-horizontal flip-vertical stack stack-1x stack-2x inverse layers layers-text layers-counter".split(" ").concat(c.map(function(a) {
        return a + "x"
    })).concat(b.map(function(a) {
        return "w-" + a
    }));
    m = m || {};
    m.___FONT_AWESOME___ || (m.___FONT_AWESOME___ = {});
    m.___FONT_AWESOME___.styles || (m.___FONT_AWESOME___.styles = {});
    m.___FONT_AWESOME___.hooks || (m.___FONT_AWESOME___.hooks = {});
    m.___FONT_AWESOME___.shims || (m.___FONT_AWESOME___.shims = []);
    var g = m.___FONT_AWESOME___,
        d = Object.assign || function(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b],
                    d;
                for (d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
        },
        f = {};
    (function(b) {
        try {
            b()
        } catch (l) {
            if (!a) throw l;
        }
    })(function() {
        h("fab", f)
    })
})();
(function() {
    function h(a, b) {
        var c = Object.keys(b).reduce(function(a, c) {
            var d = b[c];
            d.icon ? a[d.iconName] = d.icon : a[c] = d;
            return a
        }, {});
        "function" === typeof g.hooks.addPack ? g.hooks.addPack(a, c) : g.styles[a] = d({}, g.styles[a] || {}, c);
        "fas" === a && h("fa", b)
    }
    var m = {};
    try {
        "undefined" !== typeof window && (m = window)
    } catch (k) {}
    var c = (m.navigator || {}).userAgent;
    c = void 0 === c ? "" : c;
    ~c.indexOf("MSIE") || c.indexOf("Trident/");
    try {
        var a = !0
    } catch (k) {
        a = !1
    }
    c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var b = c.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    "xs sm lg fw ul li border pull-left pull-right spin pulse rotate-90 rotate-180 rotate-270 flip-horizontal flip-vertical stack stack-1x stack-2x inverse layers layers-text layers-counter".split(" ").concat(c.map(function(a) {
        return a + "x"
    })).concat(b.map(function(a) {
        return "w-" + a
    }));
    m = m || {};
    m.___FONT_AWESOME___ || (m.___FONT_AWESOME___ = {});
    m.___FONT_AWESOME___.styles || (m.___FONT_AWESOME___.styles = {});
    m.___FONT_AWESOME___.hooks || (m.___FONT_AWESOME___.hooks = {});
    m.___FONT_AWESOME___.shims || (m.___FONT_AWESOME___.shims = []);
    var g = m.___FONT_AWESOME___,
        d = Object.assign || function(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b],
                    d;
                for (d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
        },
        f = {
            heart: [512, 512, [], "f004", "M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"],
            compass: [496, 512, [], "f14e", "M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"],
            image: [512, 512, [], "f03e", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"],
            "comment-alt": [512, 512, [], "f27a", "M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"]
        };
    (function(b) {
        try {
            b()
        } catch (l) {
            if (!a) throw l;
        }
    })(function() {
        h("far", f)
    })
})();
(function() {
    function h(a, b) {
        var c = Object.keys(b).reduce(function(a, c) {
            var d = b[c];
            d.icon ? a[d.iconName] = d.icon : a[c] = d;
            return a
        }, {});
        "function" === typeof g.hooks.addPack ? g.hooks.addPack(a, c) : g.styles[a] = d({}, g.styles[a] || {}, c);
        "fas" === a && h("fa", b)
    }
    var m = {};
    try {
        "undefined" !== typeof window && (m = window)
    } catch (k) {}
    var c = (m.navigator || {}).userAgent;
    c = void 0 === c ? "" : c;
    ~c.indexOf("MSIE") || c.indexOf("Trident/");
    try {
        var a = !0
    } catch (k) {
        a = !1
    }
    c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var b = c.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    "xs sm lg fw ul li border pull-left pull-right spin pulse rotate-90 rotate-180 rotate-270 flip-horizontal flip-vertical stack stack-1x stack-2x inverse layers layers-text layers-counter".split(" ").concat(c.map(function(a) {
        return a + "x"
    })).concat(b.map(function(a) {
        return "w-" + a
    }));
    m = m || {};
    m.___FONT_AWESOME___ || (m.___FONT_AWESOME___ = {});
    m.___FONT_AWESOME___.styles || (m.___FONT_AWESOME___.styles = {});
    m.___FONT_AWESOME___.hooks || (m.___FONT_AWESOME___.hooks = {});
    m.___FONT_AWESOME___.shims || (m.___FONT_AWESOME___.shims = []);
    var g = m.___FONT_AWESOME___,
        d = Object.assign || function(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b],
                    d;
                for (d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
        },
        f = {
            "map-marker-alt": [384, 512, [], "f3c5", "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"],
            "charging-station": [576,
                512, [], "f5e7", "M336 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h320c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm208-320V80c0-8.84-7.16-16-16-16s-16 7.16-16 16v48h-32V80c0-8.84-7.16-16-16-16s-16 7.16-16 16v48h-16c-8.84 0-16 7.16-16 16v32c0 35.76 23.62 65.69 56 75.93v118.49c0 13.95-9.5 26.92-23.26 29.19C431.22 402.5 416 388.99 416 372v-28c0-48.6-39.4-88-88-88h-8V64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v352h288V304h8c22.09 0 40 17.91 40 40v24.61c0 39.67 28.92 75.16 68.41 79.01C481.71 452.05 520 416.41 520 372V251.93c32.38-10.24 56-40.17 56-75.93v-32c0-8.84-7.16-16-16-16h-16zm-283.91 47.76l-93.7 139c-2.2 3.33-6.21 5.24-10.39 5.24-7.67 0-13.47-6.28-11.67-12.92L167.35 224H108c-7.25 0-12.85-5.59-11.89-11.89l16-107C112.9 99.9 117.98 96 124 96h68c7.88 0 13.62 6.54 11.6 13.21L192 160h57.7c9.24 0 15.01 8.78 10.39 15.76z"
            ],
            times: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"],
            pen: [512, 512, [], "f304", "M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"],
            camera: [512, 512, [], "f030", "M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"],
            "comment-alt": [512, 512, [], "f27a", "M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"],
            heart: [512, 512, [], "f004", "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"],
            edit: [576, 512, [], "f044", "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"],
            plus: [448, 512, [], "f067", "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"],
            "file-download": [384, 512, [], "f56d", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"],
            "file-alt": [384, 512, [], "f15c", "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"],
            "user-edit": [640, 512, [], "f4ff", "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"],
            key: [512, 512, [], "f084", "M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"],
            car: [512, 512, [],
                "f1b9", "M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"
            ],
            bell: [448, 512, [], "f0f3", "M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"],
            user: [448, 512, [], "f007", "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"],
            "user-shield": [640, 512, [], "f505", "M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"],
            receipt: [384, 512, [], "f543", "M358.4 3.2L320 48 265.6 3.2a15.9 15.9 0 0 0-19.2 0L192 48 137.6 3.2a15.9 15.9 0 0 0-19.2 0L64 48 25.6 3.2C15-4.7 0 2.8 0 16v480c0 13.2 15 20.7 25.6 12.8L64 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L192 464l54.4 44.8a15.9 15.9 0 0 0 19.2 0L320 464l38.4 44.8c10.5 7.9 25.6.4 25.6-12.8V16c0-13.2-15-20.7-25.6-12.8zM320 360c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8v16z"],
            "sign-out-alt": [512, 512, [], "f2f5", "M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"],
            "user-plus": [640, 512, [], "f234", "M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"],
            "sign-in-alt": [512, 512, [], "f2f6", "M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"],
            "globe-africa": [496, 512, [], "f57c", "M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z"],
            filter: [512, 512, [], "f0b0", "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"],
            info: [192, 512, [], "f129", "M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"],
            adjust: [512, 512, [], "f042", "M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"],
            bars: [448, 512, [], "f0c9", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],
            bold: [384, 512, [], "f032", "M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z"],
            italic: [320, 512, [], "f033", "M204.758 416h-33.849l62.092-320h40.725a16 16 0 0 0 15.704-12.937l6.242-32C297.599 41.184 290.034 32 279.968 32H120.235a16 16 0 0 0-15.704 12.937l-6.242 32C96.362 86.816 103.927 96 113.993 96h33.846l-62.09 320H46.278a16 16 0 0 0-15.704 12.935l-6.245 32C22.402 470.815 29.967 480 40.034 480h158.479a16 16 0 0 0 15.704-12.935l6.245-32c1.927-9.88-5.638-19.065-15.704-19.065z"],
            underline: [448, 512, [], "f0cd", "M224.264 388.24c-91.669 0-156.603-51.165-156.603-151.392V64H39.37c-8.837 0-16-7.163-16-16V16c0-8.837 7.163-16 16-16h137.39c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16h-28.813v172.848c0 53.699 28.314 79.444 76.317 79.444 46.966 0 75.796-25.434 75.796-79.965V64h-28.291c-8.837 0-16-7.163-16-16V16c0-8.837 7.163-16 16-16h136.868c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16h-28.291v172.848c0 99.405-64.881 151.392-156.082 151.392zM16 448h416c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16z"],
            eraser: [512, 512, [], "f12d", "M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80 124.686-124.686z"],
            "list-ol": [512, 512, [], "f0cb", "M3.263 139.527c0-7.477 3.917-11.572 11.573-11.572h15.131V88.078c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.938C32.815 33.602 36.732 32 42.785 32H54.89c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572H14.836c-7.656 0-11.573-4.095-11.573-11.572v-8.902zM2.211 304.591c0-47.278 50.955-56.383 50.955-69.165 0-7.18-5.954-8.755-9.28-8.755-3.153 0-6.479 1.051-9.455 3.852-5.079 4.903-10.507 7.004-16.111 2.451l-8.579-6.829c-5.779-4.553-7.18-9.805-2.803-15.409C13.592 201.981 26.025 192 47.387 192c19.437 0 44.476 10.506 44.476 39.573 0 38.347-46.753 46.402-48.679 56.909h39.049c7.529 0 11.557 4.027 11.557 11.382v8.755c0 7.354-4.028 11.382-11.557 11.382h-67.94c-7.005 0-12.083-4.028-12.083-11.382v-4.028zM5.654 454.61l5.603-9.28c3.853-6.654 9.105-7.004 15.584-3.152 4.903 2.101 9.63 3.152 14.359 3.152 10.155 0 14.358-3.502 14.358-8.23 0-6.654-5.604-9.106-15.934-9.106h-4.728c-5.954 0-9.28-2.101-12.258-7.88l-1.05-1.926c-2.451-4.728-1.226-9.806 2.801-14.884l5.604-7.004c6.829-8.405 12.257-13.483 12.257-13.483v-.35s-4.203 1.051-12.608 1.051H16.685c-7.53 0-11.383-4.028-11.383-11.382v-8.755c0-7.53 3.853-11.382 11.383-11.382h58.484c7.529 0 11.382 4.027 11.382 11.382v3.327c0 5.778-1.401 9.806-5.079 14.183l-17.509 20.137c19.611 5.078 28.716 20.487 28.716 34.845 0 21.363-14.358 44.126-48.503 44.126-16.636 0-28.192-4.728-35.896-9.455-5.779-4.202-6.304-9.805-2.626-15.934zM144 132h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],
            "list-ul": [512, 512, [], "f0ca", "M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"],
            link: [512, 512, [], "f0c1", "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"],
            image: [512, 512, [], "f03e", "M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"],
            "trash-alt": [448, 512, [], "f2ed", "M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"],
            route: [512, 512, [], "f4d7", "M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160-43-96-96-96-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160 96-107 96-160-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"],
            road: [576, 512, [], "f018", "M573.19 402.67l-139.79-320C428.43 71.29 417.6 64 405.68 64h-97.59l2.45 23.16c.5 4.72-3.21 8.84-7.96 8.84h-29.16c-4.75 0-8.46-4.12-7.96-8.84L267.91 64h-97.59c-11.93 0-22.76 7.29-27.73 18.67L2.8 402.67C-6.45 423.86 8.31 448 30.54 448h196.84l10.31-97.68c.86-8.14 7.72-14.32 15.91-14.32h68.8c8.19 0 15.05 6.18 15.91 14.32L348.62 448h196.84c22.23 0 36.99-24.14 27.73-45.33zM260.4 135.16a8 8 0 0 1 7.96-7.16h39.29c4.09 0 7.53 3.09 7.96 7.16l4.6 43.58c.75 7.09-4.81 13.26-11.93 13.26h-40.54c-7.13 0-12.68-6.17-11.93-13.26l4.59-43.58zM315.64 304h-55.29c-9.5 0-16.91-8.23-15.91-17.68l5.07-48c.86-8.14 7.72-14.32 15.91-14.32h45.15c8.19 0 15.05 6.18 15.91 14.32l5.07 48c1 9.45-6.41 17.68-15.91 17.68z"],
            "h-square": [448, 512, [], "f0fd", "M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-112 48h-32c-8.837 0-16 7.163-16 16v80H160v-80c0-8.837-7.163-16-16-16h-32c-8.837 0-16 7.163-16 16v224c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16v-80h128v80c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V144c0-8.837-7.163-16-16-16z"]
        };
    (function(b) {
        try {
            b()
        } catch (l) {
            if (!a) throw l;
        }
    })(function() {
        h("fas", f)
    })
})();
(function() {
    function h(a) {
        if (a && ra) {
            var b = M.createElement("style");
            b.setAttribute("type", "text/css");
            b.innerHTML = a;
            for (var c = M.head.childNodes, d = null, f = c.length - 1; - 1 < f; f--) {
                var g = c[f],
                    l = (g.tagName || "").toUpperCase(); - 1 < ["STYLE", "LINK"].indexOf(l) && (d = g)
            }
            M.head.insertBefore(b, d);
            return a
        }
    }

    function m() {
        for (var a = 12, b = ""; 0 < a--;) b += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
        return b
    }

    function c(a) {
        for (var b = [], c = (a || []).length >>> 0; c--;) b[c] = a[c];
        return b
    }

    function a(a) {
        return a.classList ?
            c(a.classList) : (a.getAttribute("class") || "").split(" ").filter(function(a) {
                return a
            })
    }

    function b(a) {
        return ("" + a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function g(a) {
        return Object.keys(a || {}).reduce(function(c, d) {
            return c + (d + '="' + b(a[d]) + '" ')
        }, "").trim()
    }

    function d(a) {
        return Object.keys(a || {}).reduce(function(b, c) {
            return b + (c + ": " + a[c] + ";")
        }, "")
    }

    function f(a) {
        return a.size !== ma.size || a.x !== ma.x || a.y !== ma.y || a.rotate !== ma.rotate ||
            a.flipX || a.flipY
    }

    function k(a) {
        var b = a.transform;
        return {
            outer: {
                transform: "translate(" + a.containerWidth / 2 + " 256)"
            },
            inner: {
                transform: "translate(" + 32 * b.x + ", " + 32 * b.y + ")  scale(" + (b.size / 16 * (b.flipX ? -1 : 1) + ", " + b.size / 16 * (b.flipY ? -1 : 1) + ")  rotate(") + (b.rotate + " 0 0)")
            },
            path: {
                transform: "translate(" + a.iconWidth / 2 * -1 + " -256)"
            }
        }
    }

    function l(a) {
        var b = a.icons,
            c = b.main,
            d = b.mask,
            f = a.prefix,
            g = a.iconName,
            l = a.transform;
        b = a.symbol;
        var k = a.title,
            q = a.extra;
        a = a.watchable;
        a = void 0 === a ? !1 : a;
        var h = d.found ? d : c,
            n = h.width;
        h = h.height;
        var C = [B.replacementClass, g ? B.familyPrefix + "-" + g : "", "fa-w-" + Math.ceil(n / h * 16)].filter(function(a) {
            return -1 === q.classes.indexOf(a)
        }).concat(q.classes).join(" ");
        n = {
            children: [],
            attributes: D({}, q.attributes, {
                "data-prefix": f,
                "data-icon": g,
                "class": C,
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 " + n + " " + h
            })
        };
        a && (n.attributes["data-fa-i2svg"] = "");
        k && n.children.push({
            tag: "title",
            attributes: {
                id: n.attributes["aria-labelledby"] || "title-" + m()
            },
            children: [k]
        });
        f = D({}, n, {
            prefix: f,
            iconName: g,
            main: c,
            mask: d,
            transform: l,
            symbol: b,
            styles: q.styles
        });
        c = d.found && c.found ? ic(f) : O(f);
        d = c.attributes;
        f.children = c.children;
        f.attributes = d;
        return b ? Bb(f) : mc(f)
    }

    function q(a) {
        var b = a.content,
            c = a.width,
            g = a.height,
            l = a.transform,
            k = a.title,
            q = a.extra;
        a = a.watchable;
        var h = void 0 === a ? !1 : a;
        a = D({}, q.attributes, k ? {
            title: k
        } : {}, {
            "class": q.classes.join(" ")
        });
        h && (a["data-fa-i2svg"] = "");
        q = D({}, q.styles);
        f(l) && (h = "", h = bb ? h + ("translate(" + (l.x / 16 - (void 0 === c ? 16 : c) / 2) + "em, " + (l.y / 16 - (void 0 === g ? 16 : g) / 2) + "em) ") : h + ("translate(calc(-50% + " +
            l.x / 16 + "em), calc(-50% + " + l.y / 16 + "em)) "), h += "scale(" + l.size / 16 * (l.flipX ? -1 : 1) + ", " + l.size / 16 * (l.flipY ? -1 : 1) + ") ", h += "rotate(" + l.rotate + "deg) ", q.transform = h, q["-webkit-transform"] = q.transform);
        c = d(q);
        0 < c.length && (a.style = c);
        c = [];
        c.push({
            tag: "span",
            attributes: a,
            children: [b]
        });
        k && c.push({
            tag: "span",
            attributes: {
                "class": "sr-only"
            },
            children: [k]
        });
        return c
    }

    function C(a, b) {
        return La[a][b]
    }

    function n(a) {
        return a.reduce(function(a, b) {
            var c = B.familyPrefix;
            var d = b.split("-"),
                f = d[0];
            d = d.slice(1).join("-");
            c = f !== c || "" === d || ~Pb.indexOf(d) ? null : d;
            ac[b] ? a.prefix = b : c ? (f = "fa" === a.prefix ? $b[c] || {
                prefix: null,
                iconName: null
            } : {}, a.iconName = f.iconName || c, a.prefix = f.prefix || a.prefix) : b !== B.replacementClass && 0 !== b.indexOf("fa-w-") && a.rest.push(b);
            return a
        }, Db())
    }

    function r(a, b, c) {
        if (a && a[b] && a[b][c]) return {
            prefix: b,
            iconName: c,
            icon: a[b][c]
        }
    }

    function x(a) {
        var c = a.tag,
            d = a.attributes;
        d = void 0 === d ? {} : d;
        var f = a.children;
        f = void 0 === f ? [] : f;
        return "string" === typeof a ? b(a) : "<" + c + " " + g(d) + ">" + f.map(x).join("") + "</" + c + ">"
    }

    function A(a) {
        return "string" ===
            typeof(a.getAttribute ? a.getAttribute("data-fa-i2svg") : null)
    }

    function E(a, b) {
        var c = "function" === typeof b ? b : nc;
        0 === a.length ? c() : (V.requestAnimationFrame || function(a) {
            return a()
        })(function() {
            var b = !0 === B.autoReplaceSvg ? Da.replace : Da[B.autoReplaceSvg] || Da.replace;
            var d = lb.begin("mutate");
            a.map(b);
            d();
            c()
        })
    }

    function t(a) {
        Eb = !0;
        a();
        Eb = !1
    }

    function z(b) {
        if (Aa && B.observeMutations) {
            var d = b.treeCallback,
                f = b.nodeCallback,
                g = b.pseudoElementsCallback;
            b = b.observeMutationsRoot;
            b = void 0 === b ? M.body : b;
            ob = new Aa(function(b) {
                Eb ||
                    c(b).forEach(function(b) {
                        "childList" === b.type && 0 < b.addedNodes.length && !A(b.addedNodes[0]) && (B.searchPseudoElements && g(b.target), d(b.target));
                        "attributes" === b.type && b.target.parentNode && B.searchPseudoElements && g(b.target.parentNode);
                        if ("attributes" === b.type && A(b.target) && ~xb.indexOf(b.attributeName))
                            if ("class" === b.attributeName) {
                                var c = n(a(b.target)),
                                    l = c.prefix;
                                c = c.iconName;
                                l && b.target.setAttribute("data-prefix", l);
                                c && b.target.setAttribute("data-icon", c)
                            } else f(b.target)
                    })
            });
            ra && ob.observe(b, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0
            })
        }
    }

    function F(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c).toString(16);
            b += ("000" + d).slice(-4)
        }
        return b
    }

    function G(a) {
        this.name = "MissingIcon";
        this.message = a || "Icon unavailable";
        this.stack = Error().stack
    }

    function S(a, b) {
        var c = {
            found: !1,
            width: 512,
            height: 512,
            icon: Ib
        };
        if (a && b && sa[b] && sa[b][a]) {
            var d = sa[b][a];
            c = d[0];
            var f = d[1];
            d = d.slice(4);
            c = {
                found: !0,
                width: c,
                height: f,
                icon: {
                    tag: "path",
                    attributes: {
                        fill: "currentColor",
                        d: d[0]
                    }
                }
            }
        } else if (a && b && !B.showMissingIcons) throw new G("Icon is missing for prefix " +
            b + " with icon name " + a);
        return c
    }

    function L(b) {
        var c = b.getAttribute("data-prefix");
        var d = b.getAttribute("data-icon"),
            f = void 0 !== b.innerText ? b.innerText.trim() : "",
            g = n(a(b));
        c && d && (g.prefix = c, g.iconName = d);
        g.prefix && 1 < f.length ? g.iconName = Zb[g.prefix][b.innerText] : g.prefix && 1 === f.length && (g.iconName = C(g.prefix, F(b.innerText)));
        d = g.iconName;
        f = g.prefix;
        var k = g.rest;
        var h = Fb(b);
        g = bc(b.getAttribute("data-fa-transform"));
        c = b.getAttribute("data-fa-symbol");
        var m = null === c ? !1 : "" === c ? !0 : c;
        var M = Cc(b),
            r = oc(b);
        c = b.getAttribute("title");
        k = {
            classes: k,
            styles: h,
            attributes: M
        };
        return ~k.classes.indexOf("fa-layers-text") ? (f = d = null, bb && (f = parseInt(getComputedStyle(b).fontSize, 10), h = b.getBoundingClientRect(), d = h.width / f, f = h.height / f), B.autoA11y && !c && (k.attributes["aria-hidden"] = "true"), [b, q({
            content: b.innerHTML,
            width: d,
            height: f,
            transform: g,
            title: c,
            extra: k,
            watchable: !0
        })]) : [b, l({
            icons: {
                main: S(d, f),
                mask: S(r.iconName, r.prefix)
            },
            prefix: f,
            iconName: d,
            transform: g,
            symbol: m,
            mask: r,
            title: c,
            extra: k,
            watchable: !0
        })]
    }

    function y(a) {
        if (ra) {
            var b =
                lb.begin("searchPseudoElements");
            t(function() {
                c(a.querySelectorAll("*")).filter(function(a) {
                    return a.parentNode !== document.head && !~vb.indexOf(a.tagName.toUpperCase()) && !a.getAttribute("data-fa-pseudo-element") && (!a.parentNode || "svg" !== a.parentNode.tagName)
                }).forEach(function(a) {
                    [":before", ":after"].forEach(function(b) {
                        var d = c(a.children).filter(function(a) {
                                return a.getAttribute("data-fa-pseudo-element") === b
                            })[0],
                            f = V.getComputedStyle(a, b),
                            g = f.getPropertyValue("font-family").match(cc),
                            k = f.getPropertyValue("font-weight");
                        d && !g ? a.removeChild(d) : g && (f = f.getPropertyValue("content"), g = ~["Light", "Regular", "Solid", "Brands"].indexOf(g[1]) ? Ma[g[1]] : db[k], k = C(g, F(3 === f.length ? f.substr(1, 1) : f)), d && d.getAttribute("data-prefix") === g && d.getAttribute("data-icon") === k || (d && a.removeChild(d), d = pb.extra, d.attributes["data-fa-pseudo-element"] = b, d = l(D({}, pb, {
                            icons: {
                                main: S(k, g),
                                mask: Db()
                            },
                            prefix: g,
                            iconName: k,
                            extra: d,
                            watchable: !0
                        })), g = M.createElement("svg"), ":before" === b ? a.insertBefore(g, a.firstChild) : a.appendChild(g), g.outerHTML = d.map(function(a) {
                            return x(a)
                        }).join("\n")))
                    })
                })
            });
            b()
        }
    }

    function la(a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        if (ra) {
            var d = M.documentElement.classList,
                f = Object.keys(sa);
            f = [".fa-layers-text:not([data-fa-i2svg])"].concat(f.map(function(a) {
                return "." + a + ":not([data-fa-i2svg])"
            })).join(", ");
            if (0 !== f.length) {
                var g = c(a.querySelectorAll(f));
                0 < g.length && (d.add("fontawesome-i2svg-pending"), d.remove("fontawesome-i2svg-complete"), f = lb.begin("onTree"), g = g.reduce(function(a, b) {
                    try {
                        var c = L(b);
                        c && a.push(c)
                    } catch (Ha) {
                        wb || Ha instanceof G &&
                            console.error(Ha)
                    }
                    return a
                }, []), f(), E(g, function() {
                    d.add("fontawesome-i2svg-active");
                    d.add("fontawesome-i2svg-complete");
                    d.remove("fontawesome-i2svg-pending");
                    "function" === typeof b && b()
                }))
            }
        }
    }

    function H(a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
            c = L(a);
        c && E([c], b)
    }

    function N(a, b) {
        var c = Object.keys(b).reduce(function(a, c) {
            var d = b[c];
            d.icon ? a[d.iconName] = d.icon : a[c] = d;
            return a
        }, {});
        "function" === typeof X.hooks.addPack ? X.hooks.addPack(a, c) : X.styles[a] = D({}, X.styles[a] || {}, c);
        "fas" === a && N("fa", b)
    }

    function R(a) {
        var b = a[0],
            c = a[1];
        a = a.slice(4);
        return {
            found: !0,
            width: b,
            height: c,
            icon: {
                tag: "path",
                attributes: {
                    fill: "currentColor",
                    d: a[0]
                }
            }
        }
    }

    function T() {
        B.autoAddCss && !oa && (h(fa()), oa = !0)
    }

    function w(a, b) {
        Object.defineProperty(a, "abstract", {
            get: b
        });
        Object.defineProperty(a, "html", {
            get: function() {
                return a["abstract"].map(function(a) {
                    return x(a)
                })
            }
        });
        Object.defineProperty(a, "node", {
            get: function() {
                if (ra) {
                    var b = M.createElement("div");
                    b.innerHTML = a.html;
                    return b.children
                }
            }
        });
        return a
    }

    function ha(a) {
        var b =
            a.prefix;
        b = void 0 === b ? "fa" : b;
        if (a = a.iconName) return r(Fa.definitions, b, a) || r(X.styles, b, a)
    }

    function Ta() {
        hb && (V.FontAwesome || (V.FontAwesome = ja), Ub(function() {
            ba();
            z({
                treeCallback: la,
                nodeCallback: H,
                pseudoElementsCallback: y
            })
        }));
        X.hooks = D({}, X.hooks, {
            addPack: function(a, b) {
                X.styles[a] = D({}, X.styles[a] || {}, b);
                nb();
                ba()
            },
            addShims: function(a) {
                var b;
                (b = X.shims).push.apply(b, yb(a));
                nb();
                ba()
            }
        })
    }
    var v = function() {},
        ia = {},
        da = {},
        J = null,
        U = {
            mark: v,
            measure: v
        };
    try {
        "undefined" !== typeof window && (ia = window), "undefined" !==
            typeof document && (da = document), "undefined" !== typeof MutationObserver && (J = MutationObserver), "undefined" !== typeof performance && (U = performance)
    } catch (Oa) {}
    var ea = (ia.navigator || {}).userAgent,
        ka = void 0 === ea ? "" : ea,
        V = ia,
        M = da,
        Aa = J,
        Ia = U,
        hb = !!V.document,
        ra = !!M.documentElement && !!M.head && "function" === typeof M.addEventListener && "function" === typeof M.createElement,
        bb = ~ka.indexOf("MSIE") || ~ka.indexOf("Trident/"),
        vb = ["HTML", "HEAD", "STYLE", "SCRIPT"];
    try {
        var wb = !0
    } catch (Oa) {
        wb = !1
    }
    var Ua = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        Va =
        Ua.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        xb = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
        Pb = "xs sm lg fw ul li border pull-left pull-right spin pulse rotate-90 rotate-180 rotate-270 flip-horizontal flip-vertical stack stack-1x stack-2x inverse layers layers-text layers-counter".split(" ").concat(Ua.map(function(a) {
            return a + "x"
        })).concat(Va.map(function(a) {
            return "w-" + a
        })),
        Qb = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1;
                    d.configurable = !0;
                    "value" in d && (d.writable = !0);
                    Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                c && a(b.prototype, c);
                d && a(b, d);
                return b
            }
        }(),
        D = Object.assign || function(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b],
                    d;
                for (d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
        },
        kc = function() {
            return function(a, b) {
                if (Array.isArray(a)) return a;
                $jscomp.initSymbol();
                $jscomp.initSymbolIterator();
                if (Symbol.iterator in Object(a)) {
                    var c = [],
                        d = !0,
                        f = !1,
                        g = void 0;
                    try {
                        $jscomp.initSymbol();
                        $jscomp.initSymbolIterator();
                        for (var l = a[Symbol.iterator](), k; !(d = (k = l.next()).done) && (c.push(k.value), !b || c.length !== b); d = !0);
                    } catch (Ha) {
                        f = !0, g = Ha
                    } finally {
                        try {
                            if (!d && l["return"]) l["return"]()
                        } finally {
                            if (f) throw g;
                        }
                    }
                    return c
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        }(),
        yb = function(a) {
            if (Array.isArray(a)) {
                for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
                return c
            }
            return Array.from(a)
        },
        ib = V.FontAwesomeConfig || {};
    M && "function" === typeof M.querySelector && [
        ["data-family-prefix",
            "familyPrefix"
        ],
        ["data-replacement-class", "replacementClass"],
        ["data-auto-replace-svg", "autoReplaceSvg"],
        ["data-auto-add-css", "autoAddCss"],
        ["data-auto-a11y", "autoA11y"],
        ["data-search-pseudo-elements", "searchPseudoElements"],
        ["data-observe-mutations", "observeMutations"],
        ["data-keep-original-source", "keepOriginalSource"],
        ["data-measure-performance", "measurePerformance"],
        ["data-show-missing-icons", "showMissingIcons"]
    ].forEach(function(a) {
        var b = kc(a, 2);
        a = b[1];
        b = b[0];
        var c = M.querySelector("script[" + b +
            "]");
        b = c ? c.getAttribute(b) : void 0;
        b = "" === b ? !0 : "false" === b ? !1 : "true" === b ? !0 : b;
        void 0 !== b && null !== b && (ib[a] = b)
    });
    var Ja = D({
        familyPrefix: "fa",
        replacementClass: "svg-inline--fa",
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
    }, ib);
    Ja.autoReplaceSvg || (Ja.observeMutations = !1);
    var B = D({}, Ja);
    V.FontAwesomeConfig = B;
    var aa = V || {};
    aa.___FONT_AWESOME___ || (aa.___FONT_AWESOME___ = {});
    aa.___FONT_AWESOME___.styles ||
        (aa.___FONT_AWESOME___.styles = {});
    aa.___FONT_AWESOME___.hooks || (aa.___FONT_AWESOME___.hooks = {});
    aa.___FONT_AWESOME___.shims || (aa.___FONT_AWESOME___.shims = []);
    var X = aa.___FONT_AWESOME___,
        Ya = [],
        Tb = function K() {
            M.removeEventListener("DOMContentLoaded", K);
            zb = 1;
            Ya.map(function(a) {
                return a()
            })
        },
        zb = !1;
    ra && ((zb = (M.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(M.readyState)) || M.addEventListener("DOMContentLoaded", Tb));
    var Ub = function(a) {
            ra && (zb ? setTimeout(a, 0) : Ya.push(a))
        },
        ma = {
            size: 16,
            x: 0,
            y: 0,
            rotate: 0,
            flipX: !1,
            flipY: !1
        },
        Ab = {
            x: 0,
            y: 0,
            width: "100%",
            height: "100%"
        },
        ic = function(a) {
            var b = a.children,
                c = a.attributes,
                d = a.main,
                f = a.mask,
                g = d.icon,
                l = f.icon;
            d = k({
                transform: a.transform,
                containerWidth: f.width,
                iconWidth: d.width
            });
            a = {
                tag: "rect",
                attributes: D({}, Ab, {
                    fill: "white"
                })
            };
            g = {
                tag: "g",
                attributes: D({}, d.inner),
                children: [{
                    tag: "path",
                    attributes: D({}, g.attributes, d.path, {
                        fill: "black"
                    })
                }]
            };
            f = {
                tag: "g",
                attributes: D({}, d.outer),
                children: [g]
            };
            g = "mask-" + m();
            d = "clip-" + m();
            a = {
                tag: "mask",
                attributes: D({}, Ab, {
                    id: g,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [a, f]
            };
            b.push({
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: d
                    },
                    children: [l]
                }, a]
            }, {
                tag: "rect",
                attributes: D({
                    fill: "currentColor",
                    "clip-path": "url(#" + d + ")",
                    mask: "url(#" + g + ")"
                }, Ab)
            });
            return {
                children: b,
                attributes: c
            }
        },
        O = function(a) {
            var b = a.children,
                c = a.attributes,
                g = a.main,
                l = a.transform;
            a = d(a.styles);
            0 < a.length && (c.style = a);
            f(l) ? (l = k({
                transform: l,
                containerWidth: g.width,
                iconWidth: g.width
            }), b.push({
                tag: "g",
                attributes: D({}, l.outer),
                children: [{
                    tag: "g",
                    attributes: D({}, l.inner),
                    children: [{
                        tag: g.icon.tag,
                        children: g.icon.children,
                        attributes: D({}, g.icon.attributes, l.path)
                    }]
                }]
            })) : b.push(g.icon);
            return {
                children: b,
                attributes: c
            }
        },
        mc = function(a) {
            var b = a.children,
                c = a.main,
                g = a.mask,
                l = a.attributes,
                k = a.styles;
            a = a.transform;
            f(a) && c.found && !g.found && (l.style = d(D({}, k, {
                "transform-origin": c.width / c.height / 2 + a.x / 16 + "em " + (.5 + a.y / 16) + "em"
            })));
            return [{
                tag: "svg",
                attributes: l,
                children: b
            }]
        },
        Bb = function(a) {
            var b = a.prefix,
                c = a.iconName,
                d = a.children,
                f =
                a.symbol;
            return [{
                tag: "svg",
                attributes: {
                    style: "display: none;"
                },
                children: [{
                    tag: "symbol",
                    attributes: D({}, a.attributes, {
                        id: !0 === f ? b + "-" + B.familyPrefix + "-" + c : f
                    }),
                    children: d
                }]
            }]
        },
        Cb = function() {},
        kb = B.measurePerformance && Ia && Ia.mark && Ia.measure ? Ia : {
            mark: Cb,
            measure: Cb
        },
        Wb = function(a) {
            kb.mark('FA "5.5.0" ' + a + " ends");
            kb.measure('FA "5.5.0" ' + a, 'FA "5.5.0" ' + a + " begins", 'FA "5.5.0" ' + a + " ends")
        },
        lb = {
            begin: function(a) {
                kb.mark('FA "5.5.0" ' + a + " begins");
                return function() {
                    return Wb(a)
                }
            },
            end: Wb
        };
    "use strict";
    var Xb = function(a, b) {
        return function(c, d, f, g) {
            return a.call(b, c, d, f, g)
        }
    };
    "use strict";
    var mb = function(a, b, c, d) {
            var f = Object.keys(a),
                g = f.length;
            b = void 0 !== d ? Xb(b, d) : b;
            if (void 0 === c) {
                d = 1;
                var l = a[f[0]]
            } else d = 0, l = c;
            for (; d < g; d++) c = f[d], l = b(l, a[c], c, a);
            return l
        },
        Yb = X.styles,
        na = X.shims,
        La = {},
        Zb = {},
        $b = {},
        nb = function() {
            var a = function(a) {
                return mb(Yb, function(b, c, d) {
                    b[d] = mb(c, a, {});
                    return b
                }, {})
            };
            La = a(function(a, b, c) {
                a[b[3]] = c;
                return a
            });
            Zb = a(function(a, b, c) {
                b = b[2];
                a[c] = c;
                b.forEach(function(b) {
                    a[b] = c
                });
                return a
            });
            var b = "far" in Yb;
            $b = mb(na, function(a, c) {
                var d = c[0],
                    f = c[1],
                    g = c[2];
                "far" !== f || b || (f = "fas");
                a[d] = {
                    prefix: f,
                    iconName: g
                };
                return a
            }, {})
        };
    nb();
    var ac = X.styles,
        Db = function() {
            return {
                prefix: null,
                iconName: null,
                rest: []
            }
        },
        nc = function() {},
        Da = {
            replace: function(a) {
                var b = a[0];
                a = a[1].map(function(a) {
                    return x(a)
                }).join("\n");
                if (b.parentNode && b.outerHTML) b.outerHTML = a + (B.keepOriginalSource && "svg" !== b.tagName.toLowerCase() ? "\x3c!-- " + b.outerHTML + " --\x3e" : "");
                else if (b.parentNode) {
                    var c = document.createElement("span");
                    b.parentNode.replaceChild(c, b);
                    c.outerHTML = a
                }
            },
            nest: function(b) {
                var c = b[0],
                    d = b[1];
                if (~a(c).indexOf(B.replacementClass)) return Da.replace(b);
                var f = new RegExp(B.familyPrefix + "-.*");
                delete d[0].attributes.style;
                b = d[0].attributes["class"].split(" ").reduce(function(a, b) {
                    b === B.replacementClass || b.match(f) ? a.toSvg.push(b) : a.toNode.push(b);
                    return a
                }, {
                    toNode: [],
                    toSvg: []
                });
                d[0].attributes["class"] = b.toSvg.join(" ");
                d = d.map(function(a) {
                    return x(a)
                }).join("\n");
                c.setAttribute("class", b.toNode.join(" "));
                c.setAttribute("data-fa-i2svg",
                    "");
                c.innerHTML = d
            }
        },
        Eb = !1,
        ob = null,
        Fb = function(a) {
            a = a.getAttribute("style");
            var b = [];
            a && (b = a.split(";").reduce(function(a, b) {
                var c = b.split(":"),
                    d = c[0];
                c = c.slice(1);
                d && 0 < c.length && (a[d] = c.join(":").trim());
                return a
            }, {}));
            return b
        },
        bc = function(a) {
            var b = {
                size: 16,
                x: 0,
                y: 0,
                flipX: !1,
                flipY: !1,
                rotate: 0
            };
            return a ? a.toLowerCase().split(" ").reduce(function(a, b) {
                var c = b.toLowerCase().split("-"),
                    d = c[0];
                c = c.slice(1).join("-");
                if (d && "h" === c) return a.flipX = !0, a;
                if (d && "v" === c) return a.flipY = !0, a;
                c = parseFloat(c);
                if (isNaN(c)) return a;
                switch (d) {
                    case "grow":
                        a.size += c;
                        break;
                    case "shrink":
                        a.size -= c;
                        break;
                    case "left":
                        a.x -= c;
                        break;
                    case "right":
                        a.x += c;
                        break;
                    case "up":
                        a.y -= c;
                        break;
                    case "down":
                        a.y += c;
                        break;
                    case "rotate":
                        a.rotate += c
                }
                return a
            }, b) : b
        },
        Cc = function(a) {
            var b = c(a.attributes).reduce(function(a, b) {
                "class" !== a.name && "style" !== a.name && (a[b.name] = b.value);
                return a
            }, {});
            a = a.getAttribute("title");
            B.autoA11y && (a ? b["aria-labelledby"] = B.replacementClass + "-title-" + m() : b["aria-hidden"] = "true");
            return b
        },
        oc = function(a) {
            return (a = a.getAttribute("data-fa-mask")) ?
                n(a.split(" ").map(function(a) {
                    return a.trim()
                })) : Db()
        },
        pb = {
            iconName: null,
            title: null,
            prefix: null,
            transform: ma,
            symbol: !1,
            mask: null,
            extra: {
                classes: [],
                styles: {},
                attributes: {}
            }
        };
    G.prototype = Object.create(Error.prototype);
    G.prototype.constructor = G;
    var qb = {
            fill: "currentColor"
        },
        Gb = {
            attributeType: "XML",
            repeatCount: "indefinite",
            dur: "2s"
        },
        pc = {
            tag: "path",
            attributes: D({}, qb, {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
            })
        },
        Hb = D({}, Gb, {
            attributeName: "opacity"
        }),
        Ea = {
            tag: "circle",
            attributes: D({}, qb, {
                cx: "256",
                cy: "364",
                r: "28"
            }),
            children: [{
                tag: "animate",
                attributes: D({}, Gb, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                })
            }, {
                tag: "animate",
                attributes: D({}, Hb, {
                    values: "1;0;1;1;0;1;"
                })
            }]
        },
        Za = {
            tag: "path",
            attributes: D({}, qb, {
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
            }),
            children: [{
                tag: "animate",
                attributes: D({}, Hb, {
                    values: "1;0;0;0;0;1;"
                })
            }]
        },
        cb = {
            tag: "path",
            attributes: D({}, qb, {
                opacity: "0",
                d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
            }),
            children: [{
                tag: "animate",
                attributes: D({}, Hb, {
                    values: "0;0;1;1;0;0;"
                })
            }]
        },
        Ib = {
            tag: "g",
            children: [pc, Ea, Za, cb]
        },
        sa = X.styles,
        cc = /Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/,
        Ma = {
            Solid: "fas",
            Regular: "far",
            Light: "fal",
            Brands: "fab"
        },
        db = {
            900: "fas",
            400: "far",
            300: "fal"
        },
        fa = function() {
            var a = B.familyPrefix,
                b = B.replacementClass,
                c = "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}";
            if ("fa" !== a || "svg-inline--fa" !== b) {
                var d = RegExp("\\.svg-inline--fa", "g");
                c = c.replace(RegExp("\\.fa\\-", "g"), "." + a + "-").replace(d, "." + b)
            }
            return c
        },
        Fa = new(function() {
            function a() {
                if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
                this.definitions = {}
            }
            Qb(a, [{
                key: "add",
                value: function() {
                    for (var a = this, b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                    var f = c.reduce(this._pullDefinitions, {});
                    Object.keys(f).forEach(function(b) {
                        a.definitions[b] = D({}, a.definitions[b] || {}, f[b]);
                        N(b, f[b]);
                        nb()
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    this.definitions = {}
                }
            }, {
                key: "_pullDefinitions",
                value: function(a, b) {
                    var c = b.prefix && b.iconName && b.icon ? {
                        0: b
                    } : b;
                    Object.keys(c).map(function(b) {
                        var d = c[b];
                        b = d.prefix;
                        var f = d.iconName;
                        d = d.icon;
                        a[b] || (a[b] = {});
                        a[b][f] = d
                    });
                    return a
                }
            }]);
            return a
        }()),
        oa = !1,
        Na = {
            i2svg: function() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                if (ra) {
                    T();
                    var b = a.node;
                    b = void 0 === b ? M : b;
                    a = a.callback;
                    a = void 0 === a ? function() {} : a;
                    B.searchPseudoElements && y(b);
                    la(b, a)
                }
            },
            css: fa,
            insertCss: function() {
                oa || (h(fa()), oa = !0)
            },
            watch: function() {
                var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    b = a.autoReplaceSvgRoot,
                    c = a.observeMutationsRoot;
                !1 === B.autoReplaceSvg && (B.autoReplaceSvg = !0);
                B.observeMutations = !0;
                Ub(function() {
                    ba({
                        autoReplaceSvgRoot: b
                    });
                    z({
                        treeCallback: la,
                        nodeCallback: H,
                        pseudoElementsCallback: y,
                        observeMutationsRoot: c
                    })
                })
            }
        },
        pa = function(a) {
            return function(b) {
                var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    d = (b || {}).icon ? b : ha(b || {}),
                    f = c.mask;
                f && (f = (f || {}).icon ? f : ha(f || {}));
                return a(d, D({}, c, {
                    mask: f
                }))
            }
        }(function(a) {
            var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                c = b.transform,
                d = void 0 === c ? ma : c;
            c = b.symbol;
            var f = void 0 === c ? !1 : c;
            c = b.mask;
            var g = void 0 === c ? null : c;
            c = b.title;
            var k = void 0 === c ? null : c;
            c = b.classes;
            var q = void 0 === c ? [] : c;
            c = b.attributes;
            var h = void 0 === c ? {} : c;
            b = b.styles;
            var n = void 0 === b ? {} : b;
            if (a) {
                var C = a.prefix,
                    M = a.iconName,
                    r = a.icon;
                return w(D({
                    type: "icon"
                }, a), function() {
                    T();
                    B.autoA11y && (k ? h["aria-labelledby"] =
                        B.replacementClass + "-title-" + m() : h["aria-hidden"] = "true");
                    return l({
                        icons: {
                            main: R(r),
                            mask: g ? R(g.icon) : {
                                found: !1,
                                width: null,
                                height: null,
                                icon: {}
                            }
                        },
                        prefix: C,
                        iconName: M,
                        transform: D({}, ma, d),
                        symbol: f,
                        title: k,
                        extra: {
                            attributes: h,
                            styles: n,
                            classes: q
                        }
                    })
                })
            }
        }),
        ja = {
            noAuto: function() {
                B.autoReplaceSvg = !1;
                B.observeMutations = !1;
                ob && ob.disconnect()
            },
            config: B,
            dom: Na,
            library: Fa,
            parse: {
                transform: function(a) {
                    return bc(a)
                }
            },
            findIconDefinition: ha,
            icon: pa,
            text: function(a) {
                var b = 1 < arguments.length && void 0 !== arguments[1] ?
                    arguments[1] : {},
                    c = b.transform,
                    d = void 0 === c ? ma : c;
                c = b.title;
                var f = void 0 === c ? null : c;
                c = b.classes;
                var g = void 0 === c ? [] : c;
                c = b.attributes;
                var l = void 0 === c ? {} : c;
                b = b.styles;
                var k = void 0 === b ? {} : b;
                return w({
                    type: "text",
                    content: a
                }, function() {
                    T();
                    return q({
                        content: a,
                        transform: D({}, ma, d),
                        title: f,
                        extra: {
                            attributes: l,
                            styles: k,
                            classes: [B.familyPrefix + "-layers-text"].concat(yb(g))
                        }
                    })
                })
            },
            counter: function(a) {
                var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    c = b.title,
                    f = void 0 === c ? null : c;
                c = b.classes;
                var g =
                    void 0 === c ? [] : c;
                c = b.attributes;
                var l = void 0 === c ? {} : c;
                b = b.styles;
                var k = void 0 === b ? {} : b;
                return w({
                    type: "counter",
                    content: a
                }, function() {
                    T();
                    var b = a.toString(),
                        c = [B.familyPrefix + "-layers-counter"].concat(yb(g));
                    c = D({}, l, f ? {
                        title: f
                    } : {}, {
                        "class": c.join(" ")
                    });
                    var q = d(k);
                    0 < q.length && (c.style = q);
                    q = [];
                    q.push({
                        tag: "span",
                        attributes: c,
                        children: [b]
                    });
                    f && q.push({
                        tag: "span",
                        attributes: {
                            "class": "sr-only"
                        },
                        children: [f]
                    });
                    return q
                })
            },
            layer: function(a) {
                return w({
                    type: "layer"
                }, function() {
                    T();
                    var b = [];
                    a(function(a) {
                        Array.isArray(a) ?
                            a.map(function(a) {
                                b = b.concat(a["abstract"])
                            }) : b = b.concat(a["abstract"])
                    });
                    return [{
                        tag: "span",
                        attributes: {
                            "class": B.familyPrefix + "-layers"
                        },
                        children: b
                    }]
                })
            },
            toHtml: x
        },
        ba = function() {
            var a = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot;
            a = void 0 === a ? M : a;
            0 < Object.keys(X.styles).length && ra && B.autoReplaceSvg && ja.dom.i2svg({
                node: a
            })
        };
    try {
        Ta()
    } catch (K) {
        if (!wb) throw K;
    }
})();
(function(h) {
    var m = !1;
    "function" === typeof define && define.amd && (define(h), m = !0);
    "object" === typeof exports && (module.exports = h(), m = !0);
    if (!m) {
        var c = window.Cookies,
            a = window.Cookies = h();
        a.noConflict = function() {
            window.Cookies = c;
            return a
        }
    }
})(function() {
    function h() {
        for (var c = 0, a = {}; c < arguments.length; c++) {
            var b = arguments[c],
                g;
            for (g in b) a[g] = b[g]
        }
        return a
    }

    function m(c) {
        function a(b, g, d) {
            if ("undefined" !== typeof document) {
                if (1 < arguments.length) {
                    d = h({
                        path: "/"
                    }, a.defaults, d);
                    if ("number" === typeof d.expires) {
                        var f =
                            new Date;
                        f.setMilliseconds(f.getMilliseconds() + 864E5 * d.expires);
                        d.expires = f
                    }
                    d.expires = d.expires ? d.expires.toUTCString() : "";
                    try {
                        var k = JSON.stringify(g);
                        /^[\{\[]/.test(k) && (g = k)
                    } catch (x) {}
                    g = c.write ? c.write(g, b) : encodeURIComponent(String(g)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                    b = encodeURIComponent(String(b));
                    b = b.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                    b = b.replace(/[\(\)]/g, escape);
                    k = "";
                    for (var l in d) d[l] && (k += "; " + l, !0 !== d[l] && (k += "=" +
                        d[l]));
                    return document.cookie = b + "=" + g + k
                }
                b || (k = {});
                l = document.cookie ? document.cookie.split("; ") : [];
                for (var q = /(%[0-9A-Z]{2})+/g, m = 0; m < l.length; m++) {
                    var n = l[m].split("="),
                        r = n.slice(1).join("=");
                    this.json || '"' !== r.charAt(0) || (r = r.slice(1, -1));
                    try {
                        f = n[0].replace(q, decodeURIComponent);
                        r = c.read ? c.read(r, f) : c(r, f) || r.replace(q, decodeURIComponent);
                        if (this.json) try {
                            r = JSON.parse(r)
                        } catch (x) {}
                        if (b === f) {
                            k = r;
                            break
                        }
                        b || (k[f] = r)
                    } catch (x) {}
                }
                return k
            }
        }
        a.set = a;
        a.get = function(b) {
            return a.call(a, b)
        };
        a.getJSON = function() {
            return a.apply({
                    json: !0
                },
                [].slice.call(arguments))
        };
        a.defaults = {};
        a.remove = function(b, c) {
            a(b, "", h(c, {
                expires: -1
            }))
        };
        a.withConverter = m;
        return a
    }
    return m(function() {})
});
(function() {
    var h = function(a, c) {
        return function() {
            return a.apply(c, arguments)
        }
    };
    var m = function() {
        function a() {
            this.translate = h(this.translate, this);
            this.data = {
                values: {},
                contexts: []
            };
            this.globalContext = {}
        }
        a.prototype.translate = function(a, b, c, k, l) {
            var d;
            null == l && (l = this.globalContext);
            var f = function(a) {
                var b = typeof a;
                return "function" === b || "object" === b && !!a
            };
            if (f(b)) {
                var g = d = null;
                l = c || this.globalContext
            } else "number" === typeof b ? (d = null, g = b, b = c, l = k || this.globalContext) : (d = b, "number" === typeof c ? (g = c, b =
                k) : (g = null, b = c, l = k || this.globalContext));
            return f(a) ? (f(a.i18n) && (a = a.i18n), this.translateHash(a, l)) : this.translateText(a, g, b, l, d)
        };
        a.prototype.add = function(a) {
            if (null != a.values) {
                var b = a.values;
                for (l in b) {
                    var c = b[l];
                    this.data.values[l] = c
                }
            }
            if (null != a.contexts) {
                b = a.contexts;
                var g = [];
                var l = 0;
                for (c = b.length; l < c; l++) a = b[l], g.push(this.data.contexts.push(a));
                return g
            }
        };
        a.prototype.setContext = function(a, b) {
            return this.globalContext[a] = b
        };
        a.prototype.clearContext = function(a) {
            return this.lobalContext[a] =
                null
        };
        a.prototype.reset = function() {
            this.data = {
                values: {},
                contexts: []
            };
            return this.globalContext = {}
        };
        a.prototype.resetData = function() {
            return this.data = {
                values: {},
                contexts: []
            }
        };
        a.prototype.resetContext = function() {
            return this.globalContext = {}
        };
        a.prototype.translateHash = function(a, b) {
            var c;
            for (c in a) {
                var d = a[c];
                "string" === typeof d && (a[c] = this.translateText(d, null, null, b))
            }
            return a
        };
        a.prototype.translateText = function(a, b, c, k, l) {
            var d;
            null == k && (k = this.globalContext);
            if (null == this.data) return this.useOriginalText(l ||
                a, b, c);
            k = this.getContextData(this.data, k);
            null != k && (d = this.findTranslation(a, b, c, k.values, l));
            null == d && (d = this.findTranslation(a, b, c, this.data.values, l));
            return null == d ? this.useOriginalText(l || a, b, c) : d
        };
        a.prototype.findTranslation = function(a, b, c, k) {
            var d;
            k = k[a];
            if (null == k) return null;
            if (null == b) {
                if ("string" === typeof k) return this.applyFormatting(k, b, c)
            } else if (k instanceof Array || k.length) {
                var f = 0;
                for (d = k.length; f < d; f++)
                    if (a = k[f], (b >= a[0] || null === a[0]) && (b <= a[1] || null === a[1])) return a = this.applyFormatting(a[2].replace("-%n",
                        String(-b)), b, c), this.applyFormatting(a.replace("%n", String(b)), b, c)
            }
            return null
        };
        a.prototype.getContextData = function(a, b) {
            var c, d;
            if (null == a.contexts) return null;
            var g = a.contexts;
            var q = 0;
            for (d = g.length; q < d; q++) {
                var h = g[q];
                var m = !0;
                var r = h.matches;
                for (c in r) {
                    var x = r[c];
                    m = m && x === b[c]
                }
                if (m) return h
            }
            return null
        };
        a.prototype.useOriginalText = function(a, b, c) {
            return null == b ? this.applyFormatting(a, b, c) : this.applyFormatting(a.replace("%n", String(b)), b, c)
        };
        a.prototype.applyFormatting = function(a, b, c) {
            for (var d in c) b =
                new RegExp("%{" + d + "}", "g"), a = a.replace(b, c[d]);
            return a
        };
        return a
    }();
    var c = new m;
    var a = c.translate;
    a.translator = c;
    a.create = function(b) {
        var c = new m;
        null != b && c.add(b);
        c.translate.create = a.create;
        return c.translate
    };
    "undefined" !== typeof module && null !== module && (module.exports = a) || (this.i18n = a)
}).call(this);
! function(h, m) {
    "function" == typeof define && define.amd ? define(m) : "object" == typeof exports ? module.exports = m() : h.baguetteBox = m()
}(this, function() {
    var h, m, c;

    function a(a) {
        v.hasOwnProperty(a) && ([].forEach.call(v[a].galleries, function(a) {
            [].forEach.call(a, function(a) {
                t(a.imageElement, "click", a.eventHandler)
            });
            N === a && (N = [])
        }), delete v[a])
    }

    function b(a) {
        switch (a.keyCode) {
            case 37:
                q();
                break;
            case 39:
                l();
                break;
            case 27:
                f();
                break;
            case 36:
                a && a.preventDefault();
                a = C(0);
                !a;
                break;
            case 35:
                a && a.preventDefault(), a = C(N.length -
                    1), !a
        }
    }

    function g(a, b) {
        if (N !== a) {
            N = a;
            var c = b;
            c || (c = {});
            for (var d in la) y[d] = la[d], "undefined" != typeof c[d] && (y[d] = c[d]);
            F.style.transition = F.style.webkitTransition = "fadeIn" === y.animation ? "opacity .4s ease" : "slideIn" === y.animation ? "" : "none";
            "auto" === y.buttons && ("ontouchstart" in window || 1 === N.length) && (y.buttons = !1);
            G.style.display = S.style.display = y.buttons ? "" : "none";
            try {
                z.style.backgroundColor = y.overlayBackgroundColor
            } catch (xb) {}
            for (; F.firstChild;) F.removeChild(F.firstChild);
            d = [];
            for (var f = [], g = ia.length =
                    0; g < a.length; g++)(c = document.createElement("div")).className = "full-image", c.id = "baguette-img-" + g, ia.push(c), d.push("baguetteBox-figure-" + g), f.push("baguetteBox-figcaption-" + g), F.appendChild(ia[g]);
            z.setAttribute("aria-labelledby", d.join(" "));
            z.setAttribute("aria-describedby", f.join(" "))
        }
    }

    function d(a) {
        y.noScrollbars && (document.documentElement.style.overflowY = "hidden", document.body.style.overflowY = "scroll");
        "block" !== z.style.display && (E(document, "keydown", b), h = 0, c = m = null, w = void 0, k(R = a, function() {
            x(R);
            A(R)
        }), r(), z.style.display = "block", y.fullScreen && (z.requestFullscreen ? z.requestFullscreen() : z.webkitRequestFullscreen ? z.webkitRequestFullscreen() : z.mozRequestFullScreen && z.mozRequestFullScreen()), setTimeout(function() {
            z.className = "visible";
            y.bodyClass && document.body.classList && document.body.classList.add(y.bodyClass);
            y.afterShow && y.afterShow()
        }, 50), y.onChange && y.onChange(R, ia.length), da = document.activeElement, y.buttons ? G.focus() : L.focus(), T = !0)
    }

    function f() {
        y.noScrollbars && (document.documentElement.style.overflowY =
            "auto", document.body.style.overflowY = "auto");
        "none" !== z.style.display && (t(document, "keydown", b), z.className = "", setTimeout(function() {
            z.style.display = "none";
            document.fullscreen && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen());
            y.bodyClass && document.body.classList && document.body.classList.remove(y.bodyClass);
            y.afterHide && y.afterHide();
            da && da.focus();
            T = !1
        }, 500))
    }

    function k(a,
        b) {
        var c = ia[a],
            d = N[a];
        if (void 0 !== c && void 0 !== d)
            if (c.getElementsByTagName("img")[0]) b && b();
            else {
                var f = d.imageElement;
                d = f.getElementsByTagName("img")[0];
                var g = "function" == typeof y.captions ? y.captions.call(N, f) : f.getAttribute("data-caption") || f.title;
                f = function(a) {
                    var b = a.href;
                    if (a.dataset) {
                        var c = [];
                        for (d in a.dataset) "at-" !== d.substring(0, 3) || isNaN(d.substring(3)) || (c[d.replace("at-", "")] = a.dataset[d]);
                        a = Object.keys(c).sort(function(a, b) {
                            return parseInt(a, 10) < parseInt(b, 10) ? -1 : 1
                        });
                        var d = window.innerWidth *
                            window.devicePixelRatio;
                        for (var f = 0; f < a.length - 1 && a[f] < d;) f++;
                        b = c[a[f]] || b
                    }
                    return b
                }(f);
                var l = document.createElement("figure");
                if (l.id = "baguetteBox-figure-" + a, l.innerHTML = '<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>', y.captions && g) {
                    var k = document.createElement("figcaption");
                    k.id = "baguetteBox-figcaption-" + a;
                    k.innerHTML = g;
                    l.appendChild(k)
                }
                c.appendChild(l);
                c = document.createElement("img");
                c.onload = function() {
                    var c =
                        document.querySelector("#baguette-img-" + a + " .baguetteBox-spinner");
                    l.removeChild(c);
                    !y.async && b && b()
                };
                c.setAttribute("src", f);
                c.alt = d && d.alt || "";
                y.titleTag && g && (c.title = g);
                l.appendChild(c);
                y.async && b && b()
            }
    }

    function l() {
        return C(R + 1)
    }

    function q() {
        return C(R - 1)
    }

    function C(a, b) {
        return !T && 0 <= a && a < b.length ? (g(b, y), d(a), !0) : 0 > a ? (y.animation && n("left"), !1) : a >= ia.length ? (y.animation && n("right"), !1) : (k(R = a, function() {
            x(R);
            A(R)
        }), r(), y.onChange && y.onChange(R, ia.length), !0)
    }

    function n(a) {
        F.className = "bounce-from-" +
            a;
        setTimeout(function() {
            F.className = ""
        }, 400)
    }

    function r() {
        var a = 100 * -R + "%";
        "fadeIn" === y.animation ? (F.style.opacity = 0, setTimeout(function() {
            H.transforms ? F.style.transform = F.style.webkitTransform = "translate3d(" + a + ",0,0)" : F.style.left = a;
            F.style.opacity = 1
        }, 400)) : H.transforms ? F.style.transform = F.style.webkitTransform = "translate3d(" + a + ",0,0)" : F.style.left = a
    }

    function x(a) {
        a - R >= y.preload || k(a + 1, function() {
            x(a + 1)
        })
    }

    function A(a) {
        R - a >= y.preload || k(a - 1, function() {
            A(a - 1)
        })
    }

    function E(a, b, c, d) {
        a.addEventListener ?
            a.addEventListener(b, c, d) : a.attachEvent("on" + b, function(a) {
                (a = a || window.event).target = a.target || a.srcElement;
                c(a)
            })
    }

    function t(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent("on" + b, c)
    }
    var z, F, G, S, L, y = {},
        la = {
            captions: !0,
            buttons: "auto",
            fullScreen: !1,
            noScrollbars: !1,
            bodyClass: "baguetteBox-open",
            titleTag: !1,
            async: !1,
            preload: 2,
            animation: "slideIn",
            afterShow: null,
            afterHide: null,
            onChange: null,
            overlayBackgroundColor: "rgba(0,0,0,.8)"
        },
        H = {},
        N = [],
        R = 0,
        T = !1;
    var w = c = m = h = void 0;
    var ha = !1,
        Ta = /.+\.(gif|jpe?g|png|webp)/i,
        v = {},
        ia = [],
        da = null,
        J = function(a) {
            -1 !== a.target.id.indexOf("baguette-img") && f()
        },
        U = function(a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            q()
        },
        ea = function(a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            l()
        },
        ka = function(a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            f()
        },
        V = function(a) {
            h++;
            1 < h && (w = !0);
            m = a.changedTouches[0].pageX;
            c = a.changedTouches[0].pageY
        },
        M = function(a) {
            ha || w || (a.preventDefault ? a.preventDefault() : a.returnValue = !1,
                a = a.touches[0] || a.changedTouches[0], 40 < a.pageX - m ? (ha = !0, q()) : -40 > a.pageX - m ? (ha = !0, l()) : 100 < c - a.pageY && f())
        },
        Aa = function() {
            h--;
            0 >= h && (w = !1);
            ha = !1
        },
        Ia = function() {
            Aa()
        },
        hb = function(a) {
            "block" === z.style.display && z.contains && !z.contains(a.target) && (a.stopPropagation(), y.buttons ? G.focus() : L.focus())
        };
    return [].forEach || (Array.prototype.forEach = function(a, b) {
        for (var c = 0; c < this.length; c++) a.call(b, this[c], c, this)
    }), [].filter || (Array.prototype.filter = function(a, b, c, d, f) {
        c = this;
        d = [];
        for (f = 0; f < c.length; f++) a.call(b,
            c[f], f, c) && d.push(c[f]);
        return d
    }), {
        run: function(b, c) {
            return H.transforms = function() {
                    var a = document.createElement("div");
                    return "undefined" != typeof a.style.perspective || "undefined" != typeof a.style.webkitPerspective
                }(), H.svg = function() {
                    var a = document.createElement("div");
                    return a.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (a.firstChild && a.firstChild.namespaceURI)
                }(), H.passiveEvents = function() {
                    var a = !1;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                a = !0
                            }
                        });
                        window.addEventListener("test",
                            null, b)
                    } catch (Ua) {}
                    return a
                }(),
                function() {
                    if (z = document.getElementById("baguetteBox-overlay")) return F = document.getElementById("baguetteBox-slider"), G = document.getElementById("previous-button"), S = document.getElementById("next-button"), void(L = document.getElementById("close-button"));
                    (z = document.createElement("div")).setAttribute("role", "dialog");
                    z.id = "baguetteBox-overlay";
                    document.getElementsByTagName("body")[0].appendChild(z);
                    (F = document.createElement("div")).id = "baguetteBox-slider";
                    z.appendChild(F);
                    (G = document.createElement("button")).setAttribute("type", "button");
                    G.id = "previous-button";
                    G.setAttribute("aria-label", "Previous");
                    G.innerHTML = H.svg ? '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>' : "&lt;";
                    z.appendChild(G);
                    (S = document.createElement("button")).setAttribute("type", "button");
                    S.id = "next-button";
                    S.setAttribute("aria-label", "Next");
                    S.innerHTML = H.svg ? '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>' :
                        "&gt;";
                    z.appendChild(S);
                    (L = document.createElement("button")).setAttribute("type", "button");
                    L.id = "close-button";
                    L.setAttribute("aria-label", "Close");
                    L.innerHTML = H.svg ? '<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>' : "&times;";
                    z.appendChild(L);
                    G.className = S.className = L.className = "baguetteBox-button";
                    var a = H.passiveEvents ? {
                        passive: !0
                    } : null;
                    E(z, "click", J);
                    E(G, "click", U);
                    E(S, "click", ea);
                    E(L,
                        "click", ka);
                    E(F, "contextmenu", Ia);
                    E(z, "touchstart", V, a);
                    E(z, "touchmove", M, a);
                    E(z, "touchend", Aa);
                    E(document, "focus", hb, !0)
                }(), a(b),
                function(a, b) {
                    var c = document.querySelectorAll(a),
                        f = {
                            galleries: [],
                            nodeList: c
                        };
                    return v[a] = f, [].forEach.call(c, function(a) {
                        b && b.filter && (Ta = b.filter);
                        var c = [];
                        if (c = "A" === a.tagName ? [a] : a.getElementsByTagName("a"), 0 !== (c = [].filter.call(c, function(a) {
                                if (-1 === a.className.indexOf(b && b.ignoreClass)) return Ta.test(a.href)
                            })).length) {
                            var l = [];
                            [].forEach.call(c, function(a, c) {
                                var f =
                                    function(a) {
                                        a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                                        g(l, b);
                                        d(c)
                                    },
                                    k = {
                                        eventHandler: f,
                                        imageElement: a
                                    };
                                E(a, "click", f);
                                l.push(k)
                            });
                            f.galleries.push(l)
                        }
                    }), f.galleries
                }(b, c)
        },
        show: C,
        showNext: l,
        showPrevious: q,
        hide: f,
        destroy: function() {
            ! function() {
                var a = H.passiveEvents ? {
                    passive: !0
                } : null;
                t(z, "click", J);
                t(G, "click", U);
                t(S, "click", ea);
                t(L, "click", ka);
                t(F, "contextmenu", Ia);
                t(z, "touchstart", V, a);
                t(z, "touchmove", M, a);
                t(z, "touchend", Aa);
                t(document, "focus", hb, !0)
            }();
            (function() {
                for (var b in v) v.hasOwnProperty(b) &&
                    a(b)
            })();
            t(document, "keydown", b);
            document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay"));
            v = {};
            N = [];
            R = 0
        }
    }
});
(function() {
    var h = Handlebars.template,
        m = Handlebars.templates = Handlebars.templates || {};
    m.billing = h({
        1: function(c, a, b, g, d, f, k) {
            var l, q;
            g = null != a ? a : c.nullContext || {};
            var h = b.helperMissing,
                m = c.escapeExpression;
            return '        <option value="' + m((q = null != (q = b.id || (null != a ? a.id : a)) ? q : h, "function" === typeof q ? q.call(g, {
                name: "id",
                hash: {},
                data: d
            }) : q)) + '" ' + (null != (l = b["if"].call(g, (b.eq || a && a.eq || h).call(g, null != a ? a.id : a, null != (l = null != k[1] ? k[1].data : k[1]) ? l.country_code : l, {
                name: "eq",
                hash: {},
                data: d
            }), {
                name: "if",
                hash: {},
                fn: c.program(2, d, 0, f, k),
                inverse: c.noop,
                data: d
            })) ? l : "") + ">" + m((q = null != (q = b.text || (null != a ? a.text : a)) ? q : h, "function" === typeof q ? q.call(g, {
                name: "text",
                hash: {},
                data: d
            }) : q)) + "</option>\n"
        },
        2: function(c, a, b, g, d) {
            return " selected "
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d, f, k) {
            var l;
            g = c.lambda;
            var q = c.escapeExpression,
                h = null != a ? a : c.nullContext || {},
                m = b.helperMissing;
            return '<form id="billing_form">\n  <div class="form-element form-input">\n    <input id="field-first_name" class="form-element-field" name="first_name" value="' +
                q(g(null != (l = null != a ? a.data : a) ? l.first_name : l, a)) + '" type="text" required autofocus />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-first_name">' + q((b.I18n || a && a.I18n || m).call(h, "First name", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + q((b.I18n || a && a.I18n || m).call(h, "Your name", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + q((b.I18n || a && a.I18n || m).call(h, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-last_name" class="form-element-field" name="last_name" value="' +
                q(g(null != (l = null != a ? a.data : a) ? l.last_name : l, a)) + '" type="last_name" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-last_name">' + q((b.I18n || a && a.I18n || m).call(h, "Last name", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + q((b.I18n || a && a.I18n || m).call(h, "Your surname", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + q((b.I18n || a && a.I18n || m).call(h, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-phone" class="form-element-field" name="phone" value="' +
                q(g(null != (l = null != a ? a.data : a) ? l.phone : l, a)) + '" type="phone" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-phone">' + q((b.I18n || a && a.I18n || m).call(h, "Phone number", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + q((b.I18n || a && a.I18n || m).call(h, "Your contact phone number", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + q((b.I18n || a && a.I18n || m).call(h, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-company" class="form-element-field" name="company" value="' +
                q(g(null != (l = null != a ? a.data : a) ? l.company : l, a)) + '" type="company" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-company">' + q((b.I18n || a && a.I18n || m).call(h, "Company", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-vat" class="form-element-field" name="vat" value="' + q(g(null != (l = null != a ? a.data : a) ? l.vat : l, a)) + '" type="vat" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-vat">' +
                q((b.I18n || a && a.I18n || m).call(h, "VAT number", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-address" class="form-element-field" name="address" value="' + q(g(null != (l = null != a ? a.data : a) ? l.address : l, a)) + '" type="address" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-address">' + q((b.I18n || a && a.I18n || m).call(h, "Address", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' +
                q((b.I18n || a && a.I18n || m).call(h, "Your street and number", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + q((b.I18n || a && a.I18n || m).call(h, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-city" class="form-element-field" name="city" value="' + q(g(null != (l = null != a ? a.data : a) ? l.city : l, a)) + '" type="city" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-city">' + q((b.I18n || a && a.I18n || m).call(h,
                    "City", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + '</label>\n    <small class="form-element-hint">(' + q((b.I18n || a && a.I18n || m).call(h, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-postal_code" class="form-element-field" name="postal_code" value="' + q(g(null != (l = null != a ? a.data : a) ? l.postal_code : l, a)) + '" type="postal_code" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-postal_code">' +
                q((b.I18n || a && a.I18n || m).call(h, "Postal Code", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + q((b.I18n || a && a.I18n || m).call(h, "Postal code", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + q((b.I18n || a && a.I18n || m).call(h, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n  </div>\n\n  <div class="form-element form-select">\n    <select id="field-country_code" class="form-element-field -hasvalue" name="country_code" required>\n      <option value="" class="form-select-placeholder">' +
                q((b.I18n || a && a.I18n || m).call(h, "Select your country", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</option>\n" + (null != (l = b.each.call(h, null != (l = null != (l = null != a ? a.data : a) ? l.datatypes : l) ? l.countries : l, {
                    name: "each",
                    hash: {},
                    fn: c.program(1, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '    </select>\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-country">' + q((b.I18n || a && a.I18n || m).call(h, "Select your country", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + q((b.I18n || a && a.I18n || m).call(h,
                    "required", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + ')</label>\n  </div>\n\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + q((b.I18n || a && a.I18n || m).call(h, "Save", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' + q((b.I18n || a && a.I18n || m).call(h, "Cancel", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n  </div>\n</form>\n"
        },
        useData: !0,
        useDepths: !0
    });
    m.chargepoint = h({
        1: function(c, a, b, g, d) {
            return "is-active"
        },
        3: function(c, a, b, g, d) {
            return "is-half"
        },
        5: function(c, a, b, g, d) {
            var f;
            b = c.lambda;
            c = c.escapeExpression;
            return '      <span style="background:' + c(b(null != (f = null != a ? a.estado : a) ? f.color_code : f, a)) + ';">' + c(b(null != (f = null != a ? a.estado : a) ? f.estado_lang : f, a)) + "</span>\n"
        },
        7: function(c, a, b, g, d) {
            return "fas"
        },
        9: function(c, a, b, g, d) {
            return "far"
        },
        11: function(c, a, b, g, d) {
            return "disabled"
        },
        13: function(c, a, b, g, d) {
            var f;
            return '    <div class="chp-info-row pad-rl10">\n      ' + c.escapeExpression((f = null != (f = b.indicaciones ||
                (null != a ? a.indicaciones : a)) ? f : b.helperMissing, "function" === typeof f ? f.call(null != a ? a : c.nullContext || {}, {
                name: "indicaciones",
                hash: {},
                data: d
            }) : f)) + "\n    </div>\n"
        },
        15: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = c.escapeExpression,
                l = c.lambda;
            return "    <h3>" + k((b.I18n || a && a.I18n || b.helperMissing).call(g, "Gestionado por", {
                name: "I18n",
                hash: {},
                data: d
            })) + '</h3>\n    <div class="chp-info-block chp-info-gestor pad-rl10">\n' + (null != (f = b["if"].call(g, null != (f = null != a ? a.gestor : a) ? f.logo_url :
                f, {
                    name: "if",
                    hash: {},
                    fn: c.program(16, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + '        <a class="username" target="_blank" href="' + k(l(null != (f = null != a ? a.gestor : a) ? f.url : f, a)) + '">' + k(l(null != (f = null != a ? a.gestor : a) ? f.nombre : f, a)) + "</a>\n    </div>\n"
        },
        16: function(c, a, b, g, d) {
            var f;
            return '        <img alt="profile-image" class="avatar" src="' + c.escapeExpression(c.lambda(null != (f = null != a ? a.gestor : a) ? f.logo_url : f, a)) + '">\n'
        },
        18: function(c, a, b, g, d, f, k) {
            var l, h;
            g = null != a ? a : c.nullContext || {};
            var m = b.helperMissing,
                n = c.escapeExpression;
            return '      <div class="chp-plug-info">\n        <a class="' + n((h = null != (h = b.img_class || (null != a ? a.img_class : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "img_class",
                hash: {},
                data: d
            }) : h)) + ' plug-img"></a>\n        <div class="chp-plug-more-info">\n          <div class="plug-name-info">\n            <span class="plug-name">' + n((h = null != (h = b.nombre || (null != a ? a.nombre : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "nombre",
                hash: {},
                data: d
            }) : h)) + "</span>\n            " + (null != (l = b["if"].call(g,
                null != a ? a.kilovatios : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(19, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '\n          </div>\n          <div class="plug-status-info">\n' + (null != (l = b["if"].call(g, null != a ? a.estado : a, {
                name: "if",
                hash: {},
                fn: c.program(21, d, 0, f, k),
                inverse: c.noop,
                data: d
            })) ? l : "") + '          </div>\n        </div>\n        <div class="plug-auth-modes">\n' + (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, null != a ? a.authenticationRfid : a, "1", {
                name: "eq",
                hash: {},
                data: d
            }), {
                name: "if",
                hash: {},
                fn: c.program(24,
                    d, 0, f, k),
                inverse: c.noop,
                data: d
            })) ? l : "") + (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, null != a ? a.authenticationRemote : a, "1", {
                name: "eq",
                hash: {},
                data: d
            }), {
                name: "if",
                hash: {},
                fn: c.program(26, d, 0, f, k),
                inverse: c.noop,
                data: d
            })) ? l : "") + '        </div>\n        <div class="plug-price-info">\n' + (null != (l = b["if"].call(g, null != a ? a.price : a, {
                name: "if",
                hash: {},
                fn: c.program(28, d, 0, f, k),
                inverse: c.noop,
                data: d
            })) ? l : "") + "        </div>\n      </div>\n"
        },
        19: function(c, a, b, g, d) {
            var f;
            return '<span class="plug-speed">' +
                c.escapeExpression((f = null != (f = b.kilovatios || (null != a ? a.kilovatios : a)) ? f : b.helperMissing, "function" === typeof f ? f.call(null != a ? a : c.nullContext || {}, {
                    name: "kilovatios",
                    hash: {},
                    data: d
                }) : f)) + "kW</span>"
        },
        21: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing,
                l = c.escapeExpression;
            return '              <span class="status status-' + l((b.toLowerCase || a && a.toLowerCase || k).call(g, null != a ? a.estado : a, {
                name: "toLowerCase",
                hash: {},
                data: d
            })) + '">' + l((b.I18n || a && a.I18n || k).call(g, null != a ? a.estado :
                a, {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</span>\n              " + (null != (f = b["if"].call(g, null != a ? a.lastStatusChange : a, {
                name: "if",
                hash: {},
                fn: c.program(22, d, 0),
                inverse: c.noop,
                data: d
            })) ? f : "") + "\n"
        },
        22: function(c, a, b, g, d) {
            return " <i>" + c.escapeExpression((b.fromNow || a && a.fromNow || b.helperMissing).call(null != a ? a : c.nullContext || {}, null != a ? a.lastStatusChange : a, {
                name: "fromNow",
                hash: {},
                data: d
            })) + "</i> "
        },
        24: function(c, a, b, g, d) {
            return '            <a target="_blank" href="https://shop.electromaps.com/es/productos-electromaps/39-llavero-rfid.html" title="RFID TOKEN"><span class="sprfid"></span></a>\n'
        },
        26: function(c, a, b, g, d, f, k) {
            return '            <a target="_blank" href="' + c.escapeExpression(c.lambda(null != k[1] ? k[1].app_url : k[1], a)) + '" title="APP"><span class="spapp"></span></a>\n'
        },
        28: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            return '          <span class="plug-price-label">' + c.escapeExpression((b.I18n || a && a.I18n || b.helperMissing).call(g, "Prices", {
                name: "I18n",
                hash: {},
                data: d
            })) + ":</span>\n" + (null != (f = b.each.call(g, null != a ? a.price_elements : a, {
                name: "each",
                hash: {},
                fn: c.program(29, d, 0),
                inverse: c.noop,
                data: d
            })) ? f : "")
        },
        29: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '          <div class="plug-price-element">\n            <div class="plug-price-component">' + c((f = null != (f = b.components || (null != a ? a.components : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "components",
                hash: {},
                data: d
            }) : f)) + '</div>\n            <div class="plug-price-restriction">' + c((f = null != (f = b.restrictions || (null != a ? a.restrictions : a)) ? f : k, "function" === typeof f ?
                f.call(g, {
                    name: "restrictions",
                    hash: {},
                    data: d
                }) : f)) + "</div>\n          </div>\n"
        },
        31: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            return "    <h3>" + c.escapeExpression((b.I18n || a && a.I18n || b.helperMissing).call(g, "Prices", {
                name: "I18n",
                hash: {},
                data: d
            })) + '</h3>\n    <div class="chp-info-block pad-rl10">\n' + (null != (f = b["if"].call(g, null != a ? a.precio_estacionamiento : a, {
                name: "if",
                hash: {},
                fn: c.program(32, d, 0),
                inverse: c.noop,
                data: d
            })) ? f : "") + (null != (f = b["if"].call(g, null != a ? a.precio_carga : a, {
                name: "if",
                hash: {},
                fn: c.program(34, d, 0),
                inverse: c.noop,
                data: d
            })) ? f : "") + "    </div>\n"
        },
        32: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '        <div class="chp-info-row slim">\n          <label>' + c((b.I18n || a && a.I18n || k).call(g, "Parking", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</label>\n          <p>" + c((f = null != (f = b.precio_estacionamiento || (null != a ? a.precio_estacionamiento : a)) ? f : k, "function" === typeof f ? f.call(g, {
                    name: "precio_estacionamiento",
                    hash: {},
                    data: d
                }) :
                f)) + "</p>\n        </div>\n"
        },
        34: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '        <div class="chp-info-row slim">\n          <label>' + c((b.I18n || a && a.I18n || k).call(g, "Charge", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</label>\n          <p>" + c((f = null != (f = b.precio_carga || (null != a ? a.precio_carga : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "precio_carga",
                hash: {},
                data: d
            }) : f)) + "</p>\n        </div>\n"
        },
        36: function(c, a, b, g, d) {
            var f;
            return '      <div class="chp-info-row">' +
                c.escapeExpression((f = null != (f = b.funcionamiento || (null != a ? a.funcionamiento : a)) ? f : b.helperMissing, "function" === typeof f ? f.call(null != a ? a : c.nullContext || {}, {
                    name: "funcionamiento",
                    hash: {},
                    data: d
                }) : f)) + "</div>\n"
        },
        38: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '      <div class="chp-info-row slim">\n        <label>' + c((b.I18n || a && a.I18n || k).call(g, "Cables and adapters", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</label>\n        <p>" + c((f = null != (f = b.cables ||
                (null != a ? a.cables : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "cables",
                hash: {},
                data: d
            }) : f)) + "</p>\n      </div>\n"
        },
        40: function(c, a, b, g, d) {
            var f;
            g = c.escapeExpression;
            return '      <div class="chp-info-row slim">\n        <label>' + g((b.I18n || a && a.I18n || b.helperMissing).call(null != a ? a : c.nullContext || {}, "Advance reservation", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</label>\n        <p>" + g(c.lambda(null != (f = null != a ? a.reserva : a) ? f.reserva_lang : f, a)) + "</p>\n      </div>\n"
        },
        42: function(c, a, b, g, d) {
            var f;
            g = c.escapeExpression;
            return '      <div class="chp-info-row slim">\n        <label>' + g((b.I18n || a && a.I18n || b.helperMissing).call(null != a ? a : c.nullContext || {}, "Source energy", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</label>\n        <p>" + g(c.lambda(null != (f = null != a ? a.energia : a) ? f.energia_lang : f, a)) + "</p>\n      </div>\n"
        },
        44: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '      <div class="chp-info-row slim">\n        <label>' + c((b.I18n || a && a.I18n || k).call(g, "Open time", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</label>\n        <p>" + c((f = null != (f = b.horario || (null != a ? a.horario : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "horario",
                hash: {},
                data: d
            }) : f)) + "</p>\n      </div>\n"
        },
        46: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '      <div class="chp-info-row slim">\n        <label>' + c((b.I18n || a && a.I18n || k).call(g, "Time limit", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</label>\n        <p>" + c((f = null != (f = b.tiempo || (null != a ? a.tiempo :
                a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "tiempo",
                hash: {},
                data: d
            }) : f)) + "</p>\n      </div>\n"
        },
        48: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '      <div class="chp-info-row slim">\n        <label>' + c((b.I18n || a && a.I18n || k).call(g, "Contact person", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</label>\n        <p>" + c((f = null != (f = b.persona_contacto || (null != a ? a.persona_contacto : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "persona_contacto",
                hash: {},
                data: d
            }) : f)) + "</p>\n      </div>\n"
        },
        50: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '      <div class="chp-info-row slim">\n        <label>' + c((b.I18n || a && a.I18n || k).call(g, "Contact phone", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</label>\n        <p>" + c((f = null != (f = b.telefono_contacto || (null != a ? a.telefono_contacto : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "telefono_contacto",
                hash: {},
                data: d
            }) : f)) + "</p>\n      </div>\n"
        },
        52: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '      <div class="chp-info-row slim">\n        <label>' + c((b.I18n || a && a.I18n || k).call(g, "Contact mail", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</label>\n        <p>" + c((f = null != (f = b.email_contacto || (null != a ? a.email_contacto : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "email_contacto",
                hash: {},
                data: d
            }) : f)) + "</a></p>\n      </div>\n"
        },
        54: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '      <div class="chp-info-row slim">\n        <label>' + c((b.I18n || a && a.I18n || k).call(g, "Web", {
                name: "I18n",
                hash: {},
                data: d
            })) + '</label>\n        <p><a href="' + c((f = null != (f = b.web_link || (null != a ? a.web_link : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "web_link",
                hash: {},
                data: d
            }) : f)) + '" rel="nofollow" target="_blank">' + c((f = null != (f = b.web_link || (null != a ? a.web_link : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "web_link",
                hash: {},
                data: d
            }) : f)) + "</a></p>\n      </div>\n"
        },
        56: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '  <div class="btn-group chp-info-block chp-actions" style="text-align:center">\n    <a href="' + c((f = null != (f = b.reserva_link || (null != a ? a.reserva_link : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "reserva_link",
                hash: {},
                data: d
            }) : f)) + '" target="_blank" class="btn">\n      <i class="fas fa-h-square"></i> ' + c((b.I18n || a && a.I18n || k).call(g, "Book hotel", {
                name: "I18n",
                hash: {},
                data: d
            })) + "\n    </a>\n  </div>\n"
        },
        58: function(c, a,
            b, g, d) {
            var f;
            return null != (f = c.invokePartial(g.photo, a, {
                name: "photo",
                data: d,
                indent: "      ",
                helpers: b,
                partials: g,
                decorators: c.decorators
            })) ? f : ""
        },
        60: function(c, a, b, g, d) {
            var f;
            return null != (f = c.invokePartial(g.comment, a, {
                name: "comment",
                data: d,
                indent: "      ",
                helpers: b,
                partials: g,
                decorators: c.decorators
            })) ? f : ""
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d, f, k) {
            var l, h;
            g = c.lambda;
            var m = c.escapeExpression,
                n = null != a ? a : c.nullContext || {},
                r = b.helperMissing;
            return '\n<div id="chp_close"><i class="fas fa-times"></i></div>\n<div class="chp-template">\n  <div class="chp-header pad-rl10">\n    <div class="bubble_icono_big' +
                m(g(null != (l = null != a ? a.tipo : a) ? l["class"] : l, a)) + '"></div>\n    <h1>' + m((h = null != (h = b.nombre || (null != a ? a.nombre : a)) ? h : r, "function" === typeof h ? h.call(n, {
                    name: "nombre",
                    hash: {},
                    data: d
                }) : h)) + '</span></h1>\n    <h2><i class="far fa-compass"></i> ' + m((h = null != (h = b.direccion || (null != a ? a.direccion : a)) ? h : r, "function" === typeof h ? h.call(n, {
                    name: "direccion",
                    hash: {},
                    data: d
                }) : h)) + '</a></h2>\n\n    <div class="chp-rating">\n      <ul class="c-rating">\n        <li class="c-rating__item ' + (null != (l = b["if"].call(n,
                    (b.gte || a && a.gte || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 1, {
                        name: "gte",
                        hash: {},
                        data: d
                    }), {
                        name: "if",
                        hash: {},
                        fn: c.program(1, d, 0, f, k),
                        inverse: c.noop,
                        data: d
                    })) ? l : "") + " " + (null != (l = b["if"].call(n, (b.and || a && a.and || r).call(n, (b.gt || a && a.gt || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, .3, {
                    name: "gt",
                    hash: {},
                    data: d
                }), (b.lt || a && a.lt || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 1, {
                    name: "lt",
                    hash: {},
                    data: d
                }), {
                    name: "and",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(3, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '"></li>\n        <li class="c-rating__item ' + (null != (l = b["if"].call(n, (b.gte || a && a.gte || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 2, {
                    name: "gte",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(1, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + " " + (null != (l = b["if"].call(n, (b.and || a && a.and || r).call(n, (b.gt || a && a.gt || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 1.3, {
                    name: "gt",
                    hash: {},
                    data: d
                }), (b.lt || a && a.lt || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 2, {
                    name: "lt",
                    hash: {},
                    data: d
                }), {
                    name: "and",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(3, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '"></li>\n        <li class="c-rating__item ' + (null != (l = b["if"].call(n, (b.gte || a && a.gte || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 3, {
                    name: "gte",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(1, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + " " + (null != (l = b["if"].call(n, (b.and || a && a.and || r).call(n, (b.gt || a && a.gt || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 2.3, {
                    name: "gt",
                    hash: {},
                    data: d
                }), (b.lt || a && a.lt || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 3, {
                    name: "lt",
                    hash: {},
                    data: d
                }), {
                    name: "and",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(3, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '"></li>\n        <li class="c-rating__item ' + (null != (l = b["if"].call(n, (b.gte || a && a.gte || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 4, {
                    name: "gte",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(1, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + " " + (null != (l = b["if"].call(n, (b.and || a && a.and || r).call(n,
                    (b.gt || a && a.gt || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 3.3, {
                        name: "gt",
                        hash: {},
                        data: d
                    }), (b.lt || a && a.lt || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 4, {
                        name: "lt",
                        hash: {},
                        data: d
                    }), {
                        name: "and",
                        hash: {},
                        data: d
                    }), {
                    name: "if",
                    hash: {},
                    fn: c.program(3, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '"></li>\n        <li class="c-rating__item ' + (null != (l = b["if"].call(n, (b.gte || a && a.gte || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 5, {
                    name: "gte",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(1,
                        d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + " " + (null != (l = b["if"].call(n, (b.and || a && a.and || r).call(n, (b.gt || a && a.gt || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 4.3, {
                    name: "gt",
                    hash: {},
                    data: d
                }), (b.lt || a && a.lt || r).call(n, null != (l = null != a ? a.score : a) ? l.avarage : l, 5, {
                    name: "lt",
                    hash: {},
                    data: d
                }), {
                    name: "and",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(3, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '"></li>\n      </ul>\n      <span class="rating-widget__label-global-rating">' + m(g(null != (l = null != a ? a.score :
                    a) ? l.avarage : l, a)) + " / " + m(g(null != (l = null != a ? a.score : a) ? l.votes : l, a)) + '</span>\n    </div>\n\n    <div class="chp-status">\n' + (null != (l = b["if"].call(n, (b.ne || a && a.ne || r).call(n, null != a ? a.realtime : a, "1", {
                    name: "ne",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(5, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '    </div>\n  </div>\n\n  <div class="btn-group chp-info-block  chp-actions">\n    <button class="btn" id="addPhoto">\n      <i class="fas fa-camera"></i><br>' + m((b.I18n || a && a.I18n || r).call(n, "Photo", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </button>\n    <button class="btn" id="addComment">\n      <i class="fas fa-comment-alt"></i><br>' + m((b.I18n || a && a.I18n || r).call(n, "Comment", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </button>\n    <button class="btn" id="toggleBookmark">\n      <i class="' + (null != (l = b["if"].call(n, null != a ? a.favorito : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(7, d, 0, f, k),
                    inverse: c.program(9, d, 0, f, k),
                    data: d
                })) ? l : "") + ' fa-heart"></i><br>' + m((b.I18n || a && a.I18n || r).call(n, "Bookmark", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </button>\n    <button class="btn ' + (null != (l = b["if"].call(n, (b.ne || a && a.ne || r).call(n, null != a ? a.editable : a, "all", {
                    name: "ne",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(11, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '" id="editChargepoint">\n      <i class="fas fa-edit"></i></i><br>' + m((b.I18n || a && a.I18n || r).call(n, "Edit", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "\n    </button>\n  </div>\n\n" + (null != (l = b["if"].call(n, null != a ? a.indicaciones : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(13, d, 0,
                        f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "\n" + (null != (l = b["if"].call(n, null != a ? a.gestor : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(15, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "\n\n  <h3>" + m((b.I18n || a && a.I18n || r).call(n, "Connectors", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</h3>\n  <div id="plugs-block" class="chp-info-block">\n' + (null != (l = b.each.call(n, null != a ? a.enchufes : a, {
                    name: "each",
                    hash: {},
                    fn: c.program(18, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "  </div>\n\n" + (null != (l = b["if"].call(n, (b.and || a && a.and || r).call(n, null !=
                    a ? a.precio_estacionamiento : a, null != a ? a.precio_carga : a, {
                        name: "and",
                        hash: {},
                        data: d
                    }), {
                    name: "if",
                    hash: {},
                    fn: c.program(31, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "\n  <h3>" + m((b.I18n || a && a.I18n || r).call(n, "How it works", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</h3>\n  <div class="chp-info-block pad-rl10">\n' + (null != (l = b["if"].call(n, null != a ? a.funcionamiento : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(36, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "\n" + (null != (l = b["if"].call(n, null != a ? a.cables : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(38,
                        d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "\n" + (null != (l = b["if"].call(n, (b.lt || a && a.lt || r).call(n, null != (l = null != a ? a.reserva : a) ? l.idreserva : l, 99, {
                    name: "lt",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(40, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "\n" + (null != (l = b["if"].call(n, (b.lt || a && a.lt || r).call(n, null != (l = null != a ? a.energia : a) ? l.idenergia : l, 99, {
                    name: "lt",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(42, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "\n" + (null != (l = b["if"].call(n, null != a ? a.horario : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(44, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "\n" + (null != (l = b["if"].call(n, null != a ? a.tiempo : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(46, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "  </div>\n\n  <h3>" + m((b.I18n || a && a.I18n || r).call(n, "Contact information", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</h3>\n  <div class="chp-info-block pad-rl10">\n' + (null != (l = b["if"].call(n, null != a ? a.persona_contacto : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(48, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "\n" + (null != (l = b["if"].call(n,
                    null != a ? a.telefono_contacto : a, {
                        name: "if",
                        hash: {},
                        fn: c.program(50, d, 0, f, k),
                        inverse: c.noop,
                        data: d
                    })) ? l : "") + "\n" + (null != (l = b["if"].call(n, null != a ? a.email_contacto : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(52, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "\n" + (null != (l = b["if"].call(n, null != a ? a.web_link : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(54, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "  </div>\n\n" + (null != (l = b["if"].call(n, null != a ? a.reserva_link : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(56, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") +
                '\n  <div id="share-buttons" class="chp-info-block pad-rl10">\n    <div class="share-label">' + m((b.I18n || a && a.I18n || r).call(n, "Compartir en", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ':</div>\n    <a href="http://www.facebook.com/sharer.php?u=' + m((h = null != (h = b.link || (null != a ? a.link : a)) ? h : r, "function" === typeof h ? h.call(n, {
                    name: "link",
                    hash: {},
                    data: d
                }) : h)) + '" target="_blank">\n      <img src="https://cfassets.electromaps.com/img/social/facebook.png" alt="Facebook">\n    </a>\n    <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=' +
                m((h = null != (h = b.link || (null != a ? a.link : a)) ? h : r, "function" === typeof h ? h.call(n, {
                    name: "link",
                    hash: {},
                    data: d
                }) : h)) + '" target="_blank">\n      <img src="https://cfassets.electromaps.com/img/social/linkedin.png" alt="LinkedIn">\n    </a>\n    <a href="https://twitter.com/share?url=' + m((h = null != (h = b.link || (null != a ? a.link : a)) ? h : r, "function" === typeof h ? h.call(n, {
                    name: "link",
                    hash: {},
                    data: d
                }) : h)) + "&amp;text=" + m((h = null != (h = b.nombre || (null != a ? a.nombre : a)) ? h : r, "function" === typeof h ? h.call(n, {
                    name: "nombre",
                    hash: {},
                    data: d
                }) : h)) + ' - Electromaps" target="_blank">\n      <img src="https://cfassets.electromaps.com/img/social/twitter.png" alt="Twitter">\n    </a>\n  </div>\n\n  <h3><i class="far fa-image"></i> ' + m((b.I18n || a && a.I18n || r).call(n, "Photos", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</h3>\n  <div id="images-list" class="chp-gallery">\n' + (null != (l = b.each.call(n, null != a ? a.photos : a, {
                    name: "each",
                    hash: {},
                    fn: c.program(58, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '  </div>\n\n  <h3><i class="far fa-comment-alt"></i> ' + m((b.I18n ||
                    a && a.I18n || r).call(n, "Comments", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</h3>\n  <div id="comments-list" class="pad-rl10">\n' + (null != (l = b.each.call(n, null != a ? a.comentarios : a, {
                    name: "each",
                    hash: {},
                    fn: c.program(60, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + "  </div>\n\n</div>\n"
        },
        usePartial: !0,
        useData: !0,
        useDepths: !0
    });
    m.chargepointForm = h({
        1: function(c, a, b, g, d, f, k) {
            var l, h;
            g = null != a ? a : c.nullContext || {};
            var m = b.helperMissing,
                n = c.escapeExpression;
            return '        <option value="' + n((h = null != (h = b.id || (null != a ? a.id :
                a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "id",
                hash: {},
                data: d
            }) : h)) + '" ' + (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, null != a ? a.id : a, null != (l = null != k[1] ? k[1].data : k[1]) ? l.idtipo : l, {
                name: "eq",
                hash: {},
                data: d
            }), {
                name: "if",
                hash: {},
                fn: c.program(2, d, 0, f, k),
                inverse: c.noop,
                data: d
            })) ? l : "") + ">" + n((h = null != (h = b.text || (null != a ? a.text : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "text",
                hash: {},
                data: d
            }) : h)) + "</option>\n"
        },
        2: function(c, a, b, g, d) {
            return " selected "
        },
        4: function(c, a, b, g, d, f, k) {
            var l, h;
            g = null !=
                a ? a : c.nullContext || {};
            var m = b.helperMissing,
                n = c.escapeExpression;
            return '        <option value="' + n((h = null != (h = b.id || (null != a ? a.id : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "id",
                hash: {},
                data: d
            }) : h)) + '" ' + (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, null != a ? a.id : a, null != (l = null != k[1] ? k[1].data : k[1]) ? l.idenergia : l, {
                name: "eq",
                hash: {},
                data: d
            }), {
                name: "if",
                hash: {},
                fn: c.program(2, d, 0, f, k),
                inverse: c.noop,
                data: d
            })) ? l : "") + ">" + n((h = null != (h = b.text || (null != a ? a.text : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "text",
                hash: {},
                data: d
            }) : h)) + "</option>\n"
        },
        6: function(c, a, b, g, d, f, k) {
            var l, h;
            g = null != a ? a : c.nullContext || {};
            var m = b.helperMissing,
                n = c.escapeExpression;
            return '        <option value="' + n((h = null != (h = b.id || (null != a ? a.id : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "id",
                hash: {},
                data: d
            }) : h)) + '" ' + (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, null != a ? a.id : a, null != (l = null != k[1] ? k[1].data : k[1]) ? l.idreserva : l, {
                    name: "eq",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(2, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ?
                l : "") + ">" + n((h = null != (h = b.text || (null != a ? a.text : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "text",
                hash: {},
                data: d
            }) : h)) + "</option>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d, f, k) {
            var l, h = c.lambda,
                m = c.escapeExpression,
                n = null != a ? a : c.nullContext || {},
                r = b.helperMissing;
            return '<form id="register_form">\n\n  <div class="form-element form-input">\n    <input id="field-nombre" class="form-element-field" name="nombre" autofocus\n        value="' + m(h(null != (l = null != a ? a.data : a) ? l.nombre : l, a)) + '" type="text" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-nombre">' +
                m((b.I18n || a && a.I18n || r).call(n, "Location Name", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + m((b.I18n || a && a.I18n || r).call(n, "Chargepoint name", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + m((b.I18n || a && a.I18n || r).call(n, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n  </div>\n\n  <div class="form-element form-select">\n    <select id="field-tipo" name="tipo[idtipo]" class="form-element-field -hasvalue" required>\n      <option disabled value="" class="form-select-placeholder"></option>\n' +
                (null != (l = b.each.call(n, null != (l = null != (l = null != a ? a.data : a) ? l.datatypes : l) ? l.tiposp : l, {
                    name: "each",
                    hash: {},
                    fn: c.program(1, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '    </select>\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-tipo">' + m((b.I18n || a && a.I18n || r).call(n, "Location type", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + m((b.I18n || a && a.I18n || r).call(n, "Which kind of business have the charging station", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</small>\n  </div>\n\n  <div class="form-element form-select">\n    <select id="field-energy" name="energia[idenergia]" class="form-element-field -hasvalue" required>\n      <option disabled value="" class="form-select-placeholder"></option>\n' + (null != (l = b.each.call(n, null != (l = null != (l = null != a ? a.data : a) ? l.datatypes : l) ? l.energias : l, {
                    name: "each",
                    hash: {},
                    fn: c.program(4, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '    </select>\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-energy">' +
                m((b.I18n || a && a.I18n || r).call(n, "Origen of energy", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + m((b.I18n || a && a.I18n || r).call(n, "Which kind of energy produce the electricity", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</small>\n  </div>\n\n  <h3>" + m((b.I18n || a && a.I18n || r).call(n, "Connectors", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</h3>\n  <div id="chp_form_connectors" class="form-element-connectors">\n' + (null != (l = c.invokePartial(g.connectorsBlock, a, {
                    name: "connectorsBlock",
                    data: d,
                    indent: "      ",
                    helpers: b,
                    partials: g,
                    decorators: c.decorators
                })) ? l : "") + '  </div>\n  \n  <div class="form-element form-input">\n    <button type="button" id="addConnector" class="form-btn width-100"><i class="fas fa-plus"></i> ' + m((b.I18n || a && a.I18n || r).call(n, "Add connector", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n  </div>\n\n  <h3>" + m((b.I18n || a && a.I18n || r).call(n, "Location", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</h3>\n  <div class="form-element form-input">\n    <input id="field-direccion" class="form-element-field" name="direccion"\n        placeholder=" " value="' +
                m(h(null != (l = null != a ? a.data : a) ? l.direccion : l, a)) + '" type="text" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-direccion">' + m((b.I18n || a && a.I18n || r).call(n, "Address", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + m((b.I18n || a && a.I18n || r).call(n, "Complete address (Street, number, postal code, city, country)", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</small>\n  </div>\n  <input id="field-latitud" name="latitud" value="' +
                m(h(null != (l = null != a ? a.data : a) ? l.latitud : l, a)) + '" type="hidden" />\n  <input id="field-longitud" name="longitud" value="' + m(h(null != (l = null != a ? a.data : a) ? l.longitud : l, a)) + '" type="hidden" />\n  \n  <div class="form-element form-input">\n    <button type="button" id="addresToMap" class="form-btn">' + m((b.I18n || a && a.I18n || r).call(n, "Center address to map", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button type="button" id="mapToAddress" class="form-btn">' + m((b.I18n || a && a.I18n || r).call(n, "Get address from map", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n  </div>\n\n  <div class="form-element form-input">\n    <div id="mapDialog"></div>\n    <div class="form-element-bar"></div>\n  </div>\n\n  <div class="form-element form-textarea">\n    <textarea id="field-indicaciones" class="form-element-field" name="indicaciones"\n        placeholder=" ">' + m(h(null != (l = null != a ? a.data : a) ? l.indicaciones : l, a)) + '</textarea>\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-indicaciones">' +
                m((b.I18n || a && a.I18n || r).call(n, "Indications", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + m((b.I18n || a && a.I18n || r).call(n, "Indications for help drivers finding the point", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</small>\n  </div>\n\n  <h3>" + m((b.I18n || a && a.I18n || r).call(n, "Prices", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</h3>\n  <div class="form-element form-input">\n    <input id="field-precio_carga" class="form-element-field" name="precio_carga"\n        placeholder=" " value="' +
                m(h(null != (l = null != a ? a.data : a) ? l.precio_carga : l, a)) + '" type="text" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-precio_carga">' + m((b.I18n || a && a.I18n || r).call(n, "Charge price", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n  <div class="form-element form-input">\n    <input id="field-precio_estacionamiento" class="form-element-field"\n        name="precio_estacionamiento" placeholder=" " value="' + m(h(null != (l = null != a ? a.data : a) ? l.precio_estacionamiento :
                    l, a)) + '" type="text" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-precio_estacionamiento">' + m((b.I18n || a && a.I18n || r).call(n, "Parking price", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</label>\n  </div>\n\n  <h3>" + m((b.I18n || a && a.I18n || r).call(n, "How it works", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</h3>\n  <div class="form-element form-textarea">\n    <textarea id="field-funcionamiento" class="form-element-field"\n        name="funcionamiento" placeholder=" ">' + m(h(null !=
                    (l = null != a ? a.data : a) ? l.funcionamiento : l, a)) + '</textarea>\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-funcionamiento">' + m((b.I18n || a && a.I18n || r).call(n, "How it works?", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + m((b.I18n || a && a.I18n || r).call(n, "How it works?", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</small>\n  </div>\n  <div class="form-element form-input">\n    <input id="field-horario" class="form-element-field" name="horario"\n        placeholder=" " value="' +
                m(h(null != (l = null != a ? a.data : a) ? l.horario : l, a)) + '" type="text" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-horario">' + m((b.I18n || a && a.I18n || r).call(n, "Timetable", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + m((b.I18n || a && a.I18n || r).call(n, "Open 24 hours? Are all days opened or only working days?", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</small>\n  </div>\n  <div class="form-element form-input">\n    <input id="field-cables" class="form-element-field" name="cables"\n        placeholder=" " value="' +
                m(h(null != (l = null != a ? a.data : a) ? l.cables : l, a)) + '" type="text" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-cables">' + m((b.I18n || a && a.I18n || r).call(n, "Cables & Adapters", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + m((b.I18n || a && a.I18n || r).call(n, "There are a cable or adapter for different shots? Which kind?", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</small>\n  </div>\n  <div class="form-element form-input">\n    <input id="field-tiempo" class="form-element-field" name="tiempo"\n        placeholder=" " value="' +
                m(h(null != (l = null != a ? a.data : a) ? l.tiempo : l, a)) + '" type="text" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-tiempo">' + m((b.I18n || a && a.I18n || r).call(n, "Time limit", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + m((b.I18n || a && a.I18n || r).call(n, "Is there a time limit charging?", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</small>\n  </div>\n\n  <div class="form-element form-select">\n    <select id="field-tipo" name="reserva[idreserva]" class="form-element-field -hasvalue" required>\n      <option disabled value="" class="form-select-placeholder"></option>\n' +
                (null != (l = b.each.call(n, null != (l = null != (l = null != a ? a.data : a) ? l.datatypes : l) ? l.reservas : l, {
                    name: "each",
                    hash: {},
                    fn: c.program(6, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '    </select>\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-tipo">' + m((b.I18n || a && a.I18n || r).call(n, "Advance reservation", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + m((b.I18n || a && a.I18n || r).call(n, "Can or should be reserved in advance?", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</small>\n  </div>\n\n  <h3>" + m((b.I18n || a && a.I18n || r).call(n, "Contact information", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</h3>\n  <div class="form-element form-input">\n    <input id="field-telefono_contacto" class="form-element-field" name="telefono_contacto"\n        placeholder=" " value="' + m(h(null != (l = null != a ? a.data : a) ? l.telefono_contacto : l, a)) + '" type="text" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-telefono_contacto">' + m((b.I18n || a &&
                    a.I18n || r).call(n, "Phone contact", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n  <div class="form-element form-input">\n    <input id="field-email_contacto" class="form-element-field" name="email_contacto"\n        placeholder=" " value="' + m(h(null != (l = null != a ? a.data : a) ? l.email_contacto : l, a)) + '" type="text" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-email_contacto">' + m((b.I18n || a && a.I18n || r).call(n, "Email Contact", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) +
                '</label>\n  </div>\n  <div class="form-element form-input">\n    <input id="field-persona_contacto" class="form-element-field" name="persona_contacto"\n        placeholder=" " value="' + m(h(null != (l = null != a ? a.data : a) ? l.persona_contacto : l, a)) + '" type="text" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-persona_contacto">' + m((b.I18n || a && a.I18n || r).call(n, "Person to contact", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n  <div class="form-element form-input">\n    <input id="field-web_link" class="form-element-field" name="web_link"\n        placeholder=" " value="' +
                m(h(null != (l = null != a ? a.data : a) ? l.web_link : l, a)) + '" type="text" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-web_link">' + m((b.I18n || a && a.I18n || r).call(n, "Web contact", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + m((b.I18n || a && a.I18n || r).call(n, "Send", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' +
                m((b.I18n || a && a.I18n || r).call(n, "Cancel", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n  </div>\n</form>\n"
        },
        usePartial: !0,
        useData: !0,
        useDepths: !0
    });
    m.chargesessions = h({
        1: function(c, a, b, g, d) {
            var f;
            return '  <div class="thead">\n    <div class="th"></div>\n    <div class="th"></div>\n    <div class="th"></div>\n    <div class="th"></div>\n    <div class="th"></div>\n    <div class="th"></div>\n  </div>\n  <div class="tbody">\n' + (null != (f = b.each.call(null != a ? a : c.nullContext || {}, null != a ? a.data : a, {
                name: "each",
                hash: {},
                fn: c.program(2, d, 0),
                inverse: c.noop,
                data: d
            })) ? f : "") + "  </div>\n"
        },
        2: function(c, a, b, g, d) {
            var f, k;
            g = null != a ? a : c.nullContext || {};
            var l = b.helperMissing,
                h = c.lambda,
                m = c.escapeExpression;
            return '      <div class="tr ' + (null != (f = b["if"].call(g, (b.eq || a && a.eq || l).call(g, null != (f = null != a ? a.details : a) ? f.chargeOnline : f, "1", {
                    name: "eq",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(3, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + '">\n        <div class="td icon">' + (null != (f = b["if"].call(g, (b.eq || a && a.eq || l).call(g,
                    null != (f = null != a ? a.details : a) ? f.chargeOnline : f, "0", {
                        name: "eq",
                        hash: {},
                        data: d
                    }), {
                    name: "if",
                    hash: {},
                    fn: c.program(5, d, 0),
                    inverse: c.program(7, d, 0),
                    data: d
                })) ? f : "") + '</div>\n        <div class="td session-location">' + m(h(null != (f = null != a ? a.details : a) ? f.pdrName : f, a)) + "<br><small>" + m(h(null != (f = null != a ? a.details : a) ? f.pdrAddress : f, a)) + '</small></div>\n        <div class="td">' + m((k = null != (k = b.date || (null != a ? a.date : a)) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "date",
                    hash: {},
                    data: d
                }) : k)) + '</div>\n        <div class="td">' +
                m(h(null != (f = null != a ? a.details : a) ? f.sessionMinutes : f, a)) + ' min</div>\n        <div class="td">' + m(h(null != (f = null != a ? a.details : a) ? f.sessionkwh : f, a)) + ' kwh</div>\n        <div class="td">' + m((k = null != (k = b.amount || (null != a ? a.amount : a)) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "amount",
                    hash: {},
                    data: d
                }) : k)) + " \u20ac</div>\n      </div>\n"
        },
        3: function(c, a, b, g, d) {
            return "online"
        },
        5: function(c, a, b, g, d) {
            return ' <i class="fas fa-map-marker-alt"></i> '
        },
        7: function(c, a, b, g, d) {
            return ' <i class="fas fa-charging-station"></i> '
        },
        9: function(c, a, b, g, d) {
            return '  <div class="table-empty">\n    ' + c.escapeExpression((b.I18n || a && a.I18n || b.helperMissing).call(null != a ? a : c.nullContext || {}, "No charging sessions", {
                name: "I18n",
                hash: {},
                data: d
            })) + "\n  </div>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f;
            return '<div id="chargesessions" class="dialog-table">\n' + (null != (f = b["if"].call(null != a ? a : c.nullContext || {}, null != a ? a.data : a, {
                name: "if",
                hash: {},
                fn: c.program(1, d, 0),
                inverse: c.program(9, d, 0),
                data: d
            })) ? f : "") + "</div>\n"
        },
        useData: !0
    });
    m.comment = h({
        1: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            return (null != (f = b["if"].call(g, (b.eq || a && a.eq || k).call(g, null != a ? a.charged : a, "0", {
                name: "eq",
                hash: {},
                data: d
            }), {
                name: "if",
                hash: {},
                fn: c.program(2, d, 0),
                inverse: c.noop,
                data: d
            })) ? f : "") + (null != (f = b["if"].call(g, (b.eq || a && a.eq || k).call(g, null != a ? a.charged : a, "1", {
                name: "eq",
                hash: {},
                data: d
            }), {
                name: "if",
                hash: {},
                fn: c.program(4, d, 0),
                inverse: c.noop,
                data: d
            })) ? f : "")
        },
        2: function(c, a, b, g, d) {
            return '          <img width="22" height="22" src="https://cfassets.electromaps.com/img/mano-no.png">\n'
        },
        4: function(c, a, b, g, d) {
            return '          <img width="22" height="22" src="https://cfassets.electromaps.com/img/mano-ok.png">\n'
        },
        6: function(c, a, b, g, d) {
            var f;
            b = c.lambda;
            c = c.escapeExpression;
            return '        <a class="' + c(b(null != (f = null != a ? a.toma : a) ? f.img_class : f, a)) + '" data-toggle="tooltip" data-original-title="' + c(b(null != (f = null != a ? a.toma : a) ? f.nombre : f, a)) + '"></a>\n'
        },
        8: function(c, a, b, g, d) {
            var f;
            b = c.lambda;
            c = c.escapeExpression;
            return '        <span style="background:' + c(b(null != (f = null != a ? a.estado : a) ?
                f.color_code : f, a)) + ';">' + c(b(null != (f = null != a ? a.estado : a) ? f.estado_lang : f, a)) + "</span>\n"
        },
        10: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            return '      <div class="review-rating">\n        <ul class="c-rating">\n          <li class="c-rating__item ' + (null != (f = b["if"].call(g, (b.gte || a && a.gte || k).call(g, null != a ? a.score : a, 1, {
                    name: "gte",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(11, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + '"></li>\n          <li class="c-rating__item ' +
                (null != (f = b["if"].call(g, (b.gte || a && a.gte || k).call(g, null != a ? a.score : a, 2, {
                    name: "gte",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(11, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + '"></li>\n          <li class="c-rating__item ' + (null != (f = b["if"].call(g, (b.gte || a && a.gte || k).call(g, null != a ? a.score : a, 3, {
                    name: "gte",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(11, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + '"></li>\n          <li class="c-rating__item ' + (null != (f = b["if"].call(g, (b.gte || a && a.gte || k).call(g, null !=
                    a ? a.score : a, 4, {
                        name: "gte",
                        hash: {},
                        data: d
                    }), {
                    name: "if",
                    hash: {},
                    fn: c.program(11, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + '"></li>\n          <li class="c-rating__item ' + (null != (f = b["if"].call(g, (b.gte || a && a.gte || k).call(g, null != a ? a.score : a, 5, {
                    name: "gte",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(11, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + '"></li>\n        </ul>\n      </div>\n'
        },
        11: function(c, a, b, g, d) {
            return "is-active"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f, k;
            g = null != a ? a : c.nullContext || {};
            var l = b.helperMissing,
                h = c.escapeExpression;
            return '<div class="comments-row">\n  <div class="comment-user">\n    <img alt="profile-image" class="avatar" width="70" height="70" src="' + h((k = null != (k = b.avatar_url_small || (null != a ? a.avatar_url_small : a)) ? k : l, "function" === typeof k ? k.call(g, {
                name: "avatar_url_small",
                hash: {},
                data: d
            }) : k)) + '">\n    <a class="username" href="' + h((k = null != (k = b.base_url || (null != a ? a.base_url : a)) ? k : l, "function" === typeof k ? k.call(g, {
                name: "base_url",
                hash: {},
                data: d
            }) : k)) + "/u/" + h((k =
                null != (k = b.username || (null != a ? a.username : a)) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "username",
                    hash: {},
                    data: d
                }) : k)) + '">' + h((k = null != (k = b.username || (null != a ? a.username : a)) ? k : l, "function" === typeof k ? k.call(g, {
                name: "username",
                hash: {},
                data: d
            }) : k)) + '</a>\n    <div class="date-publish">' + h((k = null != (k = b.date_pub || (null != a ? a.date_pub : a)) ? k : l, "function" === typeof k ? k.call(g, {
                name: "date_pub",
                hash: {},
                data: d
            }) : k)) + '</div>\n  </div>\n\n  <div class="comment-text">\n    <p>' + h((k = null != (k = b.comment || (null != a ?
                a.comment : a)) ? k : l, "function" === typeof k ? k.call(g, {
                name: "comment",
                hash: {},
                data: d
            }) : k)) + '</p>\n  </div>\n\n  <div class="comment-review">\n\n    <div class="review-state">\n' + (null != (f = b["if"].call(g, null != a ? a.charged : a, {
                name: "if",
                hash: {},
                fn: c.program(1, d, 0),
                inverse: c.noop,
                data: d
            })) ? f : "") + (null != (f = b["if"].call(g, null != a ? a.toma : a, {
                name: "if",
                hash: {},
                fn: c.program(6, d, 0),
                inverse: c.noop,
                data: d
            })) ? f : "") + (null != (f = b["if"].call(g, null != a ? a.estado : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(8, d, 0),
                    inverse: c.noop,
                    data: d
                })) ?
                f : "") + "    </div>\n\n" + (null != (f = b["if"].call(g, null != a ? a.score : a, {
                name: "if",
                hash: {},
                fn: c.program(10, d, 0),
                inverse: c.noop,
                data: d
            })) ? f : "") + "  </div>\n\n</div>\n"
        },
        useData: !0
    });
    m.commentForm = h({
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            g = null != a ? a : c.nullContext || {};
            var f = b.helperMissing;
            c = c.escapeExpression;
            return '<form id="newcomment_form">\n  <div class="form-element form-textarea">\n    <textarea id="field-comment" class="form-element-field" name="comentario" autofocus required></textarea>\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-comment">' +
                c((b.I18n || a && a.I18n || f).call(g, "Comment", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + c((b.I18n || a && a.I18n || f).call(g, "Submit", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' + c((b.I18n || a && a.I18n || f).call(g, "Cancel", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n  </div>\n</form>\n"
        },
        useData: !0
    });
    m.connectorForm = h({
        1: function(c,
            a, b, g, d, f, k) {
            var l, h;
            g = null != a ? a : c.nullContext || {};
            var m = b.helperMissing,
                n = c.escapeExpression;
            return '        <option value="' + n((h = null != (h = b.id || (null != a ? a.id : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "id",
                hash: {},
                data: d
            }) : h)) + '" data-class="' + n((h = null != (h = b["class"] || (null != a ? a["class"] : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "class",
                hash: {},
                data: d
            }) : h)) + '" ' + (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, null != a ? a.id : a, null != (l = null != k[1] ? k[1].data : k[1]) ? l.idconnector : l, {
                name: "eq",
                hash: {},
                data: d
            }), {
                name: "if",
                hash: {},
                fn: c.program(2, d, 0, f, k),
                inverse: c.noop,
                data: d
            })) ? l : "") + ">" + n((h = null != (h = b.text || (null != a ? a.text : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "text",
                hash: {},
                data: d
            }) : h)) + "</option>\n"
        },
        2: function(c, a, b, g, d) {
            return " selected "
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d, f, k) {
            var l;
            g = c.lambda;
            var h = c.escapeExpression,
                m = null != a ? a : c.nullContext || {},
                n = b.helperMissing;
            return '<form>\n  <input name="idtoma" value="' + h(g(null != (l = null != a ? a.data : a) ? l.idtoma : l, a)) + '" type="hidden" />\n  <input id="frmConnectorName" name="nombre" value="' +
                h(g(null != (l = null != a ? a.data : a) ? l.nombre : l, a)) + '" type="hidden" />\n  <input id="frmConnectorClass" name="img_class" value="' + h(g(null != (l = null != a ? a.data : a) ? l.img_class : l, a)) + '" type="hidden" />\n  <div class="form-element form-select">\n    <select id="field-connector" name="idconnector" class="form-element-field -hasvalue" required autofocus>\n      <option disabled value="" class="form-select-placeholder"></option>\n' + (null != (l = b.each.call(m, null != (l = null != (l = null != a ? a.data : a) ? l.datatypes : l) ? l.connectors :
                    l, {
                        name: "each",
                        hash: {},
                        fn: c.program(1, d, 0, f, k),
                        inverse: c.noop,
                        data: d
                    })) ? l : "") + '    </select>\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-connector">' + h((b.I18n || a && a.I18n || n).call(m, "Connector type", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + h((b.I18n || a && a.I18n || n).call(m, "Type of plug", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</small>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-voltios" class="form-element-field" name="voltios" placeholder=" " value="' +
                h(g(null != (l = null != a ? a.data : a) ? l.voltios : l, a)) + '" type="number" min="0" step="1" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-voltios">' + h((b.I18n || a && a.I18n || n).call(m, "Voltage (V)", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-amperios" class="form-element-field" name="amperios" placeholder=" " value="' + h(g(null != (l = null != a ? a.data : a) ? l.amperios : l, a)) + '" type="number" min="0" step="1" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-amperios">' +
                h((b.I18n || a && a.I18n || n).call(m, "Amperes (A)", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-kilovatios" class="form-element-field" name="kilovatios" placeholder=" " value="' + h(g(null != (l = null != a ? a.data : a) ? l.kilovatios : l, a)) + '" type="number" min="0" step="0.01" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-kilovatios">' + h((b.I18n || a && a.I18n || n).call(m, "Kilowatts (kW)", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + h((b.I18n || a && a.I18n || n).call(m, "Save", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' + h((b.I18n || a && a.I18n || n).call(m, "Cancel", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n  </div>\n</form>\n"
        },
        useData: !0,
        useDepths: !0
    });
    m.connectorsBlock = h({
        1: function(c, a, b, g, d) {
            var f, k;
            g = null != a ? a : c.nullContext || {};
            var l = b.helperMissing,
                h = c.escapeExpression;
            return '  <div class="chp-plug-info" data-i="' + h((k = null != (k = b.index || d && d.index) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "index",
                    hash: {},
                    data: d
                }) : k)) + '">\n    <a class="' + h((k = null != (k = b.img_class || (null != a ? a.img_class : a)) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "img_class",
                    hash: {},
                    data: d
                }) : k)) + ' plug-img"></a>\n\n    <div class="chp-plug-more-info">\n      <div class="plug-name-info">\n        <span class="plug-name">' + h((k = null != (k = b.nombre || (null !=
                    a ? a.nombre : a)) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "nombre",
                    hash: {},
                    data: d
                }) : k)) + "</span>\n        </br>\n        " + (null != (f = b["if"].call(g, null != a ? a.kilovatios : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(2, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + "\n        " + (null != (f = b["if"].call(g, null != a ? a.amperios : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(4, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + "\n        " + (null != (f = b["if"].call(g, null != a ? a.voltios : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(6, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + '\n      </div>\n    </div>\n\n    <button type="button" class="btn-action btn-remove"><i class="fas fa-times"></i></button>\n    <button type="button" class="btn-action btn-edit"><i class="fas fa-pen"></i></button>\n\n    <input name="enchufes[' +
                h((k = null != (k = b.index || d && d.index) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "index",
                    hash: {},
                    data: d
                }) : k)) + '][idtoma]" value="' + h((k = null != (k = b.idtoma || (null != a ? a.idtoma : a)) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "idtoma",
                    hash: {},
                    data: d
                }) : k)) + '" type="hidden" />\n    <input name="enchufes[' + h((k = null != (k = b.index || d && d.index) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "index",
                    hash: {},
                    data: d
                }) : k)) + '][idconnector]" value="' + h((k = null != (k = b.idconnector || (null != a ? a.idconnector : a)) ? k : l, "function" === typeof k ?
                    k.call(g, {
                        name: "idconnector",
                        hash: {},
                        data: d
                    }) : k)) + '" type="hidden" />\n    <input name="enchufes[' + h((k = null != (k = b.index || d && d.index) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "index",
                    hash: {},
                    data: d
                }) : k)) + '][amperios]" value="' + h((k = null != (k = b.amperios || (null != a ? a.amperios : a)) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "amperios",
                    hash: {},
                    data: d
                }) : k)) + '" type="hidden" />\n    <input name="enchufes[' + h((k = null != (k = b.index || d && d.index) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "index",
                    hash: {},
                    data: d
                }) : k)) +
                '][voltios]" value="' + h((k = null != (k = b.voltios || (null != a ? a.voltios : a)) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "voltios",
                    hash: {},
                    data: d
                }) : k)) + '" type="hidden" />\n    <input name="enchufes[' + h((k = null != (k = b.index || d && d.index) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "index",
                    hash: {},
                    data: d
                }) : k)) + '][kilovatios]" value="' + h((k = null != (k = b.kilovatios || (null != a ? a.kilovatios : a)) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "kilovatios",
                    hash: {},
                    data: d
                }) : k)) + '" type="hidden" />\n  </div>\n'
        },
        2: function(c, a, b,
            g, d) {
            var f;
            return '<span class="plug-speed">' + c.escapeExpression((f = null != (f = b.kilovatios || (null != a ? a.kilovatios : a)) ? f : b.helperMissing, "function" === typeof f ? f.call(null != a ? a : c.nullContext || {}, {
                name: "kilovatios",
                hash: {},
                data: d
            }) : f)) + "kW</span>"
        },
        4: function(c, a, b, g, d) {
            var f;
            return '<span class="plug-speed">' + c.escapeExpression((f = null != (f = b.amperios || (null != a ? a.amperios : a)) ? f : b.helperMissing, "function" === typeof f ? f.call(null != a ? a : c.nullContext || {}, {
                name: "amperios",
                hash: {},
                data: d
            }) : f)) + "A</span>"
        },
        6: function(c,
            a, b, g, d) {
            var f;
            return '<span class="plug-speed">' + c.escapeExpression((f = null != (f = b.voltios || (null != a ? a.voltios : a)) ? f : b.helperMissing, "function" === typeof f ? f.call(null != a ? a : c.nullContext || {}, {
                name: "voltios",
                hash: {},
                data: d
            }) : f)) + "V</span>"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f;
            return null != (f = b.each.call(null != a ? a : c.nullContext || {}, null != (f = null != a ? a.data : a) ? f.enchufes : f, {
                name: "each",
                hash: {},
                fn: c.program(1, d, 0),
                inverse: c.noop,
                data: d
            })) ? f : ""
        },
        useData: !0
    });
    m.dialog = h({
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f, k, l = null != a ? a : c.nullContext || {},
                h = b.helperMissing,
                m = c.escapeExpression;
            return '<div class="dialog-modal" style="width: ' + m((k = null != (k = b.width || (null != a ? a.width : a)) ? k : h, "function" === typeof k ? k.call(l, {
                    name: "width",
                    hash: {},
                    data: d
                }) : k)) + '">\n  <div class="dialog-header">\n    <span>' + m((k = null != (k = b.title || (null != a ? a.title : a)) ? k : h, "function" === typeof k ? k.call(l, {
                    name: "title",
                    hash: {},
                    data: d
                }) : k)) + '</span>\n    <button close-dialog="true" class="btn-dialog-close"><i class="fas fa-times"></i></button>\n  </div>\n  <div class="dialog-errors"></div>\n  <div id="dialogContent" class="dialog-content">\n' +
                (null != (f = c.invokePartial(b.lookup.call(l, a, "template", {
                    name: "lookup",
                    hash: {},
                    data: d
                }), a, {
                    data: d,
                    indent: "      ",
                    helpers: b,
                    partials: g,
                    decorators: c.decorators
                })) ? f : "") + "  </div>\n</div>\n"
        },
        usePartial: !0,
        useData: !0
    });
    m.filters = h({
        1: function(c, a, b, g, d) {
            return "active"
        },
        3: function(c, a, b, g, d) {
            return "filter-active"
        },
        5: function(c, a, b, g, d) {
            return " checked "
        },
        7: function(c, a, b, g, d, f, k) {
            var l, h;
            g = null != a ? a : c.nullContext || {};
            var m = b.helperMissing,
                n = c.escapeExpression;
            return '      <label class="filter_tipo_option filter_connectors ' +
                (null != (l = b["if"].call(g, (b.or || a && a.or || m).call(g, (b.eq || a && a.eq || m).call(g, null != (l = null != k[1] ? k[1].filter_settings : k[1]) ? l.connector : l, !0, {
                    name: "eq",
                    hash: {},
                    data: d
                }), (b.inArr || a && a.inArr || m).call(g, null != a ? a.id : a, null != (l = null != k[1] ? k[1].filter_settings : k[1]) ? l.connector : l, {
                    name: "inArr",
                    hash: {},
                    data: d
                }), {
                    name: "or",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(3, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '" data-idconnector="' + n((h = null != (h = b.id || (null != a ? a.id : a)) ? h : m, "function" === typeof h ? h.call(g, {
                    name: "id",
                    hash: {},
                    data: d
                }) : h)) + '">\n        <span class="' + n((h = null != (h = b["class"] || (null != a ? a["class"] : a)) ? h : m, "function" === typeof h ? h.call(g, {
                    name: "class",
                    hash: {},
                    data: d
                }) : h)) + '" style="margin-right: 10px;"></span>\n        ' + n((h = null != (h = b.text || (null != a ? a.text : a)) ? h : m, "function" === typeof h ? h.call(g, {
                    name: "text",
                    hash: {},
                    data: d
                }) : h)) + "\n      </label>\n" + (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, d && d.index, 5, {
                    name: "eq",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(8, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "")
        },
        8: function(c, a, b, g, d) {
            return '        <div id="more_connectors" class="more_connectors" style="display:none">\n'
        },
        10: function(c, a, b, g, d, f, k) {
            var l, h;
            g = null != a ? a : c.nullContext || {};
            var m = b.helperMissing,
                n = c.escapeExpression;
            return '    <label class="filter_tipo_option filter_types ' + (null != (l = b["if"].call(g, (b.or || a && a.or || m).call(g, (b.eq || a && a.eq || m).call(g, null != (l = null != k[1] ? k[1].filter_settings : k[1]) ? l.type : l, !0, {
                name: "eq",
                hash: {},
                data: d
            }), (b.inArr || a && a.inArr || m).call(g, null != a ?
                a.id : a, null != (l = null != k[1] ? k[1].filter_settings : k[1]) ? l.type : l, {
                    name: "inArr",
                    hash: {},
                    data: d
                }), {
                name: "or",
                hash: {},
                data: d
            }), {
                name: "if",
                hash: {},
                fn: c.program(3, d, 0, f, k),
                inverse: c.noop,
                data: d
            })) ? l : "") + '" data-idtype="' + n((h = null != (h = b.id || (null != a ? a.id : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "id",
                hash: {},
                data: d
            }) : h)) + '">\n      <img src="' + n((h = null != (h = b.base_url || (null != a ? a.base_url : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "base_url",
                hash: {},
                data: d
            }) : h)) + "mapmarkers/99." + n((h = null != (h = b.id ||
                (null != a ? a.id : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "id",
                hash: {},
                data: d
            }) : h)) + '.0.svg" width="28" height="36" />\n      ' + n((h = null != (h = b.text || (null != a ? a.text : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "text",
                hash: {},
                data: d
            }) : h)) + "\n    </label>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d, f, h) {
            var l, k;
            g = null != a ? a : c.nullContext || {};
            var m = b.helperMissing,
                n = c.escapeExpression;
            return '<div id="filters" class="map-layer" style="display: none;">\n  <h3>' + n((b.I18n || a && a.I18n || m).call(g,
                    "Activation", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + '</h3>\n  <div class="filter-grup pad-rl10 bb1">\n    <div class="filterd f-rfid filter_active_rfid  ' + (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, null != (l = null != a ? a.filter_settings : a) ? l.rfid : l, 1, {
                    name: "eq",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(1, d, 0, f, h),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '">\n      <p>\n        ' + n((b.I18n || a && a.I18n || m).call(g, "RFID", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n      </p>\n    </div>\n    <div class="filterd f-app filter_active_app ' +
                (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, null != (l = null != a ? a.filter_settings : a) ? l.app : l, 1, {
                    name: "eq",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(1, d, 0, f, h),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '">\n      <p>\n        ' + n((b.I18n || a && a.I18n || m).call(g, "APP", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n      </p>\n    </div>\n  </div>\n\n  <div class="filter-grup pad-rl10">\n    <label class="filter_tipo_option filter_realtime ' + (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, null != (l = null != a ? a.filter_settings :
                    a) ? l.realtime : l, 1, {
                    name: "eq",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(3, d, 0, f, h),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '">\n      <img src="' + n((k = null != (k = b.base_url || (null != a ? a.base_url : a)) ? k : m, "function" === typeof k ? k.call(g, {
                    name: "base_url",
                    hash: {},
                    data: d
                }) : k)) + 'mapmarkers/1.1.1.svg" width="28" height="36" />\n      ' + n((b.I18n || a && a.I18n || m).call(g, "Only realtime chargestations", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "\n    </label>\n  </div>\n\n  <h3>" + n((b.I18n || a && a.I18n || m).call(g, "Minium charge power", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ': <span class="speed_val">' + n((k = null != (k = b.speedLabel || (null != a ? a.speedLabel : a)) ? k : m, "function" === typeof k ? k.call(g, {
                    name: "speedLabel",
                    hash: {},
                    data: d
                }) : k)) + '</span></h3>\n  <div class="filter-grup pad-rl10">\n    <label class="">\n      <input class="slider filter_speed" type="range" min="0" max="8" value="' + n(c.lambda(null != (l = null != a ? a.filter_settings : a) ? l.speed : l, a)) + '" step="1" />\n    </label>\n  </div>\n\n  <h3>\n      ' + n((b.I18n || a && a.I18n || m).call(g, "Plug type", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n      <label>\n        <input id="filter_ctodos" class="filter_todos" data-grup="filter_connectors" type="checkbox" ' + (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, null != (l = null != a ? a.filter_settings : a) ? l.connector : l, !0, {
                    name: "eq",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(5, d, 0, f, h),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + ' name="ctodos" value="1">\n        ' + n((b.I18n || a && a.I18n || m).call(g, "All", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n      </label>\n  </h3>\n  <div class="filter-grup pad-rl10">\n' +
                (null != (l = b.each.call(g, null != a ? a.connectors : a, {
                    name: "each",
                    hash: {},
                    fn: c.program(7, d, 0, f, h),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '  </div>\n  <a href="#" id="show_more_connectors" class="show-more" style="clear: both; display: block; float: right; margin: 10px 0 0 0;">' + n((b.I18n || a && a.I18n || m).call(g, "Show more", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</a>\n  </div>\n\n<h3>\n    " + n((b.I18n || a && a.I18n || m).call(g, "Location type", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    <label>\n       <input id="filter_ttodos" class="filter_todos" data-grup="filter_types" type="checkbox" ' +
                (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, null != (l = null != a ? a.filter_settings : a) ? l.type : l, !0, {
                    name: "eq",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(5, d, 0, f, h),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + ' name="ttodos" value="1">\n       ' + n((b.I18n || a && a.I18n || m).call(g, "All", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </label>\n</h3>\n<div class="filter-grup pad-rl10">\n' + (null != (l = b.each.call(g, null != a ? a.tiposp : a, {
                    name: "each",
                    hash: {},
                    fn: c.program(10, d, 0, f, h),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '</div>\n</div>\n\n\n<div id="info_status" class="map-layer" style="display: none;">\n  <div class="info-status-block">\n    <h3>\n      ' +
                n((b.I18n || a && a.I18n || m).call(g, "Realtime statuses", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </h3>\n    <p><img src="' + n((k = null != (k = b.base_url || (null != a ? a.base_url : a)) ? k : m, "function" === typeof k ? k.call(g, {
                    name: "base_url",
                    hash: {},
                    data: d
                }) : k)) + 'mapmarkers/1.1.1.svg"/>\n      ' + n((b.I18n || a && a.I18n || m).call(g, "Available", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </p>\n    <p><img src="' + n((k = null != (k = b.base_url || (null != a ? a.base_url : a)) ? k : m, "function" === typeof k ? k.call(g, {
                    name: "base_url",
                    hash: {},
                    data: d
                }) : k)) +
                'mapmarkers/4.1.1.svg"/>\n      ' + n((b.I18n || a && a.I18n || m).call(g, "Occupied", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </p>\n    <p> <img src="' + n((k = null != (k = b.base_url || (null != a ? a.base_url : a)) ? k : m, "function" === typeof k ? k.call(g, {
                    name: "base_url",
                    hash: {},
                    data: d
                }) : k)) + 'mapmarkers/3.1.1.svg"/>\n      ' + n((b.I18n || a && a.I18n || m).call(g, "Out of service", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </p>\n    <p> <img src="' + n((k = null != (k = b.base_url || (null != a ? a.base_url : a)) ? k : m, "function" === typeof k ? k.call(g, {
                    name: "base_url",
                    hash: {},
                    data: d
                }) : k)) + 'mapmarkers/6.1.1.svg"/>\n      ' + n((b.I18n || a && a.I18n || m).call(g, "Unknown", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </p>\n  </div>\n  <div class="info-status-block">\n    <h3>\n      ' + n((b.I18n || a && a.I18n || m).call(g, "Statuses reported by users", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </h3>\n    <p><img src="' + n((k = null != (k = b.base_url || (null != a ? a.base_url : a)) ? k : m, "function" === typeof k ? k.call(g, {
                    name: "base_url",
                    hash: {},
                    data: d
                }) : k)) + 'mapmarkers/1.1.0.svg"/>\n      ' + n((b.I18n || a && a.I18n ||
                    m).call(g, "Works", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </p>\n    <p><img src="' + n((k = null != (k = b.base_url || (null != a ? a.base_url : a)) ? k : m, "function" === typeof k ? k.call(g, {
                    name: "base_url",
                    hash: {},
                    data: d
                }) : k)) + 'mapmarkers/2.1.0.svg"/>\n      ' + n((b.I18n || a && a.I18n || m).call(g, "Some plugs do not work", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </p>\n    <p><img src="' + n((k = null != (k = b.base_url || (null != a ? a.base_url : a)) ? k : m, "function" === typeof k ? k.call(g, {
                    name: "base_url",
                    hash: {},
                    data: d
                }) : k)) + 'mapmarkers/3.1.0.svg"/>\n      ' +
                n((b.I18n || a && a.I18n || m).call(g, "Does not work", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n    </p>\n    <p><img src="' + n((k = null != (k = b.base_url || (null != a ? a.base_url : a)) ? k : m, "function" === typeof k ? k.call(g, {
                    name: "base_url",
                    hash: {},
                    data: d
                }) : k)) + 'mapmarkers/6.1.0.svg"/>\n      ' + n((b.I18n || a && a.I18n || m).call(g, "Unknown", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "\n    </p>\n  </div>\n</div>\n"
        },
        useData: !0,
        useDepths: !0
    });
    m.header = h({
        1: function(c, a, b, g, d) {
            g = null != a ? a : c.nullContext || {};
            var f = b.helperMissing;
            c = c.escapeExpression;
            return '<li id="MyProfileBtn">\n    <span title="' + c((b.I18n || a && a.I18n || f).call(g, "My profile", {
                name: "I18n",
                hash: {},
                data: d
            })) + '"><i class="fas fa-user"></i> ' + c((b.I18n || a && a.I18n || f).call(g, "My profile", {
                name: "I18n",
                hash: {},
                data: d
            })) + '</span>\n</li>\n<li id="MyChargesBtn" class="hide-def">\n    <span title="' + c((b.I18n || a && a.I18n || f).call(g, "My charging sessions", {
                name: "I18n",
                hash: {},
                data: d
            })) + '"><i class="fas fa-charging-station"></i> ' + c((b.I18n || a && a.I18n || f).call(g, "My charging sessions", {
                name: "I18n",
                hash: {},
                data: d
            })) + '</span>\n</li>\n<li id="MyTokensBtn" class="hide-def">\n    <span title="' + c((b.I18n || a && a.I18n || f).call(g, "My tokens", {
                name: "I18n",
                hash: {},
                data: d
            })) + '"><i class="fas fa-key"></i> ' + c((b.I18n || a && a.I18n || f).call(g, "My tokens", {
                name: "I18n",
                hash: {},
                data: d
            })) + '</span>\n</li>\n<li id="MyInvoicesBtn" class="hide-def">\n    <span title="' + c((b.I18n || a && a.I18n || f).call(g, "My invoices", {
                name: "I18n",
                hash: {},
                data: d
            })) + '"><i class="fas fa-receipt"></i> ' + c((b.I18n || a && a.I18n || f).call(g, "My invoices", {
                name: "I18n",
                hash: {},
                data: d
            })) + '</span>\n</li>\n<li id="LogoutBtn">\n    <span title="' + c((b.I18n || a && a.I18n || f).call(g, "Log out", {
                name: "I18n",
                hash: {},
                data: d
            })) + '"><i class="fas fa-sign-out-alt"></i> ' + c((b.I18n || a && a.I18n || f).call(g, "Log out", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</span>\n</li>\n"
        },
        3: function(c, a, b, g, d) {
            g = null != a ? a : c.nullContext || {};
            var f = b.helperMissing;
            c = c.escapeExpression;
            return '<li id="RegisterBtn">\n    <span title="' + c((b.I18n || a && a.I18n || f).call(g, "Register", {
                name: "I18n",
                hash: {},
                data: d
            })) + '"><i class="fas fa-user-plus"></i> ' + c((b.I18n || a && a.I18n || f).call(g, "Register", {
                name: "I18n",
                hash: {},
                data: d
            })) + '</span>\n</li>\n<li id="LoginBtn" data-param="login" data-action="loginForm" data-dialog="login">\n    <span title="' + c((b.I18n || a && a.I18n || f).call(g, "Log in", {
                name: "I18n",
                hash: {},
                data: d
            })) + '"><i class="fas fa-sign-in-alt"></i> ' + c((b.I18n || a && a.I18n || f).call(g, "Log in", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</span>\n</li>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f;
            return null !=
                (f = b["if"].call(null != a ? a : c.nullContext || {}, null != a ? a.iduser : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(1, d, 0),
                    inverse: c.program(3, d, 0),
                    data: d
                })) ? f : ""
        },
        useData: !0
    });
    m.invoices = h({
        1: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing,
                l = c.escapeExpression;
            return '  <div class="thead">\n    <div class="th">' + l((b.I18n || a && a.I18n || k).call(g, "Id", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</div>\n    <div class="th">' + l((b.I18n || a && a.I18n || k).call(g, "Date", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</div>\n    <div class="th">' +
                l((b.I18n || a && a.I18n || k).call(g, "From", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</div>\n    <div class="th">' + l((b.I18n || a && a.I18n || k).call(g, "To", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</div>\n    <div class="th">' + l((b.I18n || a && a.I18n || k).call(g, "Amount", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</div>\n    <div class="th"></div>\n  </div>\n  <div class="tbody">\n' + (null != (f = b.each.call(g, null != a ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: c.program(2, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + "  </div>\n"
        },
        2: function(c, a, b, g, d) {
            var f;
            g =
                null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '      <div class="tr">\n        <div class="td">' + c((f = null != (f = b.id || (null != a ? a.id : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "id",
                hash: {},
                data: d
            }) : f)) + '</div>\n        <div class="td">' + c((f = null != (f = b.invoice_date || (null != a ? a.invoice_date : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "invoice_date",
                hash: {},
                data: d
            }) : f)) + '</div>\n        <div class="td">' + c((f = null != (f = b.period_start || (null != a ? a.period_start : a)) ? f : k, "function" ===
                typeof f ? f.call(g, {
                    name: "period_start",
                    hash: {},
                    data: d
                }) : f)) + '</div>\n        <div class="td">' + c((f = null != (f = b.period_end || (null != a ? a.period_end : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "period_end",
                hash: {},
                data: d
            }) : f)) + '</div>\n        <div class="td">' + c((f = null != (f = b["import"] || (null != a ? a["import"] : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "import",
                hash: {},
                data: d
            }) : f)) + '</div>\n        <div class="td"><a href="' + c((f = null != (f = b.pdf_url || (null != a ? a.pdf_url : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "pdf_url",
                hash: {},
                data: d
            }) : f)) + '" target="_blank"><i class="fas fa-file-download"></i></a></div>\n      </div>\n'
        },
        4: function(c, a, b, g, d) {
            return '  <div class="table-empty">\n    ' + c.escapeExpression((b.I18n || a && a.I18n || b.helperMissing).call(null != a ? a : c.nullContext || {}, "No bills yet", {
                name: "I18n",
                hash: {},
                data: d
            })) + "\n  </div>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            return '<div id="invoices" class="dialog-table">\n' + (null != (f = b["if"].call(g, null !=
                a ? a.data : a, {
                    name: "if",
                    hash: {},
                    fn: c.program(1, d, 0),
                    inverse: c.program(4, d, 0),
                    data: d
                })) ? f : "") + '  <button id="editBilling" class="form-btn btn-add width-100"><i class="fas fa-file-alt"></i> ' + c.escapeExpression((b.I18n || a && a.I18n || b.helperMissing).call(g, "Edit my billing information", {
                name: "I18n",
                hash: {},
                data: d
            })) + "</button>\n</div>\n"
        },
        useData: !0
    });
    m.login = h({
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            g = null != a ? a : c.nullContext || {};
            var f = b.helperMissing;
            c = c.escapeExpression;
            return '<form id="login_form">\n  <div class="form-element form-input">\n    <input id="field-usermail" class="form-element-field" name="usermail" placeholder="' +
                c((b.I18n || a && a.I18n || f).call(g, "Enter your user email", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '" type="email" required autofocus />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-usermail">' + c((b.I18n || a && a.I18n || f).call(g, "Email", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-password" class="form-element-field" name="password" placeholder="' + c((b.I18n || a && a.I18n || f).call(g, "Enter your password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '" type="password" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-password">' + c((b.I18n || a && a.I18n || f).call(g, "Password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-check">\n    <label class="form-checkbox-label">\n      <input name=remember_me class="form-checkbox-field" type="checkbox" value="1" />\n      <i class="form-checkbox-button"></i>\n      <span>' + c((b.I18n ||
                    a && a.I18n || f).call(g, "Remember me", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</span>\n    </label>\n  </div>\n\n  <div class="form-element">\n    <label id="RecoverBtn">' + c((b.I18n || a && a.I18n || f).call(g, "Recover password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + c((b.I18n || a && a.I18n || f).call(g, "Log in", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button id="RegisterLoginBtn" type="button"  class="form-btn-cancel">' + c((b.I18n ||
                    a && a.I18n || f).call(g, "Register", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n  </div>\n</form>\n"
        },
        useData: !0
    });
    m.modal = h({
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f;
            return '<div class="text-modal">\n  ' + (null != (f = c.lambda(null != (f = null != a ? a.data : a) ? f.text : f, a)) ? f : "") + "\n</div>\n"
        },
        useData: !0
    });
    m.photo = h({
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '<div class="image-unit">\n  <a href="' + c((f = null !=
                (f = b.l || (null != a ? a.l : a)) ? f : k, "function" === typeof f ? f.call(g, {
                    name: "l",
                    hash: {},
                    data: d
                }) : f)) + '" title="' + c((f = null != (f = b.upload_by || (null != a ? a.upload_by : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "upload_by",
                hash: {},
                data: d
            }) : f)) + " el " + c((f = null != (f = b.date || (null != a ? a.date : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "date",
                hash: {},
                data: d
            }) : f)) + '"><img src="' + c((f = null != (f = b.m || (null != a ? a.m : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "m",
                hash: {},
                data: d
            }) : f)) + '"></a>\n</div>\n'
        },
        useData: !0
    });
    m.photoForm =
        h({
            compiler: [7, ">= 4.0.0"],
            main: function(c, a, b, g, d) {
                g = null != a ? a : c.nullContext || {};
                var f = b.helperMissing;
                c = c.escapeExpression;
                return '<form id="newphoto_form">\n  <div style="text-align:center">\n    <img id="img" src="" style="max-width: 200px;max-height: 150px;">\n  </div>\n  <input type="hidden" id="base64img" name="base64img" required>\n\n  <div class="form-element form-textarea">\n    <input type="file" id="image_file" required autofocus />\n    <div class="form-element-bar"></div>\n    <small class="form-element-hint">' +
                    c((b.I18n || a && a.I18n || f).call(g, "Only jpg & png", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + '</small>\n  </div>\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + c((b.I18n || a && a.I18n || f).call(g, "Upload", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' + c((b.I18n || a && a.I18n || f).call(g, "Cancel", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + "</button>\n  </div>\n</form>\n"
            },
            useData: !0
        });
    m.recover = h({
        compiler: [7,
            ">= 4.0.0"
        ],
        main: function(c, a, b, g, d) {
            g = null != a ? a : c.nullContext || {};
            var f = b.helperMissing;
            c = c.escapeExpression;
            return '<form id="recover_form">\n  <div class="form-element form-input">\n    <input id="field-usermail" class="form-element-field" name="usermail" placeholder="' + c((b.I18n || a && a.I18n || f).call(g, "Enter your user email", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '" type="email" required autofocus />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-usermail">' +
                c((b.I18n || a && a.I18n || f).call(g, "Email", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + c((b.I18n || a && a.I18n || f).call(g, "Recover password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' + c((b.I18n || a && a.I18n || f).call(g, "Cancel", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n  </div>\n</form>\n"
        },
        useData: !0
    });
    m.register = h({
        1: function(c,
            a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing;
            c = c.escapeExpression;
            return '          <option value="' + c((f = null != (f = b.id || (null != a ? a.id : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "id",
                hash: {},
                data: d
            }) : f)) + '">' + c((f = null != (f = b.text || (null != a ? a.text : a)) ? f : k, "function" === typeof f ? f.call(g, {
                name: "text",
                hash: {},
                data: d
            }) : f)) + "</option>\n"
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing,
                l = c.escapeExpression;
            return '<form id="register_form">\n  <div class="form-block-left">\n    <div class="form-element form-input">\n      <input id="field-username" class="form-element-field" name="username" placeholder=" " type="text" required autofocus />\n      <div class="form-element-bar"></div>\n      <label class="form-element-label" for="field-username">' +
                l((b.I18n || a && a.I18n || k).call(g, "Username", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n      <small class="form-element-hint">' + l((b.I18n || a && a.I18n || k).call(g, "User name that Electromaps users will see Only numbers, letters and underscore", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + l((b.I18n || a && a.I18n || k).call(g, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n    </div>\n\n    <div class="form-element form-input">\n      <input id="field-email" class="form-element-field" name="usermail" placeholder=" " type="email" required />\n      <div class="form-element-bar"></div>\n      <label class="form-element-label" for="field-email">' +
                l((b.I18n || a && a.I18n || k).call(g, "Email", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n      <small class="form-element-hint">' + l((b.I18n || a && a.I18n || k).call(g, "Email will be sent to validate and activate the account", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "' (" + l((b.I18n || a && a.I18n || k).call(g, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n    </div>\n\n    <div class="form-element form-input">\n      <input id="field-password" class="form-element-field" name="password" placeholder="' + l((b.I18n || a && a.I18n ||
                    k).call(g, "Minium 6 characters", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '" type="password" required />\n      <div class="form-element-bar"></div>\n      <label class="form-element-label" for="field-password">' + l((b.I18n || a && a.I18n || k).call(g, "Password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    </div>\n\n    <div class="form-element form-select">\n      <select id="field-country" name="pais" class="form-element-field" required>\n        <option disabled selected value="" class="form-select-placeholder"></option>\n' +
                (null != (f = b.each.call(g, null != (f = null != a ? a.data : a) ? f.countries : f, {
                    name: "each",
                    hash: {},
                    fn: c.program(1, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + '      </select>\n      <div class="form-element-bar"></div>\n      <label class="form-element-label" for="field-country">' + l((b.I18n || a && a.I18n || k).call(g, "Select your country", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    </div>\n\n    <div class="form-element form-input">\n      <input id="field-postalcode" class="form-element-field" name="postal_code" placeholder=" " type="text" required />\n      <div class="form-element-bar"></div>\n      <label class="form-element-label" for="field-postalcode">' +
                l((b.I18n || a && a.I18n || k).call(g, "Postal code", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n      <small class="form-element-hint">' + l((b.I18n || a && a.I18n || k).call(g, "To be informed of new chargepoints in your area", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + l((b.I18n || a && a.I18n || k).call(g, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n    </div>\n\n    <div class="form-element form-check">\n      <label class="form-checkbox-label">\n        <input name=newsletter class="form-checkbox-field" type="checkbox" value="1" />\n        <i class="form-checkbox-button"></i>\n        <span>' +
                l((b.I18n || a && a.I18n || k).call(g, "I want to recive last newsletters from electromaps", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</span>\n      </label>\n\n      <label class="form-checkbox-label">\n        <input name=condiciones class="form-checkbox-field" type="checkbox" value="1" required />\n        <i class="form-checkbox-button"></i>\n        <span>' + l((b.I18n || a && a.I18n || k).call(g, "I accept the terms and condicions of the service and the treatment of my personal data", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '  <a href="#" class="modal-terms-of-use">' +
                l((b.I18n || a && a.I18n || k).call(g, "Terms os use", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</a></span>\n      </label>\n    </div>\n  </div>\n\n  <div class="form-legend-right">\n    <h2>' + l((b.I18n || a && a.I18n || k).call(g, "basic information about personal data protection", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</h2>\n    <h4>" + l((b.I18n || a && a.I18n || k).call(g, "Responsable", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</h4>\n    <p>Electromaps, S.L.</p>\n    <h4>" + l((b.I18n || a && a.I18n || k).call(g, "Purpose", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) +
                "</h4>\n    <p>" + l((b.I18n || a && a.I18n || k).call(g, "Informative and advertising", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ".</p>\n    <h4>" + l((b.I18n || a && a.I18n || k).call(g, "Legitimation", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</h4>\n    <p>" + l((b.I18n || a && a.I18n || k).call(g, "Consent of the interested party", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ".</p>\n    <h4>" + l((b.I18n || a && a.I18n || k).call(g, "Recipients", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</h4>\n    <p>" + l((b.I18n || a && a.I18n || k).call(g, "The data will not be transferred to third parties except legal obligation or request of the User", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ".</p>\n    <h4>" + l((b.I18n || a && a.I18n || k).call(g, "Rights", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</h4>\n    <p>" + l((b.I18n || a && a.I18n || k).call(g, "Access, rectify and delete data, as well as other rights, as explained in the additional information", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ".</p>\n    <h4>" + l((b.I18n || a && a.I18n || k).call(g, "Additional Information", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</h4>\n    <p>" + l((b.I18n || a && a.I18n || k).call(g, "You can access additional and detailed information about the Data Protection policy in the following", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '\n      <a href="#" class="modal-terms-of-use">' + l((b.I18n || a && a.I18n || k).call(g, "link", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</a>.</p>\n  </div>\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + l((b.I18n || a && a.I18n || k).call(g, "Register", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' + l((b.I18n || a && a.I18n || k).call(g, "Cancel", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) +
                "</button>\n  </div>\n</form>\n"
        },
        useData: !0
    });
    m.route = h({
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            g = null != a ? a : c.nullContext || {};
            var f = b.helperMissing;
            c = c.escapeExpression;
            return '<div id="route_div" class="map-layer" style="display: none">\n  <h3>' + c((b.I18n || a && a.I18n || f).call(g, "Route", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</h3>\n  <form id="route_form">\n  <div class="form-element form-input">\n    <input id="route_origin" class="form-element-field" name="route_origin" placeholder="' + c((b.I18n ||
                    a && a.I18n || f).call(g, "Enter origin location", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '" type="text" required  />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-route_origin">' + c((b.I18n || a && a.I18n || f).call(g, "Origin", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="route_destination" class="form-element-field" name="route_destination" placeholder="' + c((b.I18n || a && a.I18n || f).call(g, "Enter destination location", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '" type="text" required  />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-route_destination">' + c((b.I18n || a && a.I18n || f).call(g, "Destination", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="route_chunk" class="form-element-field" name="route_chunk" placeholder="' + c((b.I18n || a && a.I18n || f).call(g, "Enter distance in km", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '" type="number"  />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-route_chunk">' +
                c((b.I18n || a && a.I18n || f).call(g, "Divide route into sections of", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-select">\n    <select id="route_buffer" name="route_buffer" class="form-element-field" required>\n      <option disabled selected value="0" class="form-select-placeholder"></option>\n      <option value="0">No</option>\n      <option value="1">1km</option>\n      <option value="5">5km</option>\n      <option value="10">10km</option>\n      <option value="15">15km</option>\n    </select>\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-country">' +
                c((b.I18n || a && a.I18n || f).call(g, "Maximum deviation", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + c((b.I18n || a && a.I18n || f).call(g, "Get route", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button id="ResetRouteBtn" type="button"  class="form-btn-cancel">' + c((b.I18n || a && a.I18n || f).call(g, "Reset", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n  </div>\n  </form>\n</div>\n"
        },
        useData: !0
    });
    m.tokenAdd = h({
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            g = null != a ? a : c.nullContext || {};
            var f = b.helperMissing;
            c = c.escapeExpression;
            return '<form>\n  <div class="form-element form-input">\n    <input id="field-keychain" class="form-element-field" name="keychain_code"\n        value="" type="text" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-keychain">' + c((b.I18n || a && a.I18n || f).call(g, "Token code", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' +
                c((b.I18n || a && a.I18n || f).call(g, "Insert token code recived with it", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</small>\n  </div>\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + c((b.I18n || a && a.I18n || f).call(g, "Save", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' + c((b.I18n || a && a.I18n || f).call(g, "Cancel", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n  </div>\n</form>\n"
        },
        useData: !0
    });
    m.tokenEdit =
        h({
            1: function(c, a, b, g, d) {
                return " selected "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(c, a, b, g, d) {
                var f;
                g = c.escapeExpression;
                var k = null != a ? a : c.nullContext || {},
                    l = b.helperMissing;
                return '<form>\n  <div class="form-element form-input">\n    <input id="field-alias" class="form-element-field" name="alias" value="' + g(c.lambda(null != (f = null != a ? a.data : a) ? f.alias : f, a)) + '" type="text" maxlength="20" />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-alias">' + g((b.I18n ||
                        a && a.I18n || l).call(k, "Alias", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + '</label>\n    <small class="form-element-hint">' + g((b.I18n || a && a.I18n || l).call(k, "Set an alias to indentify this token", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + '</small>\n  </div>\n\n  <div class="form-element form-select">\n    <select id="field-active" name="active" class="form-element-field -hasvalue" required autofocus>\n      <option value="0" ' + (null != (f = b["if"].call(k, (b.eq || a && a.eq || l).call(k, null != (f = null != a ? a.data : a) ? f.active : f, "0", {
                        name: "eq",
                        hash: {},
                        data: d
                    }), {
                        name: "if",
                        hash: {},
                        fn: c.program(1, d, 0),
                        inverse: c.noop,
                        data: d
                    })) ? f : "") + "> " + g((b.I18n || a && a.I18n || l).call(k, "Disabled", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + '</option>\n      <option value="1" ' + (null != (f = b["if"].call(k, (b.eq || a && a.eq || l).call(k, null != (f = null != a ? a.data : a) ? f.active : f, "1", {
                        name: "eq",
                        hash: {},
                        data: d
                    }), {
                        name: "if",
                        hash: {},
                        fn: c.program(1, d, 0),
                        inverse: c.noop,
                        data: d
                    })) ? f : "") + "> " + g((b.I18n || a && a.I18n || l).call(k, "Active", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + '</option>\n    </select>\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-active">' +
                    g((b.I18n || a && a.I18n || l).call(k, "Token status", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + '</label>\n  </div>\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + g((b.I18n || a && a.I18n || l).call(k, "Save", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' + g((b.I18n || a && a.I18n || l).call(k, "Cancel", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + "</button>\n  </div>\n</form>\n"
            },
            useData: !0
        });
    m.tokens = h({
        1: function(c,
            a, b, g, d) {
            var f, k;
            g = null != a ? a : c.nullContext || {};
            var l = b.helperMissing,
                h = c.escapeExpression;
            return '      <div class="tr ' + (null != (f = b["if"].call(g, (b.eq || a && a.eq || l).call(g, null != a ? a.active : a, "0", {
                    name: "eq",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(2, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + '">\n        <div class="td"><span class="f-rfid ' + (null != (f = b["if"].call(g, (b.eq || a && a.eq || l).call(g, null != a ? a.active : a, "1", {
                        name: "eq",
                        hash: {},
                        data: d
                    }), {
                        name: "if",
                        hash: {},
                        fn: c.program(4, d, 0),
                        inverse: c.noop,
                        data: d
                    })) ?
                    f : "") + '"></span></div>\n        <div class="td">' + h((k = null != (k = b.idkeychain || (null != a ? a.idkeychain : a)) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "idkeychain",
                    hash: {},
                    data: d
                }) : k)) + '</div>\n        <div class="td">' + h((k = null != (k = b.alias || (null != a ? a.alias : a)) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "alias",
                    hash: {},
                    data: d
                }) : k)) + '</div>\n        <div class="td">' + h((k = null != (k = b.date_activate || (null != a ? a.date_activate : a)) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "date_activate",
                    hash: {},
                    data: d
                }) : k)) +
                '</div>\n        <div class="td">\n            <button type="button" class="btn-action btn-edit" data-i="' + h((k = null != (k = b.index || d && d.index) ? k : l, "function" === typeof k ? k.call(g, {
                    name: "index",
                    hash: {},
                    data: d
                }) : k)) + '"><i class="fas fa-pen"></i></button>\n        </div>\n      </div>\n'
        },
        2: function(c, a, b, g, d) {
            return " disabled "
        },
        4: function(c, a, b, g, d) {
            return " active "
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            return '<div id="tokens" class="dialog-table">\n  <div class="tbody">\n' +
                (null != (f = b.each.call(g, null != a ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: c.program(1, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + '  </div>\n  <button id="addToken" class="form-btn btn-add width-100"><i class="fas fa-plus"></i> ' + c.escapeExpression((b.I18n || a && a.I18n || b.helperMissing).call(g, "Add token", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n</div>\n"
        },
        useData: !0
    });
    m.user = h({
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f;
            g = c.lambda;
            var k = c.escapeExpression;
            c = null != a ? a : c.nullContext || {};
            var l = b.helperMissing;
            return '<div id="userProfile" class="dialog-table">\n  <div class="user-avatar">\n    <img id="editAvatar" src="' + k(g(null != (f = null != a ? a.data : a) ? f.avatar_url_large : f, a)) + '">\n  </div>\n  <div class="user-name"><span class="profile-legend">' + k((b.I18n || a && a.I18n || l).call(c, "Username", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ":</span> " + k(g(null != (f = null != a ? a.data : a) ? f.username : f, a)) + '</div>\n  <div class="user-email"><span class="profile-legend">' + k((b.I18n || a && a.I18n || l).call(c, "Email", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ":</span> " + k(g(null != (f = null != a ? a.data : a) ? f.email : f, a)) + '</div>\n  <div class="user-country"><span class="profile-legend">' + k((b.I18n || a && a.I18n || l).call(c, "Country", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ":</span> " + k(g(null != (f = null != a ? a.data : a) ? f.pais : f, a)) + '</div>\n  <div class="user-about"><span class="profile-legend">' + k((b.I18n || a && a.I18n || l).call(c, "About", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ":</span> " + k(g(null != (f = null != a ? a.data : a) ? f.aboutme : f, a)) + '</div>\n  <div class="user-rank"><span class="profile-legend">' +
                k((b.I18n || a && a.I18n || l).call(c, "Score", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ":</span> " + k(g(null != (f = null != a ? a.data : a) ? f.total_rank : f, a)) + '</div>\n\n  <button id="editProfile" class="form-btn width-100"><i class="fas fa-user-edit"></i> ' + k((b.I18n || a && a.I18n || l).call(c, "Edit profile", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n  <button id="editAccount" class="form-btn width-100"><i class="fas fa-user-shield"></i> ' + k((b.I18n || a && a.I18n || l).call(c, "Edit account", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n  <button id="editPassword" class="form-btn width-100"><i class="fas fa-key"></i> ' +
                k((b.I18n || a && a.I18n || l).call(c, "Change password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n  <button id="editNotifications" class="form-btn width-100"><i class="fas fa-bell"></i> ' + k((b.I18n || a && a.I18n || l).call(c, "Edit notifications", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n</div>\n"
        },
        useData: !0
    });
    m.userAccountForm = h({
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f;
            g = c.lambda;
            var k = c.escapeExpression;
            c = null != a ? a : c.nullContext || {};
            var l = b.helperMissing;
            return '<form id="profile_form">\n  <div class="form-element form-input">\n    <input id="field-username" class="form-element-field" name="username" type="text" value="' +
                k(g(null != (f = null != a ? a.data : a) ? f.username : f, a)) + '" required autofocus />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-username">' + k((b.I18n || a && a.I18n || l).call(c, "Username", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + k((b.I18n || a && a.I18n || l).call(c, 'User name that Electromaps users will see "Only numbers, letters and underscore"', {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + k((b.I18n || a && a.I18n || l).call(c, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-email" class="form-element-field" name="email" type="text" value="' + k(g(null != (f = null != a ? a.data : a) ? f.email : f, a)) + '" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-email">' + k((b.I18n || a && a.I18n || l).call(c, "Email", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + k((b.I18n || a && a.I18n || l).call(c, 'User email "It will be validated by mail"', {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + k((b.I18n || a && a.I18n || l).call(c, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ")</small>\n  </div>\n\n  <h3>" + k((b.I18n || a && a.I18n || l).call(c, "Confirm with your password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</h3>\n\n  <div class="form-element form-input">\n    <input id="field-password" class="form-element-field" name="password" placeholder="' + k((b.I18n || a && a.I18n || l).call(c, "Enter your password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '" type="password" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-password">' +
                k((b.I18n || a && a.I18n || l).call(c, "Password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + k((b.I18n || a && a.I18n || l).call(c, "Confirm with your password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + k((b.I18n || a && a.I18n || l).call(c, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n  </div>\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + k((b.I18n || a && a.I18n || l).call(c, "Save", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' +
                k((b.I18n || a && a.I18n || l).call(c, "Cancel", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n  </div>\n</form>\n"
        },
        useData: !0
    });
    m.userNotificationsForm = h({
        1: function(c, a, b, g, d) {
            return " checked "
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            var f;
            g = null != a ? a : c.nullContext || {};
            var k = b.helperMissing,
                l = c.escapeExpression;
            return '<form id="notifications_form">\n\n  <div class="form-element form-check">\n    <label class="form-checkbox-label">\n      <input name=notif_news class="form-checkbox-field" type="checkbox" value="1" ' +
                (null != (f = b["if"].call(g, (b.eq || a && a.eq || k).call(g, null != (f = null != a ? a.data : a) ? f.notif_news : f, "1", {
                    name: "eq",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(1, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + ' />\n      <i class="form-checkbox-button"></i>\n      <span>' + l((b.I18n || a && a.I18n || k).call(g, "I want to recive news and updates from electromaps", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</span>\n    </label>\n\n    <label class="form-checkbox-label">\n      <input name=notif_resum class="form-checkbox-field" type="checkbox" value="1" ' +
                (null != (f = b["if"].call(g, (b.eq || a && a.eq || k).call(g, null != (f = null != a ? a.data : a) ? f.notif_resum : f, "1", {
                    name: "eq",
                    hash: {},
                    data: d
                }), {
                    name: "if",
                    hash: {},
                    fn: c.program(1, d, 0),
                    inverse: c.noop,
                    data: d
                })) ? f : "") + ' />\n      <i class="form-checkbox-button"></i>\n      <span>' + l((b.I18n || a && a.I18n || k).call(g, "I want yo recive notifications of new closest stations", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</span>\n    </label>\n  </div>\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + l((b.I18n ||
                    a && a.I18n || k).call(g, "Save", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' + l((b.I18n || a && a.I18n || k).call(g, "Cancel", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n  </div>\n</form>\n"
        },
        useData: !0
    });
    m.userPasswordForm = h({
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d) {
            g = null != a ? a : c.nullContext || {};
            var f = b.helperMissing;
            c = c.escapeExpression;
            return '<form id="password_form">\n\n  <div class="form-element form-input">\n    <input id="field-old_password" class="form-element-field" name="old_password" placeholder="' +
                c((b.I18n || a && a.I18n || f).call(g, "Minium 6 characters", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '" type="password" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-old_password">' + c((b.I18n || a && a.I18n || f).call(g, "Actual password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-new_password" class="form-element-field" name="new_password" placeholder="' + c((b.I18n || a && a.I18n || f).call(g, "Minium 6 characters", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '" type="password" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-new_password">' + c((b.I18n || a && a.I18n || f).call(g, "New password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-r_new_password" class="form-element-field" name="r_new_password" placeholder="' + c((b.I18n || a && a.I18n || f).call(g, "Minium 6 characters", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '" type="password" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-r_new_password">' +
                c((b.I18n || a && a.I18n || f).call(g, "Repeat password", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + c((b.I18n || a && a.I18n || f).call(g, "Save", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' + c((b.I18n || a && a.I18n || f).call(g, "Cancel", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + "</button>\n  </div>\n</form>\n"
        },
        useData: !0
    });
    m.userProfileForm = h({
        1: function(c,
            a, b, g, d, f, k) {
            var l, h;
            g = null != a ? a : c.nullContext || {};
            var m = b.helperMissing,
                n = c.escapeExpression;
            return '        <option value="' + n((h = null != (h = b.id || (null != a ? a.id : a)) ? h : m, "function" === typeof h ? h.call(g, {
                name: "id",
                hash: {},
                data: d
            }) : h)) + '" ' + (null != (l = b["if"].call(g, (b.eq || a && a.eq || m).call(g, null != a ? a.id : a, null != (l = null != k[1] ? k[1].data : k[1]) ? l.pais_code : l, {
                name: "eq",
                hash: {},
                data: d
            }), {
                name: "if",
                hash: {},
                fn: c.program(2, d, 0, f, k),
                inverse: c.noop,
                data: d
            })) ? l : "") + ">" + n((h = null != (h = b.text || (null != a ? a.text : a)) ? h :
                m, "function" === typeof h ? h.call(g, {
                    name: "text",
                    hash: {},
                    data: d
                }) : h)) + "</option>\n"
        },
        2: function(c, a, b, g, d) {
            return " selected "
        },
        compiler: [7, ">= 4.0.0"],
        main: function(c, a, b, g, d, f, k) {
            var l;
            g = c.lambda;
            var h = c.escapeExpression,
                m = null != a ? a : c.nullContext || {},
                n = b.helperMissing;
            return '<form id="profile_form">\n  <div class="form-element form-input">\n    <input id="field-name" class="form-element-field" name="name" type="text" value="' + h(g(null != (l = null != a ? a.data : a) ? l.name : l, a)) + '" />\n      <div class="form-element-bar"></div>\n      <label class="form-element-label" for="field-name">' +
                h((b.I18n || a && a.I18n || n).call(m, "Name", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-textarea">\n    <textarea id="field-aboutme" class="form-element-field" name="aboutme">' + h(g(null != (l = null != a ? a.data : a) ? l.aboutme : l, a)) + '</textarea>\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-aboutme">' + h((b.I18n || a && a.I18n || n).call(m, "About me", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n  </div>\n\n  <div class="form-element form-select">\n    <select id="field-country" name="pais_code" class="form-element-field -hasvalue" required>\n      <option disabled selected value="" class="form-select-placeholder"></option>\n' +
                (null != (l = b.each.call(m, null != (l = null != (l = null != a ? a.data : a) ? l.datatypes : l) ? l.countries : l, {
                    name: "each",
                    hash: {},
                    fn: c.program(1, d, 0, f, k),
                    inverse: c.noop,
                    data: d
                })) ? l : "") + '    </select>\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-country">' + h((b.I18n || a && a.I18n || n).call(m, "Country", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' + h((b.I18n || a && a.I18n || n).call(m, "Your country", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + h((b.I18n || a &&
                    a.I18n || n).call(m, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n  </div>\n\n  <div class="form-element form-input">\n    <input id="field-postalcode" class="form-element-field" name="postal_code" type="text" value="' + h(g(null != (l = null != a ? a.data : a) ? l.postal_code : l, a)) + '" required />\n    <div class="form-element-bar"></div>\n    <label class="form-element-label" for="field-postalcode">' + h((b.I18n || a && a.I18n || n).call(m, "Postal code", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</label>\n    <small class="form-element-hint">' +
                h((b.I18n || a && a.I18n || n).call(m, "To be informed of new chargepoints in your area", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + " (" + h((b.I18n || a && a.I18n || n).call(m, "required", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + ')</small>\n  </div>\n\n\n  <div class="form-actions">\n    <button class="form-btn" type="submit">' + h((b.I18n || a && a.I18n || n).call(m, "Save", {
                    name: "I18n",
                    hash: {},
                    data: d
                })) + '</button>\n    <button type="button" close-dialog="true" class="btn-dialog-close form-btn-cancel -nooutline">' + h((b.I18n || a && a.I18n || n).call(m,
                    "Cancel", {
                        name: "I18n",
                        hash: {},
                        data: d
                    })) + "</button>\n  </div>\n</form>\n"
        },
        useData: !0,
        useDepths: !0
    })
})();
var electromaps = {
    language: "en",
    title: "Electromaps Map",
    dataTypes: null,
    init: function(h) {
        Handlebars.registerHelper({
            eq: function(h, c) {
                return h === c
            },
            ne: function(h, c) {
                return h !== c
            },
            lt: function(h, c) {
                return h < c
            },
            gt: function(h, c) {
                return h > c
            },
            lte: function(h, c) {
                return h <= c
            },
            gte: function(h, c) {
                return h >= c
            },
            and: function() {
                return Array.prototype.slice.call(arguments).every(Boolean)
            },
            or: function() {
                return Array.prototype.slice.call(arguments, 0, -1).some(Boolean)
            },
            inArr: function(h, c) {
                h = parseInt(h);
                return Array.isArray(c) ?
                    -1 < c.indexOf(h) : !1
            },
            I18n: function(h) {
                return void 0 != i18n ? i18n(h) : h
            },
            base_url: function() {
                return void 0 != BASE_URL ? BASE_URL : "https://www.electromaps.com/"
            },
            fromNow: function(h) {
                return moment.utc(h).fromNow()
            },
            toLowerCase: function(h) {
                return h.toLowerCase()
            },
            nl2br: function(h) {
                return (h + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1<br>$2")
            }
        });
        Handlebars.partials = Handlebars.templates;
        electromaps.request("/mapi/v1/selects/translations", "GET", {}, null, function(m, c) {
            i18n.translator.add(c);
            h()
        }, function(m, c) {
            h()
        });
        (new electromaps.Web).setCookieTZ();
        moment.locale(this.language);
        document.addEventListener("change", function(h) {
            if ((h = h.target) && h.matches(".form-element-field")) h.classList[h.value ? "add" : "remove"]("-hasvalue")
        })
    },
    getDataTypes: function(h) {
        null === electromaps.dataTypes ? electromaps.request("/mapi/v1/selects/all", "GET", {}, null, function(m, c) {
            electromaps.dataTypes = c;
            h(electromaps.dataTypes)
        }, function(h, c) {
            console.log("Selects error " + error_message);
            return null
        }) : h(electromaps.dataTypes)
    },
    Map: function(h,
        m, c) {
        electromaps.Events.apply(this);
        var a = this,
            b, g, d, f = {
                mapContainer: "mapcontainer",
                mapboxContainer: "mapbox",
                dayStyle: "mapbox://styles/electromaps/cjnk55x7k0oh72sr1fcovvkxb",
                nightStyle: "mapbox://styles/electromaps/cjnkwlpsx0nxj2rpkq41z2w7b",
                accessToken: "",
                speedSteps: [0, 3, 7, 11, 22, 43, 80, 120, 160],
                speedLabels: [i18n("all"), i18n("slow"), i18n("slow"), i18n("fast"), i18n("fast"), i18n("rapid"), i18n("ultrarapid"), i18n("ultrarapid"), i18n("ultrarapid")],
                zoomChange: 8,
                style: "day",
                cookieFilters: "_elec_filters",
                mapUrl: "/mapa",
                featureUrl: "/mapi/v1/locations?all",
                filtersControl: !0,
                geolocationControl: !0,
                navigationControl: !0,
                dayNightControl: !0,
                routeControl: !0,
                addControl: !0
            },
            k = {
                app: 0,
                rfid: 0,
                realtime: 0,
                speed: 0,
                ve: !0,
                connector: !0,
                type: !0,
                center: [-3.7026, 40.4165],
                zoom: 3
            },
            l, q, C;
        for (C in h) f[C] = h[C];
        for (C in m) k[C] = m[C];
        var n = function(a, b) {
            this.button_class = a;
            this.icon_class = b
        };
        n.prototype.onAdd = function(a) {
            this.map = a;
            this.container = document.createElement("div");
            this.container.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
            a = window.document.createElement("button");
            a.className = "mapboxgl-ctrl-icon " + this.button_class;
            var b = window.document.createElement("i");
            b.className = this.icon_class;
            a.appendChild(b);
            this.container.appendChild(a);
            return this.container
        };
        n.prototype.onRemove = function() {
            this.container.parentNode.removeChild(this.container);
            this.map = void 0
        };
        mapboxgl.accessToken = f.accessToken;
        var r = document.getElementById(f.mapContainer);
        h = document.createElement("div");
        h.id = f.mapboxContainer;
        r.appendChild(h);
        var x = [];
        x["points-default"] = {
            type: "FeatureCollection",
            features: []
        };
        x["points-realtime"] = {
            type: "FeatureCollection",
            features: []
        };
        var A = null,
            E = new mapboxgl.Popup({
                anchor: "top",
                closeButton: !1,
                closeOnClick: !1
            }),
            t = new mapboxgl.Map({
                container: f.mapboxContainer,
                style: "day" == f.style ? f.dayStyle : f.nightStyle,
                center: k.center,
                zoom: k.zoom,
                attributionControl: !1
            }),
            z = new electromaps.Router({
                Map: a,
                mapContainer: r,
                User: c
            }),
            F = {
                load: function(b) {
                    -1 < f.featureUrl.indexOf("/mapi/v1/locations?all") && (sessionStorage.removeItem("locations"), l = JSON.parse(sessionStorage.getItem("electromaps.locations"))) &&
                        (H(l), a.fireEvent("getfeatures"));
                    y();
                    t.on("mousemove", F.mousemove);
                    t.on("click", F.click);
                    t.on("moveend", F.moveend);
                    t.on("contextmenu", F.rightclick);
                    document.addEventListener("visibilitychange", F.visibilityChange, !1);
                    (btnDN = r.getElementsByClassName("day-night")[0]) && btnDN.addEventListener("click", L)
                },
                styleload: function(a) {
                    x && (t.addSource("points-default", {
                            type: "geojson",
                            data: x["points-default"]
                        }), t.addSource("points-realtime", {
                            type: "geojson",
                            data: x["points-realtime"]
                        }), t.addLayer({
                            id: "icons-d",
                            type: "symbol",
                            source: "points-default",
                            minzoom: f.zoomChange,
                            layout: {
                                "icon-image": "{ic}",
                                "icon-allow-overlap": !0,
                                "icon-ignore-placement": !0,
                                "icon-anchor": "bottom",
                                "icon-size": {
                                    stops: [
                                        [8, .5],
                                        [14, 1]
                                    ]
                                }
                            }
                        }), t.addLayer({
                            id: "circles-d",
                            type: "circle",
                            source: "points-default",
                            maxzoom: f.zoomChange,
                            paint: {
                                "circle-color": ["match", ["get", "s"], 1, "#00aa0e", 2, "#f57c00", 3, "#d32f2f", 4, "#d32f2f", 5, "#d32f2f", 99, "#616161", "#ccc"],
                                "circle-radius": {
                                    base: 2,
                                    stops: [
                                        [4, 2.5],
                                        [7, 3]
                                    ]
                                },
                                "circle-stroke-width": 1,
                                "circle-stroke-color": "#e6e6e6"
                            }
                        }),
                        t.addLayer({
                            id: "icons-r",
                            type: "symbol",
                            source: "points-realtime",
                            minzoom: f.zoomChange,
                            layout: {
                                "icon-image": "{ic}",
                                "icon-allow-overlap": !0,
                                "icon-ignore-placement": !0,
                                "icon-anchor": "bottom",
                                "icon-size": {
                                    stops: [
                                        [8, .5],
                                        [14, 1]
                                    ]
                                }
                            }
                        }), t.addLayer({
                            id: "circles-r",
                            type: "circle",
                            source: "points-realtime",
                            maxzoom: f.zoomChange,
                            paint: {
                                "circle-color": ["match", ["get", "s"], 1, "#00aa0e", 2, "#ff2300", 3, "#ff2300", 4, "#007aff", 5, "#ff2300", 99, "#616161", "#ccc"],
                                "circle-radius": {
                                    base: 2,
                                    stops: [
                                        [4, 2.5],
                                        [7, 3]
                                    ]
                                },
                                "circle-stroke-width": 1,
                                "circle-stroke-color": "#FFFFFF"
                            }
                        }));
                    U()
                },
                mousemove: function(a) {
                    var b = t.queryRenderedFeatures(a.point, {
                        layers: ["icons-r", "icons-d"]
                    });
                    a = t.queryRenderedFeatures(a.point, {
                        layers: ["circles-r", "circles-d"]
                    });
                    t.getCanvas().style.cursor = b.length ? "pointer" : a.length ? "zoom-in" : ""
                },
                click: function(b) {
                    b = t.queryRenderedFeatures(b.point, {
                        layers: ["icons-r", "icons-d", "circles-r", "circles-d"]
                    });
                    b.length ? (b[0].coordinates = b[0].geometry.coordinates, t.getZoom() < f.zoomChange ? a.zoomCoordinates(b[0].coordinates, f.zoomChange +
                        2) : a.openFeature(b[0].properties.i, b[0].coordinates, !0)) : !0 === E.isOpen() && A.remove()
                },
                rightclick: function(a) {},
                moveend: function(a) {
                    k.center = t.getCenter();
                    k.zoom = t.getZoom();
                    V()
                },
                visibilityChange: function(a) {
                    "hidden" == document.visibilityState ? window.clearInterval(q) : y()
                }
            };
        a.searchLocation = function(a) {
            b.query(a)
        };
        a.fitBounds = function() {
            if (0 < x["points-default"].features.length) var a = turf.bbox(x["points-default"]);
            if (0 < x["points-realtime"].features.length) var b = turf.bbox(x["points-realtime"]);
            if (a && b) a =
                turf.featureCollection([turf.bboxPolygon(a), turf.bboxPolygon(b)]), a = turf.bbox(turf.combine(a));
            else if (!a)
                if (b) a = b;
                else return;
            t.fitBounds(a, {
                padding: 30
            })
        };
        a.getMap = function() {
            return t
        };
        a.hideLayers = function() {
            for (var a = document.getElementsByClassName("map-layer"), b = 0; b < a.length; b++) a[b].style.display = "none"
        };
        var G = function() {
                var b = document.getElementById("filters");
                "none" === b.style.display ? (a.hideLayers(), b.style.display = "block") : b.style.display = "none"
            },
            S = function() {
                var b = document.getElementById("info_status");
                "none" === b.style.display ? (a.hideLayers(), b.style.display = "block") : b.style.display = "none"
            };
        a.changeSytle = function(a) {
            var b = document.getElementsByTagName("BODY")[0];
            "day" === a ? (t.setStyle(f.dayStyle), b.classList.remove("night"), f.style = "day") : "night" === a && (t.setStyle(f.nightStyle), b.classList.add("night"), f.style = "night")
        };
        var L = function() {
            var a = document.getElementsByTagName("BODY")[0];
            "day" === f.style ? (t.setStyle(f.nightStyle), a.classList.add("night"), f.style = "night") : (t.setStyle(f.dayStyle), a.classList.remove("night"),
                f.style = "day")
        };
        a.getStyle = function() {
            return f.style
        };
        var y = function() {
                la();
                q = window.setInterval(function() {
                    la()
                }, 6E4)
            },
            la = function() {
                var b = new electromaps.Loader(r),
                    c = 0;
                l && (c = l[0]);
                electromaps.request(f.featureUrl + "&r=" + c, "GET", {}, b, function(d, g) {
                    if (l) {
                        if (l[0] = g.splice(0, 1), 0 < g.length) {
                            var h = {},
                                k;
                            for (k in g) h[g[k][2]] = g[k];
                            for (k in l) h[l[k][2]] && (l[k] = h[l[k][2]], delete h[l[k][2]]);
                            for (k in h) console.log("added"), l.push(h[k])
                        }
                    } else l = g.slice(0); - 1 < f.featureUrl.indexOf("/mapi/v1/locations?all") && sessionStorage.setItem("electromaps.locations",
                        JSON.stringify(l));
                    0 < g.length && H(l);
                    0 === c && a.fireEvent("getfeatures");
                    b.remove()
                }, function(a, c) {
                    electromaps.alert(i18n("Connection error"), "error");
                    b.remove()
                })
            },
            H = function(a) {
                x["points-default"] = {
                    type: "FeatureCollection",
                    features: []
                };
                x["points-realtime"] = {
                    type: "FeatureCollection",
                    features: []
                };
                for (i = 1; i < a.length; i++) {
                    var b = a[i],
                        c = {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [b[1], b[0]]
                            },
                            properties: {
                                i: b[2],
                                ic: b[5] + "." + b[4] + "." + b[3],
                                t: b[4],
                                s: b[5],
                                ap: b[7],
                                ar: b[6],
                                k: b[8]
                            }
                        };
                    b[10].forEach(function(a) {
                        c.properties["e" +
                            a] = !0
                    });
                    x[1 == b[3] ? "points-realtime" : "points-default"].features.push(c)
                }
                t.getSource("points-default").setData(x["points-default"]);
                t.getSource("points-realtime").setData(x["points-realtime"])
            };
        a.openFeature = function(b, d, g) {
            a.zoomCoordinates(d, 9);
            null === c ? window.location.href = f.mapUrl + "/p/" + b : (A && A.id == b || (A = new electromaps.Chargepoint(b, f.mapContainer)), A.on("close", T), A.on("load", function(a) {
                A.render();
                E.setLngLat(d).setHTML(a.nombre).addTo(t);
                !0 === g && (window.history.pushState(a, "", f.mapUrl + "/p/" +
                    a.idpdr), document.title = a.nombre)
            }), A.on("unauthorized", N), A.get())
        };
        var N = function() {
                A.off("unauthorized", N);
                c.off("login", R);
                c.set({});
                c.showLogin();
                c.on("login", R)
            },
            R = function() {
                A.id && A.get()
            },
            T = function() {
                E.remove();
                window.history.pushState(null, "", f.mapUrl);
                document.title = electromaps.title
            },
            w = function(a) {
                this.classList.contains("active") ? (k.app = 0, this.classList.remove("active")) : (k.app = 1, this.classList.add("active"));
                U()
            },
            ha = function(a) {
                this.classList.contains("active") ? (k.rfid = 0, this.classList.remove("active")) :
                    (k.rfid = 1, this.classList.add("active"));
                U()
            },
            Ta = function(a) {
                this.classList.contains("filter-active") ? (k.realtime = 0, this.classList.remove("filter-active"), t.setLayoutProperty("icons-d", "visibility", "visible"), t.setLayoutProperty("circles-d", "visibility", "visible")) : (k.realtime = 1, this.classList.add("filter-active"), t.setLayoutProperty("icons-d", "visibility", "none"), t.setLayoutProperty("circles-d", "visibility", "none"));
                U()
            },
            v = function(a) {
                a = r.getElementsByClassName("speed_val")[0];
                k.speed = parseInt(this.value);
                a.innerHTML = f.speedSteps[k.speed] + "kW - " + f.speedLabels[k.speed];
                U()
            },
            ia = function(a) {
                this.classList.contains("filter-active") ? this.classList.remove("filter-active") : this.classList.add("filter-active");
                a = document.querySelectorAll(".filter_connectors").length;
                var b = document.querySelectorAll(".filter_connectors.filter-active").length,
                    c = document.getElementById("filter_ctodos");
                c.checked = !1;
                if (a == b) k.connector = !0, c.checked = !0;
                else if (0 == b) k.connector = !1;
                else
                    for (k.connector = [], a = document.querySelectorAll(".filter_connectors.filter-active"),
                        b = 0; b < a.length; ++b) c = parseInt(a[b].getAttribute("data-idconnector")), k.connector.push(c);
                U()
            },
            da = function(a) {
                this.classList.contains("filter-active") ? this.classList.remove("filter-active") : this.classList.add("filter-active");
                a = document.querySelectorAll(".filter_types").length;
                var b = document.querySelectorAll(".filter_types.filter-active").length,
                    c = document.getElementById("filter_ttodos");
                c.checked = !1;
                if (a == b) k.type = !0, c.checked = !0;
                else if (0 == b) k.type = !1;
                else
                    for (k.type = [], a = document.querySelectorAll(".filter_types.filter-active"),
                        b = 0; b < a.length; ++b) c = parseInt(a[b].getAttribute("data-idtype")), k.type.push(c);
                U()
            },
            J = function(a) {
                a = this.getAttribute("data-grup");
                var b = document.querySelectorAll("." + a),
                    c, d = this.checked;
                for (c = 0; c < b.length; ++c) d ? b[c].classList.add("filter-active") : b[c].classList.remove("filter-active");
                switch (a) {
                    case "filter_types":
                        k.type = d;
                        U();
                        break;
                    case "filter_connectors":
                        k.connector = d, U()
                }
            },
            U = function() {
                var a = {};
                a.app = [">=", ["number", ["get", "ap"]], k.app];
                a.rfid = [">=", ["number", ["get", "ar"]], k.rfid];
                a.auth = ["all",
                    a.app, a.rfid
                ];
                1 === k.app && 1 === k.rfid && (a.auth = ["any", a.app, a.rfid]);
                a.speed = 0 == k.speed ? !0 : [">=", ["number", ["get", "k"]], f.speedSteps[k.speed]];
                !0 === k.connector || !1 === k.connector ? a.connector = k.connector : (a.connector = ["any"], k.connector.forEach(function(b) {
                    a.connector.push(["has", "e" + b])
                }));
                a.type = !0 === k.type || !1 === k.type ? k.type : ["match", ["get", "t"], k.type, !0, !1];
                1 == k.realtime && (t.setLayoutProperty("icons-d", "visibility", "none"), t.setLayoutProperty("circles-d", "visibility", "none"));
                var b = ["all", a.auth,
                    a.speed, a.connector, a.type
                ];
                t.setFilter("icons-d", b);
                t.setFilter("circles-d", b);
                t.setFilter("icons-r", b);
                t.setFilter("circles-r", b);
                V()
            },
            ea = function() {
                var a = window.document.createElement("button");
                a.id = "addChargestation";
                var b = '<i class="fas fa-charging-station"></i> ' + i18n("Add Chargestation");
                a.insertAdjacentHTML("beforeend", b);
                r.appendChild(a);
                a.addEventListener("click", ka)
            },
            ka = function() {
                newLocation = new electromaps.Chargepoint(0, f.mapContainer);
                newLocation.add()
            },
            V = function() {
                "string" === typeof f.cookieFilters &&
                    Cookies.set(f.cookieFilters, k, {
                        expires: 365
                    })
            };
        this.zoomCoordinates = function(a, b) {
            t.getZoom() > b ? t.flyTo({
                center: a
            }) : t.flyTo({
                center: a,
                zoom: b
            })
        };
        t.on("load", F.load);
        t.on("style.load", F.styleload);
        (function() {
            b = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                placeholder: i18n("Search")
            });
            g = new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: !0
                },
                trackUserLocation: !0
            });
            g.on("geolocate", function(a) {
                console.log(a)
            });
            d = new mapboxgl.NavigationControl;
            var a = new n("open-filters", "fas fa-filter"),
                c = new n("day-night", "fas fa-adjust"),
                h = new n("open-info", "fas fa-info"),
                k = new n("open-route", "fas fa-road");
            f.routeControl && (t.addControl(k, "top-right"), z.init());
            t.addControl(b, "top-right");
            f.geolocationControl && t.addControl(g, "top-right");
            f.filtersControl && t.addControl(a, "top-right");
            f.filtersControl && t.addControl(h, "top-right");
            f.navigationControl && t.addControl(d, "bottom-right");
            f.dayNightControl && t.addControl(c, "bottom-right");
            f.addControl && ea()
        })();
        (function() {
            electromaps.getDataTypes(function(a) {
                a.filter_settings =
                    k;
                a.speedLabel = f.speedSteps[k.speed] + "kW - " + f.speedLabels[k.speed];
                a = Handlebars.templates.filters(a);
                r.insertAdjacentHTML("beforeend", a);
                (btnFilter = r.getElementsByClassName("open-filters")[0]) && btnFilter.addEventListener("click", G);
                (btnInfo = r.getElementsByClassName("open-info")[0]) && btnInfo.addEventListener("click", S);
                var b = document.getElementById("filters");
                b.getElementsByClassName("filter_active_app")[0].addEventListener("click", w);
                b.getElementsByClassName("filter_active_rfid")[0].addEventListener("click",
                    ha);
                b.getElementsByClassName("filter_realtime")[0].addEventListener("click", Ta);
                b.getElementsByClassName("filter_speed")[0].addEventListener("input", v);
                var c = b.getElementsByClassName("filter_connectors");
                for (a = 0; a < c.length; a++) c[a].addEventListener("click", ia);
                c = b.getElementsByClassName("filter_types");
                for (a = 0; a < c.length; a++) c[a].addEventListener("click", da);
                b = b.getElementsByClassName("filter_todos");
                for (a = 0; a < b.length; a++) b[a].addEventListener("click", J);
                var d = document.getElementById("more_connectors");
                document.getElementById("show_more_connectors").addEventListener("click", function(a) {
                    d.style.display = "block"
                })
            })
        })();
        window.onpopstate = function(b) {
            null === b.state ? (A.off("close", T), E.remove(), A.remove()) : a.openFeature(b.state.idpdr, b.state.coordinates, !1)
        }
    },
    Router: function(h) {
        var m = {
                Map: null,
                mapContainer: null,
                User: null,
                bufferDayColor: "#455A64",
                bufferNightColor: "#cee8ff",
                color1: "#388E3C",
                color2: "#303F9F"
            },
            c;
        for (c in h) m[c] = h[c];
        var a, b, g, d, f, k, l;
        this.init = function() {
            var c = Handlebars.templates.route({});
            m.mapContainer.insertAdjacentHTML("beforeend", c);
            (btnRoutes = m.mapContainer.getElementsByClassName("open-route")[0]) && btnRoutes.addEventListener("click", q);
            (b = document.getElementById("route_form")) && b.addEventListener("submit", C);
            document.getElementById("ResetRouteBtn").addEventListener("click", r);
            a = document.getElementById("route_div");
            g = document.getElementById("route_destination");
            d = document.getElementById("route_origin");
            f = document.getElementById("route_buffer");
            k = document.getElementById("route_chunk");
            l = m.Map.getMap()
        };
        var q = function() {
                "none" === a.style.display ? (m.Map.hideLayers(), a.style.display = "block") : a.style.display = "none"
            },
            C = function(a) {
                a.preventDefault();
                m.User.islogged() ? n() : (m.User.off("login", n), m.User.showLogin(), m.User.on("login", n))
            },
            n = function() {
                x(d.value, g.value, f.value, k.value)
            },
            r = function() {
                l.getLayer("route") && l.removeLayer("route");
                l.getSource("route") && l.removeSource("route");
                l.getLayer("route-buffered") && l.removeLayer("route-buffered");
                l.getSource("route-buffered") && l.removeSource("route-buffered");
                b.reset()
            },
            x = function(a, b, c, d) {
                electromaps.request("/mapi/v1/geocode/directions?from=" + a + "&to=" + b, "GET", {}, null, function(a, b) {
                    try {
                        var f = {
                            type: "Feature",
                            geometry: b.directions.routes[0].geometry
                        };
                        0 >= d && (d = 1E5);
                        f = turf.lineChunk(f, d, {
                            units: "kilometers"
                        });
                        f.features.forEach(function(a, b) {
                            a.properties.col = 0 === b % 2 ? m.color1 : m.color2
                        });
                        var g = "day" == m.Map.getStyle() ? m.bufferDayColor : m.bufferNightColor;
                        if (0 < c) {
                            var h = turf.buffer(f, c, {
                                units: "kilometers"
                            });
                            void 0 != l.getSource("route-buffered") ? l.getSource("route-buffered").setData(h) :
                                l.addLayer({
                                    id: "route-buffered",
                                    type: "fill",
                                    source: {
                                        type: "geojson",
                                        data: h
                                    },
                                    layout: {},
                                    paint: {
                                        "fill-color": g,
                                        "fill-opacity": .3
                                    }
                                })
                        }
                        void 0 != l.getSource("route") ? l.getSource("route").setData(f) : l.addLayer({
                            id: "route",
                            type: "line",
                            source: {
                                type: "geojson",
                                data: f
                            },
                            layout: {
                                "line-join": "round",
                                "line-cap": "round"
                            },
                            paint: {
                                "line-color": ["get", "col"],
                                "line-width": 1.5,
                                "line-gap-width": .5
                            }
                        });
                        var k = turf.bbox(f);
                        l.fitBounds(k, {
                            padding: 10
                        });
                        q()
                    } catch (H) {
                        console.log("Address not found"), console.log(H)
                    }
                }, function(a, b) {
                    electromaps.alert(b.error_message,
                        "error")
                })
            }
    },
    Chargepoint: function(h, m) {
        electromaps.Events.apply(this);
        var c = this;
        c.id = h;
        c.loaded = !1;
        c.data = {};
        c.events = {};
        var a = document.getElementById("chp_block"),
            b;
        c.get = function() {
            var a = "/mapi/v1/chargepoints/" + c.id;
            !1 === c.loaded ? electromaps.request(a, "GET", "", null, g, d) : c.fireEvent("load", [c.data])
        };
        var g = function(a, b) {
                c.data = b;
                c.data.coordinates = [b.longitud, b.latitud];
                c.loaded = !0;
                c.fireEvent("load", [c.data])
            },
            d = function(a, b) {
                401 === a ? c.fireEvent("unauthorized") : electromaps.alert(b.error_message,
                    "error")
            };
        c.set = function(a) {
            c.data = a
        };
        c.render = function() {
            var b = document.getElementById(m),
                d = Handlebars.templates.chargepoint(c.data);
            a || (a = document.createElement("div"), a.id = "chp_block");
            a.innerHTML = d;
            b.appendChild(a);
            document.getElementById("chp_close").addEventListener("click", c.remove);
            document.getElementById("addPhoto").addEventListener("click", f);
            document.getElementById("addComment").addEventListener("click", k);
            document.getElementById("toggleBookmark").addEventListener("click", l);
            document.getElementById("editChargepoint").addEventListener("click",
                q);
            baguetteBox.run(".chp-gallery")
        };
        c.remove = function() {
            try {
                a.parentNode.removeChild(a), c.loaded = !1, c.fireEvent("close"), c.data = {}, c.events = {}
            } catch (z) {
                console.log("chargepoint block not found")
            }
        };
        var f = function() {
                b = new electromaps.Dialog(i18n("Photo"), "photoForm", {}, 300);
                b.on("submit", x)
            },
            k = function() {
                b = new electromaps.Dialog(i18n("Comment"), "commentForm", {}, 380);
                b.on("submit", A)
            },
            l = function() {
                var a = "/mapi/v1/chargepoints/" + c.id + "/favorito",
                    b = new FormData;
                b.append("fav", !c.data.favorito);
                electromaps.request(a,
                    "POST", b, null,
                    function(a, b) {
                        c.data.favorito = b.estado;
                        c.render()
                    },
                    function(a, b) {
                        electromaps.alert(b.error_message, "error")
                    })
            },
            q = function() {
                if ("all" != c.data.editable) return !1;
                var a = c.data;
                electromaps.getDataTypes(function(d) {
                    a.datatypes = d;
                    b = new electromaps.Dialog(i18n("Edit") + " " + c.data.nombre, "chargepointForm", a, 650);
                    var f = JSON.parse(JSON.stringify(c.data.enchufes));
                    r(c.data.longitud, c.data.latitud);
                    C(d, f);
                    b.on("submit", E)
                })
            };
        c.add = function() {
            var a = {};
            electromaps.getDataTypes(function(c) {
                a.datatypes =
                    c;
                b = new electromaps.Dialog(i18n("Add chargestation"), "chargepointForm", a, 650);
                r(-3.7026, 40.4165);
                C(c, []);
                b.on("submit", t)
            })
        };
        var C = function(a, b) {
                function c(a) {
                    var c = new electromaps.Dialog(i18n("Connector"), "connectorForm", a),
                        f = document.getElementById("field-connector");
                    f.addEventListener("change", function(a) {
                        document.getElementById("frmConnectorName").value = f.options[f.selectedIndex].text;
                        document.getElementById("frmConnectorClass").value = f.options[f.selectedIndex].getAttribute("data-class")
                    });
                    c.on("submit",
                        function(f) {
                            var g = {};
                            f = $jscomp.makeIterator(f.entries());
                            for (var h = f.next(); !h.done; h = f.next()) h = h.value, g[h[0]] = h[1]; - 1 < a.i ? b[a.i] = g : b.push(g);
                            n(d, b);
                            c.close()
                        })
                }
                var d = document.getElementById("chp_form_connectors");
                document.getElementById("addConnector").addEventListener("click", function(b) {
                    b = {};
                    b.datatypes = a;
                    b.idtoma = 0;
                    b.nombre = b.datatypes.connectors[0].text;
                    b.img_class = b.datatypes.connectors[0]["class"];
                    c(b)
                });
                d.addEventListener("click", function(f) {
                    var g = f.target.parentNode.getAttribute("data-i");
                    f.target.classList.contains("btn-edit") ? (f = b[g], f.datatypes = a, f.i = g, c(f)) : f.target.classList.contains("btn-remove") && (b.splice(g, 1), n(d, b))
                })
            },
            n = function(a, b) {
                var c = Handlebars.templates.connectorsBlock({
                    data: {
                        enchufes: b
                    }
                });
                a.innerHTML = c
            },
            r = function(a, b) {
                var c = new electromaps.Geocoder,
                    d = document.getElementById("field-latitud"),
                    f = document.getElementById("field-longitud"),
                    g = document.getElementById("field-direccion"),
                    h = new mapboxgl.Map({
                        container: "mapDialog",
                        style: "mapbox://styles/electromaps/cjnk55x7k0oh72sr1fcovvkxb",
                        center: [a, b],
                        zoom: 14,
                        attributionControl: !1
                    }),
                    k = (new mapboxgl.Marker({
                        draggable: !0
                    })).setLngLat([a, b]).addTo(h);
                k.on("dragend", function() {
                    var a = k.getLngLat();
                    d.value = a.lat;
                    f.value = a.lng
                });
                document.getElementById("mapToAddress").addEventListener("click", function() {
                    c.getAddress(f.value, d.value, function(a) {
                        g.value = a
                    })
                });
                document.getElementById("addresToMap").addEventListener("click", function() {
                    "" != g.value && c.getCoordinates(g.value, function(a) {
                        k.setLngLat(a).addTo(h);
                        h.flyTo({
                            center: a,
                            zoom: 14
                        });
                        d.value =
                            a[1];
                        f.value = a[0]
                    })
                })
            },
            x = function(d) {
                var f = "/mapi/v1/chargepoints/" + c.id + "/photos";
                b.off("submit", x);
                var g = new electromaps.Loader(b.getElement());
                electromaps.request(f, "POST", d, g, function(d, f) {
                    Handlebars.templates.photo(f);
                    c.data.photos ? c.data.photos.unshift(f) : c.data.photos = [f];
                    c.render();
                    b.close();
                    var h = document.getElementById("images-list").offsetTop;
                    a.scrollTop = h;
                    g.remove();
                    electromaps.alert(i18n("Photo uploaded"), "success")
                }, function(a, c) {
                    b.on("submit", x);
                    b.showError(c.error_message, 5);
                    g.remove()
                })
            },
            A = function(d) {
                var f = "/mapi/v1/chargepoints/" + c.id + "/comments";
                b.off("submit", A);
                electromaps.request(f, "POST", d, null, function(d, f) {
                    Handlebars.templates.comment(f);
                    c.data.comentarios ? c.data.comentarios.unshift(f) : c.data.comentarios = [f];
                    c.render();
                    b.close();
                    var g = document.getElementById("comments-list").offsetTop;
                    a.scrollTop = g;
                    electromaps.alert(i18n("Comment published"), "success")
                }, function(a, c) {
                    b.on("submit", A);
                    b.showError(c.error_message, 5)
                })
            },
            E = function(a) {
                var d = "/mapi/v1/chargepoints/" + c.id;
                b.off("submit",
                    E);
                electromaps.request(d, "POST", a, null, function(a, c) {
                    electromaps.alert(c.msg, "success");
                    b.close()
                }, function(a, c) {
                    b.on("submit", E);
                    b.showError(c.error_message, 5)
                })
            },
            t = function(a) {
                b.off("submit", t);
                electromaps.request("/mapi/v1/chargepoints", "POST", a, null, function(a, c) {
                    electromaps.alert(c.msg, "success");
                    b.close()
                }, function(a, c) {
                    b.on("submit", t);
                    b.showError(c.error_message, 5)
                })
            }
    },
    User: function(h) {
        electromaps.Events.apply(this);
        var m = this;
        if (h) {
            var c = document.getElementById(h),
                a = document.createElement("div");
            c.appendChild(a)
        }
        var b = {},
            g = {
                iduser: null,
                username: null,
                email: null,
                logged: !1
            };
        m.set = function(a) {
            g = a;
            h && d()
        };
        m.islogged = function() {
            return g.logged
        };
        var d = function() {
            var b = Handlebars.templates.header(g);
            a.innerHTML = b;
            g.iduser ? (document.getElementById("LogoutBtn").addEventListener("click", m.logout), document.getElementById("MyProfileBtn").addEventListener("click", m.showMyProfile), document.getElementById("MyChargesBtn").addEventListener("click", z), document.getElementById("MyTokensBtn").addEventListener("click",
                F), document.getElementById("MyInvoicesBtn").addEventListener("click", G)) : (document.getElementById("LoginBtn").addEventListener("click", m.showLogin), document.getElementById("RegisterBtn").addEventListener("click", m.showRegister))
        };
        m.showLogin = function() {
            b.login = new electromaps.Dialog(i18n("Login"), "login", {}, 360);
            b.login.on("submit", f);
            document.getElementById("RecoverBtn").addEventListener("click", m.showRecoverPass);
            document.getElementById("RegisterLoginBtn").addEventListener("click", m.showRegister)
        };
        var f = function(a) {
            b.login.off("submit", f);
            electromaps.request("/mapi/v1/access/log_in", "POST", a, null, function(a, c) {
                b.login.close();
                c.logged = !0;
                g = c;
                d();
                m.fireEvent("login", [g]);
                electromaps.alert(i18n("Hi") + " " + g.username, "success")
            }, function(a, c) {
                b.login.on("submit", f);
                b.login.showError(c.error_message, 5)
            })
        };
        m.showRegister = function() {
            electromaps.getDataTypes(function(a) {
                b.register = new electromaps.Dialog(i18n("Register"), "register", a);
                b.register.on("submit", k)
            })
        };
        var k = function(a) {
            b.register.off("submit",
                k);
            electromaps.request("/mapi/v1/access/register", "POST", a, null, function(a, c) {
                b.register.close();
                electromaps.alert(c.success_message, "success")
            }, function(a, c) {
                b.register.on("submit", k);
                b.register.showError(c.error_message, 10)
            })
        };
        m.showRecoverPass = function() {
            b.recover = new electromaps.Dialog(i18n("Recover"), "recover", {}, 360);
            b.recover.on("submit", l)
        };
        var l = function(a) {
            b.recover.off("submit", l);
            electromaps.request("/mapi/v1/access/recover_password", "POST", a, null, function(a, c) {
                b.recover.close();
                electromaps.alert(c.success_message,
                    "success")
            }, function(a, c) {
                b.recover.on("submit", l);
                b.recover.showError(c.error_message, 10)
            })
        };
        m.logout = function() {
            electromaps.request("/mapi/v1/access/logout", "POST", {}, null, function(a, b) {
                m.set({
                    logged: !1
                });
                electromaps.alert(i18n("Bye bye, see you soon"), "success")
            })
        };
        m.showMyProfile = function() {
            b.user ? b.user.reload(g) : b.user = new electromaps.Dialog(i18n("My profile"), "user", g);
            document.getElementById("editAvatar").addEventListener("click", q);
            document.getElementById("editProfile").addEventListener("click",
                C);
            document.getElementById("editAccount").addEventListener("click", n);
            document.getElementById("editPassword").addEventListener("click", r);
            document.getElementById("editNotifications").addEventListener("click", E);
            b.user.on("close", function() {
                delete b.user
            })
        };
        var q = function() {
                b.profile = new electromaps.Dialog(i18n("Avatar"), "photoForm", {}, 300);
                b.profile.on("submit", x)
            },
            C = function() {
                var a = g;
                electromaps.getDataTypes(function(c) {
                    a.datatypes = c;
                    b.profile = new electromaps.Dialog(i18n("Profile"), "userProfileForm",
                        a);
                    b.profile.on("submit", x)
                })
            },
            n = function() {
                var a = g;
                electromaps.getDataTypes(function(c) {
                    a.datatypes = c;
                    b.account = new electromaps.Dialog(i18n("Account"), "userAccountForm", a);
                    b.account.on("submit", A)
                })
            },
            r = function() {
                b.profile = new electromaps.Dialog(i18n("Change password"), "userPasswordForm", {}, 360);
                b.profile.on("submit", x)
            },
            x = function(a) {
                var c = "/mapi/v1/users/" + g.iduser;
                b.profile.off("submit", x);
                var d = new electromaps.Loader(b.profile.getElement());
                electromaps.request(c, "POST", a, d, function(a, c) {
                    g = c;
                    m.showMyProfile();
                    b.profile.close();
                    electromaps.alert(i18n("Profile saved"), "success")
                }, function(a, c) {
                    b.profile.on("submit", x);
                    b.profile.showError(c.error_message, 10);
                    d.remove()
                })
            },
            A = function(a) {
                var c = "/mapi/v1/users/" + g.iduser + "/account";
                b.account.off("submit", A);
                var d = new electromaps.Loader(b.account.getElement());
                electromaps.request(c, "POST", a, d, function(a, c) {
                    g = c.user;
                    m.showMyProfile();
                    b.account.close();
                    electromaps.alert(c.success_message, "success")
                }, function(a, c) {
                    b.account.on("submit", A);
                    b.account.showError(c.error_message,
                        10);
                    d.remove()
                })
            },
            E = function() {
                electromaps.request("/mapi/v1/users/" + g.iduser + "/notifications", "GET", {}, null, function(a, c) {
                    b.notifications = new electromaps.Dialog(i18n("Notifications"), "userNotificationsForm", c);
                    b.notifications.on("submit", t)
                })
            },
            t = function(a) {
                var c = "/mapi/v1/users/" + g.iduser + "/notifications";
                b.notifications.off("submit", t);
                electromaps.request(c, "POST", a, null, function(a, c) {
                    b.notifications.close();
                    electromaps.alert(i18n("Notifications edited"), "success")
                }, function(a, c) {
                    b.notifications.on("submit",
                        t);
                    b.profile.showError(c.error_message, 10)
                })
            },
            z = function() {
                electromaps.request("/mapi/v1/transactions/carcharge", "GET", {}, null, function(a, c) {
                    b.charges = new electromaps.Dialog(i18n("My charging sessions"), "chargesessions", c, 1E3)
                }, function(a, b) {
                    electromaps.alert(b.error_message, "error")
                })
            },
            F = function() {
                if (!1 === g.billing) S();
                else {
                    var a = {},
                        c;
                    electromaps.request("/mapi/v1/rfids", "GET", {}, null, function(g, h) {
                        a = h.rfids;
                        b.tokens = new electromaps.Dialog(i18n("My tokens"), "tokens", a);
                        b.tokens.getDiv().addEventListener("click",
                            function(g) {
                                g.target.classList.contains("btn-edit") ? (c = g.target.getAttribute("data-i"), g = a[c], b.tokenedit = new electromaps.Dialog(i18n("Edit") + " " + g.idkeychain, "tokenEdit", g), b.tokenedit.on("submit", f)) : g.target.classList.contains("btn-add") && (b.tokenadd = new electromaps.Dialog(i18n("Add token"), "tokenAdd", {}), b.tokenadd.on("submit", d))
                            })
                    }, function(a, b) {
                        electromaps.alert(b.error_message, "error")
                    });
                    var d = function(c) {
                            b.tokenadd.off("submit", d);
                            electromaps.request("/mapi/v1/rfids", "POST", c, null, function(c,
                                d) {
                                a = d.rfids;
                                b.tokens.reload(d.rfids);
                                b.tokenadd.close();
                                electromaps.alert(i18n("Token added"), "success")
                            }, function(a, c) {
                                b.tokenadd.on("submit", d);
                                b.tokenadd.showError(c.error_message, 5)
                            })
                        },
                        f = function(d) {
                            var f = a[c],
                                g = "/mapi/v1/rfids/" + f.idkeychain;
                            b.tokenedit.off("submit", f);
                            electromaps.request(g, "POST", d, null, function(d, f) {
                                a[c] = f;
                                b.tokens.reload(a);
                                b.tokenedit.close();
                                electromaps.alert(i18n("Token edited"), "success")
                            }, function(a, c) {
                                b.tokenedit.on("submit", f);
                                b.tokenedit.showError(c.error_message,
                                    5)
                            })
                        }
                }
            },
            G = function() {
                electromaps.request("/mapi/v1/billing/" + g.iduser + "/invoices", "GET", {}, null, function(a, c) {
                    b.inovices = new electromaps.Dialog(i18n("My invoices"), "invoices", c);
                    document.getElementById("editBilling").addEventListener("click", S)
                }, function(a, b) {
                    electromaps.alert(b.error_message, "error")
                })
            },
            S = function() {
                electromaps.getDataTypes(function(a) {
                    electromaps.request("/mapi/v1/billing", "GET", {}, null, function(c, d) {
                        var f = d ? d : {};
                        f.datatypes = a;
                        b.billing = new electromaps.Dialog(i18n("Billing information"),
                            "billing", f);
                        b.billing.on("submit", L)
                    })
                })
            },
            L = function(a) {
                b.billing.off("submit", L);
                electromaps.request("/mapi/v1/billing", "POST", a, null, function(a, c) {
                    b.billing.close();
                    g.billing = !0;
                    electromaps.alert(i18n("Information saved"), "success")
                }, function(a, c) {
                    b.billing.on("submit", L);
                    b.billing.showError(c.error_message, 10)
                })
            };
        (function() {
            electromaps.request("/mapi/v1/users", "GET", {}, null, function(a, b) {
                b.logged = !0;
                m.set(b)
            }, function(a, b) {
                m.set({
                    logged: !1
                })
            })
        })()
    },
    Geocoder: function() {
        this.getAddress = function(h,
            m, c) {
            electromaps.request("/mapi/v1/geocode/address?lng=" + h + "&lat=" + m, "GET", {}, null, function(a, b) {
                try {
                    b.address && c(b.address)
                } catch (g) {
                    console.log("Address not found" + g)
                }
            }, function(a, b) {
                electromaps.alert(b.error_message, "error")
            })
        };
        this.getCoordinates = function(h, m) {
            electromaps.request("/mapi/v1/geocode/coordinates?address=" + h, "GET", {}, null, function(c, a) {
                try {
                    a.coordinates && m(a.coordinates)
                } catch (b) {
                    console.log("Address not found")
                }
            }, function(c, a) {
                electromaps.alert(a.error_message, "error")
            })
        }
    },
    Web: function() {
        var h =
            function() {
                electromaps.request("/mapi/v1/content/condiciones", "GET", {}, null, function(a, b) {
                    var c = {};
                    c.text = b ? b : "Error";
                    new electromaps.Dialog(i18n("Terms & conditions"), "modal", c)
                })
            },
            m = function() {
                electromaps.request("/mapi/v1/content/cookies", "GET", {}, null, function(a, b) {
                    var c = {};
                    c.text = b ? b : "Error";
                    new electromaps.Dialog(i18n("Cookies"), "modal", c)
                })
            },
            c = function(a) {
                electromaps.request("/mapi/v1/content/faqs", "GET", {}, null, function(b, c) {
                    var d = {};
                    d.text = c ? c : "Error";
                    d = new electromaps.Dialog(i18n("Frequent questions"),
                        "modal", d);
                    a && d.scrollToElem(a)
                })
            },
            a = function() {
                var a = new FormData(b);
                electromaps.request("/mapi/v1/common/contact", "POST", a, null, function(a, c) {
                    b.innerHTML = '<div class="contact-form-success">' + c.success_message + "</div>"
                }, function(a, c) {
                    var d = b.getElementsByClassName("contact-form-error")[0];
                    d.style.display = "block";
                    d.innerHTML = c.error_message
                })
            };
        this.setCookieTZ = function() {
            if (!Cookies.get("_elec_tz")) {
                var a = (new Date).getTimezoneOffset();
                Cookies.set("_elec_tz", 0 == a ? 0 : -a, {
                    expires: 7
                })
            }
        };
        var b = document.getElementById("contact-form");
        b && b.addEventListener("submit", function(b) {
            b.preventDefault();
            a()
        });
        document.addEventListener("click", function(a) {
            var b = a.target;
            b && (b.matches(".modal-terms-of-use") ? (a.preventDefault(), h()) : b.matches(".modal-cookies") ? (a.preventDefault(), m()) : b.matches(".modal-faqs") && (a.preventDefault(), a = b.getAttribute("attr-q"), c(a)))
        })
    },
    Loader: function(h) {
        var m = document.createElement("div");
        m.id = "loader";
        h.appendChild(m);
        m.style.width = "0";
        this.setProgress = function(c) {
            m.style.width = c + "%"
        };
        this.remove = function() {
            m.parentNode.removeChild(m)
        }
    },
    alert: function(h, m) {
        var c = document.getElementsByTagName("BODY")[0],
            a = document.getElementById("alert");
        null === a && (a = document.createElement("div"), c.appendChild(a));
        a.innerHTML = h;
        a.id = "alert";
        a.className = m;
        a.classList.add("animate");
        a.classList.add("fadeInDown");
        var b = document.createElement("div");
        b.className = "close-alert";
        b.innerHTML = '<i class="fas fa-times"></i>';
        a.appendChild(b);
        b.addEventListener("click", function(b) {
            c.removeChild(a);
            clearTimeout(g)
        });
        var g = setTimeout(function() {
                c.removeChild(a)
            },
            50 * (100 + h.length))
    },
    request: function(h, m, c, a, b, g) {
        var d = new XMLHttpRequest;
        d.onload = function() {
            try {
                var a = JSON.parse(d.response)
            } catch (k) {
                a = {
                    success: !1,
                    data: {
                        error_message: "Error",
                        error_code: "ERROR"
                    }
                }, console.log(k)
            }
            200 <= d.status && 300 > d.status && 1 == a.success ? b(d.status, a.data) : g && g(d.status, a.data)
        };
        d.onerror = function() {
            console.log("Request ERROR");
            electromaps.alert(i18n("Connection error"), "error")
        };
        d.onprogress = function(b) {
            b.lengthComputable && a && a.setProgress(b.loaded / b.total * 100)
        };
        d.upload.onprogress =
            function(b) {
                b.lengthComputable && a && a.setProgress(b.loaded / b.total * 100)
            };
        d.open(m, h);
        d.setRequestHeader("Language", electromaps.language);
      	d.setRequestHeader("Origin", "https://www.electromaps.com");
        d.send(c)
    },
    Dialog: function(h, m, c, a) {
        electromaps.Events.apply(this);
        var b = this;
        b.templateData = {
            title: h,
            template: m,
            data: c,
            width: a ? a + "px" : "auto"
        };
        var g = document.createElement("div"),
            d = document.getElementsByTagName("BODY")[0],
            f, k = document.createElement("div");
        g.addEventListener("change", function(a) {
            if ((a = a.target) && a.matches(".form-element-field")) a.classList[a.value ?
                "add" : "remove"]("-hasvalue")
        });
        b.getDiv = function() {
            return g
        };
        b.getElement = function() {
            return g.getElementsByClassName("dialog-content")[0]
        };
        b.reload = function(a) {
            b.templateData.data = a;
            a = Handlebars.templates.dialog(b.templateData);
            g.innerHTML = a;
            l()
        };
        b.setWidth = function(a) {
            a += "px";
            b.getElement().style.width = a
        };
        b.scrollToElem = function(a) {
            var c = b.getElement();
            a = document.getElementById(a);
            a.style.display = "block";
            c.scrollTop = a.offsetTop - 60
        };
        var l = function() {
                for (var a = g.getElementsByClassName("btn-dialog-close"),
                        c = 0; c < a.length; c++) a[c].addEventListener("click", b.close);
                if (f = g.getElementsByTagName("FORM")[0])(a = f.getElementsByTagName("INPUT")[0]) && a.focus(), f.addEventListener("submit", C), (a = document.getElementById("image_file")) && a.addEventListener("change", q)
            },
            q = function(a) {
                a = a.srcElement.files[0];
                var b = new FileReader;
                b.readAsBinaryString(a);
                b.onload = function() {
                    var a = btoa(b.result);
                    document.getElementById("img").src = "data:image/jpeg;base64," + a;
                    document.getElementById("base64img").value = a
                };
                b.onerror = function() {
                    console.log("there are some problems")
                }
            },
            C = function(a) {
                a.preventDefault();
                a = new FormData(f);
                b.fireEvent("submit", [a])
            };
        b.showError = function(a, b) {
            var c = g.getElementsByClassName("dialog-errors")[0];
            k.innerHTML = a;
            k.className = "error";
            c.prepend(k);
            setTimeout(function() {
                c.removeChild(k)
            }, 1E3 * b)
        };
        b.close = function() {
            d.removeChild(g);
            b.fireEvent("close")
        };
        (function() {
            g.id = "dialog-container";
            g.className = "dialog-container";
            var a = Handlebars.templates.dialog(b.templateData);
            g.innerHTML += a;
            d.appendChild(g);
            l()
        })()
    },
    Events: function() {
        var h = this;
        h.events = {};
        h.on = function(m, c) {
            h.events.hasOwnProperty(m) ? h.events[m].push(c) : h.events[m] = [c]
        };
        h.off = function(m, c) {
            if (h.events.hasOwnProperty(m)) {
                var a = h.events[m].indexOf(c); - 1 != a && h.events[m].splice(a, 1)
            }
        };
        h.fireEvent = function(m, c) {
            if (h.events.hasOwnProperty(m)) {
                c && c.length || (c = []);
                for (var a = h.events[m], b = a.length, g = 0; g < b; g++) a[g].apply(null, c)
            }
        }
    }
};
