;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [547],
  {
    121: function (n, e, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/ssg',
        function () {
          return r(1472)
        },
      ])
    },
    8424: function (n, e, r) {
      'use strict'
      r.d(e, {
        Z: function () {
          return u
        },
      })
      var t = r(5893),
        i = r(1664),
        c = r.n(i)
      function u(n) {
        let { children: e } = n
        return (0, t.jsxs)('div', {
          children: [
            (0, t.jsx)('h2', {
              children: (0, t.jsx)(c(), { href: '/', children: 'Home' }),
            }),
            e,
          ],
        })
      }
    },
    1472: function (n, e, r) {
      'use strict'
      r.r(e),
        r.d(e, {
          __N_SSG: function () {
            return l
          },
          default: function () {
            return d
          },
        })
      var t = r(5893),
        i = r(7160),
        c = r.n(i),
        u = r(1664),
        s = r.n(u),
        h = r(1075),
        f = r(8424),
        l = !0
      function d(n) {
        let { time: e } = n
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)('h1', { className: c().title, children: e }),
            (0, t.jsx)('h2', {
              children: (0, t.jsx)(s(), { href: '/', children: 'Home' }),
            }),
            (0, t.jsx)('h2', {
              children: (0, t.jsx)(s(), { href: '/isr', children: 'ISR로' }),
            }),
          ],
        })
      }
      d.getLayout = function (n) {
        return (0, t.jsx)(h.Z, { children: (0, t.jsx)(f.Z, { children: n }) })
      }
    },
  },
  function (n) {
    n.O(0, [664, 774, 888, 179], function () {
      return n((n.s = 121))
    }),
      (_N_E = n.O())
  },
])
