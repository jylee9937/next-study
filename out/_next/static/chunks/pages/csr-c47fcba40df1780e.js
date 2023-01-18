;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6],
  {
    3803: function (n, e, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/csr',
        function () {
          return r(3318)
        },
      ])
    },
    8424: function (n, e, r) {
      'use strict'
      r.d(e, {
        Z: function () {
          return c
        },
      })
      var t = r(5893),
        i = r(1664),
        s = r.n(i)
      function c(n) {
        let { children: e } = n
        return (0, t.jsxs)('div', {
          children: [
            (0, t.jsx)('h2', {
              children: (0, t.jsx)(s(), { href: '/', children: 'Home' }),
            }),
            e,
          ],
        })
      }
    },
    3318: function (n, e, r) {
      'use strict'
      r.r(e),
        r.d(e, {
          default: function () {
            return d
          },
        })
      var t = r(5893),
        i = r(7160),
        s = r.n(i),
        c = r(1664),
        u = r.n(c),
        h = r(7294),
        f = r(1075),
        l = r(8424)
      function d() {
        let [n, e] = (0, h.useState)()
        return (
          (0, h.useEffect)(() => {
            e(new Date().toISOString())
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)('h1', { className: s().title, children: n }),
              (0, t.jsx)('h2', {
                children: (0, t.jsx)(u(), { href: '/', children: 'Home' }),
              }),
              (0, t.jsx)('h2', {
                children: (0, t.jsx)(u(), { href: '/ssg', children: 'SSG로' }),
              }),
              (0, t.jsx)('h2', {
                children: (0, t.jsx)(u(), { href: '/isr', children: 'ISR로' }),
              }),
            ],
          })
        )
      }
      d.getLayout = function (n) {
        return (0, t.jsx)(f.Z, { children: (0, t.jsx)(l.Z, { children: n }) })
      }
    },
  },
  function (n) {
    n.O(0, [664, 774, 888, 179], function () {
      return n((n.s = 3803))
    }),
      (_N_E = n.O())
  },
])
