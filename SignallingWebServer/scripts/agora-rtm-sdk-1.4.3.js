/*
 @preserve
 AgoraRTM Web SDK 1.4.3 - commit: v1.4.3-0-gc918e772
 Copyright (C) 2018-2021 Agora Lab.
 This file is licensed under the AGORA, INC. SDK LICENSE AGREEMENT
 A copy of this license may be found at https://www.agora.io/en/sdk-license-agreement/
*/
"use strict";
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).AgoraRTM = t()
}(this, (function () {
    function ae(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ua(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ae(Object(n), !0).forEach((function (t) {
                m(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function aa(e) {
        return (aa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function rl(e, t, n, r, i, o, s) {
        try {
            var a = e[o](s), u = a.value
        } catch (e) {
            return void n(e)
        }
        a.done ? t(u) : Promise.resolve(u).then(r, i)
    }

    function K(e) {
        return function () {
            var t = this, n = arguments;
            return new Promise((function (r, i) {
                function o(e) {
                    rl(a, r, i, o, s, "next", e)
                }

                function s(e) {
                    rl(a, r, i, o, s, "throw", e)
                }

                var a = e.apply(t, n);
                o(void 0)
            }))
        }
    }

    function X(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function sl(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Ha(e, t, n) {
        return t && sl(e.prototype, t), n && sl(e, n), e
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function la(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && df(e, t)
    }

    function wd(e) {
        return (wd = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function df(e, t) {
        return (df = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function tl() {
        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }))), !0
        } catch (e) {
            return !1
        }
    }

    function Rh(e, t, n) {
        return (Rh = tl() ? Reflect.construct : function (e, t, n) {
            var r = [null];
            return r.push.apply(r, t), e = new (Function.bind.apply(e, r)), n && df(e, n.prototype), e
        }).apply(null, arguments)
    }

    function ef(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (ef = function (e) {
            function n() {
                return Rh(e, arguments, wd(this).constructor)
            }

            if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n)
            }
            return n.prototype = Object.create(e.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), df(n, e)
        })(e)
    }

    function ff(e, t) {
        if (null == e) return {};
        if (null == e) var n = {}; else {
            n = {};
            var r, i = Object.keys(e);
            for (r = 0; r < i.length; r++) {
                var o = i[r];
                0 <= t.indexOf(o) || (n[o] = e[o])
            }
        }
        if (Object.getOwnPropertySymbols) for (r = Object.getOwnPropertySymbols(e), o = 0; o < r.length; o++) i = r[o], 0 <= t.indexOf(i) || Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
        return n
    }

    function n(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function ma(e) {
        var t = tl();
        return function () {
            var r = wd(e);
            if (t) {
                var i = wd(this).constructor;
                r = Reflect.construct(r, arguments, i)
            } else r = r.apply(this, arguments);
            return r = !r || "object" != typeof r && "function" != typeof r ? n(this) : r
        }
    }

    function Sh(e, t, n) {
        return (Sh = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = wd(e));) ;
            if (e) return (t = Object.getOwnPropertyDescriptor(e, t)).get ? t.get.call(n) : t.value
        })(e, t, n || e)
    }

    function ra(e, t) {
        var n = Array.isArray(e) ? e : void 0;
        if (!n) if (null == (n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]))) n = void 0; else {
            var r, i = [], o = !0, s = !1;
            try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0) ;
            } catch (e) {
                s = !0;
                var a = e
            } finally {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
            n = i
        }
        if (!(e = n || ul(e, t))) throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        return e
    }

    function I(e) {
        var t = Array.isArray(e) ? Th(e) : void 0;
        if (t || (t = "undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"] ? Array.from(e) : void 0), !(e = t || ul(e))) throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        return e
    }

    function ul(e, t) {
        if (e) {
            if ("string" == typeof e) return Th(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Th(e, t)
        }
    }

    function Th(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function fa(e, t, n, r, i) {
        var o = {};
        return Object.keys(r).forEach((function (e) {
            o[e] = r[e]
        })), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce((function (n, r) {
            return r(e, t, n) || n
        }), o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
    }

    function $a(e) {
        var t = {exports: {}};
        return e(t, t.exports), t.exports
    }

    function vl(e, t) {
        var n, r = 3 > arguments.length ? e : arguments[2];
        return va(e) === r ? e[t] : (n = Fb.f(e, t)) ? Q(n, "value") ? n.value : void 0 === n.get ? void 0 : n.get.call(r) : ha(n = Vb(e)) ? vl(n, t, r) : void 0
    }

    function os(e) {
        var t = e.charCodeAt(0) << 24, n = 0 | ps(~t), r = 0, i = 0 | e.length, o = "";
        if (5 > n && i >= n) {
            for (t = t << n >>> 24 + n, r = 1; r < n; r = r + 1 | 0) t = t << 6 | 63 & e.charCodeAt(r);
            65535 >= t ? o += xd(t) : 1114111 >= t ? o += xd(55296 + ((t = t - 65536 | 0) >> 10) | 0, 56320 + (1023 & t) | 0) : r = 0
        }
        for (; r < i; r = r + 1 | 0) o += "�";
        return o
    }

    function wl() {
    }

    function qs(e) {
        var t = 0 | e.charCodeAt(0);
        if (55296 <= t && 56319 >= t) {
            var n = 0 | e.charCodeAt(1);
            if (!(n == n && 56320 <= n && 57343 >= n)) return xd(239, 191, 189);
            if (65535 < (t = (t - 55296 << 10) + n - 56320 + 65536 | 0)) return xd(240 | t >>> 18, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t)
        }
        return 127 >= t ? e : 2047 >= t ? xd(192 | t >>> 6, 128 | 63 & t) : xd(224 | t >>> 12, 128 | t >>> 6 & 63, 128 | 63 & t)
    }

    function xl() {
    }

    function ea() {
        ea.init.call(this)
    }

    function ng(e) {
        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + aa(e))
    }

    function yl(e, t, n, r) {
        ng(n);
        var i = e._events;
        if (void 0 === i) i = e._events = Object.create(null), e._eventsCount = 0; else {
            void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events);
            var o = i[t]
        }
        return void 0 === o ? (i[t] = n, ++e._eventsCount) : ("function" == typeof o ? o = i[t] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), 0 < (n = void 0 === e._maxListeners ? ea.defaultMaxListeners : e._maxListeners) && o.length > n && !o.warned && (o.warned = !0, (n = Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit")).name = "MaxListenersExceededWarning", n.emitter = e, n.type = t, n.count = o.length, console && console.warn && console.warn(n))), e
    }

    function rs() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }

    function zl(e, t, n) {
        return e = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: n
        }, (t = rs.bind(e)).listener = n, e.wrapFn = t
    }

    function Al(e, t, n) {
        if (void 0 === (e = e._events)) return [];
        if (void 0 === (t = e[t])) return [];
        if ("function" == typeof t) return n ? [t.listener || t] : [t];
        if (n) for (n = Array(t.length), e = 0; e < n.length; ++e) n[e] = t[e].listener || t[e]; else n = Bl(t, t.length);
        return n
    }

    function Cl(e) {
        var t = this._events;
        if (void 0 !== t) {
            if ("function" == typeof (e = t[e])) return 1;
            if (void 0 !== e) return e.length
        }
        return 0
    }

    function Bl(e, t) {
        for (var n = Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n
    }

    function ss(e, t, n) {
        "function" == typeof e.on && Dl(e, "error", t, n)
    }

    function Dl(e, t, n, r) {
        if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n); else {
            if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + aa(e));
            e.addEventListener(t, (function i(o) {
                r.once && e.removeEventListener(t, i), n(o)
            }))
        }
    }

    function ts(e) {
        return e ? I(e) : us((function () {
            return []
        }), (function (e, t) {
            return e.push(t), e
        }))
    }

    function El(e, t) {
        var n, r, i, o;
        return x.wrap((function (s) {
            for (; ;) switch (s.prev = s.next) {
                case 0:
                    n = Fl(e)([Gl, Gl, function (e, t) {
                        return t
                    }])[2], r = 0;
                case 2:
                    if (!(r < t.length)) {
                        s.next = 17;
                        break
                    }
                    if (i = t[r], !((o = n(Uh, i)) instanceof og)) {
                        s.next = 11;
                        break
                    }
                    if ((o = Vh(o.deref())) === Uh) {
                        s.next = 10;
                        break
                    }
                    return s.next = 10, o;
                case 10:
                    return s.abrupt("return");
                case 11:
                    if (o === Uh) {
                        s.next = 14;
                        break
                    }
                    return s.next = 14, o;
                case 14:
                    r++, s.next = 2;
                    break;
                case 17:
                case"end":
                    return s.stop()
            }
        }), vs)
    }

    function pg(e, t) {
        return null != t && "function" == typeof t[Symbol.iterator] ? El(pg(e), t) : function (t) {
            var n = t[2];
            return ws(t, (function (t, r) {
                return n(t, e(r))
            }))
        }
    }

    function Ac(e) {
        return Object.prototype.toString.call(e).slice(8, -1)
    }

    function yd(e) {
        return "Object" === Ac(e) && (e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype)
    }

    function Hl(e) {
        var t;
        return (t = "Boolean" === Ac(e) || "Null" === Ac(e) || "Undefined" === Ac(e)) || (t = "Number" === Ac(e) && !isNaN(e)), t || "String" === Ac(e) || "Symbol" === Ac(e)
    }

    function zd(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    function be(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    function ce(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    function gf(e) {
        var t = -1, n = null == e ? 0 : e.length;
        for (this.__data__ = new qg; ++t < n;) this.add(e[t])
    }

    function de(e) {
        this.size = (this.__data__ = new rg(e)).size
    }

    function ee(e, t, n, r, i, o) {
        var s, a = 1 & t, u = 2 & t, c = 4 & t;
        if (n && (s = i ? n(e, r, i, o) : n(e)), void 0 !== s) return s;
        if (!lb(e)) return e;
        if (r = Va(e)) {
            if (s = xs(e), !a) return Wh(e, s)
        } else {
            var l = hf(e), f = "[object Function]" == l || "[object GeneratorFunction]" == l;
            if (jf(e)) return Il(e, a);
            if ("[object Object]" == l || "[object Arguments]" == l || f && !i) {
                if (s = u || f ? {} : Jl(e), !a) return u ? ys(e, zs(s, e)) : As(e, Bs(s, e))
            } else {
                if (!wa[l]) return i ? e : {};
                s = Cs(e, l, a)
            }
        }
        if (o || (o = new fe), i = o.get(e)) return i;
        o.set(e, s), Ds(e) ? e.forEach((function (r) {
            s.add(ee(r, t, n, r, e, o))
        })) : Es(e) && e.forEach((function (r, i) {
            s.set(i, ee(r, t, n, i, e, o))
        })), u = c ? u ? Kl : Xh : u ? kf : Ad;
        var h = r ? void 0 : u(e);
        return Fs(h || e, (function (r, i) {
            h && (r = e[i = r]), Ll(s, i, ee(r, t, n, i, e, o))
        })), s
    }

    function Yh(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
        var n = function n() {
            var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
            return o.has(i) ? o.get(i) : (r = e.apply(this, r), n.cache = o.set(i, r) || o, r)
        };
        return n.cache = new (Yh.Cache || qg), n
    }

    function Ml(e) {
        if ("string" == typeof e) return e;
        if (Va(e)) return ge(e, Ml) + "";
        if (he(e)) return Nl ? Nl.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -Gs ? "-0" : t
    }

    function Zh(e, t, n, r, i) {
        var o = -1, s = e.length;
        for (n || (n = Hs), i || (i = []); ++o < s;) {
            var a = e[o];
            0 < t && n(a) ? 1 < t ? Zh(a, t - 1, n, r, i) : $h(i, a) : r || (i[i.length] = a)
        }
        return i
    }

    function ie(e, t, n, r, i) {
        if (e === t) t = !0; else if (null == e || null == t || !gc(e) && !gc(t)) t = e != e && t != t; else e:{
            var o = Va(e), s = Va(t), a = o ? "[object Array]" : hf(e), u = s ? "[object Array]" : hf(t),
                c = "[object Object]" == (a = "[object Arguments]" == a ? "[object Object]" : a);
            if (s = "[object Object]" == (u = "[object Arguments]" == u ? "[object Object]" : u), (u = a == u) && jf(e)) {
                if (!jf(t)) {
                    t = !1;
                    break e
                }
                o = !0, c = !1
            }
            if (u && !c) i || (i = new fe), t = o || ai(e) ? Ol(e, t, n, r, ie, i) : Is(e, t, a, n, r, ie, i); else {
                if (!(1 & n) && (o = c && Pl.call(e, "__wrapped__"), a = s && Pl.call(t, "__wrapped__"), o || a)) {
                    e = o ? e.value() : e, t = a ? t.value() : t, i || (i = new fe), t = ie(e, t, n, r, i);
                    break e
                }
                if (u) t:if (i || (i = new fe), o = 1 & n, a = Xh(e), s = a.length, u = Xh(t).length, s == u || o) {
                    for (u = s; u--;) {
                        var l = a[u];
                        if (!(o ? l in t : Js.call(t, l))) {
                            t = !1;
                            break t
                        }
                    }
                    if (c = i.get(e), l = i.get(t), c && l) t = c == t && l == e; else {
                        c = !0, i.set(e, t), i.set(t, e);
                        for (var f = o; ++u < s;) {
                            var h = e[l = a[u]], p = t[l];
                            if (r) var d = o ? r(p, h, l, t, e, i) : r(h, p, l, e, t, i);
                            if (void 0 === d ? h !== p && !ie(h, p, n, r, i) : !d) {
                                c = !1;
                                break
                            }
                            f || (f = "constructor" == l)
                        }
                        c && !f && ((n = e.constructor) != (r = t.constructor) && "constructor" in e && "constructor" in t && !("function" == typeof n && n instanceof n && "function" == typeof r && r instanceof r) && (c = !1)), i.delete(e), i.delete(t), t = c
                    }
                } else t = !1; else t = !1
            }
        }
        return t
    }

    function xa(e, t, n) {
        this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n
    }

    function mb(e) {
        return !0 === (e && e.__isLong__)
    }

    function Bd(e, t) {
        var n;
        if (t) {
            if ((t = 0 <= (e >>>= 0) && 256 > e) && (n = Ql[e])) return n;
            n = ya(e, 0 > (0 | e) ? -1 : 0, !0), t && (Ql[e] = n)
        } else {
            if ((t = -128 <= (e |= 0) && 128 > e) && (n = Rl[e])) return n;
            n = ya(e, 0 > e ? -1 : 0, !1), t && (Rl[e] = n)
        }
        return n
    }

    function Gb(e, t) {
        if (isNaN(e)) return t ? Cd : Hb;
        if (t) {
            if (0 > e) return Cd;
            if (e >= Sl) return Tl
        } else {
            if (e <= -Ul) return nb;
            if (e + 1 >= Ul) return Vl
        }
        return 0 > e ? Gb(-e, t).neg() : ya(e % je | 0, e / je | 0, t)
    }

    function ya(e, t, n) {
        return new xa(e, t, n)
    }

    function bi(e, t, n) {
        if (0 === e.length) throw Error("empty string");
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return Hb;
        if ("number" == typeof t ? (n = t, t = !1) : t = !!t, 2 > (n = n || 10) || 36 < n) throw RangeError("radix");
        var r;
        if (0 < (r = e.indexOf("-"))) throw Error("interior hyphen");
        if (0 === r) return bi(e.substring(1), t, n).neg();
        r = Gb(sg(n, 8));
        for (var i = Hb, o = 0; o < e.length; o += 8) {
            var s = Math.min(8, e.length - o), a = parseInt(e.substring(o, o + s), n);
            8 > s ? (s = Gb(sg(n, s)), i = i.mul(s).add(Gb(a))) : i = (i = i.mul(r)).add(Gb(a))
        }
        return i.unsigned = t, i
    }

    function Wb(e, t) {
        return "number" == typeof e ? Gb(e, t) : "string" == typeof e ? bi(e, t) : ya(e.low, e.high, "boolean" == typeof t ? t : e.unsigned)
    }

    function O(e, t) {
        function n() {
            this.constructor = e
        }

        ci(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    function ke(e) {
        return "function" == typeof e
    }

    function le(e) {
        setTimeout((function () {
            throw e
        }), 0)
    }

    function di(e) {
        return null !== e && "object" === aa(e)
    }

    function Wl(e) {
        return e.reduce((function (e, t) {
            return e.concat(t instanceof lf ? t.errors : t)
        }), [])
    }

    function ei(e) {
        for (; e;) {
            var t = e.destination, n = e.isStopped;
            if (e.closed || n) return !1;
            e = t && t instanceof ia ? t : null
        }
        return !0
    }

    function Xc(e) {
        return e
    }

    function fi() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return Xl(e)
    }

    function Xl(e) {
        return 0 === e.length ? Xc : 1 === e.length ? e[0] : function (t) {
            return e.reduce((function (e, t) {
                return t(e)
            }), t)
        }
    }

    function Yl(e) {
        if (e || (e = Ib.Promise || Promise), !e) throw Error("no Promise impl found");
        return e
    }

    function Zl() {
        return function (e) {
            return e.lift(new Ks(e))
        }
    }

    function mf(e) {
        return e ? Ls(e) : vb
    }

    function Ls(e) {
        return new W((function (t) {
            return e.schedule((function () {
                return t.complete()
            }))
        }))
    }

    function Yc(e) {
        return e && "function" == typeof e.schedule
    }

    function gi(e, t) {
        return new W((function (n) {
            var r = new Na, i = 0;
            return r.add(t.schedule((function () {
                i === e.length ? n.complete() : (n.next(e[i++]), n.closed || r.add(this.schedule()))
            }))), r
        }))
    }

    function nf(e, t) {
        return t ? gi(e, t) : new W($l(e))
    }

    function fb() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return Yc(t = e[e.length - 1]) ? (e.pop(), gi(e, t)) : nf(e)
    }

    function Y(e, t) {
        return new W(t ? function (n) {
            return t.schedule(Ms, 0, {error: e, subscriber: n})
        } : function (t) {
            return t.error(e)
        })
    }

    function Ms(e) {
        e.subscriber.error(e.error)
    }

    function Ns(e, t) {
        return void 0 === t && (t = 0), function (n) {
            return n.lift(new Os(e, t))
        }
    }

    function am(e) {
        return e in hi && (delete hi[e], !0)
    }

    function hc() {
    }

    function ba(e, t) {
        return function (n) {
            if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new Ps(e, t))
        }
    }

    function bm(e, t, n) {
        if (t) {
            if (!Yc(t)) return function () {
                for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                return bm(e, n).apply(void 0, r).pipe(ba((function (e) {
                    return Jb(e) ? t.apply(void 0, e) : t(e)
                })))
            };
            n = t
        }
        return function () {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            var i, o = this, s = {context: o, subject: i, callbackFunc: e, scheduler: n};
            return new W((function (r) {
                if (n) return n.schedule(Qs, 0, {args: t, subscriber: r, params: s});
                if (!i) {
                    i = new of;
                    try {
                        e.apply(o, t.concat([function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            i.next(1 >= e.length ? e[0] : e), i.complete()
                        }]))
                    } catch (e) {
                        ei(i) ? i.error(e) : console.warn(e)
                    }
                }
                return i.subscribe(r)
            }))
        }
    }

    function Qs(e) {
        var t = this, n = e.args, r = e.subscriber, i = e.params;
        e = i.callbackFunc;
        var o = i.context, s = i.scheduler, a = i.subject;
        if (!a) {
            a = i.subject = new of, i = function () {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                t.add(s.schedule(Rs, 0, {value: 1 >= e.length ? e[0] : e, subject: a}))
            };
            try {
                e.apply(o, n.concat([i]))
            } catch (e) {
                a.error(e)
            }
        }
        this.add(a.subscribe(r))
    }

    function Rs(e) {
        var t = e.subject;
        t.next(e.value), t.complete()
    }

    function cm(e, t, n) {
        if (t) {
            if (!Yc(t)) return function () {
                for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                return cm(e, n).apply(void 0, r).pipe(ba((function (e) {
                    return Jb(e) ? t.apply(void 0, e) : t(e)
                })))
            };
            n = t
        }
        return function () {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            var i = {subject: void 0, args: t, callbackFunc: e, scheduler: n, context: this};
            return new W((function (r) {
                var o = i.context, s = i.subject;
                if (n) return n.schedule(Ss, 0, {params: i, subscriber: r, context: o});
                if (!s) {
                    s = i.subject = new of;
                    try {
                        e.apply(o, t.concat([function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            (t = e.shift()) ? s.error(t) : (s.next(1 >= e.length ? e[0] : e), s.complete())
                        }]))
                    } catch (e) {
                        ei(s) ? s.error(e) : console.warn(e)
                    }
                }
                return s.subscribe(r)
            }))
        }
    }

    function Ss(e) {
        var t = this, n = e.params, r = e.subscriber;
        e = e.context;
        var i = n.callbackFunc, o = n.args, s = n.scheduler, a = n.subject;
        if (!a) {
            a = n.subject = new of, n = function () {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                (n = e.shift()) ? t.add(s.schedule(dm, 0, {
                    err: n,
                    subject: a
                })) : t.add(s.schedule(Ts, 0, {value: 1 >= e.length ? e[0] : e, subject: a}))
            };
            try {
                i.apply(e, o.concat([n]))
            } catch (e) {
                this.add(s.schedule(dm, 0, {err: e, subject: a}))
            }
        }
        this.add(a.subscribe(r))
    }

    function Ts(e) {
        var t = e.subject;
        t.next(e.value), t.complete()
    }

    function dm(e) {
        e.subject.error(e.err)
    }

    function em(e) {
        return !!e && "function" != typeof e.subscribe && "function" == typeof e.then
    }

    function ii(e, t, n, r, i) {
        if (void 0 === i && (i = new Us(e, n, r)), !i.closed) return t instanceof W ? t.subscribe(i) : pf(t)(i)
    }

    function Vs(e, t) {
        return new W((function (n) {
            var r = new Na;
            return r.add(t.schedule((function () {
                var i = e[me]();
                r.add(i.subscribe({
                    next: function (e) {
                        r.add(t.schedule((function () {
                            return n.next(e)
                        })))
                    }, error: function (e) {
                        r.add(t.schedule((function () {
                            return n.error(e)
                        })))
                    }, complete: function () {
                        r.add(t.schedule((function () {
                            return n.complete()
                        })))
                    }
                }))
            }))), r
        }))
    }

    function Ws(e, t) {
        return new W((function (n) {
            var r = new Na;
            return r.add(t.schedule((function () {
                return e.then((function (e) {
                    r.add(t.schedule((function () {
                        n.next(e), r.add(t.schedule((function () {
                            return n.complete()
                        })))
                    })))
                }), (function (e) {
                    r.add(t.schedule((function () {
                        return n.error(e)
                    })))
                }))
            }))), r
        }))
    }

    function Xs(e, t) {
        if (!e) throw Error("Iterable cannot be null");
        return new W((function (n) {
            var r, i = new Na;
            return i.add((function () {
                r && "function" == typeof r.return && r.return()
            })), i.add(t.schedule((function () {
                r = e[Zc](), i.add(t.schedule((function () {
                    if (!n.closed) {
                        try {
                            var e = r.next(), t = e.value, i = e.done
                        } catch (e) {
                            return void n.error(e)
                        }
                        i ? n.complete() : (n.next(t), this.schedule())
                    }
                })))
            }))), i
        }))
    }

    function fm(e, t) {
        if (null != e) {
            if (e && "function" == typeof e[me]) return Vs(e, t);
            if (em(e)) return Ws(e, t);
            if (gm(e)) return gi(e, t);
            if (e && "function" == typeof e[Zc] || "string" == typeof e) return Xs(e, t)
        }
        throw new TypeError((null !== e && aa(e) || e) + " is not observable")
    }

    function Kb(e, t) {
        return t ? fm(e, t) : e instanceof W ? e : new W(pf(e))
    }

    function ic(e, t) {
        if (!t.closed) {
            if (e instanceof W) return e.subscribe(t);
            try {
                var n = pf(e)(t)
            } catch (e) {
                t.error(e)
            }
            return n
        }
    }

    function bb(e, t, n) {
        return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof t ? function (r) {
            return r.pipe(bb((function (n, r) {
                return Kb(e(n, r)).pipe(ba((function (e, i) {
                    return t(n, e, r, i)
                })))
            }), n))
        } : ("number" == typeof t && (n = t), function (t) {
            return t.lift(new Ys(e, n))
        })
    }

    function tg(e) {
        return void 0 === e && (e = Number.POSITIVE_INFINITY), bb(Xc, e)
    }

    function hm() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return tg(1)(fb.apply(void 0, e))
    }

    function $c(e) {
        return new W((function (t) {
            try {
                var n = e()
            } catch (e) {
                return void t.error(e)
            }
            return (n ? Kb(n) : mf()).subscribe(t)
        }))
    }

    function im() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (1 === e.length) {
            var n = e[0];
            if (Jb(n)) return ug(n, null);
            if (di(n) && Object.getPrototypeOf(n) === Object.prototype) return ug((e = Object.keys(n)).map((function (e) {
                return n[e]
            })), e)
        }
        if ("function" == typeof e[e.length - 1]) {
            var r = e.pop();
            return ug(e = 1 === e.length && Jb(e[0]) ? e[0] : e, null).pipe(ba((function (e) {
                return r.apply(void 0, e)
            })))
        }
        return ug(e, null)
    }

    function ug(e, t) {
        return new W((function (n) {
            var r = e.length;
            if (0 === r) n.complete(); else for (var i = Array(r), o = 0, s = 0, a = function (a) {
                var u = Kb(e[a]), c = !1;
                n.add(u.subscribe({
                    next: function (e) {
                        c || (c = !0, s++), i[a] = e
                    }, error: function (e) {
                        return n.error(e)
                    }, complete: function () {
                        ++o !== r && c || (s === r && n.next(t ? t.reduce((function (e, t, n) {
                            return e[t] = i[n], e
                        }), {}) : i), n.complete())
                    }
                }))
            }, u = 0; u < r; u++) a(u)
        }))
    }

    function gb(e, t, n, r) {
        return ke(n) && (r = n, n = void 0), r ? gb(e, t, n).pipe(ba((function (e) {
            return Jb(e) ? r.apply(void 0, e) : r(e)
        }))) : new W((function (r) {
            jm(e, t, (function (e) {
                1 < arguments.length ? r.next(Array.prototype.slice.call(arguments)) : r.next(e)
            }), r, n)
        }))
    }

    function jm(e, t, n, r, i) {
        if (e && "function" == typeof e.addEventListener && "function" == typeof e.removeEventListener) {
            e.addEventListener(t, n, i);
            var o = function () {
                return e.removeEventListener(t, n, i)
            }
        } else if (e && "function" == typeof e.on && "function" == typeof e.off) e.on(t, n), o = function () {
            return e.off(t, n)
        }; else if (e && "function" == typeof e.addListener && "function" == typeof e.removeListener) e.addListener(t, n), o = function () {
            return e.removeListener(t, n)
        }; else {
            if (!e || !e.length) throw new TypeError("Invalid event target");
            for (var s = 0, a = e.length; s < a; s++) jm(e[s], t, n, r, i)
        }
        r.add(o)
    }

    function km(e, t, n) {
        return n ? km(e, t).pipe(ba((function (e) {
            return Jb(e) ? n.apply(void 0, e) : n(e)
        }))) : new W((function (n) {
            var r = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return n.next(1 === e.length ? e[0] : e)
            };
            try {
                var i = e(r)
            } catch (e) {
                return void n.error(e)
            }
            if (ke(t)) return function () {
                return t(r, i)
            }
        }))
    }

    function Zs(e) {
        var t = e.subscriber, n = e.condition;
        if (!t.closed) {
            if (e.needIterate) try {
                e.state = e.iterate(e.state)
            } catch (e) {
                return void t.error(e)
            } else e.needIterate = !0;
            if (n) {
                var r = void 0;
                try {
                    r = n(e.state)
                } catch (e) {
                    return void t.error(e)
                }
                if (!r) return void t.complete();
                if (t.closed) return
            }
            try {
                var i = e.resultSelector(e.state)
            } catch (e) {
                return void t.error(e)
            }
            if (!t.closed && (t.next(i), !t.closed)) return this.schedule(e)
        }
    }

    function ji(e) {
        return !Jb(e) && 0 <= e - parseFloat(e) + 1
    }

    function lm(e, t) {
        return void 0 === e && (e = 0), void 0 === t && (t = ad), (!ji(e) || 0 > e) && (e = 0), t && "function" == typeof t.schedule || (t = ad), new W((function (n) {
            return n.add(t.schedule($s, e, {subscriber: n, counter: 0, period: e})), n
        }))
    }

    function $s(e) {
        var t = e.subscriber, n = e.counter;
        e = e.period, t.next(n), this.schedule({subscriber: t, counter: n + 1, period: e}, e)
    }

    function Xb() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        t = Number.POSITIVE_INFINITY;
        var n = null, r = e[e.length - 1];
        return Yc(r) ? (n = e.pop(), 1 < e.length && "number" == typeof e[e.length - 1] && (t = e.pop())) : "number" == typeof r && (t = e.pop()), null === n && 1 === e.length && e[0] instanceof W ? e[0] : tg(t)(nf(e, n))
    }

    function ki() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (0 === e.length) return vb;
        var n = e[0], r = e.slice(1);
        return 1 === e.length && Jb(n) ? ki.apply(void 0, n) : new W((function (e) {
            var t = function () {
                return e.add(ki.apply(void 0, r).subscribe(e))
            };
            return Kb(n).subscribe({
                next: function (t) {
                    e.next(t)
                }, error: t, complete: t
            })
        }))
    }

    function at(e) {
        var t = e.keys, n = e.index, r = e.subscriber, i = e.subscription;
        if (e = e.obj, !r.closed) if (n < t.length) {
            var o = t[n];
            r.next([o, e[o]]), i.add(this.schedule({keys: t, index: n + 1, subscriber: r, subscription: i, obj: e}))
        } else r.complete()
    }

    function bt(e, t) {
        function n() {
            return !n.pred.apply(n.thisArg, arguments)
        }

        return n.pred = e, n.thisArg = t, n
    }

    function wb(e, t) {
        return function (n) {
            return n.lift(new ct(e, t))
        }
    }

    function Ca() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (1 === e.length) {
            if (!Jb(e[0])) return e[0];
            e = e[0]
        }
        return nf(e, void 0).lift(new dt)
    }

    function et(e) {
        var t = e.start, n = e.index, r = e.subscriber;
        n >= e.count ? r.complete() : (r.next(t), r.closed || (e.index = n + 1, e.start = t + 1, this.schedule(e)))
    }

    function Bc(e, t, n) {
        void 0 === e && (e = 0);
        var r = -1;
        return ji(t) ? r = 1 > Number(t) ? 1 : Number(t) : Yc(t) && (n = t), Yc(n) || (n = ad), new W((function (t) {
            var i = ji(e) ? e : +e - n.now();
            return n.schedule(ft, i, {index: 0, period: r, subscriber: t})
        }))
    }

    function ft(e) {
        var t = e.index, n = e.period, r = e.subscriber;
        if (r.next(t), !r.closed) {
            if (-1 === n) return r.complete();
            e.index = t + 1, this.schedule(e, n)
        }
    }

    function li() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return "function" == typeof (t = e[e.length - 1]) && e.pop(), nf(e, void 0).lift(new gt(t))
    }

    function Ga(e) {
        return function (t) {
            var n = new ht(e);
            return t = t.lift(n), n.caught = t
        }
    }

    function mi(e, t) {
        return bb(e, t, 1)
    }

    function mm(e) {
        return void 0 === e && (e = null), function (t) {
            return t.lift(new it(e))
        }
    }

    function bd(e, t) {
        void 0 === t && (t = ad);
        var n = e instanceof Date && !isNaN(+e) ? +e - t.now() : Math.abs(e);
        return function (e) {
            return e.lift(new jt(n, t))
        }
    }

    function nm(e, t) {
        return function (n) {
            return n.lift(new kt(e, t))
        }
    }

    function Dd(e) {
        return void 0 === e && (e = lt), function (t) {
            return t.lift(new mt(e))
        }
    }

    function lt() {
        return new vg
    }

    function Oa(e) {
        return function (t) {
            return 0 === e ? mf() : t.lift(new nt(e))
        }
    }

    function om(e, t) {
        return t ? function (n) {
            return n.pipe(om((function (n, r) {
                return Kb(e(n, r)).pipe(ba((function (e, i) {
                    return t(n, e, r, i)
                })))
            })))
        } : function (t) {
            return t.lift(new ot(e))
        }
    }

    function wg(e) {
        return function (t) {
            return t.lift(new pt(e))
        }
    }

    function Z(e, t) {
        var n = 2 <= arguments.length;
        return function (r) {
            return r.pipe(e ? wb((function (t, n) {
                return e(t, n, r)
            })) : Xc, Oa(1), n ? mm(t) : Dd((function () {
                return new vg
            })))
        }
    }

    function qt() {
        return function (e) {
            return e.lift(new rt)
        }
    }

    function pm(e) {
        return function (t) {
            return 0 === e ? mf() : t.lift(new st(e))
        }
    }

    function qf(e) {
        return function (t) {
            return t.lift(new tt(e))
        }
    }

    function xg(e, t) {
        var n = !1;
        return 2 <= arguments.length && (n = !0), function (r) {
            return r.lift(new ut(e, t, n))
        }
    }

    function qm(e, t) {
        return 2 <= arguments.length ? function (n) {
            return fi(xg(e, t), pm(1), mm(t))(n)
        } : function (t) {
            return fi(xg((function (t, n, r) {
                return e(t, n, r + 1)
            })), pm(1))(t)
        }
    }

    function vt(e, t) {
        return function (n) {
            var r = "function" == typeof e ? e : function () {
                return e
            };
            if ("function" == typeof t) return n.lift(new wt(r, t));
            var i = Object.create(n, xt);
            return i.source = n, i.subjectFactory = r, i
        }
    }

    function ne(e) {
        return function (t) {
            return t.lift(new yt(e, t))
        }
    }

    function zt() {
        return new Pa
    }

    function oe() {
        return function (e) {
            return Zl()(vt(zt)(e))
        }
    }

    function rm(e, t, n) {
        var r = e && "object" === aa(e) ? e : {bufferSize: e, windowTime: t, refCount: !1, scheduler: n};
        return function (e) {
            return e.lift(At(r))
        }
    }

    function At(e) {
        var t, n, r = e.bufferSize, i = void 0 === r ? Number.POSITIVE_INFINITY : r,
            o = void 0 === (r = e.windowTime) ? Number.POSITIVE_INFINITY : r, s = e.refCount, a = e.scheduler, u = 0,
            c = !1, l = !1;
        return function (e) {
            if (u++, !t || c) {
                c = !1;
                var r = (t = new pe(i, o, a)).subscribe(this);
                n = e.subscribe({
                    next: function (e) {
                        t.next(e)
                    }, error: function (e) {
                        c = !0, t.error(e)
                    }, complete: function () {
                        l = !0, n = void 0, t.complete()
                    }
                }), l && (n = void 0)
            } else r = t.subscribe(this);
            this.add((function () {
                u--, r.unsubscribe(), r = void 0, n && !l && s && 0 === u && (n.unsubscribe(), t = n = void 0)
            }))
        }
    }

    function Cc(e, t) {
        return "function" == typeof t ? function (n) {
            return n.pipe(Cc((function (n, r) {
                return Kb(e(n, r)).pipe(ba((function (e, i) {
                    return t(n, e, r, i)
                })))
            })))
        } : function (t) {
            return t.lift(new Bt(e))
        }
    }

    function ob(e) {
        return function (t) {
            return t.lift(new Ct(e))
        }
    }

    function Dt(e, t) {
        return void 0 === t && (t = !1), function (n) {
            return n.lift(new Et(e, t))
        }
    }

    function ca(e, t, n) {
        return function (r) {
            return r.lift(new Ft(e, t, n))
        }
    }

    function Gt(e, t, n) {
        return void 0 === t && (t = ad), void 0 === n && (n = Ht), function (r) {
            return r.lift(new It(e, t, n.leading, n.trailing))
        }
    }

    function Jt(e) {
        e.subscriber.clearThrottle()
    }

    function Kt(e, t, n) {
        return void 0 === n && (n = ad), function (r) {
            var i = e instanceof Date && !isNaN(+e), o = i ? +e - n.now() : Math.abs(e);
            return r.lift(new Lt(o, i, t, n))
        }
    }

    function hb(e, t) {
        return void 0 === t && (t = ad), Kt(e, Y(new pb), t)
    }

    function Mt() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function (t) {
            var n;
            return "function" == typeof e[e.length - 1] && (n = e.pop()), t.lift(new Nt(e, n))
        }
    }

    function sm(e, t, n, r, i) {
        e !== t && tm(t, (function (o, s) {
            if (i || (i = new fe), lb(o)) {
                o = i;
                var a = ni(e, s), u = ni(t, s), c = o.get(u);
                if (c) oi(e, s, c); else {
                    var l = void 0 === (c = r ? r(a, u, s + "", e, t, o) : void 0);
                    if (l) {
                        var f = Va(u), h = !f && jf(u), p = !f && !h && ai(u);
                        c = u, f || h || p ? Va(a) ? c = a : gc(a) && Ed(a) ? c = Wh(a) : h ? (l = !1, c = Il(u, !0)) : p ? (l = !1, c = um(u, !0)) : c = [] : vm(u) || rf(u) ? (c = a, rf(a) ? c = qe(a, kf(a)) : lb(a) && !pi(a) || (c = Jl(u))) : l = !1
                    }
                    l && (o.set(u, c), sm(c, u, n, r, o), o.delete(u)), oi(e, s, c)
                }
            } else void 0 === (a = r ? r(ni(e, s), o, s + "", e, t, i) : void 0) && (a = o), oi(e, s, a)
        }), kf)
    }

    function Ot(e) {
        var t = 1, n = qi;
        1 == (1 >= arguments.length ? 0 : arguments.length - 1) ? "number" == typeof (1 >= arguments.length ? void 0 : arguments[1]) ? t = 1 >= arguments.length ? void 0 : arguments[1] : n = 1 >= arguments.length ? void 0 : arguments[1] : 2 == (1 >= arguments.length ? 0 : arguments.length - 1) && (t = 1 >= arguments.length ? void 0 : arguments[1], n = 2 >= arguments.length ? void 0 : arguments[2]);
        var r = t || 1;
        return function (t) {
            return t.pipe(xg((function (t, i) {
                var o = n.now(), s = o - e;
                if ((t = t.filter((function (e) {
                    return e.until > s
                }))).length >= r) {
                    var a = t[t.length - 1], u = t[0].until + e * Math.floor(t.length / r);
                    t.push({delay: a.until < o ? u - o : u - a.until, until: u, value: i})
                } else t.push({delay: 0, until: o, value: i});
                return t
            }), []), ba((function (e) {
                return e[e.length - 1]
            })), mi((function (e) {
                var t = fb(e.value);
                return e.delay ? t.pipe(bd(e.delay, n)) : t
            })))
        }
    }

    function Pt(e, t) {
        var n = (t = void 0 === t ? {protocols: wm, makeWebSocket: xm} : t).protocols, r = void 0 === n ? wm : n,
            i = void 0 === (t = t.makeWebSocket) ? xm : t;
        return new W((function (t) {
            var n, o = new Pa, s = i(e, r), a = !1, u = !1, c = function (e) {
                if (n) throw a = !0, e = Error("Web socket message factory function called more than once"), t.error(e), e;
                return n = e.subscribe((function (e) {
                    s.send(e)
                })), o
            };
            return s.onopen = function () {
                u ? (a = !0, s.close()) : t.next(c)
            }, s.onmessage = function (e) {
                o.next(e.data)
            }, s.onerror = function (e) {
                a = !0, t.error(Error(e.message))
            }, s.onclose = function (e) {
                a || (a = !0, u ? (t.complete(), o.complete()) : t.error(Error(1e3 === e.code ? "Normal closure" : e.reason)))
            }, function () {
                u = !0, n && n.unsubscribe(), a || (a = !0, s.close())
            }
        }))
    }

    function yg() {
        this._listeners = {}
    }

    function ym(e) {
        return "undefined" != typeof Float32Array ? function () {
            function t(e, t, n) {
                o[0] = e, t[n] = s[0], t[n + 1] = s[1], t[n + 2] = s[2], t[n + 3] = s[3]
            }

            function n(e, t, n) {
                o[0] = e, t[n] = s[3], t[n + 1] = s[2], t[n + 2] = s[1], t[n + 3] = s[0]
            }

            function r(e, t) {
                return s[0] = e[t], s[1] = e[t + 1], s[2] = e[t + 2], s[3] = e[t + 3], o[0]
            }

            function i(e, t) {
                return s[3] = e[t], s[2] = e[t + 1], s[1] = e[t + 2], s[0] = e[t + 3], o[0]
            }

            var o = new Float32Array([-0]), s = new Uint8Array(o.buffer), a = 128 === s[3];
            e.writeFloatLE = a ? t : n, e.writeFloatBE = a ? n : t, e.readFloatLE = a ? r : i, e.readFloatBE = a ? i : r
        }() : function () {
            function t(e, t, n, r) {
                var i = 0 > t ? 1 : 0;
                if (i && (t = -t), 0 === t) e(0 < 1 / t ? 0 : 2147483648, n, r); else if (isNaN(t)) e(2143289344, n, r); else if (34028234663852886e22 < t) e((i << 31 | 2139095040) >>> 0, n, r); else if (11754943508222875e-54 > t) e((i << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, n, r); else {
                    var o = Math.floor(Math.log(t) / Math.LN2);
                    e((i << 31 | o + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -o) * 8388608)) >>> 0, n, r)
                }
            }

            function n(e, t, n) {
                return n = e(t, n), e = 2 * (n >> 31) + 1, t = n >>> 23 & 255, n &= 8388607, 255 === t ? n ? NaN : 1 / 0 * e : 0 === t ? 1401298464324817e-60 * e * n : e * Math.pow(2, t - 150) * (n + 8388608)
            }

            e.writeFloatLE = t.bind(null, zm), e.writeFloatBE = t.bind(null, Am), e.readFloatLE = n.bind(null, Bm), e.readFloatBE = n.bind(null, Cm)
        }(), "undefined" != typeof Float64Array ? function () {
            function t(e, t, n) {
                o[0] = e, t[n] = s[0], t[n + 1] = s[1], t[n + 2] = s[2], t[n + 3] = s[3], t[n + 4] = s[4], t[n + 5] = s[5], t[n + 6] = s[6], t[n + 7] = s[7]
            }

            function n(e, t, n) {
                o[0] = e, t[n] = s[7], t[n + 1] = s[6], t[n + 2] = s[5], t[n + 3] = s[4], t[n + 4] = s[3], t[n + 5] = s[2], t[n + 6] = s[1], t[n + 7] = s[0]
            }

            function r(e, t) {
                return s[0] = e[t], s[1] = e[t + 1], s[2] = e[t + 2], s[3] = e[t + 3], s[4] = e[t + 4], s[5] = e[t + 5], s[6] = e[t + 6], s[7] = e[t + 7], o[0]
            }

            function i(e, t) {
                return s[7] = e[t], s[6] = e[t + 1], s[5] = e[t + 2], s[4] = e[t + 3], s[3] = e[t + 4], s[2] = e[t + 5], s[1] = e[t + 6], s[0] = e[t + 7], o[0]
            }

            var o = new Float64Array([-0]), s = new Uint8Array(o.buffer), a = 128 === s[7];
            e.writeDoubleLE = a ? t : n, e.writeDoubleBE = a ? n : t, e.readDoubleLE = a ? r : i, e.readDoubleBE = a ? i : r
        }() : function () {
            function t(e, t, n, r, i, o) {
                var s = 0 > r ? 1 : 0;
                if (s && (r = -r), 0 === r) e(0, i, o + t), e(0 < 1 / r ? 0 : 2147483648, i, o + n); else if (isNaN(r)) e(0, i, o + t), e(2146959360, i, o + n); else if (17976931348623157e292 < r) e(0, i, o + t), e((s << 31 | 2146435072) >>> 0, i, o + n); else if (22250738585072014e-324 > r) e((r /= 5e-324) >>> 0, i, o + t), e((s << 31 | r / 4294967296) >>> 0, i, o + n); else {
                    var a = Math.floor(Math.log(r) / Math.LN2);
                    1024 === a && (a = 1023), e(4503599627370496 * (r *= Math.pow(2, -a)) >>> 0, i, o + t), e((s << 31 | a + 1023 << 20 | 1048576 * r & 1048575) >>> 0, i, o + n)
                }
            }

            function n(e, t, n, r, i) {
                return t = e(r, i + t), r = e(r, i + n), e = 2 * (r >> 31) + 1, t = 4294967296 * (1048575 & r) + t, 2047 === (n = r >>> 20 & 2047) ? t ? NaN : 1 / 0 * e : 0 === n ? 5e-324 * e * t : e * Math.pow(2, n - 1075) * (t + 4503599627370496)
            }

            e.writeDoubleLE = t.bind(null, zm, 0, 4), e.writeDoubleBE = t.bind(null, Am, 4, 0), e.readDoubleLE = n.bind(null, Bm, 0, 4), e.readDoubleBE = n.bind(null, Cm, 4, 0)
        }(), e
    }

    function zm(e, t, n) {
        t[n] = 255 & e, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24
    }

    function Am(e, t, n) {
        t[n] = e >>> 24, t[n + 1] = e >>> 16 & 255, t[n + 2] = e >>> 8 & 255, t[n + 3] = 255 & e
    }

    function Bm(e, t) {
        return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
    }

    function Cm(e, t) {
        return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
    }

    function Wa(e, t) {
        this.lo = e >>> 0, this.hi = t >>> 0
    }

    function sf(e, t, n) {
        this.fn = e, this.len = t, this.next = void 0, this.val = n
    }

    function ri() {
    }

    function Qt(e) {
        this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states
    }

    function ja() {
        this.len = 0, this.tail = this.head = new sf(ri, 0, 0), this.states = null
    }

    function si(e, t, n) {
        t[n] = 255 & e
    }

    function ti(e, t) {
        this.len = e, this.next = void 0, this.val = t
    }

    function ui(e, t, n) {
        for (; e.hi;) t[n++] = 127 & e.lo | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
        for (; 127 < e.lo;) t[n++] = 127 & e.lo | 128, e.lo >>>= 7;
        t[n++] = e.lo
    }

    function vi(e, t, n) {
        t[n] = 255 & e, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24
    }

    function jc() {
        wi.call(this)
    }

    function Rt(e, t, n) {
        40 > e.length ? V.utf8.write(e, t, n) : t.utf8Write ? t.utf8Write(e, n) : t.write(e, n)
    }

    function Yb(e, t) {
        return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len)
    }

    function Ka(e) {
        this.buf = e, this.pos = 0, this.len = e.length
    }

    function xi() {
        var e = new Dm(0, 0), t = 0;
        if (!(4 < this.len - this.pos)) {
            for (; 3 > t; ++t) {
                if (this.pos >= this.len) throw Yb(this);
                if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, 128 > this.buf[this.pos++]) return e
            }
            return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e
        }
        for (; 4 > t; ++t) if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, 128 > this.buf[this.pos++]) return e;
        if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, 128 > this.buf[this.pos++]) return e;
        if (t = 0, 4 < this.len - this.pos) {
            for (; 5 > t; ++t) if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, 128 > this.buf[this.pos++]) return e
        } else for (; 5 > t; ++t) {
            if (this.pos >= this.len) throw Yb(this);
            if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, 128 > this.buf[this.pos++]) return e
        }
        throw Error("invalid varint encoding")
    }

    function zg(e, t) {
        return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0
    }

    function Em() {
        if (this.pos + 8 > this.len) throw Yb(this, 8);
        return new Dm(zg(this.buf, this.pos += 4), zg(this.buf, this.pos += 4))
    }

    function Fd(e) {
        yi.call(this, e)
    }

    function tf(e, t, n) {
        if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
        V.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = !!t, this.responseDelimited = !!n
    }

    function za(e) {
        return "string" == typeof e && /^[\s\w!#$%&()+,.:;<=>?@[\]^{|}~-]{1,64}$/.test(e) && "null" !== e
    }

    function Fm(e) {
        try {
            var t = e.split(".").map((function (e) {
                return Number(e)
            }))
        } catch (e) {
            return !1
        }
        if (4 !== t.length || 0 === t[0]) return !1;
        for (e = 0; e < t.length; e++) {
            var n = t[e];
            if (!Number.isInteger(n) || 0 > n || 255 < n) return !1
        }
        return !0
    }

    function Gm(e, t) {
        if (!Array.isArray(t) || 0 === t.length || 32 < t.length || t.some((function (e) {
            return 0 === e.length || 32 < e.length
        }))) throw new L("arguments is not valid", Ja);
        if (!za(e)) throw new L("ID is invalid", Ja)
    }

    function uf(e) {
        var t = e.attributes, n = e.attrSizeMap, r = e.maxAttrsCount, i = e.maxAttrValueSize;
        if (e = e.maxTotalSize, !yd(t)) throw new L("attributes must be an object", Ja);
        if (Object.keys(t).length > r) throw new ib("Exceed the limit of ".concat(r, " attributes"), re);
        if (0 === Object.keys(t).length) throw new L("The attributes is an empty object", Ja);
        var o = 0, s = 0;
        for (t = Object.entries(t); s < t.length; s++) {
            var a = ra(t[s], 2), u = a[1];
            a = new Blob([a[0]]).size;
            var c = new Blob([u]).size;
            if (0 === a || 32 < a) throw new L("Invalid attribute key", Ja);
            if (c > i) throw new ib("Invalid attribute value, over the limit of ".concat(i, " bytes"), re);
            if ("string" != typeof u || 0 === u.length) throw new L("Invalid attribute value", Ja);
            o += a, o += c
        }
        if (o > e) throw new ib("The attributes size overflow", re);
        if (void 0 !== n) {
            if (Object.keys(n).length > r) throw new ib("Exceed the limit of ".concat(r, " attributes"), re);
            for (o = r = 0, n = Object.entries(n); o < n.length; o++) {
                if (s = (t = ra(n[o], 2))[1], 0 === (t = new Blob([t[0]]).size)) throw new L("Invalid attribute key", Ja);
                if (s > i) throw new ib("Invalid attribute value, over the limit of ".concat(i, " bytes"), re);
                r += t, r += s
            }
            if (r > e) throw new ib("The attributes size overflow", re)
        }
    }

    function Ag(e, t) {
        return Math.floor(Math.random() * (Math.floor(t) - Math.ceil(e) + 1)) + e
    }

    function Bg() {
        var e = Ag(0, 4294967295), t = Ag(1, 4294967295);
        return new U(e, t, !0)
    }

    function Xa(e) {
        return e.toString().padEnd(32, "0")
    }

    function Hm(e, t) {
        return new TypeError("Unexpected ".concat(e, ": ").concat(t))
    }

    function Im(e, t) {
        return e = e.split(".").map((function (e) {
            return Number(e)
        })), t = t.split(".").map((function (e) {
            return Number(e)
        })), Math.sqrt(1e3 * Math.pow(e[0] - t[0], 2) + 100 * Math.pow(e[1] - t[1], 2) + 10 * Math.pow(e[2] - t[2], 2) + 1 * Math.pow(e[3] - t[3], 2))
    }

    function Jm(e) {
        return e.lessThanOrEqual(Number.MAX_SAFE_INTEGER) ? e.toNumber() : e.toString()
    }

    function zi(e, t) {
        t = "".concat(e).concat(t || "");
        var n = Km.get(t) || 1;
        return Km.set(t, n + 1), "".concat(e).concat(n)
    }

    function Lm(e, t) {
        var n = "number" == typeof t ? t : void 0 !== t && "string" != typeof t ? t.code : void 0;
        return t = "number" != typeof t && "string" != typeof t && void 0 !== t && void 0 !== t.serverCode ? t.serverCode : void 0, n = "".concat(void 0 !== n ? " Error Code ".concat(n) : "").concat(void 0 !== t ? ", server Code ".concat(t) : ""), e = "string" == typeof e && e ? Cg(e) : Array.isArray(e) && "string" == typeof e[0] && e[0] ? Cg(Mm.apply(void 0, [e[0]].concat(I(e.slice(1))))) : "", "".concat("" === n ? "" : "".concat(n, " - ")).concat(e)
    }

    function Nm(e) {
        return Ai.apply(this, arguments)
    }

    function Ai() {
        return (Ai = K(x.mark((function e(t) {
            return x.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", new Promise((function (e) {
                            setTimeout((function () {
                                e()
                            }), t)
                        })));
                    case 1:
                    case"end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }

    function Om(e) {
        return e instanceof Blob || "[object Blob]" === Object.prototype.toString.call(e)
    }

    function Dg(e) {
        var t = 255 & e, n = e >> 8 & 255, r = e >> 16 & 255;
        return "".concat(e >> 24 & 255, ".").concat(r, ".").concat(n, ".").concat(t)
    }

    function se(e, t, n) {
        return Bi.apply(this, arguments)
    }

    function Bi() {
        return (Bi = K(x.mark((function e(t, n, r) {
            var i, o, s, a, u, c, l, f, h, p, d, v, b, g, y, E, m, w, _, O, I, A, R, k, T, N;
            return x.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        if (i = n.body, o = n.headers, s = void 0 === o ? {} : o, a = n.timeout, u = void 0 === a ? 1e4 : a, c = n.signal, l = n.withCredentials, f = void 0 !== l && l, h = (r || {}).useBinaryResponse, p = void 0 !== h && h, (d = new XMLHttpRequest).open("POST", t, !0), d.responseType = p ? "arraybuffer" : "text", d.withCredentials = f, d.timeout = u, v = i instanceof FormData, b = i instanceof Uint8Array, !(1 < (g = Object.keys(s).filter((function (e) {
                            return "content-type" === e.toLowerCase()
                        }))).length)) {
                            e.next = 14;
                            break
                        }
                        throw new RangeError("multiple content-type");
                    case 14:
                        0 === g.length && (b ? s["Content-Type"] = "application/octet-stream" : v || (s["Content-Type"] = "application/json"));
                    case 15:
                        if ("setRequestHeader" in d) {
                            e.next = 46;
                            break
                        }
                        return d.abort(), e.next = 19, fetch(t, {
                            body: v || b ? i : JSON.stringify(i),
                            cache: "no-cache",
                            credentials: f ? "include" : "same-origin",
                            headers: s,
                            method: "POST",
                            mode: "cors",
                            referrer: "no-referrer",
                            signal: c
                        });
                    case 19:
                        if (y = e.sent, !(200 <= (E = y.status) && 300 > E || 304 === E)) {
                            e.next = 31;
                            break
                        }
                        if (!p) {
                            e.next = 27;
                            break
                        }
                        return e.next = 25, y.arrayBuffer();
                    case 25:
                        return m = e.sent, e.abrupt("return", {status: E, responseData: m});
                    case 27:
                        return e.next = 29, y.text();
                    case 29:
                        return w = e.sent, e.abrupt("return", {status: E, responseText: w});
                    case 31:
                        return _ = new da(["Post XHR failure, status %d", E]), e.prev = 32, e.next = 35, y.text();
                    case 35:
                        throw O = e.sent, _.statusCode = E, _.message = O || "Request failed, status ".concat(E), _;
                    case 41:
                        throw e.prev = 41, e.t0 = e.catch(32), _.statusCode = E, _.message = "Request failed, status ".concat(E), _;
                    case 46:
                        if (0 !== Object.keys(s).length) for (I = 0, A = Object.entries(s); I < A.length; I++) R = ra(A[I], 2), k = R[0], T = R[1], d.setRequestHeader(k, T);
                        return void 0 !== c && (N = function e() {
                            d.abort(), c.removeEventListener("abort", e)
                        }, c.addEventListener("abort", N)), v || b ? d.send(i) : d.send(JSON.stringify(i)), e.abrupt("return", new Promise((function (e, t) {
                            d.onload = function () {
                                var n = d.status;
                                if (200 <= n && 300 > n || 304 === n) e(p ? {
                                    status: n,
                                    responseData: d.response
                                } : {status: n, responseText: d.responseText}); else {
                                    var r = new da(["Post XHR failure, status %d", n]);
                                    r.statusCode = n, r.message = d.response || "Request failed, status ".concat(d.status), t(r)
                                }
                            }, d.ontimeout = function (e) {
                                t(new cb(["XHR request timed out after %d ms", u], {originalError: e}))
                            }, d.onerror = function () {
                                var e = new da(["Post XHR failure, status %d", d.status]);
                                e.statusCode = d.status, e.message = d.response || "Request failed, status ".concat(d.status), t(e)
                            }, d.onabort = function () {
                                try {
                                    t(new DOMException("The request aborted.", "AbortError"))
                                } catch (n) {
                                    var e = Error("The request aborted.");
                                    e.name = "AbortError", t(e)
                                }
                            }
                        })));
                    case 50:
                    case"end":
                        return e.stop()
                }
            }), e, null, [[32, 41]])
        })))).apply(this, arguments)
    }

    function Qm(e) {
        return Gi.apply(this, arguments)
    }

    function Gi() {
        return (Gi = K(x.mark((function e(t) {
            var n;
            return x.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return (n = new Image).src = t, e.abrupt("return", new Promise((function (e, t) {
                            n.onload = function () {
                                e({width: n.width, height: n.height})
                            }, n.onerror = t
                        })));
                    case 3:
                    case"end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }

    function Vt(e, t) {
        return Hi.apply(this, arguments)
    }

    function Hi() {
        return (Hi = K(x.mark((function e(t, n) {
            var r, i, o, s, a, u, c, l, f, h;
            return x.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        if (r = t.thumbnailHeight, i = void 0 === r ? 0 : r, o = t.thumbnailWidth, s = void 0 === o ? 0 : o, a = t.width, u = void 0 === a ? 0 : a, c = t.height, l = void 0 === c ? 0 : c, f = t.thumbnail, h = [], "number" == typeof i && "number" == typeof s && "number" == typeof u && "number" == typeof l) {
                            e.next = 5;
                            break
                        }
                        throw new L("Invalid message params", wf);
                    case 5:
                        return 0 >= u && 0 >= l && h.push(Qm(Rm(n)).then((function (e) {
                            u = e.width, l = e.height
                        }))), 0 >= s && 0 >= i && void 0 !== f && h.push(Ii(f).then(function () {
                            var e = K(x.mark((function e(t) {
                                var n;
                                return x.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Qm(Rm(t));
                                        case 2:
                                            n = e.sent, s = n.width, i = n.height;
                                        case 5:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }())), e.next = 9, Promise.all(h).catch((function () {
                        }));
                    case 9:
                        return e.abrupt("return", {width: u, height: l, thumbnailWidth: s, thumbnailHeight: i});
                    case 10:
                    case"end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }

    function Sm(e, t) {
        if (!yd(e)) throw new L("message object is not a plain object", t);
        if (void 0 === e.messageType) if (e.rawMessage instanceof Uint8Array) {
            if (e.messageType = "RAW", void 0 !== e.text) throw new L("Raw messages cannot have text property. Use description instead", t)
        } else {
            if ("string" != typeof e.text) throw new L("messageType is undefined", t);
            if (e.messageType = "TEXT", void 0 !== e.rawMessage) throw new L("Text messages cannot have rawMessage property", t)
        }
    }

    function Fg(e) {
        return Ji.apply(this, arguments)
    }

    function Ji() {
        return (Ji = K(x.mark((function e(t) {
            var n, r, i, o, s, a, u, c, l, f, h, p, d, v, b, g, y, E, m, w, _;
            return x.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        if (n = t.message, r = t.peerId, i = t.toPeer, o = t.session, s = t.errorCodes, a = t.diff, u = t.logger, c = t.options, void 0 !== o) {
                            e.next = 3;
                            break
                        }
                        throw new M("The client is not logged in. Cannot do the operation", s.NOT_LOGGED_IN);
                    case 3:
                        if (l = !1, "TEXT" !== n.messageType || !n.text.startsWith("AgoraRTMLegacyEndcallCompatibleMessagePrefix") || !i) {
                            e.next = 11;
                            break
                        }
                        if (f = n.text.split("_"), h = ra(f, 3), p = h[0], d = h[1], void 0 !== h[2] && za(d) && "AgoraRTMLegacyEndcallCompatibleMessagePrefix" === p) {
                            e.next = 10;
                            break
                        }
                        throw new L("Message is not valid", ue);
                    case 10:
                        l = !0;
                    case 11:
                        if (v = Date.now(), b = o.messageSentTimes.length - 1, !((g = o.messageSentTimes[b]) && g + 3e3 < v)) {
                            e.next = 18;
                            break
                        }
                        o.messageSentTimes = [v], e.next = 29;
                        break;
                    case 18:
                        y = b;
                    case 19:
                        if (!(0 <= y)) {
                            e.next = 28;
                            break
                        }
                        if (!(o.messageSentTimes[y] + 3e3 < v)) {
                            e.next = 23;
                            break
                        }
                        return o.messageSentTimes = o.messageSentTimes.slice(y + 1, b + 1), e.abrupt("break", 28);
                    case 23:
                        if (!(180 <= b - y + 1)) {
                            e.next = 25;
                            break
                        }
                        throw new ib("Message sent failed, exceeded the 180 message in 3 seconds", s.TOO_OFTEN);
                    case 25:
                        y--, e.next = 19;
                        break;
                    case 28:
                        o.messageSentTimes.push(v);
                    case 29:
                        e.t0 = n.messageType, e.next = "TEXT" === e.t0 ? 32 : "RAW" === e.t0 ? 37 : "FILE" === e.t0 || "IMAGE" === e.t0 ? 39 : 40;
                        break;
                    case 32:
                        if (!l) {
                            e.next = 36;
                            break
                        }
                        return E = n.text.split("_"), m = ra(E, 3), w = m[1], _ = m[2], u.info("[rtm-API] EndCall message send api is called"), e.abrupt("return", o.sendInvitationMessage({
                            peerId: r,
                            type: "CallCancel",
                            extra: _,
                            channelId: w,
                            callId: "0"
                        }));
                    case 36:
                        return e.abrupt("return", o.sendTextMessage(n.text, r, i, c, 1e4 - a));
                    case 37:
                        return void 0 === n.description && (n.description = ""), e.abrupt("return", o.sendRawMessage(n.rawMessage, n.description, r, i, c, 1e4 - a));
                    case 39:
                        return e.abrupt("return", o.sendMediaMessage(n.messageType, n, r, i, c, 1e4 - a));
                    case 40:
                        throw new L("Invalid message type", ue);
                    case 41:
                    case"end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }

    function Wt(e) {
        var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
            n = e.replace(/(https?:\/\/)?(www.)?/i, "");
        return t || (n = n.split(".").slice(e.length - 2).join(".")), -1 !== n.indexOf("/") ? n.split("/")[0] : n
    }

    function oa(e) {
        if ("string" != typeof e) return "[Sensitive Info]";
        var t = Math.floor(.7 * e.length), n = e.length;
        return Tm(e, t, n, "*".repeat(n - t))
    }

    function Um(e, t, n) {
        function r(i) {
            if (void 0 === e) return e;
            if (Hl(i)) return i;
            if (Array.isArray(i)) return i.map(r);
            var o = {}, s = 0;
            for (i = Gg(i); s < i.length; s++) {
                var a = ra(i[s], 2), u = a[0];
                if ("string" == typeof (a = a[1]) && n.includes(u)) {
                    o[u] = "string" == typeof a ? oa(a) : "[Sensitive Info]";
                    break
                }
                t.includes(u) ? o[u] = "[Hidden Info]" : o[u] = null == a ? a : n.includes(u) ? "[Sensitive Info]" : r(a)
            }
            return o
        }

        return Array.isArray(e) ? e.map(r) : r(e)
    }

    function Vm(e) {
        return Object.getOwnPropertyNames(e).forEach((function (t) {
            "object" == aa(t = e[t]) && null !== t && Vm(t)
        })), Object.freeze(e)
    }

    function pa(e) {
        return new TextDecoder("utf-8").decode(e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength))
    }

    function Hg(e) {
        return (new TextEncoder).encode(e).length
    }

    function Wm() {
        for (var e = 0, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        for (t = 0; t < n.length; t++) e += n[t].length;
        for (e = new Uint8Array(e), r = t = 0; r < n.length; r++) {
            var i = n[r];
            e.set(i, t), t += i.length
        }
        return e
    }

    function ve(e, t, n) {
        var r = e.match(/([^?#]+)(\?[^#]*)?(#.*)?/);
        if (e = null == r ? void 0 : r[1], r = null == r ? void 0 : r[2]) {
            var i;
            for (r = r.substr(1).split("&"), i = 0; i < r.length; i++) if (r[i].split("=")[0] == t) {
                r[i] = t + "=" + encodeURIComponent(n);
                break
            }
            return i == r.length && r.push(t + "=" + encodeURIComponent(n)), e + "?" + r.join("&")
        }
        return e + "?" + t + "=" + encodeURIComponent(n)
    }

    function Ii(e) {
        return new Promise((function (t, n) {
            var r = new FileReader;
            r.onloadend = function () {
                var e = r.result || new ArrayBuffer(0);
                t(e)
            }, r.onerror = n, r.readAsArrayBuffer(e)
        }))
    }

    function Xt(e, t) {
        e = e = [e], "string" == typeof (t = t || {}) && (t = {type: t});
        try {
            var n = new Blob(e, t)
        } catch (i) {
            if ("TypeError" !== i.name) throw i;
            n = new ("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder);
            for (var r = 0; r < e.length; r += 1) n.append(e[r]);
            n = n.getBlob(t.type)
        }
        return n
    }

    function Tm(e, t, n, r) {
        return "string" != typeof e ? "[Sensitive Info]" : e.substring(0, t) + r + e.substring(n)
    }

    function Xm(e) {
        var t = [];
        return function e(n) {
            if (null === n || "object" !== aa(n)) return n;
            if (-1 !== t.indexOf(n)) return "[Circular]";
            if (t.push(n), "function" == typeof n.toJSON) try {
                var r = e(n.toJSON());
                return t.pop(), r
            } catch (e) {
                return "[Throws: " + (e ? e.message : "?") + "]"
            }
            return Array.isArray(n) ? (r = n.map(e), t.pop(), r) : (r = Object.keys(n).reduce((function (t, r) {
                e:{
                    if (Yt.call(n, r)) try {
                        var i = n[r];
                        break e
                    } catch (e) {
                        i = "[Throws: " + (e ? e.message : "?") + "]";
                        break e
                    }
                    i = n[r]
                }
                return t[r] = e(i), t
            }), {}), t.pop(), r)
        }(e)
    }

    function Zt(e) {
        if (!(100 < (e = String(e)).length) && (e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e))) {
            var t = parseFloat(e[1]);
            switch ((e[2] || "ms").toLowerCase()) {
                case"years":
                case"year":
                case"yrs":
                case"yr":
                case"y":
                    return 315576e5 * t;
                case"weeks":
                case"week":
                case"w":
                    return 6048e5 * t;
                case"days":
                case"day":
                case"d":
                    return 864e5 * t;
                case"hours":
                case"hour":
                case"hrs":
                case"hr":
                case"h":
                    return 36e5 * t;
                case"minutes":
                case"minute":
                case"mins":
                case"min":
                case"m":
                    return 6e4 * t;
                case"seconds":
                case"second":
                case"secs":
                case"sec":
                case"s":
                    return 1e3 * t;
                case"milliseconds":
                case"millisecond":
                case"msecs":
                case"msec":
                case"ms":
                    return t
            }
        }
    }

    function Ig(e, t, n, r) {
        return Math.round(e / n) + " " + r + (t >= 1.5 * n ? "s" : "")
    }

    function La(e, t, n) {
        void 0 === n && (n = Object.getOwnPropertyDescriptor(e, t));
        var r = n.value;
        return n.value = function () {
            for (var e = this, n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
            this.invokeTracker.apply(this, ["%s: ".concat(0 < i.length ? "%s with args: ".concat(i.map((function () {
                return "%o"
            }))) : "%s"), this.name, t].concat(I(i.map(we))));
            try {
                var s = r.apply(this, i)
            } catch (e) {
                throw this.logError.apply(this, ["".concat(void 0 !== e.code ? "Error Code ".concat(e.code, ": ") : "", "%s failed").concat(0 < i.length ? " with args: ".concat(i.map((function () {
                    return "%o"
                }))) : ""), t].concat(I(i.map(we)))), e.originalError && this.logError(e.originalError), this.errorTracker(e), e
            }
            var a = Date.now();
            return K(x.mark((function n() {
                var r, o;
                return x.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0, n.next = 3, s;
                        case 3:
                            r = n.sent, n.next = 12;
                            break;
                        case 6:
                            return n.prev = 6, n.t0 = n.catch(0), e.logError.apply(e, ["".concat(void 0 !== n.t0.code ? "Error Code ".concat(n.t0.code, ": ") : "", "%s failed").concat(0 < i.length ? " with args: ".concat(i.map((function () {
                                return "%o"
                            }))) : ""), t].concat(I(i.map(we)))), n.t0.originalError && e.logError(n.t0.originalError), e.errorTracker(n.t0), n.abrupt("return");
                        case 12:
                            r !== s ? void 0 === r ? e.resultTracker("%s promise resolves after %dms", t, Date.now() - a) : e.resultTracker("%s promise resolves after %dms, result is %o", t, Date.now() - a, we(r)) : "Object" !== Ac(r) || yd(r) ? e.resultTracker("%s result is %o", t, we(r)) : e.resultTracker("%s result is %s", t, r.name || (null === (o = r.constructor) || void 0 === o ? void 0 : o.name));
                        case 13:
                        case"end":
                            return n.stop()
                    }
                }), n, null, [[0, 6]])
            })))(), s
        }, n
    }

    function Nb(e, t, n) {
        void 0 === n && (n = Object.getOwnPropertyDescriptor(e, t));
        var r = n.value;
        return n.value = function () {
            for (var e = this, n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
            this.invokeTracker.apply(this, ["%s: ".concat(0 < i.length ? "%s with args: ".concat(i.map((function () {
                return "%o"
            }))) : "%s"), this.name, t].concat(i));
            try {
                var s = r.apply(this, i)
            } catch (e) {
                throw this.logError.apply(this, ["".concat(void 0 !== e.code ? "Error Code ".concat(e.code, ": ") : "", "%s failed").concat(0 < i.length ? " with args: ".concat(i.map((function () {
                    return "%o"
                }))) : ""), t].concat(i)), e.originalError && this.logError(e.originalError), this.errorTracker(e), e
            }
            var a = Date.now();
            return K(x.mark((function n() {
                var r, o;
                return x.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0, n.next = 3, s;
                        case 3:
                            r = n.sent, n.next = 12;
                            break;
                        case 6:
                            return n.prev = 6, n.t0 = n.catch(0), e.logError.apply(e, ["".concat(void 0 !== n.t0.code ? "Error Code ".concat(n.t0.code, ": ") : "", "%s failed").concat(0 < i.length ? " with args: ".concat(i.map((function () {
                                return "%o"
                            }))) : ""), t].concat(i)), n.t0.originalError && e.logError(n.t0.originalError), e.errorTracker(n.t0), n.abrupt("return");
                        case 12:
                            r !== s ? void 0 === r ? e.resultTracker("%s promise resolves after %dms", t, Date.now() - a) : e.resultTracker("%s promise resolves after %dms, result is %o", t, Date.now() - a, r) : "Object" !== Ac(r) || yd(r) ? e.resultTracker("%s result is %o", t, r) : e.resultTracker("%s result is %s", t, r.name || (null === (o = r.constructor) || void 0 === o ? void 0 : o.name));
                        case 13:
                        case"end":
                            return n.stop()
                    }
                }), n, null, [[0, 6]])
            })))(), s
        }, n
    }

    function $t(e, t) {
        var n = "".concat(e, "Uri");
        if ("number" != typeof (n = Ki[n]) || 0 === n) throw new TypeError("Got Unknown URI Name");
        return t = new (e = Ym[e])(t), t = e.encode(t).finish(), new au({uri: n, data: t})
    }

    function Zm(e, t) {
        return "".concat(e.split(".").join("-"), ".edge.").concat(t ? "sd-rtn.com" : "agora.io")
    }

    function bu(e) {
        var t = e.areas, n = e.excludedArea;
        if (1 === t.length && t[0] === C.GLOBAL && n === C.CHINA) return xe([C.OVERSEA]);
        if (t.includes(C.GLOBAL)) {
            if (e = xf(Jg).filter((function (e) {
                return e !== C.GLOBAL && e !== C.OVERSEA
            })), n in yf) {
                t = yf[n];
                var r = [].concat(I(null != t ? t : []), [n]);
                return xe(e.filter((function (e) {
                    return !r.includes(e)
                })))
            }
            if ($m(n)) {
                var i = cu(n);
                return xe(e.filter((function (e) {
                    return e !== n && e !== i
                })))
            }
        }
        if ($m(n) || n in yf) return xe(t);
        throw new L("Invalid excludedArea area config")
    }

    function db(e, t, n, r) {
        return Li.apply(this, arguments)
    }

    function Li() {
        return (Li = K(x.mark((function e(t, n, r, i) {
            var o, s;
            return x.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        e.next = 2;
                        break;
                    case 2:
                        return o = du[t].encode(n).finish(), s = function () {
                            var e = K(x.mark((function e(n) {
                                var r, i, a = arguments;
                                return x.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(2 < (r = 1 < a.length && void 0 !== a[1] ? a[1] : 0))) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return i = ve(i = "https://".concat(n, ":6443/events/proto-raw"), "sentTs", Math.ceil(Date.now() / 1e3).toString()), i = ve(i, "id", eu[t].toString()), e.next = 8, se(i, {
                                                body: o,
                                                timeout: 2e4,
                                                headers: {"Content-Type": "application/octet-stream"}
                                            }).catch((function (e) {
                                                return s(n, r + 1)
                                            }));
                                        case 8:
                                        case"end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(), e.prev = 4, e.next = 7, s(r || "webcollector-rtm.agora.io");
                    case 7:
                        e.next = 13;
                        break;
                    case 9:
                        return e.prev = 9, e.t0 = e.catch(4), e.next = 13, s(i || "rtm.statscollector.sd-rtn.com");
                    case 13:
                    case"end":
                        return e.stop()
                }
            }), e, null, [[4, 9]])
        })))).apply(this, arguments)
    }

    function eb(e) {
        return void 0 === e ? U.fromNumber(0) : U.fromNumber(Date.now() - e)
    }

    function fu(e) {
        return btoa(String.fromCharCode.apply({}, e.replace(/\r|\n/g, "").replace(/([\dA-Fa-f]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ").map((function (e) {
            return parseInt(e, 16)
        })))).replace(/={1,2}$/, "")
    }

    function Kg(e, t) {
        return U.fromValue(e).eq(t)
    }

    function Lg(e, t) {
        var n = void 0 === t ? e.val : t, r = e.isBoolean;
        t = e.isNumber;
        var i = e.oneof, o = e.len;
        if (2 !== [r, t, i].filter((function (e) {
            return !e
        })).length) throw new TypeError("invalid field type");
        if (void 0 !== n && (e = !1, void 0 !== i && (i = Mi(i), gu(i, Kg).length === i.length && void 0 !== hu(i, (function (e) {
            return Kg(n, e)
        })) && (e = !0)), r = void 0 !== r && (0 === n || 1 === n) && 1 === o, t = void 0 !== t && n.toString(2).length <= o, !(e || r || t))) throw Error("invalid field value")
    }

    function an(e) {
        return function () {
            var t = e();
            if (!t) throw new M("Client is not logged in. Cannot do the operation");
            return t
        }
    }

    var Ya = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        Mg = function (e) {
            return e && e.Math == Math && e
        },
        E = Mg("object" == typeof globalThis && globalThis) || Mg("object" == typeof window && window) || Mg("object" == typeof self && self) || Mg("object" == typeof Ya && Ya) || function () {
            return this
        }() || Function("return this")(), R = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }, ka = !R((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })), bn = {}.propertyIsEnumerable, cn = Object.getOwnPropertyDescriptor,
        zf = cn && !bn.call({1: 2}, 1) ? function (e) {
            return !!(e = cn(this, e)) && e.enumerable
        } : bn, cd = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }, iu = {}.toString, Zb = function (e) {
            return iu.call(e).slice(8, -1)
        }, ju = "".split, Af = R((function () {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function (e) {
            return "String" == Zb(e) ? ju.call(e, "") : Object(e)
        } : Object, jb = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        }, qb = function (e) {
            return Af(jb(e))
        }, ha = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }, lc = function (e, t) {
            if (!ha(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !ha(r = n.call(e)) || "function" == typeof (n = e.valueOf) && !ha(r = n.call(e)) || !t && "function" == typeof (n = e.toString) && !ha(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }, Qa = function (e) {
            return Object(jb(e))
        }, ku = {}.hasOwnProperty, Q = function (e, t) {
            return ku.call(Qa(e), t)
        }, ye = E.document, Ng = ha(ye) && ha(ye.createElement), dn = !ka && !R((function () {
            return 7 != Object.defineProperty(Ng ? ye.createElement("div") : {}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })), en = Object.getOwnPropertyDescriptor, Fb = {
            f: ka ? en : function (e, t) {
                if (e = qb(e), t = lc(t, !0), dn) try {
                    return en(e, t)
                } catch (e) {
                }
                if (Q(e, t)) return cd(!zf.call(e, t), e[t])
            }
        }, va = function (e) {
            if (!ha(e)) throw TypeError(String(e) + " is not an object");
            return e
        }, fn = Object.defineProperty, Ra = {
            f: ka ? fn : function (e, t, n) {
                if (va(e), t = lc(t, !0), va(n), dn) try {
                    return fn(e, t, n)
                } catch (e) {
                }
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        }, Ma = ka ? function (e, t, n) {
            return Ra.f(e, t, cd(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }, Ni = function (e, t) {
            try {
                Ma(E, e, t)
            } catch (n) {
                E[e] = t
            }
            return t
        }, dd = E["__core-js_shared__"] || Ni("__core-js_shared__", {}), lu = Function.toString;
    "function" != typeof dd.inspectSource && (dd.inspectSource = function (e) {
        return lu.call(e)
    });
    var Oi = dd.inspectSource, gn = E.WeakMap, mu = "function" == typeof gn && /native code/.test(Oi(gn)),
        ed = $a((function (e) {
            (e.exports = function (e, t) {
                return dd[e] || (dd[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.12.1",
                mode: "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        })), nu = 0, ou = Math.random(), ze = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++nu + ou).toString(36)
        }, hn = ed("keys"), Og = function (e) {
            return hn[e] || (hn[e] = ze(e))
        }, Ae = {}, pu = E.WeakMap;
    if (mu || dd.state) var Gd = dd.state || (dd.state = new pu), qu = Gd.get, jn = Gd.has, ru = Gd.set,
        Pi = function (e, t) {
            if (jn.call(Gd, e)) throw new TypeError("Object already initialized");
            return t.facade = e, ru.call(Gd, e, t), t
        }, Pg = function (e) {
            return qu.call(Gd, e) || {}
        }, Qi = function (e) {
            return jn.call(Gd, e)
        }; else {
        var Be = Og("state");
        Ae[Be] = !0, Pi = function (e, t) {
            if (Q(e, Be)) throw new TypeError("Object already initialized");
            return t.facade = e, Ma(e, Be, t), t
        }, Pg = function (e) {
            return Q(e, Be) ? e[Be] : {}
        }, Qi = function (e) {
            return Q(e, Be)
        }
    }
    var Za = {
            set: Pi, get: Pg, has: Qi, enforce: function (e) {
                return Qi(e) ? Pg(e) : Pi(e, {})
            }, getterFor: function (e) {
                return function (t) {
                    var n;
                    if (!ha(t) || (n = Pg(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        }, Ta = $a((function (e) {
            var t = Za.get, n = Za.enforce, r = String(String).split("String");
            (e.exports = function (e, t, i, o) {
                var s = !!o && !!o.unsafe, a = !!o && !!o.enumerable;
                if (o = !!o && !!o.noTargetGet, "function" == typeof i) {
                    "string" != typeof t || Q(i, "name") || Ma(i, "name", t);
                    var u = n(i);
                    u.source || (u.source = r.join("string" == typeof t ? t : ""))
                }
                e === E ? a ? e[t] = i : Ni(t, i) : (s ? !o && e[t] && (a = !0) : delete e[t], a ? e[t] = i : Ma(e, t, i))
            })(Function.prototype, "toString", (function () {
                return "function" == typeof this && t(this).source || Oi(this)
            }))
        })), kn = function (e) {
            return "function" == typeof e ? e : void 0
        }, mc = function (e, t) {
            return 2 > arguments.length ? kn(E[e]) || kn(E[e]) : E[e] && E[e][t] || E[e] && E[e][t]
        }, su = Math.ceil, tu = Math.floor, $b = function (e) {
            return isNaN(e = +e) ? 0 : (0 < e ? tu : su)(e)
        }, uu = Math.min, ta = function (e) {
            return 0 < e ? uu($b(e), 9007199254740991) : 0
        }, vu = Math.max, wu = Math.min, xb = function (e, t) {
            return 0 > (e = $b(e)) ? vu(e + t, 0) : wu(e, t)
        }, ln = function (e) {
            return function (t, n, r) {
                t = qb(t);
                var i = ta(t.length);
                if (r = xb(r, i), e && n != n) {
                    for (; i > r;) if ((n = t[r++]) != n) return !0
                } else for (; i > r; r++) if ((e || r in t) && t[r] === n) return e || r || 0;
                return !e && -1
            }
        }, mn = ln(!0), Ri = ln(!1), nn = function (e, t) {
            e = qb(e);
            var n, r = 0, i = [];
            for (n in e) !Q(Ae, n) && Q(e, n) && i.push(n);
            for (; t.length > r;) Q(e, n = t[r++]) && (~Ri(i, n) || i.push(n));
            return i
        }, Qg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        xu = Qg.concat("length", "prototype"), Hd = {
            f: Object.getOwnPropertyNames || function (e) {
                return nn(e, xu)
            }
        }, Bf = {f: Object.getOwnPropertySymbols}, on = mc("Reflect", "ownKeys") || function (e) {
            var t = Hd.f(va(e)), n = Bf.f;
            return n ? t.concat(n(e)) : t
        }, pn = function (e, t) {
            for (var n = on(t), r = Ra.f, i = Fb.f, o = 0; o < n.length; o++) {
                var s = n[o];
                Q(e, s) || r(e, s, i(t, s))
            }
        }, yu = /#|\.prototype\./, nc = function (e, t) {
            return (e = zu[Au(e)]) == Bu || e != Cu && ("function" == typeof t ? R(t) : !!t)
        }, Au = nc.normalize = function (e) {
            return String(e).replace(yu, ".").toLowerCase()
        }, zu = nc.data = {}, Cu = nc.NATIVE = "N", Bu = nc.POLYFILL = "P", Du = Fb.f, P = function (e, t) {
            var n, r, i, o = e.target, s = e.global, a = e.stat;
            if (r = s ? E : a ? E[o] || Ni(o, {}) : (E[o] || {}).prototype) for (i in t) {
                var u = t[i], c = e.noTargetGet ? (n = Du(r, i)) && n.value : r[i];
                if (!(n = nc(s ? i : o + (a ? "." : "#") + i, e.forced)) && void 0 !== c) {
                    if (typeof u == typeof c) continue;
                    pn(u, c)
                }
                (e.sham || c && c.sham) && Ma(u, "sham", !0);
                try {
                    Ta(r, i, u, e)
                } catch (e) {
                }
            }
        }, yb = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        }, Id = function (e, t, n) {
            if (yb(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function () {
                        return e.call(t)
                    };
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function (n, r, i) {
                        return e.call(t, n, r, i)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }, fd = Array.isArray || function (e) {
            return "Array" == Zb(e)
        }, Ce = mc("navigator", "userAgent") || "", qn = E.process, rn = qn && qn.versions, sn = rn && rn.v8;
    if (sn) var gd = sn.split("."),
        Si = 4 > gd[0] ? 1 : gd[0] + gd[1]; else Ce && (gd = Ce.match(/Edge\/(\d+)/), (!gd || 74 <= gd[1]) && (gd = Ce.match(/Chrome\/(\d+)/)) && (Si = gd[1]));
    var hd = Si && +Si, oc = !!Object.getOwnPropertySymbols && !R((function () {
            return !String(Symbol()) || !Symbol.sham && hd && 41 > hd
        })), tn = oc && !Symbol.sham && "symbol" == typeof Symbol.iterator, Cf = ed("wks"), Df = E.Symbol,
        Eu = tn ? Df : Df && Df.withoutSetter || ze, qa = function (e) {
            return Q(Cf, e) && (oc || "string" == typeof Cf[e]) || (oc && Q(Df, e) ? Cf[e] = Df[e] : Cf[e] = Eu("Symbol." + e)), Cf[e]
        }, Fu = qa("species"), Rg = function (e, t) {
            if (fd(e)) {
                var n = e.constructor;
                "function" != typeof n || n !== Array && !fd(n.prototype) ? ha(n) && (null === (n = n[Fu]) && (n = void 0)) : n = void 0
            }
            return new (void 0 === n ? Array : n)(0 === t ? 0 : t)
        }, un = [].push, id = function (e) {
            var t = 1 == e, n = 2 == e, r = 3 == e, i = 4 == e, o = 6 == e, s = 7 == e, a = 5 == e || o;
            return function (u, c, l, f) {
                var h = Qa(u), p = Af(h);
                c = Id(c, l, 3), l = ta(p.length);
                var d, v = 0;
                for (f = f || Rg, u = t ? f(u, l) : n || s ? f(u, 0) : void 0; l > v; v++) if ((a || v in p) && (d = c(f = p[v], v, h), e)) if (t) u[v] = d; else if (d) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return v;
                    case 2:
                        un.call(u, f)
                } else switch (e) {
                    case 4:
                        return !1;
                    case 7:
                        un.call(u, f)
                }
                return o ? -1 : r || i ? i : u
            }
        }, Jd = id(0), vn = id(1), wn = id(2), Gu = id(3), Hu = id(4), xn = id(5), yn = id(6);
    id(7);
    var Iu = qa("species"), Ef = function (e) {
        return 51 <= hd || !R((function () {
            var t = [];
            return (t.constructor = {})[Iu] = function () {
                return {foo: 1}
            }, 1 !== t[e](Boolean).foo
        }))
    }, Ju = Ef("filter");
    P({target: "Array", proto: !0, forced: !Ju}, {
        filter: function (e) {
            return wn(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Dc = Object.keys || function (e) {
        return nn(e, Qg)
    }, Ku = R((function () {
        Dc(1)
    }));
    P({target: "Object", stat: !0, forced: Ku}, {
        keys: function (e) {
            return Dc(Qa(e))
        }
    });
    var De = function (e, t) {
        var n = [][e];
        return !!n && R((function () {
            n.call(null, t || function () {
                throw 1
            }, 1)
        }))
    }, Lu = [].join, Mu = Af != Object, Nu = De("join", ",");
    P({target: "Array", proto: !0, forced: Mu || !Nu}, {
        join: function (e) {
            return Lu.call(qb(this), void 0 === e ? "," : e)
        }
    });
    var Ou = Ef("map");
    P({target: "Array", proto: !0, forced: !Ou}, {
        map: function (e) {
            return vn(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Ti = function (e) {
        var t = e.return;
        if (void 0 !== t) return va(t.call(e)).value
    }, Ee = {}, Pu = qa("iterator"), Qu = Array.prototype, Ui = function (e) {
        return void 0 !== e && (Ee.Array === e || Qu[Pu] === e)
    }, Fe = function (e, t, n) {
        (t = lc(t)) in e ? Ra.f(e, t, cd(0, n)) : e[t] = n
    }, Ru = qa("toStringTag"), zn = {};
    zn[Ru] = "z";
    var Vi = "[object z]" === String(zn), Su = qa("toStringTag"), Tu = "Arguments" == Zb(function () {
        return arguments
    }()), Ff = Vi ? Zb : function (e) {
        var t;
        if (void 0 === e) var n = "Undefined"; else {
            if (null === e) var r = "Null"; else {
                e:{
                    var i = e = Object(e);
                    try {
                        r = i[Su];
                        break e
                    } catch (e) {
                    }
                    r = void 0
                }
                r = "string" == typeof (n = r) ? n : Tu ? Zb(e) : "Object" == (t = Zb(e)) && "function" == typeof e.callee ? "Arguments" : t
            }
            n = r
        }
        return n
    }, Uu = qa("iterator"), Wi = function (e) {
        if (null != e) return e[Uu] || e["@@iterator"] || Ee[Ff(e)]
    }, An = qa("iterator"), Bn = !1;
    try {
        var Vu = 0, Cn = {
            next: function () {
                return {done: !!Vu++}
            }, return: function () {
                Bn = !0
            }
        };
        Cn[An] = function () {
            return this
        }, Array.from(Cn, (function () {
            throw 2
        }))
    } catch (c) {
    }
    var Sg = function (e, t) {
        if (!t && !Bn) return !1;
        var n = !1;
        try {
            (t = {})[An] = function () {
                return {
                    next: function () {
                        return {done: n = !0}
                    }
                }
            }, e(t)
        } catch (e) {
        }
        return n
    }, Wu = !Sg((function (e) {
        Array.from(e)
    }));
    P({target: "Array", stat: !0, forced: Wu}, {
        from: function (e) {
            var t, n = Qa(e), r = "function" == typeof this ? this : Array, i = arguments.length,
                o = 1 < i ? arguments[1] : void 0, s = void 0 !== o, a = Wi(n), u = 0;
            if (s && (o = Id(o, 2 < i ? arguments[2] : void 0, 2)), null == a || r == Array && Ui(a)) {
                var c = ta(n.length);
                for (r = new r(c); c > u; u++) a = s ? o(n[u], u) : n[u], Fe(r, u, a)
            } else for (i = (n = a.call(n)).next, r = new r; !(t = i.call(n)).done; u++) {
                if (s) {
                    a = n;
                    var l = o;
                    t = [t.value, u];
                    try {
                        c = l(va(t)[0], t[1])
                    } catch (e) {
                        throw Ti(a), e
                    }
                } else c = t.value;
                Fe(r, u, a = c)
            }
            return r.length = u, r
        }
    });
    var Dn = function (e) {
        return function (t, n) {
            t = String(jb(t)), n = $b(n);
            var r, i = t.length;
            if (0 > n || n >= i) return e ? "" : void 0;
            var o = t.charCodeAt(n);
            return 55296 > o || 56319 < o || n + 1 === i || 56320 > (r = t.charCodeAt(n + 1)) || 57343 < r ? e ? t.charAt(n) : o : e ? t.slice(n, n + 2) : r - 56320 + (o - 55296 << 10) + 65536
        }
    };
    Dn(!1);
    var En = Dn(!0), Fn = !R((function () {
        function e() {
        }

        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    })), Gn = Og("IE_PROTO"), Xu = Object.prototype, Vb = Fn ? Object.getPrototypeOf : function (e) {
        return e = Qa(e), Q(e, Gn) ? e[Gn] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Xu : null
    }, Xi = qa("iterator"), Hn = !1, Yu = function () {
        return this
    }, Kd;
    if ([].keys) {
        var In = [].keys();
        if ("next" in In) {
            var Jn = Vb(Vb(In));
            Jn !== Object.prototype && (Kd = Jn)
        } else Hn = !0
    }
    (null == Kd || R((function () {
        var e = {};
        return Kd[Xi].call(e) !== e
    }))) && (Kd = {}), Q(Kd, Xi) || Ma(Kd, Xi, Yu);
    var Tg = Kd, Ug = Hn, Zu = ka ? Object.defineProperties : function (e, t) {
        va(e);
        for (var n, r = Dc(t), i = r.length, o = 0; i > o;) Ra.f(e, n = r[o++], t[n]);
        return e
    }, Yi = mc("document", "documentElement"), Kn = Og("IE_PROTO"), Zi = function () {
    }, $i, Vg = function () {
        try {
            $i = document.domain && new ActiveXObject("htmlfile")
        } catch (e) {
        }
        if ($i) {
            var e = $i;
            e.write("<script><\/script>"), e.close(), e = e.parentWindow.Object
        } else (e = Ng ? ye.createElement("iframe") : {}).style.display = "none", Yi.appendChild(e), e.src = "javascript:", (e = e.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), e = e.F;
        for (Vg = e, e = Qg.length; e--;) delete Vg.prototype[Qg[e]];
        return Vg()
    };
    Ae[Kn] = !0;
    var ac = Object.create || function (e, t) {
        if (null !== e) {
            Zi.prototype = va(e);
            var n = new Zi;
            Zi.prototype = null, n[Kn] = e
        } else n = Vg();
        return void 0 === t ? n : Zu(n, t)
    }, $u = Ra.f, Ln = qa("toStringTag"), Ec = function (e, t, n) {
        e && !Q(e = n ? e : e.prototype, Ln) && $u(e, Ln, {configurable: !0, value: t})
    }, av = function () {
        return this
    }, bv = function (e, t, n) {
        return t += " Iterator", e.prototype = ac(Tg, {next: cd(1, n)}), Ec(e, t, !1), Ee[t] = av, e
    }, Ua = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var e = !1, t = {};
        try {
            var n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
            n.call(t, []), e = t instanceof Array
        } catch (e) {
        }
        return function (t, r) {
            if (va(t), !ha(r) && null !== r) throw TypeError("Can't set " + String(r) + " as a prototype");
            return e ? n.call(t, r) : t.__proto__ = r, t
        }
    }() : void 0), Gf = qa("iterator"), cv = function () {
        return this
    }, aj = function (e, t, n, r, i, o, s) {
        bv(n, t, r), r = function (e) {
            if (e === i && h) return h;
            if (!Ug && e in l) return l[e];
            switch (e) {
                case"keys":
                case"values":
                case"entries":
                    return function () {
                        return new n(this, e)
                    }
            }
            return function () {
                return new n(this)
            }
        };
        var a, u = t + " Iterator", c = !1, l = e.prototype, f = l[Gf] || l["@@iterator"] || i && l[i],
            h = !Ug && f || r(i), p = "Array" == t && l.entries || f;
        if (p && (e = Vb(p.call(new e)), Tg !== Object.prototype && e.next && (Vb(e) !== Tg && (Ua ? Ua(e, Tg) : "function" != typeof e[Gf] && Ma(e, Gf, cv)), Ec(e, u, !0))), "values" == i && f && "values" !== f.name && (c = !0, h = function () {
            return f.call(this)
        }), l[Gf] !== h && Ma(l, Gf, h), Ee[t] = h, i) {
            var d = {values: r("values"), keys: o ? h : r("keys"), entries: r("entries")};
            if (s) for (a in d) !Ug && !c && a in l || Ta(l, a, d[a]); else P({
                target: t,
                proto: !0,
                forced: Ug || c
            }, d)
        }
        return d
    }, dv = Za.set, ev = Za.getterFor("String Iterator");
    aj(String, "String", (function (e) {
        dv(this, {type: "String Iterator", string: String(e), index: 0})
    }), (function () {
        var e = ev(this), t = e.string, n = e.index;
        return n >= t.length ? {value: void 0, done: !0} : (t = En(t, n), e.index += t.length, {value: t, done: !1})
    }));
    var bj = qa("unscopables"), cj = Array.prototype;
    null == cj[bj] && Ra.f(cj, bj, {configurable: !0, value: ac(null)});
    var Ld = function (e) {
        cj[bj][e] = !0
    }, Mn = !0;
    "find" in [] && Array(1).find((function () {
        Mn = !1
    })), P({target: "Array", proto: !0, forced: Mn}, {
        find: function (e) {
            return xn(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }), Ld("find");
    var Nn = function (e) {
        var t = String(jb(this)), n = "";
        if (0 > (e = $b(e)) || 1 / 0 == e) throw RangeError("Wrong number of repetitions");
        for (; 0 < e; (e >>>= 1) && (t += t)) 1 & e && (n += t);
        return n
    };
    P({target: "String", proto: !0}, {repeat: Nn}), P({
        target: "Number",
        stat: !0
    }, {MAX_SAFE_INTEGER: 9007199254740991}), P({target: "Number", stat: !0}, {
        isNaN: function (e) {
            return e != e
        }
    }), E.Number.isNaN;
    var Fc = E.Promise, Hf = function (e, t, n) {
            for (var r in t) Ta(e, r, t[r], n);
            return e
        }, On = qa("species"), If = function (e) {
            e = mc(e);
            var t = Ra.f;
            ka && e && !e[On] && t(e, On, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }, Gc = function (e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        }, Jf = function (e, t) {
            this.stopped = e, this.result = t
        }, Wg = function (e, t, n) {
            var r, i = !(!n || !n.AS_ENTRIES), o = !(!n || !n.IS_ITERATOR), s = !(!n || !n.INTERRUPTED),
                a = Id(t, n && n.that, 1 + i + s), u = function (e) {
                    return c && Ti(c), new Jf(!0, e)
                };
            if (t = function (e) {
                return i ? (va(e), s ? a(e[0], e[1], u) : a(e[0], e[1])) : s ? a(e, u) : a(e)
            }, o) var c = e; else {
                if ("function" != typeof (o = Wi(e))) throw TypeError("Target is not iterable");
                if (Ui(o)) {
                    for (o = 0, n = ta(e.length); n > o; o++) if ((r = t(e[o])) && r instanceof Jf) return r;
                    return new Jf(!1)
                }
                c = o.call(e)
            }
            for (e = c.next; !(o = e.call(c)).done;) {
                try {
                    r = t(o.value)
                } catch (e) {
                    throw Ti(c), e
                }
                if ("object" == typeof r && r && r instanceof Jf) return r
            }
            return new Jf(!1)
        }, fv = qa("species"), jd = function (e, t) {
            var n;
            return void 0 === (e = va(e).constructor) || null == (n = va(e)[fv]) ? t : yb(n)
        }, Pn = /(?:iphone|ipod|ipad).*applewebkit/i.test(Ce), Hc = "process" == Zb(E.process), Xg = E.location,
        dj = E.setImmediate, Qn = E.clearImmediate, gv = E.process, Rn = E.MessageChannel, ej = E.Dispatch, fj = 0,
        Kf = {}, gj = function (e) {
            if (Kf.hasOwnProperty(e)) {
                var t = Kf[e];
                delete Kf[e], t()
            }
        }, hj = function (e) {
            return function () {
                gj(e)
            }
        }, Sn = function (e) {
            gj(e.data)
        }, Tn = function (e) {
            E.postMessage(e + "", Xg.protocol + "//" + Xg.host)
        };
    if (!dj || !Qn) if (dj = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return Kf[++fj] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, Lf(fj), fj
    }, Qn = function (e) {
        delete Kf[e]
    }, Hc) var Lf = function (e) {
        gv.nextTick(hj(e))
    }; else if (ej && ej.now) Lf = function (e) {
        ej.now(hj(e))
    }; else if (Rn && !Pn) {
        var Un = new Rn, Vn = Un.port2;
        Un.port1.onmessage = Sn, Lf = Id(Vn.postMessage, Vn, 1)
    } else E.addEventListener && "function" == typeof postMessage && !E.importScripts && Xg && "file:" !== Xg.protocol && !R(Tn) ? (Lf = Tn, E.addEventListener("message", Sn, !1)) : Lf = "onreadystatechange" in (Ng ? ye.createElement("script") : {}) ? function (e) {
        Yi.appendChild(Ng ? ye.createElement("script") : {}).onreadystatechange = function () {
            Yi.removeChild(this), gj(e)
        }
    } : function (e) {
        setTimeout(hj(e), 0)
    };
    var ij = dj, hv = /web0s(?!.*chrome)/i.test(Ce), iv = Fb.f, Wn = E.MutationObserver || E.WebKitMutationObserver,
        Xn = E.document, Yn = E.process, Yg = E.Promise, Zn = iv(E, "queueMicrotask"), $n = Zn && Zn.value, Md, Mf;
    if (!$n) {
        var $g = function () {
            var e;
            for (Hc && (e = Yn.domain) && e.exit(); Md;) {
                var t = Md.fn;
                Md = Md.next;
                try {
                    t()
                } catch (e) {
                    throw Md ? Zg() : Mf = void 0, e
                }
            }
            Mf = void 0, e && e.enter()
        };
        if (Pn || Hc || hv || !Wn || !Xn) if (Yg && Yg.resolve) {
            var jj = Yg.resolve(void 0);
            jj.constructor = Yg;
            var jv = jj.then, Zg = function () {
                jv.call(jj, $g)
            }
        } else Zg = Hc ? function () {
            Yn.nextTick($g)
        } : function () {
            ij.call(E, $g)
        }; else {
            var ao = !0, bo = Xn.createTextNode("");
            new Wn($g).observe(bo, {characterData: !0}), Zg = function () {
                bo.data = ao = !ao
            }
        }
    }
    var co = $n || function (e) {
            e = {fn: e, next: void 0}, Mf && (Mf.next = e), Md || (Md = e, Zg()), Mf = e
        }, kv = function (e) {
            var t, n;
            this.promise = new e((function (e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
            })), this.resolve = yb(t), this.reject = yb(n)
        }, kj = {
            f: function (e) {
                return new kv(e)
            }
        }, lj = function (e, t) {
            return va(e), ha(t) && t.constructor === e ? t : ((0, (e = kj.f(e)).resolve)(t), e.promise)
        }, lv = function (e, t) {
            var n = E.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
        }, mj = function (e) {
            try {
                return {error: !1, value: e()}
            } catch (e) {
                return {error: !0, value: e}
            }
        }, mv = "object" == typeof window, nv = qa("species"), eo = Za.get, ov = Za.set, pv = Za.getterFor("Promise"),
        Nd = Fc && Fc.prototype, zb = Fc, ah = Nd, fo = E.TypeError, nj = E.document, oj = E.process, Ge = kj.f,
        qv = Ge, rv = !!(nj && nj.createEvent && E.dispatchEvent), go = "function" == typeof PromiseRejectionEvent,
        ho = !1, Nf = nc("Promise", (function () {
            var e = Oi(zb) !== String(zb);
            if (!e && 66 === hd) return !0;
            if (51 <= hd && /native code/.test(zb)) return !1;
            var t = new zb((function (e) {
                e(1)
            })), n = function (e) {
                e((function () {
                }), (function () {
                }))
            };
            return (t.constructor = {})[nv] = n, !(ho = t.then((function () {
            })) instanceof n) || !e && mv && !go
        })), sv = Nf || !Sg((function (e) {
            zb.all(e).catch((function () {
            }))
        })), io = function (e) {
            var t;
            return !(!ha(e) || "function" != typeof (t = e.then)) && t
        }, pj = function (e, t) {
            if (!e.notified) {
                e.notified = !0;
                var n = e.reactions;
                co((function () {
                    for (var r = e.value, i = 1 == e.state, o = 0; n.length > o;) {
                        var s, a = n[o++], u = i ? a.ok : a.fail, c = a.resolve, l = a.reject, f = a.domain;
                        try {
                            if (u) {
                                if (i || (2 === e.rejection && tv(e), e.rejection = 1), !0 === u) var h = r; else if (f && f.enter(), h = u(r), f) {
                                    f.exit();
                                    var p = !0
                                }
                                h === a.promise ? l(fo("Promise-chain cycle")) : (s = io(h)) ? s.call(h, c, l) : c(h)
                            } else l(r)
                        } catch (e) {
                            f && !p && f.exit(), l(e)
                        }
                    }
                    e.reactions = [], e.notified = !1, t && !e.rejection && uv(e)
                }))
            }
        }, jo = function (e, t, n) {
            var r;
            if (rv) {
                var i = nj.createEvent("Event");
                i.promise = t, i.reason = n, i.initEvent(e, !1, !0), E.dispatchEvent(i)
            } else i = {promise: t, reason: n};
            !go && (r = E["on" + e]) ? r(i) : "unhandledrejection" === e && lv("Unhandled promise rejection", n)
        }, uv = function (e) {
            ij.call(E, (function () {
                var t = e.facade, n = e.value;
                if (1 !== e.rejection && !e.parent) {
                    var r = mj((function () {
                        Hc ? oj.emit("unhandledRejection", n, t) : jo("unhandledrejection", t, n)
                    }));
                    if (e.rejection = Hc || 1 !== e.rejection && !e.parent ? 2 : 1, r.error) throw r.value
                }
            }))
        }, tv = function (e) {
            ij.call(E, (function () {
                var t = e.facade;
                Hc ? oj.emit("rejectionHandled", t) : jo("rejectionhandled", t, e.value)
            }))
        }, He = function (e, t, n) {
            return function (r) {
                e(t, r, n)
            }
        }, Ie = function (e, t, n) {
            e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, pj(e, !0))
        }, qj = function (e, t, n) {
            if (!e.done) {
                e.done = !0, n && (e = n);
                try {
                    if (e.facade === t) throw fo("Promise can't be resolved itself");
                    var r = io(t);
                    r ? co((function () {
                        var n = {done: !1};
                        try {
                            r.call(t, He(qj, n, e), He(Ie, n, e))
                        } catch (t) {
                            Ie(n, t, e)
                        }
                    })) : (e.value = t, e.state = 1, pj(e, !1))
                } catch (t) {
                    Ie({done: !1}, t, e)
                }
            }
        };
    if (Nf) {
        zb = function (e) {
            Gc(this, zb, "Promise"), yb(e), rj.call(this);
            var t = eo(this);
            try {
                e(He(qj, t), He(Ie, t))
            } catch (e) {
                Ie(t, e)
            }
        }, ah = zb.prototype;
        var rj = function (e) {
            ov(this, {
                type: "Promise",
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0
            })
        };
        rj.prototype = Hf(ah, {
            then: function (e, t) {
                var n = pv(this), r = Ge(jd(this, zb));
                return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = Hc ? oj.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && pj(n, !1), r.promise
            }, catch: function (e) {
                return this.then(void 0, e)
            }
        });
        var vv = function () {
            var e = new rj, t = eo(e);
            this.promise = e, this.resolve = He(qj, t), this.reject = He(Ie, t)
        };
        if (kj.f = Ge = function (e) {
            return e === zb || e === wv ? new vv(e) : qv(e)
        }, "function" == typeof Fc && Nd !== Object.prototype) {
            var xv = Nd.then;
            ho || (Ta(Nd, "then", (function (e, t) {
                var n = this;
                return new zb((function (e, t) {
                    xv.call(n, e, t)
                })).then(e, t)
            }), {unsafe: !0}), Ta(Nd, "catch", ah.catch, {unsafe: !0}));
            try {
                delete Nd.constructor
            } catch (c) {
            }
            Ua && Ua(Nd, ah)
        }
    }
    P({global: !0, wrap: !0, forced: Nf}, {Promise: zb}), Ec(zb, "Promise", !1), If("Promise");
    var wv = mc("Promise");
    P({target: "Promise", stat: !0, forced: Nf}, {
        reject: function (e) {
            var t = Ge(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), P({target: "Promise", stat: !0, forced: Nf}, {
        resolve: function (e) {
            return lj(this, e)
        }
    }), P({target: "Promise", stat: !0, forced: sv}, {
        all: function (e) {
            var t = this, n = Ge(t), r = n.resolve, i = n.reject, o = mj((function () {
                var n = yb(t.resolve), o = [], s = 0, a = 1;
                Wg(e, (function (e) {
                    var u = s++, c = !1;
                    o.push(void 0), a++, n.call(t, e).then((function (e) {
                        c || (c = !0, o[u] = e, --a || r(o))
                    }), i)
                })), --a || r(o)
            }));
            return o.error && i(o.value), n.promise
        }, race: function (e) {
            var t = this, n = Ge(t), r = n.reject, i = mj((function () {
                var i = yb(t.resolve);
                Wg(e, (function (e) {
                    i.call(t, e).then(n.resolve, r)
                }))
            }));
            return i.error && r(i.value), n.promise
        }
    });
    var yv = Vi ? {}.toString : function () {
        return "[object " + Ff(this) + "]"
    };
    Vi || Ta(Object.prototype, "toString", yv, {unsafe: !0});
    var ko = [].indexOf, lo = !!ko && 0 > 1 / [1].indexOf(1, -0), zv = De("indexOf");
    P({target: "Array", proto: !0, forced: lo || !zv}, {
        indexOf: function (e) {
            return lo ? ko.apply(this, arguments) || 0 : Ri(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var sj = function () {
            var e = va(this), t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        }, pc = R((function () {
            var e = RegExp("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
        })), Av = R((function () {
            var e = RegExp("^r", "gy");
            return e.lastIndex = 2, null != e.exec("str")
        })), bh = RegExp.prototype.exec, Bv = ed("native-string-replace", String.prototype.replace), mo = bh,
        tj = (c = /a/, a = /b*/g, bh.call(c, "a"), bh.call(a, "a"), 0 !== c.lastIndex || 0 !== a.lastIndex),
        no = pc || Av, uj = void 0 !== /()??/.exec("")[1], c, a;
    (tj || uj || no) && (mo = function (e) {
        var t, n = no && this.sticky, r = sj.call(this), i = this.source, o = 0, s = e;
        if (n) {
            -1 === (r = r.replace("y", "")).indexOf("g") && (r += "g"), s = String(e).slice(this.lastIndex), 0 < this.lastIndex && (!this.multiline || this.multiline && "\n" !== e[this.lastIndex - 1]) && (i = "(?: " + i + ")", s = " " + s, o++);
            var a = new RegExp("^(?:" + i + ")", r)
        }
        if (uj && (a = new RegExp("^" + i + "$(?!\\s)", r)), tj) var u = this.lastIndex;
        var c = bh.call(n ? a : this, s);
        return n ? c ? (c.input = c.input.slice(o), c[0] = c[0].slice(o), c.index = this.lastIndex, this.lastIndex += c[0].length) : this.lastIndex = 0 : tj && c && (this.lastIndex = this.global ? c.index + c[0].length : u), uj && c && 1 < c.length && Bv.call(c[0], a, (function () {
            for (t = 1; t < arguments.length - 2; t++) void 0 === arguments[t] && (c[t] = void 0)
        })), c
    });
    var Of = mo;
    P({target: "RegExp", proto: !0, forced: /./.exec !== Of}, {exec: Of});
    var Cv = qa("species"), vj = RegExp.prototype, Dv = !R((function () {
            var e = /./;
            return e.exec = function () {
                var e = [];
                return e.groups = {a: "7"}, e
            }, "7" !== "".replace(e, "$<a>")
        })), oo = "$0" === "a".replace(/./, "$0"), po = qa("replace"), qo = !!/./[po] && "" === /./[po]("a", "$0"),
        Ev = !R((function () {
            var e = /(?:)/, t = e.exec;
            return e.exec = function () {
                return t.apply(this, arguments)
            }, 2 !== (e = "ab".split(e)).length || "a" !== e[0] || "b" !== e[1]
        })), ch = function (e, t, n, r) {
            var i = qa(e), o = !R((function () {
                var t = {};
                return t[i] = function () {
                    return 7
                }, 7 != ""[e](t)
            })), s = o && !R((function () {
                var t = !1, n = /a/;
                return "split" === e && ((n = {constructor: {}}).constructor[Cv] = function () {
                    return n
                }, n.flags = "", n[i] = /./[i]), n.exec = function () {
                    return t = !0, null
                }, n[i](""), !t
            }));
            if (!o || !s || "replace" === e && (!Dv || !oo || qo) || "split" === e && !Ev) {
                var a = /./[i], u = (n = n(i, ""[e], (function (e, t, n, r, i) {
                    var s = t.exec;
                    return s === Of || s === vj.exec ? o && !i ? {done: !0, value: a.call(t, n, r)} : {
                        done: !0,
                        value: e.call(n, t, r)
                    } : {done: !1}
                }), {REPLACE_KEEPS_$0: oo, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: qo}))[1];
                Ta(String.prototype, e, n[0]), Ta(vj, i, 2 == t ? function (e, t) {
                    return u.call(e, this, t)
                } : function (e) {
                    return u.call(e, this)
                })
            }
            r && Ma(vj[i], "sham", !0)
        }, wj = function (e, t, n) {
            return t + (n ? En(e, t).length : 1)
        }, Fv = Math.floor, Gv = "".replace, Hv = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, Iv = /\$([$&'`]|\d{1,2})/g,
        Jv = function (e, t, n, r, i, o) {
            var s = n + e.length, a = r.length, u = Iv;
            return void 0 !== i && (i = Qa(i), u = Hv), Gv.call(o, u, (function (o, u) {
                switch (u.charAt(0)) {
                    case"$":
                        return "$";
                    case"&":
                        return e;
                    case"`":
                        return t.slice(0, n);
                    case"'":
                        return t.slice(s);
                    case"<":
                        o = i[u.slice(1, -1)];
                        break;
                    default:
                        var c = +u;
                        if (0 === c) return o;
                        if (c > a) return 0 === (c = Fv(c / 10)) ? o : c <= a ? void 0 === r[c - 1] ? u.charAt(1) : r[c - 1] + u.charAt(1) : o;
                        o = r[c - 1]
                }
                return void 0 === o ? "" : o
            }))
        }, Je = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                if ("object" != typeof (e = n.call(e, t))) throw TypeError("RegExp exec method returned something other than an Object or null");
                return e
            }
            if ("RegExp" !== Zb(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return Of.call(e, t)
        }, Kv = Math.max, Lv = Math.min, Mv = function (e) {
            return void 0 === e ? e : String(e)
        };
    ch("replace", 2, (function (e, t, n, r) {
        var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, o = r.REPLACE_KEEPS_$0, s = i ? "$" : "$0";
        return [function (n, r) {
            var i = jb(this), o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
        }, function (e, r) {
            if (!i && o || "string" == typeof r && -1 === r.indexOf(s)) {
                var a = n(t, e, this, r);
                if (a.done) return a.value
            }
            var u = va(e);
            e = String(this), (a = "function" == typeof r) || (r = String(r));
            var c = u.global;
            if (c) {
                var l = u.unicode;
                u.lastIndex = 0
            }
            for (var f = []; ;) {
                var h = Je(u, e);
                if (null === h) break;
                if (f.push(h), !c) break;
                "" === String(h[0]) && (u.lastIndex = wj(e, ta(u.lastIndex), l))
            }
            for (l = "", c = u = 0; c < f.length; c++) {
                h = f[c];
                for (var p = String(h[0]), d = Kv(Lv($b(h.index), e.length), 0), v = [], b = 1; b < h.length; b++) v.push(Mv(h[b]));
                h = h.groups, a ? (v = [p].concat(v, d, e), void 0 !== h && v.push(h), h = String(r.apply(void 0, v))) : h = Jv(p, e, d, v, h, r), d >= u && (l += e.slice(u, d) + h, u = d + p.length)
            }
            return l + e.slice(u)
        }]
    }));
    var Nv = Ef("slice"), Ov = qa("species"), Pv = [].slice, Qv = Math.max;
    P({target: "Array", proto: !0, forced: !Nv}, {
        slice: function (e, t) {
            var n = qb(this), r = ta(n.length);
            if (e = xb(e, r), t = xb(void 0 === t ? r : t, r), fd(n)) {
                var i = n.constructor;
                if ("function" != typeof i || i !== Array && !fd(i.prototype) ? ha(i) && (null === (i = i[Ov]) && (i = void 0)) : i = void 0, i === Array || void 0 === i) return Pv.call(n, e, t)
            }
            for (i = new (void 0 === i ? Array : i)(Qv(t - e, 0)), r = 0; e < t; e++, r++) e in n && Fe(i, r, n[e]);
            return i.length = r, i
        }
    });
    var ro = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, Rv = Ra.f, dh = E.Int8Array,
        xj = dh && dh.prototype, so = E.Uint8ClampedArray, to = so && so.prototype, qc = dh && Vb(dh),
        bc = xj && Vb(xj), uo = Object.prototype, vo = uo.isPrototypeOf, wo = qa("toStringTag"),
        yj = ze("TYPED_ARRAY_TAG"), Ic = ro && !!Ua && "Opera" !== Ff(E.opera), xo = !1, Ab, rc = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        }, Sv = {BigInt64Array: 8, BigUint64Array: 8}, eh = function (e) {
            return !!ha(e) && (e = Ff(e), Q(rc, e) || Q(Sv, e))
        };
    for (Ab in rc) E[Ab] || (Ic = !1);
    if ((!Ic || "function" != typeof qc || qc === Function.prototype) && (qc = function () {
        throw TypeError("Incorrect invocation")
    }, Ic)) for (Ab in rc) E[Ab] && Ua(E[Ab], qc);
    if ((!Ic || !bc || bc === uo) && (bc = qc.prototype, Ic)) for (Ab in rc) E[Ab] && Ua(E[Ab].prototype, bc);
    if (Ic && Vb(to) !== bc && Ua(to, bc), ka && !Q(bc, wo)) for (Ab in xo = !0, Rv(bc, wo, {
        get: function () {
            return ha(this) ? this[yj] : void 0
        }
    }), rc) E[Ab] && Ma(E[Ab], yj, Ab);
    var Pf = Ic, yo = xo && yj, Da = function (e) {
            if (eh(e)) return e;
            throw TypeError("Target is not a typed array")
        }, Ke = function (e) {
            if (Ua) {
                if (vo.call(qc, e)) return e
            } else for (var t in rc) if (Q(rc, Ab)) {
                var n = E[t];
                if (n && (e === n || vo.call(n, e))) return e
            }
            throw TypeError("Target is not a typed array constructor")
        }, Aa = function (e, t, n) {
            if (ka) {
                if (n) for (var r in rc) {
                    var i = E[r];
                    if (i && Q(i.prototype, e)) try {
                        delete i.prototype[e]
                    } catch (e) {
                    }
                }
                bc[e] && !n || Ta(bc, e, n ? t : Ic && xj[e] || t)
            }
        }, zo = function (e, t, n) {
            var r, i;
            if (ka) {
                if (Ua) {
                    if (n) for (r in rc) if ((i = E[r]) && Q(i, e)) try {
                        delete i[e]
                    } catch (e) {
                    }
                    if (qc[e] && !n) return;
                    try {
                        return Ta(qc, e, n ? t : Ic && qc[e] || t)
                    } catch (e) {
                    }
                }
                for (r in rc) !(i = E[r]) || i[e] && !n || Ta(i, e, t)
            }
        }, Ao = qc, Qf = bc, Tv = E.ArrayBuffer, Od = E.Int8Array, zj = !Pf || !R((function () {
            Od(1)
        })) || !R((function () {
            new Od(-1)
        })) || !Sg((function (e) {
            new Od, new Od(null), new Od(1.5), new Od(e)
        }), !0) || R((function () {
            return 1 !== new Od(new Tv(2), 1, void 0).length
        })), Le = function (e) {
            if (void 0 === e) return 0;
            e = $b(e);
            var t = ta(e);
            if (e !== t) throw RangeError("Wrong length or index");
            return t
        }, Uv = Math.abs, Jc = Math.pow, Vv = Math.floor, Wv = Math.log, Xv = Math.LN2, Aj = function (e) {
            var t = Qa(this), n = ta(t.length), r = arguments.length, i = xb(1 < r ? arguments[1] : void 0, n);
            for (n = void 0 === (r = 2 < r ? arguments[2] : void 0) ? n : xb(r, n); n > i;) t[i++] = e;
            return t
        }, Yv = Hd.f, Zv = Ra.f, Me = Za.get, Bo = Za.set, cc = E.ArrayBuffer, Bb = cc, dc = E.DataView,
        fh = dc && dc.prototype, Co = Object.prototype, gh = E.RangeError, Do = function (e, t, n) {
            var r, i = Array(n), o = (1 << (n = 8 * n - t - 1)) - 1, s = o >> 1, a = 23 === t ? Jc(2, -24) - Jc(2, -77) : 0,
                u = 0 > e || 0 === e && 0 > 1 / e ? 1 : 0, c = 0;
            if ((e = Uv(e)) != e || 1 / 0 === e) {
                e = e != e ? 1 : 0;
                var l = o
            } else l = Vv(Wv(e) / Xv), 1 > e * (r = Jc(2, -l)) && (l--, r *= 2), 2 <= (e = 1 <= l + s ? e + a / r : e + a * Jc(2, 1 - s)) * r && (l++, r /= 2), l + s >= o ? (e = 0, l = o) : 1 <= l + s ? (e = (e * r - 1) * Jc(2, t), l += s) : (e = e * Jc(2, s - 1) * Jc(2, t), l = 0);
            for (; 8 <= t; i[c++] = 255 & e, e /= 256, t -= 8) ;
            for (l = l << t | e, n += t; 0 < n; i[c++] = 255 & l, l /= 256, n -= 8) ;
            return i[--c] |= 128 * u, i
        }, Eo = function (e, t) {
            var n = e.length, r = 8 * n - t - 1, i = (1 << r) - 1, o = i >> 1;
            r -= 7, --n;
            var s = e[n--], a = 127 & s;
            for (s >>= 7; 0 < r; a = 256 * a + e[n], n--, r -= 8) ;
            var u = a & (1 << -r) - 1;
            for (a >>= -r, r += t; 0 < r; u = 256 * u + e[n], n--, r -= 8) ;
            if (0 === a) a = 1 - o; else {
                if (a === i) return u ? NaN : s ? -1 / 0 : 1 / 0;
                u += Jc(2, t), a -= o
            }
            return (s ? -1 : 1) * u * Jc(2, a - t)
        }, Fo = function (e) {
            return [255 & e]
        }, Go = function (e) {
            return [255 & e, e >> 8 & 255]
        }, Ho = function (e) {
            return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
        }, Io = function (e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
        }, $v = function (e) {
            return Do(e, 23, 4)
        }, aw = function (e) {
            return Do(e, 52, 8)
        }, hh = function (e, t) {
            Zv(e.prototype, t, {
                get: function () {
                    return Me(this)[t]
                }
            })
        }, kd = function (e, t, n, r) {
            n = Le(n);
            var i = Me(e);
            if (n + t > i.byteLength) throw gh("Wrong index");
            return e = Me(i.buffer).bytes, n += i.byteOffset, t = e.slice(n, n + t), r ? t : t.reverse()
        }, ld = function (e, t, n, r, i, o) {
            n = Le(n);
            var s = Me(e);
            if (n + t > s.byteLength) throw gh("Wrong index");
            for (e = Me(s.buffer).bytes, n += s.byteOffset, r = r(+i), i = 0; i < t; i++) e[n + i] = r[o ? i : t - i - 1]
        };
    if (ro) {
        if (!R((function () {
            cc(1)
        })) || !R((function () {
            new cc(-1)
        })) || R((function () {
            return new cc, new cc(1.5), new cc(NaN), "ArrayBuffer" != cc.name
        }))) {
            Bb = function (e) {
                return Gc(this, Bb), new cc(Le(e))
            };
            for (var bw = Bb.prototype = cc.prototype, Jo = Yv(cc), Ko = 0, Bj; Jo.length > Ko;) (Bj = Jo[Ko++]) in Bb || Ma(Bb, Bj, cc[Bj]);
            bw.constructor = Bb
        }
        Ua && Vb(fh) !== Co && Ua(fh, Co);
        var ih = new dc(new Bb(2)), Lo = fh.setInt8;
        ih.setInt8(0, 2147483648), ih.setInt8(1, 2147483649), !ih.getInt8(0) && ih.getInt8(1) || Hf(fh, {
            setInt8: function (e, t) {
                Lo.call(this, e, t << 24 >> 24)
            }, setUint8: function (e, t) {
                Lo.call(this, e, t << 24 >> 24)
            }
        }, {unsafe: !0})
    } else Bb = function (e) {
        Gc(this, Bb, "ArrayBuffer"), e = Le(e), Bo(this, {
            bytes: Aj.call(Array(e), 0),
            byteLength: e
        }), ka || (this.byteLength = e)
    }, dc = function (e, t, n) {
        Gc(this, dc, "DataView"), Gc(e, Bb, "DataView");
        var r = Me(e).byteLength;
        if (0 > (t = $b(t)) || t > r) throw gh("Wrong offset");
        if (t + (n = void 0 === n ? r - t : ta(n)) > r) throw gh("Wrong length");
        Bo(this, {
            buffer: e,
            byteLength: n,
            byteOffset: t
        }), ka || (this.buffer = e, this.byteLength = n, this.byteOffset = t)
    }, ka && (hh(Bb, "byteLength"), hh(dc, "buffer"), hh(dc, "byteLength"), hh(dc, "byteOffset")), Hf(dc.prototype, {
        getInt8: function (e) {
            return kd(this, 1, e)[0] << 24 >> 24
        }, getUint8: function (e) {
            return kd(this, 1, e)[0]
        }, getInt16: function (e) {
            var t = kd(this, 2, e, 1 < arguments.length ? arguments[1] : void 0);
            return (t[1] << 8 | t[0]) << 16 >> 16
        }, getUint16: function (e) {
            var t = kd(this, 2, e, 1 < arguments.length ? arguments[1] : void 0);
            return t[1] << 8 | t[0]
        }, getInt32: function (e) {
            return Io(kd(this, 4, e, 1 < arguments.length ? arguments[1] : void 0))
        }, getUint32: function (e) {
            return Io(kd(this, 4, e, 1 < arguments.length ? arguments[1] : void 0)) >>> 0
        }, getFloat32: function (e) {
            return Eo(kd(this, 4, e, 1 < arguments.length ? arguments[1] : void 0), 23)
        }, getFloat64: function (e) {
            return Eo(kd(this, 8, e, 1 < arguments.length ? arguments[1] : void 0), 52)
        }, setInt8: function (e, t) {
            ld(this, 1, e, Fo, t)
        }, setUint8: function (e, t) {
            ld(this, 1, e, Fo, t)
        }, setInt16: function (e, t) {
            ld(this, 2, e, Go, t, 2 < arguments.length ? arguments[2] : void 0)
        }, setUint16: function (e, t) {
            ld(this, 2, e, Go, t, 2 < arguments.length ? arguments[2] : void 0)
        }, setInt32: function (e, t) {
            ld(this, 4, e, Ho, t, 2 < arguments.length ? arguments[2] : void 0)
        }, setUint32: function (e, t) {
            ld(this, 4, e, Ho, t, 2 < arguments.length ? arguments[2] : void 0)
        }, setFloat32: function (e, t) {
            ld(this, 4, e, $v, t, 2 < arguments.length ? arguments[2] : void 0)
        }, setFloat64: function (e, t) {
            ld(this, 8, e, aw, t, 2 < arguments.length ? arguments[2] : void 0)
        }
    });
    Ec(Bb, "ArrayBuffer"), Ec(dc, "DataView");
    var Rf = {ArrayBuffer: Bb, DataView: dc}, jh = function (e, t) {
        if (0 > (e = $b(e))) throw RangeError("The argument can't be less than 0");
        if (e % t) throw RangeError("Wrong offset");
        return e
    }, Cj = function (e) {
        var t = Qa(e), n = arguments.length, r = 1 < n ? arguments[1] : void 0, i = void 0 !== r, o = Wi(t);
        if (null != o && !Ui(o)) {
            var s = o.call(t), a = s.next;
            for (t = []; !(o = a.call(s)).done;) t.push(o.value)
        }
        for (i && 2 < n && (r = Id(r, arguments[2], 2)), o = ta(t.length), s = new (Ke(this))(o), n = 0; o > n; n++) s[n] = i ? r(t[n], n) : t[n];
        return s
    }, kh = function (e, t, n) {
        var r, i;
        return Ua && "function" == typeof (r = t.constructor) && r !== n && ha(i = r.prototype) && i !== n.prototype && Ua(e, i), e
    }, Sf = $a((function (e) {
        var t = Hd.f, n = Za.get, r = Za.set, i = Ra.f, o = Fb.f, s = Math.round, a = E.RangeError, u = Rf.ArrayBuffer,
            c = Rf.DataView, l = function (e, t) {
                var n = 0, r = t.length;
                for (e = new (Ke(e))(r); r > n;) e[n] = t[n++];
                return e
            }, f = function (e, t) {
                i(e, t, {
                    get: function () {
                        return n(this)[t]
                    }
                })
            }, h = function (e) {
                var t;
                return e instanceof u || "ArrayBuffer" == (t = Ff(e)) || "SharedArrayBuffer" == t
            }, p = function (e, t) {
                return eh(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
            }, d = function (e, t) {
                return p(e, t = lc(t, !0)) ? cd(2, e[t]) : o(e, t)
            }, v = function (e, t, n) {
                return !(p(e, t = lc(t, !0)) && ha(n) && Q(n, "value")) || Q(n, "get") || Q(n, "set") || n.configurable || Q(n, "writable") && !n.writable || Q(n, "enumerable") && !n.enumerable ? i(e, t, n) : (e[t] = n.value, e)
            };
        ka ? (Pf || (Fb.f = d, Ra.f = v, f(Qf, "buffer"), f(Qf, "byteOffset"), f(Qf, "byteLength"), f(Qf, "length")), P({
            target: "Object",
            stat: !0,
            forced: !Pf
        }, {getOwnPropertyDescriptor: d, defineProperty: v}), e.exports = function (e, o, f) {
            var p = e.match(/\d+$/)[0] / 8, d = e + (f ? "Clamped" : "") + "Array", v = "get" + e, b = "set" + e,
                g = E[d], y = g;
            e = y && y.prototype;
            var m = {}, w = function (e, t) {
                i(e, t, {
                    get: function () {
                        var e = n(this);
                        return e.view[v](t * p + e.byteOffset, !0)
                    }, set: function (e) {
                        var r = n(this);
                        f && (e = 0 > (e = s(e)) ? 0 : 255 < e ? 255 : 255 & e), r.view[b](t * p + r.byteOffset, e, !0)
                    }, enumerable: !0
                })
            };
            Pf ? zj && (y = o((function (e, t, n, r) {
                return Gc(e, y, d), kh(ha(t) ? h(t) ? void 0 !== r ? new g(t, jh(n, p), r) : void 0 !== n ? new g(t, jh(n, p)) : new g(t) : eh(t) ? l(y, t) : Cj.call(y, t) : new g(Le(t)), e, y)
            })), Ua && Ua(y, Ao), Jd(t(g), (function (e) {
                e in y || Ma(y, e, g[e])
            })), y.prototype = e) : (y = o((function (e, t, n, i) {
                Gc(e, y, d);
                var o = 0, s = 0;
                if (ha(t)) {
                    if (!h(t)) return eh(t) ? l(y, t) : Cj.call(y, t);
                    var f = t;
                    if (s = jh(n, p), t = t.byteLength, void 0 === i) {
                        if (t % p) throw a("Wrong length");
                        if (0 > (i = t - s)) throw a("Wrong length")
                    } else if ((i = ta(i) * p) + s > t) throw a("Wrong length");
                    t = i / p
                } else t = Le(t), f = new u(i = t * p);
                for (r(e, {buffer: f, byteOffset: s, byteLength: i, length: t, view: new c(f)}); o < t;) w(e, o++)
            })), Ua && Ua(y, Ao), e = y.prototype = ac(Qf)), e.constructor !== y && Ma(e, "constructor", y), yo && Ma(e, yo, d), m[d] = y, P({
                global: !0,
                forced: y != g,
                sham: !Pf
            }, m), "BYTES_PER_ELEMENT" in y || Ma(y, "BYTES_PER_ELEMENT", p), "BYTES_PER_ELEMENT" in e || Ma(e, "BYTES_PER_ELEMENT", p), If(d)
        }) : e.exports = function () {
        }
    }));
    Sf("Uint8", (function (e) {
        return function (t, n, r) {
            return e(this, t, n, r)
        }
    }));
    var cw = Math.min, dw = [].copyWithin || function (e, t) {
        var n = Qa(this), r = ta(n.length), i = xb(e, r), o = xb(t, r),
            s = 2 < arguments.length ? arguments[2] : void 0;
        for (r = cw((void 0 === s ? r : xb(s, r)) - o, r - i), s = 1, o < i && i < o + r && (s = -1, o += r - 1, i += r - 1); 0 < r--;) o in n ? n[i] = n[o] : delete n[i], i += s, o += s;
        return n
    };
    Aa("copyWithin", (function (e, t) {
        return dw.call(Da(this), e, t, 2 < arguments.length ? arguments[2] : void 0)
    })), Aa("every", (function (e) {
        return Hu(Da(this), e, 1 < arguments.length ? arguments[1] : void 0)
    })), Aa("fill", (function (e) {
        return Aj.apply(Da(this), arguments)
    })), Aa("filter", (function (e) {
        var t = wn(Da(this), e, 1 < arguments.length ? arguments[1] : void 0), n = jd(this, this.constructor), r = 0,
            i = t.length;
        for (n = new (Ke(n))(i); i > r;) n[r] = t[r++];
        return n
    })), Aa("find", (function (e) {
        return xn(Da(this), e, 1 < arguments.length ? arguments[1] : void 0)
    })), Aa("findIndex", (function (e) {
        return yn(Da(this), e, 1 < arguments.length ? arguments[1] : void 0)
    })), Aa("forEach", (function (e) {
        Jd(Da(this), e, 1 < arguments.length ? arguments[1] : void 0)
    })), Aa("includes", (function (e) {
        return mn(Da(this), e, 1 < arguments.length ? arguments[1] : void 0)
    })), Aa("indexOf", (function (e) {
        return Ri(Da(this), e, 1 < arguments.length ? arguments[1] : void 0)
    }));
    var ew = Za.set, fw = Za.getterFor("Array Iterator"), md = aj(Array, "Array", (function (e, t) {
        ew(this, {type: "Array Iterator", target: qb(e), index: 0, kind: t})
    }), (function () {
        var e = fw(this), t = e.target, n = e.kind, r = e.index++;
        return !t || r >= t.length ? (e.target = void 0, {value: void 0, done: !0}) : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {value: t[r], done: !1} : {value: [r, t[r]], done: !1}
    }), "values");
    Ee.Arguments = Ee.Array, Ld("keys"), Ld("values"), Ld("entries");
    var Mo = qa("iterator"), No = E.Uint8Array, gw = md.values, hw = md.keys, iw = md.entries,
        Dj = No && No.prototype[Mo], Oo = !!Dj && ("values" == Dj.name || null == Dj.name), Po = function () {
            return gw.call(Da(this))
        };
    Aa("entries", (function () {
        return iw.call(Da(this))
    })), Aa("keys", (function () {
        return hw.call(Da(this))
    })), Aa("values", Po, !Oo), Aa(Mo, Po, !Oo);
    var jw = [].join;
    Aa("join", (function (e) {
        return jw.apply(Da(this), arguments)
    }));
    var kw = Math.min, Ej = [].lastIndexOf, Qo = !!Ej && 0 > 1 / [1].lastIndexOf(1, -0), lw = De("lastIndexOf"),
        mw = Qo || !lw ? function (e) {
            if (Qo) return Ej.apply(this, arguments) || 0;
            var t = qb(this), n = ta(t.length), r = n - 1;
            for (1 < arguments.length && (r = kw(r, $b(arguments[1]))), 0 > r && (r = n + r); 0 <= r; r--) if (r in t && t[r] === e) return r || 0;
            return -1
        } : Ej;
    Aa("lastIndexOf", (function (e) {
        return mw.apply(Da(this), arguments)
    })), Aa("map", (function (e) {
        return vn(Da(this), e, 1 < arguments.length ? arguments[1] : void 0, (function (e, t) {
            return new (Ke(jd(e, e.constructor)))(t)
        }))
    }));
    var Ro = function (e) {
        return function (t, n, r, i) {
            yb(n), t = Qa(t);
            var o = Af(t), s = ta(t.length), a = e ? s - 1 : 0, u = e ? -1 : 1;
            if (2 > r) for (; ;) {
                if (a in o) {
                    i = o[a], a += u;
                    break
                }
                if (a += u, e ? 0 > a : s <= a) throw TypeError("Reduce of empty array with no initial value")
            }
            for (; e ? 0 <= a : s > a; a += u) a in o && (i = n(i, o[a], a, t));
            return i
        }
    }, So = Ro(!1), nw = Ro(!0);
    Aa("reduce", (function (e) {
        return So(Da(this), e, arguments.length, 1 < arguments.length ? arguments[1] : void 0)
    })), Aa("reduceRight", (function (e) {
        return nw(Da(this), e, arguments.length, 1 < arguments.length ? arguments[1] : void 0)
    }));
    var ow = Math.floor;
    Aa("reverse", (function () {
        for (var e, t = Da(this).length, n = ow(t / 2), r = 0; r < n;) e = this[r], this[r++] = this[--t], this[t] = e;
        return this
    }));
    var pw = R((function () {
        new Int8Array(1).set({})
    }));
    Aa("set", (function (e) {
        Da(this);
        var t = jh(1 < arguments.length ? arguments[1] : void 0, 1), n = this.length, r = Qa(e), i = ta(r.length),
            o = 0;
        if (i + t > n) throw RangeError("Wrong length");
        for (; o < i;) this[t + o] = r[o++]
    }), pw);
    var qw = [].slice, rw = R((function () {
        new Int8Array(1).slice()
    }));
    Aa("slice", (function (e, t) {
        e = qw.call(Da(this), e, t);
        var n = jd(this, this.constructor);
        t = 0;
        var r = e.length;
        for (n = new (Ke(n))(r); r > t;) n[t] = e[t++];
        return n
    }), rw), Aa("some", (function (e) {
        return Gu(Da(this), e, 1 < arguments.length ? arguments[1] : void 0)
    }));
    var sw = [].sort;
    Aa("sort", (function (e) {
        return sw.call(Da(this), e)
    })), Aa("subarray", (function (e, t) {
        var n = Da(this), r = n.length;
        return e = xb(e, r), new (jd(n, n.constructor))(n.buffer, n.byteOffset + e * n.BYTES_PER_ELEMENT, ta((void 0 === t ? r : xb(t, r)) - e))
    }));
    var lh = E.Int8Array, To = [].toLocaleString, tw = [].slice, uw = !!lh && R((function () {
        To.call(new lh(1))
    })), vw = R((function () {
        return [1, 2].toLocaleString() != new lh([1, 2]).toLocaleString()
    })) || !R((function () {
        lh.prototype.toLocaleString.call([1, 2])
    }));
    Aa("toLocaleString", (function () {
        return To.apply(uw ? tw.call(Da(this)) : Da(this), arguments)
    }), vw);
    var Uo = E.Uint8Array, ww = Uo && Uo.prototype || {}, mh = [].toString, xw = [].join;
    R((function () {
        mh.call({})
    })) && (mh = function () {
        return xw.call(this)
    }), Aa("toString", mh, ww.toString != mh);
    var Fj = Rf.ArrayBuffer, Vo = Rf.DataView, Wo = Fj.prototype.slice, yw = R((function () {
        return !new Fj(2).slice(1, void 0).byteLength
    }));
    P({target: "ArrayBuffer", proto: !0, unsafe: !0, forced: yw}, {
        slice: function (e, t) {
            if (void 0 !== Wo && void 0 === t) return Wo.call(va(this), e);
            var n = va(this).byteLength;
            e = xb(e, n), t = xb(void 0 === t ? n : t, n), n = new (jd(this, Fj))(ta(t - e));
            for (var r = new Vo(this), i = new Vo(n), o = 0; e < t;) i.setUint8(o++, r.getUint8(e++));
            return n
        }
    });
    var Xo = Rf.ArrayBuffer;
    P({global: !0, forced: E.ArrayBuffer !== Xo}, {ArrayBuffer: Xo}), If("ArrayBuffer");
    var zw = Ra.f, Gj = Function.prototype, Aw = Gj.toString, Bw = /^\s*function ([^ (]*)/;
    !ka || "name" in Gj || zw(Gj, "name", {
        configurable: !0, get: function () {
            try {
                return Aw.call(this).match(Bw)[1]
            } catch (e) {
                return ""
            }
        }
    });
    var Yo = RegExp.prototype, Zo = Yo.toString, Cw = R((function () {
        return "/a/b" != Zo.call({source: "a", flags: "b"})
    })), Dw = "toString" != Zo.name;
    (Cw || Dw) && Ta(RegExp.prototype, "toString", (function () {
        var e = va(this), t = String(e.source), n = e.flags;
        return "/" + t + "/" + (e = String(void 0 === n && e instanceof RegExp && !("flags" in Yo) ? sj.call(e) : n))
    }), {unsafe: !0});
    var Ew = Ef("splice"), Fw = Math.max, Gw = Math.min;
    P({target: "Array", proto: !0, forced: !Ew}, {
        splice: function (e, t) {
            var n, r, i = Qa(this), o = ta(i.length), s = xb(e, o), a = arguments.length;
            if (0 === a ? a = n = 0 : 1 === a ? (a = 0, n = o - s) : (a -= 2, n = Gw(Fw($b(t), 0), o - s)), 9007199254740991 < o + a - n) throw TypeError("Maximum allowed length exceeded");
            var u = Rg(i, n);
            for (r = 0; r < n; r++) {
                var c = s + r;
                c in i && Fe(u, r, i[c])
            }
            if (u.length = n, a < n) {
                for (r = s; r < o - n; r++) {
                    var l = r + a;
                    (c = r + n) in i ? i[l] = i[c] : delete i[l]
                }
                for (r = o; r > o - n + a; r--) delete i[r - 1]
            } else if (a > n) for (r = o - n; r > s; r--) l = r + a - 1, (c = r + n - 1) in i ? i[l] = i[c] : delete i[l];
            for (r = 0; r < a; r++) i[r + s] = arguments[r + 2];
            return i.length = o - n + a, u
        }
    });
    var Hj = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }, Ij = qa("iterator"), $o = qa("toStringTag"), Jj = md.values, nh;
    for (nh in Hj) {
        var ap = E[nh], Kc = ap && ap.prototype;
        if (Kc) {
            if (Kc[Ij] !== Jj) try {
                Ma(Kc, Ij, Jj)
            } catch (c) {
                Kc[Ij] = Jj
            }
            if (Kc[$o] || Ma(Kc, $o, nh), Hj[nh]) for (var Ne in md) if (Kc[Ne] !== md[Ne]) try {
                Ma(Kc, Ne, md[Ne])
            } catch (c) {
                Kc[Ne] = md[Ne]
            }
        }
    }
    var bp = Object.is || function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    };
    ch("search", 1, (function (e, t, n) {
        return [function (t) {
            var n = jb(this), r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function (e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            e = va(e);
            var i = String(this);
            return r = e.lastIndex, bp(r, 0) || (e.lastIndex = 0), i = Je(e, i), bp(e.lastIndex, r) || (e.lastIndex = r), null === i ? -1 : i.index
        }]
    })), $a((function (e) {
        !function (t, n) {
            e.exports ? e.exports = n(t) : n(t)
        }("undefined" != typeof self ? self : Ya, (function (e) {
            function t(e) {
                return btoa(e).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_")
            }

            function n(e) {
                return e = (e += "===").slice(0, -e.length % 4), atob(e.replace(/-/g, "+").replace(/_/g, "/"))
            }

            function r(e) {
                for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                return t
            }

            function i(e) {
                return e instanceof ArrayBuffer && (e = new Uint8Array(e)), String.fromCharCode.apply(String, e)
            }

            function o(e) {
                var t = {name: (e.name || e || "").toUpperCase().replace("V", "v")};
                switch (t.name) {
                    case"SHA-1":
                    case"SHA-256":
                    case"SHA-384":
                    case"SHA-512":
                        break;
                    case"AES-CBC":
                    case"AES-GCM":
                    case"AES-KW":
                        e.length && (t.length = e.length);
                        break;
                    case"HMAC":
                        e.hash && (t.hash = o(e.hash)), e.length && (t.length = e.length);
                        break;
                    case"RSAES-PKCS1-v1_5":
                        e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (t.modulusLength = e.modulusLength);
                        break;
                    case"RSASSA-PKCS1-v1_5":
                    case"RSA-OAEP":
                        e.hash && (t.hash = o(e.hash)), e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (t.modulusLength = e.modulusLength);
                        break;
                    default:
                        throw new SyntaxError("Bad algorithm name")
                }
                return t
            }

            function s(e) {
                return {
                    HMAC: {"SHA-1": "HS1", "SHA-256": "HS256", "SHA-384": "HS384", "SHA-512": "HS512"},
                    "RSASSA-PKCS1-v1_5": {"SHA-1": "RS1", "SHA-256": "RS256", "SHA-384": "RS384", "SHA-512": "RS512"},
                    "RSAES-PKCS1-v1_5": {"": "RSA1_5"},
                    "RSA-OAEP": {"SHA-1": "RSA-OAEP", "SHA-256": "RSA-OAEP-256"},
                    "AES-KW": {128: "A128KW", 192: "A192KW", 256: "A256KW"},
                    "AES-GCM": {128: "A128GCM", 192: "A192GCM", 256: "A256GCM"},
                    "AES-CBC": {128: "A128CBC", 192: "A192CBC", 256: "A256CBC"}
                }[e.name][(e.hash || {}).name || e.length || ""]
            }

            function a(e) {
                (e instanceof ArrayBuffer || e instanceof Uint8Array) && (e = JSON.parse(decodeURIComponent(escape(i(e)))));
                var t = {kty: e.kty, alg: e.alg, ext: e.ext || e.extractable};
                switch (t.kty) {
                    case"oct":
                        t.k = e.k;
                    case"RSA":
                        "n e d p q dp dq qi oth".split(" ").forEach((function (n) {
                            n in e && (t[n] = e[n])
                        }));
                        break;
                    default:
                        throw new TypeError("Unsupported key type")
                }
                return t
            }

            function u(e) {
                return e = a(e), m && (e.extractable = e.ext, delete e.ext), r(unescape(encodeURIComponent(JSON.stringify(e)))).buffer
            }

            function c(e) {
                var n = l(e), r = !1;
                switch (2 < n.length && (r = !0, n.shift()), e = {ext: !0}, n[0][0]) {
                    case"1.2.840.113549.1.1.1":
                        var o = "n e d p q dp dq qi".split(" ");
                        for (n = l(n[1]), r && n.shift(), r = 0; r < n.length; r++) n[r][0] || (n[r] = n[r].subarray(1)), e[o[r]] = t(i(n[r]));
                        e.kty = "RSA";
                        break;
                    default:
                        throw new TypeError("Unsupported key type")
                }
                return e
            }

            function l(e, t) {
                if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), t || (t = {
                    pos: 0,
                    end: e.length
                }), 2 > t.end - t.pos || t.end > e.length) throw new RangeError("Malformed DER");
                var n = e[t.pos++], r = e[t.pos++];
                if (128 <= r) {
                    if (r &= 127, t.end - t.pos < r) throw new RangeError("Malformed DER");
                    for (var o = 0; r--;) o <<= 8, o |= e[t.pos++];
                    r = o
                }
                if (t.end - t.pos < r) throw new RangeError("Malformed DER");
                switch (n) {
                    case 2:
                        n = e.subarray(t.pos, t.pos += r);
                        break;
                    case 3:
                        if (e[t.pos++]) throw Error("Unsupported bit string");
                        r--;
                    case 4:
                        n = new Uint8Array(e.subarray(t.pos, t.pos += r)).buffer;
                        break;
                    case 5:
                        n = null;
                        break;
                    case 6:
                        if (!((e = btoa(i(e.subarray(t.pos, t.pos += r)))) in _)) throw Error("Unsupported OBJECT ID " + e);
                        n = _[e];
                        break;
                    case 48:
                        for (n = [], r = t.pos + r; t.pos < r;) n.push(l(e, t));
                        break;
                    default:
                        throw Error("Unsupported DER tag 0x" + n.toString(16))
                }
                return n
            }

            function f(e, t) {
                t || (t = []);
                var n = t.length + 2;
                if (t.push(0, 0), e instanceof Uint8Array) for (var i = 2, o = e.length, s = 0; s < o; s++) t.push(e[s]); else if (e instanceof ArrayBuffer) for (i = 4, o = e.byteLength, e = new Uint8Array(e), s = 0; s < o; s++) t.push(e[s]); else if (null === e) i = 5, o = 0; else if ("string" == typeof e && e in O) for (i = 6, o = (e = r(atob(O[e]))).length, s = 0; s < o; s++) t.push(e[s]); else if (e instanceof Array) {
                    for (s = 0; s < e.length; s++) f(e[s], t);
                    i = 48, o = t.length - n
                } else {
                    if (!("object" === aa(e) && 3 === e.tag && e.value instanceof ArrayBuffer)) throw Error("Unsupported DER value " + e);
                    for (i = 3, o = (e = new Uint8Array(e.value)).byteLength, t.push(0), s = 0; s < o; s++) t.push(e[s]);
                    o++
                }
                if (128 <= o) {
                    for (s = o, o = 4, t.splice(n, 0, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s); 1 < o && !(s >> 24);) s <<= 8, o--;
                    4 > o && t.splice(n, 4 - o), o |= 128
                }
                return t.splice(n - 2, 2, i, o), t
            }

            function h(e, t, n, r) {
                Object.defineProperties(this, {
                    _key: {value: e},
                    type: {value: e.type, enumerable: !0},
                    extractable: {value: void 0 === n ? e.extractable : n, enumerable: !0},
                    algorithm: {value: void 0 === t ? e.algorithm : t, enumerable: !0},
                    usages: {value: void 0 === r ? e.usages : r, enumerable: !0}
                })
            }

            function p(e) {
                return "verify" === e || "encrypt" === e || "wrapKey" === e
            }

            function d(e) {
                return "sign" === e || "decrypt" === e || "unwrapKey" === e
            }

            if ("function" != typeof Promise) throw"Promise support required";
            var v = e.crypto || e.msCrypto;
            if (v) {
                var b = v.subtle || v.webkitSubtle;
                if (b) {
                    var g = e.Crypto || v.constructor || Object, y = e.SubtleCrypto || b.constructor || Object;
                    e.CryptoKey || e.Key;
                    var E = -1 < e.navigator.userAgent.indexOf("Edge/"), m = !!e.msCrypto && !E,
                        w = !v.subtle && !!v.webkitSubtle;
                    if (m || w) {
                        var _ = {KoZIhvcNAQEB: "1.2.840.113549.1.1.1"}, O = {"1.2.840.113549.1.1.1": "KoZIhvcNAQEB"};
                        if (["generateKey", "importKey", "unwrapKey"].forEach((function (e) {
                            var t = b[e];
                            b[e] = function (i, l, f) {
                                var g = [].slice.call(arguments);
                                switch (e) {
                                    case"generateKey":
                                        var y = o(i), E = l, _ = f;
                                        break;
                                    case"importKey":
                                        y = o(f), E = g[3], _ = g[4], "jwk" === i && ((l = a(l)).alg || (l.alg = s(y)), l.key_ops || (l.key_ops = "oct" !== l.kty ? "d" in l ? _.filter(d) : _.filter(p) : _.slice()), g[1] = u(l));
                                        break;
                                    case"unwrapKey":
                                        y = g[4], E = g[5], _ = g[6], g[2] = f._key
                                }
                                if ("generateKey" === e && "HMAC" === y.name && y.hash) return y.length = y.length || {
                                    "SHA-1": 512,
                                    "SHA-256": 512,
                                    "SHA-384": 1024,
                                    "SHA-512": 1024
                                }[y.hash.name], b.importKey("raw", v.getRandomValues(new Uint8Array(y.length + 7 >> 3)), y, E, _);
                                if (w && "generateKey" === e && "RSASSA-PKCS1-v1_5" === y.name && (!y.modulusLength || 2048 <= y.modulusLength)) return (i = o(i)).name = "RSAES-PKCS1-v1_5", delete i.hash, b.generateKey(i, !0, ["encrypt", "decrypt"]).then((function (e) {
                                    return Promise.all([b.exportKey("jwk", e.publicKey), b.exportKey("jwk", e.privateKey)])
                                })).then((function (e) {
                                    return e[0].alg = e[1].alg = s(y), e[0].key_ops = _.filter(p), e[1].key_ops = _.filter(d), Promise.all([b.importKey("jwk", e[0], y, !0, e[0].key_ops), b.importKey("jwk", e[1], y, E, e[1].key_ops)])
                                })).then((function (e) {
                                    return {publicKey: e[0], privateKey: e[1]}
                                }));
                                if ((w || m && "SHA-1" === (y.hash || {}).name) && "importKey" === e && "jwk" === i && "HMAC" === y.name && "oct" === l.kty) return b.importKey("raw", r(n(l.k)), f, g[3], g[4]);
                                if (w && "importKey" === e && ("spki" === i || "pkcs8" === i)) return b.importKey("jwk", c(l), f, g[3], g[4]);
                                if (m && "unwrapKey" === e) return b.decrypt(g[3], f, l).then((function (e) {
                                    return b.importKey(i, e, g[4], g[5], g[6])
                                }));
                                try {
                                    var O = t.apply(b, g)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return m && (O = new Promise((function (e, t) {
                                    O.onabort = O.onerror = function (e) {
                                        t(e)
                                    }, O.oncomplete = function (t) {
                                        e(t.target.result)
                                    }
                                }))), O = O.then((function (e) {
                                    return "HMAC" !== y.name || y.length || (y.length = 8 * e.algorithm.length), 0 == y.name.search("RSA") && (y.modulusLength || (y.modulusLength = (e.publicKey || e).algorithm.modulusLength), y.publicExponent || (y.publicExponent = (e.publicKey || e).algorithm.publicExponent)), e.publicKey && e.privateKey ? {
                                        publicKey: new h(e.publicKey, y, E, _.filter(p)),
                                        privateKey: new h(e.privateKey, y, E, _.filter(d))
                                    } : new h(e, y, E, _)
                                }))
                            }
                        })), ["exportKey", "wrapKey"].forEach((function (e) {
                            var o = b[e];
                            b[e] = function (u, c, l) {
                                var h = [].slice.call(arguments);
                                switch (e) {
                                    case"exportKey":
                                        h[1] = c._key;
                                        break;
                                    case"wrapKey":
                                        h[1] = c._key, h[2] = l._key
                                }
                                if ((w || m && "SHA-1" === (c.algorithm.hash || {}).name) && "exportKey" === e && "jwk" === u && "HMAC" === c.algorithm.name && (h[0] = "raw"), !w || "exportKey" !== e || "spki" !== u && "pkcs8" !== u || (h[0] = "jwk"), m && "wrapKey" === e) return b.exportKey(u, c).then((function (e) {
                                    return "jwk" === u && (e = r(unescape(encodeURIComponent(JSON.stringify(a(e)))))), b.encrypt(h[3], l, e)
                                }));
                                try {
                                    var v = o.apply(b, h)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return m && (v = new Promise((function (e, t) {
                                    v.onabort = v.onerror = function (e) {
                                        t(e)
                                    }, v.oncomplete = function (t) {
                                        e(t.target.result)
                                    }
                                }))), "exportKey" === e && "jwk" === u && (v = v.then((function (e) {
                                    return (w || m && "SHA-1" === (c.algorithm.hash || {}).name) && "HMAC" === c.algorithm.name ? {
                                        kty: "oct",
                                        alg: s(c.algorithm),
                                        key_ops: c.usages.slice(),
                                        ext: !0,
                                        k: t(i(e))
                                    } : ((e = a(e)).alg || (e.alg = s(c.algorithm)), e.key_ops || (e.key_ops = "public" === c.type ? c.usages.filter(p) : "private" === c.type ? c.usages.filter(d) : c.usages.slice()), e)
                                }))), !w || "exportKey" !== e || "spki" !== u && "pkcs8" !== u || (v = v.then((function (e) {
                                    var t = [["", null]], i = !1;
                                    switch ((e = a(e)).kty) {
                                        case"RSA":
                                            for (var o = "n e d p q dp dq qi".split(" "), s = [], u = 0; u < o.length && o[u] in e; u++) {
                                                var c = s[u] = r(n(e[o[u]]));
                                                128 & c[0] && (s[u] = new Uint8Array(c.length + 1), s[u].set(c, 1))
                                            }
                                            2 < s.length && (i = !0, s.unshift(new Uint8Array([0]))), t[0][0] = "1.2.840.113549.1.1.1";
                                            break;
                                        default:
                                            throw new TypeError("Unsupported key type")
                                    }
                                    return t.push(new Uint8Array(f(s)).buffer), i ? t.unshift(new Uint8Array([0])) : t[1] = {
                                        tag: 3,
                                        value: t[1]
                                    }, new Uint8Array(f(t)).buffer
                                }))), v
                            }
                        })), ["encrypt", "decrypt", "sign", "verify"].forEach((function (e) {
                            var t = b[e];
                            b[e] = function (n, r, i, s) {
                                if (m && (!i.byteLength || s && !s.byteLength)) throw Error("Empty input is not allowed");
                                var a = [].slice.call(arguments), u = o(n);
                                if (!m || "sign" !== e && "verify" !== e || "RSASSA-PKCS1-v1_5" !== n && "HMAC" !== n || (a[0] = {name: n}), m && r.algorithm.hash && (a[0].hash = a[0].hash || r.algorithm.hash), m && "decrypt" === e && "AES-GCM" === u.name) {
                                    var c = n.tagLength >> 3;
                                    a[2] = (i.buffer || i).slice(0, i.byteLength - c), n.tag = (i.buffer || i).slice(i.byteLength - c)
                                }
                                m && "AES-GCM" === u.name && void 0 === a[0].tagLength && (a[0].tagLength = 128), a[1] = r._key;
                                try {
                                    var l = t.apply(b, a)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return m && (l = new Promise((function (t, n) {
                                    l.onabort = l.onerror = function (e) {
                                        n(e)
                                    }, l.oncomplete = function (n) {
                                        if (n = n.target.result, "encrypt" === e && n instanceof AesGcmEncryptResult) {
                                            var r = n.ciphertext, i = n.tag;
                                            (n = new Uint8Array(r.byteLength + i.byteLength)).set(new Uint8Array(r), 0), n.set(new Uint8Array(i), r.byteLength), n = n.buffer
                                        }
                                        t(n)
                                    }
                                }))), l
                            }
                        })), m) {
                            var I = b.digest;
                            b.digest = function (e, t) {
                                if (!t.byteLength) throw Error("Empty input is not allowed");
                                try {
                                    var n = I.call(b, e, t)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return n = new Promise((function (e, t) {
                                    n.onabort = n.onerror = function (e) {
                                        t(e)
                                    }, n.oncomplete = function (t) {
                                        e(t.target.result)
                                    }
                                }))
                            }, e.crypto = Object.create(v, {
                                getRandomValues: {
                                    value: function (e) {
                                        return v.getRandomValues(e)
                                    }
                                }, subtle: {value: b}
                            }), e.CryptoKey = h
                        }
                        w && (v.subtle = b, e.Crypto = g, e.SubtleCrypto = y, e.CryptoKey = h)
                    }
                }
            }
        }))
    }));
    var Hw = qa("match"), Kj = function (e) {
        var t;
        return ha(e) && (void 0 !== (t = e[Hw]) ? !!t : "RegExp" == Zb(e))
    }, Iw = [].push, Jw = Math.min;
    ch("split", 2, (function (e, t, n) {
        var r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length ? function (e, n) {
            var r = String(jb(this));
            if (0 === (n = void 0 === n ? 4294967295 : n >>> 0)) return [];
            if (void 0 === e) return [r];
            if (!Kj(e)) return t.call(r, e, n);
            var i, o, s, a = [], u = 0;
            for (e = new RegExp(e.source, (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : "") + "g"); (i = Of.call(e, r)) && !((o = e.lastIndex) > u && (a.push(r.slice(u, i.index)), 1 < i.length && i.index < r.length && Iw.apply(a, i.slice(1)), s = i[0].length, u = o, a.length >= n));) e.lastIndex === i.index && e.lastIndex++;
            return u === r.length ? (s || !e.test("")) && a.push("") : a.push(r.slice(u)), a.length > n ? a.slice(0, n) : a
        } : "0".split(void 0, 0).length ? function (e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        } : t;
        return [function (t, n) {
            var i = jb(this), o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
        }, function (e, i) {
            var o = n(r, e, this, i, r !== t);
            if (o.done) return o.value;
            var s = va(e);
            e = String(this);
            var a = jd(s, RegExp);
            if (o = s.unicode, s = new a(pc ? "^(?:" + s.source + ")" : s, (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.unicode ? "u" : "") + (pc ? "g" : "y")), 0 === (i = void 0 === i ? 4294967295 : i >>> 0)) return [];
            if (0 === e.length) return null === Je(s, e) ? [e] : [];
            var u = 0, c = 0;
            for (a = []; c < e.length;) {
                s.lastIndex = pc ? 0 : c;
                var l, f = Je(s, pc ? e.slice(c) : e);
                if (null === f || (l = Jw(ta(s.lastIndex + (pc ? c : 0)), e.length)) === u) c = wj(e, c, o); else {
                    if (a.push(e.slice(u, c)), a.length === i) return a;
                    for (u = 1; u <= f.length - 1; u++) if (a.push(f[u]), a.length === i) return a;
                    c = u = l
                }
            }
            return a.push(e.slice(u)), a
        }]
    }), pc), function (e) {
        e.console || (e.console = {}), e = e.console;
        for (var t, n = function () {
        }, r = ["memory"], i = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profiles profileEnd show table time timeEnd timeline timelineEnd timeStamp trace warn".split(" "); t = r.pop();) e[t] || (e[t] = {});
        for (; t = i.pop();) e[t] || (e[t] = n)
    }("undefined" == typeof window ? Ya : window), P({target: "Object", stat: !0}, {setPrototypeOf: Ua});
    var Kw = R((function () {
        Vb(1)
    }));
    P({target: "Object", stat: !0, forced: Kw, sham: !Fn}, {
        getPrototypeOf: function (e) {
            return Vb(Qa(e))
        }
    });
    var cp = [].slice, Lj = {}, Lw = Function.bind || function (e) {
        var t = yb(this), n = cp.call(arguments, 1), r = function () {
            var i = n.concat(cp.call(arguments));
            if (this instanceof r) {
                var o = i.length;
                if (!(o in Lj)) {
                    for (var s = [], a = 0; a < o; a++) s[a] = "a[" + a + "]";
                    Lj[o] = Function("C,a", "return new C(" + s.join(",") + ")")
                }
                i = Lj[o](t, i)
            } else i = t.apply(e, i);
            return i
        };
        return ha(t.prototype) && (r.prototype = t.prototype), r
    }, Mj = mc("Reflect", "construct"), dp = R((function () {
        function e() {
        }

        return !(Mj((function () {
        }), [], e) instanceof e)
    })), ep = !R((function () {
        Mj((function () {
        }))
    })), fp = dp || ep;
    P({target: "Reflect", stat: !0, forced: fp, sham: fp}, {
        construct: function (e, t) {
            yb(e), va(t);
            var n = 3 > arguments.length ? e : yb(arguments[2]);
            if (ep && !dp) return Mj(e, t, n);
            if (e == n) {
                switch (t.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3])
                }
                return (n = [null]).push.apply(n, t), new (Lw.apply(e, n))
            }
            n = n.prototype, n = ac(ha(n) ? n : Object.prototype);
            var r = Function.apply.call(e, n, t);
            return ha(r) ? r : n
        }
    }), P({target: "Reflect", stat: !0}, {get: vl});
    var gp = Fb.f, Mw = R((function () {
        gp(1)
    }));
    P({target: "Object", stat: !0, forced: !ka || Mw, sham: !ka}, {
        getOwnPropertyDescriptor: function (e, t) {
            return gp(qb(e), t)
        }
    });
    var hp = Hd.f, Nw = {}.toString,
        ip = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        Nj = function (e) {
            if (ip && "[object Window]" == Nw.call(e)) try {
                var t = hp(e)
            } catch (e) {
                t = ip.slice()
            } else t = hp(qb(e));
            return t
        }, jp = {f: qa}, Ow = Ra.f, oh = function (e) {
            var t = E.Symbol || (E.Symbol = {});
            Q(t, e) || Ow(t, e, {value: jp.f(e)})
        }, rb = Og("hidden"), kp = qa("toPrimitive"), Pw = Za.set, lp = Za.getterFor("Symbol"), Ob = Object.prototype,
        sb = E.Symbol, Tf = mc("JSON", "stringify"), mp = Fb.f, nd = Ra.f, np = Nj, Qw = zf, Lc = ed("symbols"),
        Uf = ed("op-symbols"), Oj = ed("string-to-symbol-registry"), Pj = ed("symbol-to-string-registry"),
        Rw = ed("wks"), Qj = E.QObject, Rj = !Qj || !Qj.prototype || !Qj.prototype.findChild,
        Sj = ka && R((function () {
            return 7 != ac(nd({}, "a", {
                get: function () {
                    return nd(this, "a", {value: 7}).a
                }
            })).a
        })) ? function (e, t, n) {
            var r = mp(Ob, t);
            r && delete Ob[t], nd(e, t, n), r && e !== Ob && nd(Ob, t, r)
        } : nd, Tj = function (e, t) {
            var n = Lc[e] = ac(sb.prototype);
            return Pw(n, {type: "Symbol", tag: e, description: t}), ka || (n.description = t), n
        }, Uj = tn ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return Object(e) instanceof sb
        }, ph = function (e, t, n) {
            return e === Ob && ph(Uf, t, n), va(e), t = lc(t, !0), va(n), Q(Lc, t) ? (n.enumerable ? (Q(e, rb) && e[rb][t] && (e[rb][t] = !1), n = ac(n, {enumerable: cd(0, !1)})) : (Q(e, rb) || nd(e, rb, cd(1, {})), e[rb][t] = !0), Sj(e, t, n)) : nd(e, t, n)
        }, op = function (e, t) {
            va(e);
            var n = qb(t);
            return t = Dc(n).concat(Vj(n)), Jd(t, (function (t) {
                ka && !Wj.call(n, t) || ph(e, t, n[t])
            })), e
        }, Wj = function (e) {
            e = lc(e, !0);
            var t = Qw.call(this, e);
            return !(this === Ob && Q(Lc, e) && !Q(Uf, e)) && (!(t || !Q(this, e) || !Q(Lc, e) || Q(this, rb) && this[rb][e]) || t)
        }, pp = function (e, t) {
            if (e = qb(e), t = lc(t, !0), e !== Ob || !Q(Lc, t) || Q(Uf, t)) {
                var n = mp(e, t);
                return !n || !Q(Lc, t) || Q(e, rb) && e[rb][t] || (n.enumerable = !0), n
            }
        }, qp = function (e) {
            e = np(qb(e));
            var t = [];
            return Jd(e, (function (e) {
                Q(Lc, e) || Q(Ae, e) || t.push(e)
            })), t
        }, Vj = function (e) {
            var t = e === Ob;
            e = np(t ? Uf : qb(e));
            var n = [];
            return Jd(e, (function (e) {
                !Q(Lc, e) || t && !Q(Ob, e) || n.push(Lc[e])
            })), n
        };
    if (oc || (sb = function () {
        if (this instanceof sb) throw TypeError("Symbol is not a constructor");
        var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, t = ze(e),
            n = function (e) {
                this === Ob && n.call(Uf, e), Q(this, rb) && Q(this[rb], t) && (this[rb][t] = !1), Sj(this, t, cd(1, e))
            };
        return ka && Rj && Sj(Ob, t, {configurable: !0, set: n}), Tj(t, e)
    }, Ta(sb.prototype, "toString", (function () {
        return lp(this).tag
    })), Ta(sb, "withoutSetter", (function (e) {
        return Tj(ze(e), e)
    })), zf = Wj, Ra.f = ph, Fb.f = pp, Hd.f = Nj = qp, Bf.f = Vj, jp.f = function (e) {
        return Tj(qa(e), e)
    }, ka && (nd(sb.prototype, "description", {
        configurable: !0, get: function () {
            return lp(this).description
        }
    }), Ta(Ob, "propertyIsEnumerable", Wj, {unsafe: !0}))), P({
        global: !0,
        wrap: !0,
        forced: !oc,
        sham: !oc
    }, {Symbol: sb}), Jd(Dc(Rw), (function (e) {
        oh(e)
    })), P({target: "Symbol", stat: !0, forced: !oc}, {
        for: function (e) {
            if (e = String(e), Q(Oj, e)) return Oj[e];
            var t = sb(e);
            return Oj[e] = t, Pj[t] = e, t
        }, keyFor: function (e) {
            if (!Uj(e)) throw TypeError(e + " is not a symbol");
            if (Q(Pj, e)) return Pj[e]
        }, useSetter: function () {
            Rj = !0
        }, useSimple: function () {
            Rj = !1
        }
    }), P({target: "Object", stat: !0, forced: !oc, sham: !ka}, {
        create: function (e, t) {
            return void 0 === t ? ac(e) : op(ac(e), t)
        }, defineProperty: ph, defineProperties: op, getOwnPropertyDescriptor: pp
    }), P({target: "Object", stat: !0, forced: !oc}, {
        getOwnPropertyNames: qp,
        getOwnPropertySymbols: Vj
    }), P({
        target: "Object", stat: !0, forced: R((function () {
            Bf.f(1)
        }))
    }, {
        getOwnPropertySymbols: function (e) {
            return Bf.f(Qa(e))
        }
    }), Tf) {
        var Sw = !oc || R((function () {
            var e = sb();
            return "[null]" != Tf([e]) || "{}" != Tf({a: e}) || "{}" != Tf(Object(e))
        }));
        P({target: "JSON", stat: !0, forced: Sw}, {
            stringify: function (e, t, n) {
                for (var r, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
                if (r = t, (ha(t) || void 0 !== e) && !Uj(e)) return fd(t) || (t = function (e, t) {
                    if ("function" == typeof r && (t = r.call(this, e, t)), !Uj(t)) return t
                }), i[1] = t, Tf.apply(null, i)
            }
        })
    }
    sb.prototype[kp] || Ma(sb.prototype, kp, sb.prototype.valueOf), Ec(sb, "Symbol"), Ae[rb] = !0;
    var Tw = Ra.f, Mc = E.Symbol;
    if (ka && "function" == typeof Mc && (!("description" in Mc.prototype) || void 0 !== Mc().description)) {
        var rp = {}, Vf = function () {
            var e = 1 > arguments.length || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                t = this instanceof Vf ? new Mc(e) : void 0 === e ? Mc() : Mc(e);
            return "" === e && (rp[t] = !0), t
        };
        pn(Vf, Mc);
        var Xj = Vf.prototype = Mc.prototype;
        Xj.constructor = Vf;
        var Uw = Xj.toString, Vw = "Symbol(test)" == String(Mc("test")), Ww = /^Symbol\((.*)\)[^)]+$/;
        Tw(Xj, "description", {
            configurable: !0, get: function () {
                var e = ha(this) ? this.valueOf() : this, t = Uw.call(e);
                return Q(rp, e) ? "" : "" === (e = Vw ? t.slice(7, -1) : t.replace(Ww, "$1")) ? void 0 : e
            }
        }), P({global: !0, forced: !0}, {Symbol: Vf})
    }
    oh("toStringTag"), Ec(Math, "Math", !0), Ec(E.JSON, "JSON", !0), function () {
        function e(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function t(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function n(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
        }

        function r(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && o(e, t)
        }

        function i(e) {
            return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function o(e, t) {
            return (o = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function s(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function a(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n = i(e);
                if (t) {
                    var r = i(this).constructor;
                    n = Reflect.construct(n, arguments, r)
                } else n = n.apply(this, arguments);
                return n = !n || "object" !== aa(n) && "function" != typeof n ? s(this) : n
            }
        }

        function u(e, t, n) {
            return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = i(e));) ;
                if (e) return (t = Object.getOwnPropertyDescriptor(e, t)).get ? t.get.call(n) : t.value
            })(e, t, n || e)
        }

        var c = function () {
            function t() {
                e(this, t), Object.defineProperty(this, "listeners", {value: {}, writable: !0, configurable: !0})
            }

            return n(t, [{
                key: "addEventListener", value: function (e, t, n) {
                    e in this.listeners || (this.listeners[e] = []), this.listeners[e].push({callback: t, options: n})
                }
            }, {
                key: "removeEventListener", value: function (e, t) {
                    if (e in this.listeners) for (var n = 0, r = (e = this.listeners[e]).length; n < r; n++) if (e[n].callback === t) {
                        e.splice(n, 1);
                        break
                    }
                }
            }, {
                key: "dispatchEvent", value: function (e) {
                    if (e.type in this.listeners) {
                        for (var t = this.listeners[e.type].slice(), n = 0, r = t.length; n < r; n++) {
                            var i = t[n];
                            try {
                                i.callback.call(this, e)
                            } catch (e) {
                                Promise.resolve().then((function () {
                                    throw e
                                }))
                            }
                            i.options && i.options.once && this.removeEventListener(e.type, i.callback)
                        }
                        return !e.defaultPrevented
                    }
                }
            }]), t
        }(), l = function (t) {
            function o() {
                e(this, o);
                var t = l.call(this);
                return t.listeners || c.call(s(t)), Object.defineProperty(s(t), "aborted", {
                    value: !1,
                    writable: !0,
                    configurable: !0
                }), Object.defineProperty(s(t), "onabort", {value: null, writable: !0, configurable: !0}), t
            }

            r(o, t);
            var l = a(o);
            return n(o, [{
                key: "toString", value: function () {
                    return "[object AbortSignal]"
                }
            }, {
                key: "dispatchEvent", value: function (e) {
                    "abort" === e.type && (this.aborted = !0, "function" == typeof this.onabort && this.onabort.call(this, e)), u(i(o.prototype), "dispatchEvent", this).call(this, e)
                }
            }]), o
        }(c), f = function () {
            function t() {
                e(this, t), Object.defineProperty(this, "signal", {value: new l, writable: !0, configurable: !0})
            }

            return n(t, [{
                key: "abort", value: function () {
                    try {
                        var e = new Event("abort")
                    } catch (t) {
                        "undefined" != typeof document ? document.createEvent ? (e = document.createEvent("Event")).initEvent("abort", !1, !1) : (e = document.createEventObject()).type = "abort" : e = {
                            type: "abort",
                            bubbles: !1,
                            cancelable: !1
                        }
                    }
                    this.signal.dispatchEvent(e)
                }
            }, {
                key: "toString", value: function () {
                    return "[object AbortController]"
                }
            }]), t
        }();
        "undefined" != typeof Symbol && Symbol.toStringTag && (f.prototype[Symbol.toStringTag] = "AbortController", l.prototype[Symbol.toStringTag] = "AbortSignal"), function (e) {
            if (e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
                console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill");
                var t = !0
            } else t = "function" == typeof e.Request && !e.Request.prototype.hasOwnProperty("signal") || !e.AbortController;
            t && (e.AbortController = f, e.AbortSignal = l)
        }("undefined" != typeof self ? self : Ya)
    }();
    var Xw = Math.floor, Yw = Math.log, Zw = Math.LOG2E;
    P({target: "Math", stat: !0}, {
        clz32: function (e) {
            return (e >>>= 0) ? 31 - Xw(Yw(e + .5) * Zw) : 32
        }
    });
    var $w = Math.log, ax = Math.LN2, ps = Math.clz32 || function (e) {
            return 31 - $w(e >>> 0) / ax | 0
        }, xd = String.fromCharCode, sp = {}.toString, Yj = window.Uint8Array, Zj = Yj || Array,
        bx = sp.call((window.ArrayBuffer || Zj).prototype), ak;
    wl.prototype.decode = function (e) {
        if (e = e && e.buffer || e, sp.call(e) !== bx) throw Error("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
        for (var t = "", n = 0, r = 0 | (e = Yj ? new Zj(e) : e).length; n < r; n = n + 32768 | 0) t += xd.apply(0, e[Yj ? "slice" : "subarray"](n, n + 32768 | 0));
        return t.replace(/[\xc0-\xff][\x80-\xbf]*/g, os)
    }, window.TextDecoder || (window.TextDecoder = wl), xl.prototype.encode = function (e) {
        for (var t = 0 | (e = void 0 === e ? "" : ("" + e).replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g, qs)).length, n = new Zj(t), r = 0; r < t; r = r + 1 | 0) n[r] = e.charCodeAt(r);
        return n
    }, window.TextEncoder || (window.TextEncoder = xl), function (e) {
        var t, n, r, i, o, s, a, u, c, l, f;
        !function (e) {
            e.LOGIN = "LOGIN", e.LOGIN_SUCCESS = "LOGIN_SUCCESS", e.LOGIN_FAILURE = "LOGIN_FAILURE", e.LOGIN_TIMEOUT = "LOGIN_TIMEOUT", e.INTERRUPTED = "INTERRUPTED", e.LOGOUT = "LOGOUT", e.BANNED_BY_SERVER = "BANNED_BY_SERVER", e.REMOTE_LOGIN = "REMOTE_LOGIN"
        }(t || (t = {})), e.ConnectionChangeReason = t, function (e) {
            e.DISCONNECTED = "DISCONNECTED", e.CONNECTING = "CONNECTING", e.CONNECTED = "CONNECTED", e.RECONNECTING = "RECONNECTING", e.ABORTED = "ABORTED"
        }(n || (n = {})), e.ConnectionState = n, function (e) {
            e.IDLE = "IDLE", e.SENT_TO_REMOTE = "SENT_TO_REMOTE", e.RECEIVED_BY_REMOTE = "RECEIVED_BY_REMOTE", e.ACCEPTED_BY_REMOTE = "ACCEPTED_BY_REMOTE", e.REFUSED_BY_REMOTE = "REFUSED_BY_REMOTE", e.CANCELED = "CANCELED", e.FAILURE = "FAILURE"
        }(r || (r = {})), e.LocalInvitationState = r, function (e) {
            e.INVITATION_RECEIVED = "INVITATION_RECEIVED", e.ACCEPT_SENT_TO_LOCAL = "ACCEPT_SENT_TO_LOCAL", e.REFUSED = "REFUSED", e.ACCEPTED = "ACCEPTED", e.CANCELED = "CANCELED", e.FAILURE = "FAILURE"
        }(i || (i = {})), e.RemoteInvitationState = i, function (e) {
            e.UNKNOWN = "UNKNOWN", e.PEER_NO_RESPONSE = "PEER_NO_RESPONSE", e.INVITATION_EXPIRE = "INVITATION_EXPIRE", e.PEER_OFFLINE = "PEER_OFFLINE", e.NOT_LOGGEDIN = "NOT_LOGGEDIN"
        }(o || (o = {})), e.LocalInvitationFailureReason = o, function (e) {
            e.UNKNOWN = "UNKNOWN", e.PEER_OFFLINE = "PEER_OFFLINE", e.ACCEPT_FAILURE = "ACCEPT_FAILURE", e.INVITATION_EXPIRE = "INVITATION_EXPIRE"
        }(s || (s = {})), e.RemoteInvitationFailureReason = s, function (e) {
            e.ONLINE = "ONLINE", e.UNREACHABLE = "UNREACHABLE", e.OFFLINE = "OFFLINE"
        }(a || (a = {})), e.PeerOnlineState = a, (u || (u = {})).ONLINE_STATUS = "ONLINE_STATUS", e.PeerSubscriptionOption = u, function (e) {
            e.TEXT = "TEXT", e.RAW = "RAW", e.IMAGE = "IMAGE", e.FILE = "FILE"
        }(c || (c = {})), e.MessageType = c, function (e) {
            e.CN = "CN", e.NA = "NA", e.EU = "EU", e.AS = "AS", e.JP = "JP", e.IN = "IN", e.GLOB = "GLOB", e.OC = "OC", e.SA = "SA", e.AF = "AF", e.OVS = "OVS"
        }(l || (l = {})), e.LegacyAreaCode = l, function (e) {
            e.GLOBAL = "GLOBAL", e.INDIA = "INDIA", e.JAPAN = "JAPAN", e.ASIA = "ASIA", e.EUROPE = "EUROPE", e.CHINA = "CHINA", e.NORTH_AMERICA = "NORTH_AMERICA"
        }(f || (f = {})), e.AreaCode = f
    }(ak || (ak = {}));
    var S = ak;
    P({target: "Array", proto: !0}, {
        includes: function (e) {
            return mn(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }), Ld("includes");
    var bk = function (e) {
        if (Kj(e)) throw TypeError("The method doesn't accept regular expressions");
        return e
    }, cx = qa("match"), ck = function (e) {
        var t = /./;
        try {
            "/./"[e](t)
        } catch (n) {
            try {
                return t[cx] = !1, "/./"[e](t)
            } catch (e) {
            }
        }
        return !1
    };
    P({target: "String", proto: !0, forced: !ck("includes")}, {
        includes: function (e) {
            return !!~String(jb(this)).indexOf(bk(e), 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var od = {
        RECONNECTING_AP_INTERVAL: 2e3,
        RECONNECTING_AP_NUM: 2,
        DISABLE_MESSAGE_COMPRESSION: !1,
        LOG_UPLOAD_INTERVAL: 3e3,
        LOG_HANDLER: void 0
    };
    oh("iterator"), oh("asyncIterator");
    var dk = De("forEach") ? [].forEach : function (e) {
        return Jd(this, e, 1 < arguments.length ? arguments[1] : void 0)
    }, tp;
    for (tp in Hj) {
        var up = E[tp], qh = up && up.prototype;
        if (qh && qh.forEach !== dk) try {
            Ma(qh, "forEach", dk)
        } catch (c) {
            qh.forEach = dk
        }
    }
    var dx = [].reverse, vp = [1, 2];
    P({target: "Array", proto: !0, forced: String(vp) === String(vp.reverse())}, {
        reverse: function () {
            return fd(this) && (this.length = this.length), dx.call(this)
        }
    });
    var x = $a((function (e) {
        e = function (e) {
            function t(e, t, n) {
                return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            function n(e, t, n, o) {
                return t = Object.create((t && t.prototype instanceof i ? t : i).prototype), o = new h(o || []), t._invoke = function (e, t, n) {
                    var i = _;
                    return function (o, s) {
                        if (i === I) throw Error("Generator is already running");
                        if (i === A) {
                            if ("throw" === o) throw s;
                            return d()
                        }
                        for (n.method = o, n.arg = s; ;) {
                            if ((o = n.delegate) && (o = c(o, n))) {
                                if (o === R) continue;
                                return o
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if (i === _) throw i = A, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            if (i = I, "normal" === (o = r(e, t, n)).type) {
                                if (i = n.done ? A : O, o.arg === R) continue;
                                return {value: o.arg, done: n.done}
                            }
                            "throw" === o.type && (i = A, n.method = "throw", n.arg = o.arg)
                        }
                    }
                }(e, n, o), t
            }

            function r(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)}
                } catch (e) {
                    return {type: "throw", arg: e}
                }
            }

            function i() {
            }

            function o() {
            }

            function s() {
            }

            function a(e) {
                ["next", "throw", "return"].forEach((function (n) {
                    t(e, n, (function (e) {
                        return this._invoke(n, e)
                    }))
                }))
            }

            function u(e, t) {
                function n(i, o, s, a) {
                    if ("throw" !== (i = r(e[i], e, o)).type) {
                        var u = i.arg;
                        return (i = u.value) && "object" === aa(i) && g.call(i, "__await") ? t.resolve(i.__await).then((function (e) {
                            n("next", e, s, a)
                        }), (function (e) {
                            n("throw", e, s, a)
                        })) : t.resolve(i).then((function (e) {
                            u.value = e, s(u)
                        }), (function (e) {
                            return n("throw", e, s, a)
                        }))
                    }
                    a(i.arg)
                }

                var i;
                this._invoke = function (e, r) {
                    function o() {
                        return new t((function (t, i) {
                            n(e, r, t, i)
                        }))
                    }

                    return i = i ? i.then(o, o) : o()
                }
            }

            function c(e, t) {
                var n = e.iterator[t.method];
                if (n === v) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = v, c(e, t), "throw" === t.method)) return R;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return R
                }
                return "throw" === (n = r(n, e.iterator, t.arg)).type ? (t.method = "throw", t.arg = n.arg, t.delegate = null, R) : (n = n.arg) ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = v), t.delegate = null, R) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, R)
            }

            function l(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function f(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function h(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(l, this), this.reset(!0)
            }

            function p(e) {
                if (e) {
                    var t = e[E];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1;
                        return (t = function t() {
                            for (; ++n < e.length;) if (g.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = v, t.done = !0, t
                        }).next = t
                    }
                }
                return {next: d}
            }

            function d() {
                return {value: v, done: !0}
            }

            var v, b = Object.prototype, g = b.hasOwnProperty, y = "function" == typeof Symbol ? Symbol : {},
                E = y.iterator || "@@iterator", m = y.asyncIterator || "@@asyncIterator",
                w = y.toStringTag || "@@toStringTag";
            try {
                t({}, "")
            } catch (e) {
                t = function (e, t, n) {
                    return e[t] = n
                }
            }
            e.wrap = n;
            var _ = "suspendedStart", O = "suspendedYield", I = "executing", A = "completed", R = {};
            (y = {})[E] = function () {
                return this
            };
            var k = Object.getPrototypeOf;
            (k = k && k(k(p([])))) && k !== b && g.call(k, E) && (y = k);
            var T = s.prototype = i.prototype = Object.create(y);
            return o.prototype = T.constructor = s, s.constructor = o, o.displayName = t(s, w, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                return !!(e = "function" == typeof e && e.constructor) && (e === o || "GeneratorFunction" === (e.displayName || e.name))
            }, e.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, s) : (e.__proto__ = s, t(e, w, "GeneratorFunction")), e.prototype = Object.create(T), e
            }, e.awrap = function (e) {
                return {__await: e}
            }, a(u.prototype), u.prototype[m] = function () {
                return this
            }, e.AsyncIterator = u, e.async = function (t, r, i, o, s) {
                void 0 === s && (s = Promise);
                var a = new u(n(t, r, i, o), s);
                return e.isGeneratorFunction(r) ? a : a.next().then((function (e) {
                    return e.done ? e.value : a.next()
                }))
            }, a(T), t(T, w, "Generator"), T[E] = function () {
                return this
            }, T.toString = function () {
                return "[object Generator]"
            }, e.keys = function (e) {
                var t, n = [];
                for (t in e) n.push(t);
                return n.reverse(), function t() {
                    for (; n.length;) {
                        var r = n.pop();
                        if (r in e) return t.value = r, t.done = !1, t
                    }
                    return t.done = !0, t
                }
            }, e.values = p, h.prototype = {
                constructor: h, reset: function (e) {
                    if (this.next = this.prev = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null, this.method = "next", this.arg = v, this.tryEntries.forEach(f), !e) for (var t in this) "t" === t.charAt(0) && g.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = v)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    function t(t, r) {
                        return o.type = "throw", o.arg = e, n.next = t, r && (n.method = "next", n.arg = v), !!r
                    }

                    if (this.done) throw e;
                    for (var n = this, r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var i = this.tryEntries[r], o = i.completion;
                        if ("root" === i.tryLoc) return t("end");
                        if (i.tryLoc <= this.prev) {
                            var s = g.call(i, "catchLoc"), a = g.call(i, "finallyLoc");
                            if (s && a) {
                                if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return t(i.catchLoc, !0)
                            } else {
                                if (!a) throw Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && g.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    return i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null), (n = i ? i.completion : {}).type = e, n.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, R) : this.complete(n)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), R
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), f(n), R
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            if ("throw" === (e = n.completion).type) {
                                var r = e.arg;
                                f(n)
                            }
                            return r
                        }
                    }
                    throw Error("illegal catch attempt")
                }, delegateYield: function (e, t, n) {
                    return this.delegate = {
                        iterator: p(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = v), R
                }
            }, e
        }(e.exports);
        try {
            regeneratorRuntime = e
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(e)
        }
    })), wp = !R((function () {
        return Object.isExtensible(Object.preventExtensions({}))
    })), ek = $a((function (e) {
        var t = Ra.f, n = ze("meta"), r = 0, i = Object.isExtensible || function () {
            return !0
        }, o = function (e) {
            t(e, n, {value: {objectID: "O" + ++r, weakData: {}}})
        }, s = e.exports = {
            REQUIRED: !1, fastKey: function (e, t) {
                if (!ha(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!Q(e, n)) {
                    if (!i(e)) return "F";
                    if (!t) return "E";
                    o(e)
                }
                return e[n].objectID
            }, getWeakData: function (e, t) {
                if (!Q(e, n)) {
                    if (!i(e)) return !0;
                    if (!t) return !1;
                    o(e)
                }
                return e[n].weakData
            }, onFreeze: function (e) {
                return wp && s.REQUIRED && i(e) && !Q(e, n) && o(e), e
            }
        };
        Ae[n] = !0
    })), xp = function (e, t, n) {
        var r = -1 !== e.indexOf("Map"), i = -1 !== e.indexOf("Weak"), o = r ? "set" : "add", s = E[e],
            a = s && s.prototype, u = s, c = {}, l = function (e) {
                var t = a[e];
                Ta(a, e, "add" == e ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this
                } : "delete" == e ? function (e) {
                    return !(i && !ha(e)) && t.call(this, 0 === e ? 0 : e)
                } : "get" == e ? function (e) {
                    return i && !ha(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                } : "has" == e ? function (e) {
                    return !(i && !ha(e)) && t.call(this, 0 === e ? 0 : e)
                } : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this
                })
            };
        if (nc(e, "function" != typeof s || !(i || a.forEach && !R((function () {
            (new s).entries().next()
        }))))) u = n.getConstructor(t, e, r, o), ek.REQUIRED = !0; else if (nc(e, !0)) {
            var f = new u, h = f[o](i ? {} : -0, 1) != f, p = R((function () {
                f.has(1)
            })), d = Sg((function (e) {
                new s(e)
            })), v = !i && R((function () {
                for (var e = new s, t = 5; t--;) e[o](t, t);
                return !e.has(-0)
            }));
            d || ((u = t((function (t, n) {
                return Gc(t, u, e), t = kh(new s, t, u), null != n && Wg(n, t[o], {that: t, AS_ENTRIES: r}), t
            }))).prototype = a, a.constructor = u), (p || v) && (l("delete"), l("has"), r && l("get")), (v || h) && l(o), i && a.clear && delete a.clear
        }
        return c[e] = u, P({global: !0, forced: u != s}, c), Ec(u, e), i || n.setStrong(u, e, r), u
    }, ex = Ra.f, yp = ek.fastKey, zp = Za.set, fk = Za.getterFor, Ap = {
        getConstructor: function (e, t, n, r) {
            var i = e((function (e, o) {
                Gc(e, i, t), zp(e, {
                    type: t,
                    index: ac(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                }), ka || (e.size = 0), null != o && Wg(o, e[r], {that: e, AS_ENTRIES: n})
            })), o = fk(t), s = function (e, t, n) {
                var r, i = o(e), s = a(e, t);
                return s ? s.value = n : (i.last = s = {
                    index: r = yp(t, !0),
                    key: t,
                    value: n,
                    previous: t = i.last,
                    next: void 0,
                    removed: !1
                }, i.first || (i.first = s), t && (t.next = s), ka ? i.size++ : e.size++, "F" !== r && (i.index[r] = s)), e
            }, a = function (e, t) {
                e = o(e);
                var n = yp(t);
                if ("F" !== n) return e.index[n];
                for (e = e.first; e; e = e.next) if (e.key == t) return e
            };
            return Hf(i.prototype, {
                clear: function () {
                    for (var e = o(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                    e.first = e.last = void 0, ka ? e.size = 0 : this.size = 0
                }, delete: function (e) {
                    var t = o(this);
                    if (e = a(this, e)) {
                        var n = e.next, r = e.previous;
                        delete t.index[e.index], e.removed = !0, r && (r.next = n), n && (n.previous = r), t.first == e && (t.first = n), t.last == e && (t.last = r), ka ? t.size-- : this.size--
                    }
                    return !!e
                }, forEach: function (e) {
                    for (var t, n = o(this), r = Id(e, 1 < arguments.length ? arguments[1] : void 0, 3); t = t ? t.next : n.first;) for (r(t.value, t.key, this); t && t.removed;) t = t.previous
                }, has: function (e) {
                    return !!a(this, e)
                }
            }), Hf(i.prototype, n ? {
                get: function (e) {
                    return (e = a(this, e)) && e.value
                }, set: function (e, t) {
                    return s(this, 0 === e ? 0 : e, t)
                }
            } : {
                add: function (e) {
                    return s(this, e = 0 === e ? 0 : e, e)
                }
            }), ka && ex(i.prototype, "size", {
                get: function () {
                    return o(this).size
                }
            }), i
        }, setStrong: function (e, t, n) {
            var r = t + " Iterator", i = fk(t), o = fk(r);
            aj(e, t, (function (e, t) {
                zp(this, {type: r, target: e, state: i(e), kind: t, last: void 0})
            }), (function () {
                for (var e = o(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                    value: n.key,
                    done: !1
                } : "values" == t ? {value: n.value, done: !1} : {
                    value: [n.key, n.value],
                    done: !1
                } : (e.target = void 0, {value: void 0, done: !0})
            }), n ? "entries" : "values", !n, !0), If(t)
        }
    };
    xp("Set", (function (e) {
        return function () {
            return e(this, arguments.length ? arguments[0] : void 0)
        }
    }), Ap);
    var fx = /^[\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff][\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff]*/,
        gx = /[\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff][\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff]*$/,
        gk = function (e) {
            return function (t) {
                return t = String(jb(t)), 1 & e && (t = t.replace(fx, "")), 2 & e && (t = t.replace(gx, "")), t
            }
        };
    gk(1), gk(2);
    var hk = gk(3), rh = E.parseInt, hx = /^[+-]?0[Xx]/,
        Bp = 8 !== rh("\t\n\v\f\r                　\u2028\u2029\ufeff08") || 22 !== rh("\t\n\v\f\r                　\u2028\u2029\ufeff0x16") ? function (e, t) {
            return e = hk(String(e)), rh(e, t >>> 0 || (hx.test(e) ? 16 : 10))
        } : rh;
    P({global: !0, forced: parseInt != Bp}, {parseInt: Bp});
    var ix = Hd.f, jx = Fb.f, kx = Ra.f, pd = E.Number, sh = pd.prototype, lx = "Number" == Zb(ac(sh)),
        Cp = function (e) {
            var t, n = lc(e, !1);
            if ("string" == typeof n && 2 < n.length) if (43 === (e = (n = hk(n)).charCodeAt(0)) || 45 === e) {
                if (88 === (e = n.charCodeAt(2)) || 120 === e) return NaN
            } else if (48 === e) {
                switch (n.charCodeAt(1)) {
                    case 66:
                    case 98:
                        e = 2;
                        var r = 49;
                        break;
                    case 79:
                    case 111:
                        e = 8, r = 55;
                        break;
                    default:
                        return +n
                }
                var i = (n = n.slice(2)).length;
                for (t = 0; t < i; t++) {
                    var o = n.charCodeAt(t);
                    if (48 > o || o > r) return NaN
                }
                return parseInt(n, e)
            }
            return +n
        };
    if (nc("Number", !pd(" 0o1") || !pd("0b1") || pd("+0x1"))) {
        for (var Pd = function (e) {
            var t = 1 > arguments.length ? 0 : e, n = this;
            return n instanceof Pd && (lx ? R((function () {
                sh.valueOf.call(n)
            })) : "Number" != Zb(n)) ? kh(new pd(Cp(t)), n, Pd) : Cp(t)
        }, Dp = ka ? ix(pd) : "MAX_VALUE MIN_VALUE NaN NEGATIVE_INFINITY POSITIVE_INFINITY EPSILON isFinite isInteger isNaN isSafeInteger MAX_SAFE_INTEGER MIN_SAFE_INTEGER parseFloat parseInt isInteger fromString range".split(" "), ik = 0, th; Dp.length > ik; ik++) Q(pd, th = Dp[ik]) && !Q(Pd, th) && kx(Pd, th, jx(pd, th));
        Pd.prototype = sh, sh.constructor = Pd, Ta(E, "Number", Pd)
    }
    var Ep = qa("isConcatSpreadable"), mx = 51 <= hd || !R((function () {
        var e = [];
        return e[Ep] = !1, e.concat()[0] !== e
    })), nx = Ef("concat");
    P({target: "Array", proto: !0, forced: !mx || !nx}, {
        concat: function (e) {
            var t, n = Qa(this), r = Rg(n, 0), i = 0, o = -1;
            for (t = arguments.length; o < t; o++) {
                var s = -1 === o ? n : arguments[o], a = s;
                if (ha(a)) {
                    var u = a[Ep];
                    a = void 0 !== u ? !!u : fd(a)
                } else a = !1;
                if (a) {
                    if (9007199254740991 < i + (u = ta(s.length))) throw TypeError("Maximum allowed index exceeded");
                    for (a = 0; a < u; a++, i++) a in s && Fe(r, i, s[a])
                } else {
                    if (9007199254740991 <= i) throw TypeError("Maximum allowed index exceeded");
                    Fe(r, i++, s)
                }
            }
            return r.length = i, r
        }
    });
    var jk = mc("Reflect", "apply"), ox = Function.apply, px = !R((function () {
        jk((function () {
        }))
    }));
    P({target: "Reflect", stat: !0, forced: px}, {
        apply: function (e, t, n) {
            return yb(e), va(n), jk ? jk(e, t, n) : ox.call(e, t, n)
        }
    }), P({target: "Reflect", stat: !0}, {ownKeys: on});
    var qx = Nj, rx = R((function () {
        return !Object.getOwnPropertyNames(1)
    }));
    P({target: "Object", stat: !0, forced: rx}, {getOwnPropertyNames: qx});
    var Oe = "object" === ("undefined" == typeof Reflect ? "undefined" : aa(Reflect)) ? Reflect : null,
        Fp = Oe && "function" == typeof Oe.apply ? Oe.apply : function (e, t, n) {
            return Function.prototype.apply.call(e, t, n)
        }, sx = Oe && "function" == typeof Oe.ownKeys ? Oe.ownKeys : Object.getOwnPropertySymbols ? function (e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function (e) {
            return Object.getOwnPropertyNames(e)
        }, Gp = Number.isNaN || function (e) {
            return e != e
        };
    ea.EventEmitter = ea, ea.prototype._events = void 0, ea.prototype._eventsCount = 0, ea.prototype._maxListeners = void 0;
    var Hp = 10;
    Object.defineProperty(ea, "defaultMaxListeners", {
        enumerable: !0, get: function () {
            return Hp
        }, set: function (e) {
            if ("number" != typeof e || 0 > e || Gp(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Hp = e
        }
    }), ea.init = function () {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, ea.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || 0 > e || Gp(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e, this
    }, ea.prototype.getMaxListeners = function () {
        return void 0 === this._maxListeners ? ea.defaultMaxListeners : this._maxListeners
    }, ea.prototype.emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        n = "error" === e;
        var r = this._events;
        if (void 0 !== r) n = n && void 0 === r.error; else if (!n) return !1;
        if (n) {
            var i;
            if (0 < t.length && (i = t[0]), i instanceof Error) throw i;
            throw(t = Error("Unhandled error." + (i ? " (" + i.message + ")" : ""))).context = i, t
        }
        if (void 0 === (n = r[e])) return !1;
        if ("function" == typeof n) Fp(n, this, t); else for (r = Bl(n, i = n.length), n = 0; n < i; ++n) Fp(r[n], this, t);
        return !0
    }, ea.prototype.addListener = function (e, t) {
        return yl(this, e, t, !1)
    }, ea.prototype.on = ea.prototype.addListener, ea.prototype.prependListener = function (e, t) {
        return yl(this, e, t, !0)
    }, ea.prototype.once = function (e, t) {
        return ng(t), this.on(e, zl(this, e, t)), this
    }, ea.prototype.prependOnceListener = function (e, t) {
        return ng(t), this.prependListener(e, zl(this, e, t)), this
    }, ea.prototype.removeListener = function (e, t) {
        var n;
        ng(t);
        var r = this._events;
        if (void 0 === r) return this;
        var i = r[e];
        if (void 0 === i) return this;
        if (i === t || i.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, i.listener || t)); else if ("function" != typeof i) {
            var o = -1;
            for (n = i.length - 1; 0 <= n; n--) if (i[n] === t || i[n].listener === t) {
                var s = i[n].listener;
                o = n;
                break
            }
            if (0 > o) return this;
            if (0 === o) i.shift(); else {
                for (; o + 1 < i.length; o++) i[o] = i[o + 1];
                i.pop()
            }
            1 === i.length && (r[e] = i[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t)
        }
        return this
    }, ea.prototype.off = ea.prototype.removeListener, ea.prototype.removeAllListeners = function (e) {
        var t = this._events;
        if (void 0 === t) return this;
        if (void 0 === t.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== t[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete t[e]), this;
        if (0 === arguments.length) {
            var n = Object.keys(t);
            for (t = 0; t < n.length; ++t) {
                var r = n[t];
                "removeListener" !== r && this.removeAllListeners(r)
            }
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
        }
        if ("function" == typeof (n = t[e])) this.removeListener(e, n); else if (void 0 !== n) for (t = n.length - 1; 0 <= t; t--) this.removeListener(e, n[t]);
        return this
    }, ea.prototype.listeners = function (e) {
        return Al(this, e, !0)
    }, ea.prototype.rawListeners = function (e) {
        return Al(this, e, !1)
    }, ea.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : Cl.call(e, t)
    }, ea.prototype.listenerCount = Cl, ea.prototype.eventNames = function () {
        return 0 < this._eventsCount ? sx(this._events) : []
    }, ea.once = function (e, t) {
        return new Promise((function (n, r) {
            function i(n) {
                e.removeListener(t, o), r(n)
            }

            function o() {
                "function" == typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments))
            }

            Dl(e, t, o, {once: !0}), "error" !== t && ss(e, i, {once: !0})
        }))
    };
    var Pe = Object.assign, Ip = Object.defineProperty, Jp = !Pe || R((function () {
        if (ka && 1 !== Pe({b: 1}, Pe(Ip({}, "a", {
            enumerable: !0, get: function () {
                Ip(this, "b", {value: 3, enumerable: !1})
            }
        }), {b: 2})).b) return !0;
        var e = {}, t = {}, n = Symbol();
        return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function (e) {
            t[e] = e
        })), 7 != Pe({}, e)[n] || "abcdefghijklmnopqrst" != Dc(Pe({}, t)).join("")
    })) ? function (e, t) {
        for (var n = Qa(e), r = arguments.length, i = 1, o = Bf.f, s = zf; r > i;) for (var a, u = Af(arguments[i++]), c = o ? Dc(u).concat(o(u)) : Dc(u), l = c.length, f = 0; l > f;) a = c[f++], (!ka || s.call(u, a)) && (n[a] = u[a]);
        return n
    } : Pe;
    P({target: "Object", stat: !0, forced: Object.assign !== Jp}, {assign: Jp}), xp("Map", (function (e) {
        return function () {
            return e(this, arguments.length ? arguments[0] : void 0)
        }
    }), Ap);
    var tx = Math.log, ux = Math.LN2;
    P({target: "Math", stat: !0}, {
        log2: function (e) {
            return tx(e) / ux
        }
    });
    var vx = Ra.f, wx = Hd.f, xx = Za.enforce, yx = qa("match"), sc = E.RegExp, kk = sc.prototype, Wf = /a/g, lk = /a/g,
        mk = new sc(Wf) !== Wf;
    if (ka && nc("RegExp", !mk || pc || R((function () {
        return lk[yx] = !1, sc(Wf) != Wf || sc(lk) == lk || "/a/i" != sc(Wf, "i")
    })))) {
        for (var Nc = function (e, t) {
            var n, r = this instanceof Nc, i = Kj(e), o = void 0 === t;
            return !r && i && e.constructor === Nc && o || (mk ? i && !o && (e = e.source) : e instanceof Nc && (o && (t = sj.call(e)), e = e.source), pc && (n = !!t && -1 < t.indexOf("y")) && (t = t.replace(/y/g, "")), e = kh(mk ? new sc(e, t) : sc(e, t), r ? this : kk, Nc), pc && n && (xx(e).sticky = !0)), e
        }, zx = function (e) {
            e in Nc || vx(Nc, e, {
                configurable: !0, get: function () {
                    return sc[e]
                }, set: function (t) {
                    sc[e] = t
                }
            })
        }, Kp = wx(sc), Lp = 0; Kp.length > Lp;) zx(Kp[Lp++]);
        kk.constructor = Nc, Nc.prototype = kk, Ta(E, "RegExp", Nc)
    }
    If("RegExp"), Sf("Float32", (function (e) {
        return function (t, n, r) {
            return e(this, t, n, r)
        }
    })), Sf("Float64", (function (e) {
        return function (t, n, r) {
            return e(this, t, n, r)
        }
    })), Sf("Uint32", (function (e) {
        return function (t, n, r) {
            return e(this, t, n, r)
        }
    })), Sf("Uint16", (function (e) {
        return function (t, n, r) {
            return e(this, t, n, r)
        }
    }));
    var nk = function (e, t) {
        return e === t ? 0 : null == e ? null == t ? 0 : -1 : null == t ? null == e ? 0 : 1 : "function" == typeof e.compare ? e.compare(t) : "function" == typeof t.compare ? -t.compare(e) : e < t ? -1 : e > t ? 1 : 0
    }, ok = [], Mp = ok.sort, Ax = R((function () {
        ok.sort(void 0)
    })), Bx = R((function () {
        ok.sort(null)
    })), Cx = De("sort");
    P({target: "Array", proto: !0, forced: Ax || !Bx || !Cx}, {
        sort: function (e) {
            return void 0 === e ? Mp.call(Qa(this)) : Mp.call(Qa(this), yb(e))
        }
    });
    var Np = Object.getPrototypeOf({}), Xf = function (e, t) {
        var n;
        return e === t || (null == e ? e == t : "function" === aa(e.equiv) ? e.equiv(t) : null == t ? e == t : "function" === aa(t.equiv) ? t.equiv(e) : "string" !== aa(e) && "string" !== aa(t) && (null != (n = Object.getPrototypeOf(e)) && n !== Np || null != (n = Object.getPrototypeOf(t)) && n !== Np ? "function" !== aa(e) && void 0 !== e.length && "function" !== aa(t) && void 0 !== t.length ? Ex(e, t) : e instanceof Set && t instanceof Set ? Fx(e, t) : e instanceof Map && t instanceof Map ? Gx(e, t) : e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : e instanceof RegExp && t instanceof RegExp ? e.toString() === t.toString() : e != e && t != t : Dx(e, t)))
    }, Ex = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Xf, r = e.length;
        if (r === t.length) for (; 0 <= --r && n(e[r], t[r]);) ;
        return 0 > r
    }, Fx = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Xf;
        return e.size === t.size && n(I(e.keys()).sort(), I(t.keys()).sort())
    }, Gx = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Xf;
        return e.size === t.size && n(I(e).sort(), I(t).sort())
    }, Dx = function (e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Xf;
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for (var r in e) if (!t.hasOwnProperty(r) || !n(e[r], t[r])) return !1;
        return !0
    }, Op = function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function (e) {
            return void 0 !== e ? ": " + e : ""
        };
        return function (n) {
            function r(n) {
                return X(this, r), i.call(this, e(n) + t(n))
            }

            la(r, n);
            var i = ma(r);
            return r
        }(ef(Error))
    }, Hx = Op((function () {
        return "illegal argument(s)"
    })), uh = function (e) {
        throw new Hx(e)
    }, pk = Op((function () {
        return "index out of bounds"
    })), Pp = 1 / 4294967295, Ix = function () {
        function e() {
            X(this, e)
        }

        return Ha(e, [{
            key: "float", value: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
                return this.int() * Pp * e
            }
        }, {
            key: "norm", value: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
                return 2 * (this.int() * Pp - .5) * e
            }
        }, {
            key: "minmax", value: function (e, t) {
                return this.float() * (t - e) + e
            }
        }]), e
    }(), qk = Math.random, Jx = new (function (e) {
        function t() {
            return X(this, t), n.apply(this, arguments)
        }

        la(t, e);
        var n = ma(t);
        return Ha(t, [{
            key: "int", value: function () {
                return 4294967296 * qk() >>> 0
            }
        }, {
            key: "float", value: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
                return qk() * e
            }
        }, {
            key: "norm", value: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
                return 2 * (qk() - .5) * e
            }
        }]), t
    }(Ix)), Uh = Symbol(), Gl = function () {
    }, Kx = ek.onFreeze, rk = Object.freeze, Lx = R((function () {
        rk(1)
    }));
    P({target: "Object", stat: !0, forced: Lx, sham: !wp}, {
        freeze: function (e) {
            return rk && ha(e) ? rk(Kx(e)) : e
        }
    });
    var Mx = De("reduce"), Nx = !Hc && 79 < hd && 83 > hd;
    P({target: "Array", proto: !0, forced: !Mx || Nx}, {
        reduce: function (e) {
            return So(this, e, arguments.length, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Fl = function (e) {
        return null != e && "function" == typeof e.xform ? e.xform() : e
    }, og = function () {
        function e(t) {
            X(this, e), this.value = t
        }

        return Ha(e, [{
            key: "deref", value: function () {
                return this.value
            }
        }]), e
    }(), Vh = function (e) {
        return e instanceof og ? e.deref() : e
    }, us = function (e, t) {
        return [e, function (e) {
            return e
        }, t]
    }, Ox = x.mark((function (e, t) {
        var n, r, i, o, s, a;
        return x.wrap((function (u) {
            for (; ;) switch (u.prev = u.next) {
                case 0:
                    n = Fl(e)(ts()), r = n[1], i = n[2], o = 0;
                case 4:
                    if (!(o < t.length)) {
                        u.next = 15;
                        break
                    }
                    if (s = t[o], !((a = i([], s)) instanceof og)) {
                        u.next = 10;
                        break
                    }
                    return u.delegateYield(Vh(r(a.deref())), "t0", 9);
                case 9:
                    return u.abrupt("return");
                case 10:
                    if (!a.length) {
                        u.next = 12;
                        break
                    }
                    return u.delegateYield(a, "t1", 12);
                case 12:
                    o++, u.next = 4;
                    break;
                case 15:
                    return u.delegateYield(Vh(r([])), "t2", 16);
                case 16:
                case"end":
                    return u.stop()
            }
        }), Ox)
    })), vs = x.mark(El), ws = function (e, t) {
        return [e[0], e[1], t]
    }, Qp = !0;
    "findIndex" in [] && Array(1).findIndex((function () {
        Qp = !1
    })), P({target: "Array", proto: !0, forced: Qp}, {
        findIndex: function (e) {
            return yn(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }), Ld("findIndex"), P({target: "Array", proto: !0}, {fill: Aj}), Ld("fill");
    var Px = function () {
            function e(t) {
                X(this, e), this._length = 0, t && this.into(t)
            }

            return Ha(e, [{
                key: "length", get: function () {
                    return this._length
                }
            }, {
                key: "copy", value: function () {
                    return new e(this)
                }
            }, {
                key: "empty", value: function () {
                    return new e
                }
            }, {
                key: "clear", value: function () {
                    this.release()
                }
            }, {
                key: "release", value: function () {
                    for (var e, t = this.head; t;) e = t.next, delete t.value, delete t.prev, delete t.next, t = e;
                    return delete this.head, delete this.tail, this._length = 0, !0
                }
            }, {
                key: "compare", value: function (e) {
                    var t = this._length;
                    if (t < e._length) return -1;
                    if (t > e._length) return 1;
                    if (0 === t) return 0;
                    t = this.head, e = e.head;
                    for (var n = 0; t && 0 == n;) n = nk(t.value, e.value), t = t.next, e = e.next;
                    return n
                }
            }, {
                key: "equiv", value: function (t) {
                    if (!(t instanceof e || null != t && "function" != typeof t && void 0 !== t.length) || this._length !== t.length) return !1;
                    if (!this._length || this === t) return !0;
                    for (var n = this.head, r = 0; r < t.length; r++) {
                        if (!Xf(n.value, t[r])) return !1;
                        n = n.next
                    }
                    return !0
                }
            }, {
                key: Symbol.iterator, value: x.mark((function e() {
                    var t;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                t = this.head;
                            case 1:
                                if (!t) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 4, t.value;
                            case 4:
                                t = t.next, e.next = 1;
                                break;
                            case 7:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                }))
            }, {
                key: "seq", value: function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.length;
                    if (!(e >= t || 0 > e)) {
                        e = this.nthCell(e);
                        var n = this.nthCell(t - 1);
                        return t = function e(t) {
                            return {
                                first: function () {
                                    return t.value
                                }, next: function () {
                                    return t !== n && t.next ? e(t.next) : void 0
                                }
                            }
                        }, e ? t(e) : void 0
                    }
                }
            }, {
                key: "cycle", value: x.mark((function e() {
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.delegateYield(this, "t0", 2);
                            case 2:
                                e.next = 0;
                                break;
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                }))
            }, {
                key: "$reduce", value: function (e, t) {
                    for (var n = this.head; n && !(t instanceof og);) t = e(t, n.value), n = n.next;
                    return t
                }
            }, {
                key: "drop", value: function () {
                    var e = this.head;
                    if (e) return (this.head = e.next) ? delete this.head.prev : delete this.tail, this._length--, e.value
                }
            }, {
                key: "cons", value: function (e) {
                    return e = {
                        value: e,
                        next: this.head
                    }, this.head ? this.head.prev = e : this.tail = e, this.head = e, this._length++, this
                }
            }, {
                key: "insertBefore", value: function (e, t) {
                    return e || uh("cell is undefined"), t = {
                        value: t,
                        next: e,
                        prev: e.prev
                    }, e.prev ? e.prev.next = t : this.head = t, e.prev = t, this._length++, this
                }
            }, {
                key: "insertAfter", value: function (e, t) {
                    return e || uh("cell is undefined"), t = {
                        value: t,
                        next: e.next,
                        prev: e
                    }, e.next ? e.next.prev = t : this.tail = t, e.next = t, this._length++, this
                }
            }, {
                key: "insertBeforeNth", value: function (e, t) {
                    if (0 > e && (e += this._length), 0 >= e) return this.cons(t);
                    if (0 > e || e >= this._length) throw new pk(e);
                    return this.insertBefore(this.nthCellUnsafe(e), t)
                }
            }, {
                key: "insertAfterNth", value: function (e, t) {
                    if (0 > e && (e += this._length), e >= this._length - 1) return this.push(t);
                    if (0 > e || e >= this._length) throw new pk(e);
                    return this.insertAfter(this.nthCellUnsafe(e), t)
                }
            }, {
                key: "insertSorted", value: function (e, t) {
                    t = t || nk;
                    for (var n = this.head; n;) {
                        if (0 >= t(e, n.value)) return this.insertBefore(n, e);
                        n = n.next
                    }
                    return this.push(e)
                }
            }, {
                key: "find", value: function (e) {
                    for (var t = this.head; t;) {
                        if (t.value === e) return t;
                        t = t.next
                    }
                }
            }, {
                key: "findWith", value: function (e) {
                    for (var t = this.head; t;) {
                        if (e(t.value)) return t;
                        t = t.next
                    }
                }
            }, {
                key: "concat", value: function () {
                    for (var e = this.copy(), t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    for (t = 0; t < n.length; t++) e.into(n[t]);
                    return e
                }
            }, {
                key: "into", value: function (e) {
                    for (var t = 0; t < e.length; t++) this.push(e[t])
                }
            }, {
                key: "slice", value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.length;
                    t = 0 > t ? t + this._length : t, n = 0 > n ? n + this._length : n, (0 > t || 0 > n) && uh("invalid indices: ${from} / ${to}");
                    for (var r = new e, i = this.nthCell(t); i && ++t <= n;) r.push(i.value), i = i.next;
                    return r
                }
            }, {
                key: "splice", value: function (t) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = 2 < arguments.length ? arguments[2] : void 0;
                    if ("number" == typeof t) {
                        if (0 > t && (t += this._length), 0 > t || t >= this._length) throw new pk(t);
                        var i = this.nthCellUnsafe(t)
                    } else i = t;
                    var o = new e;
                    if (0 < n) for (; i && 0 < n--;) this.remove(i), o.push(i.value), i = i.next; else i && (i = i.next);
                    if (r) if (i) for (n = 0; n < r.length; n++) this.insertBefore(i, r[n]); else for (i = 0; i < r.length; i++) this.push(r[i]);
                    return o
                }
            }, {
                key: "remove", value: function (e) {
                    return e.prev ? e.prev.next = e.next : this.head = e.next, e.next ? e.next.prev = e.prev : this.tail = e.prev, this._length--, this
                }
            }, {
                key: "swap", value: function (e, t) {
                    if (e !== t) {
                        var n = e.value;
                        e.value = t.value, t.value = n
                    }
                    return this
                }
            }, {
                key: "push", value: function (e) {
                    return this.tail ? (e = {
                        value: e,
                        prev: this.tail
                    }, this.tail = this.tail.next = e, this._length++, this) : this.cons(e)
                }
            }, {
                key: "pop", value: function () {
                    var e = this.tail;
                    if (e) return (this.tail = e.prev) ? delete this.tail.next : delete this.head, this._length--, e.value
                }
            }, {
                key: "first", value: function () {
                    return this.head && this.head.value
                }
            }, {
                key: "peek", value: function () {
                    return this.tail && this.tail.value
                }
            }, {
                key: "setHead", value: function (e) {
                    return this.head ? (this.head.value = e, this) : this.cons(e)
                }
            }, {
                key: "setTail", value: function (e) {
                    return this.tail ? (this.tail.value = e, this) : this.push(e)
                }
            }, {
                key: "setNth", value: function (e, t) {
                    var n = this.nthCell(e);
                    return !n && uh("index out of bounds: ".concat(e)), n.value = t, this
                }
            }, {
                key: "nth", value: function (e, t) {
                    return (e = this.nthCell(e)) ? e.value : t
                }
            }, {
                key: "nthCell", value: function (e) {
                    if (0 > e && (e += this._length), !(0 > e || e >= this._length)) return this.nthCellUnsafe(e)
                }
            }, {
                key: "rotateLeft", value: function () {
                    switch (this._length) {
                        case 0:
                        case 1:
                            return this;
                        case 2:
                            return this.swap(this.head, this.tail);
                        default:
                            return this.push(this.drop())
                    }
                }
            }, {
                key: "rotateRight", value: function () {
                    switch (this._length) {
                        case 0:
                        case 1:
                            return this;
                        case 2:
                            return this.swap(this.head, this.tail);
                        default:
                            var e = this.peek();
                            return this.pop(), this.cons(e)
                    }
                }
            }, {
                key: "map", value: function (t) {
                    for (var n = new e, r = this.head; r;) n.push(t(r.value)), r = r.next;
                    return n
                }
            }, {
                key: "filter", value: function (t) {
                    for (var n = new e, r = this.head; r;) t(r.value) && n.push(r.value), r = r.next;
                    return n
                }
            }, {
                key: "reduce", value: function (e, t) {
                    for (var n = this.head; n;) t = e(t, n.value), n = n.next;
                    return t
                }
            }, {
                key: "shuffle", value: function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Jx;
                    if (2 > this._length) return this;
                    for (e = null != e ? e : Math.ceil(1.5 * Math.log2(this._length)); 0 < e; e--) for (var n = this.head; n;) {
                        var r = n.next;
                        .5 > t.float() ? this.asHead(n) : this.asTail(n), n = r
                    }
                    return this
                }
            }, {
                key: "sort", value: function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : nk;
                    if (!this._length) return this;
                    for (var t = 1; ;) {
                        var n = this.head;
                        this.tail = this.head = void 0;
                        for (var r = 0; n;) {
                            r++;
                            for (var i = n, o = 0, s = 0; s < t && (o++, i = i.next); s++) ;
                            for (s = t; 0 < o || 0 < s && i;) {
                                if (0 === o) {
                                    var a = i;
                                    i = i.next, s--
                                } else i && 0 !== s ? 0 >= e(n.value, i.value) ? (a = n, n = n.next, o--) : (a = i, i = i.next, s--) : (a = n, n = n.next, o--);
                                this.tail ? this.tail.next = a : this.head = a, a.prev = this.tail, this.tail = a
                            }
                            n = i
                        }
                        if (this.tail.next = void 0, 1 >= r) return this;
                        t *= 2
                    }
                }
            }, {
                key: "reverse", value: function () {
                    for (var e = this.head, t = this.tail, n = (this._length >>> 1) + (1 & this._length); e && t && 0 < n;) {
                        var r = e.value;
                        e.value = t.value, t.value = r, e = e.next, t = t.prev, n--
                    }
                    return this
                }
            }, {
                key: "asHead", value: function (e) {
                    return e === this.head || (this.remove(e), this.head.prev = e, e.next = this.head, e.prev = void 0, this.head = e, this._length++), this
                }
            }, {
                key: "asTail", value: function (e) {
                    return e === this.tail || (this.remove(e), this.tail.next = e, e.prev = this.tail, e.next = void 0, this.tail = e, this._length++), this
                }
            }, {
                key: "toString", value: function () {
                    for (var e = [], t = this.head; t;) e.push(String(t.value)), t = t.next;
                    return e.join(", ")
                }
            }, {
                key: "toJSON", value: function () {
                    return I(this)
                }
            }, {
                key: "nthCellUnsafe", value: function (e) {
                    if (e <= this._length >> 1) var t = this.head,
                        n = "next"; else t = this.tail, n = "prev", e = this._length - e - 1;
                    for (; 0 < e-- && t;) t = t[n];
                    return t
                }
            }]), e
        }(), tc = function () {
            function e(t, n) {
                X(this, e), n = Object.assign({
                    maxlen: 1 / 0, maxsize: 1 / 0, map: function () {
                        return new Map
                    }, ksize: function () {
                        return 0
                    }, vsize: function () {
                        return 0
                    }
                }, n), this.map = n.map(), this.items = new Px, this._size = 0, this.opts = n, t && this.into(t)
            }

            return Ha(e, [{
                key: "length", get: function () {
                    return this.items.length
                }
            }, {
                key: "size", get: function () {
                    return this._size
                }
            }, {
                key: Symbol.iterator, value: function () {
                    return this.entries()
                }
            }, {
                key: "entries", value: function () {
                    return pg((function (e) {
                        return [e.k, e]
                    }), this.items)
                }
            }, {
                key: "keys", value: function () {
                    return pg((function (e) {
                        return e.k
                    }), this.items)
                }
            }, {
                key: "values", value: function () {
                    return pg((function (e) {
                        return e.v
                    }), this.items)
                }
            }, {
                key: "copy", value: function () {
                    var e = this.empty();
                    e.items = this.items.copy();
                    for (var t = e.items.head; t;) e.map.set(t.value.k, t), t = t.next;
                    return e
                }
            }, {
                key: "empty", value: function () {
                    return new e(null, this.opts)
                }
            }, {
                key: "release", value: function () {
                    this._size = 0, this.map.clear();
                    var e = this.opts.release;
                    if (e) {
                        for (var t; t = this.items.drop();) e(t.k, t.v);
                        return !0
                    }
                    return this.items.release()
                }
            }, {
                key: "has", value: function (e) {
                    return this.map.has(e)
                }
            }, {
                key: "get", value: function (e, t) {
                    return (e = this.map.get(e)) ? this.resetEntry(e) : t
                }
            }, {
                key: "set", value: function (e, t) {
                    var n = this.opts.ksize(e) + this.opts.vsize(t), r = this.map.get(e);
                    return this._size += Math.max(0, n - (r ? r.value.s : 0)), this.ensureSize() && this.doSetEntry(r, e, t, n), t
                }
            }, {
                key: "into", value: function (e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                    return this
                }
            }, {
                key: "getSet", value: function (e, t) {
                    var n = this, r = this.map.get(e);
                    return r ? Promise.resolve(this.resetEntry(r)) : t().then((function (t) {
                        return n.set(e, t)
                    }))
                }
            }, {
                key: "delete", value: function (e) {
                    return !!(e = this.map.get(e)) && (this.removeEntry(e), !0)
                }
            }, {
                key: "resetEntry", value: function (e) {
                    return this.items.asTail(e), e.value.v
                }
            }, {
                key: "ensureSize", value: function () {
                    for (var e = this.opts.release, t = this.opts.maxsize, n = this.opts.maxlen; this._size > t || this.length >= n;) {
                        var r = this.items.drop();
                        if (!r) return !1;
                        this.map.delete(r.k), e && e(r.k, r.v), this._size -= r.s
                    }
                    return !0
                }
            }, {
                key: "removeEntry", value: function (e) {
                    var t = e.value;
                    this.map.delete(t.k), this.items.remove(e), this.opts.release && this.opts.release(t.k, t.v), this._size -= t.s
                }
            }, {
                key: "doSetEntry", value: function (e, t, n, r) {
                    e ? (e.value.v = n, e.value.s = r, this.items.asTail(e)) : (this.items.push({
                        k: t,
                        v: n,
                        s: r
                    }), this.map.set(t, this.items.tail))
                }
            }]), e
        }(), Qx = function (e) {
            function t(e, r) {
                return X(this, t), r = Object.assign({ttl: 36e5}, r), n.call(this, e, r)
            }

            la(t, e);
            var n = ma(t);
            return Ha(t, [{
                key: "empty", value: function () {
                    return new t(null, this.opts)
                }
            }, {
                key: "has", value: function (e) {
                    return void 0 !== this.get(e)
                }
            }, {
                key: "get", value: function (e, t) {
                    if (e = this.map.get(e)) {
                        if (e.value.t >= Date.now()) return this.resetEntry(e);
                        this.removeEntry(e)
                    }
                    return t
                }
            }, {
                key: "set", value: function (e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.opts.ttl,
                        r = this.opts.ksize(e) + this.opts.vsize(t), i = this.map.get(e);
                    return this._size += Math.max(0, r - (i ? i.value.s : 0)), this.ensureSize() && (n = Date.now() + n, i ? (i.value.v = t, i.value.s = r, i.value.t = n, this.items.asTail(i)) : (this.items.push({
                        k: e,
                        v: t,
                        s: r,
                        t: n
                    }), this.map.set(e, this.items.tail))), t
                }
            }, {
                key: "getSet", value: function (e, t) {
                    var n = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.opts.ttl,
                        i = this.get(e);
                    return i ? Promise.resolve(i) : t().then((function (t) {
                        return n.set(e, t, r)
                    }))
                }
            }, {
                key: "prune", value: function () {
                    for (var e = Date.now(), t = this.items.head; t;) t.value.t < e && this.removeEntry(t), t = t.next
                }
            }, {
                key: "ensureSize", value: function () {
                    for (var e = this.opts.maxsize, n = this.opts.maxlen, r = Date.now(), i = this.items.head; i && (this._size > e || this.length >= n);) i.value.t < r && this.removeEntry(i), i = i.next;
                    return Sh(wd(t.prototype), "ensureSize", this).call(this)
                }
            }]), t
        }(tc), Rp = "object" == aa(Ya) && Ya && Ya.Object === Object && Ya,
        Rx = "object" == ("undefined" == typeof self ? "undefined" : aa(self)) && self && self.Object === Object && self,
        Cb = Rp || Rx || Function("return this")(), Pb = Cb.Symbol, Sp = Object.prototype, Sx = Sp.hasOwnProperty,
        Tx = Sp.toString, Yf = Pb ? Pb.toStringTag : void 0, Ux = Object.prototype.toString,
        Tp = Pb ? Pb.toStringTag : void 0, Qd = function (e) {
            if (null == e) e = void 0 === e ? "[object Undefined]" : "[object Null]"; else if (Tp && Tp in Object(e)) {
                var t = Sx.call(e, Yf), n = e[Yf];
                try {
                    e[Yf] = void 0;
                    var r = !0
                } catch (e) {
                }
                var i = Tx.call(e);
                r && (t ? e[Yf] = n : delete e[Yf]), e = i
            } else e = Ux.call(e);
            return e
        }, lb = function (e) {
            var t = aa(e);
            return null != e && ("object" == t || "function" == t)
        }, pi = function (e) {
            return !!lb(e) && ("[object Function]" == (e = Qd(e)) || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e)
        }, sk = Cb["__core-js_shared__"], Up = function () {
            var e = /[^.]+$/.exec(sk && sk.keys && sk.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }(), Vx = Function.prototype.toString, Rd = function (e) {
            if (null != e) {
                try {
                    return Vx.call(e)
                } catch (e) {
                }
                return e + ""
            }
            return ""
        }, Wx = /^\[object .+?Constructor\]$/,
        Xx = RegExp("^" + Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Sd = function (e, t) {
            return e = null == e ? void 0 : e[t], !lb(e) || Up && Up in e || !(pi(e) ? Xx : Wx).test(Rd(e)) ? void 0 : e
        }, Zf = Sd(Object, "create"), Yx = Object.prototype.hasOwnProperty, Zx = Object.prototype.hasOwnProperty;
    zd.prototype.clear = function () {
        this.__data__ = Zf ? Zf(null) : {}, this.size = 0
    }, zd.prototype.delete = function (e) {
        return e = this.has(e) && delete this.__data__[e], this.size -= e ? 1 : 0, e
    }, zd.prototype.get = function (e) {
        var t = this.__data__;
        return Zf ? "__lodash_hash_undefined__" === (e = t[e]) ? void 0 : e : Yx.call(t, e) ? t[e] : void 0
    }, zd.prototype.has = function (e) {
        var t = this.__data__;
        return Zf ? void 0 !== t[e] : Zx.call(t, e)
    }, zd.prototype.set = function (e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = Zf && void 0 === t ? "__lodash_hash_undefined__" : t, this
    };
    var $f = function (e, t) {
        return e === t || e != e && t != t
    }, vh = function (e, t) {
        for (var n = e.length; n--;) if ($f(e[n][0], t)) return n;
        return -1
    }, $x = Array.prototype.splice;
    be.prototype.clear = function () {
        this.__data__ = [], this.size = 0
    }, be.prototype.delete = function (e) {
        var t = this.__data__;
        return !(0 > (e = vh(t, e))) && (e == t.length - 1 ? t.pop() : $x.call(t, e, 1), --this.size, !0)
    }, be.prototype.get = function (e) {
        var t = this.__data__;
        return 0 > (e = vh(t, e)) ? void 0 : t[e][1]
    }, be.prototype.has = function (e) {
        return -1 < vh(this.__data__, e)
    }, be.prototype.set = function (e, t) {
        var n = this.__data__, r = vh(n, e);
        return 0 > r ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    };
    var rg = be, ag = Sd(Cb, "Map"), wh = function (e, t) {
        e = e.__data__;
        var n = aa(t);
        return ("string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t) ? e["string" == typeof t ? "string" : "hash"] : e.map
    };
    ce.prototype.clear = function () {
        this.size = 0, this.__data__ = {hash: new zd, map: new (ag || rg), string: new zd}
    }, ce.prototype.delete = function (e) {
        return e = wh(this, e).delete(e), this.size -= e ? 1 : 0, e
    }, ce.prototype.get = function (e) {
        return wh(this, e).get(e)
    }, ce.prototype.has = function (e) {
        return wh(this, e).has(e)
    }, ce.prototype.set = function (e, t) {
        var n = wh(this, e), r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    };
    var qg = ce;
    gf.prototype.add = gf.prototype.push = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this
    }, gf.prototype.has = function (e) {
        return this.__data__.has(e)
    };
    var Vp = function (e, t, n, r) {
        var i = e.length;
        for (n += r ? 1 : -1; r ? n-- : ++n < i;) if (t(e[n], n, e)) return n;
        return -1
    }, ay = function (e) {
        return e != e
    }, by = function (e, t) {
        var n;
        if (n = !(null == e || !e.length)) {
            if (t == t) e:{
                n = -1;
                for (var r = e.length; ++n < r;) if (e[n] === t) {
                    e = n;
                    break e
                }
                e = -1
            } else e = Vp(e, ay, 0);
            n = -1 < e
        }
        return n
    }, cy = function (e, t, n) {
        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
        return !1
    }, dy = function (e, t) {
        return e.has(t)
    }, Qe = Sd(Cb, "Set"), ey = function () {
    }, tk = function (e) {
        var t = -1, n = Array(e.size);
        return e.forEach((function (e) {
            n[++t] = e
        })), n
    }, fy = 1 / 0, gy = Qe && 1 / tk(new Qe([, -0]))[1] == fy ? function (e) {
        return new Qe(e)
    } : ey, uk = function (e, t, n) {
        var r = -1, i = by, o = e.length, s = !0, a = [], u = a;
        if (n) s = !1, i = cy; else if (200 <= o) {
            if (i = t ? null : gy(e)) return tk(i);
            s = !1, i = dy, u = new gf
        } else u = t ? [] : a;
        e:for (; ++r < o;) {
            var c = e[r], l = t ? t(c) : c;
            if (c = n || 0 !== c ? c : 0, s && l == l) {
                for (var f = u.length; f--;) if (u[f] === l) continue e;
                t && u.push(l), a.push(c)
            } else i(u, l, n) || (u !== a && u.push(l), a.push(c))
        }
        return a
    }, Wp = function (e) {
        for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
            var i = e[t];
            r[i[0]] = i[1]
        }
        return r
    }, ge = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
        return i
    };
    de.prototype.clear = function () {
        this.__data__ = new rg, this.size = 0
    }, de.prototype.delete = function (e) {
        var t = this.__data__;
        return e = t.delete(e), this.size = t.size, e
    }, de.prototype.get = function (e) {
        return this.__data__.get(e)
    }, de.prototype.has = function (e) {
        return this.__data__.has(e)
    }, de.prototype.set = function (e, t) {
        var n = this.__data__;
        if (n instanceof rg) {
            var r = n.__data__;
            if (!ag || 199 > r.length) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new qg(r)
        }
        return n.set(e, t), this.size = n.size, this
    };
    var fe = de, Fs = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e);) ;
        return e
    }, xh = function () {
        try {
            var e = Sd(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {
        }
    }(), bg = function (e, t, n) {
        "__proto__" == t && xh ? xh(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0}) : e[t] = n
    }, hy = Object.prototype.hasOwnProperty, Ll = function (e, t, n) {
        var r = e[t];
        hy.call(e, t) && $f(r, n) && (void 0 !== n || t in e) || bg(e, t, n)
    }, qe = function (e, t, n, r) {
        var i = !n;
        n || (n = {});
        for (var o = -1, s = t.length; ++o < s;) {
            var a = t[o], u = r ? r(n[a], e[a], a, n, e) : void 0;
            void 0 === u && (u = e[a]), i ? bg(n, a, u) : Ll(n, a, u)
        }
        return n
    }, gc = function (e) {
        return null != e && "object" == aa(e)
    }, Xp = function (e) {
        return gc(e) && "[object Arguments]" == Qd(e)
    }, Yp = Object.prototype, iy = Yp.hasOwnProperty, jy = Yp.propertyIsEnumerable, rf = Xp(function () {
        return arguments
    }()) ? Xp : function (e) {
        return gc(e) && iy.call(e, "callee") && !jy.call(e, "callee")
    }, Va = Array.isArray, ky = function () {
        return !1
    }, jf = $a((function (e, t) {
        var n = (t = t && !t.nodeType && t) && e && !e.nodeType && e;
        t = n && n.exports === t ? Cb.Buffer : void 0, e.exports = (t ? t.isBuffer : void 0) || ky
    })), ly = /^(?:0|[1-9]\d*)$/, vk = function (e, t) {
        var n = aa(e);
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && ly.test(e)) && -1 < e && 0 == e % 1 && e < t
    }, wk = function (e) {
        return "number" == typeof e && -1 < e && 0 == e % 1 && 9007199254740991 >= e
    }, Ea = {};
    Ea["[object Float32Array]"] = Ea["[object Float64Array]"] = Ea["[object Int8Array]"] = Ea["[object Int16Array]"] = Ea["[object Int32Array]"] = Ea["[object Uint8Array]"] = Ea["[object Uint8ClampedArray]"] = Ea["[object Uint16Array]"] = Ea["[object Uint32Array]"] = !0, Ea["[object Arguments]"] = Ea["[object Array]"] = Ea["[object ArrayBuffer]"] = Ea["[object Boolean]"] = Ea["[object DataView]"] = Ea["[object Date]"] = Ea["[object Error]"] = Ea["[object Function]"] = Ea["[object Map]"] = Ea["[object Number]"] = Ea["[object Object]"] = Ea["[object RegExp]"] = Ea["[object Set]"] = Ea["[object String]"] = Ea["[object WeakMap]"] = !1;
    var my = function (e) {
            return gc(e) && wk(e.length) && !!Ea[Qd(e)]
        }, yh = function (e) {
            return function (t) {
                return e(t)
            }
        }, Re = $a((function (e, t) {
            var n = t && !t.nodeType && t;
            n = (t = n && e && !e.nodeType && e) && t.exports === n && Rp.process;
            e:{
                try {
                    var r = t && t.require && t.require("util").types;
                    if (r) {
                        var i = r;
                        break e
                    }
                    i = n && n.binding && n.binding("util");
                    break e
                } catch (e) {
                }
                i = void 0
            }
            e.exports = i
        })), Zp = Re && Re.isTypedArray, ai = Zp ? yh(Zp) : my, ny = Object.prototype.hasOwnProperty, $p = function (e, t) {
            var n = Va(e), r = !n && rf(e), i = !n && !r && jf(e), o = !n && !r && !i && ai(e);
            if (n = n || r || i || o) {
                r = e.length;
                for (var s = String, a = -1, u = Array(r); ++a < r;) u[a] = s(a);
                r = u
            } else r = [];
            for (var c in s = r.length, e) !t && !ny.call(e, c) || n && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || vk(c, s)) || r.push(c);
            return r
        }, oy = Object.prototype, xk = function (e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || oy)
        }, aq = function (e, t) {
            return function (n) {
                return e(t(n))
            }
        }, py = aq(Object.keys, Object), qy = Object.prototype.hasOwnProperty, Ed = function (e) {
            return null != e && wk(e.length) && !pi(e)
        }, Ad = function (e) {
            if (Ed(e)) e = $p(e); else if (xk(e)) {
                var t, n = [];
                for (t in Object(e)) qy.call(e, t) && "constructor" != t && n.push(t);
                e = n
            } else e = py(e);
            return e
        }, Bs = function (e, t) {
            return e && qe(t, Ad(t), e)
        }, ry = Object.prototype.hasOwnProperty, kf = function (e) {
            if (Ed(e)) e = $p(e, !0); else if (lb(e)) {
                var t = xk(e), n = [];
                for (r in e) ("constructor" != r || !t && ry.call(e, r)) && n.push(r);
                e = n
            } else {
                var r = [];
                if (null != e) for (t in Object(e)) r.push(t);
                e = r
            }
            return e
        }, zs = function (e, t) {
            return e && qe(t, kf(t), e)
        }, Il = $a((function (e, t) {
            var n = (t = t && !t.nodeType && t) && e && !e.nodeType && e,
                r = (t = n && n.exports === t ? Cb.Buffer : void 0) ? t.allocUnsafe : void 0;
            e.exports = function (e, t) {
                return t ? e.slice() : (t = e.length, t = r ? r(t) : new e.constructor(t), e.copy(t), t)
            }
        })), Wh = function (e, t) {
            var n = -1, r = e.length;
            for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
            return t
        }, sy = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
                var s = e[n];
                t(s, n, e) && (o[i++] = s)
            }
            return o
        }, bq = function () {
            return []
        }, ty = Object.prototype.propertyIsEnumerable, cq = Object.getOwnPropertySymbols, yk = cq ? function (e) {
            return null == e ? [] : (e = Object(e), sy(cq(e), (function (t) {
                return ty.call(e, t)
            })))
        } : bq, As = function (e, t) {
            return qe(e, yk(e), t)
        }, $h = function (e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
            return e
        }, zk = aq(Object.getPrototypeOf, Object), dq = Object.getOwnPropertySymbols ? function (e) {
            for (var t = []; e;) $h(t, yk(e)), e = zk(e);
            return t
        } : bq, ys = function (e, t) {
            return qe(e, dq(e), t)
        }, eq = function (e, t, n) {
            return t = t(e), Va(e) ? t : $h(t, n(e))
        }, Xh = function (e) {
            return eq(e, Ad, yk)
        }, Kl = function (e) {
            return eq(e, kf, dq)
        }, Ak = Sd(Cb, "DataView"), Bk = Sd(Cb, "Promise"), Ck = Sd(Cb, "WeakMap"), uy = Rd(Ak), vy = Rd(ag), wy = Rd(Bk),
        xy = Rd(Qe), yy = Rd(Ck), Td = Qd;
    (Ak && "[object DataView]" != Td(new Ak(new ArrayBuffer(1))) || ag && "[object Map]" != Td(new ag) || Bk && "[object Promise]" != Td(Bk.resolve()) || Qe && "[object Set]" != Td(new Qe) || Ck && "[object WeakMap]" != Td(new Ck)) && (Td = function (e) {
        var t = Qd(e);
        if (e = (e = "[object Object]" == t ? e.constructor : void 0) ? Rd(e) : "") switch (e) {
            case uy:
                return "[object DataView]";
            case vy:
                return "[object Map]";
            case wy:
                return "[object Promise]";
            case xy:
                return "[object Set]";
            case yy:
                return "[object WeakMap]"
        }
        return t
    });
    var hf = Td, zy = Object.prototype.hasOwnProperty, xs = function (e) {
        var t = e.length, n = new e.constructor(t);
        return t && "string" == typeof e[0] && zy.call(e, "index") && (n.index = e.index, n.input = e.input), n
    }, zh = Cb.Uint8Array, Dk = function (e) {
        var t = new e.constructor(e.byteLength);
        return new zh(t).set(new zh(e)), t
    }, Ay = /\w*$/, fq = Pb ? Pb.prototype : void 0, gq = fq ? fq.valueOf : void 0, um = function (e, t) {
        return t = t ? Dk(e.buffer) : e.buffer, new e.constructor(t, e.byteOffset, e.length)
    }, Cs = function (e, t, n) {
        var r = e.constructor;
        switch (t) {
            case"[object ArrayBuffer]":
                return Dk(e);
            case"[object Boolean]":
            case"[object Date]":
                return new r(+e);
            case"[object DataView]":
                return t = n ? Dk(e.buffer) : e.buffer, new e.constructor(t, e.byteOffset, e.byteLength);
            case"[object Float32Array]":
            case"[object Float64Array]":
            case"[object Int8Array]":
            case"[object Int16Array]":
            case"[object Int32Array]":
            case"[object Uint8Array]":
            case"[object Uint8ClampedArray]":
            case"[object Uint16Array]":
            case"[object Uint32Array]":
                return um(e, n);
            case"[object Map]":
                return new r;
            case"[object Number]":
            case"[object String]":
                return new r(e);
            case"[object RegExp]":
                return (t = new e.constructor(e.source, Ay.exec(e))).lastIndex = e.lastIndex, t;
            case"[object Set]":
                return new r;
            case"[object Symbol]":
                return gq ? Object(gq.call(e)) : {}
        }
    }, hq = Object.create, By = function () {
        function e() {
        }

        return function (t) {
            return lb(t) ? hq ? hq(t) : (e.prototype = t, t = new e, e.prototype = void 0, t) : {}
        }
    }(), Jl = function (e) {
        return "function" != typeof e.constructor || xk(e) ? {} : By(zk(e))
    }, Cy = function (e) {
        return gc(e) && "[object Map]" == hf(e)
    }, iq = Re && Re.isMap, Es = iq ? yh(iq) : Cy, Dy = function (e) {
        return gc(e) && "[object Set]" == hf(e)
    }, jq = Re && Re.isSet, Ds = jq ? yh(jq) : Dy, wa = {};
    wa["[object Arguments]"] = wa["[object Array]"] = wa["[object ArrayBuffer]"] = wa["[object DataView]"] = wa["[object Boolean]"] = wa["[object Date]"] = wa["[object Float32Array]"] = wa["[object Float64Array]"] = wa["[object Int8Array]"] = wa["[object Int16Array]"] = wa["[object Int32Array]"] = wa["[object Map]"] = wa["[object Number]"] = wa["[object Object]"] = wa["[object RegExp]"] = wa["[object Set]"] = wa["[object String]"] = wa["[object Symbol]"] = wa["[object Uint8Array]"] = wa["[object Uint8ClampedArray]"] = wa["[object Uint16Array]"] = wa["[object Uint32Array]"] = !0, wa["[object Error]"] = wa["[object Function]"] = wa["[object WeakMap]"] = !1;
    var he = function (e) {
        return "symbol" == aa(e) || gc(e) && "[object Symbol]" == Qd(e)
    }, Ey = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Fy = /^\w*$/, Ek = function (e, t) {
        if (Va(e)) return !1;
        var n = aa(e);
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !he(e)) || (Fy.test(e) || !Ey.test(e) || null != t && e in Object(t))
    };
    Yh.Cache = qg;
    var Gy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Hy = /\\(\\)?/g, Iy = function (e) {
            var t = (e = Yh(e, (function (e) {
                return 500 === t.size && t.clear(), e
            }))).cache;
            return e
        }((function (e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""), e.replace(Gy, (function (e, n, r, i) {
                t.push(r ? i.replace(Hy, "$1") : n || e)
            })), t
        })), Gs = 1 / 0, kq = Pb ? Pb.prototype : void 0, Nl = kq ? kq.toString : void 0, Ah = function (e, t) {
            return Va(e) ? e : Ek(e, t) ? [e] : Iy(null == e ? "" : Ml(e))
        }, Jy = 1 / 0, cg = function (e) {
            if ("string" == typeof e || he(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -Jy ? "-0" : t
        }, Bh = function (e, t) {
            for (var n = 0, r = (t = Ah(t, e)).length; null != e && n < r;) e = e[cg(t[n++])];
            return n && n == r ? e : void 0
        }, Ky = function (e, t) {
            if (!(2 > (t = Ah(t, e)).length)) {
                var n = t, r = 0, i = -1, o = -1, s = n.length;
                for (0 > r && (r = -r > s ? 0 : s + r), 0 > (i = i > s ? s : i) && (i += s), s = r > i ? 0 : i - r >>> 0, r >>>= 0, i = Array(s); ++o < s;) i[o] = n[o + r];
                e = Bh(e, i)
            }
            return (n = null == e) || (n = null == t ? 0 : t.length, n = delete e[cg(n ? t[n - 1] : void 0)]), n
        }, lq = Function.prototype.toString, Ly = Object.prototype.hasOwnProperty, My = lq.call(Object), vm = function (e) {
            return !(!gc(e) || "[object Object]" != Qd(e)) && (null === (e = zk(e)) || "function" == typeof (e = Ly.call(e, "constructor") && e.constructor) && e instanceof e && lq.call(e) == My)
        }, Ny = function (e) {
            return vm(e) ? void 0 : e
        }, mq = Pb ? Pb.isConcatSpreadable : void 0, Hs = function (e) {
            return Va(e) || rf(e) || !!(mq && e && e[mq])
        }, Oy = function (e) {
            return null != e && e.length ? Zh(e, 1) : []
        }, Py = function (e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        }, nq = Math.max, oq = function (e, t, n) {
            return t = nq(void 0 === t ? e.length - 1 : t, 0), function () {
                for (var r = arguments, i = -1, o = nq(r.length - t, 0), s = Array(o); ++i < o;) s[i] = r[t + i];
                for (i = -1, o = Array(t + 1); ++i < t;) o[i] = r[i];
                return o[t] = n(s), Py(e, this, o)
            }
        }, Qy = function (e) {
            return function () {
                return e
            }
        }, Ch = function (e) {
            return e
        }, Ry = Date.now, pq = function (e) {
            var t = 0, n = 0;
            return function () {
                var r = Ry(), i = 16 - (r - n);
                if (n = r, 0 < i) {
                    if (800 <= ++t) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }(xh ? function (e, t) {
            return xh(e, "toString", {configurable: !0, enumerable: !1, value: Qy(t), writable: !0})
        } : Ch), Fk = function (e) {
            return pq(oq(e, void 0, Oy), e + "")
        }((function (e, t) {
            var n = {};
            if (null == e) return n;
            var r = !1;
            t = ge(t, (function (t) {
                return t = Ah(t, e), r || (r = 1 < t.length), t
            })), qe(e, Kl(e), n), r && (n = ee(n, 7, Ny));
            for (var i = t.length; i--;) Ky(n, t[i]);
            return n
        })), Sy = function (e, t, n, r) {
            for (var i = -1, o = null == e ? 0 : e.length; ++i < o;) {
                var s = e[i];
                t(r, s, n(s), e)
            }
            return r
        }, tm = function (e, t, n) {
            for (var r = -1, i = Object(e), o = (n = n(e)).length; o--;) {
                var s = n[++r];
                if (!1 === t(i[s], s, i)) break
            }
            return e
        }, qq = function (e, t) {
            return e && tm(e, t, Ad)
        }, Gk = function (e, t) {
            return function (t, n) {
                if (null == t) return t;
                if (!Ed(t)) return e(t, n);
                for (var r = t.length, i = -1, o = Object(t); ++i < r && !1 !== n(o[i], i, o);) ;
                return t
            }
        }(qq), Ty = function (e, t, n, r) {
            return Gk(e, (function (e, i, o) {
                t(r, e, n(e), o)
            })), r
        }, rq = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
            return !1
        }, Ol = function (e, t, n, r, i, o) {
            var s = 1 & n, a = e.length, u = t.length;
            if (a != u && !(s && u > a)) return !1;
            u = o.get(e);
            var c = o.get(t);
            if (u && c) return u == t && c == e;
            u = -1, c = !0;
            var l = 2 & n ? new gf : void 0;
            for (o.set(e, t), o.set(t, e); ++u < a;) {
                var f = e[u], h = t[u];
                if (r) var p = s ? r(h, f, u, t, e, o) : r(f, h, u, e, t, o);
                if (void 0 !== p) {
                    if (p) continue;
                    c = !1;
                    break
                }
                if (l) {
                    if (!rq(t, (function (e, t) {
                        if (!l.has(t) && (f === e || i(f, e, n, r, o))) return l.push(t)
                    }))) {
                        c = !1;
                        break
                    }
                } else if (f !== h && !i(f, h, n, r, o)) {
                    c = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), c
        }, Uy = function (e) {
            var t = -1, n = Array(e.size);
            return e.forEach((function (e, r) {
                n[++t] = [r, e]
            })), n
        }, sq = Pb ? Pb.prototype : void 0, Hk = sq ? sq.valueOf : void 0, Is = function (e, t, n, r, i, o, s) {
            switch (n) {
                case"[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                    e = e.buffer, t = t.buffer;
                case"[object ArrayBuffer]":
                    if (e.byteLength != t.byteLength || !o(new zh(e), new zh(t))) break;
                    return !0;
                case"[object Boolean]":
                case"[object Date]":
                case"[object Number]":
                    return $f(+e, +t);
                case"[object Error]":
                    return e.name == t.name && e.message == t.message;
                case"[object RegExp]":
                case"[object String]":
                    return e == t + "";
                case"[object Map]":
                    var a = Uy;
                case"[object Set]":
                    if (a || (a = tk), e.size != t.size && !(1 & r)) break;
                    return (n = s.get(e)) ? n == t : (r |= 2, s.set(e, t), t = Ol(a(e), a(t), r, i, o, s), s.delete(e), t);
                case"[object Symbol]":
                    if (Hk) return Hk.call(e) == Hk.call(t)
            }
            return !1
        }, Js = Object.prototype.hasOwnProperty, Pl = Object.prototype.hasOwnProperty, Vy = function (e, t, n, r) {
            var i = n.length, o = i, s = !r;
            if (null == e) return !o;
            for (e = Object(e); i--;) {
                var a = n[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
            }
            for (; ++i < o;) {
                var u = (a = n[i])[0], c = e[u], l = a[1];
                if (s && a[2]) {
                    if (void 0 === c && !(u in e)) return !1
                } else {
                    if (a = new fe, r) var f = r(c, l, u, e, t, a);
                    if (void 0 === f ? !ie(l, c, 3, r, a) : !f) return !1
                }
            }
            return !0
        }, Wy = function (e) {
            for (var t = Ad(e), n = t.length; n--;) {
                var r = t[n], i = e[r];
                t[n] = [r, i, i == i && !lb(i)]
            }
            return t
        }, tq = function (e, t) {
            return function (n) {
                return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
            }
        }, Xy = function (e) {
            var t = Wy(e);
            return 1 == t.length && t[0][2] ? tq(t[0][0], t[0][1]) : function (n) {
                return n === e || Vy(n, e, t)
            }
        }, Yy = function (e, t) {
            return Ek(e) && t == t && !lb(t) ? tq(cg(e), t) : function (n) {
                var r = null == n ? void 0 : Bh(n, e);
                if (void 0 === (r = void 0 === r ? void 0 : r) && r === t) {
                    if (r = null != n) {
                        for (var i = -1, o = (r = Ah(r = e, n)).length, s = !1; ++i < o;) {
                            var a = cg(r[i]);
                            if (!(s = null != n && null != n && a in Object(n))) break;
                            n = n[a]
                        }
                        s || ++i != o ? r = s : r = !!(o = null == n ? 0 : n.length) && wk(o) && vk(a, o) && (Va(n) || rf(n))
                    }
                    a = r
                } else a = ie(t, r, 3);
                return a
            }
        }, Zy = function (e) {
            return function (t) {
                return null == t ? void 0 : t[e]
            }
        }, $y = function (e) {
            return function (t) {
                return Bh(t, e)
            }
        }, Se = function (e) {
            return "function" == typeof e ? e : null == e ? Ch : "object" == aa(e) ? Va(e) ? Yy(e[0], e[1]) : Xy(e) : Ek(e) ? Zy(cg(e)) : $y(e)
        }, Ik = function (e, t) {
            return function (t, n) {
                var r = {};
                return (Va(t) ? Sy : Ty)(t, e, Se(n), r)
            }
        }((function (e, t, n) {
            bg(e, n, t)
        })), uc = function (e, t) {
            var n = {};
            return t = Se(t), qq(e, (function (e, r, i) {
                bg(n, r, t(e, r, i))
            })), n
        };
    P({
        target: "String", proto: !0, forced: R((function () {
            var e = "".sub('"');
            return e !== e.toLowerCase() || 3 < e.split('"').length
        }))
    }, {
        sub: function () {
            return "<sub>" + String(jb(this)) + "</sub>"
        }
    });
    var U = xa, Qb = null;
    try {
        Qb = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports
    } catch (c) {
    }
    xa.prototype.__isLong__, Object.defineProperty(xa.prototype, "__isLong__", {value: !0}), xa.isLong = mb;
    var Rl = {}, Ql = {};
    xa.fromInt = Bd, xa.fromNumber = Gb, xa.fromBits = ya;
    var sg = Math.pow;
    xa.fromString = bi, xa.fromValue = Wb;
    var je = 4294967296, Sl = je * je, Ul = Sl / 2, uq = Bd(16777216), Hb = Bd(0);
    xa.ZERO = Hb;
    var Cd = Bd(0, !0);
    xa.UZERO = Cd;
    var Te = Bd(1);
    xa.ONE = Te;
    var vq = Bd(1, !0);
    xa.UONE = vq;
    var Jk = Bd(-1);
    xa.NEG_ONE = Jk;
    var Vl = ya(-1, 2147483647, !1);
    xa.MAX_VALUE = Vl;
    var Tl = ya(-1, -1, !0);
    xa.MAX_UNSIGNED_VALUE = Tl;
    var nb = ya(0, -2147483648, !1);
    xa.MIN_VALUE = nb;
    var G = xa.prototype;
    G.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low
    }, G.toNumber = function () {
        return this.unsigned ? (this.high >>> 0) * je + (this.low >>> 0) : this.high * je + (this.low >>> 0)
    }, G.toString = function (e) {
        if (2 > (e = e || 10) || 36 < e) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
            if (this.eq(nb)) {
                var t = Gb(e), n = this.div(t);
                return t = n.mul(t).sub(this), n.toString(e) + t.toInt().toString(e)
            }
            return "-" + this.neg().toString(e)
        }
        n = Gb(sg(e, 6), this.unsigned), t = this;
        for (var r = ""; ;) {
            var i = t.div(n), o = (t.sub(i.mul(n)).toInt() >>> 0).toString(e);
            if ((t = i).isZero()) return o + r;
            for (; 6 > o.length;) o = "0" + o;
            r = "" + o + r
        }
    }, G.getHighBits = function () {
        return this.high
    }, G.getHighBitsUnsigned = function () {
        return this.high >>> 0
    }, G.getLowBits = function () {
        return this.low
    }, G.getLowBitsUnsigned = function () {
        return this.low >>> 0
    }, G.getNumBitsAbs = function () {
        if (this.isNegative()) return this.eq(nb) ? 64 : this.neg().getNumBitsAbs();
        for (var e = 0 != this.high ? this.high : this.low, t = 31; 0 < t && 0 == (e & 1 << t); t--) ;
        return 0 != this.high ? t + 33 : t + 1
    }, G.isZero = function () {
        return 0 === this.high && 0 === this.low
    }, G.eqz = G.isZero, G.isNegative = function () {
        return !this.unsigned && 0 > this.high
    }, G.isPositive = function () {
        return this.unsigned || 0 <= this.high
    }, G.isOdd = function () {
        return 1 == (1 & this.low)
    }, G.isEven = function () {
        return 0 == (1 & this.low)
    }, G.equals = function (e) {
        return mb(e) || (e = Wb(e)), (this.unsigned === e.unsigned || 1 != this.high >>> 31 || 1 != e.high >>> 31) && (this.high === e.high && this.low === e.low)
    }, G.eq = G.equals, G.notEquals = function (e) {
        return !this.eq(e)
    }, G.neq = G.notEquals, G.ne = G.notEquals, G.lessThan = function (e) {
        return 0 > this.comp(e)
    }, G.lt = G.lessThan, G.lessThanOrEqual = function (e) {
        return 0 >= this.comp(e)
    }, G.lte = G.lessThanOrEqual, G.le = G.lessThanOrEqual, G.greaterThan = function (e) {
        return 0 < this.comp(e)
    }, G.gt = G.greaterThan, G.greaterThanOrEqual = function (e) {
        return 0 <= this.comp(e)
    }, G.gte = G.greaterThanOrEqual, G.ge = G.greaterThanOrEqual, G.compare = function (e) {
        if (mb(e) || (e = Wb(e)), this.eq(e)) return 0;
        var t = this.isNegative(), n = e.isNegative();
        return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
    }, G.comp = G.compare, G.negate = function () {
        return !this.unsigned && this.eq(nb) ? nb : this.not().add(Te)
    }, G.neg = G.negate, G.add = function (e) {
        mb(e) || (e = Wb(e));
        var t = this.high >>> 16, n = 65535 & this.high, r = this.low >>> 16, i = e.high >>> 16, o = 65535 & e.high,
            s = e.low >>> 16;
        return r = (s = ((e = (65535 & this.low) + (65535 & e.low)) >>> 16) + (r + s)) >>> 16, ya((65535 & s) << 16 | 65535 & e, (t = ((r += n + o) >>> 16) + (t + i) & 65535) << 16 | 65535 & r, this.unsigned)
    }, G.subtract = function (e) {
        return mb(e) || (e = Wb(e)), this.add(e.neg())
    }, G.sub = G.subtract, G.multiply = function (e) {
        if (this.isZero()) return Hb;
        if (mb(e) || (e = Wb(e)), Qb) {
            var t = Qb.mul(this.low, this.high, e.low, e.high);
            return ya(t, Qb.get_high(), this.unsigned)
        }
        if (e.isZero()) return Hb;
        if (this.eq(nb)) return e.isOdd() ? nb : Hb;
        if (e.eq(nb)) return this.isOdd() ? nb : Hb;
        if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        if (e.isNegative()) return this.mul(e.neg()).neg();
        if (this.lt(uq) && e.lt(uq)) return Gb(this.toNumber() * e.toNumber(), this.unsigned);
        t = this.high >>> 16;
        var n = 65535 & this.high, r = this.low >>> 16, i = 65535 & this.low, o = e.high >>> 16, s = 65535 & e.high,
            a = e.low >>> 16, u = i * (e = 65535 & e.low), c = (u >>> 16) + r * e, l = c >>> 16;
        l += (c = (65535 & c) + i * a) >>> 16;
        var f = (l += n * e) >>> 16;
        return ya((65535 & c) << 16 | 65535 & u, (f = (f += (l = (65535 & l) + r * a) >>> 16) + ((l = (65535 & l) + i * s) >>> 16) + (t * e + n * a + r * s + i * o) & 65535) << 16 | 65535 & l, this.unsigned)
    }, G.mul = G.multiply, G.divide = function (e) {
        if (mb(e) || (e = Wb(e)), e.isZero()) throw Error("division by zero");
        if (Qb) return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? ya(e = (this.unsigned ? Qb.div_u : Qb.div_s)(this.low, this.high, e.low, e.high), Qb.get_high(), this.unsigned) : this;
        if (this.isZero()) return this.unsigned ? Cd : Hb;
        if (this.unsigned) {
            if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return Cd;
            if (e.gt(this.shru(1))) return vq;
            var t = Cd
        } else {
            if (this.eq(nb)) {
                if (e.eq(Te) || e.eq(Jk)) return nb;
                if (e.eq(nb)) return Te;
                var n = this.shr(1).div(e).shl(1);
                if (n.eq(Hb)) return e.isNegative() ? Te : Jk;
                var r = this.sub(e.mul(n));
                return n.add(r.div(e))
            }
            if (e.eq(nb)) return this.unsigned ? Cd : Hb;
            if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
            if (e.isNegative()) return this.div(e.neg()).neg();
            t = Hb
        }
        for (r = this; r.gte(e);) {
            n = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
            var i = Math.ceil(Math.log(n) / Math.LN2);
            i = 48 >= i ? 1 : sg(2, i - 48);
            for (var o = Gb(n), s = o.mul(e); s.isNegative() || s.gt(r);) s = (o = Gb(n -= i, this.unsigned)).mul(e);
            o.isZero() && (o = Te), t = t.add(o), r = r.sub(s)
        }
        return t
    }, G.div = G.divide, G.modulo = function (e) {
        return mb(e) || (e = Wb(e)), Qb ? ya(e = (this.unsigned ? Qb.rem_u : Qb.rem_s)(this.low, this.high, e.low, e.high), Qb.get_high(), this.unsigned) : this.sub(this.div(e).mul(e))
    }, G.mod = G.modulo, G.rem = G.modulo, G.not = function () {
        return ya(~this.low, ~this.high, this.unsigned)
    }, G.and = function (e) {
        return mb(e) || (e = Wb(e)), ya(this.low & e.low, this.high & e.high, this.unsigned)
    }, G.or = function (e) {
        return mb(e) || (e = Wb(e)), ya(this.low | e.low, this.high | e.high, this.unsigned)
    }, G.xor = function (e) {
        return mb(e) || (e = Wb(e)), ya(this.low ^ e.low, this.high ^ e.high, this.unsigned)
    }, G.shiftLeft = function (e) {
        return mb(e) && (e = e.toInt()), 0 == (e &= 63) ? this : 32 > e ? ya(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : ya(0, this.low << e - 32, this.unsigned)
    }, G.shl = G.shiftLeft, G.shiftRight = function (e) {
        return mb(e) && (e = e.toInt()), 0 == (e &= 63) ? this : 32 > e ? ya(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : ya(this.high >> e - 32, 0 <= this.high ? 0 : -1, this.unsigned)
    }, G.shr = G.shiftRight, G.shiftRightUnsigned = function (e) {
        if (mb(e) && (e = e.toInt()), 0 === (e &= 63)) return this;
        var t = this.high;
        return 32 > e ? ya(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : ya(32 === e ? t : t >>> e - 32, 0, this.unsigned)
    }, G.shru = G.shiftRightUnsigned, G.shr_u = G.shiftRightUnsigned, G.toSigned = function () {
        return this.unsigned ? ya(this.low, this.high, !1) : this
    }, G.toUnsigned = function () {
        return this.unsigned ? this : ya(this.low, this.high, !0)
    }, G.toBytes = function (e) {
        return e ? this.toBytesLE() : this.toBytesBE()
    }, G.toBytesLE = function () {
        var e = this.high, t = this.low;
        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24]
    }, G.toBytesBE = function () {
        var e = this.high, t = this.low;
        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
    }, xa.fromBytes = function (e, t, n) {
        return n ? xa.fromBytesLE(e, t) : xa.fromBytesBE(e, t)
    }, xa.fromBytesLE = function (e, t) {
        return new xa(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t)
    }, xa.fromBytesBE = function (e, t) {
        return new xa(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t)
    };
    var ci = function (e, t) {
            return (ci = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }, Kk = !1, Ib = {
            Promise: void 0, set useDeprecatedSynchronousErrorHandling(e) {
                e ? console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + Error().stack) : Kk && console.log("RxJS: Back to a better error behavior. Thank you. <3"), Kk = e
            }, get useDeprecatedSynchronousErrorHandling() {
                return Kk
            }
        }, Dh = {
            closed: !0, next: function (e) {
            }, error: function (e) {
                if (Ib.useDeprecatedSynchronousErrorHandling) throw e;
                le(e)
            }, complete: function () {
            }
        }, Jb = Array.isArray || function (e) {
            return e && "number" == typeof e.length
        }, lf = function () {
            function e(e) {
                return Error.call(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map((function (e, t) {
                    return t + 1 + ") " + e.toString()
                })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e, this
            }

            return e.prototype = Object.create(Error.prototype), e
        }(), Na = function () {
            function e(e) {
                this.closed = !1, this._subscriptions = this._parentOrParents = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e)
            }

            return e.prototype.unsubscribe = function () {
                if (!this.closed) {
                    var t = this._parentOrParents, n = this._ctorUnsubscribe, r = this._unsubscribe,
                        i = this._subscriptions;
                    if (this.closed = !0, this._subscriptions = this._parentOrParents = null, t instanceof e) t.remove(this); else if (null !== t) for (var o = 0; o < t.length; ++o) t[o].remove(this);
                    if (ke(r)) {
                        n && (this._unsubscribe = void 0);
                        try {
                            r.call(this)
                        } catch (e) {
                            var s = e instanceof lf ? Wl(e.errors) : [e]
                        }
                    }
                    if (Jb(i)) for (o = -1, t = i.length; ++o < t;) if (di(n = i[o])) try {
                        n.unsubscribe()
                    } catch (e) {
                        s = s || [], e instanceof lf ? s = s.concat(Wl(e.errors)) : s.push(e)
                    }
                    if (s) throw new lf(s)
                }
            }, e.prototype.add = function (t) {
                var n = t;
                if (!t) return e.EMPTY;
                switch (aa(t)) {
                    case"function":
                        n = new e(t);
                    case"object":
                        if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        n instanceof e || (t = n, (n = new e)._subscriptions = [t]);
                        break;
                    default:
                        throw Error("unrecognized teardown " + t + " added to Subscription.")
                }
                if (null === (t = n._parentOrParents)) n._parentOrParents = this; else if (t instanceof e) {
                    if (t === this) return n;
                    n._parentOrParents = [t, this]
                } else {
                    if (-1 !== t.indexOf(this)) return n;
                    t.push(this)
                }
                return null === (t = this._subscriptions) ? this._subscriptions = [n] : t.push(n), n
            }, e.prototype.remove = function (e) {
                var t = this._subscriptions;
                t && (-1 !== (e = t.indexOf(e)) && t.splice(e, 1))
            }, e.EMPTY = function (e) {
                return e.closed = !0, e
            }(new e), e
        }(), Eh = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
        ia = function (e) {
            function t(n, r, i) {
                var o = e.call(this) || this;
                switch (o.syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
                    case 0:
                        o.destination = Dh;
                        break;
                    case 1:
                        if (!n) {
                            o.destination = Dh;
                            break
                        }
                        if ("object" === aa(n)) {
                            n instanceof t ? (o.syncErrorThrowable = n.syncErrorThrowable, o.destination = n, n.add(o)) : (o.syncErrorThrowable = !0, o.destination = new wq(o, n));
                            break
                        }
                    default:
                        o.syncErrorThrowable = !0, o.destination = new wq(o, n, r, i)
                }
                return o
            }

            return O(t, e), t.prototype[Eh] = function () {
                return this
            }, t.create = function (e, n, r) {
                return (e = new t(e, n, r)).syncErrorThrowable = !1, e
            }, t.prototype.next = function (e) {
                this.isStopped || this._next(e)
            }, t.prototype.error = function (e) {
                this.isStopped || (this.isStopped = !0, this._error(e))
            }, t.prototype.complete = function () {
                this.isStopped || (this.isStopped = !0, this._complete())
            }, t.prototype.unsubscribe = function () {
                this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
            }, t.prototype._next = function (e) {
                this.destination.next(e)
            }, t.prototype._error = function (e) {
                this.destination.error(e), this.unsubscribe()
            }, t.prototype._complete = function () {
                this.destination.complete(), this.unsubscribe()
            }, t.prototype._unsubscribeAndRecycle = function () {
                var e = this._parentOrParents;
                return this._parentOrParents = null, this.unsubscribe(), this.isStopped = this.closed = !1, this._parentOrParents = e, this
            }, t
        }(Na), wq = function (e) {
            function t(t, n, r, i) {
                var o = e.call(this) || this;
                if (o._parentSubscriber = t, t = o, ke(n)) var s = n; else n && (s = n.next, r = n.error, i = n.complete, n !== Dh && (ke((t = Object.create(n)).unsubscribe) && o.add(t.unsubscribe.bind(t)), t.unsubscribe = o.unsubscribe.bind(o)));
                return o._context = t, o._next = s, o._error = r, o._complete = i, o
            }

            return O(t, e), t.prototype.next = function (e) {
                if (!this.isStopped && this._next) {
                    var t = this._parentSubscriber;
                    Ib.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                }
            }, t.prototype.error = function (e) {
                if (!this.isStopped) {
                    var t = this._parentSubscriber, n = Ib.useDeprecatedSynchronousErrorHandling;
                    if (this._error) n && t.syncErrorThrowable ? this.__tryOrSetError(t, this._error, e) : this.__tryOrUnsub(this._error, e), this.unsubscribe(); else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : le(e), this.unsubscribe(); else {
                        if (this.unsubscribe(), n) throw e;
                        le(e)
                    }
                }
            }, t.prototype.complete = function () {
                var e = this;
                if (!this.isStopped) {
                    var t = this._parentSubscriber;
                    if (this._complete) {
                        var n = function () {
                            return e._complete.call(e._context)
                        };
                        Ib.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, n) : this.__tryOrUnsub(n)
                    }
                    this.unsubscribe()
                }
            }, t.prototype.__tryOrUnsub = function (e, t) {
                try {
                    e.call(this._context, t)
                } catch (e) {
                    if (this.unsubscribe(), Ib.useDeprecatedSynchronousErrorHandling) throw e;
                    le(e)
                }
            }, t.prototype.__tryOrSetError = function (e, t, n) {
                if (!Ib.useDeprecatedSynchronousErrorHandling) throw Error("bad call");
                try {
                    t.call(this._context, n)
                } catch (t) {
                    return Ib.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : le(t), !0
                }
                return !1
            }, t.prototype._unsubscribe = function () {
                var e = this._parentSubscriber;
                this._parentSubscriber = this._context = null, e.unsubscribe()
            }, t
        }(ia), me = "function" == typeof Symbol && Symbol.observable || "@@observable", W = function () {
            function e(e) {
                this._isScalar = !1, e && (this._subscribe = e)
            }

            return e.prototype.lift = function (t) {
                var n = new e;
                return n.source = this, n.operator = t, n
            }, e.prototype.subscribe = function (e, t, n) {
                var r = this.operator;
                e:{
                    if (e) {
                        if (e instanceof ia) break e;
                        if (e[Eh]) {
                            e = e[Eh]();
                            break e
                        }
                    }
                    e = e || t || n ? new ia(e, t, n) : new ia(Dh)
                }
                if (r ? e.add(r.call(e, this.source)) : e.add(this.source || Ib.useDeprecatedSynchronousErrorHandling && !e.syncErrorThrowable ? this._subscribe(e) : this._trySubscribe(e)), Ib.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable && (e.syncErrorThrowable = !1, e.syncErrorThrown)) throw e.syncErrorValue;
                return e
            }, e.prototype._trySubscribe = function (e) {
                try {
                    return this._subscribe(e)
                } catch (t) {
                    Ib.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), ei(e) ? e.error(t) : console.warn(t)
                }
            }, e.prototype.forEach = function (e, t) {
                var n = this;
                return new (t = Yl(t))((function (t, r) {
                    var i = n.subscribe((function (t) {
                        try {
                            e(t)
                        } catch (e) {
                            r(e), i && i.unsubscribe()
                        }
                    }), r, t)
                }))
            }, e.prototype._subscribe = function (e) {
                var t = this.source;
                return t && t.subscribe(e)
            }, e.prototype[me] = function () {
                return this
            }, e.prototype.pipe = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return 0 === e.length ? this : Xl(e)(this)
            }, e.prototype.toPromise = function (e) {
                var t = this;
                return new (e = Yl(e))((function (e, n) {
                    var r;
                    t.subscribe((function (e) {
                        return r = e
                    }), (function (e) {
                        return n(e)
                    }), (function () {
                        return e(r)
                    }))
                }))
            }, e.create = function (t) {
                return new e(t)
            }, e
        }(), qd = function () {
            function e() {
                return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
            }

            return e.prototype = Object.create(Error.prototype), e
        }(), xq = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.subject = t, r.subscriber = n, r.closed = !1, r
            }

            return O(t, e), t.prototype.unsubscribe = function () {
                if (!this.closed) {
                    this.closed = !0;
                    var e = this.subject, t = e.observers;
                    this.subject = null, !t || 0 === t.length || e.isStopped || e.closed || -1 !== (e = t.indexOf(this.subscriber)) && t.splice(e, 1)
                }
            }, t
        }(Na), yq = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.destination = t, n
            }

            return O(t, e), t
        }(ia), Pa = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t.observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
            }

            return O(t, e), t.prototype[Eh] = function () {
                return new yq(this)
            }, t.prototype.lift = function (e) {
                var t = new zq(this, this);
                return t.operator = e, t
            }, t.prototype.next = function (e) {
                if (this.closed) throw new qd;
                if (!this.isStopped) {
                    var t = this.observers, n = t.length;
                    t = t.slice();
                    for (var r = 0; r < n; r++) t[r].next(e)
                }
            }, t.prototype.error = function (e) {
                if (this.closed) throw new qd;
                this.hasError = !0, this.thrownError = e, this.isStopped = !0;
                var t = this.observers, n = t.length;
                t = t.slice();
                for (var r = 0; r < n; r++) t[r].error(e);
                this.observers.length = 0
            }, t.prototype.complete = function () {
                if (this.closed) throw new qd;
                this.isStopped = !0;
                var e = this.observers, t = e.length;
                e = e.slice();
                for (var n = 0; n < t; n++) e[n].complete();
                this.observers.length = 0
            }, t.prototype.unsubscribe = function () {
                this.closed = this.isStopped = !0, this.observers = null
            }, t.prototype._trySubscribe = function (t) {
                if (this.closed) throw new qd;
                return e.prototype._trySubscribe.call(this, t)
            }, t.prototype._subscribe = function (e) {
                if (this.closed) throw new qd;
                return this.hasError ? (e.error(this.thrownError), Na.EMPTY) : this.isStopped ? (e.complete(), Na.EMPTY) : (this.observers.push(e), new xq(this, e))
            }, t.prototype.asObservable = function () {
                var e = new W;
                return e.source = this, e
            }, t.create = function (e, t) {
                return new zq(e, t)
            }, t
        }(W), zq = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.destination = t, r.source = n, r
            }

            return O(t, e), t.prototype.next = function (e) {
                var t = this.destination;
                t && t.next && t.next(e)
            }, t.prototype.error = function (e) {
                var t = this.destination;
                t && t.error && this.destination.error(e)
            }, t.prototype.complete = function () {
                var e = this.destination;
                e && e.complete && this.destination.complete()
            }, t.prototype._subscribe = function (e) {
                return this.source ? this.source.subscribe(e) : Na.EMPTY
            }, t
        }(Pa), Ks = function () {
            function e(e) {
                this.connectable = e
            }

            return e.prototype.call = function (e, t) {
                var n = this.connectable;
                return n._refCount++, e = new az(e, n), t = t.subscribe(e), e.closed || (e.connection = n.connect()), t
            }, e
        }(), az = function (e) {
            function t(t, n) {
                return (t = e.call(this, t) || this).connectable = n, t
            }

            return O(t, e), t.prototype._unsubscribe = function () {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._refCount;
                    0 >= t ? this.connection = null : (e._refCount = t - 1, 1 < t ? this.connection = null : (t = this.connection, e = e._connection, this.connection = null, !e || t && e !== t || e.unsubscribe()))
                } else this.connection = null
            }, t
        }(ia), Aq = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.source = t, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
            }

            return O(t, e), t.prototype._subscribe = function (e) {
                return this.getSubject().subscribe(e)
            }, t.prototype.getSubject = function () {
                var e = this._subject;
                return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
            }, t.prototype.connect = function () {
                var e = this._connection;
                return e || (this._isComplete = !1, (e = this._connection = new Na).add(this.source.subscribe(new bz(this.getSubject(), this))), e.closed && (this._connection = null, e = Na.EMPTY)), e
            }, t.prototype.refCount = function () {
                return Zl()(this)
            }, t
        }(W), xt = function () {
            var e = Aq.prototype;
            return {
                operator: {value: null},
                _refCount: {value: 0, writable: !0},
                _subject: {value: null, writable: !0},
                _connection: {value: null, writable: !0},
                _subscribe: {value: e._subscribe},
                _isComplete: {value: e._isComplete, writable: !0},
                getSubject: {value: e.getSubject},
                connect: {value: e.connect},
                refCount: {value: e.refCount}
            }
        }(), bz = function (e) {
            function t(t, n) {
                return (t = e.call(this, t) || this).connectable = n, t
            }

            return O(t, e), t.prototype._error = function (t) {
                this._unsubscribe(), e.prototype._error.call(this, t)
            }, t.prototype._complete = function () {
                this.connectable._isComplete = !0, this._unsubscribe(), e.prototype._complete.call(this)
            }, t.prototype._unsubscribe = function () {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._connection;
                    e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
                }
            }, t
        }(yq);
    !function (e) {
        function t(t, n) {
            return (t = e.call(this, t) || this).connectable = n, t
        }

        O(t, e), t.prototype._unsubscribe = function () {
            var e = this.connectable;
            if (e) {
                this.connectable = null;
                var t = e._refCount;
                0 >= t ? this.connection = null : (e._refCount = t - 1, 1 < t ? this.connection = null : (t = this.connection, e = e._connection, this.connection = null, !e || t && e !== t || e.unsubscribe()))
            } else this.connection = null
        }
    }(ia), function (e) {
        function t(t, n, r, i, o) {
            return (t = e.call(this, t) || this).keySelector = n, t.elementSelector = r, t.durationSelector = i, t.subjectSelector = o, t.groups = null, t.attemptedToUnsubscribe = !1, t.count = 0, t
        }

        O(t, e), t.prototype._next = function (e) {
            try {
                var t = this.keySelector(e)
            } catch (e) {
                return void this.error(e)
            }
            this._group(e, t)
        }, t.prototype._group = function (e, t) {
            var n = this.groups;
            n || (n = this.groups = new Map);
            var r = n.get(t);
            if (this.elementSelector) try {
                var i = this.elementSelector(e)
            } catch (e) {
                this.error(e)
            } else i = e;
            if (!r && (r = this.subjectSelector ? this.subjectSelector() : new Pa, n.set(t, r), e = new Lk(t, r, this), this.destination.next(e), this.durationSelector)) {
                e = void 0;
                try {
                    e = this.durationSelector(new Lk(t, r))
                } catch (e) {
                    return void this.error(e)
                }
                this.add(e.subscribe(new cz(t, r, this)))
            }
            r.closed || r.next(i)
        }, t.prototype._error = function (e) {
            var t = this.groups;
            t && (t.forEach((function (t, n) {
                t.error(e)
            })), t.clear()), this.destination.error(e)
        }, t.prototype._complete = function () {
            var e = this.groups;
            e && (e.forEach((function (e, t) {
                e.complete()
            })), e.clear()), this.destination.complete()
        }, t.prototype.removeGroup = function (e) {
            this.groups.delete(e)
        }, t.prototype.unsubscribe = function () {
            this.closed || (this.attemptedToUnsubscribe = !0, 0 === this.count && e.prototype.unsubscribe.call(this))
        }
    }(ia);
    var cz = function (e) {
        function t(t, n, r) {
            var i = e.call(this, n) || this;
            return i.key = t, i.group = n, i.parent = r, i
        }

        return O(t, e), t.prototype._next = function (e) {
            this.complete()
        }, t.prototype._unsubscribe = function () {
            var e = this.parent, t = this.key;
            this.key = this.parent = null, e && e.removeGroup(t)
        }, t
    }(ia), Lk = function (e) {
        function t(t, n, r) {
            var i = e.call(this) || this;
            return i.key = t, i.groupSubject = n, i.refCountSubscription = r, i
        }

        return O(t, e), t.prototype._subscribe = function (e) {
            var t = new Na, n = this.refCountSubscription, r = this.groupSubject;
            return n && !n.closed && t.add(new dz(n)), t.add(r.subscribe(e)), t
        }, t
    }(W), dz = function (e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.parent = t, t.count++, n
        }

        return O(t, e), t.prototype.unsubscribe = function () {
            var t = this.parent;
            t.closed || this.closed || (e.prototype.unsubscribe.call(this), --t.count, 0 === t.count && t.attemptedToUnsubscribe && t.unsubscribe())
        }, t
    }(Na), ez = function (e) {
        function t(t) {
            var n = e.call(this) || this;
            return n._value = t, n
        }

        return O(t, e), Object.defineProperty(t.prototype, "value", {
            get: function () {
                return this.getValue()
            }, enumerable: !0, configurable: !0
        }), t.prototype._subscribe = function (t) {
            var n = e.prototype._subscribe.call(this, t);
            return n && !n.closed && t.next(this._value), n
        }, t.prototype.getValue = function () {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new qd;
            return this._value
        }, t.prototype.next = function (t) {
            e.prototype.next.call(this, this._value = t)
        }, t
    }(Pa), dg = function (e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.scheduler = t, r.work = n, r.pending = !1, r
        }

        return O(t, e), t.prototype.schedule = function (e, t) {
            if (void 0 === t && (t = 0), this.closed) return this;
            this.state = e, e = this.id;
            var n = this.scheduler;
            return null != e && (this.id = this.recycleAsyncId(n, e, t)), this.pending = !0, this.delay = t, this.id = this.id || this.requestAsyncId(n, this.id, t), this
        }, t.prototype.requestAsyncId = function (e, t, n) {
            return void 0 === n && (n = 0), setInterval(e.flush.bind(e, this), n)
        }, t.prototype.recycleAsyncId = function (e, t, n) {
            if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return t;
            clearInterval(t)
        }, t.prototype.execute = function (e, t) {
            return this.closed ? Error("executing a cancelled action") : (this.pending = !1, (e = this._execute(e, t)) ? e : void (!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))))
        }, t.prototype._execute = function (e, t) {
            t = !1;
            var n = void 0;
            try {
                this.work(e)
            } catch (e) {
                t = !0, n = !!e && e || Error(e)
            }
            if (t) return this.unsubscribe(), n
        }, t.prototype._unsubscribe = function () {
            var e = this.id, t = this.scheduler, n = t.actions, r = n.indexOf(this);
            this.state = this.work = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != e && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null
        }, t
    }(function (e) {
        function t(t, n) {
            return e.call(this) || this
        }

        return O(t, e), t.prototype.schedule = function (e, t) {
            return this
        }, t
    }(Na)), fz = function (e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.scheduler = t, r.work = n, r
        }

        return O(t, e), t.prototype.schedule = function (t, n) {
            return void 0 === n && (n = 0), 0 < n ? e.prototype.schedule.call(this, t, n) : (this.delay = n, this.state = t, this.scheduler.flush(this), this)
        }, t.prototype.execute = function (t, n) {
            return 0 < n || this.closed ? e.prototype.execute.call(this, t, n) : this._execute(t, n)
        }, t.prototype.requestAsyncId = function (t, n, r) {
            return void 0 === r && (r = 0), null !== r && 0 < r || null === r && 0 < this.delay ? e.prototype.requestAsyncId.call(this, t, n, r) : t.flush(this)
        }, t
    }(dg), Mk = function () {
        function e(t, n) {
            void 0 === n && (n = e.now), this.SchedulerAction = t, this.now = n
        }

        return e.prototype.schedule = function (e, t, n) {
            return void 0 === t && (t = 0), new this.SchedulerAction(this, e).schedule(n, t)
        }, e.now = function () {
            return Date.now()
        }, e
    }(), eg = function (e) {
        function t(n, r) {
            void 0 === r && (r = Mk.now);
            var i = e.call(this, n, (function () {
                return t.delegate && t.delegate !== i ? t.delegate.now() : r()
            })) || this;
            return i.actions = [], i.active = !1, i.scheduled = void 0, i
        }

        return O(t, e), t.prototype.schedule = function (n, r, i) {
            return void 0 === r && (r = 0), t.delegate && t.delegate !== this ? t.delegate.schedule(n, r, i) : e.prototype.schedule.call(this, n, r, i)
        }, t.prototype.flush = function (e) {
            var t = this.actions;
            if (this.active) t.push(e); else {
                var n;
                this.active = !0;
                do {
                    if (n = e.execute(e.state, e.delay)) break
                } while (e = t.shift());
                if (this.active = !1, n) {
                    for (; e = t.shift();) e.unsubscribe();
                    throw n
                }
            }
        }, t
    }(Mk), fg = new (function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return O(t, e), t
    }(eg))(fz), vb = new W((function (e) {
        return e.complete()
    })), $l = function (e) {
        return function (t) {
            for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
            t.complete()
        }
    }, Nk;
    !function (e) {
        e.NEXT = "N", e.ERROR = "E", e.COMPLETE = "C"
    }(Nk || (Nk = {}));
    var Ue = function () {
        function e(e, t, n) {
            this.kind = e, this.value = t, this.error = n, this.hasValue = "N" === e
        }

        return e.prototype.observe = function (e) {
            switch (this.kind) {
                case"N":
                    return e.next && e.next(this.value);
                case"E":
                    return e.error && e.error(this.error);
                case"C":
                    return e.complete && e.complete()
            }
        }, e.prototype.do = function (e, t, n) {
            switch (this.kind) {
                case"N":
                    return e && e(this.value);
                case"E":
                    return t && t(this.error);
                case"C":
                    return n && n()
            }
        }, e.prototype.accept = function (e, t, n) {
            return e && "function" == typeof e.next ? this.observe(e) : this.do(e, t, n)
        }, e.prototype.toObservable = function () {
            switch (this.kind) {
                case"N":
                    return fb(this.value);
                case"E":
                    return Y(this.error);
                case"C":
                    return mf()
            }
            throw Error("unexpected notification kind value")
        }, e.createNext = function (t) {
            return void 0 !== t ? new e("N", t) : e.undefinedValueNotification
        }, e.createError = function (t) {
            return new e("E", void 0, t)
        }, e.createComplete = function () {
            return e.completeNotification
        }, e.completeNotification = new e("C"), e.undefinedValueNotification = new e("N", void 0), e
    }(), Os = function () {
        function e(e, t) {
            void 0 === t && (t = 0), this.scheduler = e, this.delay = t
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Bq(e, this.scheduler, this.delay))
        }, e
    }(), Bq = function (e) {
        function t(t, n, r) {
            return void 0 === r && (r = 0), (t = e.call(this, t) || this).scheduler = n, t.delay = r, t
        }

        return O(t, e), t.dispatch = function (e) {
            e.notification.observe(e.destination), this.unsubscribe()
        }, t.prototype.scheduleMessage = function (e) {
            this.destination.add(this.scheduler.schedule(t.dispatch, this.delay, new gz(e, this.destination)))
        }, t.prototype._next = function (e) {
            this.scheduleMessage(Ue.createNext(e))
        }, t.prototype._error = function (e) {
            this.scheduleMessage(Ue.createError(e)), this.unsubscribe()
        }, t.prototype._complete = function () {
            this.scheduleMessage(Ue.createComplete()), this.unsubscribe()
        }, t
    }(ia), gz = function (e, t) {
        this.notification = e, this.destination = t
    }, pe = function (e) {
        function t(t, n, r) {
            void 0 === t && (t = Number.POSITIVE_INFINITY), void 0 === n && (n = Number.POSITIVE_INFINITY);
            var i = e.call(this) || this;
            return i.scheduler = r, i._events = [], i._infiniteTimeWindow = !1, i._bufferSize = 1 > t ? 1 : t, i._windowTime = 1 > n ? 1 : n, n === Number.POSITIVE_INFINITY ? (i._infiniteTimeWindow = !0, i.next = i.nextInfiniteTimeWindow) : i.next = i.nextTimeWindow, i
        }

        return O(t, e), t.prototype.nextInfiniteTimeWindow = function (t) {
            if (!this.isStopped) {
                var n = this._events;
                n.push(t), n.length > this._bufferSize && n.shift()
            }
            e.prototype.next.call(this, t)
        }, t.prototype.nextTimeWindow = function (t) {
            this.isStopped || (this._events.push(new hz(this._getNow(), t)), this._trimBufferThenGetEvents()), e.prototype.next.call(this, t)
        }, t.prototype._subscribe = function (e) {
            var t = this._infiniteTimeWindow, n = t ? this._events : this._trimBufferThenGetEvents(),
                r = this.scheduler, i = n.length;
            if (this.closed) throw new qd;
            if (this.isStopped || this.hasError) var o = Na.EMPTY; else this.observers.push(e), o = new xq(this, e);
            if (r && e.add(e = new Bq(e, r)), t) for (t = 0; t < i && !e.closed; t++) e.next(n[t]); else for (t = 0; t < i && !e.closed; t++) e.next(n[t].value);
            return this.hasError ? e.error(this.thrownError) : this.isStopped && e.complete(), o
        }, t.prototype._getNow = function () {
            return (this.scheduler || fg).now()
        }, t.prototype._trimBufferThenGetEvents = function () {
            for (var e = this._getNow(), t = this._bufferSize, n = this._windowTime, r = this._events, i = r.length, o = 0; o < i && !(e - r[o].time < n);) o++;
            return i > t && (o = Math.max(o, i - t)), 0 < o && r.splice(0, o), r
        }, t
    }(Pa), hz = function (e, t) {
        this.time = e, this.value = t
    }, of = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.value = null, t.hasNext = !1, t.hasCompleted = !1, t
        }

        return O(t, e), t.prototype._subscribe = function (t) {
            return this.hasError ? (t.error(this.thrownError), Na.EMPTY) : this.hasCompleted && this.hasNext ? (t.next(this.value), t.complete(), Na.EMPTY) : e.prototype._subscribe.call(this, t)
        }, t.prototype.next = function (e) {
            this.hasCompleted || (this.value = e, this.hasNext = !0)
        }, t.prototype.error = function (t) {
            this.hasCompleted || e.prototype.error.call(this, t)
        }, t.prototype.complete = function () {
            this.hasCompleted = !0, this.hasNext && e.prototype.next.call(this, this.value), e.prototype.complete.call(this)
        }, t
    }(Pa), iz = 1, jz = Promise.resolve(), hi = {}, Cq = {
        setImmediate: function (e) {
            var t = iz++;
            return hi[t] = !0, jz.then((function () {
                return am(t) && e()
            })), t
        }, clearImmediate: function (e) {
            am(e)
        }
    }, kz = function (e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.scheduler = t, r.work = n, r
        }

        return O(t, e), t.prototype.requestAsyncId = function (t, n, r) {
            return void 0 === r && (r = 0), null !== r && 0 < r ? e.prototype.requestAsyncId.call(this, t, n, r) : (t.actions.push(this), t.scheduled || (t.scheduled = Cq.setImmediate(t.flush.bind(t, null))))
        }, t.prototype.recycleAsyncId = function (t, n, r) {
            if (void 0 === r && (r = 0), null !== r && 0 < r || null === r && 0 < this.delay) return e.prototype.recycleAsyncId.call(this, t, n, r);
            0 === t.actions.length && (Cq.clearImmediate(n), t.scheduled = void 0)
        }, t
    }(dg), qi = new (function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return O(t, e), t.prototype.flush = function (e) {
            this.active = !0, this.scheduled = void 0;
            var t, n = this.actions, r = -1, i = n.length;
            e = e || n.shift();
            do {
                if (t = e.execute(e.state, e.delay)) break
            } while (++r < i && (e = n.shift()));
            if (this.active = !1, t) {
                for (; ++r < i && (e = n.shift());) e.unsubscribe();
                throw t
            }
        }, t
    }(eg))(kz), lz = qi, Ok = new eg(dg), ad = Ok, mz = function (e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.scheduler = t, r.work = n, r
        }

        return O(t, e), t.prototype.requestAsyncId = function (t, n, r) {
            return void 0 === r && (r = 0), null !== r && 0 < r ? e.prototype.requestAsyncId.call(this, t, n, r) : (t.actions.push(this), t.scheduled || (t.scheduled = requestAnimationFrame((function () {
                return t.flush(null)
            }))))
        }, t.prototype.recycleAsyncId = function (t, n, r) {
            if (void 0 === r && (r = 0), null !== r && 0 < r || null === r && 0 < this.delay) return e.prototype.recycleAsyncId.call(this, t, n, r);
            0 === t.actions.length && (cancelAnimationFrame(n), t.scheduled = void 0)
        }, t
    }(dg), Dq = new (function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return O(t, e), t.prototype.flush = function (e) {
            this.active = !0, this.scheduled = void 0;
            var t, n = this.actions, r = -1, i = n.length;
            e = e || n.shift();
            do {
                if (t = e.execute(e.state, e.delay)) break
            } while (++r < i && (e = n.shift()));
            if (this.active = !1, t) {
                for (; ++r < i && (e = n.shift());) e.unsubscribe();
                throw t
            }
        }, t
    }(eg))(mz), nz = function (e) {
        function t(t, n) {
            void 0 === t && (t = Eq), void 0 === n && (n = Number.POSITIVE_INFINITY);
            var r = e.call(this, t, (function () {
                return r.frame
            })) || this;
            return r.maxFrames = n, r.frame = 0, r.index = -1, r
        }

        return O(t, e), t.prototype.flush = function () {
            for (var e, t, n = this.actions, r = this.maxFrames; (t = n[0]) && t.delay <= r && (n.shift(), this.frame = t.delay, !(e = t.execute(t.state, t.delay)));) ;
            if (e) {
                for (; t = n.shift();) t.unsubscribe();
                throw e
            }
        }, t.frameTimeFactor = 10, t
    }(eg), Eq = function (e) {
        function t(t, n, r) {
            void 0 === r && (r = t.index += 1);
            var i = e.call(this, t, n) || this;
            return i.scheduler = t, i.work = n, i.index = r, i.active = !0, i.index = t.index = r, i
        }

        return O(t, e), t.prototype.schedule = function (n, r) {
            if (void 0 === r && (r = 0), !this.id) return e.prototype.schedule.call(this, n, r);
            this.active = !1;
            var i = new t(this.scheduler, this.work);
            return this.add(i), i.schedule(n, r)
        }, t.prototype.requestAsyncId = function (e, n, r) {
            return void 0 === r && (r = 0), this.delay = e.frame + r, (e = e.actions).push(this), e.sort(t.sortActions), !0
        }, t.prototype.recycleAsyncId = function (e, t, n) {
        }, t.prototype._execute = function (t, n) {
            if (!0 === this.active) return e.prototype._execute.call(this, t, n)
        }, t.sortActions = function (e, t) {
            return e.delay === t.delay ? e.index === t.index ? 0 : e.index > t.index ? 1 : -1 : e.delay > t.delay ? 1 : -1
        }, t
    }(dg), Pk = function () {
        function e() {
            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
        }

        return e.prototype = Object.create(Error.prototype), e
    }(), vg = function () {
        function e() {
            return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
        }

        return e.prototype = Object.create(Error.prototype), e
    }(), pb = function () {
        function e() {
            return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this
        }

        return e.prototype = Object.create(Error.prototype), e
    }(), Ps = function () {
        function e(e, t) {
            this.project = e, this.thisArg = t
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new oz(e, this.project, this.thisArg))
        }, e
    }(), oz = function (e) {
        function t(t, n, r) {
            return (t = e.call(this, t) || this).project = n, t.count = 0, t.thisArg = r || t, t
        }

        return O(t, e), t.prototype._next = function (e) {
            try {
                var t = this.project.call(this.thisArg, e, this.count++)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.next(t)
        }, t
    }(ia), Qk = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return O(t, e), t.prototype.notifyNext = function (e, t, n, r, i) {
            this.destination.next(t)
        }, t.prototype.notifyError = function (e, t) {
            this.destination.error(e)
        }, t.prototype.notifyComplete = function (e) {
            this.destination.complete()
        }, t
    }(ia), Us = function (e) {
        function t(t, n, r) {
            var i = e.call(this) || this;
            return i.parent = t, i.outerValue = n, i.outerIndex = r, i.index = 0, i
        }

        return O(t, e), t.prototype._next = function (e) {
            this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
        }, t.prototype._error = function (e) {
            this.parent.notifyError(e, this), this.unsubscribe()
        }, t.prototype._complete = function () {
            this.parent.notifyComplete(this), this.unsubscribe()
        }, t
    }(ia), pz = function (e) {
        return function (t) {
            return e.then((function (e) {
                t.closed || (t.next(e), t.complete())
            }), (function (e) {
                return t.error(e)
            })).then(null, le), t
        }
    }, Zc = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator", qz = function (e) {
        return function (t) {
            for (var n = e[Zc](); ;) {
                var r = void 0;
                try {
                    r = n.next()
                } catch (e) {
                    return t.error(e), t
                }
                if (r.done) {
                    t.complete();
                    break
                }
                if (t.next(r.value), t.closed) break
            }
            return "function" == typeof n.return && t.add((function () {
                n.return && n.return()
            })), t
        }
    }, rz = function (e) {
        return function (t) {
            var n = e[me]();
            if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return n.subscribe(t)
        }
    }, gm = function (e) {
        return e && "number" == typeof e.length && "function" != typeof e
    }, pf = function (e) {
        if (e && "function" == typeof e[me]) return rz(e);
        if (gm(e)) return $l(e);
        if (em(e)) return pz(e);
        if (e && "function" == typeof e[Zc]) return qz(e);
        throw e = di(e) ? "an invalid object" : "'" + e + "'", new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
    }, Fq = {}, tz = function () {
        function e(e) {
            this.resultSelector = e
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new sz(e, this.resultSelector))
        }, e
    }(), sz = function (e) {
        function t(t, n) {
            return (t = e.call(this, t) || this).resultSelector = n, t.active = 0, t.values = [], t.observables = [], t
        }

        return O(t, e), t.prototype._next = function (e) {
            this.values.push(Fq), this.observables.push(e)
        }, t.prototype._complete = function () {
            var e = this.observables, t = e.length;
            if (0 === t) this.destination.complete(); else {
                this.toRespond = this.active = t;
                for (var n = 0; n < t; n++) this.add(ii(this, e[n], void 0, n))
            }
        }, t.prototype.notifyComplete = function (e) {
            0 == --this.active && this.destination.complete()
        }, t.prototype.notifyNext = function (e, t, n) {
            var r = (e = this.values)[n];
            r = this.toRespond ? r === Fq ? --this.toRespond : this.toRespond : 0, e[n] = t, 0 === r && (this.resultSelector ? this._tryResultSelector(e) : this.destination.next(e.slice()))
        }, t.prototype._tryResultSelector = function (e) {
            try {
                var t = this.resultSelector.apply(this, e)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.next(t)
        }, t
    }(Qk), vc = function (e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.parent = t, n
        }

        return O(t, e), t.prototype._next = function (e) {
            this.parent.notifyNext(e)
        }, t.prototype._error = function (e) {
            this.parent.notifyError(e), this.unsubscribe()
        }, t.prototype._complete = function () {
            this.parent.notifyComplete(), this.unsubscribe()
        }, t
    }(ia);
    !function (e) {
        function t(t, n, r) {
            var i = e.call(this) || this;
            return i.parent = t, i.outerValue = n, i.outerIndex = r, i
        }

        O(t, e), t.prototype._next = function (e) {
            this.parent.notifyNext(this.outerValue, e, this.outerIndex, this)
        }, t.prototype._error = function (e) {
            this.parent.notifyError(e), this.unsubscribe()
        }, t.prototype._complete = function () {
            this.parent.notifyComplete(this), this.unsubscribe()
        }
    }(ia);
    var wc = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return O(t, e), t.prototype.notifyNext = function (e) {
            this.destination.next(e)
        }, t.prototype.notifyError = function (e) {
            this.destination.error(e)
        }, t.prototype.notifyComplete = function () {
            this.destination.complete()
        }, t
    }(ia);
    !function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        O(t, e), t.prototype.notifyNext = function (e, t, n, r) {
            this.destination.next(t)
        }, t.prototype.notifyError = function (e) {
            this.destination.error(e)
        }, t.prototype.notifyComplete = function (e) {
            this.destination.complete()
        }
    }(ia);
    var Ys = function () {
        function e(e, t) {
            void 0 === t && (t = Number.POSITIVE_INFINITY), this.project = e, this.concurrent = t
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new uz(e, this.project, this.concurrent))
        }, e
    }(), uz = function (e) {
        function t(t, n, r) {
            return void 0 === r && (r = Number.POSITIVE_INFINITY), (t = e.call(this, t) || this).project = n, t.concurrent = r, t.hasCompleted = !1, t.buffer = [], t.active = 0, t.index = 0, t
        }

        return O(t, e), t.prototype._next = function (e) {
            this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
        }, t.prototype._tryNext = function (e) {
            var t = this.index++;
            try {
                var n = this.project(e, t)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.active++, this._innerSub(n)
        }, t.prototype._innerSub = function (e) {
            var t = new vc(this), n = this.destination;
            n.add(t), (e = ic(e, t)) !== t && n.add(e)
        }, t.prototype._complete = function () {
            this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
        }, t.prototype.notifyNext = function (e) {
            this.destination.next(e)
        }, t.prototype.notifyComplete = function () {
            var e = this.buffer;
            this.active--, 0 < e.length ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
        }, t
    }(wc), Rk = E.parseFloat, Gq = -1 / 0 != 1 / Rk("\t\n\v\f\r                　\u2028\u2029\ufeff-0") ? function (e) {
        e = hk(String(e));
        var t = Rk(e);
        return 0 === t && "-" == e.charAt(0) ? -0 : t
    } : Rk;
    P({global: !0, forced: parseFloat != Gq}, {parseFloat: Gq});
    var Sk = new W(hc), ct = function () {
        function e(e, t) {
            this.predicate = e, this.thisArg = t
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new vz(e, this.predicate, this.thisArg))
        }, e
    }(), vz = function (e) {
        function t(t, n, r) {
            return (t = e.call(this, t) || this).predicate = n, t.thisArg = r, t.count = 0, t
        }

        return O(t, e), t.prototype._next = function (e) {
            try {
                var t = this.predicate.call(this.thisArg, e, this.count++)
            } catch (e) {
                return void this.destination.error(e)
            }
            t && this.destination.next(e)
        }, t
    }(ia), dt = function () {
        function e() {
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new wz(e))
        }, e
    }(), wz = function (e) {
        function t(t) {
            return (t = e.call(this, t) || this).hasFirst = !1, t.observables = [], t.subscriptions = [], t
        }

        return O(t, e), t.prototype._next = function (e) {
            this.observables.push(e)
        }, t.prototype._complete = function () {
            var e = this.observables, t = e.length;
            if (0 === t) this.destination.complete(); else {
                for (var n = 0; n < t && !this.hasFirst; n++) {
                    var r = ii(this, e[n], void 0, n);
                    this.subscriptions && this.subscriptions.push(r), this.add(r)
                }
                this.observables = null
            }
        }, t.prototype.notifyNext = function (e, t, n) {
            if (!this.hasFirst) {
                for (this.hasFirst = !0, e = 0; e < this.subscriptions.length; e++) if (e !== n) {
                    var r = this.subscriptions[e];
                    r.unsubscribe(), this.remove(r)
                }
                this.subscriptions = null
            }
            this.destination.next(t)
        }, t
    }(Qk), gt = function () {
        function e(e) {
            this.resultSelector = e
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new xz(e, this.resultSelector))
        }, e
    }(), xz = function (e) {
        function t(t, n, r) {
            return (t = e.call(this, t) || this).resultSelector = n, t.iterators = [], t.active = 0, t.resultSelector = "function" == typeof n ? n : void 0, t
        }

        return O(t, e), t.prototype._next = function (e) {
            var t = this.iterators;
            Jb(e) ? t.push(new yz(e)) : "function" == typeof e[Zc] ? t.push(new zz(e[Zc]())) : t.push(new Az(this.destination, this, e))
        }, t.prototype._complete = function () {
            var e = this.iterators, t = e.length;
            if (this.unsubscribe(), 0 === t) this.destination.complete(); else {
                this.active = t;
                for (var n = 0; n < t; n++) {
                    var r = e[n];
                    r.stillUnsubscribed ? this.destination.add(r.subscribe()) : this.active--
                }
            }
        }, t.prototype.notifyInactive = function () {
            this.active--, 0 === this.active && this.destination.complete()
        }, t.prototype.checkIterators = function () {
            for (var e = this.iterators, t = e.length, n = this.destination, r = 0; r < t; r++) {
                var i = e[r];
                if ("function" == typeof i.hasValue && !i.hasValue()) return
            }
            var o = !1, s = [];
            for (r = 0; r < t; r++) {
                var a = (i = e[r]).next();
                if (i.hasCompleted() && (o = !0), a.done) return void n.complete();
                s.push(a.value)
            }
            this.resultSelector ? this._tryresultSelector(s) : n.next(s), o && n.complete()
        }, t.prototype._tryresultSelector = function (e) {
            try {
                var t = this.resultSelector.apply(this, e)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.next(t)
        }, t
    }(ia), zz = function () {
        function e(e) {
            this.iterator = e, this.nextResult = e.next()
        }

        return e.prototype.hasValue = function () {
            return !0
        }, e.prototype.next = function () {
            var e = this.nextResult;
            return this.nextResult = this.iterator.next(), e
        }, e.prototype.hasCompleted = function () {
            var e = this.nextResult;
            return !(!e || !e.done)
        }, e
    }(), yz = function () {
        function e(e) {
            this.array = e, this.length = this.index = 0, this.length = e.length
        }

        return e.prototype[Zc] = function () {
            return this
        }, e.prototype.next = function (e) {
            e = this.index++;
            var t = this.array;
            return e < this.length ? {value: t[e], done: !1} : {value: null, done: !0}
        }, e.prototype.hasValue = function () {
            return this.array.length > this.index
        }, e.prototype.hasCompleted = function () {
            return this.array.length === this.index
        }, e
    }(), Az = function (e) {
        function t(t, n, r) {
            return (t = e.call(this, t) || this).parent = n, t.observable = r, t.stillUnsubscribed = !0, t.buffer = [], t.isComplete = !1, t
        }

        return O(t, e), t.prototype[Zc] = function () {
            return this
        }, t.prototype.next = function () {
            var e = this.buffer;
            return 0 === e.length && this.isComplete ? {value: null, done: !0} : {value: e.shift(), done: !1}
        }, t.prototype.hasValue = function () {
            return 0 < this.buffer.length
        }, t.prototype.hasCompleted = function () {
            return 0 === this.buffer.length && this.isComplete
        }, t.prototype.notifyComplete = function () {
            0 < this.buffer.length ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete()
        }, t.prototype.notifyNext = function (e) {
            this.buffer.push(e), this.parent.checkIterators()
        }, t.prototype.subscribe = function () {
            return ic(this.observable, new vc(this))
        }, t
    }(wc), Bz = Object.freeze({
        __proto__: null,
        Observable: W,
        ConnectableObservable: Aq,
        GroupedObservable: Lk,
        observable: me,
        Subject: Pa,
        BehaviorSubject: ez,
        ReplaySubject: pe,
        AsyncSubject: of,
        asap: lz,
        asapScheduler: qi,
        async: ad,
        asyncScheduler: Ok,
        queue: fg,
        queueScheduler: fg,
        animationFrame: Dq,
        animationFrameScheduler: Dq,
        VirtualTimeScheduler: nz,
        VirtualAction: Eq,
        Scheduler: Mk,
        Subscription: Na,
        Subscriber: ia,
        Notification: Ue,
        get NotificationKind() {
            return Nk
        },
        pipe: fi,
        noop: hc,
        identity: Xc,
        isObservable: function (e) {
            return !!e && (e instanceof W || "function" == typeof e.lift && "function" == typeof e.subscribe)
        },
        ArgumentOutOfRangeError: Pk,
        EmptyError: vg,
        ObjectUnsubscribedError: qd,
        UnsubscriptionError: lf,
        TimeoutError: pb,
        bindCallback: bm,
        bindNodeCallback: cm,
        combineLatest: function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = t = void 0;
            return Yc(e[e.length - 1]) && (n = e.pop()), "function" == typeof e[e.length - 1] && (t = e.pop()), 1 === e.length && Jb(e[0]) && (e = e[0]), nf(e, n).lift(new tz(t))
        },
        concat: hm,
        defer: $c,
        empty: mf,
        forkJoin: im,
        from: Kb,
        fromEvent: gb,
        fromEventPattern: km,
        generate: function (e, t, n, r, i) {
            if (1 == arguments.length) {
                var o = e.initialState;
                t = e.condition, n = e.iterate;
                var s = e.resultSelector || Xc;
                i = e.scheduler
            } else void 0 === r || Yc(r) ? (o = e, s = Xc, i = r) : (o = e, s = r);
            return new W((function (e) {
                var r = o;
                if (i) return i.schedule(Zs, 0, {subscriber: e, iterate: n, condition: t, resultSelector: s, state: r});
                for (; ;) {
                    if (t) {
                        var a = void 0;
                        try {
                            a = t(r)
                        } catch (t) {
                            e.error(t);
                            break
                        }
                        if (!a) {
                            e.complete();
                            break
                        }
                    }
                    a = void 0;
                    try {
                        a = s(r)
                    } catch (t) {
                        e.error(t);
                        break
                    }
                    if (e.next(a), e.closed) break;
                    try {
                        r = n(r)
                    } catch (t) {
                        e.error(t);
                        break
                    }
                }
            }))
        },
        iif: function (e, t, n) {
            return void 0 === t && (t = vb), void 0 === n && (n = vb), $c((function () {
                return e() ? t : n
            }))
        },
        interval: lm,
        merge: Xb,
        never: function () {
            return Sk
        },
        of: fb,
        onErrorResumeNext: ki,
        pairs: function (e, t) {
            return new W(t ? function (n) {
                var r = Object.keys(e), i = new Na;
                return i.add(t.schedule(at, 0, {keys: r, index: 0, subscriber: n, subscription: i, obj: e})), i
            } : function (t) {
                for (var n = Object.keys(e), r = 0; r < n.length && !t.closed; r++) {
                    var i = n[r];
                    e.hasOwnProperty(i) && t.next([i, e[i]])
                }
                t.complete()
            })
        },
        partition: function (e, t, n) {
            return [wb(t, n)(new W(pf(e))), wb(bt(t, n))(new W(pf(e)))]
        },
        race: Ca,
        range: function (e, t, n) {
            return void 0 === e && (e = 0), new W((function (r) {
                void 0 === t && (t = e, e = 0);
                var i = 0, o = e;
                if (n) return n.schedule(et, 0, {index: i, count: t, start: e, subscriber: r});
                for (; ;) {
                    if (i++ >= t) {
                        r.complete();
                        break
                    }
                    if (r.next(o++), r.closed) break
                }
            }))
        },
        throwError: Y,
        timer: Bc,
        using: function (e, t) {
            return new W((function (n) {
                try {
                    var r = e()
                } catch (e) {
                    return void n.error(e)
                }
                try {
                    var i = t(r)
                } catch (e) {
                    return void n.error(e)
                }
                var o = (i ? Kb(i) : vb).subscribe(n);
                return function () {
                    o.unsubscribe(), r && r.unsubscribe()
                }
            }))
        },
        zip: li,
        scheduled: fm,
        EMPTY: vb,
        NEVER: Sk,
        config: Ib
    }), ht = function () {
        function e(e) {
            this.selector = e
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Cz(e, this.selector, this.caught))
        }, e
    }(), Cz = function (e) {
        function t(t, n, r) {
            return (t = e.call(this, t) || this).selector = n, t.caught = r, t
        }

        return O(t, e), t.prototype.error = function (t) {
            if (!this.isStopped) {
                var n = void 0;
                try {
                    n = this.selector(t, this.caught)
                } catch (t) {
                    return void e.prototype.error.call(this, t)
                }
                this._unsubscribeAndRecycle(), t = new vc(this), this.add(t), (n = ic(n, t)) !== t && this.add(n)
            }
        }, t
    }(wc), it = function () {
        function e(e) {
            this.defaultValue = e
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Dz(e, this.defaultValue))
        }, e
    }(), Dz = function (e) {
        function t(t, n) {
            return (t = e.call(this, t) || this).defaultValue = n, t.isEmpty = !0, t
        }

        return O(t, e), t.prototype._next = function (e) {
            this.isEmpty = !1, this.destination.next(e)
        }, t.prototype._complete = function () {
            this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
        }, t
    }(ia), jt = function () {
        function e(e, t) {
            this.delay = e, this.scheduler = t
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Ez(e, this.delay, this.scheduler))
        }, e
    }(), Ez = function (e) {
        function t(t, n, r) {
            return (t = e.call(this, t) || this).delay = n, t.scheduler = r, t.queue = [], t.active = !1, t.errored = !1, t
        }

        return O(t, e), t.dispatch = function (e) {
            for (var t = e.source, n = t.queue, r = e.scheduler, i = e.destination; 0 < n.length && 0 >= n[0].time - r.now();) n.shift().notification.observe(i);
            0 < n.length ? (t = Math.max(0, n[0].time - r.now()), this.schedule(e, t)) : (this.unsubscribe(), t.active = !1)
        }, t.prototype._schedule = function (e) {
            this.active = !0, this.destination.add(e.schedule(t.dispatch, this.delay, {
                source: this,
                destination: this.destination,
                scheduler: e
            }))
        }, t.prototype.scheduleNotification = function (e) {
            if (!0 !== this.errored) {
                var t = this.scheduler;
                e = new Fz(t.now() + this.delay, e), this.queue.push(e), !1 === this.active && this._schedule(t)
            }
        }, t.prototype._next = function (e) {
            this.scheduleNotification(Ue.createNext(e))
        }, t.prototype._error = function (e) {
            this.errored = !0, this.queue = [], this.destination.error(e), this.unsubscribe()
        }, t.prototype._complete = function () {
            this.scheduleNotification(Ue.createComplete()), this.unsubscribe()
        }, t
    }(ia), Fz = function (e, t) {
        this.time = e, this.notification = t
    }, kt = function () {
        function e(e, t) {
            this.keySelector = e, this.flushes = t
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Gz(e, this.keySelector, this.flushes))
        }, e
    }(), Gz = function (e) {
        function t(t, n, r) {
            return (t = e.call(this, t) || this).keySelector = n, t.values = new Set, r && t.add(ic(r, new vc(t))), t
        }

        return O(t, e), t.prototype.notifyNext = function () {
            this.values.clear()
        }, t.prototype.notifyError = function (e) {
            this._error(e)
        }, t.prototype._next = function (e) {
            this.keySelector ? this._useKeySelector(e) : this._finalizeNext(e, e)
        }, t.prototype._useKeySelector = function (e) {
            var t = this.destination;
            try {
                var n = this.keySelector(e)
            } catch (e) {
                return void t.error(e)
            }
            this._finalizeNext(n, e)
        }, t.prototype._finalizeNext = function (e, t) {
            var n = this.values;
            n.has(e) || (n.add(e), this.destination.next(t))
        }, t
    }(wc), mt = function () {
        function e(e) {
            this.errorFactory = e
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Hz(e, this.errorFactory))
        }, e
    }(), Hz = function (e) {
        function t(t, n) {
            return (t = e.call(this, t) || this).errorFactory = n, t.hasValue = !1, t
        }

        return O(t, e), t.prototype._next = function (e) {
            this.hasValue = !0, this.destination.next(e)
        }, t.prototype._complete = function () {
            if (this.hasValue) return this.destination.complete();
            var e = void 0;
            try {
                e = this.errorFactory()
            } catch (t) {
                e = t
            }
            this.destination.error(e)
        }, t
    }(ia), nt = function () {
        function e(e) {
            if (this.total = e, 0 > this.total) throw new Pk
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Iz(e, this.total))
        }, e
    }(), Iz = function (e) {
        function t(t, n) {
            return (t = e.call(this, t) || this).total = n, t.count = 0, t
        }

        return O(t, e), t.prototype._next = function (e) {
            var t = this.total, n = ++this.count;
            n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()))
        }, t
    }(ia), ot = function () {
        function e(e) {
            this.project = e
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Jz(e, this.project))
        }, e
    }(), Jz = function (e) {
        function t(t, n) {
            return (t = e.call(this, t) || this).project = n, t.hasSubscription = !1, t.hasCompleted = !1, t.index = 0, t
        }

        return O(t, e), t.prototype._next = function (e) {
            this.hasSubscription || this.tryNext(e)
        }, t.prototype.tryNext = function (e) {
            var t = this.index++;
            try {
                var n = this.project(e, t)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.hasSubscription = !0, this._innerSub(n)
        }, t.prototype._innerSub = function (e) {
            var t = new vc(this), n = this.destination;
            n.add(t), (e = ic(e, t)) !== t && n.add(e)
        }, t.prototype._complete = function () {
            this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe()
        }, t.prototype.notifyNext = function (e) {
            this.destination.next(e)
        }, t.prototype.notifyError = function (e) {
            this.destination.error(e)
        }, t.prototype.notifyComplete = function () {
            this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
        }, t
    }(wc), pt = function () {
        function e(e) {
            this.callback = e
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Kz(e, this.callback))
        }, e
    }(), Kz = function (e) {
        function t(t, n) {
            return (t = e.call(this, t) || this).add(new Na(n)), t
        }

        return O(t, e), t
    }(ia), rt = function () {
        function e() {
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Lz(e))
        }, e
    }(), Lz = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return O(t, e), t.prototype._next = function (e) {
        }, t
    }(ia), st = function () {
        function e(e) {
            if (this.total = e, 0 > this.total) throw new Pk
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Mz(e, this.total))
        }, e
    }(), Mz = function (e) {
        function t(t, n) {
            return (t = e.call(this, t) || this).total = n, t.ring = [], t.count = 0, t
        }

        return O(t, e), t.prototype._next = function (e) {
            var t = this.ring, n = this.total, r = this.count++;
            t.length < n ? t.push(e) : t[r % n] = e
        }, t.prototype._complete = function () {
            var e = this.destination, t = this.count;
            if (0 < t) for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; i < n; i++) {
                var o = t++ % n;
                e.next(r[o])
            }
            e.complete()
        }, t
    }(ia), tt = function () {
        function e(e) {
            this.value = e
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Nz(e, this.value))
        }, e
    }(), Nz = function (e) {
        function t(t, n) {
            return (t = e.call(this, t) || this).value = n, t
        }

        return O(t, e), t.prototype._next = function (e) {
            this.destination.next(this.value)
        }, t
    }(ia), ut = function () {
        function e(e, t, n) {
            void 0 === n && (n = !1), this.accumulator = e, this.seed = t, this.hasSeed = n
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Oz(e, this.accumulator, this.seed, this.hasSeed))
        }, e
    }(), Oz = function (e) {
        function t(t, n, r, i) {
            return (t = e.call(this, t) || this).accumulator = n, t._seed = r, t.hasSeed = i, t.index = 0, t
        }

        return O(t, e), Object.defineProperty(t.prototype, "seed", {
            get: function () {
                return this._seed
            }, set: function (e) {
                this.hasSeed = !0, this._seed = e
            }, enumerable: !0, configurable: !0
        }), t.prototype._next = function (e) {
            if (this.hasSeed) return this._tryNext(e);
            this.seed = e, this.destination.next(e)
        }, t.prototype._tryNext = function (e) {
            var t = this.index++;
            try {
                var n = this.accumulator(this.seed, e, t)
            } catch (e) {
                this.destination.error(e)
            }
            this.seed = n, this.destination.next(n)
        }, t
    }(ia), wt = function () {
        function e(e, t) {
            this.subjectFactory = e, this.selector = t
        }

        return e.prototype.call = function (e, t) {
            var n = this.selector, r = this.subjectFactory();
            return (e = n(r).subscribe(e)).add(t.subscribe(r)), e
        }, e
    }(), yt = function () {
        function e(e, t) {
            this.notifier = e, this.source = t
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Pz(e, this.notifier, this.source))
        }, e
    }(), Pz = function (e) {
        function t(t, n, r) {
            return (t = e.call(this, t) || this).notifier = n, t.source = r, t
        }

        return O(t, e), t.prototype.error = function (t) {
            if (!this.isStopped) {
                var n = this.errors, r = this.retries, i = this.retriesSubscription;
                if (r) this.retriesSubscription = this.errors = void 0; else {
                    n = new Pa;
                    try {
                        r = (0, this.notifier)(n)
                    } catch (t) {
                        return e.prototype.error.call(this, t)
                    }
                    i = ic(r, new vc(this))
                }
                this._unsubscribeAndRecycle(), this.errors = n, this.retries = r, this.retriesSubscription = i, n.next(t)
            }
        }, t.prototype._unsubscribe = function () {
            var e = this.errors, t = this.retriesSubscription;
            e && (e.unsubscribe(), this.errors = void 0), t && (t.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0
        }, t.prototype.notifyNext = function () {
            var e = this._unsubscribe;
            this._unsubscribe = null, this._unsubscribeAndRecycle(), this._unsubscribe = e, this.source.subscribe(this)
        }, t
    }(wc), Bt = function () {
        function e(e) {
            this.project = e
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Qz(e, this.project))
        }, e
    }(), Qz = function (e) {
        function t(t, n) {
            return (t = e.call(this, t) || this).project = n, t.index = 0, t
        }

        return O(t, e), t.prototype._next = function (e) {
            var t = this.index++;
            try {
                var n = this.project(e, t)
            } catch (e) {
                return void this.destination.error(e)
            }
            this._innerSub(n)
        }, t.prototype._innerSub = function (e) {
            var t = this.innerSubscription;
            t && t.unsubscribe(), t = new vc(this);
            var n = this.destination;
            n.add(t), this.innerSubscription = ic(e, t), this.innerSubscription !== t && n.add(this.innerSubscription)
        }, t.prototype._complete = function () {
            var t = this.innerSubscription;
            t && !t.closed || e.prototype._complete.call(this), this.unsubscribe()
        }, t.prototype._unsubscribe = function () {
            this.innerSubscription = void 0
        }, t.prototype.notifyComplete = function () {
            this.innerSubscription = void 0, this.isStopped && e.prototype._complete.call(this)
        }, t.prototype.notifyNext = function (e) {
            this.destination.next(e)
        }, t
    }(wc), Ct = function () {
        function e(e) {
            this.notifier = e
        }

        return e.prototype.call = function (e, t) {
            e = new Rz(e);
            var n = ic(this.notifier, new vc(e));
            return n && !e.seenValue ? (e.add(n), t.subscribe(e)) : e
        }, e
    }(), Rz = function (e) {
        function t(t) {
            return (t = e.call(this, t) || this).seenValue = !1, t
        }

        return O(t, e), t.prototype.notifyNext = function () {
            this.seenValue = !0, this.complete()
        }, t.prototype.notifyComplete = function () {
        }, t
    }(wc), Et = function () {
        function e(e, t) {
            this.predicate = e, this.inclusive = t
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Sz(e, this.predicate, this.inclusive))
        }, e
    }(), Sz = function (e) {
        function t(t, n, r) {
            return (t = e.call(this, t) || this).predicate = n, t.inclusive = r, t.index = 0, t
        }

        return O(t, e), t.prototype._next = function (e) {
            var t = this.destination;
            try {
                var n = this.predicate(e, this.index++)
            } catch (e) {
                return void t.error(e)
            }
            this.nextOrComplete(e, n)
        }, t.prototype.nextOrComplete = function (e, t) {
            var n = this.destination;
            t ? n.next(e) : (this.inclusive && n.next(e), n.complete())
        }, t
    }(ia), Ft = function () {
        function e(e, t, n) {
            this.nextOrObserver = e, this.error = t, this.complete = n
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Tz(e, this.nextOrObserver, this.error, this.complete))
        }, e
    }(), Tz = function (e) {
        function t(t, n, r, i) {
            return (t = e.call(this, t) || this)._tapNext = hc, t._tapError = hc, t._tapComplete = hc, t._tapError = r || hc, t._tapComplete = i || hc, ke(n) ? (t._context = t, t._tapNext = n) : n && (t._context = n, t._tapNext = n.next || hc, t._tapError = n.error || hc, t._tapComplete = n.complete || hc), t
        }

        return O(t, e), t.prototype._next = function (e) {
            try {
                this._tapNext.call(this._context, e)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.next(e)
        }, t.prototype._error = function (e) {
            try {
                this._tapError.call(this._context, e)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.error(e)
        }, t.prototype._complete = function () {
            try {
                this._tapComplete.call(this._context)
            } catch (e) {
                return void this.destination.error(e)
            }
            return this.destination.complete()
        }, t
    }(ia), Ht = {leading: !0, trailing: !1};
    !function (e) {
        function t(t, n, r, i) {
            var o = e.call(this, t) || this;
            return o.destination = t, o.durationSelector = n, o._leading = r, o._trailing = i, o._hasValue = !1, o
        }

        O(t, e), t.prototype._next = function (e) {
            this._hasValue = !0, this._sendValue = e, this._throttled || (this._leading ? this.send() : this.throttle(e))
        }, t.prototype.send = function () {
            var e = this._sendValue;
            this._hasValue && (this.destination.next(e), this.throttle(e)), this._hasValue = !1, this._sendValue = void 0
        }, t.prototype.throttle = function (e) {
            (e = this.tryDurationSelector(e)) && this.add(this._throttled = ic(e, new vc(this)))
        }, t.prototype.tryDurationSelector = function (e) {
            try {
                return this.durationSelector(e)
            } catch (e) {
                return this.destination.error(e), null
            }
        }, t.prototype.throttlingDone = function () {
            var e = this._throttled, t = this._trailing;
            e && e.unsubscribe(), this._throttled = void 0, t && this.send()
        }, t.prototype.notifyNext = function () {
            this.throttlingDone()
        }, t.prototype.notifyComplete = function () {
            this.throttlingDone()
        }
    }(wc);
    for (var It = function () {
        function e(e, t, n, r) {
            this.duration = e, this.scheduler = t, this.leading = n, this.trailing = r
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Uz(e, this.duration, this.scheduler, this.leading, this.trailing))
        }, e
    }(), Uz = function (e) {
        function t(t, n, r, i, o) {
            return (t = e.call(this, t) || this).duration = n, t.scheduler = r, t.leading = i, t.trailing = o, t._hasTrailingValue = !1, t._trailingValue = null, t
        }

        return O(t, e), t.prototype._next = function (e) {
            this.throttled ? this.trailing && (this._trailingValue = e, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(Jt, this.duration, {subscriber: this})), this.leading ? this.destination.next(e) : this.trailing && (this._trailingValue = e, this._hasTrailingValue = !0))
        }, t.prototype._complete = function () {
            this._hasTrailingValue && this.destination.next(this._trailingValue), this.destination.complete()
        }, t.prototype.clearThrottle = function () {
            var e = this.throttled;
            e && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), e.unsubscribe(), this.remove(e), this.throttled = null)
        }, t
    }(ia), Lt = function () {
        function e(e, t, n, r) {
            this.waitFor = e, this.absoluteTimeout = t, this.withObservable = n, this.scheduler = r
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Vz(e, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler))
        }, e
    }(), Vz = function (e) {
        function t(t, n, r, i, o) {
            return (t = e.call(this, t) || this).absoluteTimeout = n, t.waitFor = r, t.withObservable = i, t.scheduler = o, t.scheduleTimeout(), t
        }

        return O(t, e), t.dispatchTimeout = function (e) {
            var t = e.withObservable;
            e._unsubscribeAndRecycle(), e.add(ic(t, new vc(e)))
        }, t.prototype.scheduleTimeout = function () {
            var e = this.action;
            e ? this.action = e.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(t.dispatchTimeout, this.waitFor, this))
        }, t.prototype._next = function (t) {
            this.absoluteTimeout || this.scheduleTimeout(), e.prototype._next.call(this, t)
        }, t.prototype._unsubscribe = function () {
            this.action = void 0, this.withObservable = this.scheduler = null
        }, t
    }(wc), Nt = function () {
        function e(e, t) {
            this.observables = e, this.project = t
        }

        return e.prototype.call = function (e, t) {
            return t.subscribe(new Wz(e, this.observables, this.project))
        }, e
    }(), Wz = function (e) {
        function t(t, n, r) {
            (t = e.call(this, t) || this).observables = n, t.project = r, t.toRespond = [], r = n.length, t.values = Array(r);
            for (var i = 0; i < r; i++) t.toRespond.push(i);
            for (i = 0; i < r; i++) t.add(ii(t, n[i], void 0, i));
            return t
        }

        return O(t, e), t.prototype.notifyNext = function (e, t, n) {
            this.values[n] = t, 0 < (e = this.toRespond).length && (-1 !== (n = e.indexOf(n)) && e.splice(n, 1))
        }, t.prototype.notifyComplete = function () {
        }, t.prototype._next = function (e) {
            0 === this.toRespond.length && (e = [e].concat(this.values), this.project ? this._tryProject(e) : this.destination.next(e))
        }, t.prototype._tryProject = function (e) {
            try {
                var t = this.project.apply(this, e)
            } catch (e) {
                return void this.destination.error(e)
            }
            this.destination.next(t)
        }, t
    }(Qk), Hq = $a((function (e) {
        var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (t) {
            var n = new Uint8Array(16);
            e.exports = function () {
                return t(n), n
            }
        } else {
            var r = Array(16);
            e.exports = function () {
                for (var e, t = 0; 16 > t; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
                return r
            }
        }
    })), ab = [], Fh = 0; 256 > Fh; ++Fh) ab[Fh] = (Fh + 256).toString(16).substr(1);
    var Iq = function (e, t) {
        return t = t || 0, [ab[e[t++]], ab[e[t++]], ab[e[t++]], ab[e[t++]], "-", ab[e[t++]], ab[e[t++]], "-", ab[e[t++]], ab[e[t++]], "-", ab[e[t++]], ab[e[t++]], "-", ab[e[t++]], ab[e[t++]], ab[e[t++]], ab[e[t++]], ab[e[t++]], ab[e[t++]]].join("")
    }, Ud = function (e, t, n) {
        if (n = t && n || 0, "string" == typeof e && (t = "binary" === e ? Array(16) : null, e = null), (e = (e = e || {}).random || (e.rng || Hq)())[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128, t) for (var r = 0; 16 > r; ++r) t[n + r] = e[r];
        return t || Iq(e)
    }, gg = Ud(), Tk = !1, Oc, rd, Uk, Vk, sd, Vd, ec, Ve, Rb, Wk, Pc, Wd, Qc, Rc, Sc, We, Tc, Uc;
    !function (e) {
        e[e.ATTRIBUTE_OPERATION_ERR_FAILURE = 2] = "ATTRIBUTE_OPERATION_ERR_FAILURE", e[e.ATTRIBUTE_OPERATION_ERR_INVALID_ARGUMENT = 3] = "ATTRIBUTE_OPERATION_ERR_INVALID_ARGUMENT", e[e.ATTRIBUTE_OPERATION_ERR_SIZE_OVERFLOW = 4] = "ATTRIBUTE_OPERATION_ERR_SIZE_OVERFLOW", e[e.ATTRIBUTE_OPERATION_ERR_TOO_OFTEN = 5] = "ATTRIBUTE_OPERATION_ERR_TOO_OFTEN", e[e.ATTRIBUTE_OPERATION_ERR_USER_NOT_FOUND = 6] = "ATTRIBUTE_OPERATION_ERR_USER_NOT_FOUND", e[e.ATTRIBUTE_OPERATION_ERR_TIMEOUT = 7] = "ATTRIBUTE_OPERATION_ERR_TIMEOUT", e[e.ATTRIBUTE_OPERATION_ERR_USER_NOT_LOGGED_IN = 102] = "ATTRIBUTE_OPERATION_ERR_USER_NOT_LOGGED_IN"
    }(Oc || (Oc = {})), function (e) {
        e[e.CHANNEL_MESSAGE_ERR_FAILURE = 1] = "CHANNEL_MESSAGE_ERR_FAILURE", e[e.CHANNEL_MESSAGE_ERR_TIMEOUT = 2] = "CHANNEL_MESSAGE_ERR_TIMEOUT", e[e.CHANNEL_MESSAGE_ERR_TOO_OFTEN = 3] = "CHANNEL_MESSAGE_ERR_TOO_OFTEN", e[e.CHANNEL_MESSAGE_ERR_INVALID_MESSAGE = 4] = "CHANNEL_MESSAGE_ERR_INVALID_MESSAGE", e[e.CHANNEL_MESSAGE_ERR_NOT_IN_CHANNEL = 5] = "CHANNEL_MESSAGE_ERR_NOT_IN_CHANNEL", e[e.CHANNEL_MESSAGE_ERR_USER_NOT_LOGGED_IN = 102] = "CHANNEL_MESSAGE_ERR_USER_NOT_LOGGED_IN"
    }(rd || (rd = {})), function (e) {
        e[e.CREATE_CHANNEL_ERR_INVALID_ARGUMENT = 1] = "CREATE_CHANNEL_ERR_INVALID_ARGUMENT"
    }(Uk || (Uk = {})), function (e) {
        e[e.CREATE_INSTANCE_ERR_INVALID_ARGUMENT = 1] = "CREATE_INSTANCE_ERR_INVALID_ARGUMENT"
    }(Vk || (Vk = {})), function (e) {
        e[e.GET_MEMBERS_ERR_FAILURE = 1] = "GET_MEMBERS_ERR_FAILURE", e[e.GET_MEMBERS_ERR_REJECTED = 2] = "GET_MEMBERS_ERR_REJECTED", e[e.GET_MEMBERS_ERR_TIMEOUT = 3] = "GET_MEMBERS_ERR_TIMEOUT", e[e.GET_MEMBERS_ERR_TOO_OFTEN = 4] = "GET_MEMBERS_ERR_TOO_OFTEN", e[e.GET_MEMBERS_ERR_NOT_IN_CHANNEL = 5] = "GET_MEMBERS_ERR_NOT_IN_CHANNEL", e[e.GET_MEMBERS_ERR_USER_NOT_LOGGED_IN = 102] = "GET_MEMBERS_ERR_USER_NOT_LOGGED_IN"
    }(sd || (sd = {})), function (e) {
        e[e.INVITATION_API_CALL_ERR_INVALID_ARGUMENT = 1] = "INVITATION_API_CALL_ERR_INVALID_ARGUMENT", e[e.INVITATION_API_CALL_ERR_NOT_STARTED = 2] = "INVITATION_API_CALL_ERR_NOT_STARTED", e[e.INVITATION_API_CALL_ERR_ALREADY_END = 3] = "INVITATION_API_CALL_ERR_ALREADY_END", e[e.INVITATION_API_CALL_ERR_ALREADY_ACCEPT = 4] = "INVITATION_API_CALL_ERR_ALREADY_ACCEPT", e[e.INVITATION_API_CALL_ERR_ALREADY_SENT = 5] = "INVITATION_API_CALL_ERR_ALREADY_SENT"
    }(Vd || (Vd = {})), function (e) {
        e[e.JOIN_CHANNEL_ERR_FAILURE = 1] = "JOIN_CHANNEL_ERR_FAILURE", e[e.JOIN_CHANNEL_ERR_REJECTED = 2] = "JOIN_CHANNEL_ERR_REJECTED", e[e.JOIN_CHANNEL_ERR_INVALID_ARGUMENT = 3] = "JOIN_CHANNEL_ERR_INVALID_ARGUMENT", e[e.JOIN_CHANNEL_TIMEOUT = 4] = "JOIN_CHANNEL_TIMEOUT", e[e.JOIN_CHANNEL_ERR_EXCEED_LIMIT = 5] = "JOIN_CHANNEL_ERR_EXCEED_LIMIT", e[e.JOIN_CHANNEL_ERR_ALREADY_JOINED = 6] = "JOIN_CHANNEL_ERR_ALREADY_JOINED", e[e.JOIN_CHANNEL_ERR_TOO_OFTEN = 7] = "JOIN_CHANNEL_ERR_TOO_OFTEN", e[e.JOIN_CHANNEL_ERR_JOIN_SAME_CHANNEL_TOO_OFTEN = 8] = "JOIN_CHANNEL_ERR_JOIN_SAME_CHANNEL_TOO_OFTEN", e[e.JOIN_CHANNEL_ERR_USER_NOT_LOGGED_IN = 102] = "JOIN_CHANNEL_ERR_USER_NOT_LOGGED_IN", e[e.JOIN_CHANNEL_ERR_ABORTED_BY_LEAVE = 201] = "JOIN_CHANNEL_ERR_ABORTED_BY_LEAVE", e[e.JOIN_CHANNEL_ERR_ALREADY_JOINED_CHANNEL_OF_SAME_ID = 202] = "JOIN_CHANNEL_ERR_ALREADY_JOINED_CHANNEL_OF_SAME_ID"
    }(ec || (ec = {})), function (e) {
        e[e.LEAVE_CHANNEL_ERR_FAILURE = 1] = "LEAVE_CHANNEL_ERR_FAILURE", e[e.LEAVE_CHANNEL_ERR_REJECTED = 2] = "LEAVE_CHANNEL_ERR_REJECTED", e[e.LEAVE_CHANNEL_ERR_NOT_IN_CHANNEL = 3] = "LEAVE_CHANNEL_ERR_NOT_IN_CHANNEL", e[e.LEAVE_CHANNEL_ERR_USER_NOT_LOGGED_IN = 102] = "LEAVE_CHANNEL_ERR_USER_NOT_LOGGED_IN"
    }(Ve || (Ve = {})), function (e) {
        e[e.LOGIN_ERR_UNKNOWN = 1] = "LOGIN_ERR_UNKNOWN", e[e.LOGIN_ERR_REJECTED = 2] = "LOGIN_ERR_REJECTED", e[e.LOGIN_ERR_INVALID_ARGUMENT = 3] = "LOGIN_ERR_INVALID_ARGUMENT", e[e.LOGIN_ERR_INVALID_APP_ID = 4] = "LOGIN_ERR_INVALID_APP_ID", e[e.LOGIN_ERR_INVALID_TOKEN = 5] = "LOGIN_ERR_INVALID_TOKEN", e[e.LOGIN_ERR_TOKEN_EXPIRED = 6] = "LOGIN_ERR_TOKEN_EXPIRED", e[e.LOGIN_ERR_NOT_AUTHORIZED = 7] = "LOGIN_ERR_NOT_AUTHORIZED", e[e.LOGIN_ERR_ALREADY_LOGIN = 8] = "LOGIN_ERR_ALREADY_LOGIN", e[e.LOGIN_ERR_TIMEOUT = 9] = "LOGIN_ERR_TIMEOUT", e[e.LOGIN_ERR_TOO_OFTEN = 10] = "LOGIN_ERR_TOO_OFTEN", e[e.LOGIN_ERR_ABORTED_BY_LOGOUT = 201] = "LOGIN_ERR_ABORTED_BY_LOGOUT"
    }(Rb || (Rb = {})), function (e) {
        e[e.LOGOUT_ERR_USER_NOT_LOGGED_IN = 102] = "LOGOUT_ERR_USER_NOT_LOGGED_IN"
    }(Wk || (Wk = {})), function (e) {
        e[e.PEER_MESSAGE_ERR_FAILURE = 1] = "PEER_MESSAGE_ERR_FAILURE", e[e.PEER_MESSAGE_ERR_TIMEOUT = 2] = "PEER_MESSAGE_ERR_TIMEOUT", e[e.PEER_MESSAGE_ERR_TOO_OFTEN = 5] = "PEER_MESSAGE_ERR_TOO_OFTEN", e[e.PEER_MESSAGE_ERR_INVALID_USERID = 6] = "PEER_MESSAGE_ERR_INVALID_USERID", e[e.PEER_MESSAGE_ERR_INVALID_MESSAGE = 7] = "PEER_MESSAGE_ERR_INVALID_MESSAGE", e[e.PEER_MESSAGE_ERR_INCOMPATIBLE_MESSAGE = 8] = "PEER_MESSAGE_ERR_INCOMPATIBLE_MESSAGE", e[e.PEER_MESSAGE_ERR_USER_NOT_LOGGED_IN = 102] = "PEER_MESSAGE_ERR_USER_NOT_LOGGED_IN"
    }(Pc || (Pc = {})), function (e) {
        e[e.QUERY_PEERS_ONLINE_STATUS_ERR_INVALID_ARGUMENT = 2] = "QUERY_PEERS_ONLINE_STATUS_ERR_INVALID_ARGUMENT", e[e.QUERY_PEERS_ONLINE_STATUS_ERR_REJECTED = 3] = "QUERY_PEERS_ONLINE_STATUS_ERR_REJECTED", e[e.QUERY_PEERS_ONLINE_STATUS_ERR_TIMEOUT = 4] = "QUERY_PEERS_ONLINE_STATUS_ERR_TIMEOUT", e[e.QUERY_PEERS_ONLINE_STATUS_ERR_TOO_OFTEN = 5] = "QUERY_PEERS_ONLINE_STATUS_ERR_TOO_OFTEN", e[e.QUERY_PEERS_ONLINE_STATUS_ERR_USER_NOT_LOGGED_IN = 102] = "QUERY_PEERS_ONLINE_STATUS_ERR_USER_NOT_LOGGED_IN"
    }(Wd || (Wd = {})), function (e) {
        e[e.RENEW_TOKEN_ERR_FAILURE = 1] = "RENEW_TOKEN_ERR_FAILURE", e[e.RENEW_TOKEN_ERR_INVALID_ARGUMENT = 2] = "RENEW_TOKEN_ERR_INVALID_ARGUMENT", e[e.RENEW_TOKEN_ERR_REJECTED = 3] = "RENEW_TOKEN_ERR_REJECTED", e[e.RENEW_TOKEN_ERR_TOO_OFTEN = 4] = "RENEW_TOKEN_ERR_TOO_OFTEN", e[e.RENEW_TOKEN_ERR_TOKEN_EXPIRED = 5] = "RENEW_TOKEN_ERR_TOKEN_EXPIRED", e[e.RENEW_TOKEN_ERR_INVALID_TOKEN = 6] = "RENEW_TOKEN_ERR_INVALID_TOKEN", e[e.RENEW_TOKEN_ERR_USER_NOT_LOGGED_IN = 102] = "RENEW_TOKEN_ERR_USER_NOT_LOGGED_IN", e[e.RENEW_TOKEN_ERR_ABORTED_BY_LOGOUT = 201] = "RENEW_TOKEN_ERR_ABORTED_BY_LOGOUT"
    }(Qc || (Qc = {})), function (e) {
        e[e.GET_CHANNEL_MEMBER_COUNT_ERR_FAILURE = 1] = "GET_CHANNEL_MEMBER_COUNT_ERR_FAILURE", e[e.GET_CHANNEL_MEMBER_COUNT_ERR_INVALID_ARGUMENT = 2] = "GET_CHANNEL_MEMBER_COUNT_ERR_INVALID_ARGUMENT", e[e.GET_CHANNEL_MEMBER_COUNT_ERR_TOO_OFTEN = 3] = "GET_CHANNEL_MEMBER_COUNT_ERR_TOO_OFTEN", e[e.GET_CHANNEL_MEMBER_COUNT_ERR_TIMEOUT = 4] = "GET_CHANNEL_MEMBER_COUNT_ERR_TIMEOUT", e[e.GET_CHANNEL_MEMBER_COUNT_ERR_EXCEED_LIMIT = 5] = "GET_CHANNEL_MEMBER_COUNT_ERR_EXCEED_LIMIT", e[e.GET_CHANNEL_MEMBER_COUNT_ERR_NOT_INITIALIZED = 101] = "GET_CHANNEL_MEMBER_COUNT_ERR_NOT_INITIALIZED", e[e.GET_CHANNEL_MEMBER_COUNT_ERR_USER_NOT_LOGGED_IN = 102] = "GET_CHANNEL_MEMBER_COUNT_ERR_USER_NOT_LOGGED_IN"
    }(Rc || (Rc = {})), function (e) {
        e[e.PEER_SUBSCRIPTION_STATUS_ERR_FAILURE = 1] = "PEER_SUBSCRIPTION_STATUS_ERR_FAILURE", e[e.PEER_SUBSCRIPTION_STATUS_ERR_INVALID_ARGUMENT = 2] = "PEER_SUBSCRIPTION_STATUS_ERR_INVALID_ARGUMENT", e[e.PEER_SUBSCRIPTION_STATUS_ERR_REJECTED = 3] = "PEER_SUBSCRIPTION_STATUS_ERR_REJECTED", e[e.PEER_SUBSCRIPTION_STATUS_ERR_TIMEOUT = 4] = "PEER_SUBSCRIPTION_STATUS_ERR_TIMEOUT", e[e.PEER_SUBSCRIPTION_STATUS_ERR_TOO_OFTEN = 5] = "PEER_SUBSCRIPTION_STATUS_ERR_TOO_OFTEN", e[e.PEER_SUBSCRIPTION_STATUS_ERR_OVERFLOW = 6] = "PEER_SUBSCRIPTION_STATUS_ERR_OVERFLOW", e[e.PEER_SUBSCRIPTION_STATUS_ERR_USER_NOT_LOGGED_IN = 102] = "PEER_SUBSCRIPTION_STATUS_ERR_USER_NOT_LOGGED_IN"
    }(Sc || (Sc = {})), function (e) {
        e[e.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_FAILURE = 1] = "QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_FAILURE", e[e.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TIMEOUT = 2] = "QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TIMEOUT", e[e.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TOO_OFTEN = 3] = "QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TOO_OFTEN", e[e.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_USER_NOT_LOGGED_IN = 102] = "QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_USER_NOT_LOGGED_IN"
    }(We || (We = {})), function (e) {
        e[e.UPLOAD_MEDIA_ERR_FAILURE = 1] = "UPLOAD_MEDIA_ERR_FAILURE", e[e.UPLOAD_MEDIA_ERR_INVALID_ARGUMENT = 2] = "UPLOAD_MEDIA_ERR_INVALID_ARGUMENT", e[e.UPLOAD_MEDIA_ERR_TIMEOUT = 3] = "UPLOAD_MEDIA_ERR_TIMEOUT", e[e.UPLOAD_MEDIA_ERR_SIZE_OVERFLOW = 4] = "UPLOAD_MEDIA_ERR_SIZE_OVERFLOW", e[e.UPLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED = 5] = "UPLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED", e[e.UPLOAD_MEDIA_ERR_INTERRUPTED = 6] = "UPLOAD_MEDIA_ERR_INTERRUPTED", e[e.UPLOAD_MEDIA_ERR_NOT_LOGGED_IN = 102] = "UPLOAD_MEDIA_ERR_NOT_LOGGED_IN"
    }(Tc || (Tc = {})), function (e) {
        e[e.DOWNLOAD_MEDIA_ERR_FAILURE = 1] = "DOWNLOAD_MEDIA_ERR_FAILURE", e[e.DOWNLOAD_MEDIA_ERR_INVALID_ARGUMENT = 2] = "DOWNLOAD_MEDIA_ERR_INVALID_ARGUMENT", e[e.DOWNLOAD_MEDIA_ERR_TIMEOUT = 3] = "DOWNLOAD_MEDIA_ERR_TIMEOUT", e[e.DOWNLOAD_MEDIA_ERR_NOT_EXIST = 4] = "DOWNLOAD_MEDIA_ERR_NOT_EXIST", e[e.DOWNLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED = 5] = "DOWNLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED", e[e.DOWNLOAD_MEDIA_ERR_INTERRUPTED = 6] = "DOWNLOAD_MEDIA_ERR_INTERRUPTED", e[e.DOWNLOAD_MEDIA_ERR_NOT_LOGGED_IN = 102] = "DOWNLOAD_MEDIA_ERR_NOT_LOGGED_IN"
    }(Uc || (Uc = {}));
    var Sb = Oc.ATTRIBUTE_OPERATION_ERR_FAILURE, Ja = Oc.ATTRIBUTE_OPERATION_ERR_INVALID_ARGUMENT,
        re = Oc.ATTRIBUTE_OPERATION_ERR_SIZE_OVERFLOW;
    Oc.ATTRIBUTE_OPERATION_ERR_TOO_OFTEN;
    var Jq = Oc.ATTRIBUTE_OPERATION_ERR_USER_NOT_FOUND, Tb = Oc.ATTRIBUTE_OPERATION_ERR_TIMEOUT,
        Ub = Oc.ATTRIBUTE_OPERATION_ERR_USER_NOT_LOGGED_IN, hg = rd.CHANNEL_MESSAGE_ERR_FAILURE,
        Xk = rd.CHANNEL_MESSAGE_ERR_TIMEOUT, Kq = rd.CHANNEL_MESSAGE_ERR_TOO_OFTEN,
        Gh = rd.CHANNEL_MESSAGE_ERR_INVALID_MESSAGE;
    rd.CHANNEL_MESSAGE_ERR_NOT_IN_CHANNEL;
    var ig = rd.CHANNEL_MESSAGE_ERR_USER_NOT_LOGGED_IN, Xz = Uk.CREATE_CHANNEL_ERR_INVALID_ARGUMENT,
        Lq = Vk.CREATE_INSTANCE_ERR_INVALID_ARGUMENT;
    Rc.GET_CHANNEL_MEMBER_COUNT_ERR_FAILURE;
    var Mq = Rc.GET_CHANNEL_MEMBER_COUNT_ERR_INVALID_ARGUMENT;
    Rc.GET_CHANNEL_MEMBER_COUNT_ERR_TOO_OFTEN;
    var Nq = Rc.GET_CHANNEL_MEMBER_COUNT_ERR_TIMEOUT, Yz = Rc.GET_CHANNEL_MEMBER_COUNT_ERR_EXCEED_LIMIT;
    Rc.GET_CHANNEL_MEMBER_COUNT_ERR_NOT_INITIALIZED;
    var Zz = Rc.GET_CHANNEL_MEMBER_COUNT_ERR_USER_NOT_LOGGED_IN, $z = sd.GET_MEMBERS_ERR_FAILURE,
        aA = sd.GET_MEMBERS_ERR_REJECTED;
    sd.GET_MEMBERS_ERR_TIMEOUT, sd.GET_MEMBERS_ERR_TOO_OFTEN;
    var bA = sd.GET_MEMBERS_ERR_NOT_IN_CHANNEL, cA = sd.GET_MEMBERS_ERR_USER_NOT_LOGGED_IN,
        xc = Vd.INVITATION_API_CALL_ERR_INVALID_ARGUMENT, dA = Vd.INVITATION_API_CALL_ERR_NOT_STARTED,
        Hh = Vd.INVITATION_API_CALL_ERR_ALREADY_END, Oq = Vd.INVITATION_API_CALL_ERR_ALREADY_ACCEPT,
        eA = Vd.INVITATION_API_CALL_ERR_ALREADY_SENT, Pq = ec.JOIN_CHANNEL_ERR_FAILURE;
    ec.JOIN_CHANNEL_ERR_REJECTED;
    var fA = ec.JOIN_CHANNEL_ERR_INVALID_ARGUMENT, Qq = ec.JOIN_CHANNEL_TIMEOUT, Rq = ec.JOIN_CHANNEL_ERR_EXCEED_LIMIT,
        Sq = ec.JOIN_CHANNEL_ERR_ALREADY_JOINED;
    ec.JOIN_CHANNEL_ERR_TOO_OFTEN;
    var Tq = ec.JOIN_CHANNEL_ERR_USER_NOT_LOGGED_IN, Uq = ec.JOIN_CHANNEL_ERR_ALREADY_JOINED_CHANNEL_OF_SAME_ID,
        Vq = Ve.LEAVE_CHANNEL_ERR_FAILURE, Wq = Ve.LEAVE_CHANNEL_ERR_REJECTED, gA = Ve.LEAVE_CHANNEL_ERR_NOT_IN_CHANNEL,
        hA = Ve.LEAVE_CHANNEL_ERR_USER_NOT_LOGGED_IN, Xq = Rb.LOGIN_ERR_UNKNOWN, jg = Rb.LOGIN_ERR_REJECTED,
        Ih = Rb.LOGIN_ERR_INVALID_ARGUMENT, Yq = Rb.LOGIN_ERR_INVALID_APP_ID, Zq = Rb.LOGIN_ERR_INVALID_TOKEN,
        Jh = Rb.LOGIN_ERR_TOKEN_EXPIRED;
    Rb.LOGIN_ERR_NOT_AUTHORIZED;
    var iA = Rb.LOGIN_ERR_ALREADY_LOGIN, jA = Rb.LOGIN_ERR_TIMEOUT, kA = Rb.LOGIN_ERR_TOO_OFTEN,
        $q = Wk.LOGOUT_ERR_USER_NOT_LOGGED_IN, ar = Pc.PEER_MESSAGE_ERR_FAILURE, Yk = Pc.PEER_MESSAGE_ERR_TIMEOUT,
        br = Pc.PEER_MESSAGE_ERR_TOO_OFTEN, Zk = Pc.PEER_MESSAGE_ERR_INVALID_USERID,
        ue = Pc.PEER_MESSAGE_ERR_INVALID_MESSAGE, $k = Pc.PEER_MESSAGE_ERR_USER_NOT_LOGGED_IN,
        lA = Pc.PEER_MESSAGE_ERR_INCOMPATIBLE_MESSAGE, cr = Wd.QUERY_PEERS_ONLINE_STATUS_ERR_INVALID_ARGUMENT;
    Wd.QUERY_PEERS_ONLINE_STATUS_ERR_REJECTED;
    var mA = Wd.QUERY_PEERS_ONLINE_STATUS_ERR_TIMEOUT;
    Wd.QUERY_PEERS_ONLINE_STATUS_ERR_TOO_OFTEN;
    var nA = Wd.QUERY_PEERS_ONLINE_STATUS_ERR_USER_NOT_LOGGED_IN, oA = Qc.RENEW_TOKEN_ERR_FAILURE,
        pA = Qc.RENEW_TOKEN_ERR_INVALID_ARGUMENT;
    Qc.RENEW_TOKEN_ERR_REJECTED, Qc.RENEW_TOKEN_ERR_TOO_OFTEN;
    var qA = Qc.RENEW_TOKEN_ERR_TOKEN_EXPIRED, rA = Qc.RENEW_TOKEN_ERR_INVALID_TOKEN,
        sA = Qc.RENEW_TOKEN_ERR_USER_NOT_LOGGED_IN, dr = Sc.PEER_SUBSCRIPTION_STATUS_ERR_FAILURE,
        kg = Sc.PEER_SUBSCRIPTION_STATUS_ERR_INVALID_ARGUMENT;
    Sc.PEER_SUBSCRIPTION_STATUS_ERR_REJECTED;
    var tA = Sc.PEER_SUBSCRIPTION_STATUS_ERR_TIMEOUT;
    Sc.PEER_SUBSCRIPTION_STATUS_ERR_TOO_OFTEN;
    var er = Sc.PEER_SUBSCRIPTION_STATUS_ERR_OVERFLOW, al = Sc.PEER_SUBSCRIPTION_STATUS_ERR_USER_NOT_LOGGED_IN;
    We.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_FAILURE, We.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TIMEOUT, We.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TOO_OFTEN, We.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_USER_NOT_LOGGED_IN;
    var lg = Tc.UPLOAD_MEDIA_ERR_FAILURE, wf = Tc.UPLOAD_MEDIA_ERR_INVALID_ARGUMENT, Kh = Tc.UPLOAD_MEDIA_ERR_TIMEOUT,
        uA = Tc.UPLOAD_MEDIA_ERR_SIZE_OVERFLOW, vA = Tc.UPLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED,
        fr = Tc.UPLOAD_MEDIA_ERR_INTERRUPTED, wA = Tc.UPLOAD_MEDIA_ERR_NOT_LOGGED_IN,
        mg = Uc.DOWNLOAD_MEDIA_ERR_FAILURE, bl = Uc.DOWNLOAD_MEDIA_ERR_INVALID_ARGUMENT,
        xA = Uc.DOWNLOAD_MEDIA_ERR_TIMEOUT, yA = Uc.DOWNLOAD_MEDIA_ERR_NOT_EXIST,
        zA = Uc.DOWNLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED, gr = Uc.DOWNLOAD_MEDIA_ERR_INTERRUPTED,
        AA = Uc.DOWNLOAD_MEDIA_ERR_NOT_LOGGED_IN, BA = function (e, t) {
            var n;
            return Gk(e, (function (e, r, i) {
                return !(n = t(e, r, i))
            })), !!n
        }, Lh = function (e, t, n) {
            if (!lb(n)) return !1;
            var r = aa(t);
            return !!("number" == r ? Ed(n) && vk(t, n.length) : "string" == r && t in n) && $f(n[t], e)
        }, cl = function (e, t, n) {
            var r = Va(e) ? rq : BA;
            return n && Lh(e, t, n) && (t = void 0), r(e, Se(t))
        }, CA = function (e, t) {
            var n = -1, r = Ed(e) ? Array(e.length) : [];
            return Gk(e, (function (e, i, o) {
                r[++n] = t(e, i, o)
            })), r
        }, DA = function (e, t) {
            var n = e.length;
            for (e.sort(t); n--;) e[n] = e[n].value;
            return e
        }, EA = function (e, t, n) {
            t = t.length ? ge(t, (function (e) {
                return Va(e) ? function (t) {
                    return Bh(t, 1 === e.length ? e[0] : e)
                } : e
            })) : [Ch];
            var r = -1;
            return t = ge(t, yh(Se)), e = CA(e, (function (e, n, i) {
                return {
                    criteria: ge(t, (function (t) {
                        return t(e)
                    })), index: ++r, value: e
                }
            })), DA(e, (function (e, t) {
                e:{
                    for (var r = -1, i = e.criteria, o = t.criteria, s = i.length, a = n.length; ++r < s;) {
                        t:{
                            var u = i[r], c = o[r];
                            if (u !== c) {
                                var l = void 0 !== u, f = null === u, h = u == u, p = he(u), d = void 0 !== c,
                                    v = null === c, b = c == c, g = he(c);
                                if (!v && !g && !p && u > c || p && d && b && !v && !g || f && d && b || !l && b || !h) {
                                    u = 1;
                                    break t
                                }
                                if (!f && !p && !g && u < c || g && l && h && !f && !p || v && l && h || !d && h || !b) {
                                    u = -1;
                                    break t
                                }
                            }
                            u = 0
                        }
                        if (u) {
                            e = r >= a ? u : u * ("desc" == n[r] ? -1 : 1);
                            break e
                        }
                    }
                    e = e.index - t.index
                }
                return e
            }))
        }, hr = function (e, t) {
            return pq(oq(e, t, Ch), e + "")
        }, ir = hr((function (e, t) {
            if (null == e) return [];
            var n = t.length;
            return 1 < n && Lh(e, t[0], t[1]) ? t = [] : 2 < n && Lh(t[0], t[1], t[2]) && (t = [t[0]]), EA(e, Zh(t, 1), [])
        })), jr = function (e) {
            if (e.__esModule) return e;
            var t = Object.defineProperty({}, "__esModule", {value: !0});
            return Object.keys(e).forEach((function (n) {
                var r = Object.getOwnPropertyDescriptor(e, n);
                Object.defineProperty(t, n, r.get ? r : {
                    enumerable: !0, get: function () {
                        return e[n]
                    }
                })
            })), t
        }(Bz), kr = $a((function (e, t) {
            Object.defineProperty(t, "__esModule", {value: !0});
            var n = [], r = function (e, t) {
                return new WebSocket(e, t)
            };
            t.normalClosureMessage = "Normal closure", t.default = function (e, i) {
                var o = (i = void 0 === i ? {protocols: n, makeWebSocket: r} : i).protocols, s = void 0 === o ? n : o,
                    a = void 0 === (i = i.makeWebSocket) ? r : i;
                return new jr.Observable((function (n) {
                    var r, i = new jr.Subject, o = a(e, s), u = !1, c = !1, l = function (e) {
                        if (r) throw u = !0, e = Error("Web socket message factory function called more than once"), n.error(e), e;
                        return r = e.subscribe((function (e) {
                            o.send(e)
                        })), i
                    };
                    return o.onopen = function () {
                        c ? (u = !0, o.close()) : n.next(l)
                    }, o.onmessage = function (e) {
                        i.next(e.data)
                    }, o.onerror = function (e) {
                        u = !0, n.error(Error(e.message))
                    }, o.onclose = function (e) {
                        u || (u = !0, c ? (n.complete(), i.complete()) : n.error(Error(1e3 === e.code ? t.normalClosureMessage : e.reason)))
                    }, function () {
                        c = !0, r && r.unsubscribe(), u || (u = !0, o.close())
                    }
                }))
            }
        }));
    !function (e) {
        e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") && e.default
    }(kr);
    var oi = function (e, t, n) {
        (void 0 === n || $f(e[t], n)) && (void 0 !== n || t in e) || bg(e, t, n)
    }, ni = function (e, t) {
        if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
    }, FA = function (e) {
        return hr((function (t, n) {
            var r = -1, i = n.length, o = 1 < i ? n[i - 1] : void 0, s = 2 < i ? n[2] : void 0;
            for (o = 3 < e.length && "function" == typeof o ? (i--, o) : void 0, s && Lh(n[0], n[1], s) && (o = 3 > i ? void 0 : o, i = 1), t = Object(t); ++r < i;) (s = n[r]) && e(t, s, r, o);
            return t
        }))
    }((function (e, t, n, r) {
        sm(e, t, n, r)
    })), GA = Math.floor, HA = Math.random, lr = function (e, t) {
        return e + GA(HA() * (t - e + 1))
    }, mr = function (e) {
        var t = e.length;
        return t ? e[lr(0, t - 1)] : void 0
    }, IA = function (e, t) {
        return ge(t, (function (t) {
            return e[t]
        }))
    }, Mi = function (e) {
        return null == e ? [] : IA(e, Ad(e))
    }, JA = function (e) {
        return mr(Mi(e))
    }, KA = function (e) {
        return (Va(e) ? mr : JA)(e)
    }, wm = [], xm = function (e, t) {
        return new WebSocket(e, t)
    }, LA = Math.floor;
    P({target: "Number", stat: !0}, {
        isInteger: function (e) {
            return !ha(e) && isFinite(e) && LA(e) === e
        }
    }), zo("from", Cj, zj);
    var MA = function (e, t) {
        for (var n = Array(arguments.length - 1), r = 0, i = 2, o = !0; i < arguments.length;) n[r++] = arguments[i++];
        return new Promise((function (i, s) {
            n[r] = function (e) {
                if (o) if (o = !1, e) s(e); else {
                    for (var t = Array(arguments.length - 1), n = 0; n < t.length;) t[n++] = arguments[n];
                    i.apply(null, t)
                }
            };
            try {
                e.apply(t || null, n)
            } catch (e) {
                o && (o = !1, s(e))
            }
        }))
    }, NA = $a((function (e, t) {
        t.length = function (e) {
            var t = e.length;
            if (!t) return 0;
            for (var n = 0; 1 < --t % 4 && "=" === e.charAt(t);) ++n;
            return Math.ceil(3 * e.length) / 4 - n
        };
        var n = Array(64), r = Array(123);
        for (e = 0; 64 > e;) r[n[e] = 26 > e ? e + 65 : 52 > e ? e + 71 : 62 > e ? e - 4 : e - 59 | 43] = e++;
        t.encode = function (e, t, r) {
            for (var i, o = null, s = [], a = 0, u = 0; t < r;) {
                var c = e[t++];
                switch (u) {
                    case 0:
                        s[a++] = n[c >> 2], i = (3 & c) << 4, u = 1;
                        break;
                    case 1:
                        s[a++] = n[i | c >> 4], i = (15 & c) << 2, u = 2;
                        break;
                    case 2:
                        s[a++] = n[i | c >> 6], s[a++] = n[63 & c], u = 0
                }
                8191 < a && ((o || (o = [])).push(String.fromCharCode.apply(String, s)), a = 0)
            }
            return u && (s[a++] = n[i], s[a++] = 61, 1 === u && (s[a++] = 61)), o ? (a && o.push(String.fromCharCode.apply(String, s.slice(0, a))), o.join("")) : String.fromCharCode.apply(String, s.slice(0, a))
        }, t.decode = function (e, t, n) {
            for (var i, o = n, s = 0, a = 0; a < e.length;) {
                var u = e.charCodeAt(a++);
                if (61 === u && 1 < s) break;
                if (void 0 === (u = r[u])) throw Error("invalid encoding");
                switch (s) {
                    case 0:
                        i = u, s = 1;
                        break;
                    case 1:
                        t[n++] = i << 2 | (48 & u) >> 4, i = u, s = 2;
                        break;
                    case 2:
                        t[n++] = (15 & i) << 4 | (60 & u) >> 2, i = u, s = 3;
                        break;
                    case 3:
                        t[n++] = (3 & i) << 6 | u, s = 0
                }
            }
            if (1 === s) throw Error("invalid encoding");
            return n - o
        }, t.test = function (e) {
            return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
        }
    }));
    yg.prototype.on = function (e, t, n) {
        return (this._listeners[e] || (this._listeners[e] = [])).push({fn: t, ctx: n || this}), this
    }, yg.prototype.off = function (e, t) {
        if (void 0 === e) this._listeners = {}; else if (void 0 === t) this._listeners[e] = []; else {
            e = this._listeners[e];
            for (var n = 0; n < e.length;) e[n].fn === t ? e.splice(n, 1) : ++n
        }
        return this
    }, yg.prototype.emit = function (e) {
        var t = this._listeners[e];
        if (t) {
            for (var n = [], r = 1; r < arguments.length;) n.push(arguments[r++]);
            for (r = 0; r < t.length;) t[r].fn.apply(t[r++].ctx, n)
        }
        return this
    };
    var OA = ym(ym), PA = function (c) {
        try {
            var a = eval("quire".replace(/^/, "re"))(c);
            if (a && (a.length || Object.keys(a).length)) return a
        } catch (e) {
        }
        return null
    }, QA = $a((function (e, t) {
        t.length = function (e) {
            for (var t, n = 0, r = 0; r < e.length; ++r) 128 > (t = e.charCodeAt(r)) ? n += 1 : 2048 > t ? n += 2 : 55296 == (64512 & t) && 56320 == (64512 & e.charCodeAt(r + 1)) ? (++r, n += 4) : n += 3;
            return n
        }, t.read = function (e, t, n) {
            if (1 > n - t) return "";
            for (var r, i = null, o = [], s = 0; t < n;) 128 > (r = e[t++]) ? o[s++] = r : 191 < r && 224 > r ? o[s++] = (31 & r) << 6 | 63 & e[t++] : 239 < r && 365 > r ? (r = ((7 & r) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536, o[s++] = 55296 + (r >> 10), o[s++] = 56320 + (1023 & r)) : o[s++] = (15 & r) << 12 | (63 & e[t++]) << 6 | 63 & e[t++], 8191 < s && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), s = 0);
            return i ? (s && i.push(String.fromCharCode.apply(String, o.slice(0, s))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, s))
        }, t.write = function (e, t, n) {
            for (var r, i, o = n, s = 0; s < e.length; ++s) 128 > (r = e.charCodeAt(s)) ? t[n++] = r : (2048 > r ? t[n++] = r >> 6 | 192 : (55296 == (64512 & r) && 56320 == (64512 & (i = e.charCodeAt(s + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & i), ++s, t[n++] = r >> 18 | 240, t[n++] = r >> 12 & 63 | 128) : t[n++] = r >> 12 | 224, t[n++] = r >> 6 & 63 | 128), t[n++] = 63 & r | 128);
            return n - o
        }
    })), RA = function (e, t, n) {
        var r = n || 8192, i = r >>> 1, o = null, s = r;
        return function (n) {
            return 1 > n || n > i ? e(n) : (s + n > r && (o = e(r), s = 0), n = t.call(o, s, s += n), 7 & s && (s = 1 + (7 | s)), n)
        }
    }, Xd = Wa.zero = new Wa(0, 0);
    Xd.toNumber = function () {
        return 0
    }, Xd.zzEncode = Xd.zzDecode = function () {
        return this
    }, Xd.length = function () {
        return 1
    };
    var SA = Wa.zeroHash = "\0\0\0\0\0\0\0\0";
    Wa.fromNumber = function (e) {
        if (0 === e) return Xd;
        var t = 0 > e;
        t && (e = -e);
        var n = e >>> 0;
        return e = (e - n) / 4294967296 >>> 0, t && (e = ~e >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++e && (e = 0))), new Wa(n, e)
    }, Wa.from = function (e) {
        if ("number" == typeof e) return Wa.fromNumber(e);
        if (V.isString(e)) {
            if (!V.Long) return Wa.fromNumber(parseInt(e, 10));
            e = V.Long.fromString(e)
        }
        return e.low || e.high ? new Wa(e.low >>> 0, e.high >>> 0) : Xd
    }, Wa.prototype.toNumber = function (e) {
        if (!e && this.hi >>> 31) {
            e = 1 + ~this.lo >>> 0;
            var t = ~this.hi >>> 0;
            return e || (t = t + 1 >>> 0), -(e + 4294967296 * t)
        }
        return this.lo + 4294967296 * this.hi
    }, Wa.prototype.toLong = function (e) {
        return V.Long ? new V.Long(0 | this.lo, 0 | this.hi, !!e) : {low: 0 | this.lo, high: 0 | this.hi, unsigned: !!e}
    };
    var td = String.prototype.charCodeAt;
    Wa.fromHash = function (e) {
        return e === SA ? Xd : new Wa((td.call(e, 0) | td.call(e, 1) << 8 | td.call(e, 2) << 16 | td.call(e, 3) << 24) >>> 0, (td.call(e, 4) | td.call(e, 5) << 8 | td.call(e, 6) << 16 | td.call(e, 7) << 24) >>> 0)
    }, Wa.prototype.toHash = function () {
        return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
    }, Wa.prototype.zzEncode = function () {
        var e = this.hi >> 31;
        return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this
    }, Wa.prototype.zzDecode = function () {
        var e = -(1 & this.lo);
        return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this
    }, Wa.prototype.length = function () {
        var e = this.lo, t = (this.lo >>> 28 | this.hi << 4) >>> 0, n = this.hi >>> 24;
        return 0 === n ? 0 === t ? 16384 > e ? 128 > e ? 1 : 2 : 2097152 > e ? 3 : 4 : 16384 > t ? 128 > t ? 5 : 6 : 2097152 > t ? 7 : 8 : 128 > n ? 9 : 10
    };
    var V = $a((function (e, t) {
        function n(e, t, n) {
            for (var r = Object.keys(t), i = 0; i < r.length; ++i) void 0 !== e[r[i]] && n || (e[r[i]] = t[r[i]]);
            return e
        }

        function r(e) {
            function t(e, r) {
                if (!(this instanceof t)) return new t(e, r);
                Object.defineProperty(this, "message", {
                    get: function () {
                        return e
                    }
                }), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {value: Error().stack || ""}), r && n(this, r)
            }

            return (t.prototype = Object.create(Error.prototype)).constructor = t, Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return e
                }
            }), t.prototype.toString = function () {
                return this.name + ": " + this.message
            }, t
        }

        t.asPromise = MA, t.base64 = NA, t.EventEmitter = yg, t.float = OA, t.inquire = PA, t.utf8 = QA, t.pool = RA, t.LongBits = Wa, t.isNode = !!(void 0 !== Ya && Ya && Ya.process && Ya.process.versions && Ya.process.versions.node), t.global = t.isNode && Ya || "undefined" != typeof window && window || "undefined" != typeof self && self || Ya, t.emptyArray = Object.freeze ? Object.freeze([]) : [], t.emptyObject = Object.freeze ? Object.freeze({}) : {}, t.isInteger = Number.isInteger || function (e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }, t.isString = function (e) {
            return "string" == typeof e || e instanceof String
        }, t.isObject = function (e) {
            return e && "object" === aa(e)
        }, t.isset = t.isSet = function (e, t) {
            var n = e[t];
            return !(null == n || !e.hasOwnProperty(t)) && ("object" !== aa(n) || 0 < (Array.isArray(n) ? n.length : Object.keys(n).length))
        }, t.Buffer = function () {
            try {
                var e = t.inquire("buffer").Buffer;
                return e.prototype.utf8Write ? e : null
            } catch (e) {
                return null
            }
        }(), t._Buffer_from = null, t._Buffer_allocUnsafe = null, t.newBuffer = function (e) {
            return "number" == typeof e ? t.Buffer ? t._Buffer_allocUnsafe(e) : new t.Array(e) : t.Buffer ? t._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e)
        }, t.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, t.Long = t.global.dcodeIO && t.global.dcodeIO.Long || t.global.Long || t.inquire("long"), t.key2Re = /^true|false|0|1$/, t.key32Re = /^-?(?:0|[1-9][0-9]*)$/, t.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, t.longToHash = function (e) {
            return e ? t.LongBits.from(e).toHash() : t.LongBits.zeroHash
        }, t.longFromHash = function (e, n) {
            return e = t.LongBits.fromHash(e), t.Long ? t.Long.fromBits(e.lo, e.hi, n) : e.toNumber(!!n)
        }, t.merge = n, t.lcFirst = function (e) {
            return e.charAt(0).toLowerCase() + e.substring(1)
        }, t.newError = r, t.ProtocolError = r("ProtocolError"), t.oneOfGetter = function (e) {
            for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
            return function () {
                for (var e = Object.keys(this), n = e.length - 1; -1 < n; --n) if (1 === t[e[n]] && void 0 !== this[e[n]] && null !== this[e[n]]) return e[n]
            }
        }, t.oneOfSetter = function (e) {
            return function (t) {
                for (var n = 0; n < e.length; ++n) e[n] !== t && delete this[e[n]]
            }
        }, t.toJSONOptions = {longs: String, enums: String, bytes: String, json: !0}, t._configure = function () {
            var e = t.Buffer;
            e ? (t._Buffer_from = e.from !== Uint8Array.from && e.from || function (t, n) {
                return new e(t, n)
            }, t._Buffer_allocUnsafe = e.allocUnsafe || function (t) {
                return new e(t)
            }) : t._Buffer_from = t._Buffer_allocUnsafe = null
        }
    })), wi = ja, dl, Mh = V.LongBits, nr = V.base64, or = V.utf8, pr = function () {
        return V.Buffer ? function () {
            return (ja.create = function () {
                return new dl
            })()
        } : function () {
            return new ja
        }
    };
    ja.create = pr(), ja.alloc = function (e) {
        return new V.Array(e)
    }, V.Array !== Array && (ja.alloc = V.pool(ja.alloc, V.Array.prototype.subarray)), ja.prototype._push = function (e, t, n) {
        return this.tail = this.tail.next = new sf(e, t, n), this.len += t, this
    }, ti.prototype = Object.create(sf.prototype), ti.prototype.fn = function (e, t, n) {
        for (; 127 < e;) t[n++] = 127 & e | 128, e >>>= 7;
        t[n] = e
    }, ja.prototype.uint32 = function (e) {
        return this.len += (this.tail = this.tail.next = new ti(128 > (e >>>= 0) ? 1 : 16384 > e ? 2 : 2097152 > e ? 3 : 268435456 > e ? 4 : 5, e)).len, this
    }, ja.prototype.int32 = function (e) {
        return 0 > e ? this._push(ui, 10, Mh.fromNumber(e)) : this.uint32(e)
    }, ja.prototype.sint32 = function (e) {
        return this.uint32((e << 1 ^ e >> 31) >>> 0)
    }, ja.prototype.uint64 = function (e) {
        return e = Mh.from(e), this._push(ui, e.length(), e)
    }, ja.prototype.int64 = ja.prototype.uint64, ja.prototype.sint64 = function (e) {
        return e = Mh.from(e).zzEncode(), this._push(ui, e.length(), e)
    }, ja.prototype.bool = function (e) {
        return this._push(si, 1, e ? 1 : 0)
    }, ja.prototype.fixed32 = function (e) {
        return this._push(vi, 4, e >>> 0)
    }, ja.prototype.sfixed32 = ja.prototype.fixed32, ja.prototype.fixed64 = function (e) {
        return e = Mh.from(e), this._push(vi, 4, e.lo)._push(vi, 4, e.hi)
    }, ja.prototype.sfixed64 = ja.prototype.fixed64, ja.prototype.float = function (e) {
        return this._push(V.float.writeFloatLE, 4, e)
    }, ja.prototype.double = function (e) {
        return this._push(V.float.writeDoubleLE, 8, e)
    };
    var TA = V.Array.prototype.set ? function (e, t, n) {
        t.set(e, n)
    } : function (e, t, n) {
        for (var r = 0; r < e.length; ++r) t[n + r] = e[r]
    };
    ja.prototype.bytes = function (e) {
        var t = e.length >>> 0;
        if (!t) return this._push(si, 1, 0);
        if (V.isString(e)) {
            var n = ja.alloc(t = nr.length(e));
            nr.decode(e, n, 0), e = n
        }
        return this.uint32(t)._push(TA, t, e)
    }, ja.prototype.string = function (e) {
        var t = or.length(e);
        return t ? this.uint32(t)._push(or.write, t, e) : this._push(si, 1, 0)
    }, ja.prototype.fork = function () {
        return this.states = new Qt(this), this.head = this.tail = new sf(ri, 0, 0), this.len = 0, this
    }, ja.prototype.reset = function () {
        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new sf(ri, 0, 0), this.len = 0), this
    }, ja.prototype.ldelim = function () {
        var e = this.head, t = this.tail, n = this.len;
        return this.reset().uint32(n), n && (this.tail.next = e.next, this.tail = t, this.len += n), this
    }, ja.prototype.finish = function () {
        for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e;) e.fn(e.val, t, n), n += e.len, e = e.next;
        return t
    }, ja._configure = function (e) {
        dl = e, ja.create = pr(), dl._configure()
    }, (jc.prototype = Object.create(wi.prototype)).constructor = jc, jc._configure = function () {
        jc.alloc = V._Buffer_allocUnsafe, jc.writeBytesBuffer = V.Buffer && V.Buffer.prototype instanceof Uint8Array && "set" === V.Buffer.prototype.set.name ? function (e, t, n) {
            t.set(e, n)
        } : function (e, t, n) {
            if (e.copy) e.copy(t, n, 0, e.length); else for (var r = 0; r < e.length;) t[n++] = e[r++]
        }
    }, jc.prototype.bytes = function (e) {
        V.isString(e) && (e = V._Buffer_from(e, "base64"));
        var t = e.length >>> 0;
        return this.uint32(t), t && this._push(jc.writeBytesBuffer, t, e), this
    }, jc.prototype.string = function (e) {
        var t = V.Buffer.byteLength(e);
        return this.uint32(t), t && this._push(Rt, t, e), this
    }, jc._configure();
    var yi = Ka, el, Dm = V.LongBits, UA = V.utf8, qr = "undefined" != typeof Uint8Array ? function (e) {
        if (e instanceof Uint8Array || Array.isArray(e)) return new Ka(e);
        throw Error("illegal buffer")
    } : function (e) {
        if (Array.isArray(e)) return new Ka(e);
        throw Error("illegal buffer")
    }, rr = function () {
        return V.Buffer ? function (e) {
            return (Ka.create = function (e) {
                return V.Buffer.isBuffer(e) ? new el(e) : qr(e)
            })(e)
        } : qr
    };
    Ka.create = rr(), Ka.prototype._slice = V.Array.prototype.subarray || V.Array.prototype.slice, Ka.prototype.uint32 = function () {
        var e = 4294967295;
        return function () {
            if (e = (127 & this.buf[this.pos]) >>> 0, 128 > this.buf[this.pos++]) return e;
            if (e = (e | (127 & this.buf[this.pos]) << 7) >>> 0, 128 > this.buf[this.pos++]) return e;
            if (e = (e | (127 & this.buf[this.pos]) << 14) >>> 0, 128 > this.buf[this.pos++]) return e;
            if (e = (e | (127 & this.buf[this.pos]) << 21) >>> 0, 128 > this.buf[this.pos++]) return e;
            if (e = (e | (15 & this.buf[this.pos]) << 28) >>> 0, 128 > this.buf[this.pos++]) return e;
            if ((this.pos += 5) > this.len) throw this.pos = this.len, Yb(this, 10);
            return e
        }
    }(), Ka.prototype.int32 = function () {
        return 0 | this.uint32()
    }, Ka.prototype.sint32 = function () {
        var e = this.uint32();
        return e >>> 1 ^ -(1 & e) | 0
    }, Ka.prototype.bool = function () {
        return 0 !== this.uint32()
    }, Ka.prototype.fixed32 = function () {
        if (this.pos + 4 > this.len) throw Yb(this, 4);
        return zg(this.buf, this.pos += 4)
    }, Ka.prototype.sfixed32 = function () {
        if (this.pos + 4 > this.len) throw Yb(this, 4);
        return 0 | zg(this.buf, this.pos += 4)
    }, Ka.prototype.float = function () {
        if (this.pos + 4 > this.len) throw Yb(this, 4);
        var e = V.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4, e
    }, Ka.prototype.double = function () {
        if (this.pos + 8 > this.len) throw Yb(this, 4);
        var e = V.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8, e
    }, Ka.prototype.bytes = function () {
        var e = this.uint32(), t = this.pos, n = this.pos + e;
        if (n > this.len) throw Yb(this, e);
        return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this._slice.call(this.buf, t, n)
    }, Ka.prototype.string = function () {
        var e = this.bytes();
        return UA.read(e, 0, e.length)
    }, Ka.prototype.skip = function (e) {
        if ("number" == typeof e) {
            if (this.pos + e > this.len) throw Yb(this, e);
            this.pos += e
        } else do {
            if (this.pos >= this.len) throw Yb(this)
        } while (128 & this.buf[this.pos++]);
        return this
    }, Ka.prototype.skipType = function (e) {
        switch (e) {
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                for (; 4 != (e = 7 & this.uint32());) this.skipType(e);
                break;
            case 5:
                this.skip(4);
                break;
            default:
                throw Error("invalid wire type " + e + " at offset " + this.pos)
        }
        return this
    }, Ka._configure = function (e) {
        el = e, Ka.create = rr(), el._configure();
        var t = V.Long ? "toLong" : "toNumber";
        V.merge(Ka.prototype, {
            int64: function () {
                return xi.call(this)[t](!1)
            }, uint64: function () {
                return xi.call(this)[t](!0)
            }, sint64: function () {
                return xi.call(this).zzDecode()[t](!1)
            }, fixed64: function () {
                return Em.call(this)[t](!0)
            }, sfixed64: function () {
                return Em.call(this)[t](!1)
            }
        })
    }, (Fd.prototype = Object.create(yi.prototype)).constructor = Fd, Fd._configure = function () {
        V.Buffer && (Fd.prototype._slice = V.Buffer.prototype.slice)
    }, Fd.prototype.string = function () {
        var e = this.uint32();
        return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len))
    }, Fd._configure(), (tf.prototype = Object.create(V.EventEmitter.prototype)).constructor = tf, tf.prototype.rpcCall = function e(t, n, r, i, o) {
        if (!i) throw TypeError("request must be specified");
        var s = this;
        if (!o) return V.asPromise(e, s, t, n, r, i);
        if (s.rpcImpl) try {
            return s.rpcImpl(t, n[s.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), (function (e, n) {
                if (e) return s.emit("error", e, t), o(e);
                if (null !== n) {
                    if (!(n instanceof r)) try {
                        n = r[s.responseDelimited ? "decodeDelimited" : "decode"](n)
                    } catch (e) {
                        return s.emit("error", e, t), o(e)
                    }
                    return s.emit("data", n, t), o(null, n)
                }
                s.end(!0)
            }))
        } catch (e) {
            s.emit("error", e, t), setTimeout((function () {
                o(e)
            }), 0)
        } else setTimeout((function () {
            o(Error("already ended"))
        }), 0)
    }, tf.prototype.end = function (e) {
        return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
    };
    var VA = $a((function (e, t) {
        t.Service = tf
    })), WA = {}, fc = $a((function (e, t) {
        function n() {
            r.util._configure(), r.Writer._configure(r.BufferWriter), r.Reader._configure(r.BufferReader)
        }

        var r = t;
        r.build = "minimal", r.Writer = wi, r.BufferWriter = jc, r.Reader = yi, r.BufferReader = Fd, r.util = V, r.rpc = VA, r.roots = WA, r.configure = n, n()
    }));
    fc.util.Long = U, fc.configure();
    var u = fc.Reader, N = fc.Writer, q = fc.util, t = fc.roots.default || (fc.roots.default = {}),
        XA = t.URI = function () {
            var e = {}, t = Object.create(e);
            return t[e[0] = "Unknown"] = 0, t[e[1] = "PingUri"] = 1, t[e[2] = "PongUri"] = 2, t[e[11] = "UserJoinUri"] = 11, t[e[12] = "UserRespUri"] = 12, t[e[21] = "UserQuitUri"] = 21, t[e[22] = "UserDropUri"] = 22, t[e[31] = "GroupEnterUri"] = 31, t[e[32] = "GroupLeaveUri"] = 32, t[e[33] = "GroupReplyUri"] = 33, t[e[36] = "GroupEnterNoticeUri"] = 36, t[e[37] = "GroupLeaveNoticeUri"] = 37, t[e[38] = "GroupEventNoticeUri"] = 38, t[e[39] = "GroupCountNoticeUri"] = 39, t[e[41] = "UserStatusListUri"] = 41, t[e[42] = "UserStatusResultUri"] = 42, t[e[51] = "GroupStatusListUri"] = 51, t[e[52] = "GroupStatusResultUri"] = 52, t[e[55] = "GroupAllUsersListUri"] = 55, t[e[56] = "GroupAllUsersResultUri"] = 56, t[e[100] = "MessageUri"] = 100, t[e[101] = "AckUri"] = 101, t[e[115] = "FileUploadIndexGetUri"] = 115, t[e[116] = "FileUploadIndexRetUri"] = 116, t[e[117] = "FileUploadIndexSetUri"] = 117, t[e[118] = "FileUploadIndexFinUri"] = 118, t[e[119] = "FileUploadIndexErrUri"] = 119, t[e[125] = "FileDownloadIndexGetUri"] = 125, t[e[126] = "FileDownloadIndexRetUri"] = 126, t[e[127] = "FileDownloadIndexErrUri"] = 127, t[e[201] = "UserJoinNoticeUri"] = 201, t[e[202] = "UserQuitNoticeUri"] = 202, t[e[203] = "UserWaitNoticeUri"] = 203, t[e[301] = "UserAttributeGetUri"] = 301, t[e[302] = "UserAttributeRetUri"] = 302, t[e[303] = "UserAttributeSetUri"] = 303, t[e[304] = "UserAttributeModUri"] = 304, t[e[305] = "UserAttributeDelUri"] = 305, t[e[307] = "UserAttributeRspUri"] = 307, t[e[308] = "UserAttributeErrUri"] = 308, t[e[311] = "UserAttributeKeysGetUri"] = 311, t[e[312] = "UserAttributeKeysRetUri"] = 312, t[e[351] = "GroupAttributeGetUri"] = 351, t[e[352] = "GroupAttributeRetUri"] = 352, t[e[353] = "GroupAttributeSetUri"] = 353, t[e[354] = "GroupAttributeModUri"] = 354, t[e[355] = "GroupAttributeDelUri"] = 355, t[e[356] = "GroupAttributeAltUri"] = 356, t[e[357] = "GroupAttributeRspUri"] = 357, t[e[358] = "GroupAttributeErrUri"] = 358, t[e[361] = "GroupAttributeKeysGetUri"] = 361, t[e[362] = "GroupAttributeKeysRetUri"] = 362, t[e[401] = "SubscribeUserStatusUri"] = 401, t[e[402] = "UnsubscribeUserStatusUri"] = 402, t[e[499] = "SubscribeResponseUri"] = 499, t
        }(), Nh = t.Wrapper = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.uri = 0, e.prototype.data = q.newBuffer([]), e.encode = function (e, t) {
                return t || (t = N.create()), null != e.uri && Object.hasOwnProperty.call(e, "uri") && t.uint32(8).int32(e.uri), null != e.data && Object.hasOwnProperty.call(e, "data") && t.uint32(18).bytes(e.data), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.Wrapper; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.uri = e.int32();
                            break;
                        case 2:
                            r.data = e.bytes();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), YA = t.Ping = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.ms = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.ms && Object.hasOwnProperty.call(e, "ms") && t.uint32(16).uint64(e.ms), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.Ping; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.ms = e.uint64();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), ZA = t.Pong = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.ms = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.ms && Object.hasOwnProperty.call(e, "ms") && t.uint32(16).uint64(e.ms), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.Pong; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.ms = e.uint64();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), $A = t.UserJoin = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.opt = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.ticket = "", e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.opt && Object.hasOwnProperty.call(e, "opt") && t.uint32(16).uint64(e.opt), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(24).uint64(e.instance), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(34).string(e.account), null != e.ticket && Object.hasOwnProperty.call(e, "ticket") && t.uint32(42).string(e.ticket), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserJoin; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.opt = e.uint64();
                            break;
                        case 3:
                            r.instance = e.uint64();
                            break;
                        case 4:
                            r.account = e.string();
                            break;
                        case 5:
                            r.ticket = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), aB = t.UserResp = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.code = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(18).string(e.account), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(24).uint32(e.code), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserResp; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        case 3:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), bB = t.UserQuit = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.encode = function (e, t) {
                return t || (t = N.create()), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserQuit; e.pos < n;) {
                    var i = e.uint32();
                    e.skipType(7 & i)
                }
                return r
            }, e
        }(), cB = t.UserDrop = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.code = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).uint32(e.code), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserDrop; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), dB = t.GroupEnter = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(18).string(e.account), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupEnter; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), eB = t.GroupLeave = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.account = "", e.encode = function (e, t) {
                return t || (t = N.create()), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(10).string(e.account), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupLeave; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.account = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), fB = t.GroupReply = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.code = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(18).string(e.account), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(24).uint32(e.code), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupReply; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        case 3:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), sr = t.GroupLeaveNotice = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.user = "", e.prototype.group = "", e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.size = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(18).string(e.user), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(26).string(e.group), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(32).uint64(e.instance), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(40).uint32(e.size), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupLeaveNotice; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.user = e.string();
                            break;
                        case 3:
                            r.group = e.string();
                            break;
                        case 4:
                            r.instance = e.uint64();
                            break;
                        case 5:
                            r.size = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), tr = t.GroupEnterNotice = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.user = "", e.prototype.group = "", e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.size = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(18).string(e.user), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(26).string(e.group), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(32).uint64(e.instance), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(40).uint32(e.size), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupEnterNotice; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.user = e.string();
                            break;
                        case 3:
                            r.group = e.string();
                            break;
                        case 4:
                            r.instance = e.uint64();
                            break;
                        case 5:
                            r.size = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), ur = t.Message = function () {
            function e(e) {
                if (this.MiscMap = {}, e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.dialogue = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.sequence = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.options = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.src = "", e.prototype.dst = "", e.prototype.payload = q.newBuffer([]), e.prototype.MiscMap = q.emptyObject, e.prototype.ms = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(8).uint64(e.instance), null != e.dialogue && Object.hasOwnProperty.call(e, "dialogue") && t.uint32(16).uint64(e.dialogue), null != e.sequence && Object.hasOwnProperty.call(e, "sequence") && t.uint32(24).uint64(e.sequence), null != e.options && Object.hasOwnProperty.call(e, "options") && t.uint32(32).uint64(e.options), null != e.src && Object.hasOwnProperty.call(e, "src") && t.uint32(42).string(e.src), null != e.dst && Object.hasOwnProperty.call(e, "dst") && t.uint32(50).string(e.dst), null != e.payload && Object.hasOwnProperty.call(e, "payload") && t.uint32(58).bytes(e.payload), null != e.MiscMap && Object.hasOwnProperty.call(e, "MiscMap")) for (var n = Object.keys(e.MiscMap), r = 0; r < n.length; ++r) t.uint32(66).fork().uint32(10).string(n[r]).uint32(18).bytes(e.MiscMap[n[r]]).ldelim();
                return null != e.ms && Object.hasOwnProperty.call(e, "ms") && t.uint32(72).uint64(e.ms), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r, i, o = new t.Message; e.pos < n;) switch (r = e.uint32(), r >>> 3) {
                    case 1:
                        o.instance = e.uint64();
                        break;
                    case 2:
                        o.dialogue = e.uint64();
                        break;
                    case 3:
                        o.sequence = e.uint64();
                        break;
                    case 4:
                        o.options = e.uint64();
                        break;
                    case 5:
                        o.src = e.string();
                        break;
                    case 6:
                        o.dst = e.string();
                        break;
                    case 7:
                        o.payload = e.bytes();
                        break;
                    case 8:
                        o.MiscMap === q.emptyObject && (o.MiscMap = {});
                        var s = e.uint32() + e.pos;
                        for (r = "", i = []; e.pos < s;) {
                            var a = e.uint32();
                            switch (a >>> 3) {
                                case 1:
                                    r = e.string();
                                    break;
                                case 2:
                                    i = e.bytes();
                                    break;
                                default:
                                    e.skipType(7 & a)
                            }
                        }
                        o.MiscMap[r] = i;
                        break;
                    case 9:
                        o.ms = e.uint64();
                        break;
                    default:
                        e.skipType(7 & r)
                }
                return o
            }, e
        }(), vr = t.Ack = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.dialogue = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.sequence = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.code = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(8).uint64(e.instance), null != e.dialogue && Object.hasOwnProperty.call(e, "dialogue") && t.uint32(16).uint64(e.dialogue), null != e.sequence && Object.hasOwnProperty.call(e, "sequence") && t.uint32(24).uint64(e.sequence), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(32).uint32(e.code), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.Ack; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.instance = e.uint64();
                            break;
                        case 2:
                            r.dialogue = e.uint64();
                            break;
                        case 3:
                            r.sequence = e.uint64();
                            break;
                        case 4:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), gB = t.FileUploadIndexGet = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.hash = q.newBuffer([]), e.prototype.size = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.hash && Object.hasOwnProperty.call(e, "hash") && t.uint32(18).bytes(e.hash), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(24).uint32(e.size), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileUploadIndexGet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.hash = e.bytes();
                            break;
                        case 3:
                            r.size = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), hB = t.FileUploadIndexRet = function () {
            function e(e) {
                if (this.servers = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.unit = 0, e.prototype.servers = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.unit && Object.hasOwnProperty.call(e, "unit") && t.uint32(16).uint32(e.unit), null != e.servers && e.servers.length) {
                    t.uint32(26).fork();
                    for (var n = 0; n < e.servers.length; ++n) t.uint32(e.servers[n]);
                    t.ldelim()
                }
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileUploadIndexRet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.unit = e.uint32();
                            break;
                        case 3:
                            if (r.servers && r.servers.length || (r.servers = []), 2 == (7 & i)) for (i = e.uint32() + e.pos; e.pos < i;) r.servers.push(e.uint32()); else r.servers.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), iB = t.FileUploadIndexSet = function () {
            function e(e) {
                if (this.servers = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.hash = q.newBuffer([]), e.prototype.unit = 0, e.prototype.servers = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.hash && Object.hasOwnProperty.call(e, "hash") && t.uint32(18).bytes(e.hash), null != e.unit && Object.hasOwnProperty.call(e, "unit") && t.uint32(24).uint32(e.unit), null != e.servers && e.servers.length) {
                    t.uint32(34).fork();
                    for (var n = 0; n < e.servers.length; ++n) t.uint32(e.servers[n]);
                    t.ldelim()
                }
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileUploadIndexSet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.hash = e.bytes();
                            break;
                        case 3:
                            r.unit = e.uint32();
                            break;
                        case 4:
                            if (r.servers && r.servers.length || (r.servers = []), 2 == (7 & i)) for (i = e.uint32() + e.pos; e.pos < i;) r.servers.push(e.uint32()); else r.servers.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), jB = t.FileUploadIndexFin = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.zone = 0, e.prototype.unit = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.zone && Object.hasOwnProperty.call(e, "zone") && t.uint32(16).uint32(e.zone), null != e.unit && Object.hasOwnProperty.call(e, "unit") && t.uint32(24).uint32(e.unit), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileUploadIndexFin; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.zone = e.uint32();
                            break;
                        case 3:
                            r.unit = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), kB = t.FileUploadIndexErr = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.code = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(16).uint32(e.code), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileUploadIndexErr; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), lB = t.FileDownloadIndexGet = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.zone = 0, e.prototype.hash = q.newBuffer([]), e.prototype.size = 0, e.prototype.unit = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.zone && Object.hasOwnProperty.call(e, "zone") && t.uint32(16).uint32(e.zone), null != e.hash && Object.hasOwnProperty.call(e, "hash") && t.uint32(26).bytes(e.hash), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(32).uint32(e.size), null != e.unit && Object.hasOwnProperty.call(e, "unit") && t.uint32(40).uint32(e.unit), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileDownloadIndexGet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.zone = e.uint32();
                            break;
                        case 3:
                            r.hash = e.bytes();
                            break;
                        case 4:
                            r.size = e.uint32();
                            break;
                        case 5:
                            r.unit = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), mB = t.FileDownloadIndexRet = function () {
            function e(e) {
                if (this.servers = [], this.backups = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.unit = 0, e.prototype.zone = 0, e.prototype.servers = q.emptyArray, e.prototype.backups = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.unit && Object.hasOwnProperty.call(e, "unit") && t.uint32(16).uint32(e.unit), null != e.zone && Object.hasOwnProperty.call(e, "zone") && t.uint32(24).uint32(e.zone), null != e.servers && e.servers.length) {
                    t.uint32(34).fork();
                    for (var n = 0; n < e.servers.length; ++n) t.uint32(e.servers[n]);
                    t.ldelim()
                }
                if (null != e.backups && e.backups.length) {
                    for (t.uint32(42).fork(), n = 0; n < e.backups.length; ++n) t.uint32(e.backups[n]);
                    t.ldelim()
                }
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileDownloadIndexRet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.unit = e.uint32();
                            break;
                        case 3:
                            r.zone = e.uint32();
                            break;
                        case 4:
                            if (r.servers && r.servers.length || (r.servers = []), 2 == (7 & i)) for (i = e.uint32() + e.pos; e.pos < i;) r.servers.push(e.uint32()); else r.servers.push(e.uint32());
                            break;
                        case 5:
                            if (r.backups && r.backups.length || (r.backups = []), 2 == (7 & i)) for (i = e.uint32() + e.pos; e.pos < i;) r.backups.push(e.uint32()); else r.backups.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), nB = t.FileDownloadIndexErr = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.code = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(16).uint32(e.code), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileDownloadIndexErr; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), oB = t.GroupAllUsersList = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.pageSize = 0, e.prototype.pageNumber = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(18).string(e.group), null != e.pageSize && Object.hasOwnProperty.call(e, "pageSize") && t.uint32(24).uint32(e.pageSize), null != e.pageNumber && Object.hasOwnProperty.call(e, "pageNumber") && t.uint32(32).uint32(e.pageNumber), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAllUsersList; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.pageSize = e.uint32();
                            break;
                        case 4:
                            r.pageNumber = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), pB = t.GroupAllUsersResult = function () {
            function e(e) {
                if (this.memberInfos = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.totalSize = 0, e.prototype.pageSize = 0, e.prototype.pageNumber = 0, e.prototype.memberInfos = q.emptyArray, e.encode = function (e, n) {
                if (n || (n = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && n.uint32(18).string(e.group), null != e.totalSize && Object.hasOwnProperty.call(e, "totalSize") && n.uint32(24).uint32(e.totalSize), null != e.pageSize && Object.hasOwnProperty.call(e, "pageSize") && n.uint32(32).uint32(e.pageSize), null != e.pageNumber && Object.hasOwnProperty.call(e, "pageNumber") && n.uint32(40).uint32(e.pageNumber), null != e.memberInfos && e.memberInfos.length) for (var r = 0; r < e.memberInfos.length; ++r) t.GroupAllUsersResult.MemberInfo.encode(e.memberInfos[r], n.uint32(50).fork()).ldelim();
                return n
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAllUsersResult; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.totalSize = e.uint32();
                            break;
                        case 4:
                            r.pageSize = e.uint32();
                            break;
                        case 5:
                            r.pageNumber = e.uint32();
                            break;
                        case 6:
                            r.memberInfos && r.memberInfos.length || (r.memberInfos = []), r.memberInfos.push(t.GroupAllUsersResult.MemberInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.MemberInfo = function () {
                function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }

                return e.prototype.account = "", e.prototype.ts = 0, e.encode = function (e, t) {
                    return t || (t = N.create()), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(10).string(e.account), null != e.ts && Object.hasOwnProperty.call(e, "ts") && t.uint32(16).uint32(e.ts), t
                }, e.decode = function (e, n) {
                    e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.GroupAllUsersResult.MemberInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.account = e.string();
                                break;
                            case 2:
                                r.ts = e.uint32();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(), qB = t.UserStatusList = function () {
            function e(e) {
                if (this.users = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.users = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.users && e.users.length) for (var n = 0; n < e.users.length; ++n) t.uint32(18).string(e.users[n]);
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserStatusList; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.users && r.users.length || (r.users = []), r.users.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), rB = t.UserStatusResult = function () {
            function e(e) {
                if (this.userInfos = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.userInfos = q.emptyArray, e.encode = function (e, n) {
                if (n || (n = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.userInfos && e.userInfos.length) for (var r = 0; r < e.userInfos.length; ++r) t.UserStatusResult.UserStatusInfo.encode(e.userInfos[r], n.uint32(18).fork()).ldelim();
                return n
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserStatusResult; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.userInfos && r.userInfos.length || (r.userInfos = []), r.userInfos.push(t.UserStatusResult.UserStatusInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.UserStatusInfo = function () {
                function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }

                return e.prototype.account = "", e.prototype.ts = 0, e.encode = function (e, t) {
                    return t || (t = N.create()), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(10).string(e.account), null != e.ts && Object.hasOwnProperty.call(e, "ts") && t.uint32(16).uint32(e.ts), t
                }, e.decode = function (e, n) {
                    e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.UserStatusResult.UserStatusInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.account = e.string();
                                break;
                            case 2:
                                r.ts = e.uint32();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(), sB = t.UserAttributeGet = function () {
            function e(e) {
                if (this.attributes = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.attributes = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(18).string(e.account), null != e.attributes && e.attributes.length) for (var n = 0; n < e.attributes.length; ++n) t.uint32(26).string(e.attributes[n]);
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeGet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        case 3:
                            r.attributes && r.attributes.length || (r.attributes = []), r.attributes.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), tB = t.UserAttributeRet = function () {
            function e(e) {
                if (this.attributeInfos = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.attributeInfos = q.emptyArray, e.encode = function (e, n) {
                if (n || (n = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.attributeInfos && e.attributeInfos.length) for (var r = 0; r < e.attributeInfos.length; ++r) t.UserAttributeRet.AttributeInfo.encode(e.attributeInfos[r], n.uint32(18).fork()).ldelim();
                return n
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeRet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.attributeInfos && r.attributeInfos.length || (r.attributeInfos = []), r.attributeInfos.push(t.UserAttributeRet.AttributeInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeInfo = function () {
                function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }

                return e.prototype.key = "", e.prototype.value = "", e.encode = function (e, t) {
                    return t || (t = N.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), t
                }, e.decode = function (e, n) {
                    e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.UserAttributeRet.AttributeInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(), uB = t.UserAttributeSet = function () {
            function e(e) {
                if (this.attributeInfos = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.attributeInfos = q.emptyArray, e.encode = function (e, n) {
                if (n || (n = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && n.uint32(18).string(e.account), null != e.attributeInfos && e.attributeInfos.length) for (var r = 0; r < e.attributeInfos.length; ++r) t.UserAttributeSet.AttributeInfo.encode(e.attributeInfos[r], n.uint32(26).fork()).ldelim();
                return n
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeSet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        case 3:
                            r.attributeInfos && r.attributeInfos.length || (r.attributeInfos = []), r.attributeInfos.push(t.UserAttributeSet.AttributeInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeInfo = function () {
                function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }

                return e.prototype.key = "", e.prototype.value = "", e.encode = function (e, t) {
                    return t || (t = N.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), t
                }, e.decode = function (e, n) {
                    e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.UserAttributeSet.AttributeInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(), vB = t.UserAttributeMod = function () {
            function e(e) {
                if (this.attributeInfos = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.attributeInfos = q.emptyArray, e.encode = function (e, n) {
                if (n || (n = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && n.uint32(18).string(e.account), null != e.attributeInfos && e.attributeInfos.length) for (var r = 0; r < e.attributeInfos.length; ++r) t.UserAttributeMod.AttributeInfo.encode(e.attributeInfos[r], n.uint32(26).fork()).ldelim();
                return n
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeMod; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        case 3:
                            r.attributeInfos && r.attributeInfos.length || (r.attributeInfos = []), r.attributeInfos.push(t.UserAttributeMod.AttributeInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeInfo = function () {
                function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }

                return e.prototype.key = "", e.prototype.value = "", e.encode = function (e, t) {
                    return t || (t = N.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), t
                }, e.decode = function (e, n) {
                    e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.UserAttributeMod.AttributeInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(), wB = t.UserAttributeDel = function () {
            function e(e) {
                if (this.attributes = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.attributes = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(18).string(e.account), null != e.attributes && e.attributes.length) for (var n = 0; n < e.attributes.length; ++n) t.uint32(26).string(e.attributes[n]);
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeDel; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        case 3:
                            r.attributes && r.attributes.length || (r.attributes = []), r.attributes.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), xB = t.UserAttributeErr = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.code = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(16).uint32(e.code), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeErr; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), yB = t.UserAttributeKeysGet = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(18).string(e.account), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeKeysGet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), zB = t.UserAttributeKeysRet = function () {
            function e(e) {
                if (this.keys = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.keys = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.keys && e.keys.length) for (var n = 0; n < e.keys.length; ++n) t.uint32(18).string(e.keys[n]);
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeKeysRet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.keys && r.keys.length || (r.keys = []), r.keys.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), AB = t.UserAttributeRsp = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeRsp; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), BB = t.GroupStatusList = function () {
            function e(e) {
                if (this.groups = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.groups = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.groups && e.groups.length) for (var n = 0; n < e.groups.length; ++n) t.uint32(18).string(e.groups[n]);
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupStatusList; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.groups && r.groups.length || (r.groups = []), r.groups.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), CB = t.GroupStatusResult = function () {
            function e(e) {
                if (this.groupInfos = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.groupInfos = q.emptyArray, e.encode = function (e, n) {
                if (n || (n = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.groupInfos && e.groupInfos.length) for (var r = 0; r < e.groupInfos.length; ++r) t.GroupStatusResult.GroupInfo.encode(e.groupInfos[r], n.uint32(18).fork()).ldelim();
                return n
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupStatusResult; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.groupInfos && r.groupInfos.length || (r.groupInfos = []), r.groupInfos.push(t.GroupStatusResult.GroupInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.GroupInfo = function () {
                function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }

                return e.prototype.group = "", e.prototype.memberCount = 0, e.encode = function (e, t) {
                    return t || (t = N.create()), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(10).string(e.group), null != e.memberCount && Object.hasOwnProperty.call(e, "memberCount") && t.uint32(16).uint32(e.memberCount), t
                }, e.decode = function (e, n) {
                    e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.GroupStatusResult.GroupInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.group = e.string();
                                break;
                            case 2:
                                r.memberCount = e.uint32();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(), DB = t.GroupCountNotice = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.size = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(8).uint64(e.instance), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(16).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(26).string(e.group), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(32).uint32(e.size), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupCountNotice; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.instance = e.uint64();
                            break;
                        case 2:
                            r.seq = e.uint64();
                            break;
                        case 3:
                            r.group = e.string();
                            break;
                        case 4:
                            r.size = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), EB = t.GroupAttributeGet = function () {
            function e(e) {
                if (this.attributes = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.attributes = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(18).string(e.group), null != e.attributes && e.attributes.length) for (var n = 0; n < e.attributes.length; ++n) t.uint32(26).string(e.attributes[n]);
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeGet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.attributes && r.attributes.length || (r.attributes = []), r.attributes.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), FB = t.GroupAttributeRet = function () {
            function e(e) {
                if (this.attributeMaps = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.attributeMaps = q.emptyArray, e.encode = function (e, n) {
                if (n || (n = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.attributeMaps && e.attributeMaps.length) for (var r = 0; r < e.attributeMaps.length; ++r) t.GroupAttributeRet.AttributeMap.encode(e.attributeMaps[r], n.uint32(18).fork()).ldelim();
                return n
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeRet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.attributeMaps && r.attributeMaps.length || (r.attributeMaps = []), r.attributeMaps.push(t.GroupAttributeRet.AttributeMap.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeMap = function () {
                function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }

                return e.prototype.key = "", e.prototype.value = "", e.prototype.origin = "", e.prototype.ms = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function (e, t) {
                    return t || (t = N.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), null != e.origin && Object.hasOwnProperty.call(e, "origin") && t.uint32(26).string(e.origin), null != e.ms && Object.hasOwnProperty.call(e, "ms") && t.uint32(32).uint64(e.ms), t
                }, e.decode = function (e, n) {
                    e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.GroupAttributeRet.AttributeMap; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            case 3:
                                r.origin = e.string();
                                break;
                            case 4:
                                r.ms = e.uint64();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(), GB = t.GroupAttributeSet = function () {
            function e(e) {
                if (this.attributeInfos = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.broadcast = !1, e.prototype.attributeInfos = q.emptyArray, e.encode = function (e, n) {
                if (n || (n = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && n.uint32(18).string(e.group), null != e.broadcast && Object.hasOwnProperty.call(e, "broadcast") && n.uint32(24).bool(e.broadcast), null != e.attributeInfos && e.attributeInfos.length) for (var r = 0; r < e.attributeInfos.length; ++r) t.GroupAttributeSet.AttributeInfo.encode(e.attributeInfos[r], n.uint32(34).fork()).ldelim();
                return n
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeSet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.broadcast = e.bool();
                            break;
                        case 4:
                            r.attributeInfos && r.attributeInfos.length || (r.attributeInfos = []), r.attributeInfos.push(t.GroupAttributeSet.AttributeInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeInfo = function () {
                function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }

                return e.prototype.key = "", e.prototype.value = "", e.encode = function (e, t) {
                    return t || (t = N.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), t
                }, e.decode = function (e, n) {
                    e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.GroupAttributeSet.AttributeInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(), HB = t.GroupAttributeMod = function () {
            function e(e) {
                if (this.attributeInfos = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.broadcast = !1, e.prototype.attributeInfos = q.emptyArray, e.encode = function (e, n) {
                if (n || (n = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && n.uint32(18).string(e.group), null != e.broadcast && Object.hasOwnProperty.call(e, "broadcast") && n.uint32(24).bool(e.broadcast), null != e.attributeInfos && e.attributeInfos.length) for (var r = 0; r < e.attributeInfos.length; ++r) t.GroupAttributeMod.AttributeInfo.encode(e.attributeInfos[r], n.uint32(34).fork()).ldelim();
                return n
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeMod; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.broadcast = e.bool();
                            break;
                        case 4:
                            r.attributeInfos && r.attributeInfos.length || (r.attributeInfos = []), r.attributeInfos.push(t.GroupAttributeMod.AttributeInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeInfo = function () {
                function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }

                return e.prototype.key = "", e.prototype.value = "", e.encode = function (e, t) {
                    return t || (t = N.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), t
                }, e.decode = function (e, n) {
                    e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.GroupAttributeMod.AttributeInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(), IB = t.GroupAttributeDel = function () {
            function e(e) {
                if (this.attributes = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.broadcast = !1, e.prototype.attributes = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(18).string(e.group), null != e.broadcast && Object.hasOwnProperty.call(e, "broadcast") && t.uint32(24).bool(e.broadcast), null != e.attributes && e.attributes.length) for (var n = 0; n < e.attributes.length; ++n) t.uint32(34).string(e.attributes[n]);
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeDel; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.broadcast = e.bool();
                            break;
                        case 4:
                            r.attributes && r.attributes.length || (r.attributes = []), r.attributes.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), JB = t.GroupAttributeAlt = function () {
            function e(e) {
                if (this.attributeMaps = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.attributeMaps = q.emptyArray, e.encode = function (e, n) {
                if (n || (n = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && n.uint32(18).string(e.group), null != e.instance && Object.hasOwnProperty.call(e, "instance") && n.uint32(24).uint64(e.instance), null != e.attributeMaps && e.attributeMaps.length) for (var r = 0; r < e.attributeMaps.length; ++r) t.GroupAttributeAlt.AttributeMap.encode(e.attributeMaps[r], n.uint32(34).fork()).ldelim();
                return n
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeAlt; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.instance = e.uint64();
                            break;
                        case 4:
                            r.attributeMaps && r.attributeMaps.length || (r.attributeMaps = []), r.attributeMaps.push(t.GroupAttributeAlt.AttributeMap.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeMap = function () {
                function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }

                return e.prototype.key = "", e.prototype.value = "", e.prototype.origin = "", e.prototype.ms = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function (e, t) {
                    return t || (t = N.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), null != e.origin && Object.hasOwnProperty.call(e, "origin") && t.uint32(26).string(e.origin), null != e.ms && Object.hasOwnProperty.call(e, "ms") && t.uint32(32).uint64(e.ms), t
                }, e.decode = function (e, n) {
                    e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.GroupAttributeAlt.AttributeMap; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            case 3:
                                r.origin = e.string();
                                break;
                            case 4:
                                r.ms = e.uint64();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(), KB = t.GroupAttributeRsp = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeRsp; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), LB = t.GroupAttributeErr = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.code = 0, e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(16).uint32(e.code), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeErr; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), MB = t.GroupAttributeKeysGet = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.encode = function (e, t) {
                return t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(18).string(e.group), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeKeysGet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), NB = t.GroupAttributeKeysRet = function () {
            function e(e) {
                if (this.keys = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.keys = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.keys && e.keys.length) for (var n = 0; n < e.keys.length; ++n) t.uint32(18).string(e.keys[n]);
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeKeysRet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.keys && r.keys.length || (r.keys = []), r.keys.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), OB = t.SubscribeUserStatus = function () {
            function e(e) {
                if (this.users = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.users = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.users && e.users.length) for (var n = 0; n < e.users.length; ++n) t.uint32(18).string(e.users[n]);
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.SubscribeUserStatus; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.users && r.users.length || (r.users = []), r.users.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), PB = t.UnsubscribeUserStatus = function () {
            function e(e) {
                if (this.users = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.users = q.emptyArray, e.encode = function (e, t) {
                if (t || (t = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.users && e.users.length) for (var n = 0; n < e.users.length; ++n) t.uint32(18).string(e.users[n]);
                return t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UnsubscribeUserStatus; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.users && r.users.length || (r.users = []), r.users.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), QB = t.UserJoinNotice = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.user = "", e.encode = function (e, t) {
                return t || (t = N.create()), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(8).uint64(e.instance), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(16).uint64(e.seq), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(26).string(e.user), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserJoinNotice; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.instance = e.uint64();
                            break;
                        case 2:
                            r.seq = e.uint64();
                            break;
                        case 3:
                            r.user = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), RB = t.UserQuitNotice = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.user = "", e.encode = function (e, t) {
                return t || (t = N.create()), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(8).uint64(e.instance), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(16).uint64(e.seq), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(26).string(e.user), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserQuitNotice; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.instance = e.uint64();
                            break;
                        case 2:
                            r.seq = e.uint64();
                            break;
                        case 3:
                            r.user = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), SB = t.UserWaitNotice = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.user = "", e.encode = function (e, t) {
                return t || (t = N.create()), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(8).uint64(e.instance), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(16).uint64(e.seq), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(26).string(e.user), t
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserWaitNotice; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.instance = e.uint64();
                            break;
                        case 2:
                            r.seq = e.uint64();
                            break;
                        case 3:
                            r.user = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(), TB = t.SubscribeResponse = function () {
            function e(e) {
                if (this.errors = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.errors = q.emptyArray, e.encode = function (e, n) {
                if (n || (n = N.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.errors && e.errors.length) for (var r = 0; r < e.errors.length; ++r) t.SubscribeResponse.SubscribeErrorsType.encode(e.errors[r], n.uint32(18).fork()).ldelim();
                return n
            }, e.decode = function (e, n) {
                e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.SubscribeResponse; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.errors && r.errors.length || (r.errors = []), r.errors.push(t.SubscribeResponse.SubscribeErrorsType.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.SubscribeErrorsType = function () {
                function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }

                return e.prototype.account = "", e.prototype.code = 0, e.encode = function (e, t) {
                    return t || (t = N.create()), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(10).string(e.account), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(16).uint32(e.code), t
                }, e.decode = function (e, n) {
                    e instanceof u || (e = u.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.SubscribeResponse.SubscribeErrorsType; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.account = e.string();
                                break;
                            case 2:
                                r.code = e.uint32();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(), UB = Object.freeze({
            __proto__: null,
            URI: XA,
            Wrapper: Nh,
            Ping: YA,
            Pong: ZA,
            UserJoin: $A,
            UserResp: aB,
            UserQuit: bB,
            UserDrop: cB,
            GroupEnter: dB,
            GroupLeave: eB,
            GroupReply: fB,
            GroupLeaveNotice: sr,
            GroupEnterNotice: tr,
            Message: ur,
            Ack: vr,
            FileUploadIndexGet: gB,
            FileUploadIndexRet: hB,
            FileUploadIndexSet: iB,
            FileUploadIndexFin: jB,
            FileUploadIndexErr: kB,
            FileDownloadIndexGet: lB,
            FileDownloadIndexRet: mB,
            FileDownloadIndexErr: nB,
            GroupAllUsersList: oB,
            GroupAllUsersResult: pB,
            UserStatusList: qB,
            UserStatusResult: rB,
            UserAttributeGet: sB,
            UserAttributeRet: tB,
            UserAttributeSet: uB,
            UserAttributeMod: vB,
            UserAttributeDel: wB,
            UserAttributeErr: xB,
            UserAttributeKeysGet: yB,
            UserAttributeKeysRet: zB,
            UserAttributeRsp: AB,
            GroupStatusList: BB,
            GroupStatusResult: CB,
            GroupCountNotice: DB,
            GroupAttributeGet: EB,
            GroupAttributeRet: FB,
            GroupAttributeSet: GB,
            GroupAttributeMod: HB,
            GroupAttributeDel: IB,
            GroupAttributeAlt: JB,
            GroupAttributeRsp: KB,
            GroupAttributeErr: LB,
            GroupAttributeKeysGet: MB,
            GroupAttributeKeysRet: NB,
            SubscribeUserStatus: OB,
            UnsubscribeUserStatus: PB,
            UserJoinNotice: QB,
            UserQuitNotice: RB,
            UserWaitNotice: SB,
            SubscribeResponse: TB,
            default: t
        }), VB = Math.ceil, wr = function (e) {
            return function (t, n, r) {
                var i = (t = String(jb(t))).length;
                return r = void 0 === r ? " " : String(r), (n = ta(n)) <= i || "" == r ? t : (n -= i, (i = Nn.call(r, VB(n / r.length))).length > n && (i = i.slice(0, n)), e ? t + i : i + t)
            }
        }, WB = wr(!1), XB = wr(!0), xr = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(Ce);
    P({target: "String", proto: !0, forced: xr}, {
        padEnd: function (e) {
            return XB(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var YB = zf, yr = function (e) {
        return function (t) {
            t = qb(t);
            for (var n, r = Dc(t), i = r.length, o = 0, s = []; i > o;) n = r[o++], ka && !YB.call(t, n) || s.push(e ? [n, t[n]] : t[n]);
            return s
        }
    }, ZB = yr(!0), $B = yr(!1);
    P({target: "Object", stat: !0}, {
        entries: function (e) {
            return ZB(e)
        }
    });
    var aC = Fb.f, zr = "".endsWith, bC = Math.min, Ar = ck("endsWith"), cC = !Ar && !!function () {
        var e = aC(String.prototype, "endsWith");
        return e && !e.writable
    }();
    P({target: "String", proto: !0, forced: !cC && !Ar}, {
        endsWith: function (e) {
            var t = String(jb(this));
            bk(e);
            var n = 1 < arguments.length ? arguments[1] : void 0, r = ta(t.length);
            return n = void 0 === n ? r : bC(ta(n), r), r = String(e), zr ? zr.call(t, r, n) : t.slice(n - r.length, n) === r
        }
    }), ch("match", 1, (function (e, t, n) {
        return [function (t) {
            var n = jb(this), r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function (e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            if (e = va(e), r = String(this), !e.global) return Je(e, r);
            var i = e.unicode;
            e.lastIndex = 0;
            for (var o, s = [], a = 0; null !== (o = Je(e, r));) o = String(o[0]), s[a] = o, "" === o && (e.lastIndex = wj(r, ta(e.lastIndex), i)), a++;
            return 0 === a ? null : s
        }]
    }));
    var dC = Fb.f, Br = "".startsWith, eC = Math.min, Cr = ck("startsWith"), fC = !Cr && !!function () {
        var e = dC(String.prototype, "startsWith");
        return e && !e.writable
    }();
    P({target: "String", proto: !0, forced: !fC && !Cr}, {
        startsWith: function (e) {
            var t = String(jb(this));
            bk(e);
            var n = ta(eC(1 < arguments.length ? arguments[1] : void 0, t.length)), r = String(e);
            return Br ? Br.call(t, r, n) : t.slice(n, n + r.length) === r
        }
    });
    var Mm = function (e) {
            var t = /(%?)(%([jds]))/g, n = Array.prototype.slice.call(arguments, 1);
            return n.length && (e = e.replace(t, (function (e, t, r, i) {
                switch (r = n.shift(), i) {
                    case"s":
                        r = "" + r;
                        break;
                    case"d":
                        r = Number(r);
                        break;
                    case"j":
                        r = JSON.stringify(r)
                }
                return t ? (n.unshift(r), e) : r
            }))), n.length && (e += " " + n.join(" ")), "" + (e = e.replace(/%{2,2}/g, "%"))
        }, gC = /\s/, hC = function (e) {
            for (var t = e.length; t-- && gC.test(e.charAt(t));) ;
            return t
        }, iC = /^\s+/, Dr = NaN, jC = /^[-+]0x[0-9a-f]+$/i, kC = /^0b[01]+$/i, lC = /^0o[0-7]+$/i, mC = parseInt,
        fl = function (e) {
            if ("number" == typeof e) return e;
            if (he(e)) return Dr;
            if (lb(e) && (e = "function" == typeof e.valueOf ? e.valueOf() : e, e = lb(e) ? e + "" : e), "string" != typeof e) return 0 === e ? e : +e;
            e = e ? e.slice(0, hC(e) + 1).replace(iC, "") : e;
            var t = kC.test(e);
            return t || lC.test(e) ? mC(e.slice(2), t ? 2 : 8) : jC.test(e) ? Dr : +e
        }, nC = Math.max, oC = Math.min, pC = function (e, t, n) {
            function r(t) {
                var n = u, r = c;
                return u = c = void 0, p = t, l = e.apply(r, n)
            }

            function i(e) {
                var n = e - h;
                return e -= p, void 0 === h || n >= t || 0 > n || v && e >= g
            }

            function o() {
                var e = Cb.Date.now();
                if (i(e)) return s(e);
                var n = setTimeout, r = e - p;
                e = t - (e - h), r = v ? oC(e, g - r) : e, f = n(o, r)
            }

            function s(e) {
                return f = void 0, b && u ? r(e) : (u = c = void 0, l)
            }

            function a() {
                var e = Cb.Date.now(), n = i(e);
                if (u = arguments, c = this, h = e, n) {
                    if (void 0 === f) return p = e = h, f = setTimeout(o, t), d ? r(e) : l;
                    if (v) return clearTimeout(f), f = setTimeout(o, t), r(h)
                }
                return void 0 === f && (f = setTimeout(o, t)), l
            }

            var u, c, l, f, h, p = 0, d = !1, v = !1, b = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            if (t = fl(t) || 0, lb(n)) {
                d = !!n.leading;
                var g = (v = "maxWait" in n) ? nC(fl(n.maxWait) || 0, t) : g;
                b = "trailing" in n ? !!n.trailing : b
            }
            return a.cancel = function () {
                void 0 !== f && clearTimeout(f), p = 0, u = h = c = f = void 0
            }, a.flush = function () {
                return void 0 === f ? l : s(Cb.Date.now())
            }, a
        }, yc = function (e) {
            function t(e, i) {
                return X(this, t), m(n(e = r.call(this, Lm(e, i))), "originalError", void 0), m(n(e), "code", void 0), m(n(e), "serverCode", void 0), "number" == typeof i ? e.code = i : "string" == typeof i ? e.name = i : void 0 !== i && (i.originalError && (e.originalError = i.originalError), void 0 !== i.code && (e.code = i.code), void 0 !== i.serverCode && (e.serverCode = i.serverCode)), e
            }

            la(t, e);
            var r = ma(t);
            return t
        }(ef(Error)), Ia = function (e) {
            function t(e, i) {
                return X(this, t), m(n(e = r.call(this, Lm(e, i))), "name", "RtmInternalError"), m(n(e), "code", void 0), e.code = i, e
            }

            la(t, e);
            var r = ma(t);
            return t
        }(ef(Error)), Oh = function () {
            return function (e) {
                function t(e) {
                    X(this, t);
                    var r = Object.keys(e);
                    return n.call(this, e[r[0]], r[0])
                }

                la(t, e);
                var n = ma(t);
                return t
            }(Ia)
        }, Fa = Oh(), cb = function (e) {
            function t() {
                X(this, t);
                for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmTimeoutError"), e
            }

            la(t, e);
            var r = ma(t);
            return t
        }(yc), L = function (e) {
            function t() {
                X(this, t);
                for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmInvalidArgumentError"), e
            }

            la(t, e);
            var r = ma(t);
            return t
        }(yc), M = function (e) {
            function t() {
                X(this, t);
                for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmInvalidStatusError"), e
            }

            la(t, e);
            var r = ma(t);
            return t
        }(yc), gl = function (e) {
            function t() {
                X(this, t);
                for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmInterruptedError"), e
            }

            la(t, e);
            var r = ma(t);
            return t
        }(yc), ib = function (e) {
            function t() {
                X(this, t);
                for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmLimitExceededError"), e
            }

            la(t, e);
            var r = ma(t);
            return t
        }(yc), qC = function (e) {
            function t() {
                X(this, t);
                for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmInvokeTooOftenError"), e
            }

            la(t, e);
            var r = ma(t);
            return t
        }(yc), da = function (e) {
            function t() {
                X(this, t);
                for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmUnavailableError"), m(n(e), "serverCode", void 0), m(n(e), "statusCode", void 0), e
            }

            la(t, e);
            var r = ma(t);
            return t
        }(yc), Xe = function (e) {
            function t() {
                X(this, t);
                for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmUnauthenticatedError"), m(n(e), "serverCode", void 0), e
            }

            la(t, e);
            var r = ma(t);
            return t
        }(yc), Vc = function (e) {
            function t() {
                X(this, t);
                for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmUnknownError"), e
            }

            la(t, e);
            var r = ma(t);
            return t
        }(yc), Sa = function (e) {
            return e instanceof cb || e instanceof pb
        }, sa = function (e) {
            return e instanceof yc
        }, Yd = function (e, t, n) {
            return ['Executing "%s.%s" timed out after %ds', e, t, n / 1e3]
        }, Km = new Map, rC = function () {
            var e = new Date;
            return "".concat(e.toISOString().split("T")[1].replace(/\..+/, ""), ".").concat(e.getMilliseconds())
        }, xf = Object.keys, Gg = Object.entries.bind(Object), Cg = function (e) {
            return "string" == typeof e ? e.endsWith(".") ? e : "".concat(e, ".") : e
        }, Rm = function (e) {
            for (var t = "", n = (e = new Uint8Array(e)).byteLength, r = -1; ++r < n;) t += String.fromCharCode(e[r]);
            return t = btoa(t), "data:;base64,".concat(t)
        }, sC = R((function () {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function () {
                    return 1
                }
            })
        }));
    P({target: "Date", proto: !0, forced: sC}, {
        toJSON: function (e) {
            e = Qa(this);
            var t = lc(e);
            return "number" != typeof t || isFinite(t) ? e.toISOString() : null
        }
    }), P({target: "URL", proto: !0, enumerable: !0}, {
        toJSON: function () {
            return URL.prototype.toString.call(this)
        }
    });
    var Yt = Object.prototype.hasOwnProperty, Er = function (e, t, n) {
        return JSON.stringify(Xm(e), t, n)
    };
    Er.ensureProperties = Xm;
    var tC = function (e, t) {
        t = t || {};
        var n = aa(e);
        if ("string" === n && 0 < e.length) return Zt(e);
        if ("number" === n && isFinite(e)) return t.long ? e = 864e5 <= (t = Math.abs(e)) ? Ig(e, t, 864e5, "day") : 36e5 <= t ? Ig(e, t, 36e5, "hour") : 6e4 <= t ? Ig(e, t, 6e4, "minute") : 1e3 <= t ? Ig(e, t, 1e3, "second") : e + " ms" : e = 864e5 <= (t = Math.abs(e)) ? Math.round(e / 864e5) + "d" : 36e5 <= t ? Math.round(e / 36e5) + "h" : 6e4 <= t ? Math.round(e / 6e4) + "m" : 1e3 <= t ? Math.round(e / 1e3) + "s" : e + "ms", e;
        throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }, uC = function (e) {
        function t(e) {
            function r() {
                for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                if (r.enabled) {
                    e = Number(new Date), r.diff = e - (i || e), r.prev = i, i = r.curr = e, n[0] = t.coerce(n[0]), "string" != typeof n[0] && n.unshift("%O");
                    var s = 0;
                    n[0] = n[0].replace(/%([a-zA-Z%])/g, (function (e, i) {
                        return "%%" === e ? "%" : (s++, "function" == typeof (i = t.formatters[i]) && (e = i.call(r, n[s]), n.splice(s, 1), s--), e)
                    })), t.formatArgs.call(r, n), (r.log || t.log).apply(r, n)
                }
            }

            var i, o = null;
            return r.namespace = e, r.useColors = t.useColors(), r.color = t.selectColor(e), r.extend = n, r.destroy = t.destroy, Object.defineProperty(r, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: function () {
                    return null === o ? t.enabled(e) : o
                },
                set: function (e) {
                    o = e
                }
            }), "function" == typeof t.init && t.init(r), r
        }

        function n(e, n) {
            return (e = t(this.namespace + (void 0 === n ? ":" : n) + e)).log = this.log, e
        }

        function r(e) {
            return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
        }

        return t.debug = t, t.default = t, t.coerce = function (e) {
            return e instanceof Error ? e.stack || e.message : e
        }, t.disable = function () {
            var e = [].concat(I(t.names.map(r)), I(t.skips.map(r).map((function (e) {
                return "-" + e
            })))).join(",");
            return t.enable(""), e
        }, t.enable = function (e) {
            t.save(e), t.names = [], t.skips = [];
            var n, r = ("string" == typeof e ? e : "").split(/[\s,]+/), i = r.length;
            for (n = 0; n < i; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }, t.enabled = function (e) {
            if ("*" === e[e.length - 1]) return !0;
            var n, r = 0;
            for (n = t.skips.length; r < n; r++) if (t.skips[r].test(e)) return !1;
            for (r = 0, n = t.names.length; r < n; r++) if (t.names[r].test(e)) return !0;
            return !1
        }, t.humanize = tC, t.destroy = function () {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }, Object.keys(e).forEach((function (n) {
            t[n] = e[n]
        })), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function (e) {
            for (var n = 0, r = 0; r < e.length; r++) n = (n << 5) - n + e.charCodeAt(r), n |= 0;
            return t.colors[Math.abs(n) % t.colors.length]
        }, t.enable(t.load()), t
    }, Fr = $a((function (e, t) {
        t.formatArgs = function (t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), this.useColors) {
                var n = "color: " + this.color;
                t.splice(1, 0, n, "color: inherit");
                var r = 0, i = 0;
                t[0].replace(/%[a-zA-Z%]/g, (function (e) {
                    "%%" !== e && (r++, "%c" === e && (i = r))
                })), t.splice(i, 0, n)
            }
        }, t.save = function (e) {
            try {
                e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
            } catch (e) {
            }
        }, t.load = function () {
            try {
                var e = t.storage.getItem("debug")
            } catch (e) {
            }
            return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
        }, t.useColors = function () {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        };
        e:{
            try {
                var n = localStorage;
                break e
            } catch (e) {
            }
            n = void 0
        }
        t.storage = n, t.destroy = function () {
            var e = !1;
            return function () {
                e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
            }
        }(), t.colors = "#0000CC #0000FF #0033CC #0033FF #0066CC #0066FF #0099CC #0099FF #00CC00 #00CC33 #00CC66 #00CC99 #00CCCC #00CCFF #3300CC #3300FF #3333CC #3333FF #3366CC #3366FF #3399CC #3399FF #33CC00 #33CC33 #33CC66 #33CC99 #33CCCC #33CCFF #6600CC #6600FF #6633CC #6633FF #66CC00 #66CC33 #9900CC #9900FF #9933CC #9933FF #99CC00 #99CC33 #CC0000 #CC0033 #CC0066 #CC0099 #CC00CC #CC00FF #CC3300 #CC3333 #CC3366 #CC3399 #CC33CC #CC33FF #CC6600 #CC6633 #CC9900 #CC9933 #CCCC00 #CCCC33 #FF0000 #FF0033 #FF0066 #FF0099 #FF00CC #FF00FF #FF3300 #FF3333 #FF3366 #FF3399 #FF33CC #FF33FF #FF6600 #FF6633 #FF9900 #FF9933 #FFCC00 #FFCC33".split(" "), t.log = console.debug || console.log || function () {
        }, e.exports = uC(t), e.exports.formatters.j = function (e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
    })), Gr = Fr("RTM:DEBUG"), Ye;
    Gr.enabled = !1, function (e) {
        e[e.Uploading = 0] = "Uploading", e[e.Free = 1] = "Free"
    }(Ye || (Ye = {}));
    var vC = function () {
            function e(t) {
                X(this, e), m(this, "uploadRequest", void 0), m(this, "uploadState", void 0), m(this, "uploadResendCount", void 0), m(this, "LogCache", void 0), m(this, "LogsToPost", void 0), m(this, "processId", void 0), m(this, "sdkVersion", void 0), m(this, "logId", void 0), this.processId = t.processId, this.sdkVersion = t.sdkVersion, this.uploadRequest = t.uploadRequest, this.uploadState = Ye.Free, this.uploadResendCount = 0, this.LogCache = [], this.LogsToPost = [], this.logId = 0
            }

            return Ha(e, [{
                key: "upload", value: function (e, t) {
                    this.LogCache.push(e), this.uploadState === Ye.Free && (this.LogsToPost = 40 > this.LogCache.length ? this.LogCache.splice(0, this.LogCache.length) : this.LogCache.splice(0, 40), this.postLog(this.LogsToPost, t))
                }
            }, {
                key: "postLog", value: function (e, t) {
                    var n = this;
                    this.uploadState = Ye.Uploading, setTimeout(K(x.mark((function r() {
                        var i, o;
                        return x.wrap((function (r) {
                            for (; ;) switch (r.prev = r.next) {
                                case 0:
                                    return i = {
                                        sdk_version: n.sdkVersion,
                                        process_id: n.processId,
                                        payload: JSON.stringify(e)
                                    }, r.prev = 1, r.next = 4, n.uploadRequest(i, t);
                                case 4:
                                    if (!Tk) {
                                        r.next = 6;
                                        break
                                    }
                                    throw Error("RTM is busy");
                                case 6:
                                    r.next = 13;
                                    break;
                                case 8:
                                    return r.prev = 8, r.t0 = r.catch(1), o = 2 > n.uploadResendCount++ ? 2e3 : 1e4, setTimeout((function () {
                                        return n.postLog(n.LogsToPost, t)
                                    }), o), r.abrupt("return");
                                case 13:
                                    if (Gr('The logs uploaded for "process-'.concat(gg, '"')), 0 !== n.LogCache.length) {
                                        r.next = 17;
                                        break
                                    }
                                    return n.uploadState = Ye.Free, r.abrupt("return");
                                case 17:
                                    n.uploadResendCount = 0, n.LogsToPost = 40 > n.LogCache.length ? n.LogCache.splice(0, n.LogCache.length) : n.LogCache.splice(0, 40), n.postLog(n.LogsToPost, t);
                                case 20:
                                case"end":
                                    return r.stop()
                            }
                        }), r, null, [[1, 8]])
                    }))), Zd.getParameter("LOG_UPLOAD_INTERVAL"))
                }
            }]), e
        }(), Hr = function () {
            var e = K(x.mark((function e(t, n) {
                var r, i, o, s = arguments;
                return x.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (!(2 < (r = 2 < s.length && void 0 !== s[2] ? s[2] : 0))) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return i = {
                                withCredentials: !0,
                                body: t,
                                timeout: 2e4
                            }, o = "https://".concat(0 < r ? (null == n ? void 0 : n.LOG_UPLOAD_SERVER[0]) || "rtm.logservice.sd-rtn.com" : (null == n ? void 0 : n.LOG_UPLOAD_SERVER[0]) || "logservice-rtm.agora.io", "/upload/v1"), e.next = 7, se(o, i).catch((function (e) {
                                return Hr(t, n, r + 1)
                            }));
                        case 7:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t, n) {
                return e.apply(this, arguments)
            }
        }(), wC = new vC({
            processId: "process-".concat(gg),
            sdkVersion: "Agora_RTM_SDK_for_Web_".concat("v1.4.3-0-gc918e772"),
            uploadRequest: Hr
        }), hl = "text payload rawMessage thumbnail attributeInfos keys value extra".split(" "),
        Ir = "account ticket uid detail token account fileName cname user group key origin users src dst lastUpdateUserId channel".split(" "),
        Jr = "serverReceivedTs isOfflineMessage enableHistoricalMessaging enableOfflineMessaging hasPeerReceived messageType enableNotificationToChannelMembers lastUpdateTs".split(" "),
        xC = "ChannelMessage MemberLeft MessageFromPeer LocalInvitationRefused LocalInvitationAccepted RemoteInvitationCanceled PeersOnlineStatusChanged AttributesUpdated MemberJoined".split(" "),
        we = function (e) {
            if ("string" == typeof e) return oa(e);
            if (Array.isArray(e) && e.every((function (e) {
                return "string" == typeof e
            }))) return e.map((function (e) {
                return oa(e)
            }));
            if (!Hl(e)) {
                for (var t = {}, n = 0; n < Jr.length; n++) {
                    var r = Jr[n];
                    r in e && (t[r] = e[r])
                }
                if (0 < Object.keys(t).length) return t;
                if (5 > Object.keys(e).length) {
                    for (n = 0, e = Object.entries(e); n < e.length; n++) {
                        var i = ra(e[n], 2);
                        r = i[0], i = i[1], hl.includes(r) ? t[r] = "[Hidden Info]" : t[oa(r)] = "string" == typeof i ? oa(i) : "[Sensitive Info]"
                    }
                    return t
                }
                return "[Sensitive Info]"
            }
            return e
        }, Kr = function (e) {
            return "object" === aa(e) ? yd(e) ? Um(ee(e, 5), hl, Ir) : e.constructor && e.constructor.name : e
        }, Lr = function (e, t) {
            return e instanceof Error ? e.message : "string" != typeof e ? JSON.stringify(Um(ee(e, 5), hl, Ir)) : (t = t.map((function (e) {
                return e instanceof Error ? e.message : "object" === aa(e) ? Er(Array.isArray(e) ? e.map(Kr) : Kr(e)) : e
            })), Mm.apply(void 0, [e.replace(/%[%Oo]/g, (function (e) {
                return "%%" === e ? "%" : "%o" === e || "%O" === e ? "%s" : e
            }))].concat(I(t))))
        }, yC = 1, Mr = function (e, t, n) {
            var r = Fr(e);
            return r.enabled = !0, r.log = n, r.useColors = !1, function (n) {
                for (var i = arguments.length, o = Array(1 < i ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
                if (t.enableLogUpload) {
                    i = Cg(n);
                    var a = Lr(i, o);
                    wC.upload({
                        log_item_id: "".concat(yC++),
                        log_level: e,
                        payload_str: "[".concat(rC(), "] ").concat(e, " - ").concat(256 < a.length ? a.slice(0, 256) : a)
                    }, t._areaConfig)
                }
                switch (i = function (e) {
                    var t = a || Lr(Cg(n), o), i = od.LOG_HANDLER;
                    "function" == typeof i && i({level: e, message: t}), r(t)
                }, e) {
                    case"RTM:INFO":
                        t.logFilter.info && i("log");
                        break;
                    case"RTM:WARN":
                        t.logFilter.warn && i("warning");
                        break;
                    case"RTM:ERROR":
                        t.logFilter.error && i("error");
                        break;
                    case"RTM:TRACK":
                        t.logFilter.track && i("log");
                        break;
                    case"RTM:MSG:RECV":
                    case"RTM:MSG:SEND":
                        t.logFilter.debug && i("debug");
                        break;
                    case"RTM:DEBUG":
                        t.logFilter.debug && i("debug")
                }
            }
        }, il, Nr = function (e) {
            return function (t) {
                var n = 1 === il || void 0 === e ? "" : "Ins#".concat(e, " ");
                return "".concat(n).concat(t)
            }
        }, jl = function (e, t, n) {
            var r = Nr(il);
            return Mr("RTM:".concat(t), n, (function (t) {
                return e(r(t))
            }))
        }, tb = function () {
            return function (e) {
                function t(e, i) {
                    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    X(this, t);
                    var s = r.call(this);
                    if (m(n(s), "logError", void 0), m(n(s), "invokeTracker", void 0), m(n(s), "resultTracker", void 0), m(n(s), "errorTracker", void 0), m(n(s), "eventTracker", void 0), m(n(s), "info", void 0), m(n(s), "warn", void 0), m(n(s), "log", void 0), m(n(s), "genLogger", void 0), m(n(s), "loggerId", void 0), m(n(s), "logger", void 0), m(n(s), "name", void 0), s.logger = e, s.name = i, s.loggerId = e.loggerId, s.info = e.info, s.warn = e.warn, s.logError = e.logError, s.genLogger = e.genLogger, s.log = e.genLogger("RTM:DEBUG", "<".concat(i, "> ")), s.invokeTracker = e.genTracker("Invoke"), s.eventTracker = e.genTracker("Event"), s.resultTracker = e.genTracker("Result"), s.errorTracker = e.genTracker("Error"), o) {
                        var a = s.emit.bind(n(s));
                        s.emit = function () {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            e = t[0], n = t.slice(1);
                            var r = xC.includes(e);
                            s.eventTracker.apply(s, ["%s: ".concat(0 < n.length ? "%s emitted with args: ".concat(n.map((function () {
                                return "%o"
                            }))) : "%s emitted"), i, e].concat(I(r ? n.map(we) : n)));
                            try {
                                a.apply(void 0, t)
                            } catch (t) {
                                s.logError("Caught in the callback function of the event %s", e, t)
                            }
                        }
                    }
                    return s
                }

                la(t, e);
                var r = ma(t);
                return t
            }(ea)
        }, zC = function (e) {
            return jl(console.log.bind(console), "INFO", e)
        }, AC = function (e) {
            return jl(console.warn.bind(console), "WARN", e)
        }, BC = function (e) {
            return jl(console.error.bind(console), "ERROR", e)
        }, Or = function (e, t) {
            return function (n) {
                var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "", i = Nr(e),
                    o = console.debug.bind(console), s = Mr(n, t, (function (e) {
                        return o(i(e))
                    }));
                return function (e) {
                    for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    return s.apply(void 0, [r + e].concat(n))
                }
            }
        }, CC = function (e, t) {
            return function (n) {
                return Or(e, t)("RTM:TRACK", "[".concat(n, "] "))
            }
        }, Ki = t.URI, au = Nh, DC = ff(UB, ["Wrapper"]), Ym = Fk(DC, "URI"), Pr = function (e, t) {
            var n = -1, r = e.length, i = r - 1;
            for (t = void 0 === t ? r : t; ++n < t;) {
                var o = e[r = lr(n, i)];
                e[r] = e[n], e[n] = o
            }
            return e.length = t, e
        }, EC = function (e) {
            return Pr(Wh(e))
        }, FC = function (e) {
            return Pr(Mi(e))
        }, Ze = function (e) {
            return (Va(e) ? EC : FC)(e)
        }, $e = {0: 9591, 1: 9593}, af = function (e) {
            return "https://".concat(e, "/api/v1")
        }, GC = fb.apply(void 0, I(Ze(["web-1.ap.sd-rtn.com", "web-2.ap.sd-rtn.com"].map(af)))),
        HC = fb.apply(void 0, I(Ze(["ap-web-1.agora.io", "ap-web-2.agora.io"].map(af)))),
        IC = fb.apply(void 0, I(Ze(["web-3.ap.sd-rtn.com", "web-4.ap.sd-rtn.com"].map(af)))),
        JC = fb.apply(void 0, I(Ze(["ap-web-3.agora.io", "ap-web-4.agora.io"].map(af)))), kl = Oh(), ll = function (e) {
            function t(e, i, o, s, a, u) {
                X(this, t);
                var c = r.call(this, a, zi("Socket-", a.loggerId));
                if (m(n(c), "isActiveClose", !1), m(n(c), "loggedIn", !1), m(n(c), "useNewDomain", void 0), m(n(c), "receivedPacket", new Pa), m(n(c), "open$", void 0), m(n(c), "input$", new Pa), m(n(c), "userJoin$", new Pa), m(n(c), "attemptsSinceLastError", 0), m(n(c), "message$", new Pa), m(n(c), "socket$", void 0), m(n(c), "toClose", new Pa), m(n(c), "toReconnect", new Pa), m(n(c), "sendLogger", void 0), m(n(c), "receiveLogger", void 0), m(n(c), "ip", void 0), m(n(c), "env", void 0), m(n(c), "ticket", void 0), m(n(c), "context", void 0), m(n(c), "getDomain", (function () {
                    return Zm(c.ip, c.useNewDomain)
                })), m(n(c), "socketReconnector", (function (e) {
                    var t = function (e) {
                        return c.attemptsSinceLastError += 1, c.warn("The %s of Env %d reconnecting %s", c.name, c.env, e.message), Bc(1500)
                    };
                    return e.pipe(Ga((function (e) {
                        return c.log("socket connection closed"), c.loggedIn = !1, 2 <= c.attemptsSinceLastError ? (c.warn("socket connection failure"), c.emit("connectionFailure"), c.close(), Y(e)) : c.isActiveClose ? vb : (c.emit("reconnect"), c.useNewDomain = !c.useNewDomain, Y(e))
                    })), ne((function (e) {
                        return e.pipe(Cc(t))
                    })))
                })), c.ip = e, c.env = i, c.ticket = o, c.context = s, c.useNewDomain = null != u ? u : .5 <= Math.random(), c.sendLogger = c.genLogger("RTM:MSG:SEND"), c.receiveLogger = c.genLogger("RTM:MSG:RECV"), 0 !== i && 1 !== i) throw new kl({ILLEGAL_RTM_ENV: "The env number is out of rtm env count"});
                if (!Fm(e)) throw new kl({IP_NOT_VALID: "The ip from ap is not valid"});
                var l = $e[i];
                c.log("Opening websocket address %s for the Env %d", c.ip, c.env);
                var f = Xb(c.input$, c.userJoin$.pipe(Ot(2)), c.message$).pipe(ba((function (e) {
                    return Nh.encode(e).finish()
                })));
                return e = Xb(Pt("", {
                    protocols: [], makeWebSocket: function () {
                        if (c.context.config.enableCloudProxy) {
                            if (0 === c.context.cloudProxyServers.length) throw c.logError("No cloud proxy server to connect"), new da;
                            var e = "wss://".concat(Zm(KA(c.context.cloudProxyServers), !1), "/");
                            e = ve(e, "sid", c.context.sid), e = ve(e, "remote_port", l.toString()), e = ve(e, "remote_ip", c.ip), e = ve(e, "token", c.context.key), e = new WebSocket(e)
                        } else e = new WebSocket("wss://".concat(c.getDomain(), ":").concat(l));
                        return e.binaryType = "arraybuffer", e
                    }
                }), c.toReconnect), c.socket$ = Ca(e, Sk.pipe(hb(7e3), Ga((function (e) {
                    return Sa(e) && c.warn("socket open timed out"), Y(e)
                })))).pipe(ba((function (e) {
                    if (e instanceof Error) throw c.warn("Env_%d: Force reconnect the socket", c.env), e;
                    return e(f).pipe(ba((function (e) {
                        return Nh.decode(new Uint8Array(e))
                    })))
                })), c.socketReconnector), c.open$ = c.socket$.pipe(ca((function (e) {
                    c.log("Websocket opened", c.name), e.subscribe((function (e) {
                        var t = e.data;
                        e = Ki[e.uri].slice(0, -3), t = Ym[e].decode(t);
                        var n = FA({}, Fk(t, "toJSON"), (function (e, t) {
                            return t instanceof U ? Jm(t) : t
                        })), r = !1;
                        if ((t instanceof tr || t instanceof sr) && t.instance.lessThanOrEqual(4294967295) && (r = !0), t instanceof ur || t instanceof vr) {
                            var i = t.instance, o = t.sequence;
                            (t.dialogue.lessThanOrEqual(4294967295) || i.lessThanOrEqual(4294967295) || o.lessThan(1)) && (r = !0)
                        }
                        r ? c.warn("Env_%d: Illegal %s, abandoned %o", c.env, e, n) : ("Pong" !== e && c.receiveLogger("Env_%d: %s %o", c.env, e, n), c.receivedPacket.next([e, t]))
                    }), (function () {
                    }))
                })), qf(void 0), ob(c.toClose), oe()), c
            }

            la(t, e);
            var r = ma(t);
            return Ha(t, [{
                key: "address", get: function () {
                    return "".concat(this.ip, ":").concat($e[this.env])
                }
            }, {
                key: "sendPacket", value: function (e, t) {
                    if ("Ping" !== e) {
                        var n = uc(t, (function (e) {
                            return e instanceof U ? Jm(e) : e
                        }));
                        this.sendLogger("Env_%d: %s %o", this.env, e, n)
                    }
                    t = $t(e, t), "UserJoin" === e ? this.userJoin$.next(t) : "Message" === e ? this.message$.next(t) : this.input$.next(t)
                }
            }, {
                key: "close", value: function () {
                    this.isActiveClose = !0, this.loggedIn = !1, this.toClose.next()
                }
            }, {
                key: "fromReceived", value: function (e) {
                    var t = this;
                    return this.receivedPacket.pipe(ca((function (e) {
                        var n = ra(e, 2);
                        e = n[0], n = n[1], "UserResp" === e && (t.attemptsSinceLastError = 0, t.loggedIn = !0), "UserDrop" === e && t.emit("socketUserDrop", n)
                    })), wb((function (t) {
                        return ra(t, 1)[0] === e
                    })), ba((function (e) {
                        return ra(e, 2)[1]
                    })))
                }
            }, {
                key: "forceReconnect", value: function () {
                    this.toReconnect.next(new kl({FORCE_RECONNECTING: "Connection seems broken, try force reconnecting"}))
                }
            }]), t
        }(tb());
    P({target: "String", proto: !0, forced: xr}, {
        padStart: function (e) {
            return WB(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Qr = function (e, t, n, r, i, o, s, a) {
        var u = 0;
        for (s = !!s && Id(s, a, 3); u < r;) {
            if (u in n) {
                if (a = s ? s(n[u], u, t) : n[u], 0 < o && fd(a)) i = Qr(e, t, a, ta(a.length), i, o - 1) - 1; else {
                    if (9007199254740991 <= i) throw TypeError("Exceed the acceptable array length");
                    e[i] = a
                }
                i++
            }
            u++
        }
        return i
    }, KC = Qr, Db, ud, C;
    P({target: "Array", proto: !0}, {
        flat: function () {
            var e = arguments.length ? arguments[0] : void 0, t = Qa(this), n = ta(t.length), r = Rg(t, 0);
            return r.length = KC(r, t, t, n, 0, void 0 === e ? 1 : $b(e)), r
        }
    }), P({target: "Object", stat: !0}, {
        values: function (e) {
            return $B(e)
        }
    }), function (e) {
        e.CHINA = "CN", e.ASIA = "AS", e.NORTH_AMERICA = "NA", e.EUROPE = "EU", e.JAPAN = "JP", e.INDIA = "IN", e.OCEANIA = "OC", e.SOUTH_AMERICA = "SA", e.AFRICA = "AF", e.OVERSEA = "OVERSEA", e.GLOBAL = "GLOBAL"
    }(C || (C = {}));
    var LC = {
            CN: C.CHINA,
            NA: C.NORTH_AMERICA,
            EU: C.EUROPE,
            AS: C.ASIA,
            JP: C.JAPAN,
            IN: C.INDIA,
            GLOB: C.GLOBAL,
            AF: C.AFRICA,
            OC: C.OVERSEA,
            OVS: C.OVERSEA,
            SA: C.SOUTH_AMERICA
        }, Jg = Vm((Db = {}, m(Db, C.ASIA, {
            CODE: C.ASIA,
            AP_DOMAINS: ["ap-web-1-asia.agora.io"],
            AP_BACKUP_DOMAINS: ["ap-web-2-asia.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-asia.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-asia.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-asia.agora.io"]
        }), m(Db, C.NORTH_AMERICA, {
            CODE: C.NORTH_AMERICA,
            AP_DOMAINS: ["ap-web-1-north-america.agora.io"],
            AP_BACKUP_DOMAINS: ["ap-web-2-north-america.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-north-america.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-north-america.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-north-america.agora.io"]
        }), m(Db, C.EUROPE, {
            CODE: C.EUROPE,
            AP_DOMAINS: ["ap-web-1-europe.agora.io"],
            AP_BACKUP_DOMAINS: ["ap-web-2-europe.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-europe.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-europe.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-europe.agora.io"]
        }), m(Db, C.JAPAN, {
            CODE: C.JAPAN,
            AP_DOMAINS: ["ap-web-1-japan.agora.io"],
            AP_BACKUP_DOMAINS: ["ap-web-2-japan.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-japan.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-japan.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-japan.agora.io"]
        }), m(Db, C.INDIA, {
            CODE: C.INDIA,
            AP_DOMAINS: ["ap-web-1-india.agora.io"],
            AP_BACKUP_DOMAINS: ["ap-web-2-india.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-india.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-india.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-india.agora.io"]
        }), m(Db, C.OVERSEA, {
            CODE: C.OVERSEA,
            AP_DOMAINS: ["ap-web-1-oversea.agora.io"],
            AP_BACKUP_DOMAINS: ["ap-web-2-oversea.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-oversea.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-oversea.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-oversea.agora.io"]
        }), m(Db, C.GLOBAL, {
            CODE: C.GLOBAL,
            AP_DOMAINS: ["ap-web-1.agora.io", "ap-web-2.agora.io"],
            AP_BACKUP_DOMAINS: ["ap-web-3.agora.io", "ap-web-4.agora.io"],
            EVENT_REPORT_DOMAIN: ["webcollector-rtm.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["webcollector-1.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-rtm.agora.io"]
        }), m(Db, C.OCEANIA, {
            CODE: C.OCEANIA,
            AP_DOMAINS: ["ap-web-1-oceania.agora.io"],
            AP_BACKUP_DOMAINS: ["ap-web-2-oceania.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-oceania.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-oceania.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-oceania.agora.io"]
        }), m(Db, C.SOUTH_AMERICA, {
            CODE: C.SOUTH_AMERICA,
            AP_DOMAINS: ["ap-web-1-south-america.agora.io"],
            AP_BACKUP_DOMAINS: ["ap-web-2-south-america.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-south-america.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-south-america.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-south-america.agora.io"]
        }), m(Db, C.AFRICA, {
            CODE: C.AFRICA,
            AP_DOMAINS: ["ap-web-1-africa.agora.io"],
            AP_BACKUP_DOMAINS: ["ap-web-2-africa.agora.io"],
            EVENT_REPORT_DOMAIN: ["statscollector-1-africa.agora.io"],
            EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-africa.agora.io"],
            LOG_UPLOAD_SERVER: ["logservice-south-africa.agora.io"]
        }), m(Db, C.CHINA, {
            CODE: C.CHINA,
            AP_DOMAINS: ["webrtc2-2.ap.sd-rtn.com"],
            AP_BACKUP_DOMAINS: ["webrtc2-4.ap.sd-rtn.com"],
            EVENT_REPORT_DOMAIN: ["web-3.statscollector.sd-rtn.com"],
            EVENT_REPORT_BACKUP_DOMAIN: ["web-4.statscollector.sd-rtn.com"],
            LOG_UPLOAD_SERVER: ["logservice-china.agora.io"]
        }), Db)),
        yf = (ud = {}, m(ud, C.ASIA, [C.CHINA, C.JAPAN, C.INDIA]), m(ud, C.EUROPE, []), m(ud, C.NORTH_AMERICA, []), m(ud, C.SOUTH_AMERICA, []), m(ud, C.OCEANIA, []), m(ud, C.AFRICA, []), ud),
        Rr = [C.OVERSEA, C.GLOBAL, C.CHINA, C.NORTH_AMERICA, C.EUROPE, C.ASIA, C.JAPAN, C.INDIA, C.OCEANIA, C.SOUTH_AMERICA, C.AFRICA],
        $m = function (e) {
            return Object.values(yf).flat().includes(e)
        }, cu = function (e) {
            var t;
            return null === (t = Gg(yf).find((function (t) {
                return (t = ra(t, 2))[0], t[1].includes(e)
            }))) || void 0 === t ? void 0 : t[0]
        }, MC = function (e) {
            return e.sort((function (e, t) {
                return Rr.indexOf(e) - Rr.indexOf(t)
            }))
        }, xe = function (e) {
            var t = new Set;
            if (0 === (e = MC(e).slice(0, 3).map((function (e) {
                var n = Jg[e];
                if (void 0 === n) throw new Ia("invalid area key");
                return e = n.CODE, n = ff(n, ["CODE"]), t.add(e), n
            }))).length) throw new Ia("areas cannot be empty");
            return ua({CODES: t}, e.reduce((function (e, t) {
                for (var n = 0, r = Gg(e); n < r.length; n++) {
                    var i = ra(r[n], 2), o = i[0];
                    i = i[1], e[o] = Array.from(new Set([].concat(I(t[o]), I(i))))
                }
                return e
            })))
        }, y, NC = function (e) {
            var t = xf(Jg);
            e = Wt(e);
            for (var n = 0; n < t.length; n++) {
                var r = Jg[t[n]];
                if (null != r && r.AP_DOMAINS.includes(e) || null != r && r.AP_BACKUP_DOMAINS.includes(e)) return [r.CODE]
            }
            return [C.CHINA, C.GLOBAL]
        }, OC = {
            INVALID_APP_ID: "Illegal App ID",
            NO_AUTHORIZED: "Signature verification failed",
            TOKEN_TIMEOUT: "Dynamic key expired",
            INVALID_TOKEN_UID: "UID in the security key(token) is not valid",
            APP_ID_NO_ACTIVATED: "The vendor is not activated",
            DYNAMIC_KEY_NOT_ENABLED: "The vendor did not enable the dynamic key, but uses the dynamic key",
            DYNAMIC_ENABLED_BUT_STATIC_KEY: "The vendor enabled the dynamic key, but uses the static key",
            TOKEN_EXPIRED: "The token has expired",
            INVALID_USER_ID: "The user ID to login does not match the token",
            FORBIDDEN_REGION: "Forbidden to access the request in this area",
            CANNOT_MEET_AREA_DEMAND: "Cannot allocate to meet the requirements of the given area limit"
        }, Sr = {
            5: "INVALID_APP_ID",
            7: "INVALID_USER_ID",
            9: "NO_AUTHORIZED",
            10: "TOKEN_TIMEOUT",
            11: "APP_ID_NO_ACTIVATED",
            12: "INVALID_TOKEN_UID",
            13: "TOKEN_EXPIRED",
            14: "DYNAMIC_KEY_NOT_ENABLED",
            15: "DYNAMIC_ENABLED_BUT_STATIC_KEY",
            18: "FORBIDDEN_REGION",
            19: "CANNOT_MEET_AREA_DEMAND"
        }, PC = [100, 101, 102], Ph = /web-(\d)/, Tr = function (e) {
            function t(e, i) {
                var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                X(this, t);
                var s = r.call(this, i, "AccessPoint");
                return m(n(s), "handleUniLbsError", (function (e, t) {
                    var n = e;
                    if (4 < e.toString().length) {
                        var r = e.toString().padStart(8, "0"), i = parseInt(r.slice(0, 4), 10);
                        if (r = parseInt(r.slice(4, 8), 10), 201 === i) n = r; else if (101 === i && !PC.includes(r)) return Y(Error("service is currently unavailable"))
                    }
                    if (i = n.toString(), !Object.keys(Sr).includes(i)) return (e = new da(["Login is rejected by the server. The response code is %d", e], jg)).serverCode = n, Y(e);
                    switch (i = Sr[i], n = OC[i], i) {
                        case"INVALID_APP_ID":
                        case"APP_ID_NO_ACTIVATED":
                            return (t = new Xe(n, Yq)).serverCode = e, Y(t);
                        case"INVALID_USER_ID":
                            return (t = new Xe(n, Ih)).serverCode = e, Y(t);
                        case"TOKEN_EXPIRED":
                        case"TOKEN_TIMEOUT":
                            return (t = new Xe(n, Jh)).serverCode = e, Y(t);
                        case"NO_AUTHORIZED":
                        case"INVALID_TOKEN_UID":
                        case"DYNAMIC_KEY_NOT_ENABLED":
                        case"DYNAMIC_ENABLED_BUT_STATIC_KEY":
                            return (t = new Xe(n, Zq)).serverCode = e, Y(t);
                        case"CANNOT_MEET_AREA_DEMAND":
                            return (t = NC(t)).forEach((function (e) {
                                return s.failedAreas.add(e)
                            })), s.failedAreas.size === (void 0 === y ? 2 : y.CODES.size) ? ((t = new L(n, jg)).serverCode = e, Y(t)) : Y(Error("ap ".concat(t.join(", "), " cannot meet requirement")));
                        case"FORBIDDEN_REGION":
                            return (t = new da(n, jg)).serverCode = e, Y(t);
                        default:
                            return Y(Hm("ApResErrType", i))
                    }
                })), m(n(s), "getApEdgeInfo$", void 0), m(n(s), "getApEdgeInfoEndFirst$", void 0), m(n(s), "apFinish$", new Pa), m(n(s), "retryCount", 0), m(n(s), "failedAreas", new Set), m(n(s), "usedUrl", []), m(n(s), "newDomainUsed", !1), m(n(s), "backupNewDomainUsed", !1), m(n(s), "genUrl", (function () {
                    return void 0 === y ? li.apply(void 0, I(Ze([GC, HC]))).pipe(mi((function (e) {
                        return fb.apply(void 0, I(e))
                    }))) : fb.apply(void 0, I(y.AP_DOMAINS.slice(0, 3).map(af)))
                })), m(n(s), "genBackupUrl", (function () {
                    return void 0 === y ? li.apply(void 0, I(Ze([IC, JC]))).pipe(mi((function (e) {
                        return fb.apply(void 0, I(e))
                    }))) : fb.apply(void 0, I(y.AP_BACKUP_DOMAINS.slice(0, 3).map(af)))
                })), m(n(s), "getUrl$", (function (e) {
                    var n, r;
                    return s.genUrl().pipe(wb((function (e) {
                        return (!s.newDomainUsed || !e.includes("sd-rtn.com")) && (e.includes("sd-rtn.com") && (s.newDomainUsed = !0), !cl(s.usedUrl, (function (t) {
                            var n;
                            return t === (null === (n = e.match(Ph)) || void 0 === n ? void 0 : n[1])
                        })))
                    })), ca((function (e) {
                        var t;
                        void 0 === y && ("string" == typeof (e = null === (t = e.match(Ph)) || void 0 === t ? void 0 : t[1]) && s.usedUrl.push(e))
                    })), Oa(e ? Math.max(od.RECONNECTING_AP_NUM, null !== (n = null == y ? void 0 : y.CODES.size) && void 0 !== n ? n : 0) : null !== (r = null == y ? void 0 : y.CODES.size) && void 0 !== r ? r : 2), Dd((function () {
                        return t.runOutOfUrlSymbol
                    })), Ga((function (e, n) {
                        return s.newDomainUsed = !1, e === t.runOutOfUrlSymbol ? (s.usedUrl = [], n) : Y(e)
                    })))
                })), m(n(s), "getBackupUrl$", (function (e) {
                    var n, r;
                    return s.genBackupUrl().pipe(wb((function (e) {
                        return (!s.backupNewDomainUsed || !e.includes("sd-rtn.com")) && (e.includes("sd-rtn.com") && (s.backupNewDomainUsed = !0), !cl(s.usedUrl, (function (t) {
                            var n;
                            return t === (null === (n = e.match(Ph)) || void 0 === n ? void 0 : n[1])
                        })))
                    })), ca((function (e) {
                        var t;
                        void 0 === y && ("string" == typeof (e = null === (t = e.match(Ph)) || void 0 === t ? void 0 : t[1]) && s.usedUrl.push(e))
                    })), Oa(e ? Math.max(od.RECONNECTING_AP_NUM, null !== (n = null == y ? void 0 : y.CODES.size) && void 0 !== n ? n : 0) : null !== (r = null == y ? void 0 : y.CODES.size) && void 0 !== r ? r : 2), Dd((function () {
                        return t.runOutOfUrlSymbol
                    })), Ga((function (e, n) {
                        return s.backupNewDomainUsed = !1, e === t.runOutOfUrlSymbol ? (s.usedUrl = [], n) : Y(e)
                    })))
                })), m(n(s), "context", void 0), m(n(s), "fetchCloudProxy", (function (e, t) {
                    var n = zi("AP-", s.loggerId);
                    s.log("The AccessPoint requests %s(%s)", e, n);
                    var r = new AbortController;
                    return s.apFinish$.pipe(Oa(1)).subscribe((function () {
                        return r.abort()
                    })), $c(K(x.mark((function i() {
                        var o;
                        return x.wrap((function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    return o = Ag(0, Number.MAX_SAFE_INTEGER), s.log("%s request opid: %d", n, o), i.abrupt("return", se(e, {
                                        headers: {
                                            "X-Packet-Service-Type": "0",
                                            "X-Packet-URI": "90",
                                            "Content-Type": "application/json"
                                        },
                                        body: {
                                            sid: s.context.sid,
                                            opid: o,
                                            appid: s.context.appId,
                                            client_ts: Math.ceil(Date.now() / 1e3),
                                            request_bodies: [{
                                                uri: 22,
                                                buffer: {
                                                    service_ids: [7, 16],
                                                    key: null != t ? t : s.context.key,
                                                    cname: s.context.uid,
                                                    uid: 0,
                                                    detail: ua({}, void 0 === y ? {11: [C.CHINA, C.GLOBAL].join()} : {
                                                        11: Array.from(y.CODES).map((function (e) {
                                                            return e === C.OVERSEA ? "".concat(C.ASIA, ",").concat(C.EUROPE, ",").concat(C.AFRICA, ",").concat(C.NORTH_AMERICA, ",").concat(C.SOUTH_AMERICA, ",").concat(C.OCEANIA) : e
                                                        })).join(",")
                                                    })
                                                }
                                            }]
                                        },
                                        signal: r.signal
                                    }));
                                case 3:
                                case"end":
                                    return i.stop()
                            }
                        }), i)
                    })))).pipe(Ga((function (t) {
                        return "AbortError" !== t.name && (s.logError(t), s.warn("The AP server %s request failure", e, t)), vb
                    })), bb(function () {
                        var t = K(x.mark((function t(r) {
                            var i, o, a, u, c, l, f, h, p, d, v, b, g, y, E, m, w, _, O;
                            return x.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = r.responseText, o = JSON.parse(i), s.log("The %s response is %o", n, o), (void 0 === (a = o.response_body) || 0 === a.length || a.some((function (e) {
                                            var t;
                                            return void 0 === (null === (t = e.buffer) || void 0 === t ? void 0 : t.code) || 23 !== e.uri
                                        }))) && Y(new da("cloud proxy response_body not valid", jg)), 0 === (u = a.filter((function (e) {
                                            return 0 !== e.buffer.code
                                        }))).length) {
                                            t.next = 14;
                                            break
                                        }
                                        if (void 0 === (c = u.find((function (e) {
                                            return 128 === e.buffer.flag
                                        })))) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.abrupt("return", s.handleUniLbsError(c.buffer.code, e));
                                    case 12:
                                        return s.logError("cloud proxy error response"), t.abrupt("return", s.handleUniLbsError(u[0].buffer.code, e));
                                    case 14:
                                        for (l = [], f = 0; f < a.length; f++) if (262144 === (null == (d = a[f]) || null === (h = d.buffer) || void 0 === h ? void 0 : h.flag)) null === (v = d.buffer) || void 0 === v || null === (b = v.edges_services) || void 0 === b || null === (g = b.forEach) || void 0 === g || g.call(b, (function (e) {
                                            Fm(e = e.ip) && -1 === s.context.cloudProxyServers.indexOf(e) && (s.log("got cloud proxy server: %s", e), s.context.cloudProxyServers.push(e))
                                        })); else if (128 === (null == d || null === (p = d.buffer) || void 0 === p ? void 0 : p.flag)) {
                                            for (w = function (e, t) {
                                                var n = t[e];
                                                l.some((function (e) {
                                                    return e.ip === n.ip
                                                })) || l.push({ip: n.ip, ticket: d.buffer.cert})
                                            }, _ = 0, O = d.buffer.edges_services; _ < O.length; _++) w(_, O);
                                            s.context.rtmArea = null !== (y = null === (E = d.buffer) || void 0 === E || null === (m = E.detail) || void 0 === m ? void 0 : m[9]) && void 0 !== y ? y : ""
                                        }
                                        return t.abrupt("return", fb.apply(void 0, I(l).concat([fg])));
                                    case 19:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()), Ga((function (e) {
                        return sa(e) ? Y(e) : vb
                    })), tg(), wb((function (e) {
                        return void 0 !== e && "string" == typeof e.ip && "string" == typeof e.ticket
                    })))
                })), m(n(s), "fetchAp", (function (e, t) {
                    var n = zi("AP-", s.loggerId);
                    s.log("The AccessPoint requests %s(%s)", e, n);
                    var r = new AbortController;
                    return s.apFinish$.pipe(Oa(1)).subscribe((function () {
                        return r.abort()
                    })), $c(K(x.mark((function i() {
                        var o;
                        return x.wrap((function (i) {
                            for (; ;) switch (i.prev = i.next) {
                                case 0:
                                    return o = Ag(0, Number.MAX_SAFE_INTEGER), s.log("%s request opid: %d", n, o), i.abrupt("return", se(e, {
                                        headers: {
                                            "X-Packet-Service-Type": "0",
                                            "X-Packet-URI": "69",
                                            "Content-Type": "application/json"
                                        },
                                        body: {
                                            flag: 128,
                                            opid: o,
                                            key: t || s.context.key,
                                            cname: s.context.uid,
                                            detail: ua({}, void 0 === y ? {11: [C.CHINA, C.GLOBAL].join()} : {
                                                11: Array.from(y.CODES).map((function (e) {
                                                    return e === C.OVERSEA ? "".concat(C.ASIA, ",").concat(C.EUROPE, ",").concat(C.AFRICA, ",").concat(C.NORTH_AMERICA, ",").concat(C.SOUTH_AMERICA, ",").concat(C.OCEANIA) : e
                                                })).join(",")
                                            }),
                                            uid: 0,
                                            sid: s.context.sid
                                        },
                                        signal: r.signal
                                    }));
                                case 3:
                                case"end":
                                    return i.stop()
                            }
                        }), i)
                    })))).pipe(Ga((function (t) {
                        return "AbortError" !== t.name && (s.logError(t), s.warn("The AP server %s request failure", e, t)), vb
                    })), bb(function () {
                        var t = K(x.mark((function t(r) {
                            var i, o, a, u, c, l, f;
                            return x.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = r.responseText, o = JSON.parse(i), s.log("The %s response is %o", n, o), u = (a = o).code, c = a.addresses, l = a.detail, 0 === u) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return", s.handleUniLbsError(u, e));
                                    case 6:
                                        if (0 !== (f = c).length) {
                                            t.next = 11;
                                            break
                                        }
                                        return t.abrupt("return", Y(Error("No available edge address to connect")));
                                    case 11:
                                        return s.context.rtmArea = null == l ? void 0 : l[9], t.abrupt("return", fb.apply(void 0, I(f).concat([fg])));
                                    case 13:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()), tg(), Ga((function (e) {
                        return sa(e) ? Y(e) : vb
                    })), wb((function (e) {
                        return void 0 !== e && "string" == typeof e.ip && "string" == typeof e.ticket
                    })))
                })), s.context = e, s.getApEdgeInfoEndFirst$ = function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return Bc(0, e || o ? od.RECONNECTING_AP_INTERVAL : 2e3).pipe(Oa(1), ca((function () {
                        s.retryCount += 1
                    })), bb((function () {
                        return 4 <= s.retryCount && (s.retryCount = 0), 3 >= s.retryCount ? s.getUrl$(e || o) : s.getBackupUrl$(e || o)
                    })), bb((function (e) {
                        return s.context.config.enableCloudProxy ? s.fetchCloudProxy(e) : s.fetchAp(e)
                    })), Ga((function (e) {
                        return e instanceof pb && s.warn("AP request timeout"), Y(e)
                    })), nm((function (e) {
                        return e.ip
                    })), ob(s.apFinish$))
                }, s.getApEdgeInfo$ = function (e) {
                    return Bc(0, e || o ? od.RECONNECTING_AP_INTERVAL : 2e3).pipe(Oa(8), ca((function () {
                        s.retryCount += 1
                    })), bb((function () {
                        return 3 >= s.retryCount ? s.getUrl$(e || o) : s.getBackupUrl$(e || o)
                    })), bb((function (e) {
                        return (s.context.config.enableCloudProxy ? s.fetchCloudProxy(e) : s.fetchAp(e)).pipe()
                    })), Ga((function (e) {
                        return e instanceof pb && s.warn("AP request timeout"), Y(e)
                    })), nm((function (e) {
                        return e.ip
                    })), ob(s.apFinish$))
                }, s
            }

            la(t, e);
            var r = ma(t);
            return Ha(t, [{
                key: "clearUp", value: function () {
                    this.failedAreas.clear(), this.retryCount = 0
                }
            }]), t
        }(tb());
    m(Tr, "runOutOfUrlSymbol", Symbol("AP urls are used up"));
    var Ur = Oh(), Vr = function (e) {
            function t(e, i, o) {
                X(this, t);
                var s = r.call(this, i, "Connection");
                m(n(s), "apClient", void 0), m(n(s), "lastOpenSockets", [new pe(1), new pe(1)]), m(n(s), "curOpenSockets", [void 0, void 0]), m(n(s), "ipIterator", 0), m(n(s), "firstEnv", .5 <= Math.random() ? 1 : 0), m(n(s), "firstSocketOpener", void 0), m(n(s), "secondSocketOpener", void 0), m(n(s), "firstOpenKeeperSubject", new Pa), m(n(s), "secondOpenKeeperSubject", new Pa), m(n(s), "edgeInfoReplayed", void 0), m(n(s), "firstEnvOpenSocket", void 0), m(n(s), "firstOpenKeeperSub", void 0), m(n(s), "secondOpenKeeperSub", void 0), m(n(s), "context", void 0), m(n(s), "logger", void 0), s.context = e, s.logger = i, s.apClient = new Tr(s.context, i), s.apClient.apFinish$.subscribe((function () {
                    s.log("Ap client fetch finished")
                }));
                var a, u = [];
                return s.edgeInfoReplayed = s.apClient.getApEdgeInfo$(o).pipe(ne((function (e) {
                    return e.pipe(ca((function (e) {
                        if (sa(e)) throw e
                    })), bd(o ? Zd.getParameter("RECONNECTING_AP_INTERVAL") : 900), ob(Bc(1e4)))
                })), wb((function (e) {
                    return !cl(u, e)
                })), Dd((function () {
                    return new Ur({AP_NO_AVAILABLE_EDGE: "No available edge address to connect"})
                })), ca((function (e) {
                    u.push(e), s.log("An edge info got %o", e)
                })), ca({
                    error: function (e) {
                        s.emit("connectionInitFailure", e)
                    }
                }), wg((function () {
                    s.apClient.clearUp()
                })), rm()), s.firstEnvOpenSocket = s.edgeInfoReplayed.pipe(bb((function (e) {
                    if (void 0 === e) return Y(Error("Invalid edge info"));
                    var t = new ll(e.ip, s.firstEnv, e.ticket, s.context, i, a);
                    return s.firstEnv = 1 === s.firstEnv ? 0 : 1, t.on("connectionFailure", (function () {
                        return s.onSocketConnectionFailure(t)
                    })), a = !t.useNewDomain, t.open$.pipe(qf(t))
                })), ca((function (e) {
                    s.log("The websocket of ENV_%d opened to %s:%d", e.env, e.ip, $e[e.env]), s.curOpenSockets[e.env] = e, s.lastOpenSockets[e.env].next(e), s.firstEnv = e.env, s.openSecondSocket(e.env, e.ip, e.useNewDomain)
                })), Oa(1), oe()), s.firstSocketOpener = s.firstEnvOpenSocket.pipe(bb((function (e) {
                    return e.open$.pipe(ca((function () {
                        s.log("The websocket of first ENV_%d re-opened to %s:%d", e.env, e.ip, $e[e.env]), s.curOpenSockets[e.env] = e, s.lastOpenSockets[e.env].next(e)
                    })))
                }))), e = s.firstOpenKeeperSubject.pipe(Cc(Xc)), s.firstOpenKeeperSub = e.subscribe({error: s.logError}), s
            }

            la(t, e);
            var r = ma(t);
            return Ha(t, [{
                key: "initConnection", value: function () {
                    this.firstOpenKeeperSubject.next(this.firstSocketOpener)
                }
            }, {
                key: "closeSocket", value: function (e, t) {
                    if (![0, 1].includes(e)) throw new Fa({INVALID_ENV: "The env argument is not 0 or 1"});
                    var n = e === this.firstEnv ? this.firstOpenKeeperSub : this.secondOpenKeeperSub;
                    this.firstOpenKeeperSub = void 0;
                    var r = this.curOpenSockets[e];
                    this.curOpenSockets[e] = void 0, r && (r.isActiveClose = !0, setTimeout((function () {
                        r.close()
                    }), t)), void 0 !== n && setTimeout((function () {
                        null == n || n.unsubscribe()
                    }), t)
                }
            }, {
                key: "waitClosing", value: function (e) {
                    var t = this;
                    return e.isActiveClose = !0, e.open$.pipe(qt(), Ga((function (e) {
                        return e.message === kr.normalClosureMessage ? vb : Y(e)
                    })), hb(5e3), Ga((function (n) {
                        return n instanceof pb ? (t.warn("Force closing the ENV_%d connection", e.env), vb) : Y(n)
                    })))
                }
            }, {
                key: "onSocketConnectionFailure", value: function (e) {
                    var t = [0, 1].filter((function (t) {
                        return t !== e.env
                    }))[0];
                    (t = this.curOpenSockets[t]) && t.loggedIn ? this.reopenSocketWithApRequest(e.env) : this.emit("socketsFailure")
                }
            }, {
                key: "openSecondSocket", value: function (e, t, n) {
                    var r = this, i = 1 === e ? 0 : 1;
                    this.secondSocketOpener = this.edgeInfoReplayed.pipe(qm((function (e, t) {
                        return [].concat(I(e), [t])
                    }), []), ba((function (e) {
                        return ir(e, (function (e) {
                            return Im(t, e.ip)
                        })).slice(-1)[0]
                    })), Oa(1), bb((function (e) {
                        if (void 0 === e) return Y(Error("Invalid edge info"));
                        var t = new ll(e.ip, i, e.ticket, r.context, r.logger, n);
                        return t.on("connectionFailure", (function () {
                            return r.onSocketConnectionFailure(t)
                        })), t.open$.pipe(ca((function () {
                            r.lastOpenSockets[i].next(t), r.curOpenSockets[i] = t
                        })))
                    })), oe()), this.secondOpenKeeperSub = this.secondOpenKeeperSubject.pipe(Cc(Xc)).subscribe({error: this.logError}), this.secondOpenKeeperSubject.next(this.secondSocketOpener)
                }
            }, {
                key: "reopenSocketWithApRequest", value: function (e) {
                    var t = this, n = [0, 1].filter((function (t) {
                        return t !== e
                    }))[0];
                    if (void 0 !== (n = this.curOpenSockets[n])) {
                        var r, i = n.ip;
                        n = this.apClient.getApEdgeInfoEndFirst$(!0).pipe(Dd((function () {
                            return new Ur({AP_NO_AVAILABLE_EDGE: "No available edge address to connect"})
                        })), ne((function (e) {
                            return e.pipe(ca((function (e) {
                                if (e.code === Jh) t.emit("tokenExpired"), t.apClient.apFinish$.next(void 0); else if (sa(e)) throw e
                            })), bd(Zd.getParameter("RECONNECTING_AP_INTERVAL")), ob(Bc(8e3)))
                        })), ca((function (e) {
                            t.log("An edge info got %o", e)
                        })), wg((function () {
                            t.apClient.clearUp()
                        }))).pipe(qm((function (e, t) {
                            return [].concat(I(e), [t])
                        }), []), ba((function (e) {
                            return (e = ir(e, (function (e) {
                                return Im(i, e.ip)
                            }))).length - 1 >= t.ipIterator ? e.slice(-t.ipIterator++ - 1)[0] : (t.ipIterator = 0, e.slice(-1)[0])
                        })), Dd(), bb((function (n) {
                            if (void 0 === n) return Y(Error("Invalid edge info"));
                            var i = new ll(n.ip, e, n.ticket, t.context, t.logger, r);
                            return i.on("connectionFailure", (function () {
                                return t.onSocketConnectionFailure(i)
                            })), r = !i.useNewDomain, i.open$.pipe(qf(i))
                        })), ca((function (n) {
                            t.log("The websocket of ENV_%d re-opened to %s:%d using ap", n.env, n.ip, $e[n.env]), t.curOpenSockets[e] = n, t.lastOpenSockets[e].next(n)
                        })), bb((function (n) {
                            return n.open$.pipe(ca((function () {
                                t.log("The websocket of ENV_%d re-opened to %s:%d", n.env, n.ip, $e[n.env]), t.curOpenSockets[e] = n, t.lastOpenSockets[e].next(n)
                            })))
                        })), oe()), e === this.firstEnv ? this.firstOpenKeeperSubject.next(n) : this.secondOpenKeeperSubject.next(n)
                    }
                }
            }]), t
        }(tb()), Wc = fc.Writer, na = fc.util, zc = fc.roots.default || (fc.roots.default = {}),
        QC = zc.Session = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.appId = "", e.prototype.ver = "", e.prototype.buildno = 0, e.prototype.installId = "", e.prototype.os = 0, e.prototype.did = "", e.prototype.index = null, e.prototype.token = "", e.prototype.version = 0, e.prototype.subVersion = 0, e.encode = function (e, t) {
                return t || (t = Wc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.appId && Object.hasOwnProperty.call(e, "appId") && t.uint32(42).string(e.appId), null != e.ver && Object.hasOwnProperty.call(e, "ver") && t.uint32(50).string(e.ver), null != e.buildno && Object.hasOwnProperty.call(e, "buildno") && t.uint32(56).int32(e.buildno), null != e.installId && Object.hasOwnProperty.call(e, "installId") && t.uint32(66).string(e.installId), null != e.os && Object.hasOwnProperty.call(e, "os") && t.uint32(128).int32(e.os), null != e.did && Object.hasOwnProperty.call(e, "did") && t.uint32(138).string(e.did), null != e.index && Object.hasOwnProperty.call(e, "index") && zc.Session.CommonIndex.encode(e.index, t.uint32(162).fork()).ldelim(), null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(170).string(e.token), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(176).int32(e.version), null != e.subVersion && Object.hasOwnProperty.call(e, "subVersion") && t.uint32(184).int32(e.subVersion), t
            }, e.CommonIndex = function () {
                function e(e) {
                    if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }

                return e.prototype.index1 = "", e.prototype.index2 = "", e.prototype.index3 = "", e.encode = function (e, t) {
                    return t || (t = Wc.create()), null != e.index1 && Object.hasOwnProperty.call(e, "index1") && t.uint32(10).string(e.index1), null != e.index2 && Object.hasOwnProperty.call(e, "index2") && t.uint32(18).string(e.index2), null != e.index3 && Object.hasOwnProperty.call(e, "index3") && t.uint32(26).string(e.index3), t
                }, e
            }(), e
        }(), RC = zc.Link = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.ec = 0, e.prototype.sc = 0, e.prototype.destServerIp = "", e.prototype.ackedServerIp = "", e.prototype.responseTime = 0, e.encode = function (e, t) {
                return t || (t = Wc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(40).int32(e.ec), null != e.sc && Object.hasOwnProperty.call(e, "sc") && t.uint32(48).int32(e.sc), null != e.destServerIp && Object.hasOwnProperty.call(e, "destServerIp") && t.uint32(58).string(e.destServerIp), null != e.ackedServerIp && Object.hasOwnProperty.call(e, "ackedServerIp") && t.uint32(66).string(e.ackedServerIp), null != e.responseTime && Object.hasOwnProperty.call(e, "responseTime") && t.uint32(72).int32(e.responseTime), t
            }, e
        }(), SC = zc.Logout = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.encode = function (e, t) {
                return t || (t = Wc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), t
            }, e
        }(), TC = zc.KickedOff = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.linkId = 0, e.prototype.code = 0, e.prototype.server = "", e.prototype.serverCode = 0, e.encode = function (e, t) {
                return t || (t = Wc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.linkId && Object.hasOwnProperty.call(e, "linkId") && t.uint32(48).int32(e.linkId), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(56).int32(e.code), null != e.server && Object.hasOwnProperty.call(e, "server") && t.uint32(66).string(e.server), null != e.serverCode && Object.hasOwnProperty.call(e, "serverCode") && t.uint32(72).int32(e.serverCode), t
            }, e
        }(), UC = zc.ChnJoin = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.cname = "", e.prototype.errCode = 0, e.encode = function (e, t) {
                return t || (t = Wc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(50).string(e.cname), null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(56).int32(e.errCode), t
            }, e
        }(), VC = zc.ChnJoinRes = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.cname = "", e.prototype.errCode = 0, e.prototype.serverErrCode = 0, e.encode = function (e, t) {
                return t || (t = Wc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(50).string(e.cname), null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(56).int32(e.errCode), null != e.serverErrCode && Object.hasOwnProperty.call(e, "serverErrCode") && t.uint32(64).int32(e.serverErrCode), t
            }, e
        }(), WC = zc.ChnLeave = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.cname = "", e.prototype.errCode = 0, e.encode = function (e, t) {
                return t || (t = Wc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(50).string(e.cname), null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(56).int32(e.errCode), t
            }, e
        }(), XC = zc.ConnectionStateChange = function () {
            function e(e) {
                if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }

            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = na.Long ? na.Long.fromBits(0, 0, !1) : 0, e.prototype.oldState = 0, e.prototype.newState = 0, e.prototype.reason = 0, e.prototype.reconnId = 0, e.encode = function (e, t) {
                return t || (t = Wc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.oldState && Object.hasOwnProperty.call(e, "oldState") && t.uint32(40).int32(e.oldState), null != e.newState && Object.hasOwnProperty.call(e, "newState") && t.uint32(48).int32(e.newState), null != e.reason && Object.hasOwnProperty.call(e, "reason") && t.uint32(56).int32(e.reason), null != e.reconnId && Object.hasOwnProperty.call(e, "reconnId") && t.uint32(64).int32(e.reconnId), t
            }, e
        }(), du = Object.freeze({
            __proto__: null,
            Session: QC,
            Link: RC,
            Logout: SC,
            KickedOff: TC,
            ChnJoin: UC,
            ChnJoinRes: VC,
            ChnLeave: WC,
            ConnectionStateChange: XC,
            default: zc
        }), eu = Object.freeze({
            __proto__: null,
            Counter: 1,
            ApiExec: 154,
            Session: 164,
            ApEvent: 165,
            Link: 166,
            Logout: 167,
            TxMessage: 168,
            RxMessage: 169,
            KickedOff: 170,
            TxMessageRes: 171,
            ChnJoin: 172,
            ChnJoinRes: 173,
            ChnLeave: 174,
            ChnGetMembers: 175,
            ChnGetMembersRes: 176,
            ChnMemberJoined: 177,
            ChnMemberLeft: 178,
            QueryPeersOnlineStatus: 179,
            QueryPeersOnlineStatusRes: 180,
            RenewToken: 181,
            OperateAttribute: 186,
            OperateAttributeRes: 187,
            ApRequest: 188,
            LinkTcpEvent: 189,
            LinkLoginRequest: 190,
            ConnectionStateChange: 191,
            default: {
                Counter: 1,
                ApiExec: 154,
                Session: 164,
                ApEvent: 165,
                Link: 166,
                Logout: 167,
                TxMessage: 168,
                RxMessage: 169,
                KickedOff: 170,
                TxMessageRes: 171,
                ChnJoin: 172,
                ChnJoinRes: 173,
                ChnLeave: 174,
                ChnGetMembers: 175,
                ChnGetMembersRes: 176,
                ChnMemberJoined: 177,
                ChnMemberLeft: 178,
                QueryPeersOnlineStatus: 179,
                QueryPeersOnlineStatusRes: 180,
                RenewToken: 181,
                OperateAttribute: 186,
                OperateAttributeRes: 187,
                ApRequest: 188,
                LinkTcpEvent: 189,
                LinkLoginRequest: 190,
                ConnectionStateChange: 191
            }
        }), YC = function (e) {
            function t(e, i, o) {
                return X(this, t), m(n(o = r.call(this, o, "Context")), "_token", void 0), m(n(o), "config", void 0), m(n(o), "_uid", void 0), m(n(o), "_sid", void 0), m(n(o), "_area", "CN"), m(n(o), "appId", void 0), m(n(o), "enableCloudProxy", !1), m(n(o), "cloudProxyServers", []), o.appId = e, o.config = i, o
            }

            la(t, e);
            var r = ma(t);
            return Ha(t, [{
                key: "token", set: function (e) {
                    this._token = "string" == typeof e && e ? e : void 0
                }
            }, {
                key: "uid", get: function () {
                    if ("string" == typeof this._uid && this._uid) return this._uid;
                    throw new Ia("Cannot get illegal uid")
                }, set: function (e) {
                    if (this.log("The user ID is set to %s", oa(e)), !za(e)) throw new Ia;
                    this._uid = e
                }
            }, {
                key: "key", get: function () {
                    if ("string" == typeof this._token && this._token) return this._token;
                    if ("string" == typeof this.appId && this.appId) return this.appId;
                    throw new Ia("Cannot get illegal key")
                }
            }, {
                key: "sid", get: function () {
                    if ("string" == typeof this._sid && this._sid) return this._sid;
                    throw new Ia("Cannot get illegal sid")
                }, set: function (e) {
                    if (this.log("sid is set to %s", e), "string" != typeof e || !e) throw new Ia;
                    this._sid = e
                }
            }, {
                key: "rtmArea", get: function () {
                    if ("string" == typeof this._area && this._area) return this._area;
                    throw new Ia("Cannot get illegal area")
                }, set: function (e) {
                    this.log("area is set to %s", e), "string" == typeof e && e ? this._area = e : this.warn("set area failed")
                }
            }]), t
        }(tb()), ZC = !!Fc && R((function () {
            Fc.prototype.finally.call({
                then: function () {
                }
            }, (function () {
            }))
        }));
    if (P({target: "Promise", proto: !0, real: !0, forced: ZC}, {
        finally: function (e) {
            var t = jd(this, mc("Promise")), n = "function" == typeof e;
            return this.then(n ? function (n) {
                return lj(t, e()).then((function () {
                    return n
                }))
            } : e, n ? function (n) {
                return lj(t, e()).then((function () {
                    throw n
                }))
            } : e)
        }
    }), "function" == typeof Fc) {
        var Wr = mc("Promise").prototype.finally;
        Fc.prototype.finally !== Wr && Ta(Fc.prototype, "finally", Wr, {unsafe: !0})
    }
    var $C = function () {
        var e = K(x.mark((function e(t) {
            return x.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.t0 = Uint8Array, e.next = 3, crypto.subtle.digest("SHA-256", t);
                    case 3:
                        return e.t1 = e.sent, e.abrupt("return", new e.t0(e.t1));
                    case 5:
                    case"end":
                        return e.stop()
                }
            }), e)
        })));
        return function (t) {
            return e.apply(this, arguments)
        }
    }(), Xr = function (e) {
        return Array.from(e).map((function (e) {
            return e.toString(16).padStart(2, "0")
        })).join("")
    }, aD = function (e) {
        if ("string" != typeof e) throw new TypeError("Expected input to be a string");
        if (0 != e.length % 2) throw new RangeError("Expected string to be an even number of characters");
        for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length; n += 2) t[n / 2] = parseInt(e.substring(n, n + 2), 16);
        return t
    }, Yr = function (e) {
        return btoa(String.fromCharCode.apply(String, I(e))).replace(/={1,2}$/, "")
    }, Zr = function () {
        var e = K(x.mark((function e(t) {
            var n;
            return x.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.prev = 0, e.next = 3, crypto.subtle.digest("SHA-1", t);
                    case 3:
                        n = e.sent, e.next = 9;
                        break;
                    case 6:
                        e.prev = 6, e.t0 = e.catch(0), n = sha1.arrayBuffer(t);
                    case 9:
                        return e.abrupt("return", Yr(new Uint8Array(n)));
                    case 10:
                    case"end":
                        return e.stop()
                }
            }), e, null, [[0, 6]])
        })));
        return function (t) {
            return e.apply(this, arguments)
        }
    }(), $r = function (e, t, n, r) {
        r[t] = !0, n.has(e) ? n.get(e).add(t) : n.set(e, new Set([t]))
    }, bD = function (e) {
        switch (e) {
            case"89504E47":
                return "image/png";
            case"47494638":
                return "image/gif";
            case"25504446":
                return "application/pdf";
            case"FFD8FFDB":
            case"FFD8FFE0":
            case"FFD8FFE1":
                return "image/jpeg";
            case"504B0304":
                return "application/zip";
            default:
                return "application/octet-stream"
        }
    }, as = function (e) {
        function t(e, i, o, s) {
            X(this, t);
            var a = r.call(this, o, "ChunkDownloadManager");
            if (m(n(a), "abortController", new AbortController), m(n(a), "downloadedSize", 0), m(n(a), "successCount", 0), m(n(a), "timer", void 0), m(n(a), "chunks", []), m(n(a), "retUnit", void 0), m(n(a), "singleThread", !1), m(n(a), "initialized", !1), m(n(a), "ee", void 0), m(n(a), "chunkCount", void 0), m(n(a), "aborted", !1), m(n(a), "serverToIndices", new Map), m(n(a), "backupToIndices", new Map), m(n(a), "indexToBackupServers", []), m(n(a), "busyBackupServers", new Map), m(n(a), "downloadingChunks", new Set), m(n(a), "metaInfo", void 0), m(n(a), "transHandler", void 0), a.metaInfo = e, a.transHandler = i, a.ee = void 0 === s ? new ea : s, o = e.size, e = e.unit, 0 === o) throw new Ia("size cannot be 0");
            return void 0 !== i.cancelSignal && i.cancelSignal.addEventListener("abort", (function () {
                a.abortController.abort()
            }), {once: !0}), a.abortController.signal.addEventListener("abort", (function () {
                a.aborted = !0
            }), {once: !0}), a.chunkCount = Math.ceil(o / (32768 * e)), a
        }

        la(t, e);
        var r = ma(t);
        return Ha(t, [{
            key: "setInfoByResponse", value: function (e) {
                var t = this, n = e.serverList, r = e.backupList;
                if (e = e.unit, n.length < this.chunkCount && r.length < this.chunkCount) throw new Ia("servers is not enough");
                this.updateProgress(0), this.initialized = !0;
                var i = Array(this.chunkCount).fill(!1);
                if (n.forEach((function (e, n) {
                    return e.forEach((function (e) {
                        return $r(e, n, t.serverToIndices, i)
                    }))
                })), r.forEach((function (e, n) {
                    return e.forEach((function (e) {
                        return $r(e, n, t.backupToIndices, i)
                    }))
                })), i.some((function () {
                    return !1
                }))) throw new da("Not enough servers to download", mg);
                this.indexToBackupServers = r.map((function (e) {
                    return new Set(e)
                })), this.retUnit = e
            }
        }, {
            key: "downloadChunks", value: function () {
                this.aborted ? this.warn("downloadChunks after abort, ignored") : 1 === this.serverToIndices.size && 0 === Array.from(this.serverToIndices.keys())[0] ? this.serversDownload(this.backupToIndices) : 1 <= this.serverToIndices.size ? this.serversDownload(this.serverToIndices, !0) : this.ee.emit("error", new da("not enough servers to download", mg))
            }
        }, {
            key: "updateProgress", value: function (e) {
                var t = this, n = this.downloadedSize + e;
                this.downloadedSize > this.metaInfo.size ? (this.warn("Invalid download size, overflowed"), this.ee.emit("error", new Vc("Invalid download size", mg))) : (this.downloadedSize = n, void 0 !== this.timer && 0 !== e && (clearTimeout(this.timer), this.timer = void 0), void 0 === this.timer && this.successCount !== this.chunkCount && (this.timer = setTimeout((function () {
                    t.ee.emit("timedOut"), t.abortController.abort()
                }), 12e4)), this.initialized && 0 === e || void 0 === this.transHandler.onOperationProgress || this.transHandler.onOperationProgress({
                    totalSize: this.metaInfo.size,
                    currentSize: this.downloadedSize
                }))
            }
        }, {
            key: "getPayload", value: function () {
                for (var e = 0, t = 0, n = this.chunks; t < n.length; t++) e += n[t].byteLength;
                if (e !== this.metaInfo.size) throw new Ia("invalid chunks total size");
                e = new Uint8Array(e), n = t = 0;
                for (var r = this.chunks; n < r.length; n++) {
                    var i = r[n];
                    e.set(new Uint8Array(i), t), t += i.byteLength
                }
                return t = Array.from(e.subarray(0, 4)).map((function (e) {
                    return e.toString(16)
                })).join("").toUpperCase(), Xt(e.buffer, bD(t))
            }
        }, {
            key: "getDownloadUrl", value: function (e) {
                var t = this.metaInfo.useNewDomain ? "sd-rtn.com" : "agora.io";
                return "https://".concat(Dg(e).split(".").join("-"), ".edge.").concat(t, ":9601/api/v1/chuck/download")
            }
        }, {
            key: "serversDownload", value: function () {
                var e = K(x.mark((function e(t) {
                    var n, r = this, i = arguments;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = 1 < i.length && void 0 !== i[1] && i[1], e.next = 3, Promise.all(Array.from(t.entries()).map((function (e) {
                                    return e = ra(e, 2), r.postDownloadRequest(e[0], Array.from(e[1]), n).catch((function (e) {
                                        404 === e.statusCode ? (r.ee.emit("notExist"), r.abortController.abort()) : "AbortError" !== e.name && (Sa(e) ? r.singleThread ? (r.abortController.abort(), r.ee.emit("timedOut")) : (r.warn("%d download timed out after %d, retrying use single thread", e.index, r.singleThread ? 6e4 : 3e4), r.abortController.abort(), r.singleThread = !0, r.ee.emit("multiTimeOut")) : (r.ee.emit("error", e), r.abortController.abort()))
                                    }))
                                })));
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "postDownloadRequest", value: function () {
                var e = K(x.mark((function e(t, n, r) {
                    var i, o, s, a, u, c, l, f, h, p = this;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (h = function () {
                                    return (h = K(x.mark((function e(o) {
                                        var s, h, p, d, v, b, g, y, E;
                                        return x.wrap((function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (e.prev = 0, void 0 !== o || 0 !== t) {
                                                        e.next = 5;
                                                        break
                                                    }
                                                    throw new Ia("Invalid serverIp");
                                                case 5:
                                                    s = void 0 === o ? l.getDownloadUrl(t) : o;
                                                case 6:
                                                    return l.downloadingChunks.add(i), e.next = 9, c(s);
                                                case 9:
                                                    return h = e.sent, p = h.responseData, l.downloadingChunks.delete(i), e.abrupt("return", p);
                                                case 15:
                                                    if (e.prev = 15, e.t0 = e.catch(0), l.downloadingChunks.delete(i), n.unshift(i), l.metaInfo.useNewDomain = !1, "AbortError" !== e.t0.name) {
                                                        e.next = 22;
                                                        break
                                                    }
                                                    throw e.t0;
                                                case 22:
                                                    if (!Sa(e.t0)) {
                                                        e.next = 25;
                                                        break
                                                    }
                                                    throw e.t0.index = i, e.t0;
                                                case 25:
                                                    if (d = a, a += 1, !(2 > d)) {
                                                        e.next = 30;
                                                        break
                                                    }
                                                    return e.t0 instanceof Ia || l.warn("%o, %d download failed, retrying", e.t0, i), e.abrupt("return", f());
                                                case 30:
                                                    if (504 !== e.t0.statusCode) {
                                                        e.next = 34;
                                                        break
                                                    }
                                                    throw(v = new cb("download server timed out", {
                                                        originalError: e.t0,
                                                        serverCode: 504
                                                    })).index = i, v;
                                                case 34:
                                                    if (!r || 2 !== d || 0 === u[0]) {
                                                        e.next = 45;
                                                        break
                                                    }
                                                    return e.t0 instanceof Ia || l.warn("%d download failed, using backup: %d, %o", i, u[0], e.t0), e.next = 38, l.busyBackupServers.get(u[0]);
                                                case 38:
                                                    return b = f(l.getDownloadUrl(u[0])), l.busyBackupServers.set(u[0], b), e.next = 42, b;
                                                case 42:
                                                    return g = e.sent, l.busyBackupServers.delete(u[0]), e.abrupt("return", g);
                                                case 45:
                                                    if (!(r && 2 < d && void 0 !== u[1] && 0 !== u[1])) {
                                                        e.next = 56;
                                                        break
                                                    }
                                                    return l.warn("%d download failed, using backup 1: %d", i, u[1]), e.next = 49, l.busyBackupServers.get(u[1]);
                                                case 49:
                                                    return y = f(l.getDownloadUrl(u[1])), l.busyBackupServers.set(u[1], y), e.next = 53, y;
                                                case 53:
                                                    return E = e.sent, l.busyBackupServers.delete(u[1]), e.abrupt("return", E);
                                                case 56:
                                                    throw e.t0.index = i, e.t0;
                                                case 58:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }), e, null, [[0, 15]])
                                    })))).apply(this, arguments)
                                }, f = function (e) {
                                    return h.apply(this, arguments)
                                }, !this.aborted) {
                                    e.next = 4;
                                    break
                                }
                                throw new Ia("download already aborted");
                            case 4:
                                if (void 0 !== (i = n.shift())) {
                                    e.next = 8;
                                    break
                                }
                                return this.log("%s download finished", t), e.abrupt("return");
                            case 8:
                                if (!(this.singleThread && 0 < this.downloadingChunks.size)) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return");
                            case 10:
                                if (!this.downloadingChunks.has(i)) {
                                    e.next = 13;
                                    break
                                }
                                return this.log("%s already downloading, return", i), e.abrupt("return");
                            case 13:
                                if (void 0 === this.chunks[i]) {
                                    e.next = 19;
                                    break
                                }
                                return this.successCount === this.chunkCount && (this.log("chunks all download"), this.ee.emit("finished")), this.log("%s already downloaded, do next", i), e.next = 18, this.postDownloadRequest(t, n, r);
                            case 18:
                                return e.abrupt("return");
                            case 19:
                                return o = new FormData, s = {
                                    hash: fu(this.metaInfo.hashHexStr),
                                    unit: void 0 === this.retUnit ? this.metaInfo.unit : this.retUnit,
                                    instance: this.metaInfo.instance,
                                    loginOpt: this.metaInfo.loginOpt,
                                    ticket: this.metaInfo.ticket,
                                    index: i
                                }, o.append("parameter", JSON.stringify(s)), a = 0, u = Array.from(this.indexToBackupServers[i]), c = function (e) {
                                    return se(e, {
                                        body: o,
                                        signal: p.abortController.signal,
                                        timeout: p.singleThread ? 12e4 : 3e4
                                    }, {useBinaryResponse: !0})
                                }, l = this, e.next = 28, f().then((function (e) {
                                    return void 0 !== p.chunks[i] ? p.log("chunk %d download duplicated", i) : (p.chunks[i] = e, p.log("chunk %d downloaded", i), p.successCount += 1, p.updateProgress(p.chunks[i].byteLength)), p.successCount === p.chunkCount && (p.log("chunks all download"), p.ee.emit("finished")), p.singleThread ? (p.downloadChunks(), Promise.resolve()) : p.postDownloadRequest(t, n, r)
                                }));
                            case 28:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, n, r) {
                    return e.apply(this, arguments)
                }
            }()
        }]), t
    }(tb()), bs = function (e) {
        function t(e, i, o, s) {
            X(this, t);
            var a = r.call(this, o, "ChunkUploadManager");
            if (m(n(a), "chunkCount", 0), m(n(a), "chunks", []), m(n(a), "uploadedChunks", []), m(n(a), "totalFailures", 0), m(n(a), "timer", void 0), m(n(a), "initState", "uninitialized"), m(n(a), "ee", void 0), m(n(a), "unit", 0), m(n(a), "uploadedSize", 0), m(n(a), "singleThread", !1), m(n(a), "abortController", new AbortController), m(n(a), "servers", []), m(n(a), "aborted", !1), m(n(a), "metaInfo", void 0), m(n(a), "transHandler", void 0), a.metaInfo = e, a.transHandler = i, a.ee = void 0 === s ? new ea : s, 0 === e.file.length) throw new L("file not found or is empty", wf);
            return void 0 !== i.cancelSignal && i.cancelSignal.addEventListener("abort", (function () {
                a.abortController.abort()
            }), {once: !0}), a.abortController.signal.addEventListener("abort", (function () {
                a.aborted = !0
            }), {once: !0}), a
        }

        la(t, e);
        var r = ma(t);
        return Ha(t, [{
            key: "initChunks", value: function () {
                var e = K(x.mark((function e(t) {
                    var n, r, i, o, s, a = this;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if ("initialized" !== this.initState && "initializing" !== this.initState) {
                                    e.next = 2;
                                    break
                                }
                                throw new Ia("cannot re-initialize");
                            case 2:
                                for (this.initState = "initializing", this.unit = t, n = this.sliceFile(t, this.metaInfo.file), this.chunkCount = n.length, r = [], i = function (e, t) {
                                    var n = (e = ra(t[e], 2))[0], i = e[1];
                                    e = Zr(i).then((function (e) {
                                        a.chunks[n] = {payload: i, sha1: e, uploadedTo: void 0, index: n, processed: !1}
                                    })), r.push(e)
                                }, o = 0, s = Array.from(n.entries()); o < s.length; o++) i(o, s);
                                return e.next = 11, Promise.all(r);
                            case 11:
                                this.updateProgress(0), this.initState = "initialized", this.log("upload chunks initialized");
                            case 14:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "uploadToServers", value: function () {
                var e = this;
                if (!this.aborted) {
                    for (var t = this.chunks.filter((function (e) {
                        return !e.processed
                    })), n = function (n) {
                        var r = t[n], i = e.servers.filter((function (e) {
                            return !e.isUploading
                        })).sort((function (e, t) {
                            return e.successCount - t.successCount
                        })).sort((function (e, t) {
                            return e.failureCount - t.failureCount
                        }))[0];
                        if (void 0 === i || 1 < i.failureCount) return e.log("Upload server not available, waiting"), e.ee.emit("serverUsedUp"), Nm(1e3).then((function () {
                            e.totalFailures > 2 * e.chunkCount && e.ee.emit("error"), e.totalFailures += 1, void 0 !== i && (i.failureCount = 0), e.uploadToServers()
                        })).catch((function () {
                        })), "break";
                        r.processed = !0, i.isUploading = !0, e.log("uploading chunk %d to server %s", r.index, Dg(i.ip));
                        var o = e.getUploadUrl(i.ip);
                        return K(x.mark((function t() {
                            var n;
                            return x.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, e.postChunk(r.payload, o, r.index);
                                    case 3:
                                        n = e.chunks.findIndex((function (e) {
                                            return e === r
                                        })), r.uploadedTo = i.ip, e.chunks.splice(n, 1), e.uploadedChunks.push(r), i.successCount += 1, i.isUploading = !1, e.updateProgress(r.payload.byteLength), e.log("upload chunk %d successfully", r.index), t.next = 31;
                                        break;
                                    case 13:
                                        if (t.prev = 13, t.t0 = t.catch(0), i.isUploading = !1, r.processed = !1, 504 !== t.t0.statusCode && !Sa(t.t0)) {
                                            t.next = 27;
                                            break
                                        }
                                        if (e.singleThread) {
                                            t.next = 24;
                                            break
                                        }
                                        return e.warn("%d upload timed out after %d, retrying use single thread", r.index, e.singleThread ? 12e4 : 3e4), e.abortController.abort(), e.singleThread = !0, e.ee.emit("multiTimeOut"), t.abrupt("return");
                                    case 24:
                                        return e.ee.emit("timedOut"), e.abortController.abort(), t.abrupt("return");
                                    case 27:
                                        return e.metaInfo.useNewDomain = !1, i.failureCount += 1, t.next = 31, Nm(1e3);
                                    case 31:
                                        e.uploadedChunks.length === e.chunkCount ? (e.log("chunks uploaded"), e.ee.emit("finished")) : (e.singleThread || 1 === e.chunks.filter((function (e) {
                                            return !e.processed
                                        })).length) && e.uploadToServers();
                                    case 32:
                                    case"end":
                                        return t.stop()
                                }
                            }), t, null, [[0, 13]])
                        })))(), e.singleThread ? "break" : void 0
                    }, r = 0; r < t.length && "break" !== n(r); r++) ;
                    0 === t.length && this.uploadedChunks.length !== this.chunkCount && this.log("%d chunks left uploading", this.chunkCount - this.uploadedChunks.length)
                }
            }
        }, {
            key: "getUploadServerIPs", value: function () {
                var e = !0, t = [], n = I(this.uploadedChunks).sort((function (e, t) {
                    return e.index - t.index
                })), r = 0;
                for (n = Array.from(n.values()); r < n.length; r++) {
                    var i = n[r].uploadedTo;
                    if (void 0 === i) {
                        e = !1;
                        break
                    }
                    t.push(i)
                }
                if (!e) throw new Ia("some chunks not uploaded, cannot get upload server ips");
                return t
            }
        }, {
            key: "addServers", value: function (e) {
                var t = this;
                e.forEach((function (e) {
                    var n = t.servers.findIndex((function (t) {
                        return t.ip === e
                    }));
                    -1 !== n ? t.servers[n].failureCount = 0 : (t.log("server %s added", Dg(e)), t.servers.push({
                        successCount: 0,
                        isUploading: !1,
                        ip: e,
                        failureCount: 0
                    }))
                }))
            }
        }, {
            key: "updateProgress", value: function (e) {
                var t = this, n = void 0 !== e ? this.uploadedSize + e : this.metaInfo.file.length;
                n > this.metaInfo.file.length ? (this.warn("Invalid upload size, overflowed"), this.ee.emit("error", new Vc("Invalid upload size", lg))) : (this.uploadedSize = n, void 0 !== this.timer && 0 !== e && (clearTimeout(this.timer), this.timer = void 0), void 0 === this.timer && void 0 !== e && this.uploadedChunks.length !== this.chunkCount && (this.timer = setTimeout((function () {
                    t.ee.emit("timedOut"), t.abortController.abort()
                }), 12e4)), "initialized" === this.initState && 0 === e || void 0 === this.transHandler.onOperationProgress || this.transHandler.onOperationProgress({
                    totalSize: this.metaInfo.file.length,
                    currentSize: this.uploadedSize
                }))
            }
        }, {
            key: "sliceFile", value: function (e, t) {
                var n = 0, r = [], i = t.length;
                for (e *= 32768; n < i;) r.push(t.slice(n, n + e)), n += e;
                return this.log("chunks split into %d", r.length), r
            }
        }, {
            key: "postChunk", value: function () {
                var e = K(x.mark((function e(t, n, r) {
                    var i, o, s, a, u, c, l, f;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (!this.aborted) {
                                    e.next = 2;
                                    break
                                }
                                throw new Ia("upload already aborted");
                            case 2:
                                if (void 0 !== this.unit) {
                                    e.next = 4;
                                    break
                                }
                                throw new Ia("unit is undefined");
                            case 4:
                                return i = this.metaInfo, o = i.ticket, s = i.instance, a = i.loginOpt, u = i.hashStr, e.t0 = r, e.t1 = u, e.next = 9, Zr(t);
                            case 9:
                                return e.t2 = e.sent, e.t3 = this.unit, e.t4 = o, e.t5 = s, e.t6 = a, c = {
                                    index: e.t0,
                                    hash: e.t1,
                                    sha1: e.t2,
                                    unit: e.t3,
                                    ticket: e.t4,
                                    instance: e.t5,
                                    loginOpt: e.t6
                                }, (l = new FormData).append("parameter", JSON.stringify(c)), l.append("payload", new Blob([t])), e.next = 20, se(n, {
                                    headers: {Accept: "application/json"},
                                    body: l,
                                    timeout: this.singleThread ? 12e4 : 3e4,
                                    signal: this.abortController.signal
                                });
                            case 20:
                                if (f = e.sent, 201 === f.status) {
                                    e.next = 24;
                                    break
                                }
                                throw new da("uploading chunk ".concat(r, " failed"));
                            case 24:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, n, r) {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "getUploadUrl", value: function (e) {
                var t = this.metaInfo.useNewDomain ? "sd-rtn.com" : "agora.io";
                return "https://".concat(Dg(e).split(".").join("-"), ".edge.").concat(t, ":9601/api/v1/chuck/upload")
            }
        }]), t
    }(tb()), cs = function (e) {
        function t(e) {
            X(this, t);
            var i = r.call(this, e, "MediaTaskManager");
            return m(n(i), "isProcessing", !1), m(n(i), "authInfo", void 0), m(n(i), "taskFinishers", {}), m(n(i), "mediaTasks", new Map), m(n(i), "ongoingTask", void 0), i.on("connectionStateChanged", (function (e) {
                if (e === S.ConnectionState.ABORTED || e === S.ConnectionState.DISCONNECTED) {
                    void 0 !== i.ongoingTask && i.cancelTask(i.ongoingTask), e = 0;
                    for (var t = Array.from(i.mediaTasks.entries()); e < t.length; e++) {
                        var n = ra(t[e], 2)[1];
                        i.cancelTask(n)
                    }
                    i.mediaTasks.clear(), i.taskFinishers = {}
                } else e === S.ConnectionState.RECONNECTING ? void 0 !== i.ongoingTask && i.ongoingTask.manager.abortController.abort() : e === S.ConnectionState.CONNECTED && void 0 !== i.ongoingTask && i.ongoingTask.manager.ee.emit("reconnected")
            })), i
        }

        la(t, e);
        var r = ma(t);
        return Ha(t, [{
            key: "setAuthInfo", value: function (e) {
                this.authInfo = e
            }
        }, {
            key: "waitMediaTask", value: function (e) {
                var t = this;
                return new Promise((function (n, r) {
                    t.taskFinishers[e] = {resolve: n, reject: r}, t.isProcessing || t.processMediaTask()
                })).finally((function () {
                    void 0 !== t.ongoingTask && void 0 !== t.ongoingTask.manager.timer && clearTimeout(t.ongoingTask.manager.timer), delete t.taskFinishers[e], 0 !== t.mediaTasks.size ? t.processMediaTask() : t.isProcessing = !1
                }))
            }
        }, {
            key: "addUploadTask", value: function (e, n, r, i) {
                var o = e.file;
                if (e = e.hash, void 0 === this.authInfo) throw new Ia("session not found");
                if (this.mediaTasks.size >= t.MAX_PENDING_TASK_COUNT - 1) throw new ib("Upload media failed, exceed max pending jobs", vA);
                return i = new bs({
                    hashStr: Yr(e),
                    file: o,
                    ticket: this.authInfo.ticket,
                    instance: this.authInfo.instance.toString(),
                    loginOpt: this.authInfo.loginOpt.toString(),
                    useNewDomain: this.authInfo.useNewDomain
                }, i, this.logger), o = Ud(), this.mediaTasks.set(o, {
                    type: "UPLOAD",
                    manager: i,
                    hash: e,
                    setter: r,
                    fetcher: n,
                    taskId: o
                }), o
            }
        }, {
            key: "addDownloadTask", value: function (e, n, r) {
                var i = e.hashHexStr, o = e.size, s = e.unit;
                if (e = e.zone, void 0 === this.authInfo) throw new Ia("session not found");
                if (this.mediaTasks.size >= t.MAX_PENDING_TASK_COUNT - 1) throw new ib("Download media failed, exceed max pending jobs", zA);
                return r = new as({
                    hashHexStr: i,
                    ticket: this.authInfo.ticket,
                    useNewDomain: this.authInfo.useNewDomain,
                    instance: this.authInfo.instance.toString(),
                    loginOpt: this.authInfo.loginOpt.toString(),
                    size: o,
                    zone: e,
                    unit: s
                }, r, this.logger), i = Ud(), this.mediaTasks.set(i, {
                    type: "DOWNLOAD",
                    manager: r,
                    fetcher: n,
                    taskId: i
                }), i
            }
        }, {
            key: "doDownloadTaskImpl", value: function () {
                var e = K(x.mark((function e(t, n) {
                    var r, i, o, s, a, u, c, l, f = this, h = arguments;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return r = 2 < h.length && void 0 !== h[2] && h[2], o = i = t.manager, r && (i = new as(o.metaInfo, o.transHandler, this.logger, o.ee)), s = t.fetcher, e.next = 7, s();
                            case 7:
                                if (a = e.sent, u = a.serverList, c = a.backupList, l = a.unit, !r || l === o.retUnit) {
                                    e.next = 13;
                                    break
                                }
                                throw new da("download unit is different, reject to continue", mg);
                            case 13:
                                r && (t.manager = i, i.downloadedSize = o.downloadedSize, i.successCount = o.successCount, i.timer = o.timer, i.chunks = o.chunks, i.initialized = o.initialized, i.singleThread = o.singleThread, i.updateProgress(0)), i.ee.once("reconnected", (function () {
                                    i.ee.removeAllListeners(), f.doDownloadTaskImpl(t, n, !0).catch((function (e) {
                                        n.reject(e)
                                    }))
                                })), i.ee.once("multiTimeOut", (function () {
                                    i.ee.removeAllListeners(), f.doDownloadTaskImpl(t, n, !0).catch((function (e) {
                                        n.reject(e)
                                    }))
                                })), i.ee.once("error", (function (e) {
                                    i.ee.removeAllListeners(), n.reject(new da(["download file file, index %d", e.index], {
                                        code: mg,
                                        originalError: e
                                    }))
                                })), i.ee.once("notExist", (function () {
                                    i.abortController.abort(), i.ee.removeAllListeners(), n.reject(new da("download file not found", yA))
                                })), i.ee.once("timedOut", (function () {
                                    i.ee.removeAllListeners(), i.abortController.abort(), n.reject(new cb("download timed out", xA))
                                })), void 0 !== i.transHandler.cancelSignal && i.transHandler.cancelSignal.addEventListener("abort", (function () {
                                    n.reject(new gl("Downloading canceled", gr))
                                }), {once: !0}), i.ee.once("finished", (function () {
                                    n.resolve({type: "DOWNLOAD", payload: i.getPayload()})
                                })), i.setInfoByResponse({serverList: u, backupList: c, unit: l}), i.downloadChunks();
                            case 23:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "doDownloadTask", value: function (e, t) {
                var n = this, r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = e.taskId;
                return r || (this.mediaTasks.delete(i), this.ongoingTask = e), new Promise((function (i, o) {
                    n.doDownloadTaskImpl(e, t, r).then(i).catch(o)
                }))
            }
        }, {
            key: "doUploadTaskImpl", value: function () {
                var e = K(x.mark((function e(t, n) {
                    var r, i, o, s, a, u, c, l, f, h = this, p = arguments;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return r = 2 < p.length && void 0 !== p[2] && p[2], o = i = t.manager, r && (i = new bs(o.metaInfo, o.transHandler, this.logger, o.ee)), s = t.fetcher, a = new Pa, c = new Promise((function (e, c) {
                                    var l = s(), f = l.ret, h = l.err, p = l.timeout;
                                    l.fin.pipe(ob(a)).subscribe({
                                        next: function (e) {
                                            n.resolve({type: "UPLOAD", retUnit: e.unit, zone: e.zone})
                                        }, complete: function () {
                                            e({hasExist: !0}), a.next(), a.complete()
                                        }
                                    }), f.pipe(ob(a), bb(function () {
                                        var e = K(x.mark((function e(s) {
                                            var a, c;
                                            return x.wrap((function (e) {
                                                for (; ;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (a = s.servers, c = s.unit, r && o.unit !== c ? n.reject(new da("upload unit is different, reject to continue", lg)) : r && (t.manager = i, i.chunkCount = o.chunkCount, i.chunks = o.chunks, i.totalFailures = o.totalFailures, i.uploadedChunks = o.uploadedChunks, i.timer = o.timer, i.initState = o.initState, i.unit = o.unit, i.uploadedSize = o.uploadedSize, i.singleThread = o.singleThread, i.updateProgress(0)), i.addServers(a), "uninitialized" !== i.initState) {
                                                            e.next = 7;
                                                            break
                                                        }
                                                        return u = i.initChunks(c), e.next = 7, u;
                                                    case 7:
                                                    case"end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function (t) {
                                            return e.apply(this, arguments)
                                        }
                                    }())).subscribe({
                                        complete: function () {
                                            return e({hasExist: !1})
                                        }, error: c
                                    }), l = function (t) {
                                        "uninitialized" !== i.initState && u ? e(u.then((function () {
                                            return {hasExist: !1}
                                        }))) : c(t)
                                    }, h.pipe(ob(a)).subscribe({error: l}), p.pipe(ob(a)).subscribe({error: l})
                                })), e.next = 9, c;
                            case 9:
                                if (l = e.sent, !l.hasExist) {
                                    e.next = 15;
                                    break
                                }
                                return i.updateProgress(), this.log("file already exists, skipping upload"), e.abrupt("return");
                            case 15:
                                a.next(), a.complete(), this.log("chunks initialization promise resolved"), f = gb(i.ee, "serverUsedUp").pipe(Dt((function () {
                                    return i.chunkCount !== i.uploadedChunks.length
                                })), Gt(5e3, void 0, {leading: !1}), om((function () {
                                    return s().ret
                                }))).subscribe((function (e) {
                                    i.addServers(e.servers)
                                })), i.ee.once("reconnected", (function () {
                                    i.ee.removeAllListeners(), h.doUploadTask(t, n, !0).catch((function (e) {
                                        n.reject(e)
                                    }))
                                })), i.ee.once("multiTimeOut", (function () {
                                    i.ee.removeAllListeners(), h.doUploadTask(t, n, !0).catch((function (e) {
                                        n.reject(e)
                                    }))
                                })), i.ee.once("timedOut", (function () {
                                    f.unsubscribe(), i.ee.removeAllListeners(), i.abortController.abort(), n.reject(new cb("upload timed out", Kh))
                                })), i.ee.once("error", (function (e) {
                                    f.unsubscribe(), i.ee.removeAllListeners(), i.abortController.abort(), n.reject(e || new da("upload error", lg))
                                })), void 0 !== i.transHandler.cancelSignal && i.transHandler.cancelSignal.addEventListener("abort", (function () {
                                    n.reject(new gl("Uploading canceled", fr))
                                }), {once: !0}), i.ee.once("finished", K(x.mark((function e() {
                                    var r, o, s;
                                    return x.wrap((function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return f.unsubscribe(), e.next = 3, t.setter(i.unit, i.getUploadServerIPs());
                                            case 3:
                                                r = e.sent, o = r.zone, s = r.unit, i.ee.removeAllListeners(), n.resolve({
                                                    type: "UPLOAD",
                                                    retUnit: s,
                                                    zone: o
                                                });
                                            case 8:
                                            case"end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))), i.uploadToServers();
                            case 26:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "doUploadTask", value: function (e, t) {
                var n = this, r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = e.taskId;
                return r || (this.mediaTasks.delete(i), this.ongoingTask = e), new Promise((function (i, o) {
                    n.doUploadTaskImpl(e, t, r).then(i).catch(o)
                }))
            }
        }, {
            key: "processMediaTask", value: function () {
                var e = K(x.mark((function e() {
                    var t, n, r;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (0 !== this.mediaTasks.size) {
                                    e.next = 2;
                                    break
                                }
                                throw Error("no upload tasks");
                            case 2:
                                if (this.isProcessing = !0, t = this.mediaTasks.keys().next().value, void 0 !== (n = this.taskFinishers[t])) {
                                    e.next = 7;
                                    break
                                }
                                throw Error("top task not found");
                            case 7:
                                if (void 0 !== (r = this.mediaTasks.get(t))) {
                                    e.next = 10;
                                    break
                                }
                                throw new Ia("task invalid");
                            case 10:
                                if ("UPLOAD" !== r.type) {
                                    e.next = 15;
                                    break
                                }
                                return e.next = 13, this.doUploadTask(r, n).catch((function (e) {
                                    r.manager.ee.removeAllListeners(), n.reject(e)
                                }));
                            case 13:
                                e.next = 18;
                                break;
                            case 15:
                                if ("DOWNLOAD" !== r.type) {
                                    e.next = 18;
                                    break
                                }
                                return e.next = 18, this.doDownloadTask(r, n).catch((function (e) {
                                    r.manager.ee.removeAllListeners(), n.reject(e)
                                }));
                            case 18:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "cancelTask", value: function (e) {
                var t = "DOWNLOAD" === e.type ? gr : fr;
                e.manager.ee.removeAllListeners(), e.manager.abortController.abort(), void 0 !== this.taskFinishers[e.taskId] && this.taskFinishers[e.taskId].reject(new gl("User logged out or kicked off, media task canceled", t))
            }
        }]), t
    }(tb());
    m(cs, "MAX_PENDING_TASK_COUNT", 9), zo("of", (function () {
        for (var e = 0, t = arguments.length, n = new (Ke(this))(t); t > e;) n[e] = arguments[e++];
        return n
    }), zj);
    var ds = 1 / 0, cD = Math.max, hu = function (e, t, n) {
            var r = Object(e);
            if (!Ed(e)) {
                var i = Se(t);
                e = Ad(e), t = function (e) {
                    return i(r[e], e, r)
                }
            }
            return -1 < (t = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                if (null == n) n = 0; else {
                    var i = (n = n ? (n = fl(n)) === ds || n === -ds ? 17976931348623157e292 * (0 > n ? -1 : 1) : n == n ? n : 0 : 0 === n ? n : 0) % 1;
                    n = n == n ? i ? n - i : n : 0
                }
                return 0 > n && (n = cD(r + n, 0)), Vp(e, Se(t), n)
            }(e, t, n)) ? r[i ? e[t] : t] : void 0
        }, gu = function (e, t) {
            return e && e.length ? uk(e, void 0, "function" == typeof t ? t : void 0) : []
        }, es = function () {
            function e() {
                X(this, e), m(this, "size", 0), m(this, "fields", new Map)
            }

            return Ha(e, [{
                key: "define", value: function (e, t, n) {
                    if (this.size += n, 64 < this.size) throw new RangeError("the struct over 64 bits is not supported");
                    Lg(t = {
                        val: 0,
                        isNumber: "number" === t,
                        isBoolean: "boolean" === t,
                        oneof: "number" === t || "boolean" === t ? void 0 : t,
                        len: n
                    }), this.fields.set(e, t)
                }
            }, {
                key: "set", value: function (e, t) {
                    if (!(e = this.fields.get(e))) throw Error("field not found");
                    var n = e.oneof;
                    if (!U.isLong(t) && "number" != typeof t) if ("boolean" == typeof t) t = t ? 1 : 0; else {
                        if (void 0 === n) throw Error("invalid field type");
                        if (void 0 === (t = n[t])) throw Error("field type not found")
                    }
                    Lg(e, t), e.val = t
                }
            }, {
                key: "toNumber", value: function () {
                    for (var e = 0, t = 0, n = 0, r = Array.from(this.fields); n < r.length; n++) {
                        var i = ra(r[n], 2)[1], o = i.len;
                        void 0 !== (i = i.val) && (e += U.fromValue(i).shiftLeft(t).toNumber(), t += o)
                    }
                    return e
                }
            }, {
                key: "toLong", value: function () {
                    for (var e = U.fromNumber(0, !0), t = 0, n = 0, r = Array.from(this.fields); n < r.length; n++) {
                        var i = ra(r[n], 2)[1], o = i.len;
                        void 0 !== (i = i.val) && (e = U.fromValue(i).shiftLeft(t).add(e), t += o)
                    }
                    return e
                }
            }, {
                key: "assert", value: function (e, t) {
                    function n(e) {
                        if (!U.isLong(e) && "number" != typeof e) if ("boolean" == typeof e) e = e ? 1 : 0; else {
                            if (void 0 === i) throw Error("invalid field type");
                            if (void 0 === (e = i[e])) throw Error("field type not found")
                        }
                        return Lg(r, e), Kg(e, r.val)
                    }

                    var r = this.fields.get(e);
                    if (!r) throw Error("field not found");
                    var i = r.oneof;
                    if (!Array.isArray(t)) return n(t);
                    if (1 === t.length) return n(t[0]);
                    if (t.every((function (e) {
                        return "string" == typeof e
                    })) && void 0 !== i) return t.some((function (e) {
                        return n(e)
                    }));
                    throw Error("invalid valueTypes")
                }
            }, {
                key: "from", value: function (e) {
                    e = U.fromValue(e);
                    for (var t = 0, n = 0, r = Array.from(this.fields); n < r.length; n++) {
                        var i = ra(r[n], 2)[1], o = i.len, s = U.fromNumber(Math.pow(2, o) - 1, !0).shiftLeft(t);
                        Lg(i, s = e.and(s).shiftRightUnsigned(t)), i.val = s, t += o
                    }
                }
            }, {
                key: "typeOf", value: function (e) {
                    if (void 0 !== (e = this.fields.get(e))) {
                        var t = e.oneof;
                        if (e = e.val, void 0 !== t) {
                            var n = 0;
                            for (t = Object.entries(t); n < t.length; n++) {
                                var r = ra(t[n], 2), i = r[0];
                                if (Kg(e, r[1])) return i
                            }
                        }
                    }
                    throw new TypeError("can only get type of oneof type")
                }
            }]), e
        }(), fs = function (e) {
            function t(e) {
                X(this, t);
                var r = n.call(this);
                return r.define("Rejoin", "boolean", 1), r.define("Unused", "number", 31), r.define("Platform", "number", 8), r.define("Version", "number", 12), r.define("Subversion", "number", 12), r.set("Platform", 7), r.set("Version", 4), r.set("Subversion", 13), r.set("Rejoin", e), r
            }

            la(t, e);
            var n = ma(t);
            return t
        }(es), dD = ua(ua(ua(ua({}, {PeerTextMessage: 0, ChannelTextMessage: 1, VendorTextMessage: 2}), {
            PeerRawMessage: 3,
            ChannelRawMessage: 4,
            VendorRawMessage: 5
        }), {PeerImageMessage: 6, ChannelImageMessage: 7, VendorImageMessage: 8}), {
            PeerFileMessage: 15,
            ChannelFileMessage: 16,
            VendorFileMessage: 17
        }), gs = {CallInvite: 101, CallAccept: 102, CallReject: 103, CallCancel: 104}, eD = ua(ua({}, dD), gs),
        fD = {Uncompressed: 0, Zlib: 1}, $d = function (e) {
            function t(e) {
                X(this, t);
                var r = n.call(this);
                if (r.define("MessageType", eD, 8), r.define("BroadcastJumps", "number", 2), r.define("ToCache", "boolean", 1), r.define("FromCache", "boolean", 1), r.define("CompressionMethod", fD, 2), r.define("IterationNumber", "number", 4), r.define("BufferedMessage", "boolean", 1), r.define("ToArchive", "boolean", 1), r.define("FromArchive", "boolean", 1), "number" == typeof e || U.isLong(e)) r.from(e); else if (void 0 !== e) {
                    var i = 0;
                    for (e = Gg(e); i < e.length; i++) {
                        var o = ra(e[i], 2);
                        r.set(o[0], o[1])
                    }
                }
                return r
            }

            la(t, e);
            var n = ma(t);
            return Ha(t, [{
                key: "isTextMessage", value: function () {
                    return this.assert("MessageType", ["PeerTextMessage", "ChannelTextMessage", "VendorTextMessage"])
                }
            }, {
                key: "isRawMessage", value: function () {
                    return this.assert("MessageType", ["ChannelRawMessage", "PeerRawMessage", "VendorRawMessage"])
                }
            }, {
                key: "isRawPeerMessage", value: function () {
                    return this.assert("MessageType", "PeerRawMessage")
                }
            }, {
                key: "isRawChannelMessage", value: function () {
                    return this.assert("MessageType", "ChannelRawMessage")
                }
            }, {
                key: "isPeerTextMessage", value: function () {
                    return this.assert("MessageType", "PeerTextMessage")
                }
            }, {
                key: "isChannelTextMessage", value: function () {
                    return this.assert("MessageType", "ChannelTextMessage")
                }
            }, {
                key: "isInvitation", value: function (e) {
                    var t = this;
                    return void 0 !== e ? this.assert("MessageType", e) : xf(gs).some((function (e) {
                        return t.assert("MessageType", e)
                    }))
                }
            }, {
                key: "isFileMessage", value: function () {
                    return this.assert("MessageType", ["PeerFileMessage", "ChannelFileMessage", "VendorFileMessage"])
                }
            }, {
                key: "isImageMessage", value: function () {
                    return this.assert("MessageType", ["PeerImageMessage", "ChannelImageMessage", "VendorImageMessage"])
                }
            }, {
                key: "isPeerMessage", value: function () {
                    return this.assert("MessageType", ["PeerFileMessage", "PeerTextMessage", "PeerImageMessage", "PeerRawMessage"])
                }
            }, {
                key: "isZlibCompressed", value: function () {
                    return this.assert("CompressionMethod", "Zlib")
                }
            }, {
                key: "isFromCache", value: function () {
                    return this.assert("FromCache", !0)
                }
            }, {
                key: "isBufferedMessage", value: function () {
                    return this.assert("BufferedMessage", !0)
                }
            }, {
                key: "getInvitationType", value: function () {
                    if (!this.isInvitation()) throw new TypeError("cannot get InvitationType of a normal message type");
                    return this.typeOf("MessageType")
                }
            }]), t
        }(es), gD = function (e) {
            function t(e) {
                return X(this, t), m(n(e = r.call(this, e, "ChatManager")), "dialogueLru", new Qx(void 0, {
                    maxlen: 1e4,
                    ttl: 1e4
                })), e
            }

            la(t, e);
            var r = ma(t);
            return Ha(t, [{
                key: "getChatInfo", value: function (e) {
                    var t = this.dialogueLru.get(e);
                    if (this.dialogueLru.prune(), t) {
                        var n = t.dialogue, r = {dialogue: n, sequence: t = t.sequence.add(1)};
                        return this.dialogueLru.set(e, {dialogue: n, sequence: t}), r
                    }
                    return n = {dialogue: Bg(), sequence: U.fromNumber(1, !0)}, this.dialogueLru.set(e, n), n
                }
            }]), t
        }(tb()), v = {};
    "object" == ("undefined" == typeof module ? "undefined" : aa(module)) && (module.exports = v), v.parse = function (e, t) {
        var n, r = v.bin.readUshort, i = v.bin.readUint, o = {};
        for (n = (e = new Uint8Array(e)).length - 4; 101010256 != i(e, n);) n--;
        var s = r(e, n = n + 4 + 4);
        r(e, n += 2), i(e, n += 2), n = i(e, n += 4);
        for (var a = 0; a < s; a++) {
            i(e, n), n += 4, n += 4, n += 4, i(e, n += 4);
            var u = i(e, n += 4), c = i(e, n += 4), l = r(e, n += 4), f = r(e, n + 2), h = r(e, n + 4);
            n += 6;
            var p = i(e, n += 8);
            n += 4, n += l + f + h, v._readLocal(e, p, o, u, c, t)
        }
        return o
    }, v._readLocal = function (e, t, n, r, i, o) {
        var s = v.bin.readUshort, a = v.bin.readUint;
        a(e, t), s(e, t += 4), s(e, t += 2);
        var u = s(e, t += 2);
        a(e, t += 2), a(e, t += 4), a = s(e, t = t + 4 + 8);
        var c = s(e, t += 2);
        if (t += 2, s = v.bin.readUTF8(e, t, a), t = t + a + c, o) n[s] = {
            size: i,
            csize: r
        }; else if (e = new Uint8Array(e.buffer, t), 0 == u) n[s] = new Uint8Array(e.buffer.slice(t, t + r)); else {
            if (8 != u) throw"unknown compression method: " + u;
            t = new Uint8Array(i), v.inflateRaw(e, t), n[s] = t
        }
    }, v.inflateRaw = function (e, t) {
        return v.F.inflate(e, t)
    }, v.inflate = function (e, t) {
        return e[0], e[1], v.inflateRaw(new Uint8Array(e.buffer, e.byteOffset + 2, e.length - 2), t)
    }, v.deflate = function (e, t) {
        null == t && (t = {level: 6});
        var n = 0, r = new Uint8Array(50 + Math.floor(1.1 * e.length));
        return r[n] = 120, r[n + 1] = 156, n = v.F.deflateRaw(e, r, n + 2, t.level), e = v.adler(e, 0, e.length), r[n + 0] = e >>> 24 & 255, r[n + 1] = e >>> 16 & 255, r[n + 2] = e >>> 8 & 255, r[n + 3] = e >>> 0 & 255, new Uint8Array(r.buffer, 0, n + 4)
    }, v.deflateRaw = function (e, t) {
        null == t && (t = {level: 6});
        var n = new Uint8Array(50 + Math.floor(1.1 * e.length)), r = v.F.deflateRaw(e, n, r, t.level);
        return new Uint8Array(n.buffer, 0, r)
    }, v.encode = function (e, t) {
        null == t && (t = !1);
        var n, r = 0, i = v.bin.writeUint, o = v.bin.writeUshort, s = {};
        for (n in e) {
            var a = !v._noNeed(n) && !t, u = e[n], c = v.crc.crc(u, 0, u.length);
            s[n] = {cpr: a, usize: u.length, crc: c, file: a ? v.deflateRaw(u) : u}
        }
        for (n in s) r += s[n].file.length + 30 + 46 + 2 * v.bin.sizeUTF8(n);
        for (n in e = new Uint8Array(r + 22), t = 0, u = [], s) c = s[n], u.push(t), t = v._writeHeader(e, t, n, c, 0);
        for (n in r = 0, a = t, s) c = s[n], u.push(t), t = v._writeHeader(e, t, n, c, 1, u[r++]);
        return s = t - a, i(e, t, 101010256), o(e, t = t + 4 + 4, r), o(e, t += 2, r), i(e, t += 2, s), i(e, t + 4, a), e.buffer
    }, v._noNeed = function (e) {
        return e = e.split(".").pop().toLowerCase(), -1 != "png,jpg,jpeg,zip".indexOf(e)
    }, v._writeHeader = function (e, t, n, r, i, o) {
        var s = v.bin.writeUint, a = v.bin.writeUshort, u = r.file;
        return s(e, t, 0 == i ? 67324752 : 33639248), t += 4, 1 == i && (t += 2), a(e, t, 20), a(e, t += 2, 0), a(e, t += 2, r.cpr ? 8 : 0), s(e, t += 2, 0), s(e, t += 4, r.crc), s(e, t += 4, u.length), s(e, t += 4, r.usize), a(e, t += 4, v.bin.sizeUTF8(n)), a(e, t += 2, 0), t += 2, 1 == i && (s(e, t = t + 2 + 2 + 6, o), t += 4), t += n = v.bin.writeUTF8(e, t, n), 0 == i && (e.set(u, t), t += u.length), t
    }, v.crc = {
        table: function () {
            for (var e = new Uint32Array(256), t = 0; 256 > t; t++) {
                for (var n = t, r = 0; 8 > r; r++) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
                e[t] = n
            }
            return e
        }(), update: function (e, t, n, r) {
            for (var i = 0; i < r; i++) e = v.crc.table[255 & (e ^ t[n + i])] ^ e >>> 8;
            return e
        }, crc: function (e, t, n) {
            return 4294967295 ^ v.crc.update(4294967295, e, t, n)
        }
    }, v.adler = function (e, t, n) {
        var r = 1, i = 0, o = t;
        for (t += n; o < t;) {
            for (n = Math.min(o + 5552, t); o < n;) i += r += e[o++];
            r %= 65521, i %= 65521
        }
        return i << 16 | r
    }, v.bin = {
        readUshort: function (e, t) {
            return e[t] | e[t + 1] << 8
        }, writeUshort: function (e, t, n) {
            e[t] = 255 & n, e[t + 1] = n >> 8 & 255
        }, readUint: function (e, t) {
            return 16777216 * e[t + 3] + (e[t + 2] << 16 | e[t + 1] << 8 | e[t])
        }, writeUint: function (e, t, n) {
            e[t] = 255 & n, e[t + 1] = n >> 8 & 255, e[t + 2] = n >> 16 & 255, e[t + 3] = n >> 24 & 255
        }, readASCII: function (e, t, n) {
            for (var r = "", i = 0; i < n; i++) r += String.fromCharCode(e[t + i]);
            return r
        }, writeASCII: function (e, t, n) {
            for (var r = 0; r < n.length; r++) e[t + r] = n.charCodeAt(r)
        }, pad: function (e) {
            return 2 > e.length ? "0" + e : e
        }, readUTF8: function (e, t, n) {
            for (var r, i = "", o = 0; o < n; o++) i += "%" + v.bin.pad(e[t + o].toString(16));
            try {
                r = decodeURIComponent(i)
            } catch (r) {
                return v.bin.readASCII(e, t, n)
            }
            return r
        }, writeUTF8: function (e, t, n) {
            for (var r = n.length, i = 0, o = 0; o < r; o++) {
                var s = n.charCodeAt(o);
                if (0 == (4294967168 & s)) e[t + i] = s, i++; else if (0 == (4294965248 & s)) e[t + i] = 192 | s >> 6, e[t + i + 1] = 128 | s >> 0 & 63, i += 2; else if (0 == (4294901760 & s)) e[t + i] = 224 | s >> 12, e[t + i + 1] = 128 | s >> 6 & 63, e[t + i + 2] = 128 | s >> 0 & 63, i += 3; else {
                    if (0 != (4292870144 & s)) throw"e";
                    e[t + i] = 240 | s >> 18, e[t + i + 1] = 128 | s >> 12 & 63, e[t + i + 2] = 128 | s >> 6 & 63, e[t + i + 3] = 128 | s >> 0 & 63, i += 4
                }
            }
            return i
        }, sizeUTF8: function (e) {
            for (var t = e.length, n = 0, r = 0; r < t; r++) {
                var i = e.charCodeAt(r);
                if (0 == (4294967168 & i)) n++; else if (0 == (4294965248 & i)) n += 2; else if (0 == (4294901760 & i)) n += 3; else {
                    if (0 != (4292870144 & i)) throw"e";
                    n += 4
                }
            }
            return n
        }
    }, v.F = {}, v.F.deflateRaw = function (e, t, n, r) {
        var i = [[0, 0, 0, 0, 0], [4, 4, 8, 4, 0], [4, 5, 16, 8, 0], [4, 6, 16, 16, 0], [4, 10, 16, 32, 0], [8, 16, 32, 32, 0], [8, 16, 128, 128, 0], [8, 32, 128, 256, 0], [32, 128, 258, 1024, 1], [32, 258, 258, 4096, 1]][r],
            o = v.F.U, s = v.F._goodIndex;
        v.F._hash;
        var a = v.F._putsE, u = 0;
        n <<= 3;
        var c = 0, l = e.length;
        if (0 == r) {
            for (; u < l;) {
                var f = Math.min(65535, l - u);
                a(t, n, u + f == l ? 1 : 0), n = v.F._copyExact(e, u, f, t, n + 8), u += f
            }
            return n >>> 3
        }
        a = o.lits, r = o.strt;
        var h = o.prev, p = 0, d = 0, b = 0, g = 0, y = 0;
        for (2 < l && (r[y = v.F._hash(e, 0)] = 0), u = 0; u < l; u++) {
            if (f = y, u + 1 < l - 2) {
                y = v.F._hash(e, u + 1);
                var E = u + 1 & 32767;
                h[E] = r[y], r[y] = E
            }
            if (c <= u) {
                if ((14e3 < p || 26697 < d) && 100 < l - u && (c < u && (a[p] = u - c, p += 2, c = u), n = v.F._writeBlock(u == l - 1 || c == l ? 1 : 0, a, p, g, e, b, u - b, t, n), p = d = g = 0, b = u), E = 0, u < l - 2 && (E = v.F._bestMatch(e, u, h, f, Math.min(i[2], l - u), i[3])), 0 != E) {
                    f = E >>> 16, E &= 65535;
                    var m = s(f, o.of0);
                    o.lhst[257 + m]++;
                    var w = s(E, o.df0);
                    o.dhst[w]++, g += o.exb[m] + o.dxb[w], a[p] = f << 23 | u - c, a[p + 1] = E << 16 | m << 8 | w, p += 2, c = u + f
                } else o.lhst[e[u]]++;
                d++
            }
        }
        for (b == u && 0 != e.length || (c < u && (a[p] = u - c, p += 2), n = v.F._writeBlock(1, a, p, g, e, b, u - b, t, n)); 0 != (7 & n);) n++;
        return n >>> 3
    }, v.F._bestMatch = function (e, t, n, r, i, o) {
        var s = 32767 & t, a = n[s], u = s - a + 32768 & 32767;
        if (a == s || r != v.F._hash(e, t - u)) return 0;
        for (var c = r = 0, l = Math.min(32767, t); u <= l && 0 != --o && a != s;) {
            if ((0 == r || e[t + r] == e[t + r - u]) && (s = v.F._howLong(e, t, u)) > r) {
                if (c = u, (r = s) >= i) break;
                u + 2 < s && (s = u + 2);
                for (var f = 0, h = 0; h < s - 2; h++) {
                    var p = t - u + h + 32768 & 32767, d = p - n[p] + 32768 & 32767;
                    d > f && (f = d, a = p)
                }
            }
            u += (s = a) - (a = n[s]) + 32768 & 32767
        }
        return r << 16 | c
    }, v.F._howLong = function (e, t, n) {
        if (e[t] != e[t - n] || e[t + 1] != e[t + 1 - n] || e[t + 2] != e[t + 2 - n]) return 0;
        var r = t, i = Math.min(e.length, t + 258);
        for (t += 3; t < i && e[t] == e[t - n];) t++;
        return t - r
    }, v.F._hash = function (e, t) {
        return (e[t] << 8 | e[t + 1]) + (e[t + 2] << 4) & 65535
    }, v.saved = 0, v.F._writeBlock = function (e, t, n, r, i, o, s, a, u) {
        var c = v.F.U, l = v.F._putsF, f = v.F._putsE;
        c.lhst[256]++;
        var h = v.F.getTrees(), p = h[0], d = h[1], b = h[2], g = h[3], y = h[4], E = h[5], m = h[6];
        h = h[7];
        var w = 32 + (0 == (u + 3 & 7) ? 0 : 8 - (u + 3 & 7)) + (s << 3),
            _ = r + v.F.contSize(c.fltree, c.lhst) + v.F.contSize(c.fdtree, c.dhst);
        r = r + v.F.contSize(c.ltree, c.lhst) + v.F.contSize(c.dtree, c.dhst), r += 14 + 3 * E + v.F.contSize(c.itree, c.ihst) + (2 * c.ihst[16] + 3 * c.ihst[17] + 7 * c.ihst[18]);
        for (var O = 0; 286 > O; O++) c.lhst[O] = 0;
        for (O = 0; 30 > O; O++) c.dhst[O] = 0;
        for (O = 0; 19 > O; O++) c.ihst[O] = 0;
        if (w = w < _ && w < r ? 0 : _ < r ? 1 : 2, l(a, u, e), l(a, u + 1, w), u += 3, 0 == w) {
            for (; 0 != (7 & u);) u++;
            u = v.F._copyExact(i, o, s, a, u)
        } else {
            if (1 == w) var I = c.fltree, A = c.fdtree;
            if (2 == w) {
                for (v.F.makeCodes(c.ltree, p), v.F.revCodes(c.ltree, p), v.F.makeCodes(c.dtree, d), v.F.revCodes(c.dtree, d), v.F.makeCodes(c.itree, b), v.F.revCodes(c.itree, b), I = c.ltree, A = c.dtree, f(a, u, g - 257), f(a, u += 5, y - 1), f(a, u += 5, E - 4), u += 4, e = 0; e < E; e++) f(a, u + 3 * e, c.itree[1 + (c.ordr[e] << 1)]);
                u = v.F._codeTiny(m, c.itree, a, u + 3 * E), u = v.F._codeTiny(h, c.itree, a, u)
            }
            for (E = 0; E < n; E += 2) {
                for (m = (e = t[E]) >>> 23, e = o + (8388607 & e); o < e;) u = v.F._writeLit(i[o++], I, a, u);
                0 != m && (e = (p = t[E + 1]) >> 16, s = p >> 8 & 255, p &= 255, f(a, u = v.F._writeLit(257 + s, I, a, u), m - c.of0[s]), u += c.exb[s], l(a, u = v.F._writeLit(p, A, a, u), e - c.df0[p]), u += c.dxb[p], o += m)
            }
            u = v.F._writeLit(256, I, a, u)
        }
        return u
    }, v.F._copyExact = function (e, t, n, r, i) {
        var o = i >>> 3;
        return r[o] = n, r[o + 1] = n >>> 8, r[o + 2] = 255 - r[o], r[o + 3] = 255 - r[o + 1], o += 4, r.set(new Uint8Array(e.buffer, t, n), o), i + (n + 4 << 3)
    }, v.F.getTrees = function () {
        for (var e = v.F.U, t = v.F._hufTree(e.lhst, e.ltree, 15), n = v.F._hufTree(e.dhst, e.dtree, 15), r = [], i = v.F._lenCodes(e.ltree, r), o = [], s = v.F._lenCodes(e.dtree, o), a = 0; a < r.length; a += 2) e.ihst[r[a]]++;
        for (a = 0; a < o.length; a += 2) e.ihst[o[a]]++;
        a = v.F._hufTree(e.ihst, e.itree, 7);
        for (var u = 19; 4 < u && 0 == e.itree[1 + (e.ordr[u - 1] << 1)];) u--;
        return [t, n, a, i, s, u, r, o]
    }, v.F.getSecond = function (e) {
        for (var t = [], n = 0; n < e.length; n += 2) t.push(e[n + 1]);
        return t
    }, v.F.nonZero = function (e) {
        for (var t = "", n = 0; n < e.length; n += 2) 0 != e[n + 1] && (t += (n >> 1) + ",");
        return t
    }, v.F.contSize = function (e, t) {
        for (var n = 0, r = 0; r < t.length; r++) n += t[r] * e[1 + (r << 1)];
        return n
    }, v.F._codeTiny = function (e, t, n, r) {
        for (var i = 0; i < e.length; i += 2) {
            var o = e[i], s = e[i + 1];
            r = v.F._writeLit(o, t, n, r);
            var a = 16 == o ? 2 : 17 == o ? 3 : 7;
            15 < o && (v.F._putsE(n, r, s, a), r += a)
        }
        return r
    }, v.F._lenCodes = function (e, t) {
        for (var n = e.length; 2 != n && 0 == e[n - 1];) n -= 2;
        for (var r = 0; r < n; r += 2) {
            var i = e[r + 1], o = r + 3 < n ? e[r + 3] : -1, s = r + 5 < n ? e[r + 5] : -1, a = 0 == r ? -1 : e[r - 1];
            if (0 == i && o == i && s == i) {
                for (o = r + 5; o + 2 < n && e[o + 2] == i;) o += 2;
                11 > (i = Math.min(o + 1 - r >>> 1, 138)) ? t.push(17, i - 3) : t.push(18, i - 11), r += 2 * i - 2
            } else if (i == a && o == i && s == i) {
                for (o = r + 5; o + 2 < n && e[o + 2] == i;) o += 2;
                i = Math.min(o + 1 - r >>> 1, 6), t.push(16, i - 3), r += 2 * i - 2
            } else t.push(i, 0)
        }
        return n >>> 1
    }, v.F._hufTree = function (e, t, n) {
        var r = [], i = e.length, o = t.length, s = 0;
        for (s = 0; s < o; s += 2) t[s] = 0, t[s + 1] = 0;
        for (s = 0; s < i; s++) 0 != e[s] && r.push({lit: s, f: e[s]});
        if (e = r.length, i = r.slice(0), 0 == e) return 0;
        if (1 == e) return t[1 + ((n = r[0].lit) << 1)] = 1, t[1 + ((0 == n ? 1 : 0) << 1)] = 1;
        r.sort((function (e, t) {
            return e.f - t.f
        })), s = r[0], o = r[1];
        var a = 0, u = 1, c = 2;
        for (r[0] = {
            lit: -1,
            f: s.f + o.f,
            l: s,
            r: o,
            d: 0
        }; u != e - 1;) s = a != u && (c == e || r[a].f < r[c].f) ? r[a++] : r[c++], o = a != u && (c == e || r[a].f < r[c].f) ? r[a++] : r[c++], r[u++] = {
            lit: -1,
            f: s.f + o.f,
            l: s,
            r: o
        };
        for ((r = v.F.setDepth(r[u - 1], 0)) > n && (v.F.restrictDepth(i, n, r), r = n), s = 0; s < e; s++) t[1 + (i[s].lit << 1)] = i[s].d;
        return r
    }, v.F.setDepth = function (e, t) {
        return -1 != e.lit ? e.d = t : Math.max(v.F.setDepth(e.l, t + 1), v.F.setDepth(e.r, t + 1))
    }, v.F.restrictDepth = function (e, t, n) {
        var r = 0, i = 1 << n - t, o = 0;
        for (e.sort((function (e, t) {
            return t.d == e.d ? e.f - t.f : t.d - e.d
        })), r = 0; r < e.length && e[r].d > t; r++) {
            var s = e[r].d;
            e[r].d = t, o += i - (1 << n - s)
        }
        for (o >>>= n - t; 0 < o;) (s = e[r].d) < t ? (e[r].d++, o -= 1 << t - s - 1) : r++;
        for (; 0 <= r; r--) e[r].d == t && 0 > o && (e[r].d--, o++);
        0 != o && console.log("debt left")
    }, v.F._goodIndex = function (e, t) {
        var n = 0;
        return t[16 | n] <= e && (n |= 16), t[8 | n] <= e && (n |= 8), t[4 | n] <= e && (n |= 4), t[2 | n] <= e && (n |= 2), t[1 | n] <= e && (n |= 1), n
    }, v.F._writeLit = function (e, t, n, r) {
        return v.F._putsF(n, r, t[e << 1]), r + t[1 + (e << 1)]
    }, v.F.inflate = function (e, t) {
        var n = Uint8Array;
        if (3 == e[0] && 0 == e[1]) return t || new n(0);
        var r = v.F, i = r._bitsF, o = r._bitsE, s = r._decodeTiny, a = r.makeCodes, u = r.codes2map, c = r._get17,
            l = r.U, f = null == t;
        f && (t = new n(e.length >>> 2 << 3));
        for (var h, p, d, b, g = 0, y = 0, E = p = 0, m = 0; 0 == g;) if (g = i(e, m, 1), h = i(e, m + 1, 2), m += 3, 0 == h) 0 != (7 & m) && (m += 8 - (7 & m)), h = e[(m = 4 + (m >>> 3)) - 4] | e[m - 3] << 8, f && (t = v.F._check(t, E + h)), t.set(new n(e.buffer, e.byteOffset + m, h), E), m = m + h << 3, E += h; else {
            if (f && (t = v.F._check(t, E + 131072)), 1 == h && (d = l.flmap, b = l.fdmap, y = 511, p = 31), 2 == h) {
                for (p = o(e, m, 5) + 257, h = o(e, m + 5, 5) + 1, d = o(e, m + 10, 4) + 4, m += 14, b = 0; 38 > b; b += 2) l.itree[b] = 0, l.itree[b + 1] = 0;
                for (y = 1, b = 0; b < d; b++) {
                    var w = o(e, m + 3 * b, 3);
                    l.itree[1 + (l.ordr[b] << 1)] = w, w > y && (y = w)
                }
                m += 3 * d, a(l.itree, y), u(l.itree, y, l.imap), d = l.lmap, b = l.dmap, m = s(l.imap, (1 << y) - 1, p + h, e, m, l.ttree), y = (1 << (w = r._copyOut(l.ttree, 0, p, l.ltree))) - 1, p = (1 << (h = r._copyOut(l.ttree, p, h, l.dtree))) - 1, a(l.ltree, w), u(l.ltree, w, d), a(l.dtree, h), u(l.dtree, h, b)
            }
            for (; ;) if (m += 15 & (h = d[c(e, m) & y]), 0 == (w = h >>> 4) >>> 8) t[E++] = w; else {
                if (256 == w) break;
                h = E + w - 254, 264 < w && (h = E + ((w = l.ldef[w - 257]) >>> 3) + o(e, m, 7 & w), m += 7 & w), m += 15 & (w = b[c(e, m) & p]);
                var _ = ((w = l.ddef[w >>> 4]) >>> 4) + i(e, m, 15 & w);
                for (m += 15 & w, f && (t = v.F._check(t, E + 131072)); E < h;) t[E] = t[E++ - _], t[E] = t[E++ - _], t[E] = t[E++ - _], t[E] = t[E++ - _];
                E = h
            }
        }
        return t.length == E ? t : t.slice(0, E)
    }, v.F._check = function (e, t) {
        var n = e.length;
        return t <= n ? e : ((t = new Uint8Array(Math.max(n << 1, t))).set(e, 0), t)
    }, v.F._decodeTiny = function (e, t, n, r, i, o) {
        for (var s = v.F._bitsE, a = v.F._get17, u = 0; u < n;) {
            var c = e[a(r, i) & t];
            i += 15 & c;
            var l = c >>> 4;
            if (15 >= l) o[u] = l, u++; else {
                var f = c = 0;
                for (16 == l ? (f = 3 + s(r, i, 2), i += 2, c = o[u - 1]) : 17 == l ? (f = 3 + s(r, i, 3), i += 3) : 18 == l && (f = 11 + s(r, i, 7), i += 7), l = u + f; u < l;) o[u] = c, u++
            }
        }
        return i
    }, v.F._copyOut = function (e, t, n, r) {
        for (var i = 0, o = 0, s = r.length >>> 1; o < n;) {
            var a = e[o + t];
            r[o << 1] = 0, r[1 + (o << 1)] = a, a > i && (i = a), o++
        }
        for (; o < s;) r[o << 1] = 0, r[1 + (o << 1)] = 0, o++;
        return i
    }, v.F.makeCodes = function (e, t) {
        var n, r, i = v.F.U, o = e.length, s = i.bl_count;
        for (n = 0; n <= t; n++) s[n] = 0;
        for (n = 1; n < o; n += 2) s[e[n]]++;
        for (i = i.next_code, n = 0, s[0] = 0, r = 1; r <= t; r++) n = n + s[r - 1] << 1, i[r] = n;
        for (t = 0; t < o; t += 2) 0 != (s = e[t + 1]) && (e[t] = i[s], i[s]++)
    }, v.F.codes2map = function (e, t, n) {
        for (var r = e.length, i = v.F.U.rev15, o = 0; o < r; o += 2) if (0 != e[o + 1]) {
            var s = e[o + 1], a = o >> 1 << 4 | s, u = t - s;
            for (u = (s = e[o] << u) + (1 << u); s != u;) n[i[s] >>> 15 - t] = a, s++
        }
    }, v.F.revCodes = function (e, t) {
        for (var n = v.F.U.rev15, r = 15 - t, i = 0; i < e.length; i += 2) e[i] = n[e[i] << t - e[i + 1]] >>> r
    }, v.F._putsE = function (e, t, n) {
        n <<= 7 & t, e[t >>>= 3] |= n, e[t + 1] |= n >>> 8
    }, v.F._putsF = function (e, t, n) {
        n <<= 7 & t, e[t >>>= 3] |= n, e[t + 1] |= n >>> 8, e[t + 2] |= n >>> 16
    }, v.F._bitsE = function (e, t, n) {
        return (e[t >>> 3] | e[1 + (t >>> 3)] << 8) >>> (7 & t) & (1 << n) - 1
    }, v.F._bitsF = function (e, t, n) {
        return (e[t >>> 3] | e[1 + (t >>> 3)] << 8 | e[2 + (t >>> 3)] << 16) >>> (7 & t) & (1 << n) - 1
    }, v.F._get17 = function (e, t) {
        return (e[t >>> 3] | e[1 + (t >>> 3)] << 8 | e[2 + (t >>> 3)] << 16) >>> (7 & t)
    }, v.F._get25 = function (e, t) {
        return (e[t >>> 3] | e[1 + (t >>> 3)] << 8 | e[2 + (t >>> 3)] << 16 | e[3 + (t >>> 3)] << 24) >>> (7 & t)
    }, v.F.U = function () {
        var e = Uint16Array, t = Uint32Array;
        return {
            next_code: new e(16),
            bl_count: new e(16),
            ordr: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            of0: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
            exb: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
            ldef: new e(32),
            df0: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
            dxb: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
            ddef: new t(32),
            flmap: new e(512),
            fltree: [],
            fdmap: new e(32),
            fdtree: [],
            lmap: new e(32768),
            ltree: [],
            ttree: [],
            dmap: new e(32768),
            dtree: [],
            imap: new e(512),
            itree: [],
            rev15: new e(32768),
            lhst: new t(286),
            dhst: new t(30),
            ihst: new t(19),
            lits: new t(15e3),
            strt: new e(65536),
            prev: new e(32768)
        }
    }(), function () {
        function e(e, t, n) {
            for (; 0 != t--;) e.push(0, n)
        }

        for (var t = v.F.U, n = 0; 32768 > n; n++) {
            var r = n;
            r = (4278255360 & (r = (4042322160 & (r = (3435973836 & (r = (2863311530 & r) >>> 1 | (1431655765 & r) << 1)) >>> 2 | (858993459 & r) << 2)) >>> 4 | (252645135 & r) << 4)) >>> 8 | (16711935 & r) << 8, t.rev15[n] = (r >>> 16 | r << 16) >>> 17
        }
        for (n = 0; 32 > n; n++) t.ldef[n] = t.of0[n] << 3 | t.exb[n], t.ddef[n] = t.df0[n] << 4 | t.dxb[n];
        e(t.fltree, 144, 8), e(t.fltree, 112, 9), e(t.fltree, 24, 7), e(t.fltree, 8, 8), v.F.makeCodes(t.fltree, 9), v.F.codes2map(t.fltree, 9, t.flmap), v.F.revCodes(t.fltree, 9), e(t.fdtree, 32, 5), v.F.makeCodes(t.fdtree, 5), v.F.codes2map(t.fdtree, 5, t.fdmap), v.F.revCodes(t.fdtree, 5), e(t.itree, 19, 0), e(t.ltree, 286, 0), e(t.dtree, 30, 0), e(t.ttree, 320, 0)
    }();
    var ml = v.inflate, hs = v.deflate, is = function (e) {
        function t(e, i, o, s) {
            X(this, t);
            var a = r.call(this, s, "Session");
            return m(n(a), "chatManager", void 0), m(n(a), "joinedChannels", new Set), m(n(a), "msgDedupLru", new tc(void 0, {maxlen: 200})), m(n(a), "startTime", Date.now()), m(n(a), "seq", U.fromNumber(1, !0)), m(n(a), "userJoinOptions", new fs(!1)), m(n(a), "seqSentStatuses", [!1, !1]), m(n(a), "dialogueSequenceLru", new tc(void 0, {maxlen: 1e4})), m(n(a), "loggedOut", !1), m(n(a), "messageSentTimes", []), m(n(a), "curLoginSockets", [void 0, void 0]), m(n(a), "loginSocketSubs", [{
                channels: new Map,
                receivers: []
            }, {
                channels: new Map,
                receivers: []
            }]), m(n(a), "lastLoginSockets", [new pe(1), new pe(1)]), m(n(a), "dialPendingMsgSubjectMap", new Map), m(n(a), "context", void 0), m(n(a), "connection", void 0), m(n(a), "instanceId", void 0), m(n(a), "registerSocketsFailureListener", (function () {
                a.connection.once("socketsFailure", (function () {
                    a.log("socketsFailure, creating a new connection"), $c((function () {
                        return a.connection.removeAllListeners(), a.connection = new Vr(a.context, a.logger, !0), a.loginHandler(6e3, !0)
                    })).pipe(ne((function (e) {
                        return e.pipe(bd(Zd.getParameter("RECONNECTING_AP_INTERVAL")))
                    })), ob(a.connection.apClient.apFinish$)).subscribe((function () {
                        a.log("new connection connected")
                    }))
                })), 0 === a.connection.listenerCount("tokenExpired") && a.connection.on("tokenExpired", (function () {
                    a.emit("tokenExpired")
                }))
            })), a.context = e, a.connection = i, a.instanceId = o, a.chatManager = new gD(s), a.log("The instanceId is %s", a.instanceId.toString()), a
        }

        la(t, e);
        var r = ma(t);
        return Ha(t, [{
            key: "fetchFileUploadIndexGet", value: function (e) {
                var n = e.hash, r = e.size;
                if (0 === (e = this.getLoginSockets()).length) throw new M("Client is not logged in");
                var i = this.incGetSeq();
                return e.forEach((function (e) {
                    e.sendPacket("FileUploadIndexGet", {seq: i, hash: n, size: r})
                })), {
                    ret: Ca.apply(void 0, I(e.map((function (e) {
                        return e.fromReceived("FileUploadIndexRet").pipe(Z((function (e) {
                            return i.eq(e.seq)
                        })))
                    })))), fin: Ca.apply(void 0, I(e.map((function (e) {
                        return e.fromReceived("FileUploadIndexFin").pipe(Z((function (e) {
                            return i.eq(e.seq)
                        })))
                    })))), err: Xb.apply(void 0, I(e.map((function (e) {
                        return e.fromReceived("FileUploadIndexErr").pipe(Z((function (e) {
                            return i.eq(e.seq)
                        })), ba((function (e) {
                            throw new da(["The media message upload failure, code %d", e.code], lg)
                        })))
                    })))), timeout: t.genTimeoutError(Kh)
                }
            }
        }, {
            key: "requestFileUploadIndexSet", value: function (e) {
                var n = e.hash, r = e.unit, i = e.servers;
                if (0 === (e = this.getLoginSockets()).length) throw new M("Client is not logged in");
                var o = this.incGetSeq();
                return e.forEach((function (e) {
                    e.sendPacket("FileUploadIndexSet", {seq: o, servers: i, hash: n, unit: r})
                })), Ca.apply(void 0, [t.genTimeoutError(Kh)].concat(I(e.map((function (e) {
                    return e.fromReceived("FileUploadIndexErr").pipe(Z((function (e) {
                        return o.eq(e.seq)
                    })), ba((function (e) {
                        throw new da(["FileUploadIndexSet failure, code %d", e.code], lg)
                    })))
                }))), I(e.map((function (e) {
                    return e.fromReceived("FileUploadIndexFin").pipe(Z((function (e) {
                        return o.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestFileDownloadIndexGet", value: function (e) {
                var n = e.size, r = e.zone, i = e.unit, o = e.hash, s = this.getLoginSockets();
                if (0 === s.length) throw new M("Client is not logged in");
                var a = this.incGetSeq();
                return s.forEach((function (e) {
                    e.sendPacket("FileDownloadIndexGet", {seq: a, size: n, zone: r, unit: i, hash: o})
                })), e = Ca.apply(void 0, I(s.map((function (e) {
                    return e.fromReceived("FileDownloadIndexRet").pipe(Z((function (e) {
                        return a.eq(e.seq)
                    })))
                })))).pipe(ba((function (e) {
                    var t = e.backups, n = e.servers;
                    return e = ff(e, ["backups", "servers"]), ua({
                        backupList: t.map((function (e) {
                            return [e]
                        })), serverList: n.map((function (e) {
                            return [e]
                        }))
                    }, e)
                })), bd(500)), s = im(s.map((function (e) {
                    return e.fromReceived("FileDownloadIndexRet").pipe(Z((function (e) {
                        return a.eq(e.seq)
                    })))
                }))), Ca(e, s.pipe(ba((function (e) {
                    return e.reduce((function (e, t) {
                        var n = e.backupList, r = e.serverList;
                        e = t.backups;
                        var i = t.servers;
                        return t = ff(t, ["backups", "servers"]), ua({
                            backupList: e.map((function (e, t) {
                                return [e].concat(I(void 0 !== n && Array.isArray(n[t]) ? n[t] : []))
                            })), serverList: i.map((function (e, t) {
                                return [e].concat(I(void 0 !== n && Array.isArray(r[t]) ? r[t] : []))
                            }))
                        }, t)
                    }), {})
                }))), t.genTimeoutError(Kh))
            }
        }, {
            key: "loginHandler", value: function () {
                var e = this, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1e4,
                    n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                if (this.loggedOut && n) throw new M("Already logged out, request ignored");
                n && this.registerSocketsFailureListener(), this.connection.initConnection();
                var r = this.getSocketLoginObservables(this.connection.lastOpenSockets, this.seq), i = Date.now();
                return r.forEach((function (t, r) {
                    var o = e.loginSocketSubs[r].login;
                    void 0 !== o && o.unsubscribe(), e.loginSocketSubs[r].login = t.pipe(ca((function (t) {
                        e.curLoginSockets[r] = t;
                        var o = Date.now();
                        db("Link", {
                            ackedServerIp: t.address,
                            destServerIp: t.ip,
                            ec: 0,
                            sc: 0,
                            elapse: eb(e.startTime),
                            lts: U.fromNumber(o),
                            responseTime: i - o,
                            sid: Xa(e.instanceId),
                            userId: e.context.uid
                        }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), e.emit("userJoined", t.env), n && e.connection.apClient.apFinish$.next(void 0)
                    }))).subscribe(e.lastLoginSockets[r])
                })), this.initKeepAliveSender(), this.initKeepAliveReconnector(), this.initLoginReceiver(), Xb.apply(void 0, I(r).concat([gb(this.connection, "connectionInitFailure").pipe(ca((function (e) {
                    if (sa(e) || Sa(e)) throw e;
                    throw new da("Login failure", {code: Xq, originalError: e})
                })))])).pipe(Oa(1), hb(t), Ga((function (t) {
                    return t instanceof pb && e.warn("Client login timeout"), t && t.code === Jh && (e.connection.emit("tokenExpired"), e.connection.apClient.apFinish$.next(void 0)), e.clearSockets(0, n), Y(t)
                })), ca((function () {
                    n || e.registerSocketsFailureListener()
                })), wg((function () {
                    n || e.connection.apClient.apFinish$.next(void 0)
                })))
            }
        }, {
            key: "logoutHandler", value: function () {
                var e = K(x.mark((function e() {
                    var t, n, r, i = this;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return this.loggedOut = !0, this.connection.apClient.apFinish$.next(void 0), t = this.getLoginSockets(), n = t.map((function (e) {
                                    return e.sendPacket("UserQuit", {}), i.connection.waitClosing(e)
                                })), this.clearSockets(5e3), r = t.map((function (e) {
                                    return e.env
                                })), [0, 1].filter((function (e) {
                                    return !r.includes(e)
                                })).forEach((function (e) {
                                    i.connection.closeSocket(e, 0)
                                })), e.abrupt("return", Xb.apply(void 0, I(n)).toPromise());
                            case 9:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "requestChannelJoin", value: function () {
                var e = K(x.mark((function e(t, n) {
                    var r, i, o, s = this;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (0 !== this.getLoginSockets().length) {
                                    e.next = 2;
                                    break
                                }
                                throw new M("Client is not logged in. Cannot join the channel", Tq);
                            case 2:
                                return r = gb(this, "channelLeft").pipe(wb((function (e) {
                                    return e === t
                                })), Oa(1)), i = this.incGetSeq(), (o = this.lastLoginSockets.map((function (e) {
                                    return e.pipe(Cc((function (e, t) {
                                        0 !== t && s.incSeqIfNeeded(e.env);
                                        var r = 0 === t ? i : s.seq;
                                        return e.sendPacket("GroupEnter", {
                                            account: n,
                                            seq: r
                                        }), e.fromReceived("GroupReply").pipe(Z((function (e) {
                                            return r.eq(e.seq)
                                        })), ca((function (e) {
                                            if (0 !== (e = e.code)) throw new da(["Channel join failure. The response code is %d", e], Pq)
                                        })))
                                    })), ob(r), oe())
                                }))).forEach((function (e, n) {
                                    var r = function () {
                                        return s.loginSocketSubs[n].channels.delete(t.channelId)
                                    };
                                    s.loginSocketSubs[n].channels.set(t.channelId, e.subscribe({error: r, complete: r}))
                                })), e.next = 8, Xb.apply(void 0, I(o)).pipe(Oa(1), hb(1e4), Ga((function (e) {
                                    return e instanceof pb && s.warn("Channel join timeout"), Y(e)
                                }))).toPromise();
                            case 8:
                                this.joinedChannels.add(t);
                            case 9:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "requestChannelLeave", value: function (e, t) {
                this.emit("channelLeft", e), this.joinedChannels.delete(e), this.getLoginSockets().forEach((function (e) {
                    e.sendPacket("GroupLeave", {account: t})
                }))
            }
        }, {
            key: "requestChannelMemberList", value: function (e) {
                var n = this.getLoginSockets();
                if (0 === n.length) throw new M("Client is not logged in. Cannot get the channel members", aA);
                var r = this.incGetSeq();
                return n.forEach((function (t) {
                    t.sendPacket("GroupAllUsersList", {group: e, pageNumber: 0, pageSize: 200, seq: r})
                })), Ca.apply(void 0, [t.genTimeoutError(Nq)].concat(I(n.map((function (t) {
                    return t.fromReceived("GroupAllUsersResult").pipe(Z((function (t) {
                        var n = t.seq;
                        return t.group === e && r.eq(n)
                    })))
                })))))
            }
        }, {
            key: "requestPeersOnlineStatus", value: function (e) {
                var n = this.getLoginSockets();
                if (0 === n.length) throw new M("Client is not logged in");
                var r = this.incGetSeq();
                return n.forEach((function (t) {
                    t.sendPacket("UserStatusList", {users: e, seq: r})
                })), Ca.apply(void 0, [t.genTimeoutError(mA)].concat(I(n.map((function (e) {
                    return e.fromReceived("UserStatusResult").pipe(Z((function (e) {
                        return r.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestSetLocalUserAttributes", value: function (e, n) {
                var r = this, i = this.getLoginSockets();
                if (0 === i.length) throw new M("Client is not logged in");
                var o = this.incGetSeq();
                return i.forEach((function (t, i) {
                    void 0 !== n && i !== n || t.sendPacket("UserAttributeSet", {
                        account: r.context.uid,
                        attributeInfos: Object.entries(e).map((function (e) {
                            return {key: (e = ra(e, 2))[0], value: e[1]}
                        })),
                        seq: o
                    })
                })), Ca.apply(void 0, I(i.map((function (e) {
                    return e.fromReceived("UserAttributeErr").pipe(Z((function (e) {
                        return o.eq(e.seq)
                    })), ba((function (e) {
                        throw new da(["The user attributes set failure, code %d", e.code], Sb)
                    })))
                }))).concat([t.genTimeoutError(Tb)], I(i.map((function (e) {
                    return e.fromReceived("UserAttributeRsp").pipe(Z((function (e) {
                        return o.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestSetChannelAttributes", value: function (e, n, r) {
                var i = this.getLoginSockets();
                if (0 === i.length) throw new M("Client is not logged in");
                var o = this.incGetSeq();
                return i.forEach((function (t) {
                    t.sendPacket("GroupAttributeSet", {
                        broadcast: r,
                        group: e,
                        attributeInfos: Object.entries(n).map((function (e) {
                            return {key: (e = ra(e, 2))[0], value: e[1]}
                        })),
                        seq: o
                    })
                })), Ca.apply(void 0, I(i.map((function (e) {
                    return e.fromReceived("GroupAttributeErr").pipe(Z((function (e) {
                        return o.eq(e.seq)
                    })), ba((function (e) {
                        throw new da(["The group attributes set failure, code %d", e.code], Sb)
                    })))
                }))).concat([t.genTimeoutError(Tb)], I(i.map((function (e) {
                    return e.fromReceived("GroupAttributeRsp").pipe(Z((function (e) {
                        return o.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestAddOrUpdateLocalUserAttributes", value: function (e) {
                var n = this, r = this.getLoginSockets();
                if (0 === r.length) throw new M("Client is not logged in");
                var i = this.incGetSeq();
                return r.forEach((function (t) {
                    t.sendPacket("UserAttributeMod", {
                        account: n.context.uid,
                        attributeInfos: Object.entries(e).map((function (e) {
                            return {key: (e = ra(e, 2))[0], value: e[1]}
                        })),
                        seq: i
                    })
                })), Ca.apply(void 0, I(r.map((function (e) {
                    return e.fromReceived("UserAttributeErr").pipe(Z((function (e) {
                        return i.eq(e.seq)
                    })), ba((function (e) {
                        throw new da(["The user attributes add or update failure, code %d", e.code], Sb)
                    })))
                }))).concat([t.genTimeoutError(Tb)], I(r.map((function (e) {
                    return e.fromReceived("UserAttributeRsp").pipe(Z((function (e) {
                        return i.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestAddOrUpdateChannelAttributes", value: function (e, n, r) {
                var i = this.getLoginSockets();
                if (0 === i.length) throw new M("Client is not logged in");
                var o = this.incGetSeq();
                return i.forEach((function (t) {
                    t.sendPacket("GroupAttributeMod", {
                        broadcast: r,
                        group: e,
                        attributeInfos: Object.entries(n).map((function (e) {
                            return {key: (e = ra(e, 2))[0], value: e[1]}
                        })),
                        seq: o
                    })
                })), Ca.apply(void 0, I(i.map((function (e) {
                    return e.fromReceived("GroupAttributeErr").pipe(Z((function (e) {
                        return o.eq(e.seq)
                    })), ba((function (e) {
                        throw new da(["The group attributes add or update failure, code %d", e.code], Sb)
                    })))
                }))).concat([t.genTimeoutError(Tb)], I(i.map((function (e) {
                    return e.fromReceived("GroupAttributeRsp").pipe(Z((function (e) {
                        return o.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestDeleteLocalUserAttributesByKeys", value: function (e) {
                var n = this, r = this.getLoginSockets();
                if (0 === r.length) throw new M("Client is not logged in");
                var i = this.incGetSeq();
                return r.forEach((function (t) {
                    t.sendPacket("UserAttributeDel", {account: n.context.uid, attributes: e, seq: i})
                })), Ca.apply(void 0, I(r.map((function (e) {
                    return e.fromReceived("UserAttributeErr").pipe(Z((function (e) {
                        return i.eq(e.seq)
                    })), ba((function (e) {
                        throw new da(["The user attributes delete failure, code %d", e.code], Sb)
                    })))
                }))).concat([t.genTimeoutError(Tb)], I(r.map((function (e) {
                    return e.fromReceived("UserAttributeRsp").pipe(Z((function (e) {
                        return i.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestDeleteChannelAttributesByKeys", value: function (e, n, r) {
                var i = this.getLoginSockets();
                if (0 === i.length) throw new M("Client is not logged in");
                var o = this.incGetSeq();
                return i.forEach((function (t) {
                    t.sendPacket("GroupAttributeDel", {group: e, broadcast: r, attributes: n, seq: o})
                })), Ca.apply(void 0, I(i.map((function (e) {
                    return e.fromReceived("GroupAttributeErr").pipe(Z((function (e) {
                        return o.eq(e.seq)
                    })), ba((function (e) {
                        throw new da(["The channel attributes delete failure, code %d", e.code], Sb)
                    })))
                }))).concat([t.genTimeoutError(Tb)], I(i.map((function (e) {
                    return e.fromReceived("GroupAttributeRsp").pipe(Z((function (e) {
                        return o.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestClearLocalUserAttributes", value: function () {
                var e = this, n = this.getLoginSockets();
                if (0 === n.length) throw new M("Client is not logged in");
                var r = this.incGetSeq();
                return n.forEach((function (t) {
                    t.sendPacket("UserAttributeSet", {account: e.context.uid, seq: r, attributeInfos: []})
                })), Ca.apply(void 0, I(n.map((function (e) {
                    return e.fromReceived("UserAttributeErr").pipe(Z((function (e) {
                        return r.eq(e.seq)
                    })), ba((function (e) {
                        throw new da(["The user attributes clear failure, code %d", e.code], Sb)
                    })))
                }))).concat([t.genTimeoutError(Tb)], I(n.map((function (e) {
                    return e.fromReceived("UserAttributeRsp").pipe(Z((function (e) {
                        return r.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestClearChannelAttributes", value: function (e, n) {
                var r = this.getLoginSockets();
                if (0 === r.length) throw new M("Client is not logged in");
                var i = this.incGetSeq();
                return r.forEach((function (t) {
                    t.sendPacket("GroupAttributeSet", {group: e, seq: i, attributeInfos: [], broadcast: n})
                })), Ca.apply(void 0, I(r.map((function (e) {
                    return e.fromReceived("GroupAttributeErr").pipe(Z((function (e) {
                        return i.eq(e.seq)
                    })), ba((function (e) {
                        throw new da(["The channel attributes clear failure, code %d", e.code], Sb)
                    })))
                }))).concat([t.genTimeoutError(Tb)], I(r.map((function (e) {
                    return e.fromReceived("GroupAttributeRsp").pipe(Z((function (e) {
                        return i.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestGetUserAttributesByKeys", value: function (e, n) {
                var r = this.getLoginSockets();
                if (0 === r.length) throw new M("Client is not logged in");
                var i = this.incGetSeq();
                return r.forEach((function (t) {
                    t.sendPacket("UserAttributeGet", {account: e, seq: i, attributes: n})
                })), Ca.apply(void 0, [t.genTimeoutError(Tb)].concat(I(r.map((function (e) {
                    return e.fromReceived("UserAttributeErr").pipe(Z((function (e) {
                        return i.eq(e.seq)
                    })), ba((function (e) {
                        if (10008 === (e = e.code)) throw new da("The user requested is not online", Jq);
                        throw new Vc(["User attribute operation unknown error code: %d", e], Sb)
                    })))
                }))), I(r.map((function (e) {
                    return e.fromReceived("UserAttributeRet").pipe(Z((function (e) {
                        return i.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestGetChannelAttributesByKeys", value: function (e, n) {
                var r = this.getLoginSockets();
                if (0 === r.length) throw new M("Client is not logged in");
                var i = this.incGetSeq();
                return r.forEach((function (t) {
                    t.sendPacket("GroupAttributeGet", {group: e, seq: i, attributes: n})
                })), Ca.apply(void 0, [t.genTimeoutError(Tb)].concat(I(r.map((function (e) {
                    return e.fromReceived("GroupAttributeErr").pipe(Z((function (e) {
                        return i.eq(e.seq)
                    })), ba((function (e) {
                        throw new da(["The channel attributes get failure, code %d", e.code], Sb)
                    })))
                }))), I(r.map((function (e) {
                    return e.fromReceived("GroupAttributeRet").pipe(Z((function (e) {
                        return i.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestGetUserAttributeKeys", value: function (e) {
                var n = this.getLoginSockets();
                if (0 === n.length) throw new M("Client is not logged in");
                var r = this.incGetSeq();
                return n.forEach((function (t) {
                    t.sendPacket("UserAttributeKeysGet", {account: e, seq: r})
                })), Ca.apply(void 0, [t.genTimeoutError(Tb)].concat(I(n.map((function (e) {
                    return e.fromReceived("UserAttributeErr").pipe(Z((function (e) {
                        return r.eq(e.seq)
                    })), ba((function (e) {
                        if (10008 === (e = e.code)) throw new da("The user requested is not online", Jq);
                        throw new Vc(["User attribute operation unknown error code: %d", e], Sb)
                    })))
                }))), I(n.map((function (e) {
                    return e.fromReceived("UserAttributeKeysRet").pipe(Z((function (e) {
                        return r.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestGetChannelAttributesKeys", value: function (e) {
                var n = this.getLoginSockets();
                if (0 === n.length) throw new M("Client is not logged in");
                var r = this.incGetSeq();
                return n.forEach((function (t) {
                    t.sendPacket("GroupAttributeKeysGet", {group: e, seq: r})
                })), Ca.apply(void 0, [t.genTimeoutError(Tb)].concat(I(n.map((function (e) {
                    return e.fromReceived("GroupAttributeErr").pipe(Z((function (e) {
                        return r.eq(e.seq)
                    })), ba((function (e) {
                        throw new Vc(["Channel attribute operation unknown error code: %d", e.code], Sb)
                    })))
                }))), I(n.map((function (e) {
                    return e.fromReceived("GroupAttributeKeysRet").pipe(Z((function (e) {
                        return r.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestGetChannelMemberCount", value: function (e) {
                var n = this.getLoginSockets();
                if (0 === n.length) throw new M("Client is not logged in");
                var r = this.incGetSeq();
                return n.forEach((function (t) {
                    t.sendPacket("GroupStatusList", {groups: e, seq: r})
                })), Ca.apply(void 0, [t.genTimeoutError(Nq)].concat(I(n.map((function (e) {
                    return e.fromReceived("GroupStatusResult").pipe(Z((function (e) {
                        return r.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestSubscribePeersOnlineStatus", value: function (e) {
                var n = this.getLoginSockets();
                if (0 === n.length) throw new M("Client is not logged in");
                var r = this.incGetSeq();
                return n.forEach((function (t) {
                    t.sendPacket("SubscribeUserStatus", {seq: r, users: e})
                })), Ca.apply(void 0, [t.genTimeoutError(tA)].concat(I(n.map((function (e) {
                    return e.fromReceived("SubscribeResponse").pipe(Z((function (e) {
                        return r.eq(e.seq)
                    })))
                })))))
            }
        }, {
            key: "requestUnsubscribePeersOnlineStatus", value: function (e) {
                var t = this.getLoginSockets();
                if (0 === t.length) throw new M("Client is not logged in");
                var n = this.incGetSeq();
                t.forEach((function (t) {
                    t.sendPacket("UnsubscribeUserStatus", {seq: n, users: e})
                }))
            }
        }, {
            key: "sendInvitationMessage", value: function () {
                var e = K(x.mark((function e(t) {
                    var n, r, i, o, s, a, u, c, l, f, h, p, d = this;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.peerId, r = t.callId, i = t.extra, o = t.isAcceptAck, s = t.channelId, a = t.type, u = {callId: r}, void 0 === o) {
                                    e.next = 6;
                                    break
                                }
                                if ("CallAccept" === a) {
                                    e.next = 5;
                                    break
                                }
                                throw Error("invalid invitation type");
                            case 5:
                                u.type = o ? "ack" : "request";
                            case 6:
                                return u.channel = s, ("CallInvite" === a || "CallCancel" === a || "CallReject" === a || "CallAccept" === a && !1 === o) && void 0 !== i && (u.extra = i), c = Bg(), this.log("The sent invitation body is %o", u), l = function (e) {
                                    return {
                                        MiscMap: {},
                                        sequence: U.fromNumber(1),
                                        dialogue: c,
                                        instance: d.instanceId,
                                        dst: n,
                                        ms: U.fromNumber(Date.now(), !0),
                                        options: new $d({IterationNumber: e, MessageType: a}).toLong(),
                                        payload: (new TextEncoder).encode(JSON.stringify(u)),
                                        src: d.context.uid
                                    }
                                }, e.next = 14, Kb(this.sendMessageToRetry(l, !0)).pipe(hb(1e4), Ga((function (e) {
                                    return e instanceof pb && d.warn("Send invitation timeout"), Y(e)
                                }))).toPromise();
                            case 14:
                                return f = e.sent, h = f.code, p = f.retryTimes, e.abrupt("return", {
                                    hasPeerReceived: 0 === h,
                                    hasReSent: 0 !== p
                                });
                            case 18:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "sendMediaMessage", value: function () {
                var e = K(x.mark((function e(t, n, r, i, o, s) {
                    var a, u, c, l, f, h, p, d, v, b, g, y, E, w, _, O, I, A, R, k, T, N, S, C, P, j, M, D, q, F = this;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (u = n.width, c = void 0 === u ? 0 : u, l = n.height, f = void 0 === l ? 0 : l, h = n.fileName, p = void 0 === h ? "" : h, d = n.description, v = void 0 === d ? "" : d, b = n.thumbnail, g = void 0 === b ? new Blob : b, y = n.thumbnailHeight, E = void 0 === y ? 0 : y, w = n.thumbnailWidth, _ = void 0 === w ? 0 : w, O = n.size, I = void 0 === O ? 0 : O, A = n.mediaId, R = o.enableOfflineMessaging, k = o.enableHistoricalMessaging, za(r)) {
                                    e.next = 4;
                                    break
                                }
                                throw new L("The send message arguments are not valid", i ? Zk : hg);
                            case 4:
                                if (!(32768 < new Blob([p, g, v]).size)) {
                                    e.next = 6;
                                    break
                                }
                                throw new L("The size of message overflowed ", i ? ue : Gh);
                            case 6:
                                return T = this.chatManager.getChatInfo(r), N = T.dialogue, S = T.sequence, C = this.instanceId, this.log('A%s media message is sending to %s: "'.concat(C, "-").concat(N, "#").concat(S, '"'), i ? " peer" : " channel", oa(r)), m(a = {}, "media_description", v), m(a, "media_width", c), m(a, "media_height", f), m(a, "media_thumbnailwidth", _), m(a, "media_thumbnailheight", E), m(a, "media_size", I), m(a, "media_id", A), m(a, "media_filename", p), P = uc(a, (function (e) {
                                    return (new TextEncoder).encode(e.toString())
                                })), e.t0 = Uint8Array, e.next = 14, Ii(g);
                            case 14:
                                return e.t1 = e.sent, P.media_thumbnail = new e.t0(e.t1), j = i && "IMAGE" === t ? "PeerImageMessage" : i && "FILE" === t ? "PeerFileMessage" : i || "IMAGE" !== t ? "ChannelFileMessage" : "ChannelImageMessage", M = function (e) {
                                    return {
                                        MiscMap: P,
                                        sequence: S,
                                        dialogue: N,
                                        instance: C,
                                        dst: r,
                                        ms: U.fromNumber(Date.now(), !0),
                                        options: new $d({
                                            IterationNumber: e,
                                            CompressionMethod: "Uncompressed",
                                            MessageType: j,
                                            ToCache: R,
                                            ToArchive: k
                                        }).toLong(),
                                        payload: new Uint8Array,
                                        src: F.context.uid
                                    }
                                }, e.next = 20, Kb(this.sendMessageToRetry(M, !0)).pipe(hb(void 0 === s ? 1e4 : s), Ga((function (e) {
                                    return e instanceof pb && F.warn("Send message timeout"), Y(e)
                                }))).toPromise();
                            case 20:
                                if (D = e.sent, 2 !== (q = D.code)) {
                                    e.next = 24;
                                    break
                                }
                                throw new da("The peer does not support this type of message", lA);
                            case 24:
                                return e.abrupt("return", {hasPeerReceived: 0 === q});
                            case 25:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, n, r, i, o, s) {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "sendRawMessage", value: function () {
                var e = K(x.mark((function e(t, n, r, i, o, s) {
                    var a, u, c, l, f, h, p, d, v, b, g = this;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (a = o.enableOfflineMessaging, u = o.enableHistoricalMessaging, za(r) && t instanceof Uint8Array && "string" == typeof n) {
                                    e.next = 3;
                                    break
                                }
                                throw new L("The send message arguments are not valid", i ? Zk : hg);
                            case 3:
                                if (!(32768 < t.byteLength + new Blob([n]).size)) {
                                    e.next = 5;
                                    break
                                }
                                throw new ib("The message size is over the 32KB limit", i ? ue : Gh);
                            case 5:
                                return c = !Zd.getParameter("DISABLE_MESSAGE_COMPRESSION") && 128 <= t.byteLength, l = this.chatManager.getChatInfo(r), f = l.dialogue, h = l.sequence, p = this.instanceId, this.log('A%s %s raw message is sending to %s: "'.concat(p, "-").concat(f, "#").concat(h, '"'), c ? " compressed" : "", i ? "peer" : "channel", oa(r)), d = function (e) {
                                    return {
                                        MiscMap: {description: (new TextEncoder).encode(n)},
                                        sequence: h,
                                        dialogue: f,
                                        instance: p,
                                        dst: r,
                                        ms: U.fromNumber(Date.now(), !0),
                                        options: new $d({
                                            IterationNumber: e,
                                            CompressionMethod: c ? "Zlib" : "Uncompressed",
                                            MessageType: i ? "PeerRawMessage" : "ChannelRawMessage",
                                            ToCache: a,
                                            ToArchive: u
                                        }).toLong(),
                                        payload: c ? hs(t) : t,
                                        src: g.context.uid
                                    }
                                }, e.next = 12, Kb(this.sendMessageToRetry(d, !0)).pipe(hb(void 0 === s ? 1e4 : s), Ga((function (e) {
                                    return e instanceof pb && g.warn("Send message timeout"), Y(e)
                                }))).toPromise();
                            case 12:
                                return v = e.sent, b = v.code, e.abrupt("return", {hasPeerReceived: 0 === b});
                            case 15:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, n, r, i, o, s) {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "sendTextMessage", value: function () {
                var e = K(x.mark((function e(t, n, r, i, o) {
                    var s, a, u, c, l, f, h, p, d, v, b, g = this;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (s = i.enableOfflineMessaging, a = i.enableHistoricalMessaging, za(n)) {
                                    e.next = 3;
                                    break
                                }
                                throw new L("The send message arguments are not valid", r ? Zk : hg);
                            case 3:
                                if (!(32768 < new Blob([t]).size)) {
                                    e.next = 5;
                                    break
                                }
                                throw new ib("The message size is over the 32KB limit", r ? ue : Gh);
                            case 5:
                                return u = !Zd.getParameter("DISABLE_MESSAGE_COMPRESSION") && 128 <= new Blob([t]).size, c = this.chatManager.getChatInfo(n), l = c.dialogue, f = c.sequence, h = this.instanceId, this.log('A%s %s message is sending to %s: "'.concat(h, "-").concat(l, "#").concat(f, '"'), u ? " compressed" : "", r ? "peer" : "channel", oa(n)), p = (new TextEncoder).encode(t), d = function (e) {
                                    return {
                                        MiscMap: {},
                                        sequence: f,
                                        dialogue: l,
                                        instance: h,
                                        dst: n,
                                        ms: U.fromNumber(Date.now(), !0),
                                        options: new $d({
                                            IterationNumber: e,
                                            CompressionMethod: u ? "Zlib" : "Uncompressed",
                                            MessageType: r ? "PeerTextMessage" : "ChannelTextMessage",
                                            ToCache: s,
                                            ToArchive: a
                                        }).toLong(),
                                        payload: u ? hs(p) : p,
                                        src: g.context.uid
                                    }
                                }, e.next = 13, Kb(this.sendMessageToRetry(d, !0)).pipe(hb(void 0 === o ? 1e4 : o), Ga((function (e) {
                                    return e instanceof pb && g.warn("Send message timeout"), Y(e)
                                }))).toPromise();
                            case 13:
                                return v = e.sent, b = v.code, e.abrupt("return", {hasPeerReceived: 0 === b});
                            case 16:
                            case"end":
                                return e.stop()
                        }
                    }), e, this)
                })));
                return function (t, n, r, i, o) {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "cleanLoginSubs", value: function (e, t) {
                Object.entries(this.loginSocketSubs[e]).forEach((function (e) {
                    var n = (e = ra(e, 2))[1];
                    "channels" === e[0] && t || (Array.isArray(n) || n instanceof Map ? n.forEach((function (e) {
                        return e.unsubscribe()
                    })) : n && n.unsubscribe())
                })), this.loginSocketSubs[e] = {channels: t ? this.loginSocketSubs[e].channels : new Map, receivers: []}
            }
        }, {
            key: "sendMessageToRetry", value: function () {
                var e = K(x.mark((function e(t, n) {
                    var r, i, o, s, a, u, c, l, f, h = this, p = arguments;
                    return x.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (r = 2 < p.length && void 0 !== p[2] ? p[2] : 0, this.log("Attempt to send the message ".concat(n ? " with retrying, %o" : "without retrying"), {retryTimes: r}), 0 !== (i = this.getLoginSockets()).length) {
                                    e.next = 5;
                                    break
                                }
                                throw Error("no logged-in sockets");
                            case 5:
                                return o = t(r), i.forEach((function (e) {
                                    e.sendPacket("Message", o)
                                })), s = o.dialogue, a = o.sequence, u = o.instance, c = i.map((function (e) {
                                    return e.fromReceived("Ack").pipe(wb((function (e) {
                                        return s.eq(e.dialogue) && a.eq(e.sequence) && u.eq(e.instance)
                                    })))
                                })), e.prev = 9, e.next = 12, Xb.apply(void 0, I(c)).pipe(hb(6e3), Ga((function (e) {
                                    return Sa(e) && h.warn("Message send timeout, retry times %d", r), Y(e)
                                })), Oa(1)).toPromise();
                            case 12:
                                return l = e.sent, f = l.code, this.log("The message has been acked, %o", {code: f}), e.abrupt("return", {
                                    code: f,
                                    retryTimes: r
                                });
                            case 18:
                                if (e.prev = 18, e.t0 = e.catch(9), !(e.t0 instanceof pb && n)) {
                                    e.next = 22;
                                    break
                                }
                                return e.abrupt("return", this.sendMessageToRetry(t, !1, r + 1));
                            case 22:
                                throw e.t0;
                            case 23:
                            case"end":
                                return e.stop()
                        }
                    }), e, this, [[9, 18]])
                })));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "initKeepAliveSender", value: function () {
                var e = this;
                this.lastLoginSockets.map((function (t) {
                    return t.pipe(Cc((function (t) {
                        return Bc(0, 1e3).pipe(ca((function () {
                            e.incSeqIfNeeded(t.env), t.sendPacket("Ping", {
                                ms: U.fromNumber(Date.now(), !0),
                                seq: e.seq
                            })
                        })))
                    })))
                })).forEach((function (t, n) {
                    var r = e.loginSocketSubs[n].keepAlive;
                    void 0 !== r && r.unsubscribe(), e.loginSocketSubs[n].keepAlive = t.subscribe({
                        error: function () {
                        }
                    })
                }))
            }
        }, {
            key: "initKeepAliveReconnector", value: function () {
                var e = this;
                this.lastLoginSockets.map((function (e) {
                    return e.pipe(Cc((function (e) {
                        var t, n = !1, r = e.userJoin$.pipe(ca((function () {
                            n = !0
                        }))), i = e.input$.pipe(ca((function (e) {
                            "Ping" !== Ki[e.uri].slice(0, -3) && (n = !1)
                        })));
                        return Xb(Bc(7e3, 4500).pipe(Mt(e.receivedPacket), ca((function (r) {
                            r = ra(r, 2), r = ra(r[1], 2)[1], t !== r || n || e.forceReconnect(), t = r
                        }))), r, i)
                    })))
                })).forEach((function (t, n) {
                    var r = e.loginSocketSubs[n].keepAliveReconnector;
                    void 0 !== r && r.unsubscribe(), e.loginSocketSubs[n].keepAliveReconnector = t.subscribe({
                        error: function () {
                        }
                    })
                }))
            }
        }, {
            key: "initLoginReceiver", value: function () {
                var e = this;
                this.lastLoginSockets.map((function (t) {
                    return t.pipe(Cc((function (t) {
                        return Xb(gb(t, "reconnect").pipe(ca(e.onSocketReconnect(t))), t.fromReceived("Message").pipe(ca(e.onMessage(t))), t.fromReceived("GroupEnterNotice").pipe(ca(e.onGroupEnterNotice())), t.fromReceived("GroupLeaveNotice").pipe(ca(e.onGroupLeaveNotice())), t.fromReceived("GroupCountNotice").pipe(ca(e.onGroupCountNotice())), t.fromReceived("GroupAttributeAlt").pipe(ca(e.onGroupAttributeAlt())), t.fromReceived("UserJoinNotice").pipe(ca(e.onUserNotice(S.PeerOnlineState.ONLINE))), t.fromReceived("UserQuitNotice").pipe(ca(e.onUserNotice(S.PeerOnlineState.OFFLINE))), t.fromReceived("UserWaitNotice").pipe(ca(e.onUserNotice(S.PeerOnlineState.UNREACHABLE)))).pipe(qf(void 0))
                    })))
                })).forEach((function (t, n) {
                    e.loginSocketSubs[n].receivers.push(t.subscribe({
                        error: function () {
                        }
                    }))
                }))
            }
        }, {
            key: "requestSocketLogin", value: function (e, t, n) {
                var r = this;
                return hm($c((function () {
                    r.userJoinOptions = new fs(t), e.sendPacket("UserJoin", {
                        account: r.context.uid,
                        instance: r.instanceId,
                        opt: r.userJoinOptions.toLong(),
                        seq: n,
                        ticket: e.ticket
                    })
                })), e.fromReceived("UserResp").pipe(Z((function (e) {
                    return n.eq(e.seq)
                })), ca((function (t) {
                    if (0 !== (t = t.code)) throw r.clearSockets(), r.logError("Connected to gateway success but the Rtm server rejected login"), new da(["Login failure. The response code from the RTM service is %d", t], jg);
                    r.log("ENV_%d logged in", e.env)
                })), qf(e), hb(7e3))).pipe(wb((function (e) {
                    return void 0 !== e
                })), Ga((function (e) {
                    return e instanceof pb && r.warn("Login response timeout, rejoin: %s", t), Y(e)
                })))
            }
        }, {
            key: "getSocketLoginObservables", value: function (e, t) {
                var n = this;
                return e.map((function (e) {
                    return e.pipe(ca((function (e) {
                        0 === e.listenerCount("socketUserDrop") && e.on("socketUserDrop", (function (t) {
                            return n.onUserDrop(t, e)
                        }))
                    })), Cc((function (e, r) {
                        return n.incSeqIfNeeded(e.env), n.requestSocketLogin(e, 0 !== r, 0 === r ? t : n.seq)
                    })), oe())
                }))
            }
        }, {
            key: "incSeqIfNeeded", value: function (e) {
                if (![0, 1].includes(e)) throw new Fa({INVALID_ENV: "The env argument is not 0 or 1"});
                this.seqSentStatuses[e] && (this.seq = this.seq.add(1), this.seqSentStatuses = [!1, !1]), this.seqSentStatuses[e] = !0
            }
        }, {
            key: "incGetSeq", value: function () {
                return this.seq = this.seq.add(1), this.seqSentStatuses = [!0, !0], this.seq
            }
        }, {
            key: "getLoginSockets", value: function () {
                for (var e = this.curLoginSockets, t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n;) {
                    var o = e[t];
                    o && (i[r++] = o)
                }
                return i
            }
        }, {
            key: "emitMessage", value: function (e, n) {
                var r = e.options, i = e.payload, o = e.src, s = e.dst, a = e.instance, u = e.dialogue, c = e.sequence,
                    l = e.ms, f = e.MiscMap;
                this.dialogueSequenceLru.set(u.toString(), c), a = "".concat(a, "-").concat(u, "#").concat(c), this.msgDedupLru.has(a) ? this.warn("Env_%d: Messages out-of-order or not start with 1: %s", n, a) : (this.msgDedupLru.set(a, void 0), n = new $d(r), this.lastLoginSockets.forEach(function () {
                    var n = K(x.mark((function n(r) {
                        var i;
                        return x.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, r.pipe(Oa(1)).toPromise();
                                case 2:
                                    i = n.sent, t.sendMessageAck(e, i);
                                case 4:
                                case"end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function (e) {
                        return n.apply(this, arguments)
                    }
                }()), r = n.isZlibCompressed(), n.isInvitation() ? (s = pa(r ? ml(Wm(i, Uint8Array.of(0, 0, 0, 0))) : i), s = JSON.parse(s), this.log("The received invitation body is %o", s), this.emit("invitationMessage", {
                    body: s,
                    type: n.getInvitationType(),
                    peerId: o,
                    serverReceivedTs: l.toNumber()
                })) : n.isTextMessage() ? (f = n.isPeerTextMessage(), i = pa(r ? ml(Wm(i, Uint8Array.of(0, 0, 0, 0))) : i), this.info("Received a %s %s text message from %s to %s, %s", r ? " compressed" : "", f ? "peer" : "channel", oa(o), oa(s), a), f ? (o = {
                    text: i,
                    peerId: o,
                    properties: {serverReceivedTs: l.toNumber(), isOfflineMessage: n.isFromCache()}
                }, this.emit("peerTextMessage", o)) : this.emit("channelTextMessage", {
                    channelId: s,
                    memberId: o,
                    text: i,
                    properties: {serverReceivedTs: l.toNumber(), isOfflineMessage: !1}
                })) : n.isRawMessage() ? (u = n.isRawPeerMessage(), f = void 0 === (f = f.description) ? "" : pa(f), i = r ? ml(i) : i, this.info("Received a %s %s raw message from %s to %s, %s", r ? " compressed" : "", u ? "peer" : "channel", oa(o), oa(s), a), u ? (o = {
                    desc: f,
                    raw: i,
                    peerId: o,
                    properties: {serverReceivedTs: l.toNumber(), isOfflineMessage: n.isFromCache()}
                }, this.emit("peerRawMessage", o)) : this.emit("channelRawMessage", {
                    desc: f,
                    raw: i,
                    channelId: s,
                    memberId: o,
                    properties: {serverReceivedTs: l.toNumber(), isOfflineMessage: !1}
                })) : (n.isImageMessage() || n.isFileMessage()) && (i = n.isPeerMessage(), this.info("Received a %s media message from %s to %s, %s", i ? "peer" : "channel", oa(o), oa(s), a), i ? this.emit("peerMediaMessage", {
                    messageType: n.isImageMessage() ? "IMAGE" : "FILE",
                    details: f,
                    peerId: o,
                    properties: {serverReceivedTs: l.toNumber(), isOfflineMessage: n.isFromCache()}
                }) : this.emit("channelMediaMessage", {
                    messageType: n.isImageMessage() ? "IMAGE" : "FILE",
                    details: f,
                    memberId: o,
                    channelId: s,
                    properties: {serverReceivedTs: l.toNumber(), isOfflineMessage: n.isFromCache()}
                })))
            }
        }, {
            key: "onSocketReconnect", value: function (e) {
                var t = this;
                return function () {
                    var n = [0, 1].filter((function (t) {
                        return t !== e.env
                    }))[0];
                    (n = t.connection.curOpenSockets[n]) && !n.loggedIn && t.emit("connectionLost")
                }
            }
        }, {
            key: "onUserDrop", value: function (e, t) {
                e = e.code, db("KickedOff", {
                    code: 0,
                    elapse: eb(this.startTime),
                    linkId: parseInt(t.name.split("-")[1], 10),
                    lts: U.fromNumber(Date.now()),
                    server: t.address,
                    serverCode: e,
                    sid: Xa(this.instanceId),
                    userId: this.context.uid
                }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), 10006 === e || 10001 === e ? this.warn("Login too often and kicked off, reconnect and login") : 10009 === e ? (this.warn("The instance ID conflicts, reconnecting"), this.instanceId = Bg(), this.context.sid = Xa(this.instanceId), this.emit("instanceChanged", this.instanceId)) : [11, 14, 15, 16].includes(e) && (this.emit("userDrop", e), this.clearSockets())
            }
        }, {
            key: "clearSockets", value: function () {
                var e = this, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                [0, 1].forEach((function (r) {
                    e.cleanLoginSubs(r, n), e.connection.closeSocket(r, t)
                }))
            }
        }, {
            key: "onMessage", value: function (e) {
                var t = this;
                return function (n) {
                    var r = n.dialogue, i = n.instance, o = n.sequence, s = n.options;
                    if (n.src === t.context.uid) t.log("The message is from the local account, ignored"); else {
                        var a = r.toString(), u = t.dialPendingMsgSubjectMap.get(a);
                        if (r = "".concat(i, "-").concat(r, "#").concat(o), u) u.next(n), t.log("Env_%d: The dialogue has pending messages, next: %s", e.env, r); else {
                            var c = t.dialogueSequenceLru.get(a);
                            if (u = !c && o.eq(1), i = void 0 !== c && o.sub(c).eq(1), u || i) t.emitMessage(n, e.env); else {
                                if (c) {
                                    if (o.lte(c)) return;
                                    t.log("Env_%d: The message pended, the sequence is not continuous with the last: %s", e.env, r)
                                } else t.log("Env_%d: The message pended, the first sequence is not equal to 1: %s", e.env, r);
                                o = new Pa, t.dialPendingMsgSubjectMap.set(a, o);
                                var l = o.pipe(Ns(Ok), xg((function (e, t) {
                                    return [].concat(I(e), [t])
                                }), []), ba((function (e) {
                                    return I(e).sort((function (e, t) {
                                        return e = e.sequence, t = t.sequence, e.eq(t) ? 0 : e.gt(t) ? 1 : -1
                                    }))
                                })), rm(1));
                                s = !(s = new $d(s)).isFromCache() && !s.isBufferedMessage(), l.pipe(ob(Bc(s ? 750 : 1500)), Z((function (e) {
                                    if (2 > e.length) return !1;
                                    for (var t = void 0 === c ? U.fromNumber(1, !0) : c.add(1), n = 0; n < e.length; t = t.add(1), n++) if (!e[n].sequence.eq(t)) return !1;
                                    return !0
                                })), wg((function () {
                                    t.dialPendingMsgSubjectMap.delete(a)
                                }))).subscribe((function (n) {
                                    n.forEach((function (n) {
                                        t.emitMessage(n, e.env), t.log("Env_%d: The message queue has fully ordered, emitting: %s", e.env, "".concat(n.instance, "-").concat(n.dialogue, "#").concat(n.sequence))
                                    }))
                                }), (function (n) {
                                    n instanceof vg && l.pipe(Oa(1)).subscribe((function (n) {
                                        return n.forEach((function (n) {
                                            t.log("Env_%d: The message pending queue expired, emitting: %s", e.env, "".concat(n.instance, "-").concat(n.dialogue, "#").concat(n.sequence)), t.emitMessage(n, e.env)
                                        }))
                                    }))
                                })), o.next(n)
                            }
                        }
                    }
                }
            }
        }, {
            key: "onGroupEnterNotice", value: function () {
                var e = this;
                return function (t) {
                    e.emit("memberNotice", {
                        channelId: t.group,
                        seq: t.seq,
                        instance: t.instance,
                        memberId: t.user,
                        type: "MemberJoined",
                        size: t.size
                    })
                }
            }
        }, {
            key: "onGroupLeaveNotice", value: function () {
                var e = this;
                return function (t) {
                    e.emit("memberNotice", {
                        channelId: t.group,
                        seq: t.seq,
                        instance: t.instance,
                        memberId: t.user,
                        type: "MemberLeft",
                        size: t.size
                    })
                }
            }
        }, {
            key: "onGroupCountNotice", value: function () {
                var e = this;
                return function (t) {
                    e.emit("memberNotice", {
                        channelId: t.group,
                        seq: t.seq,
                        instance: t.instance,
                        type: "MemberCountUpdated",
                        size: t.size
                    })
                }
            }
        }, {
            key: "onGroupAttributeAlt", value: function () {
                var e = this;
                return function (t) {
                    var n = t.group;
                    t = ff(t, ["group"]), e.emit("channelAttributesUpdated", ua({channelId: n}, t))
                }
            }
        }, {
            key: "onUserNotice", value: function (e) {
                var t = this;
                return function (n) {
                    t.emit("peerOnlineStatusChanged", {peerId: n.user, instance: n.instance, seq: n.seq, state: e})
                }
            }
        }], [{
            key: "sendMessageAck", value: function (e, t) {
                var n = new $d(e.options);
                (n.isInvitation() || n.isPeerMessage()) && t.sendPacket("Ack", {
                    code: 0,
                    dialogue: e.dialogue,
                    instance: e.instance,
                    sequence: e.sequence
                })
            }
        }]), t
    }(tb());
    m(is, "genTimeoutError", (function (e, t) {
        return fb(void 0).pipe(bd(void 0 === t ? 1e4 : t), ba((function () {
            throw new cb(["Request timed out after %ds", void 0 === t ? 1e4 : t], e)
        })))
    }));
    var js, nl, ol = 0, pl = 0;
    Ud.v1 = function (e, t, n) {
        n = t && n || 0;
        var r = t || [], i = (e = e || {}).node || js, o = void 0 !== e.clockseq ? e.clockseq : nl;
        if (null == i || null == o) {
            var s = Hq();
            null == i && (i = js = [1 | s[0], s[1], s[2], s[3], s[4], s[5]]), null == o && (o = nl = 16383 & (s[6] << 8 | s[7]))
        }
        s = void 0 !== e.msecs ? e.msecs : (new Date).getTime();
        var a = void 0 !== e.nsecs ? e.nsecs : pl + 1, u = s - ol + (a - pl) / 1e4;
        if (0 > u && void 0 === e.clockseq && (o = o + 1 & 16383), (0 > u || s > ol) && void 0 === e.nsecs && (a = 0), 1e4 <= a) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
        for (ol = s, pl = a, nl = o, e = (1e4 * (268435455 & (s += 122192928e5)) + a) % 4294967296, r[n++] = e >>> 24 & 255, r[n++] = e >>> 16 & 255, r[n++] = e >>> 8 & 255, r[n++] = 255 & e, e = s / 4294967296 * 1e4 & 268435455, r[n++] = e >>> 8 & 255, r[n++] = 255 & e, r[n++] = e >>> 24 & 15 | 16, r[n++] = e >>> 16 & 255, r[n++] = o >>> 8 | 128, r[n++] = 255 & o, o = 0; 6 > o; ++o) r[n + o] = i[o];
        return t || Iq(r)
    }, Ud.v4 = Ud;
    var ql = Oh(), vd, bf = S.LocalInvitationFailureReason, Ba = S.LocalInvitationState, hD = (vd = function (e) {
            function t(e, i, o) {
                X(this, t);
                var s = r.call(this, o, "RtmLocalInvitation", !0);
                return m(n(s), "state", Ba.IDLE), m(n(s), "localInvitationEnd$", Ca(gb(n(s), "LocalInvitationAccepted"), gb(n(s), "LocalInvitationRefused"), gb(n(s), "LocalInvitationFailure"), gb(n(s), "LocalInvitationCanceled")).pipe(Oa(1))), m(n(s), "callId", Ud.v4()), m(n(s), "_content", ""), m(n(s), "_channelId", ""), m(n(s), "_response", ""), m(n(s), "calleeId", void 0), m(n(s), "logger", void 0), m(n(s), "getSession", void 0), s.calleeId = e, s.getSession = i, s.logger = o, s
            }

            la(t, e);
            var r = ma(t);
            return Ha(t, [{
                key: "channelId", get: function () {
                    return this._channelId
                }, set: function (e) {
                    this.state !== Ba.IDLE ? this.info("set channelId only allow before invitation sent to remote") : (this.log("set channelId for %s", this.callId), this._channelId = e)
                }
            }, {
                key: "content", get: function () {
                    return this._content
                }, set: function (e) {
                    this.log("set content for %s", this.callId), this._content = e
                }
            }, {
                key: "response", get: function () {
                    return this._response
                }, set: function (e) {
                    throw new L('Cannot set the "response" of the LocalInvitation instance.', xc)
                }
            }, {
                key: "send", value: function () {
                    var e, t = this;
                    if (this.state === Ba.SENT_TO_REMOTE || this.state === Ba.RECEIVED_BY_REMOTE) throw new M("The local invitation send failure. The call invitation has already been sent.", eA);
                    if (this.isLocalInvitationEnd()) throw new M("The local invitation send failure. The call invitation has ended.", Hh);
                    if (0 < this._channelId.length && !za(this._channelId)) throw new L("Illegal invitation channel ID", xc);
                    if (!za(this.calleeId)) throw new L("Illegal invitation callee user ID", xc);
                    if (8192 < Hg(this._content)) throw new L('The length of the "content" overflows. The number of bytes representing content must not exceed 8 × 1024 if encoded in UTF-8.', xc);
                    this.state = Ba.SENT_TO_REMOTE, $c(K(x.mark((function n() {
                        var r, i, o;
                        return x.wrap((function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, t.getSession().sendInvitationMessage({
                                        peerId: t.calleeId,
                                        callId: t.callId,
                                        extra: t._content,
                                        type: "CallInvite",
                                        channelId: t._channelId
                                    });
                                case 2:
                                    if (r = n.sent, i = r.hasPeerReceived, o = r.hasReSent, !t.isLocalInvitationEnd()) {
                                        n.next = 7;
                                        break
                                    }
                                    throw new cb("send invitation timeout");
                                case 7:
                                    if (t.log("The local invitation has sent to the callee"), i || o) {
                                        n.next = 11;
                                        break
                                    }
                                    throw e = new ql({PEER_NOT_ONLINE: "The peer of the invitation is not online"});
                                case 11:
                                    if (i) {
                                        n.next = 14;
                                        break
                                    }
                                    throw e = new ql({RESENT_AND_OFFLINE: "Resent and the peer of the invitation is not online"});
                                case 14:
                                case"end":
                                    return n.stop()
                            }
                        }), n)
                    })))).pipe(ne((function (e) {
                        return e.pipe(ca((function (e) {
                            if (!(e instanceof ql)) throw e
                        })), bd(2e3))
                    })), hb(3e4), Ga((function (e) {
                        return Sa(e) && t.warn("local invitation ack timed out"), Y(e)
                    })), ob(this.localInvitationEnd$)).subscribe({
                        next: function () {
                            t.state === Ba.RECEIVED_BY_REMOTE ? t.log('The local invitation state is already "RECEIVED_BY_REMOTE", skipped emitting "LocalInvitationReceivedByPeer"') : t.state !== Ba.SENT_TO_REMOTE ? t.log("The invitation has ended, skipped emitting the %s event", "LocalInvitationReceivedByPeer") : (t.info("The peer received the local invitation %s.", t.callId), t.state = Ba.RECEIVED_BY_REMOTE, t.emit("LocalInvitationReceivedByPeer"), t.localInvitationEnd$.pipe(hb(6e4), Ga((function (e) {
                                return Sa(e) && t.warn("local invitation expired"), Y(e)
                            }))).subscribe({
                                error: function () {
                                    t.state = Ba.FAILURE, t.emit("LocalInvitationFailure", bf.INVITATION_EXPIRE)
                                }
                            }))
                        }, error: function (n) {
                            t.isLocalInvitationEnd() ? t.log("The invitation has ended, skipped emitting the %s event", "LocalInvitationFailure") : (t.state = Ba.FAILURE, Sa(n) && e ? "PEER_NOT_ONLINE" === e.code ? t.emit("LocalInvitationFailure", bf.PEER_OFFLINE) : "RESENT_AND_OFFLINE" === e.code && t.emit("LocalInvitationFailure", bf.PEER_NO_RESPONSE) : Sa(n) ? t.emit("LocalInvitationFailure", bf.PEER_NO_RESPONSE) : "RtmInvalidStatusError" === n.name ? t.emit("LocalInvitationFailure", bf.NOT_LOGGEDIN) : t.emit("LocalInvitationFailure", bf.UNKNOWN))
                        }
                    })
                }
            }, {
                key: "cancel", value: function () {
                    if (this.isLocalInvitationEnd()) throw new M("The local invitation cancel failure", Hh);
                    if (this.state === Ba.IDLE) throw new M("The local invitation has not been sent", dA);
                    if (8192 < Hg(this._content)) throw new L('The length of the "content" overflows. The number of bytes representing content must not exceed 8 × 1024 if encoded in UTF-8.', xc);
                    this.getSession().sendInvitationMessage({
                        callId: this.callId,
                        peerId: this.calleeId,
                        type: "CallCancel",
                        channelId: this._channelId,
                        extra: this._content
                    }), this.state = Ba.CANCELED, this.emit("LocalInvitationCanceled")
                }
            }, {
                key: "onAcceptReceived", value: function (e) {
                    if (this.isLocalInvitationEnd() && this.state !== Ba.ACCEPTED_BY_REMOTE) this.log("The invitation has ended, skipped emitting the %s event", "LocalInvitationAccepted"); else {
                        if (this.state === Ba.IDLE) throw new M("the local have not sent the invitation, how can remote accept it?");
                        this.getSession().sendInvitationMessage({
                            callId: this.callId,
                            isAcceptAck: !0,
                            type: "CallAccept",
                            peerId: this.calleeId,
                            channelId: this.channelId
                        }), this.state === Ba.ACCEPTED_BY_REMOTE ? this.log("already in ACCEPTED_BY_REMOTE state, ignore emit ACCEPTED_BY_REMOTE") : (this.state === Ba.SENT_TO_REMOTE && (this.log("receive LocalInvitationAccepted before remote response to the invitation"), this.state = Ba.RECEIVED_BY_REMOTE, this.emit("LocalInvitationReceivedByPeer")), this.state = Ba.ACCEPTED_BY_REMOTE, this._response = e, this.emit("LocalInvitationAccepted", e))
                    }
                }
            }, {
                key: "onRefuseReceived", value: function (e) {
                    if (this.isLocalInvitationEnd()) this.log("The invitation has ended, skipped emitting the %s event", "LocalInvitationRefused"); else {
                        if (this.state === Ba.IDLE) throw new M("the local have not sent the invitation, how can remote refuse it?");
                        this.state === Ba.SENT_TO_REMOTE && (this.log("receive LocalInvitationRefused before remote response to the invitation"), this.state = Ba.RECEIVED_BY_REMOTE, this.emit("LocalInvitationReceivedByPeer")), this._response = e, this.state = Ba.REFUSED_BY_REMOTE, this.emit("LocalInvitationRefused", e)
                    }
                }
            }, {
                key: "isLocalInvitationEnd", value: function () {
                    return [Ba.CANCELED, Ba.FAILURE, Ba.ACCEPTED_BY_REMOTE, Ba.REFUSED_BY_REMOTE].includes(this.state)
                }
            }]), t
        }(tb()), fa(vd.prototype, "send", [Nb], Object.getOwnPropertyDescriptor(vd.prototype, "send"), vd.prototype), fa(vd.prototype, "cancel", [Nb], Object.getOwnPropertyDescriptor(vd.prototype, "cancel"), vd.prototype), vd),
        Qh = S.RemoteInvitationFailureReason, kb = S.RemoteInvitationState, iD = function (e) {
            function t(e) {
                var i = e.invitationChannel, o = e.extraContent, s = e.callId, a = e.callerId, u = e.logger;
                e = e.getSession, X(this, t);
                var c = r.call(this, u, "RtmRemoteInvitation", !0);
                return m(n(c), "state", kb.INVITATION_RECEIVED), m(n(c), "remoteInvitationEnd$", Ca(gb(n(c), "RemoteInvitationCanceled"), gb(n(c), "RemoteInvitationRefused"), gb(n(c), "RemoteInvitationAccepted"), gb(n(c), "RemoteInvitationFailure")).pipe(Oa(1))), m(n(c), "callerId", void 0), m(n(c), "callId", void 0), m(n(c), "_getSession", void 0), m(n(c), "logger", void 0), m(n(c), "_content", void 0), m(n(c), "_channelId", void 0), m(n(c), "_response", ""), c._channelId = i, c._content = o, c.callId = s, c.callerId = a, c._getSession = e, c.logger = u, c.remoteInvitationEnd$.pipe(hb(6e4), Ga((function (e) {
                    return Sa(e) && c.warn("Remote invitation expired"), Y(e)
                }))).subscribe({
                    error: function () {
                        c.state = kb.FAILURE, c.emit("RemoteInvitationFailure", Qh.INVITATION_EXPIRE)
                    }
                }), c
            }

            la(t, e);
            var r = ma(t);
            return Ha(t, [{
                key: "channelId", get: function () {
                    return this._channelId
                }, set: function (e) {
                    throw new L('Cannot set the "response" of the RemoteInvitation instance.', xc)
                }
            }, {
                key: "content", get: function () {
                    return this._content
                }, set: function (e) {
                    throw new L('Cannot set the "content" of the RemoteInvitation instance.', xc)
                }
            }, {
                key: "response", get: function () {
                    return this._response
                }, set: function (e) {
                    this._response = e
                }
            }, {
                key: "accept", value: function () {
                    var e, t = this;
                    if (this.isRemoteInvitationEnd()) throw new M("The local invitation has ended. Cannot accept.", Hh);
                    if (this.state === kb.ACCEPT_SENT_TO_LOCAL) throw new M("The remote invitation is accepting. Cannot do the operation.", Oq);
                    if (8192 < Hg(this._response)) throw new L('The length of the "response" overflows. The number of bytes representing content must not exceed 8 × 1024 if encoded in UTF-8.', xc);
                    this.state = kb.ACCEPT_SENT_TO_LOCAL, Xb(lm(1e3).pipe(bb((function () {
                        return $c(K(x.mark((function e() {
                            return x.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", t._getSession().sendInvitationMessage({
                                            peerId: t.callerId,
                                            callId: t.callId,
                                            extra: t.response,
                                            type: "CallAccept",
                                            isAcceptAck: !1,
                                            channelId: t.channelId
                                        }));
                                    case 1:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        }))))
                    })), wb((function (t) {
                        return e = t.hasPeerReceived
                    })), Oa(1)), gb(this, "RemoteInvitationAccepted")).pipe(hb(5e3), ob(this.remoteInvitationEnd$)).subscribe({
                        error: function (n) {
                            if (t.logError(n), t.state = kb.FAILURE, Sa(n)) switch (e) {
                                case void 0:
                                case!0:
                                    return void t.emit("RemoteInvitationFailure", Qh.ACCEPT_FAILURE);
                                case!1:
                                    return void t.emit("RemoteInvitationFailure", Qh.PEER_OFFLINE)
                            }
                            t.emit("RemoteInvitationFailure", Qh.UNKNOWN)
                        }
                    })
                }
            }, {
                key: "refuse", value: function () {
                    if (this.state === kb.ACCEPT_SENT_TO_LOCAL) throw new M("The remote invitation is accepting. Cannot do the operation.", Oq);
                    if (this.isRemoteInvitationEnd()) throw new M("The invitation is end. Cannot refuse", Hh);
                    if (8192 < Hg(this._response)) throw new L('The length of the "response" overflows. The number of bytes representing content must not exceed 8 × 1024 if encoded in UTF-8.', xc);
                    this._getSession().sendInvitationMessage({
                        peerId: this.callerId,
                        callId: this.callId,
                        extra: this.response,
                        type: "CallReject",
                        channelId: this.channelId
                    }), this.state = kb.REFUSED, this.emit("RemoteInvitationRefused")
                }
            }, {
                key: "onCancelReceived", value: function (e) {
                    this.isRemoteInvitationEnd() ? this.log("The invitation has ended, skipped emitting the %s event", "RemoteInvitationCanceled") : (this.state === kb.ACCEPT_SENT_TO_LOCAL && this.log("caller canceled before receive accept"), this._content = e, this.state = kb.CANCELED, this.emit("RemoteInvitationCanceled", e))
                }
            }, {
                key: "onAcceptAckReceived", value: function () {
                    this.state !== kb.ACCEPT_SENT_TO_LOCAL ? this.log("The invitation has ended, skipped emitting the %s event", "ori:".concat(this.state, ", to: RemoteInvitationAccepted")) : (this.state = kb.ACCEPTED, this.emit("RemoteInvitationAccepted"))
                }
            }, {
                key: "isRemoteInvitationEnd", value: function () {
                    return [kb.ACCEPTED, kb.REFUSED, kb.CANCELED, kb.FAILURE].includes(this.state)
                }
            }]), t
        }(tb()), jD = function (e) {
            function t(e, i) {
                X(this, t);
                var o = r.call(this, i, "InvitationManager");
                return m(n(o), "getSession", void 0), m(n(o), "invitationDispatcher", new ea.EventEmitter), m(n(o), "outgoingLocalInvitations", new Map), m(n(o), "receivedRemoteInvitations", new tc(void 0, {maxlen: 1e4})), m(n(o), "logger", void 0), o.getSession = an(e), o.logger = i, o.invitationDispatcher.on("remoteInvitationToManager", (function (e) {
                    var t = e.callId, n = e.extra, r = e.callerId;
                    e = e.channelId, o.receivedRemoteInvitations.has(t) || ((n = new iD({
                        callerId: r,
                        callId: t,
                        getSession: o.getSession,
                        logger: i,
                        extraContent: n,
                        invitationChannel: e
                    })).remoteInvitationEnd$.subscribe((function () {
                        o.receivedRemoteInvitations.delete(t)
                    })), o.receivedRemoteInvitations.set(t, n), o.emit("remoteInvitationInstance", n))
                })), o.invitationDispatcher.on("acceptAckToRemoteInvitation", (function (e) {
                    (e = o.receivedRemoteInvitations.get(e.callId)) && e.onAcceptAckReceived()
                })), o.invitationDispatcher.on("cancelToRemoteInvitation", (function (e) {
                    var t = e.extra;
                    (e = o.receivedRemoteInvitations.get(e.callId)) && e.onCancelReceived(t)
                })), o.invitationDispatcher.on("acceptToLocalInvitation", (function (e) {
                    var t = e.extra;
                    (e = o.outgoingLocalInvitations.get(e.callId)) && e.onAcceptReceived(t)
                })), o.invitationDispatcher.on("refuseToLocalInvitation", (function (e) {
                    var t = e.extra;
                    (e = o.outgoingLocalInvitations.get(e.callId)) && e.onRefuseReceived(t)
                })), o
            }

            la(t, e);
            var r = ma(t);
            return Ha(t, [{
                key: "invitationMessageHandler", value: function (e) {
                    var t = e.body, n = t.callId, r = t.extra;
                    r = void 0 === r ? "" : r;
                    var i = t.type, o = void 0 === (t = t.channel) ? "" : t, s = e.type;
                    switch (t = e.peerId, e = e.serverReceivedTs, s) {
                        case"CallAccept":
                            "ack" === i ? this.invitationDispatcher.emit("acceptAckToRemoteInvitation", {callId: n}) : "request" === i && this.invitationDispatcher.emit("acceptToLocalInvitation", {
                                callId: n,
                                extra: r
                            });
                            break;
                        case"CallInvite":
                            this.invitationDispatcher.emit("remoteInvitationToManager", {
                                callId: n,
                                callerId: t,
                                extra: r,
                                channelId: o
                            });
                            break;
                        case"CallCancel":
                            if ("0" === n) {
                                n = "".concat("AgoraRTMLegacyEndcallCompatibleMessagePrefix", "_").concat(o, "_").concat(r), this.getSession().emit("peerTextMessage", {
                                    peerId: t,
                                    properties: {serverReceivedTs: e, isOfflineMessage: !1},
                                    text: n
                                });
                                break
                            }
                            this.invitationDispatcher.emit("cancelToRemoteInvitation", {callId: n, extra: r});
                            break;
                        case"CallReject":
                            this.invitationDispatcher.emit("refuseToLocalInvitation", {callId: n, extra: r});
                            break;
                        default:
                            throw Hm("invitationType", s)
                    }
                }
            }, {
                key: "genLocalInvitation", value: function (e) {
                    var t = this, n = new hD(e, this.getSession, this.logger);
                    return n.localInvitationEnd$.subscribe((function () {
                        t.outgoingLocalInvitations.delete(n.callId)
                    })), this.outgoingLocalInvitations.set(n.callId, n), n
                }
            }]), t
        }(tb()), kD = function (e, t, n) {
            var r = !0, i = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            return lb(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), pC(e, t, {
                leading: r,
                maxWait: t,
                trailing: i
            })
        }, ub, cf;
    !function (e) {
        e[e.JOINED = 0] = "JOINED", e[e.LEFT = 1] = "LEFT"
    }(cf || (cf = {}));
    var ks = S.ConnectionState, lD = (ub = function (e) {
            function t(e, i, o, s) {
                X(this, t);
                var a = r.call(this, s, "RtmChannel", !0);
                return m(n(a), "onMemberCountUpdated", kD((function (e) {
                    e !== a.memberCount && (a.memberCount = e, a.emit("MemberCountUpdated", e))
                }), 1e3)), m(n(a), "getSession", void 0), m(n(a), "memberCount", 0), m(n(a), "memberJoinedLru", new tc(void 0, {maxlen: 1e4})), m(n(a), "memberLeftLru", new tc(void 0, {maxlen: 1e4})), m(n(a), "memberJoinStateLru", new tc(void 0, {maxlen: 1e4})), m(n(a), "attributesSeqLru", new tc(void 0, {maxlen: 1e4})), m(n(a), "channelId", void 0), m(n(a), "client", void 0), m(n(a), "onAttributesUpdated", (function (e) {
                    var t = e.channelId, n = e.attributeMaps, r = e.seq;
                    e = e.instance.toString();
                    var i = a.attributesSeqLru.get(e);
                    if ((!i || r.greaterThan(i)) && (a.attributesSeqLru.set(e, r), t === a.channelId)) {
                        for (t = {}, r = 0; r < n.length; r++) {
                            var o = n[r];
                            e = o.key, i = o.ms;
                            var s = o.value;
                            if (o = o.origin, "string" != typeof e || !U.isLong(i) || "string" != typeof s || !za(o)) break;
                            t[e] = {value: s, lastUpdateUserId: o, lastUpdateTs: i.toNumber()}
                        }
                        a.emit("AttributesUpdated", t)
                    }
                })), m(n(a), "onChannelTextMessage", (function (e) {
                    var t = e.memberId, n = e.text, r = e.properties;
                    e.channelId === a.channelId && a.emit("ChannelMessage", {
                        text: n,
                        messageType: S.MessageType.TEXT
                    }, t, r)
                })), m(n(a), "onChannelMediaMessage", (function (e) {
                    var t = e.memberId, n = e.properties, r = e.details, i = e.messageType;
                    e.channelId === a.channelId && ("FILE" === i ? a.emit("ChannelMessage", {
                        messageType: S.MessageType.FILE,
                        size: parseInt(pa(r.media_size), 10),
                        description: pa(r.media_description),
                        fileName: pa(r.media_filename),
                        mediaId: pa(r.media_id),
                        thumbnail: new Blob([r.media_thumbnail])
                    }, t, n) : "IMAGE" === i && a.emit("ChannelMessage", {
                        messageType: S.MessageType.IMAGE,
                        size: parseInt(pa(r.media_size), 10),
                        description: pa(r.media_description),
                        fileName: pa(r.media_filename),
                        mediaId: pa(r.media_id),
                        thumbnail: new Blob([r.media_thumbnail]),
                        height: parseInt(pa(r.media_height), 10),
                        width: parseInt(pa(r.media_width), 10),
                        thumbnailHeight: parseInt(pa(r.media_thumbnailheight), 10),
                        thumbnailWidth: parseInt(pa(r.media_thumbnailwidth), 10)
                    }, t, n))
                })), m(n(a), "onChannelRawMessage", (function (e) {
                    var t = e.desc, n = e.raw, r = e.memberId, i = e.properties;
                    e.channelId === a.channelId && a.emit("ChannelMessage", {
                        messageType: S.MessageType.RAW,
                        rawMessage: n,
                        description: t
                    }, r, i)
                })), m(n(a), "onMemberNotice", (function (e) {
                    var t = e.memberId, n = e.type, r = e.size;
                    if (e.channelId === a.channelId) {
                        var i = e.instance.toString();
                        e = e.seq.toString();
                        var o = {
                            MemberLeft: a.memberLeftLru,
                            MemberJoined: a.memberJoinedLru,
                            MemberCountUpdated: void 0
                        }[n];
                        if (o) {
                            if (o.has(i + e)) return void a.log("received duplicated %s notice (seq: %s), channel '%s', member '%s'", n, e, oa(a.channelId), oa(t || ""));
                            if (o.set(i + e, void 0), "string" != typeof t) return;
                            if (t !== a.getSession().context.uid) {
                                if ((i = a.memberJoinStateLru.get(t)) === cf.JOINED && "MemberJoined" === n) return void a.log("received duplicated %s state (seq: %s), channel '%s', member '%s'", n, e, oa(a.channelId), oa(t || ""));
                                if (i === cf.LEFT && "MemberLeft" === n) return void a.log("received duplicated %s state (seq: %s), channel '%s', member '%s'", n, e, oa(a.channelId), oa(t || ""))
                            }
                            a.memberJoinStateLru.set(t, "MemberJoined" === n ? cf.JOINED : cf.LEFT)
                        }
                        a.info("Channel %s - %s, memberId: %s", n, oa(a.channelId), "MemberCountUpdated" === n ? "[unknown]" : oa(t || "")), i = t === a.getSession().context.uid, "MemberLeft" === n && za(t) || "MemberJoined" === n && za(t) ? (i || a.emit(n, t), a.onMemberCountUpdated(r)) : "MemberCountUpdated" === n && "number" == typeof r && a.onMemberCountUpdated(r)
                    }
                })), a.getSession = an(i), a.channelId = e, a.client = o, a.info("A channel created, id %s", oa(e)), a
            }

            la(t, e);
            var r = ma(t);
            return Ha(t, [{
                key: "join", value: function () {
                    var e = K(x.mark((function e() {
                        var t;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (za(this.channelId)) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new L(["The %s in the arguments is invalid", "channelId"], fA);
                                case 2:
                                    e.prev = 2, t = this.getSession(), e.next = 9;
                                    break;
                                case 6:
                                    throw e.prev = 6, e.t0 = e.catch(2), new M("The client is not logged in. Cannot do the operation", Tq);
                                case 9:
                                    if (!t.joinedChannels.has(this)) {
                                        e.next = 12;
                                        break
                                    }
                                    throw db("ChnJoin", {
                                        cname: this.channelId,
                                        lts: U.fromNumber(Date.now()),
                                        userId: t.context.uid,
                                        elapse: eb(t.startTime),
                                        errCode: Sq,
                                        sid: Xa(t.instanceId)
                                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), new M("The channel has joined. Cannot rejoin", Sq);
                                case 12:
                                    if (e.prev = 12, this.log("Joining the channel %s", oa(this.channelId)), !this.hasOtherChannelJoined()) {
                                        e.next = 17;
                                        break
                                    }
                                    throw db("ChnJoin", {
                                        cname: this.channelId,
                                        lts: U.fromNumber(Date.now()),
                                        userId: t.context.uid,
                                        elapse: eb(t.startTime),
                                        errCode: Uq,
                                        sid: Xa(t.instanceId)
                                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), new M("A channel of the same channel ID has already joined. Cannot rejoin", Uq);
                                case 17:
                                    if (20 !== t.joinedChannels.size) {
                                        e.next = 20;
                                        break
                                    }
                                    throw db("ChnJoin", {
                                        cname: this.channelId,
                                        lts: U.fromNumber(Date.now()),
                                        userId: t.context.uid,
                                        elapse: eb(t.startTime),
                                        errCode: Rq,
                                        sid: Xa(t.instanceId)
                                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), new ib("The joined channels has exceeded the limit of 20", Rq);
                                case 20:
                                    return db("ChnJoin", {
                                        cname: this.channelId,
                                        lts: U.fromNumber(Date.now()),
                                        userId: t.context.uid,
                                        elapse: eb(t.startTime),
                                        errCode: 0,
                                        sid: Xa(t.instanceId)
                                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), e.next = 23, t.requestChannelJoin(this, this.channelId);
                                case 23:
                                    db("ChnJoinRes", {
                                        cname: this.channelId,
                                        lts: U.fromNumber(Date.now()),
                                        elapse: eb(t.startTime),
                                        errCode: 0,
                                        sid: Xa(t.instanceId),
                                        serverErrCode: 0,
                                        userId: t.context.uid
                                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), this.info("The channel %s joined successfully", oa(this.channelId)), t.on("channelTextMessage", this.onChannelTextMessage), t.on("channelRawMessage", this.onChannelRawMessage), t.on("channelMediaMessage", this.onChannelMediaMessage), t.on("memberNotice", this.onMemberNotice), t.on("channelAttributesUpdated", this.onAttributesUpdated), e.next = 41;
                                    break;
                                case 32:
                                    if (e.prev = 32, e.t1 = e.catch(12), this.logError(e.t1), !sa(e.t1)) {
                                        e.next = 37;
                                        break
                                    }
                                    throw e.t1;
                                case 37:
                                    if (!Sa(e.t1)) {
                                        e.next = 40;
                                        break
                                    }
                                    throw db("ChnJoinRes", {
                                        cname: this.channelId,
                                        lts: U.fromNumber(Date.now()),
                                        elapse: eb(t.startTime),
                                        errCode: Qq,
                                        sid: Xa(t.instanceId),
                                        serverErrCode: 0,
                                        userId: t.context.uid
                                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), new cb(["Join channel %s timed out", oa(this.channelId)], Qq);
                                case 40:
                                    throw new Vc(["The channel %s join failure", oa(this.channelId)], {
                                        code: Pq,
                                        originalError: e.t1
                                    });
                                case 41:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[2, 6], [12, 32]])
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "leave", value: function () {
                    var e = K(x.mark((function e() {
                        var t;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    e.prev = 0, t = this.getSession(), e.next = 7;
                                    break;
                                case 4:
                                    throw e.prev = 4, e.t0 = e.catch(0), new M("The client is not logged in. Cannot do the operation", hA);
                                case 7:
                                    if (t.joinedChannels.has(this)) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new M("The channel does not join. Cannot do the operation", gA);
                                case 9:
                                    e.prev = 9, t.requestChannelLeave(this, this.channelId), this.memberLeftLru.empty(), this.memberJoinedLru.empty(), this.attributesSeqLru.empty(), this.memberJoinStateLru.empty(), this.memberCount = 0, t.removeListener("channelTextMessage", this.onChannelTextMessage), t.removeListener("channelRawMessage", this.onChannelRawMessage), t.removeListener("channelMediaMessage", this.onChannelMediaMessage), t.removeListener("memberNotice", this.onMemberNotice), t.removeListener("channelAttributesUpdated", this.onAttributesUpdated), e.next = 32;
                                    break;
                                case 23:
                                    if (e.prev = 23, e.t1 = e.catch(9), this.logError(e.t1), !sa(e.t1)) {
                                        e.next = 30;
                                        break
                                    }
                                    throw void 0 === e.t1.code && (e.t1.code = Wq), db("ChnLeave", {
                                        cname: this.channelId,
                                        lts: U.fromNumber(Date.now()),
                                        elapse: eb(t.startTime),
                                        errCode: Wq,
                                        sid: Xa(t.instanceId),
                                        userId: t.context.uid
                                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), e.t1;
                                case 30:
                                    throw db("ChnLeave", {
                                        cname: this.channelId,
                                        lts: U.fromNumber(Date.now()),
                                        elapse: eb(t.startTime),
                                        errCode: Vq,
                                        sid: Xa(t.instanceId),
                                        userId: t.context.uid
                                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), new Vc("The channel leave failure", {
                                        code: Vq,
                                        originalError: e.t1
                                    });
                                case 32:
                                    db("ChnLeave", {
                                        cname: this.channelId,
                                        lts: U.fromNumber(Date.now()),
                                        elapse: eb(t.startTime),
                                        errCode: 0,
                                        sid: Xa(t.instanceId),
                                        userId: t.context.uid
                                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]);
                                case 33:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 4], [9, 23]])
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "sendMessage", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i, o, s, a = this, u = arguments;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    n = 1 < u.length && void 0 !== u[1] ? u[1] : {}, r = n.enableHistoricalMessaging, i = void 0 !== r && r, Sm(t, Gh), e.prev = 2, o = this.getSession(), e.next = 9;
                                    break;
                                case 6:
                                    throw e.prev = 6, e.t0 = e.catch(2), new M("The client is not logged in. Cannot do the operation", ig);
                                case 9:
                                    if (o.joinedChannels.has(this)) {
                                        e.next = 11;
                                        break
                                    }
                                    throw new M("The channel does not join. Cannot do the operation", ig);
                                case 11:
                                    if (this.client.connectionState !== ks.RECONNECTING) {
                                        e.next = 16;
                                        break
                                    }
                                    return s = Date.now(), e.next = 15, new Promise((function (e, n) {
                                        var r = function () {
                                            var r = K(x.mark((function r() {
                                                var u;
                                                return x.wrap((function (r) {
                                                    for (; ;) switch (r.prev = r.next) {
                                                        case 0:
                                                            return u = Date.now() - s, r.prev = 1, r.next = 4, Fg({
                                                                message: t,
                                                                peerId: a.channelId,
                                                                toPeer: !1,
                                                                session: a.getSession(),
                                                                errorCodes: {NOT_LOGGED_IN: ig, TOO_OFTEN: Kq},
                                                                diff: u,
                                                                logger: a.logger,
                                                                options: {
                                                                    enableHistoricalMessaging: i,
                                                                    enableOfflineMessaging: !1
                                                                }
                                                            });
                                                        case 4:
                                                            e(), r.next = 12;
                                                            break;
                                                        case 7:
                                                            r.prev = 7, r.t0 = r.catch(1), Sa(r.t0) && n(new cb(Yd(a.name, "sendMessageToPeer", 1e4), Xk)), sa(r.t0) && n(r.t0), n(new da("Channel message send failure", {
                                                                code: hg,
                                                                originalError: r.t0
                                                            }));
                                                        case 12:
                                                            return r.prev = 12, clearTimeout(o), r.finish(12);
                                                        case 15:
                                                        case"end":
                                                            return r.stop()
                                                    }
                                                }), r, null, [[1, 7, 12, 15]])
                                            })));
                                            return function () {
                                                return r.apply(this, arguments)
                                            }
                                        }();
                                        a.client.internalEmitter.once("RECONNECTED", r);
                                        var o = setTimeout((function () {
                                            a.client.internalEmitter.off("RECONNECTED", r), n(new cb(Yd(a.name, "sendMessageToPeer", 1e4), Xk))
                                        }), 9e3)
                                    }));
                                case 15:
                                    return e.abrupt("return");
                                case 16:
                                    if (this.client.connectionState === ks.CONNECTED) {
                                        e.next = 18;
                                        break
                                    }
                                    throw new M("The client is not logged in. Cannot do the operation", ig);
                                case 18:
                                    return e.prev = 18, e.next = 21, Fg({
                                        message: t,
                                        peerId: this.channelId,
                                        toPeer: !1,
                                        session: this.getSession(),
                                        errorCodes: {NOT_LOGGED_IN: ig, TOO_OFTEN: Kq},
                                        diff: 0,
                                        logger: this.logger,
                                        options: {enableHistoricalMessaging: i, enableOfflineMessaging: !1}
                                    });
                                case 21:
                                    e.next = 31;
                                    break;
                                case 23:
                                    if (e.prev = 23, e.t1 = e.catch(18), !Sa(e.t1)) {
                                        e.next = 27;
                                        break
                                    }
                                    throw new cb(Yd(this.name, "sendMessage", 1e4), Xk);
                                case 27:
                                    if (!sa(e.t1)) {
                                        e.next = 30;
                                        break
                                    }
                                    throw this.logError(e.t1), e.t1;
                                case 30:
                                    throw new Vc("The channel message send failure", hg);
                                case 31:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[2, 6], [18, 23]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getMembers", value: function () {
                    var e = K(x.mark((function e() {
                        var t, n, r;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    e.prev = 0, e.prev = 1, t = this.getSession(), e.next = 8;
                                    break;
                                case 5:
                                    throw e.prev = 5, e.t0 = e.catch(1), new M("The client is not logged in. Cannot do the operation", cA);
                                case 8:
                                    if (t.joinedChannels.has(this)) {
                                        e.next = 10;
                                        break
                                    }
                                    throw new M("The channel does not join. Cannot do the operation", bA);
                                case 10:
                                    return n = this.getSession().requestChannelMemberList(this.channelId), e.next = 13, n.pipe(ba((function (e) {
                                        return e.memberInfos.map((function (e) {
                                            return e.account
                                        }))
                                    }))).toPromise();
                                case 13:
                                    return r = e.sent, this.info("Channel %s - get members success, %o", oa(this.channelId), r.map(oa)), e.abrupt("return", r);
                                case 18:
                                    if (e.prev = 18, e.t1 = e.catch(0), !sa(e.t1)) {
                                        e.next = 23;
                                        break
                                    }
                                    throw this.logError(e.t1), e.t1;
                                case 23:
                                    throw new Vc("The channel members get failure", $z);
                                case 24:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[0, 18], [1, 5]])
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "hasOtherChannelJoined", value: function () {
                    var e = this;
                    return !this.getSession().joinedChannels.has(this) && Array.from(this.getSession().joinedChannels).some((function (t) {
                        return t.channelId === e.channelId
                    }))
                }
            }]), t
        }(tb()), fa(ub.prototype, "join", [Nb], Object.getOwnPropertyDescriptor(ub.prototype, "join"), ub.prototype), fa(ub.prototype, "leave", [Nb], Object.getOwnPropertyDescriptor(ub.prototype, "leave"), ub.prototype), fa(ub.prototype, "sendMessage", [Nb], Object.getOwnPropertyDescriptor(ub.prototype, "sendMessage"), ub.prototype), fa(ub.prototype, "getMembers", [La], Object.getOwnPropertyDescriptor(ub.prototype, "getMembers"), ub.prototype), ub),
        z, Eb = S.ConnectionChangeReason, T = S.ConnectionState,
        ls = {DISCONNECTED: 1, CONNECTING: 2, CONNECTED: 3, RECONNECTING: 4, ABORTED: 5}, mD = {
            LOGIN: 1,
            LOGIN_SUCCESS: 2,
            LOGIN_FAILURE: 3,
            LOGIN_TIMEOUT: 4,
            INTERRUPTED: 5,
            LOGOUT: 6,
            BANNED_BY_SERVER: 7,
            REMOTE_LOGIN: 8
        }, nD = (z = function (e) {
            function t(e, i, o, s) {
                X(this, t);
                var a = r.call(this, i, "RtmClient", !0);
                return m(n(a), "connectionState", T.DISCONNECTED), m(n(a), "internalEmitter", new ea), m(n(a), "context", void 0), m(n(a), "attributes", {}), m(n(a), "loginPromise", void 0), m(n(a), "attributeDrafts", new Set), m(n(a), "session", void 0), m(n(a), "lastLoginTime", void 0), m(n(a), "reconnId", 0), m(n(a), "channelAttributesCacheLru", new tc(void 0, {maxlen: 1e4})), m(n(a), "invitationManager", void 0), m(n(a), "subscribedPeerStatusCache", {}), m(n(a), "peerStatusSeqLru", new tc(void 0, {maxlen: 1e4})), m(n(a), "peerUnreachableTimers", {}), m(n(a), "mediaTaskManager", void 0), m(n(a), "setParameters", void 0), m(n(a), "updateConfig", void 0), m(n(a), "userDropHandler", (function (e) {
                    if (a.connectionState !== T.ABORTED) switch (e) {
                        case 11:
                            a.logError("Kicked off by remote session"), a.onConnectionStateChanged(T.ABORTED, Eb.REMOTE_LOGIN);
                            break;
                        case 14:
                        case 15:
                        case 16:
                            a.logError("Server banned because of illegal ".concat({
                                14: "User ID",
                                15: "IP",
                                16: "Channel Name"
                            }[e])), a.onConnectionStateChanged(T.ABORTED, Eb.BANNED_BY_SERVER);
                            break;
                        default:
                            a.logError("User kicked off for unknown code: ".concat(e)), a.onConnectionStateChanged(T.ABORTED, Eb.INTERRUPTED)
                    }
                })), a.context = new YC(e, o, i), a.mediaTaskManager = new cs(i), a.context.config = o, a.internalEmitter.setMaxListeners(512), a.setParameters = s.bind(n(a)), a.updateConfig = s.bind(n(a)), a.invitationManager = new jD((function () {
                    return a.session
                }), i), a.invitationManager.on("remoteInvitationInstance", (function (e) {
                    a.emit("RemoteInvitationReceived", e)
                })), a
            }

            la(t, e);
            var r = ma(t);
            return Ha(t, [{
                key: "renewToken", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i, o = this;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if ("string" == typeof t && 0 !== t.length) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new L("Invalid argument", pA);
                                case 2:
                                    if (this.connectionState !== T.ABORTED) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 5, new Promise((function () {
                                    }));
                                case 5:
                                    if (this.connectionState === T.CONNECTED || this.connectionState === T.RECONNECTING) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new M("The client is not logged in", sA);
                                case 7:
                                    if (void 0 !== this.session) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 9:
                                    return e.prev = 9, n = this.context.token, this.context.token = t, e.next = 14, this.session.connection.apClient.getApEdgeInfo$(!1).pipe(Dd((function () {
                                        return Error("No available edge address to connect")
                                    })), ne((function (e) {
                                        return e.pipe(ca((function (e) {
                                            if (sa(e)) throw e
                                        })), bd(1500), Oa(4))
                                    })), Oa(1), hb(1e4), Ga((function (e) {
                                        return Sa(e) && o.warn("renewToken timed out"), Y(e)
                                    }))).toPromise();
                                case 14:
                                    r = e.sent, i = r.ticket, e.next = 27;
                                    break;
                                case 18:
                                    if (e.prev = 18, e.t0 = e.catch(9), this.context.token = n, e.t0.code !== Yq && e.t0.code !== Zq) {
                                        e.next = 23;
                                        break
                                    }
                                    throw new Xe("Invalid token", rA);
                                case 23:
                                    if (e.t0.code !== Jh) {
                                        e.next = 25;
                                        break
                                    }
                                    throw new Xe("The token expired", qA);
                                case 25:
                                    if (!Sa(e.t0)) {
                                        e.next = 27;
                                        break
                                    }
                                    throw new cb("Renew token timed out", oA);
                                case 27:
                                    this.session.curLoginSockets.filter((function (e) {
                                        return void 0 !== e
                                    })).forEach((function (e) {
                                        return e.ticket = i
                                    }));
                                case 28:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[9, 18]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "queryPeersOnlineStatus", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i = this;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new M("The client is not logged in", nA);
                                case 2:
                                    if (void 0 !== this.session) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 4:
                                    if (!(!Array.isArray(t) || 0 === t.length || t.some((function (e) {
                                        return !za(e)
                                    })) || 256 < t.length)) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new L("invalid arguments", cr);
                                case 6:
                                    return e.next = 8, this.session.requestPeersOnlineStatus(t).toPromise();
                                case 8:
                                    return n = e.sent, r = uc(Ik(n.userInfos, "account"), (function (e) {
                                        return !!e.ts
                                    })), Object.keys(r).forEach((function (e) {
                                        if (e in i.subscribedPeerStatusCache && i.subscribedPeerStatusCache[e] !== S.PeerOnlineState.UNREACHABLE) {
                                            var t = r[e] ? S.PeerOnlineState.ONLINE : S.PeerOnlineState.OFFLINE;
                                            i.emit("PeersOnlineStatusChanged", m({}, e, t)), i.subscribedPeerStatusCache[e] = t
                                        }
                                    })), e.abrupt("return", r);
                                case 12:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getChannelMemberCount", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i, o, s, a, u, c = this;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new M("The client is not logged in", Zz);
                                case 2:
                                    if (void 0 !== this.session) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 4:
                                    if (Array.isArray(t) && t.every((function (e) {
                                        return "string" == typeof e
                                    })) && 0 !== t.length) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new L("Invalid arguments: channelIds", Mq);
                                case 6:
                                    if (!(32 < t.length)) {
                                        e.next = 8;
                                        break
                                    }
                                    throw new L("getChannelMemberCount exceed limit of 32 channelIds", Yz);
                                case 8:
                                    n = 0;
                                case 9:
                                    if (!(n < t.length)) {
                                        e.next = 16;
                                        break
                                    }
                                    if (za(r = t[n])) {
                                        e.next = 13;
                                        break
                                    }
                                    throw new L(["getChannelMemberCount channel id %s is invalid", r], Mq);
                                case 13:
                                    n++, e.next = 9;
                                    break;
                                case 16:
                                    return e.next = 18, this.session.requestGetChannelMemberCount(t).toPromise();
                                case 18:
                                    for (i = e.sent, o = i.groupInfos, s = {}, a = function (e) {
                                        var t = (e = o[e]).group, n = e.memberCount;
                                        za(t) && "number" == typeof n && (c.session.joinedChannels.forEach((function (e) {
                                            e.channelId === t && e.onMemberCountUpdated(n)
                                        })), s[t] = n)
                                    }, u = 0; u < o.length; u++) a(u);
                                    return e.abrupt("return", s);
                                case 24:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setLocalUserAttributes", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (uf({
                                        attributes: t,
                                        maxAttrValueSize: 8192,
                                        maxAttrsCount: 32,
                                        maxTotalSize: 16384
                                    }), this.connectionState === T.CONNECTED) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new M("The client is not logged in", Ub);
                                case 3:
                                    if (void 0 !== this.session) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 5:
                                    return n = this.session.requestSetLocalUserAttributes(t).toPromise(), r = {
                                        attribute: t,
                                        promise: n
                                    }, this.attributeDrafts.add(r), e.prev = 8, e.next = 11, n;
                                case 11:
                                    this.attributes = t, e.next = 19;
                                    break;
                                case 14:
                                    if (e.prev = 14, e.t0 = e.catch(8), !sa(e.t0)) {
                                        e.next = 18;
                                        break
                                    }
                                    throw e.t0;
                                case 18:
                                    throw new L("arguments is not valid", Ja);
                                case 19:
                                    return e.prev = 19, this.attributeDrafts.delete(r), e.finish(19);
                                case 22:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[8, 14, 19, 22]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setChannelAttributes", value: function () {
                    var e = K(x.mark((function e(t, n) {
                        var r, i, o, s, a, u = arguments;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = 2 < u.length && void 0 !== u[2] ? u[2] : {}, i = r.enableNotificationToChannelMembers, o = void 0 !== i && i, uf({
                                        attributes: n,
                                        maxAttrValueSize: 8192,
                                        maxAttrsCount: 32,
                                        maxTotalSize: 32768
                                    }), this.connectionState === T.CONNECTED) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new M("The client is not logged in", Ub);
                                case 4:
                                    if (void 0 !== this.session) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 6:
                                    return s = this.session.requestSetChannelAttributes(t, n, o).toPromise(), e.prev = 7, e.next = 10, s;
                                case 10:
                                    a = uc(n, (function (e) {
                                        return new Blob([e]).size
                                    })), this.channelAttributesCacheLru.set(t, a), e.next = 19;
                                    break;
                                case 14:
                                    if (e.prev = 14, e.t0 = e.catch(7), !sa(e.t0)) {
                                        e.next = 18;
                                        break
                                    }
                                    throw e.t0;
                                case 18:
                                    throw new L("arguments is not valid", Ja);
                                case 19:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[7, 14]])
                    })));
                    return function (t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "addOrUpdateLocalUserAttributes", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = ua(ua({}, this.attributes), t), uf({
                                        attributes: t,
                                        maxAttrValueSize: 8192,
                                        maxAttrsCount: 32,
                                        maxTotalSize: 16384
                                    }), uf({
                                        attributes: n,
                                        maxAttrValueSize: 8192,
                                        maxAttrsCount: 32,
                                        maxTotalSize: 16384
                                    }), this.connectionState === T.CONNECTED) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new M("The client is not logged in", Ub);
                                case 5:
                                    if (void 0 !== this.session) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 7:
                                    return r = this.session.requestAddOrUpdateLocalUserAttributes(t).toPromise(), i = {
                                        attribute: n,
                                        promise: r
                                    }, this.attributeDrafts.add(i), e.prev = 10, e.next = 13, r;
                                case 13:
                                    this.attributes = n, e.next = 21;
                                    break;
                                case 16:
                                    if (e.prev = 16, e.t0 = e.catch(10), !sa(e.t0)) {
                                        e.next = 20;
                                        break
                                    }
                                    throw e.t0;
                                case 20:
                                    throw new L("arguments is not valid", cr);
                                case 21:
                                    return e.prev = 21, this.attributeDrafts.delete(i), e.finish(21);
                                case 24:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[10, 16, 21, 24]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "addOrUpdateChannelAttributes", value: function () {
                    var e = K(x.mark((function e(t, n) {
                        var r, i, o, s, a, u, c, l = arguments;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = 2 < l.length && void 0 !== l[2] ? l[2] : {}, i = r.enableNotificationToChannelMembers, o = void 0 !== i && i, s = this.channelAttributesCacheLru.get(t, {}), a = uc(n, (function (e) {
                                        return new Blob([e]).size
                                    })), u = ua(ua({}, s), a), uf({
                                        attributes: n,
                                        attrSizeMap: u,
                                        maxAttrValueSize: 8192,
                                        maxAttrsCount: 32,
                                        maxTotalSize: 32768
                                    }), this.connectionState === T.CONNECTED) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new M("The client is not logged in", Ub);
                                case 7:
                                    if (void 0 !== this.session) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 9:
                                    return c = this.session.requestAddOrUpdateChannelAttributes(t, n, o).toPromise(), e.prev = 10, e.next = 13, c;
                                case 13:
                                    this.channelAttributesCacheLru.set(t, u), e.next = 21;
                                    break;
                                case 16:
                                    if (e.prev = 16, e.t0 = e.catch(10), !sa(e.t0)) {
                                        e.next = 20;
                                        break
                                    }
                                    throw e.t0;
                                case 20:
                                    throw new L("arguments is not valid", Ja);
                                case 21:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[10, 16]])
                    })));
                    return function (t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "deleteLocalUserAttributesByKeys", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i, o;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (Array.isArray(t) && 0 !== t.length && !t.some((function (e) {
                                        return 0 === e.length
                                    }))) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new M("arguments is not valid", Ja);
                                case 2:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new M("The client is not logged in", Ub);
                                case 4:
                                    if (void 0 !== this.session) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 6:
                                    return n = this.session.requestDeleteLocalUserAttributesByKeys(t).toPromise(), r = {
                                        attribute: Fk(this.attributes, t),
                                        promise: n
                                    }, this.attributeDrafts.add(r), e.prev = 9, e.next = 12, n;
                                case 12:
                                    for (i = 0; i < t.length; i++) o = t[i], delete this.attributes[o];
                                    e.next = 20;
                                    break;
                                case 15:
                                    if (e.prev = 15, e.t0 = e.catch(9), !sa(e.t0)) {
                                        e.next = 19;
                                        break
                                    }
                                    throw e.t0;
                                case 19:
                                    throw new L("arguments is not valid", Ja);
                                case 20:
                                    return e.prev = 20, this.attributeDrafts.delete(r), e.finish(20);
                                case 23:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[9, 15, 20, 23]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "deleteChannelAttributesByKeys", value: function () {
                    var e = K(x.mark((function e(t, n) {
                        var r, i, o, s, a, u, c, l = arguments;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = 2 < l.length && void 0 !== l[2] ? l[2] : {}, i = r.enableNotificationToChannelMembers, o = void 0 !== i && i, Array.isArray(n) && 0 !== n.length && za(t) && !n.some((function (e) {
                                        return 0 === e.length || 512 < e.length
                                    }))) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new M("arguments is not valid", Ja);
                                case 3:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new M("The client is not logged in", Ub);
                                case 5:
                                    if (void 0 !== this.session) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 7:
                                    return s = this.session.requestDeleteChannelAttributesByKeys(t, n, o).toPromise(), e.prev = 8, e.next = 11, s;
                                case 11:
                                    if (a = this.channelAttributesCacheLru.get(t)) for (u = 0; u < n.length; u++) c = n[u], delete a[c];
                                    e.next = 20;
                                    break;
                                case 15:
                                    if (e.prev = 15, e.t0 = e.catch(8), !sa(e.t0)) {
                                        e.next = 19;
                                        break
                                    }
                                    throw e.t0;
                                case 19:
                                    throw new L("arguments is not valid", Ja);
                                case 20:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[8, 15]])
                    })));
                    return function (t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "clearLocalUserAttributes", value: function () {
                    var e = K(x.mark((function e() {
                        var t, n;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new M("The client is not logged in", Ub);
                                case 2:
                                    if (void 0 !== this.session) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 4:
                                    return t = this.session.requestClearLocalUserAttributes().toPromise(), n = {
                                        attribute: {},
                                        promise: t
                                    }, this.attributeDrafts.add(n), e.prev = 7, e.next = 10, t;
                                case 10:
                                    this.attributes = {}, e.next = 18;
                                    break;
                                case 13:
                                    if (e.prev = 13, e.t0 = e.catch(7), !sa(e.t0)) {
                                        e.next = 17;
                                        break
                                    }
                                    throw e.t0;
                                case 17:
                                    throw new L("arguments is not valid", Ja);
                                case 18:
                                    return e.prev = 18, this.attributeDrafts.delete(n), e.finish(18);
                                case 21:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[7, 13, 18, 21]])
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "clearChannelAttributes", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i, o, s = arguments;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = 1 < s.length && void 0 !== s[1] ? s[1] : {}, r = n.enableNotificationToChannelMembers, i = void 0 !== r && r, this.connectionState === T.CONNECTED) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new M("The client is not logged in", Ub);
                                case 3:
                                    if (void 0 !== this.session) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 5:
                                    return o = this.session.requestClearChannelAttributes(t, i).toPromise(), e.prev = 6, e.next = 9, o;
                                case 9:
                                    this.channelAttributesCacheLru.delete(t), e.next = 17;
                                    break;
                                case 12:
                                    if (e.prev = 12, e.t0 = e.catch(6), !sa(e.t0)) {
                                        e.next = 16;
                                        break
                                    }
                                    throw e.t0;
                                case 16:
                                    throw new L("arguments is not valid", Ja);
                                case 17:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[6, 12]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getUserAttributes", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (za(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new L("Not a valid user ID", Ja);
                                case 2:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new M("The client is not logged in", Ub);
                                case 4:
                                    if (void 0 !== this.session) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 6:
                                    return e.prev = 6, e.next = 9, this.session.requestGetUserAttributeKeys(t).toPromise();
                                case 9:
                                    return n = e.sent, r = n.keys, e.next = 13, this.session.requestGetUserAttributesByKeys(t, r.slice(0, 512)).toPromise();
                                case 13:
                                    i = e.sent, e.next = 21;
                                    break;
                                case 16:
                                    if (e.prev = 16, e.t0 = e.catch(6), !sa(e.t0)) {
                                        e.next = 20;
                                        break
                                    }
                                    throw e.t0;
                                case 20:
                                    throw new L("arguments is not valid", Ja);
                                case 21:
                                    return e.abrupt("return", Wp(i.attributeInfos.map((function (e) {
                                        return [e.key, e.value]
                                    }))));
                                case 22:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[6, 16]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getChannelAttributes", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i, o, s, a, u, c, l, f, h;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (za(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new L("Not a valid channel ID", Ja);
                                case 2:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new M("The client is not logged in", Ub);
                                case 4:
                                    if (void 0 !== this.session) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 6:
                                    return e.prev = 6, e.next = 9, this.session.requestGetChannelAttributesKeys(t).toPromise();
                                case 9:
                                    return n = e.sent, r = n.keys, e.next = 13, this.session.requestGetChannelAttributesByKeys(t, r).toPromise();
                                case 13:
                                    i = e.sent, o = i.attributeMaps, e.next = 22;
                                    break;
                                case 17:
                                    if (e.prev = 17, e.t0 = e.catch(6), !sa(e.t0)) {
                                        e.next = 21;
                                        break
                                    }
                                    throw e.t0;
                                case 21:
                                    throw new L("arguments is not valid", Ja);
                                case 22:
                                    s = {}, a = 0;
                                case 24:
                                    if (!(a < o.length)) {
                                        e.next = 32;
                                        break
                                    }
                                    if (u = o[a], c = u.key, l = u.ms, f = u.value, h = u.origin, "string" == typeof c && U.isLong(l) && "string" == typeof f && za(h)) {
                                        e.next = 28;
                                        break
                                    }
                                    return e.abrupt("break", 32);
                                case 28:
                                    s[c] = {value: f, lastUpdateUserId: h, lastUpdateTs: l.toNumber()};
                                case 29:
                                    a++, e.next = 24;
                                    break;
                                case 32:
                                    return this.channelAttributesCacheLru.set(t, uc(s, (function (e) {
                                        return new Blob([e.value]).size
                                    }))), e.abrupt("return", s);
                                case 34:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[6, 17]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getChannelAttributesByKeys", value: function () {
                    var e = K(x.mark((function e(t, n) {
                        var r, i, o, s, a, u, c, l, f, h;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new M("The client is not logged in", Ub);
                                case 2:
                                    if (void 0 !== this.session) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 4:
                                    return Gm(t, n), e.prev = 5, e.next = 8, this.session.requestGetChannelAttributesByKeys(t, n).toPromise();
                                case 8:
                                    r = e.sent, i = r.attributeMaps, e.next = 17;
                                    break;
                                case 12:
                                    if (e.prev = 12, e.t0 = e.catch(5), !sa(e.t0)) {
                                        e.next = 16;
                                        break
                                    }
                                    throw e.t0;
                                case 16:
                                    throw new L("arguments is not valid", Ja);
                                case 17:
                                    o = {}, s = this.channelAttributesCacheLru.get(t, {}), a = 0;
                                case 20:
                                    if (!(a < i.length)) {
                                        e.next = 29;
                                        break
                                    }
                                    if (u = i[a], c = u.key, l = u.ms, f = u.value, h = u.origin, "string" == typeof c && U.isLong(l) && "string" == typeof f && za(h)) {
                                        e.next = 24;
                                        break
                                    }
                                    return e.abrupt("break", 29);
                                case 24:
                                    s[c] = new Blob([f]).size, o[c] = {
                                        value: f,
                                        lastUpdateUserId: h,
                                        lastUpdateTs: l.toNumber()
                                    };
                                case 26:
                                    a++, e.next = 20;
                                    break;
                                case 29:
                                    return this.channelAttributesCacheLru.set(t, s), e.abrupt("return", o);
                                case 31:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[5, 12]])
                    })));
                    return function (t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getUserAttributesByKeys", value: function () {
                    var e = K(x.mark((function e(t, n) {
                        var r;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new M("The client is not logged in", Ub);
                                case 2:
                                    if (void 0 !== this.session) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 4:
                                    return Gm(t, n), e.prev = 5, e.next = 8, this.session.requestGetUserAttributesByKeys(t, n).toPromise();
                                case 8:
                                    r = e.sent, e.next = 16;
                                    break;
                                case 11:
                                    if (e.prev = 11, e.t0 = e.catch(5), !sa(e.t0)) {
                                        e.next = 15;
                                        break
                                    }
                                    throw e.t0;
                                case 15:
                                    throw new L("arguments is not valid", Ja);
                                case 16:
                                    return e.abrupt("return", Wp(r.attributeInfos.map((function (e) {
                                        return [e.key, e.value]
                                    }))));
                                case 17:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[5, 11]])
                    })));
                    return function (t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "login", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i, o = this;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (Tk = !0, n = Bg(), r = t.token, t.token === this.context.appId && (r = void 0), setTimeout((function () {
                                        db("Session", {
                                            appId: o.context.appId,
                                            did: navigator.userAgent,
                                            elapse: eb(o.session && o.session.startTime),
                                            index: {
                                                index1: t.uid,
                                                index2: o.context.appId,
                                                index3: "enableLogUpload=".concat(o.context.config.enableLogUpload)
                                            },
                                            installId: gg,
                                            lts: U.fromNumber(Date.now()),
                                            os: 7,
                                            sid: Xa(n),
                                            token: r || "",
                                            userId: t.uid,
                                            ver: "1.4.3",
                                            buildno: 413,
                                            subVersion: 13,
                                            version: 4
                                        }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0])
                                    }), 6e3), yd(t) && za(t.uid)) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new L("not a valid user id", Ih);
                                case 7:
                                    if ("string" != typeof r || !r) {
                                        e.next = 11;
                                        break
                                    }
                                    this.context.token = r, e.next = 13;
                                    break;
                                case 11:
                                    if ("string" == typeof r || null == r) {
                                        e.next = 13;
                                        break
                                    }
                                    throw new L('The "token" is not a valid string.', Ih);
                                case 13:
                                    return i = Date.now(), this.context.sid = Xa(n), this.loginPromise = this.loginImpl({
                                        uid: t.uid,
                                        instanceId: n
                                    }), this.info("RTM Client logging in as ".concat(oa(t.uid))), e.prev = 17, e.next = 20, this.loginPromise;
                                case 20:
                                    e.next = 27;
                                    break;
                                case 22:
                                    throw e.prev = 22, e.t0 = e.catch(17), sa(e.t0) && db("Link", {
                                        ackedServerIp: "",
                                        destServerIp: "",
                                        ec: e.t0.code || 1,
                                        sc: e.t0.serverCode,
                                        elapse: eb(this.session && this.session.startTime),
                                        lts: U.fromNumber(Date.now()),
                                        responseTime: Date.now() - i,
                                        sid: Xa(n),
                                        userId: t.uid
                                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), this.context.token = void 0, e.t0;
                                case 27:
                                    return e.prev = 27, this.loginPromise = void 0, e.finish(27);
                                case 30:
                                    Tk = !1;
                                case 31:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[17, 22, 27, 30]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "logout", value: function () {
                    var e = K(x.mark((function e() {
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.loginPromise) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, this.loginPromise;
                                case 3:
                                    if (this.connectionState !== T.DISCONNECTED) {
                                        e.next = 6;
                                        break
                                    }
                                    throw this.logError("Already in logout state"), new M("Logout failure. The client has already been logged out", $q);
                                case 6:
                                    if (this.connectionState !== T.ABORTED) {
                                        e.next = 10;
                                        break
                                    }
                                    return this.info('Reset connection state from "ABORTED" to "DISCONNECTED"'), this.onConnectionStateChanged(T.DISCONNECTED, Eb.LOGOUT), e.abrupt("return");
                                case 10:
                                    if (void 0 !== this.session) {
                                        e.next = 13;
                                        break
                                    }
                                    return this.onConnectionStateChanged(T.DISCONNECTED, Eb.LOGOUT), e.abrupt("return");
                                case 13:
                                    return db("Logout", {
                                        elapse: eb(this.session.startTime),
                                        lts: U.fromNumber(Date.now()),
                                        sid: Xa(this.session.instanceId),
                                        userId: this.context.uid
                                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), e.next = 16, this.session.logoutHandler();
                                case 16:
                                    this.onConnectionStateChanged(T.DISCONNECTED, Eb.LOGOUT), this.log("Log out success");
                                case 18:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "logoutSync", value: function () {
                    var e = this;
                    if (this.connectionState === T.DISCONNECTED) throw this.logError("Already in logout state"), new M("Logout failure. The client has already been logged out", $q);
                    this.connectionState === T.ABORTED ? this.info('Reset connection state from "ABORTED" to "DISCONNECTED"') : void 0 !== this.session && (db("Logout", {
                        elapse: eb(this.session.startTime),
                        lts: U.fromNumber(Date.now()),
                        sid: Xa(this.session.instanceId),
                        userId: this.context.uid
                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), this.session.logoutHandler().then((function () {
                        e.log("Log out success")
                    }))), this.onConnectionStateChanged(T.DISCONNECTED, Eb.LOGOUT)
                }
            }, {
                key: "sendMessageToPeer", value: function () {
                    var e = K(x.mark((function e(t, n) {
                        var r, i, o, s, a, u, c = this, l = arguments;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = 2 < l.length && void 0 !== l[2] ? l[2] : {}, i = r.enableOfflineMessaging, o = void 0 !== i && i, s = r.enableHistoricalMessaging, a = void 0 !== s && s, Sm(t, ue), this.connectionState !== T.RECONNECTING) {
                                        e.next = 5;
                                        break
                                    }
                                    return u = Date.now(), e.abrupt("return", new Promise((function (e, r) {
                                        var i = function () {
                                            var i = K(x.mark((function i() {
                                                var l;
                                                return x.wrap((function (i) {
                                                    for (; ;) switch (i.prev = i.next) {
                                                        case 0:
                                                            if (void 0 !== c.session) {
                                                                i.next = 2;
                                                                break
                                                            }
                                                            throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                                        case 2:
                                                            return l = Date.now() - u, i.prev = 3, i.t0 = e, i.next = 7, Fg({
                                                                message: t,
                                                                peerId: n,
                                                                toPeer: !0,
                                                                session: c.session,
                                                                errorCodes: {NOT_LOGGED_IN: $k, TOO_OFTEN: br},
                                                                diff: l,
                                                                logger: c.logger,
                                                                options: {
                                                                    enableHistoricalMessaging: a,
                                                                    enableOfflineMessaging: o
                                                                }
                                                            });
                                                        case 7:
                                                            i.t1 = i.sent, (0, i.t0)(i.t1), i.next = 16;
                                                            break;
                                                        case 11:
                                                            i.prev = 11, i.t2 = i.catch(3), Sa(i.t2) && r(new cb(Yd(c.name, "sendMessageToPeer", 1e4), Yk)), sa(i.t2) && r(i.t2), r(new da("Peer-to-peer message send failure", {
                                                                code: ar,
                                                                originalError: i.t2
                                                            }));
                                                        case 16:
                                                            return i.prev = 16, clearTimeout(s), i.finish(16);
                                                        case 19:
                                                        case"end":
                                                            return i.stop()
                                                    }
                                                }), i, null, [[3, 11, 16, 19]])
                                            })));
                                            return function () {
                                                return i.apply(this, arguments)
                                            }
                                        }();
                                        c.internalEmitter.once("RECONNECTED", i);
                                        var s = setTimeout((function () {
                                            c.internalEmitter.off("RECONNECTED", i), r(new cb(Yd(c.name, "sendMessageToPeer", 1e4), Yk))
                                        }), 9e3)
                                    })));
                                case 5:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new M("Failed to send the peer-to-peer message. The client is not logged in", $k);
                                case 7:
                                    if (void 0 !== this.session) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 9:
                                    return e.prev = 9, e.next = 12, Fg({
                                        message: t,
                                        peerId: n,
                                        toPeer: !0,
                                        session: this.session,
                                        errorCodes: {NOT_LOGGED_IN: $k, TOO_OFTEN: br},
                                        diff: 0,
                                        logger: this.logger,
                                        options: {enableHistoricalMessaging: a, enableOfflineMessaging: o}
                                    });
                                case 12:
                                    return e.abrupt("return", e.sent);
                                case 15:
                                    if (e.prev = 15, e.t0 = e.catch(9), !Sa(e.t0)) {
                                        e.next = 19;
                                        break
                                    }
                                    throw new cb(Yd(this.name, "sendMessageToPeer", 1e4), Yk);
                                case 19:
                                    if (!sa(e.t0)) {
                                        e.next = 21;
                                        break
                                    }
                                    throw e.t0;
                                case 21:
                                    throw new da("Peer-to-peer message send failure", {code: ar, originalError: e.t0});
                                case 22:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[9, 15]])
                    })));
                    return function (t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "createChannel", value: function (e) {
                    var t = this;
                    if (!za(e)) throw new L(["The %s in the arguments is invalid", Object.keys({channelId: e})[0]], Xz);
                    return new lD(e, (function () {
                        return t.session
                    }), this, this.logger)
                }
            }, {
                key: "createLocalInvitation", value: function (e) {
                    if (!za(e)) throw new L(["The %s in the arguments is invalid", Object.keys({calleeId: e})[0]], xc);
                    return this.invitationManager.genLocalInvitation(e)
                }
            }, {
                key: "subscribePeersOnlineStatus", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i, o, s, a, u, c, l, f, h, p, d, v = this;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new M("The client is not logged in", al);
                                case 2:
                                    if (void 0 !== this.session) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 4:
                                    if (Array.isArray(t) && 0 !== t.length) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new L("Invalid arguments: peerIds", kg);
                                case 6:
                                    n = 0;
                                case 7:
                                    if (!(n < t.length)) {
                                        e.next = 14;
                                        break
                                    }
                                    if (za(r = t[n])) {
                                        e.next = 11;
                                        break
                                    }
                                    throw new L(["subscribePeersOnlineStatus peer id %s is invalid", r], kg);
                                case 11:
                                    n++, e.next = 7;
                                    break;
                                case 14:
                                    if (!(512 < (i = t && t.length ? uk(t) : []).length + Object.keys(this.subscribedPeerStatusCache).length)) {
                                        e.next = 17;
                                        break
                                    }
                                    throw new ib("Subscribed peers overflows", er);
                                case 17:
                                    return e.next = 19, this.session.requestSubscribePeersOnlineStatus(i).toPromise();
                                case 19:
                                    o = e.sent, s = o.errors, a = [], u = [], c = 0;
                                case 24:
                                    if (!(c < s.length)) {
                                        e.next = 32;
                                        break
                                    }
                                    if (l = s[c], f = l.code, "string" == typeof (h = l.account)) {
                                        e.next = 28;
                                        break
                                    }
                                    throw new da("Returned account is invalid", dr);
                                case 28:
                                    0 !== f && a.push(h);
                                case 29:
                                    c++, e.next = 24;
                                    break;
                                case 32:
                                    for (p = 0; p < i.length; p++) d = i[p], a.includes(d) || (u.push(d), this.subscribedPeerStatusCache[d] = void 0);
                                    if (this.session.requestPeersOnlineStatus(u).pipe(ba((function (e) {
                                        return uc(Ik(e.userInfos, "account"), (function (e) {
                                            return !!e.ts
                                        }))
                                    }))).subscribe((function (e) {
                                        e = uc(e, (function (e, t) {
                                            return e = e ? S.PeerOnlineState.ONLINE : S.PeerOnlineState.OFFLINE, v.subscribedPeerStatusCache[t] = e
                                        })), v.emit("PeersOnlineStatusChanged", e)
                                    })), 0 === a.length) {
                                        e.next = 36;
                                        break
                                    }
                                    throw new da("Subscription failed", dr);
                                case 36:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "unsubscribePeersOnlineStatus", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i, o, s;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new M("The client is not logged in", al);
                                case 2:
                                    if (void 0 !== this.session) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 4:
                                    if (Array.isArray(t) && 0 !== t.length) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new L("Invalid arguments: peerIds", kg);
                                case 6:
                                    n = 0;
                                case 7:
                                    if (!(n < t.length)) {
                                        e.next = 14;
                                        break
                                    }
                                    if (za(r = t[n])) {
                                        e.next = 11;
                                        break
                                    }
                                    throw new L(["subscribePeersOnlineStatus peer id %s is invalid", r], kg);
                                case 11:
                                    n++, e.next = 7;
                                    break;
                                case 14:
                                    if (!(512 < t.length)) {
                                        e.next = 16;
                                        break
                                    }
                                    throw new ib("Unsubscribed peers overflows", er);
                                case 16:
                                    for (i = t && t.length ? uk(t) : [], this.session.requestUnsubscribePeersOnlineStatus(i), o = 0; o < i.length; o++) s = i[o], delete this.subscribedPeerStatusCache[s];
                                case 19:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "queryPeersBySubscriptionOption", value: function () {
                    var e = K(x.mark((function e(t) {
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new M("The client is not logged in", al);
                                case 2:
                                    if (t !== S.PeerSubscriptionOption.ONLINE_STATUS) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", Object.keys(this.subscribedPeerStatusCache));
                                case 4:
                                    throw new L("Subscription option not supported", kg);
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "createMessage", value: function (e) {
                    return "IMAGE" === e.messageType ? ua({
                        width: 0,
                        height: 0,
                        fileName: "",
                        description: "",
                        thumbnail: new Blob,
                        thumbnailWidth: 0,
                        thumbnailHeight: 0,
                        size: 0
                    }, e) : "FILE" === e.messageType ? ua({
                        fileName: "",
                        description: "",
                        thumbnail: new Blob,
                        size: 0
                    }, e) : e
                }
            }, {
                key: "downloadMedia", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i, o, s, a, u, c, l, f, h, p, d, v, b = this, g = arguments;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = 1 < g.length && void 0 !== g[1] ? g[1] : {}, "string" == typeof t) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new L("invalid mediaId format", bl);
                                case 3:
                                    if (e.prev = 3, r = t.split("z"), i = ra(r, 3), o = i[0], s = i[1], a = i[2], u = o.slice(1, 65), c = aD(u), l = parseInt(o.slice(65), 10), f = parseInt(s, 10), h = parseInt(a, 10), !(Number.isNaN(l) || Number.isNaN(f) || Number.isNaN(h))) {
                                        e.next = 12;
                                        break
                                    }
                                    throw new L("Invalid mediaId content", bl);
                                case 12:
                                    e.next = 19;
                                    break;
                                case 14:
                                    if (e.prev = 14, e.t0 = e.catch(3), !sa(e.t0)) {
                                        e.next = 18;
                                        break
                                    }
                                    throw e.t0;
                                case 18:
                                    throw new L("parse mediaId failure", {code: bl, originalError: e.t0});
                                case 19:
                                    if (this.connectionState === T.CONNECTED) {
                                        e.next = 21;
                                        break
                                    }
                                    throw new M("The client is not logged in, cannot download", AA);
                                case 21:
                                    if (void 0 !== this.session) {
                                        e.next = 23;
                                        break
                                    }
                                    throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                case 23:
                                    return p = this.mediaTaskManager.addDownloadTask({
                                        unit: f,
                                        zone: l,
                                        hashHexStr: u,
                                        size: h
                                    }, (function () {
                                        if (void 0 === b.session) throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                        return b.session.requestFileDownloadIndexGet({
                                            hash: c,
                                            zone: l,
                                            unit: f,
                                            size: h
                                        }).toPromise()
                                    }), n), e.next = 26, this.mediaTaskManager.waitMediaTask(p);
                                case 26:
                                    return d = e.sent, v = d.payload, e.abrupt("return", v);
                                case 29:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[3, 14]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "createMediaMessageByUploading", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i, o, s, a, u, c, l, f, h, p, d, v, b, g, y, E, m, w, _, O, I, A, R = this, k = arguments;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = 1 < k.length && void 0 !== k[1] ? k[1] : {}, r = 2 < k.length && void 0 !== k[2] ? k[2] : {}, yd(n)) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new L("Invalid params", wf);
                                case 4:
                                    if (i = "thumbnailWidth" in n || "thumbnailHeight" in n || "width" in n || "height" in n, o = n.messageType, s = void 0 === o ? i ? "IMAGE" : "FILE" : o, a = n.description, u = void 0 === a ? "" : a, c = n.fileName, l = void 0 === c ? "" : c, f = n.thumbnail, "string" == typeof n.messageType && "string" == typeof u && "string" == typeof l && (Om(f) || void 0 === f) && Om(t)) {
                                        e.next = 8;
                                        break
                                    }
                                    throw new L("Invalid message params type", wf);
                                case 8:
                                    if (!i || "FILE" !== s) {
                                        e.next = 10;
                                        break
                                    }
                                    throw new L("Invalid message params, unexpected field in RtmFileMessage", wf);
                                case 10:
                                    if (!(33554432 < (h = t.size))) {
                                        e.next = 13;
                                        break
                                    }
                                    throw new ib("The payload size overflow 32 MB", uA);
                                case 13:
                                    return e.next = 15, Ii(t);
                                case 15:
                                    return p = e.sent, e.next = 18, $C(p);
                                case 18:
                                    if (d = e.sent, this.connectionState === T.CONNECTED) {
                                        e.next = 21;
                                        break
                                    }
                                    throw new M("The client is not logged in", wA);
                                case 21:
                                    if ("IMAGE" !== s) {
                                        e.next = 29;
                                        break
                                    }
                                    return e.next = 24, Vt(n, p);
                                case 24:
                                    v = e.sent, b = v.height, g = v.width, y = v.thumbnailWidth, E = v.thumbnailHeight;
                                case 29:
                                    return m = this.mediaTaskManager.addUploadTask({
                                        file: new Uint8Array(p),
                                        hash: d
                                    }, (function () {
                                        if (void 0 === R.session) throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                        return R.session.fetchFileUploadIndexGet({hash: d, size: h})
                                    }), (function (e, t) {
                                        if (void 0 === R.session) throw new Fa({SESSION_NOT_FOUND: "Failed to get session of the client"});
                                        return R.session.requestFileUploadIndexSet({
                                            hash: d,
                                            unit: e,
                                            servers: t
                                        }).toPromise()
                                    }), r), e.next = 32, this.mediaTaskManager.waitMediaTask(m);
                                case 32:
                                    if (w = e.sent, _ = w.zone, O = w.retUnit, "IMAGE" !== s) {
                                        e.next = 38;
                                        break
                                    }
                                    return I = {
                                        height: b,
                                        width: g,
                                        fileName: l,
                                        size: h,
                                        description: u,
                                        thumbnail: f,
                                        messageType: s,
                                        thumbnailWidth: y,
                                        thumbnailHeight: E,
                                        mediaId: "0".concat(Xr(d)).concat(_, "z").concat(O, "z").concat(h, "z").concat(b, "z").concat(g)
                                    }, e.abrupt("return", I);
                                case 38:
                                    return A = {
                                        fileName: l,
                                        size: h,
                                        description: u,
                                        mediaId: "0".concat(Xr(d)).concat(_, "z").concat(O, "z").concat(h),
                                        thumbnail: f,
                                        messageType: s
                                    }, e.abrupt("return", A);
                                case 40:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "loginImpl", value: function () {
                    var e = K(x.mark((function e(t) {
                        var n, r, i, o, s = this;
                        return x.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.uid, r = t.instanceId, !(void 0 !== this.lastLoginTime && 500 > Date.now() - this.lastLoginTime)) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new qC(["The frequency of login exceeded the limit of %d queries per second", 2], kA);
                                case 4:
                                    if (this.connectionState === T.DISCONNECTED) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new M("The SDK is either logging in or has logged in the Agora RTM system", iA);
                                case 6:
                                    e.prev = 6, this.context.uid = n, e.next = 13;
                                    break;
                                case 10:
                                    throw e.prev = 10, e.t0 = e.catch(6), new L(["The %s in the arguments is invalid", Object.keys({uid: n})[0]], Ih);
                                case 13:
                                    return this.onConnectionStateChanged(T.CONNECTING, Eb.LOGIN), this.session = i = new is(this.context, new Vr(this.context, this.logger, !1), r, this.logger), o = function () {
                                        s.connectionState === T.CONNECTED && (s.onConnectionStateChanged(T.RECONNECTING, Eb.INTERRUPTED), s.session) && s.session.once("userJoined", (function () {
                                            s.onConnectionStateChanged(T.CONNECTED, Eb.LOGIN_SUCCESS)
                                        }))
                                    }, i.on("connectionLost", o), i.on("tokenExpired", (function () {
                                        s.emit("TokenExpired")
                                    })), i.once("userDrop", this.userDropHandler), this.session.on("peerTextMessage", (function (e) {
                                        s.emit("MessageFromPeer", {
                                            text: e.text,
                                            messageType: S.MessageType.TEXT
                                        }, e.peerId, e.properties)
                                    })), this.session.on("peerMediaMessage", (function (e) {
                                        var t = e.peerId, n = e.properties, r = e.messageType;
                                        e = e.details, "FILE" === r ? s.emit("MessageFromPeer", {
                                            messageType: S.MessageType.FILE,
                                            size: parseInt(pa(e.media_size), 10),
                                            description: pa(e.media_description),
                                            fileName: pa(e.media_filename),
                                            mediaId: pa(e.media_id),
                                            thumbnail: new Blob([e.media_thumbnail])
                                        }, t, n) : "IMAGE" === r && s.emit("MessageFromPeer", {
                                            messageType: S.MessageType.IMAGE,
                                            size: parseInt(pa(e.media_size), 10),
                                            description: pa(e.media_description),
                                            fileName: pa(e.media_filename),
                                            mediaId: pa(e.media_id),
                                            thumbnail: new Blob([e.media_thumbnail]),
                                            height: parseInt(pa(e.media_height), 10),
                                            width: parseInt(pa(e.media_width), 10),
                                            thumbnailHeight: parseInt(pa(e.media_thumbnailheight), 10),
                                            thumbnailWidth: parseInt(pa(e.media_thumbnailwidth), 10)
                                        }, t, n)
                                    })), this.session.on("peerRawMessage", (function (e) {
                                        s.emit("MessageFromPeer", {
                                            rawMessage: e.raw,
                                            description: e.desc,
                                            messageType: S.MessageType.RAW
                                        }, e.peerId, e.properties)
                                    })), i.on("instanceChanged", (function (e) {
                                        return r = e
                                    })), i.on("peerOnlineStatusChanged", (function (e) {
                                        var t = e.instance.toString() + e.state, n = s.peerStatusSeqLru.get(t);
                                        !n || e.seq.greaterThan(n) ? (s.peerStatusSeqLru.set(t, e.seq), e.state !== s.subscribedPeerStatusCache[e.peerId] && s.emit("PeersOnlineStatusChanged", m({}, e.peerId, e.state)), s.subscribedPeerStatusCache[e.peerId] = e.state, clearTimeout(s.peerUnreachableTimers[t]), e.state === S.PeerOnlineState.UNREACHABLE && (s.peerUnreachableTimers[t] = setTimeout((function () {
                                            s.subscribedPeerStatusCache[e.peerId] === S.PeerOnlineState.UNREACHABLE && (s.subscribedPeerStatusCache[e.peerId] = S.PeerOnlineState.ONLINE, s.emit("PeersOnlineStatusChanged", m({}, e.peerId, S.PeerOnlineState.ONLINE)))
                                        }), 3e4))) : s.log("peerOnlineStatusChanged dedup for %s, %d", t, e.seq.toNumber())
                                    })), i.on("invitationMessage", this.invitationManager.invitationMessageHandler.bind(this.invitationManager)), i.on("channelAttributesUpdated", (function (e) {
                                        var t = e.channelId;
                                        e = e.attributeMaps;
                                        for (var n = {}, r = 0; r < e.length; r++) {
                                            var i = e[r], o = i.key, a = i.ms, u = i.value;
                                            if (i = i.origin, "string" != typeof o || !U.isLong(a) || "string" != typeof u || !za(i)) break;
                                            n[o] = new Blob([u]).size
                                        }
                                        s.channelAttributesCacheLru.set(t, n)
                                    })), i.on("userJoined", (function (e) {
                                        if (0 !== Object.keys(s.attributes).length) {
                                            if (void 0 === s.session) return;
                                            s.session.requestSetLocalUserAttributes(s.attributes, e).toPromise()
                                        }
                                        if (0 !== s.attributeDrafts.size) for (var t = function (t, n) {
                                            var r = (t = n[t]).attribute;
                                            t.promise.then((function () {
                                                void 0 !== s.session && s.session.requestSetLocalUserAttributes(r, e).toPromise()
                                            }))
                                        }, n = 0, r = Array.from(s.attributeDrafts); n < r.length; n++) t(n, r);
                                        0 !== Object.keys(s.subscribedPeerStatusCache).length && i.requestSubscribePeersOnlineStatus(Object.keys(s.subscribedPeerStatusCache))
                                    })), this.lastLoginTime = Date.now(), e.prev = 29, e.next = 32, i.loginHandler().toPromise();
                                case 32:
                                    this.mediaTaskManager.setAuthInfo({
                                        ticket: i.connection.curOpenSockets.filter((function (e) {
                                            return void 0 !== e
                                        }))[0].ticket,
                                        instance: i.instanceId,
                                        useNewDomain: .5 <= Math.random(),
                                        loginOpt: i.userJoinOptions.toLong()
                                    }), e.next = 44;
                                    break;
                                case 35:
                                    if (e.prev = 35, e.t1 = e.catch(29), !Sa(e.t1)) {
                                        e.next = 40;
                                        break
                                    }
                                    throw this.onConnectionStateChanged(T.DISCONNECTED, Eb.LOGIN_TIMEOUT), new cb(Yd(this.name, "login", 1e4), jA);
                                case 40:
                                    if (this.onConnectionStateChanged(T.DISCONNECTED, Eb.LOGIN_FAILURE), !sa(e.t1)) {
                                        e.next = 43;
                                        break
                                    }
                                    throw e.t1;
                                case 43:
                                    throw new da("Login failure", {code: Xq, originalError: e.t1});
                                case 44:
                                    this.onConnectionStateChanged(T.CONNECTED, Eb.LOGIN_SUCCESS);
                                case 45:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this, [[6, 10], [29, 35]])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onConnectionStateChanged", value: function (e, t) {
                    var n = this;
                    e === T.RECONNECTING && (this.reconnId += 1), db("ConnectionStateChange", {
                        elapse: eb(this.session && this.session.startTime),
                        lts: U.fromNumber(Date.now()),
                        newState: ls[e],
                        oldState: ls[this.connectionState],
                        reason: mD[t],
                        sid: Xa(this.session && this.session.instanceId || U.fromNumber(0)),
                        userId: this.context.uid,
                        reconnId: this.reconnId
                    }, null == y ? void 0 : y.EVENT_REPORT_DOMAIN[0], null == y ? void 0 : y.EVENT_REPORT_BACKUP_DOMAIN[0]), this.connectionState === T.RECONNECTING && e === T.CONNECTED && (0 !== Object.keys(this.subscribedPeerStatusCache).length && void 0 !== this.session && this.session.requestPeersOnlineStatus(Object.keys(this.subscribedPeerStatusCache)).pipe(ba((function (e) {
                        return uc(Ik(e.userInfos, "account"), (function (e) {
                            return !!e.ts
                        }))
                    }))).subscribe((function (e) {
                        e = uc(e, (function (e, t) {
                            return e = e ? S.PeerOnlineState.ONLINE : S.PeerOnlineState.OFFLINE, n.subscribedPeerStatusCache[t] = e
                        })), n.emit("PeersOnlineStatusChanged", e)
                    })), this.internalEmitter.emit("RECONNECTED")), this.connectionState = e, e !== T.ABORTED && e !== T.DISCONNECTED || (this.reconnId = 0, this.attributes = {}, this.session && (this.session.removeAllListeners(), this.session.joinedChannels.clear(), this.session.msgDedupLru.empty(), this.session.dialogueSequenceLru.empty(), this.session.dialPendingMsgSubjectMap.clear()), this.session = void 0, this.channelAttributesCacheLru.empty(), this.peerStatusSeqLru.empty(), this.peerUnreachableTimers = {}, this.subscribedPeerStatusCache = {}, this.attributeDrafts.clear(), this.context.token = void 0), this.mediaTaskManager.emit("connectionStateChanged", e), this.emit("ConnectionStateChanged", e, t)
                }
            }]), t
        }(tb()), fa(z.prototype, "renewToken", [La], Object.getOwnPropertyDescriptor(z.prototype, "renewToken"), z.prototype), fa(z.prototype, "queryPeersOnlineStatus", [La], Object.getOwnPropertyDescriptor(z.prototype, "queryPeersOnlineStatus"), z.prototype), fa(z.prototype, "getChannelMemberCount", [La], Object.getOwnPropertyDescriptor(z.prototype, "getChannelMemberCount"), z.prototype), fa(z.prototype, "setLocalUserAttributes", [La], Object.getOwnPropertyDescriptor(z.prototype, "setLocalUserAttributes"), z.prototype), fa(z.prototype, "setChannelAttributes", [La], Object.getOwnPropertyDescriptor(z.prototype, "setChannelAttributes"), z.prototype), fa(z.prototype, "addOrUpdateLocalUserAttributes", [La], Object.getOwnPropertyDescriptor(z.prototype, "addOrUpdateLocalUserAttributes"), z.prototype), fa(z.prototype, "addOrUpdateChannelAttributes", [La], Object.getOwnPropertyDescriptor(z.prototype, "addOrUpdateChannelAttributes"), z.prototype), fa(z.prototype, "deleteLocalUserAttributesByKeys", [La], Object.getOwnPropertyDescriptor(z.prototype, "deleteLocalUserAttributesByKeys"), z.prototype), fa(z.prototype, "deleteChannelAttributesByKeys", [La], Object.getOwnPropertyDescriptor(z.prototype, "deleteChannelAttributesByKeys"), z.prototype), fa(z.prototype, "clearLocalUserAttributes", [Nb], Object.getOwnPropertyDescriptor(z.prototype, "clearLocalUserAttributes"), z.prototype), fa(z.prototype, "clearChannelAttributes", [La], Object.getOwnPropertyDescriptor(z.prototype, "clearChannelAttributes"), z.prototype), fa(z.prototype, "getUserAttributes", [La], Object.getOwnPropertyDescriptor(z.prototype, "getUserAttributes"), z.prototype), fa(z.prototype, "getChannelAttributes", [La], Object.getOwnPropertyDescriptor(z.prototype, "getChannelAttributes"), z.prototype), fa(z.prototype, "getChannelAttributesByKeys", [La], Object.getOwnPropertyDescriptor(z.prototype, "getChannelAttributesByKeys"), z.prototype), fa(z.prototype, "getUserAttributesByKeys", [La], Object.getOwnPropertyDescriptor(z.prototype, "getUserAttributesByKeys"), z.prototype), fa(z.prototype, "login", [Nb], Object.getOwnPropertyDescriptor(z.prototype, "login"), z.prototype), fa(z.prototype, "logout", [Nb], Object.getOwnPropertyDescriptor(z.prototype, "logout"), z.prototype), fa(z.prototype, "logoutSync", [Nb], Object.getOwnPropertyDescriptor(z.prototype, "logoutSync"), z.prototype), fa(z.prototype, "sendMessageToPeer", [La], Object.getOwnPropertyDescriptor(z.prototype, "sendMessageToPeer"), z.prototype), fa(z.prototype, "createChannel", [La], Object.getOwnPropertyDescriptor(z.prototype, "createChannel"), z.prototype), fa(z.prototype, "createLocalInvitation", [La], Object.getOwnPropertyDescriptor(z.prototype, "createLocalInvitation"), z.prototype), fa(z.prototype, "subscribePeersOnlineStatus", [La], Object.getOwnPropertyDescriptor(z.prototype, "subscribePeersOnlineStatus"), z.prototype), fa(z.prototype, "unsubscribePeersOnlineStatus", [La], Object.getOwnPropertyDescriptor(z.prototype, "unsubscribePeersOnlineStatus"), z.prototype), fa(z.prototype, "queryPeersBySubscriptionOption", [La], Object.getOwnPropertyDescriptor(z.prototype, "queryPeersBySubscriptionOption"), z.prototype), fa(z.prototype, "createMessage", [Nb], Object.getOwnPropertyDescriptor(z.prototype, "createMessage"), z.prototype), fa(z.prototype, "downloadMedia", [Nb], Object.getOwnPropertyDescriptor(z.prototype, "downloadMedia"), z.prototype), fa(z.prototype, "createMediaMessageByUploading", [Nb], Object.getOwnPropertyDescriptor(z.prototype, "createMediaMessageByUploading"), z.prototype), z),
        ms = {
            LOG_FILTER_OFF: {error: !1, warn: !1, info: !1, track: !1, debug: !1},
            LOG_FILTER_ERROR: {error: !0, warn: !1, info: !1, track: !1, debug: !1},
            LOG_FILTER_WARNING: {error: !0, warn: !0, info: !1, track: !1, debug: !1},
            LOG_FILTER_INFO: {error: !0, warn: !0, info: !0, track: !1, debug: !1},
            LOG_FILTER_DEBUG: {error: !0, warn: !0, info: !0, track: !0, debug: !0}
        }, ns = {enableLogUpload: !1, logFilter: ms.LOG_FILTER_INFO, enableCloudProxy: !1}, Zd = ua(ua({
            createInstance: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = 2 < arguments.length ? arguments[2] : void 0;
                if (!/^[\dA-Za-z]{32}$/.test(e)) throw new L(["The %s in the arguments is invalid", Object.keys({appId: e})[0]], Lq);
                var r = Object.keys(t).filter((function (e) {
                    return !(e in ns)
                }));
                if (0 !== r.length) throw new L("Invalid RTM config: ".concat(r.join(", ")), Lq);
                var i = ua(ua({}, ns), t);
                if (void 0 !== n && (!Array.isArray(n) || 0 === n.length)) throw new L("Invalid area config");
                if (null != n) {
                    if (!n.every((function (e) {
                        return e in S.LegacyAreaCode
                    }))) throw new L("Invalid area codes: ".concat(n.filter((function (e) {
                        return !(e in S)
                    })).join(", ")));
                    y = xe(n.map((function (e) {
                        return LC[e]
                    })))
                }
                n = il = Ya.__global_unique_id__ = (Ya.__global_unique_id__ || 0) + 1;
                var o = zC(i);
                r = AC(i);
                var s = BC(i), a = CC(n, i), u = Or(n, i), c = u("RTM:DEBUG", "<Entry> ");
                return o("The Agora RTM Web SDK version is %s", "1.4.3"), t.enableCloudProxy && o("RTM cloud proxy enabled"), t.enableLogUpload && o("Log upload enabled"), y && c("Area is set to %s", Array.from(y.CODES).map((function (e) {
                    return xf(C).find((function (t) {
                        return C[t] === e
                    }))
                })).join(", ")), c("Creating an RtmClient instance"), c('The Git commit ID is "'.concat("v1.4.3-0-gc918e772", '"')), c("The App ID is %s", Tm(e, 4, 10, "*".repeat(6))), o("The process ID is %s", gg), c("The build is %s", "v1.4.3-0-gc918e772"), c("NODE_ENV is %s", "production"), new nD(e, {
                    genLogger: u,
                    genTracker: a,
                    info: o,
                    warn: r,
                    logError: s,
                    loggerId: n
                }, i, (function (e) {
                    for (var t = 0, n = xf(e); t < n.length; t++) {
                        var r = n[t];
                        try {
                            var s = e[r];
                            null != s && (e.enableCloudProxy && o("RTM cloud proxy enabled"), e.enableLogUpload && o("Log upload enabled"), i[r] = s)
                        } catch (e) {
                            throw new L(["The %s in the arguments is invalid", r], void 0)
                        }
                    }
                }))
            },
            BUILD: "v1.4.3-0-gc918e772",
            VERSION: "1.4.3",
            END_CALL_PREFIX: "AgoraRTMLegacyEndcallCompatibleMessagePrefix",
            processId: gg,
            ConnectionChangeReason: S.ConnectionChangeReason,
            ConnectionState: S.ConnectionState,
            LocalInvitationFailureReason: S.LocalInvitationFailureReason,
            LocalInvitationState: S.LocalInvitationState,
            RemoteInvitationFailureReason: S.RemoteInvitationFailureReason,
            RemoteInvitationState: S.RemoteInvitationState,
            MessageType: S.MessageType,
            PeerOnlineState: S.PeerOnlineState,
            PeerSubscriptionOption: S.PeerSubscriptionOption
        }, ms), {}, {
            setParameter: function (e, t) {
                Object.keys(od).includes(e) && (od[e] = t)
            }, getParameter: function (e) {
                return od[e]
            }, setArea: function (e) {
                var t = e.areaCodes;
                if (e = e.excludedArea, !Array.isArray(t) || 0 === t.length || !t.every((function (e) {
                    return e in S.AreaCode
                }))) throw new L("Invalid area config");
                if (void 0 !== e && e === S.AreaCode.GLOBAL) throw new L("Excluded area cannot be global");
                if (void 0 === e) y = xe(t.map((function (e) {
                    return C[e]
                }))); else {
                    if (t.includes(e)) throw new L("Excluded area cannot be in areaCodes");
                    if (!(e in C)) throw new L("Invalid excludedArea:", e);
                    y = bu({
                        areas: t.map((function (e) {
                            return C[e]
                        })), excludedArea: C[e]
                    })
                }
            }
        });
    return Zd
}));
