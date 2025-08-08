import ne from "react";
import { clsx as oe } from "clsx";
import { twMerge as ae } from "tailwind-merge";
var g = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function ie() {
  if (F) return E;
  F = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function i(s, c, d) {
    var b = null;
    if (d !== void 0 && (b = "" + d), c.key !== void 0 && (b = "" + c.key), "key" in c) {
      d = {};
      for (var h in c)
        h !== "key" && (d[h] = c[h]);
    } else d = c;
    return c = d.ref, {
      $$typeof: t,
      type: s,
      key: b,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return E.Fragment = n, E.jsx = i, E.jsxs = i, E;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function se() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case z:
          return "Profiler";
        case J:
          return "StrictMode";
        case X:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case H:
            return "Portal";
          case B:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case N:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function i(e) {
      try {
        n(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), n(e);
      }
    }
    function s(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = v.A;
      return e === null ? null : e.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function b(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function h(e, r) {
      function a() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function U() {
      var e = t(this.type);
      return I[e] || (I[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function q(e, r, a, l, m, f, j, T) {
      return a = f.ref, e = {
        $$typeof: S,
        type: e,
        key: r,
        props: f,
        _owner: m
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: U
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, r, a, l, m, f, j, T) {
      var u = r.children;
      if (u !== void 0)
        if (l)
          if (re(u)) {
            for (l = 0; l < u.length; l++)
              O(u[l]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(u);
      if (C.call(r, "key")) {
        u = t(e);
        var x = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        l = 0 < x.length ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}", M[u + l] || (x = 0 < x.length ? "{" + x.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          u,
          x,
          u
        ), M[u + l] = !0);
      }
      if (u = null, a !== void 0 && (i(a), u = "" + a), b(r) && (i(r.key), u = "" + r.key), "key" in r) {
        a = {};
        for (var y in r)
          y !== "key" && (a[y] = r[y]);
      } else a = r;
      return u && h(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), q(
        e,
        u,
        f,
        m,
        c(),
        a,
        j,
        T
      );
    }
    function O(e) {
      typeof e == "object" && e !== null && e.$$typeof === S && e._store && (e._store.validated = 1);
    }
    var k = ne, S = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), B = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), v = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, re = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var Y, I = {}, L = k["react-stack-bottom-frame"].bind(
      k,
      d
    )(), $ = w(s(d)), M = {};
    R.Fragment = _, R.jsx = function(e, r, a, l, m) {
      var f = 1e4 > v.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        a,
        !1,
        l,
        m,
        f ? Error("react-stack-top-frame") : L,
        f ? w(s(e)) : $
      );
    }, R.jsxs = function(e, r, a, l, m) {
      var f = 1e4 > v.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        a,
        !0,
        l,
        m,
        f ? Error("react-stack-top-frame") : L,
        f ? w(s(e)) : $
      );
    };
  }()), R;
}
var W;
function ce() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? g.exports = ie() : g.exports = se()), g.exports;
}
var o = ce();
function p(...t) {
  return ae(oe(t));
}
function le({
  className: t,
  ...n
}) {
  return /* @__PURE__ */ o.jsx(
    "h1",
    {
      ...n,
      className: p(
        "text-black text-lg max-w-full text-center mx-auto",
        t
      )
    }
  );
}
function ue({
  className: t,
  ...n
}) {
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      ...n,
      className: p(
        "text-black flex flex-wrap gap-y-2 gap-x-4 min-[360px]:flex-nowrap min-[360px]:overflow-x-auto w-fit min-[360px]:w-fit min-[360px]:max-w-full mx-auto justify-center min-[360px]:justify-start min-[360px]:pb-2",
        t
      )
    }
  );
}
function de({
  className: t,
  ...n
}) {
  return /* @__PURE__ */ o.jsx(
    "a",
    {
      style: { color: "unset" },
      ...n,
      className: p(
        "border border-gray-300 rounded-lg px-4 py-2 w-max shrink-0",
        t
      )
    }
  );
}
function fe({
  className: t,
  ...n
}) {
  return /* @__PURE__ */ o.jsx(
    "section",
    {
      ...n,
      className: p("bg-white w-screen min-w-[320px] max-w-[min(100%,1280px)] h-auto grid gap-2 md:gap-4 p-2 md:p-4", t)
    }
  );
}
function me() {
  return /* @__PURE__ */ o.jsx(
    "input",
    {
      type: "checkbox",
      className: "peer hidden",
      id: "gld-read-more"
    }
  );
}
function pe({
  className: t,
  ...n
}) {
  return /* @__PURE__ */ o.jsx(
    "label",
    {
      ...n,
      className: p(
        "cursor-pointer inline-block peer-checked:block ml-2 peer-checked:mx-auto underline after:content-['Read_more'] peer-checked:after:content-['Read_less']",
        t
      ),
      htmlFor: "gld-read-more"
    }
  );
}
function A({
  className: t,
  initiallyHidden: n,
  comment: i,
  ...s
}) {
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(
    "span",
    {
      "data-comment": i && `${i}`,
      ...s,
      className: p(
        n ? "hidden peer-checked:inline" : "inline peer-checked:hidden",
        t
      )
    }
  ) });
}
function xe({
  className: t,
  copy: n = {
    intro: "Introductory text and teaser words go here. You can click 'Read more' to see the rest.",
    remainder: "You will find here the remainder of whatever you need to include and it can be hidden when not needed by clicking 'Read less'."
  },
  ...i
}) {
  const s = he(n);
  return /* @__PURE__ */ o.jsx(
    "p",
    {
      ...i,
      className: p("bg-white w-full text-black text-center mx-auto p-2", t),
      children: s
    }
  );
}
function be(t, n) {
  const i = /[^\w]$/, s = t.trim(), c = n ? s.replace(i, "") : s;
  return { strippedIntro: c, hasPunctuation: c !== s };
}
function he(t) {
  const { intro: n, remainder: i } = t, { strippedIntro: s, hasPunctuation: c } = be(
    n,
    i
  );
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    i && /* @__PURE__ */ o.jsx(me, {}),
    /* @__PURE__ */ o.jsx("span", { children: s }),
    c && /* @__PURE__ */ o.jsx(A, { comment: "End punctuation", initiallyHidden: !0, children: n.trim().at(-1) }),
    i && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(A, { comment: "Ellipses", children: "..." }),
      /* @__PURE__ */ o.jsx(
        A,
        {
          comment: "Remainder Copy",
          initiallyHidden: !0,
          children: ` ${i.trim()}`
        }
      ),
      /* @__PURE__ */ o.jsx(pe, {}),
      " "
    ] })
  ] });
}
function ge({
  disclosureCopy: t = {
    intro: "Introductory text and teaser words go here. You can click 'Read more' to see the rest.",
    remainder: "You will find here the remainder of whatever you need to include and it can be hidden when not needed by clicking 'Read less'."
  },
  buttons: n = [
    { url: "Missing Link", cta: "Call to Action" },
    { url: "Missing Link", cta: "Call to Action" },
    { url: "Missing Link", cta: "Call to Action" },
    { url: "Missing Link", cta: "Call to Action" },
    { url: "Missing Link", cta: "Call to Action" },
    { url: "Missing Link", cta: "Call to Action" }
  ]
}) {
  return /* @__PURE__ */ o.jsxs(fe, { children: [
    /* @__PURE__ */ o.jsx(le, { children: "PLP Header" }),
    /* @__PURE__ */ o.jsx(xe, { copy: t }),
    /* @__PURE__ */ o.jsx(ue, { children: n.map((i, s) => /* @__PURE__ */ o.jsx(de, { href: i.url, children: i.cta }, `button-${s}-${i.cta}`)) })
  ] });
}
export {
  le as BannerTitleH1,
  ue as ButtonWrapper,
  fe as CategoryBannerSection,
  xe as DisclosureParagraph,
  de as LinkButton,
  ge as PlpHeaderComplete
};
