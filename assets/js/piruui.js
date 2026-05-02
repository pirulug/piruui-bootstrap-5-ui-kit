(() => {
  var t = {
      23() {
        document.addEventListener("DOMContentLoaded", function () {
          var t = document.querySelector(".back-to-top");
          t &&
            (window.addEventListener("scroll", function () {
              window.scrollY > 300
                ? ((t.style.display = "block"),
                  (t.style.transition = "opacity 0.6s"),
                  (t.style.opacity = "1"))
                : ((t.style.opacity = "0"),
                  setTimeout(function () {
                    window.scrollY <= 300 && (t.style.display = "none");
                  }, 600));
            }),
            t.addEventListener("click", function (t) {
              (t.preventDefault(),
                window.scrollTo({ top: 0, behavior: "smooth" }));
            }));
        });
      },
      973() {
        !(function () {
          "use strict";
          var t = function () {
              var t = localStorage.getItem("theme");
              return (
                t ||
                (window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light")
              );
            },
            e = function (t) {
              document.documentElement.setAttribute("data-bs-theme", t);
            },
            i = function (t) {
              document
                .querySelectorAll(".theme-icon-active")
                .forEach(function (e) {
                  "light" === t
                    ? (e.innerHTML =
                        '\n<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>')
                    : "dark" === t &&
                      (e.innerHTML =
                        '\n<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>');
                });
            },
            n = function () {
              t();
              var n =
                "light" ===
                document.documentElement.getAttribute("data-bs-theme")
                  ? "dark"
                  : "light";
              (document.body.classList.add("piru-theme-switching"),
                localStorage.setItem("theme", n),
                e(n),
                i(n),
                window.setTimeout(function () {
                  document.body.classList.remove("piru-theme-switching");
                }, 50));
            };
          window.addEventListener("DOMContentLoaded", function () {
            var s = t();
            (e(s),
              i(s),
              document
                .querySelectorAll("#bd-theme-toggle, #bd-theme-toggle-mobile")
                .forEach(function (t) {
                  t.addEventListener("click", n);
                }));
          });
        })();
      },
      50() {
        !(function () {
          "use strict";
          document.addEventListener("DOMContentLoaded", function () {
            var t = document.querySelector(".piru-nav-toggle"),
              e = document.querySelector(".piru-nav-menu"),
              i = document.body;
            if (t && e) {
              (t.addEventListener("click", function () {
                (t.classList.toggle("is-active"),
                  e.classList.toggle("is-active"),
                  i.classList.toggle("overflow-hidden"));
              }),
                e.addEventListener("click", function (n) {
                  var s = n.target.closest("a");
                  s &&
                    !s.closest(".piru-nav-dropdown") &&
                    window.innerWidth < 992 &&
                    (t.classList.remove("is-active"),
                    e.classList.remove("is-active"),
                    i.classList.remove("overflow-hidden"));
                }));
              var n = e.querySelectorAll(".piru-nav-dropdown");
              n.forEach(function (t) {
                var e = t.querySelector(".piru-nav-link"),
                  i = t.querySelector(".piru-dropdown-panel");
                e &&
                  i &&
                  e.addEventListener("click", function (s) {
                    var o;
                    window.innerWidth < 992 &&
                      (s.preventDefault(),
                      s.stopPropagation(),
                      n.forEach(function (e) {
                        var i, n;
                        e !== t &&
                          (null ===
                            (i = e.querySelector(".piru-dropdown-panel")) ||
                            void 0 === i ||
                            i.classList.remove("is-visible"),
                          null === (n = e.querySelector(".bi-chevron-down")) ||
                            void 0 === n ||
                            n.classList.remove("rotate-180"));
                      }),
                      i.classList.toggle("is-visible"),
                      null === (o = e.querySelector(".bi-chevron-down")) ||
                        void 0 === o ||
                        o.classList.toggle("rotate-180"));
                  });
              });
            }
            var s = document.getElementById("openSearch"),
              o = document.getElementById("closeSearch"),
              r = document.getElementById("piruSearchOverlay"),
              a = document.getElementById("piruSearchInput");
            s &&
              r &&
              (s.addEventListener("click", function () {
                (r.classList.add("is-active"),
                  setTimeout(function () {
                    return null == a ? void 0 : a.focus();
                  }, 300));
              }),
              o.addEventListener("click", function () {
                r.classList.remove("is-active");
              }),
              document.addEventListener("keydown", function (t) {
                "Escape" === t.key && r.classList.remove("is-active");
              }));
            var l = document.querySelector(".piru-nav-main"),
              c = document.querySelector(".piru-nav-topbar"),
              d = function () {
                if (l) {
                  var t = window.innerWidth >= 992,
                    e = c && t ? c.offsetHeight : 0;
                  window.scrollY > e
                    ? l.classList.add("nav-scrolled")
                    : l.classList.remove("nav-scrolled");
                }
              };
            (window.addEventListener("scroll", d),
              d(),
              window.addEventListener("resize", function () {
                window.innerWidth >= 992 &&
                  (null == t || t.classList.remove("is-active"),
                  null == e || e.classList.remove("is-active"),
                  i.classList.remove("overflow-hidden"),
                  null == e ||
                    e
                      .querySelectorAll(".piru-dropdown-panel")
                      .forEach(function (t) {
                        return t.classList.remove("is-visible");
                      }));
              }));
          });
        })();
      },
      736() {
        document.addEventListener("DOMContentLoaded", function () {
          document
            .querySelectorAll("[data-pr-toggle-password]")
            .forEach(function (t) {
              t.addEventListener("click", function () {
                var e = t.getAttribute("data-pr-toggle-password"),
                  i = e
                    ? document.getElementById(e)
                    : t
                        .closest(".input-group")
                        .querySelector(
                          'input[type="password"], input[type="text"]',
                        );
                if (i) {
                  var n = t.querySelector("i");
                  "password" === i.type
                    ? ((i.type = "text"),
                      n && n.classList.replace("bi-eye", "bi-eye-slash"))
                    : ((i.type = "password"),
                      n && n.classList.replace("bi-eye-slash", "bi-eye"));
                }
              });
            });
        });
      },
    },
    e = {};
  function i(n) {
    var s = e[n];
    if (void 0 !== s) return s.exports;
    var o = (e[n] = { exports: {} });
    return (t[n](o, o.exports, i), o.exports);
  }
  ((i.d = (t, e) => {
    for (var n in e)
      i.o(e, n) &&
        !i.o(t, n) &&
        Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
  }),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (i.r = (t) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    }),
    (() => {
      "use strict";
      var t = {};
      (i.r(t),
        i.d(t, {
          afterMain: () => E,
          afterRead: () => b,
          afterWrite: () => C,
          applyStyles: () => $,
          arrow: () => J,
          auto: () => a,
          basePlacements: () => l,
          beforeMain: () => y,
          beforeRead: () => _,
          beforeWrite: () => A,
          bottom: () => s,
          clippingParents: () => h,
          computeStyles: () => it,
          createPopper: () => $t,
          createPopperBase: () => Dt,
          createPopperLite: () => It,
          detectOverflow: () => vt,
          end: () => d,
          eventListeners: () => st,
          flip: () => bt,
          hide: () => Et,
          left: () => r,
          main: () => w,
          modifierPhases: () => x,
          offset: () => At,
          placements: () => g,
          popper: () => f,
          popperGenerator: () => St,
          popperOffsets: () => Tt,
          preventOverflow: () => Ct,
          read: () => v,
          reference: () => p,
          right: () => o,
          start: () => c,
          top: () => n,
          variationPlacements: () => m,
          viewport: () => u,
          write: () => T,
        }));
      var e = {};
      (i.r(e),
        i.d(e, {
          Alert: () => ke,
          Button: () => Se,
          Carousel: () => di,
          Collapse: () => Ti,
          Dropdown: () => Xi,
          Modal: () => Dn,
          Offcanvas: () => Xn,
          Popover: () => ws,
          ScrollSpy: () => $s,
          Tab: () => eo,
          Toast: () => _o,
          Tooltip: () => gs,
        }));
      var n = "top",
        s = "bottom",
        o = "right",
        r = "left",
        a = "auto",
        l = [n, s, o, r],
        c = "start",
        d = "end",
        h = "clippingParents",
        u = "viewport",
        f = "popper",
        p = "reference",
        m = l.reduce(function (t, e) {
          return t.concat([e + "-" + c, e + "-" + d]);
        }, []),
        g = [].concat(l, [a]).reduce(function (t, e) {
          return t.concat([e, e + "-" + c, e + "-" + d]);
        }, []),
        _ = "beforeRead",
        v = "read",
        b = "afterRead",
        y = "beforeMain",
        w = "main",
        E = "afterMain",
        A = "beforeWrite",
        T = "write",
        C = "afterWrite",
        x = [_, v, b, y, w, E, A, T, C];
      function O(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
      }
      function k(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return (e && e.defaultView) || window;
        }
        return t;
      }
      function L(t) {
        return t instanceof k(t).Element || t instanceof Element;
      }
      function S(t) {
        return t instanceof k(t).HTMLElement || t instanceof HTMLElement;
      }
      function D(t) {
        return (
          "undefined" != typeof ShadowRoot &&
          (t instanceof k(t).ShadowRoot || t instanceof ShadowRoot)
        );
      }
      const $ = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
          var e = t.state;
          Object.keys(e.elements).forEach(function (t) {
            var i = e.styles[t] || {},
              n = e.attributes[t] || {},
              s = e.elements[t];
            S(s) &&
              O(s) &&
              (Object.assign(s.style, i),
              Object.keys(n).forEach(function (t) {
                var e = n[t];
                !1 === e
                  ? s.removeAttribute(t)
                  : s.setAttribute(t, !0 === e ? "" : e);
              }));
          });
        },
        effect: function (t) {
          var e = t.state,
            i = {
              popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(e.elements.popper.style, i.popper),
            (e.styles = i),
            e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
            function () {
              Object.keys(e.elements).forEach(function (t) {
                var n = e.elements[t],
                  s = e.attributes[t] || {},
                  o = Object.keys(
                    e.styles.hasOwnProperty(t) ? e.styles[t] : i[t],
                  ).reduce(function (t, e) {
                    return ((t[e] = ""), t);
                  }, {});
                S(n) &&
                  O(n) &&
                  (Object.assign(n.style, o),
                  Object.keys(s).forEach(function (t) {
                    n.removeAttribute(t);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
      function I(t) {
        return t.split("-")[0];
      }
      var N = Math.max,
        P = Math.min,
        M = Math.round;
      function j() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands)
          ? t.brands
              .map(function (t) {
                return t.brand + "/" + t.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function F() {
        return !/^((?!chrome|android).)*safari/i.test(j());
      }
      function H(t, e, i) {
        (void 0 === e && (e = !1), void 0 === i && (i = !1));
        var n = t.getBoundingClientRect(),
          s = 1,
          o = 1;
        e &&
          S(t) &&
          ((s = (t.offsetWidth > 0 && M(n.width) / t.offsetWidth) || 1),
          (o = (t.offsetHeight > 0 && M(n.height) / t.offsetHeight) || 1));
        var r = (L(t) ? k(t) : window).visualViewport,
          a = !F() && i,
          l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
          c = (n.top + (a && r ? r.offsetTop : 0)) / o,
          d = n.width / s,
          h = n.height / o;
        return {
          width: d,
          height: h,
          top: c,
          right: l + d,
          bottom: c + h,
          left: l,
          x: l,
          y: c,
        };
      }
      function q(t) {
        var e = H(t),
          i = t.offsetWidth,
          n = t.offsetHeight;
        return (
          Math.abs(e.width - i) <= 1 && (i = e.width),
          Math.abs(e.height - n) <= 1 && (n = e.height),
          { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
        );
      }
      function B(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && D(i)) {
          var n = e;
          do {
            if (n && t.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function W(t) {
        return k(t).getComputedStyle(t);
      }
      function z(t) {
        return ["table", "td", "th"].indexOf(O(t)) >= 0;
      }
      function R(t) {
        return ((L(t) ? t.ownerDocument : t.document) || window.document)
          .documentElement;
      }
      function V(t) {
        return "html" === O(t)
          ? t
          : t.assignedSlot || t.parentNode || (D(t) ? t.host : null) || R(t);
      }
      function Y(t) {
        return S(t) && "fixed" !== W(t).position ? t.offsetParent : null;
      }
      function K(t) {
        for (var e = k(t), i = Y(t); i && z(i) && "static" === W(i).position; )
          i = Y(i);
        return i &&
          ("html" === O(i) || ("body" === O(i) && "static" === W(i).position))
          ? e
          : i ||
              (function (t) {
                var e = /firefox/i.test(j());
                if (/Trident/i.test(j()) && S(t) && "fixed" === W(t).position)
                  return null;
                var i = V(t);
                for (
                  D(i) && (i = i.host);
                  S(i) && ["html", "body"].indexOf(O(i)) < 0;
                ) {
                  var n = W(i);
                  if (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    "paint" === n.contain ||
                    -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                    (e && "filter" === n.willChange) ||
                    (e && n.filter && "none" !== n.filter)
                  )
                    return i;
                  i = i.parentNode;
                }
                return null;
              })(t) ||
              e;
      }
      function Q(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
      }
      function X(t, e, i) {
        return N(t, P(e, i));
      }
      function U(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
      }
      function G(t, e) {
        return e.reduce(function (e, i) {
          return ((e[i] = t), e);
        }, {});
      }
      const J = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e,
            i = t.state,
            a = t.name,
            c = t.options,
            d = i.elements.arrow,
            h = i.modifiersData.popperOffsets,
            u = I(i.placement),
            f = Q(u),
            p = [r, o].indexOf(u) >= 0 ? "height" : "width";
          if (d && h) {
            var m = (function (t, e) {
                return U(
                  "number" !=
                    typeof (t =
                      "function" == typeof t
                        ? t(
                            Object.assign({}, e.rects, {
                              placement: e.placement,
                            }),
                          )
                        : t)
                    ? t
                    : G(t, l),
                );
              })(c.padding, i),
              g = q(d),
              _ = "y" === f ? n : r,
              v = "y" === f ? s : o,
              b =
                i.rects.reference[p] +
                i.rects.reference[f] -
                h[f] -
                i.rects.popper[p],
              y = h[f] - i.rects.reference[f],
              w = K(d),
              E = w
                ? "y" === f
                  ? w.clientHeight || 0
                  : w.clientWidth || 0
                : 0,
              A = b / 2 - y / 2,
              T = m[_],
              C = E - g[p] - m[v],
              x = E / 2 - g[p] / 2 + A,
              O = X(T, x, C),
              k = f;
            i.modifiersData[a] =
              (((e = {})[k] = O), (e.centerOffset = O - x), e);
          }
        },
        effect: function (t) {
          var e = t.state,
            i = t.options.element,
            n = void 0 === i ? "[data-popper-arrow]" : i;
          null != n &&
            ("string" != typeof n ||
              (n = e.elements.popper.querySelector(n))) &&
            B(e.elements.popper, n) &&
            (e.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Z(t) {
        return t.split("-")[1];
      }
      var tt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function et(t) {
        var e,
          i = t.popper,
          a = t.popperRect,
          l = t.placement,
          c = t.variation,
          h = t.offsets,
          u = t.position,
          f = t.gpuAcceleration,
          p = t.adaptive,
          m = t.roundOffsets,
          g = t.isFixed,
          _ = h.x,
          v = void 0 === _ ? 0 : _,
          b = h.y,
          y = void 0 === b ? 0 : b,
          w = "function" == typeof m ? m({ x: v, y }) : { x: v, y };
        ((v = w.x), (y = w.y));
        var E = h.hasOwnProperty("x"),
          A = h.hasOwnProperty("y"),
          T = r,
          C = n,
          x = window;
        if (p) {
          var O = K(i),
            L = "clientHeight",
            S = "clientWidth";
          if (
            (O === k(i) &&
              "static" !== W((O = R(i))).position &&
              "absolute" === u &&
              ((L = "scrollHeight"), (S = "scrollWidth")),
            l === n || ((l === r || l === o) && c === d))
          )
            ((C = s),
              (y -=
                (g && O === x && x.visualViewport
                  ? x.visualViewport.height
                  : O[L]) - a.height),
              (y *= f ? 1 : -1));
          if (l === r || ((l === n || l === s) && c === d))
            ((T = o),
              (v -=
                (g && O === x && x.visualViewport
                  ? x.visualViewport.width
                  : O[S]) - a.width),
              (v *= f ? 1 : -1));
        }
        var D,
          $ = Object.assign({ position: u }, p && tt),
          I =
            !0 === m
              ? (function (t, e) {
                  var i = t.x,
                    n = t.y,
                    s = e.devicePixelRatio || 1;
                  return { x: M(i * s) / s || 0, y: M(n * s) / s || 0 };
                })({ x: v, y }, k(i))
              : { x: v, y };
        return (
          (v = I.x),
          (y = I.y),
          f
            ? Object.assign(
                {},
                $,
                (((D = {})[C] = A ? "0" : ""),
                (D[T] = E ? "0" : ""),
                (D.transform =
                  (x.devicePixelRatio || 1) <= 1
                    ? "translate(" + v + "px, " + y + "px)"
                    : "translate3d(" + v + "px, " + y + "px, 0)"),
                D),
              )
            : Object.assign(
                {},
                $,
                (((e = {})[C] = A ? y + "px" : ""),
                (e[T] = E ? v + "px" : ""),
                (e.transform = ""),
                e),
              )
        );
      }
      const it = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
          var e = t.state,
            i = t.options,
            n = i.gpuAcceleration,
            s = void 0 === n || n,
            o = i.adaptive,
            r = void 0 === o || o,
            a = i.roundOffsets,
            l = void 0 === a || a,
            c = {
              placement: I(e.placement),
              variation: Z(e.placement),
              popper: e.elements.popper,
              popperRect: e.rects.popper,
              gpuAcceleration: s,
              isFixed: "fixed" === e.options.strategy,
            };
          (null != e.modifiersData.popperOffsets &&
            (e.styles.popper = Object.assign(
              {},
              e.styles.popper,
              et(
                Object.assign({}, c, {
                  offsets: e.modifiersData.popperOffsets,
                  position: e.options.strategy,
                  adaptive: r,
                  roundOffsets: l,
                }),
              ),
            )),
            null != e.modifiersData.arrow &&
              (e.styles.arrow = Object.assign(
                {},
                e.styles.arrow,
                et(
                  Object.assign({}, c, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l,
                  }),
                ),
              )),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-placement": e.placement,
            })));
        },
        data: {},
      };
      var nt = { passive: !0 };
      const st = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (t) {
          var e = t.state,
            i = t.instance,
            n = t.options,
            s = n.scroll,
            o = void 0 === s || s,
            r = n.resize,
            a = void 0 === r || r,
            l = k(e.elements.popper),
            c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
          return (
            o &&
              c.forEach(function (t) {
                t.addEventListener("scroll", i.update, nt);
              }),
            a && l.addEventListener("resize", i.update, nt),
            function () {
              (o &&
                c.forEach(function (t) {
                  t.removeEventListener("scroll", i.update, nt);
                }),
                a && l.removeEventListener("resize", i.update, nt));
            }
          );
        },
        data: {},
      };
      var ot = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function rt(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return ot[t];
        });
      }
      var at = { start: "end", end: "start" };
      function lt(t) {
        return t.replace(/start|end/g, function (t) {
          return at[t];
        });
      }
      function ct(t) {
        var e = k(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function dt(t) {
        return H(R(t)).left + ct(t).scrollLeft;
      }
      function ht(t) {
        var e = W(t),
          i = e.overflow,
          n = e.overflowX,
          s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
      }
      function ut(t) {
        return ["html", "body", "#document"].indexOf(O(t)) >= 0
          ? t.ownerDocument.body
          : S(t) && ht(t)
            ? t
            : ut(V(t));
      }
      function ft(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = ut(t),
          s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
          o = k(n),
          r = s ? [o].concat(o.visualViewport || [], ht(n) ? n : []) : n,
          a = e.concat(r);
        return s ? a : a.concat(ft(V(r)));
      }
      function pt(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height,
        });
      }
      function mt(t, e, i) {
        return e === u
          ? pt(
              (function (t, e) {
                var i = k(t),
                  n = R(t),
                  s = i.visualViewport,
                  o = n.clientWidth,
                  r = n.clientHeight,
                  a = 0,
                  l = 0;
                if (s) {
                  ((o = s.width), (r = s.height));
                  var c = F();
                  (c || (!c && "fixed" === e)) &&
                    ((a = s.offsetLeft), (l = s.offsetTop));
                }
                return { width: o, height: r, x: a + dt(t), y: l };
              })(t, i),
            )
          : L(e)
            ? (function (t, e) {
                var i = H(t, !1, "fixed" === e);
                return (
                  (i.top = i.top + t.clientTop),
                  (i.left = i.left + t.clientLeft),
                  (i.bottom = i.top + t.clientHeight),
                  (i.right = i.left + t.clientWidth),
                  (i.width = t.clientWidth),
                  (i.height = t.clientHeight),
                  (i.x = i.left),
                  (i.y = i.top),
                  i
                );
              })(e, i)
            : pt(
                (function (t) {
                  var e,
                    i = R(t),
                    n = ct(t),
                    s = null == (e = t.ownerDocument) ? void 0 : e.body,
                    o = N(
                      i.scrollWidth,
                      i.clientWidth,
                      s ? s.scrollWidth : 0,
                      s ? s.clientWidth : 0,
                    ),
                    r = N(
                      i.scrollHeight,
                      i.clientHeight,
                      s ? s.scrollHeight : 0,
                      s ? s.clientHeight : 0,
                    ),
                    a = -n.scrollLeft + dt(t),
                    l = -n.scrollTop;
                  return (
                    "rtl" === W(s || i).direction &&
                      (a += N(i.clientWidth, s ? s.clientWidth : 0) - o),
                    { width: o, height: r, x: a, y: l }
                  );
                })(R(t)),
              );
      }
      function gt(t, e, i, n) {
        var s =
            "clippingParents" === e
              ? (function (t) {
                  var e = ft(V(t)),
                    i =
                      ["absolute", "fixed"].indexOf(W(t).position) >= 0 && S(t)
                        ? K(t)
                        : t;
                  return L(i)
                    ? e.filter(function (t) {
                        return L(t) && B(t, i) && "body" !== O(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(
            function (e, i) {
              var s = mt(t, i, n);
              return (
                (e.top = N(s.top, e.top)),
                (e.right = P(s.right, e.right)),
                (e.bottom = P(s.bottom, e.bottom)),
                (e.left = N(s.left, e.left)),
                e
              );
            },
            mt(t, r, n),
          );
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      }
      function _t(t) {
        var e,
          i = t.reference,
          a = t.element,
          l = t.placement,
          h = l ? I(l) : null,
          u = l ? Z(l) : null,
          f = i.x + i.width / 2 - a.width / 2,
          p = i.y + i.height / 2 - a.height / 2;
        switch (h) {
          case n:
            e = { x: f, y: i.y - a.height };
            break;
          case s:
            e = { x: f, y: i.y + i.height };
            break;
          case o:
            e = { x: i.x + i.width, y: p };
            break;
          case r:
            e = { x: i.x - a.width, y: p };
            break;
          default:
            e = { x: i.x, y: i.y };
        }
        var m = h ? Q(h) : null;
        if (null != m) {
          var g = "y" === m ? "height" : "width";
          switch (u) {
            case c:
              e[m] = e[m] - (i[g] / 2 - a[g] / 2);
              break;
            case d:
              e[m] = e[m] + (i[g] / 2 - a[g] / 2);
          }
        }
        return e;
      }
      function vt(t, e) {
        void 0 === e && (e = {});
        var i = e,
          r = i.placement,
          a = void 0 === r ? t.placement : r,
          c = i.strategy,
          d = void 0 === c ? t.strategy : c,
          m = i.boundary,
          g = void 0 === m ? h : m,
          _ = i.rootBoundary,
          v = void 0 === _ ? u : _,
          b = i.elementContext,
          y = void 0 === b ? f : b,
          w = i.altBoundary,
          E = void 0 !== w && w,
          A = i.padding,
          T = void 0 === A ? 0 : A,
          C = U("number" != typeof T ? T : G(T, l)),
          x = y === f ? p : f,
          O = t.rects.popper,
          k = t.elements[E ? x : y],
          S = gt(L(k) ? k : k.contextElement || R(t.elements.popper), g, v, d),
          D = H(t.elements.reference),
          $ = _t({
            reference: D,
            element: O,
            strategy: "absolute",
            placement: a,
          }),
          I = pt(Object.assign({}, O, $)),
          N = y === f ? I : D,
          P = {
            top: S.top - N.top + C.top,
            bottom: N.bottom - S.bottom + C.bottom,
            left: S.left - N.left + C.left,
            right: N.right - S.right + C.right,
          },
          M = t.modifiersData.offset;
        if (y === f && M) {
          var j = M[a];
          Object.keys(P).forEach(function (t) {
            var e = [o, s].indexOf(t) >= 0 ? 1 : -1,
              i = [n, s].indexOf(t) >= 0 ? "y" : "x";
            P[t] += j[i] * e;
          });
        }
        return P;
      }
      const bt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            i = t.options,
            d = t.name;
          if (!e.modifiersData[d]._skip) {
            for (
              var h = i.mainAxis,
                u = void 0 === h || h,
                f = i.altAxis,
                p = void 0 === f || f,
                _ = i.fallbackPlacements,
                v = i.padding,
                b = i.boundary,
                y = i.rootBoundary,
                w = i.altBoundary,
                E = i.flipVariations,
                A = void 0 === E || E,
                T = i.allowedAutoPlacements,
                C = e.options.placement,
                x = I(C),
                O =
                  _ ||
                  (x === C || !A
                    ? [rt(C)]
                    : (function (t) {
                        if (I(t) === a) return [];
                        var e = rt(t);
                        return [lt(t), e, lt(e)];
                      })(C)),
                k = [C].concat(O).reduce(function (t, i) {
                  return t.concat(
                    I(i) === a
                      ? (function (t, e) {
                          void 0 === e && (e = {});
                          var i = e,
                            n = i.placement,
                            s = i.boundary,
                            o = i.rootBoundary,
                            r = i.padding,
                            a = i.flipVariations,
                            c = i.allowedAutoPlacements,
                            d = void 0 === c ? g : c,
                            h = Z(n),
                            u = h
                              ? a
                                ? m
                                : m.filter(function (t) {
                                    return Z(t) === h;
                                  })
                              : l,
                            f = u.filter(function (t) {
                              return d.indexOf(t) >= 0;
                            });
                          0 === f.length && (f = u);
                          var p = f.reduce(function (e, i) {
                            return (
                              (e[i] = vt(t, {
                                placement: i,
                                boundary: s,
                                rootBoundary: o,
                                padding: r,
                              })[I(i)]),
                              e
                            );
                          }, {});
                          return Object.keys(p).sort(function (t, e) {
                            return p[t] - p[e];
                          });
                        })(e, {
                          placement: i,
                          boundary: b,
                          rootBoundary: y,
                          padding: v,
                          flipVariations: A,
                          allowedAutoPlacements: T,
                        })
                      : i,
                  );
                }, []),
                L = e.rects.reference,
                S = e.rects.popper,
                D = new Map(),
                $ = !0,
                N = k[0],
                P = 0;
              P < k.length;
              P++
            ) {
              var M = k[P],
                j = I(M),
                F = Z(M) === c,
                H = [n, s].indexOf(j) >= 0,
                q = H ? "width" : "height",
                B = vt(e, {
                  placement: M,
                  boundary: b,
                  rootBoundary: y,
                  altBoundary: w,
                  padding: v,
                }),
                W = H ? (F ? o : r) : F ? s : n;
              L[q] > S[q] && (W = rt(W));
              var z = rt(W),
                R = [];
              if (
                (u && R.push(B[j] <= 0),
                p && R.push(B[W] <= 0, B[z] <= 0),
                R.every(function (t) {
                  return t;
                }))
              ) {
                ((N = M), ($ = !1));
                break;
              }
              D.set(M, R);
            }
            if ($)
              for (
                var V = function (t) {
                    var e = k.find(function (e) {
                      var i = D.get(e);
                      if (i)
                        return i.slice(0, t).every(function (t) {
                          return t;
                        });
                    });
                    if (e) return ((N = e), "break");
                  },
                  Y = A ? 3 : 1;
                Y > 0;
                Y--
              ) {
                if ("break" === V(Y)) break;
              }
            e.placement !== N &&
              ((e.modifiersData[d]._skip = !0),
              (e.placement = N),
              (e.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function yt(t, e, i) {
        return (
          void 0 === i && (i = { x: 0, y: 0 }),
          {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x,
          }
        );
      }
      function wt(t) {
        return [n, o, s, r].some(function (e) {
          return t[e] >= 0;
        });
      }
      const Et = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
          var e = t.state,
            i = t.name,
            n = e.rects.reference,
            s = e.rects.popper,
            o = e.modifiersData.preventOverflow,
            r = vt(e, { elementContext: "reference" }),
            a = vt(e, { altBoundary: !0 }),
            l = yt(r, n),
            c = yt(a, s, o),
            d = wt(l),
            h = wt(c);
          ((e.modifiersData[i] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: d,
            hasPopperEscaped: h,
          }),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, {
              "data-popper-reference-hidden": d,
              "data-popper-escaped": h,
            })));
        },
      };
      const At = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
          var e = t.state,
            i = t.options,
            s = t.name,
            a = i.offset,
            l = void 0 === a ? [0, 0] : a,
            c = g.reduce(function (t, i) {
              return (
                (t[i] = (function (t, e, i) {
                  var s = I(t),
                    a = [r, n].indexOf(s) >= 0 ? -1 : 1,
                    l =
                      "function" == typeof i
                        ? i(Object.assign({}, e, { placement: t }))
                        : i,
                    c = l[0],
                    d = l[1];
                  return (
                    (c = c || 0),
                    (d = (d || 0) * a),
                    [r, o].indexOf(s) >= 0 ? { x: d, y: c } : { x: c, y: d }
                  );
                })(i, e.rects, l)),
                t
              );
            }, {}),
            d = c[e.placement],
            h = d.x,
            u = d.y;
          (null != e.modifiersData.popperOffsets &&
            ((e.modifiersData.popperOffsets.x += h),
            (e.modifiersData.popperOffsets.y += u)),
            (e.modifiersData[s] = c));
        },
      };
      const Tt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
          var e = t.state,
            i = t.name;
          e.modifiersData[i] = _t({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement,
          });
        },
        data: {},
      };
      const Ct = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
          var e = t.state,
            i = t.options,
            a = t.name,
            l = i.mainAxis,
            d = void 0 === l || l,
            h = i.altAxis,
            u = void 0 !== h && h,
            f = i.boundary,
            p = i.rootBoundary,
            m = i.altBoundary,
            g = i.padding,
            _ = i.tether,
            v = void 0 === _ || _,
            b = i.tetherOffset,
            y = void 0 === b ? 0 : b,
            w = vt(e, {
              boundary: f,
              rootBoundary: p,
              padding: g,
              altBoundary: m,
            }),
            E = I(e.placement),
            A = Z(e.placement),
            T = !A,
            C = Q(E),
            x = "x" === C ? "y" : "x",
            O = e.modifiersData.popperOffsets,
            k = e.rects.reference,
            L = e.rects.popper,
            S =
              "function" == typeof y
                ? y(Object.assign({}, e.rects, { placement: e.placement }))
                : y,
            D =
              "number" == typeof S
                ? { mainAxis: S, altAxis: S }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
            $ = e.modifiersData.offset
              ? e.modifiersData.offset[e.placement]
              : null,
            M = { x: 0, y: 0 };
          if (O) {
            if (d) {
              var j,
                F = "y" === C ? n : r,
                H = "y" === C ? s : o,
                B = "y" === C ? "height" : "width",
                W = O[C],
                z = W + w[F],
                R = W - w[H],
                V = v ? -L[B] / 2 : 0,
                Y = A === c ? k[B] : L[B],
                U = A === c ? -L[B] : -k[B],
                G = e.elements.arrow,
                J = v && G ? q(G) : { width: 0, height: 0 },
                tt = e.modifiersData["arrow#persistent"]
                  ? e.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                et = tt[F],
                it = tt[H],
                nt = X(0, k[B], J[B]),
                st = T
                  ? k[B] / 2 - V - nt - et - D.mainAxis
                  : Y - nt - et - D.mainAxis,
                ot = T
                  ? -k[B] / 2 + V + nt + it + D.mainAxis
                  : U + nt + it + D.mainAxis,
                rt = e.elements.arrow && K(e.elements.arrow),
                at = rt
                  ? "y" === C
                    ? rt.clientTop || 0
                    : rt.clientLeft || 0
                  : 0,
                lt = null != (j = null == $ ? void 0 : $[C]) ? j : 0,
                ct = W + ot - lt,
                dt = X(v ? P(z, W + st - lt - at) : z, W, v ? N(R, ct) : R);
              ((O[C] = dt), (M[C] = dt - W));
            }
            if (u) {
              var ht,
                ut = "x" === C ? n : r,
                ft = "x" === C ? s : o,
                pt = O[x],
                mt = "y" === x ? "height" : "width",
                gt = pt + w[ut],
                _t = pt - w[ft],
                bt = -1 !== [n, r].indexOf(E),
                yt = null != (ht = null == $ ? void 0 : $[x]) ? ht : 0,
                wt = bt ? gt : pt - k[mt] - L[mt] - yt + D.altAxis,
                Et = bt ? pt + k[mt] + L[mt] - yt - D.altAxis : _t,
                At =
                  v && bt
                    ? (function (t, e, i) {
                        var n = X(t, e, i);
                        return n > i ? i : n;
                      })(wt, pt, Et)
                    : X(v ? wt : gt, pt, v ? Et : _t);
              ((O[x] = At), (M[x] = At - pt));
            }
            e.modifiersData[a] = M;
          }
        },
        requiresIfExists: ["offset"],
      };
      function xt(t, e, i) {
        void 0 === i && (i = !1);
        var n,
          s,
          o = S(e),
          r =
            S(e) &&
            (function (t) {
              var e = t.getBoundingClientRect(),
                i = M(e.width) / t.offsetWidth || 1,
                n = M(e.height) / t.offsetHeight || 1;
              return 1 !== i || 1 !== n;
            })(e),
          a = R(e),
          l = H(t, r, i),
          c = { scrollLeft: 0, scrollTop: 0 },
          d = { x: 0, y: 0 };
        return (
          (o || (!o && !i)) &&
            (("body" !== O(e) || ht(a)) &&
              (c =
                (n = e) !== k(n) && S(n)
                  ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
                  : ct(n)),
            S(e)
              ? (((d = H(e, !0)).x += e.clientLeft), (d.y += e.clientTop))
              : a && (d.x = dt(a))),
          {
            x: l.left + c.scrollLeft - d.x,
            y: l.top + c.scrollTop - d.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function Ot(t) {
        var e = new Map(),
          i = new Set(),
          n = [];
        function s(t) {
          (i.add(t.name),
            []
              .concat(t.requires || [], t.requiresIfExists || [])
              .forEach(function (t) {
                if (!i.has(t)) {
                  var n = e.get(t);
                  n && s(n);
                }
              }),
            n.push(t));
        }
        return (
          t.forEach(function (t) {
            e.set(t.name, t);
          }),
          t.forEach(function (t) {
            i.has(t.name) || s(t);
          }),
          n
        );
      }
      var kt = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Lt() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        return !e.some(function (t) {
          return !(t && "function" == typeof t.getBoundingClientRect);
        });
      }
      function St(t) {
        void 0 === t && (t = {});
        var e = t,
          i = e.defaultModifiers,
          n = void 0 === i ? [] : i,
          s = e.defaultOptions,
          o = void 0 === s ? kt : s;
        return function (t, e, i) {
          void 0 === i && (i = o);
          var s,
            r,
            a = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, kt, o),
              modifiersData: {},
              elements: { reference: t, popper: e },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            d = {
              state: a,
              setOptions: function (i) {
                var s = "function" == typeof i ? i(a.options) : i;
                (h(),
                  (a.options = Object.assign({}, o, a.options, s)),
                  (a.scrollParents = {
                    reference: L(t)
                      ? ft(t)
                      : t.contextElement
                        ? ft(t.contextElement)
                        : [],
                    popper: ft(e),
                  }));
                var r,
                  c,
                  u = (function (t) {
                    var e = Ot(t);
                    return x.reduce(function (t, i) {
                      return t.concat(
                        e.filter(function (t) {
                          return t.phase === i;
                        }),
                      );
                    }, []);
                  })(
                    ((r = [].concat(n, a.options.modifiers)),
                    (c = r.reduce(function (t, e) {
                      var i = t[e.name];
                      return (
                        (t[e.name] = i
                          ? Object.assign({}, i, e, {
                              options: Object.assign({}, i.options, e.options),
                              data: Object.assign({}, i.data, e.data),
                            })
                          : e),
                        t
                      );
                    }, {})),
                    Object.keys(c).map(function (t) {
                      return c[t];
                    })),
                  );
                return (
                  (a.orderedModifiers = u.filter(function (t) {
                    return t.enabled;
                  })),
                  a.orderedModifiers.forEach(function (t) {
                    var e = t.name,
                      i = t.options,
                      n = void 0 === i ? {} : i,
                      s = t.effect;
                    if ("function" == typeof s) {
                      var o = s({ state: a, name: e, instance: d, options: n }),
                        r = function () {};
                      l.push(o || r);
                    }
                  }),
                  d.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var t = a.elements,
                    e = t.reference,
                    i = t.popper;
                  if (Lt(e, i)) {
                    ((a.rects = {
                      reference: xt(e, K(i), "fixed" === a.options.strategy),
                      popper: q(i),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (t) {
                        return (a.modifiersData[t.name] = Object.assign(
                          {},
                          t.data,
                        ));
                      }));
                    for (var n = 0; n < a.orderedModifiers.length; n++)
                      if (!0 !== a.reset) {
                        var s = a.orderedModifiers[n],
                          o = s.fn,
                          r = s.options,
                          l = void 0 === r ? {} : r,
                          h = s.name;
                        "function" == typeof o &&
                          (a =
                            o({ state: a, options: l, name: h, instance: d }) ||
                            a);
                      } else ((a.reset = !1), (n = -1));
                  }
                }
              },
              update:
                ((s = function () {
                  return new Promise(function (t) {
                    (d.forceUpdate(), t(a));
                  });
                }),
                function () {
                  return (
                    r ||
                      (r = new Promise(function (t) {
                        Promise.resolve().then(function () {
                          ((r = void 0), t(s()));
                        });
                      })),
                    r
                  );
                }),
              destroy: function () {
                (h(), (c = !0));
              },
            };
          if (!Lt(t, e)) return d;
          function h() {
            (l.forEach(function (t) {
              return t();
            }),
              (l = []));
          }
          return (
            d.setOptions(i).then(function (t) {
              !c && i.onFirstUpdate && i.onFirstUpdate(t);
            }),
            d
          );
        };
      }
      var Dt = St(),
        $t = St({ defaultModifiers: [st, Tt, it, $, At, bt, Ct, J, Et] }),
        It = St({ defaultModifiers: [st, Tt, it, $] });
      /*!
       * Bootstrap v5.3.8 (https://getbootstrap.com/)
       * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
       * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
       */
      const Nt = new Map(),
        Pt = {
          set(t, e, i) {
            Nt.has(t) || Nt.set(t, new Map());
            const n = Nt.get(t);
            n.has(e) || 0 === n.size
              ? n.set(e, i)
              : console.error(
                  `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`,
                );
          },
          get: (t, e) => (Nt.has(t) && Nt.get(t).get(e)) || null,
          remove(t, e) {
            if (!Nt.has(t)) return;
            const i = Nt.get(t);
            (i.delete(e), 0 === i.size && Nt.delete(t));
          },
        },
        Mt = "transitionend",
        jt = (t) => (
          t &&
            window.CSS &&
            window.CSS.escape &&
            (t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)),
          t
        ),
        Ft = (t) =>
          null == t
            ? `${t}`
            : Object.prototype.toString
                .call(t)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase(),
        Ht = (t) => {
          t.dispatchEvent(new Event(Mt));
        },
        qt = (t) =>
          !(!t || "object" != typeof t) &&
          (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        Bt = (t) =>
          qt(t)
            ? t.jquery
              ? t[0]
              : t
            : "string" == typeof t && t.length > 0
              ? document.querySelector(jt(t))
              : null,
        Wt = (t) => {
          if (!qt(t) || 0 === t.getClientRects().length) return !1;
          const e =
              "visible" === getComputedStyle(t).getPropertyValue("visibility"),
            i = t.closest("details:not([open])");
          if (!i) return e;
          if (i !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== i) return !1;
            if (null === e) return !1;
          }
          return e;
        },
        zt = (t) =>
          !t ||
          t.nodeType !== Node.ELEMENT_NODE ||
          !!t.classList.contains("disabled") ||
          (void 0 !== t.disabled
            ? t.disabled
            : t.hasAttribute("disabled") &&
              "false" !== t.getAttribute("disabled")),
        Rt = (t) => {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
          }
          return t instanceof ShadowRoot
            ? t
            : t.parentNode
              ? Rt(t.parentNode)
              : null;
        },
        Vt = () => {},
        Yt = (t) => {
          t.offsetHeight;
        },
        Kt = () =>
          window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
            ? window.jQuery
            : null,
        Qt = [],
        Xt = () => "rtl" === document.documentElement.dir,
        Ut = (t) => {
          var e;
          ((e = () => {
            const e = Kt();
            if (e) {
              const i = t.NAME,
                n = e.fn[i];
              ((e.fn[i] = t.jQueryInterface),
                (e.fn[i].Constructor = t),
                (e.fn[i].noConflict = () => (
                  (e.fn[i] = n),
                  t.jQueryInterface
                )));
            }
          }),
            "loading" === document.readyState
              ? (Qt.length ||
                  document.addEventListener("DOMContentLoaded", () => {
                    for (const t of Qt) t();
                  }),
                Qt.push(e))
              : e());
        },
        Gt = (t, e = [], i = t) => ("function" == typeof t ? t.call(...e) : i),
        Jt = (t, e, i = !0) => {
          if (!i) return void Gt(t);
          const n =
            ((t) => {
              if (!t) return 0;
              let { transitionDuration: e, transitionDelay: i } =
                window.getComputedStyle(t);
              const n = Number.parseFloat(e),
                s = Number.parseFloat(i);
              return n || s
                ? ((e = e.split(",")[0]),
                  (i = i.split(",")[0]),
                  1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
                : 0;
            })(e) + 5;
          let s = !1;
          const o = ({ target: i }) => {
            i === e && ((s = !0), e.removeEventListener(Mt, o), Gt(t));
          };
          (e.addEventListener(Mt, o),
            setTimeout(() => {
              s || Ht(e);
            }, n));
        },
        Zt = (t, e, i, n) => {
          const s = t.length;
          let o = t.indexOf(e);
          return -1 === o
            ? !i && n
              ? t[s - 1]
              : t[0]
            : ((o += i ? 1 : -1),
              n && (o = (o + s) % s),
              t[Math.max(0, Math.min(o, s - 1))]);
        },
        te = /[^.]*(?=\..*)\.|.*/,
        ee = /\..*/,
        ie = /::\d+$/,
        ne = {};
      let se = 1;
      const oe = { mouseenter: "mouseover", mouseleave: "mouseout" },
        re = new Set([
          "click",
          "dblclick",
          "mouseup",
          "mousedown",
          "contextmenu",
          "mousewheel",
          "DOMMouseScroll",
          "mouseover",
          "mouseout",
          "mousemove",
          "selectstart",
          "selectend",
          "keydown",
          "keypress",
          "keyup",
          "orientationchange",
          "touchstart",
          "touchmove",
          "touchend",
          "touchcancel",
          "pointerdown",
          "pointermove",
          "pointerup",
          "pointerleave",
          "pointercancel",
          "gesturestart",
          "gesturechange",
          "gestureend",
          "focus",
          "blur",
          "change",
          "reset",
          "select",
          "submit",
          "focusin",
          "focusout",
          "load",
          "unload",
          "beforeunload",
          "resize",
          "move",
          "DOMContentLoaded",
          "readystatechange",
          "error",
          "abort",
          "scroll",
        ]);
      function ae(t, e) {
        return (e && `${e}::${se++}`) || t.uidEvent || se++;
      }
      function le(t) {
        const e = ae(t);
        return ((t.uidEvent = e), (ne[e] = ne[e] || {}), ne[e]);
      }
      function ce(t, e, i = null) {
        return Object.values(t).find(
          (t) => t.callable === e && t.delegationSelector === i,
        );
      }
      function de(t, e, i) {
        const n = "string" == typeof e,
          s = n ? i : e || i;
        let o = pe(t);
        return (re.has(o) || (o = t), [n, s, o]);
      }
      function he(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = de(e, i, n);
        if (e in oe) {
          const t = (t) =>
            function (e) {
              if (
                !e.relatedTarget ||
                (e.relatedTarget !== e.delegateTarget &&
                  !e.delegateTarget.contains(e.relatedTarget))
              )
                return t.call(this, e);
            };
          r = t(r);
        }
        const l = le(t),
          c = l[a] || (l[a] = {}),
          d = ce(c, r, o ? i : null);
        if (d) return void (d.oneOff = d.oneOff && s);
        const h = ae(r, e.replace(te, "")),
          u = o
            ? (function (t, e, i) {
                return function n(s) {
                  const o = t.querySelectorAll(e);
                  for (let { target: r } = s; r && r !== this; r = r.parentNode)
                    for (const a of o)
                      if (a === r)
                        return (
                          ge(s, { delegateTarget: r }),
                          n.oneOff && me.off(t, s.type, e, i),
                          i.apply(r, [s])
                        );
                };
              })(t, i, r)
            : (function (t, e) {
                return function i(n) {
                  return (
                    ge(n, { delegateTarget: t }),
                    i.oneOff && me.off(t, n.type, e),
                    e.apply(t, [n])
                  );
                };
              })(t, r);
        ((u.delegationSelector = o ? i : null),
          (u.callable = r),
          (u.oneOff = s),
          (u.uidEvent = h),
          (c[h] = u),
          t.addEventListener(a, u, o));
      }
      function ue(t, e, i, n, s) {
        const o = ce(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
      }
      function fe(t, e, i, n) {
        const s = e[i] || {};
        for (const [o, r] of Object.entries(s))
          o.includes(n) && ue(t, e, i, r.callable, r.delegationSelector);
      }
      function pe(t) {
        return ((t = t.replace(ee, "")), oe[t] || t);
      }
      const me = {
        on(t, e, i, n) {
          he(t, e, i, n, !1);
        },
        one(t, e, i, n) {
          he(t, e, i, n, !0);
        },
        off(t, e, i, n) {
          if ("string" != typeof e || !t) return;
          const [s, o, r] = de(e, i, n),
            a = r !== e,
            l = le(t),
            c = l[r] || {},
            d = e.startsWith(".");
          if (void 0 === o) {
            if (d) for (const i of Object.keys(l)) fe(t, l, i, e.slice(1));
            for (const [i, n] of Object.entries(c)) {
              const s = i.replace(ie, "");
              (a && !e.includes(s)) ||
                ue(t, l, r, n.callable, n.delegationSelector);
            }
          } else {
            if (!Object.keys(c).length) return;
            ue(t, l, r, o, s ? i : null);
          }
        },
        trigger(t, e, i) {
          if ("string" != typeof e || !t) return null;
          const n = Kt();
          let s = null,
            o = !0,
            r = !0,
            a = !1;
          e !== pe(e) &&
            n &&
            ((s = n.Event(e, i)),
            n(t).trigger(s),
            (o = !s.isPropagationStopped()),
            (r = !s.isImmediatePropagationStopped()),
            (a = s.isDefaultPrevented()));
          const l = ge(new Event(e, { bubbles: o, cancelable: !0 }), i);
          return (
            a && l.preventDefault(),
            r && t.dispatchEvent(l),
            l.defaultPrevented && s && s.preventDefault(),
            l
          );
        },
      };
      function ge(t, e = {}) {
        for (const [i, n] of Object.entries(e))
          try {
            t[i] = n;
          } catch (e) {
            Object.defineProperty(t, i, { configurable: !0, get: () => n });
          }
        return t;
      }
      function _e(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
          return JSON.parse(decodeURIComponent(t));
        } catch (e) {
          return t;
        }
      }
      function ve(t) {
        return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
      }
      const be = {
        setDataAttribute(t, e, i) {
          t.setAttribute(`data-bs-${ve(e)}`, i);
        },
        removeDataAttribute(t, e) {
          t.removeAttribute(`data-bs-${ve(e)}`);
        },
        getDataAttributes(t) {
          if (!t) return {};
          const e = {},
            i = Object.keys(t.dataset).filter(
              (t) => t.startsWith("bs") && !t.startsWith("bsConfig"),
            );
          for (const n of i) {
            let i = n.replace(/^bs/, "");
            ((i = i.charAt(0).toLowerCase() + i.slice(1)),
              (e[i] = _e(t.dataset[n])));
          }
          return e;
        },
        getDataAttribute: (t, e) => _e(t.getAttribute(`data-bs-${ve(e)}`)),
      };
      class ye {
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error(
            'You have to implement the static method "NAME", for each component!',
          );
        }
        _getConfig(t) {
          return (
            (t = this._mergeConfigObj(t)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          );
        }
        _configAfterMerge(t) {
          return t;
        }
        _mergeConfigObj(t, e) {
          const i = qt(e) ? be.getDataAttribute(e, "config") : {};
          return {
            ...this.constructor.Default,
            ...("object" == typeof i ? i : {}),
            ...(qt(e) ? be.getDataAttributes(e) : {}),
            ...("object" == typeof t ? t : {}),
          };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
          for (const [i, n] of Object.entries(e)) {
            const e = t[i],
              s = qt(e) ? "element" : Ft(e);
            if (!new RegExp(n).test(s))
              throw new TypeError(
                `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${n}".`,
              );
          }
        }
      }
      class we extends ye {
        constructor(t, e) {
          (super(),
            (t = Bt(t)) &&
              ((this._element = t),
              (this._config = this._getConfig(e)),
              Pt.set(this._element, this.constructor.DATA_KEY, this)));
        }
        dispose() {
          (Pt.remove(this._element, this.constructor.DATA_KEY),
            me.off(this._element, this.constructor.EVENT_KEY));
          for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
          Jt(t, e, i);
        }
        _getConfig(t) {
          return (
            (t = this._mergeConfigObj(t, this._element)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          );
        }
        static getInstance(t) {
          return Pt.get(Bt(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
          return (
            this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
          );
        }
        static get VERSION() {
          return "5.3.8";
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
          return `${t}${this.EVENT_KEY}`;
        }
      }
      const Ee = (t) => {
          let e = t.getAttribute("data-bs-target");
          if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
            (i.includes("#") &&
              !i.startsWith("#") &&
              (i = `#${i.split("#")[1]}`),
              (e = i && "#" !== i ? i.trim() : null));
          }
          return e
            ? e
                .split(",")
                .map((t) => jt(t))
                .join(",")
            : null;
        },
        Ae = {
          find: (t, e = document.documentElement) =>
            [].concat(...Element.prototype.querySelectorAll.call(e, t)),
          findOne: (t, e = document.documentElement) =>
            Element.prototype.querySelector.call(e, t),
          children: (t, e) =>
            [].concat(...t.children).filter((t) => t.matches(e)),
          parents(t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for (; n; ) (i.push(n), (n = n.parentNode.closest(e)));
            return i;
          },
          prev(t, e) {
            let i = t.previousElementSibling;
            for (; i; ) {
              if (i.matches(e)) return [i];
              i = i.previousElementSibling;
            }
            return [];
          },
          next(t, e) {
            let i = t.nextElementSibling;
            for (; i; ) {
              if (i.matches(e)) return [i];
              i = i.nextElementSibling;
            }
            return [];
          },
          focusableChildren(t) {
            const e = [
              "a",
              "button",
              "input",
              "textarea",
              "select",
              "details",
              "[tabindex]",
              '[contenteditable="true"]',
            ]
              .map((t) => `${t}:not([tabindex^="-"])`)
              .join(",");
            return this.find(e, t).filter((t) => !zt(t) && Wt(t));
          },
          getSelectorFromElement(t) {
            const e = Ee(t);
            return e && Ae.findOne(e) ? e : null;
          },
          getElementFromSelector(t) {
            const e = Ee(t);
            return e ? Ae.findOne(e) : null;
          },
          getMultipleElementsFromSelector(t) {
            const e = Ee(t);
            return e ? Ae.find(e) : [];
          },
        },
        Te = (t, e = "hide") => {
          const i = `click.dismiss${t.EVENT_KEY}`,
            n = t.NAME;
          me.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
            if (
              (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
              zt(this))
            )
              return;
            const s = Ae.getElementFromSelector(this) || this.closest(`.${n}`);
            t.getOrCreateInstance(s)[e]();
          });
        },
        Ce = ".bs.alert",
        xe = `close${Ce}`,
        Oe = `closed${Ce}`;
      class ke extends we {
        static get NAME() {
          return "alert";
        }
        close() {
          if (me.trigger(this._element, xe).defaultPrevented) return;
          this._element.classList.remove("show");
          const t = this._element.classList.contains("fade");
          this._queueCallback(() => this._destroyElement(), this._element, t);
        }
        _destroyElement() {
          (this._element.remove(),
            me.trigger(this._element, Oe),
            this.dispose());
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = ke.getOrCreateInstance(this);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t](this);
            }
          });
        }
      }
      (Te(ke, "close"), Ut(ke));
      const Le = '[data-bs-toggle="button"]';
      class Se extends we {
        static get NAME() {
          return "button";
        }
        toggle() {
          this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle("active"),
          );
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Se.getOrCreateInstance(this);
            "toggle" === t && e[t]();
          });
        }
      }
      (me.on(document, "click.bs.button.data-api", Le, (t) => {
        t.preventDefault();
        const e = t.target.closest(Le);
        Se.getOrCreateInstance(e).toggle();
      }),
        Ut(Se));
      const De = ".bs.swipe",
        $e = `touchstart${De}`,
        Ie = `touchmove${De}`,
        Ne = `touchend${De}`,
        Pe = `pointerdown${De}`,
        Me = `pointerup${De}`,
        je = { endCallback: null, leftCallback: null, rightCallback: null },
        Fe = {
          endCallback: "(function|null)",
          leftCallback: "(function|null)",
          rightCallback: "(function|null)",
        };
      class He extends ye {
        constructor(t, e) {
          (super(),
            (this._element = t),
            t &&
              He.isSupported() &&
              ((this._config = this._getConfig(e)),
              (this._deltaX = 0),
              (this._supportPointerEvents = Boolean(window.PointerEvent)),
              this._initEvents()));
        }
        static get Default() {
          return je;
        }
        static get DefaultType() {
          return Fe;
        }
        static get NAME() {
          return "swipe";
        }
        dispose() {
          me.off(this._element, De);
        }
        _start(t) {
          this._supportPointerEvents
            ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
            : (this._deltaX = t.touches[0].clientX);
        }
        _end(t) {
          (this._eventIsPointerPenTouch(t) &&
            (this._deltaX = t.clientX - this._deltaX),
            this._handleSwipe(),
            Gt(this._config.endCallback));
        }
        _move(t) {
          this._deltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
          const t = Math.abs(this._deltaX);
          if (t <= 40) return;
          const e = t / this._deltaX;
          ((this._deltaX = 0),
            e &&
              Gt(
                e > 0 ? this._config.rightCallback : this._config.leftCallback,
              ));
        }
        _initEvents() {
          this._supportPointerEvents
            ? (me.on(this._element, Pe, (t) => this._start(t)),
              me.on(this._element, Me, (t) => this._end(t)),
              this._element.classList.add("pointer-event"))
            : (me.on(this._element, $e, (t) => this._start(t)),
              me.on(this._element, Ie, (t) => this._move(t)),
              me.on(this._element, Ne, (t) => this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
          return (
            this._supportPointerEvents &&
            ("pen" === t.pointerType || "touch" === t.pointerType)
          );
        }
        static isSupported() {
          return (
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0
          );
        }
      }
      const qe = ".bs.carousel",
        Be = ".data-api",
        We = "ArrowLeft",
        ze = "ArrowRight",
        Re = "next",
        Ve = "prev",
        Ye = "left",
        Ke = "right",
        Qe = `slide${qe}`,
        Xe = `slid${qe}`,
        Ue = `keydown${qe}`,
        Ge = `mouseenter${qe}`,
        Je = `mouseleave${qe}`,
        Ze = `dragstart${qe}`,
        ti = `load${qe}${Be}`,
        ei = `click${qe}${Be}`,
        ii = "carousel",
        ni = "active",
        si = ".active",
        oi = ".carousel-item",
        ri = si + oi,
        ai = { [We]: Ke, [ze]: Ye },
        li = {
          interval: 5e3,
          keyboard: !0,
          pause: "hover",
          ride: !1,
          touch: !0,
          wrap: !0,
        },
        ci = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          pause: "(string|boolean)",
          ride: "(boolean|string)",
          touch: "boolean",
          wrap: "boolean",
        };
      class di extends we {
        constructor(t, e) {
          (super(t, e),
            (this._interval = null),
            (this._activeElement = null),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._swipeHelper = null),
            (this._indicatorsElement = Ae.findOne(
              ".carousel-indicators",
              this._element,
            )),
            this._addEventListeners(),
            this._config.ride === ii && this.cycle());
        }
        static get Default() {
          return li;
        }
        static get DefaultType() {
          return ci;
        }
        static get NAME() {
          return "carousel";
        }
        next() {
          this._slide(Re);
        }
        nextWhenVisible() {
          !document.hidden && Wt(this._element) && this.next();
        }
        prev() {
          this._slide(Ve);
        }
        pause() {
          (this._isSliding && Ht(this._element), this._clearInterval());
        }
        cycle() {
          (this._clearInterval(),
            this._updateInterval(),
            (this._interval = setInterval(
              () => this.nextWhenVisible(),
              this._config.interval,
            )));
        }
        _maybeEnableCycle() {
          this._config.ride &&
            (this._isSliding
              ? me.one(this._element, Xe, () => this.cycle())
              : this.cycle());
        }
        to(t) {
          const e = this._getItems();
          if (t > e.length - 1 || t < 0) return;
          if (this._isSliding)
            return void me.one(this._element, Xe, () => this.to(t));
          const i = this._getItemIndex(this._getActive());
          if (i === t) return;
          const n = t > i ? Re : Ve;
          this._slide(n, e[t]);
        }
        dispose() {
          (this._swipeHelper && this._swipeHelper.dispose(), super.dispose());
        }
        _configAfterMerge(t) {
          return ((t.defaultInterval = t.interval), t);
        }
        _addEventListeners() {
          (this._config.keyboard &&
            me.on(this._element, Ue, (t) => this._keydown(t)),
            "hover" === this._config.pause &&
              (me.on(this._element, Ge, () => this.pause()),
              me.on(this._element, Je, () => this._maybeEnableCycle())),
            this._config.touch &&
              He.isSupported() &&
              this._addTouchEventListeners());
        }
        _addTouchEventListeners() {
          for (const t of Ae.find(".carousel-item img", this._element))
            me.on(t, Ze, (t) => t.preventDefault());
          const t = {
            leftCallback: () => this._slide(this._directionToOrder(Ye)),
            rightCallback: () => this._slide(this._directionToOrder(Ke)),
            endCallback: () => {
              "hover" === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  () => this._maybeEnableCycle(),
                  500 + this._config.interval,
                )));
            },
          };
          this._swipeHelper = new He(this._element, t);
        }
        _keydown(t) {
          if (/input|textarea/i.test(t.target.tagName)) return;
          const e = ai[t.key];
          e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
          return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
          if (!this._indicatorsElement) return;
          const e = Ae.findOne(si, this._indicatorsElement);
          (e.classList.remove(ni), e.removeAttribute("aria-current"));
          const i = Ae.findOne(
            `[data-bs-slide-to="${t}"]`,
            this._indicatorsElement,
          );
          i && (i.classList.add(ni), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
          const t = this._activeElement || this._getActive();
          if (!t) return;
          const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
          this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
          if (this._isSliding) return;
          const i = this._getActive(),
            n = t === Re,
            s = e || Zt(this._getItems(), i, n, this._config.wrap);
          if (s === i) return;
          const o = this._getItemIndex(s),
            r = (e) =>
              me.trigger(this._element, e, {
                relatedTarget: s,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(i),
                to: o,
              });
          if (r(Qe).defaultPrevented) return;
          if (!i || !s) return;
          const a = Boolean(this._interval);
          (this.pause(),
            (this._isSliding = !0),
            this._setActiveIndicatorElement(o),
            (this._activeElement = s));
          const l = n ? "carousel-item-start" : "carousel-item-end",
            c = n ? "carousel-item-next" : "carousel-item-prev";
          (s.classList.add(c), Yt(s), i.classList.add(l), s.classList.add(l));
          (this._queueCallback(
            () => {
              (s.classList.remove(l, c),
                s.classList.add(ni),
                i.classList.remove(ni, c, l),
                (this._isSliding = !1),
                r(Xe));
            },
            i,
            this._isAnimated(),
          ),
            a && this.cycle());
        }
        _isAnimated() {
          return this._element.classList.contains("slide");
        }
        _getActive() {
          return Ae.findOne(ri, this._element);
        }
        _getItems() {
          return Ae.find(oi, this._element);
        }
        _clearInterval() {
          this._interval &&
            (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(t) {
          return Xt() ? (t === Ye ? Ve : Re) : t === Ye ? Re : Ve;
        }
        _orderToDirection(t) {
          return Xt() ? (t === Ve ? Ye : Ke) : t === Ve ? Ke : Ye;
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = di.getOrCreateInstance(this, t);
            if ("number" != typeof t) {
              if ("string" == typeof t) {
                if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                  throw new TypeError(`No method named "${t}"`);
                e[t]();
              }
            } else e.to(t);
          });
        }
      }
      (me.on(document, ei, "[data-bs-slide], [data-bs-slide-to]", function (t) {
        const e = Ae.getElementFromSelector(this);
        if (!e || !e.classList.contains(ii)) return;
        t.preventDefault();
        const i = di.getOrCreateInstance(e),
          n = this.getAttribute("data-bs-slide-to");
        return n
          ? (i.to(n), void i._maybeEnableCycle())
          : "next" === be.getDataAttribute(this, "slide")
            ? (i.next(), void i._maybeEnableCycle())
            : (i.prev(), void i._maybeEnableCycle());
      }),
        me.on(window, ti, () => {
          const t = Ae.find('[data-bs-ride="carousel"]');
          for (const e of t) di.getOrCreateInstance(e);
        }),
        Ut(di));
      const hi = ".bs.collapse",
        ui = `show${hi}`,
        fi = `shown${hi}`,
        pi = `hide${hi}`,
        mi = `hidden${hi}`,
        gi = `click${hi}.data-api`,
        _i = "show",
        vi = "collapse",
        bi = "collapsing",
        yi = `:scope .${vi} .${vi}`,
        wi = '[data-bs-toggle="collapse"]',
        Ei = { parent: null, toggle: !0 },
        Ai = { parent: "(null|element)", toggle: "boolean" };
      class Ti extends we {
        constructor(t, e) {
          (super(t, e),
            (this._isTransitioning = !1),
            (this._triggerArray = []));
          const i = Ae.find(wi);
          for (const t of i) {
            const e = Ae.getSelectorFromElement(t),
              i = Ae.find(e).filter((t) => t === this._element);
            null !== e && i.length && this._triggerArray.push(t);
          }
          (this._initializeChildren(),
            this._config.parent ||
              this._addAriaAndCollapsedClass(
                this._triggerArray,
                this._isShown(),
              ),
            this._config.toggle && this.toggle());
        }
        static get Default() {
          return Ei;
        }
        static get DefaultType() {
          return Ai;
        }
        static get NAME() {
          return "collapse";
        }
        toggle() {
          this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._isShown()) return;
          let t = [];
          if (
            (this._config.parent &&
              (t = this._getFirstLevelChildren(
                ".collapse.show, .collapse.collapsing",
              )
                .filter((t) => t !== this._element)
                .map((t) => Ti.getOrCreateInstance(t, { toggle: !1 }))),
            t.length && t[0]._isTransitioning)
          )
            return;
          if (me.trigger(this._element, ui).defaultPrevented) return;
          for (const e of t) e.hide();
          const e = this._getDimension();
          (this._element.classList.remove(vi),
            this._element.classList.add(bi),
            (this._element.style[e] = 0),
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            (this._isTransitioning = !0));
          const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
          (this._queueCallback(
            () => {
              ((this._isTransitioning = !1),
                this._element.classList.remove(bi),
                this._element.classList.add(vi, _i),
                (this._element.style[e] = ""),
                me.trigger(this._element, fi));
            },
            this._element,
            !0,
          ),
            (this._element.style[e] = `${this._element[i]}px`));
        }
        hide() {
          if (this._isTransitioning || !this._isShown()) return;
          if (me.trigger(this._element, pi).defaultPrevented) return;
          const t = this._getDimension();
          ((this._element.style[t] =
            `${this._element.getBoundingClientRect()[t]}px`),
            Yt(this._element),
            this._element.classList.add(bi),
            this._element.classList.remove(vi, _i));
          for (const t of this._triggerArray) {
            const e = Ae.getElementFromSelector(t);
            e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
          }
          this._isTransitioning = !0;
          ((this._element.style[t] = ""),
            this._queueCallback(
              () => {
                ((this._isTransitioning = !1),
                  this._element.classList.remove(bi),
                  this._element.classList.add(vi),
                  me.trigger(this._element, mi));
              },
              this._element,
              !0,
            ));
        }
        _isShown(t = this._element) {
          return t.classList.contains(_i);
        }
        _configAfterMerge(t) {
          return ((t.toggle = Boolean(t.toggle)), (t.parent = Bt(t.parent)), t);
        }
        _getDimension() {
          return this._element.classList.contains("collapse-horizontal")
            ? "width"
            : "height";
        }
        _initializeChildren() {
          if (!this._config.parent) return;
          const t = this._getFirstLevelChildren(wi);
          for (const e of t) {
            const t = Ae.getElementFromSelector(e);
            t && this._addAriaAndCollapsedClass([e], this._isShown(t));
          }
        }
        _getFirstLevelChildren(t) {
          const e = Ae.find(yi, this._config.parent);
          return Ae.find(t, this._config.parent).filter((t) => !e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
          if (t.length)
            for (const i of t)
              (i.classList.toggle("collapsed", !e),
                i.setAttribute("aria-expanded", e));
        }
        static jQueryInterface(t) {
          const e = {};
          return (
            "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
            this.each(function () {
              const i = Ti.getOrCreateInstance(this, e);
              if ("string" == typeof t) {
                if (void 0 === i[t])
                  throw new TypeError(`No method named "${t}"`);
                i[t]();
              }
            })
          );
        }
      }
      (me.on(document, gi, wi, function (t) {
        ("A" === t.target.tagName ||
          (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
          t.preventDefault();
        for (const t of Ae.getMultipleElementsFromSelector(this))
          Ti.getOrCreateInstance(t, { toggle: !1 }).toggle();
      }),
        Ut(Ti));
      const Ci = "dropdown",
        xi = ".bs.dropdown",
        Oi = ".data-api",
        ki = "ArrowUp",
        Li = "ArrowDown",
        Si = `hide${xi}`,
        Di = `hidden${xi}`,
        $i = `show${xi}`,
        Ii = `shown${xi}`,
        Ni = `click${xi}${Oi}`,
        Pi = `keydown${xi}${Oi}`,
        Mi = `keyup${xi}${Oi}`,
        ji = "show",
        Fi = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Hi = `${Fi}.${ji}`,
        qi = ".dropdown-menu",
        Bi = Xt() ? "top-end" : "top-start",
        Wi = Xt() ? "top-start" : "top-end",
        zi = Xt() ? "bottom-end" : "bottom-start",
        Ri = Xt() ? "bottom-start" : "bottom-end",
        Vi = Xt() ? "left-start" : "right-start",
        Yi = Xt() ? "right-start" : "left-start",
        Ki = {
          autoClose: !0,
          boundary: "clippingParents",
          display: "dynamic",
          offset: [0, 2],
          popperConfig: null,
          reference: "toggle",
        },
        Qi = {
          autoClose: "(boolean|string)",
          boundary: "(string|element)",
          display: "string",
          offset: "(array|string|function)",
          popperConfig: "(null|object|function)",
          reference: "(string|element|object)",
        };
      class Xi extends we {
        constructor(t, e) {
          (super(t, e),
            (this._popper = null),
            (this._parent = this._element.parentNode),
            (this._menu =
              Ae.next(this._element, qi)[0] ||
              Ae.prev(this._element, qi)[0] ||
              Ae.findOne(qi, this._parent)),
            (this._inNavbar = this._detectNavbar()));
        }
        static get Default() {
          return Ki;
        }
        static get DefaultType() {
          return Qi;
        }
        static get NAME() {
          return Ci;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (zt(this._element) || this._isShown()) return;
          const t = { relatedTarget: this._element };
          if (!me.trigger(this._element, $i, t).defaultPrevented) {
            if (
              (this._createPopper(),
              "ontouchstart" in document.documentElement &&
                !this._parent.closest(".navbar-nav"))
            )
              for (const t of [].concat(...document.body.children))
                me.on(t, "mouseover", Vt);
            (this._element.focus(),
              this._element.setAttribute("aria-expanded", !0),
              this._menu.classList.add(ji),
              this._element.classList.add(ji),
              me.trigger(this._element, Ii, t));
          }
        }
        hide() {
          if (zt(this._element) || !this._isShown()) return;
          const t = { relatedTarget: this._element };
          this._completeHide(t);
        }
        dispose() {
          (this._popper && this._popper.destroy(), super.dispose());
        }
        update() {
          ((this._inNavbar = this._detectNavbar()),
            this._popper && this._popper.update());
        }
        _completeHide(t) {
          if (!me.trigger(this._element, Si, t).defaultPrevented) {
            if ("ontouchstart" in document.documentElement)
              for (const t of [].concat(...document.body.children))
                me.off(t, "mouseover", Vt);
            (this._popper && this._popper.destroy(),
              this._menu.classList.remove(ji),
              this._element.classList.remove(ji),
              this._element.setAttribute("aria-expanded", "false"),
              be.removeDataAttribute(this._menu, "popper"),
              me.trigger(this._element, Di, t));
          }
        }
        _getConfig(t) {
          if (
            "object" == typeof (t = super._getConfig(t)).reference &&
            !qt(t.reference) &&
            "function" != typeof t.reference.getBoundingClientRect
          )
            throw new TypeError(
              `${Ci.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
            );
          return t;
        }
        _createPopper() {
          let t = this._element;
          "parent" === this._config.reference
            ? (t = this._parent)
            : qt(this._config.reference)
              ? (t = Bt(this._config.reference))
              : "object" == typeof this._config.reference &&
                (t = this._config.reference);
          const e = this._getPopperConfig();
          this._popper = $t(t, this._menu, e);
        }
        _isShown() {
          return this._menu.classList.contains(ji);
        }
        _getPlacement() {
          const t = this._parent;
          if (t.classList.contains("dropend")) return Vi;
          if (t.classList.contains("dropstart")) return Yi;
          if (t.classList.contains("dropup-center")) return "top";
          if (t.classList.contains("dropdown-center")) return "bottom";
          const e =
            "end" ===
            getComputedStyle(this._menu)
              .getPropertyValue("--bs-position")
              .trim();
          return t.classList.contains("dropup") ? (e ? Wi : Bi) : e ? Ri : zi;
        }
        _detectNavbar() {
          return null !== this._element.closest(".navbar");
        }
        _getOffset() {
          const { offset: t } = this._config;
          return "string" == typeof t
            ? t.split(",").map((t) => Number.parseInt(t, 10))
            : "function" == typeof t
              ? (e) => t(e, this._element)
              : t;
        }
        _getPopperConfig() {
          const t = {
            placement: this._getPlacement(),
            modifiers: [
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              { name: "offset", options: { offset: this._getOffset() } },
            ],
          };
          return (
            (this._inNavbar || "static" === this._config.display) &&
              (be.setDataAttribute(this._menu, "popper", "static"),
              (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
            { ...t, ...Gt(this._config.popperConfig, [void 0, t]) }
          );
        }
        _selectMenuItem({ key: t, target: e }) {
          const i = Ae.find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu,
          ).filter((t) => Wt(t));
          i.length && Zt(i, e, t === Li, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Xi.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
        static clearMenus(t) {
          if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
          const e = Ae.find(Hi);
          for (const i of e) {
            const e = Xi.getInstance(i);
            if (!e || !1 === e._config.autoClose) continue;
            const n = t.composedPath(),
              s = n.includes(e._menu);
            if (
              n.includes(e._element) ||
              ("inside" === e._config.autoClose && !s) ||
              ("outside" === e._config.autoClose && s)
            )
              continue;
            if (
              e._menu.contains(t.target) &&
              (("keyup" === t.type && "Tab" === t.key) ||
                /input|select|option|textarea|form/i.test(t.target.tagName))
            )
              continue;
            const o = { relatedTarget: e._element };
            ("click" === t.type && (o.clickEvent = t), e._completeHide(o));
          }
        }
        static dataApiKeydownHandler(t) {
          const e = /input|textarea/i.test(t.target.tagName),
            i = "Escape" === t.key,
            n = [ki, Li].includes(t.key);
          if (!n && !i) return;
          if (e && !i) return;
          t.preventDefault();
          const s = this.matches(Fi)
              ? this
              : Ae.prev(this, Fi)[0] ||
                Ae.next(this, Fi)[0] ||
                Ae.findOne(Fi, t.delegateTarget.parentNode),
            o = Xi.getOrCreateInstance(s);
          if (n)
            return (t.stopPropagation(), o.show(), void o._selectMenuItem(t));
          o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
        }
      }
      (me.on(document, Pi, Fi, Xi.dataApiKeydownHandler),
        me.on(document, Pi, qi, Xi.dataApiKeydownHandler),
        me.on(document, Ni, Xi.clearMenus),
        me.on(document, Mi, Xi.clearMenus),
        me.on(document, Ni, Fi, function (t) {
          (t.preventDefault(), Xi.getOrCreateInstance(this).toggle());
        }),
        Ut(Xi));
      const Ui = "backdrop",
        Gi = "show",
        Ji = `mousedown.bs.${Ui}`,
        Zi = {
          className: "modal-backdrop",
          clickCallback: null,
          isAnimated: !1,
          isVisible: !0,
          rootElement: "body",
        },
        tn = {
          className: "string",
          clickCallback: "(function|null)",
          isAnimated: "boolean",
          isVisible: "boolean",
          rootElement: "(element|string)",
        };
      class en extends ye {
        constructor(t) {
          (super(),
            (this._config = this._getConfig(t)),
            (this._isAppended = !1),
            (this._element = null));
        }
        static get Default() {
          return Zi;
        }
        static get DefaultType() {
          return tn;
        }
        static get NAME() {
          return Ui;
        }
        show(t) {
          if (!this._config.isVisible) return void Gt(t);
          this._append();
          const e = this._getElement();
          (this._config.isAnimated && Yt(e),
            e.classList.add(Gi),
            this._emulateAnimation(() => {
              Gt(t);
            }));
        }
        hide(t) {
          this._config.isVisible
            ? (this._getElement().classList.remove(Gi),
              this._emulateAnimation(() => {
                (this.dispose(), Gt(t));
              }))
            : Gt(t);
        }
        dispose() {
          this._isAppended &&
            (me.off(this._element, Ji),
            this._element.remove(),
            (this._isAppended = !1));
        }
        _getElement() {
          if (!this._element) {
            const t = document.createElement("div");
            ((t.className = this._config.className),
              this._config.isAnimated && t.classList.add("fade"),
              (this._element = t));
          }
          return this._element;
        }
        _configAfterMerge(t) {
          return ((t.rootElement = Bt(t.rootElement)), t);
        }
        _append() {
          if (this._isAppended) return;
          const t = this._getElement();
          (this._config.rootElement.append(t),
            me.on(t, Ji, () => {
              Gt(this._config.clickCallback);
            }),
            (this._isAppended = !0));
        }
        _emulateAnimation(t) {
          Jt(t, this._getElement(), this._config.isAnimated);
        }
      }
      const nn = ".bs.focustrap",
        sn = `focusin${nn}`,
        on = `keydown.tab${nn}`,
        rn = "backward",
        an = { autofocus: !0, trapElement: null },
        ln = { autofocus: "boolean", trapElement: "element" };
      class cn extends ye {
        constructor(t) {
          (super(),
            (this._config = this._getConfig(t)),
            (this._isActive = !1),
            (this._lastTabNavDirection = null));
        }
        static get Default() {
          return an;
        }
        static get DefaultType() {
          return ln;
        }
        static get NAME() {
          return "focustrap";
        }
        activate() {
          this._isActive ||
            (this._config.autofocus && this._config.trapElement.focus(),
            me.off(document, nn),
            me.on(document, sn, (t) => this._handleFocusin(t)),
            me.on(document, on, (t) => this._handleKeydown(t)),
            (this._isActive = !0));
        }
        deactivate() {
          this._isActive && ((this._isActive = !1), me.off(document, nn));
        }
        _handleFocusin(t) {
          const { trapElement: e } = this._config;
          if (t.target === document || t.target === e || e.contains(t.target))
            return;
          const i = Ae.focusableChildren(e);
          0 === i.length
            ? e.focus()
            : this._lastTabNavDirection === rn
              ? i[i.length - 1].focus()
              : i[0].focus();
        }
        _handleKeydown(t) {
          "Tab" === t.key &&
            (this._lastTabNavDirection = t.shiftKey ? rn : "forward");
        }
      }
      const dn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        hn = ".sticky-top",
        un = "padding-right",
        fn = "margin-right";
      class pn {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          const t = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - t);
        }
        hide() {
          const t = this.getWidth();
          (this._disableOverFlow(),
            this._setElementAttributes(this._element, un, (e) => e + t),
            this._setElementAttributes(dn, un, (e) => e + t),
            this._setElementAttributes(hn, fn, (e) => e - t));
        }
        reset() {
          (this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, un),
            this._resetElementAttributes(dn, un),
            this._resetElementAttributes(hn, fn));
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        _disableOverFlow() {
          (this._saveInitialAttribute(this._element, "overflow"),
            (this._element.style.overflow = "hidden"));
        }
        _setElementAttributes(t, e, i) {
          const n = this.getWidth();
          this._applyManipulationCallback(t, (t) => {
            if (t !== this._element && window.innerWidth > t.clientWidth + n)
              return;
            this._saveInitialAttribute(t, e);
            const s = window.getComputedStyle(t).getPropertyValue(e);
            t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
          });
        }
        _saveInitialAttribute(t, e) {
          const i = t.style.getPropertyValue(e);
          i && be.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
          this._applyManipulationCallback(t, (t) => {
            const i = be.getDataAttribute(t, e);
            null !== i
              ? (be.removeDataAttribute(t, e), t.style.setProperty(e, i))
              : t.style.removeProperty(e);
          });
        }
        _applyManipulationCallback(t, e) {
          if (qt(t)) e(t);
          else for (const i of Ae.find(t, this._element)) e(i);
        }
      }
      const mn = ".bs.modal",
        gn = `hide${mn}`,
        _n = `hidePrevented${mn}`,
        vn = `hidden${mn}`,
        bn = `show${mn}`,
        yn = `shown${mn}`,
        wn = `resize${mn}`,
        En = `click.dismiss${mn}`,
        An = `mousedown.dismiss${mn}`,
        Tn = `keydown.dismiss${mn}`,
        Cn = `click${mn}.data-api`,
        xn = "modal-open",
        On = "show",
        kn = "modal-static",
        Ln = { backdrop: !0, focus: !0, keyboard: !0 },
        Sn = {
          backdrop: "(boolean|string)",
          focus: "boolean",
          keyboard: "boolean",
        };
      class Dn extends we {
        constructor(t, e) {
          (super(t, e),
            (this._dialog = Ae.findOne(".modal-dialog", this._element)),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            (this._isShown = !1),
            (this._isTransitioning = !1),
            (this._scrollBar = new pn()),
            this._addEventListeners());
        }
        static get Default() {
          return Ln;
        }
        static get DefaultType() {
          return Sn;
        }
        static get NAME() {
          return "modal";
        }
        toggle(t) {
          return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
          if (this._isShown || this._isTransitioning) return;
          me.trigger(this._element, bn, { relatedTarget: t })
            .defaultPrevented ||
            ((this._isShown = !0),
            (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(xn),
            this._adjustDialog(),
            this._backdrop.show(() => this._showElement(t)));
        }
        hide() {
          if (!this._isShown || this._isTransitioning) return;
          me.trigger(this._element, gn).defaultPrevented ||
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(On),
            this._queueCallback(
              () => this._hideModal(),
              this._element,
              this._isAnimated(),
            ));
        }
        dispose() {
          (me.off(window, mn),
            me.off(this._dialog, mn),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose());
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new en({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated(),
          });
        }
        _initializeFocusTrap() {
          return new cn({ trapElement: this._element });
        }
        _showElement(t) {
          (document.body.contains(this._element) ||
            document.body.append(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            (this._element.scrollTop = 0));
          const e = Ae.findOne(".modal-body", this._dialog);
          (e && (e.scrollTop = 0),
            Yt(this._element),
            this._element.classList.add(On));
          this._queueCallback(
            () => {
              (this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                me.trigger(this._element, yn, { relatedTarget: t }));
            },
            this._dialog,
            this._isAnimated(),
          );
        }
        _addEventListeners() {
          (me.on(this._element, Tn, (t) => {
            "Escape" === t.key &&
              (this._config.keyboard
                ? this.hide()
                : this._triggerBackdropTransition());
          }),
            me.on(window, wn, () => {
              this._isShown && !this._isTransitioning && this._adjustDialog();
            }),
            me.on(this._element, An, (t) => {
              me.one(this._element, En, (e) => {
                this._element === t.target &&
                  this._element === e.target &&
                  ("static" !== this._config.backdrop
                    ? this._config.backdrop && this.hide()
                    : this._triggerBackdropTransition());
              });
            }));
        }
        _hideModal() {
          ((this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._backdrop.hide(() => {
              (document.body.classList.remove(xn),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                me.trigger(this._element, vn));
            }));
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          if (me.trigger(this._element, _n).defaultPrevented) return;
          const t =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            e = this._element.style.overflowY;
          "hidden" === e ||
            this._element.classList.contains(kn) ||
            (t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(kn),
            this._queueCallback(() => {
              (this._element.classList.remove(kn),
                this._queueCallback(() => {
                  this._element.style.overflowY = e;
                }, this._dialog));
            }, this._dialog),
            this._element.focus());
        }
        _adjustDialog() {
          const t =
              this._element.scrollHeight >
              document.documentElement.clientHeight,
            e = this._scrollBar.getWidth(),
            i = e > 0;
          if (i && !t) {
            const t = Xt() ? "paddingLeft" : "paddingRight";
            this._element.style[t] = `${e}px`;
          }
          if (!i && t) {
            const t = Xt() ? "paddingRight" : "paddingLeft";
            this._element.style[t] = `${e}px`;
          }
        }
        _resetAdjustments() {
          ((this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = ""));
        }
        static jQueryInterface(t, e) {
          return this.each(function () {
            const i = Dn.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === i[t])
                throw new TypeError(`No method named "${t}"`);
              i[t](e);
            }
          });
        }
      }
      (me.on(document, Cn, '[data-bs-toggle="modal"]', function (t) {
        const e = Ae.getElementFromSelector(this);
        (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
          me.one(e, bn, (t) => {
            t.defaultPrevented ||
              me.one(e, vn, () => {
                Wt(this) && this.focus();
              });
          }));
        const i = Ae.findOne(".modal.show");
        i && Dn.getInstance(i).hide();
        Dn.getOrCreateInstance(e).toggle(this);
      }),
        Te(Dn),
        Ut(Dn));
      const $n = ".bs.offcanvas",
        In = ".data-api",
        Nn = `load${$n}${In}`,
        Pn = "show",
        Mn = "showing",
        jn = "hiding",
        Fn = ".offcanvas.show",
        Hn = `show${$n}`,
        qn = `shown${$n}`,
        Bn = `hide${$n}`,
        Wn = `hidePrevented${$n}`,
        zn = `hidden${$n}`,
        Rn = `resize${$n}`,
        Vn = `click${$n}${In}`,
        Yn = `keydown.dismiss${$n}`,
        Kn = { backdrop: !0, keyboard: !0, scroll: !1 },
        Qn = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          scroll: "boolean",
        };
      class Xn extends we {
        constructor(t, e) {
          (super(t, e),
            (this._isShown = !1),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            this._addEventListeners());
        }
        static get Default() {
          return Kn;
        }
        static get DefaultType() {
          return Qn;
        }
        static get NAME() {
          return "offcanvas";
        }
        toggle(t) {
          return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
          if (this._isShown) return;
          if (
            me.trigger(this._element, Hn, { relatedTarget: t }).defaultPrevented
          )
            return;
          ((this._isShown = !0),
            this._backdrop.show(),
            this._config.scroll || new pn().hide(),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(Mn));
          this._queueCallback(
            () => {
              ((this._config.scroll && !this._config.backdrop) ||
                this._focustrap.activate(),
                this._element.classList.add(Pn),
                this._element.classList.remove(Mn),
                me.trigger(this._element, qn, { relatedTarget: t }));
            },
            this._element,
            !0,
          );
        }
        hide() {
          if (!this._isShown) return;
          if (me.trigger(this._element, Bn).defaultPrevented) return;
          (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add(jn),
            this._backdrop.hide());
          this._queueCallback(
            () => {
              (this._element.classList.remove(Pn, jn),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || new pn().reset(),
                me.trigger(this._element, zn));
            },
            this._element,
            !0,
          );
        }
        dispose() {
          (this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose());
        }
        _initializeBackDrop() {
          const t = Boolean(this._config.backdrop);
          return new en({
            className: "offcanvas-backdrop",
            isVisible: t,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: t
              ? () => {
                  "static" !== this._config.backdrop
                    ? this.hide()
                    : me.trigger(this._element, Wn);
                }
              : null,
          });
        }
        _initializeFocusTrap() {
          return new cn({ trapElement: this._element });
        }
        _addEventListeners() {
          me.on(this._element, Yn, (t) => {
            "Escape" === t.key &&
              (this._config.keyboard
                ? this.hide()
                : me.trigger(this._element, Wn));
          });
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = Xn.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t](this);
            }
          });
        }
      }
      (me.on(document, Vn, '[data-bs-toggle="offcanvas"]', function (t) {
        const e = Ae.getElementFromSelector(this);
        if (
          (["A", "AREA"].includes(this.tagName) && t.preventDefault(), zt(this))
        )
          return;
        me.one(e, zn, () => {
          Wt(this) && this.focus();
        });
        const i = Ae.findOne(Fn);
        i && i !== e && Xn.getInstance(i).hide();
        Xn.getOrCreateInstance(e).toggle(this);
      }),
        me.on(window, Nn, () => {
          for (const t of Ae.find(Fn)) Xn.getOrCreateInstance(t).show();
        }),
        me.on(window, Rn, () => {
          for (const t of Ae.find(
            "[aria-modal][class*=show][class*=offcanvas-]",
          ))
            "fixed" !== getComputedStyle(t).position &&
              Xn.getOrCreateInstance(t).hide();
        }),
        Te(Xn),
        Ut(Xn));
      const Un = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          dd: [],
          div: [],
          dl: [],
          dt: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        Gn = new Set([
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ]),
        Jn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Zn = (t, e) => {
          const i = t.nodeName.toLowerCase();
          return e.includes(i)
            ? !Gn.has(i) || Boolean(Jn.test(t.nodeValue))
            : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
        };
      const ts = {
          allowList: Un,
          content: {},
          extraClass: "",
          html: !1,
          sanitize: !0,
          sanitizeFn: null,
          template: "<div></div>",
        },
        es = {
          allowList: "object",
          content: "object",
          extraClass: "(string|function)",
          html: "boolean",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          template: "string",
        },
        is = {
          entry: "(string|element|function|null)",
          selector: "(string|element)",
        };
      class ns extends ye {
        constructor(t) {
          (super(), (this._config = this._getConfig(t)));
        }
        static get Default() {
          return ts;
        }
        static get DefaultType() {
          return es;
        }
        static get NAME() {
          return "TemplateFactory";
        }
        getContent() {
          return Object.values(this._config.content)
            .map((t) => this._resolvePossibleFunction(t))
            .filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(t) {
          return (
            this._checkContent(t),
            (this._config.content = { ...this._config.content, ...t }),
            this
          );
        }
        toHtml() {
          const t = document.createElement("div");
          t.innerHTML = this._maybeSanitize(this._config.template);
          for (const [e, i] of Object.entries(this._config.content))
            this._setContent(t, i, e);
          const e = t.children[0],
            i = this._resolvePossibleFunction(this._config.extraClass);
          return (i && e.classList.add(...i.split(" ")), e);
        }
        _typeCheckConfig(t) {
          (super._typeCheckConfig(t), this._checkContent(t.content));
        }
        _checkContent(t) {
          for (const [e, i] of Object.entries(t))
            super._typeCheckConfig({ selector: e, entry: i }, is);
        }
        _setContent(t, e, i) {
          const n = Ae.findOne(i, t);
          n &&
            ((e = this._resolvePossibleFunction(e))
              ? qt(e)
                ? this._putElementInTemplate(Bt(e), n)
                : this._config.html
                  ? (n.innerHTML = this._maybeSanitize(e))
                  : (n.textContent = e)
              : n.remove());
        }
        _maybeSanitize(t) {
          return this._config.sanitize
            ? (function (t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = new window.DOMParser().parseFromString(
                    t,
                    "text/html",
                  ),
                  s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s) {
                  const i = t.nodeName.toLowerCase();
                  if (!Object.keys(e).includes(i)) {
                    t.remove();
                    continue;
                  }
                  const n = [].concat(...t.attributes),
                    s = [].concat(e["*"] || [], e[i] || []);
                  for (const e of n) Zn(e, s) || t.removeAttribute(e.nodeName);
                }
                return n.body.innerHTML;
              })(t, this._config.allowList, this._config.sanitizeFn)
            : t;
        }
        _resolvePossibleFunction(t) {
          return Gt(t, [void 0, this]);
        }
        _putElementInTemplate(t, e) {
          if (this._config.html) return ((e.innerHTML = ""), void e.append(t));
          e.textContent = t.textContent;
        }
      }
      const ss = new Set(["sanitize", "allowList", "sanitizeFn"]),
        os = "fade",
        rs = "show",
        as = ".tooltip-inner",
        ls = ".modal",
        cs = "hide.bs.modal",
        ds = "hover",
        hs = "focus",
        us = "click",
        fs = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: Xt() ? "left" : "right",
          BOTTOM: "bottom",
          LEFT: Xt() ? "right" : "left",
        },
        ps = {
          allowList: Un,
          animation: !0,
          boundary: "clippingParents",
          container: !1,
          customClass: "",
          delay: 0,
          fallbackPlacements: ["top", "right", "bottom", "left"],
          html: !1,
          offset: [0, 6],
          placement: "top",
          popperConfig: null,
          sanitize: !0,
          sanitizeFn: null,
          selector: !1,
          template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          title: "",
          trigger: "hover focus",
        },
        ms = {
          allowList: "object",
          animation: "boolean",
          boundary: "(string|element)",
          container: "(string|element|boolean)",
          customClass: "(string|function)",
          delay: "(number|object)",
          fallbackPlacements: "array",
          html: "boolean",
          offset: "(array|string|function)",
          placement: "(string|function)",
          popperConfig: "(null|object|function)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          selector: "(string|boolean)",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
        };
      class gs extends we {
        constructor(t, e) {
          (super(t, e),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._isHovered = null),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this._templateFactory = null),
            (this._newContent = null),
            (this.tip = null),
            this._setListeners(),
            this._config.selector || this._fixTitle());
        }
        static get Default() {
          return ps;
        }
        static get DefaultType() {
          return ms;
        }
        static get NAME() {
          return "tooltip";
        }
        enable() {
          this._isEnabled = !0;
        }
        disable() {
          this._isEnabled = !1;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          this._isEnabled && (this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
          (clearTimeout(this._timeout),
            me.off(this._element.closest(ls), cs, this._hideModalHandler),
            this._element.getAttribute("data-bs-original-title") &&
              this._element.setAttribute(
                "title",
                this._element.getAttribute("data-bs-original-title"),
              ),
            this._disposePopper(),
            super.dispose());
        }
        show() {
          if ("none" === this._element.style.display)
            throw new Error("Please use show on visible elements");
          if (!this._isWithContent() || !this._isEnabled) return;
          const t = me.trigger(
              this._element,
              this.constructor.eventName("show"),
            ),
            e = (
              Rt(this._element) || this._element.ownerDocument.documentElement
            ).contains(this._element);
          if (t.defaultPrevented || !e) return;
          this._disposePopper();
          const i = this._getTipElement();
          this._element.setAttribute("aria-describedby", i.getAttribute("id"));
          const { container: n } = this._config;
          if (
            (this._element.ownerDocument.documentElement.contains(this.tip) ||
              (n.append(i),
              me.trigger(
                this._element,
                this.constructor.eventName("inserted"),
              )),
            (this._popper = this._createPopper(i)),
            i.classList.add(rs),
            "ontouchstart" in document.documentElement)
          )
            for (const t of [].concat(...document.body.children))
              me.on(t, "mouseover", Vt);
          this._queueCallback(
            () => {
              (me.trigger(this._element, this.constructor.eventName("shown")),
                !1 === this._isHovered && this._leave(),
                (this._isHovered = !1));
            },
            this.tip,
            this._isAnimated(),
          );
        }
        hide() {
          if (!this._isShown()) return;
          if (
            me.trigger(this._element, this.constructor.eventName("hide"))
              .defaultPrevented
          )
            return;
          if (
            (this._getTipElement().classList.remove(rs),
            "ontouchstart" in document.documentElement)
          )
            for (const t of [].concat(...document.body.children))
              me.off(t, "mouseover", Vt);
          ((this._activeTrigger[us] = !1),
            (this._activeTrigger[hs] = !1),
            (this._activeTrigger[ds] = !1),
            (this._isHovered = null));
          this._queueCallback(
            () => {
              this._isWithActiveTrigger() ||
                (this._isHovered || this._disposePopper(),
                this._element.removeAttribute("aria-describedby"),
                me.trigger(
                  this._element,
                  this.constructor.eventName("hidden"),
                ));
            },
            this.tip,
            this._isAnimated(),
          );
        }
        update() {
          this._popper && this._popper.update();
        }
        _isWithContent() {
          return Boolean(this._getTitle());
        }
        _getTipElement() {
          return (
            this.tip ||
              (this.tip = this._createTipElement(
                this._newContent || this._getContentForTemplate(),
              )),
            this.tip
          );
        }
        _createTipElement(t) {
          const e = this._getTemplateFactory(t).toHtml();
          if (!e) return null;
          (e.classList.remove(os, rs),
            e.classList.add(`bs-${this.constructor.NAME}-auto`));
          const i = ((t) => {
            do {
              t += Math.floor(1e6 * Math.random());
            } while (document.getElementById(t));
            return t;
          })(this.constructor.NAME).toString();
          return (
            e.setAttribute("id", i),
            this._isAnimated() && e.classList.add(os),
            e
          );
        }
        setContent(t) {
          ((this._newContent = t),
            this._isShown() && (this._disposePopper(), this.show()));
        }
        _getTemplateFactory(t) {
          return (
            this._templateFactory
              ? this._templateFactory.changeContent(t)
              : (this._templateFactory = new ns({
                  ...this._config,
                  content: t,
                  extraClass: this._resolvePossibleFunction(
                    this._config.customClass,
                  ),
                })),
            this._templateFactory
          );
        }
        _getContentForTemplate() {
          return { [as]: this._getTitle() };
        }
        _getTitle() {
          return (
            this._resolvePossibleFunction(this._config.title) ||
            this._element.getAttribute("data-bs-original-title")
          );
        }
        _initializeOnDelegatedTarget(t) {
          return this.constructor.getOrCreateInstance(
            t.delegateTarget,
            this._getDelegateConfig(),
          );
        }
        _isAnimated() {
          return (
            this._config.animation ||
            (this.tip && this.tip.classList.contains(os))
          );
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(rs);
        }
        _createPopper(t) {
          const e = Gt(this._config.placement, [this, t, this._element]),
            i = fs[e.toUpperCase()];
          return $t(this._element, t, this._getPopperConfig(i));
        }
        _getOffset() {
          const { offset: t } = this._config;
          return "string" == typeof t
            ? t.split(",").map((t) => Number.parseInt(t, 10))
            : "function" == typeof t
              ? (e) => t(e, this._element)
              : t;
        }
        _resolvePossibleFunction(t) {
          return Gt(t, [this._element, this._element]);
        }
        _getPopperConfig(t) {
          const e = {
            placement: t,
            modifiers: [
              {
                name: "flip",
                options: {
                  fallbackPlacements: this._config.fallbackPlacements,
                },
              },
              { name: "offset", options: { offset: this._getOffset() } },
              {
                name: "preventOverflow",
                options: { boundary: this._config.boundary },
              },
              {
                name: "arrow",
                options: { element: `.${this.constructor.NAME}-arrow` },
              },
              {
                name: "preSetPlacement",
                enabled: !0,
                phase: "beforeMain",
                fn: (t) => {
                  this._getTipElement().setAttribute(
                    "data-popper-placement",
                    t.state.placement,
                  );
                },
              },
            ],
          };
          return { ...e, ...Gt(this._config.popperConfig, [void 0, e]) };
        }
        _setListeners() {
          const t = this._config.trigger.split(" ");
          for (const e of t)
            if ("click" === e)
              me.on(
                this._element,
                this.constructor.eventName("click"),
                this._config.selector,
                (t) => {
                  const e = this._initializeOnDelegatedTarget(t);
                  ((e._activeTrigger[us] = !(
                    e._isShown() && e._activeTrigger[us]
                  )),
                    e.toggle());
                },
              );
            else if ("manual" !== e) {
              const t =
                  e === ds
                    ? this.constructor.eventName("mouseenter")
                    : this.constructor.eventName("focusin"),
                i =
                  e === ds
                    ? this.constructor.eventName("mouseleave")
                    : this.constructor.eventName("focusout");
              (me.on(this._element, t, this._config.selector, (t) => {
                const e = this._initializeOnDelegatedTarget(t);
                ((e._activeTrigger["focusin" === t.type ? hs : ds] = !0),
                  e._enter());
              }),
                me.on(this._element, i, this._config.selector, (t) => {
                  const e = this._initializeOnDelegatedTarget(t);
                  ((e._activeTrigger["focusout" === t.type ? hs : ds] =
                    e._element.contains(t.relatedTarget)),
                    e._leave());
                }));
            }
          ((this._hideModalHandler = () => {
            this._element && this.hide();
          }),
            me.on(this._element.closest(ls), cs, this._hideModalHandler));
        }
        _fixTitle() {
          const t = this._element.getAttribute("title");
          t &&
            (this._element.getAttribute("aria-label") ||
              this._element.textContent.trim() ||
              this._element.setAttribute("aria-label", t),
            this._element.setAttribute("data-bs-original-title", t),
            this._element.removeAttribute("title"));
        }
        _enter() {
          this._isShown() || this._isHovered
            ? (this._isHovered = !0)
            : ((this._isHovered = !0),
              this._setTimeout(() => {
                this._isHovered && this.show();
              }, this._config.delay.show));
        }
        _leave() {
          this._isWithActiveTrigger() ||
            ((this._isHovered = !1),
            this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
          (clearTimeout(this._timeout), (this._timeout = setTimeout(t, e)));
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
          const e = be.getDataAttributes(this._element);
          for (const t of Object.keys(e)) ss.has(t) && delete e[t];
          return (
            (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
            (t = this._mergeConfigObj(t)),
            (t = this._configAfterMerge(t)),
            this._typeCheckConfig(t),
            t
          );
        }
        _configAfterMerge(t) {
          return (
            (t.container =
              !1 === t.container ? document.body : Bt(t.container)),
            "number" == typeof t.delay &&
              (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            t
          );
        }
        _getDelegateConfig() {
          const t = {};
          for (const [e, i] of Object.entries(this._config))
            this.constructor.Default[e] !== i && (t[e] = i);
          return ((t.selector = !1), (t.trigger = "manual"), t);
        }
        _disposePopper() {
          (this._popper && (this._popper.destroy(), (this._popper = null)),
            this.tip && (this.tip.remove(), (this.tip = null)));
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = gs.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      Ut(gs);
      const _s = ".popover-header",
        vs = ".popover-body",
        bs = {
          ...gs.Default,
          content: "",
          offset: [0, 8],
          placement: "right",
          template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          trigger: "click",
        },
        ys = { ...gs.DefaultType, content: "(null|string|element|function)" };
      class ws extends gs {
        static get Default() {
          return bs;
        }
        static get DefaultType() {
          return ys;
        }
        static get NAME() {
          return "popover";
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return { [_s]: this._getTitle(), [vs]: this._getContent() };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = ws.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      Ut(ws);
      const Es = ".bs.scrollspy",
        As = `activate${Es}`,
        Ts = `click${Es}`,
        Cs = `load${Es}.data-api`,
        xs = "active",
        Os = "[href]",
        ks = ".nav-link",
        Ls = `${ks}, .nav-item > ${ks}, .list-group-item`,
        Ss = {
          offset: null,
          rootMargin: "0px 0px -25%",
          smoothScroll: !1,
          target: null,
          threshold: [0.1, 0.5, 1],
        },
        Ds = {
          offset: "(number|null)",
          rootMargin: "string",
          smoothScroll: "boolean",
          target: "element",
          threshold: "array",
        };
      class $s extends we {
        constructor(t, e) {
          (super(t, e),
            (this._targetLinks = new Map()),
            (this._observableSections = new Map()),
            (this._rootElement =
              "visible" === getComputedStyle(this._element).overflowY
                ? null
                : this._element),
            (this._activeTarget = null),
            (this._observer = null),
            (this._previousScrollData = {
              visibleEntryTop: 0,
              parentScrollTop: 0,
            }),
            this.refresh());
        }
        static get Default() {
          return Ss;
        }
        static get DefaultType() {
          return Ds;
        }
        static get NAME() {
          return "scrollspy";
        }
        refresh() {
          (this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer
              ? this._observer.disconnect()
              : (this._observer = this._getNewObserver()));
          for (const t of this._observableSections.values())
            this._observer.observe(t);
        }
        dispose() {
          (this._observer.disconnect(), super.dispose());
        }
        _configAfterMerge(t) {
          return (
            (t.target = Bt(t.target) || document.body),
            (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
            "string" == typeof t.threshold &&
              (t.threshold = t.threshold
                .split(",")
                .map((t) => Number.parseFloat(t))),
            t
          );
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll &&
            (me.off(this._config.target, Ts),
            me.on(this._config.target, Ts, Os, (t) => {
              const e = this._observableSections.get(t.target.hash);
              if (e) {
                t.preventDefault();
                const i = this._rootElement || window,
                  n = e.offsetTop - this._element.offsetTop;
                if (i.scrollTo)
                  return void i.scrollTo({ top: n, behavior: "smooth" });
                i.scrollTop = n;
              }
            }));
        }
        _getNewObserver() {
          const t = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin,
          };
          return new IntersectionObserver((t) => this._observerCallback(t), t);
        }
        _observerCallback(t) {
          const e = (t) => this._targetLinks.get(`#${t.target.id}`),
            i = (t) => {
              ((this._previousScrollData.visibleEntryTop = t.target.offsetTop),
                this._process(e(t)));
            },
            n = (this._rootElement || document.documentElement).scrollTop,
            s = n >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = n;
          for (const o of t) {
            if (!o.isIntersecting) {
              ((this._activeTarget = null), this._clearActiveClass(e(o)));
              continue;
            }
            const t =
              o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (s && t) {
              if ((i(o), !n)) return;
            } else s || t || i(o);
          }
        }
        _initializeTargetsAndObservables() {
          ((this._targetLinks = new Map()),
            (this._observableSections = new Map()));
          const t = Ae.find(Os, this._config.target);
          for (const e of t) {
            if (!e.hash || zt(e)) continue;
            const t = Ae.findOne(decodeURI(e.hash), this._element);
            Wt(t) &&
              (this._targetLinks.set(decodeURI(e.hash), e),
              this._observableSections.set(e.hash, t));
          }
        }
        _process(t) {
          this._activeTarget !== t &&
            (this._clearActiveClass(this._config.target),
            (this._activeTarget = t),
            t.classList.add(xs),
            this._activateParents(t),
            me.trigger(this._element, As, { relatedTarget: t }));
        }
        _activateParents(t) {
          if (t.classList.contains("dropdown-item"))
            Ae.findOne(
              ".dropdown-toggle",
              t.closest(".dropdown"),
            ).classList.add(xs);
          else
            for (const e of Ae.parents(t, ".nav, .list-group"))
              for (const t of Ae.prev(e, Ls)) t.classList.add(xs);
        }
        _clearActiveClass(t) {
          t.classList.remove(xs);
          const e = Ae.find(`${Os}.${xs}`, t);
          for (const t of e) t.classList.remove(xs);
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = $s.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      (me.on(window, Cs, () => {
        for (const t of Ae.find('[data-bs-spy="scroll"]'))
          $s.getOrCreateInstance(t);
      }),
        Ut($s));
      const Is = ".bs.tab",
        Ns = `hide${Is}`,
        Ps = `hidden${Is}`,
        Ms = `show${Is}`,
        js = `shown${Is}`,
        Fs = `click${Is}`,
        Hs = `keydown${Is}`,
        qs = `load${Is}`,
        Bs = "ArrowLeft",
        Ws = "ArrowRight",
        zs = "ArrowUp",
        Rs = "ArrowDown",
        Vs = "Home",
        Ys = "End",
        Ks = "active",
        Qs = "fade",
        Xs = "show",
        Us = ".dropdown-toggle",
        Gs = `:not(${Us})`,
        Js =
          '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Zs = `${`.nav-link${Gs}, .list-group-item${Gs}, [role="tab"]${Gs}`}, ${Js}`,
        to = `.${Ks}[data-bs-toggle="tab"], .${Ks}[data-bs-toggle="pill"], .${Ks}[data-bs-toggle="list"]`;
      class eo extends we {
        constructor(t) {
          (super(t),
            (this._parent = this._element.closest(
              '.list-group, .nav, [role="tablist"]',
            )),
            this._parent &&
              (this._setInitialAttributes(this._parent, this._getChildren()),
              me.on(this._element, Hs, (t) => this._keydown(t))));
        }
        static get NAME() {
          return "tab";
        }
        show() {
          const t = this._element;
          if (this._elemIsActive(t)) return;
          const e = this._getActiveElem(),
            i = e ? me.trigger(e, Ns, { relatedTarget: t }) : null;
          me.trigger(t, Ms, { relatedTarget: e }).defaultPrevented ||
            (i && i.defaultPrevented) ||
            (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
          if (!t) return;
          (t.classList.add(Ks), this._activate(Ae.getElementFromSelector(t)));
          this._queueCallback(
            () => {
              "tab" === t.getAttribute("role")
                ? (t.removeAttribute("tabindex"),
                  t.setAttribute("aria-selected", !0),
                  this._toggleDropDown(t, !0),
                  me.trigger(t, js, { relatedTarget: e }))
                : t.classList.add(Xs);
            },
            t,
            t.classList.contains(Qs),
          );
        }
        _deactivate(t, e) {
          if (!t) return;
          (t.classList.remove(Ks),
            t.blur(),
            this._deactivate(Ae.getElementFromSelector(t)));
          this._queueCallback(
            () => {
              "tab" === t.getAttribute("role")
                ? (t.setAttribute("aria-selected", !1),
                  t.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(t, !1),
                  me.trigger(t, Ps, { relatedTarget: e }))
                : t.classList.remove(Xs);
            },
            t,
            t.classList.contains(Qs),
          );
        }
        _keydown(t) {
          if (![Bs, Ws, zs, Rs, Vs, Ys].includes(t.key)) return;
          (t.stopPropagation(), t.preventDefault());
          const e = this._getChildren().filter((t) => !zt(t));
          let i;
          if ([Vs, Ys].includes(t.key)) i = e[t.key === Vs ? 0 : e.length - 1];
          else {
            const n = [Ws, Rs].includes(t.key);
            i = Zt(e, t.target, n, !0);
          }
          i &&
            (i.focus({ preventScroll: !0 }), eo.getOrCreateInstance(i).show());
        }
        _getChildren() {
          return Ae.find(Zs, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((t) => this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
          this._setAttributeIfNotExists(t, "role", "tablist");
          for (const t of e) this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
          t = this._getInnerElement(t);
          const e = this._elemIsActive(t),
            i = this._getOuterElement(t);
          (t.setAttribute("aria-selected", e),
            i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
            e || t.setAttribute("tabindex", "-1"),
            this._setAttributeIfNotExists(t, "role", "tab"),
            this._setInitialAttributesOnTargetPanel(t));
        }
        _setInitialAttributesOnTargetPanel(t) {
          const e = Ae.getElementFromSelector(t);
          e &&
            (this._setAttributeIfNotExists(e, "role", "tabpanel"),
            t.id &&
              this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
        }
        _toggleDropDown(t, e) {
          const i = this._getOuterElement(t);
          if (!i.classList.contains("dropdown")) return;
          const n = (t, n) => {
            const s = Ae.findOne(t, i);
            s && s.classList.toggle(n, e);
          };
          (n(Us, Ks),
            n(".dropdown-menu", Xs),
            i.setAttribute("aria-expanded", e));
        }
        _setAttributeIfNotExists(t, e, i) {
          t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
          return t.classList.contains(Ks);
        }
        _getInnerElement(t) {
          return t.matches(Zs) ? t : Ae.findOne(Zs, t);
        }
        _getOuterElement(t) {
          return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = eo.getOrCreateInstance(this);
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                throw new TypeError(`No method named "${t}"`);
              e[t]();
            }
          });
        }
      }
      (me.on(document, Fs, Js, function (t) {
        (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
          zt(this) || eo.getOrCreateInstance(this).show());
      }),
        me.on(window, qs, () => {
          for (const t of Ae.find(to)) eo.getOrCreateInstance(t);
        }),
        Ut(eo));
      const io = ".bs.toast",
        no = `mouseover${io}`,
        so = `mouseout${io}`,
        oo = `focusin${io}`,
        ro = `focusout${io}`,
        ao = `hide${io}`,
        lo = `hidden${io}`,
        co = `show${io}`,
        ho = `shown${io}`,
        uo = "hide",
        fo = "show",
        po = "showing",
        mo = { animation: "boolean", autohide: "boolean", delay: "number" },
        go = { animation: !0, autohide: !0, delay: 5e3 };
      class _o extends we {
        constructor(t, e) {
          (super(t, e),
            (this._timeout = null),
            (this._hasMouseInteraction = !1),
            (this._hasKeyboardInteraction = !1),
            this._setListeners());
        }
        static get Default() {
          return go;
        }
        static get DefaultType() {
          return mo;
        }
        static get NAME() {
          return "toast";
        }
        show() {
          if (me.trigger(this._element, co).defaultPrevented) return;
          (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"));
          (this._element.classList.remove(uo),
            Yt(this._element),
            this._element.classList.add(fo, po),
            this._queueCallback(
              () => {
                (this._element.classList.remove(po),
                  me.trigger(this._element, ho),
                  this._maybeScheduleHide());
              },
              this._element,
              this._config.animation,
            ));
        }
        hide() {
          if (!this.isShown()) return;
          if (me.trigger(this._element, ao).defaultPrevented) return;
          (this._element.classList.add(po),
            this._queueCallback(
              () => {
                (this._element.classList.add(uo),
                  this._element.classList.remove(po, fo),
                  me.trigger(this._element, lo));
              },
              this._element,
              this._config.animation,
            ));
        }
        dispose() {
          (this._clearTimeout(),
            this.isShown() && this._element.classList.remove(fo),
            super.dispose());
        }
        isShown() {
          return this._element.classList.contains(fo);
        }
        _maybeScheduleHide() {
          this._config.autohide &&
            (this._hasMouseInteraction ||
              this._hasKeyboardInteraction ||
              (this._timeout = setTimeout(() => {
                this.hide();
              }, this._config.delay)));
        }
        _onInteraction(t, e) {
          switch (t.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = e;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = e;
          }
          if (e) return void this._clearTimeout();
          const i = t.relatedTarget;
          this._element === i ||
            this._element.contains(i) ||
            this._maybeScheduleHide();
        }
        _setListeners() {
          (me.on(this._element, no, (t) => this._onInteraction(t, !0)),
            me.on(this._element, so, (t) => this._onInteraction(t, !1)),
            me.on(this._element, oo, (t) => this._onInteraction(t, !0)),
            me.on(this._element, ro, (t) => this._onInteraction(t, !1)));
        }
        _clearTimeout() {
          (clearTimeout(this._timeout), (this._timeout = null));
        }
        static jQueryInterface(t) {
          return this.each(function () {
            const e = _o.getOrCreateInstance(this, t);
            if ("string" == typeof t) {
              if (void 0 === e[t])
                throw new TypeError(`No method named "${t}"`);
              e[t](this);
            }
          });
        }
      }
      (Te(_o), Ut(_o), (window.bootstrap = e));
      (i(973), i(50), i(736), i(23));
    })());
})();
