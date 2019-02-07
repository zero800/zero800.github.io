var gws = {
    lang: {
        BUILD: "10420134868",
        LANG_VARIABLE: "en-US",
        LEVELS: "Levels",
        RESET: "Reset",
        OPTIONS: "Options",
        PLAY: "Let's Play",
        STEP1: "Creating sand.",
        STEP2: "Increasing resolution...",
        STEP3: "Multiplying sand...",
        STEP4: "Let's see...",
        STEP5: "Adding shadows...",
        STEP6: "It's getting pretty sandy.",
        STEP7: "Still making it finer...",
        STEP8: "How many grains can your system handle?",
        STEP9: "Adding some more...",
        STEP10: "Calculating speed...",
        CLOSE: "Nevermind",
        IF_CHOPPY: "If the game runs choppy or slow, you may want to resize your browser window smaller (or try landscape view on a mobile device) and click 'Recalculate Sand Resolution' below.",
        RECALCULATE: "Recalculate Sand Resolution",
        RESET_GAME: "Reset Game to Level 1",
        OKAY: "Okay",
        INSTRUCTIONS1: "Your goal is to get as much sand as you can out of the box and into the pail. You can rotate the box by clicking and dragging with the mouse or by using the left and right arrow keys.",
        INSTRUCTIONS2: "Navigate the sand through the box and out the opening so that it will drop into the red pail. If too much sand misses the pail, click 'Reset' to try again.",
        INSTRUCTIONS3: "Once the pail is overflowing with sand, you can progress to the next level. You may also want to replay the level and try to beat your best time.",
        HOW_TO_PLAY: "How to Play",
        DEREK: "Derek Detweiler - created code",
        TODD: "Todd Lewis - painted pixels",
        CLAY: "Clay Simpson - composed chords",
        CGDC: "Inspired by CGDC #8: Sandbox",
        GOPHERWOOD_STUDIOS: "Gopherwood Studios - We make games for you.",
        BROWSER: "Sand Trap uses cutting-edge browser technology, HTML5, which your browser does not seem to support. But you can still play! The most recent versions of all of these browsers support HTML5:",
        CHROME_FRAME: "You can also play using Internet Explorer, if you install the Chrome Frame plug-in",
        ONE_MORE_STEP: "One More Step...",
        WAY_TO_GO: "Way to go!",
        NEXT_LEVEL: "Next Level",
        RECORD: "You beat your record!",
        BY: "By XX!",
        YOUR_BEST: "Record: XX",
        NOT_ENOUGH_SAND: "Not enough sand",
        TRY_AGAIN: "Try Again?",
        AUDIO_ERROR: "Audio does not seem to be functioning in your browser. You may want to try another browser or make sure you are running the latest version of this one.",
        QUICKTIME: "Safari users may need to install QuickTime.",
        AUDIO_ERROR_TITLE: "The Beach Is Quiet",
        TITLE: "Sand Trap - Put It in the Pail",
        VIEW_HIGHSCORES: "View High Scores"
    },
    assetList: ["i/bg.png", "i/bg-winter.png", "i/bg-page.png", "i/browsers-small.png", "a/bg.ogg", "a/bg.mp3"]
};
window.Modernizr = function(an, am, al) {
        function H(b) {
            ae.cssText = b
        }

        function Y(d, c) {
            return H(ab.join(d + ";") + (c || ""))
        }

        function W(d, c) {
            return typeof d === c
        }

        function U(d, c) {
            return !!~("" + d).indexOf(c)
        }

        function S(f, c) {
            for (var h in f) {
                var g = f[h];
                if (!U(g, "-") && ae[g] !== al) {
                    return c == "pfx" ? g : !0
                }
            }
            return !1
        }

        function Q(g, c, j) {
            for (var i in g) {
                var h = c[g[i]];
                if (h !== al) {
                    return j === !1 ? g[i] : W(h, "function") ? h.bind(j || c) : h
                }
            }
            return !1
        }

        function O(g, f, j) {
            var i = g.charAt(0).toUpperCase() + g.slice(1),
                h = (g + " " + Z.join(i + " ") + i).split(" ");
            return W(f, "string") || W(f, "undefined") ? S(h, f) : (h = (g + " " + X.join(i + " ") + i).split(" "), Q(h, f, j))
        }
        var ak = "2.6.2",
            aj = {},
            ai = !0,
            ah = am.documentElement,
            ag = "modernizr",
            af = am.createElement(ag),
            ae = af.style,
            ad, ac = {}.toString,
            ab = " -webkit- -moz- -o- -ms- ".split(" "),
            aa = "Webkit Moz O ms",
            Z = aa.split(" "),
            X = aa.toLowerCase().split(" "),
            V = {},
            T = {},
            R = {},
            P = [],
            N = P.slice,
            M, K = function(v, u, t, s) {
                var r, q, p, o, h = am.createElement("div"),
                    g = am.body,
                    b = g || am.createElement("body");
                if (parseInt(t, 10)) {
                    while (t--) {
                        p = am.createElement("div"), p.id = s ? s[t] : ag + (t + 1), h.appendChild(p)
                    }
                }
                return r = ["&#173;", '<style id="s', ag, '">', v, "</style>"].join(""), h.id = ag, (g ? h : b).innerHTML += r, b.appendChild(h), g || (b.style.background = "", b.style.overflow = "hidden", o = ah.style.overflow, ah.style.overflow = "hidden", ah.appendChild(b)), q = u(h, v), g ? h.parentNode.removeChild(h) : (b.parentNode.removeChild(b), ah.style.overflow = o), !!q
            },
            J = {}.hasOwnProperty,
            I;
        !W(J, "undefined") && !W(J.call, "undefined") ? I = function(d, c) {
            return J.call(d, c)
        } : I = function(d, c) {
            return c in d && W(d.constructor.prototype[c], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var h = this;
            if (typeof h != "function") {
                throw new TypeError
            }
            var g = N.call(arguments, 1),
                f = function() {
                    if (this instanceof f) {
                        var b = function() {};
                        b.prototype = h.prototype;
                        var d = new b,
                            c = h.apply(d, g.concat(N.call(arguments)));
                        return Object(c) === c ? c : d
                    }
                    return h.apply(a, g.concat(N.call(arguments)))
                };
            return f
        }), V.csstransforms3d = function() {
            var b = !!O("perspective");
            return b && "webkitPerspective" in ah.style && K("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(a, d) {
                b = a.offsetLeft === 9 && a.offsetHeight === 3
            }), b
        };
        for (var L in V) {
            I(V, L) && (M = L.toLowerCase(), aj[M] = V[L](), P.push((aj[M] ? "" : "no-") + M))
        }
        return aj.addTest = function(f, c) {
                if (typeof f == "object") {
                    for (var g in f) {
                        I(f, g) && aj.addTest(g, f[g])
                    }
                } else {
                    f = f.toLowerCase();
                    if (aj[f] !== al) {
                        return aj
                    }
                    c = typeof c == "function" ? c() : c, typeof ai != "undefined" && ai && (ah.className += " " + (c ? "" : "no-") + f), aj[f] = c
                }
                return aj
            }, H(""), af = ad = null,
            function(aq, ap) {
                function z(g, f) {
                    var i = g.createElement("p"),
                        h = g.getElementsByTagName("head")[0] || g.documentElement;
                    return i.innerHTML = "x<style>" + f + "</style>", h.insertBefore(i.lastChild, h.firstChild)
                }

                function y() {
                    var b = s.elements;
                    return typeof b == "string" ? b.split(" ") : b
                }

                function x(d) {
                    var c = B[d[D]];
                    return c || (c = {}, C++, d[D] = C, B[C] = c), c
                }

                function w(b, i, h) {
                    i || (i = ap);
                    if (A) {
                        return i.createElement(b)
                    }
                    h || (h = x(i));
                    var d;
                    return h.cache[b] ? d = h.cache[b].cloneNode() : F.test(b) ? d = (h.cache[b] = h.createElem(b)).cloneNode() : d = h.createElem(b), d.canHaveChildren && !G.test(b) ? h.frag.appendChild(d) : d
                }

                function v(b, l) {
                    b || (b = ap);
                    if (A) {
                        return b.createDocumentFragment()
                    }
                    l = l || x(b);
                    var k = l.frag.cloneNode(),
                        j = 0,
                        i = y(),
                        h = i.length;
                    for (; j < h; j++) {
                        k.createElement(i[j])
                    }
                    return k
                }

                function u(d, c) {
                    c.cache || (c.cache = {}, c.createElem = d.createElement, c.createFrag = d.createDocumentFragment, c.frag = c.createFrag()), d.createElement = function(a) {
                        return s.shivMethods ? w(a, d, c) : c.createElem(a)
                    }, d.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + y().join().replace(/\w+/g, function(b) {
                        return c.createElem(b), c.frag.createElement(b), 'c("' + b + '")'
                    }) + ");return n}")(s, c.frag)
                }

                function t(b) {
                    b || (b = ap);
                    var d = x(b);
                    return s.shivCSS && !E && !d.hasCSS && (d.hasCSS = !!z(b, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), A || u(b, d), b
                }
                var ao = aq.html5 || {},
                    G = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    F = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    E, D = "_html5shiv",
                    C = 0,
                    B = {},
                    A;
                (function() {
                    try {
                        var b = ap.createElement("a");
                        b.innerHTML = "<xyz></xyz>", E = "hidden" in b, A = b.childNodes.length == 1 || function() {
                            ap.createElement("a");
                            var c = ap.createDocumentFragment();
                            return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined"
                        }()
                    } catch (d) {
                        E = !0, A = !0
                    }
                })();
                var s = {
                    elements: ao.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: ao.shivCSS !== !1,
                    supportsUnknownElements: A,
                    shivMethods: ao.shivMethods !== !1,
                    type: "default",
                    shivDocument: t,
                    createElement: w,
                    createDocumentFragment: v
                };
                aq.html5 = s, t(ap)
            }(this, am), aj._version = ak, aj._prefixes = ab, aj._domPrefixes = X, aj._cssomPrefixes = Z, aj.testProp = function(b) {
                return S([b])
            }, aj.testAllProps = O, aj.testStyles = K, ah.className = ah.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (ai ? " js " + P.join(" ") : ""), aj
    }(this, this.document),
    function(ad, ac, ab) {
        function aa(b) {
            return "[object Function]" == P.call(b)
        }

        function Z(b) {
            return "string" == typeof b
        }

        function Y() {}

        function X(b) {
            return !b || "loaded" == b || "complete" == b || "uninitialized" == b
        }

        function W() {
            var b = O.shift();
            M = 1, b ? b.t ? R(function() {
                ("c" == b.t ? L.injectCss : L.injectJs)(b.s, 0, b.a, b.x, b.e, 1)
            }, 0) : (b(), W()) : M = 0
        }

        function V(w, v, t, s, q, p, n) {
            function m(a) {
                if (!g && X(h.readyState) && (x.r = g = 1, !M && W(), h.onload = h.onreadystatechange = null, a)) {
                    "img" != w && R(function() {
                        I.removeChild(h)
                    }, 50);
                    for (var c in D[v]) {
                        D[v].hasOwnProperty(c) && D[v][c].onload()
                    }
                }
            }
            var n = n || L.errorTimeout,
                h = ac.createElement(w),
                g = 0,
                b = 0,
                x = {
                    t: t,
                    s: v,
                    e: q,
                    a: p,
                    x: n
                };
            1 === D[v] && (b = 1, D[v] = []), "object" == w ? h.data = v : (h.src = v, h.type = w), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() {
                m.call(this, b)
            }, O.splice(s, 0, x), "img" != w && (b || 2 === D[v] ? (I.insertBefore(h, J ? null : Q), R(m, n)) : D[v].push(h))
        }

        function U(h, g, k, j, i) {
            return M = 0, g = g || "j", Z(h) ? V("c" == g ? G : H, h, g, this.i++, k, j, i) : (O.splice(this.i++, 0, h), 1 == O.length && W()), this
        }

        function T() {
            var b = L;
            return b.loader = {
                load: U,
                i: 0
            }, b
        }
        var S = ac.documentElement,
            R = ad.setTimeout,
            Q = ac.getElementsByTagName("script")[0],
            P = {}.toString,
            O = [],
            M = 0,
            K = "MozAppearance" in S.style,
            J = K && !!ac.createRange().compareNode,
            I = J ? S : Q.parentNode,
            S = ad.opera && "[object Opera]" == P.call(ad.opera),
            S = !!ac.attachEvent && !S,
            H = K ? "object" : S ? "script" : "img",
            G = S ? "script" : H,
            F = Array.isArray || function(b) {
                return "[object Array]" == P.call(b)
            },
            E = [],
            D = {},
            C = {
                timeout: function(d, c) {
                    return c.length && (d.timeout = c[0]), d
                }
            },
            N, L;
        L = function(f) {
            function c(i) {
                var i = i.split("!"),
                    h = E.length,
                    r = i.pop(),
                    q = i.length,
                    r = {
                        url: r,
                        origUrl: r,
                        prefixes: i
                    },
                    p, l, j;
                for (l = 0; l < q; l++) {
                    j = i[l].split("="), (p = C[j.shift()]) && (r = p(r, j))
                }
                for (l = 0; l < h; l++) {
                    r = E[l](r)
                }
                return r
            }

            function o(b, t, s, r, q) {
                var p = c(b),
                    l = p.autoCallback;
                p.url.split(".").pop().split("?").shift(), p.bypass || (t && (t = aa(t) ? t : t[b] || t[r] || t[b.split("/").pop().split("?")[0]]), p.instead ? p.instead(b, t, s, r, q) : (D[p.url] ? p.noexec = !0 : D[p.url] = 1, s.load(p.url, p.forceCSS || !p.forceJS && "css" == p.url.split(".").pop().split("?").shift() ? "c" : ab, p.noexec, p.attrs, p.timeout), (aa(t) || aa(l)) && s.load(function() {
                    T(), t && t(p.origUrl, q, r), l && l(p.origUrl, q, r), D[p.url] = 2
                })))
            }

            function n(x, w) {
                function v(b, h) {
                    if (b) {
                        if (Z(b)) {
                            h || (s = function() {
                                var i = [].slice.call(arguments);
                                r.apply(this, i), q()
                            }), o(b, s, w, 0, u)
                        } else {
                            if (Object(b) === b) {
                                for (g in p = function() {
                                        var a = 0,
                                            i;
                                        for (i in b) {
                                            b.hasOwnProperty(i) && a++
                                        }
                                        return a
                                    }(), b) {
                                    b.hasOwnProperty(g) && (!h && !--p && (aa(s) ? s = function() {
                                        var i = [].slice.call(arguments);
                                        r.apply(this, i), q()
                                    } : s[g] = function(i) {
                                        return function() {
                                            var a = [].slice.call(arguments);
                                            i && i.apply(this, a), q()
                                        }
                                    }(r[g])), o(b[g], s, w, g, u))
                                }
                            }
                        }
                    } else {
                        !h && q()
                    }
                }
                var u = !!x.test,
                    t = x.load || x.both,
                    s = x.callback || Y,
                    r = s,
                    q = x.complete || Y,
                    p, g;
                v(u ? x.yep : x.nope, !!t), t && v(t)
            }
            var m, k, d = this.yepnope.loader;
            if (Z(f)) {
                o(f, 0, d, 0)
            } else {
                if (F(f)) {
                    for (m = 0; m < f.length; m++) {
                        k = f[m], Z(k) ? o(k, 0, d, 0) : F(k) ? L(k) : Object(k) === k && n(k, d)
                    }
                } else {
                    Object(f) === f && n(f, d)
                }
            }
        }, L.addPrefix = function(d, c) {
            C[d] = c
        }, L.addFilter = function(b) {
            E.push(b)
        }, L.errorTimeout = 10000, null == ac.readyState && ac.addEventListener && (ac.readyState = "loading", ac.addEventListener("DOMContentLoaded", N = function() {
            ac.removeEventListener("DOMContentLoaded", N, 0), ac.readyState = "complete"
        }, 0)), ad.yepnope = T(), ad.yepnope.executeStack = W, ad.yepnope.injectJs = function(r, q, p, n, m, h) {
            var g = ac.createElement("script"),
                f, b, n = n || L.errorTimeout;
            g.src = r;
            for (b in p) {
                g.setAttribute(b, p[b])
            }
            q = h ? W : q || Y, g.onreadystatechange = g.onload = function() {
                !f && X(g.readyState) && (f = 1, q(), g.onload = g.onreadystatechange = null)
            }, R(function() {
                f || (f = 1, q(1))
            }, n), m ? g.onload() : Q.parentNode.insertBefore(g, Q)
        }, ad.yepnope.injectCss = function(b, n, m, l, k, h) {
            var l = ac.createElement("link"),
                f, n = h ? W : n || Y;
            l.href = b, l.rel = "stylesheet", l.type = "text/css";
            for (f in m) {
                l.setAttribute(f, m[f])
            }
            k || (Q.parentNode.insertBefore(l, Q), R(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
(function() {
    var f = navigator.userAgent.toLowerCase(),
        a = (f.search("ipod") > -1),
        k = (f.search("iphone") > -1),
        n = (f.search("ipad") > -1),
        c = (f.search("safari") > -1),
        b = (f.search("msie") > -1),
        d = (f.search("android") > -1),
        l = (f.search("silk") > -1),
        p = (f.search("(khtml, like gecko) u/") > -1),
        j = (f.search("firefox") > -1),
        i = (f.search("chrome") > -1) || (f.search("crios") > -1),
        h = document.createElement("audio"),
        m = document.documentElement,
        g = true,
        o = true;
    if ((h.canPlayType) && !(!!h.canPlayType && "" != h.canPlayType('audio/ogg; codecs="vorbis"'))) {
        g = false;
        if (b || !(!!h.canPlayType && "" != h.canPlayType("audio/mp4"))) {
            o = false
        }
    }
    gws.browserCheck = function() {
        var r = {
            canvas: false,
            mobile: false,
            transitions: false,
            progress: false,
            css3dTransforms: false,
            touch: !!("ontouchstart" in window),
            chrome: i,
            iPod: a,
            iPhone: k,
            iPad: n,
            iOS: a || k || n,
            safari: c,
            ie: b,
            android: d,
            silk: l,
            firefox: j,
            packaged: (document.URL.indexOf("http://") === -1),
            phonegap: (document.URL.indexOf("http://") === -1) && (document.URL.indexOf("app://") === -1) && (document.URL.indexOf("chrome-extension://") === -1),
            conduitTilt: p,
            ogg: g,
            m4a: o
        };
        var q = document.createElement("canvas");
        try {
            r.canvas = !!(q.getContext("2d"))
        } catch (s) {
            r.canvas = !!(q.getContext)
        }
        delete q;
        var t = document.createElement("div");
        r.transitions = (t.style.transition !== undefined) || (t.style.webkitTransition !== undefined) || (t.style.MozTransition !== undefined) || (t.style.OTransition !== undefined) || (t.style.msTransition !== undefined);
        delete t;
        r.css3dTransforms = Modernizr.csstransforms3d;
        r.progress = ("position" in document.createElement("progress"));
        r.mobile = r.touch;
        return r
    }
})();
try {
    if (!window.console) {
        window.console = {
            log: function(d, c) {},
            error: function(d, c) {},
            warn: function(d, c) {},
            info: function(d, c) {}
        }
    }
} catch (e) {}
gws.zeroify = function(a) {
    if (isNaN(a)) {
        return 0
    } else {
        return (a) ? (+a) : 0
    }
};
gws.copyObject = function(a) {
    return JSON.parse(JSON.stringify(a))
};
gws.polarToCartesian = function(d) {
    var b = d || {
        m: 0,
        a: 0
    };
    var a = b.m * Math.cos(b.a);
    var c = b.m * Math.sin(b.a);
    return {
        x: a,
        y: c
    }
};
gws.cartesianToPolar = function(f) {
    var d = f || {
        x: 0,
        y: 0
    };
    var b = Math.sqrt(Math.pow(d.x, 2) + Math.pow(d.y, 2));
    var c = 0;
    if (b != 0) {
        c = Math.acos(d.x / b);
        if (d.y < 0) {
            c = (Math.PI * 2) - c
        }
    }
    return {
        m: b,
        a: c
    }
};
gws.getDistance = function(b, a) {
    return gws.cartesianToPolar({
        x: b.x - a.x,
        y: b.y - a.y
    }).m
};
gws.choose = function(h, g, l, k, j, i) {
    if (typeof h != "undefined") {
        return h
    }
    if (typeof g != "undefined") {
        return g
    }
    if (typeof l != "undefined") {
        return l
    }
    if (typeof k != "undefined") {
        return k
    }
    if (typeof j != "undefined") {
        return j
    }
    if (typeof i != "undefined") {
        return i
    }
};

function getLocationSearch(a) {
    return (location.search.substring(location.search.indexOf(a + "=") + a.length + 1) + "& ").split("&")[0]
}
gws.createElement = function(d, a, c, f) {
    var b = document.createElement(a);
    c ? b.className = c : false;
    f ? b.id = f : false;
    d ? d.appendChild(b) : false;
    return b
};
gws.createImage = function(f, a, d, h, b, g) {
    var c = gws.createElement(f, a, d, h);
    c.src = b;
    if (g) {
        c.setAttribute("alt", g)
    }
    return c
};
gws.createTextBlock = function(d, a, c, h, g, f) {
    var b = gws.createElement(d, a, c, h);
    b.innerHTML = g;
    if (f) {
        b.setAttribute("title", f)
    }
    return b
};
(function(c) {
    var f = false,
        g = null,
        a = function() {
            f = true;
            if (g) {
                g()
            }
        },
        d = function() {
            var i = {},
                m = {},
                l = null,
                k = null,
                j = function(n) {
                    if (l) {
                        k.set(l, function() {
                            setTimeout(function() {
                                h()
                            }, 30000)
                        });
                        l = null
                    } else {
                        setTimeout(function() {
                            h()
                        }, 60000)
                    }
                    if (chrome.runtime.lastError) {
                        return
                    }
                    i = n;
                    if (!f) {
                        a()
                    }
                },
                h = function() {
                    k.get(null, j)
                };
            if (window.chrome && chrome.storage && chrome.storage.sync) {
                k = chrome.storage.sync;
                h();
                m.get = function(n) {
                    return i[n]
                };
                m.set = function(o, n) {
                    l = l || {};
                    l[o] = n;
                    i[o] = n
                };
                m.remove = function(n) {
                    if (l && l[n]) {
                        delete l[n];
                        delete i[n]
                    }
                    k.remove(n)
                };
                m.getObject = function(n) {
                    return m.get(n)
                };
                m.setObject = function(o, n) {
                    return m.set(o, n)
                };
                return m
            } else {
                return false
            }
        },
        b = function() {
            var h = {};
            h.get = function(j) {
                try {
                    if (window.localStorage.getItem(j)) {
                        return window.localStorage.getItem(j)
                    } else {
                        return false
                    }
                } catch (i) {
                    return false
                }
            };
            h.set = function(k, i) {
                h.remove(k);
                try {
                    window.localStorage.setItem(k, i)
                } catch (j) {}
            };
            h.remove = function(j) {
                try {
                    window.localStorage.removeItem(j)
                } catch (i) {}
            };
            h.getObject = function(k) {
                var j = h.get(k);
                if (j) {
                    try {
                        return JSON.parse(j)
                    } catch (i) {
                        return false
                    }
                } else {
                    return false
                }
            };
            h.setObject = function(k, j) {
                try {
                    h.set(k, JSON.stringify(j))
                } catch (i) {}
            };
            return h
        };
    c.storage = d();
    if (!c.storage) {
        c.storage = b();
        a()
    }
    c.storage.initialize = function(h) {
        delete c.storage.initialize;
        if (f) {
            h()
        } else {
            g = h
        }
    }
})(gws);
var aBox = function(d, a, b, c) {
    this.size = 0;
    if (!a) {
        a = 1
    }
    this.resolutionCalculation = +a;
    if (+a > 1) {
        this.resolution = +a;
        this.grainDivisor = 1;
        this.scaleDivisor = 1
    } else {
        this.resolution = +2;
        this.grainDivisor = 1;
        this.scaleDivisor = 1
    }
    b.width = WIDTH / this.scaleDivisor;
    b.height = b.width * 7 / 6;
    this.x = b.width / 2;
    this.y = this.x;
    this.radius = this.x * 5 / 6;
    this.parent = b;
    this.storage = c;
    this.storage.innerHTML = "";
    this.storageCanvas = document.createElement("canvas");
    this.storageCanvas.setAttribute("width", "700");
    this.storageCanvas.setAttribute("height", "700");
    this.storage.insertBefore(this.storageCanvas, null);
    this.storageContext = this.storageCanvas.getContext("2d");
    this.rotation = 0;
    this.rotationalVelocity = 0;
    this.grains = new Array();
    this.add = function(f) {
        this.grains.splice(0, 0, f);
        return f
    };
    this.remove = function(f) {
        if (this.grid[parseInt(f.p[0])][parseInt(f.p[1])] == f) {
            this.grid[parseInt(f.p[0])][parseInt(f.p[1])] = false
        }
        for (var g in this.grains) {
            if (f == this.grains[g]) {
                this.grains.splice(g, 1)
            }
        }
    };
    this.walls = [];
    this.panels = [];
    this.createMap = function(o) {
        var t = o;
        var v = Math.sqrt(t.length);
        this.mapGrid = v;
        this.size = v * this.resolution;
        this.grid = new Array(this.size * 2);
        for (var k = 0; k < this.size * 2; k++) {
            this.grid[k] = new Array(this.size * 2)
        }
        for (var k = 0; k < this.size * 2; k++) {
            for (var u = 0; u < this.size * 2; u++) {
                if (cartesianToPolar([k - this.size, u - this.size])[0] < (this.size * 0.9)) {
                    this.grid[k][u] = false
                } else {
                    this.grid[k][u] = "out"
                }
            }
        }
        var h = 0;
        var g = 0;
        this.insideMin = parseInt(this.size / 2);
        this.insideMax = this.insideMin * 3;
        for (var q = this.insideMin; q < this.insideMax; q++) {
            for (var n = this.insideMin; n < this.insideMax; n++) {
                var l = t.charAt(Math.floor((n - this.insideMin) / this.resolution) + Math.floor((q - this.insideMin) / this.resolution) * v);
                if (l == "w") {
                    this.grid[q][n] = new aWall(q, n, this, "brown");
                    this.walls.splice(0, 0, this.grid[q][n])
                } else {
                    var s = false;
                    var j = false;
                    if (l == "b") {
                        s = "ball"
                    }
                    if (l == "p") {
                        s = "balloon"
                    }
                    if (l == "v") {
                        s = "v-panel"
                    }
                    if (l == "h") {
                        s = "h-panel"
                    }
                    if (s) {
                        if (this.grid[q - 1][n]) {
                            if (this.grid[q - 1][n].description == s) {
                                j = this.grid[q - 1][n]
                            }
                        }
                        if (this.grid[q][n - 1]) {
                            if (this.grid[q][n - 1].description == s) {
                                j = this.grid[q][n - 1]
                            }
                        }
                        if (!j) {
                            j = new aPanel(q, n, 1, 1, s, this);
                            this.panels.splice(0, 0, j)
                        }
                        if (j.width < (q - j.p[0] + 1)) {
                            j.width = (q - j.p[0] + 1)
                        }
                        if (j.height < (n - j.p[1] + 1)) {
                            j.height = (n - j.p[1] + 1)
                        }
                        this.grid[q][n] = j
                    } else {
                        if (l == "s") {
                            if (!((q + n) % this.grainDivisor)) {
                                this.add(new aSand(q - 0.5 + Math.random(), n - 0.5 + Math.random(), this, sandColor))
                            }
                        }
                    }
                }
            }
        }
        for (var f in this.panels) {
            if (this.panels[f].description.charAt(0) == "b") {
                var m = this.panels[f].height / 2;
                for (var q = 0; q < this.panels[f].width; q++) {
                    for (var n = 0; n < this.panels[f].height; n++) {
                        this.grid[parseInt(this.panels[f].p[0] + q)][parseInt(this.panels[f].p[1] + n)] = false
                    }
                }
                for (var q = 0; q < this.panels[f].width; q++) {
                    for (var n = 0; n < this.panels[f].height; n++) {
                        if (cartesianToPolar([q - m, n - m])[0] < m + 0.5) {
                            this.grid[parseInt(this.panels[f].p[0] + q)][parseInt(this.panels[f].p[1] + n)] = this.panels[f]
                        }
                    }
                }
            }
        }
        this.scale = Math.sqrt(Math.pow(this.radius * 2, 2) / 2) / this.size;
        this.offsetX = this.x - this.scale * this.size;
        this.offsetY = this.y - this.scale * this.size;
        this.shadowCanvas = document.createElement("canvas");
        this.shadowCanvas.setAttribute("width", this.size / this.resolution * WALL_SIZE + 2);
        this.shadowCanvas.setAttribute("height", this.size / this.resolution * WALL_SIZE + 2);
        this.storage.insertBefore(this.shadowCanvas, null);
        this.shadowContext = this.shadowCanvas.getContext("2d");
        this.shadowContext.rect(WALL_SIZE / 2, WALL_SIZE / 2, this.size / this.resolution * WALL_SIZE - WALL_SIZE, this.size / this.resolution * WALL_SIZE - WALL_SIZE);
        this.shadowContext.clip();
        this.shadowContext.fillStyle = SHADOW;
        this.storageCanvas.setAttribute("width", this.size / this.resolution * WALL_SIZE + 2);
        this.storageCanvas.setAttribute("height", this.size / this.resolution * WALL_SIZE + 2);
        var r;
        for (var p in this.walls) {
            r = this.walls[p];
            if ((r.p[0] % this.resolution) + (r.p[1] % this.resolution) == 0) {
                q = Math.floor((r.p[0] - this.insideMin) / this.resolution) * WALL_SIZE + 1;
                n = Math.floor((r.p[1] - this.insideMin) / this.resolution) * WALL_SIZE + 1;
                g = 0;
                h = 0;
                if (this.grid[r.p[0]][r.p[1] - this.resolution]) {
                    if (this.grid[r.p[0]][r.p[1] - this.resolution].description == "wall") {
                        h++
                    }
                }
                if (this.grid[r.p[0] + this.resolution][r.p[1] - this.resolution]) {
                    if (this.grid[r.p[0] + this.resolution][r.p[1] - this.resolution].description == "wall") {
                        h += 2
                    }
                }
                if (this.grid[r.p[0] + this.resolution][r.p[1]]) {
                    if (this.grid[r.p[0] + this.resolution][r.p[1]].description == "wall") {
                        h += 4
                    }
                }
                if (this.grid[r.p[0] + this.resolution][r.p[1] + this.resolution]) {
                    if (this.grid[r.p[0] + this.resolution][r.p[1] + this.resolution].description == "wall") {
                        h += 8
                    }
                }
                if (this.grid[r.p[0]][r.p[1] + this.resolution]) {
                    if (this.grid[r.p[0]][r.p[1] + this.resolution].description == "wall") {
                        h += 16
                    }
                }
                if (this.grid[r.p[0] - this.resolution][r.p[1] + this.resolution]) {
                    if (this.grid[r.p[0] - this.resolution][r.p[1] + this.resolution].description == "wall") {
                        h += 32
                    }
                }
                if (this.grid[r.p[0] - this.resolution][r.p[1]]) {
                    if (this.grid[r.p[0] - this.resolution][r.p[1]].description == "wall") {
                        h += 64
                    }
                }
                if (this.grid[r.p[0] - this.resolution][r.p[1] - this.resolution]) {
                    if (this.grid[r.p[0] - this.resolution][r.p[1] - this.resolution].description == "wall") {
                        h += 128
                    }
                }
                g = currentLevel % TILE_COLORS;
                this.storageContext.drawImage(WALLS, h * WALL_SIZE, g * WALL_SIZE, WALL_SIZE, WALL_SIZE, q, n, WALL_SIZE, WALL_SIZE);
                this.shadowContext.fillRect(q, n, WALL_SIZE, WALL_SIZE)
            }
        }
        this.bucket = new aBucket(this.grains.length, this, this.grains[0].color)
    };
    this.createMap(d);
    this.gravityMagnitude = GRAVITY * this.resolution;
    this.getPolarGravity = function() {
        return [this.gravityMagnitude, ((Math.PI * 2.5) - this.rotation) % (Math.PI * 2)]
    };
    this.getCartesianGravity = function() {
        return polarToCartesian(this.getPolarGravity())
    };
    this.getGravity = this.getCartesianGravity;
    this.rotate = function(h, g) {
        var f = this.rotation;
        if (g) {
            this.rotation = (this.rotation + h + (Math.PI * 2)) % (Math.PI * 2)
        } else {
            this.rotation = (h + (Math.PI * 2)) % (Math.PI * 2)
        }
        this.rotationalVelocity = (this.rotationalVelocity + this.rotation - f + (Math.PI * 2)) % (Math.PI * 2);
        return this.rotation
    };
    this.changeRes = 1;
    this.render = function() {
        var i = this.parent.context;
        if (this.parent.height != this.parent.offsetHeight) {
            this.parent.height = this.parent.offsetHeight;
            this.changeRes = this.parent.height / 700
        }
        if (this.parent.width != this.parent.offsetWidth) {
            this.parent.width = this.parent.offsetWidth;
            this.changeRes = this.parent.width / 600
        }
        var k = this.parent.height * (1 / 28);
        i.clearRect(0, k, this.parent.width, k * 25);
        i.save();
        i.translate(this.x * this.changeRes, this.y * this.changeRes);
        i.rotate(this.rotation);
        i.translate(-this.x * this.changeRes, -this.y * this.changeRes);
        var g = this.scale * this.size;
        var j = (g + 3);
        if (this.resolution > 2) {
            this.parent.context.fillStyle = this.parent.context.createPattern(FLOOR, "repeat");
            this.parent.context.fillRect((g / 2 + this.offsetX - 0.5) * this.changeRes, (g / 2 + this.offsetY - 0.5) * this.changeRes, (j - 2) * this.changeRes, (j - 2) * this.changeRes);
            var f = polarToCartesian([4 * this.changeRes, this.getPolarGravity()[1]]);
            this.parent.context.drawImage(this.shadowCanvas, 0, 0, WALL_SIZE * this.mapGrid + 2, WALL_SIZE * this.mapGrid + 2, (g / 2 + this.offsetX - 1 + f[0]) * this.changeRes, (g / 2 + this.offsetY - 1 + f[1]) * this.changeRes, j * this.changeRes, j * this.changeRes);
            for (var h in this.panels) {
                this.panels[h].renderShadow(f)
            }
        } else {
            this.parent.context.fillStyle = "#CB8743";
            this.parent.context.fillRect((g / 2 + this.offsetX - 0.5) * this.changeRes, (g / 2 + this.offsetY - 0.5) * this.changeRes, (j - 2) * this.changeRes, (j - 2) * this.changeRes)
        }
        for (var l in this.grains) {
            this.grains[l].render()
        }
        for (var h in this.panels) {
            this.panels[h].render()
        }
        this.parent.context.drawImage(this.storageCanvas, 0, 0, WALL_SIZE * this.mapGrid + 2, WALL_SIZE * this.mapGrid + 2, (g / 2 + this.offsetX - 1) * this.changeRes, (g / 2 + this.offsetY - 1) * this.changeRes, j * this.changeRes, j * this.changeRes);
        i.restore();
        this.bucket.render()
    };
    this.update = function(h) {
        var m = [];
        gws.view.note.update();
        for (var g in this.grains) {
            this.grains[g].update(h)
        }
        for (var f in this.panels) {
            this.panels[f].update(h)
        }
        this.rotationalVelocity = 0;
        if (!this.alreadyComplete) {
            var j = new Date().getTime();
            var i = +(j - startLevelTime);
            if (!onMenu) {
                showTime(i)
            }
            if (this.score) {
                this.score.setTimeQuantity(i, this.bucket.grains / this.bucket.volume)
            }
            if (this.bucket.grains >= this.bucket.volume * 0.8) {
                var n = false,
                    l = this.score.record,
                    k = 0;
                this.alreadyComplete = true;
                this.score.setCompletionBonus(1000);
                this.score.onBreakRecord = function() {
                    n = true
                };
                this.score.set(true);
                k = this.score.get();
                if (gws.deliverScore) {
                    gws.deliverScore(currentLevel, i, k)
                }
                m.push(gws.lang.WAY_TO_GO);
                m.push(k);
                if (currentLevel == topLevel) {
                    topLevel++;
                    gws.storage.set("level", topLevel);
                    m.push('<a href="javascript:ll(currentLevel);">' + gws.lang.TRY_AGAIN + "</a>");
                    m.push("<a href='javascript:ll(" + topLevel + ");'>" + gws.lang.NEXT_LEVEL + " &raquo;</a>")
                } else {
                    if (n && l) {
                        var o = k - l;
                        m.push(gws.lang.RECORD);
                        m.push(gws.lang.BY.replace("XX", o));
                        m.push('<a href="javascript:ll(currentLevel);">' + gws.lang.TRY_AGAIN + "</a>")
                    } else {
                        if (l) {
                            m.push(gws.lang.YOUR_BEST.replace("XX", l))
                        }
                        m.push('<a href="javascript:ll(currentLevel);">' + gws.lang.TRY_AGAIN + "</a>")
                    }
                }
                if (gws.hiScoreLink) {
                    m.push('<a target="_blank" href="' + gws.hiScoreLink + '">' + gws.lang.VIEW_HIGHSCORES + " &raquo;</a>")
                }
            } else {
                if ((this.bucket.grains + this.grains.length) < this.bucket.volume * 0.8) {
                    this.alreadyComplete = true;
                    this.score.set(true);
                    var k = this.score.get();
                    if (gws.deliverScore) {
                        gws.deliverScore(currentLevel, i, k)
                    }
                    m.push(gws.lang.NOT_ENOUGH_SAND);
                    m.push(k);
                    m.push('<a href="javascript:ll(currentLevel);">' + gws.lang.TRY_AGAIN + "</a>");
                    if (gws.hiScoreLink) {
                        m.push('<a target="_blank" href="' + gws.hiScoreLink + '">' + gws.lang.VIEW_HIGHSCORES + " &raquo;</a>")
                    }
                }
            }
        } else {
            this.score.setQuantity(this.bucket.grains / this.bucket.volume)
        }
        if (m.length > 0) {
            gws.view.note.show(m)
        }
    }
};
var aBucket = function(d, c, a) {
    this.volume = d;
    this.box = c;
    this.width = Math.sqrt(d * this.box.grainDivisor);
    this.height = this.width;
    this.color = a;
    this.grains = 0;
    this.w = this.box.scale * this.width;
    this.h = this.box.scale * this.height;
    this.x = (cvs.width - this.w) / 2;
    this.y = cvs.width;
    var b = cartesianToPolar([this.y - this.box.y, this.w / 2])[1];
    this.insideMin = Math.PI / 2 - b;
    this.insideMax = Math.PI / 2 + b;
    this.filled = function() {
        return ((this.grains * this.box.grainDivisor) / this.width) * this.box.scale
    };
    this.render = function() {
        var n = this.box.parent.context;
        var o = this.filled() * 1.2;
        if (o > this.h) {
            o = this.h
        }
        var f = this.y + this.h - o;
        var g = (this.w * 0.1 * (this.h - o) / this.h) + this.w * 0.06;
        n.fillStyle = this.color;
        n.beginPath();
        n.moveTo((this.x + g) * this.box.changeRes, f * this.box.changeRes);
        n.lineTo((this.x + (this.w * 0.16)) * this.box.changeRes, (this.y + this.h) * this.box.changeRes);
        n.lineTo((this.x + (this.w * 0.84)) * this.box.changeRes, (this.y + this.h) * this.box.changeRes);
        n.lineTo((this.x + this.w - g) * this.box.changeRes, f * this.box.changeRes);
        n.bezierCurveTo((this.x + this.w / 2) * this.box.changeRes, (this.y + (this.h * 0.8) - o) * this.box.changeRes, (this.x + this.w / 2) * this.box.changeRes, (this.y + (this.h * 0.8) - o) * this.box.changeRes, (this.x + g) * this.box.changeRes, f * this.box.changeRes);
        n.closePath();
        n.fill();
        n.drawImage(PAIL, 0, 0, PAIL.width, PAIL.height, this.x * this.box.changeRes, this.y * this.box.changeRes, this.w * this.box.changeRes, this.h * this.box.changeRes);
        var h = 20 / this.box.scaleDivisor * this.box.changeRes;
        var m = 157 / this.box.scaleDivisor * this.box.changeRes;
        var l = 26 / this.box.scaleDivisor * this.box.changeRes;
        var k = 624 / this.box.scaleDivisor * this.box.changeRes;
        n.fillRect(l, k, m * this.filled() / this.h, h);
        n.fillStyle = "rgb(223, 48, 48)";
        try {
            var j = this.h - ((this.grains + this.box.grains.length) * this.box.grainDivisor) / this.width * this.box.scale;
            j = m * j / this.h;
            n.fillRect(l + m - j, k, j, h)
        } catch (i) {}
    }
};
var ICONS = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZtjlbAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAAA+SURBVDhPY2AgCBjxAqB2aitANxHDilEFkCAnJxzA0Q3Wiw/gU4Aa3eS4YdQESPiSGA7o+YwqWQ9PKgA5EgB61gMmNwhydgAAAABJRU5ErkJggg==", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZtjlbAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAACuSURBVDhPjVNbDoAwCNvuf2kXni0izg9nllqgLWvtveZn03Pw5aLctACr0NSSq/MSUvywKtrfHQBJfC4lNYYCMFYEaKPZifzxxeBAOZsSPpOedQoXKs4XgHxxhtqhu8FCoZitkjGWFwFvyCaXnnXIDIQ3MwATUGPAxotQLN0dIGZWqckdDlB6Ef5GT2Q3JKRnoLhQvNJNi1DJN+RhAtTdxD7fqzavJlhpAv9t/noALGsCgYPXrakAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAArVkAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZCZoUAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAABaSURBVDhPvZPrDgAgBEbT+z90xroR2lr8PuWoTylhVbfweAJgSlJvb4QFIO4syzekAob0dPgDbPODLO4J46EMh1RA/ZiUfALUhD0wCamOshtsFkbFl7wBgvVvoaIETBEJqn8AAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAArVkAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZCZoUAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAACQSURBVDhPrZPRFoAgCEOR///oFKU5I7VjPNZ1bIIioqoyrQ9ARocyZSgcAOVo1XppASCK0w6RG+JSrrsF+oBZAohqOm6T3XCL4PrPgCGmG4EHAlRLqFo+pB0g3pdOYQOwjlYZTokWxT6eAiVcp/ps0QNuBAOBuWGUFLM9Hpp1BNQLAQ1j9Pyw2j8B86e9/HsBUWQDX7aDsogAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAqAAAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUwG/NwAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAABVSURBVDhPY2AgCJhQAAMDOh9DYFQBKAQIBhRqMIE0oIUkzRQgRznEqSAAZSEEUIRRFSCcRtCbowoggUVaODAy4k8PjECAN8EQVMAEtAIa8ziLACYmADEDBmdCAKs+AAAAAElFTkSuQmCC", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAArVkAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZCZoUAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAAB9SURBVDhPvZPbDoAgDEO3/f9HS7kE5wYl0dgHH/BQUlZEiszw3YgAViSiqaorBVSbA0Av1erwJeCDmoUjDoCZFekShwOgHYO9C4ctgD3jXlOHA2BOZuHwC0BijmmkF+U7l6QgQCz9YxYEiIXFyq0Pb4H8VWG1t4cA5GWz3xchqgNvH0q88gAAAABJRU5ErkJggg==", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZtjlbAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAACpSURBVDhPlVMBEoAgCMP/fzpCQBiQF113pTDGnERreEhjXYJoMQS/HlCg+5Ik4R/2rwtzgtZIgvTKLbhzQC4Jm4AXH7YHxRGcYGoREHbCGx2HuNgijAkCCqPZVNLNOAwIegQ9wtbNEQL7gHYQ4mQpAXWA0/yBEEe7KpmU7nRAxxUlk/M+EIxKPYseofGBmxrGyu5vHZVvXLEYGE5dPV5gcxSIA2LO5bLzAKfkAzfWhSzwAAAAAElFTkSuQmCC", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAArVkAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZCZoUAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAABgSURBVDhPvZNJDgAgCAOp/3+0aYwSUSRx63m0ZRO5q2Rlv/8GTOqiN5p2AL4BREoVTuvuABoUGMxoEQIakrhRH/Ix4DRdM4TAk1ZXV3eaIVBjLfeB0AwYTsFu1DlwfNwZ4rICW8Ws0wUAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAArVkAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZCZoUAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAACISURBVDhPnZNBEsAgCANp///oRnBQBmlack5WjSBCdb8K8Y5B5FIheyZQA5KIVwSPtw3OPxKcj+f3DDs/EyLfmgpFUUPih6pzXP9xHUENJ/4iFPEfhoLvhDk/2v/QNof2Cmrw+bEf3AXCihsqzvkXg10CnU5yIuAM2z5q8CWNl1R+rQEmBrb9D5/CBXfRaA8eAAAAAElFTkSuQmCC", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAqAAAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUwG/NwAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAAB1SURBVDhPvZNJEoAwCAQD/3+0QVJZFOiLZa50mJ6UtoZHy9Ova7ZC+8iGDGAEA4nEdMgkFlBlWAt24A2x5eaAQJHxlSRHhJb7SyKQZ/zXgh2iGscHg8DMEJEj71mzz41YVAzclO8CQOT1kn7PY2xL+mOOWqoXwHoFATp73xsAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZtjlbAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAACgSURBVDhPvVPBFoAgCMP//+kMZWykdumlHeCx5hhq9ljNeJu1nvLSrL0BOr8z3F+GQggAgL08dY0oCgwgigDQUUsG+n3XRYpdMAj/gsElCUOK9C5OgOiYDXvOQkZREpywA6WGDeIHBr8weaXGmEOOlzwr7jKgMgj8a4Y65ZCGLlItItVwZID2QgMfFl6kW3SjpmPinfrK7wV2lrc+hkH7Aj4IAyUcl4T+AAAAAElFTkSuQmCC", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAqAAArVkAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALeFxqQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAABlSURBVDhP7VNJEsAgCNP6/z83lZFxDbl5KePNQAiElMIoNJCuADgLKnDA4+FkOZf2kBsCxvoRHzQtDSkyCcYGdZJpXwogpOCAfw67IV/yw7CMqYfqBwHg6/7s0x2jZQumPV8e6r0XCQX3lE4ahAAAAABJRU5ErkJggg==", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAqAAAzgCGy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz26bRwAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAACgSURBVDhPnZTbAgARCETF///zpo1tlHXx5HJME5HSshVoHW+zKd0AZg8r6qhqc1dChEBdFKCvSg9wA0j3AFDZ5qFF+xQaoIcwA3LOYNB4eHf+ALJxDdgzj9KES7GAuz+JZw5qC8BLCBR2AJMDEaEHrKlSrgBX2pDmGKKONQxWlAVPgfh1uZp0XojmHtQo4SsZJNholYiS1DleF2D+ATD4ALiOCDsrJ4/oAAAAAElFTkSuQmCC", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAArVkAzgCGy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+ElMIAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAAC6SURBVDhPrZSBDoQwCEPd9v//fEILhWUx8e4WE5V1rwym1/U41j27OFIYAZ/8k8Dgy2AY5ZEWiMaYc9obxbngS4GDmnuQGUwBPWX9g6CWkfZGk8U7AdYVwt7YLhij41HeQnCB8VSYXZAdMSsCG8HzsesocFw5XGPU9mMCOKZwFnSCFvl+3EKIm3ASpFdJJyqJe+5Cbl0Q2ULLxBHcdnEW6Ojm4VJxSqGUavkiou2RXGtZ5iCL9n09/gA+4jAGD8IFdvMAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAArVkAzgCGy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+ElMIAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAABoSURBVDhPY2BmZsADgLLMUMAIAQwMUAZMnAGmAocCoOkQpZjWwMVhZmGn4SbgUkacArhP0I0BSgBNAHoNp/kgbw8TBahhxcSE5Gd4BCGJYVEwQgIKKeljTzB0SbTEZRycWY9g5iWU/QEZbgjFNq3LtwAAAABJRU5ErkJggg==", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAArVkAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZCZoUAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAAB0SURBVDhPvZNZDoAwCESp9z+0IFigGYxLZH5a5YUlQ4kqbYc4qhfXMDkgKZRNxwNgrZG+QQ+ZvwXEQWgsY0mGBiC2DXv4DkwLxA0e0xS9MKs0gtxk4Pzt21FlmDXwwkgTl26+A5JZqEQD0LK0f7+s8v1rYAd6UwWNtosl2AAAAABJRU5ErkJggg==", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAArVkAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZCZoUAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAAC1SURBVDhPrZPbEoAgCETF///oWO5qpQ/aNN1OCyzY2nb13meGX9nCl1uAShKlutxliAMAMNFLTTVhAKy7VBF1/gCaDwA+zRk3QK4OEC950DCSEt6hPL/9A6yGSWG0SK3xmPLHFnBvMi1VkHzr+gTG/tQcTOEaUNLxMscQW6CY/67ggDUJUPGhzPkpID2Gk8sYm0ICjWcwsWhj7LcSfehzAqrAR8TLIcCcTQoxiLEb/P9li5uzD9gDA/Mq3F23AAAAAElFTkSuQmCC", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAArVkAzgCGy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+ElMIAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAAClSURBVDhPrVMJDoAgDEP4/5/l7FqYosYlYhiztusIYRvpNvLnDwquf5JSPosxDpT+xrYc/VGQSRbM+lTwulpKdk3RWsBZKmhwrIBUIK0FyqEjjDZ1bPBF+9DqgwJJtsIt6NL9PqApEE/GwmRR4RQYh2kuFKH5UMKkKy1/qta2VZvaAns0pUgvERwV6/gQh2nImJpOlXoxIXzxwkTbyHFXfDc31/8EWMkIxeJY9jEAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAArVkAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZCZoUAAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAACqSURBVDhPvZPhDoAgCISj93/oxAM5NKMfLbbM3Bce7DiOMk6ESKx2pK/2+wB0CwyHff0EkBx0v2kogaZDRAVlkTjrIn8AvD3WySG614NGoX9bYBYJ/Q9VLIDSazf12va4hhLIngh8qsJNk4GU3V01/NU0lAAZgFnLFZbDAd2ODs9AuNvQV4C7SfUiA3bkKHxsgSgDGTzID+SGOyA0eB9p9GwMU7Py6JTDfwElagT5BukeLQAAAABJRU5ErkJggg==", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAqAAArVkAy4dDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALeFxqQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAACISURBVDhPxZOBCsAgCESt/v+fd6YGZtbGYHMwBj0vTx3RMdoc1YIPkH4XENLe/V6v8DUgPjIXKNUBpZTZqfZOFd4D+SzWRY5JZC6OgOrGWahVjKRWb9M3AWdy+UiQfTBF/tgDgH8FqOHhIn33w1bPvvfA6r94rOA3KkgS7QEkHBXCynE3+vR6XEPmCELYIL98AAAAAElFTkSuQmCC"];



/* 
espaço em branco = vazio
w = wall
b = bola vermelha
s = sand - areia
h = bastão amarelo
p = bola amarela de hélio
v = bastão amarelo
*/

var LEVELS = [];
LEVELS[0] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww                              ww                              ww                              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww   wwwwwwwwwwwwwwwwwwwwwwww   ww   wwwwwwwwwwwwwwwwwwwwwwww   ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              wwssss          ww              wwssss          ww              wwssss          ww              wwssss          ww              wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";
LEVELS[1] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww                              ww                              ww                              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww   wwwwwwwwwwwwwwwwwwwwwwww   ww   wwwwwwwwwwwwwwwwwwwwwwww   ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              wwssss          ww              wwssss          ww               wssss          ww               wssss          ww               wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";
LEVELS[2] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwww  w                w              w                w              ww  wwwwwwwwwwwwwwwww  wwwwwww  ww  w         w     w  w     w  ww  w         w     w  w     w  ww  w  wwwww  w  w  w     w  w  ww  w    w    w  w  w     w  w  ww  w    w    w  w  wwwwwww  w  ww  www  w  www  w  w     w  w  ww       w       w  w     w  w  ww       w       w  w  w     w  ww  wwwwwwwwwwwwww  w  w     w  ww  w          ssw  w  wwwwwww  ww  w          sswssw        w  wwwww  wwwwwwwwwwwssw        w  ww  w        wsswwwwwwwwwww  wwwww  w        wsswss          w  ww  wwwwwww  w  wss          w  ww  w     w  w  wwwwwwwwwwwwww  ww  w     w  w  w       w       ww  w  w     w  w       w       ww  w  w     w  w  www  w  www  ww  w  wwwwwww  w  w    w    w  ww  w  w     w  w  w    w    w  ww  w  w     w  w  w  wwwww  w  ww  w     w  w     w         w  ww  w     w  w     w         w  ww  wwwwwww  wwwwwwwwwwwwwwwww  ww              w                w              w                w  wwwwwwwwwwwwwwwwwwwwwwwwwwwww";
LEVELS[3] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwsssswwwwwwwwww wwwwwwww       wwsssswwwwwwwwww wwwwwwww       ww ssswwwwwwwwww wwwwwwww       ww  ssww         vvvvvvvv       ww   swwwwwwwwww wwwwwwww   w   ww   swwwwwwwwww wwwwwwww   w   ww    wwwwwwwwww wwwwwwww   w   ww    wwwwwwwwww wwwwwwww   w   ww    ww                w   w   ww    ww                w   w   ww    ww                w   w   ww    ww                w   w   ww    ww                w   w   ww    ww    wwwwhwwww   w   w   ww    ww    wwwwhwwww   w   w   ww    ww    wwwwhwwww   w   w   ww    ww    wwwwhwwww   w   w   ww    ww    wwwwhwwww   w   w   ww    ww    wwwwhwwww   w   w   ww    ww    wwwwhwwww   w   w   ww    ww    wwwwhwwww   w   w   ww    ww    wwwwhwwww   w   w   ww    ww    wwwwhwwww   w   w   ww    ww    wwwwhwwww   w   w   ww    ww    wwwwhwwww   w   w   ww          wwwwhwwww       w   ww          wwwwhwwww       w   ww          wwwwhwwww       w   ww          wwwwhwwww       w   ww          wwwwhwwww       w   wwwwwwwwwwwwwwwwwwwwwwwwwwwww   w";
LEVELS[4] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww        hhwwww                ww        hhwwww                ww        hhwwww                wwwwwww   hhwwww   wwwww   wwwwwwwwwwww            wwwww   wwwwwwwwwwww            wwvvvvv      wwwwwww            wwvvvvv      wwwwwwwwwwwwwwwwwwwww   wwwwwwwwwwwwwwwwwwwwwwwwwwwww   wwwwwwwwwwwwwwwwwwwwwwwwwwwww   wwwwwwwwwwww               ww   wwwwwwwwwwww               ww   wwwwwwwwwwww               ww       wwwwwwww    wwwwwwwww  ww       wwwwwwww    wwwwwwwww  ww       wwwwwwww    ww       hhwwwwww   wwwwwwww    ww       hhwwwwww   wwwwwwww    ww       hhwwwwww   wwwwwwww    ww   wwwwhhwwvvvv       wwww    ww   wwwwhhwwvvvv       wwww    ww       hhwwwwwwwwww   wwww    ww       hhwwwwwwwwww   wwww    ww       hhwwwwwwwwww   wwww    wwwwwwwwwhhwwwwwwwwww   wwww ss wwwwwwwwwhhwwwwwwwwww   wwwwsss wwwwwwwww               wwwwsss wwwwwwwww               wwwwsss wwwwwwwww               wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";
LEVELS[5] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                              ww                              ww                              ww                              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              wws             ww              wwss            ww              wwsss           ww              wwssss          ww              wwsssss         wwwwwwwwwwww    wwwwwwwwwwwww   wwwwwwwwwwww    wwwwwwwwwwwww   ww                              ww                              ww                              ww                              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww              ww                          bbbbww                          bbbbww                          bbbbww                          bbbb wwwwwwwwwwwwwwwwwwwwwwwwwwwwww  ";
LEVELS[6] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww  vvvvvvvvvvvvvvvvvvvvvvvvvvwwww  vvvvvvvvvvvvvvvvvvvvvvvvvvww                            hhww                            hhwwwwwwwwwwwwwwwwwwwwwwwwwww   hhwwwwwwwwwwwwwwwwwwwwwwwwwww   hhwwwwhhvvvvvvvvvvvvvvvvvvvww   hhwwwwhhvvvvvvvvvvvvvvvvvvvww   hhwwwwhh                 hhww   hhwwwwhh                 hhww   hhwwwwhh   wwwwww        hhww   hhwwwwhh   wwwwww        hhww   hhwwwwhh   wwhhvvvvwwwwwwhhww   hhwwwwhh   wwhhvvvvwwwwwwhhww   hhwwwwhh   wwhhww ssssswwhhww   hhwwwwhh   wwhhww ssssswwhhww   hhwwwwhh   wwhhww ssssswwhhww   hhwwwwhh   wwhhww      wwhhww   hhwwwwhh   wwhhwwwwwwwwwwhhww   hhwwwwhh   wwhhwwwwwwwwwwhhww   hhwwwwhh   wwvvvvvvvvvvvvhhww   hhwwwwhh   wwvvvvvvvvvvvvhhww   hhwwwwhh   wwwwwwwwwwwwwwwwww   hhwwwwhh   wwwwwwwwwwwwwwwwww   hhwwwwhh                        hhwwwwhh                        hhwwwwvvvvvvvvvvvvvvvvvvvvvvvvvvhhwwwwvvvvvvvvvvvvvvvvvvvvvvvvvvhhwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";
LEVELS[7] = "w w w w w w w w w w w w w w w w                                ww  w w w w w w w w w w w w w w    w                            ww         wwwwww   wwwwwww   w                 w         w     ww              w         w   w    wwwwww       w         w     ww w            w         w   w    w                            ww w                          w    w                w           ww w  wwwww         w       w w    w   sssw         w       w   ww w s s sw         w       w w    ws  sssw         w       w   ww wwwwwwwwwwwwwwwwww       w w         w                   w   ww      w                   w w         w                   w   ww      w                   w w                             w   ww                          w w              w         wwwwww   ww           w                w  w           w                  ww           w                w  w           wwwwwww            ww                            w  w     w w w w w w w w w w w w  ww                               w    w w w w w w w w w w w w w w";
LEVELS[8] = "wwwwwwwwwwwwwwwwwwwwwwwwwww   wwwwwwwwwwwwwwwwwwwwwwwwwwwww   wwwwwwwwwwwwwwwwwwwwwwwwwwwww   wwwwwwwwwwwwwwwwwwwwwwwwwwwww   wwwwwwwwwwwwwwwwwwwwwwwwwwwww   wwwwwwwww  wwwwwwwwwwwwwwhhww   wwwwwwwww  wwwwwwwwwwwwwwhhww   wwwwwwwww  wwwwwwwwwwwwwwhhww   wwwwwwwww  wwwwwwwwwwwwwwhhww   wwwwwwwwwvvvvvvvvvvvvvvvvhhww   wwwwwwwwwvvvvvvvvvvvvvvvvhhww   wwwwwwwwwhhwwwwwwwwwwwwwwhhww   wwwwwwwwwhhwwwwwwwwwwwwwwhhww   wwww     hh   hh                wwww     hh   hh                wwww     hh   hh                wwww     hh   hh                wwww     hh   hh                wwww     hh   hh                wwww    wwwwwwhhwwwwhhwwwwwwwwwwwwww    wwwwwwhhwwwwhhwwwwwwwwwwwwww    wwwwwwhhwwwwhhwwwwwwwwwwwwww    wwwwwwhhwwwwhhwwwwwwwwwwwwww    wwwwwwvvvvvvhhwwwwwwwwwwwwww    wwwwwwvvvvvvhhwwwwwwwwwwwwww    wwwwww  wwwwhhwwwwwwwwwwwwww ssswwwwww  wwwwhhwwwwwwwwwwwwww ssswwwwww  wwwwhhwwwwwwwwwwwwww ssswwwwww  wwwwhhwwwwwwwwwwwwww ssswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";
LEVELS[9] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwww  wwsssss                  hhwww  wwssss                   hh vvvvwwsss                    hh vvvvwwss                  hh hh ww  wws                ww hhvvvvww  ww                 ww hhvvvvww  ww                 hh hh    ww  ww              ww hhvvvvwwwww  ww              ww hhvvvvwwwww  ww              hh hh        w  ww           ww hhvvvvww     w  ww           ww hhvvvvww     w  ww           hh hh       hh  w  ww        ww hhvvvvwwvvvvhh  w  ww        ww hhvvvvwwvvvvhh  w  ww        hh hh       hh hh  w  ww     ww hhvvvvwwvvvvhh wwwww  ww     ww hhvvvvwwvvvvhh wwwww  ww     hh hh       hh hh        ww  ww hhvvvvwwvvvvhh ww        ww  ww hhvvvvwwvvvvhh ww        ww  hh hh       hh hh           ww  hhvvvvwwvvvvhh ww           ww  hhvvvvwwvvvvhh ww           ww  hh       hh hh              ww  vvvvvvvvvhh ww              ww  vvvvvvvvvhh ww              ww           hh                 ww                              ww                              wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";
LEVELS[10] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                              ww ww                           ww ww  ww                       ww ww  ww   ww                  ww ww  ww   ww    ww            ww ww  ww   ww    ww     ww     ww ww  ww   ww    ww     ww    sww ww  ww   ww    ww     ww  sssww ww  ww   ww    ww     ww ssssww ww  ww   ww    ww     wwsssssww ww  ww   ww    ww     ww ssssww ww  ww   ww    ww     ww  sssww ww  ww   ww    ww     ww    sww ww  ww   ww    ww     wwbbbbbww ww  ww   ww    ww     wwbbbbbww ww  ww   ww    ww     wwbbbbbww ww  ww   ww    ww     wwbbbbbww ww  ww   ww    ww     wwbbbbbww ww  ww   ww    ww     ww     ww ww  ww   ww    ww     ww bbbbww ww  ww   ww    ww     ww bbbbww ww  ww   ww    ww     ww bbbbww ww  ww   ww    ww     ww bbbbww ww  ww   ww    ww     ww     ww ww  ww   ww    ww     ww  bbbww                           bbbww ww  ww   ww    ww     ww  bbbww                              ww ww  ww   ww    ww     ww   bbww                            bb wwwwwwwwwwwwwwwwwwwwwwwwwwwwww  ";
LEVELS[11] = "wwwwwwwwwwwwww w w w w w w w w wwssssss     w                   wssssss     w                  wwwwwwwwwww  w                   w        w  w      wwwwwwww    ww        w  w                   w  wwww     w                  ww     w     w                   w     wwwwwww           wwwwwwwww  w                            w  w                           ww  wwwwwwwwww                   w                              ww                  w w w w w w ww  wwwwwwwwww      w           ww                  w           ww                  w           wwwwwwwwwwwwww      w           w                   w w w w w w ww           w                  w                                w   w w w   w                  w    w w w                       w   w w w   w           wwwwwwww    w w w                       w   w w w   w                  w    w w w                       w   w w w   w      wwwwwwww    w                                w           w                  w                                w w w w w w wwwwww w w w w w w w";
LEVELS[12] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww    hhww      ww      ww       w    hhww      ww      ww  www  w    hhww      ww      ww  www ww  wwhhww  ww  ww  ww  ww  ww  ww  wwhhww  ww  ww  ww  ww  ww  ww  wwhhww  ww  ww  ww  ww  ww  ww  wwhhww  ww  ww  ww  ww  ww  ww  wwhhww  ww  ww  ww  ww  ww  ww  wwhhww  ww  ww  ww  ww  ww  ww  wwhhww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  www ww  ww  ww  ww  ww  ww  ww  www ww  ww      ww      ww          ww  ww      ww      ww          ww  ww  ww  ww  ww  ww  ww  www ww  ww  ww  ww  ww  ww  ww  www ww  ww  ww  ww  ww  ww  ww  ww  ww  wwbbww  ww  ww  ww  ww  ww  ww  wwbbww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  ww  wwsswwbbww  ww  ww  ww  ww  ww  wwsswwbbww  ww  ww  ww  ww  ww  wwssww  ww  ww  ww  ww  ww  ww  wwsswwbbww  ww  ww  ww  ww  ww  wwsswwbbww  ww  ww  ww  ww  ww  wwssww  ww      ww      ww  www wwsswwbbww      ww      ww  www  wsswwbbww      ww      ww       wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";
LEVELS[13] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww              wwwwwwwww        w              wwwwwwwww        w              wwwww           ww       wwww   wwwww           ww          w   ww         w    ww          w ssww     w   w    ww          wsssww     w   w    ww   w      wssswwww   w   w    ww   w      wwwwwwww   w   w    ww   w     ppp         w   w    ww   wwwwwwppp         w   w    ww      sswppp         w   w    ww     sssw            w   w    ww     sssw            w   w    wwwwwwwwwww            w   w    wwwwwwwwwww            w   w    wwwwww   ww            w   w    wwwwww   ww            w   w    wwwwww              bbbw   w    wwww                bbbw   w    wwww                bbbw   w    wwww   wwwwwwwwwwwwwwwww   w    wwww                    bbbw    ww                      bbbw    ww                      bbbw    ww    wwwwwwwwwwwwwwwwwwwwww    ww                          bbbbww                          bbbbww                          bbbb w                          bbbb w  wwwwwwwwwwwwwwwwwwwwwwwwww   ";
LEVELS[14] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                              ww                              ww   wwwwwwwwwwwwwwwwwwwwww     ww   wwwwwwwwwwwwwwwwwwwwww     ww   wwwww                      ww   wwwww                      ww       w                      ww       wwwwwwwwwww   wwwwwwwwwwwwwww   wwwwwwwvvvv            wwwwww   wwwwwwwvvvv            wwwwww   wwwwwww  wwwwwwwwwwwwwwwwwwww         w  wwwwwwwwwwwwwwwwwwww         w     w     w    wwwwww         w w     w        wwwwww   www   w   w     w      wwwwww   www   w     w     w    wwwwwwpppwww   w w     w        ww    pppwww   w   w     w      ww    pppwww   w     w     w    ww   wwwwwww   wwwwwwwwwwwww    ww   w         wwwwwwwwwwwww    ww   w         wwwwwwwwwwwww    wwsssw         wwwwwwwwwwwww  wwwwssswwwwwwwwwwwwwvvvvvv        wwssswwwwwwwwwwwwwvvvvvv        wwssswwwwwwwwwwwww  wwww  wwwwwwwwwwwwwwwwwwwwwwww  ww      wwwwwwwwwwwwwwwwww      ww      wwwwwwwwwwww            ww      wwwww                   ww      wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";
LEVELS[15] = "  wwwwwwwwwwwwwwwwwwwwwwwwwwww          vvvvvvvwwvvvvvvv        w       vvvvvvvwwvvvvvvv       ww      wwwwwwwwwwwwwwwwww      ww             ssss             ww                              ww                              ww  w                        w  wwhhw                        whhwwhhw                        whhwwhhw                        whhwwhhw                        whhwwhhw                        whhwwhhw                        whhwwhhws                      swhhwwwwws          pp          swwwwwwwws          pp          swwwwwhhws                      swhhwwhhw                        whhwwhhw                        whhwwhhw                        whhwwhhw                        whhwwhhw                        whhwwhhw                        whhww  w                        w  ww                              ww                              ww             ssss             ww      wwwwwwwwwwwwwwwwww      ww       vvvvvvvwwvvvvvvv       w        vvvvvvvwwvvvvvvv          wwwwwwwwwwwwwwwwwwwwwwwwwwww  ";
LEVELS[16] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                              ww ww   wwww   wwww   wwww   ww ww ww   wwww   wwww   wwww   ww ww ww                        ww ww ww                        ww ww                              ww             wwhw             ww             wwhw             ww ww         swwhw          ww ww ww        sswwhw          ww ww ww       ssswwhw          ww ww ww      sssswwhw          ww ww        ssssswwhw             ww      wwwwwwwwwhwwwwwwww      ww      vvvvvvvvwwwwwwwwww      ww ww   wwwwwwwwwwvvvvvvvv   ww wwhww   wwwwwwwwhwwwwwwwww   ww wwhww          whww          ww wwhww          whww          ww wwh            whww             wwh            whww             wwh            whww             wwhww          whww          ww wwhww          whww          ww w                               w                               w                               w                               w                               w                               wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww";
LEVELS[17] = "wwwwwwwwwwwwwwwwwwwwwwwwww      w         wwwwwwwwwwwwwwww w w ww          hh  ww       ww      w          hh  ww       ww w w wwwwwwww    hh  ww       ww      wwwwwww wwwhh  ww       ww w w wwwwwwww wwwhh  ww               wwww    w    vvww            w wwwww    w    vvww               wwww  wwwww    ww   ww      wwwwwwww  wwwwwww       ww      wwwwwwww  wwwwwww       ww      wwwwwwww  wwwwwww       ww      wwwwwwwwvvvvvvhhw       ww         wwwwwvvvvvvhhw       ww         wwwww  wwwwhhw       wwwwwwwww  wwwww  wwwwhhwwwwwwwwwwwwwwwww  wwwww  w  vvvwwwwwwwwwww        wwwww  w  vvvwwwwwwwwwww        wwwww  wwwwwwwwwwwwwwwww    wwwwww     w                    wwwwww     w                    wwwwww     w  wwwwwwwwwwwwwwwwwwwwwwww     w  wwwwwwwwwwwwwwwwwwwwwwww     w  w               hh    wws    w  w               hh    wwss   w  w   wwhhwwwwwwwwhhww  wws s  w      wwhhwwwwwwwwhhww  wwsss  w      wwhhvvvvvvvvvvww  wwsssssw      wwhhvvvvvvvvvvww  wwwwwwwwwwwwwwwwwwwwwwwwwwwwww  wwwwwwwwwwwwwwwwwwwwwwwwwwwwww  w";
LEVELS[18] = "wwwwwwwwwwwwww w w w w w w w w ww   ppp     w                  ww   ppp     w                  ww  wppp     w                  ww  wwwwww   w      wwwwwwww    ww  w        w                  ww  w        w                  ww  w        w                  ww  w   wwwwww  wwwww    wwwwwwwww  w               w           ww  w         hh    w           wwssw         hh    w           wwsswwwwwwwwwwhhw   w           wwssw   w   w hhw   w w w w w w wwssw         hh                wwssw         hh                wwssw         hh                wwssw         hh                wwssw   w   w hhw   w w w w w w wwsswwwwwwwwwwhhw   w           wwssw         hh    w           ww  w         hh    w           ww  w               w           ww  w   wwwwww  wwwww    wwwwwwwww  w        w                  ww  w        w                  ww  w        w                  ww  wwwwww   w      wwwwwwww    ww  wppp     w                  ww   ppp     w                  ww   ppp     w                  wwwwwwwwwwwwwww w w w w w w w w w";
LEVELS[19] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww ssshh            hh          ww ssshhwwww  ww    hh    ww  w ww ssshhwwww  ww    hh    ww  w ww ssshhvvvvvvvvvvvvhh          ww ssshhvvvvvvvvvvvvhh          ww    hhwwww  wwhh  hh    ww  w ww    hhwwww  wwhh  hh    ww  w wwvvvvhh        hh  hh          wwvvvvhh        hh  hh          ww wwwhhwwww  wwhh  hh    ww  w ww wwwhhwwww  wwhh  hh    ww  w ww    hh        hhvvvvvvvvvvvv  ww    hh        hhvvvvvvvvvvvv  wwvvvvvvvvvvvvvvhh    hh        wwvvvvvvvvvvvvvvhh    hh        ww              hh    hhvvvvvvvvww          hh  hh    hhvvvvvvvvww          hhvvvvvvvvhh    hh  ww          hhvvvvvvvvhh    hh  ww www  wwwwhhww  hh  hh  wwhhw ww www  wwwwhhww  hh  hh  wwhhw ww          hh    hhvvvvvvvvhh  ww          hh    hhvvvvvvvvhh  ww      vvvvvvvvvvhh    hh  hh  ww      vvvvvvvvvvhh    hh  hh  ww www  wwww  ww  hh    hhww  w ww www  wwww  ww  hh    hhww  w ww              vvvvvvvvhh      ww              vvvvvvvvhh      ww                      hh      wwwwwwwwwwwwwwwwwwwwwwwwwwwwww  w";
LEVELS[20] = "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwssss    bbbw               bbbwwssss    bbbw               bbbwwssss    bbbw               bbbwwssss       w                  wwssss       w                  wwssss       w     wwwwww       ww           w     wwwwww       ww  wwwww    w     wwwwww       ww  wwwww    w     wwwwww       ww           w                  ww           w          w       ww           w                  ww           w          w       ww  wwwww    w                  ww  wwwww    w   www    w    wwwww           whh www    w    wwwww           whh  ww    w    wwwwwhh         whh vvvvvvvv        whh         whh vvvvvvvv       wwhhwwwwwwwwwwhhww      w        whhwwwwhhwwwwhhww      w       wwhhwwwwhhwwwwhhww      w        whhwwwwhhwwwwhhww      w       wwhhwwwwhhwwwwhhww      w       wwhhwwwwhhwwwwhhww      w       wwhhwwwwhhwwwwhhww      w       ww                      w       ww                      w       ww                      w       ww                      w       wwwwwwwwwwwwwwwwwwwwwwwww w w w w";
var LOCKED = new Image();
LOCKED.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAADAFBMVEX/sgD/zBEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzV1GhAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQBQYWludC5ORVQgdjMuNS41SYr84AAAAKVJREFUSEvVleEOgCAIhPP9X7pN0YA7Za6txH8gXxKHeF0frLKxajob8eU3oBcOk2Up2TI7hgBeFksgQGTUCAAS32KMoVzqCy3kcXjb6wD7coj7wtQcaS0BX3ub5MoSMgK4uMOLeGogmgXQGqcDpr11Syrh9D909dCXB5BLaqQJhFMzAOcCqWE9gk20SZXa4MgOYLOnuw/TV4K8QOtH+FQgmkgv928P1ASRwuNk+wAAAABJRU5ErkJggg==";
var WALLS = new Image();
WALLS.src = "data:image/gif;base64,R0lGODlhAAw8APcAADsyVjhZMzFOVFYyRVZKMhtLiSJcrRZOyR1Z5WgcjByOPiKxTBXGfR3ik4wcKa8jM8klFuUxHYMjr7QWydEd5YKMHKSvI5XLFqjmHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAw8AAAI/wADCBxIcKACBRgSJlxwsKBDgwgVYmCo4OHDgxInNrRYEKPEBSAXcCToUSHFkSQjmtyIMkDJhSxRvpwYsqVLlTAr2px5cidOjTpb8qwp9GfPohmPyjQac+RQkD6TNuXIc6rFqkGXJiWq9aPVi0yzOg1r8+ZWqEi9iqVKNqrask9Fpl259mrbuTnhGuU6VmpdsH71BnZrki/bwXiBCn5LeKFhu4i70l08uTFNtJLzWlbal3HikHIzK9781SFWyo4xd678uXTHu6JBk/5rGvZqzZ8fA/Yc23XKyLcvhw7O+TBv4r4hnh1unHVv2q+BN0/NHPLx6aNbQ//9UXdt6dadI//frry7auzFw+N+jlr47Pbpd4tH7z36dfXZ2W+uz30+/vjf3ScfdS2FBJ5DBgpYUIL+IQjScgU+qCBBDK7HUYX5XShhYec9hCGAFG5ooUUfJhfAh/wJVCJ5J4qYIYkugjgQih06uMCBC8Zo4oo20VidjTiGeOOEM+rIoo8RDtlgjkqO6KGRPcaYYotNvvhklTKqCGWSECpwwZdfHrSRl92NCWaYYgpEZmFmnilmQ2s6lqaXbr7p0gXmQUUnmHbeWaZOe6Jp5p9qnnnBmxXFSdOchiLqJ4d6Nprmo3ICKumgbFpaJ6N/JnopnHhCKlKgh06qKEht8mlqqJUWuimond7/+aqneY76aaGEyqoqpq3qKiismXo6K6XC2foqrpm6uquluZLq6KkUCbssraL6Wiqvi2q6LLK9OmsntIwOC21N3mKLqra/cputsr9SW6m07RILGkW3HsTquvYeay+h+U67b7D9tvsvdfTqC26i5SJ877k3fSrmwtEGfO2bEIck8bcHN2wwxHAm/HCnFyM67rn1ZhxyxxwrPOvA2T688sgFb8sywycrzK/HM0eMM8w1N3xzySlr7O/BLg9dMckb/5x0sjV/DPDOR8ecbs4oL91q01RT/HLU1vaZcderNuuwvNGCzWm1CavLsNnMJsu2uy2/TTa5t5Kdarp2ozsx3OfC/7v33JEemze7E6vdk8d5+/0s12kPzrbhd/9NtNwwP+54418jPrnmjNeduedBU56y4t92Lvjnp4fOeayri9qzlFVvC7vK085edLtSWpz27EKny3vTtgOPJWivDx+778bTjnvyt++dO9KyJ9974b97HLz1w+t+a/XbSy/8Vog6/LzU1Hu/u/niM/99rcWDr3z57k+P6PXpL0e+ndwfm3/t6mNvfwBjAyCrdCeQAH6JQxtxWEUOmJo0KVCAohKJAQe4tgkiUCcPZOBlHLgyCBJMgsPy4AYxGEINElCA/hKh7hbYQRPOC4XxUmEFS0jBnmSwhhxMoQtlY8EGknBaBcThD/8FJsOy3TCCMPxbERNIwwsGUYdCZCEUkdjDET4xhjtk4hR9KEUi7rAmVTxhGGe4xRF2cW8sjCDnhCg6NkItim9U49jo5MQ11lGBdORiHD9oRx+28Y5bgyMev4iqOWaRdOECpNEEGUg5iuuQf/TjHs04yXkxxJBuxKQiBZZHSg6yhhbTpCRFacVK9s2UxCMlAftYyk9eEGudtGQSHbXEISoRkrN01CHPKLIigrGJfszlpHB5RC4Kk4NUBKYVj0lCJzIzjcYsZrFACMRaXvGWbHxmLXmpS1BCZYw2VKYYWxhFbRKSmljMJji16MVySlOW67QlLYlJzlea05voxKYz43n/zV7u8p6OBGL2QDWsgSJSTAbFWvZCWdCzEFSgDj3oQRKKs4UWsqHmeWi8DPo2BVBUgRa9JEY3+TeOVjSiCrWfSCGaUYmeKKId/ejKQoo4k47NpjNF6UlrtdKNwrSmPwWpToXKU6C2VG449ZdMlapSDxKvmcJhInWkGlWoWhKEH8TqNLV6VaeOc6pW/WpVg5hVr76QgV1FKzxD9VSyjtWs4QSrW9PK1rWWVa1nresM5QpXqrYVrr+8q155ONjAvhWvcT3sYP1q160C9puFhSxfEcvYvSpWsJh1LGIN+1fKhtWynY0sVxtL18yGdrKL/WxiS6tZ0T52oQ1ZTmzzNFtI/9U2qyoNqW5lWxHeBsC3wOXpboWb2+Datre0Re5xf0vc5kZwuMs1rlylu9XiOhe3yWVudLNL3ata97nfnS53x7td8F63uudta3cJuN55hRe95i2veOU71vd6N72kFetpL8tf1vo3v3lFrYD7q18AE9a0Bq7sagsMWgNz1sGSJXCDJ7zgALcWwRber4YZXOEDX/jD/6Wwgkes2gdnGMKjFbFqSTxXFL/2xZ5tsYpl3GETezjEoGnvSXR8W/hiN74/nq+Q60veIPv4yPelr3qLTGQgI9mS9mUvk5esZCjj171X3vGUpVxlLDs5yUam8pDF3OQwW/nLZx4zl9XMsCh72f/Mby6znMlM5zQ/Oc6lnZdU9dxMPpPVzxD0bqChPGj3FjrHh44roA+4aDw1urqJflCkbzRpDCR6z6d9tKYJzWhOO9rTkO70Vzc96kyDWtCiRnSqDXTpPpu61LBW9acNvWpJ15rSq8Z0rBX9almHeta+RjWweb1rXe9V2L9ONrJJfexeEzvYp442nsXsZ/Ypt1i3BfOdc5xlLRMs29QO97THzW00r7narrs2uuFcbnb7yNvYVre422zudm/73eA+97zhre1+29nf+g44vb8tb3K/e3zjy/fA461dhncb4dAleMPX7fB0T/zfGDe4rYdt7Gd7vOMbV7a0oV1sV5f8zyP/Z/WtLb3yVqP85C6vtMxbTnOOm7zZMK+5yGk97JAz++M397jPUz50njM85rkOOshx3XOm75zkOI860F8OdZU3neVXR7rNqT71mWdd5wBfOMXHvm+Iu9neZBc4v8se8XsnvOBi37fCD972sK9d7XOfu9kfbtG8w/3ucdd43TMe+MID/vB7rze+/+73i6s98e5+u+MN33i+n93qlvRSEDN/gc3rufMC5LznsRx6K5ee9F+67+lDOXrWr76QrYf96yU0+yHVPiG3x7roZ6953oM+9Z+PPe2Bj/oLqJ743Pa98HuPfNk3/5LCt/3zpW98008f989nfvVTufzfb9/119e9//W/n6DcK//82ff+7sNvfva7n/zQRz/8tb9++FP/+PbHfv7Fz3351///44d/Akh4sCdH2iV6Bqh4kOd2mpeAfNR5Duh2g6dxDfiABxh8EWh3C6iBFThNHYiAFqiAE4h2GBiCJuiBEBh5I3hwH1iCKHiB3CeCl4dwLRiDJwiCEjiDNJWCL5iBLqiBKzh886d+wed/Rfh+A1h8SQh+Q9h9Tth++weFS+h8TWiE/YeEAZiFSniEVZh+T4iFWxiGyeeFVsiEACiG5QeGY9iFbHiGZqiFaziFQuiGVEiH8aeGaRiFeHiHbciFdnh/cJiHHMiDOFiIP0iAG4iINch6PmiDOf9oeUVFiIfoiIYoeDqoUotYgDc4iSRoiQ+XidDXiIyogpcYiTA4ij24iZ4og6YoipqYio/Iiq4YiqqIikBYigDkUfPyJQWki6DBi7loScB4KML4e77IIMHoZclYbsuIjMS4i8ZYjL0ojc0IEsN4jBtSjUqijQrBjdiHjQtwjdT4jL8YjdA4jcpIjs4Ijt2ojtnojuFojuWIjvOojeKYjuz4jWfmjSwHjvdYj/D4jyEhkO+Yj/24j/DYjv4ojwPJkNbokPFIj+uIkAbJj/YIkQQZkRcpkQVJkR6Jj+O4kBypkQEJkQr5kcyYkMLFi1nFklvlklcFk4gYhLolk+fYkin/GJM5OZOl+Fw2OY84yVw6KZQ8CYk+uZM3+ZJICZSxSIoruZQNSZRJOZROKYtBeZVKKZVMeYtGiZVUmZVeWZRWCZZk+ZVmKZZVuZFqWZIjmZEnCZJwmZIiuZZzyZYWqZIHGZcTeY50GZJ+qZcdCZjbaJeEWZeGiZJ7KZeI+ZBtiZGOOZJvqZiCGZlR2Zd8WZiLOZgViZeWCZCHeZmbGZqZSZmM2ZmViZmTqY+peZRaGZVhOZVo2ZRlKY2vuZWxyZWsWZuuOZurWJW6yZi/GZG+KZtnCZvGaZu9SZy0yZvI2Zx015PB+ZO7WZydWJ3P+ZStCZzMOZ23KZY34V7AOFE5/xae2IgB5AmeoCeeFfKd7cae66meIuKeD3Ke45me5UmfBoKf8QmfTSKf/cmfEuGf5mmf6Kkm90mg9Wmgbyag3QigDVqeD1qgAqqfN0KhA6qg7emguKehlsahE4qg+Qmi8ymiFUqiAeqhKAqhG3qgGBqiLTqiL1qiMXqiKtqhNcqgKyqhAGqhPGqiEZqhN5qiOsqiHzqjFvqj7xmkNVpdLOldTQplT1qgypmcTgqBVfpbV8qkVtqdVAqlWyqlWRqmXGqdZhelCaqlWOqladqlbHqmYgqmajqlZLpbZuqiaHqnuDmcb+qmcbqn1zmWfgqjeNqnY/qnNjqkiJqgRYqjh/8KpAsqpIq6oybaozOKpPuppI9KpJJqpJPqoznqqKCapInqoou6qYx6qpAqqpGqqaw6qpeaqbAaqjBaqq26qrGqqrj6qra6q6Rqqqmqq7n6n7Xaq8M6q78qrLdapl/Kp3DarHMKnYPqrHYaqDR5iXUqqNR6oXJqqNHKrN46rYWaiNKKrYQ6rtVqedcqo90Krm3KrdmartqarV2Zg/Bar8vKrs/alfKZEPrJryLqry8KsPtKo/Y2sJaaEQPbrxeasP+6sPCJsA9LsBhisJ8qIQp7sQ2rsAcrsS5CsY1qsRkbsgHrsMcIsSXLsVXisQw7shjLsg27sTBbsSkbsS27sjb/G7Ex+7Eze7IbW7M0K7Iqi7Mya7IF+7Mue7Q3y7NDi7JEe528eF9Pa2VRi2VTm6+AKrWdB7VZi7VUwm1V667hOiRfC7JdmyBjK7Zb267i6rVpy7ZlS7Za+7bnyopnC7Bxe7dhW4p1e6F4S7VtC7Zqi7Zya7dc27dWq6eFm7h+O7h8m7fnlbRuC7lm+7JLm7NBe7I+i7lAK7Q627Qdy7mSS7ahK7iXW7RK27lMS7KRa7Sj67k7a7qwO7lIy7q0e7qlO7GgW7urq7mza7u567vAu7vCK7utm7qW+7vDK7q6S7zIi7vB67R/C7eK67Z5uq3Su7iGK7vVu73Tq73de72H/2u9gpu94Ou9gau30Tu+36u+5wuJe/u+6Uu47Uu38du42Lu+0MqV8Mu4+8u9yXkTzWOgAQzAEiPABUzAzoLAjaLAbsLAfOLA5DnA4XMmBkwqFbzAE/zAGRwmEHwo7qkQ+AnCICrCLUrCH+yvCMMgHKyeIpzCG7LCvmjCLCywM6y6LzzCH3HCJqHDC8HDE9HBF0zBQDzEG+zBRYwwzYPEF0PEWgMmQezETJzEHazECXzEOhzCNBzDWazCODygLqwkMMzFX9zCV9zFWGzDYNzFPVzDa6zFO8zGQNHEvCgyhoLAFkzHFIzHi7THnPRJTqzHc1zEdlzHgIxGb8THE8PFAP+syAh1w4vsyI2cxm8ixpHcwpWMwpd8oZkcyG7MyYwMx9GyIm6cE6McxwFcyIOcx4JcyCJzyH0cSH+8yrIsx53HyrZ8xKx8ZmNLwrocvbzsZWHSywYZzMCMl7ssv4rcy2+bv/8WxQcsyM5cxbRMxRg8zdFcx9csxFa8zdbMzYpcxiW8xY5cxmOMwuR8zjV8xupsxmr8w6Dsw6NSyvEswbT8xBH8zN2cz1LMzfTcz/jsz9K8z/q8xOnMzuGMxjLcyUas0OXsxeis0Ae9zhHdzvH8IfAMz6ic0bN8yrjc0dN8y/Ws0SG90bDkx6+8LJ8M0ZtcywX9yJK80pN8wzH90i3/vdIuTcI2ncmkLMo8bSQj/dMcDdQlDcsnXdQsLdR3TNKubMgmbcy+jMyOrMzCPNXFPMxOvcxQncZYbb+AG77znMAEvMBh3cBj/cBljSZnXSpp3TEhs9YGLNbW7NZrrcSSMtd2LZ4S4cHsmdeAoot8jaF/vdcg3DEiotZ4PdguzNeJPdiAzdiCza99XdiRPTyP7RiVTROXrSdSLNdx3dlJTNd1ctefzdmb7dlLLNpt/dGiLdmNDdmtbZ6THdiHDdmLTduVbdh+jdi3HduOPduw/dp67duYLdyaLSWZrTPVLNDKTdAf7dGf7dzMvdwBHd1DjcitXD+M3ch/rd3Z7dsL/53btM3d4e3d89MkzmPeSMza4v3b6/3dtvPezEM/DczP1D3dS33dRM3U8z3Q9p3c1W3U+K0qb+bBA14RBV62f13gNVoqCt7g7UbgD27gEY7gjD2/Zkbap23aYK3aHD7aHZ7hpR3iIJ7aHl7iJM7auw3cvO3au13bsO3iuC3ZML7iv53iNk7cFU3ZOH7cGL7hIu7jJB7k3oLaQF7kcP3jdf3hQ97hKE7eKv7kLR7l5D3jMw7lTn7j4G3ZO77lWd4y9e3f/b3fz93cZD7m0g3maC7m/63f1h3T2+3k7Z3e6P3Iih3nbo7Ydh7ndN7dWe7ec77eLQPf7tPlpxTmGszfaf/e5tB931Pc6PR93yD92Qc+6RNO6RXC4BG+4ByK6Zcu4Z1O4a5t6WsLtmVR6qZ+6qie6qq+6qze6nZRJWPiURkR67Ae2bNu6xJB67euoLv+nb0+Ub8u67mO6wqh68PO6+bh68kO7Msu7Bzi6tAe7dI+7dRe7SlR68he7MSeEMau7dnO7duOAd0O7t8u7uE+7uZe7uiO7uTi7Kmh7M/O7M9u7fRe7/Z+79Iu7+QO7/uu7+nO7//u7+t+7gSv7gUP8ANf7u2ePQC/8GeB7xAf8RI/8VriIg1hbxePIRlv8Z6O7Rjf8bv+8V0b8hoP8scu8l7NpRS/8izf8q0u8AcP8wb/P/MIH/PuHvA3n/A1T/P+7vDNzvA9XyMuP/REX/Qyv/NIf/RKn/M2j+1Jz/Q8D/UNX9wPH/QV/fBFn/Va7/JL7/RdH+xeL/Vff+xPH/ZmD/ZVf/M+H+9qL/Rb//ZwP+0oX/Ijf/J0P/ccX/fejvcef/d+n/cpz6YCMPiEX/iEXwAF0ACKr/gGgPiG//iHn/iL3wCNXwCQD/mIP/mU7/iXb/iZP/kGEPoG0PmF//mLX/mkX/qSf/qcn/oCYPqM3/qpD/uUL/qu//qrH/uWf/u0j/q8n/ubv/uu3/u2P/zA7/vGr/nIP/vHL/ukT/yh//vK7/yd3/vUf/nWL/zMr/zF/7/9oH/9mN/82v/84n/7uM/90Z/83z/+1V/+0r/+5g/9o6/+rM/+2O/+9K/78X/83U/+02//ACFA4EABBQo0QIjQgEGCDRsaTKiQoUOKECMawGiAokOLCRcW2Mjx4MWJIQd2lAjS5MmRHjOuFIiywUeYMVumrFnw5sySK2Vm1AjzZ0+TQ1UK3Umz5s+XSCPyPOozKdGQRnMyxbh0atSiW6961foUaFiSXKuCdVr2q9imUsVS3WiVrEe4FZO27frWbFy0btXOVYj3rN61f9PS3WuXbdbDOAFDLYw4cmDGfiU/VtoYMmbBfAljrivys+axpEM/7JvXsGXKQVlvNp1Y9P9q1S4r13YcezLs16VNZhz9G2PwkMBpbzRu23Xx4ccpJs8t3ABx5M2Vw4TOm/l05w6zZ5a+eHl17pdXfj89EL1sgt87e7cefTv15/G1kxeP3T74+d0brq/Jvdvw86+9/dITCED9ymttQfrgY/C++iLkj8DrCmAgwwwNmgjDi5TCUEMGOFTJQ5c6FHFEEgti4EMOWRSRRJBMbE2jEDVckUUXS0wxRxpnArHHFX/E6MUbNxyyReVsFBLFHWNqkscnYcQxyR1njBLLD186UkUnT+Qxxhd1BBNKMY1UMjA0z2SIyLG69DFNIFFkE8op4bQSTCzZ1HJJKpH8Us0wqwx0zkH/AW1TziIT5ZPMGv/0UsoyIY3zziwdNXRPQhPdMis8C13UzE3tnPRTTvWkNM8aDYpSJ0VpYrVOVp+MdVMOX5Uxy1mXrBVRV2k19dcye4301iuJlXHXVYNV1lBXZXWzTVON1RPZZF/NyFppcZ2R2Wi71fXbW/lsFqiPWi0XVm+5fdbWdHMl181s1wUW3W/bRZRaQcd1V95F7WVXW3DrjZdbfvNNd16ACR71XXALPnbahD1tFdNQUwU1yEbFxfjUR4O1WONRQ6bTVpIZNdlfJus8WVRfW+64z31jDpnLiu/tmFRBXS72ZE3zrZlilnEGmehLOZ426JVHNnpodmlG+mhs/4Vm+umirZb6SqinXvrlpqu2dGODt+703Dr3U7dVtLflc20Ss0Rb4bMpTHtutti21e2Di437X7sZ9tVtfPmmG9686ZZ7VMEFFmDxafUWuIC+zVa88Icrv/vyfCF/HHG/MQc80sYtH1xGzuH2nPLASWfccdQz39v01FtnPVjX27Y8dhInF+DS3tOcVyDfM7RtIl1/L56h44mvUaPhgb/4+eSFJxd5yl5cHvqxpL9eJe6BVCr75EESv/nfTbYefOMbTT/48xFuf1Hyq2ce/Je+dx//6OnXHnv+l3Qe++qXPwH2z3v/69783BW/7RVweu/rGQPXt8AByg+CyWLg/RzYPf/qoa+C4UOg+pQXQnMtRGoG3BoKJRai8a3wg9k64fSSxkIOutCAkYsVAGf4QZQBjYYijFkOE2hDHcawhkYEIhGHGK4XFgmJwduhCpl4QyXaz4likyIWZTjFFnKxeVHcohaPWDAqetGKJhRjEp8YqirOC4c/LOEFc8TDA3oQhXJcER0VCL8mBtCOD9QfCCl4Qzz6D4CFPCAgNwhERM5vfI3MYFYCOUGgSbCOfCRk+c6ISOop8o8chKQeQ6k9DX6SkZO8ZLEcmcBRHhKVHawkHWGpSkvukZZ95KQlZymjToJSk25s5Rcvhbge9oyYP1PlMXGYOjSa7Jg0e6bElClN8Vz/0ZmLKSYvo6mraXKzms0E2jYbJU53dZNczEwaOcOJTWQmy5zl/GY62QnNeVJzS287ZzyHWc993rOdpmPnMvU5Tn4S1J9BfCfCmGk9oKyvNQ61H0QbmsgzBrB5Fq0oQ+PIvIn2sqMa3d9DKVpCjJIUpA286EklSkCRepSlGeXoRpVk0piaS6UjfelHawrClO5Ugz2dqUxbelOXhjSiOLWpTyUZ1KQyFaVHLSpPoUrUk/4Upk61Kk2dulKj6nSrSH2qVoE61qnulKtS9SpZxXrVi4qHIW4FCVwFINdvMtOudaVrp96q17jyda5lm1xg7+rXvCpnr4btKwAHq1i8Etax/4j9K2Qby1jALralhb3sY9ta2cluVrKahSpmK9rZ0XIWtB0VLWpNS1nWejazn4Xta11b2taytaxfjepZz5pVodp2rWm97VDNClbeNlWtvQVucnO6XOP6FrnP7Spz0Srd4oYVutaNbnanq93qdnepx9WubsG62+86t7m/la54c0vc8qL3vNdVL1WHG1XvlvS6AqJJaoOnX3ORlqT+3e9pAxxb2s72v6uVbWgFHCoA9xfBBVYwgVUr4RI2GCgWPmyCJ6zhCj/4wLXdcIQ5zGAPdxjEJh5xfhes4hM7uMUXXnGGRTzjDxsYxWw1l0NznMgdd7LHyPsvkCss5P4S+cJG5v/pj4mn5BYxebRIHg6UpyPlBiBZx2l1cpaHvOQtN7nLT+YyS7UsZix/OchhPjKagWNlHpeZzG9Os5eLrOYo03nKar4ynJPs5jiDWc59PvOf96znPIc00H5G9KHHbGg+DxrQZoa0i5cVWStmuMdls/SNawzhTV+aV4mtNKg9bWNJc1rTGx51qCmd6k6futStHrCqMS1qVLsaxi/GL4tl/elV1/rVts715DIda1b7+takPrapiW1sXRf7189ONqxJPOlZ93rZ0A72Xdns40YX2tFrtnOVw03lbZcbz23Wc50Fre5ER5rRhEb3ux8953Xfud7iFrS39R3vb7Nb0e4Gd77/+b1vbqfb3u2mN8Ll/W2Ck3vcD7+3uQVe8IV7298Av3jCF83wgfM74/MGea6HPe1dUxvXgrVws5k9cpVjG+UlvjbJnS1zYL8c1yzHOa1jnu2UC1vnNN85y22ObJH/vOVARzrPYR7tlRs959ZmusstW3Kqz/zoSj+5vUuIIeptnQFdz/HXf+d1sDt47B0+u9kzdOC0w7Dsbm+7E98u97g3p+7cuTtC8o5vsted634X+9rDPne7C17tDGC74WEMeML/XfF0f7wJCY/3yFMe8WivvN4j7/jLNzTwnYf75j+feNAbZ++nF33jRz94xqO+9IV/veVJ3/fUt772mec75mOv//nd597zqge+7Xvv+tnXnOtFjCzZkZ/1nqPz68sXZvIHz/ylB/v40Yf+Ga+v7Kh33/rPx374tQ9+7mOd6JLPvvLFL23zlx/9658+/KXefH1K//fpj7/7p87+94/f/m7Hv/mrPtijvdfjvAJEQN0rvsNbwNAzwNX7PeFrQNPDPeJjvdt7wOCrwA0cPg5MwAjEwA9cPA9UwBIEwQyUwAvswBWcQAJUQRGEPBQkQQY0wRGUwRuEQcmzQBrkQRvMwQN8wSDsQQpkQeMjP/XzvwD0vqFzv+1DwifMP/7bPyP8P7lTQis8vyl0OSeMwi68vyykP8Diwi9MQvlbQi1cwjEEQP8zxEL9C8Mr7D8oJEMpfEM2jEMvXEM3HEDKkxxzyRDh6UOg+MPeCcSMGMQRKaFDLETrIEQTa0QXe8Rbi0RDDLxFNABFTMRKzERAdEREhERPlERQTI5JxAhM9ENNPEVOTEVSLA9WTAhX1DxLfEVRLEVUFERbpERVvEVdHEVabEVfnEVZjMVNZEVT3MVixEVGBMZh/ERhFDdLNMZcREZerEVq/EVnhMVn7ERoTMZL7MZorMZsFMdl1MZmJEZfBEdvtMZ0DMZtdEep+8OLiseKmkeSqseaQ8Nsu8dUlEfws0d/xMc6pEeA5MeB/Kt/PMiA3MO62sdd7MeELEg6XMjKasj/XHzIi9RD6lOsiqxGjERIMJzIjSRIhzRIj1RIjTTJiNzElDzDN5zGl0THb+zGdjTHmgxFblxHmcxJa6TJm3xHn1zFmNxJmMRGchzHosRJojzHpDTKpkTKn5RGoVTKoHxKm+zFqjxGqdRKpsTKq4RKZeTKpRRLqvzKayzLnozKsCTLtQTKtvRKeBxJiyzJuZRIlKTLlbxLlRRAu/zIvCTJvqxLkBRJiPxLvATMkxRMlpTLw9TLlgxJxexIv1xMxMxIyFRHy+TIfGRCxizMxpzMvRRMneivQTSI0RS70rww0lzEBlBNSRPNY3tN6IjN+JjN6WjN1DzN1bxN4NhN2kRN/9n8Td9czVcMTtvMTdO0CeSsTdY8TtgszohYTuIcTr17zt40zuTETezkzeYEzumssueUTtesTu4cDutkTu0sT/JkkOikTu9kz+/UTfU8z+U0T/MMT+d0T/BsT+UcT/S8TvqUz/vsTvHMz/j0z/nsTwA9UAEVTgKdv3j8LwitMAlFzsq00Ah9PgydKw0dLQp1TL6c0AwN0Q0d0Q4VUdC80BLl0BVVUcoMTBMl0QplURl10Rql0RvNThhNURSd0Rzt0e2M0Q9NTB390fQMUiDdUSFV0CVN0CYtUAfFTygFUiY1UCqV0gaN0iydUiflzyrVT/i80vX8UivNTjLd0ifVUv8sHdAy5VI29VI0XdM4VVMjNVM6bVM5FVM4ndP/vFM7fdMwhc4xFdQ/ddMuNdQ0zVNA5SwPRdIivc4kbT9HPU8ibVEetVEfrVRMxdFIvdRGzVRP3dTN7FQjpdRQfdQXRdVPJVVJZVRRtVRTnVRWPVEhhdRVVdVTvVWBrLHZRIje7FXy/FX0DFZeDdRCfApiZdBjDc5hXVYENVZnhTFfLdZkQ9b9zA5ildZsBVZovdZmTdZp7dZn1VZh5dbmkNZvRVdrtQ9s3dZxZVdyTVcwDVdqbVZ3rdd23dZ4rVZ5Xdd7JVd7Fdd8VdcI2deC9dd3RdiD9daBVdZnjdcD+0OI/Tr/iR0dB4vYUdVM7rhYi53YDtvYaO3YV6VViiVZjw1ZkK3YkcXYYC1Zjk1Z4/hYThVZmD1Zmn1Zc61ZnL3ZjA3DmNXZlkXZVJ3ZnzXZnWXZohValXVZoLVZpnVVWk3YgP1XfIVXhgXXfnVYqwVYlI1aes1afiXYhQVbZpXarrVZg/1atPVarlXYsm3btZ3XuMVatnXbuqVbuJ1buQ1buz3bt+3btBVbtdVbsr3bvy3cvEXcvcVbjaVas9VZwU3chnVMn2Vcoz1Pp+XZiaTco11apF1Zzc3ZysVczlXa0m1az+3c1DXdpz1d1W3doP1c6tvcy0Vd2B3azJ3d3A1d0pXZ/9UV3dp93eBlXSbUib2xCeMtXmI5XuVNXjhp3h553hiJXhyZXtVEXsOxXubF3hGpXu7d3m6JndhMiN0cX+4sX+08X/H91W5Jjg1RX+ZkX+tw399MX/olXPk13/ulkPdVCP6dCf+1EXzSkOXtEgJOEQMWEQSm3u/tXvBFlu5V4OwtYAhu4Apm4AsOxPrNYP3V4PbNX/h93/ndYBC2XxIeYfLl4BQuV7EA4BYu4ZQQ4D+8lgSe4QGuYRn+3htWJRvqlwPW4eYt4B/W4WThYYQxFQ8uXiTmECUuYRw+4Ujx4N3BXykuD0Rh4idOYvzN4ir+uiU+kBeGihGG4fWI4S7eXv8g9uEzHuI1zuE2LmM0pmE1luMyJuIp6uEYMTGfPd88ztk9drEN4WNnBOQ/Jkc95l0uvlk/9l3/ouAzbuQ3tmA6juTwdeRKhmRLpmRJxuBMRuIQ/mAUXuH19eT45WJSLl9TVmFQVuUP7l8wDuDvcOFLluXrneUH3mRb1uRanmBM1t5czuRfxuVObuJPJmb0FeVhRmUTjmJPNuZQdmZQbmUx/l9XBmAhnmPjtWY6ZmNtdmNsvmblzWbd6eY3ipIrNmct9mJETudTXuf1bWf4fWcrRudh3uLzjWczluaPyOd3HuMvfuNwBudvLuIdtmMjTuN/FuiDFmduZujY4eNEPmT/RUbiQKZoQhbkQu7jiNZo2l1kD0te6P1o6Q1p6h1p9y1pFTlpabGWlHZgkJbklF5el9YdlqZpbX7NiODemx7fEulDnObp+Mhp1PTp+B1qne5VaQFqpGaQoO7pncZOn35qpzbqwJhqIKlqT2lql4DprX7prp5pmwbrrw5frh5rr17psD5rsU7qqD5qtmbNn15quC5qod5poq7rqUZpum5rvJZrqdbrt3Zrq/5rwc5qqh5s+cFlYHbeWx7oOiajO15gX07syW7sbV7owvbev85szAbftfbiof7sug7to5Zi0Nbszo7rLIbq0QZs1s4UvYHt3KFs6GVs2m5ocn5sg5be/9rebcmu7HHGE0njXuEGCeJ+Wagmbu9UkeRm7mMbbucubug+bqe+XQAj6we+buetabFO6+7WbrP+7rLmbjzZ7rRea752a6Y+79O2a9Lm6/Z+a/hW79RG7/o+7Femm6vGb7bIbpnGbvAWkvImb7QO7/8WbwP37gAncAXn7PTu670+bQeXb6Wea86ecAfHcPsubMJGG/3Wb96ObMW27cvGbcjW7RCf7d4W8dwmaBaXndWOcNbebM9mbxl/cdGu8RjX8Qa3cdW+ktiGndNR8RRH8cW+7d8+8hEnchFecRNvcSf/0ueGDilfa+Nu7imP8ixX7ujG8uluayvv6BPLiTEn8/8yN/MzR/M0V/M154sI6RDJeYo3d/OfjnM6jwg5r/PkzHPR3PPS7HM4v3M7Twg8D3Q93xI+P3Q/T3RAtw02d/RHh/RIl/RJJwhFH3RBRwhCv3RD33RE73RLz3RMbwBND3VOL3VPP3VQH3VRJ3XwQXVXV3UuYXTKoPRat/Vbx/VIV/VW53VW93VTX3Vg73Vh//VXH/ZXl3XEQXasVvZcd/Znh/ZoT9k8TzaGqHYun/NpL/Rr1/ZN5/Zvzw5rD3dsp/belVlpR/d0V/c13/Vib3dih3djd/dZD3Z5j/d3t/dlf+XF0Pd+X/d/B/iAF4lsz3d8N3h6P/aDJ3iF//OFR3j/UU92fo91Zud3gbf4i0d3hi/0gn/4e+94jnf4kG/4kd/4id/3RVd2k8f4lWd5Wwd3+xB3mCf3bR/3bi/1l892nC93mbf5YA9zUgOAoBf6oRf6BEgABEB6pJcAoyf6pi/6o096BFj6BHB6pzf6qJd6pq96or/6qJeAr5eArR/6rk/6qRf7sYf6stf6swcAslf6tT97t5d6sGf7tk/7t6f6upd7s9f7u8/6vGf7vaf7wPd7vid8rDf8uC98uBd7wf/6vkd8xt/6vZf8qqd8wFd8xB/8zPf6yrf6xcf8xgf9urd7zX/8w+/80J/80Yf81Cd9xw971Fd71bd81pd9vH/9/8LffNGPfNr//N7PfeBv/bLf/dUX/tv/++B3/eFX+uKv/ePn/NlXfuln/rk//ejH/epPfN5ffuQH+9jH/uTXfs9v+suf/ua/fu6nfu8nf663/fD//vH3/fJ/f/XPfu93/t/vfvhvf7SHfvsHCAQSBkoAYPAgwoMJEiBo2FDCwoQSFTJ0KDDiRIkLLV5MkFFjRYcEC36kyBGix5ImLaJUuVIkRpcbWRJ0CWAmzJQyQz6MqRJnT50/eQqsufOkz5JAO9q8SbSlzaUjoz5N+lGq1YxYhSp9anQoUq5Xq4rVSrap1K9dw6I9S5XtW5oD4+ZsC/coy6wT085VSfBuyb95y/9KFFzXpeGHajMmZop4IOCPjaH6hSyXZGDLhytLiMxYc1CbkxdPnKw3oWnCqEE75nySdGHWlDN3Hixa9mmEo/vS9lwat2rdwG/XFgl7dfHQj5O37m17+WvekodDf+7aunPjcxMc6N59IUbuNMN7/w7eoHjj5MuDj5he8Xnu7NvfPHC5oHzv9OuPT5nfPHn9oVfeAe159F5R8RFoIH/abbfgeQ3C5x+EAapH4XwK9ndghe7Z5yB+HQ4oYH0ZUkjifwXSh+BACprI4X0l6hchi1CluF+N682o4YUcvihhUTXdSOOHEw5o4ogXHrmjhxvKCGCTID6pooVGToljkQliyCT/jD1euWKWI4WIJJAtbgllklYOyeOEPnJZ5kgLiSingHIiSaeSdnKJZ5t6QglemHGueWCOhM5ZqFMdArqhn1S2FyhBja6IqKTxUTrooj1WaiCkZh4aqHuDJlonpnxqCeiLpoq5qaGkfupqqoWiumeNkYqqakusjppnqbKymqlitr7K67BG/oorp7F2ilKxWiZ656WKIvuosjGKCqeOaGJ7pqNdtvklm0E+SCai4J6opLnenpounEKKuO2S2paL6bZu/tnuuEym6ay5+5oZb7f1sltrvvKCyi2WKCoqML0Ej6kvvP1G3PDB9gbssMTzvqvxj7IOvGzGBwOcMLoUO2ky/4i6yparqCuHqqjL1HK5srBIxvysvjf/GvOsf9Lsqc3M/auy0CzDXHSyMxddc85IGxr0ay+/yPPOSwPddNRPYw2r0ln33O3PzELNNZo6Y0r12VaLvTWxY7fdNaNpR3d12U7jXHfWd4Pt9NcGhg3AwoAXaatBgXenHUbSCo54RIofHmxNhg/+r+BvLh5s4qleHuR5jk8+leSMF/7j5oRX/qdHj3PeuOaqi1lQ6JinFPvqo+9Zupmpt/555KS7TjntpnvOuO63/w66759nbvnxy6OOO0rFP39878wrP3vyop/ere7Eb29g95DPFTzw2ctu+/TXS8899JEuLJ/oFF+frv+dxPdKfYvvN28xg/Cff7/6AAgiiOhvfvKLn7T8t7pjKfB1B/xfARGorAAmEH8E7Nj+PmbAClJwggN8YO1ASDgByo6BFhTh0CIIQQ+WkITiyh8GNxhDCdJqfybk3fjMV7vv7SeDPKSPDX/YORzCTofCM2L5jKc+IbJugEwcnfbIB5XhlZCJ4XthEa0XRSROcXfeoyIWnwg95wVsjNhT4he9KL4s3suM6CujD8Foq/WBr3051OL5xBhHNS7QinZkIxznp0dByjF3fjzhwpbmoR8pkn9+i47MUKe2C76pkeyyZKkaeaxJ0guTiYSkI9ujyUzODYaVBOUlUUlKuUSSe5z//CQrQxkRT6ZqlNJ6JSNVCUsaShKUmywlJe9Fy1PGkn62rCUwO6nLXBZzlfa7JTAvJygoiitzkLNmNbG3xiJuU5qv86aYwNnFa2ozm9Scpjh7183HvY6bWHQnOtl5RHKec57vTGcO1/mhdooTm/Hcpz3/qc+B3lOe4TToOM3Zz3IKtKAAPehDkUfQhlI0oBaF6ES/iVB1KhSh/rxoQvm50Xw6NKPlo+dC63nSkrJUpBHdTUvmFhGZeoSmAADmJHOKU5vy9DIz9WlN7xO2oeoUqDc1ak8d9NMBFpWpO0UqVJUaVKke1alCbeo2k0pPrZrzqVb9alajulWxdvWqXg0r/1jLSlWuTvOs73RrO9lKOLn+C66vsytGOxrRj660onl1qUklqleUepShIOUoYFuq0b0atq8g5atgEyvZxRKWsSoN6WFJOtm/UnawnvUrZjkr2sh2FrSQPW1jSTtaxJb2salF7WVZu1rNttaxtg0tbmWr2t3CdKljXStZ42rW4aa1rcGd63HFhNeRLNe3av0tdN9KXLRS97nWNS5wi3vX6Uo3u9HF7ne3q13lche810Wud7tbXeGON6bJdW962bte8c63ru91rnnlq979AnZV2vQvFAG8OAEfLq4DvuuBlZtg5i54nAS2z4NfaE0DFxjBFVbwhRmcYQcLNMIetjCEQf/81gZDpsET7jCK50nhEGOYxRp28V9M/N8Un/TDLR7xhkuc487IOMA05rCKRbxiHMNYxzA+cZCTXGMhM/nGQ7bxkpUM5BcTucr6BfB9fIvllE2Vv/T1Mnm5XFUJd3nL4tPyl6+c5jWjl8xjNrOby8tm5sq5zXC+M3jVHOb60lnMWS5zngO9ZzD3mc/wjbOfE21ooi730Hi2s6ALTWiYUhrNkL60fReNVSv/GMlR/nSMd4wAEvNY1D0+9YY9PeVQF7nUrR61qVM9YymrWtVG5rSTmwzqWs8a1Ld+sq5Z7WZUH7nXq/51sJGda1obm9c+XjaVgQ3tVTub2LiOdrJdPWz/WT9718ZWNranHTZLZxrRZwb0oPUsaXU7OtLtxjSlGV3ncj+a3u6Wd3srjW57w5vc8d40u/0t8H2/e91z/ncpB/5md/sb35pOOMEV/ueFp/vgDjc3xutdcITPm9UOPMDoPh7yVYFccCI3+XZRTl6V05nlgnE5AUcep5J35+Q1J7nMW37zle9c5wcQLsy5k/P8DT3mQaf5z1Pe85cv3TIwr83Riy70qFO96VC3ekOennWswzrpM5c60m3udfcV/epjZ/rZnc71qqd96k13e9vDrvS0mx3oa3+73L/OdrHbne5b93vX+853nO+d8HcHvNYDb3GhfxDkja+qyPN9cXbH//zxll8j4x/e8aFmHoudjzzmHa95yb8S8ji/vOdFP+nJL171oE+96b9O+kZz3vWnD33syT77zZce9a//vcUB3vrcE933t1+98Hked7Azv/DKF/zcoa93vDef+om//uGlT3bnb9/62Y8++J9v+OVzn+jYR/z3xT998nuf/eh/v/bRPvj1z7/78A+/z+Nv9PbX3/zpzz/+yd/49d/+uZ/+1V0A1h7xVR7uGV/FPaDBQWDxNSAFwt7uXWAFAp/sZWDw0V7vceAGWuDojaAIlqAG6h4JUt4HmuDxnSDHYSALhqALMiDyeWAy2Z4MtqAOSiDr8VwCvE53FM4PikkQAs4Qjv9EERYIENLcERqGEYrXE4ZZFPbZFBJEEjbhQFzhEgrhFlahZnhhcYChQ4jh1mGhBGghETJhFyphGnKhFLIhFcKhE8rhF9LhGaphG4IhGiIhHsahGY6hHQLiH5bhGprhHlphHyKiG/ohFAYiIb6hISZiFkriHS6iIpIhrA1iJjaiJuohJR7iJFpiKGIiKTriJkJiIaZiHtohKIahKZaiJm5TEMqi6LXTLL7TLaqgDV5VLm4hLR6VLdZiB/IeTvViG/4iMtYgMfKiMB4jLjYjHwLjMMJgMEqjM1ZjMuriMjKVMUZjNvqiMlIjOGLjM1qjN4ZjCo6jOl7jOkagO76gJ4r/YiXGIz2+oj124j2qYjTWYyTKoyByIkCi4ir2Iz/q4xziI0IG5D6y4ic2pD8+IiMKZEQuJEEypDy24j9K5EEq5CVaZEEOJEfWYUJq5Ch6pElW5EhO5EaS5DyepEGWZEqupEoSVTcq4jeyIw8m3zuG4k2eIzlqozjipE+2o02io1H+JFHyZDmmY04WIzQWJVIK5Qsy5VBKpVJG5U7q5L/V5FUmZSVS5VQupVhiJVRO4+g5hXIV4UKkZcmtJXOpJRYiAFzuGVoWWl0mxl2CRl52xly+ZVvGZV/+RWDqpVviZWESZlyO4WHy5V+yJXoAZmP65WPS5WJaxF5aZmUqJmRO/6ZkXuZgMiZnGmZiZl1mkuZojlplfqZcRqZgsiZkqKZmUuZpXmZsdmZquiZoeiZuYuZsliZq9uZm6mZovuZuwqZpyiZy2uVtDmduLqdw0uZxKidwNuUsxlV13tV1OuZRmuVbZadkdqfjWWd4cidQZpV3tuZNiWd6Yud4NuU2mmd7fqd6gud6umdQyid71id+amd5bid/5id9Bmh/DiiAzqeBFih5Juh/Luh+NmhYludzOqeEBqdvQudvJqdoOmaEUiiHYihiemhybKiGTuiITqd0gihvlqiK2maHnqiLZuiLEidzruaMqqZxXmiMhmiFkiiLrih6WiiQ7qiJ/iiPEv9pi8Iokn5ojtKoiPaokyapjg4po52njAoogtonWFbpgTIoevpnVu4UlYKmlXJpD36pWYUpjY6pg5bpg17pmorplprpfXZpnNKpm7YplqqpnZIpnCqonMKnfu7pm6YpgWJpXjbEYCKqayrqcDLqoaZoYzxqbbLGoyYqkx6mo2LqpTYhR0hqdFKqpk5qbVgqqS7qpkqap+IoqHIqpFpGqTbqqQqGpYpqp4bqpzJHpZrqq+YqrNJqq+KqrarqqOoqscLqrN5qrbKqr/rqrmpqsyorsv5qsqKqsxYrr15rsKaqtgarcAVht4LctwJAuBbqn0qXt27XuZJXutLZuuJpuY7/K7qCa7yK67ySq7vKqryqa76y677iK73mqb26ar8K7L/ya8H6a8BqJcHCq74e7ML66b0+bMMyrMEm7C62q8RWbL1C7MVhK6s+q8FuK7QK67RGarUaq7WerMhS68iurL96bMiqbLbObMvSbMx+bMribK9G67LybLSC7MvKbM0OLcsWbdDqLMwerdGu6tICK9IK7c1GrckS7dQ2baY+LdZKLdNWLdfKG8YOq8OCLcVGrMKK7cZO7Nm+K8eaLdq2rcYC7Noy6thmLMLG7TJ+rdymbd3CLd++rd/u7d+yqeCybeASLuCS7cUOrOHSLeOWrVs5xdc8ZuRCbqNIbuVS7o1g/+6CaC57cK5+eC5cTm7ShO7ljm6BgO7pmi6h9M1dOkRgui5rwm5oym7rKiqhGMZ31O5q3q5m5G5h0u7vXi3uxq7wyobuPsTxCkTy4kcrWW6KOC+BQG95SO/nqi7qrq6koC71ku7zau/1fq/1hu8RAu/4Fm9xvK75wi7vnm/qlu/u6q7vui/6xir7zm76ssTy5m/w5kTzgk/0+u/0ArB3YC4A1dAEGfAAC3AQKjDIMTABcxACo86gDC/kUjB4WPD+LnAGO8rwilLvcvAHe3D9XvAHV3AJk/AI729QuO8KpwYLd0T/mu4DB7AMMzD4FLAEQ7AGxzAPR64N/7Dq2rB4Yf+s7A7xwBZxmH2HEWuiEiexKRJx3vYZFNOo3RaX98rwFTcv+LYS9mau+IquFmOxGHPxFrOu+FIw/BIv/ZJvB6fx+qqvG6ex/a7x/dKxSOjvCzPvZGQxGPdx6ZLxF2dvIHfvGPsxIQMyIpsxIqPxBs/x/D5y+7bxBr+x7cqxJTfyJecxHu+xCsOwD9cwKPfwDUUw9+BwA4fyJ4uyKd+wDoNwCsvvKcOyCb9yB6Ow+tqy7eLy7uryDmOwLPNyLLuwMANHHjuwMaNy5QIxFytz3xyzKv8vMq8yM0uKETssEkvxEUdxBy8xNzsxE2czFTuxNWvz4MIV5W7uOXduOn/uOuf/bjuryDuHSqXEM/aiMxnHs+XaczPTMz8vc11axOn+s+v6xxACNEGDRkC7pUHz7kILNKKGCkJDdHIkdEEPNGca9EVbtEMrxkYXRUdvR0UbBz6P9D2X9D77M0qfNOuS9Eqb9Dyn9EurdERn9EPTtFwe9ETjdEMr9EAzdE9vNDzzdE0DtU5rtFDftE179FErdUhz9FLnjiAnclQrcjMHsVUv8yBvblZ37lVXNVZ/dVO3b1iv7kyTMEabdU+j9UN78EKr9U2ztUW7tViX9VHPNd/wDF7zzVTvtRdLtTR39SjHL1XztVaDdWCXMoTs2ekqtkcw9sFiNGOfpopENmUX2mJb/3ZjY/ZjW3TftilLZ+9nZ24/q3RMl7Zou/RptzRpD8lox/RME7VNU/Rr17VE7/RY+/Raw7Zu03ZsF7VIP7UeF81HMy9oo7Y+F/dqQ0hrs7Zxq3NzszNMM3dyz8duj3VvXzdR4/ZbZzd383Z1z7Z1D7d4A/dwb3X1+nVhe7V6HzYrczV6u/dg/7Vhy01c87Zck3VOm3Bb0zZcr/V99zdS37d+17d1u/Wp5LXXoE16EzZ8Mzgpt/eD23AZO7hgs/c0D4ljZ7hma3hiTDZmS7ZveniHZ/aIb3ZNc3g5y1lTrDiLt7iLvziMx7iMz7hZMEd4/CBH3LiNH3SO87hF6HiPT/9mkKPlkK9lkeP4j/u4QwB5kgu5XBD5kxt5lCO5dtC4lV85lme5lm85Qkj5kit5QzD5lzv5mEN5mXt5mIM5Aoh5mpN5m5v5m6P5mqs5mwcJnNu5nAsJlQcLl/e5n/85oGe5nNc5odO5obv5nCN6oSv6od/5ot+5ni8NpIO0pAe6pV86pmd6wQa5pM1SY3g6a4D6jm96k3c6iY+6qZP6mKc6qyNunWk6rMe6rM/4oDd6rTM6rju6re95out6rt+6r0+6HkeHsBf7rB87sic7SIx6sAO7s/P6oz87s0v7kU87tKt5pBN7nlM6sSu7t387rFN7kzf7tf96uZO7tad7ta//+7hv+7BPuaS7O7jPO737eauH+qlz+qfne6nvu6q3+b2jur8HvL6n+HgNAMInvMInvAM4AAU8/MM/QMMvPMUzvMNDPAVIvANUfMU3PMZn/MRz/MJ7PMY/gMk/gMgrPMlDvManvMpfPMuHvMsPwMpHvMy7fM1n/MnPPM3DvM1vPM/nfMsHvc+DPNDPvNDvPNIX/dAv/cc3Pc4z/c2nfNKbPNE//dSLvNBnPcdv/dFH/dMrPdiXPNd3vNR/PdWfPc/3fNhbvdOTPdprvdpfPdyvfdWj/NvHfNx3/dzn/c/bPdOLfdpj/d6bPeED/uHTPcsLvtwnvt8bPeLXveJHPOPz/73jj73eR37mT77Ouz3m/z3nQ/3gS/7jnzzefz7kh37ZU7zXaz7le/7ob37pr/7I9z3qm77qFz7r237sg37pV77hk/7t0/7LX37vd/7pH7/oN77wKz/xW3zbJz/zy/7w637tG//0v770W37zZ3/qz771F3/JA//uYz/3U7/zhz/0jz/se//yn7/vV7/rI3/uz//7Bz/6uz/5X3/3w//3yz9ADBA4kOBABw4oJEz4gOGDgg8FHlS48CBEiBInPqhosSBGhRodcOyIMGNDkQIbTqQA8iRKhipZtkyZcePJmR9N2nxJM6TMnR9rirxJsafOBzBzCv1JtOWAoSuDcnwa0/8oUoY+j/JsOjWqRa5FlWbFebWqVqwwu0L8unXpyqRS21INixYsXLFMz5YkO9dsWaB1vcZN+3Dq28B3oQJWK1gxYcZsETd06GBC5coHN1IumdnyZcwRJ2zuSbkz5oqacX4mbdl0SNQLJQ9Y7ZmzaNClP8sOnXp05wmtdYt27Rv4a7cmZ//ObZwhZ9y1ed9mbTo47+HPT++GjZz4cu1unU+HDjs87ezCdWMfrvdqcurVyffGDtp2evHnrds3v35s++7jwZPvPvqi00851b5rLjv14DvOv/kaVFA68wiMb8ID8Yvvuvv42+7BASOMyT3v6hsRQfRMzNBBkP5zjTmWDmr/UbYXT0sRswRBulG9GNljcT4eo4vxRxpdbPFG4YTkEEgPfRxwyQBnlPFJCZPcb8ocq8TwyP6apPDKGqUkMsodidRRyRcbypK6L4scEkcwyXzTNCOvTDPFKG1TUzUx9WxNTjOtRFPBMOUc00k+bWQTUC3rHNTNPO9k09BA/+xzzh4NfE/MTEks0MYQEWRQ0MlkBFVACk29sLg/OT2Ry1Z7K7HUTT8tE9YOV4S1Qih1TfVWUzfcL0TuIKR11kJ/tbVWHIkF0dhikV0WRSOH/RDVZ52Nllplt2XWWgx3lbBXbIXlVlRvuwQ3LhjvXBdODt2dU7117ZQx3knVjYxdI+Nd/7Q1eh0d8F5LndL33f36tdQBgNOlbuB2DW4T3oj9NY1hgh+2N2J8/6VY4YshRurgfEWWGGGPbQRZ45I5/izjeVHmV99653tZ4I0/jhlmq66idoDKxtrIZ6C3E3rHn7WzMyQ6kebSoaGTFhfqoHtimujjPrM66timLrpqBpv2WiCtqV766Ksl6xlstKVee2ujlQwb64rIZvJpt6keG2+xkY6b7Rz7tlLutO/mUO+8A9fycL7rnttsv7c2qeu59TZ88LYhLzvx1sx2evP3/oZb2Mtjalzpz6n7O81u3w5WcdLyThR2rxUW0ullW082dNc5n91x2VVvjvXYhxcb+NZr9/+dcNyJPzf348uG3m7mjS+ecul/p1P5tKm/3no7b7WdduyX/55K82HUfvfkg9cI/QUN3z79OJEnP23UjUZ8cvDxpxv5/jtnt/4tjnIDJJ3oGHVA/2VOgPvD3Oh2VznBrQ+ApJPc3growNKd7X+mu58GEQgcBUowgRT0INcwyD8Qfo2Bjqtg+wwYwRjm7oUd5KDnVkhCEcrwhFm74fSoNTP4CUuIvPuXVeSlpJmtjkFF/JUTE1XE2i1ReE1EohFddsXwSTGKPKui4aAYRC12US9JtBIV3WfFMmKxImHcERfphMZPuRGMY4zjFafoxTTWcY1PtOMb8UjG24mxj3P8oxL/A3nHHt3NQ/lzkCMlA0kV7oZwjFyR2uxmyUqGLZJfa6QnHwnKTi5uk0QrJSUJx8lUmnKSnyRlK0P5yg+icpaZVGUtY3nLDbpSl5LE5SltycpfwnKUvRQlMVdJSxQGU5kX5KUwd5lLaPpymZfUZDKZ+UxlUpObxxzmN6sJTGlu05vRLCY0nWlNXaazkjyriDtDAs8ByFOPaLRnPenJnnfqM578nOci7wlQfPozn/3Zp0H76bSAKnSgCP2nQwvqyoZmcqLWjGgsLzrKirZToB2FKEFB+lGGepSiJMVoSCWKUoualKMjFWlKX3pSl5Z0puqcZjm7KUtzYtOmzcRkT7UZ/9RxClWcReWpUdtGVGQmFahNRWo4l7pTpp7Tp9cEJzuPGtWcGlOnWL3qT5+61ZvqlJpehepXrSpVtYq1qusEa1bByValThWuZ7VrYSSUUfDpNW0bJZxf86pSjQr2rywtbE0HG9PEwpSmjV0pYvdK2MAq9rCOballI0vZyTL2sZjtq2E3K1POLrazpb2saTM72tSKFrWfhaxrVRta0s62sq2VTD2bxj1P6vZwvM0tVS36274K97bETYlx8+dboCk3NMwN7nL/atyXSPcoyN0tcJ2b3ehCd7jcLa53jwve5GKXvK1sJ3UpgF71ive65i1vUs8L3unKt7r0TS97e/veXf9qt7vN3a5/+/tcAMNXv+N1b4DjO+DwKni+CjYwgQ8M4e8yuL4Uvq+Fe3TQFWmYtxlOqG3xelvQbrbDXOLwYk+b4tqqOLUlZtKJW7xiGcMWxDAmMYpxTGMWi/i1N47xj33MY88KucYfdvGGjZxjIu84xE22MUs8/FAkS5nJDLMyFZ+c5SQDuclXxqd18xvh/eq3wQI2c4KnDGY143e9Fm7zmQvcXgmPGcH/hXOdxfxgOs+5zGj2s535O2c967nPgDY0ngUt5z0vutCIXvCdEx3mSL/5z45u9KTZnGk325fSMw4ylE285U97ecROFjWoX3zqJ5O6x6amspJRPeVSs3r/yLE+8q1hTWsQg+zVXNZyr5fs6S5jWdXFBratha1rJv86ys1utbKFzexQH3vVC611g8unt2wjbduV6fYEOMrtwor7s+QWsbmFp23uTUDdkWQ3ut3X7nN7e9z0Lre95w3udcs73fCmDL/jDe+sCDwhBL9wuPHd74QHfOH/9ve7Fz7wiBd84gevt77dDXCHNxziGF8dwCXu8ZkYnOQc13jHv53yiyNc5Dspecs3DnOU7/vhIKd4y0POcp3T3OQ193nFX75zHe97kA/NdtGfbe1d/xvpQDQ60a+t9Coz3elNvyTVdy31ZGP96FX3etYBG+yMW73rV2d30sPeZa5D3exP/x971NNu5bW/ve1kT7bWh073su+d7VXGe75VnvGfy9zmFr83zm8u9I8PPvCLB/rjEW94wPOc8IynvOJHDnnMM7zyPfd85IO+ctEL/vONVzjoNT/6yZO+8603vctTf/jNx/z1tL+86jOPet3Xfuasf33OcQ/7yNtd7303ft7Fnny1n/3rfC8+8ocd97l/nPjUh/us5cj8ujf/+MqHNvTjXf10i//73s++262/ffX7Pe7nJ//0x399tC8S/uHn/vPN336KLyxtlRkb/yXD/34GABtCAH+DcAyQAH9iAA+LAV3LAXkMAgsQ4hTwARIQASkQA/+vAQ/wATswAj/wJiSQIf8usP8y0AQ3EAVHUCxWUCFacP84sAJLMABPkAZT0AZf8L4q0AVDcAF7kAV/cAYn8AaHcAWF0Ad3EAY9MAl1UAONsAaLMAihEAljsAqX0AmlkAhJcAotkAt5kAlzMAyz8Am1sAvL8AiBEAx/8Avvzv8yyQ2tCQ4rSQ7vTv8Aig5R8A2Zbw73sA6xr57w0Ab18J/4kBD9cP4UKhCHcBAZEez+8A77MA/jMBIF0RERsRELERM1UP44cRINURIz0RM7kf0g8RMrMRRR8RDljwxZcQxdUQ1h0QpBUAa5EA1t0QuVcBZlUQRfEQtp8QxxsQmvcBh1UQV70Rh/UQxjkRh5MRn/jxEHn7EZd5EKmXELgfEaW3EZi3EbpREZffEbvbEa03AaxzEcodEZ0ZEc2VAcAZESF1EU4ZEULzEeN5EeQVEVLVET73EfTxEf5VEf+5Ef3/Ef89EeA/IgB9IfFVIgrREgExL8/m7YFLEhDfIh8+8RE9EdKTIVGTIiWW1G+koADyIk320kb0skFZACUBK2QFLIWnIoXnIpYvIoVvIkSzIlazIlclImTRIme5InU9IFf5Imb5IkIwIni9Imj5Ilh3IiZtIpm1IokXIplfIpd5IoqdIng7LgopIrtzK9mvIqVTIpdZIsX0IspZIpv/Ip07Iqw9IssdIq4RIq17IrwbIu/6dSLrPyLOcSLb1SLQHTJd9yL+NyMPWSLf9SMPESIsdyntrJDR/z7CLTMRfyIhkKMv8KM43SojTTMkcxMyUTNClzMyezIAmyNFFTNDkzNBkTIymqM8tyNJVyNWUz+lyTNnEzNUmzMm3zMllzNnUTOHmz/GIzN1UzOHuTEw/TMJkzL+0SMe8yMLXSKJfTOa1TOoESO++iOqmzObtzMRVTO+nyO8nTLa8zPNFzOtOTLwmzMbnTPMWzLdVzPtnzPWPTPrNzPbfzOb0TPv3zPvkTPOlzP88TQAu0PgM0PhMz+mCTPY1zN1tzHpHTQScUK01zOC20QhvzQT3zQiFUOD+0OP9PE0M3VEMbNENJ9A9PtESPs0Uj9DNDlEJdFEQ7dERjFEVvlEVfNB9jMiF20kfNEkj3Ukh7dDyfokjlEzGK9Efd8yeJ1EmblABVAkkXVEmhNEmfVEqjVMSYlEmx1Ejbgkqjcya6NEi3lEzN9EvVtEqnFErLdEjPdCe8lE3B1Eq19EvfdEnNdE7HNEyvlE7xdE8FFU75VEwN9U/7NCvy1E0H9VDvFFAhdaX8j6MmtbAq9bMutUZTNFPRtGAwld0oFVRTdP44VU5F9VM9lUtPVVN3NFRTtVNdNVZH9fpKVVFXFVYt9VaJc1dt9VVN1Vd7VVZbdVN1NVhzFViF1EZZVVX/kbUxhZVZlTU5EzVLmVVPCTVNI9VRicxauZVRrxVO13Ra67RNtXRRy7VREVVbjzRdvbVbz/Vb1dVPH1VcAxVe2/Ve5zVe7XRb8bVa+7VT9ZVc+TVf//VX3dVfCTZhB3ZhAbZge/Vg11VhI/YiazVZj/VZpTVafxVjN/ZiZ9URK9ZZPRZVNdYjjZVkRxZaP5YUQ7Zli9VihzVmVRZlaXZmlzVjUxZXa1Znb5ZXYdZmeTZofdakZmRRjtJoizZLjlZpk9Y9mpY4nrY0opY1phYlkdZPOmNpk0NroRZrqdZrL6Nqf+MlFSIny5YszzYr05ZsgdRFbiJse/Js3fYn4BYA/9c2bqmVbtE2byODbT/CbxcCcFdCbLk2awn3cMF2bBPXRfxFbBmXaRO3cC1Dcq1WTRz3chfXb82Wb+/Wbjm3bTVXcT13LOdWLOr2bfc2TjsXddU2IwR3MkY3cPH2L8yI3TjHN5p2a283a3f3TNSHfnyXdyO3d/2PeG13cY23d373PlgXM5p3dosXeo93dM0DdS1Gb6/XdDHkeal3ern3exkjdhNDfHPkK2o3d3HXeNFXeGtXeYGXUt53eo1WfekXee23fZP3sEo1bfVXV/nXtS6jf5kwgAF4DX9Wb331f3lsf28zxRD3fB/4atsXcyc4cyM3giEXgi24gjm4caW3df9V93NDmHRDt3TltoRDF4Q3d4RXWHbJ93Vh+IJlWINp2IM72HI3WIJ1OIN32GlzGIc5mHVTeIg/GIWl14RB94iJuHtVOHVbeHBn14Wn4nXr93yreH7vt2KymH3YF4uteHi3+HiCl3kR2HnL+IPNWHuL1nrTWG7buG3fmHTjOHqZeI6994zJN46JIo+jeHy9+I+V9oq5eIzhl5DlN5DB+IvxN4yXl4AX2H8PWI37N4HbVoAtuYAHGJJF9pEpeZNxtlWTFmpDWWpHmWpLOWxPWTlSuUb0ZJUfV5QneJWXFpYrxpVtGX9bciLGNpfLdjT4T5d9eSl22SSBeW6LmZd9tEb/hFmZ72KYf7mXqRKYoxmakRk2qtktrrk9nhknZLmbY/mbaxmXxTmcG9ebyxmcW3mc05mcl3mak9mdVTKYm1mej5mYe9mY77maVdme31mf6Zma+Tme4RmbA5qgt9maC1pBbHihgZihxbiQIZpRfPiGJ9qhG1miL7pjpNmMNzqgRfegP3qZr7eYOfqeSzqZRxqaT1qgVzqk53mNKaZfZFpnvpaiu9am49d9DVmn69aipfaHHxqjc/orxxa2ilrIjnooklqkjdoulaOpiTokmvpVpXmqZRZnzdlys9ppb5mc1/mruRqdw/qcvXpEunqd29mf4dmZ09qjmbmeQfqt89mt/9f6n/uZrrMZdtclr/larGlZq/0aN87arNV5rAGbrA8brLtjsBcbrx07ruu6rvEZpf15suPZstn6pdV6sxNar/Wlrw86QHy6pke7pwc5onlaqEm7oVm7ok9btVE7pd+5pRm3nWkbpknarWX7sml7t126oyH7tldatGe6ZEJboVv7pkv7o187tZ07eSl4uR83qJ8bea0aqaUau6kamqG6u7E7qqN6u9/5upU6uz9ZU5sivdV7vdm7vd37veE7vtt7JFUiMxamvoMZv5dSv0GSv+l7IuwbMQLcv+8bwPPbwPcbwftbwf97LBbcwRt8Ox5cwuW7wi38wjE8wzVcJCKcAv8GnMELXCE+XMQPnMQT3MQn3MNLPCFGnMVXXMVP3MVjHMZTHDlCXMI73MZnZsN5vMd9/Md9vMNbnMaF/MWH/MiNPMlnHMmXXMlrXJt3PMeh3CqAvMqt/MqxfDHaoo2egsu33LwFHMz1m8i8PMxTdcy7XMwRnMzV3MR7Fu+yPM7lfM4xvMib/M5TnMnz3MntfM/xvM8B/caP48n1msql3CHoPNEVfdE5XND1PNDN3M8lHdIJPNIpHcQtXdB13NA1fcr1gtFBPdQV/dJRnNRlfNIdnc9T/c9XHdUzPco7vdA//dBFvdZtvcrZ/MzXPM113c15PdeB/deF/ct7XcaDfWj/X4sAlH3ZmX3ZK6ACIiDao90Cnr3Zrd3ZoV3aI4DaK+Dar/3ZtX3bq93bmx3ctd0C0N0CyJ3ZzV3auX3d2T3b3X3c4Z0A2n3a6R3e733b073e7V3e8b3b/X3f333gAV7cBb7eCb7fFf7gC77hw/3h9d3h833dFx7dDT7iK57cCX7jvb3jE37iI57hRf7cPf7bKT7kLT7l/f3fRx7jId7kVZ7jWT7jZb7lL17dY37eZ/7ja37nAx7nHZ7kV17jex7ljV7ok97m3Z3oaX7pgR7hlf7mmX7and7nob7keX7qt77q+R3mtT7ovV7ii57qoz7ddT7spX7sT97aQZ7rrR7s/8u+68++7cv959Ue7dn+6N0e7+de7M/+6pHe7PPe7uM96//+69M+8cn+6Qmf8Q0f219+8R2f7guf7+8e8Ss/7ikf6x9/89e+7jH/8M9d8Pte8z3f8iF/9CW/9OUe9Bs/9QH/8uFe8fe+9mN/8FUf9k0/8z9f9kOf9se+90l/94E/90//93Wf8+s93VHf2p1f+Zs9+o0f+tF98pv/+qWf2al/9sm9+4P/+7W/6V//2sEf+bl//L3f288/8gng/Ilf2duf9d9f/cOf/e0f/Zcd/svf+i3g+QGCgECBFgpGOHjQQoUKAxs6JFDQAsKECx9ajDgxQkQLFh1inKiQYceGH/8RhhxJ0iDIiigJqjQZsSXElxRFtixZU+ZMiSttosSpMeZNmhpZDuVp0uhPoidlAt1IoAKEqVMXspQKsqlUqhCsisQK8yrXrl6jQshq1SxXrwzBJoS6lWpZs2i/jp3rNqjYtWXzFkwbt2rfszBjBiYrtq7Aw3gJv90rd3DdtnclFy6oNnLisHb5bn7cWXNFvyEpex7tOKjhyp/1hhbc+u9rxKgnZ4Zd+zJHxmnpcl7M2q7i27Qp2+YNOPXG3cGBD0cu/Ddxtr5BmxZtXPf03qQh43YuHXp269uTZ424sHl6xelPR+3eVvx6zlaD1z8vWz389/qVn2yP3XzWAYjbfbr/EUgbf+xBp+BvCLIloGv1nWbgW+gxGKFs/LmX4X/ywTdhgKRd2N+CJTr4oX9s2dchiRzu9yBgMKY4WYwr4hfSiaBtKFqDO9rolYpBUthifi8KyeN3HY5GI31AVqgaZgxW5xpw7lGpYXm5kScelnA156V3CYY5G3UgajlelMxduZ+W4O2IJpnXFejlamwi6SaZVmInZ5wjSglmm1MKal+fXf65Zo965kkohYYWiiijeA46KaRCzllcnYDe+VyglTp65qH+udgjUx42ZyqT9qU6JHamkvodq0kmKOuTrIZY4KtGlorUjwzWKt6ttvaqJpAzZaShscCuSqxsuBana47u/y07bbOnUihssNbCSqu1qlaL7LWuettqrtvuGiu5s5ZF7bjhrojtudLy+m58qKo7bL3PshUtAYX669iFAv07VWEssQiwwRUhXLCFMREccJYQKzwwkQlbmBbDEUM1McYidazawRY3HPLCI2/8sKMXl1wxnysLDHCALzsbc4EMkbwcRyDDvLPEJyt8888OY9ZzU0WLLDPONGusm84qK2300xsjbfPMpdVcXNBNY02d1VRn6vXHQpccdNIo/2Xp1JiaCTVqRG4FdIpnK5Q2xaKqjWZ7cbMI99B0g9r22oPhLffeb0ONXt0e+xl43n2TXbjfd9utOMuRQ8434mgDTnjlAv9ffuGTekvuebKl/5e52qI/nvPki7tueeqGi6i50y43zvVcuDPtcdlV1557b7tLTXHwGatuvMlbHy327Xgnr3Xv0FudsvPFM9/y78jzrqbtdIadPdjDmw309MBjn3zF148duvlzpw8+/ONrXz73Ocv/PPr2L83+cl1u6zY+AVBwXhmg6OT1NwGGC3WOGmDeDCgfBP5vgQGkkwMjSMF98WuBiWtgBuN0QRZBUIQc3JwCz1PBTIWQSCNkYQkTaMEPThCFBLRKCwMkwUKt8ISUcyEND/jCGfaQh68j4Q8xiCOnOUxkSxRbE9UXJSZ2T4lTvFjOqHhFK/KMMBuRYhedGEX/MGaxYWPk4v3IeEYz+uyJWlxjGKFYRr9hMY1ybGPU2IhGN34RjnSsYh45pkZA4jGQXtziIOv4x5QhMpCKfKMdC6lHQ/qRkUSj5ByX80gxSnKPmeQjJhNZyUWK0pF/hOQdSWlJOzYyjlPkYEVcyRBYEkCWL0SgLWtJS/y8Upex5OUsk3hLYOLSl7m8zC6N2cumBVOZw0TmL51ZzCc2U47TbCUxrwlNbFJTmNxkpjbfGE1wdnOb3iynNL+5x3BesZrrHKc4swnPc5rTmvNkJSdLqclI6lOQkxylPTcJ0H2acpV9/OcnCZnPU94ToZ7kp0EdWtCAKlSiAw1lPy/6UFNq/zShFb0kRA/qT4pydKQNJShIMRpRgZK0k6q06ENN+tGJqrShHW2pR2H6FIGpU6fozBk7ferOdPZUQztdzk+NGlSexvOd8iSnU+n5VKEuVapNhapV21lPpVaVqky9KlCzitSparWrXMVqVL96VqIO9SRF3chR3ZpUtYpVrltFq1fDKkr/OVGv6uNrwvxasHX+1aeDNWph3XrYOwL2LIst1l4JG1jIMlayrUwsExuL2YVWNrKG5SxiPYsRyz7WkJklLWUFC1qDJFa1oL2sZku7RtROtrOz/WxtQ9va0cb2tbyl7WZvy1rgSkS0fe3tbk3rW9n+drmwVaxxnZvc00oXr/+OfWZ1cXTM64IVrtvNqVb5it1kajet3CWvd+kK3gOJN73mjZZ75ZVd9o53vma9a3nty1b1Wle+/LVrff/rX6r297sCDjB1AXzgAhN4weg18H0R/GAFN5jB+W3vMqlJ3AzntrjItS1zp+vh5rq2w9ANMYhxK9wIaPi2Iz6ui1H84ejK+MUtLrGNgxtjE8/YxjXusW5hrNwgn9jHHKbxj3Es5B0j+blEXnGOgXziJZO4yRte7XBTe+UUW7mE8ZVwhenr4POKOVpdpnCZJxzhBKs5zWj+8oDb/N63ivnMbvYyneMcVzbX2czr9TKeu0vmPvN5v36+MH4DTehBhzfRev7/s3npDGlBw9nQEEZx6yBQsUtn2n+YBpimPQ1UUCNV1HAl9UdMTbdNd7HTU/l0qzmt6lK/etSzljUE2olqqcQabbtOda5ZfetQ1/rUw1YJqnny617rOtnMLjaynX2QY0cb2iou9rKtDWxXB3vVvX72tm2Na2o3+9u8Hre2w01uY4t73em+druzDWtzCzvd3ka3veONbWXDm9vSrja9p/1vf1c61U3TdcExffBnDpzSYSY46RQO64QDmuFr5rXEH37xQ1O80QbHuMe713GNy9m9Idd0xk1u4ZHnEOLcPnnEU57nMZf85SBH+McXrvIg2rzmLE9czy0O84kD/Nz4fre+/7s99Hnfm9ZGlze/893vqLN76T53etWhPnWla53pRH9607EecKmHPete7/rVvz72tFOd2Gg3e7nBvnZ1q33rZ3e7r+FOd7bHvd5Ft7u77c53rued5DtHOc9dXnFHH3rmLb85zXEec8L/3OGHd3ziNy7zwj9+840XeeRXjnifh37MmJf86ClveMgLPYmMF73lXe/51Z++9UCvfOxh7q8K5GwqA9P9cnif+92z2vcbAX5Xvhr8sCafu8svSfMLYnziRyT6wu999Z+PFOwjRPvTlv5LsE/93w//+scXv/WVX37mp9/56/9++y0Q/uKP3/zgn7/6vZ/9929f/90nP/7jP/999heA53d/yMd/1YZ/+/d/Agh9DAh/DgiA7peA/Yd+E4iA/oeB9Pd+EZh/Fsh9F1iBGSh/BDiA9UeCEmiAHniAcsR7LGhzV9SCUxSDqhd0LvhLMPiC1WeDNXh7MpiD5reDPniDDVd6tjSDOiiEQUiDPYiDQwiESQiFSyiFSNiESkiFRJhzwHSET1iFUYiFn1dLWziCVsiFXyh7JoiGGwiBDqiAKeiGIaiBC3iCDziHHNiGcFiAeFiCaliHaziHd5iHgch+cpiGhMiHH4iIB5iIhsiIIriHKgiJbyiIDdiHlViIkjiImIiCceiIlHiJeriJk9iBnUiHnziCi6iJo3j/eWI4gGQ4hkxohq7Yil5YhpeXhcrEipQoi7oIi7aohT/4il0ojLHYi8F4hbVojL4oe7tIh8yYi0Wocs8ojcA4i1OojM5Ijbw4jNcYe+9hVMC3EN/YaeHoVuDofRFgjnjljeW1jjjRjjTxjhKRjuU4juc4jxhxj/BIju64j/p4jtvXj/JYj+K4GPY4kPRYkOoYkBMRjwy5kABpkAmJkA2ZjwIpkfz4j9H2kBqZkSq2kBWJjgeJjyJpECAJkQrZkQ15khP5kSRpkRTpkg6ZkhvpkTMZkTB5kSUZkybJkSjpk+zYkjn5kkGJkyrZk0Bpk7bYguu0lD7VlARZjKSHS0+J/5CtRJUjOUvW2Gi3dJU6mZVOiXBMGZbEqJVYaZVjCZVi+ZXcWJZeeZZrWZVqGZWKJ5d1CZZwaZZtCY1daZFv6Zd6mXN8GZJ46ZZ2yZaxWJREqZg3SZNGWZM/iZEEmZiMSZmQ6Y+W2SuTKZmLuZlJiZSYKZOdKZosWZmfaZqReZpeqZmkOZqo6ZqXmZpDWZpYuZqvmZmNiZuzqZqcyZqxGZq+uZK0yZvCqZu36Zm2OZVoGZd3+Zdk6ZxpyZyGuZyHSZ3TaZ15GZ3PuZXJSZh9KZ3YWZ1SKUyCSZ7KCZ7bCYbjaZ6FmZ3QGZ502Z7XyZ7uiZ7L2Jz0eZ75CZ/X+I4Hkf+P/kmSAJqTAtqfv0kUBRqcxFKg/zmYCxqgDdqPGYGgR3mgEWqgPMGgGfqgDJqgEmqhHXqhBGqhGjqgECp9HnqiIaqiIEqiDlqiHEqhCvqhMYqicNWiI7qhDwqiO0qjKnqjKfqj9zWhjwkUQ+qiR4qjL6qjPcqjRIpnvNdOUApUUopUVFqfPBilmJalO2GjWjqlXvqe0DiYW0qmX8ql4mmfZVqlYNqlZ6oSVoqmWGqmatqmdBqnc4mhbPoRcPqmetqnbiqmq8eneQqoAmqn+3ml1jSohjqnjRqm1YSkQJqjSlqiTWqkM+qkhBqpbbqpRYqpl5qiLDqpnfqnoCqkn4r/qpJKqaSqqal6qqHKpD0apHs6qq7qqbCaqTVKq6uapKyqqxWKq6a6q75qopxqq8D6qsk6rL3KrKoqrMh6q+i5qGPqqHWqnXd6qISarYz6qOk5rd/qp9p6rYi6q9tKrWtaqOkpqOHKrdaKroDprex6ru5Kr9g6ruL6rtVarveaheCarv4Kr/P0Hs9SkAQ7sAhSsAh7sIyxsHfRsGvxsHIRseZosPBCFQl7GBjrsBZbFRPbFR4bHyVxjwgxsiJKfCQrkigbsi/Rsfuosu34si5rsiKbsjPLsjVrEjALEjqbszLbs+VSjxULtBrLFUQrsRz7sUgbH/visUZLsQqLtE6b/7RAu7QPArI8W7LFerMXibJcC6ArixQte7Jfi7VTS7Neq7Vhi7NZmxA827Y++7ZjmxRRCyFjsbAZW7dFm7e0czh9y7cXu7e8F7iYNrh3mzp/azPQcbY2tLWMq7YDu7g+ixs0W0A3W7lqe7ld67iaK7mE27mQyxSb2xNyWxOkWxR0i7pDW7iDCyFyg7hZg7epS7Crq7Ssa7tK+1V82rW566e7G1ZVwbsWCLy/e4C6265by7tueotR1bTNG7XOS7VXq7TSO7TQK7TXa7XTq73R+7lli7ZZC75ma7llC7YxK7fh+71ri7Nx+xRuqxHuuxvV+7zzK7/ca79Mu73Ym7HWC/+195u9/suw3SvA56u+6Vu+ZNu5BxySCoy+3uvAcPu+EBy/7SvBtKu6souwt0u1GqxBGBy7FwzCHbzBtUvCBAy6jyu6g5nCgpvAK0wblOvCmSugLnzCnGvCKVy6T4HDp2u6pTG7Hmy3FizCQ7w6h8vCIZzBQOy3iWvExdu7x/u4yRu8U0y8wuvEygvFvstdxpum/nWwDvvFEBvGEjvGHVvGZHHGTBIjaVy1YBy9aZywbqxBbEzHG7yOE/Gxd0yyX+F7eMzHNJHH5OjHKzvIeuyfTALIiNwrgdzHeyyRfvzIjmzIbzHJQVHJUtLIMAHHm/zGnTzHdgzKn8y0nDzKnrz/xqF8yqKcyJF8yKyMjn+8yLBcyIK8x4Rcy5OMxrTcyrgsy5Ksy6/sypb8y8KcyZQ8zM7yv/gLwBs7ws1MxK4rtsoszclcxEsMu8wCyYybzb88tcXczYlcuYOszbU8zocczo5czsCczt8cy6CrL7cCz+QyzQG8zBBbws/cxK3LzPO8z9QMzddszTT5sXg10OVV0Dhx0OBM0ALN0B2Z0O280GcKyd2aVaRstRbNsHUsyqnM0Rltyh5dyhvNGxqdyqvMy67MyCbNzYo8y97M0re80ijdy7sc05c8wdZi0zn90XJ80TvNFyQ90qgM0j0d0kTd0ZUB1Ehd00vt0jIt07Zs/868DNWvPNUp3c4njdXHfNPhotPFLCH+3M/0zM8BzcHVfLT1fNZj/br6TNbrvLSr7NbujM4rfc7m7NZ1TdVxrdcxvdde7Szx/M7yDNb2jNbRbNZM3NaF3c2DndaHDdBr7dAMEdGTbdCSXdmRjdkLHdkS7ciUjdCWba+HqROjTdqlbdqnjdqprdqrfdrhmBFXoXuv/ceynZC07Y227doTAdvEstu4Hdu6PdvAXdvCfdvEnduFUdzIfdwWktzMzdrPDd3RLd3TTd0osdwR0NvG/dsIkd3cHdzePdzg3dzY/d0H0d3mXd7kHd7ovd7qPd6Gsd3Mfd3wvS3Vbd/3jd/5jczf133e7s3f6d3fAQ7gA97eAl7gBP7emFzf863gC6TfDw7hES7hFwEUFXFfFl7hoM3bGk7bF87hwu3hXNrhGS7iIE7iiWqNE67iK87i0v3fBw7j423gMo7gL07jMW7jOR7fqpHgE+zgDM4RLS7kQ07k1r3jM67jG47jR17jTL7kSn7jUQ7kPU7lU17kV47lQp7kvg3lW67dXe7kUh7mXi7eZC7fO07fP47mmJHlbe7m+h3icX7ic04UGF7nHw7ecn7nJZ7ndK7kKP6cAQEAOw==";
var FLOOR = new Image();
FLOOR.src = "img/floor.png";
var PANEL = new Image();
PANEL.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAAMCAMAAAADKEL6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAADAFBMVEU4WTP/fgD/wg4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeMvotAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAGXRFWHRTb2Z0d2FyZQBQYWludC5ORVQgdjMuNS41SYr84AAAAXVJREFUSEulVlsCwyAIU+9/6Mk7KNpu82eWUUwgYFvD1YeunszN7WP842/Rx8jxw57jv/Tvuia0rkg7HWD2+WD2GTHs5IKE0R+OdnNrbuWQsZAARAn/Sfjkz3gowPzZ9vQH/W0+5MeR2Ez+QEDs6g+Q3NwdEL2LoNO+8KeKnfxz1hM4x2OgOUYmnAko/umz5FQTZPq8EuAUSEJRQhcCCIIzOwNwNQwPAdI6MQF5Ya8A+lcMFJDEP1ZAisjxfyHADLjJAj9n1BionU5YJOT4lwo4IgGk8S8EjMFvBObbAU5RF2SCpKBiMokkINSUMiDcH0lsJK89gBJCeaCEVjmZzFb5yXPugSSJQh4VjVVmXzSxZskmEh+ojev72xTaCWBTVg1a1oGU/FZCeYwGOD/MpxBZHqbQXgEci7i/NYFI7SUBvyLojpUhxPcYXmTVpVZOoV1CFlGvGY8f9rxzXu8J5K+Gx6d0eaUe8LOPnx6PweG2TqP23AMf5tQMrSAkmJsAAAAASUVORK5CYII=";
var PAIL = new Image();
PAIL.src = "img/pail.png";
document.onkeydown = function(b) {
    var a = b || window.event;
    switch (a.keyCode) {
        case 37:
        case 38:
        case 65:
        case 87:
            box.rotate(-DEGREE * 5, true);
            return false;
        case 39:
        case 40:
        case 83:
        case 68:
            box.rotate(+DEGREE * 5, true);
            return false
    }
};
document.onkeyup = function(a) {};
var delta = 0;

function wheel(a) {
    if (!a) {
        a = window.event
    }
    if (a.wheelDelta) {
        if (window.opera) {
            delta -= a.wheelDelta / 120
        } else {
            delta += a.wheelDelta / 120
        }
    } else {
        if (a.detail) {
            delta -= a.detail
        }
    }
    if (Math.abs(delta) > 1) {
        delta = delta / Math.abs(delta);
        box.rotate(delta * DEGREE * 5, true);
        delta = 0
    }
}
if (window.addEventListener) {
    window.addEventListener("DOMMouseScroll", wheel, false)
}
window.onmousewheel = document.onmousewheel = wheel;
var mouseIsDown = false;
var mouseClicked = false;
var startAngle;

function addRotateInput(a) {
    a.onmousedown = function(b) {
        mouseIsDown = true;
        mouseClicked = b.which;
        if (!mouseClicked) {
            mouseClicked = b.button
        }
    };
    a.onmouseup = function(b) {
        mouseIsDown = false;
        if (mouseClicked == 1) {
            mouseClicked = false
        }
        if (mouseClicked == 3) {
            mouseClicked = false
        }
    };
    a.onmouseout = function(b) {
        mouseIsDown = false
    };
    a.onmousemove = function(h) {
        var g = null;
        h = h || window.event;
        if (mouseIsDown) {
            var f = parseInt(cvs.offsetWidth / 2);
            var c = parseInt(cvs.offsetWidth / 2);
            if (h.offsetX) {
                f = h.offsetX - f;
                c = h.offsetY - c
            } else {
                if (h.layerX) {
                    f = h.layerX - f;
                    c = h.layerY - c
                } else {
                    g = (h.target || h.srcElement).getBoundingClientRect();
                    f = h.clientX - g.left - f;
                    c = h.clientY - g.top - c
                }
            }
            var j = Math.sqrt(f * f + c * c);
            if (j != 0) {
                var i = Math.acos(f / j);
                if (c < 0) {
                    i = (Math.PI * 2) - i
                }
                if (mouseClicked) {
                    startAngle = i
                }
                var d = (i + (Math.PI * 2) - startAngle) % (Math.PI * 2);
                var b = Math.floor(d / DEGREE) * DEGREE;
                box.rotate(b, true);
                startAngle = (startAngle + b) % (Math.PI * 2)
            }
            mouseClicked = false
        }
    };
    a.oncontextmenu = function(b) {
        return false
    };
    this.touch = function(f) {
        var d = f.changedTouches;
        var g = d[0];
        var b = "";
        beenTouched = true;
        switch (f.type) {
            case "touchstart":
                b = "mousedown";
                break;
            case "touchmove":
                b = "mousemove";
                f.preventDefault();
                break;
            case "touchend":
                b = "mouseup";
                break
        }
        var c = document.createEvent("MouseEvent");
        c.initMouseEvent(b, true, true, window, 1, g.screenX, g.screenY, g.clientX, g.clientY, false, false, false, false, 0, null);
        g.target.dispatchEvent(c)
    };
    document.addEventListener("touchstart", this.touch, true);
    document.addEventListener("touchmove", this.touch, true);
    document.addEventListener("touchend", this.touch, true)
}
"use strict";
var WIDTH = 600;
var TOTAL_DEGREES = 256;
var DEGREE = Math.PI / TOTAL_DEGREES;
var GRAVITY = 0.33;
var AIR_FRICTION = 0.75;
var FRICTION = 0.15;
var ROTATIONAL_FRICTION = 0.99;
var WALL_SIZE = 12;
var TILE_COLORS = 5;
var SHADOW = "rgba(0,0,0,0.3)";
var sandColor = "rgb(234,196,117)";
var resizeQueue = [];

function addAutoResize(a) {
    a.ratio = a.offsetWidth / a.offsetHeight;
    a.resize = function() {
        var d = window.innerWidth;
        var c = window.innerHeight;
        if (d > 600) {
            d = 600
        }
        if (c > 700) {
            c = 700
        }
        if (d < 120) {
            d = 120
        }
        if (c < 140) {
            c = 140
        }
        var b = d / c;
        if (b > this.ratio) {
            this.style.height = c + "px";
            d = c * this.ratio;
            this.style.width = d + "px"
        } else {
            this.style.width = d + "px";
            c = d / this.ratio;
            this.style.height = c + "px"
        }
        this.style.marginTop = "-" + parseInt(c / 2) + "px";
        this.style.marginLeft = "-" + parseInt(d / 2) + "px"
    };
    resizeQueue.splice(0, 0, a);
    window.addEventListener("resize", resizeGame, false);
    window.addEventListener("orientationchange", resizeGame, false)
}
var resizeGame = function() {
    var a = 0;
    for (a in resizeQueue) {
        resizeQueue[a].resize()
    }
    document.getElementById("body").style.fontSize = (cvs.offsetWidth / 600) + "em"
};
var topLevel = +gws.storage.get("level");
if (!topLevel) {
    topLevel = +1
}
var currentLevel = +0;

function resetGame() {
    topLevel = +1;
    gws.storage.set("level", topLevel);
    ll(0, true)
}
var stepUpdateTime = 0;
var stepRenderTime = 0;
var stepDelay = +33;

function startStepping() {
    var a = new Date().getTime();
    stepUpdateTime = a;
    stepRenderTime = a;
    setTimeout("updateStepper();", stepDelay);
    setTimeout("renderStepper();", stepDelay)
}

function updateStepper() {
    var b = new Date().getTime();
    var c = b - stepUpdateTime;
    if (c) {
        if (onMenu) {
            box.rotate(0.01, true)
        }
        box.update(c)
    }
    var a = stepDelay;
    if (c > a) {
        a = Math.max(1, 2 * a - c)
    }
    stepUpdateTime = b;
    setTimeout("updateStepper();", a)
}
var testRenderTime = 0;
var testRenderSteps = 0;

function renderStepper() {
    var c = new Date().getTime();
    var d = c - stepRenderTime;
    if (box.calculateResolution) {
        if (testRenderSteps != 0) {
            testRenderTime += d
        }
        testRenderSteps++;
        if (testRenderSteps > 60) {
            var f = testRenderSteps / (testRenderTime / 1000);
            if ((f < 20) || (box.resolution == 5)) {
                box.resolutionCalculation--;
                if (box.resolutionCalculation == 0) {
                    box.resolutionCalculation = -1
                }
                box = new aBox(LEVELS[0], box.resolutionCalculation, cvs, document.getElementById("levelLoader"));
                gws.storage.set("Scale", box.resolutionCalculation);
                showPlayNow()
            } else {
                box.resolutionCalculation++;
                if (box.resolutionCalculation == 0) {
                    box.resolutionCalculation = +1
                }
                var a = box.rotation;
                box = new aBox(LEVELS[0], box.resolutionCalculation, cvs, document.getElementById("levelLoader"));
                box.calculateResolution = true;
                box.rotation = a;
                switch (box.resolutionCalculation) {
                    case -1:
                        showMessage("<p>" + gws.lang.STEP2 + "</p>");
                        break;
                    case 1:
                        showMessage("<p>" + gws.lang.STEP3 + "</p>");
                        break;
                    case 2:
                        showMessage("<p>" + gws.lang.STEP4 + "</p>");
                        break;
                    case 3:
                        showMessage("<p>" + gws.lang.STEP5 + "</p>");
                        break;
                    case 4:
                        showMessage("<p>" + gws.lang.STEP6 + "</p>");
                        break;
                    case 5:
                        showMessage("<p>" + gws.lang.STEP7 + "</p>");
                        break;
                    default:
                        showMessage("<p>" + gws.lang.STEP10 + "</p>");
                        break
                }
            }
            testRenderTime = 0;
            testRenderSteps = 0
        }
    }
    box.render(d);
    var b = stepDelay;
    if (d > b) {
        b = Math.max(1, 2 * b - d)
    }
    stepRenderTime = c;
    setTimeout("renderStepper();", b)
}

function testingStepper() {
    document.getElementById("testing").innerHTML = (testRenderSteps / (testRenderTime / 1000)) + " fps";
    setTimeout("testingStepper();", 500)
}

function showMessage(a, b, c, i, d, g) {
    if (!a) {
        clearMessage()
    } else {
        var f = document.getElementById("message-box");
        if (!b) {
            b = +33
        }
        if (!c) {
            c = +10
        }
        f.style.width = b + "%";
        f.style.marginLeft = parseInt(-b / 2) + "%";
        f.style.height = c + "%";
        f.style.marginTop = parseInt(-c / 2) + "%";
        if (i) {
            a = "<h2>" + i + "</h2>" + a
        }
        if (d) {
            if (!g) {
                g = "javascript:clearMessage();"
            }
            a += '<a class="button" href="' + g + '">' + d + "</a>"
        }
        f.innerHTML = a;
        clearPlayNow()
    }
}

function clearMessage() {
    var a = document.getElementById("message-box");
    a.style.marginTop = "110%"
}

function showTime(a) {
    if (a == "") {
        document.getElementById("time").innerHTML = ""
    } else {
        document.getElementById("time").innerHTML = convertTime(a) + ' <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAABvSURBVChTY2BgYPhPADPEAxXMB2JdNAwSA8kxiALxHiAWBnGgAMQGiYHkwEASKnAPSIMwSBIkhgJCgbxHUAxiowCQ6tlAbA/FIDbcBJA9s4DYEIjnQTGIDRIDuwHk0l9A/AOIYV4GsUFiYF/gDQcACrclv4fWr0UAAAAASUVORK5CYII=" alt="Time in Seconds" />'
    }
}

function convertTime(b) {
    var a = Math.floor(b / 1000);
    var c = Math.floor(b / 100) - (a * 10);
    return a + "." + c
}

function showPlayNow() {
    clearMessage();
    document.getElementById("play-now").style.bottom = "8%"
}

function clearPlayNow() {
    document.getElementById("play-now").style.bottom = "-8%"
}

function showMenu() {
    gws.view.note.hide();
    var b = "";
    for (var a in LEVELS) {
        if (a > 0) {
            if (a > topLevel) {
                b += '<li><a href="javascript:doNothing();" title="Level ' + a + ' is locked"><img alt="Level ' + a + ' is locked" src="' + LOCKED.src + '" /></a></li>'
            } else {
                b += '<li><a href="javascript:ll(' + a + ');" title="Level ' + a + '"><img alt="Level ' + a + '" src="' + ICONS[a - 1] + '" /></a></li>'
            }
        }
    }
    showMessage('<ul id="level-list">' + b + "</ul>", 71, 61, gws.lang.LEVELS, gws.lang.CLOSE + " &raquo;")
}

function doNothing() {}

function showOptions() {
    showMessage("<p>" + gws.lang.IF_CHOPPY + '<br /><br /><a href="javascript: ll(0,true);" class="menu-button">' + gws.lang.RECALCULATE + '</a><a href="javascript: resetGame();" class="menu-button">' + gws.lang.RESET_GAME + "</a></p>", 63, 43, gws.lang.OPTIONS, gws.lang.OKAY + " &raquo;")
}

function showHelp() {
    showMessage('<p style="text-align: justify;"><img src="data:image/png;base64,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" style="float: right; margin-left: 3%; height: 62%; width: 14%;" alt="Sand dropping out of the box and into the sand pail." />' + (gws.browser.conduitTilt ? "Your goal is to get as much sand as you can out of the box and into the pail. You can rotate the box by tilting your phone right and left." : gws.lang.INSTRUCTIONS1) + "<br /><br />" + gws.lang.INSTRUCTIONS2 + "<br /><br />" + gws.lang.INSTRUCTIONS3 + "</p>", 67, 57, gws.lang.HOW_TO_PLAY, gws.lang.OKAY + " &raquo;")
}

function showCredits() {
    showMessage("<p>" + gws.lang.DEREK + "<br /><br />" + gws.lang.TODD + "<br /><br />" + gws.lang.CLAY + '<br /><br /><a style="padding: 2% 6%;" target="blank" href="http://gopherwoodstudios.com/" class="menu-button"><img src="data:image/png;base64,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" alt="' + gws.lang.GOPHERWOOD_STUDIOS + '" style="width: 17em; height: 1.6em;" /></a></p>', 58, 43, "Credits", gws.lang.OKAY + " &raquo;")
}

function ll(c, b) {
    if (c >= LEVELS.length) {
        showMenu()
    } else {
        var a = box.rotation;
        var d = box.resolutionCalculation;
        if (b) {
            d = 0
        }
        currentLevel = +c;
        box = new aBox(LEVELS[c], d, cvs, document.getElementById("levelLoader"));
        box.rotation = a;
        clearMessage();
        gws.view.note.hide();
        if (b) {
            box.calculateResolution = true;
            onMenu = true;
            showMessage("<p>" + gws.lang.STEP1 + "</p>");
            showTime("")
        } else {
            onMenu = false;
            box.score = new gws.classes.score({
                level: currentLevel,
                onBreakRecord: gws.onBreakRecord || false
            });
            startLevelTime = new Date().getTime();
            showTime(0);
            pageTracker._trackPageview("/sandtrap-level-" + currentLevel)
        }
    }
}
var startLevelTime = 0;
var mapResolution = gws.storage.get("Scale");

function polarToCartesian(c) {
    var a = c[0] * Math.cos(c[1]);
    var b = c[0] * Math.sin(c[1]);
    return [a, b]
}

function cartesianToPolar(d) {
    var b = Math.sqrt(Math.pow(d[0], 2) + Math.pow(d[1], 2));
    var c = 0;
    if (b != 0) {
        c = Math.acos(d[0] / b);
        if (d[1] < 0) {
            c = (Math.PI * 2) - c
        }
    }
    return [b, c]
}
var playarea;
var cvs;
var ctx;
var box;
var onMenu = true;
var song;

function loadPage() {
    gws.browser = gws.browserCheck();
    if (gws.browser.canvas) {
        playarea = document.getElementById("play-area");
        cvs = document.getElementById("cvs");
        ctx = cvs.getContext("2d");
        cvs.context = ctx;
        song = document.getElementById("audio");
        document.title = gws.lang.TITLE;
        if (gws.addAd) {
            gws.addAd()
        }
        document.title = gws.lang.TITLE + " ";
        gws.view = {
            note: new gws.classes.notification({
                panels: [{
                    parent: playarea,
                    className: "notification-left"
                }, {
                    parent: playarea,
                    className: "notification-right"
                }]
            })
        };
        var b = new Date();
        if ((b.getDate() == 25) && (b.getMonth() == 11)) {
            sandColor = "#fff";
            document.getElementById("bg").src = "i/bg-winter.png"
        }
        song.load();
        song.play();
        song.addEventListener("ended", function() {
            this.currentTime = 0
        }, false);
        box = new aBox(LEVELS[0], mapResolution, cvs, document.getElementById("levelLoader"));
        if (!mapResolution) {
            box.calculateResolution = true;
            showMessage("<p>" + gws.lang.STEP1 + "</p>")
        } else {
            showPlayNow()
        }
        addRotateInput(cvs);
        addAutoResize(playarea);
        resizeGame();
        document.title = gws.lang.TITLE + "!!";
        startStepping();
        document.title = gws.lang.TITLE + "!";
        setTimeout(function() {
            resizeGame();
            document.title = gws.lang.TITLE + "!!!"
        }, 3000)
    } else {
        var a = "";
        a += '<li><a href="http://www.apple.com/safari/" title="Apple Safari" class="safari"><span>Apple Safari</span></a></li>';
        a += '<li><a href="http://www.google.com/chrome/" title="Google Chrome" class="chrome"><span>Google Chrome</span></a></li>';
        a += '<li><a href="http://www.mozilla.com/firefox/" title="Mozilla Firefox" class="firefox"><span>Mozilla Firefox</span></a></li>';
        a += '<li><a href="http://www.opera.com/" title="Opera" class="opera"><span>Opera</span></a></li>';
        showMessage("<p>" + gws.lang.BROWSER + '</p><ul id="browsers">' + a + "</ul><p>" + gws.lang.CHROME_FRAME + '<a href="http://www.google.com/chromeframe/eula.html"> &raquo;</a></p>', 400, 300, gws.lang.ONE_MORE_STEP, false, true);
        return false
    }
}
var soundOn = true;

function toggleSound() {
    try {
        if (soundOn) {
            soundOn = false;
            song.pause();
            document.getElementById("audio-on").style.display = "none";
            document.getElementById("audio-off").style.display = "block"
        } else {
            soundOn = true;
            song.play();
            document.getElementById("audio-off").style.display = "none";
            document.getElementById("audio-on").style.display = "block"
        }
    } catch (a) {
        showMessage("<p>" + gws.lang.AUDIO_ERROR + "</p><p>" + gws.lang.QUICKTIME + "</p>", 325, 250, gws.lang.AUDIO_ERROR_TITLE, gws.lang.OKAY + " &raquo;")
    }
}
gws.classes = gws.classes || {};
gws.classes.notification = function(c) {
    var b = c || {},
        d = 0,
        a = function(g) {
            var f = g || {};
            this.className = f.className || "notification";
            this.element = f.element || gws.createElement(f.parent, "div", this.className + " hide", f.id)
        };
    a.prototype.show = function(f) {
        if (f != "") {
            this.element.innerHTML = f;
            this.element.className = this.className + " show"
        } else {
            this.hide()
        }
    };
    a.prototype.hide = function() {
        this.element.className = this.className + " hide"
    };
    this.delay = b.delay || 1000;
    this.interrupt = b.interrupt || 3000;
    this.panels = [];
    if (b.panels) {
        for (d in b.panels) {
            this.panels.push(new a(b.panels[d]))
        }
    }
    this.queuedNotes = []
};
gws.classes.notification.prototype.update = function(a) {
    var d = 0,
        c = [],
        b = 0;
    a = a || new Date().getTime();
    for (d in this.queuedNotes) {
        b = this.queuedNotes[d];
        if (b.time <= a) {
            b.panel.show(b.note)
        } else {
            c.push(b)
        }
    }
    this.queuedNotes = c
};
gws.classes.notification.prototype.show = function(c) {
    var d = 0,
        a = false,
        b = new Date().getTime();
    panelIndex = 0, panelLength = this.panels.length;
    if (c && (c.length > 0)) {
        for (d in c) {
            if (a) {
                this.queuedNotes.push({
                    panel: this.panels[panelIndex],
                    time: b,
                    note: ""
                })
            }
            b += this.delay;
            this.queuedNotes.push({
                panel: this.panels[panelIndex],
                time: b,
                note: c[d]
            });
            if (panelIndex === panelLength - 1) {
                b += this.interrupt;
                a = true
            }
            panelIndex = (panelIndex + 1) % panelLength
        }
    } else {
        this.hide()
    }
};
gws.classes.notification.prototype.hide = function() {
    this.queuedNotes.length = 0;
    var a = 0;
    for (a in this.panels) {
        this.panels[a].hide()
    }
};
var aPanel = function(a, g, b, c, f, d) {
    this.p = [a, g];
    this.v = [0, 0];
    this.a = [0, 0];
    this.width = +b;
    this.height = +c;
    this.radius = 0;
    this.box = d;
    this.description = f;
    if (!this.description) {
        this.description = "ball"
    }
    this.moveTo = function(p, n) {
        var i = this.p[0];
        var l = this.p[1];
        var h = p[0];
        var k = p[1];
        if (this.radius) {
            var o = this.locationClear(p, true);
            if (o == -1) {
                for (var m = 0; m < this.width; m++) {
                    for (var j = 0; j < this.height; j++) {
                        if (cartesianToPolar([m - this.radius, j - this.radius])[0] < this.radius + 0.5) {
                            this.box.grid[parseInt(i + m)][parseInt(l + j)] = false
                        }
                    }
                }
                for (var m = 0; m < this.width; m++) {
                    for (var j = 0; j < this.height; j++) {
                        if (cartesianToPolar([m - this.radius, j - this.radius])[0] < this.radius + 0.5) {
                            this.box.grid[parseInt(h + m)][parseInt(k + j)] = this
                        }
                    }
                }
                this.p = [h, k]
            } else {
                if (this.locationClear(o[0])) {
                    h = o[0][0];
                    k = o[0][1];
                    for (var m = 0; m < this.width; m++) {
                        for (var j = 0; j < this.height; j++) {
                            if (cartesianToPolar([m - this.radius, j - this.radius])[0] < this.radius + 0.5) {
                                this.box.grid[parseInt(i + m)][parseInt(l + j)] = false
                            }
                        }
                    }
                    for (var m = 0; m < this.width; m++) {
                        for (var j = 0; j < this.height; j++) {
                            if (cartesianToPolar([m - this.radius, j - this.radius])[0] < this.radius + 0.5) {
                                this.box.grid[parseInt(h + m)][parseInt(k + j)] = this
                            }
                        }
                    }
                    this.p = [h, k]
                } else {
                    if (this.locationClear(o[1])) {
                        h = o[1][0];
                        k = o[1][1];
                        for (var m = 0; m < this.width; m++) {
                            for (var j = 0; j < this.height; j++) {
                                if (cartesianToPolar([m - this.radius, j - this.radius])[0] < this.radius + 0.5) {
                                    this.box.grid[parseInt(i + m)][parseInt(l + j)] = false
                                }
                            }
                        }
                        for (var m = 0; m < this.width; m++) {
                            for (var j = 0; j < this.height; j++) {
                                if (cartesianToPolar([m - this.radius, j - this.radius])[0] < this.radius + 0.5) {
                                    this.box.grid[parseInt(h + m)][parseInt(k + j)] = this
                                }
                            }
                        }
                        this.p = [h, k]
                    }
                }
            }
        } else {
            if (this.locationClear(p)) {
                for (var m = 0; m < this.width; m++) {
                    for (var j = 0; j < this.height; j++) {
                        this.box.grid[parseInt(i + m)][parseInt(l + j)] = false
                    }
                }
                for (var m = 0; m < this.width; m++) {
                    for (var j = 0; j < this.height; j++) {
                        this.box.grid[parseInt(h + m)][parseInt(k + j)] = this
                    }
                }
                this.p = [h, k]
            }
        }
    };
    this.locationClear = function(n, l) {
        var A = this.p[0];
        var k = this.p[1];
        var z = n[0];
        var j = n[1];
        var h = false;
        var o = false;
        var t = [0, 0];
        var w = 0;
        if (this.radius) {
            for (var q = 0; q < this.width; q++) {
                for (var p = 0; p < this.height; p++) {
                    if (cartesianToPolar([q - this.radius, p - this.radius])[0] < this.radius + 0.5) {
                        o = this.box.grid[parseInt(z + q)][parseInt(j + p)];
                        if ((!o) || (o == this)) {
                            o = false
                        } else {
                            o = true;
                            t = [t[0] + q, t[1] + p];
                            w++
                        }
                        h = h || o
                    }
                }
            }
            if (l) {
                if (!h) {
                    return -1
                } else {
                    var B = cartesianToPolar([t[0] / w - this.radius, t[1] / w - this.radius]);
                    var r = cartesianToPolar([z - A, j - k]);
                    var C = B[1] - Math.PI / 2;
                    var s = polarToCartesian([r[0], r[1] - C])[0];
                    var i = polarToCartesian([s, C]);
                    var u = polarToCartesian([0.5, B[1] + Math.PI]);
                    i = [i[0] + A, i[1] + k];
                    return [i, [i[0] + u[0], i[1] + u[1]]]
                }
            } else {
                return !h
            }
        } else {
            for (var q = 0; q < this.width; q++) {
                for (var p = 0; p < this.height; p++) {
                    o = this.box.grid[parseInt(z + q)][parseInt(j + p)];
                    if ((!o) || (o == this)) {
                        o = false
                    } else {
                        o = true
                    }
                    h = h || o
                }
            }
            return !h
        }
    };
    this.beginStepping = function(j, k, i, h) {
        return this.step(j, k, i, h, h)
    };
    this.step = function(m, k, q, p, i) {
        if (p == 0) {
            return m
        } else {
            var l = m;
            var j = Math.pow(q, 2);
            switch (this.description) {
                case "ball":
                    j = q;
                    l = [(m[0] + k[0]) * j, (m[1] + k[1]) * j];
                    break;
                case "balloon":
                    j = Math.pow(q, 3);
                    l = [(m[0] - k[0]) * j, (m[1] - k[1]) * j];
                    break;
                case "v-panel":
                    l = [0, (m[1] + k[1]) * j];
                    break;
                case "h-panel":
                    l = [(m[0] + k[0]) * j, 0];
                    break
            }
            var h = cartesianToPolar(l);
            var o = this.p[0] + l[0];
            var n = this.p[1] + l[1];
            this.moveTo([o, n], h);
            return this.step(l, k, q, p - 1, i)
        }
    };
    this.render = function() {
        var h = this.width / this.box.resolution;
        var t = this.height / this.box.resolution;
        if (!this.storageCanvas) {
            var k = 0;
            var j = 0;
            this.storageCanvas = document.createElement("canvas");
            this.storageCanvas.setAttribute("width", h * WALL_SIZE + 2);
            this.storageCanvas.setAttribute("height", t * WALL_SIZE + 2);
            this.box.storage.insertBefore(this.storageCanvas, null);
            this.storageContext = this.storageCanvas.getContext("2d");
            if (this.description.charAt(0) == "b") {
                var m, l;
                if (this.description == "ball") {
                    m = "#bb0000";
                    l = "#ee0000"
                } else {
                    m = "#ff6666";
                    l = "#ff9999"
                }
                var o = h * WALL_SIZE / 2;
                this.storageContext.beginPath();
                this.storageContext.fillStyle = "#385933";
                this.storageContext.arc(o + 1, o + 1, o, 0, 2 * Math.PI, true);
                this.storageContext.fill();
                this.storageContext.beginPath();
                this.storageContext.fillStyle = m;
                this.storageContext.arc(o + 1, o + 1, o * 0.95, 0, 2 * Math.PI, true);
                this.storageContext.fill();
                this.storageContext.beginPath();
                this.storageContext.fillStyle = l;
                this.storageContext.arc(o + 1, o + 1, o * 0.75, 0, 2 * Math.PI, true);
                this.storageContext.fill()
            } else {
                for (var q = 0; q < h; q++) {
                    for (var p = 0; p < t; p++) {
                        k = 15;
                        if (q == 0) {
                            k -= 8
                        }
                        if (q == h - 1) {
                            k -= 2
                        }
                        if (p == 0) {
                            k -= 1
                        }
                        if (p == t - 1) {
                            k -= 4
                        }
                        this.storageContext.drawImage(PANEL, k * WALL_SIZE, j * WALL_SIZE, WALL_SIZE, WALL_SIZE, q * WALL_SIZE + 1, p * WALL_SIZE + 1, WALL_SIZE, WALL_SIZE)
                    }
                }
            }
        }
        var s = this.box.parent.context;
        var i = (this.box.scale * this.width + 3) * this.box.changeRes;
        var r = (this.box.scale * this.height + 3) * this.box.changeRes;
        s.drawImage(this.storageCanvas, (Math.floor(this.p[0]) * this.box.scale + this.box.offsetX - 1) * this.box.changeRes, (Math.floor(this.p[1]) * this.box.scale + this.box.offsetY - 1) * this.box.changeRes, i, r);
        if (this.radius) {
            var n = polarToCartesian([this.box.scale * this.radius * 0.4, this.box.getPolarGravity()[1] + Math.PI]);
            s.beginPath();
            s.fillStyle = "#ffffff";
            s.arc(((Math.floor(this.p[0]) + this.radius) * this.box.scale + this.box.offsetX + n[0] + 1) * this.box.changeRes, ((Math.floor(this.p[1]) + this.radius) * this.box.scale + this.box.offsetY + n[1] + 1) * this.box.changeRes, (this.box.scale * this.radius * 0.2) * this.box.changeRes, 0, 2 * Math.PI, true);
            s.fill()
        }
    };
    this.renderShadow = function(i) {
        var j = this.box.parent.context;
        var k = this.box.scale * this.width;
        var h = this.box.scale * this.height;
        j.fillStyle = SHADOW;
        if (this.radius) {
            radius = this.radius * this.box.scale;
            j.beginPath();
            j.arc((Math.floor(this.p[0]) * this.box.scale + this.box.offsetX + radius + i[0]) * this.box.changeRes, (Math.floor(this.p[1]) * this.box.scale + this.box.offsetY + radius + i[1]) * this.box.changeRes, radius * this.box.changeRes, 0, 2 * Math.PI, true);
            j.fill()
        } else {
            j.fillRect((Math.floor(this.p[0]) * this.box.scale + this.box.offsetX + i[0]) * this.box.changeRes, (Math.floor(this.p[1]) * this.box.scale + this.box.offsetY + i[1]) * this.box.changeRes, k * this.box.changeRes, h * this.box.changeRes)
        }
    };
    this.update = function(l) {
        if (this.description.charAt(0) == "b") {
            this.radius = this.height / 2
        }
        var n = this.box.getCartesianGravity();
        var k = l / 33;
        var j = cartesianToPolar(this.v);
        var h = Math.floor(j[0] * k) + 2;
        j[0] *= (k / h);
        j = polarToCartesian(j);
        var m = [n[0] * k / h, n[1] * k / h];
        var i = Math.pow(AIR_FRICTION, k);
        j = this.beginStepping(j, m, i, h);
        this.v = [j[0] * (h / k), j[1] * (h / k)]
    }
};
var aSand = function(a, d, c, b) {
    this.p = [a, d];
    this.v = [0, 0];
    this.a = [0, 0];
    this.box = c;
    this.color = b;
    this.description = "sand";
    if (!this.color) {
        this.color = "brown"
    }
    this.box.grid[parseInt(a)][parseInt(d)] = this;
    this.moveTo = function(k) {
        var g = this.p[0];
        var j = this.p[1];
        var f = k[0];
        var i = k[1];
        var h = this.box.grid[parseInt(f)][parseInt(i)];
        if ((!h) || (h == this)) {
            this.box.grid[parseInt(g)][parseInt(j)] = false;
            this.box.grid[parseInt(f)][parseInt(i)] = this;
            this.p = [f, i]
        }
    };
    this.beginStepping = function(h, i, g, f) {
        return this.step(h, i, g, f, f, true)
    };
    this.step = function(p, A, s, D, j, t) {
        if ((D == 0) || ((cartesianToPolar(p)[0] < 0.01) && !t)) {
            return p
        } else {
            var v = p;
            if (t) {
                v = [(p[0] + A[0]) * s, (p[1] + A[1]) * s]
            }
            var r = cartesianToPolar(v);
            var u = r[0];
            var C = r[1];
            var n = this.p[0] + v[0];
            var l = this.p[1] + v[1];
            var F = this.box.grid[parseInt(n)][parseInt(l)];
            if ((!F) || (F == this)) {
                this.moveTo([n, l]);
                return this.step(v, A, s, D - 1, j, true)
            } else {
                if (F == "out") {
                    var q = (cartesianToPolar([n - this.box.size, l - this.box.size])[1] + this.box.rotation) % (Math.PI * 2);
                    if ((q > this.box.bucket.insideMin) && (q < this.box.bucket.insideMax)) {
                        this.box.bucket.grains++
                    }
                    this.box.remove(this);
                    return [0, 0]
                } else {
                    var B = Math.floor(Math.random() * 2) - 0.5;
                    var i = [r[0], r[1] + (Math.PI / 1.8) * B];
                    var E = polarToCartesian(i);
                    var z = this.p[0] + E[0];
                    var w = this.p[1] + E[1];
                    var k = this.box.grid[parseInt(z)][parseInt(w)];
                    if ((k) && (k != this)) {
                        i = [r[0], r[1] + (Math.PI / 1.8) * -B];
                        E = polarToCartesian(i);
                        z = this.p[0] + E[0];
                        w = this.p[1] + E[1];
                        k = this.box.grid[parseInt(z)][parseInt(w)]
                    }
                    if ((!k) || (k == this)) {
                        this.moveTo([z, w]);
                        return this.step(E, A, s, D - 1, j, true)
                    } else {
                        if (F.description == "wall") {
                            var f = [this.p[0] - F.p[0], this.p[1] - F.p[1]];
                            var h = Math.abs(f[0]);
                            var g = Math.abs(f[1]);
                            if (h > g) {
                                v = [-v[0] * FRICTION, v[1] * FRICTION]
                            } else {
                                if (g > h) {
                                    v = [v[0] * FRICTION, -v[1] * FRICTION]
                                } else {
                                    v = [-v[0] * FRICTION, -v[1] * FRICTION]
                                }
                            }
                        } else {
                            var o = cartesianToPolar([this.p[0] - F.p[0], this.p[1] - F.p[1]])[1];
                            C = 2 * o - r[1] - Math.PI;
                            targetVelocity = cartesianToPolar(F.v)[0] * FRICTION;
                            myVelocity = j * r[0] * FRICTION;
                            v = polarToCartesian([myVelocity / j, C]);
                            if ((F.description == "ball") || (F.description == "balloon") || (F.description == "h-panel") || (F.description == "v-panel")) {
                                v = [F.v[0] / j + v[0], F.v[1] / j + v[1]]
                            }
                        }
                        return this.step(v, A, s, D - 1, j, true)
                    }
                }
            }
        }
    };
    this.render = function() {
        var f = this.box.parent.context;
        f.fillStyle = this.color;
        var g = this.box.scale / 1.5;
        f.fillRect((this.p[0] * this.box.scale + this.box.offsetX - g) * this.box.changeRes, (this.p[1] * this.box.scale + this.box.offsetY - g) * this.box.changeRes, g * 2 * this.box.changeRes, g * 2 * this.box.changeRes)
    };
    this.update = function(g) {
        if (this.box.rotationalVelocity != 0) {
            if ((Math.abs(this.p[0] - this.box.size) > (this.box.size / 2)) || (Math.abs(this.p[1] - this.box.size) > (this.box.size / 2))) {
                var s = -this.box.rotationalVelocity;
                if (s < -Math.PI) {
                    s = s + 2 * Math.PI
                }
                var p = cartesianToPolar([this.p[0] - this.box.size, this.p[1] - this.box.size]);
                var f = s * p[0];
                var h = Math.abs(f);
                var o;
                var l;
                var i = this.p;
                var n = 0;
                while (n < h) {
                    o = polarToCartesian([p[0], (n / h) * s + p[1]]);
                    o = [o[0] + this.box.size, o[1] + this.box.size];
                    l = this.box.grid[parseInt(o[0])][parseInt(o[1])];
                    if ((!l) || (l == this)) {
                        i = o
                    } else {
                        n = h
                    }
                    n++
                }
                this.moveTo(i)
            }
        }
        var r = this.box.getCartesianGravity();
        var j = g / 33;
        var m = cartesianToPolar(this.v);
        var q = Math.floor(m[0] * j) + 1;
        m[0] *= (j / q);
        m = polarToCartesian(m);
        var k = [r[0] * j / q, r[1] * j / q];
        var t = Math.pow(AIR_FRICTION, j);
        m = this.beginStepping(m, k, t, q);
        this.v = [m[0] * (q / j), m[1] * (q / j)];
        if (isNaN(this.v[0])) {
            console.log(m)
        }
    }
};
gws.classes = gws.classes || {};
gws.classes.score = function(a) {
    this.MAX_TIME = 300000;
    this.MULTIPLIER = 10000 / 3400;
    this.level = a.level || 0;
    this.onBreakRecord = a.onBreakRecord || false;
    this.record = gws.storage.get("sand-trap-level-" + this.level + "-score") || 0;
    this.quantity = 0;
    this.completionBonus = 0;
    this.time = this.MAX_TIME
};
gws.classes.score.prototype.get = function() {
    return Math.floor(((this.MAX_TIME - this.time) / 100 * this.quantity + this.completionBonus) * this.MULTIPLIER)
};
gws.classes.score.prototype.set = function(a) {
    var b = this.get();
    if (a && (b > this.record)) {
        gws.storage.set("sand-trap-level-" + this.level + "-score", b);
        this.record = b;
        if (this.onBreakRecord) {
            this.onBreakRecord()
        }
    }
};
gws.classes.score.prototype.setCompletionBonus = function(a) {
    this.completionBonus = a;
    this.set(false)
};
gws.classes.score.prototype.setQuantity = function(a) {
    this.quantity = a;
    this.set(false)
};
gws.classes.score.prototype.setTimeQuantity = function(b, a) {
    this.setQuantity(a);
    this.time = Math.min(b, this.MAX_TIME);
    this.set(false)
};
var aWall = function(a, d, c, b) {
    this.p = [a, d];
    this.box = c;
    this.color = b;
    this.description = "wall";
    if (!this.color) {
        this.color = "black"
    }
    this.box.grid[parseInt(a)][parseInt(d)] = this;
    this.moveTo = function(j) {
        var g = this.p[0];
        var i = this.p[1];
        var f = j[0];
        var h = j[1];
        this.box.grid[parseInt(g)][parseInt(i)] = false;
        this.box.grid[parseInt(f)][parseInt(h)] = this;
        this.p = [f, h]
    };
    this.beginStepping = function() {};
    this.step = function(f) {};
    this.render = function(f) {
        f.fillStyle = this.color;
        var g = this.box.scale / 2 + 0.5;
        f.beginPath();
        f.rect((this.p[0] - this.box.insideMin) * this.box.scale + 1, (this.p[1] - this.box.insideMin) * this.box.scale + 1, g * 2, g * 2);
        f.closePath();
        f.fill()
    };
    this.update = function() {}
};
try {
    if (top.location != location) {
        var relocateGame = function() {
            var b = window.location.href;
            var a = b.split("/")[2];
            window.location = "http://gopherwoodstudios.com/w/?g=" + a
        };
        try {
            document.domain = /(\w+)(.\w+)?$/.exec(location.hostname)[0];
            if (parent.document.domain != document.domain) {
                relocateGame()
            }
        } catch (e) {
            relocateGame()
        }
    }
} catch (e) {};