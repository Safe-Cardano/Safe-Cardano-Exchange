window.Modernizr = function(t, e, i) {
        function n(t) {
            v.cssText = t
        }

        function s(t, e) {
            return n(C.join(t + ";") + (e || ""))
        }

        function o(t, e) {
            return typeof t === e
        }

        function r(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function a(t, e) {
            for (var n in t) {
                var s = t[n];
                if (!r(s, "-") && v[s] !== i) return "pfx" != e || s
            }
            return !1
        }

        function l(t, e, n) {
            for (var s in t) {
                var r = e[t[s]];
                if (r !== i) return !1 === n ? t[s] : o(r, "function") ? r.bind(n || e) : r
            }
            return !1
        }

        function h(t, e, i) {
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                s = (t + " " + x.join(n + " ") + n).split(" ");
            return o(e, "string") || o(e, "undefined") ? a(s, e) : (s = (t + " " + S.join(n + " ") + n).split(" "), l(s, e, i))
        }

        function c() {
            d.input = function(i) {
                for (var n = 0, s = i.length; n < s; n++) O[i[n]] = i[n] in y;
                return O.list && (O.list = !!e.createElement("datalist") && !!t.HTMLDataListElement), O
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), d.inputtypes = function(t) {
                for (var n = 0, s, o, r, a = t.length; n < a; n++) y.setAttribute("type", o = t[n]), s = "text" !== y.type, s && (y.value = _, y.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && y.style.WebkitAppearance !== i ? (g.appendChild(y), r = e.defaultView, s = r.getComputedStyle && "textfield" !== r.getComputedStyle(y, null).WebkitAppearance && 0 !== y.offsetHeight, g.removeChild(y)) : /^(search|tel)$/.test(o) || (s = /^(url|email)$/.test(o) ? y.checkValidity && !1 === y.checkValidity() : y.value != _)), D[t[n]] = !!s;
                return D
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var u = "2.8.3",
            d = {},
            f = !0,
            g = e.documentElement,
            p = "modernizr",
            m = e.createElement(p),
            v = m.style,
            y = e.createElement("input"),
            _ = ":)",
            w = {}.toString,
            C = " -webkit- -moz- -o- -ms- ".split(" "),
            b = "Webkit Moz O ms",
            x = b.split(" "),
            S = b.toLowerCase().split(" "),
            k = {
                svg: "http://www.w3.org/2000/svg"
            },
            M = {},
            D = {},
            O = {},
            T = [],
            P = T.slice,
            Y, E = function(t, i, n, s) {
                var o, r, a, l, h = e.createElement("div"),
                    c = e.body,
                    u = c || e.createElement("body");
                if (parseInt(n, 10))
                    for (; n--;) a = e.createElement("div"), a.id = s ? s[n] : p + (n + 1), h.appendChild(a);
                return o = ["&#173;", '<style id="s', p, '">', t, "</style>"].join(""), h.id = p, (c ? h : u).innerHTML += o, u.appendChild(h), c || (u.style.background = "", u.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(u)), r = i(h, t), c ? h.parentNode.removeChild(h) : (u.parentNode.removeChild(u), g.style.overflow = l), !!r
            },
            z = function(e) {
                var i = t.matchMedia || t.msMatchMedia;
                if (i) return i(e) && i(e).matches || !1;
                var n;
                return E("@media " + e + " { #" + p + " { position: absolute; } }", function(e) {
                    n = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                }), n
            },
            W = function() {
                function t(t, s) {
                    s = s || e.createElement(n[t] || "div"), t = "on" + t;
                    var r = t in s;
                    return r || (s.setAttribute || (s = e.createElement("div")), s.setAttribute && s.removeAttribute && (s.setAttribute(t, ""), r = o(s[t], "function"), o(s[t], "undefined") || (s[t] = i), s.removeAttribute(t))), s = null, r
                }
                var n = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return t
            }(),
            R = {}.hasOwnProperty,
            j;
        j = o(R, "undefined") || o(R.call, "undefined") ? function(t, e) {
            return e in t && o(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return R.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var i = P.call(arguments, 1),
                n = function() {
                    if (this instanceof n) {
                        var s = function() {};
                        s.prototype = e.prototype;
                        var o = new s,
                            r = e.apply(o, i.concat(P.call(arguments)));
                        return Object(r) === r ? r : o
                    }
                    return e.apply(t, i.concat(P.call(arguments)))
                };
            return n
        }), M.flexbox = function() {
            return h("flexWrap")
        }, M.canvas = function() {
            var t = e.createElement("canvas");
            return !!t.getContext && !!t.getContext("2d")
        }, M.canvastext = function() {
            return !!d.canvas && !!o(e.createElement("canvas").getContext("2d").fillText, "function")
        }, M.webgl = function() {
            return !!t.WebGLRenderingContext
        }, M.touch = function() {
            var i;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : E(["@media (", C.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                i = 9 === t.offsetTop
            }), i
        }, M.geolocation = function() {
            return "geolocation" in navigator
        }, M.postmessage = function() {
            return !!t.postMessage
        }, M.websqldatabase = function() {
            return !!t.openDatabase
        }, M.indexedDB = function() {
            return !!h("indexedDB", t)
        }, M.hashchange = function() {
            return W("hashchange", t) && (e.documentMode === i || e.documentMode > 7)
        }, M.history = function() {
            return !!t.history && !!history.pushState
        }, M.draganddrop = function() {
            var t = e.createElement("div");
            return "draggable" in t || "ondragstart" in t && "ondrop" in t
        }, M.websockets = function() {
            return "WebSocket" in t || "MozWebSocket" in t
        }, M.rgba = function() {
            return n("background-color:rgba(150,255,150,.5)"), r(v.backgroundColor, "rgba")
        }, M.hsla = function() {
            return n("background-color:hsla(120,40%,100%,.5)"), r(v.backgroundColor, "rgba") || r(v.backgroundColor, "hsla")
        }, M.multiplebgs = function() {
            return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(v.background)
        }, M.backgroundsize = function() {
            return h("backgroundSize")
        }, M.borderimage = function() {
            return h("borderImage")
        }, M.borderradius = function() {
            return h("borderRadius")
        }, M.boxshadow = function() {
            return h("boxShadow")
        }, M.textshadow = function() {
            return "" === e.createElement("div").style.textShadow
        }, M.opacity = function() {
            return s("opacity:.55"), /^0.55$/.test(v.opacity)
        }, M.cssanimations = function() {
            return h("animationName")
        }, M.csscolumns = function() {
            return h("columnCount")
        }, M.cssgradients = function() {
            var t = "background-image:";
            return n((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + C.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)), r(v.backgroundImage, "gradient")
        }, M.cssreflections = function() {
            return h("boxReflect")
        }, M.csstransforms = function() {
            return !!h("transform")
        }, M.csstransforms3d = function() {
            var t = !!h("perspective");
            return t && "webkitPerspective" in g.style && E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, i) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, M.csstransitions = function() {
            return h("transition")
        }, M.fontface = function() {
            var t;
            return E('@font-face {font-family:"font";src:url("https://")}', function(i, n) {
                var s = e.getElementById("smodernizr"),
                    o = s.sheet || s.styleSheet,
                    r = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
                t = /src/i.test(r) && 0 === r.indexOf(n.split(" ")[0])
            }), t
        }, M.generatedcontent = function() {
            var t;
            return E(["#", p, "{font:0/0 a}#", p, ':after{content:"', _, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
                t = e.offsetHeight >= 3
            }), t
        }, M.video = function() {
            var t = e.createElement("video"),
                i = !1;
            try {
                (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (t) {}
            return i
        }, M.audio = function() {
            var t = e.createElement("audio"),
                i = !1;
            try {
                (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (t) {}
            return i
        }, M.localstorage = function() {
            try {
                return localStorage.setItem(p, p), localStorage.removeItem(p), !0
            } catch (t) {
                return !1
            }
        }, M.sessionstorage = function() {
            try {
                return sessionStorage.setItem(p, p), sessionStorage.removeItem(p), !0
            } catch (t) {
                return !1
            }
        }, M.webworkers = function() {
            return !!t.Worker
        }, M.applicationcache = function() {
            return !!t.applicationCache
        }, M.svg = function() {
            return !!e.createElementNS && !!e.createElementNS(k.svg, "svg").createSVGRect
        }, M.inlinesvg = function() {
            var t = e.createElement("div");
            return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == k.svg
        }, M.smil = function() {
            return !!e.createElementNS && /SVGAnimate/.test(w.call(e.createElementNS(k.svg, "animate")))
        }, M.svgclippaths = function() {
            return !!e.createElementNS && /SVGClipPath/.test(w.call(e.createElementNS(k.svg, "clipPath")))
        };
        for (var H in M) j(M, H) && (Y = H.toLowerCase(), d[Y] = M[H](), T.push((d[Y] ? "" : "no-") + Y));
        return d.input || c(), d.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var n in t) j(t, n) && d.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), d[t] !== i) return d;
                    e = "function" == typeof e ? e() : e, g.className += " " + (e ? "" : "no-") + t, d[t] = e
                }
                return d
            }, n(""), m = y = null,
            function(t, e) {
                function i(t, e) {
                    var i = t.createElement("p"),
                        n = t.getElementsByTagName("head")[0] || t.documentElement;
                    return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                }

                function n() {
                    var t = y.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function s(t) {
                    var e = m[t[g]];
                    return e || (e = {}, p++, t[g] = p, m[p] = e), e
                }

                function o(t, i, n) {
                    if (i || (i = e), v) return i.createElement(t);
                    n || (n = s(i));
                    var o;
                    return o = n.cache[t] ? n.cache[t].cloneNode() : d.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), !o.canHaveChildren || u.test(t) || o.tagUrn ? o : n.frag.appendChild(o)
                }

                function r(t, i) {
                    if (t || (t = e), v) return t.createDocumentFragment();
                    i = i || s(t);
                    for (var o = i.frag.cloneNode(), r = 0, a = n(), l = a.length; r < l; r++) o.createElement(a[r]);
                    return o
                }

                function a(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
                        return y.shivMethods ? o(i, t, e) : e.createElem(i)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(y, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var n = s(t);
                    return y.shivCSS && !f && !n.hasCSS && (n.hasCSS = !!i(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), v || a(t, n), t
                }
                var h = "3.7.0",
                    c = t.html5 || {},
                    u = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    p = 0,
                    m = {},
                    v;
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", f = "hidden" in t, v = 1 == t.childNodes.length || function() {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                        }()
                    } catch (t) {
                        f = !0, v = !0
                    }
                }();
                var y = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: h,
                    shivCSS: !1 !== c.shivCSS,
                    supportsUnknownElements: v,
                    shivMethods: !1 !== c.shivMethods,
                    type: "default",
                    shivDocument: l,
                    createElement: o,
                    createDocumentFragment: r
                };
                t.html5 = y, l(e)
            }(this, e), d._version = u, d._prefixes = C, d._domPrefixes = S, d._cssomPrefixes = x, d.mq = z, d.hasEvent = W, d.testProp = function(t) {
                return a([t])
            }, d.testAllProps = h, d.testStyles = E, d.prefixed = function(t, e, i) {
                return e ? h(t, e, i) : h(t, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + T.join(" "), d
    }(this, this.document),
    function(t, e, i) {
        function n(t) {
            return "[object Function]" == g.call(t)
        }

        function s(t) {
            return "string" == typeof t
        }

        function o() {}

        function r(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function a() {
            var t = p.shift();
            m = 1, t ? t.t ? d(function() {
                ("c" == t.t ? D.injectCss : D.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), a()) : m = 0
        }

        function l(t, i, n, s, o, l, h) {
            function c(e) {
                if (!g && r(u.readyState) && (w.r = g = 1, !m && a(), u.onload = u.onreadystatechange = null, e)) {
                    "img" != t && d(function() {
                        _.removeChild(u)
                    }, 50);
                    for (var n in S[i]) S[i].hasOwnProperty(n) && S[i][n].onload()
                }
            }
            var h = h || D.errorTimeout,
                u = e.createElement(t),
                g = 0,
                v = 0,
                w = {
                    t: n,
                    s: i,
                    e: o,
                    a: l,
                    x: h
                };
            1 === S[i] && (v = 1, S[i] = []), "object" == t ? u.data = i : (u.src = i, u.type = t), u.width = u.height = "0", u.onerror = u.onload = u.onreadystatechange = function() {
                c.call(this, v)
            }, p.splice(s, 0, w), "img" != t && (v || 2 === S[i] ? (_.insertBefore(u, y ? null : f), d(c, h)) : S[i].push(u))
        }

        function h(t, e, i, n, o) {
            return m = 0, e = e || "j", s(t) ? l("c" == e ? C : w, t, e, this.i++, i, n, o) : (p.splice(this.i++, 0, t), 1 == p.length && a()), this
        }

        function c() {
            var t = D;
            return t.loader = {
                load: h,
                i: 0
            }, t
        }
        var u = e.documentElement,
            d = t.setTimeout,
            f = e.getElementsByTagName("script")[0],
            g = {}.toString,
            p = [],
            m = 0,
            v = "MozAppearance" in u.style,
            y = v && !!e.createRange().compareNode,
            _ = y ? u : f.parentNode,
            u = t.opera && "[object Opera]" == g.call(t.opera),
            u = !!e.attachEvent && !u,
            w = v ? "object" : u ? "script" : "img",
            C = u ? "script" : w,
            b = Array.isArray || function(t) {
                return "[object Array]" == g.call(t)
            },
            x = [],
            S = {},
            k = {
                timeout: function(t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            },
            M, D;
        D = function(t) {
            function e(t) {
                var t = t.split("!"),
                    e = x.length,
                    i = t.pop(),

                    n = t.length,
                    i = {
                        url: i,
                        origUrl: i,
                        prefixes: t
                    },
                    s, o, r;
                for (o = 0; o < n; o++) r = t[o].split("="), (s = k[r.shift()]) && (i = s(i, r));
                for (o = 0; o < e; o++) i = x[o](i);
                return i
            }

            function r(t, s, o, r, a) {
                var l = e(t),
                    h = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (s && (s = n(s) ? s : s[t] || s[r] || s[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, s, o, r, a) : (S[l.url] ? l.noexec = !0 : S[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (n(s) || n(h)) && o.load(function() {
                    c(), s && s(l.origUrl, a, r), h && h(l.origUrl, a, r), S[l.url] = 2
                })))
            }

            function a(t, e) {
                function i(t, i) {
                    if (t) {
                        if (s(t)) i || (h = function() {
                            var t = [].slice.call(arguments);
                            c.apply(this, t), u()
                        }), r(t, h, e, 0, a);
                        else if (Object(t) === t)
                            for (f in d = function() {
                                    var e = 0,
                                        i;
                                    for (i in t) t.hasOwnProperty(i) && e++;
                                    return e
                                }(), t) t.hasOwnProperty(f) && (!i && !--d && (n(h) ? h = function() {
                                var t = [].slice.call(arguments);
                                c.apply(this, t), u()
                            } : h[f] = function(t) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), u()
                                }
                            }(c[f])), r(t[f], h, e, f, a))
                    } else !i && u()
                }
                var a = !!t.test,
                    l = t.load || t.both,
                    h = t.callback || o,
                    c = h,
                    u = t.complete || o,
                    d, f;
                i(a ? t.yep : t.nope, !!l), l && i(l)
            }
            var l, h, u = this.yepnope.loader;
            if (s(t)) r(t, 0, u, 0);
            else if (b(t))
                for (l = 0; l < t.length; l++) h = t[l], s(h) ? r(h, 0, u, 0) : b(h) ? D(h) : Object(h) === h && a(h, u);
            else Object(t) === t && a(t, u)
        }, D.addPrefix = function(t, e) {
            k[t] = e
        }, D.addFilter = function(t) {
            x.push(t)
        }, D.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", M = function() {
            e.removeEventListener("DOMContentLoaded", M, 0), e.readyState = "complete"
        }, 0)), t.yepnope = c(), t.yepnope.executeStack = a, t.yepnope.injectJs = function(t, i, n, s, l, h) {
            var c = e.createElement("script"),
                u, g, s = s || D.errorTimeout;
            c.src = t;
            for (g in n) c.setAttribute(g, n[g]);
            i = h ? a : i || o, c.onreadystatechange = c.onload = function() {
                !u && r(c.readyState) && (u = 1, i(), c.onload = c.onreadystatechange = null)
            }, d(function() {
                u || (u = 1, i(1))
            }, s), l ? c.onload() : f.parentNode.insertBefore(c, f)
        }, t.yepnope.injectCss = function(t, i, n, s, r, l) {
            var s = e.createElement("link"),
                h, i = l ? a : i || o;
            s.href = t, s.rel = "stylesheet", s.type = "text/css";
            for (h in n) s.setAttribute(h, n[h]);
            r || (f.parentNode.insertBefore(s, f), d(i, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(t) {
        "object" == typeof exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = {},
            i = Math.max,
            n = Math.min;
        e.c = {}, e.c.d = t(document), e.c.t = function(t) {
            return t.originalEvent.touches.length - 1
        }, e.o = function() {
            var i = this;
            this.o = null, this.$ = null, this.i = null, this.g = null, this.v = null, this.cv = null, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.$c = null, this.c = null, this.t = 0, this.isInit = !1, this.fgColor = null, this.pColor = null, this.dH = null, this.cH = null, this.eH = null, this.rH = null, this.scale = 1, this.relative = !1, this.relativeWidth = !1, this.relativeHeight = !1, this.$div = null, this.run = function() {
                var e = function(t, e) {
                    var n;
                    for (n in e) i.o[n] = e[n];
                    i._carve().init(), i._configure()._draw()
                };
                if (!this.$.data("kontroled")) {
                    if (this.$.data("kontroled", !0), this.extend(), this.o = t.extend({
                            min: void 0 !== this.$.data("min") ? this.$.data("min") : 0,
                            max: void 0 !== this.$.data("max") ? this.$.data("max") : 100,
                            stopper: !0,
                            readOnly: this.$.data("readonly") || "readonly" === this.$.attr("readonly"),
                            cursor: !0 === this.$.data("cursor") && 30 || this.$.data("cursor") || 0,
                            thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
                            lineCap: this.$.data("linecap") || "butt",
                            width: this.$.data("width") || 200,
                            height: this.$.data("height") || 200,
                            displayInput: null == this.$.data("displayinput") || this.$.data("displayinput"),
                            displayPrevious: this.$.data("displayprevious"),
                            fgColor: this.$.data("fgcolor") || "#87CEEB",
                            inputColor: this.$.data("inputcolor"),
                            font: this.$.data("font") || "Arial",
                            fontWeight: this.$.data("font-weight") || "bold",
                            inline: !1,
                            step: this.$.data("step") || 1,
                            rotation: this.$.data("rotation"),
                            draw: null,
                            change: null,
                            cancel: null,
                            release: null,
                            format: function(t) {
                                return t
                            },
                            parse: function(t) {
                                return parseFloat(t)
                            }
                        }, this.o), this.o.flip = "anticlockwise" === this.o.rotation || "acw" === this.o.rotation, this.o.inputColor || (this.o.inputColor = this.o.fgColor), this.$.is("fieldset") ? (this.v = {}, this.i = this.$.find("input"), this.i.each(function(e) {
                            var n = t(this);
                            i.i[e] = n, i.v[e] = i.o.parse(n.val()), n.bind("change blur", function() {
                                var t = {};
                                t[e] = n.val(), i.val(i._validate(t))
                            })
                        }), this.$.find("legend").remove()) : (this.i = this.$, this.v = this.o.parse(this.$.val()), "" === this.v && (this.v = this.o.min), this.$.bind("change blur", function() {
                            i.val(i._validate(i.o.parse(i.$.val())))
                        })), !this.o.displayInput && this.$.hide(), this.$c = t(document.createElement("canvas")).attr({
                            width: this.o.width,
                            height: this.o.height
                        }), this.$div = t('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>'), this.$.wrap(this.$div).before(this.$c), this.$div = this.$.parent(), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(this.$c[0]), this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null, !this.c) throw {
                        name: "CanvasNotSupportedException",
                        message: "Canvas not supported. Please use excanvas on IE8.0.",
                        toString: function() {
                            return this.name + ": " + this.message
                        }
                    };
                    return this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1), this.relativeWidth = this.o.width % 1 != 0 && this.o.width.indexOf("%"), this.relativeHeight = this.o.height % 1 != 0 && this.o.height.indexOf("%"), this.relative = this.relativeWidth || this.relativeHeight, this._carve(), this.v instanceof Object ? (this.cv = {}, this.copy(this.v, this.cv)) : this.cv = this.v, this.$.bind("configure", e).parent().bind("configure", e), this._listen()._configure()._xy().init(), this.isInit = !0, this.$.val(this.o.format(this.v)), this._draw(), this
                }
            }, this._carve = function() {
                if (this.relative) {
                    var t = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
                        e = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
                    this.w = this.h = Math.min(t, e)
                } else this.w = this.o.width, this.h = this.o.height;
                return this.$div.css({
                    width: this.w + "px",
                    height: this.h + "px"
                }), this.$c.attr({
                    width: this.w,
                    height: this.h
                }), 1 !== this.scale && (this.$c[0].width = this.$c[0].width * this.scale, this.$c[0].height = this.$c[0].height * this.scale, this.$c.width(this.w), this.$c.height(this.h)), this
            }, this._draw = function() {
                var t = !0;
                i.g = i.c, i.clear(), i.dH && (t = i.dH()), !1 !== t && i.draw()
            }, this._touch = function(t) {
                var n = function(t) {
                    var e = i.xy2val(t.originalEvent.touches[i.t].pageX, t.originalEvent.touches[i.t].pageY);
                    e != i.cv && (i.cH && !1 === i.cH(e) || (i.change(i._validate(e)), i._draw()))
                };
                return this.t = e.c.t(t), n(t), e.c.d.bind("touchmove.k", n).bind("touchend.k", function() {
                    e.c.d.unbind("touchmove.k touchend.k"), i.val(i.cv)
                }), this
            }, this._mouse = function(t) {
                var n = function(t) {
                    var e = i.xy2val(t.pageX, t.pageY);
                    e != i.cv && (i.cH && !1 === i.cH(e) || (i.change(i._validate(e)), i._draw()))
                };
                return n(t), e.c.d.bind("mousemove.k", n).bind("keyup.k", function(t) {
                    if (27 === t.keyCode) {
                        if (e.c.d.unbind("mouseup.k mousemove.k keyup.k"), i.eH && !1 === i.eH()) return;
                        i.cancel()
                    }
                }).bind("mouseup.k", function(t) {
                    e.c.d.unbind("mousemove.k mouseup.k keyup.k"), i.val(i.cv)
                }), this
            }, this._xy = function() {
                var t = this.$c.offset();
                return this.x = t.left, this.y = t.top, this
            }, this._listen = function() {
                return this.o.readOnly ? this.$.attr("readonly", "readonly") : (this.$c.bind("mousedown", function(t) {
                    t.preventDefault(), i._xy()._mouse(t)
                }).bind("touchstart", function(t) {
                    t.preventDefault(), i._xy()._touch(t)
                }), this.listen()), this.relative && t(window).resize(t.debounce(50, function() {
                    i._carve().init(), i._draw()
                })), this
            }, this._configure = function() {
                return this.o.draw && (this.dH = this.o.draw), this.o.change && (this.cH = this.o.change), this.o.cancel && (this.eH = this.o.cancel), this.o.release && (this.rH = this.o.release), this.o.displayPrevious ? (this.pColor = this.h2rgba(this.o.fgColor, "0.4"), this.fgColor = this.h2rgba(this.o.fgColor, "0.6")) : this.fgColor = this.o.fgColor, this
            }, this._clear = function() {
                this.$c[0].width = this.$c[0].width
            }, this._validate = function(t) {
                var e = ~~((t < 0 ? -.5 : .5) + t / this.o.step) * this.o.step;
                return Math.round(100 * e) / 100
            }, this.listen = function() {}, this.extend = function() {}, this.init = function() {}, this.change = function(t) {}, this.val = function(t) {}, this.xy2val = function(t, e) {}, this.draw = function() {}, this.clear = function() {
                this._clear()
            }, this.h2rgba = function(t, e) {
                var i;
                return t = t.substring(1, 7), i = [parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)], "rgba(" + i[0] + "," + i[1] + "," + i[2] + "," + e + ")"
            }, this.copy = function(t, e) {
                for (var i in t) e[i] = t[i]
            }
        }, e.Dial = function() {
            e.o.call(this), this.startAngle = null, this.xy = null, this.radius = null, this.lineWidth = null, this.cursorExt = null, this.w2 = null, this.PI2 = 2 * Math.PI, this.extend = function() {
                this.o = t.extend({
                    bgColor: this.$.data("bgcolor") || "#EEEEEE",
                    angleOffset: this.$.data("angleoffset") || 0,
                    angleArc: this.$.data("anglearc") || 360,
                    inline: !0
                }, this.o)
            }, this.val = function(t, e) {
                if (null == t) return this.v;
                t = this.o.parse(t), !1 !== e && t != this.v && this.rH && !1 === this.rH(t) || (this.cv = this.o.stopper ? i(n(t, this.o.max), this.o.min) : t, this.v = this.cv, this.$.val(this.o.format(this.v)), this._draw())
            }, this.xy2val = function(t, e) {
                var s, o;
                return s = Math.atan2(t - (this.x + this.w2), -(e - this.y - this.w2)) - this.angleOffset, this.o.flip && (s = this.angleArc - s - this.PI2), this.angleArc != this.PI2 && s < 0 && s > -.5 ? s = 0 : s < 0 && (s += this.PI2), o = s * (this.o.max - this.o.min) / this.angleArc + this.o.min, this.o.stopper && (o = i(n(o, this.o.max), this.o.min)), o
            }, this.listen = function() {
                var e = this,
                    s, o, r = function(t) {
                        t.preventDefault();
                        var r = t.originalEvent,
                            a = r.detail || r.wheelDeltaX,
                            l = r.detail || r.wheelDeltaY,
                            h = e._validate(e.o.parse(e.$.val())) + (a > 0 || l > 0 ? e.o.step : a < 0 || l < 0 ? -e.o.step : 0);
                        h = i(n(h, e.o.max), e.o.min), e.val(h, !1), e.rH && (clearTimeout(s), s = setTimeout(function() {
                            e.rH(h), s = null
                        }, 100), o || (o = setTimeout(function() {
                            s && e.rH(h), o = null
                        }, 200)))
                    },
                    a, l, h = 1,
                    c = {
                        37: -e.o.step,
                        38: e.o.step,
                        39: e.o.step,
                        40: -e.o.step
                    };
                this.$.bind("keydown", function(s) {
                    var o = s.keyCode;
                    if (o >= 96 && o <= 105 && (o = s.keyCode = o - 48), a = parseInt(String.fromCharCode(o)), isNaN(a) && (13 !== o && 8 !== o && 9 !== o && 189 !== o && (190 !== o || e.$.val().match(/\./)) && s.preventDefault(), t.inArray(o, [37, 38, 39, 40]) > -1)) {
                        s.preventDefault();
                        var r = e.o.parse(e.$.val()) + c[o] * h;
                        e.o.stopper && (r = i(n(r, e.o.max), e.o.min)), e.change(e._validate(r)), e._draw(), l = window.setTimeout(function() {
                            h *= 2
                        }, 30)
                    }
                }).bind("keyup", function(t) {
                    isNaN(a) ? l && (window.clearTimeout(l), l = null, h = 1, e.val(e.$.val())) : e.$.val() > e.o.max && e.$.val(e.o.max) || e.$.val() < e.o.min && e.$.val(e.o.min)
                }), this.$c.bind("mousewheel DOMMouseScroll", r), this.$.bind("mousewheel DOMMouseScroll", r)
            }, this.init = function() {
                (this.v < this.o.min || this.v > this.o.max) && (this.v = this.o.min), this.$.val(this.v), this.w2 = this.w / 2, this.cursorExt = this.o.cursor / 100, this.xy = this.w2 * this.scale, this.lineWidth = this.xy * this.o.thickness, this.lineCap = this.o.lineCap, this.radius = this.xy - this.lineWidth / 2, this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset), this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc), this.angleOffset = this.o.angleOffset * Math.PI / 180, this.angleArc = this.o.angleArc * Math.PI / 180, this.startAngle = 1.5 * Math.PI + this.angleOffset, this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
                var t = i(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
                this.o.displayInput && this.i.css({
                    width: (this.w / 2 + 4 >> 0) + "px",
                    height: (this.w / 3 >> 0) + "px",
                    position: "absolute",
                    "vertical-align": "middle",
                    "margin-top": (this.w / 3 >> 0) + "px",
                    "margin-left": "-" + (3 * this.w / 4 + 2 >> 0) + "px",
                    border: 0,
                    background: "none",
                    font: this.o.fontWeight + " " + (this.w / t >> 0) + "px " + this.o.font,
                    "text-align": "center",
                    color: this.o.inputColor || this.o.fgColor,
                    padding: "0px",
                    "-webkit-appearance": "none"
                }) || this.i.css({
                    width: "0px",
                    visibility: "hidden"
                })
            }, this.change = function(t) {
                this.cv = t, this.$.val(this.o.format(t))
            }, this.angle = function(t) {
                return (t - this.o.min) * this.angleArc / (this.o.max - this.o.min)
            }, this.arc = function(t) {
                var e, i;
                return t = this.angle(t), this.o.flip ? (e = this.endAngle + 1e-5, i = e - t - 1e-5) : (e = this.startAngle - 1e-5, i = e + t + 1e-5), this.o.cursor && (e = i - this.cursorExt) && (i += this.cursorExt), {
                    s: e,
                    e: i,
                    d: this.o.flip && !this.o.cursor
                }
            }, this.draw = function() {
                var t = this.g,
                    e = this.arc(this.cv),
                    i, n = 1;
                t.lineWidth = this.lineWidth, t.lineCap = this.lineCap, "none" !== this.o.bgColor && (t.beginPath(), t.strokeStyle = this.o.bgColor, t.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, !0), t.stroke()), this.o.displayPrevious && (i = this.arc(this.v), t.beginPath(), t.strokeStyle = this.pColor, t.arc(this.xy, this.xy, this.radius, i.s, i.e, i.d), t.stroke(), n = this.cv == this.v), t.beginPath(), t.strokeStyle = n ? this.o.fgColor : this.fgColor, t.arc(this.xy, this.xy, this.radius, e.s, e.e, e.d), t.stroke()
            }, this.cancel = function() {
                this.val(this.v)
            }
        }, t.fn.dial = t.fn.knob = function(i) {
            return this.each(function() {
                var n = new e.Dial;
                n.o = i, n.$ = t(this), n.run()
            }).parent()
        }
    }),
    function(t, e) {
        var $ = t.jQuery || t.Cowboy || (t.Cowboy = {}),
            i;
        $.throttle = i = function(t, i, n, s) {
            function o() {
                function o() {
                    a = +new Date, n.apply(h, u)
                }

                function l() {
                    r = e
                }
                var h = this,
                    c = +new Date - a,
                    u = arguments;
                s && !r && o(), r && clearTimeout(r), s === e && c > t ? o() : !0 !== i && (r = setTimeout(s ? l : o, s === e ? t - c : t))
            }
            var r, a = 0;
            return "boolean" != typeof i && (s = n, n = i, i = e), $.guid && (o.guid = n.guid = n.guid || $.guid++), o
        }, $.debounce = function(t, n, s) {
            return s === e ? i(t, n, !1) : i(t, s, !1 !== n)
        }
    }(this),
    function(t) {
        t.fn.ClassyCountdown = function(e, i) {
            function n() {
                l = Math.floor(d / 86400), h = Math.floor(d % 86400 / 3600), c = Math.floor(d % 86400 % 3600 / 60), u = Math.floor(d % 86400 % 3600 % 60 % 60)
            }

            function s() {
                d--, n(), 0 >= d && (f || (f = !0, g.onEndCallback()), u = c = h = l = 0), a.find(".ClassyCountdown-days input").val(365 - l).trigger("change"), a.find(".ClassyCountdown-hours input").val(24 - h).trigger("change"), a.find(".ClassyCountdown-minutes input").val(60 - c).trigger("change"), a.find(".ClassyCountdown-seconds input").val(60 - u).trigger("change"), a.find(".ClassyCountdown-days .ClassyCountdown-value > div").html(l), a.find(".ClassyCountdown-hours .ClassyCountdown-value > div").html(h), a.find(".ClassyCountdown-minutes .ClassyCountdown-value > div").html(c), a.find(".ClassyCountdown-seconds .ClassyCountdown-value > div").html(u)
            }

            function o() {
                a.find(".ClassyCountdown-wrapper > div").each(function() {
                    t(this).css("height", t(this).width() + "px")
                }), g.style.textResponsive && a.find(".ClassyCountdown-value").css("font-size", Math.floor(a.find("> div").eq(0).width() * g.style.textResponsive / 10) + "px"), a.find(".ClassyCountdown-value").each(function() {
                    t(this).css("margin-top", Math.floor(0 - parseInt(t(this).height()) / 2) + "px")
                }), a.find(".ClassyCountdown-days input").trigger("change"), a.find(".ClassyCountdown-hours input").trigger("change"), a.find(".ClassyCountdown-minutes input").trigger("change"), a.find(".ClassyCountdown-seconds input").trigger("change")
            }

            function r(t) {
                switch (t) {
                    case "flat-colors":
                        return {
                            labels: !0,
                            style: {
                                element: "",
                                textResponsive: .5,
                                days: {
                                    gauge: {
                                        thickness: .01,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#1abc9c"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                hours: {
                                    gauge: {
                                        thickness: .01,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#2980b9"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                minutes: {
                                    gauge: {
                                        thickness: .01,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#8e44ad"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                seconds: {
                                    gauge: {
                                        thickness: .01,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#f39c12"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                }
                            }
                        };
                    case "flat-colors-wide":
                        return {
                            labels: !0,
                            style: {
                                element: "",
                                textResponsive: .5,
                                days: {
                                    gauge: {
                                        thickness: .03,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#1abc9c"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                hours: {
                                    gauge: {
                                        thickness: .03,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#2980b9"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                minutes: {
                                    gauge: {
                                        thickness: .03,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#8e44ad"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                seconds: {
                                    gauge: {
                                        thickness: .03,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#f39c12"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                }
                            }
                        };
                    case "flat-colors-very-wide":
                        return {
                            labels: !0,
                            style: {
                                element: "",
                                textResponsive: .5,
                                days: {
                                    gauge: {
                                        thickness: .12,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#1abc9c"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                hours: {
                                    gauge: {
                                        thickness: .12,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#2980b9"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                minutes: {
                                    gauge: {
                                        thickness: .12,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#8e44ad"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                seconds: {
                                    gauge: {
                                        thickness: .12,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#f39c12"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                }
                            }
                        };
                    case "flat-colors-black":
                        return {
                            labels: !0,
                            style: {
                                element: "",
                                textResponsive: .5,
                                days: {
                                    gauge: {
                                        thickness: .25,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#1abc9c",
                                        lineCap: "round"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                hours: {
                                    gauge: {
                                        thickness: .25,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#2980b9",
                                        lineCap: "round"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                minutes: {
                                    gauge: {
                                        thickness: .25,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#8e44ad",
                                        lineCap: "round"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                seconds: {
                                    gauge: {
                                        thickness: .25,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#f39c12",
                                        lineCap: "round"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                }
                            }
                        };
                    case "black":
                        return {
                            labels: !0,
                            style: {
                                element: "",
                                textResponsive: .5,
                                days: {
                                    gauge: {
                                        thickness: .01,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                hours: {
                                    gauge: {
                                        thickness: .01,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                minutes: {
                                    gauge: {
                                        thickness: .01,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                seconds: {
                                    gauge: {
                                        thickness: .01,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                }
                            }
                        };
                    case "black-wide":
                        return {
                            labels: !0,
                            style: {
                                element: "",
                                textResponsive: .5,
                                days: {
                                    gauge: {
                                        thickness: .03,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                hours: {
                                    gauge: {
                                        thickness: .03,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                minutes: {
                                    gauge: {
                                        thickness: .03,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                seconds: {
                                    gauge: {
                                        thickness: .03,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                }
                            }
                        };
                    case "black-very-wide":
                        return {
                            labels: !0,
                            style: {
                                element: "",
                                textResponsive: .5,
                                days: {
                                    gauge: {
                                        thickness: .17,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                hours: {
                                    gauge: {
                                        thickness: .17,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                minutes: {
                                    gauge: {
                                        thickness: .17,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                seconds: {
                                    gauge: {
                                        thickness: .17,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                }
                            }
                        };
                    case "black-black":
                        return {
                            labels: !0,
                            style: {
                                element: "",
                                textResponsive: .5,
                                days: {
                                    gauge: {
                                        thickness: .25,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222",
                                        lineCap: "round"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                hours: {
                                    gauge: {
                                        thickness: .25,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222",
                                        lineCap: "round"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                minutes: {
                                    gauge: {
                                        thickness: .25,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222",
                                        lineCap: "round"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                },
                                seconds: {
                                    gauge: {
                                        thickness: .25,
                                        bgColor: "rgba(0,0,0,0.05)",
                                        fgColor: "#222",
                                        lineCap: "round"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#34495e;"
                                }
                            }
                        };
                    case "white":
                        return {
                            labels: !0,
                            style: {
                                element: "",
                                textResponsive: .5,
                                days: {
                                    gauge: {
                                        thickness: .03,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                },
                                hours: {
                                    gauge: {
                                        thickness: .03,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                },
                                minutes: {
                                    gauge: {
                                        thickness: .03,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                },
                                seconds: {
                                    gauge: {
                                        thickness: .03,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                }
                            }
                        };
                    case "white-wide":
                        return {
                            labels: !0,
                            style: {
                                element: "",
                                textResponsive: .5,
                                days: {
                                    gauge: {
                                        thickness: .06,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                },
                                hours: {
                                    gauge: {
                                        thickness: .06,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                },
                                minutes: {
                                    gauge: {
                                        thickness: .06,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                },
                                seconds: {
                                    gauge: {
                                        thickness: .06,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                }
                            }
                        };
                    case "white-very-wide":
                        return {
                            labels: !0,
                            style: {
                                element: "",
                                textResponsive: .5,
                                days: {
                                    gauge: {
                                        thickness: .16,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                },
                                hours: {
                                    gauge: {
                                        thickness: .16,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                },
                                minutes: {
                                    gauge: {
                                        thickness: .16,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                },
                                seconds: {
                                    gauge: {
                                        thickness: .16,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                }
                            }
                        };
                    case "white-black":
                        return {
                            labels: !0,
                            style: {
                                element: "",
                                textResponsive: .5,
                                days: {
                                    gauge: {
                                        thickness: .25,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff",
                                        lineCap: "round"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                },
                                hours: {
                                    gauge: {
                                        thickness: .25,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff",
                                        lineCap: "round"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                },
                                minutes: {
                                    gauge: {
                                        thickness: .25,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff",
                                        lineCap: "round"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                },
                                seconds: {
                                    gauge: {
                                        thickness: .25,
                                        bgColor: "rgba(255,255,255,0.05)",
                                        fgColor: "#fff",
                                        lineCap: "round"
                                    },
                                    textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;"
                                }
                            }
                        }
                }
            }
            var a = t(this),
                l, h, c, u, d, f = !1,
                g = {
                    end: void 0,
                    now: t.now(),
                    labels: !0,
                    labelsOptions: {
                        lang: {
                            days: "Days",
                            hours: "Hours",
                            minutes: "Minutes",
                            seconds: "Seconds"
                        },
                        style: "font-size: 0.5em;"
                    },
                    style: {
                        element: "",
                        labels: !1,
                        textResponsive: .5,
                        days: {
                            gauge: {
                                thickness: .02,
                                bgColor: "rgba(0, 0, 0, 0)",
                                fgColor: "rgba(0, 0, 0, 1)",
                                lineCap: "butt"
                            },
                            textCSS: ""
                        },
                        hours: {
                            gauge: {
                                thickness: .02,
                                bgColor: "rgba(0, 0, 0, 0)",
                                fgColor: "rgba(0, 0, 0, 1)",
                                lineCap: "butt"
                            },
                            textCSS: ""
                        },
                        minutes: {
                            gauge: {
                                thickness: .02,
                                bgColor: "rgba(0, 0, 0, 0)",
                                fgColor: "rgba(0, 0, 0, 1)",
                                lineCap: "butt"
                            },
                            textCSS: ""
                        },
                        seconds: {
                            gauge: {
                                thickness: .02,
                                bgColor: "rgba(0, 0, 0, 0)",
                                fgColor: "rgba(0, 0, 0, 1)",
                                lineCap: "butt"
                            },
                            textCSS: ""
                        }
                    },
                    onEndCallback: function() {}
                };
            e.theme && (g = t.extend(!0, g, r(e.theme))), g = t.extend(!0, g, e),
                function() {
                    a.append('<div class="ClassyCountdown-wrapper"><div class="ClassyCountdown-days"><input type="text" /><span class="ClassyCountdown-value"><div></div><span></span></span></div><div class="ClassyCountdown-hours"><input type="text" /><span class="ClassyCountdown-value"><div></div><span></span></span></div><div class="ClassyCountdown-minutes"><input type="text" /><span class="ClassyCountdown-value"><div></div><span></span></span></div><div class="ClassyCountdown-seconds"><input type="text" /><span class="ClassyCountdown-value"><div></div><span></span></span></div></div>'), a.find(".ClassyCountdown-days input").knob(t.extend({
                        width: "100%",
                        displayInput: !1,
                        readOnly: !0,
                        max: 365
                    }, g.style.days.gauge)), a.find(".ClassyCountdown-hours input").knob(t.extend({
                        width: "100%",
                        displayInput: !1,
                        readOnly: !0,
                        max: 24
                    }, g.style.hours.gauge)), a.find(".ClassyCountdown-minutes input").knob(t.extend({
                        width: "100%",
                        displayInput: !1,
                        readOnly: !0,
                        max: 60
                    }, g.style.minutes.gauge)), a.find(".ClassyCountdown-seconds input").knob(t.extend({
                        width: "100%",
                        displayInput: !1,
                        readOnly: !0,
                        max: 60
                    }, g.style.seconds.gauge)), a.find(".ClassyCountdown-wrapper > div").attr("style", g.style.element), a.find(".ClassyCountdown-days .ClassyCountdown-value").attr("style", g.style.days.textCSS), a.find(".ClassyCountdown-hours .ClassyCountdown-value").attr("style", g.style.hours.textCSS), a.find(".ClassyCountdown-minutes .ClassyCountdown-value").attr("style", g.style.minutes.textCSS), a.find(".ClassyCountdown-seconds .ClassyCountdown-value").attr("style", g.style.seconds.textCSS), a.find(".ClassyCountdown-value").each(function() {
                        t(this).css("margin-top", Math.floor(0 - parseInt(t(this).height()) / 2) + "px")
                    }), g.labels && (a.find(".ClassyCountdown-days .ClassyCountdown-value > span").html(g.labelsOptions.lang.days), a.find(".ClassyCountdown-hours .ClassyCountdown-value > span").html(g.labelsOptions.lang.hours), a.find(".ClassyCountdown-minutes .ClassyCountdown-value > span").html(g.labelsOptions.lang.minutes), a.find(".ClassyCountdown-seconds .ClassyCountdown-value > span").html(g.labelsOptions.lang.seconds), a.find(".ClassyCountdown-value > span").attr("style", g.labelsOptions.style)), d = g.end - g.now, n()
                }(), s(), setInterval(s, 1e3),
                function() {
                    a.find(".ClassyCountdown-wrapper > div").each(function() {
                        t(this).css("height", t(this).width() + "px")
                    }), g.style.textResponsive && (a.find(".ClassyCountdown-value").css("font-size", Math.floor(a.find("> div").eq(0).width() * g.style.textResponsive / 10) + "px"), a.find(".ClassyCountdown-value").each(function() {
                        t(this).css("margin-top", Math.floor(0 - parseInt(t(this).height()) / 2) + "px")
                    })), t(window).trigger("resize"), t(window).resize(t.throttle(50, o))
                }()
        }
    }(jQuery),
    function(t, e, i, n) {
        function s(e, i) {
            this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
                this._handlers[i] = t.proxy(this[i], this)
            }, this)), t.each(s.Plugins, t.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(s.Workers, t.proxy(function(e, i) {
                this._pipe.push({
                    filter: i.filter,
                    run: t.proxy(i.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        s.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, s.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, s.Type = {
            Event: "event",
            State: "state"
        }, s.Plugins = {}, s.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    s = {
                        width: "auto",
                        "margin-left": n ? e : "",
                        "margin-right": n ? "" : e
                    };
                !i && this.$stage.children().css(s), t.css = s
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    s = !this.settings.autoWidth,
                    o = [];
                for (t.items = {
                        merge: !1,
                        width: e
                    }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[n] = s ? e * i : this._items[n].width();
                this._widths = o
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var e = [],
                    i = this._items,
                    n = this.settings,
                    s = Math.max(2 * n.items, 4),
                    o = 2 * Math.ceil(i.length / 2),
                    r = n.loop && i.length ? n.rewind ? s : Math.max(s, o) : 0,
                    a = "",
                    l = "";
                for (r /= 2; r--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
                this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, o = []; ++i < e;) n = o[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, o.push(n + s * t);
                this._coordinates = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    i = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                else i && (t.css.width = t.items.width, n.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    r = this.coordinates(this.current()) + o,
                    a = r + this.width() * s,
                    l = [];
                for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], s.prototype.initialize = function() {
            if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                var e, i, s;
                e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, s = this.$element.children(i).width(), e.length && s <= 0 && this.preloadAutoWidthImages(e)
            }
            this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, s.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                s = null;
            i ? (t.each(i, function(t) {
                t <= e && t > n && (n = Number(t))
            }), s = t.extend({}, this.options, i[n]), "function" == typeof s.stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = t.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: s
                }
            }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, s.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, s.prototype.prepare = function(e) {
            var i = this.trigger("prepare", {
                content: e
            });
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                content: i.data
            }), i.data
        }, s.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                    return this[t]
                }, this._invalidated), s = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, s.prototype.width = function(t) {
            switch (t = t || s.Width.Default) {
                case s.Width.Inner:
                case s.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, s.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, s.prototype.onThrottledResize = function() {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, s.prototype.onResize = function() {
            return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
        }, s.prototype.registerEventHandlers = function() {
            t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
        }, s.prototype.onDragStart = function(e) {
            var n = null;
            3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
                x: n[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5]
            }) : (n = this.$stage.position(), n = {
                x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                y: n.top
            }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
                var n = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, s.prototype.onDragMove = function(t) {
            var e = null,
                i = null,
                n = null,
                s = this.difference(this._drag.pointer, this.pointer(t)),
                o = this.difference(this._drag.stage.start, s);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
        }, s.prototype.onDragEnd = function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e)),
                s = this._drag.stage.current,
                o = n.x > 0 ^ this.settings.rtl ? "left" : "right";
            t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== n.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, s.prototype.closest = function(e, i) {
            var n = -1,
                s = 30,
                o = this.width(),
                r = this.coordinates();
            return this.settings.freeDrag || t.each(r, t.proxy(function(t, a) {
                return "left" === i && e > a - s && e < a + s ? n = t : "right" === i && e > a - o - s && e < a - o + s ? n = t + 1 : this.op(e, "<", a) && this.op(e, ">", r[t + 1] || a - o) && (n = "left" === i ? t + 1 : t), -1 === n
            }, this)), this.settings.loop || (this.op(e, ">", r[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (n = e = this.maximum())), n
        }, s.prototype.animate = function(e) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : i ? this.$stage.animate({
                left: e + "px"
            }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: e + "px"
            })
        }, s.prototype.is = function(t) {
            return this._states.current[t] && this._states.current[t] > 0
        }, s.prototype.current = function(t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, s.prototype.invalidate = function(e) {
            return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
                return e
            })
        }, s.prototype.reset = function(t) {
            (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, s.prototype.normalize = function(t, e) {
            var i = this._items.length,
                s = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + s) && (t = ((t - s / 2) % i + i) % i + s / 2), t
        }, s.prototype.relative = function(t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, s.prototype.maximum = function(t) {
            var e, i, n, s = this.settings,
                o = this._coordinates.length;
            if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
            else if (s.autoWidth || s.merge) {
                for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n););
                o = e + 1
            } else o = s.center ? this._items.length - 1 : this._items.length - s.items;
            return t && (o -= this._clones.length / 2), Math.max(o, 0)
        }, s.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, s.prototype.items = function(t) {
            return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, s.prototype.mergers = function(t) {
            return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, s.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                s = i + this._items.length,
                o = function(t) {
                    return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2
                };
            return e === n ? t.map(this._clones, function(t, e) {
                return o(e)
            }) : t.map(this._clones, function(t, i) {
                return t === e ? o(i) : null
            })
        }, s.prototype.speed = function(t) {
            return t !== n && (this._speed = t), this._speed
        }, s.prototype.coordinates = function(e) {
            var i, s = 1,
                o = e - 1;
            return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * s) : i = this._coordinates[o] || 0, i = Math.ceil(i))
        }, s.prototype.duration = function(t, e, i) {
            return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
        }, s.prototype.to = function(t, e) {
            var i = this.current(),
                n = null,
                s = t - this.relative(i),
                o = (s > 0) - (s < 0),
                r = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r), t = i + s, (n = ((t - a) % r + r) % r + a) !== t && n - s <= l && n - s > 0 && (i = n - s, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
        }, s.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, s.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, s.prototype.onTransitionEnd = function(t) {
            if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, s.prototype.viewport = function() {
            var n;
            return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
        }, s.prototype.replace = function(e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType
            }).each(t.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, s.prototype.add = function(e, i) {
            var s = this.relative(this._current);
            i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
                content: e,
                position: i
            }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
                content: e,
                position: i
            })
        }, s.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, s.prototype.preloadAutoWidthImages = function(e) {
            e.each(t.proxy(function(e, i) {
                this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                    i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
            }, this))
        }, s.prototype.destroy = function() {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
            for (var n in this._plugins) this._plugins[n].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, s.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : t < i;
                case ">":
                    return n ? t < i : t > i;
                case ">=":
                    return n ? t <= i : t >= i;
                case "<=":
                    return n ? t >= i : t <= i
            }
        }, s.prototype.on = function(t, e, i, n) {
            t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
        }, s.prototype.off = function(t, e, i, n) {
            t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
        }, s.prototype.trigger = function(e, i, n, o, r) {
            var a = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                l = t.camelCase(t.grep(["on", e, n], function(t) {
                    return t
                }).join("-").toLowerCase()),
                h = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, a, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(h)
            }), this.register({
                type: s.Type.Event,
                name: e
            }), this.$element.trigger(h), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, h)), h
        }, s.prototype.enter = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, s.prototype.leave = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }, s.prototype.register = function(e) {
            if (e.type === s.Type.Event) {
                if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                    var i = t.event.special[e.name]._default;
                    t.event.special[e.name]._default = function(t) {
                        return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                    }, t.event.special[e.name].owl = !0
                }
            } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n
            }, this)))
        }, s.prototype.suppress = function(e) {
            t.each(e, t.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, s.prototype.release = function(e) {
            t.each(e, t.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, s.prototype.pointer = function(t) {
            var i = {
                x: null,
                y: null
            };
            return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
        }, s.prototype.isNumeric = function(t) {
            return !isNaN(parseFloat(t))
        }, s.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, t.fn.owlCarousel = function(e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var n = t(this),
                    o = n.data("owl.carousel");
                o || (o = new s(this, "object" == typeof e && e), n.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                    o.register({
                        type: s.Type.Event,
                        name: i
                    }), o.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                    }, o))
                })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
            })
        }, t.fn.owlCarousel.Constructor = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        s.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, s.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, s.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, s.prototype.destroy = function() {
            var t, i;
            e.clearInterval(this._interval);
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * s || 0, r = (e.property && e.property.value !== n ? e.property.value : this._core.current()) + o, a = this._core.clones().length, l = t.proxy(function(t, e) {
                                this.load(e)
                            }, this); o++ < s;) this.load(a / 2 + this._core.relative(r)), a && t.each(this._core.clones(this._core.relative(r)), l), r++
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        s.Defaults = {
            lazyLoad: !1
        }, s.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                s = n && n.find(".owl-lazy");
            !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function(i, n) {
                var s, o = t(n),
                    r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
                this._core.trigger("load", {
                    element: o,
                    url: r
                }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                    o.css("opacity", 1), this._core.trigger("loaded", {
                        element: o,
                        url: r
                    }, "lazy")
                }, this)).attr("src", r) : (s = new Image, s.onload = t.proxy(function() {
                    o.css({
                        "background-image": 'url("' + r + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: o,
                        url: r
                    }, "lazy")
                }, this), s.src = r)
            }, this)), this._loaded.push(n.get(0)))
        }, s.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        s.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, s.prototype.update = function() {
            var e = this._core._current,
                i = e + this._core.settings.items,
                n = this._core.$stage.children().toArray().slice(e, i),
                s = [],
                o = 0;
            t.each(n, function(e, i) {
                s.push(t(i).height())
            }), o = Math.max.apply(null, s), this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
        }, s.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                    }
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                this.play(t)
            }, this))
        };
        s.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, s.prototype.fetch = function(t, e) {
            var i = function() {
                    return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
                }(),
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                s = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
            else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
            else {
                if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                i = "vzaar"
            }
            n = n[6], this._videos[r] = {
                type: i,
                id: n,
                width: s,
                height: o
            }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
        }, s.prototype.thumbnail = function(e, i) {
            var n, s, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                a = e.find("img"),
                l = "src",
                h = "",
                c = this._core.settings,
                u = function(t) {
                    s = '<div class="owl-video-play-icon"></div>', n = c.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(s)
                };
            if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length) return u(a.attr(l)), a.remove(), !1;
            "youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(o)) : "vimeo" === i.type ? t.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    o = t[0].thumbnail_large, u(o)
                }
            }) : "vzaar" === i.type && t.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + i.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    o = t.framegrab_url, u(o)
                }
            })
        }, s.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, s.prototype.play = function(e) {
            var i, n = t(e.target),
                s = n.closest("." + this._core.settings.itemClass),
                o = this._videos[s.attr("data-video")],
                r = o.width || "100%",
                a = o.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), "youtube" === o.type ? i = '<iframe width="' + r + '" height="' + a + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&rel=0&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? i = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + r + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (i = '<iframe frameborder="0"height="' + a + '"width="' + r + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
        }, s.prototype.isInFullScreen = function() {
            var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame")
        }, s.prototype.destroy = function() {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
                "change.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }, this),
                "translate.owl.carousel": t.proxy(function(t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        s.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, s.prototype.swap = function() {
            if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    s = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    r = this.core.settings.animateOut;
                this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(r)), o && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
            }
        }, s.prototype.clear = function(e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, s.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": t.proxy(function(t, e, i) {
                    t.namespace && this.play(e, i)
                }, this),
                "stop.owl.autoplay": t.proxy(function(t) {
                    t.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, s.Defaults, this._core.options)
        };
        s.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, s.prototype.play = function(t, e) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, s.prototype._getNextTimeout = function(n, s) {
            return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
            }, this), n || this._core.settings.autoplayTimeout)
        }, s.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }, s.prototype.stop = function() {
            this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, s.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, s.prototype.destroy = function() {
            var t, e;
            this.stop();
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        "use strict";
        var s = function(e) {
            this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) {
                    e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        s.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, s.prototype.initialize = function() {
            var e, i = this._core.settings;
            this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this));
            for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
        }, s.prototype.destroy = function() {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, s.prototype.update = function() {
            var t, e, i, n = this._core.clones().length / 2,
                s = n + this._core.items().length,
                o = this._core.maximum(!0),
                r = this._core.settings,
                a = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
            if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
                for (this._pages = [], t = n, e = 0, i = 0; t < s; t++) {
                    if (e >= a || 0 === e) {
                        if (this._pages.push({
                                start: Math.min(o, t - n),
                                end: t - n + a - 1
                            }), Math.min(o, t - n) === o) break;
                        e = 0, ++i
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, s.prototype.draw = function() {
            var e, i = this._core.settings,
                n = this._core.items().length <= i.items,
                s = this._core.relative(this._core.current()),
                o = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !o && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
        }, s.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
            }
        }, s.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, t.proxy(function(t, i) {
                return t.start <= e && t.end >= e
            }, this)).pop()
        }, s.prototype.getPosition = function(e) {
            var i, n, s = this._core.settings;
            return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
        }, s.prototype.next = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, s.prototype.prev = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, s.prototype.to = function(e, i, n) {
            var s;
            !n && this._pages.length ? (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        "use strict";
        var s = function(i) {
            this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(i) {
                    i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!i) return;
                        this._hashes[i] = e.content
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(i) {
                    if (i.namespace && "position" === i.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            s = t.map(this._hashes, function(t, e) {
                                return t === n ? e : null
                            }).join();
                        if (!s || e.location.hash.slice(1) === s) return;
                        e.location.hash = s
                    }
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
                var i = e.location.hash.substring(1),
                    s = this._core.$stage.children(),
                    o = this._hashes[i] && s.index(this._hashes[i]);
                o !== n && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
            }, this))
        };
        s.Defaults = {
            URLhashListener: !1
        }, s.prototype.destroy = function() {
            var i, n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        function s(e, i) {
            var s = !1,
                o = e.charAt(0).toUpperCase() + e.slice(1);
            return t.each((e + " " + a.join(o + " ") + o).split(" "), function(t, e) {
                if (r[e] !== n) return s = !i || e, !1
            }), s
        }

        function o(t) {
            return s(t, !0)
        }
        var r = t("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            h = {
                csstransforms: function() {
                    return !!s("transform")
                },
                csstransforms3d: function() {
                    return !!s("perspective")
                },
                csstransitions: function() {
                    return !!s("transition")
                },
                cssanimations: function() {
                    return !!s("animation")
                }
            };
        h.csstransitions() && (t.support.transition = new String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), h.cssanimations() && (t.support.animation = new String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]), h.csstransforms() && (t.support.transform = new String(o("transform")), t.support.transform3d = h.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document);
var Froogaloop = function() {
    function t(e) {
        return new t.fn.init(e)
    }

    function e(t, e, i) {
        if (!i.contentWindow.postMessage) return !1;
        t = JSON.stringify({
            method: t,
            value: e
        }), i.contentWindow.postMessage(t, r)
    }

    function i(t) {
        var e, i;
        try {
            e = JSON.parse(t.data), i = e.event || e.method
        } catch (t) {}
        if ("ready" != i || o || (o = !0), !/^https?:\/\/player.vimeo.com/.test(t.origin)) return !1;
        "*" === r && (r = t.origin), t = e.value;
        var n = e.data,
            a = "" === a ? null : e.player_id;
        return e = a ? s[a][i] : s[i], i = [], !!e && (void 0 !== t && i.push(t), n && i.push(n), a && i.push(a), 0 < i.length ? e.apply(null, i) : e.call())
    }

    function n(t, e, i) {
        i ? (s[i] || (s[i] = {}), s[i][t] = e) : s[t] = e
    }
    var s = {},
        o = !1,
        r = "*";
    return t.fn = t.prototype = {
        element: null,
        init: function(t) {
            return "string" == typeof t && (t = document.getElementById(t)), this.element = t, this
        },
        api: function(t, i) {
            if (!this.element || !t) return !1;
            var s = this.element,
                o = "" !== s.id ? s.id : null,
                r = i && i.constructor && i.call && i.apply ? null : i,
                a = i && i.constructor && i.call && i.apply ? i : null;
            return a && n(t, a, o), e(t, r, s), this
        },
        addEvent: function(t, i) {
            if (!this.element) return !1;
            var s = this.element,
                r = "" !== s.id ? s.id : null;
            return n(t, i, r), "ready" != t ? e("addEventListener", t, s) : "ready" == t && o && i.call(null, r), this
        },
        removeEvent: function(t) {
            if (!this.element) return !1;
            var i = this.element,
                n = "" !== i.id ? i.id : null;
            t: {
                if (n && s[n]) {
                    if (!s[n][t]) {
                        n = !1;
                        break t
                    }
                    s[n][t] = null
                } else {
                    if (!s[t]) {
                        n = !1;
                        break t
                    }
                    s[t] = null
                }
                n = !0
            }
            "ready" != t && n && e("removeEventListener", t, i)
        }
    }, t.fn.init.prototype = t.fn, window.addEventListener ? window.addEventListener("message", i, !1) : window.attachEvent("onmessage", i), window.Froogaloop = window.$f = t
}();
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function() {
    "use strict";

    function t() {
        return _n.apply(null, arguments)
    }

    function e(t) {
        _n = t
    }

    function i(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function n(t) {
        return null != t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function s(t) {
        var e;
        for (e in t) return !1;
        return !0
    }

    function o(t) {
        return void 0 === t
    }

    function r(t) {
        return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
    }

    function a(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function l(t, e) {
        var i, n = [];
        for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
        return n
    }

    function h(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function c(t, e) {
        for (var i in e) h(e, i) && (t[i] = e[i]);
        return h(e, "toString") && (t.toString = e.toString), h(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function u(t, e, i, n) {
        return ye(t, e, i, n, !0).utc()
    }

    function d() {
        return {
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
        }
    }

    function f(t) {
        return null == t._pf && (t._pf = d()), t._pf
    }

    function g(t) {
        if (null == t._isValid) {
            var e = f(t),
                i = Cn.call(e.parsedDateParts, function(t) {
                    return null != t
                }),
                n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
            if (t._strict && (n = n && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return n;
            t._isValid = n
        }
        return t._isValid
    }

    function p(t) {
        var e = u(NaN);
        return null != t ? c(f(e), t) : f(e).userInvalidated = !0, e
    }

    function m(t, e) {
        var i, n, s;
        if (o(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), o(e._i) || (t._i = e._i), o(e._f) || (t._f = e._f), o(e._l) || (t._l = e._l), o(e._strict) || (t._strict = e._strict), o(e._tzm) || (t._tzm = e._tzm), o(e._isUTC) || (t._isUTC = e._isUTC), o(e._offset) || (t._offset = e._offset), o(e._pf) || (t._pf = f(e)), o(e._locale) || (t._locale = e._locale), bn.length > 0)
            for (i = 0; i < bn.length; i++) n = bn[i], s = e[n], o(s) || (t[n] = s);
        return t
    }

    function v(e) {
        m(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === xn && (xn = !0, t.updateOffset(this), xn = !1)
    }

    function y(t) {
        return t instanceof v || null != t && null != t._isAMomentObject
    }

    function _(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
    }

    function w(t) {
        var e = +t,
            i = 0;
        return 0 !== e && isFinite(e) && (i = _(e)), i
    }

    function C(t, e, i) {
        var n, s = Math.min(t.length, e.length),
            o = Math.abs(t.length - e.length),
            r = 0;
        for (n = 0; n < s; n++)(i && t[n] !== e[n] || !i && w(t[n]) !== w(e[n])) && r++;
        return r + o
    }

    function b(e) {
        !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function x(e, i) {
        var n = !0;
        return c(function() {
            if (null != t.deprecationHandler && t.deprecationHandler(null, e), n) {
                for (var s, o = [], r = 0; r < arguments.length; r++) {
                    if (s = "", "object" == typeof arguments[r]) {
                        s += "\n[" + r + "] ";
                        for (var a in arguments[0]) s += a + ": " + arguments[0][a] + ", ";
                        s = s.slice(0, -2)
                    } else s = arguments[r];
                    o.push(s)
                }
                b(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), n = !1
            }
            return i.apply(this, arguments)
        }, i)
    }

    function S(e, i) {
        null != t.deprecationHandler && t.deprecationHandler(e, i), Sn[e] || (b(i), Sn[e] = !0)
    }

    function k(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function M(t) {
        var e, i;
        for (i in t) e = t[i], k(e) ? this[i] = e : this["_" + i] = e;
        this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }

    function D(t, e) {
        var i, s = c({}, t);
        for (i in e) h(e, i) && (n(t[i]) && n(e[i]) ? (s[i] = {}, c(s[i], t[i]), c(s[i], e[i])) : null != e[i] ? s[i] = e[i] : delete s[i]);
        for (i in t) h(t, i) && !h(e, i) && n(t[i]) && (s[i] = c({}, s[i]));
        return s
    }

    function O(t) {
        null != t && this.set(t)
    }

    function T(t, e, i) {
        var n = this._calendar[t] || this._calendar.sameElse;
        return k(n) ? n.call(e, i) : n
    }

    function P(t) {
        var e = this._longDateFormat[t],
            i = this._longDateFormat[t.toUpperCase()];
        return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }

    function Y() {
        return this._invalidDate
    }

    function E(t) {
        return this._ordinal.replace("%d", t)
    }

    function z(t, e, i, n) {
        var s = this._relativeTime[i];
        return k(s) ? s(t, e, i, n) : s.replace(/%d/i, t)
    }

    function W(t, e) {
        var i = this._relativeTime[t > 0 ? "future" : "past"];
        return k(i) ? i(e) : i.replace(/%s/i, e)
    }

    function R(t, e) {
        var i = t.toLowerCase();
        zn[i] = zn[i + "s"] = zn[e] = t
    }

    function j(t) {
        return "string" == typeof t ? zn[t] || zn[t.toLowerCase()] : void 0
    }

    function H(t) {
        var e, i, n = {};
        for (i in t) h(t, i) && (e = j(i)) && (n[e] = t[i]);
        return n
    }

    function A(t, e) {
        Wn[t] = e
    }

    function I(t) {
        var e = [];
        for (var i in t) e.push({
            unit: i,
            priority: Wn[i]
        });
        return e.sort(function(t, e) {
            return t.priority - e.priority
        }), e
    }

    function N(e, i) {
        return function(n) {
            return null != n ? (F(this, e, n), t.updateOffset(this, i), this) : L(this, e)
        }
    }

    function L(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function F(t, e, i) {
        t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](i)
    }

    function U(t) {
        return t = j(t), k(this[t]) ? this[t]() : this
    }

    function G(t, e) {
        if ("object" == typeof t) {
            t = H(t);
            for (var i = I(t), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit])
        } else if (t = j(t), k(this[t])) return this[t](e);
        return this
    }

    function V(t, e, i) {
        var n = "" + Math.abs(t),
            s = e - n.length;
        return (t >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
    }

    function Z(t, e, i, n) {
        var s = n;
        "string" == typeof n && (s = function() {
            return this[n]()
        }), t && (An[t] = s), e && (An[e[0]] = function() {
            return V(s.apply(this, arguments), e[1], e[2])
        }), i && (An[i] = function() {
            return this.localeData().ordinal(s.apply(this, arguments), t)
        })
    }

    function B(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function q(t) {
        var e, i, n = t.match(Rn);
        for (e = 0, i = n.length; e < i; e++) An[n[e]] ? n[e] = An[n[e]] : n[e] = B(n[e]);
        return function(e) {
            var s, o = "";
            for (s = 0; s < i; s++) o += k(n[s]) ? n[s].call(e, t) : n[s];
            return o
        }
    }

    function Q(t, e) {
        return t.isValid() ? (e = J(e, t.localeData()), Hn[e] = Hn[e] || q(e), Hn[e](t)) : t.localeData().invalidDate()
    }

    function J(t, e) {
        function i(t) {
            return e.longDateFormat(t) || t
        }
        var n = 5;
        for (jn.lastIndex = 0; n >= 0 && jn.test(t);) t = t.replace(jn, i), jn.lastIndex = 0, n -= 1;
        return t
    }

    function X(t, e, i) {
        ns[t] = k(e) ? e : function(t, n) {
            return t && i ? i : e
        }
    }

    function $(t, e) {
        return h(ns, t) ? ns[t](e._strict, e._locale) : new RegExp(K(t))
    }

    function K(t) {
        return tt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, s) {
            return e || i || n || s
        }))
    }

    function tt(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function et(t, e) {
        var i, n = e;
        for ("string" == typeof t && (t = [t]), r(e) && (n = function(t, i) {
                i[e] = w(t)
            }), i = 0; i < t.length; i++) ss[t[i]] = n
    }

    function it(t, e) {
        et(t, function(t, i, n, s) {
            n._w = n._w || {}, e(t, n._w, n, s)
        })
    }

    function nt(t, e, i) {
        null != e && h(ss, t) && ss[t](e, i._a, i, t)
    }

    function st(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }

    function ot(t, e) {
        return t ? i(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || ps).test(e) ? "format" : "standalone"][t.month()] : i(this._months) ? this._months : this._months.standalone
    }

    function rt(t, e) {
        return t ? i(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[ps.test(e) ? "format" : "standalone"][t.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }

    function at(t, e, i) {
        var n, s, o, r = t.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) o = u([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
        return i ? "MMM" === e ? (s = gs.call(this._shortMonthsParse, r), -1 !== s ? s : null) : (s = gs.call(this._longMonthsParse, r), -1 !== s ? s : null) : "MMM" === e ? (s = gs.call(this._shortMonthsParse, r), -1 !== s ? s : (s = gs.call(this._longMonthsParse, r), -1 !== s ? s : null)) : (s = gs.call(this._longMonthsParse, r), -1 !== s ? s : (s = gs.call(this._shortMonthsParse, r), -1 !== s ? s : null))
    }

    function lt(t, e, i) {
        var n, s, o;
        if (this._monthsParseExact) return at.call(this, t, e, i);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
            if (s = u([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (o = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
            if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
            if (!i && this._monthsParse[n].test(t)) return n
        }
    }

    function ht(t, e) {
        var i;
        if (!t.isValid()) return t;
        if ("string" == typeof e)
            if (/^\d+$/.test(e)) e = w(e);
            else if (e = t.localeData().monthsParse(e), !r(e)) return t;
        return i = Math.min(t.date(), st(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
    }

    function ct(e) {
        return null != e ? (ht(this, e), t.updateOffset(this, !0), this) : L(this, "Month")
    }

    function ut() {
        return st(this.year(), this.month())
    }

    function dt(t) {
        return this._monthsParseExact ? (h(this, "_monthsRegex") || gt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = ys), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }

    function ft(t) {
        return this._monthsParseExact ? (h(this, "_monthsRegex") || gt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = _s), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }

    function gt() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, i, n = [],
            s = [],
            o = [];
        for (e = 0; e < 12; e++) i = u([2e3, e]), n.push(this.monthsShort(i, "")), s.push(this.months(i, "")), o.push(this.months(i, "")), o.push(this.monthsShort(i, ""));
        for (n.sort(t), s.sort(t), o.sort(t), e = 0; e < 12; e++) n[e] = tt(n[e]), s[e] = tt(s[e]);
        for (e = 0; e < 24; e++) o[e] = tt(o[e]);
        this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
    }

    function pt(t) {
        return mt(t) ? 366 : 365
    }

    function mt(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    }

    function vt() {
        return mt(this.year())
    }

    function yt(t, e, i, n, s, o, r) {
        var a = new Date(t, e, i, n, s, o, r);
        return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
    }

    function _t(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
    }

    function wt(t, e, i) {
        var n = 7 + e - i;
        return -(7 + _t(t, 0, n).getUTCDay() - e) % 7 + n - 1
    }

    function Ct(t, e, i, n, s) {
        var o, r, a = (7 + i - n) % 7,
            l = wt(t, n, s),
            h = 1 + 7 * (e - 1) + a + l;
        return h <= 0 ? (o = t - 1, r = pt(o) + h) : h > pt(t) ? (o = t + 1, r = h - pt(t)) : (o = t, r = h), {
            year: o,
            dayOfYear: r
        }
    }

    function bt(t, e, i) {
        var n, s, o = wt(t.year(), e, i),
            r = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
        return r < 1 ? (s = t.year() - 1, n = r + xt(s, e, i)) : r > xt(t.year(), e, i) ? (n = r - xt(t.year(), e, i), s = t.year() + 1) : (s = t.year(), n = r), {
            week: n,
            year: s
        }
    }

    function xt(t, e, i) {
        var n = wt(t, e, i),
            s = wt(t + 1, e, i);
        return (pt(t) - n + s) / 7
    }

    function St(t) {
        return bt(t, this._week.dow, this._week.doy).week
    }

    function kt() {
        return this._week.dow
    }

    function Mt() {
        return this._week.doy
    }

    function Dt(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function Ot(t) {
        var e = bt(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function Tt(t, e) {
        return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
    }

    function $t(t, e) {
        return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
    }

    function Pt(t, e) {
        return t ? i(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : i(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }

    function Yt(t) {
        return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }

    function Et(t) {
        return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }

    function zt(t, e, i) {
        var n, s, o, r = t.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) o = u([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase();
        return i ? "dddd" === e ? (s = gs.call(this._weekdaysParse, r), -1 !== s ? s : null) : "ddd" === e ? (s = gs.call(this._shortWeekdaysParse, r), -1 !== s ? s : null) : (s = gs.call(this._minWeekdaysParse, r), -1 !== s ? s : null) : "dddd" === e ? (s = gs.call(this._weekdaysParse, r), -1 !== s ? s : (s = gs.call(this._shortWeekdaysParse, r), -1 !== s ? s : (s = gs.call(this._minWeekdaysParse, r), -1 !== s ? s : null))) : "ddd" === e ? (s = gs.call(this._shortWeekdaysParse, r), -1 !== s ? s : (s = gs.call(this._weekdaysParse, r), -1 !== s ? s : (s = gs.call(this._minWeekdaysParse, r), -1 !== s ? s : null))) : (s = gs.call(this._minWeekdaysParse, r), -1 !== s ? s : (s = gs.call(this._weekdaysParse, r), -1 !== s ? s : (s = gs.call(this._shortWeekdaysParse, r), -1 !== s ? s : null)))
    }

    function Wt(t, e, i) {
        var n, s, o;
        if (this._weekdaysParseExact) return zt.call(this, t, e, i);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
            if (s = u([2e3, 1]).day(n),
                i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (o = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
            if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
            if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
            if (!i && this._weekdaysParse[n].test(t)) return n
        }
    }

    function Rt(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (t = Tt(t, this.localeData()), this.add(t - e, "d")) : e
    }

    function jt(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }

    function Ht(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
            var e = $t(t, this.localeData());
            return this.day(this.day() % 7 ? e : e - 7)
        }
        return this.day() || 7
    }

    function At(t) {
        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Lt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = ks), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }

    function It(t) {
        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Lt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ms), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }

    function Nt(t) {
        return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Lt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ds), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }

    function Lt() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, i, n, s, o, r = [],
            a = [],
            l = [],
            h = [];
        for (e = 0; e < 7; e++) i = u([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), s = this.weekdaysShort(i, ""), o = this.weekdays(i, ""), r.push(n), a.push(s), l.push(o), h.push(n), h.push(s), h.push(o);
        for (r.sort(t), a.sort(t), l.sort(t), h.sort(t), e = 0; e < 7; e++) a[e] = tt(a[e]), l[e] = tt(l[e]), h[e] = tt(h[e]);
        this._weekdaysRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function Ft() {
        return this.hours() % 12 || 12
    }

    function Ut() {
        return this.hours() || 24
    }

    function Gt(t, e) {
        Z(t, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function Vt(t, e) {
        return e._meridiemParse
    }

    function Zt(t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }

    function Bt(t, e, i) {
        return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
    }

    function qt(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function Qt(t) {
        for (var e, i, n, s, o = 0; o < t.length;) {
            for (s = qt(t[o]).split("-"), e = s.length, i = qt(t[o + 1]), i = i ? i.split("-") : null; e > 0;) {
                if (n = Jt(s.slice(0, e).join("-"))) return n;
                if (i && i.length >= e && C(s, i, !0) >= e - 1) break;
                e--
            }
            o++
        }
        return null
    }

    function Jt(t) {
        var e = null;
        if (!Ys[t] && "undefined" != typeof module && module && module.exports) try {
            e = Os._abbr, require("./locale/" + t), Xt(e)
        } catch (t) {}
        return Ys[t]
    }

    function Xt(t, e) {
        var i;
        return t && (i = o(e) ? ee(t) : Kt(t, e)) && (Os = i), Os._abbr
    }

    function Kt(t, e) {
        if (null !== e) {
            var i = Ps;
            if (e.abbr = t, null != Ys[t]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = Ys[t]._config;
            else if (null != e.parentLocale) {
                if (null == Ys[e.parentLocale]) return Es[e.parentLocale] || (Es[e.parentLocale] = []), Es[e.parentLocale].push({
                    name: t,
                    config: e
                }), null;
                i = Ys[e.parentLocale]._config
            }
            return Ys[t] = new O(D(i, e)), Es[t] && Es[t].forEach(function(t) {
                Kt(t.name, t.config)
            }), Xt(t), Ys[t]
        }
        return delete Ys[t], null
    }

    function te(t, e) {
        if (null != e) {
            var i, n = Ps;
            null != Ys[t] && (n = Ys[t]._config), e = D(n, e), i = new O(e), i.parentLocale = Ys[t], Ys[t] = i, Xt(t)
        } else null != Ys[t] && (null != Ys[t].parentLocale ? Ys[t] = Ys[t].parentLocale : null != Ys[t] && delete Ys[t]);
        return Ys[t]
    }

    function ee(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Os;
        if (!i(t)) {
            if (e = Jt(t)) return e;
            t = [t]
        }
        return Qt(t)
    }

    function ie() {
        return Dn(Ys)
    }

    function ne(t) {
        var e, i = t._a;
        return i && -2 === f(t).overflow && (e = i[rs] < 0 || i[rs] > 11 ? rs : i[as] < 1 || i[as] > st(i[os], i[rs]) ? as : i[ls] < 0 || i[ls] > 24 || 24 === i[ls] && (0 !== i[hs] || 0 !== i[cs] || 0 !== i[us]) ? ls : i[hs] < 0 || i[hs] > 59 ? hs : i[cs] < 0 || i[cs] > 59 ? cs : i[us] < 0 || i[us] > 999 ? us : -1, f(t)._overflowDayOfYear && (e < os || e > as) && (e = as), f(t)._overflowWeeks && -1 === e && (e = ds), f(t)._overflowWeekday && -1 === e && (e = fs), f(t).overflow = e), t
    }

    function se(t) {
        var e, i, n, s, o, r, a = t._i,
            l = zs.exec(a) || Ws.exec(a);
        if (l) {
            for (f(t).iso = !0, e = 0, i = js.length; e < i; e++)
                if (js[e][1].exec(l[1])) {
                    s = js[e][0], n = !1 !== js[e][2];
                    break
                }
            if (null == s) return void(t._isValid = !1);
            if (l[3]) {
                for (e = 0, i = Hs.length; e < i; e++)
                    if (Hs[e][1].exec(l[3])) {
                        o = (l[2] || " ") + Hs[e][0];
                        break
                    }
                if (null == o) return void(t._isValid = !1)
            }
            if (!n && null != o) return void(t._isValid = !1);
            if (l[4]) {
                if (!Rs.exec(l[4])) return void(t._isValid = !1);
                r = "Z"
            }
            t._f = s + (o || "") + (r || ""), ue(t)
        } else t._isValid = !1
    }

    function oe(t) {
        var e, i, n, s, o, r, a, l, h = {
            " GMT": " +0000",
            " EDT": " -0400",
            " EST": " -0500",
            " CDT": " -0500",
            " CST": " -0600",
            " MDT": " -0600",
            " MST": " -0700",
            " PDT": " -0700",
            " PST": " -0800"
        };
        if (e = t._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), i = Is.exec(e)) {
            if (n = i[1] ? "ddd" + (5 === i[1].length ? ", " : " ") : "", s = "D MMM " + (i[2].length > 10 ? "YYYY " : "YY "), o = "HH:mm" + (i[4] ? ":ss" : ""), i[1]) {
                var c = new Date(i[2]),
                    u = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][c.getDay()];
                if (i[1].substr(0, 3) !== u) return f(t).weekdayMismatch = !0, void(t._isValid = !1)
            }
            switch (i[5].length) {
                case 2:
                    0 === l ? a = " +0000" : (l = "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(i[5][1].toUpperCase()) - 12, a = (l < 0 ? " -" : " +") + ("" + l).replace(/^-?/, "0").match(/..$/)[0] + "00");
                    break;
                case 4:
                    a = h[i[5]];
                    break;
                default:
                    a = h[" GMT"]
            }
            i[5] = a, t._i = i.splice(1).join(""), r = " ZZ", t._f = n + s + o + r, ue(t), f(t).rfc2822 = !0
        } else t._isValid = !1
    }

    function re(e) {
        var i = As.exec(e._i);
        return null !== i ? void(e._d = new Date(+i[1])) : (se(e), void(!1 === e._isValid && (delete e._isValid, oe(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e)))))
    }

    function ae(t, e, i) {
        return null != t ? t : null != e ? e : i
    }

    function le(e) {
        var i = new Date(t.now());
        return e._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
    }

    function he(t) {
        var e, i, n, s, o = [];
        if (!t._d) {
            for (n = le(t), t._w && null == t._a[as] && null == t._a[rs] && ce(t), null != t._dayOfYear && (s = ae(t._a[os], n[os]), (t._dayOfYear > pt(s) || 0 === t._dayOfYear) && (f(t)._overflowDayOfYear = !0), i = _t(s, 0, t._dayOfYear), t._a[rs] = i.getUTCMonth(), t._a[as] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = o[e] = n[e];
            for (; e < 7; e++) t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[ls] && 0 === t._a[hs] && 0 === t._a[cs] && 0 === t._a[us] && (t._nextDay = !0, t._a[ls] = 0), t._d = (t._useUTC ? _t : yt).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[ls] = 24)
        }
    }

    function ce(t) {
        var e, i, n, s, o, r, a, l;
        if (e = t._w, null != e.GG || null != e.W || null != e.E) o = 1, r = 4, i = ae(e.GG, t._a[os], bt(_e(), 1, 4).year), n = ae(e.W, 1), ((s = ae(e.E, 1)) < 1 || s > 7) && (l = !0);
        else {
            o = t._locale._week.dow, r = t._locale._week.doy;
            var h = bt(_e(), o, r);
            i = ae(e.gg, t._a[os], h.year), n = ae(e.w, h.week), null != e.d ? ((s = e.d) < 0 || s > 6) && (l = !0) : null != e.e ? (s = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : s = o
        }
        n < 1 || n > xt(i, o, r) ? f(t)._overflowWeeks = !0 : null != l ? f(t)._overflowWeekday = !0 : (a = Ct(i, n, s, o, r), t._a[os] = a.year, t._dayOfYear = a.dayOfYear)
    }

    function ue(e) {
        if (e._f === t.ISO_8601) return void se(e);
        if (e._f === t.RFC_2822) return void oe(e);
        e._a = [], f(e).empty = !0;
        var i, n, s, o, r, a = "" + e._i,
            l = a.length,
            h = 0;
        for (s = J(e._f, e._locale).match(Rn) || [], i = 0; i < s.length; i++) o = s[i], n = (a.match($(o, e)) || [])[0], n && (r = a.substr(0, a.indexOf(n)), r.length > 0 && f(e).unusedInput.push(r), a = a.slice(a.indexOf(n) + n.length), h += n.length), An[o] ? (n ? f(e).empty = !1 : f(e).unusedTokens.push(o), nt(o, n, e)) : e._strict && !n && f(e).unusedTokens.push(o);
        f(e).charsLeftOver = l - h, a.length > 0 && f(e).unusedInput.push(a), e._a[ls] <= 12 && !0 === f(e).bigHour && e._a[ls] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[ls] = de(e._locale, e._a[ls], e._meridiem), he(e), ne(e)
    }

    function de(t, e, i) {
        var n;
        return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? (n = t.isPM(i), n && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e
    }

    function fe(t) {
        var e, i, n, s, o;
        if (0 === t._f.length) return f(t).invalidFormat = !0, void(t._d = new Date(NaN));
        for (s = 0; s < t._f.length; s++) o = 0, e = m({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], ue(e), g(e) && (o += f(e).charsLeftOver, o += 10 * f(e).unusedTokens.length, f(e).score = o, (null == n || o < n) && (n = o, i = e));
        c(t, i || e)
    }

    function ge(t) {
        if (!t._d) {
            var e = H(t._i);
            t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                return t && parseInt(t, 10)
            }), he(t)
        }
    }

    function pe(t) {
        var e = new v(ne(me(t)));
        return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
    }

    function me(t) {
        var e = t._i,
            n = t._f;
        return t._locale = t._locale || ee(t._l), null === e || void 0 === n && "" === e ? p({
            nullInput: !0
        }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), y(e) ? new v(ne(e)) : (a(e) ? t._d = e : i(n) ? fe(t) : n ? ue(t) : ve(t), g(t) || (t._d = null), t))
    }

    function ve(e) {
        var s = e._i;
        o(s) ? e._d = new Date(t.now()) : a(s) ? e._d = new Date(s.valueOf()) : "string" == typeof s ? re(e) : i(s) ? (e._a = l(s.slice(0), function(t) {
            return parseInt(t, 10)
        }), he(e)) : n(s) ? ge(e) : r(s) ? e._d = new Date(s) : t.createFromInputFallback(e)
    }

    function ye(t, e, o, r, a) {
        var l = {};
        return !0 !== o && !1 !== o || (r = o, o = void 0), (n(t) && s(t) || i(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = o, l._i = t, l._f = e, l._strict = r, pe(l)
    }

    function _e(t, e, i, n) {
        return ye(t, e, i, n, !1)
    }

    function we(t, e) {
        var n, s;
        if (1 === e.length && i(e[0]) && (e = e[0]), !e.length) return _e();
        for (n = e[0], s = 1; s < e.length; ++s) e[s].isValid() && !e[s][t](n) || (n = e[s]);
        return n
    }

    function Ce() {
        return we("isBefore", [].slice.call(arguments, 0))
    }

    function be() {
        return we("isAfter", [].slice.call(arguments, 0))
    }

    function xe(t) {
        for (var e in t)
            if (-1 === Us.indexOf(e) || null != t[e] && isNaN(t[e])) return !1;
        for (var i = !1, n = 0; n < Us.length; ++n)
            if (t[Us[n]]) {
                if (i) return !1;
                parseFloat(t[Us[n]]) !== w(t[Us[n]]) && (i = !0)
            }
        return !0
    }

    function Se() {
        return this._isValid
    }

    function ke() {
        return Ue(NaN)
    }

    function Me(t) {
        var e = H(t),
            i = e.year || 0,
            n = e.quarter || 0,
            s = e.month || 0,
            o = e.week || 0,
            r = e.day || 0,
            a = e.hour || 0,
            l = e.minute || 0,
            h = e.second || 0,
            c = e.millisecond || 0;
        this._isValid = xe(e), this._milliseconds = +c + 1e3 * h + 6e4 * l + 1e3 * a * 60 * 60, this._days = +r + 7 * o, this._months = +s + 3 * n + 12 * i, this._data = {}, this._locale = ee(), this._bubble()
    }

    function De(t) {
        return t instanceof Me
    }

    function Oe(t) {
        return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function Te(t, e) {
        Z(t, 0, 0, function() {
            var t = this.utcOffset(),
                i = "+";
            return t < 0 && (t = -t, i = "-"), i + V(~~(t / 60), 2) + e + V(~~t % 60, 2)
        })
    }

    function $e(t, e) {
        var i = (e || "").match(t);
        if (null === i) return null;
        var n = i[i.length - 1] || [],
            s = (n + "").match(Gs) || ["-", 0, 0],
            o = 60 * s[1] + w(s[2]);
        return 0 === o ? 0 : "+" === s[0] ? o : -o
    }

    function Pe(e, i) {
        var n, s;
        return i._isUTC ? (n = i.clone(), s = (y(e) || a(e) ? e.valueOf() : _e(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), t.updateOffset(n, !1), n) : _e(e).local()
    }

    function Ye(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function Ee(e, i, n) {
        var s, o = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
            if ("string" == typeof e) {
                if (null === (e = $e(ts, e))) return this
            } else Math.abs(e) < 16 && !n && (e *= 60);
            return !this._isUTC && i && (s = Ye(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), o !== e && (!i || this._changeInProgress ? qe(this, Ue(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? o : Ye(this)
    }

    function ze(t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }

    function We(t) {
        return this.utcOffset(0, t)
    }

    function Re(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ye(this), "m")), this
    }

    function je() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var t = $e(Kn, this._i);
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
        }
        return this
    }

    function He(t) {
        return !!this.isValid() && (t = t ? _e(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
    }

    function Ae() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ie() {
        if (!o(this._isDSTShifted)) return this._isDSTShifted;
        var t = {};
        if (m(t, this), t = me(t), t._a) {
            var e = t._isUTC ? u(t._a) : _e(t._a);
            this._isDSTShifted = this.isValid() && C(t._a, e.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Ne() {
        return !!this.isValid() && !this._isUTC
    }

    function Le() {
        return !!this.isValid() && this._isUTC
    }

    function Fe() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }

    function Ue(t, e) {
        var i, n, s, o = t,
            a = null;
        return De(t) ? o = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : r(t) ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (a = Vs.exec(t)) ? (i = "-" === a[1] ? -1 : 1, o = {
            y: 0,
            d: w(a[as]) * i,
            h: w(a[ls]) * i,
            m: w(a[hs]) * i,
            s: w(a[cs]) * i,
            ms: w(Oe(1e3 * a[us])) * i
        }) : (a = Zs.exec(t)) ? (i = "-" === a[1] ? -1 : 1, o = {
            y: Ge(a[2], i),
            M: Ge(a[3], i),
            w: Ge(a[4], i),
            d: Ge(a[5], i),
            h: Ge(a[6], i),
            m: Ge(a[7], i),
            s: Ge(a[8], i)
        }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (s = Ze(_e(o.from), _e(o.to)), o = {}, o.ms = s.milliseconds, o.M = s.months), n = new Me(o), De(t) && h(t, "_locale") && (n._locale = t._locale), n
    }

    function Ge(t, e) {
        var i = t && parseFloat(t.replace(",", "."));
        return (isNaN(i) ? 0 : i) * e
    }

    function Ve(t, e) {
        var i = {
            milliseconds: 0,
            months: 0
        };
        return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
    }

    function Ze(t, e) {
        var i;
        return t.isValid() && e.isValid() ? (e = Pe(e, t), t.isBefore(e) ? i = Ve(t, e) : (i = Ve(e, t), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : {
            milliseconds: 0,
            months: 0
        }
    }

    function Be(t, e) {
        return function(i, n) {
            var s, o;
            return null === n || isNaN(+n) || (S(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = i, i = n, n = o), i = "string" == typeof i ? +i : i, s = Ue(i, n), qe(this, s, t), this
        }
    }

    function qe(e, i, n, s) {
        var o = i._milliseconds,
            r = Oe(i._days),
            a = Oe(i._months);
        e.isValid() && (s = null == s || s, o && e._d.setTime(e._d.valueOf() + o * n), r && F(e, "Date", L(e, "Date") + r * n), a && ht(e, L(e, "Month") + a * n), s && t.updateOffset(e, r || a))
    }

    function Qe(t, e) {
        var i = t.diff(e, "days", !0);
        return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
    }

    function Je(e, i) {
        var n = e || _e(),
            s = Pe(n, this).startOf("day"),
            o = t.calendarFormat(this, s) || "sameElse",
            r = i && (k(i[o]) ? i[o].call(this, n) : i[o]);
        return this.format(r || this.localeData().calendar(o, this, _e(n)))
    }

    function Xe() {
        return new v(this)
    }

    function Ke(t, e) {
        var i = y(t) ? t : _e(t);
        return !(!this.isValid() || !i.isValid()) && (e = j(o(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
    }

    function ti(t, e) {
        var i = y(t) ? t : _e(t);
        return !(!this.isValid() || !i.isValid()) && (e = j(o(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
    }

    function ei(t, e, i, n) {
        return n = n || "()", ("(" === n[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i))
    }

    function ii(t, e) {
        var i, n = y(t) ? t : _e(t);
        return !(!this.isValid() || !n.isValid()) && (e = j(e || "millisecond"), "millisecond" === e ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
    }

    function ni(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }

    function si(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }

    function oi(t, e, i) {
        var n, s, o, r;
        return this.isValid() ? (n = Pe(t, this), n.isValid() ? (s = 6e4 * (n.utcOffset() - this.utcOffset()), e = j(e), "year" === e || "month" === e || "quarter" === e ? (r = ri(this, n), "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (o = this - n, r = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - s) / 864e5 : "week" === e ? (o - s) / 6048e5 : o), i ? r : _(r)) : NaN) : NaN
    }

    function ri(t, e) {
        var i, n, s = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            o = t.clone().add(s, "months");
        return e - o < 0 ? (i = t.clone().add(s - 1, "months"), n = (e - o) / (o - i)) : (i = t.clone().add(s + 1, "months"), n = (e - o) / (i - o)), -(s + n) || 0
    }

    function ai() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function li() {
        if (!this.isValid()) return null;
        var t = this.clone().utc();
        return t.year() < 0 || t.year() > 9999 ? Q(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : k(Date.prototype.toISOString) ? this.toDate().toISOString() : Q(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function hi() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t = "moment",
            e = "";
        this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
        var i = "[" + t + '("]',
            n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            s = e + '[")]';
        return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + s)
    }

    function ci(e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var i = Q(this, e);
        return this.localeData().postformat(i)
    }

    function ui(t, e) {
        return this.isValid() && (y(t) && t.isValid() || _e(t).isValid()) ? Ue({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function di(t) {
        return this.from(_e(), t)
    }

    function fi(t, e) {
        return this.isValid() && (y(t) && t.isValid() || _e(t).isValid()) ? Ue({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function gi(t) {
        return this.to(_e(), t)
    }

    function pi(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (e = ee(t), null != e && (this._locale = e), this)
    }

    function mi() {
        return this._locale
    }

    function vi(t) {
        switch (t = j(t)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function yi(t) {
        return t = j(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
    }

    function _i() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function wi() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function Ci() {
        return new Date(this.valueOf())
    }

    function bi() {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }

    function xi() {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }

    function Si() {
        return this.isValid() ? this.toISOString() : null
    }

    function ki() {
        return g(this)
    }

    function Mi() {
        return c({}, f(this))
    }

    function Di() {
        return f(this).overflow
    }

    function Oi() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function Ti(t, e) {
        Z(0, [t, t.length], 0, e)
    }

    function $i(t) {
        return zi.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Pi(t) {
        return zi.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Yi() {
        return xt(this.year(), 1, 4)
    }

    function Ei() {
        var t = this.localeData()._week;
        return xt(this.year(), t.dow, t.doy)
    }

    function zi(t, e, i, n, s) {
        var o;
        return null == t ? bt(this, n, s).year : (o = xt(t, n, s), e > o && (e = o), Wi.call(this, t, e, i, n, s))
    }

    function Wi(t, e, i, n, s) {
        var o = Ct(t, e, i, n, s),
            r = _t(o.year, 0, o.dayOfYear);
        return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
    }

    function Ri(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }

    function ji(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }

    function Hi(t, e) {
        e[us] = w(1e3 * ("0." + t))
    }

    function Ai() {
        return this._isUTC ? "UTC" : ""
    }

    function Ii() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Ni(t) {
        return _e(1e3 * t)
    }

    function Li() {
        return _e.apply(null, arguments).parseZone()
    }

    function Fi(t) {
        return t
    }

    function Ui(t, e, i, n) {
        var s = ee(),
            o = u().set(n, e);
        return s[i](o, t)
    }

    function Gi(t, e, i) {
        if (r(t) && (e = t, t = void 0), t = t || "", null != e) return Ui(t, e, i, "month");
        var n, s = [];
        for (n = 0; n < 12; n++) s[n] = Ui(t, n, i, "month");
        return s
    }

    function Vi(t, e, i, n) {
        "boolean" == typeof t ? (r(e) && (i = e, e = void 0), e = e || "") : (e = t, i = e, t = !1, r(e) && (i = e, e = void 0), e = e || "");
        var s = ee(),
            o = t ? s._week.dow : 0;
        if (null != i) return Ui(e, (i + o) % 7, n, "day");
        var a, l = [];
        for (a = 0; a < 7; a++) l[a] = Ui(e, (a + o) % 7, n, "day");
        return l
    }

    function Zi(t, e) {
        return Gi(t, e, "months")
    }

    function Bi(t, e) {
        return Gi(t, e, "monthsShort")
    }

    function qi(t, e, i) {
        return Vi(t, e, i, "weekdays")
    }

    function Qi(t, e, i) {
        return Vi(t, e, i, "weekdaysShort")
    }

    function Ji(t, e, i) {
        return Vi(t, e, i, "weekdaysMin")
    }

    function Xi() {
        var t = this._data;
        return this._milliseconds = so(this._milliseconds), this._days = so(this._days), this._months = so(this._months), t.milliseconds = so(t.milliseconds), t.seconds = so(t.seconds), t.minutes = so(t.minutes), t.hours = so(t.hours), t.months = so(t.months), t.years = so(t.years), this
    }

    function Ki(t, e, i, n) {
        var s = Ue(e, i);
        return t._milliseconds += n * s._milliseconds, t._days += n * s._days, t._months += n * s._months, t._bubble()
    }

    function tn(t, e) {
        return Ki(this, t, e, 1)
    }

    function en(t, e) {
        return Ki(this, t, e, -1)
    }

    function nn(t) {
        return t < 0 ? Math.floor(t) : Math.ceil(t)
    }

    function sn() {
        var t, e, i, n, s, o = this._milliseconds,
            r = this._days,
            a = this._months,
            l = this._data;
        return o >= 0 && r >= 0 && a >= 0 || o <= 0 && r <= 0 && a <= 0 || (o += 864e5 * nn(rn(a) + r), r = 0, a = 0), l.milliseconds = o % 1e3, t = _(o / 1e3), l.seconds = t % 60, e = _(t / 60), l.minutes = e % 60, i = _(e / 60), l.hours = i % 24, r += _(i / 24), s = _(on(r)), a += s, r -= nn(rn(s)), n = _(a / 12), a %= 12, l.days = r, l.months = a, l.years = n, this
    }

    function on(t) {
        return 4800 * t / 146097
    }

    function rn(t) {
        return 146097 * t / 4800
    }

    function an(t) {
        if (!this.isValid()) return NaN;
        var e, i, n = this._milliseconds;
        if ("month" === (t = j(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + on(e), "month" === t ? i : i / 12;
        switch (e = this._days + Math.round(rn(this._months)), t) {
            case "week":
                return e / 7 + n / 6048e5;
            case "day":
                return e + n / 864e5;
            case "hour":
                return 24 * e + n / 36e5;
            case "minute":
                return 1440 * e + n / 6e4;
            case "second":
                return 86400 * e + n / 1e3;
            case "millisecond":
                return Math.floor(864e5 * e) + n;
            default:
                throw new Error("Unknown unit " + t)
        }
    }

    function ln() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN
    }

    function hn(t) {
        return function() {
            return this.as(t)
        }
    }

    function cn(t) {
        return t = j(t), this.isValid() ? this[t + "s"]() : NaN
    }

    function un(t) {
        return function() {
            return this.isValid() ? this._data[t] : NaN
        }
    }

    function dn() {
        return _(this.days() / 7)
    }

    function fn(t, e, i, n, s) {
        return s.relativeTime(e || 1, !!i, t, n)
    }

    function gn(t, e, i) {
        var n = Ue(t).abs(),
            s = Co(n.as("s")),
            o = Co(n.as("m")),
            r = Co(n.as("h")),
            a = Co(n.as("d")),
            l = Co(n.as("M")),
            h = Co(n.as("y")),
            c = s <= bo.ss && ["s", s] || s < bo.s && ["ss", s] || o <= 1 && ["m"] || o < bo.m && ["mm", o] || r <= 1 && ["h"] || r < bo.h && ["hh", r] || a <= 1 && ["d"] || a < bo.d && ["dd", a] || l <= 1 && ["M"] || l < bo.M && ["MM", l] || h <= 1 && ["y"] || ["yy", h];
        return c[2] = e, c[3] = +t > 0, c[4] = i, fn.apply(null, c)
    }

    function pn(t) {
        return void 0 === t ? Co : "function" == typeof t && (Co = t, !0)
    }

    function mn(t, e) {
        return void 0 !== bo[t] && (void 0 === e ? bo[t] : (bo[t] = e, "s" === t && (bo.ss = e - 1), !0))
    }

    function vn(t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e = this.localeData(),
            i = gn(this, !t, e);
        return t && (i = e.pastFuture(+this, i)), e.postformat(i)
    }

    function yn() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t, e, i, n = xo(this._milliseconds) / 1e3,
            s = xo(this._days),
            o = xo(this._months);
        t = _(n / 60), e = _(t / 60), n %= 60, t %= 60, i = _(o / 12), o %= 12;
        var r = i,
            a = o,
            l = s,
            h = e,
            c = t,
            u = n,
            d = this.asSeconds();
        return d ? (d < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (a ? a + "M" : "") + (l ? l + "D" : "") + (h || c || u ? "T" : "") + (h ? h + "H" : "") + (c ? c + "M" : "") + (u ? u + "S" : "") : "P0D"
    }
    var _n, wn;
    wn = Array.prototype.some ? Array.prototype.some : function(t) {
        for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
            if (n in e && t.call(this, e[n], n, e)) return !0;
        return !1
    };
    var Cn = wn,
        bn = t.momentProperties = [],
        xn = !1,
        Sn = {};
    t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
    var kn;
    kn = Object.keys ? Object.keys : function(t) {
        var e, i = [];
        for (e in t) h(t, e) && i.push(e);
        return i
    };
    var Mn, Dn = kn,
        On = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        Tn = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        $n = "Invalid date",
        Pn = "%d",
        Yn = /\d{1,2}/,
        En = {
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
        zn = {},
        Wn = {},
        Rn = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        jn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Hn = {},
        An = {},
        In = /\d/,
        Nn = /\d\d/,
        Ln = /\d{3}/,
        Fn = /\d{4}/,
        Un = /[+-]?\d{6}/,
        Gn = /\d\d?/,
        Vn = /\d\d\d\d?/,
        Zn = /\d\d\d\d\d\d?/,
        Bn = /\d{1,3}/,
        qn = /\d{1,4}/,
        Qn = /[+-]?\d{1,6}/,
        Jn = /\d+/,
        Xn = /[+-]?\d+/,
        Kn = /Z|[+-]\d\d:?\d\d/gi,
        ts = /Z|[+-]\d\d(?::?\d\d)?/gi,
        es = /[+-]?\d+(\.\d{1,3})?/,
        is = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        ns = {},
        ss = {},
        os = 0,
        rs = 1,
        as = 2,
        ls = 3,
        hs = 4,
        cs = 5,
        us = 6,
        ds = 7,
        fs = 8;
    Mn = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
        var e;
        for (e = 0; e < this.length; ++e)
            if (this[e] === t) return e;
        return -1
    };
    var gs = Mn;
    Z("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), Z("MMM", 0, 0, function(t) {
        return this.localeData().monthsShort(this, t)
    }), Z("MMMM", 0, 0, function(t) {
        return this.localeData().months(this, t)
    }), R("month", "M"), A("month", 8), X("M", Gn), X("MM", Gn, Nn), X("MMM", function(t, e) {
        return e.monthsShortRegex(t)
    }), X("MMMM", function(t, e) {
        return e.monthsRegex(t)
    }), et(["M", "MM"], function(t, e) {
        e[rs] = w(t) - 1
    }), et(["MMM", "MMMM"], function(t, e, i, n) {
        var s = i._locale.monthsParse(t, n, i._strict);
        null != s ? e[rs] = s : f(i).invalidMonth = t
    });
    var ps = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        ms = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        vs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        ys = is,
        _s = is;
    Z("Y", 0, 0, function() {
        var t = this.year();
        return t <= 9999 ? "" + t : "+" + t
    }), Z(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), Z(0, ["YYYY", 4], 0, "year"), Z(0, ["YYYYY", 5], 0, "year"), Z(0, ["YYYYYY", 6, !0], 0, "year"), R("year", "y"), A("year", 1), X("Y", Xn), X("YY", Gn, Nn), X("YYYY", qn, Fn), X("YYYYY", Qn, Un), X("YYYYYY", Qn, Un), et(["YYYYY", "YYYYYY"], os), et("YYYY", function(e, i) {
        i[os] = 2 === e.length ? t.parseTwoDigitYear(e) : w(e)
    }), et("YY", function(e, i) {
        i[os] = t.parseTwoDigitYear(e)
    }), et("Y", function(t, e) {
        e[os] = parseInt(t, 10)
    }), t.parseTwoDigitYear = function(t) {
        return w(t) + (w(t) > 68 ? 1900 : 2e3)
    };
    var ws = N("FullYear", !0);
    Z("w", ["ww", 2], "wo", "week"), Z("W", ["WW", 2], "Wo", "isoWeek"), R("week", "w"), R("isoWeek", "W"), A("week", 5), A("isoWeek", 5), X("w", Gn), X("ww", Gn, Nn), X("W", Gn), X("WW", Gn, Nn), it(["w", "ww", "W", "WW"], function(t, e, i, n) {
        e[n.substr(0, 1)] = w(t)
    });
    var Cs = {
        dow: 0,
        doy: 6
    };
    Z("d", 0, "do", "day"), Z("dd", 0, 0, function(t) {
        return this.localeData().weekdaysMin(this, t)
    }), Z("ddd", 0, 0, function(t) {
        return this.localeData().weekdaysShort(this, t)
    }), Z("dddd", 0, 0, function(t) {
        return this.localeData().weekdays(this, t)
    }), Z("e", 0, 0, "weekday"), Z("E", 0, 0, "isoWeekday"), R("day", "d"), R("weekday", "e"), R("isoWeekday", "E"), A("day", 11), A("weekday", 11), A("isoWeekday", 11), X("d", Gn), X("e", Gn), X("E", Gn), X("dd", function(t, e) {
        return e.weekdaysMinRegex(t)
    }), X("ddd", function(t, e) {
        return e.weekdaysShortRegex(t)
    }), X("dddd", function(t, e) {
        return e.weekdaysRegex(t)
    }), it(["dd", "ddd", "dddd"], function(t, e, i, n) {
        var s = i._locale.weekdaysParse(t, n, i._strict);
        null != s ? e.d = s : f(i).invalidWeekday = t
    }), it(["d", "e", "E"], function(t, e, i, n) {
        e[n] = w(t)
    });
    var bs = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        xs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Ss = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        ks = is,
        Ms = is,
        Ds = is;
    Z("H", ["HH", 2], 0, "hour"), Z("h", ["hh", 2], 0, Ft), Z("k", ["kk", 2], 0, Ut), Z("hmm", 0, 0, function() {
        return "" + Ft.apply(this) + V(this.minutes(), 2)
    }), Z("hmmss", 0, 0, function() {
        return "" + Ft.apply(this) + V(this.minutes(), 2) + V(this.seconds(), 2)
    }), Z("Hmm", 0, 0, function() {
        return "" + this.hours() + V(this.minutes(), 2)
    }), Z("Hmmss", 0, 0, function() {
        return "" + this.hours() + V(this.minutes(), 2) + V(this.seconds(), 2)
    }), Gt("a", !0), Gt("A", !1), R("hour", "h"), A("hour", 13), X("a", Vt), X("A", Vt), X("H", Gn), X("h", Gn), X("k", Gn), X("HH", Gn, Nn), X("hh", Gn, Nn), X("kk", Gn, Nn), X("hmm", Vn), X("hmmss", Zn), X("Hmm", Vn), X("Hmmss", Zn), et(["H", "HH"], ls), et(["k", "kk"], function(t, e, i) {
        var n = w(t);
        e[ls] = 24 === n ? 0 : n
    }), et(["a", "A"], function(t, e, i) {
        i._isPm = i._locale.isPM(t), i._meridiem = t
    }), et(["h", "hh"], function(t, e, i) {
        e[ls] = w(t), f(i).bigHour = !0
    }), et("hmm", function(t, e, i) {
        var n = t.length - 2;
        e[ls] = w(t.substr(0, n)), e[hs] = w(t.substr(n)), f(i).bigHour = !0
    }), et("hmmss", function(t, e, i) {
        var n = t.length - 4,
            s = t.length - 2;
        e[ls] = w(t.substr(0, n)), e[hs] = w(t.substr(n, 2)), e[cs] = w(t.substr(s)), f(i).bigHour = !0
    }), et("Hmm", function(t, e, i) {
        var n = t.length - 2;
        e[ls] = w(t.substr(0, n)), e[hs] = w(t.substr(n))
    }), et("Hmmss", function(t, e, i) {
        var n = t.length - 4,
            s = t.length - 2;
        e[ls] = w(t.substr(0, n)), e[hs] = w(t.substr(n, 2)), e[cs] = w(t.substr(s))
    });
    var Os, Ts = /[ap]\.?m?\.?/i,
        $s = N("Hours", !0),
        Ps = {
            calendar: On,
            longDateFormat: Tn,
            invalidDate: $n,
            ordinal: Pn,
            dayOfMonthOrdinalParse: Yn,
            relativeTime: En,
            months: ms,
            monthsShort: vs,
            week: Cs,
            weekdays: bs,
            weekdaysMin: Ss,
            weekdaysShort: xs,
            meridiemParse: Ts
        },
        Ys = {},
        Es = {},
        zs = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Ws = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Rs = /Z|[+-]\d\d(?::?\d\d)?/,
        js = [
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
        Hs = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        As = /^\/?Date\((\-?\d+)/i,
        Is = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
    t.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
    var Ns = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var t = _e.apply(null, arguments);
            return this.isValid() && t.isValid() ? t < this ? this : t : p()
        }),
        Ls = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var t = _e.apply(null, arguments);
            return this.isValid() && t.isValid() ? t > this ? this : t : p()
        }),
        Fs = function() {
            return Date.now ? Date.now() : +new Date
        },
        Us = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Te("Z", ":"), Te("ZZ", ""), X("Z", ts), X("ZZ", ts), et(["Z", "ZZ"], function(t, e, i) {
        i._useUTC = !0, i._tzm = $e(ts, t)
    });
    var Gs = /([\+\-]|\d\d)/gi;
    t.updateOffset = function() {};
    var Vs = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Zs = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Ue.fn = Me.prototype, Ue.invalid = ke;
    var Bs = Be(1, "add"),
        qs = Be(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Qs = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });
    Z(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), Z(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), Ti("gggg", "weekYear"), Ti("ggggg", "weekYear"), Ti("GGGG", "isoWeekYear"), Ti("GGGGG", "isoWeekYear"), R("weekYear", "gg"), R("isoWeekYear", "GG"), A("weekYear", 1), A("isoWeekYear", 1), X("G", Xn), X("g", Xn), X("GG", Gn, Nn), X("gg", Gn, Nn), X("GGGG", qn, Fn), X("gggg", qn, Fn), X("GGGGG", Qn, Un), X("ggggg", Qn, Un), it(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, n) {
        e[n.substr(0, 2)] = w(t)
    }), it(["gg", "GG"], function(e, i, n, s) {
        i[s] = t.parseTwoDigitYear(e)
    }), Z("Q", 0, "Qo", "quarter"), R("quarter", "Q"), A("quarter", 7), X("Q", In), et("Q", function(t, e) {
        e[rs] = 3 * (w(t) - 1)
    }), Z("D", ["DD", 2], "Do", "date"), R("date", "D"), A("date", 9), X("D", Gn), X("DD", Gn, Nn), X("Do", function(t, e) {
        return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
    }), et(["D", "DD"], as), et("Do", function(t, e) {
        e[as] = w(t.match(Gn)[0], 10)
    });
    var Js = N("Date", !0);
    Z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), R("dayOfYear", "DDD"), A("dayOfYear", 4), X("DDD", Bn), X("DDDD", Ln), et(["DDD", "DDDD"], function(t, e, i) {
        i._dayOfYear = w(t)
    }), Z("m", ["mm", 2], 0, "minute"), R("minute", "m"), A("minute", 14), X("m", Gn), X("mm", Gn, Nn), et(["m", "mm"], hs);
    var Xs = N("Minutes", !1);
    Z("s", ["ss", 2], 0, "second"), R("second", "s"), A("second", 15), X("s", Gn), X("ss", Gn, Nn), et(["s", "ss"], cs);
    var Ks = N("Seconds", !1);
    Z("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), Z(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), Z(0, ["SSS", 3], 0, "millisecond"), Z(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), Z(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), Z(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), Z(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), Z(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), Z(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), R("millisecond", "ms"), A("millisecond", 16), X("S", Bn, In), X("SS", Bn, Nn), X("SSS", Bn, Ln);
    var to;
    for (to = "SSSS"; to.length <= 9; to += "S") X(to, Jn);
    for (to = "S"; to.length <= 9; to += "S") et(to, Hi);
    var eo = N("Milliseconds", !1);
    Z("z", 0, 0, "zoneAbbr"), Z("zz", 0, 0, "zoneName");
    var io = v.prototype;
    io.add = Bs, io.calendar = Je, io.clone = Xe, io.diff = oi, io.endOf = yi, io.format = ci, io.from = ui, io.fromNow = di, io.to = fi, io.toNow = gi, io.get = U, io.invalidAt = Di, io.isAfter = Ke, io.isBefore = ti, io.isBetween = ei, io.isSame = ii, io.isSameOrAfter = ni, io.isSameOrBefore = si, io.isValid = ki, io.lang = Qs, io.locale = pi, io.localeData = mi, io.max = Ls, io.min = Ns, io.parsingFlags = Mi, io.set = G, io.startOf = vi, io.subtract = qs, io.toArray = bi, io.toObject = xi, io.toDate = Ci, io.toISOString = li, io.inspect = hi, io.toJSON = Si, io.toString = ai, io.unix = wi, io.valueOf = _i, io.creationData = Oi, io.year = ws, io.isLeapYear = vt, io.weekYear = $i, io.isoWeekYear = Pi, io.quarter = io.quarters = Ri, io.month = ct, io.daysInMonth = ut, io.week = io.weeks = Dt, io.isoWeek = io.isoWeeks = Ot, io.weeksInYear = Ei, io.isoWeeksInYear = Yi, io.date = Js, io.day = io.days = Rt, io.weekday = jt, io.isoWeekday = Ht, io.dayOfYear = ji, io.hour = io.hours = $s, io.minute = io.minutes = Xs, io.second = io.seconds = Ks, io.millisecond = io.milliseconds = eo, io.utcOffset = Ee, io.utc = We, io.local = Re, io.parseZone = je, io.hasAlignedHourOffset = He, io.isDST = Ae, io.isLocal = Ne, io.isUtcOffset = Le, io.isUtc = Fe, io.isUTC = Fe, io.zoneAbbr = Ai, io.zoneName = Ii, io.dates = x("dates accessor is deprecated. Use date instead.", Js), io.months = x("months accessor is deprecated. Use month instead", ct), io.years = x("years accessor is deprecated. Use year instead", ws), io.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", ze), io.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ie);
    var no = O.prototype;
    no.calendar = T, no.longDateFormat = P, no.invalidDate = Y, no.ordinal = E, no.preparse = Fi, no.postformat = Fi, no.relativeTime = z, no.pastFuture = W, no.set = M, no.months = ot, no.monthsShort = rt, no.monthsParse = lt, no.monthsRegex = ft, no.monthsShortRegex = dt, no.week = St, no.firstDayOfYear = Mt, no.firstDayOfWeek = kt, no.weekdays = Pt, no.weekdaysMin = Et, no.weekdaysShort = Yt, no.weekdaysParse = Wt, no.weekdaysRegex = At, no.weekdaysShortRegex = It, no.weekdaysMinRegex = Nt, no.isPM = Zt, no.meridiem = Bt, Xt("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(t) {
            var e = t % 10;
            return t + (1 === w(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        }
    }), t.lang = x("moment.lang is deprecated. Use moment.locale instead.", Xt), t.langData = x("moment.langData is deprecated. Use moment.localeData instead.", ee);
    var so = Math.abs,
        oo = hn("ms"),
        ro = hn("s"),
        ao = hn("m"),
        lo = hn("h"),
        ho = hn("d"),
        co = hn("w"),
        uo = hn("M"),
        fo = hn("y"),
        go = un("milliseconds"),
        po = un("seconds"),
        mo = un("minutes"),
        vo = un("hours"),
        yo = un("days"),
        _o = un("months"),
        wo = un("years"),
        Co = Math.round,
        bo = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        xo = Math.abs,
        So = Me.prototype;
    return So.isValid = Se, So.abs = Xi, So.add = tn, So.subtract = en, So.as = an, So.asMilliseconds = oo, So.asSeconds = ro, So.asMinutes = ao, So.asHours = lo, So.asDays = ho, So.asWeeks = co, So.asMonths = uo, So.asYears = fo, So.valueOf = ln, So._bubble = sn, So.get = cn, So.milliseconds = go, So.seconds = po, So.minutes = mo, So.hours = vo, So.days = yo, So.weeks = dn, So.months = _o, So.years = wo, So.humanize = vn, So.toISOString = yn, So.toString = yn, So.toJSON = yn, So.locale = pi, So.localeData = mi, So.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", yn), So.lang = Qs, Z("X", 0, 0, "unix"), Z("x", 0, 0, "valueOf"), X("x", Xn), X("X", es), et("X", function(t, e, i) {
        i._d = new Date(1e3 * parseFloat(t, 10))
    }), et("x", function(t, e, i) {
        i._d = new Date(w(t))
    }), t.version = "2.18.1", e(_e), t.fn = io, t.min = Ce, t.max = be, t.now = Fs, t.utc = u, t.unix = Ni, t.months = Zi, t.isDate = a, t.locale = Xt, t.invalid = p, t.duration = Ue, t.isMoment = y, t.weekdays = qi, t.parseZone = Li, t.localeData = ee, t.isDuration = De, t.monthsShort = Bi, t.weekdaysMin = Ji, t.defineLocale = Kt, t.updateLocale = te, t.locales = ie, t.weekdaysShort = Qi, t.normalizeUnits = j, t.relativeTimeRounding = pn, t.relativeTimeThreshold = mn, t.calendarFormat = Qe, t.prototype = io, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["moment"], e) : "object" == typeof module && module.exports ? module.exports = e(require("moment")) : e(t.moment)
}(this, function(t) {
    "use strict";

    function e(t) {
        return t > 96 ? t - 87 : t > 64 ? t - 29 : t - 48
    }

    function i(t) {
        var i, n = 0,
            s = t.split("."),
            o = s[0],
            r = s[1] || "",
            a = 1,
            l = 0,
            h = 1;
        for (45 === t.charCodeAt(0) && (n = 1, h = -1), n; n < o.length; n++) i = e(o.charCodeAt(n)), l = 60 * l + i;
        for (n = 0; n < r.length; n++) a /= 60, i = e(r.charCodeAt(n)), l += i * a;
        return l * h
    }

    function n(t) {
        for (var e = 0; e < t.length; e++) t[e] = i(t[e])
    }

    function s(t, e) {
        for (var i = 0; i < e; i++) t[i] = Math.round((t[i - 1] || 0) + 6e4 * t[i]);
        t[e - 1] = 1 / 0
    }

    function o(t, e) {
        var i, n = [];
        for (i = 0; i < e.length; i++) n[i] = t[e[i]];
        return n
    }

    function r(t) {
        var e = t.split("|"),
            i = e[2].split(" "),
            r = e[3].split(""),
            a = e[4].split(" ");
        return n(i), n(r), n(a), s(a, r.length), {
            name: e[0],
            abbrs: o(e[1].split(" "), r),
            offsets: o(i, r),
            untils: a,
            population: 0 | e[5]
        }
    }

    function a(t) {
        t && this._set(r(t))
    }

    function l(t) {
        var e = t.toTimeString(),
            i = e.match(/\([a-z ]+\)/i);
        i && i[0] ? (i = i[0].match(/[A-Z]/g), i = i ? i.join("") : void 0) : (i = e.match(/[A-Z]{3,5}/g), i = i ? i[0] : void 0), "GMT" === i && (i = void 0), this.at = +t, this.abbr = i, this.offset = t.getTimezoneOffset()
    }

    function h(t) {
        this.zone = t, this.offsetScore = 0, this.abbrScore = 0
    }

    function c(t, e) {
        for (var i, n; n = 6e4 * ((e.at - t.at) / 12e4 | 0);) i = new l(new Date(t.at + n)), i.offset === t.offset ? t = i : e = i;
        return t
    }

    function u() {
        var t, e, i, n = (new Date).getFullYear() - 2,
            s = new l(new Date(n, 0, 1)),
            o = [s];
        for (i = 1; i < 48; i++) e = new l(new Date(n, i, 1)), e.offset !== s.offset && (t = c(s, e), o.push(t), o.push(new l(new Date(t.at + 6e4)))), s = e;
        for (i = 0; i < 4; i++) o.push(new l(new Date(n + i, 0, 1))), o.push(new l(new Date(n + i, 6, 1)));
        return o
    }

    function d(t, e) {
        return t.offsetScore !== e.offsetScore ? t.offsetScore - e.offsetScore : t.abbrScore !== e.abbrScore ? t.abbrScore - e.abbrScore : e.zone.population - t.zone.population
    }

    function f(t, e) {
        var i, s;
        for (n(e), i = 0; i < e.length; i++) s = e[i], z[s] = z[s] || {}, z[s][t] = !0
    }

    function g(t) {
        var e, i, n, s = t.length,
            o = {},
            r = [];
        for (e = 0; e < s; e++) {
            n = z[t[e].offset] || {};
            for (i in n) n.hasOwnProperty(i) && (o[i] = !0)
        }
        for (e in o) o.hasOwnProperty(e) && r.push(E[e]);
        return r
    }

    function p() {
        try {
            var t = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (t) {
                var e = E[v(t)];
                if (e) return e;
                k("Moment Timezone found " + t + " from the Intl api, but did not have that data loaded.")
            }
        } catch (t) {}
        var i, n, s, o = u(),
            r = o.length,
            a = g(o),
            l = [];
        for (n = 0; n < a.length; n++) {
            for (i = new h(_(a[n]), r), s = 0; s < r; s++) i.scoreOffsetAt(o[s]);
            l.push(i)
        }
        return l.sort(d), l.length > 0 ? l[0].zone.name : void 0
    }

    function m(t) {
        return T && !t || (T = p()), T
    }

    function v(t) {
        return (t || "").toLowerCase().replace(/\//g, "_")
    }

    function y(t) {
        var e, i, n, s;
        for ("string" == typeof t && (t = [t]), e = 0; e < t.length; e++) n = t[e].split("|"), i = n[0], s = v(i), P[s] = t[e], E[s] = i, n[5] && f(s, n[2].split(" "))
    }

    function _(t, e) {
        t = v(t);
        var i, n = P[t];
        return n instanceof a ? n : "string" == typeof n ? (n = new a(n), P[t] = n, n) : Y[t] && e !== _ && (i = _(Y[t], _)) ? (n = P[t] = new a, n._set(i), n.name = E[t], n) : null
    }

    function w() {
        var t, e = [];
        for (t in E) E.hasOwnProperty(t) && (P[t] || P[Y[t]]) && E[t] && e.push(E[t]);
        return e.sort()
    }

    function C(t) {
        var e, i, n, s;
        for ("string" == typeof t && (t = [t]), e = 0; e < t.length; e++) i = t[e].split("|"), n = v(i[0]), s = v(i[1]), Y[n] = s, E[n] = i[0], Y[s] = n, E[s] = i[1]
    }

    function b(t) {
        y(t.zones), C(t.links), M.dataVersion = t.version
    }

    function x(t) {
        return x.didShowError || (x.didShowError = !0, k("moment.tz.zoneExists('" + t + "') has been deprecated in favor of !moment.tz.zone('" + t + "')")), !!_(t)
    }

    function S(t) {
        return !(!t._a || void 0 !== t._tzm)
    }

    function k(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t)
    }

    function M(e) {
        var i = Array.prototype.slice.call(arguments, 0, -1),
            n = arguments[arguments.length - 1],
            s = _(n),
            o = t.utc.apply(null, i);
        return s && !t.isMoment(e) && S(o) && o.add(s.parse(o), "minutes"), o.tz(n), o
    }

    function D(t) {
        return function() {
            return this._z ? this._z.abbr(this) : t.call(this)
        }
    }

    function O(t) {
        return function() {
            return this._z = null, t.apply(this, arguments)
        }
    }
    var T, P = {},
        Y = {},
        E = {},
        z = {},
        W = t.version.split("."),
        R = +W[0],
        j = +W[1];
    (R < 2 || 2 === R && j < 6) && k("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + t.version + ". See momentjs.com"), a.prototype = {
        _set: function(t) {
            this.name = t.name, this.abbrs = t.abbrs, this.untils = t.untils, this.offsets = t.offsets, this.population = t.population
        },
        _index: function(t) {
            var e, i = +t,
                n = this.untils;
            for (e = 0; e < n.length; e++)
                if (i < n[e]) return e
        },
        parse: function(t) {
            var e, i, n, s, o = +t,
                r = this.offsets,
                a = this.untils,
                l = a.length - 1;
            for (s = 0; s < l; s++)
                if (e = r[s], i = r[s + 1], n = r[s ? s - 1 : s], e < i && M.moveAmbiguousForward ? e = i : e > n && M.moveInvalidForward && (e = n), o < a[s] - 6e4 * e) return r[s];
            return r[l]
        },
        abbr: function(t) {
            return this.abbrs[this._index(t)]
        },
        offset: function(t) {
            return this.offsets[this._index(t)]
        }
    }, h.prototype.scoreOffsetAt = function(t) {
        this.offsetScore += Math.abs(this.zone.offset(t.at) - t.offset), this.zone.abbr(t.at).replace(/[^A-Z]/g, "") !== t.abbr && this.abbrScore++
    }, M.version = "0.5.13", M.dataVersion = "", M._zones = P, M._links = Y, M._names = E, M.add = y, M.link = C, M.load = b, M.zone = _, M.zoneExists = x, M.guess = m, M.names = w, M.Zone = a, M.unpack = r, M.unpackBase60 = i, M.needsOffset = S, M.moveInvalidForward = !0, M.moveAmbiguousForward = !1;
    var H = t.fn;
    t.tz = M, t.defaultZone = null, t.updateOffset = function(e, i) {
        var n, s = t.defaultZone;
        void 0 === e._z && (s && S(e) && !e._isUTC && (e._d = t.utc(e._a)._d, e.utc().add(s.parse(e), "minutes")), e._z = s), e._z && (n = e._z.offset(e), Math.abs(n) < 16 && (n /= 60), void 0 !== e.utcOffset ? e.utcOffset(-n, i) : e.zone(n, i))
    }, H.tz = function(e) {
        return e ? (this._z = _(e), this._z ? t.updateOffset(this) : k("Moment Timezone has no data for " + e + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this) : this._z ? this._z.name : void 0
    }, H.zoneName = D(H.zoneName), H.zoneAbbr = D(H.zoneAbbr), H.utc = O(H.utc), t.tz.setDefault = function(e) {
        return (R < 2 || 2 === R && j < 9) && k("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + t.version + "."), t.defaultZone = e ? _(e) : null, t
    };
    var A = t.momentProperties;
    return "[object Array]" === Object.prototype.toString.call(A) ? (A.push("_z"), A.push("_a")) : A && (A._z = null), t
}), jQuery(document).ready(function($) {
    function t() {
        g >= f.height() - f.height() / 4 ? $("body").addClass("show-all-links") : $("body").removeClass("show-all-links")
    }

    function e() {
        $(this).scrollTop() > 2 * f.height() ? $("body").addClass("sticky-nav-enabled") : $("body").hasClass("sticky-nav-enabled") && $("body").removeClass("sticky-nav-enabled")
    }

    function i() {
        "iPad" == navigator.platform || "iPhone" == navigator.platform ? window.matchMedia("(orientation: portrait)").matches ? ($("section.intro").css("height", screen.height), $(".video-unmasked, .video-unmasked .container").css("height", screen.height + "px")) : window.matchMedia("(orientation: landscape)").matches && ($(".intro").css("height", screen.width), $(".video-unmasked, .video-unmasked .container").css("height", screen.width + "px")) : ($(".intro").css("height", f.height()), $(".video-unmasked").css("height", f.height()))
    }

    function n(t) {
        function e(t) {
            t.preventDefault(), n.find(".modal-close").off("click"), n.hasClass("video-modal") && m.api("pause"), s(!1), n.fadeOut(300)
        }
        t.preventDefault();
        var i = $(this).attr("class").split(" ").pop(),
            n = $(".modal." + i);
        n.fadeIn(300, function() {
            n.on("click", e), n.find(".modal-window").click(function(t) {
                t.stopPropagation()
            })
        }), s(!0), n.find(".modal-close").on("click", function(t) {
            e(t)
        })
    }

    function s(t) {
        1 == t && setTimeout(function() {
            $("body").addClass("page-disabled animation-disabled"), $("video").each(function() {
                1 == !$(this).paused && (v = !0, $(this).get(0).pause())
            })
        }, 2), 0 == t && ($("body").removeClass("page-disabled animation-disabled"), 1 == v && $("video").each(function() {
            $(this).get(0).play()
        }))
    }

    function o() {
        var t = $("#booncoin-video .watch"),
            e, i, n;
        f.on("resize", function() {
            e = f.height() / 2 - t.outerHeight() / 2, i = $("#booncoin-video").offset().top, n = f.width() >= 1024 ? $("#booncoin-video").offset().top + ($("#booncoin-video").outerHeight() - 1100) : $("#booncoin-video").offset().top + ($("#booncoin-video").outerHeight() - 590), f.trigger("scroll")
        }).trigger("resize"), f.on("scroll", function() {
            var s = g + e;
            s > i && s < n ? (t.hasClass("pinned") || t.addClass("pinned").css("top", e), t.hasClass("watch") && $(".grid-markers").removeClass("active")) : s > n ? (t.hasClass("pinned") && t.removeClass("pinned"), t.attr("style", "").css("top", n - i), t.hasClass("watch") && $(".grid-markers").addClass("active")) : s < n && (t.hasClass("pinned") && t.removeClass("pinned").css("top", 0), t.hasClass("watch") && $(".grid-markers").removeClass("active"))
        })
    }

    function r(t) {
        b = t, x = b + 150, S = x + 1e3, O = setInterval(a, 10)
    }

    function a() {
        b < x ? h(b++) : (clearInterval(O), O = setInterval(l, 1e3))
    }

    function l() {
        b < S ? h(b++) : clearInterval(O)
    }

    function h(t) {
        M = t.toString(), D = M.split(""), k.empty(), $.each(D, function(t, e) {
            k.append("<span>" + e + "</span")
        })
    }

    function c() {
        var t = f.height();
        $("main > .block-animation").height($("#road-map").offset().top)
    }

    function u() {
        var t = f.height();
        $("footer.main").height(t)
    }
    var d = setInterval(function() {
            $(".video-unmasked video").prop("readyState") > 2 && (i(), $("body").addClass("page-loaded"), clearInterval(d))
        }, 10),
        f = $(window),
        g = f.scrollTop();
    f.on("scroll resize", function() {
        g = f.scrollTop()
    }).trigger("scroll"), $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), offset = 0, f.width() >= 1024 ? (offset = 58, $(".desktop-navigation button").trigger("click")) : (offset = 53, $(".burger").trigger("click")), e.length && (t.preventDefault(), "booncoin-video" == e.attr("id") ? scrollpoint = e.offset().top + parseInt(e.css("padding-top")) - offset : "what-are-timemints" == e.attr("id") ? scrollpoint = $(".timemint-objects .timemint.primary").offset().top - offset : "why-time" == e.attr("id") ? scrollpoint = $("#why-time .copy").offset().top - offset : "proof-of-use" == e.attr("id") ? scrollpoint = e.offset().top - offset : "road-map" == e.attr("id") ? scrollpoint = e.offset().top - parseInt(e.css("margin-top")) - offset : "distribution" == e.attr("id") ? scrollpoint = e.offset().top - offset : "contribution-period" == e.attr("id") ? scrollpoint = e.offset().top - offset : "our-team" == e.attr("id") && (scrollpoint = e.offset().top - offset), console.log(parseInt(scrollpoint)), $("html, body").animate({
                scrollTop: scrollpoint
            }, 1e3, function() {
                var t = $(e);
                if (t.focus(), t.is(":focus")) return !1;
                t.attr("tabindex", "-1"), t.focus()
            }))
        }
    }), $("button.scroll").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500)
    }), $("body").on("click", ".sticky-nav-desktop h1.site-logo", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500)
    }), f.on("scroll", t).trigger("scroll"), f.on("scroll", e).trigger("scroll"), $("body").append('<div class="sticky-nav-desktop" />'), $("section.video-unmasked nav.secondary, section.video-unmasked h1").clone().appendTo(".sticky-nav-desktop"), f.on("resize orientationchange", i).trigger("resize"), f.on("scroll", function() {
        g < $("section.intro").outerHeight() ? $("section.intro").next().addClass("pinned") : $("section.intro").next().removeClass("pinned")
    }).trigger("scroll"), $(".desktop-navigation button").on("click", function() {
        $("body").hasClass("desktop-navigation-active") ? ($("body").removeClass("desktop-navigation-active"), s(!1)) : ($("body").addClass("desktop-navigation-active"), s(!0))
    }), $(".burger").on("click", function() {
        $("body").hasClass("mobile-menu-active") ? ($("body").removeClass("mobile-menu-active"), s(!1)) : ($("body").addClass("mobile-menu-active"), s(!0))
    });
    var p = $(".video-embed iframe")[0],
        m = $f(p);
    $(".modal-trigger:not(.modal-disabled)").on("click", n);
    var v = !1;
    $("html").hasClass("no-touch") && o(), $.fn.itemTrigger = function(t) {
        var e = $(this),
            i;
        f.on("load resize", function() {
            "screenFirstQuarter" == t.triggerPoint && (i = e.offset().top - f.height() / 4), "screenTop" == t.triggerPoint && (i = e.offset().top), "screenCenter" == t.triggerPoint && (i = e.offset().top - f.height() / 2), "inWindow" == t.triggerPoint && (i = e.offset().top - (f.height() - e.outerHeight())), "fitsInWindow" == t.triggerPoint && (i = e.offset().top - (f.height() - 2 * e.outerHeight()))
        }).trigger("resize"), f.on("load scroll resize", function() {
            g > i ? e.hasClass("active") || (e.addClass("active"), e.hasClass("timemint-objects") && r(96e3), e.hasClass("block") && e.prev().addClass("active"), e.hasClass("our-team") && $(".block-animation.background").addClass("our-team")) : g + f.height() < e.offset().top && e.hasClass("active") && (e.removeClass("active"), e.hasClass("timemint-objects") && (clearInterval(O), h(96e3)), e.hasClass("block") && e.prev().removeClass("active"))
        }).trigger("scroll")
    }, $(".timemint-objects").itemTrigger({
        triggerPoint: "inWindow"
    }), $(".block.ecommerce").itemTrigger({
        triggerPoint: "inWindow"
    }), $(".block.travel").itemTrigger({
        triggerPoint: "fitsInWindow"
    }), $(".block.outsourcing").itemTrigger({
        triggerPoint: "screenCenter"
    }), $(".block.software").itemTrigger({
        triggerPoint: "fitsInWindow"
    }), $(".block.other").itemTrigger({
        triggerPoint: "screenCenter"
    }), $("footer.main").itemTrigger({
        triggerPoint: "screenFirstQuarter"
    }), $("html").hasClass("no-touch") ? $("#booncoin-video .box").itemTrigger({
        triggerPoint: "screenCenter"
    }) : $("#booncoin-video").itemTrigger({
        triggerPoint: "screenTop"
    }), moment.tz.add(["America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0"]);
    var y = moment.tz("2017-08-28 09:00", "America/New_York").toDate().getTime(),
        _ = (new Date).getTime(),
        w = y - _,
        C = w / 1e3;
    $(".video-unmasked .countdown").ClassyCountdown({
        end: $.now() + C,
        labels: !0,
        style: {
            element: "",
            textResponsive: .5,
            days: {
                gauge: {
                    thickness: .03,
                    bgColor: "#e2e1e1",
                    fgColor: "#2f4ffd"
                }
            },
            hours: {
                gauge: {
                    thickness: .03,
                    bgColor: "#e2e1e1",
                    fgColor: "#2f4ffd"
                }
            },
            minutes: {
                gauge: {
                    thickness: .03,
                    bgColor: "#e2e1e1",
                    fgColor: "#2f4ffd"
                }
            },
            seconds: {
                gauge: {
                    thickness: .03,
                    bgColor: "#e2e1e1",
                    fgColor: "#2f4ffd"
                }
            }
        },
        onEndCallback: function() {}
    }), $(".mobile-menu-countdown").ClassyCountdown({
        end: $.now() + C,
        labels: !0,
        style: {
            element: "",
            textResponsive: .5,
            days: {
                gauge: {
                    thickness: .03,
                    bgColor: "#ffffff",
                    fgColor: "#2f4ffd"
                }
            },
            hours: {
                gauge: {
                    thickness: .03,
                    bgColor: "#ffffff",
                    fgColor: "#2f4ffd"
                }
            },
            minutes: {
                gauge: {
                    thickness: .03,
                    bgColor: "#ffffff",
                    fgColor: "#2f4ffd"
                }
            },
            seconds: {
                gauge: {
                    thickness: .03,
                    bgColor: "#ffffff",
                    fgColor: "#2f4ffd"
                }
            }
        },
        onEndCallback: function() {}
    });
    var b = 0,
        x = 0,
        S = 0,
        k = $(".timemint.primary .number"),
        M = 0,
        D = "",
        O;
    $("#road-map .owl-carousel").owlCarousel({
        nav: !0,
        dots: !1,
        responsiveRefreshRate: 100,
        loop: !1,
        smartSpeed: 450,
        responsive: {
            0: {
                autoWidth: !0
            },
            1024: {
                items: 4
            },
            1720: {
                items: 6
            }
        }
    }), $("#our-team .box").on("click", function() {
        $("#our-team .box.active").not(this).removeClass("active").find(".bio").height(0), $(this).toggleClass("active"), $(this).hasClass("active") ? $(this).find(".bio").height($(this).find(".bio > p").height()) : $(this).find(".bio").height(0)
    }), c(), f.on("load resize", c()), u(), f.on("load resize", u())
});