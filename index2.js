;(self.webpackChunk = self.webpackChunk || []).push([
  ['862'],
  {
    5487: function () {
      'use strict'
      window.tram = (function (e) {
        function t (e, t) {
          return new w.Bare().init(e, t)
        }
        function a (e) {
          var t = parseInt(e.slice(1), 16)
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t]
        }
        function n (e, t, a) {
          return (
            '#' + (0x1000000 | (e << 16) | (t << 8) | a).toString(16).slice(1)
          )
        }
        function i () {}
        function c (e, t, a) {
          if ((void 0 !== t && (a = t), void 0 === e)) return a
          var n = a
          return (
            $.test(e) || !q.test(e)
              ? (n = parseInt(e, 10))
              : q.test(e) && (n = 1e3 * parseFloat(e)),
            0 > n && (n = 0),
            n == n ? n : a
          )
        }
        function o (e) {
          X.debug && window && window.console.warn(e)
        }
        var l,
          d,
          r,
          s = (function (e, t, a) {
            function n (e) {
              return 'object' == typeof e
            }
            function i (e) {
              return 'function' == typeof e
            }
            function c () {}
            return function o (l, d) {
              function r () {
                var e = new s()
                return i(e.init) && e.init.apply(e, arguments), e
              }
              function s () {}
              d === a && ((d = l), (l = Object)), (r.Bare = s)
              var u,
                f = (c[e] = l[e]),
                p = (s[e] = r[e] = new c())
              return (
                (p.constructor = r),
                (r.mixin = function (t) {
                  return (s[e] = r[e] = o(r, t)[e]), r
                }),
                (r.open = function (e) {
                  if (
                    ((u = {}),
                    i(e) ? (u = e.call(r, p, f, r, l)) : n(e) && (u = e),
                    n(u))
                  )
                    for (var a in u) t.call(u, a) && (p[a] = u[a])
                  return i(p.init) || (p.init = l), r
                }),
                r.open(d)
              )
            }
          })('prototype', {}.hasOwnProperty),
          u = {
            ease: [
              'ease',
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  c = i * e
                return (
                  t +
                  a *
                    (-2.75 * c * i + 11 * i * i + -15.5 * c + 8 * i + 0.25 * e)
                )
              }
            ],
            'ease-in': [
              'ease-in',
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  c = i * e
                return t + a * (-1 * c * i + 3 * i * i + -3 * c + 2 * i)
              }
            ],
            'ease-out': [
              'ease-out',
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  c = i * e
                return (
                  t +
                  a *
                    (0.3 * c * i + -1.6 * i * i + 2.2 * c + -1.8 * i + 1.9 * e)
                )
              }
            ],
            'ease-in-out': [
              'ease-in-out',
              function (e, t, a, n) {
                var i = (e /= n) * e,
                  c = i * e
                return t + a * (2 * c * i + -5 * i * i + 2 * c + 2 * i)
              }
            ],
            linear: [
              'linear',
              function (e, t, a, n) {
                return (a * e) / n + t
              }
            ],
            'ease-in-quad': [
              'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
              function (e, t, a, n) {
                return a * (e /= n) * e + t
              }
            ],
            'ease-out-quad': [
              'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
              function (e, t, a, n) {
                return -a * (e /= n) * (e - 2) + t
              }
            ],
            'ease-in-out-quad': [
              'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e + t
                  : (-a / 2) * (--e * (e - 2) - 1) + t
              }
            ],
            'ease-in-cubic': [
              'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
              function (e, t, a, n) {
                return a * (e /= n) * e * e + t
              }
            ],
            'ease-out-cubic': [
              'cubic-bezier(0.215, 0.610, 0.355, 1)',
              function (e, t, a, n) {
                return a * ((e = e / n - 1) * e * e + 1) + t
              }
            ],
            'ease-in-out-cubic': [
              'cubic-bezier(0.645, 0.045, 0.355, 1)',
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e + t
                  : (a / 2) * ((e -= 2) * e * e + 2) + t
              }
            ],
            'ease-in-quart': [
              'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
              function (e, t, a, n) {
                return a * (e /= n) * e * e * e + t
              }
            ],
            'ease-out-quart': [
              'cubic-bezier(0.165, 0.840, 0.440, 1)',
              function (e, t, a, n) {
                return -a * ((e = e / n - 1) * e * e * e - 1) + t
              }
            ],
            'ease-in-out-quart': [
              'cubic-bezier(0.770, 0, 0.175, 1)',
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e * e + t
                  : (-a / 2) * ((e -= 2) * e * e * e - 2) + t
              }
            ],
            'ease-in-quint': [
              'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
              function (e, t, a, n) {
                return a * (e /= n) * e * e * e * e + t
              }
            ],
            'ease-out-quint': [
              'cubic-bezier(0.230, 1, 0.320, 1)',
              function (e, t, a, n) {
                return a * ((e = e / n - 1) * e * e * e * e + 1) + t
              }
            ],
            'ease-in-out-quint': [
              'cubic-bezier(0.860, 0, 0.070, 1)',
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (a / 2) * e * e * e * e * e + t
                  : (a / 2) * ((e -= 2) * e * e * e * e + 2) + t
              }
            ],
            'ease-in-sine': [
              'cubic-bezier(0.470, 0, 0.745, 0.715)',
              function (e, t, a, n) {
                return -a * Math.cos((e / n) * (Math.PI / 2)) + a + t
              }
            ],
            'ease-out-sine': [
              'cubic-bezier(0.390, 0.575, 0.565, 1)',
              function (e, t, a, n) {
                return a * Math.sin((e / n) * (Math.PI / 2)) + t
              }
            ],
            'ease-in-out-sine': [
              'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
              function (e, t, a, n) {
                return (-a / 2) * (Math.cos((Math.PI * e) / n) - 1) + t
              }
            ],
            'ease-in-expo': [
              'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
              function (e, t, a, n) {
                return 0 === e ? t : a * Math.pow(2, 10 * (e / n - 1)) + t
              }
            ],
            'ease-out-expo': [
              'cubic-bezier(0.190, 1, 0.220, 1)',
              function (e, t, a, n) {
                return e === n
                  ? t + a
                  : a * (-Math.pow(2, (-10 * e) / n) + 1) + t
              }
            ],
            'ease-in-out-expo': [
              'cubic-bezier(1, 0, 0, 1)',
              function (e, t, a, n) {
                return 0 === e
                  ? t
                  : e === n
                  ? t + a
                  : (e /= n / 2) < 1
                  ? (a / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (a / 2) * (-Math.pow(2, -10 * --e) + 2) + t
              }
            ],
            'ease-in-circ': [
              'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
              function (e, t, a, n) {
                return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + t
              }
            ],
            'ease-out-circ': [
              'cubic-bezier(0.075, 0.820, 0.165, 1)',
              function (e, t, a, n) {
                return a * Math.sqrt(1 - (e = e / n - 1) * e) + t
              }
            ],
            'ease-in-out-circ': [
              'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
              function (e, t, a, n) {
                return (e /= n / 2) < 1
                  ? (-a / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (a / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
              }
            ],
            'ease-in-back': [
              'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  a * (e /= n) * e * ((i + 1) * e - i) + t
                )
              }
            ],
            'ease-out-back': [
              'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
                )
              }
            ],
            'ease-in-out-back': [
              'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
              function (e, t, a, n, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= n / 2) < 1
                    ? (a / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (a / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                )
              }
            ]
          },
          f = {
            'ease-in-back': 'cubic-bezier(0.600, 0, 0.735, 0.045)',
            'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1)',
            'ease-in-out-back': 'cubic-bezier(0.680, 0, 0.265, 1)'
          },
          p = window,
          E = 'bkwld-tram',
          I = /[\-\.0-9]/g,
          T = /[A-Z]/,
          y = 'number',
          g = /^(rgb|#)/,
          m = /(em|cm|mm|in|pt|pc|px)$/,
          b = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = 'unitless',
          L = /(all|none) 0s ease 0s/,
          _ = /^(width|height)$/,
          R = document.createElement('a'),
          N = ['Webkit', 'Moz', 'O', 'ms'],
          S = ['-webkit-', '-moz-', '-o-', '-ms-'],
          h = function (e) {
            if (e in R.style) return { dom: e, css: e }
            var t,
              a,
              n = '',
              i = e.split('-')
            for (t = 0; t < i.length; t++)
              n += i[t].charAt(0).toUpperCase() + i[t].slice(1)
            for (t = 0; t < N.length; t++)
              if ((a = N[t] + n) in R.style) return { dom: a, css: S[t] + e }
          },
          A = (t.support = {
            bind: Function.prototype.bind,
            transform: h('transform'),
            transition: h('transition'),
            backface: h('backface-visibility'),
            timing: h('transition-timing-function')
          })
        if (A.transition) {
          var M = A.timing.dom
          if (((R.style[M] = u['ease-in-back'][0]), !R.style[M]))
            for (var C in f) u[C][0] = f[C]
        }
        var k = (t.frame =
            (l =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && A.bind
              ? l.bind(p)
              : function (e) {
                  p.setTimeout(e, 16)
                }),
          U = (t.now =
            (r =
              (d = p.performance) &&
              (d.now || d.webkitNow || d.msNow || d.mozNow)) && A.bind
              ? r.bind(d)
              : Date.now ||
                function () {
                  return +new Date()
                }),
          V = s(function (t) {
            function a (e, t) {
              var a = (function (e) {
                  for (var t = -1, a = e ? e.length : 0, n = []; ++t < a; ) {
                    var i = e[t]
                    i && n.push(i)
                  }
                  return n
                })(('' + e).split(' ')),
                n = a[0]
              t = t || {}
              var i = H[n]
              if (!i) return o('Unsupported property: ' + n)
              if (!t.weak || !this.props[n]) {
                var c = i[0],
                  l = this.props[n]
                return (
                  l || (l = this.props[n] = new c.Bare()),
                  l.init(this.$el, a, i, t),
                  l
                )
              }
            }
            function n (e, t, n) {
              if (e) {
                var o = typeof e
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  'number' == o && t)
                )
                  return (
                    (this.timer = new D({
                      duration: e,
                      context: this,
                      complete: i
                    })),
                    void (this.active = !0)
                  )
                if ('string' == o && t) {
                  switch (e) {
                    case 'hide':
                      d.call(this)
                      break
                    case 'stop':
                      l.call(this)
                      break
                    case 'redraw':
                      r.call(this)
                      break
                    default:
                      a.call(this, e, n && n[1])
                  }
                  return i.call(this)
                }
                if ('function' == o) return void e.call(this, this)
                if ('object' == o) {
                  var f = 0
                  u.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t)
                    },
                    function (e) {
                      'wait' in e && (f = c(e.wait, 0))
                    }
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new D({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i))
                  var p = this,
                    E = !1,
                    I = {}
                  k(function () {
                    u.call(p, e, function (e) {
                      e.active && ((E = !0), (I[e.name] = e.nextStyle))
                    }),
                      E && p.$el.css(I)
                  })
                }
              }
            }
            function i () {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift()
                n.call(this, e.options, !0, e.args)
              }
            }
            function l (e) {
              var t
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                'string' == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = 'object' == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                s.call(this)
            }
            function d () {
              l.call(this), (this.el.style.display = 'none')
            }
            function r () {
              this.el.offsetHeight
            }
            function s () {
              var e,
                t,
                a = []
              for (e in (this.upstream && a.push(this.upstream), this.props))
                (t = this.props[e]).active && a.push(t.string)
              ;(a = a.join(',')),
                this.style !== a &&
                  ((this.style = a), (this.el.style[A.transition.dom] = a))
            }
            function u (e, t, n) {
              var i,
                c,
                o,
                l,
                d = t !== f,
                r = {}
              for (i in e)
                (o = e[i]),
                  i in z
                    ? (r.transform || (r.transform = {}), (r.transform[i] = o))
                    : (T.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return '-' + e.toLowerCase()
                        })),
                      i in H ? (r[i] = o) : (l || (l = {}), (l[i] = o)))
              for (i in r) {
                if (((o = r[i]), !(c = this.props[i]))) {
                  if (!d) continue
                  c = a.call(this, i)
                }
                t.call(this, c, o)
              }
              n && l && n.call(this, l)
            }
            function f (e) {
              e.stop()
            }
            function p (e, t) {
              e.set(t)
            }
            function I (e) {
              this.$el.css(e)
            }
            function y (e, a) {
              t[e] = function () {
                return this.children
                  ? g.call(this, a, arguments)
                  : (this.el && a.apply(this, arguments), this)
              }
            }
            function g (e, t) {
              var a,
                n = this.children.length
              for (a = 0; n > a; a++) e.apply(this.children[a], t)
              return this
            }
            ;(t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ''),
                (this.active = !1),
                X.keepInherited && !X.fallback)
              ) {
                var a = Y(this.el, 'transition')
                a && !L.test(a) && (this.upstream = a)
              }
              A.backface &&
                X.hideBackface &&
                W(this.el, A.backface.css, 'hidden')
            }),
              y('add', a),
              y('start', n),
              y('wait', function (e) {
                ;(e = c(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new D({
                        duration: e,
                        context: this,
                        complete: i
                      })),
                      (this.active = !0))
              }),
              y('then', function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : o(
                      'No active transition timer. Use start() or wait() before then().'
                    )
              }),
              y('next', i),
              y('stop', l),
              y('set', function (e) {
                l.call(this, e), u.call(this, e, p, I)
              }),
              y('show', function (e) {
                'string' != typeof e && (e = 'block'),
                  (this.el.style.display = e)
              }),
              y('hide', d),
              y('redraw', r),
              y('destroy', function () {
                l.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null)
              })
          }),
          w = s(V, function (t) {
            function a (t, a) {
              var n = e.data(t, E) || e.data(t, E, new V.Bare())
              return n.el || n.init(t), a ? n.start(a) : n
            }
            t.init = function (t, n) {
              var i = e(t)
              if (!i.length) return this
              if (1 === i.length) return a(i[0], n)
              var c = []
              return (
                i.each(function (e, t) {
                  c.push(a(t, n))
                }),
                (this.children = c),
                this
              )
            }
          }),
          B = s(function (e) {
            function t () {
              var e = this.get()
              this.update('auto')
              var t = this.get()
              return this.update(e), t
            }
            ;(e.init = function (e, t, a, n) {
              ;(this.$el = e), (this.el = e[0])
              var i,
                o,
                l,
                d = t[0]
              a[2] && (d = a[2]),
                j[d] && (d = j[d]),
                (this.name = d),
                (this.type = a[1]),
                (this.duration = c(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (o = this.ease),
                  (l = 'ease'),
                  void 0 !== o && (l = o),
                  i in u ? i : l)),
                (this.delay = c(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = _.test(this.name)),
                (this.unit = n.unit || this.unit || X.defaultUnit),
                (this.angle = n.angle || this.angle || X.defaultAngle),
                X.fallback || n.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      ' ' +
                      this.duration +
                      'ms' +
                      ('ease' != this.ease ? ' ' + u[this.ease][0] : '') +
                      (this.delay ? ' ' + this.delay + 'ms' : '')))
            }),
              (e.set = function (e) {
                ;(e = this.convert(e, this.type)), this.update(e), this.redraw()
              }),
              (e.transition = function (e) {
                ;(this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ('auto' == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    'auto' == e && (e = t.call(this))),
                  (this.nextStyle = e)
              }),
              (e.fallback = function (e) {
                var a =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type)
                ;(e = this.convert(e, this.type)),
                  this.auto &&
                    ('auto' == a && (a = this.convert(this.get(), this.type)),
                    'auto' == e && (e = t.call(this))),
                  (this.tween = new P({
                    from: a,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this
                  }))
              }),
              (e.get = function () {
                return Y(this.el, this.name)
              }),
              (e.update = function (e) {
                W(this.el, this.name, e)
              }),
              (e.stop = function () {
                ;(this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  W(this.el, this.name, this.get()))
                var e = this.tween
                e && e.context && e.destroy()
              }),
              (e.convert = function (e, t) {
                if ('auto' == e && this.auto) return e
                var a,
                  i,
                  c = 'number' == typeof e,
                  l = 'string' == typeof e
                switch (t) {
                  case y:
                    if (c) return e
                    if (l && '' === e.replace(I, '')) return +e
                    i = 'number(unitless)'
                    break
                  case g:
                    if (l) {
                      if ('' === e && this.original) return this.original
                      if (t.test(e))
                        return '#' == e.charAt(0) && 7 == e.length
                          ? e
                          : ((a = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? n(a[1], a[2], a[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, '#$1$1$2$2$3$3')
                    }
                    i = 'hex or rgb string'
                    break
                  case m:
                    if (c) return e + this.unit
                    if (l && t.test(e)) return e
                    i = 'number(px) or string(unit)'
                    break
                  case b:
                    if (c) return e + this.unit
                    if (l && t.test(e)) return e
                    i = 'number(px) or string(unit or %)'
                    break
                  case O:
                    if (c) return e + this.angle
                    if (l && t.test(e)) return e
                    i = 'number(deg) or string(angle)'
                    break
                  case v:
                    if (c || (l && b.test(e))) return e
                    i = 'number(unitless) or string(unit or %)'
                }
                return (
                  o(
                    'Type warning: Expected: [' +
                      i +
                      '] Got: [' +
                      typeof e +
                      '] ' +
                      e
                  ),
                  e
                )
              }),
              (e.redraw = function () {
                this.el.offsetHeight
              })
          }),
          F = s(B, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), g))
            }
          }),
          G = s(B, function (e, t) {
            ;(e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback)
            }),
              (e.get = function () {
                return this.$el[this.name]()
              }),
              (e.update = function (e) {
                this.$el[this.name](e)
              })
          }),
          x = s(B, function (e, t) {
            function a (e, t) {
              var a, n, i, c, o
              for (a in e)
                (i = (c = z[a])[0]),
                  (n = c[1] || a),
                  (o = this.convert(e[a], i)),
                  t.call(this, n, o, i)
            }
            ;(e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  z.perspective &&
                    X.perspective &&
                    ((this.current.perspective = X.perspective),
                    W(this.el, this.name, this.style(this.current)),
                    this.redraw()))
            }),
              (e.set = function (e) {
                a.call(this, e, function (e, t) {
                  this.current[e] = t
                }),
                  W(this.el, this.name, this.style(this.current)),
                  this.redraw()
              }),
              (e.transition = function (e) {
                var t = this.values(e)
                this.tween = new Q({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease
                })
                var a,
                  n = {}
                for (a in this.current) n[a] = a in t ? t[a] : this.current[a]
                ;(this.active = !0), (this.nextStyle = this.style(n))
              }),
              (e.fallback = function (e) {
                var t = this.values(e)
                this.tween = new Q({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this
                })
              }),
              (e.update = function () {
                W(this.el, this.name, this.style(this.current))
              }),
              (e.style = function (e) {
                var t,
                  a = ''
                for (t in e) a += t + '(' + e[t] + ') '
                return a
              }),
              (e.values = function (e) {
                var t,
                  n = {}
                return (
                  a.call(this, e, function (e, a, i) {
                    ;(n[e] = a),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf('scale') && (t = 1),
                        (this.current[e] = this.convert(t, i)))
                  }),
                  n
                )
              })
          }),
          P = s(function (t) {
            function c () {
              var e,
                t,
                a,
                n = d.length
              if (n) for (k(c), t = U(), e = n; e--; ) (a = d[e]) && a.render(t)
            }
            var l = { ease: u.ease[1], from: 0, to: 1 }
            ;(t.init = function (e) {
              ;(this.duration = e.duration || 0), (this.delay = e.delay || 0)
              var t = e.ease || l.ease
              u[t] && (t = u[t][1]),
                'function' != typeof t && (t = l.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name)
              var a = e.from,
                n = e.to
              void 0 === a && (a = l.from),
                void 0 === n && (n = l.to),
                (this.unit = e.unit || ''),
                'number' == typeof a && 'number' == typeof n
                  ? ((this.begin = a), (this.change = n - a))
                  : this.format(n, a),
                (this.value = this.begin + this.unit),
                (this.start = U()),
                !1 !== e.autoplay && this.play()
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = U()),
                  (this.active = !0),
                  1 === d.push(this) && k(c))
              }),
              (t.stop = function () {
                var t, a
                this.active &&
                  ((this.active = !1),
                  (a = e.inArray(this, d)) >= 0 &&
                    ((t = d.slice(a + 1)),
                    (d.length = a),
                    t.length && (d = d.concat(t))))
              }),
              (t.render = function (e) {
                var t,
                  a = e - this.start
                if (this.delay) {
                  if (a <= this.delay) return
                  a -= this.delay
                }
                if (a < this.duration) {
                  var i,
                    c,
                    o = this.ease(a, 0, 1, this.duration)
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (c = this.endRGB),
                        n(
                          i[0] + o * (c[0] - i[0]),
                          i[1] + o * (c[1] - i[1]),
                          i[2] + o * (c[2] - i[2])
                        ))
                      : Math.round((this.begin + o * this.change) * r) / r),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  )
                }
                ;(t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy()
              }),
              (t.format = function (e, t) {
                if (((t += ''), '#' == (e += '').charAt(0)))
                  return (
                    (this.startRGB = a(t)),
                    (this.endRGB = a(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  )
                if (!this.unit) {
                  var n = t.replace(I, '')
                  n !== e.replace(I, '') &&
                    o('Units do not match [tween]: ' + t + ', ' + e),
                    (this.unit = n)
                }
                ;(t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t)
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i)
              })
            var d = [],
              r = 1e3
          }),
          D = s(P, function (e) {
            ;(e.init = function (e) {
              ;(this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play()
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy())
              })
          }),
          Q = s(P, function (e, t) {
            ;(e.init = function (e) {
              var t, a
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (a = e.values[t]),
                  this.current[t] !== a &&
                    this.tweens.push(
                      new P({
                        name: t,
                        from: this.current[t],
                        to: a,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1
                      })
                    )
              this.play()
            }),
              (e.render = function (e) {
                var t,
                  a,
                  n = this.tweens.length,
                  i = !1
                for (t = n; t--; )
                  (a = this.tweens[t]).context &&
                    (a.render(e), (this.current[a.name] = a.value), (i = !0))
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy()
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy()
                  ;(this.tweens = null), (this.current = null)
                }
              })
          }),
          X = (t.config = {
            debug: !1,
            defaultUnit: 'px',
            defaultAngle: 'deg',
            keepInherited: !1,
            hideBackface: !1,
            perspective: '',
            fallback: !A.transition,
            agentTests: []
          })
        ;(t.fallback = function (e) {
          if (!A.transition) return (X.fallback = !0)
          X.agentTests.push('(' + e + ')')
          var t = RegExp(X.agentTests.join('|'), 'i')
          X.fallback = t.test(navigator.userAgent)
        }),
          t.fallback('6.0.[2-5] Safari'),
          (t.tween = function (e) {
            return new P(e)
          }),
          (t.delay = function (e, t, a) {
            return new D({ complete: t, duration: e, context: a })
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e)
          })
        var W = e.style,
          Y = e.css,
          j = { transform: A.transform && A.transform.css },
          H = {
            color: [F, g],
            background: [F, g, 'background-color'],
            'outline-color': [F, g],
            'border-color': [F, g],
            'border-top-color': [F, g],
            'border-right-color': [F, g],
            'border-bottom-color': [F, g],
            'border-left-color': [F, g],
            'border-width': [B, m],
            'border-top-width': [B, m],
            'border-right-width': [B, m],
            'border-bottom-width': [B, m],
            'border-left-width': [B, m],
            'border-spacing': [B, m],
            'letter-spacing': [B, m],
            margin: [B, m],
            'margin-top': [B, m],
            'margin-right': [B, m],
            'margin-bottom': [B, m],
            'margin-left': [B, m],
            padding: [B, m],
            'padding-top': [B, m],
            'padding-right': [B, m],
            'padding-bottom': [B, m],
            'padding-left': [B, m],
            'outline-width': [B, m],
            opacity: [B, y],
            top: [B, b],
            right: [B, b],
            bottom: [B, b],
            left: [B, b],
            'font-size': [B, b],
            'text-indent': [B, b],
            'word-spacing': [B, b],
            width: [B, b],
            'min-width': [B, b],
            'max-width': [B, b],
            height: [B, b],
            'min-height': [B, b],
            'max-height': [B, b],
            'line-height': [B, v],
            'scroll-top': [G, y, 'scrollTop'],
            'scroll-left': [G, y, 'scrollLeft']
          },
          z = {}
        A.transform &&
          ((H.transform = [x]),
          (z = {
            x: [b, 'translateX'],
            y: [b, 'translateY'],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [y],
            scaleX: [y],
            scaleY: [y],
            skew: [O],
            skewX: [O],
            skewY: [O]
          })),
          A.transform &&
            A.backface &&
            ((z.z = [b, 'translateZ']),
            (z.rotateZ = [O]),
            (z.scaleZ = [y]),
            (z.perspective = [m]))
        var $ = /ms/,
          q = /s|\./
        return (e.tram = t)
      })(window.jQuery)
    },
    5756: function (e, t, a) {
      'use strict'
      var n,
        i,
        c,
        o,
        l,
        d,
        r,
        s,
        u,
        f,
        p,
        E,
        I,
        T,
        y,
        g,
        m,
        b,
        O,
        v,
        L = window.$,
        _ = a(5487) && L.tram
      ;((n = {}).VERSION = '1.6.0-Webflow'),
        (i = {}),
        (c = Array.prototype),
        (o = Object.prototype),
        (l = Function.prototype),
        c.push,
        (d = c.slice),
        c.concat,
        o.toString,
        (r = o.hasOwnProperty),
        (s = c.forEach),
        (u = c.map),
        c.reduce,
        c.reduceRight,
        (f = c.filter),
        c.every,
        (p = c.some),
        (E = c.indexOf),
        c.lastIndexOf,
        (I = Object.keys),
        l.bind,
        (T =
          n.each =
          n.forEach =
            function (e, t, a) {
              if (null == e) return e
              if (s && e.forEach === s) e.forEach(t, a)
              else if (e.length === +e.length) {
                for (var c = 0, o = e.length; c < o; c++)
                  if (t.call(a, e[c], c, e) === i) return
              } else
                for (var l = n.keys(e), c = 0, o = l.length; c < o; c++)
                  if (t.call(a, e[l[c]], l[c], e) === i) return
              return e
            }),
        (n.map = n.collect =
          function (e, t, a) {
            var n = []
            return null == e
              ? n
              : u && e.map === u
              ? e.map(t, a)
              : (T(e, function (e, i, c) {
                  n.push(t.call(a, e, i, c))
                }),
                n)
          }),
        (n.find = n.detect =
          function (e, t, a) {
            var n
            return (
              y(e, function (e, i, c) {
                if (t.call(a, e, i, c)) return (n = e), !0
              }),
              n
            )
          }),
        (n.filter = n.select =
          function (e, t, a) {
            var n = []
            return null == e
              ? n
              : f && e.filter === f
              ? e.filter(t, a)
              : (T(e, function (e, i, c) {
                  t.call(a, e, i, c) && n.push(e)
                }),
                n)
          }),
        (y =
          n.some =
          n.any =
            function (e, t, a) {
              t || (t = n.identity)
              var c = !1
              return null == e
                ? c
                : p && e.some === p
                ? e.some(t, a)
                : (T(e, function (e, n, o) {
                    if (c || (c = t.call(a, e, n, o))) return i
                  }),
                  !!c)
            }),
        (n.contains = n.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : y(e, function (e) {
                    return e === t
                  }))
            )
          }),
        (n.delay = function (e, t) {
          var a = d.call(arguments, 2)
          return setTimeout(function () {
            return e.apply(null, a)
          }, t)
        }),
        (n.defer = function (e) {
          return n.delay.apply(n, [e, 1].concat(d.call(arguments, 1)))
        }),
        (n.throttle = function (e) {
          var t, a, n
          return function () {
            t ||
              ((t = !0),
              (a = arguments),
              (n = this),
              _.frame(function () {
                ;(t = !1), e.apply(n, a)
              }))
          }
        }),
        (n.debounce = function (e, t, a) {
          var i,
            c,
            o,
            l,
            d,
            r = function () {
              var s = n.now() - l
              s < t
                ? (i = setTimeout(r, t - s))
                : ((i = null), a || ((d = e.apply(o, c)), (o = c = null)))
            }
          return function () {
            ;(o = this), (c = arguments), (l = n.now())
            var s = a && !i
            return (
              i || (i = setTimeout(r, t)),
              s && ((d = e.apply(o, c)), (o = c = null)),
              d
            )
          }
        }),
        (n.defaults = function (e) {
          if (!n.isObject(e)) return e
          for (var t = 1, a = arguments.length; t < a; t++) {
            var i = arguments[t]
            for (var c in i) void 0 === e[c] && (e[c] = i[c])
          }
          return e
        }),
        (n.keys = function (e) {
          if (!n.isObject(e)) return []
          if (I) return I(e)
          var t = []
          for (var a in e) n.has(e, a) && t.push(a)
          return t
        }),
        (n.has = function (e, t) {
          return r.call(e, t)
        }),
        (n.isObject = function (e) {
          return e === Object(e)
        }),
        (n.now =
          Date.now ||
          function () {
            return new Date().getTime()
          }),
        (n.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        }),
        (g = /(.)^/),
        (m = {
          "'": "'",
          '\\': '\\',
          '\r': 'r',
          '\n': 'n',
          '\u2028': 'u2028',
          '\u2029': 'u2029'
        }),
        (b = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return '\\' + m[e]
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (n.template = function (e, t, a) {
          !t && a && (t = a)
          var i,
            c = RegExp(
              [
                ((t = n.defaults({}, t, n.templateSettings)).escape || g)
                  .source,
                (t.interpolate || g).source,
                (t.evaluate || g).source
              ].join('|') + '|$',
              'g'
            ),
            o = 0,
            l = "__p+='"
          e.replace(c, function (t, a, n, i, c) {
            return (
              (l += e.slice(o, c).replace(b, O)),
              (o = c + t.length),
              a
                ? (l += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'")
                : n
                ? (l += "'+\n((__t=(" + n + "))==null?'':__t)+\n'")
                : i && (l += "';\n" + i + "\n__p+='"),
              t
            )
          }),
            (l += "';\n")
          var d = t.variable
          if (d) {
            if (!v.test(d))
              throw Error('variable is not a bare identifier: ' + d)
          } else (l = 'with(obj||{}){\n' + l + '}\n'), (d = 'obj')
          l =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            l +
            'return __p;\n'
          try {
            i = Function(t.variable || 'obj', '_', l)
          } catch (e) {
            throw ((e.source = l), e)
          }
          var r = function (e) {
            return i.call(this, e, n)
          }
          return (r.source = 'function(' + d + '){\n' + l + '}'), r
        }),
        (e.exports = n)
    },
    9461: function (e, t, a) {
      'use strict'
      var n = a(3949)
      n.define(
        'brand',
        (e.exports = function (e) {
          var t,
            a = {},
            i = document,
            c = e('html'),
            o = e('body'),
            l = window.location,
            d = /PhantomJS/i.test(navigator.userAgent),
            r =
              'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange'
          function s () {
            var a =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement
            e(t).attr('style', a ? 'display: none !important;' : '')
          }
          function u () {
            var e = o.children('.w-wavecgi-badge'),
              a = e.length && e.get(0) === t,
              i = n.env('editor')
            if (a) {
              i && e.remove()
              return
            }
            e.length && e.remove(), i || o.append(t)
          }
          return (
            (a.ready = function () {
              var a,
                n,
                o,
                f = c.attr('data-wf-status'),
                p = c.attr('data-wf-domain') || ''
              ;/\.webflow\.io$/i.test(p) && l.hostname !== p && (f = !0),
                f &&
                  !d &&
                  ((t =
                    t ||
                    ((a = e('<a class="w-wavecgi-badge"></a>').attr(
                      'href',
                      'https://wavecgi.com?utm_campaign=brandjs'
                    )),
                    (n = e('<img>')
                      .attr(
                        'src',
                        ''
                      )
                      .attr('alt', '')
                      .css({ marginRight: '4px', width: '26px' })),
                    (o = e('<img>')
                      .attr(
                        'src',
                        ''
                      )
                      .attr('alt', '')),
                    a.append(n, o),
                    a[0])),
                  u(),
                  setTimeout(u, 500),
                  e(i).off(r, s).on(r, s))
            }),
            a
          )
        })
      )
    },
    322: function (e, t, a) {
      'use strict'
      var n = a(3949)
      n.define(
        'edit',
        (e.exports = function (e, t, a) {
          if (
            ((a = a || {}),
            (n.env('test') || n.env('frame')) &&
              !a.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                } catch (e) {
                  return !1
                }
              })())
          )
            return { exit: 1 }
          var i,
            c = e(window),
            o = e(document.documentElement),
            l = document.location,
            d = 'hashchange',
            r =
              a.load ||
              function () {
                var t, a, n
                ;(i = !0),
                  (window.WebflowEditor = !0),
                  c.off(d, u),
                  (t = function (t) {
                    var a
                    e.ajax({
                      url: p('https://editor-api.webflow.com/api/editor/view'),
                      data: { siteId: o.attr('data-wf-site') },
                      xhrFields: { withCredentials: !0 },
                      dataType: 'json',
                      crossDomain: !0,
                      success:
                        ((a = t),
                        function (t) {
                          var n, i, c
                          if (!t)
                            return void console.error(
                              'Could not load editor data'
                            )
                          ;(t.thirdPartyCookiesSupported = a),
                            (i =
                              (n = t.scriptPath).indexOf('//') >= 0
                                ? n
                                : p('https://editor-api.webflow.com' + n)),
                            (c = function () {
                              window.WebflowEditor(t)
                            }),
                            e
                              .ajax({
                                type: 'GET',
                                url: i,
                                dataType: 'script',
                                cache: !0
                              })
                              .then(c, f)
                        })
                    })
                  }),
                  ((a = window.document.createElement('iframe')).src =
                    'https://webflow.com/site/third-party-cookie-check.html'),
                  (a.style.display = 'none'),
                  (a.sandbox = 'allow-scripts allow-same-origin'),
                  (n = function (e) {
                    'WF_third_party_cookies_unsupported' === e.data
                      ? (E(a, n), t(!1))
                      : 'WF_third_party_cookies_supported' === e.data &&
                        (E(a, n), t(!0))
                  }),
                  (a.onerror = function () {
                    E(a, n), t(!1)
                  }),
                  window.addEventListener('message', n, !1),
                  window.document.body.appendChild(a)
              },
            s = !1
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem('WebflowEditor')
          } catch (e) {}
          function u () {
            !i && /\?edit/.test(l.hash) && r()
          }
          function f (e, t, a) {
            throw (console.error('Could not load editor script: ' + t), a)
          }
          function p (e) {
            return e.replace(/([^:])\/\//g, '$1/')
          }
          function E (e, t) {
            window.removeEventListener('message', t, !1), e.remove()
          }
          return (
            s
              ? r()
              : l.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(l.search) ||
                  /\?edit$/.test(l.href)) &&
                r()
              : c.on(d, u).triggerHandler(d),
            {}
          )
        })
      )
    },
    2338: function (e, t, a) {
      'use strict'
      a(3949).define(
        'focus-visible',
        (e.exports = function () {
          return {
            ready: function () {
              if ('undefined' != typeof document)
                try {
                  document.querySelector(':focus-visible')
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      a = !1,
                      n = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        'datetime-local': !0
                      }
                    function c (e) {
                      return (
                        !!e &&
                        e !== document &&
                        'HTML' !== e.nodeName &&
                        'BODY' !== e.nodeName &&
                        'classList' in e &&
                        'contains' in e.classList
                      )
                    }
                    function o (e) {
                      e.getAttribute('data-wf-focus-visible') ||
                        e.setAttribute('data-wf-focus-visible', 'true')
                    }
                    function l () {
                      t = !1
                    }
                    function d () {
                      document.addEventListener('mousemove', r),
                        document.addEventListener('mousedown', r),
                        document.addEventListener('mouseup', r),
                        document.addEventListener('pointermove', r),
                        document.addEventListener('pointerdown', r),
                        document.addEventListener('pointerup', r),
                        document.addEventListener('touchmove', r),
                        document.addEventListener('touchstart', r),
                        document.addEventListener('touchend', r)
                    }
                    function r (e) {
                      ;(e.target.nodeName &&
                        'html' === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener('mousemove', r),
                        document.removeEventListener('mousedown', r),
                        document.removeEventListener('mouseup', r),
                        document.removeEventListener('pointermove', r),
                        document.removeEventListener('pointerdown', r),
                        document.removeEventListener('pointerup', r),
                        document.removeEventListener('touchmove', r),
                        document.removeEventListener('touchstart', r),
                        document.removeEventListener('touchend', r))
                    }
                    document.addEventListener(
                      'keydown',
                      function (a) {
                        a.metaKey ||
                          a.altKey ||
                          a.ctrlKey ||
                          (c(e.activeElement) && o(e.activeElement), (t = !0))
                      },
                      !0
                    ),
                      document.addEventListener('mousedown', l, !0),
                      document.addEventListener('pointerdown', l, !0),
                      document.addEventListener('touchstart', l, !0),
                      document.addEventListener(
                        'visibilitychange',
                        function () {
                          'hidden' === document.visibilityState &&
                            (a && (t = !0), d())
                        },
                        !0
                      ),
                      d(),
                      e.addEventListener(
                        'focus',
                        function (e) {
                          if (c(e.target)) {
                            var a, n, l
                            ;(t ||
                              ((n = (a = e.target).type),
                              ('INPUT' === (l = a.tagName) &&
                                i[n] &&
                                !a.readOnly) ||
                                ('TEXTAREA' === l && !a.readOnly) ||
                                a.isContentEditable ||
                                0)) &&
                              o(e.target)
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        'blur',
                        function (e) {
                          if (
                            c(e.target) &&
                            e.target.hasAttribute('data-wf-focus-visible')
                          ) {
                            var t
                            ;(a = !0),
                              window.clearTimeout(n),
                              (n = window.setTimeout(function () {
                                a = !1
                              }, 100)),
                              (t = e.target).getAttribute(
                                'data-wf-focus-visible'
                              ) && t.removeAttribute('data-wf-focus-visible')
                          }
                        },
                        !0
                      )
                  })(document)
                }
            }
          }
        })
      )
    },
    8334: function (e, t, a) {
      'use strict'
      var n = a(3949)
      n.define(
        'focus',
        (e.exports = function () {
          var e = [],
            t = !1
          function a (a) {
            t &&
              (a.preventDefault(),
              a.stopPropagation(),
              a.stopImmediatePropagation(),
              e.unshift(a))
          }
          function i (a) {
            var n, i
            ;(i = (n = a.target).tagName),
              ((/^a$/i.test(i) && null != n.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== n.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(n.type) &&
                  !n.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(n.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === n.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, a.target.focus(); e.length > 0; ) {
                    var n = e.pop()
                    n.target.dispatchEvent(new MouseEvent(n.type, n))
                  }
                }, 0))
          }
          return {
            ready: function () {
              'undefined' != typeof document &&
                document.body.hasAttribute('data-wf-focus-within') &&
                n.env.safari &&
                (document.addEventListener('mousedown', i, !0),
                document.addEventListener('mouseup', a, !0),
                document.addEventListener('click', a, !0))
            }
          }
        })
      )
    },
    7199: function (e) {
      'use strict'
      var t = window.jQuery,
        a = {},
        n = [],
        i = '.w-ix',
        c = {
          reset: function (e, t) {
            t.__wf_intro = null
          },
          intro: function (e, n) {
            n.__wf_intro ||
              ((n.__wf_intro = !0), t(n).triggerHandler(a.types.INTRO))
          },
          outro: function (e, n) {
            n.__wf_intro &&
              ((n.__wf_intro = null), t(n).triggerHandler(a.types.OUTRO))
          }
        }
      ;(a.triggers = {}),
        (a.types = { INTRO: 'w-ix-intro' + i, OUTRO: 'w-ix-outro' + i }),
        (a.init = function () {
          for (var e = n.length, i = 0; i < e; i++) {
            var o = n[i]
            o[0](0, o[1])
          }
          ;(n = []), t.extend(a.triggers, c)
        }),
        (a.async = function () {
          for (var e in c) {
            var t = c[e]
            c.hasOwnProperty(e) &&
              (a.triggers[e] = function (e, a) {
                n.push([t, a])
              })
          }
        }),
        a.async(),
        (e.exports = a)
    },
    5134: function (e, t, a) {
      'use strict'
      var n = a(7199)
      function i (e, t) {
        var a = document.createEvent('CustomEvent')
        a.initCustomEvent(t, !0, !0, null), e.dispatchEvent(a)
      }
      var c = window.jQuery,
        o = {},
        l = '.w-ix'
      ;(o.triggers = {}),
        (o.types = { INTRO: 'w-ix-intro' + l, OUTRO: 'w-ix-outro' + l }),
        c.extend(o.triggers, {
          reset: function (e, t) {
            n.triggers.reset(e, t)
          },
          intro: function (e, t) {
            n.triggers.intro(e, t), i(t, 'COMPONENT_ACTIVE')
          },
          outro: function (e, t) {
            n.triggers.outro(e, t), i(t, 'COMPONENT_INACTIVE')
          }
        }),
        (e.exports = o)
    },
    941: function (e, t, a) {
      'use strict'
      var n = a(3949),
        i = a(6011)
      i.setEnv(n.env),
        n.define(
          'ix2',
          (e.exports = function () {
            return i
          })
        )
    },
    3949: function (e, t, a) {
      'use strict'
      var n,
        i,
        c = {},
        o = {},
        l = [],
        d = window.Webflow || [],
        r = window.jQuery,
        s = r(window),
        u = r(document),
        f = r.isFunction,
        p = (c._ = a(5756)),
        E = (c.tram = a(5487) && r.tram),
        I = !1,
        T = !1
      function y (e) {
        c.env() &&
          (f(e.design) && s.on('__wf_design', e.design),
          f(e.preview) && s.on('__wf_preview', e.preview)),
          f(e.destroy) && s.on('__wf_destroy', e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (I) return e.ready()
              p.contains(l, e.ready) || l.push(e.ready)
            })(e)
      }
      function g (e) {
        var t
        f(e.design) && s.off('__wf_design', e.design),
          f(e.preview) && s.off('__wf_preview', e.preview),
          f(e.destroy) && s.off('__wf_destroy', e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (l = p.filter(l, function (e) {
              return e !== t.ready
            })))
      }
      ;(E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (c.define = function (e, t, a) {
          o[e] && g(o[e])
          var n = (o[e] = t(r, p, a) || {})
          return y(n), n
        }),
        (c.require = function (e) {
          return o[e]
        }),
        (c.push = function (e) {
          if (I) {
            f(e) && e()
            return
          }
          d.push(e)
        }),
        (c.env = function (e) {
          var t = window.__wf_design,
            a = void 0 !== t
          return e
            ? 'design' === e
              ? a && t
              : 'preview' === e
              ? a && !t
              : 'slug' === e
              ? a && window.__wf_slug
              : 'editor' === e
              ? window.WebflowEditor
              : 'test' === e
              ? window.__wf_test
              : 'frame' === e
              ? window !== window.top
              : void 0
            : a
        })
      var m = navigator.userAgent.toLowerCase(),
        b = (c.env.touch =
          'ontouchstart' in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (c.env.chrome =
          /chrome/.test(m) &&
          /Google/.test(navigator.vendor) &&
          parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
        v = (c.env.ios = /(ipod|iphone|ipad)/.test(m))
      ;(c.env.safari = /safari/.test(m) && !O && !v),
        b &&
          u.on('touchstart mousedown', function (e) {
            n = e.target
          }),
        (c.validClick = b
          ? function (e) {
              return e === n || r.contains(e, n)
            }
          : function () {
              return !0
            })
      var L = 'resize.webflow orientationchange.webflow load.webflow',
        _ = 'scroll.webflow ' + L
      function R (e, t) {
        var a = [],
          n = {}
        return (
          (n.up = p.throttle(function (e) {
            p.each(a, function (t) {
              t(e)
            })
          })),
          e && t && e.on(t, n.up),
          (n.on = function (e) {
            'function' == typeof e && (p.contains(a, e) || a.push(e))
          }),
          (n.off = function (e) {
            if (!arguments.length) {
              a = []
              return
            }
            a = p.filter(a, function (t) {
              return t !== e
            })
          }),
          n
        )
      }
      function N (e) {
        f(e) && e()
      }
      function S () {
        i && (i.reject(), s.off('load', i.resolve)),
          (i = new r.Deferred()),
          s.on('load', i.resolve)
      }
      ;(c.resize = R(s, L)),
        (c.scroll = R(s, _)),
        (c.redraw = R()),
        (c.location = function (e) {
          window.location = e
        }),
        c.env() && (c.location = function () {}),
        (c.ready = function () {
          ;(I = !0),
            T ? ((T = !1), p.each(o, y)) : p.each(l, N),
            p.each(d, N),
            c.resize.up()
        }),
        (c.load = function (e) {
          i.then(e)
        }),
        (c.destroy = function (e) {
          ;(e = e || {}),
            (T = !0),
            s.triggerHandler('__wf_destroy'),
            null != e.domready && (I = e.domready),
            p.each(o, g),
            c.resize.off(),
            c.scroll.off(),
            c.redraw.off(),
            (l = []),
            (d = []),
            'pending' === i.state() && S()
        }),
        r(c.ready),
        S(),
        (e.exports = window.Webflow = c)
    },
    7624: function (e, t, a) {
      'use strict'
      var n = a(3949)
      n.define(
        'links',
        (e.exports = function (e, t) {
          var a,
            i,
            c,
            o = {},
            l = e(window),
            d = n.env(),
            r = window.location,
            s = document.createElement('a'),
            u = 'w--current',
            f = /index\.(html|php)$/,
            p = /\/$/
          function E () {
            var e = l.scrollTop(),
              a = l.height()
            t.each(i, function (t) {
              if (!t.link.attr('hreflang')) {
                var n = t.link,
                  i = t.sec,
                  c = i.offset().top,
                  o = i.outerHeight(),
                  l = 0.5 * a,
                  d = i.is(':visible') && c + o - l >= e && c + l <= e + a
                t.active !== d && ((t.active = d), I(n, u, d))
              }
            })
          }
          function I (e, t, a) {
            var n = e.hasClass(t)
            ;(!a || !n) && (a || n) && (a ? e.addClass(t) : e.removeClass(t))
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  ;(a = d && n.env('design')),
                    (c = n.env('slug') || r.pathname || ''),
                    n.scroll.off(E),
                    (i = [])
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute('hreflang')) {
                        var n =
                          (a && t.getAttribute('href-disabled')) ||
                          t.getAttribute('href')
                        if (((s.href = n), !(n.indexOf(':') >= 0))) {
                          var o = e(t)
                          if (
                            s.hash.length > 1 &&
                            s.host + s.pathname === r.host + r.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return
                            var l = e(s.hash)
                            l.length && i.push({ link: o, sec: l, active: !1 })
                            return
                          }
                          '#' !== n &&
                            '' !== n &&
                            I(
                              o,
                              u,
                              (!d && s.href === r.href) ||
                                n === c ||
                                (f.test(n) && p.test(c))
                            )
                        }
                      }
                    })(t[o])
                  i.length && (n.scroll.on(E), E())
                }),
            o
          )
        })
      )
    },
    286: function (e, t, a) {
      'use strict'
      var n = a(3949)
      n.define(
        'scroll',
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: 'click.wf-empty-link',
              WF_CLICK_SCROLL: 'click.wf-scroll'
            },
            a = window.location,
            i = !(function () {
              try {
                return !!window.frameElement
              } catch (e) {
                return !0
              }
            })()
              ? window.history
              : null,
            c = e(window),
            o = e(document),
            l = e(document.body),
            d =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15)
              },
            r = n.env('editor') ? '.w-editor-body' : 'body',
            s =
              'header, ' +
              r +
              ' > .header, ' +
              r +
              ' > .w-nav:not([data-no-scroll])',
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ')',
            p = document.createElement('style')
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          )
          var E = /^#[a-zA-Z0-9][\w:.-]*$/
          let I =
            'function' == typeof window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)')
          function T (e, t) {
            var a
            switch (t) {
              case 'add':
                ;(a = e.attr('tabindex'))
                  ? e.attr('data-wf-tabindex-swap', a)
                  : e.attr('tabindex', '-1')
                break
              case 'remove':
                ;(a = e.attr('data-wf-tabindex-swap'))
                  ? (e.attr('tabindex', a),
                    e.removeAttr('data-wf-tabindex-swap'))
                  : e.removeAttr('tabindex')
            }
            e.toggleClass('wf-force-outline-none', 'add' === t)
          }
          function y (t) {
            var o = t.currentTarget
            if (
              !(
                n.env('design') ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
              )
            ) {
              var r =
                E.test(o.hash) && o.host + o.pathname === a.host + a.pathname
                  ? o.hash
                  : ''
              if ('' !== r) {
                var u,
                  f = e(r)
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (u = r),
                  a.hash !== u &&
                    i &&
                    i.pushState &&
                    !(n.env.chrome && 'file:' === a.protocol) &&
                    (i.state && i.state.hash) !== u &&
                    i.pushState({ hash: u }, '', u),
                  window.setTimeout(function () {
                    !(function (t, a) {
                      var n = c.scrollTop(),
                        i = (function (t) {
                          var a = e(s),
                            n =
                              'fixed' === a.css('position')
                                ? a.outerHeight()
                                : 0,
                            i = t.offset().top - n
                          if ('mid' === t.data('scroll')) {
                            var o = c.height() - n,
                              l = t.outerHeight()
                            l < o && (i -= Math.round((o - l) / 2))
                          }
                          return i
                        })(t)
                      if (n !== i) {
                        var o = (function (e, t, a) {
                            if (
                              'none' ===
                                document.body.getAttribute(
                                  'data-wf-scroll-motion'
                                ) ||
                              I.matches
                            )
                              return 0
                            var n = 1
                            return (
                              l.add(e).each(function (e, t) {
                                var a = parseFloat(
                                  t.getAttribute('data-scroll-time')
                                )
                                !isNaN(a) && a >= 0 && (n = a)
                              }),
                              (472.143 * Math.log(Math.abs(t - a) + 125) -
                                2e3) *
                                n
                            )
                          })(t, n, i),
                          r = Date.now(),
                          u = function () {
                            var e,
                              t,
                              c,
                              l,
                              s,
                              f = Date.now() - r
                            window.scroll(
                              0,
                              ((e = n),
                              (t = i),
                              (c = f) > (l = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((s = c / l) < 0.5
                                      ? 4 * s * s * s
                                      : (s - 1) * (2 * s - 2) * (2 * s - 2) +
                                        1))
                            ),
                              f <= o ? d(u) : 'function' == typeof a && a()
                          }
                        d(u)
                      }
                    })(f, function () {
                      T(f, 'add'),
                        f.get(0).focus({ preventScroll: !0 }),
                        T(f, 'remove')
                    })
                  }, 300 * !t))
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: a } = t
              o.on(a, f, y),
                o.on(e, u, function (e) {
                  e.preventDefault()
                }),
                document.head.insertBefore(p, document.head.firstChild)
            }
          }
        })
      )
    },
    3695: function (e, t, a) {
      'use strict'
      a(3949).define(
        'touch',
        (e.exports = function (e) {
          var t = {},
            a = window.getSelection
          function n (t) {
            var n,
              i,
              c = !1,
              o = !1,
              l = Math.min(Math.round(0.04 * window.innerWidth), 40)
            function d (e) {
              var t = e.touches
              ;(t && t.length > 1) ||
                ((c = !0),
                t ? ((o = !0), (n = t[0].clientX)) : (n = e.clientX),
                (i = n))
            }
            function r (t) {
              if (c) {
                if (o && 'mousemove' === t.type) {
                  t.preventDefault(), t.stopPropagation()
                  return
                }
                var n,
                  d,
                  r,
                  s,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  E = p - i
                ;(i = p),
                  Math.abs(E) > l &&
                    a &&
                    '' === String(a()) &&
                    ((n = 'swipe'),
                    (d = t),
                    (r = { direction: E > 0 ? 'right' : 'left' }),
                    (s = e.Event(n, { originalEvent: d })),
                    e(d.target).trigger(s, r),
                    u())
              }
            }
            function s (e) {
              if (c && ((c = !1), o && 'mouseup' === e.type)) {
                e.preventDefault(), e.stopPropagation(), (o = !1)
                return
              }
            }
            function u () {
              c = !1
            }
            t.addEventListener('touchstart', d, !1),
              t.addEventListener('touchmove', r, !1),
              t.addEventListener('touchend', s, !1),
              t.addEventListener('touchcancel', u, !1),
              t.addEventListener('mousedown', d, !1),
              t.addEventListener('mousemove', r, !1),
              t.addEventListener('mouseup', s, !1),
              t.addEventListener('mouseout', u, !1),
              (this.destroy = function () {
                t.removeEventListener('touchstart', d, !1),
                  t.removeEventListener('touchmove', r, !1),
                  t.removeEventListener('touchend', s, !1),
                  t.removeEventListener('touchcancel', u, !1),
                  t.removeEventListener('mousedown', d, !1),
                  t.removeEventListener('mousemove', r, !1),
                  t.removeEventListener('mouseup', s, !1),
                  t.removeEventListener('mouseout', u, !1),
                  (t = null)
              })
          }
          return (
            (e.event.special.tap = {
              bindType: 'click',
              delegateType: 'click'
            }),
            (t.init = function (t) {
              return (t = 'string' == typeof t ? e(t).get(0) : t)
                ? new n(t)
                : null
            }),
            (t.instance = t.init(document)),
            t
          )
        })
      )
    },
    6524: function (e, t) {
      'use strict'
      function a (e, t, a, n, i, c, o, l, d, r, s, u, f) {
        return function (p) {
          e(p)
          var E = p.form,
            I = {
              name: E.attr('data-name') || E.attr('name') || 'Untitled Form',
              pageId: E.attr('data-wf-page-id') || '',
              elementId: E.attr('data-wf-element-id') || '',
              domain: u('html').attr('data-wf-domain') || null,
              source: t.href,
              test: a.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                E.html()
              ),
              trackingCookies: n()
            }
          let T = E.attr('data-wf-flow')
          T && (I.wfFlow = T)
          let y = E.attr('data-wf-locale-id')
          y && (I.localeId = y), i(p)
          var g = c(E, I.fields)
          return g
            ? o(g)
            : ((I.fileUploads = l(E)), d(p), r)
            ? void u
                .ajax({
                  url: f,
                  type: 'POST',
                  data: I,
                  dataType: 'json',
                  crossDomain: !0
                })
                .done(function (e) {
                  e && 200 === e.code && (p.success = !0), s(p)
                })
                .fail(function () {
                  s(p)
                })
            : void s(p)
        }
      }
      Object.defineProperty(t, 'default', {
        enumerable: !0,
        get: function () {
          return a
        }
      })
    },
    7527: function (e, t, a) {
      'use strict'
      var n = a(3949)
      let i = (e, t, a, n) => {
        let i = document.createElement('div')
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (e) {
              a(e)
            },
            'error-callback': function () {
              n()
            }
          })
      }
      n.define(
        'forms',
        (e.exports = function (e, t) {
          let c,
            o = 'TURNSTILE_LOADED'
          var l,
            d,
            r,
            s,
            u,
            f = {},
            p = e(document),
            E = window.location,
            I = window.XDomainRequest && !window.atob,
            T = '.w-form',
            y = /e(-)?mail/i,
            g = /^\S+@\S+$/,
            m = window.alert,
            b = n.env()
          let O = p.find('[data-turnstile-sitekey]').data('turnstile-sitekey')
          var v = /list-manage[1-9]?.com/i,
            L = t.debounce(function () {
              console.warn(
                'Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.'
              )
            }, 100)
          function _ (t, c) {
            var l = e(c),
              r = e.data(c, T)
            r || (r = e.data(c, T, { form: l })), R(r)
            var f = l.closest('div.w-form')
            ;(r.done = f.find('> .w-form-done')),
              (r.fail = f.find('> .w-form-fail')),
              (r.fileUploads = f.find('.w-file-upload')),
              r.fileUploads.each(function (t) {
                !(function (t, a) {
                  if (a.fileUploads && a.fileUploads[t]) {
                    var n,
                      i = e(a.fileUploads[t]),
                      c = i.find('> .w-file-upload-default'),
                      o = i.find('> .w-file-upload-uploading'),
                      l = i.find('> .w-file-upload-success'),
                      d = i.find('> .w-file-upload-error'),
                      r = c.find('.w-file-upload-input'),
                      s = c.find('.w-file-upload-label'),
                      f = s.children(),
                      p = d.find('.w-file-upload-error-msg'),
                      E = l.find('.w-file-upload-file'),
                      I = l.find('.w-file-remove-link'),
                      T = E.find('.w-file-upload-file-name'),
                      y = p.attr('data-w-size-error'),
                      g = p.attr('data-w-type-error'),
                      m = p.attr('data-w-generic-error')
                    if (
                      (b ||
                        s.on('click keydown', function (e) {
                          ;('keydown' !== e.type ||
                            13 === e.which ||
                            32 === e.which) &&
                            (e.preventDefault(), r.click())
                        }),
                      s
                        .find('.w-icon-file-upload-icon')
                        .attr('aria-hidden', 'true'),
                      I.find('.w-icon-file-upload-remove').attr(
                        'aria-hidden',
                        'true'
                      ),
                      b)
                    )
                      r.on('click', function (e) {
                        e.preventDefault()
                      }),
                        s.on('click', function (e) {
                          e.preventDefault()
                        }),
                        f.on('click', function (e) {
                          e.preventDefault()
                        })
                    else {
                      I.on('click keydown', function (e) {
                        if ('keydown' === e.type) {
                          if (13 !== e.which && 32 !== e.which) return
                          e.preventDefault()
                        }
                        r.removeAttr('data-value'),
                          r.val(''),
                          T.html(''),
                          c.toggle(!0),
                          l.toggle(!1),
                          s.focus()
                      }),
                        r.on('change', function (i) {
                          var l, r, s
                          ;(n =
                            i.target && i.target.files && i.target.files[0]) &&
                            (c.toggle(!1),
                            d.toggle(!1),
                            o.toggle(!0),
                            o.focus(),
                            T.text(n.name),
                            S() || N(a),
                            (a.fileUploads[t].uploading = !0),
                            (l = n),
                            (r = L),
                            (s = new URLSearchParams({
                              name: l.name,
                              size: l.size
                            })),
                            e
                              .ajax({
                                type: 'GET',
                                url: `${u}?${s}`,
                                crossDomain: !0
                              })
                              .done(function (e) {
                                r(null, e)
                              })
                              .fail(function (e) {
                                r(e)
                              }))
                        })
                      var O = s.outerHeight()
                      r.height(O), r.width(1)
                    }
                  }
                  function v (e) {
                    var n = e.responseJSON && e.responseJSON.msg,
                      i = m
                    'string' == typeof n &&
                    0 === n.indexOf('InvalidFileTypeError')
                      ? (i = g)
                      : 'string' == typeof n &&
                        0 === n.indexOf('MaxFileSizeError') &&
                        (i = y),
                      p.text(i),
                      r.removeAttr('data-value'),
                      r.val(''),
                      o.toggle(!1),
                      c.toggle(!0),
                      d.toggle(!0),
                      d.focus(),
                      (a.fileUploads[t].uploading = !1),
                      S() || R(a)
                  }
                  function L (t, a) {
                    if (t) return v(t)
                    var i = a.fileName,
                      c = a.postData,
                      o = a.fileId,
                      l = a.s3Url
                    r.attr('data-value', o),
                      (function (t, a, n, i, c) {
                        var o = new FormData()
                        for (var l in a) o.append(l, a[l])
                        o.append('file', n, i),
                          e
                            .ajax({
                              type: 'POST',
                              url: t,
                              data: o,
                              processData: !1,
                              contentType: !1
                            })
                            .done(function () {
                              c(null)
                            })
                            .fail(function (e) {
                              c(e)
                            })
                      })(l, c, n, i, _)
                  }
                  function _ (e) {
                    if (e) return v(e)
                    o.toggle(!1),
                      l.css('display', 'inline-block'),
                      l.focus(),
                      (a.fileUploads[t].uploading = !1),
                      S() || R(a)
                  }
                  function S () {
                    return (
                      (a.fileUploads && a.fileUploads.toArray()) ||
                      []
                    ).some(function (e) {
                      return e.uploading
                    })
                  }
                })(t, r)
              }),
              O &&
                ((function (e) {
                  let t = e.btn || e.form.find(':input[type="submit"]')
                  e.btn || (e.btn = t),
                    t.prop('disabled', !0),
                    t.addClass('w-form-loading')
                })(r),
                S(l, !0),
                p.on(
                  'undefined' != typeof turnstile ? 'ready' : o,
                  function () {
                    i(
                      O,
                      c,
                      e => {
                        ;(r.turnstileToken = e), R(r), S(l, !1)
                      },
                      () => {
                        R(r), r.btn && r.btn.prop('disabled', !0), S(l, !1)
                      }
                    )
                  }
                ))
            var I =
              r.form.attr('aria-label') || r.form.attr('data-name') || 'Form'
            r.done.attr('aria-label') || r.form.attr('aria-label', I),
              r.done.attr('tabindex', '-1'),
              r.done.attr('role', 'region'),
              r.done.attr('aria-label') ||
                r.done.attr('aria-label', I + ' success'),
              r.fail.attr('tabindex', '-1'),
              r.fail.attr('role', 'region'),
              r.fail.attr('aria-label') ||
                r.fail.attr('aria-label', I + ' failure')
            var y = (r.action = l.attr('action'))
            if (
              ((r.handler = null),
              (r.redirect = l.attr('data-redirect')),
              v.test(y))
            ) {
              r.handler = k
              return
            }
            if (!y) {
              if (d) {
                r.handler = (0, a(6524).default)(
                  R,
                  E,
                  n,
                  C,
                  V,
                  h,
                  m,
                  A,
                  N,
                  d,
                  U,
                  e,
                  s
                )
                return
              }
              L()
            }
          }
          function R (e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'))
            ;(e.wait = e.btn.attr('data-wait') || null), (e.success = !1)
            let a = !!(O && !e.turnstileToken)
            t.prop('disabled', a),
              t.removeClass('w-form-loading'),
              e.label && t.val(e.label)
          }
          function N (e) {
            var t = e.btn,
              a = e.wait
            t.prop('disabled', !0), a && ((e.label = t.val()), t.val(a))
          }
          function S (e, t) {
            let a = e.closest('.w-form')
            t ? a.addClass('w-form-loading') : a.removeClass('w-form-loading')
          }
          function h (t, a) {
            var n = null
            return (
              (a = a || {}),
              t
                .find(
                  ':input:not([type="submit"]):not([type="file"]):not([type="button"])'
                )
                .each(function (i, c) {
                  var o,
                    l,
                    d,
                    r,
                    s,
                    u = e(c),
                    f = u.attr('type'),
                    p =
                      u.attr('data-name') ||
                      u.attr('name') ||
                      'Field ' + (i + 1)
                  p = encodeURIComponent(p)
                  var E = u.val()
                  if ('checkbox' === f) E = u.is(':checked')
                  else if ('radio' === f) {
                    if (null === a[p] || 'string' == typeof a[p]) return
                    E =
                      t
                        .find('input[name="' + u.attr('name') + '"]:checked')
                        .val() || null
                  }
                  'string' == typeof E && (E = e.trim(E)),
                    (a[p] = E),
                    (n =
                      n ||
                      ((o = u),
                      (l = f),
                      (d = p),
                      (r = E),
                      (s = null),
                      'password' === l
                        ? (s = 'Passwords cannot be submitted.')
                        : o.attr('required')
                        ? r
                          ? y.test(o.attr('type')) &&
                            !g.test(r) &&
                            (s = 'Please enter a valid email address for: ' + d)
                          : (s = 'Please fill out the required field: ' + d)
                        : 'g-recaptcha-response' !== d ||
                          r ||
                          (s = "Please confirm you're not a robot."),
                      s))
                }),
              n
            )
          }
          function A (t) {
            var a = {}
            return (
              t.find(':input[type="file"]').each(function (t, n) {
                var i = e(n),
                  c =
                    i.attr('data-name') || i.attr('name') || 'File ' + (t + 1),
                  o = i.attr('data-value')
                'string' == typeof o && (o = e.trim(o)), (a[c] = o)
              }),
              a
            )
          }
          f.ready =
            f.design =
            f.preview =
              function () {
                O &&
                  (((c = document.createElement('script')).src =
                    'https://challenges.cloudflare.com/turnstile/v0/api.js'),
                  document.head.appendChild(c),
                  (c.onload = () => {
                    p.trigger(o)
                  })),
                  (s =
                    'https://webflow.com/api/v1/form/' +
                    (d = e('html').attr('data-wf-site'))),
                  I &&
                    s.indexOf('https://webflow.com') >= 0 &&
                    (s = s.replace(
                      'https://webflow.com',
                      'https://formdata.webflow.com'
                    )),
                  (u = `${s}/signFile`),
                  (l = e(T + ' form')).length && l.each(_),
                  (!b || n.env('preview')) &&
                    !r &&
                    (function () {
                      ;(r = !0),
                        p.on('submit', T + ' form', function (t) {
                          var a = e.data(this, T)
                          a.handler && ((a.evt = t), a.handler(a))
                        })
                      let t = '.w-checkbox-input',
                        a = '.w-radio-input',
                        n = 'w--redirected-checked',
                        i = 'w--redirected-focus',
                        c = 'w--redirected-focus-visible',
                        o = [
                          ['checkbox', t],
                          ['radio', a]
                        ]
                      p.on(
                        'change',
                        T + ' form input[type="checkbox"]:not(' + t + ')',
                        a => {
                          e(a.target).siblings(t).toggleClass(n)
                        }
                      ),
                        p.on('change', T + ' form input[type="radio"]', i => {
                          e(`input[name="${i.target.name}"]:not(${t})`).map(
                            (t, i) => e(i).siblings(a).removeClass(n)
                          )
                          let c = e(i.target)
                          c.hasClass('w-radio-input') ||
                            c.siblings(a).addClass(n)
                        }),
                        o.forEach(([t, a]) => {
                          p.on(
                            'focus',
                            T + ` form input[type="${t}"]:not(` + a + ')',
                            t => {
                              e(t.target).siblings(a).addClass(i),
                                e(t.target)
                                  .filter(
                                    ':focus-visible, [data-wf-focus-visible]'
                                  )
                                  .siblings(a)
                                  .addClass(c)
                            }
                          ),
                            p.on(
                              'blur',
                              T + ` form input[type="${t}"]:not(` + a + ')',
                              t => {
                                e(t.target).siblings(a).removeClass(`${i} ${c}`)
                              }
                            )
                        })
                    })()
              }
          let M = { _mkto_trk: 'marketo' }
          function C () {
            return document.cookie.split('; ').reduce(function (e, t) {
              let a = t.split('='),
                n = a[0]
              if (n in M) {
                let t = M[n],
                  i = a.slice(1).join('=')
                e[t] = i
              }
              return e
            }, {})
          }
          function k (a) {
            R(a)
            var n,
              i = a.form,
              c = {}
            if (/^https/.test(E.href) && !/^https/.test(a.action))
              return void i.attr('method', 'post')
            V(a)
            var o = h(i, c)
            if (o) return m(o)
            N(a),
              t.each(c, function (e, t) {
                y.test(t) && (c.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (n = e),
                  /^(first[ _-]?name)$/i.test(t) && (c.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (c.LNAME = e)
              }),
              n &&
                !c.FNAME &&
                ((c.FNAME = (n = n.split(' '))[0]), (c.LNAME = c.LNAME || n[1]))
            var l = a.action.replace('/post?', '/post-json?') + '&c=?',
              d = l.indexOf('u=') + 2
            d = l.substring(d, l.indexOf('&', d))
            var r = l.indexOf('id=') + 3
            ;(c['b_' + d + '_' + (r = l.substring(r, l.indexOf('&', r)))] = ''),
              e
                .ajax({ url: l, data: c, dataType: 'jsonp' })
                .done(function (e) {
                  ;(a.success =
                    'success' === e.result || /already/.test(e.msg)),
                    a.success || console.info('MailChimp error: ' + e.msg),
                    U(a)
                })
                .fail(function () {
                  U(a)
                })
          }
          function U (e) {
            var t = e.form,
              a = e.redirect,
              i = e.success
            if (i && a) return void n.location(a)
            e.done.toggle(i),
              e.fail.toggle(!i),
              i ? e.done.focus() : e.fail.focus(),
              t.toggle(!i),
              R(e)
          }
          function V (e) {
            e.evt && e.evt.preventDefault(), (e.evt = null)
          }
          return f
        })
      )
    },
    1655: function (e, t, a) {
      'use strict'
      var n = a(3949),
        i = a(5134)
      let c = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      }
      n.define(
        'navbar',
        (e.exports = function (e, t) {
          var a,
            o,
            l,
            d,
            r = {},
            s = e.tram,
            u = e(window),
            f = e(document),
            p = t.debounce,
            E = n.env(),
            I = '.w-nav',
            T = 'w--open',
            y = 'w--nav-dropdown-open',
            g = 'w--nav-dropdown-toggle-open',
            m = 'w--nav-dropdown-list-open',
            b = 'w--nav-link-open',
            O = i.triggers,
            v = e()
          function L () {
            n.resize.off(_)
          }
          function _ () {
            o.each(V)
          }
          function R (a, n) {
            var i,
              o,
              r,
              s,
              p,
              E = e(n),
              T = e.data(n, I)
            T ||
              (T = e.data(n, I, {
                open: !1,
                el: E,
                config: {},
                selectedIdx: -1
              })),
              (T.menu = E.find('.w-nav-menu')),
              (T.links = T.menu.find('.w-nav-link')),
              (T.dropdowns = T.menu.find('.w-dropdown')),
              (T.dropdownToggle = T.menu.find('.w-dropdown-toggle')),
              (T.dropdownList = T.menu.find('.w-dropdown-list')),
              (T.button = E.find('.w-nav-button')),
              (T.container = E.find('.w-container')),
              (T.overlayContainerId = 'w-nav-overlay-' + a),
              (T.outside =
                ((i = T).outside && f.off('click' + I, i.outside),
                function (t) {
                  var a = e(t.target)
                  ;(d && a.closest('.w-editor-bem-EditorOverlay').length) ||
                    U(i, a)
                }))
            var y = E.find('.w-nav-brand')
            y &&
              '/' === y.attr('href') &&
              null == y.attr('aria-label') &&
              y.attr('aria-label', 'home'),
              T.button.attr('style', '-webkit-user-select: text;'),
              null == T.button.attr('aria-label') &&
                T.button.attr('aria-label', 'menu'),
              T.button.attr('role', 'button'),
              T.button.attr('tabindex', '0'),
              T.button.attr('aria-controls', T.overlayContainerId),
              T.button.attr('aria-haspopup', 'menu'),
              T.button.attr('aria-expanded', 'false'),
              T.el.off(I),
              T.button.off(I),
              T.menu.off(I),
              h(T),
              l
                ? (S(T),
                  T.el.on(
                    'setting' + I,
                    ((o = T),
                    function (e, a) {
                      a = a || {}
                      var n = u.width()
                      h(o),
                        !0 === a.open && G(o, !0),
                        !1 === a.open && P(o, !0),
                        o.open &&
                          t.defer(function () {
                            n !== u.width() && M(o)
                          })
                    })
                  ))
                : ((r = T).overlay ||
                    ((r.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />'
                    ).appendTo(r.el)),
                    r.overlay.attr('id', r.overlayContainerId),
                    (r.parent = r.menu.parent()),
                    P(r, !0)),
                  T.button.on('click' + I, C(T)),
                  T.menu.on('click' + I, 'a', k(T)),
                  T.button.on(
                    'keydown' + I,
                    ((s = T),
                    function (e) {
                      switch (e.keyCode) {
                        case c.SPACE:
                        case c.ENTER:
                          return C(s)(), e.preventDefault(), e.stopPropagation()
                        case c.ESCAPE:
                          return P(s), e.preventDefault(), e.stopPropagation()
                        case c.ARROW_RIGHT:
                        case c.ARROW_DOWN:
                        case c.HOME:
                        case c.END:
                          if (!s.open)
                            return e.preventDefault(), e.stopPropagation()
                          return (
                            e.keyCode === c.END
                              ? (s.selectedIdx = s.links.length - 1)
                              : (s.selectedIdx = 0),
                            A(s),
                            e.preventDefault(),
                            e.stopPropagation()
                          )
                      }
                    })
                  ),
                  T.el.on(
                    'keydown' + I,
                    ((p = T),
                    function (e) {
                      if (p.open)
                        switch (
                          ((p.selectedIdx = p.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case c.HOME:
                          case c.END:
                            return (
                              e.keyCode === c.END
                                ? (p.selectedIdx = p.links.length - 1)
                                : (p.selectedIdx = 0),
                              A(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            )
                          case c.ESCAPE:
                            return (
                              P(p),
                              p.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            )
                          case c.ARROW_LEFT:
                          case c.ARROW_UP:
                            return (
                              (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                              A(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            )
                          case c.ARROW_RIGHT:
                          case c.ARROW_DOWN:
                            return (
                              (p.selectedIdx = Math.min(
                                p.links.length - 1,
                                p.selectedIdx + 1
                              )),
                              A(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            )
                        }
                    })
                  )),
              V(a, n)
          }
          function N (t, a) {
            var n = e.data(a, I)
            n && (S(n), e.removeData(a, I))
          }
          function S (e) {
            e.overlay && (P(e, !0), e.overlay.remove(), (e.overlay = null))
          }
          function h (e) {
            var a = {},
              n = e.config || {},
              i = (a.animation = e.el.attr('data-animation') || 'default')
            ;(a.animOver = /^over/.test(i)),
              (a.animDirect = /left$/.test(i) ? -1 : 1),
              n.animation !== i && e.open && t.defer(M, e),
              (a.easing = e.el.attr('data-easing') || 'ease'),
              (a.easing2 = e.el.attr('data-easing2') || 'ease')
            var c = e.el.attr('data-duration')
            ;(a.duration = null != c ? Number(c) : 400),
              (a.docHeight = e.el.attr('data-doc-height')),
              (e.config = a)
          }
          function A (e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx]
              t.focus(), k(t)
            }
          }
          function M (e) {
            e.open && (P(e, !0), G(e, !0))
          }
          function C (e) {
            return p(function () {
              e.open ? P(e) : G(e)
            })
          }
          function k (t) {
            return function (a) {
              var i = e(this).attr('href')
              if (!n.validClick(a.currentTarget)) return void a.preventDefault()
              i && 0 === i.indexOf('#') && t.open && P(t)
            }
          }
          ;(r.ready =
            r.design =
            r.preview =
              function () {
                ;(l = E && n.env('design')),
                  (d = n.env('editor')),
                  (a = e(document.body)),
                  (o = f.find(I)).length && (o.each(R), L(), n.resize.on(_))
              }),
            (r.destroy = function () {
              ;(v = e()), L(), o && o.length && o.each(N)
            })
          var U = p(function (e, t) {
            if (e.open) {
              var a = t.closest('.w-nav-menu')
              e.menu.is(a) || P(e)
            }
          })
          function V (t, a) {
            var n = e.data(a, I),
              i = (n.collapsed = 'none' !== n.button.css('display'))
            if ((!n.open || i || l || P(n, !0), n.container.length)) {
              var c,
                o =
                  ('none' === (c = n.container.css(w)) && (c = ''),
                  function (t, a) {
                    ;(a = e(a)).css(w, ''), 'none' === a.css(w) && a.css(w, c)
                  })
              n.links.each(o), n.dropdowns.each(o)
            }
            n.open && x(n)
          }
          var w = 'max-width'
          function B (e, t) {
            t.setAttribute('data-nav-menu-open', '')
          }
          function F (e, t) {
            t.removeAttribute('data-nav-menu-open')
          }
          function G (e, t) {
            if (!e.open) {
              ;(e.open = !0),
                e.menu.each(B),
                e.links.addClass(b),
                e.dropdowns.addClass(y),
                e.dropdownToggle.addClass(g),
                e.dropdownList.addClass(m),
                e.button.addClass(T)
              var a = e.config
              ;('none' === a.animation ||
                !s.support.transform ||
                a.duration <= 0) &&
                (t = !0)
              var i = x(e),
                c = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                d = e.el.height(),
                r = e.el[0]
              if (
                (V(0, r),
                O.intro(0, r),
                n.redraw.up(),
                l || f.on('click' + I, e.outside),
                t)
              )
                return void p()
              var u = 'transform ' + a.duration + 'ms ' + a.easing
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                a.animOver)
              ) {
                s(e.menu)
                  .add(u)
                  .set({ x: a.animDirect * o, height: i })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(o)
                return
              }
              s(e.menu)
                .add(u)
                .set({ y: -(d + c) })
                .start({ y: 0 })
                .then(p)
            }
            function p () {
              e.button.attr('aria-expanded', 'true')
            }
          }
          function x (e) {
            var t = e.config,
              n = t.docHeight ? f.height() : a.height()
            return (
              t.animOver
                ? e.menu.height(n)
                : 'fixed' !== e.el.css('position') &&
                  (n -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(n),
              n
            )
          }
          function P (e, t) {
            if (e.open) {
              ;(e.open = !1), e.button.removeClass(T)
              var a = e.config
              if (
                (('none' === a.animation ||
                  !s.support.transform ||
                  a.duration <= 0) &&
                  (t = !0),
                O.outro(0, e.el[0]),
                f.off('click' + I, e.outside),
                t)
              ) {
                s(e.menu).stop(), l()
                return
              }
              var n = 'transform ' + a.duration + 'ms ' + a.easing2,
                i = e.menu.outerHeight(!0),
                c = e.menu.outerWidth(!0),
                o = e.el.height()
              if (a.animOver)
                return void s(e.menu)
                  .add(n)
                  .start({ x: c * a.animDirect })
                  .then(l)
              s(e.menu)
                .add(n)
                .start({ y: -(o + i) })
                .then(l)
            }
            function l () {
              e.menu.height(''),
                s(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(F),
                e.links.removeClass(b),
                e.dropdowns.removeClass(y),
                e.dropdownToggle.removeClass(g),
                e.dropdownList.removeClass(m),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr('style', '').hide()),
                e.el.triggerHandler('w-close'),
                e.button.attr('aria-expanded', 'false')
            }
          }
          return r
        })
      )
    },
    3946: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = {
        actionListPlaybackChanged: function () {
          return Y
        },
        animationFrameChanged: function () {
          return x
        },
        clearRequested: function () {
          return w
        },
        elementStateChanged: function () {
          return W
        },
        eventListenerAdded: function () {
          return B
        },
        eventStateChanged: function () {
          return G
        },
        instanceAdded: function () {
          return D
        },
        instanceRemoved: function () {
          return X
        },
        instanceStarted: function () {
          return Q
        },
        mediaQueriesDefined: function () {
          return H
        },
        parameterChanged: function () {
          return P
        },
        playbackRequested: function () {
          return U
        },
        previewRequested: function () {
          return k
        },
        rawDataImported: function () {
          return h
        },
        sessionInitialized: function () {
          return A
        },
        sessionStarted: function () {
          return M
        },
        sessionStopped: function () {
          return C
        },
        stopRequested: function () {
          return V
        },
        testFrameRendered: function () {
          return F
        },
        viewportWidthChanged: function () {
          return j
        }
      }
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] })
      let c = a(7087),
        o = a(9468),
        {
          IX2_RAW_DATA_IMPORTED: l,
          IX2_SESSION_INITIALIZED: d,
          IX2_SESSION_STARTED: r,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: I,
          IX2_TEST_FRAME_RENDERED: T,
          IX2_EVENT_STATE_CHANGED: y,
          IX2_ANIMATION_FRAME_CHANGED: g,
          IX2_PARAMETER_CHANGED: m,
          IX2_INSTANCE_ADDED: b,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: L,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
          IX2_VIEWPORT_WIDTH_CHANGED: R,
          IX2_MEDIA_QUERIES_DEFINED: N
        } = c.IX2EngineActionTypes,
        { reifyState: S } = o.IX2VanillaUtils,
        h = e => ({ type: l, payload: { ...S(e) } }),
        A = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: d,
          payload: { hasBoundaryNodes: e, reducedMotion: t }
        }),
        M = () => ({ type: r }),
        C = () => ({ type: s }),
        k = ({ rawData: e, defer: t }) => ({
          type: u,
          payload: { defer: t, rawData: e }
        }),
        U = ({
          actionTypeId: e = c.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: a,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: l,
          verbose: d,
          rawData: r
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: a,
            testManual: l,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: d,
            rawData: r
          }
        }),
        V = e => ({ type: p, payload: { actionListId: e } }),
        w = () => ({ type: E }),
        B = (e, t) => ({ type: I, payload: { target: e, listenerParams: t } }),
        F = (e = 1) => ({ type: T, payload: { step: e } }),
        G = (e, t) => ({ type: y, payload: { stateKey: e, newState: t } }),
        x = (e, t) => ({ type: g, payload: { now: e, parameters: t } }),
        P = (e, t) => ({ type: m, payload: { key: e, value: t } }),
        D = e => ({ type: b, payload: { ...e } }),
        Q = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        X = e => ({ type: v, payload: { instanceId: e } }),
        W = (e, t, a, n) => ({
          type: L,
          payload: { elementId: e, actionTypeId: t, current: a, actionItem: n }
        }),
        Y = ({ actionListId: e, isPlaying: t }) => ({
          type: _,
          payload: { actionListId: e, isPlaying: t }
        }),
        j = ({ width: e, mediaQueries: t }) => ({
          type: R,
          payload: { width: e, mediaQueries: t }
        }),
        H = () => ({ type: N })
    },
    6011: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        i = {
          actions: function () {
            return r
          },
          destroy: function () {
            return E
          },
          init: function () {
            return p
          },
          setEnv: function () {
            return f
          },
          store: function () {
            return u
          }
        }
      for (var c in i)
        Object.defineProperty(t, c, { enumerable: !0, get: i[c] })
      let o = a(9516),
        l = (n = a(7243)) && n.__esModule ? n : { default: n },
        d = a(1970),
        r = (function (e, t) {
          if (e && e.__esModule) return e
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return { default: e }
          var a = s(t)
          if (a && a.has(e)) return a.get(e)
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var c in e)
            if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, c) : null
              o && (o.get || o.set)
                ? Object.defineProperty(n, c, o)
                : (n[c] = e[c])
            }
          return (n.default = e), a && a.set(e, n), n
        })(a(3946))
      function s (e) {
        if ('function' != typeof WeakMap) return null
        var t = new WeakMap(),
          a = new WeakMap()
        return (s = function (e) {
          return e ? a : t
        })(e)
      }
      let u = (0, o.createStore)(l.default)
      function f (e) {
        e() && (0, d.observeRequests)(u)
      }
      function p (e) {
        E(), (0, d.startEngine)({ store: u, rawData: e, allowEvents: !0 })
      }
      function E () {
        ;(0, d.stopEngine)(u)
      }
    },
    5012: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = {
        elementContains: function () {
          return m
        },
        getChildElements: function () {
          return O
        },
        getClosestElement: function () {
          return L
        },
        getProperty: function () {
          return E
        },
        getQuerySelector: function () {
          return T
        },
        getRefType: function () {
          return _
        },
        getSiblingElements: function () {
          return v
        },
        getStyle: function () {
          return p
        },
        getValidDocument: function () {
          return y
        },
        isSiblingNode: function () {
          return b
        },
        matchSelector: function () {
          return I
        },
        queryDocument: function () {
          return g
        },
        setStyle: function () {
          return f
        }
      }
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] })
      let c = a(9468),
        o = a(7087),
        { ELEMENT_MATCHES: l } = c.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: d,
          HTML_ELEMENT: r,
          PLAIN_OBJECT: s,
          WF_PAGE: u
        } = o.IX2EngineConstants
      function f (e, t, a) {
        e.style[t] = a
      }
      function p (e, t) {
        return t.startsWith('--')
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0
      }
      function E (e, t) {
        return e[t]
      }
      function I (e) {
        return t => t[l](e)
      }
      function T ({ id: e, selector: t }) {
        if (e) {
          let t = e
          if (-1 !== e.indexOf(d)) {
            let a = e.split(d),
              n = a[0]
            if (((t = a[1]), n !== document.documentElement.getAttribute(u)))
              return null
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
        }
        return t
      }
      function y (e) {
        return null == e || e === document.documentElement.getAttribute(u)
          ? document
          : null
      }
      function g (e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + ' ' + t : e)
        )
      }
      function m (e, t) {
        return e.contains(t)
      }
      function b (e, t) {
        return e !== t && e.parentNode === t.parentNode
      }
      function O (e) {
        let t = []
        for (let a = 0, { length: n } = e || []; a < n; a++) {
          let { children: n } = e[a],
            { length: i } = n
          if (i) for (let e = 0; e < i; e++) t.push(n[e])
        }
        return t
      }
      function v (e = []) {
        let t = [],
          a = []
        for (let n = 0, { length: i } = e; n < i; n++) {
          let { parentNode: i } = e[n]
          if (!i || !i.children || !i.children.length || -1 !== a.indexOf(i))
            continue
          a.push(i)
          let c = i.firstElementChild
          for (; null != c; )
            -1 === e.indexOf(c) && t.push(c), (c = c.nextElementSibling)
        }
        return t
      }
      let L = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null
            let a = e
            do {
              if (a[l] && a[l](t)) return a
              a = a.parentNode
            } while (null != a)
            return null
          }
      function _ (e) {
        return null != e && 'object' == typeof e
          ? e instanceof Element
            ? r
            : s
          : null
      }
    },
    1970: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = {
        observeRequests: function () {
          return K
        },
        startActionGroup: function () {
          return eE
        },
        startEngine: function () {
          return en
        },
        stopActionGroup: function () {
          return ep
        },
        stopAllActionGroups: function () {
          return ef
        },
        stopEngine: function () {
          return ei
        }
      }
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] })
      let c = g(a(9777)),
        o = g(a(4738)),
        l = g(a(4659)),
        d = g(a(3452)),
        r = g(a(6633)),
        s = g(a(3729)),
        u = g(a(2397)),
        f = g(a(5082)),
        p = a(7087),
        E = a(9468),
        I = a(3946),
        T = (function (e, t) {
          if (e && e.__esModule) return e
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return { default: e }
          var a = m(t)
          if (a && a.has(e)) return a.get(e)
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var c in e)
            if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, c) : null
              o && (o.get || o.set)
                ? Object.defineProperty(n, c, o)
                : (n[c] = e[c])
            }
          return (n.default = e), a && a.set(e, n), n
        })(a(5012)),
        y = g(a(8955))
      function g (e) {
        return e && e.__esModule ? e : { default: e }
      }
      function m (e) {
        if ('function' != typeof WeakMap) return null
        var t = new WeakMap(),
          a = new WeakMap()
        return (m = function (e) {
          return e ? a : t
        })(e)
      }
      let b = Object.keys(p.QuickEffectIds),
        O = e => b.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: L,
          HTML_ELEMENT: _,
          RENDER_GENERAL: R,
          W_MOD_IX: N
        } = p.IX2EngineConstants,
        {
          getAffectedElements: S,
          getElementId: h,
          getDestinationValues: A,
          observeStore: M,
          getInstanceId: C,
          renderHTMLElement: k,
          clearAllStyles: U,
          getMaxDurationItemIndex: V,
          getComputedStyle: w,
          getInstanceOrigin: B,
          reduceListToGroup: F,
          shouldNamespaceEventParameter: G,
          getNamespacedParameterId: x,
          shouldAllowMediaQuery: P,
          cleanupHTMLElement: D,
          clearObjectCache: Q,
          stringifyTarget: X,
          mediaQueriesEqual: W,
          shallowEqual: Y
        } = E.IX2VanillaUtils,
        {
          isPluginType: j,
          createPluginInstance: H,
          getPluginDuration: z
        } = E.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/)
      function K (e) {
        M({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          M({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee
          }),
          M({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          M({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: ea })
      }
      function Z ({ rawData: e, defer: t }, a) {
        let n = () => {
          en({ store: a, rawData: e, allowEvents: !0 }), J()
        }
        t ? setTimeout(n, 0) : n()
      }
      function J () {
        document.dispatchEvent(new CustomEvent('IX2_PAGE_UPDATE'))
      }
      function ee (e, t) {
        let {
            actionTypeId: a,
            actionListId: n,
            actionItemId: i,
            eventId: c,
            allowEvents: o,
            immediate: l,
            testManual: d,
            verbose: r = !0
          } = e,
          { rawData: s } = e
        if (n && i && s && l) {
          let e = s.actionLists[n]
          e && (s = F({ actionList: e, actionItemId: i, rawData: s }))
        }
        if (
          (en({ store: t, rawData: s, allowEvents: o, testManual: d }),
          (n && a === p.ActionTypeConsts.GENERAL_START_ACTION) || O(a))
        ) {
          ep({ store: t, actionListId: n }),
            eu({ store: t, actionListId: n, eventId: c })
          let e = eE({
            store: t,
            eventId: c,
            actionListId: n,
            immediate: l,
            verbose: r
          })
          r &&
            e &&
            t.dispatch(
              (0, I.actionListPlaybackChanged)({
                actionListId: n,
                isPlaying: !l
              })
            )
        }
      }
      function et ({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ei(t)
      }
      function ea (e, t) {
        ei(t), U({ store: t, elementApi: T })
      }
      function en ({ store: e, rawData: t, allowEvents: a, testManual: n }) {
        let { ixSession: i } = e.getState()
        if ((t && e.dispatch((0, I.rawDataImported)(t)), !i.active)) {
          ;(e.dispatch(
            (0, I.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(L),
              reducedMotion:
                document.body.hasAttribute('data-wf-ix-vacation') &&
                window.matchMedia('(prefers-reduced-motion)').matches
            })
          ),
          a) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: a } = t
              el(e),
                (0, u.default)(a, (t, a) => {
                  let n = y.default[a]
                  if (!n)
                    return void console.warn(
                      `IX2 event type not configured: ${a}`
                    )
                  !(function ({ logic: e, store: t, events: a }) {
                    !(function (e) {
                      if (!q) return
                      let t = {},
                        a = ''
                      for (let n in e) {
                        let { eventTypeId: i, target: c } = e[n],
                          o = T.getQuerySelector(c)
                        t[o] ||
                          ((i === p.EventTypeConsts.MOUSE_CLICK ||
                            i === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (a +=
                              o +
                              '{cursor: pointer;touch-action: manipulation;}')))
                      }
                      if (a) {
                        let e = document.createElement('style')
                        ;(e.textContent = a), document.body.appendChild(e)
                      }
                    })(a)
                    let { types: n, handler: i } = e,
                      { ixData: d } = t.getState(),
                      { actionLists: r } = d,
                      s = ed(a, es)
                    if (!(0, l.default)(s)) return
                    ;(0, u.default)(s, (e, n) => {
                      let i = a[n],
                        {
                          action: l,
                          id: s,
                          mediaQueries: u = d.mediaQueryKeys
                        } = i,
                        { actionListId: f } = l.config
                      W(u, d.mediaQueryKeys) ||
                        t.dispatch((0, I.mediaQueriesDefined)()),
                        l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach(a => {
                            let { continuousParameterGroupId: n } = a,
                              i = (0, o.default)(
                                r,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              l = (0, c.default)(i, ({ id: e }) => e === n),
                              d = (a.smoothing || 0) / 100,
                              u = (a.restingState || 0) / 100
                            l &&
                              e.forEach((e, n) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: a,
                                  eventId: n,
                                  eventConfig: i,
                                  actionListId: c,
                                  parameterGroup: l,
                                  smoothing: d,
                                  restingValue: r
                                }) {
                                  let { ixData: s, ixSession: u } =
                                      e.getState(),
                                    { events: f } = s,
                                    E = f[n],
                                    { eventTypeId: I } = E,
                                    y = {},
                                    g = {},
                                    m = [],
                                    { continuousActionGroups: b } = l,
                                    { id: O } = l
                                  G(I, i) && (O = x(t, O))
                                  let _ =
                                    u.hasBoundaryNodes && a
                                      ? T.getClosestElement(a, L)
                                      : null
                                  b.forEach(e => {
                                    let { keyframe: t, actionItems: n } = e
                                    n.forEach(e => {
                                      let { actionTypeId: n } = e,
                                        { target: i } = e.config
                                      if (!i) return
                                      let c = i.boundaryMode ? _ : null,
                                        o = X(i) + v + n
                                      if (
                                        ((g[o] = (function (e = [], t, a) {
                                          let n,
                                            i = [...e]
                                          return (
                                            i.some(
                                              (e, a) =>
                                                e.keyframe === t &&
                                                ((n = a), !0)
                                            ),
                                            null == n &&
                                              ((n = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: []
                                              })),
                                            i[n].actionItems.push(a),
                                            i
                                          )
                                        })(g[o], t, e)),
                                        !y[o])
                                      ) {
                                        y[o] = !0
                                        let { config: t } = e
                                        S({
                                          config: t,
                                          event: E,
                                          eventTarget: a,
                                          elementRoot: c,
                                          elementApi: T
                                        }).forEach(e => {
                                          m.push({ element: e, key: o })
                                        })
                                      }
                                    })
                                  }),
                                    m.forEach(({ element: t, key: a }) => {
                                      let i = g[a],
                                        l = (0, o.default)(
                                          i,
                                          '[0].actionItems[0]',
                                          {}
                                        ),
                                        { actionTypeId: s } = l,
                                        u = (
                                          s === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                l.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : j(s)
                                        )
                                          ? H(s)?.(t, l)
                                          : null,
                                        f = A(
                                          {
                                            element: t,
                                            actionItem: l,
                                            elementApi: T
                                          },
                                          u
                                        )
                                      eI({
                                        store: e,
                                        element: t,
                                        eventId: n,
                                        actionListId: c,
                                        actionItem: l,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: i,
                                        smoothing: d,
                                        restingValue: r,
                                        pluginInstance: u
                                      })
                                    })
                                })({
                                  store: t,
                                  eventStateKey: s + v + n,
                                  eventTarget: e,
                                  eventId: s,
                                  eventConfig: a,
                                  actionListId: f,
                                  parameterGroup: l,
                                  smoothing: d,
                                  restingValue: u
                                })
                              })
                          }),
                        (l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(l.actionTypeId)) &&
                          eu({ store: t, actionListId: f, eventId: s })
                    })
                    let E = e => {
                        let { ixSession: n } = t.getState()
                        er(s, (c, o, l) => {
                          let r = a[o],
                            s = n.eventState[l],
                            { action: u, mediaQueries: f = d.mediaQueryKeys } =
                              r
                          if (!P(f, n.mediaQueryKey)) return
                          let E = (a = {}) => {
                            let n = i(
                              {
                                store: t,
                                element: c,
                                event: r,
                                eventConfig: a,
                                nativeEvent: e,
                                eventStateKey: l
                              },
                              s
                            )
                            Y(n, s) ||
                              t.dispatch((0, I.eventStateChanged)(l, n))
                          }
                          u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(r.config)
                                ? r.config
                                : [r.config]
                              ).forEach(E)
                            : E()
                        })
                      },
                      y = (0, f.default)(E, 12),
                      g = ({ target: e = document, types: a, throttle: n }) => {
                        a.split(' ')
                          .filter(Boolean)
                          .forEach(a => {
                            let i = n ? y : E
                            e.addEventListener(a, i),
                              t.dispatch((0, I.eventListenerAdded)(e, [a, i]))
                          })
                      }
                    Array.isArray(n)
                      ? n.forEach(g)
                      : 'string' == typeof n && g(e)
                  })({ logic: n, store: e, events: t })
                })
              let { ixSession: n } = e.getState()
              n.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    el(e)
                  }
                  eo.forEach(a => {
                    window.addEventListener(a, t),
                      e.dispatch((0, I.eventListenerAdded)(window, [a, t]))
                  }),
                    t()
                })(e)
            })(e),
            (function () {
              let { documentElement: e } = document
              ;-1 === e.className.indexOf(N) && (e.className += ` ${N}`)
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              M({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ei(e),
                    U({ store: e, elementApi: T }),
                    en({ store: e, allowEvents: !0 }),
                    J()
                }
              }))
          e.dispatch((0, I.sessionStarted)()),
            (function (e, t) {
              let a = n => {
                let { ixSession: i, ixParameters: c } = e.getState()
                if (i.active)
                  if ((e.dispatch((0, I.animationFrameChanged)(n, c)), t)) {
                    let t = M({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: e => {
                        a(e), t()
                      }
                    })
                  } else requestAnimationFrame(a)
              }
              a(window.performance.now())
            })(e, n)
        }
      }
      function ei (e) {
        let { ixSession: t } = e.getState()
        if (t.active) {
          let { eventListeners: a } = t
          a.forEach(ec), Q(), e.dispatch((0, I.sessionStopped)())
        }
      }
      function ec ({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t)
      }
      let eo = ['resize', 'orientationchange']
      function el (e) {
        let { ixSession: t, ixData: a } = e.getState(),
          n = window.innerWidth
        if (n !== t.viewportWidth) {
          let { mediaQueries: t } = a
          e.dispatch((0, I.viewportWidthChanged)({ width: n, mediaQueries: t }))
        }
      }
      let ed = (e, t) => (0, d.default)((0, s.default)(e, t), r.default),
        er = (e, t) => {
          ;(0, u.default)(e, (e, a) => {
            e.forEach((e, n) => {
              t(e, a, a + v + n)
            })
          })
        },
        es = e =>
          S({ config: { target: e.target, targets: e.targets }, elementApi: T })
      function eu ({ store: e, actionListId: t, eventId: a }) {
        let { ixData: n, ixSession: i } = e.getState(),
          { actionLists: c, events: l } = n,
          d = l[a],
          r = c[t]
        if (r && r.useFirstGroupAsInitialState) {
          let c = (0, o.default)(r, 'actionItemGroups[0].actionItems', [])
          if (
            !P(
              (0, o.default)(d, 'mediaQueries', n.mediaQueryKeys),
              i.mediaQueryKey
            )
          )
            return
          c.forEach(n => {
            let { config: i, actionTypeId: c } = n,
              o = S({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: d.target, targets: d.targets }
                    : i,
                event: d,
                elementApi: T
              }),
              l = j(c)
            o.forEach(i => {
              let o = l ? H(c)?.(i, n) : null
              eI({
                destination: A({ element: i, actionItem: n, elementApi: T }, o),
                immediate: !0,
                store: e,
                element: i,
                eventId: a,
                actionItem: n,
                actionListId: t,
                pluginInstance: o
              })
            })
          })
        }
      }
      function ef ({ store: e }) {
        let { ixInstances: t } = e.getState()
        ;(0, u.default)(t, t => {
          if (!t.continuous) {
            let { actionListId: a, verbose: n } = t
            eT(t, e),
              n &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1
                  })
                )
          }
        })
      }
      function ep ({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: i
      }) {
        let { ixInstances: c, ixSession: l } = e.getState(),
          d = l.hasBoundaryNodes && a ? T.getClosestElement(a, L) : null
        ;(0, u.default)(c, a => {
          let c = (0, o.default)(a, 'actionItem.config.target.boundaryMode'),
            l = !n || a.eventStateKey === n
          if (a.actionListId === i && a.eventId === t && l) {
            if (d && c && !T.elementContains(d, a.element)) return
            eT(a, e),
              a.verbose &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1
                  })
                )
          }
        })
      }
      function eE ({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: i,
        groupIndex: c = 0,
        immediate: l,
        verbose: d
      }) {
        let { ixData: r, ixSession: s } = e.getState(),
          { events: u } = r,
          f = u[t] || {},
          { mediaQueries: p = r.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: I } = (0,
          o.default)(r, `actionLists.${i}`, {})
        if (!E || !E.length) return !1
        c >= E.length && (0, o.default)(f, 'config.loop') && (c = 0),
          0 === c && I && c++
        let y =
            (0 === c || (1 === c && I)) && O(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          g = (0, o.default)(E, [c, 'actionItems'], [])
        if (!g.length || !P(p, s.mediaQueryKey)) return !1
        let m = s.hasBoundaryNodes && a ? T.getClosestElement(a, L) : null,
          b = V(g),
          v = !1
        return (
          g.forEach((o, r) => {
            let { config: s, actionTypeId: u } = o,
              p = j(u),
              { target: E } = s
            E &&
              S({
                config: s,
                event: f,
                eventTarget: a,
                elementRoot: E.boundaryMode ? m : null,
                elementApi: T
              }).forEach((s, f) => {
                let E = p ? H(u)?.(s, o) : null,
                  I = p ? z(u)(s, o) : null
                v = !0
                let g = w({ element: s, actionItem: o }),
                  m = A({ element: s, actionItem: o, elementApi: T }, E)
                eI({
                  store: e,
                  element: s,
                  actionItem: o,
                  eventId: t,
                  eventTarget: a,
                  eventStateKey: n,
                  actionListId: i,
                  groupIndex: c,
                  isCarrier: b === r && 0 === f,
                  computedStyle: g,
                  destination: m,
                  immediate: l,
                  verbose: d,
                  pluginInstance: E,
                  pluginDuration: I,
                  instanceDelay: y
                })
              })
          }),
          v
        )
      }
      function eI (e) {
        let t,
          { store: a, computedStyle: n, ...i } = e,
          {
            element: c,
            actionItem: o,
            immediate: l,
            pluginInstance: d,
            continuous: r,
            restingValue: s,
            eventId: u
          } = i,
          f = C(),
          { ixElements: E, ixSession: y, ixData: g } = a.getState(),
          m = h(E, c),
          { refState: b } = E[m] || {},
          O = T.getRefType(c),
          v = y.reducedMotion && p.ReducedMotionTypes[o.actionTypeId]
        if (v && r)
          switch (g.events[u]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s
              break
            default:
              t = 0.5
          }
        let L = B(c, b, n, o, T, d)
        if (
          (a.dispatch(
            (0, I.instanceAdded)({
              instanceId: f,
              elementId: m,
              origin: L,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i
            })
          ),
          ey(document.body, 'ix2-animation-started', f),
          l)
        )
          return void (function (e, t) {
            let { ixParameters: a } = e.getState()
            e.dispatch((0, I.instanceStarted)(t, 0)),
              e.dispatch((0, I.animationFrameChanged)(performance.now(), a))
            let { ixInstances: n } = e.getState()
            eg(n[t], e)
          })(a, f)
        M({ store: a, select: ({ ixInstances: e }) => e[f], onChange: eg }),
          r || a.dispatch((0, I.instanceStarted)(f, y.tick))
      }
      function eT (e, t) {
        ey(document.body, 'ix2-animation-stopping', {
          instanceId: e.id,
          state: t.getState()
        })
        let { elementId: a, actionItem: n } = e,
          { ixElements: i } = t.getState(),
          { ref: c, refType: o } = i[a] || {}
        o === _ && D(c, n, T), t.dispatch((0, I.instanceRemoved)(e.id))
      }
      function ey (e, t, a) {
        let n = document.createEvent('CustomEvent')
        n.initCustomEvent(t, !0, !0, a), e.dispatchEvent(n)
      }
      function eg (e, t) {
        let {
            active: a,
            continuous: n,
            complete: i,
            elementId: c,
            actionItem: o,
            actionTypeId: l,
            renderType: d,
            current: r,
            groupIndex: s,
            eventId: u,
            eventTarget: f,
            eventStateKey: p,
            actionListId: E,
            isCarrier: y,
            styleProp: g,
            verbose: m,
            pluginInstance: b
          } = e,
          { ixData: O, ixSession: v } = t.getState(),
          { events: L } = O,
          { mediaQueries: N = O.mediaQueryKeys } = L && L[u] ? L[u] : {}
        if (P(N, v.mediaQueryKey) && (n || a || i)) {
          if (r || (d === R && i)) {
            t.dispatch((0, I.elementStateChanged)(c, l, r, o))
            let { ixElements: e } = t.getState(),
              { ref: a, refType: n, refState: i } = e[c] || {},
              s = i && i[l]
            ;(n === _ || j(l)) && k(a, i, s, u, o, g, T, d, b)
          }
          if (i) {
            if (y) {
              let e = eE({
                store: t,
                eventId: u,
                eventTarget: f,
                eventStateKey: p,
                actionListId: E,
                groupIndex: s + 1,
                verbose: m
              })
              m &&
                !e &&
                t.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1
                  })
                )
            }
            eT(e, t)
          }
        }
      }
    },
    8955: function (e, t, a) {
      'use strict'
      let n
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return ep
          }
        })
      let i = u(a(5801)),
        c = u(a(4738)),
        o = u(a(3789)),
        l = a(7087),
        d = a(1970),
        r = a(3946),
        s = a(9468)
      function u (e) {
        return e && e.__esModule ? e : { default: e }
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: I,
          MOUSE_OVER: T,
          MOUSE_OUT: y,
          DROPDOWN_CLOSE: g,
          DROPDOWN_OPEN: m,
          SLIDER_ACTIVE: b,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: v,
          TAB_INACTIVE: L,
          NAVBAR_CLOSE: _,
          NAVBAR_OPEN: R,
          MOUSE_MOVE: N,
          PAGE_SCROLL_DOWN: S,
          SCROLL_INTO_VIEW: h,
          SCROLL_OUT_OF_VIEW: A,
          PAGE_SCROLL_UP: M,
          SCROLLING_IN_VIEW: C,
          PAGE_FINISH: k,
          ECOMMERCE_CART_CLOSE: U,
          ECOMMERCE_CART_OPEN: V,
          PAGE_START: w,
          PAGE_SCROLL: B
        } = l.EventTypeConsts,
        F = 'COMPONENT_ACTIVE',
        G = 'COMPONENT_INACTIVE',
        { COLON_DELIMITER: x } = l.IX2EngineConstants,
        { getNamespacedParameterId: P } = s.IX2VanillaUtils,
        D = e => t => !!('object' == typeof t && e(t)) || t,
        Q = D(({ element: e, nativeEvent: t }) => e === t.target),
        X = D(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, i.default)([Q, X]),
        Y = (e, t) => {
          if (t) {
            let { ixData: a } = e.getState(),
              { events: n } = a,
              i = n[t]
            if (i && !ee[i.eventTypeId]) return i
          }
          return null
        },
        j = ({ store: e, event: t }) => {
          let { action: a } = t,
            { autoStopEventId: n } = a.config
          return !!Y(e, n)
        },
        H = ({ store: e, event: t, element: a, eventStateKey: n }, i) => {
          let { action: o, id: l } = t,
            { actionListId: r, autoStopEventId: s } = o.config,
            u = Y(e, s)
          return (
            u &&
              (0, d.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: a,
                eventStateKey: s + x + n.split(x)[1],
                actionListId: (0, c.default)(u, 'action.config.actionListId')
              }),
            (0, d.stopActionGroup)({
              store: e,
              eventId: l,
              eventTarget: a,
              eventStateKey: n,
              actionListId: r
            }),
            (0, d.startActionGroup)({
              store: e,
              eventId: l,
              eventTarget: a,
              eventStateKey: n,
              actionListId: r
            }),
            i
          )
        },
        z = (e, t) => (a, n) => !0 === e(a, n) ? t(a, n) : n,
        $ = { handler: z(W, H) },
        q = { ...$, types: [F, G].join(' ') },
        K = [
          { target: window, types: 'resize orientationchange', throttle: !0 },
          {
            target: document,
            types: 'scroll wheel readystatechange IX2_PAGE_UPDATE',
            throttle: !0
          }
        ],
        Z = 'mouseover mouseout',
        J = { types: K },
        ee = { PAGE_START: w, PAGE_FINISH: k },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              'CSS1Compat' === document.compatMode
                ? document.documentElement
                : document.body
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
          })
        })(),
        ea = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        en = ({ element: e, nativeEvent: t }) => {
          let { type: a, target: n, relatedTarget: i } = t,
            c = e.contains(n)
          if ('mouseover' === a && c) return !0
          let o = e.contains(i)
          return 'mouseout' === a && !!c && !!o
        },
        ei = e => {
          let {
              element: t,
              event: { config: a }
            } = e,
            { clientWidth: n, clientHeight: i } = et(),
            c = a.scrollOffsetValue,
            o = 'PX' === a.scrollOffsetUnit ? c : (i * (c || 0)) / 100
          return ea(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: n,
            bottom: i - o
          })
        },
        ec = e => (t, a) => {
          let { type: n } = t.nativeEvent,
            i = -1 !== [F, G].indexOf(n) ? n === F : a.isActive,
            c = { ...a, isActive: i }
          return ((!a || c.isActive !== a.isActive) && e(t, c)) || c
        },
        eo = e => (t, a) => {
          let n = { elementHovered: en(t) }
          return (
            ((a ? n.elementHovered !== a.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          )
        },
        el =
          e =>
          (t, a = {}) => {
            let n,
              i,
              { stiffScrollTop: c, scrollHeight: o, innerHeight: l } = et(),
              {
                event: { config: d, eventTypeId: r }
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: u } = d,
              f = o - l,
              p = Number((c / f).toFixed(2))
            if (a && a.percentTop === p) return a
            let E = ('PX' === u ? s : (l * (s || 0)) / 100) / f,
              I = 0
            a &&
              ((n = p > a.percentTop),
              (I = (i = a.scrollingDown !== n) ? p : a.anchorTop))
            let T = r === S ? p >= I + E : p <= I - E,
              y = {
                ...a,
                percentTop: p,
                inBounds: T,
                anchorTop: I,
                scrollingDown: n
              }
            return (a && T && (i || y.inBounds !== a.inBounds) && e(t, y)) || y
          },
        ed = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        er =
          e =>
          (t, a = { clickCount: 0 }) => {
            let n = { clickCount: (a.clickCount % 2) + 1 }
            return (n.clickCount !== a.clickCount && e(t, n)) || n
          },
        es = (e = !0) => ({
          ...q,
          handler: z(
            e ? W : Q,
            ec((e, t) => (t.isActive ? $.handler(e, t) : t))
          )
        }),
        eu = (e = !0) => ({
          ...q,
          handler: z(
            e ? W : Q,
            ec((e, t) => (t.isActive ? t : $.handler(e, t)))
          )
        }),
        ef = {
          ...J,
          handler:
            ((n = (e, t) => {
              let { elementVisible: a } = t,
                { event: n, store: i } = e,
                { ixData: c } = i.getState(),
                { events: o } = c
              return !o[n.action.config.autoStopEventId] && t.triggered
                ? t
                : (n.eventTypeId === h) === a
                ? (H(e), { ...t, triggered: !0 })
                : t
            }),
            (e, t) => {
              let a = { ...t, elementVisible: ei(e) }
              return (
                ((t
                  ? a.elementVisible !== t.elementVisible
                  : a.elementVisible) &&
                  n(e, a)) ||
                a
              )
            })
        },
        ep = {
          [b]: es(),
          [O]: eu(),
          [m]: es(),
          [g]: eu(),
          [R]: es(!1),
          [_]: eu(!1),
          [v]: es(),
          [L]: eu(),
          [V]: { types: 'ecommerce-cart-open', handler: z(W, H) },
          [U]: { types: 'ecommerce-cart-close', handler: z(W, H) },
          [f]: {
            types: 'click',
            handler: z(
              W,
              er((e, { clickCount: t }) => {
                j(e) ? 1 === t && H(e) : H(e)
              })
            )
          },
          [p]: {
            types: 'click',
            handler: z(
              W,
              er((e, { clickCount: t }) => {
                2 === t && H(e)
              })
            )
          },
          [E]: { ...$, types: 'mousedown' },
          [I]: { ...$, types: 'mouseup' },
          [T]: {
            types: Z,
            handler: z(
              W,
              eo((e, t) => {
                t.elementHovered && H(e)
              })
            )
          },
          [y]: {
            types: Z,
            handler: z(
              W,
              eo((e, t) => {
                t.elementHovered || H(e)
              })
            )
          },
          [N]: {
            types: 'mousemove mouseout scroll',
            handler: (
              {
                store: e,
                element: t,
                eventConfig: a,
                nativeEvent: n,
                eventStateKey: i
              },
              c = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: d,
                  continuousParameterGroupId: s,
                  reverse: u,
                  restingState: f = 0
                } = a,
                {
                  clientX: p = c.clientX,
                  clientY: E = c.clientY,
                  pageX: I = c.pageX,
                  pageY: T = c.pageY
                } = n,
                y = 'X_AXIS' === d,
                g = 'mouseout' === n.type,
                m = f / 100,
                b = s,
                O = !1
              switch (o) {
                case l.EventBasedOn.VIEWPORT:
                  m = y
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight
                  break
                case l.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: a,
                    scrollHeight: n
                  } = et()
                  m = y ? Math.min(e + I, a) / a : Math.min(t + T, n) / n
                  break
                }
                case l.EventBasedOn.ELEMENT:
                default: {
                  b = P(i, s)
                  let e = 0 === n.type.indexOf('mouse')
                  if (e && !0 !== W({ element: t, nativeEvent: n })) break
                  let a = t.getBoundingClientRect(),
                    { left: c, top: o, width: l, height: d } = a
                  if (!e && !ed({ left: p, top: E }, a)) break
                  ;(O = !0), (m = y ? (p - c) / l : (E - o) / d)
                }
              }
              return (
                g && (m > 0.95 || m < 0.05) && (m = Math.round(m)),
                (o !== l.EventBasedOn.ELEMENT || O || O !== c.elementHovered) &&
                  ((m = u ? 1 - m : m),
                  e.dispatch((0, r.parameterChanged)(b, m))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: E,
                  pageX: I,
                  pageY: T
                }
              )
            }
          },
          [B]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: a, reverse: n } = t,
                { scrollTop: i, scrollHeight: c, clientHeight: o } = et(),
                l = i / (c - o)
              ;(l = n ? 1 - l : l), e.dispatch((0, r.parameterChanged)(a, l))
            }
          },
          [C]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: a, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: c,
                  scrollTop: o,
                  scrollWidth: d,
                  scrollHeight: s,
                  clientHeight: u
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: I,
                  startsExiting: T,
                  addEndOffset: y,
                  addStartOffset: g,
                  addOffsetValue: m = 0,
                  endOffsetValue: b = 0
                } = a
              if (f === l.EventBasedOn.VIEWPORT) {
                let e = 'X_AXIS' === p ? c / d : o / s
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, r.parameterChanged)(E, e)),
                  { scrollPercent: e }
                )
              }
              {
                let a = P(n, E),
                  c = e.getBoundingClientRect(),
                  o = (g ? m : 0) / 100,
                  l = (y ? b : 0) / 100
                ;(o = I ? o : 1 - o), (l = T ? l : 1 - l)
                let d = c.top + Math.min(c.height * o, u),
                  f = Math.min(u + (c.top + c.height * l - d), s),
                  p = Math.min(Math.max(0, u - d), f) / f
                return (
                  p !== i.scrollPercent &&
                    t.dispatch((0, r.parameterChanged)(a, p)),
                  { scrollPercent: p }
                )
              }
            }
          },
          [h]: ef,
          [A]: ef,
          [S]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown && H(e)
            })
          },
          [M]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown || H(e)
            })
          },
          [k]: {
            types: 'readystatechange IX2_PAGE_UPDATE',
            handler: z(Q, (e, t) => {
              let a = { finished: 'complete' === document.readyState }
              return a.finished && !(t && t.finshed) && H(e), a
            })
          },
          [w]: {
            types: 'readystatechange IX2_PAGE_UPDATE',
            handler: z(Q, (e, t) => (t || H(e), { started: !0 }))
          }
        }
    },
    4609: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ixData', {
          enumerable: !0,
          get: function () {
            return i
          }
        })
      let { IX2_RAW_DATA_IMPORTED: n } = a(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === n ? t.payload.ixData || Object.freeze({}) : e
    },
    7718: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ixInstances', {
          enumerable: !0,
          get: function () {
            return O
          }
        })
      let n = a(7087),
        i = a(9468),
        c = a(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: l,
          IX2_INSTANCE_ADDED: d,
          IX2_INSTANCE_STARTED: r,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: u
        } = n.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: E
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: I } = n.IX2EngineConstants,
        {
          getItemConfigByKey: T,
          getRenderType: y,
          getStyleProp: g
        } = i.IX2VanillaUtils,
        m = (e, t) => {
          let a,
            n,
            i,
            o,
            {
              position: l,
              parameterId: d,
              actionGroups: r,
              destinationKeys: s,
              smoothing: u,
              restingValue: E,
              actionTypeId: I,
              customEasingFn: y,
              skipMotion: g,
              skipToValue: m
            } = e,
            { parameters: b } = t.payload,
            O = Math.max(1 - u, 0.01),
            v = b[d]
          null == v && ((O = 1), (v = E))
          let L = f((Math.max(v, 0) || 0) - l),
            _ = g ? m : f(l + L * O),
            R = 100 * _
          if (_ === l && e.current) return e
          for (let e = 0, { length: t } = r; e < t; e++) {
            let { keyframe: t, actionItems: c } = r[e]
            if ((0 === e && (a = c[0]), R >= t)) {
              a = c[0]
              let l = r[e + 1],
                d = l && R !== t
              ;(n = d ? l.actionItems[0] : null),
                d && ((i = t / 100), (o = (l.keyframe - t) / 100))
            }
          }
          let N = {}
          if (a && !n)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e]
              N[t] = T(I, t, a.config)
            }
          else if (a && n && void 0 !== i && void 0 !== o) {
            let e = (_ - i) / o,
              t = p(a.config.easing, e, y)
            for (let e = 0, { length: i } = s; e < i; e++) {
              let i = s[e],
                c = T(I, i, a.config),
                o = (T(I, i, n.config) - c) * t + c
              N[i] = o
            }
          }
          return (0, c.merge)(e, { position: _, current: N })
        },
        b = (e, t) => {
          let {
              active: a,
              origin: n,
              start: i,
              immediate: o,
              renderType: l,
              verbose: d,
              actionItem: r,
              destination: s,
              destinationKeys: u,
              pluginDuration: E,
              instanceDelay: T,
              customEasingFn: y,
              skipMotion: g
            } = e,
            m = r.config.easing,
            { duration: b, delay: O } = r.config
          null != E && (b = E),
            (O = null != T ? T : O),
            l === I ? (b = 0) : (o || g) && (b = O = 0)
          let { now: v } = t.payload
          if (a && n) {
            let t = v - (i + O)
            if (d) {
              let t = b + O,
                a = f(Math.min(Math.max(0, (v - i) / t), 1))
              e = (0, c.set)(e, 'verboseTimeElapsed', t * a)
            }
            if (t < 0) return e
            let a = f(Math.min(Math.max(0, t / b), 1)),
              o = p(m, a, y),
              l = {},
              r = null
            return (
              u.length &&
                (r = u.reduce((e, t) => {
                  let a = s[t],
                    i = parseFloat(n[t]) || 0,
                    c = parseFloat(a) - i
                  return (e[t] = c * o + i), e
                }, {})),
              (l.current = r),
              (l.position = a),
              1 === a && ((l.active = !1), (l.complete = !0)),
              (0, c.merge)(e, l)
            )
          }
          return e
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({})
            case l:
              return Object.freeze({})
            case d: {
              let {
                  instanceId: a,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: l,
                  eventStateKey: d,
                  actionListId: r,
                  groupIndex: s,
                  isCarrier: u,
                  origin: f,
                  destination: p,
                  immediate: I,
                  verbose: T,
                  continuous: m,
                  parameterId: b,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: L,
                  pluginInstance: _,
                  pluginDuration: R,
                  instanceDelay: N,
                  skipMotion: S,
                  skipToValue: h
                } = t.payload,
                { actionTypeId: A } = i,
                M = y(A),
                C = g(M, A),
                k = Object.keys(p).filter(
                  e => null != p[e] && 'string' != typeof p[e]
                ),
                { easing: U } = i.config
              return (0, c.set)(e, a, {
                id: a,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: k,
                immediate: I,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: A,
                eventId: o,
                eventTarget: l,
                eventStateKey: d,
                actionListId: r,
                groupIndex: s,
                renderType: M,
                isCarrier: u,
                styleProp: C,
                continuous: m,
                parameterId: b,
                actionGroups: O,
                smoothing: v,
                restingValue: L,
                pluginInstance: _,
                pluginDuration: R,
                instanceDelay: N,
                skipMotion: S,
                skipToValue: h,
                customEasingFn:
                  Array.isArray(U) && 4 === U.length ? E(U) : void 0
              })
            }
            case r: {
              let { instanceId: a, time: n } = t.payload
              return (0, c.mergeIn)(e, [a], {
                active: !0,
                complete: !1,
                start: n
              })
            }
            case s: {
              let { instanceId: a } = t.payload
              if (!e[a]) return e
              let n = {},
                i = Object.keys(e),
                { length: c } = i
              for (let t = 0; t < c; t++) {
                let c = i[t]
                c !== a && (n[c] = e[c])
              }
              return n
            }
            case u: {
              let a = e,
                n = Object.keys(e),
                { length: i } = n
              for (let o = 0; o < i; o++) {
                let i = n[o],
                  l = e[i],
                  d = l.continuous ? m : b
                a = (0, c.set)(a, i, d(l, t))
              }
              return a
            }
            default:
              return e
          }
        }
    },
    1540: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ixParameters', {
          enumerable: !0,
          get: function () {
            return o
          }
        })
      let {
          IX2_RAW_DATA_IMPORTED: n,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: c
        } = a(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case n:
              return t.payload.ixParameters || {}
            case i:
              return {}
            case c: {
              let { key: a, value: n } = t.payload
              return (e[a] = n), e
            }
            default:
              return e
          }
        }
    },
    7243: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return u
          }
        })
      let n = a(9516),
        i = a(4609),
        c = a(628),
        o = a(5862),
        l = a(9468),
        d = a(7718),
        r = a(1540),
        { ixElements: s } = l.IX2ElementsReducer,
        u = (0, n.combineReducers)({
          ixData: i.ixData,
          ixRequest: c.ixRequest,
          ixSession: o.ixSession,
          ixElements: s,
          ixInstances: d.ixInstances,
          ixParameters: r.ixParameters
        })
    },
    628: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ixRequest', {
          enumerable: !0,
          get: function () {
            return u
          }
        })
      let n = a(7087),
        i = a(1185),
        {
          IX2_PREVIEW_REQUESTED: c,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: l,
          IX2_CLEAR_REQUESTED: d
        } = n.IX2EngineActionTypes,
        r = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [c]: { value: 'preview' },
          [o]: { value: 'playback' },
          [l]: { value: 'stop' },
          [d]: { value: 'clear' }
        }),
        u = (e = r, t) => {
          if (t.type in s) {
            let a = [s[t.type]]
            return (0, i.setIn)(e, [a], { ...t.payload })
          }
          return e
        }
    },
    5862: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ixSession', {
          enumerable: !0,
          get: function () {
            return T
          }
        })
      let n = a(7087),
        i = a(1185),
        {
          IX2_SESSION_INITIALIZED: c,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: l,
          IX2_SESSION_STOPPED: d,
          IX2_EVENT_LISTENER_ADDED: r,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E
        } = n.IX2EngineActionTypes,
        I = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1
        },
        T = (e = I, t) => {
          switch (t.type) {
            case c: {
              let { hasBoundaryNodes: a, reducedMotion: n } = t.payload
              return (0, i.merge)(e, { hasBoundaryNodes: a, reducedMotion: n })
            }
            case o:
              return (0, i.set)(e, 'active', !0)
            case l: {
              let {
                payload: { step: a = 20 }
              } = t
              return (0, i.set)(e, 'tick', e.tick + a)
            }
            case d:
              return I
            case u: {
              let {
                payload: { now: a }
              } = t
              return (0, i.set)(e, 'tick', a)
            }
            case r: {
              let a = (0, i.addLast)(e.eventListeners, t.payload)
              return (0, i.set)(e, 'eventListeners', a)
            }
            case s: {
              let { stateKey: a, newState: n } = t.payload
              return (0, i.setIn)(e, ['eventState', a], n)
            }
            case f: {
              let { actionListId: a, isPlaying: n } = t.payload
              return (0, i.setIn)(e, ['playbackState', a], n)
            }
            case p: {
              let { width: a, mediaQueries: n } = t.payload,
                c = n.length,
                o = null
              for (let e = 0; e < c; e++) {
                let { key: t, min: i, max: c } = n[e]
                if (a >= i && a <= c) {
                  o = t
                  break
                }
              }
              return (0, i.merge)(e, { viewportWidth: a, mediaQueryKey: o })
            }
            case E:
              return (0, i.set)(e, 'hasDefinedMediaQueries', !0)
            default:
              return e
          }
        }
    },
    7377: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = {
        clearPlugin: function () {
          return s
        },
        createPluginInstance: function () {
          return d
        },
        getPluginConfig: function () {
          return i
        },
        getPluginDestination: function () {
          return l
        },
        getPluginDuration: function () {
          return c
        },
        getPluginOrigin: function () {
          return o
        },
        renderPlugin: function () {
          return r
        }
      }
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] })
      let i = e => e.value,
        c = (e, t) => {
          if ('auto' !== t.config.duration) return null
          let a = parseFloat(e.getAttribute('data-duration'))
          return a > 0
            ? 1e3 * a
            : 1e3 * parseFloat(e.getAttribute('data-default-duration'))
        },
        o = e => e || { value: 0 },
        l = e => ({ value: e.value }),
        d = e => {
          let t = window.Webflow.require('lottie')
          if (!t) return null
          let a = t.createInstance(e)
          return a.stop(), a.setSubframe(!0), a
        },
        r = (e, t, a) => {
          if (!e) return
          let n = t[a.actionTypeId].value / 100
          e.goToFrame(e.frames * n)
        },
        s = e => {
          let t = window.Webflow.require('lottie')
          t && t.createInstance(e).stop()
        }
    },
    2570: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = {
        clearPlugin: function () {
          return E
        },
        createPluginInstance: function () {
          return f
        },
        getPluginConfig: function () {
          return d
        },
        getPluginDestination: function () {
          return u
        },
        getPluginDuration: function () {
          return r
        },
        getPluginOrigin: function () {
          return s
        },
        renderPlugin: function () {
          return p
        }
      }
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] })
      let i = '--wf-rive-fit',
        c = '--wf-rive-alignment',
        o = e => document.querySelector(`[data-w-id="${e}"]`),
        l = () => window.Webflow.require('rive'),
        d = (e, t) => e.value.inputs[t],
        r = () => null,
        s = (e, t) => {
          if (e) return e
          let a = {},
            { inputs: n = {} } = t.config.value
          for (let e in n) null == n[e] && (a[e] = 0)
          return a
        },
        u = e => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e
          let a = t?.config?.target?.pluginElement
          return a ? o(a) : null
        },
        p = (e, { PLUGIN_RIVE: t }, a) => {
          let n = l()
          if (!n) return
          let o = n.getInstance(e),
            d = n.rive.StateMachineInputType,
            { name: r, inputs: s = {} } = a.config.value || {}
          function u (e) {
            if (e.loaded) a()
            else {
              let t = () => {
                a(), e?.off('load', t)
              }
              e?.on('load', t)
            }
            function a () {
              let a = e.stateMachineInputs(r)
              if (null != a) {
                if ((e.isPlaying || e.play(r, !1), i in s || c in s)) {
                  let t = e.layout,
                    a = s[i] ?? t.fit,
                    n = s[c] ?? t.alignment
                  ;(a !== t.fit || n !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: a, alignment: n }))
                }
                for (let e in s) {
                  if (e === i || e === c) continue
                  let n = a.find(t => t.name === e)
                  if (null != n)
                    switch (n.type) {
                      case d.Boolean:
                        null != s[e] && (n.value = !!s[e])
                        break
                      case d.Number: {
                        let a = t[e]
                        null != a && (n.value = a)
                        break
                      }
                      case d.Trigger:
                        s[e] && n.fire()
                    }
                }
              }
            }
          }
          o?.rive ? u(o.rive) : n.setLoadHandler(e, u)
        },
        E = (e, t) => null
    },
    2866: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = {
        clearPlugin: function () {
          return E
        },
        createPluginInstance: function () {
          return f
        },
        getPluginConfig: function () {
          return l
        },
        getPluginDestination: function () {
          return u
        },
        getPluginDuration: function () {
          return d
        },
        getPluginOrigin: function () {
          return s
        },
        renderPlugin: function () {
          return p
        }
      }
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] })
      let i = e => document.querySelector(`[data-w-id="${e}"]`),
        c = () => window.Webflow.require('spline'),
        o = (e, t) => e.filter(e => !t.includes(e)),
        l = (e, t) => e.value[t],
        d = () => null,
        r = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1
        }),
        s = (e, t) => {
          let a = Object.keys(t.config.value)
          if (e) {
            let t = o(a, Object.keys(e))
            return t.length ? t.reduce((e, t) => ((e[t] = r[t]), e), e) : e
          }
          return a.reduce((e, t) => ((e[t] = r[t]), e), {})
        },
        u = e => e.value,
        f = (e, t) => {
          let a = t?.config?.target?.pluginElement
          return a ? i(a) : null
        },
        p = (e, t, a) => {
          let n = c()
          if (!n) return
          let i = n.getInstance(e),
            o = a.config.target.objectId,
            l = e => {
              if (!e) throw Error('Invalid spline app passed to renderSpline')
              let a = o && e.findObjectById(o)
              if (!a) return
              let { PLUGIN_SPLINE: n } = t
              null != n.positionX && (a.position.x = n.positionX),
                null != n.positionY && (a.position.y = n.positionY),
                null != n.positionZ && (a.position.z = n.positionZ),
                null != n.rotationX && (a.rotation.x = n.rotationX),
                null != n.rotationY && (a.rotation.y = n.rotationY),
                null != n.rotationZ && (a.rotation.z = n.rotationZ),
                null != n.scaleX && (a.scale.x = n.scaleX),
                null != n.scaleY && (a.scale.y = n.scaleY),
                null != n.scaleZ && (a.scale.z = n.scaleZ)
            }
          i ? l(i.spline) : n.setLoadHandler(e, l)
        },
        E = () => null
    },
    1407: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = {
        clearPlugin: function () {
          return p
        },
        createPluginInstance: function () {
          return s
        },
        getPluginConfig: function () {
          return o
        },
        getPluginDestination: function () {
          return r
        },
        getPluginDuration: function () {
          return l
        },
        getPluginOrigin: function () {
          return d
        },
        renderPlugin: function () {
          return f
        }
      }
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] })
      let c = a(380),
        o = (e, t) => e.value[t],
        l = () => null,
        d = (e, t) => {
          if (e) return e
          let a = t.config.value,
            n = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(n)
          return null != a.size
            ? { size: parseInt(i, 10) }
            : '%' === a.unit || '-' === a.unit
            ? { size: parseFloat(i) }
            : null != a.red && null != a.green && null != a.blue
            ? (0, c.normalizeColor)(i)
            : void 0
        },
        r = e => e.value,
        s = () => null,
        u = {
          color: {
            match: ({ red: e, green: t, blue: a, alpha: n }) =>
              [e, t, a, n].every(e => null != e),
            getValue: ({ red: e, green: t, blue: a, alpha: n }) =>
              `rgba(${e}, ${t}, ${a}, ${n})`
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ('-' === t ? e : `${e}${t}`)
          }
        },
        f = (e, t, a) => {
          let {
              target: { objectId: n },
              value: { unit: i }
            } = a.config,
            c = t.PLUGIN_VARIABLE,
            o = Object.values(u).find(e => e.match(c, i))
          o && document.documentElement.style.setProperty(n, o.getValue(c, i))
        },
        p = (e, t) => {
          let a = t.config.target.objectId
          document.documentElement.style.removeProperty(a)
        }
    },
    3690: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'pluginMethodMap', {
          enumerable: !0,
          get: function () {
            return s
          }
        })
      let n = a(7087),
        i = r(a(7377)),
        c = r(a(2866)),
        o = r(a(2570)),
        l = r(a(1407))
      function d (e) {
        if ('function' != typeof WeakMap) return null
        var t = new WeakMap(),
          a = new WeakMap()
        return (d = function (e) {
          return e ? a : t
        })(e)
      }
      function r (e, t) {
        if (!t && e && e.__esModule) return e
        if (null === e || ('object' != typeof e && 'function' != typeof e))
          return { default: e }
        var a = d(t)
        if (a && a.has(e)) return a.get(e)
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var c in e)
          if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, c) : null
            o && (o.get || o.set)
              ? Object.defineProperty(n, c, o)
              : (n[c] = e[c])
          }
        return (n.default = e), a && a.set(e, n), n
      }
      let s = new Map([
        [n.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [n.ActionTypeConsts.PLUGIN_SPLINE, { ...c }],
        [n.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [n.ActionTypeConsts.PLUGIN_VARIABLE, { ...l }]
      ])
    },
    8023: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return b
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E
        },
        IX2_CLEAR_REQUESTED: function () {
          return u
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return m
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p
        },
        IX2_INSTANCE_ADDED: function () {
          return T
        },
        IX2_INSTANCE_REMOVED: function () {
          return g
        },
        IX2_INSTANCE_STARTED: function () {
          return y
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v
        },
        IX2_PARAMETER_CHANGED: function () {
          return I
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return r
        },
        IX2_PREVIEW_REQUESTED: function () {
          return d
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i
        },
        IX2_SESSION_INITIALIZED: function () {
          return c
        },
        IX2_SESSION_STARTED: function () {
          return o
        },
        IX2_SESSION_STOPPED: function () {
          return l
        },
        IX2_STOP_REQUESTED: function () {
          return s
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return L
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O
        }
      }
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] })
      let i = 'IX2_RAW_DATA_IMPORTED',
        c = 'IX2_SESSION_INITIALIZED',
        o = 'IX2_SESSION_STARTED',
        l = 'IX2_SESSION_STOPPED',
        d = 'IX2_PREVIEW_REQUESTED',
        r = 'IX2_PLAYBACK_REQUESTED',
        s = 'IX2_STOP_REQUESTED',
        u = 'IX2_CLEAR_REQUESTED',
        f = 'IX2_EVENT_LISTENER_ADDED',
        p = 'IX2_EVENT_STATE_CHANGED',
        E = 'IX2_ANIMATION_FRAME_CHANGED',
        I = 'IX2_PARAMETER_CHANGED',
        T = 'IX2_INSTANCE_ADDED',
        y = 'IX2_INSTANCE_STARTED',
        g = 'IX2_INSTANCE_REMOVED',
        m = 'IX2_ELEMENT_STATE_CHANGED',
        b = 'IX2_ACTION_LIST_PLAYBACK_CHANGED',
        O = 'IX2_VIEWPORT_WIDTH_CHANGED',
        v = 'IX2_MEDIA_QUERIES_DEFINED',
        L = 'IX2_TEST_FRAME_RENDERED'
    },
    2686: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = {
        ABSTRACT_NODE: function () {
          return et
        },
        AUTO: function () {
          return W
        },
        BACKGROUND: function () {
          return G
        },
        BACKGROUND_COLOR: function () {
          return F
        },
        BAR_DELIMITER: function () {
          return H
        },
        BORDER_COLOR: function () {
          return x
        },
        BOUNDARY_SELECTOR: function () {
          return d
        },
        CHILDREN: function () {
          return z
        },
        COLON_DELIMITER: function () {
          return j
        },
        COLOR: function () {
          return P
        },
        COMMA_DELIMITER: function () {
          return Y
        },
        CONFIG_UNIT: function () {
          return T
        },
        CONFIG_VALUE: function () {
          return f
        },
        CONFIG_X_UNIT: function () {
          return p
        },
        CONFIG_X_VALUE: function () {
          return r
        },
        CONFIG_Y_UNIT: function () {
          return E
        },
        CONFIG_Y_VALUE: function () {
          return s
        },
        CONFIG_Z_UNIT: function () {
          return I
        },
        CONFIG_Z_VALUE: function () {
          return u
        },
        DISPLAY: function () {
          return D
        },
        FILTER: function () {
          return U
        },
        FLEX: function () {
          return Q
        },
        FONT_VARIATION_SETTINGS: function () {
          return V
        },
        HEIGHT: function () {
          return B
        },
        HTML_ELEMENT: function () {
          return J
        },
        IMMEDIATE_CHILDREN: function () {
          return $
        },
        IX2_ID_DELIMITER: function () {
          return i
        },
        OPACITY: function () {
          return k
        },
        PARENT: function () {
          return K
        },
        PLAIN_OBJECT: function () {
          return ee
        },
        PRESERVE_3D: function () {
          return Z
        },
        RENDER_GENERAL: function () {
          return en
        },
        RENDER_PLUGIN: function () {
          return ec
        },
        RENDER_STYLE: function () {
          return ei
        },
        RENDER_TRANSFORM: function () {
          return ea
        },
        ROTATE_X: function () {
          return N
        },
        ROTATE_Y: function () {
          return S
        },
        ROTATE_Z: function () {
          return h
        },
        SCALE_3D: function () {
          return R
        },
        SCALE_X: function () {
          return v
        },
        SCALE_Y: function () {
          return L
        },
        SCALE_Z: function () {
          return _
        },
        SIBLINGS: function () {
          return q
        },
        SKEW: function () {
          return A
        },
        SKEW_X: function () {
          return M
        },
        SKEW_Y: function () {
          return C
        },
        TRANSFORM: function () {
          return y
        },
        TRANSLATE_3D: function () {
          return O
        },
        TRANSLATE_X: function () {
          return g
        },
        TRANSLATE_Y: function () {
          return m
        },
        TRANSLATE_Z: function () {
          return b
        },
        WF_PAGE: function () {
          return c
        },
        WIDTH: function () {
          return w
        },
        WILL_CHANGE: function () {
          return X
        },
        W_MOD_IX: function () {
          return l
        },
        W_MOD_JS: function () {
          return o
        }
      }
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] })
      let i = '|',
        c = 'data-wf-page',
        o = 'w-mod-js',
        l = 'w-mod-ix',
        d = '.w-dyn-item',
        r = 'xValue',
        s = 'yValue',
        u = 'zValue',
        f = 'value',
        p = 'xUnit',
        E = 'yUnit',
        I = 'zUnit',
        T = 'unit',
        y = 'transform',
        g = 'translateX',
        m = 'translateY',
        b = 'translateZ',
        O = 'translate3d',
        v = 'scaleX',
        L = 'scaleY',
        _ = 'scaleZ',
        R = 'scale3d',
        N = 'rotateX',
        S = 'rotateY',
        h = 'rotateZ',
        A = 'skew',
        M = 'skewX',
        C = 'skewY',
        k = 'opacity',
        U = 'filter',
        V = 'font-variation-settings',
        w = 'width',
        B = 'height',
        F = 'backgroundColor',
        G = 'background',
        x = 'borderColor',
        P = 'color',
        D = 'display',
        Q = 'flex',
        X = 'willChange',
        W = 'AUTO',
        Y = ',',
        j = ':',
        H = '|',
        z = 'CHILDREN',
        $ = 'IMMEDIATE_CHILDREN',
        q = 'SIBLINGS',
        K = 'PARENT',
        Z = 'preserve-3d',
        J = 'HTML_ELEMENT',
        ee = 'PLAIN_OBJECT',
        et = 'ABSTRACT_NODE',
        ea = 'RENDER_TRANSFORM',
        en = 'RENDER_GENERAL',
        ei = 'RENDER_STYLE',
        ec = 'RENDER_PLUGIN'
    },
    262: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = {
        ActionAppliesTo: function () {
          return c
        },
        ActionTypeConsts: function () {
          return i
        }
      }
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] })
      let i = {
          TRANSFORM_MOVE: 'TRANSFORM_MOVE',
          TRANSFORM_SCALE: 'TRANSFORM_SCALE',
          TRANSFORM_ROTATE: 'TRANSFORM_ROTATE',
          TRANSFORM_SKEW: 'TRANSFORM_SKEW',
          STYLE_OPACITY: 'STYLE_OPACITY',
          STYLE_SIZE: 'STYLE_SIZE',
          STYLE_FILTER: 'STYLE_FILTER',
          STYLE_FONT_VARIATION: 'STYLE_FONT_VARIATION',
          STYLE_BACKGROUND_COLOR: 'STYLE_BACKGROUND_COLOR',
          STYLE_BORDER: 'STYLE_BORDER',
          STYLE_TEXT_COLOR: 'STYLE_TEXT_COLOR',
          OBJECT_VALUE: 'OBJECT_VALUE',
          PLUGIN_LOTTIE: 'PLUGIN_LOTTIE',
          PLUGIN_SPLINE: 'PLUGIN_SPLINE',
          PLUGIN_RIVE: 'PLUGIN_RIVE',
          PLUGIN_VARIABLE: 'PLUGIN_VARIABLE',
          GENERAL_DISPLAY: 'GENERAL_DISPLAY',
          GENERAL_START_ACTION: 'GENERAL_START_ACTION',
          GENERAL_CONTINUOUS_ACTION: 'GENERAL_CONTINUOUS_ACTION',
          GENERAL_COMBO_CLASS: 'GENERAL_COMBO_CLASS',
          GENERAL_STOP_ACTION: 'GENERAL_STOP_ACTION',
          GENERAL_LOOP: 'GENERAL_LOOP',
          STYLE_BOX_SHADOW: 'STYLE_BOX_SHADOW'
        },
        c = {
          ELEMENT: 'ELEMENT',
          ELEMENT_CLASS: 'ELEMENT_CLASS',
          TRIGGER_ELEMENT: 'TRIGGER_ELEMENT'
        }
    },
    7087: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts
        },
        IX2EngineActionTypes: function () {
          return l
        },
        IX2EngineConstants: function () {
          return d
        },
        QuickEffectIds: function () {
          return c.QuickEffectIds
        }
      }
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] })
      let c = r(a(1833), t),
        o = r(a(262), t)
      r(a(8704), t), r(a(3213), t)
      let l = u(a(8023)),
        d = u(a(2686))
      function r (e, t) {
        return (
          Object.keys(e).forEach(function (a) {
            'default' === a ||
              Object.prototype.hasOwnProperty.call(t, a) ||
              Object.defineProperty(t, a, {
                enumerable: !0,
                get: function () {
                  return e[a]
                }
              })
          }),
          e
        )
      }
      function s (e) {
        if ('function' != typeof WeakMap) return null
        var t = new WeakMap(),
          a = new WeakMap()
        return (s = function (e) {
          return e ? a : t
        })(e)
      }
      function u (e, t) {
        if (!t && e && e.__esModule) return e
        if (null === e || ('object' != typeof e && 'function' != typeof e))
          return { default: e }
        var a = s(t)
        if (a && a.has(e)) return a.get(e)
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var c in e)
          if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, c) : null
            o && (o.get || o.set)
              ? Object.defineProperty(n, c, o)
              : (n[c] = e[c])
          }
        return (n.default = e), a && a.set(e, n), n
      }
    },
    3213: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'ReducedMotionTypes', {
          enumerable: !0,
          get: function () {
            return s
          }
        })
      let {
          TRANSFORM_MOVE: n,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: c,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: l,
          STYLE_FILTER: d,
          STYLE_FONT_VARIATION: r
        } = a(262).ActionTypeConsts,
        s = { [n]: !0, [i]: !0, [c]: !0, [o]: !0, [l]: !0, [d]: !0, [r]: !0 }
    },
    1833: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = {
        EventAppliesTo: function () {
          return c
        },
        EventBasedOn: function () {
          return o
        },
        EventContinuousMouseAxes: function () {
          return l
        },
        EventLimitAffectedElements: function () {
          return d
        },
        EventTypeConsts: function () {
          return i
        },
        QuickEffectDirectionConsts: function () {
          return s
        },
        QuickEffectIds: function () {
          return r
        }
      }
      for (var n in a)
        Object.defineProperty(t, n, { enumerable: !0, get: a[n] })
      let i = {
          NAVBAR_OPEN: 'NAVBAR_OPEN',
          NAVBAR_CLOSE: 'NAVBAR_CLOSE',
          TAB_ACTIVE: 'TAB_ACTIVE',
          TAB_INACTIVE: 'TAB_INACTIVE',
          SLIDER_ACTIVE: 'SLIDER_ACTIVE',
          SLIDER_INACTIVE: 'SLIDER_INACTIVE',
          DROPDOWN_OPEN: 'DROPDOWN_OPEN',
          DROPDOWN_CLOSE: 'DROPDOWN_CLOSE',
          MOUSE_CLICK: 'MOUSE_CLICK',
          MOUSE_SECOND_CLICK: 'MOUSE_SECOND_CLICK',
          MOUSE_DOWN: 'MOUSE_DOWN',
          MOUSE_UP: 'MOUSE_UP',
          MOUSE_OVER: 'MOUSE_OVER',
          MOUSE_OUT: 'MOUSE_OUT',
          MOUSE_MOVE: 'MOUSE_MOVE',
          MOUSE_MOVE_IN_VIEWPORT: 'MOUSE_MOVE_IN_VIEWPORT',
          SCROLL_INTO_VIEW: 'SCROLL_INTO_VIEW',
          SCROLL_OUT_OF_VIEW: 'SCROLL_OUT_OF_VIEW',
          SCROLLING_IN_VIEW: 'SCROLLING_IN_VIEW',
          ECOMMERCE_CART_OPEN: 'ECOMMERCE_CART_OPEN',
          ECOMMERCE_CART_CLOSE: 'ECOMMERCE_CART_CLOSE',
          PAGE_START: 'PAGE_START',
          PAGE_FINISH: 'PAGE_FINISH',
          PAGE_SCROLL_UP: 'PAGE_SCROLL_UP',
          PAGE_SCROLL_DOWN: 'PAGE_SCROLL_DOWN',
          PAGE_SCROLL: 'PAGE_SCROLL'
        },
        c = { ELEMENT: 'ELEMENT', CLASS: 'CLASS', PAGE: 'PAGE' },
        o = { ELEMENT: 'ELEMENT', VIEWPORT: 'VIEWPORT' },
        l = { X_AXIS: 'X_AXIS', Y_AXIS: 'Y_AXIS' },
        d = {
          CHILDREN: 'CHILDREN',
          SIBLINGS: 'SIBLINGS',
          IMMEDIATE_CHILDREN: 'IMMEDIATE_CHILDREN'
        },
        r = {
          FADE_EFFECT: 'FADE_EFFECT',
          SLIDE_EFFECT: 'SLIDE_EFFECT',
          GROW_EFFECT: 'GROW_EFFECT',
          SHRINK_EFFECT: 'SHRINK_EFFECT',
          SPIN_EFFECT: 'SPIN_EFFECT',
          FLY_EFFECT: 'FLY_EFFECT',
          POP_EFFECT: 'POP_EFFECT',
          FLIP_EFFECT: 'FLIP_EFFECT',
          JIGGLE_EFFECT: 'JIGGLE_EFFECT',
          PULSE_EFFECT: 'PULSE_EFFECT',
          DROP_EFFECT: 'DROP_EFFECT',
          BLINK_EFFECT: 'BLINK_EFFECT',
          BOUNCE_EFFECT: 'BOUNCE_EFFECT',
          FLIP_LEFT_TO_RIGHT_EFFECT: 'FLIP_LEFT_TO_RIGHT_EFFECT',
          FLIP_RIGHT_TO_LEFT_EFFECT: 'FLIP_RIGHT_TO_LEFT_EFFECT',
          RUBBER_BAND_EFFECT: 'RUBBER_BAND_EFFECT',
          JELLO_EFFECT: 'JELLO_EFFECT',
          GROW_BIG_EFFECT: 'GROW_BIG_EFFECT',
          SHRINK_BIG_EFFECT: 'SHRINK_BIG_EFFECT',
          PLUGIN_LOTTIE_EFFECT: 'PLUGIN_LOTTIE_EFFECT'
        },
        s = {
          LEFT: 'LEFT',
          RIGHT: 'RIGHT',
          BOTTOM: 'BOTTOM',
          TOP: 'TOP',
          BOTTOM_LEFT: 'BOTTOM_LEFT',
          BOTTOM_RIGHT: 'BOTTOM_RIGHT',
          TOP_RIGHT: 'TOP_RIGHT',
          TOP_LEFT: 'TOP_LEFT',
          CLOCKWISE: 'CLOCKWISE',
          COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE'
        }
    },
    8704: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'InteractionTypeConsts', {
          enumerable: !0,
          get: function () {
            return a
          }
        })
      let a = {
        MOUSE_CLICK_INTERACTION: 'MOUSE_CLICK_INTERACTION',
        MOUSE_HOVER_INTERACTION: 'MOUSE_HOVER_INTERACTION',
        MOUSE_MOVE_INTERACTION: 'MOUSE_MOVE_INTERACTION',
        SCROLL_INTO_VIEW_INTERACTION: 'SCROLL_INTO_VIEW_INTERACTION',
        SCROLLING_IN_VIEW_INTERACTION: 'SCROLLING_IN_VIEW_INTERACTION',
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          'MOUSE_MOVE_IN_VIEWPORT_INTERACTION',
        PAGE_IS_SCROLLING_INTERACTION: 'PAGE_IS_SCROLLING_INTERACTION',
        PAGE_LOAD_INTERACTION: 'PAGE_LOAD_INTERACTION',
        PAGE_SCROLLED_INTERACTION: 'PAGE_SCROLLED_INTERACTION',
        NAVBAR_INTERACTION: 'NAVBAR_INTERACTION',
        DROPDOWN_INTERACTION: 'DROPDOWN_INTERACTION',
        ECOMMERCE_CART_INTERACTION: 'ECOMMERCE_CART_INTERACTION',
        TAB_INTERACTION: 'TAB_INTERACTION',
        SLIDER_INTERACTION: 'SLIDER_INTERACTION'
      }
    },
    380: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'normalizeColor', {
          enumerable: !0,
          get: function () {
            return n
          }
        })
      let a = {
        aliceblue: '#F0F8FF',
        antiquewhite: '#FAEBD7',
        aqua: '#00FFFF',
        aquamarine: '#7FFFD4',
        azure: '#F0FFFF',
        beige: '#F5F5DC',
        bisque: '#FFE4C4',
        black: '#000000',
        blanchedalmond: '#FFEBCD',
        blue: '#0000FF',
        blueviolet: '#8A2BE2',
        brown: '#A52A2A',
        burlywood: '#DEB887',
        cadetblue: '#5F9EA0',
        chartreuse: '#7FFF00',
        chocolate: '#D2691E',
        coral: '#FF7F50',
        cornflowerblue: '#6495ED',
        cornsilk: '#FFF8DC',
        crimson: '#DC143C',
        cyan: '#00FFFF',
        darkblue: '#00008B',
        darkcyan: '#008B8B',
        darkgoldenrod: '#B8860B',
        darkgray: '#A9A9A9',
        darkgreen: '#006400',
        darkgrey: '#A9A9A9',
        darkkhaki: '#BDB76B',
        darkmagenta: '#8B008B',
        darkolivegreen: '#556B2F',
        darkorange: '#FF8C00',
        darkorchid: '#9932CC',
        darkred: '#8B0000',
        darksalmon: '#E9967A',
        darkseagreen: '#8FBC8F',
        darkslateblue: '#483D8B',
        darkslategray: '#2F4F4F',
        darkslategrey: '#2F4F4F',
        darkturquoise: '#00CED1',
        darkviolet: '#9400D3',
        deeppink: '#FF1493',
        deepskyblue: '#00BFFF',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1E90FF',
        firebrick: '#B22222',
        floralwhite: '#FFFAF0',
        forestgreen: '#228B22',
        fuchsia: '#FF00FF',
        gainsboro: '#DCDCDC',
        ghostwhite: '#F8F8FF',
        gold: '#FFD700',
        goldenrod: '#DAA520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#ADFF2F',
        grey: '#808080',
        honeydew: '#F0FFF0',
        hotpink: '#FF69B4',
        indianred: '#CD5C5C',
        indigo: '#4B0082',
        ivory: '#FFFFF0',
        khaki: '#F0E68C',
        lavender: '#E6E6FA',
        lavenderblush: '#FFF0F5',
        lawngreen: '#7CFC00',
        lemonchiffon: '#FFFACD',
        lightblue: '#ADD8E6',
        lightcoral: '#F08080',
        lightcyan: '#E0FFFF',
        lightgoldenrodyellow: '#FAFAD2',
        lightgray: '#D3D3D3',
        lightgreen: '#90EE90',
        lightgrey: '#D3D3D3',
        lightpink: '#FFB6C1',
        lightsalmon: '#FFA07A',
        lightseagreen: '#20B2AA',
        lightskyblue: '#87CEFA',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#B0C4DE',
        lightyellow: '#FFFFE0',
        lime: '#00FF00',
        limegreen: '#32CD32',
        linen: '#FAF0E6',
        magenta: '#FF00FF',
        maroon: '#800000',
        mediumaquamarine: '#66CDAA',
        mediumblue: '#0000CD',
        mediumorchid: '#BA55D3',
        mediumpurple: '#9370DB',
        mediumseagreen: '#3CB371',
        mediumslateblue: '#7B68EE',
        mediumspringgreen: '#00FA9A',
        mediumturquoise: '#48D1CC',
        mediumvioletred: '#C71585',
        midnightblue: '#191970',
        mintcream: '#F5FFFA',
        mistyrose: '#FFE4E1',
        moccasin: '#FFE4B5',
        navajowhite: '#FFDEAD',
        navy: '#000080',
        oldlace: '#FDF5E6',
        olive: '#808000',
        olivedrab: '#6B8E23',
        orange: '#FFA500',
        orangered: '#FF4500',
        orchid: '#DA70D6',
        palegoldenrod: '#EEE8AA',
        palegreen: '#98FB98',
        paleturquoise: '#AFEEEE',
        palevioletred: '#DB7093',
        papayawhip: '#FFEFD5',
        peachpuff: '#FFDAB9',
        peru: '#CD853F',
        pink: '#FFC0CB',
        plum: '#DDA0DD',
        powderblue: '#B0E0E6',
        purple: '#800080',
        rebeccapurple: '#663399',
        red: '#FF0000',
        rosybrown: '#BC8F8F',
        royalblue: '#4169E1',
        saddlebrown: '#8B4513',
        salmon: '#FA8072',
        sandybrown: '#F4A460',
        seagreen: '#2E8B57',
        seashell: '#FFF5EE',
        sienna: '#A0522D',
        silver: '#C0C0C0',
        skyblue: '#87CEEB',
        slateblue: '#6A5ACD',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#FFFAFA',
        springgreen: '#00FF7F',
        steelblue: '#4682B4',
        tan: '#D2B48C',
        teal: '#008080',
        thistle: '#D8BFD8',
        tomato: '#FF6347',
        turquoise: '#40E0D0',
        violet: '#EE82EE',
        wheat: '#F5DEB3',
        white: '#FFFFFF',
        whitesmoke: '#F5F5F5',
        yellow: '#FFFF00',
        yellowgreen: '#9ACD32'
      }
      function n (e) {
        let t,
          n,
          i,
          c = 1,
          o = e.replace(/\s/g, '').toLowerCase(),
          l = ('string' == typeof a[o] ? a[o].toLowerCase() : null) || o
        if (l.startsWith('#')) {
          let e = l.substring(1)
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (n = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (c = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (n = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (c = parseInt(e.substring(6, 8), 16) / 255))
        } else if (l.startsWith('rgba')) {
          let e = l.match(/rgba\(([^)]+)\)/)[1].split(',')
          ;(t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (c = parseFloat(e[3]))
        } else if (l.startsWith('rgb')) {
          let e = l.match(/rgb\(([^)]+)\)/)[1].split(',')
          ;(t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10))
        } else if (l.startsWith('hsla')) {
          let e,
            a,
            o,
            d = l.match(/hsla\(([^)]+)\)/)[1].split(','),
            r = parseFloat(d[0]),
            s = parseFloat(d[1].replace('%', '')) / 100,
            u = parseFloat(d[2].replace('%', '')) / 100
          c = parseFloat(d[3])
          let f = (1 - Math.abs(2 * u - 1)) * s,
            p = f * (1 - Math.abs(((r / 60) % 2) - 1)),
            E = u - f / 2
          r >= 0 && r < 60
            ? ((e = f), (a = p), (o = 0))
            : r >= 60 && r < 120
            ? ((e = p), (a = f), (o = 0))
            : r >= 120 && r < 180
            ? ((e = 0), (a = f), (o = p))
            : r >= 180 && r < 240
            ? ((e = 0), (a = p), (o = f))
            : r >= 240 && r < 300
            ? ((e = p), (a = 0), (o = f))
            : ((e = f), (a = 0), (o = p)),
            (t = Math.round((e + E) * 255)),
            (n = Math.round((a + E) * 255)),
            (i = Math.round((o + E) * 255))
        } else if (l.startsWith('hsl')) {
          let e,
            a,
            c,
            o = l.match(/hsl\(([^)]+)\)/)[1].split(','),
            d = parseFloat(o[0]),
            r = parseFloat(o[1].replace('%', '')) / 100,
            s = parseFloat(o[2].replace('%', '')) / 100,
            u = (1 - Math.abs(2 * s - 1)) * r,
            f = u * (1 - Math.abs(((d / 60) % 2) - 1)),
            p = s - u / 2
          d >= 0 && d < 60
            ? ((e = u), (a = f), (c = 0))
            : d >= 60 && d < 120
            ? ((e = f), (a = u), (c = 0))
            : d >= 120 && d < 180
            ? ((e = 0), (a = u), (c = f))
            : d >= 180 && d < 240
            ? ((e = 0), (a = f), (c = u))
            : d >= 240 && d < 300
            ? ((e = f), (a = 0), (c = u))
            : ((e = u), (a = 0), (c = f)),
            (t = Math.round((e + p) * 255)),
            (n = Math.round((a + p) * 255)),
            (i = Math.round((c + p) * 255))
        }
        if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          )
        return { red: t, green: n, blue: i, alpha: c }
      }
    },
    9468: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = {
        IX2BrowserSupport: function () {
          return c
        },
        IX2EasingUtils: function () {
          return l
        },
        IX2Easings: function () {
          return o
        },
        IX2ElementsReducer: function () {
          return d
        },
        IX2VanillaPlugins: function () {
          return r
        },
        IX2VanillaUtils: function () {
          return s
        }
      }
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] })
      let c = f(a(2662)),
        o = f(a(8686)),
        l = f(a(3767)),
        d = f(a(5861)),
        r = f(a(1799)),
        s = f(a(4124))
      function u (e) {
        if ('function' != typeof WeakMap) return null
        var t = new WeakMap(),
          a = new WeakMap()
        return (u = function (e) {
          return e ? a : t
        })(e)
      }
      function f (e, t) {
        if (!t && e && e.__esModule) return e
        if (null === e || ('object' != typeof e && 'function' != typeof e))
          return { default: e }
        var a = u(t)
        if (a && a.has(e)) return a.get(e)
        var n = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var c in e)
          if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, c) : null
            o && (o.get || o.set)
              ? Object.defineProperty(n, c, o)
              : (n[c] = e[c])
          }
        return (n.default = e), a && a.set(e, n), n
      }
    },
    2662: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        i = {
          ELEMENT_MATCHES: function () {
            return r
          },
          FLEX_PREFIXED: function () {
            return s
          },
          IS_BROWSER_ENV: function () {
            return l
          },
          TRANSFORM_PREFIXED: function () {
            return u
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p
          },
          withBrowser: function () {
            return d
          }
        }
      for (var c in i)
        Object.defineProperty(t, c, { enumerable: !0, get: i[c] })
      let o = (n = a(9777)) && n.__esModule ? n : { default: n },
        l = 'undefined' != typeof window,
        d = (e, t) => (l ? e() : t),
        r = d(() =>
          (0, o.default)(
            [
              'matches',
              'matchesSelector',
              'mozMatchesSelector',
              'msMatchesSelector',
              'oMatchesSelector',
              'webkitMatchesSelector'
            ],
            e => e in Element.prototype
          )
        ),
        s = d(() => {
          let e = document.createElement('i'),
            t = [
              'flex',
              '-webkit-flex',
              '-ms-flexbox',
              '-moz-box',
              '-webkit-box'
            ]
          try {
            let { length: a } = t
            for (let n = 0; n < a; n++) {
              let a = t[n]
              if (((e.style.display = a), e.style.display === a)) return a
            }
            return ''
          } catch (e) {
            return ''
          }
        }, 'flex'),
        u = d(() => {
          let e = document.createElement('i')
          if (null == e.style.transform) {
            let t = ['Webkit', 'Moz', 'ms'],
              { length: a } = t
            for (let n = 0; n < a; n++) {
              let a = t[n] + 'Transform'
              if (void 0 !== e.style[a]) return a
            }
          }
          return 'transform'
        }, 'transform'),
        f = u.split('transform')[0],
        p = f ? f + 'TransformStyle' : 'transformStyle'
    },
    3767: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        i = {
          applyEasing: function () {
            return u
          },
          createBezierEasing: function () {
            return s
          },
          optimizeFloat: function () {
            return r
          }
        }
      for (var c in i)
        Object.defineProperty(t, c, { enumerable: !0, get: i[c] })
      let o = (function (e, t) {
          if (e && e.__esModule) return e
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return { default: e }
          var a = d(t)
          if (a && a.has(e)) return a.get(e)
          var n = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var c in e)
            if ('default' !== c && Object.prototype.hasOwnProperty.call(e, c)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, c) : null
              o && (o.get || o.set)
                ? Object.defineProperty(n, c, o)
                : (n[c] = e[c])
            }
          return (n.default = e), a && a.set(e, n), n
        })(a(8686)),
        l = (n = a(1361)) && n.__esModule ? n : { default: n }
      function d (e) {
        if ('function' != typeof WeakMap) return null
        var t = new WeakMap(),
          a = new WeakMap()
        return (d = function (e) {
          return e ? a : t
        })(e)
      }
      function r (e, t = 5, a = 10) {
        let n = Math.pow(a, t),
          i = Number(Math.round(e * n) / n)
        return Math.abs(i) > 1e-4 ? i : 0
      }
      function s (e) {
        return (0, l.default)(...e)
      }
      function u (e, t, a) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : a
          ? r(t > 0 ? a(t) : t)
          : r(t > 0 && e && o[e] ? o[e](t) : t)
      }
    },
    8686: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n,
        i = {
          bounce: function () {
            return Q
          },
          bouncePast: function () {
            return X
          },
          ease: function () {
            return l
          },
          easeIn: function () {
            return d
          },
          easeInOut: function () {
            return s
          },
          easeOut: function () {
            return r
          },
          inBack: function () {
            return U
          },
          inCirc: function () {
            return A
          },
          inCubic: function () {
            return E
          },
          inElastic: function () {
            return B
          },
          inExpo: function () {
            return N
          },
          inOutBack: function () {
            return w
          },
          inOutCirc: function () {
            return C
          },
          inOutCubic: function () {
            return T
          },
          inOutElastic: function () {
            return G
          },
          inOutExpo: function () {
            return h
          },
          inOutQuad: function () {
            return p
          },
          inOutQuart: function () {
            return m
          },
          inOutQuint: function () {
            return v
          },
          inOutSine: function () {
            return R
          },
          inQuad: function () {
            return u
          },
          inQuart: function () {
            return y
          },
          inQuint: function () {
            return b
          },
          inSine: function () {
            return L
          },
          outBack: function () {
            return V
          },
          outBounce: function () {
            return k
          },
          outCirc: function () {
            return M
          },
          outCubic: function () {
            return I
          },
          outElastic: function () {
            return F
          },
          outExpo: function () {
            return S
          },
          outQuad: function () {
            return f
          },
          outQuart: function () {
            return g
          },
          outQuint: function () {
            return O
          },
          outSine: function () {
            return _
          },
          swingFrom: function () {
            return P
          },
          swingFromTo: function () {
            return x
          },
          swingTo: function () {
            return D
          }
        }
      for (var c in i)
        Object.defineProperty(t, c, { enumerable: !0, get: i[c] })
      let o = (n = a(1361)) && n.__esModule ? n : { default: n },
        l = (0, o.default)(0.25, 0.1, 0.25, 1),
        d = (0, o.default)(0.42, 0, 1, 1),
        r = (0, o.default)(0, 0, 0.58, 1),
        s = (0, o.default)(0.42, 0, 0.58, 1)
      function u (e) {
        return Math.pow(e, 2)
      }
      function f (e) {
        return -(Math.pow(e - 1, 2) - 1)
      }
      function p (e) {
        return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2)
      }
      function E (e) {
        return Math.pow(e, 3)
      }
      function I (e) {
        return Math.pow(e - 1, 3) + 1
      }
      function T (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2)
      }
      function y (e) {
        return Math.pow(e, 4)
      }
      function g (e) {
        return -(Math.pow(e - 1, 4) - 1)
      }
      function m (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2)
      }
      function b (e) {
        return Math.pow(e, 5)
      }
      function O (e) {
        return Math.pow(e - 1, 5) + 1
      }
      function v (e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2)
      }
      function L (e) {
        return -Math.cos((Math.PI / 2) * e) + 1
      }
      function _ (e) {
        return Math.sin((Math.PI / 2) * e)
      }
      function R (e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1)
      }
      function N (e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
      }
      function S (e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
      }
      function h (e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2)
      }
      function A (e) {
        return -(Math.sqrt(1 - e * e) - 1)
      }
      function M (e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
      }
      function C (e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
      }
      function k (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
      }
      function U (e) {
        return e * e * (2.70158 * e - 1.70158)
      }
      function V (e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
      }
      function w (e) {
        let t = 1.70158
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
      }
      function B (e) {
        let t = 1.70158,
          a = 0,
          n = 1
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (a || (a = 0.3),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            -(
              n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a)
            ))
      }
      function F (e) {
        let t = 1.70158,
          a = 0,
          n = 1
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (a || (a = 0.3),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            n * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / a) +
              1)
      }
      function G (e) {
        let t = 1.70158,
          a = 0,
          n = 1
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (a || (a = 0.3 * 1.5),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            e < 1)
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a) *
              0.5 +
            1
      }
      function x (e) {
        let t = 1.70158
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
      }
      function P (e) {
        return e * e * (2.70158 * e - 1.70158)
      }
      function D (e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
      }
      function Q (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
      }
      function X (e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375)
      }
    },
    1799: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = {
        clearPlugin: function () {
          return I
        },
        createPluginInstance: function () {
          return p
        },
        getPluginConfig: function () {
          return r
        },
        getPluginDestination: function () {
          return f
        },
        getPluginDuration: function () {
          return u
        },
        getPluginOrigin: function () {
          return s
        },
        isPluginType: function () {
          return l
        },
        renderPlugin: function () {
          return E
        }
      }
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] })
      let c = a(2662),
        o = a(3690)
      function l (e) {
        return o.pluginMethodMap.has(e)
      }
      let d = e => t => {
          if (!c.IS_BROWSER_ENV) return () => null
          let a = o.pluginMethodMap.get(t)
          if (!a) throw Error(`IX2 no plugin configured for: ${t}`)
          let n = a[e]
          if (!n) throw Error(`IX2 invalid plugin method: ${e}`)
          return n
        },
        r = d('getPluginConfig'),
        s = d('getPluginOrigin'),
        u = d('getPluginDuration'),
        f = d('getPluginDestination'),
        p = d('createPluginInstance'),
        E = d('renderPlugin'),
        I = d('clearPlugin')
    },
    4124: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = {
        cleanupHTMLElement: function () {
          return eY
        },
        clearAllStyles: function () {
          return eQ
        },
        clearObjectCache: function () {
          return eu
        },
        getActionListProgress: function () {
          return e$
        },
        getAffectedElements: function () {
          return eb
        },
        getComputedStyle: function () {
          return eO
        },
        getDestinationValues: function () {
          return eA
        },
        getElementId: function () {
          return eI
        },
        getInstanceId: function () {
          return ep
        },
        getInstanceOrigin: function () {
          return eR
        },
        getItemConfigByKey: function () {
          return eh
        },
        getMaxDurationItemIndex: function () {
          return ez
        },
        getNamespacedParameterId: function () {
          return eZ
        },
        getRenderType: function () {
          return eM
        },
        getStyleProp: function () {
          return eC
        },
        mediaQueriesEqual: function () {
          return e0
        },
        observeStore: function () {
          return eg
        },
        reduceListToGroup: function () {
          return eq
        },
        reifyState: function () {
          return eT
        },
        renderHTMLElement: function () {
          return ek
        },
        shallowEqual: function () {
          return s.default
        },
        shouldAllowMediaQuery: function () {
          return eJ
        },
        shouldNamespaceEventParameter: function () {
          return eK
        },
        stringifyTarget: function () {
          return e1
        }
      }
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] })
      let c = I(a(4075)),
        o = I(a(1455)),
        l = I(a(5720)),
        d = a(1185),
        r = a(7087),
        s = I(a(7164)),
        u = a(3767),
        f = a(380),
        p = a(1799),
        E = a(2662)
      function I (e) {
        return e && e.__esModule ? e : { default: e }
      }
      let {
          BACKGROUND: T,
          TRANSFORM: y,
          TRANSLATE_3D: g,
          SCALE_3D: m,
          ROTATE_X: b,
          ROTATE_Y: O,
          ROTATE_Z: v,
          SKEW: L,
          PRESERVE_3D: _,
          FLEX: R,
          OPACITY: N,
          FILTER: S,
          FONT_VARIATION_SETTINGS: h,
          WIDTH: A,
          HEIGHT: M,
          BACKGROUND_COLOR: C,
          BORDER_COLOR: k,
          COLOR: U,
          CHILDREN: V,
          IMMEDIATE_CHILDREN: w,
          SIBLINGS: B,
          PARENT: F,
          DISPLAY: G,
          WILL_CHANGE: x,
          AUTO: P,
          COMMA_DELIMITER: D,
          COLON_DELIMITER: Q,
          BAR_DELIMITER: X,
          RENDER_TRANSFORM: W,
          RENDER_GENERAL: Y,
          RENDER_STYLE: j,
          RENDER_PLUGIN: H
        } = r.IX2EngineConstants,
        {
          TRANSFORM_MOVE: z,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: ea,
          STYLE_BORDER: en,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: ec,
          OBJECT_VALUE: eo
        } = r.ActionTypeConsts,
        el = e => e.trim(),
        ed = Object.freeze({ [ea]: C, [en]: k, [ei]: U }),
        er = Object.freeze({
          [E.TRANSFORM_PREFIXED]: y,
          [C]: T,
          [N]: N,
          [S]: S,
          [A]: A,
          [M]: M,
          [h]: h
        }),
        es = new Map()
      function eu () {
        es.clear()
      }
      let ef = 1
      function ep () {
        return 'i' + ef++
      }
      let eE = 1
      function eI (e, t) {
        for (let a in e) {
          let n = e[a]
          if (n && n.ref === t) return n.id
        }
        return 'e' + eE++
      }
      function eT ({ events: e, actionLists: t, site: a } = {}) {
        let n = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: a } = t
              return e[a] || (e[a] = {}), (e[a][t.id] = t), e
            },
            {}
          ),
          i = a && a.mediaQueries,
          c = []
        return (
          i
            ? (c = i.map(e => e.key))
            : ((i = []), console.warn('IX2 missing mediaQueries in site data')),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: n,
              mediaQueries: i,
              mediaQueryKeys: c
            }
          }
        )
      }
      let ey = (e, t) => e === t
      function eg ({ store: e, select: t, onChange: a, comparator: n = ey }) {
        let { getState: i, subscribe: c } = e,
          o = c(function () {
            let c = t(i())
            if (null == c) return void o()
            n(c, l) || a((l = c), e)
          }),
          l = t(i())
        return o
      }
      function em (e) {
        let t = typeof e
        if ('string' === t) return { id: e }
        if (null != e && 'object' === t) {
          let {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: c,
            useEventTarget: o
          } = e
          return {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: c,
            useEventTarget: o
          }
        }
        return {}
      }
      function eb ({
        config: e,
        event: t,
        eventTarget: a,
        elementRoot: n,
        elementApi: i
      }) {
        let c, o, l
        if (!i) throw Error('IX2 missing elementApi')
        let { targets: d } = e
        if (Array.isArray(d) && d.length > 0)
          return d.reduce(
            (e, c) =>
              e.concat(
                eb({
                  config: { target: c },
                  event: t,
                  eventTarget: a,
                  elementRoot: n,
                  elementApi: i
                })
              ),
            []
          )
        let {
            getValidDocument: s,
            getQuerySelector: u,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: I,
            matchSelector: T,
            elementContains: y,
            isSiblingNode: g
          } = i,
          { target: m } = e
        if (!m) return []
        let {
          id: b,
          objectId: O,
          selector: v,
          selectorGuids: L,
          appliesTo: _,
          useEventTarget: R
        } = em(m)
        if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)]
        if (_ === r.EventAppliesTo.PAGE) {
          let e = s(b)
          return e ? [e] : []
        }
        let N = (t?.action?.config?.affectedElements ?? {})[b || v] || {},
          S = !!(N.id || N.selector),
          h = t && u(em(t.target))
        if (
          (S
            ? ((c = N.limitAffectedElements), (o = h), (l = u(N)))
            : (o = l = u({ id: b, selector: v, selectorGuids: L })),
          t && R)
        ) {
          let e = a && (l || !0 === R) ? [a] : f(h)
          if (l) {
            if (R === F) return f(l).filter(t => e.some(e => y(t, e)))
            if (R === V) return f(l).filter(t => e.some(e => y(e, t)))
            if (R === B) return f(l).filter(t => e.some(e => g(e, t)))
          }
          return e
        }
        return null == o || null == l
          ? []
          : E.IS_BROWSER_ENV && n
          ? f(l).filter(e => n.contains(e))
          : c === V
          ? f(o, l)
          : c === w
          ? p(f(o)).filter(T(l))
          : c === B
          ? I(f(o)).filter(T(l))
          : f(l)
      }
      function eO ({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {}
        let { actionTypeId: a } = t
        switch (a) {
          case et:
          case ea:
          case en:
          case ei:
          case ec:
            return window.getComputedStyle(e)
          default:
            return {}
        }
      }
      let ev = /px/,
        eL = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eV[t.type]), e),
            e || {}
          ),
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = ew[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          )
      function eR (e, t = {}, a = {}, n, i) {
        let { getStyle: o } = i,
          { actionTypeId: l } = n
        if ((0, p.isPluginType)(l)) return (0, p.getPluginOrigin)(l)(t[l], n)
        switch (n.actionTypeId) {
          case z:
          case $:
          case q:
          case K:
            return t[n.actionTypeId] || eU[n.actionTypeId]
          case J:
            return eL(t[n.actionTypeId], n.config.filters)
          case ee:
            return e_(t[n.actionTypeId], n.config.fontVariations)
          case Z:
            return { value: (0, c.default)(parseFloat(o(e, N)), 1) }
          case et: {
            let t,
              i = o(e, A),
              l = o(e, M)
            return {
              widthValue:
                n.config.widthUnit === P
                  ? ev.test(i)
                    ? parseFloat(i)
                    : parseFloat(a.width)
                  : (0, c.default)(parseFloat(i), parseFloat(a.width)),
              heightValue:
                n.config.heightUnit === P
                  ? ev.test(l)
                    ? parseFloat(l)
                    : parseFloat(a.height)
                  : (0, c.default)(parseFloat(l), parseFloat(a.height))
            }
          }
          case ea:
          case en:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: a,
              getStyle: n
            }) {
              let i = ed[t],
                o = n(e, i),
                l = (function (e, t) {
                  let a = e.exec(t)
                  return a ? a[1] : ''
                })(ex, eG.test(o) ? o : a[i]).split(D)
              return {
                rValue: (0, c.default)(parseInt(l[0], 10), 255),
                gValue: (0, c.default)(parseInt(l[1], 10), 255),
                bValue: (0, c.default)(parseInt(l[2], 10), 255),
                aValue: (0, c.default)(parseFloat(l[3]), 1)
              }
            })({
              element: e,
              actionTypeId: n.actionTypeId,
              computedStyle: a,
              getStyle: o
            })
          case ec:
            return { value: (0, c.default)(o(e, G), a.display) }
          case eo:
            return t[n.actionTypeId] || { value: 0 }
          default:
            return
        }
      }
      let eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eh = (e, t, a) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(a, t)
          switch (e) {
            case J: {
              let e = (0, l.default)(a.filters, ({ type: e }) => e === t)
              return e ? e.value : 0
            }
            case ee: {
              let e = (0, l.default)(a.fontVariations, ({ type: e }) => e === t)
              return e ? e.value : 0
            }
            default:
              return a[t]
          }
        }
      function eA ({ element: e, actionItem: t, elementApi: a }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config)
        switch (t.actionTypeId) {
          case z:
          case $:
          case q:
          case K: {
            let { xValue: e, yValue: a, zValue: n } = t.config
            return { xValue: e, yValue: a, zValue: n }
          }
          case et: {
            let { getStyle: n, setStyle: i, getProperty: c } = a,
              { widthUnit: o, heightUnit: l } = t.config,
              { widthValue: d, heightValue: r } = t.config
            if (!E.IS_BROWSER_ENV) return { widthValue: d, heightValue: r }
            if (o === P) {
              let t = n(e, A)
              i(e, A, ''), (d = c(e, 'offsetWidth')), i(e, A, t)
            }
            if (l === P) {
              let t = n(e, M)
              i(e, M, ''), (r = c(e, 'offsetHeight')), i(e, M, t)
            }
            return { widthValue: d, heightValue: r }
          }
          case ea:
          case en:
          case ei: {
            let {
              rValue: n,
              gValue: i,
              bValue: c,
              aValue: o,
              globalSwatchId: l
            } = t.config
            if (l && l.startsWith('--')) {
              let { getStyle: t } = a,
                n = t(e, l),
                i = (0, f.normalizeColor)(n)
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha
              }
            }
            return { rValue: n, gValue: i, bValue: c, aValue: o }
          }
          case J:
            return t.config.filters.reduce(eN, {})
          case ee:
            return t.config.fontVariations.reduce(eS, {})
          default: {
            let { value: e } = t.config
            return { value: e }
          }
        }
      }
      function eM (e) {
        return /^TRANSFORM_/.test(e)
          ? W
          : /^STYLE_/.test(e)
          ? j
          : /^GENERAL_/.test(e)
          ? Y
          : /^PLUGIN_/.test(e)
          ? H
          : void 0
      }
      function eC (e, t) {
        return e === j ? t.replace('STYLE_', '').toLowerCase() : null
      }
      function ek (e, t, a, n, i, c, l, d, r) {
        switch (d) {
          case W:
            var s = e,
              u = t,
              f = a,
              I = i,
              T = l
            let y = eF
                .map(e => {
                  let t = eU[e],
                    {
                      xValue: a = t.xValue,
                      yValue: n = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: c = '',
                      yUnit: o = '',
                      zUnit: l = ''
                    } = u[e] || {}
                  switch (e) {
                    case z:
                      return `${g}(${a}${c}, ${n}${o}, ${i}${l})`
                    case $:
                      return `${m}(${a}${c}, ${n}${o}, ${i}${l})`
                    case q:
                      return `${b}(${a}${c}) ${O}(${n}${o}) ${v}(${i}${l})`
                    case K:
                      return `${L}(${a}${c}, ${n}${o})`
                    default:
                      return ''
                  }
                })
                .join(' '),
              { setStyle: N } = T
            eP(s, E.TRANSFORM_PREFIXED, T),
              N(s, E.TRANSFORM_PREFIXED, y),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: a, zValue: n }
              ) {
                return (
                  (e === z && void 0 !== n) ||
                  (e === $ && void 0 !== n) ||
                  (e === q && (void 0 !== t || void 0 !== a))
                )
              })(I, f) && N(s, E.TRANSFORM_STYLE_PREFIXED, _)
            return
          case j:
            return (function (e, t, a, n, i, c) {
              let { setStyle: l } = c
              switch (n.actionTypeId) {
                case et: {
                  let { widthUnit: t = '', heightUnit: i = '' } = n.config,
                    { widthValue: o, heightValue: d } = a
                  void 0 !== o &&
                    (t === P && (t = 'px'), eP(e, A, c), l(e, A, o + t)),
                    void 0 !== d &&
                      (i === P && (i = 'px'), eP(e, M, c), l(e, M, d + i))
                  break
                }
                case J:
                  var d = n.config
                  let r = (0, o.default)(
                      a,
                      (e, t, a) => `${e} ${a}(${t}${eB(a, d)})`,
                      ''
                    ),
                    { setStyle: s } = c
                  eP(e, S, c), s(e, S, r)
                  break
                case ee:
                  n.config
                  let u = (0, o.default)(
                      a,
                      (e, t, a) => (e.push(`"${a}" ${t}`), e),
                      []
                    ).join(', '),
                    { setStyle: f } = c
                  eP(e, h, c), f(e, h, u)
                  break
                case ea:
                case en:
                case ei: {
                  let t = ed[n.actionTypeId],
                    i = Math.round(a.rValue),
                    o = Math.round(a.gValue),
                    d = Math.round(a.bValue),
                    r = a.aValue
                  eP(e, t, c),
                    l(
                      e,
                      t,
                      r >= 1
                        ? `rgb(${i},${o},${d})`
                        : `rgba(${i},${o},${d},${r})`
                    )
                  break
                }
                default: {
                  let { unit: t = '' } = n.config
                  eP(e, i, c), l(e, i, a.value + t)
                }
              }
            })(e, 0, a, i, c, l)
          case Y:
            var C = e,
              k = i,
              U = l
            let { setStyle: V } = U
            if (k.actionTypeId === ec) {
              let { value: e } = k.config
              V(C, G, e === R && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e)
            }
            return
          case H: {
            let { actionTypeId: e } = i
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(r, t, i)
          }
        }
      }
      let eU = {
          [z]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 })
        },
        eV = Object.freeze({
          blur: 0,
          'hue-rotate': 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100
        }),
        ew = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eB = (e, t) => {
          let a = (0, l.default)(t.filters, ({ type: t }) => t === e)
          if (a && a.unit) return a.unit
          switch (e) {
            case 'blur':
              return 'px'
            case 'hue-rotate':
              return 'deg'
            default:
              return '%'
          }
        },
        eF = Object.keys(eU),
        eG = /^rgb/,
        ex = RegExp('rgba?\\(([^)]+)\\)')
      function eP (e, t, a) {
        if (!E.IS_BROWSER_ENV) return
        let n = er[t]
        if (!n) return
        let { getStyle: i, setStyle: c } = a,
          o = i(e, x)
        if (!o) return void c(e, x, n)
        let l = o.split(D).map(el)
        ;-1 === l.indexOf(n) && c(e, x, l.concat(n).join(D))
      }
      function eD (e, t, a) {
        if (!E.IS_BROWSER_ENV) return
        let n = er[t]
        if (!n) return
        let { getStyle: i, setStyle: c } = a,
          o = i(e, x)
        o &&
          -1 !== o.indexOf(n) &&
          c(
            e,
            x,
            o
              .split(D)
              .map(el)
              .filter(e => e !== n)
              .join(D)
          )
      }
      function eQ ({ store: e, elementApi: t }) {
        let { ixData: a } = e.getState(),
          { events: n = {}, actionLists: i = {} } = a
        Object.keys(n).forEach(e => {
          let a = n[e],
            { config: c } = a.action,
            { actionListId: o } = c,
            l = i[o]
          l && eX({ actionList: l, event: a, elementApi: t })
        }),
          Object.keys(i).forEach(e => {
            eX({ actionList: i[e], elementApi: t })
          })
      }
      function eX ({ actionList: e = {}, event: t, elementApi: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e
        n &&
          n.forEach(e => {
            eW({ actionGroup: e, event: t, elementApi: a })
          }),
          i &&
            i.forEach(e => {
              let { continuousActionGroups: n } = e
              n.forEach(e => {
                eW({ actionGroup: e, event: t, elementApi: a })
              })
            })
      }
      function eW ({ actionGroup: e, event: t, elementApi: a }) {
        let { actionItems: n } = e
        n.forEach(e => {
          let n,
            { actionTypeId: i, config: c } = e
          ;(n = (0, p.isPluginType)(i)
            ? t => (0, p.clearPlugin)(i)(t, e)
            : ej({ effect: eH, actionTypeId: i, elementApi: a })),
            eb({ config: c, event: t, elementApi: a }).forEach(n)
        })
      }
      function eY (e, t, a) {
        let { setStyle: n, getStyle: i } = a,
          { actionTypeId: c } = t
        if (c === et) {
          let { config: a } = t
          a.widthUnit === P && n(e, A, ''), a.heightUnit === P && n(e, M, '')
        }
        i(e, x) && ej({ effect: eD, actionTypeId: c, elementApi: a })(e)
      }
      let ej =
        ({ effect: e, actionTypeId: t, elementApi: a }) =>
        n => {
          switch (t) {
            case z:
            case $:
            case q:
            case K:
              e(n, E.TRANSFORM_PREFIXED, a)
              break
            case J:
              e(n, S, a)
              break
            case ee:
              e(n, h, a)
              break
            case Z:
              e(n, N, a)
              break
            case et:
              e(n, A, a), e(n, M, a)
              break
            case ea:
            case en:
            case ei:
              e(n, ed[t], a)
              break
            case ec:
              e(n, G, a)
          }
        }
      function eH (e, t, a) {
        let { setStyle: n } = a
        eD(e, t, a),
          n(e, t, ''),
          t === E.TRANSFORM_PREFIXED && n(e, E.TRANSFORM_STYLE_PREFIXED, '')
      }
      function ez (e) {
        let t = 0,
          a = 0
        return (
          e.forEach((e, n) => {
            let { config: i } = e,
              c = i.delay + i.duration
            c >= t && ((t = c), (a = n))
          }),
          a
        )
      }
      function e$ (e, t) {
        let { actionItemGroups: a, useFirstGroupAsInitialState: n } = e,
          { actionItem: i, verboseTimeElapsed: c = 0 } = t,
          o = 0,
          l = 0
        return (
          a.forEach((e, t) => {
            if (n && 0 === t) return
            let { actionItems: a } = e,
              d = a[ez(a)],
              { config: r, actionTypeId: s } = d
            i.id === d.id && (l = o + c)
            let u = eM(s) === Y ? 0 : r.duration
            o += r.delay + u
          }),
          o > 0 ? (0, u.optimizeFloat)(l / o) : 0
        )
      }
      function eq ({ actionList: e, actionItemId: t, rawData: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e,
          c = [],
          o = e => (
            c.push((0, d.mergeIn)(e, ['config'], { delay: 0, duration: 0 })),
            e.id === t
          )
        return (
          n && n.some(({ actionItems: e }) => e.some(o)),
          i &&
            i.some(e => {
              let { continuousActionGroups: t } = e
              return t.some(({ actionItems: e }) => e.some(o))
            }),
          (0, d.setIn)(a, ['actionLists'], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: c }] }
          })
        )
      }
      function eK (e, { basedOn: t }) {
        return (
          (e === r.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === r.EventBasedOn.ELEMENT || null == t)) ||
          (e === r.EventTypeConsts.MOUSE_MOVE && t === r.EventBasedOn.ELEMENT)
        )
      }
      function eZ (e, t) {
        return e + Q + t
      }
      function eJ (e, t) {
        return null == t || -1 !== e.indexOf(t)
      }
      function e0 (e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort())
      }
      function e1 (e) {
        if ('string' == typeof e) return e
        if (e.pluginElement && e.objectId)
          return e.pluginElement + X + e.objectId
        if (e.objectId) return e.objectId
        let { id: t = '', selector: a = '', useEventTarget: n = '' } = e
        return t + X + a + X + n
      }
    },
    7164: function (e, t) {
      'use strict'
      function a (e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return n
          }
        })
      let n = function (e, t) {
        if (a(e, t)) return !0
        if (
          'object' != typeof e ||
          null === e ||
          'object' != typeof t ||
          null === t
        )
          return !1
        let n = Object.keys(e),
          i = Object.keys(t)
        if (n.length !== i.length) return !1
        for (let i = 0; i < n.length; i++)
          if (!Object.hasOwn(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1
        return !0
      }
    },
    5861: function (e, t, a) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = {
        createElementState: function () {
          return L
        },
        ixElements: function () {
          return v
        },
        mergeActionState: function () {
          return _
        }
      }
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] })
      let c = a(1185),
        o = a(7087),
        {
          HTML_ELEMENT: l,
          PLAIN_OBJECT: d,
          ABSTRACT_NODE: r,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: I,
          CONFIG_Z_UNIT: T,
          CONFIG_UNIT: y
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: g,
          IX2_INSTANCE_ADDED: m,
          IX2_ELEMENT_STATE_CHANGED: b
        } = o.IX2EngineActionTypes,
        O = {},
        v = (e = O, t = {}) => {
          switch (t.type) {
            case g:
              return O
            case m: {
              let {
                  elementId: a,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: l
                } = t.payload,
                { actionTypeId: d } = o,
                r = e
              return (
                (0, c.getIn)(r, [a, n]) !== n && (r = L(r, n, l, a, o)),
                _(r, a, d, i, o)
              )
            }
            case b: {
              let {
                elementId: a,
                actionTypeId: n,
                current: i,
                actionItem: c
              } = t.payload
              return _(e, a, n, i, c)
            }
            default:
              return e
          }
        }
      function L (e, t, a, n, i) {
        let o =
          a === d ? (0, c.getIn)(i, ['config', 'target', 'objectId']) : null
        return (0, c.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: a })
      }
      function _ (e, t, a, n, i) {
        let o = (function (e) {
          let { config: t } = e
          return R.reduce((e, a) => {
            let n = a[0],
              i = a[1],
              c = t[n],
              o = t[i]
            return null != c && null != o && (e[i] = o), e
          }, {})
        })(i)
        return (0, c.mergeIn)(e, [t, 'refState', a], n, o)
      }
      let R = [
        [s, E],
        [u, I],
        [f, T],
        [p, y]
      ]
    },
    5164: function () {
      Webflow.require('ix2').init({
        events: {
          e: {
            id: 'e',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-2'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3880ea18-849c-f3bf-0399-a05605c81465',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3880ea18-849c-f3bf-0399-a05605c81465',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1994cb8fabb
          },
          'e-3': {
            id: 'e-3',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-2',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-4'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3880ea18-849c-f3bf-0399-a05605c81467',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3880ea18-849c-f3bf-0399-a05605c81467',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1994cc1b7c2
          },
          'e-4': {
            id: 'e-4',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-3',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-3'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3880ea18-849c-f3bf-0399-a05605c81467',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3880ea18-849c-f3bf-0399-a05605c81467',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1994cc1b7c2
          },
          'e-5': {
            id: 'e-5',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-4',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-6'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3880ea18-849c-f3bf-0399-a05605c81467',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3880ea18-849c-f3bf-0399-a05605c81467',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1994cc1b7c2
          },
          'e-9': {
            id: 'e-9',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-2',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-10'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|dbcd84e8-7927-baf5-b654-61adab2dcd1e',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|dbcd84e8-7927-baf5-b654-61adab2dcd1e',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c229099c
          },
          'e-10': {
            id: 'e-10',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-3',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-9'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|dbcd84e8-7927-baf5-b654-61adab2dcd1e',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|dbcd84e8-7927-baf5-b654-61adab2dcd1e',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c229099c
          },
          'e-11': {
            id: 'e-11',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-4',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-12'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|dbcd84e8-7927-baf5-b654-61adab2dcd1e',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|dbcd84e8-7927-baf5-b654-61adab2dcd1e',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c229099c
          },
          'e-15': {
            id: 'e-15',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-2',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-16'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|29681f04-f136-ef4a-5a2c-6c1fb15d8879',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|29681f04-f136-ef4a-5a2c-6c1fb15d8879',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2303e29
          },
          'e-16': {
            id: 'e-16',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-3',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-15'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|29681f04-f136-ef4a-5a2c-6c1fb15d8879',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|29681f04-f136-ef4a-5a2c-6c1fb15d8879',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2303e29
          },
          'e-17': {
            id: 'e-17',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-4',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-18'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|29681f04-f136-ef4a-5a2c-6c1fb15d8879',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|29681f04-f136-ef4a-5a2c-6c1fb15d8879',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2303e29
          },
          'e-21': {
            id: 'e-21',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-2',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-22'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|de20fcb5-f0c5-887a-91af-28b899ac8b13',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|de20fcb5-f0c5-887a-91af-28b899ac8b13',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c233450b
          },
          'e-22': {
            id: 'e-22',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-3',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-21'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|de20fcb5-f0c5-887a-91af-28b899ac8b13',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|de20fcb5-f0c5-887a-91af-28b899ac8b13',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c233450b
          },
          'e-23': {
            id: 'e-23',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-4',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-24'
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|de20fcb5-f0c5-887a-91af-28b899ac8b13',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|de20fcb5-f0c5-887a-91af-28b899ac8b13',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c233450b
          },
          'e-27': {
            id: 'e-27',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-2',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-28'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|281a85fe-510b-64ad-1a16-a445e97f3aab',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|281a85fe-510b-64ad-1a16-a445e97f3aab',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2336621
          },
          'e-28': {
            id: 'e-28',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-3',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-27'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|281a85fe-510b-64ad-1a16-a445e97f3aab',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|281a85fe-510b-64ad-1a16-a445e97f3aab',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2336621
          },
          'e-29': {
            id: 'e-29',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-4',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-30'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|281a85fe-510b-64ad-1a16-a445e97f3aab',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|281a85fe-510b-64ad-1a16-a445e97f3aab',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2336621
          },
          'e-33': {
            id: 'e-33',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-2',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-34'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|441ea32a-f140-3910-2055-d9166cb925a5',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|441ea32a-f140-3910-2055-d9166cb925a5',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2337923
          },
          'e-34': {
            id: 'e-34',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-3',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-33'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|441ea32a-f140-3910-2055-d9166cb925a5',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|441ea32a-f140-3910-2055-d9166cb925a5',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2337923
          },
          'e-35': {
            id: 'e-35',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-4',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-36'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|441ea32a-f140-3910-2055-d9166cb925a5',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|441ea32a-f140-3910-2055-d9166cb925a5',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2337923
          },
          'e-39': {
            id: 'e-39',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-2',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-40'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|b5efdc12-d1e8-3387-4ccb-9bf4902fc5c7',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|b5efdc12-d1e8-3387-4ccb-9bf4902fc5c7',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2339737
          },
          'e-40': {
            id: 'e-40',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-3',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-39'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|b5efdc12-d1e8-3387-4ccb-9bf4902fc5c7',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|b5efdc12-d1e8-3387-4ccb-9bf4902fc5c7',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2339737
          },
          'e-41': {
            id: 'e-41',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-4',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-42'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|b5efdc12-d1e8-3387-4ccb-9bf4902fc5c7',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|b5efdc12-d1e8-3387-4ccb-9bf4902fc5c7',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2339737
          },
          'e-45': {
            id: 'e-45',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-2',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-46'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|2d8191b8-703d-1e68-8289-950efad87767',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|2d8191b8-703d-1e68-8289-950efad87767',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c233aafc
          },
          'e-46': {
            id: 'e-46',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-3',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-45'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|2d8191b8-703d-1e68-8289-950efad87767',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|2d8191b8-703d-1e68-8289-950efad87767',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c233aafc
          },
          'e-47': {
            id: 'e-47',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-4',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-48'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|2d8191b8-703d-1e68-8289-950efad87767',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|2d8191b8-703d-1e68-8289-950efad87767',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c233aafc
          },
          'e-51': {
            id: 'e-51',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-2',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-52'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|81492770-5d79-df10-ea4e-5fc5c27ee719',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|81492770-5d79-df10-ea4e-5fc5c27ee719',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c233bf70
          },
          'e-52': {
            id: 'e-52',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-3',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-51'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|81492770-5d79-df10-ea4e-5fc5c27ee719',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|81492770-5d79-df10-ea4e-5fc5c27ee719',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c233bf70
          },
          'e-53': {
            id: 'e-53',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-4',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-54'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|81492770-5d79-df10-ea4e-5fc5c27ee719',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|81492770-5d79-df10-ea4e-5fc5c27ee719',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c233bf70
          },
          'e-57': {
            id: 'e-57',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-2',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-58'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|bbbe6fdd-5df6-305c-5612-ef1e53d20042',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|bbbe6fdd-5df6-305c-5612-ef1e53d20042',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2348ce3
          },
          'e-58': {
            id: 'e-58',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-3',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-57'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|bbbe6fdd-5df6-305c-5612-ef1e53d20042',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|bbbe6fdd-5df6-305c-5612-ef1e53d20042',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2348ce3
          },
          'e-59': {
            id: 'e-59',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-4',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-60'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|bbbe6fdd-5df6-305c-5612-ef1e53d20042',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|bbbe6fdd-5df6-305c-5612-ef1e53d20042',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c2348ce3
          },
          'e-63': {
            id: 'e-63',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-2',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-64'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|8d6a6dac-fd6f-ecc3-8026-a4e0fe6dc855',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|8d6a6dac-fd6f-ecc3-8026-a4e0fe6dc855',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c234d3c9
          },
          'e-64': {
            id: 'e-64',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-3',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-63'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|8d6a6dac-fd6f-ecc3-8026-a4e0fe6dc855',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|8d6a6dac-fd6f-ecc3-8026-a4e0fe6dc855',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c234d3c9
          },
          'e-65': {
            id: 'e-65',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-4',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-66'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|8d6a6dac-fd6f-ecc3-8026-a4e0fe6dc855',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|8d6a6dac-fd6f-ecc3-8026-a4e0fe6dc855',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c234d3c9
          },
          'e-69': {
            id: 'e-69',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-70' }
            },
            mediaQueries: ['main'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|9940f0d8-82d6-d82e-4cca-2967900e42af',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|9940f0d8-82d6-d82e-4cca-2967900e42af',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 40,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'RIGHT',
              effectIn: !0
            },
            createdOn: 0x1994cde5376
          },
          'e-71': {
            id: 'e-71',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-72' }
            },
            mediaQueries: ['main'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|4f146954-8fad-2477-2732-4f0deeb4620f',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|4f146954-8fad-2477-2732-4f0deeb4620f',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'LEFT',
              effectIn: !0
            },
            createdOn: 0x199c336e8c5
          },
          'e-73': {
            id: 'e-73',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-74' }
            },
            mediaQueries: ['main'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|d40f160d-0bd1-7ec9-1d9a-d8bfe70def22',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|d40f160d-0bd1-7ec9-1d9a-d8bfe70def22',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 30,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'RIGHT',
              effectIn: !0
            },
            createdOn: 0x199c337cb4e
          },
          'e-75': {
            id: 'e-75',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-8',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-119'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325a7',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325a7',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1994ce99791
          },
          'e-76': {
            id: 'e-76',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-9',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-122'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ac',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ac',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19975741914
          },
          'e-77': {
            id: 'e-77',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-92'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325be',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325be',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fe0db89
          },
          'e-78': {
            id: 'e-78',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-101'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ac',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ac',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fde05cd
          },
          'e-79': {
            id: 'e-79',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-7',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-87'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b32571',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b32571',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199507d0d0e
          },
          'e-80': {
            id: 'e-80',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-5',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-116'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b3259d',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b3259d',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1994ce0b169
          },
          'e-81': {
            id: 'e-81',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-109'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b7',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b7',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fe0861c
          },
          'e-82': {
            id: 'e-82',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-88'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c9',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c9',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fe164c5
          },
          'e-83': {
            id: 'e-83',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-102'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c9',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c9',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1996e34af04
          },
          'e-84': {
            id: 'e-84',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-108'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325a7',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325a7',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fdcb08f
          },
          'e-85': {
            id: 'e-85',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-96'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ce',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ce',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980006b9d
          },
          'e-86': {
            id: 'e-86',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-99'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c3',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c3',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fe1271e
          },
          'e-88': {
            id: 'e-88',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-82'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c9',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c9',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fe164c4
          },
          'e-89': {
            id: 'e-89',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-6',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-100'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b32592',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b32592',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199508386be
          },
          'e-90': {
            id: 'e-90',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-8',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-104'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b2',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b2',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1996e348280
          },
          'e-91': {
            id: 'e-91',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-103'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b2',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b2',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fdfe859
          },
          'e-92': {
            id: 'e-92',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-77'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325be',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325be',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fe0db89
          },
          'e-94': {
            id: 'e-94',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-6',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-118'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b3257c',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b3257c',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199507d064c
          },
          'e-95': {
            id: 'e-95',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-8',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-121'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b7',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b7',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1996e378b8f
          },
          'e-96': {
            id: 'e-96',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-85'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ce',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ce',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980006b9b
          },
          'e-97': {
            id: 'e-97',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GROW_EFFECT',
              instant: !1,
              config: { actionListId: 'growIn', autoStopEventId: 'e-111' }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325a3',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325a3',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: null,
              effectIn: !0
            },
            createdOn: 0x1994ce89fc3
          },
          'e-98': {
            id: 'e-98',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-8',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-112'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c3',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c3',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1996e34ac69
          },
          'e-99': {
            id: 'e-99',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-86'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c3',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c3',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fe1271d
          },
          'e-101': {
            id: 'e-101',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-78'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ac',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ac',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fde05cc
          },
          'e-102': {
            id: 'e-102',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-83'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c9',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c9',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1996e34af04
          },
          'e-103': {
            id: 'e-103',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-91'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b2',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b2',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fdfe85a
          },
          'e-104': {
            id: 'e-104',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-9',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-90'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b2',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b2',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1996e348280
          },
          'e-105': {
            id: 'e-105',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-6',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-110'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b32566',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b32566',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199508127a6
          },
          'e-107': {
            id: 'e-107',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-7',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-106'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b32587',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b32587',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19950854c5a
          },
          'e-108': {
            id: 'e-108',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-10',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-84'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325a7',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325a7',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fdcb08e
          },
          'e-109': {
            id: 'e-109',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-11',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-81'
              }
            },
            mediaQueries: ['tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b7',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b7',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997fe0861d
          },
          'e-112': {
            id: 'e-112',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-9',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-98'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c3',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325c3',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1996e34ac69
          },
          'e-113': {
            id: 'e-113',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-5',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-93'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b32564',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b32564',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199506cfd60
          },
          'e-114': {
            id: 'e-114',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-8',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-120'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325be',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325be',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1996e34ac69
          },
          'e-115': {
            id: 'e-115',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-8',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-117'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ce',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ce',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1996e34af04
          },
          'e-117': {
            id: 'e-117',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-9',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-115'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ce',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ce',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1996e34af04
          },
          'e-119': {
            id: 'e-119',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-9',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-75'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325a7',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325a7',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1994ce99792
          },
          'e-120': {
            id: 'e-120',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-9',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-114'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325be',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325be',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1996e34ac69
          },
          'e-121': {
            id: 'e-121',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-9',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-95'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b7',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325b7',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1996e378b8f
          },
          'e-122': {
            id: 'e-122',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-8',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-76'
              }
            },
            mediaQueries: ['main', 'medium', 'small'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ac',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b325ac',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19975741914
          },
          'e-123': {
            id: 'e-123',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLLING_IN_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
              config: {
                actionListId: 'a-12',
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ['main', 'medium'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|a3931150-4a20-5fb4-ffbd-47d3a1eb84c6',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|a3931150-4a20-5fb4-ffbd-47d3a1eb84c6',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: [
              {
                continuousParameterGroupId: 'a-12-p',
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50
              }
            ],
            createdOn: 0x1995c7ac5cd
          },
          'e-125': {
            id: 'e-125',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-126'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: 'd4a4add1-6fb2-3899-87a3-aa5ba66033e5',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: 'd4a4add1-6fb2-3899-87a3-aa5ba66033e5',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 24,
              scrollOffsetUnit: '%',
              delay: 12,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199c73f68dd
          },
          'e-129': {
            id: 'e-129',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-130'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|44d075f1-824b-2a08-cd41-d3594ec3122f',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|44d075f1-824b-2a08-cd41-d3594ec3122f',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199c7433405
          },
          'e-133': {
            id: 'e-133',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-134'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|b1a73f2f-a3e4-8215-8e69-9eb704c19830',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|b1a73f2f-a3e4-8215-8e69-9eb704c19830',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199c743fc9e
          },
          'e-135': {
            id: 'e-135',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInRight', autoStopEventId: 'e-136' }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|14ede91e-ba50-b383-34e8-40d104f7c4e1',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|14ede91e-ba50-b383-34e8-40d104f7c4e1',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 600,
              direction: 'RIGHT',
              effectIn: !0
            },
            createdOn: 0x199c75134e1
          },
          'e-137': {
            id: 'e-137',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-16',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-147'
              }
            },
            mediaQueries: ['main'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a4f',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a4f',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199759669b9
          },
          'e-138': {
            id: 'e-138',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-17',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-148'
              }
            },
            mediaQueries: ['main'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a6c',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a6c',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199759cc516
          },
          'e-139': {
            id: 'e-139',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-16',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-146'
              }
            },
            mediaQueries: ['main'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a87',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a87',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199759d54c5
          },
          'e-143': {
            id: 'e-143',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLLING_IN_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
              config: {
                actionListId: 'a-15',
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a36',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a36',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: [
              {
                continuousParameterGroupId: 'a-15-p',
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50
              }
            ],
            createdOn: 0x19970ab7ad1
          },
          'e-144': {
            id: 'e-144',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FLIP_EFFECT',
              instant: !1,
              config: { actionListId: 'flipInBottom', autoStopEventId: 'e-150' }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a72',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a72',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 40,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x19970b9d9aa
          },
          'e-146': {
            id: 'e-146',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-17',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-139'
              }
            },
            mediaQueries: ['main'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a87',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a87',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199759d54c5
          },
          'e-147': {
            id: 'e-147',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-17',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-137'
              }
            },
            mediaQueries: ['main'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a4f',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a4f',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199759669bb
          },
          'e-148': {
            id: 'e-148',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-16',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-138'
              }
            },
            mediaQueries: ['main'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a6c',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a6c',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199759cc516
          },
          'e-151': {
            id: 'e-151',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FLIP_EFFECT',
              instant: !1,
              config: { actionListId: 'flipInBottom', autoStopEventId: 'e-145' }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a38',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a38',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 40,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x19970ae0535
          },
          'e-152': {
            id: 'e-152',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'FLIP_EFFECT',
              instant: !1,
              config: { actionListId: 'flipInBottom', autoStopEventId: 'e-141' }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a55',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a55',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 40,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x19970b9a067
          },
          'e-156': {
            id: 'e-156',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-21',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-171'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da32',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da32',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199518da082
          },
          'e-157': {
            id: 'e-157',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-20',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-162'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da16',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da16',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19951863d29
          },
          'e-158': {
            id: 'e-158',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-20',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-165'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da4e',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da4e',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199518d969d
          },
          'e-162': {
            id: 'e-162',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-21',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-254'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da16',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da16',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19951863d29
          },
          'e-164': {
            id: 'e-164',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-21',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-169'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da24',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da24',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1995fd74da3
          },
          'e-165': {
            id: 'e-165',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-21',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-255'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da4e',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da4e',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199518d969d
          },
          'e-166': {
            id: 'e-166',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_SECOND_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-21',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-168'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da40',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da40',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199518d9b76
          },
          'e-168': {
            id: 'e-168',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-20',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-166'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da40',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da40',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199518d9b76
          },
          'e-169': {
            id: 'e-169',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-20',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-164'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da24',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da24',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1995fd74da3
          },
          'e-171': {
            id: 'e-171',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-20',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-156'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da32',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da32',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199518da082
          },
          'e-175': {
            id: 'e-175',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-178'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acaf',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acaf',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 600,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199798b03aa
          },
          'e-176': {
            id: 'e-176',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-22',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-186'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acb3',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acb3',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997999c518
          },
          'e-179': {
            id: 'e-179',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-22',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-181'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acc5',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acc5',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19979a154b6
          },
          'e-181': {
            id: 'e-181',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-23',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-179'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acc5',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acc5',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19979a154b7
          },
          'e-182': {
            id: 'e-182',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-22',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-185'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acce',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acce',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19979a1a9fc
          },
          'e-183': {
            id: 'e-183',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-22',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-184'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acbc',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acbc',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199799f411d
          },
          'e-184': {
            id: 'e-184',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-23',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-183'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acbc',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acbc',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199799f411f
          },
          'e-185': {
            id: 'e-185',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-23',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-182'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acce',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acce',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19979a1a9fc
          },
          'e-186': {
            id: 'e-186',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-23',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-176'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acb3',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acb3',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1997999c51a
          },
          'e-187': {
            id: 'e-187',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-188'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|365ebf95-7d8b-3ed7-4f7b-66a7142e78a5',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|365ebf95-7d8b-3ed7-4f7b-66a7142e78a5',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 61,
              scrollOffsetUnit: '%',
              delay: 297,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x1997056a163
          },
          'e-189': {
            id: 'e-189',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-24',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-190'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|23e9ba4a-e2cb-76d2-4200-5c61f06f7ea4',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|23e9ba4a-e2cb-76d2-4200-5c61f06f7ea4',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1995b20f053
          },
          'e-190': {
            id: 'e-190',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-25',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-189'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|23e9ba4a-e2cb-76d2-4200-5c61f06f7ea4',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|23e9ba4a-e2cb-76d2-4200-5c61f06f7ea4',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1995b20f053
          },
          'e-191': {
            id: 'e-191',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-192'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|23e9ba4a-e2cb-76d2-4200-5c61f06f7ea6',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|23e9ba4a-e2cb-76d2-4200-5c61f06f7ea6',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x19970589683
          },
          'e-193': {
            id: 'e-193',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-194'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: 'a4a586a9-9669-a837-9643-4c10e4df4e9d',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: 'a4a586a9-9669-a837-9643-4c10e4df4e9d',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 22,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x1996e5bc5b4
          },
          'e-195': {
            id: 'e-195',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-196'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: 'a4a586a9-9669-a837-9643-4c10e4df4e9f',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: 'a4a586a9-9669-a837-9643-4c10e4df4e9f',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x1996048707e
          },
          'e-197': {
            id: 'e-197',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-26',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-198'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: 'a4a586a9-9669-a837-9643-4c10e4df4eaf',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: 'a4a586a9-9669-a837-9643-4c10e4df4eaf',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1995b1fc785
          },
          'e-198': {
            id: 'e-198',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-27',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-197'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: 'a4a586a9-9669-a837-9643-4c10e4df4eaf',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: 'a4a586a9-9669-a837-9643-4c10e4df4eaf',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x1995b1fc785
          },
          'e-199': {
            id: 'e-199',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-200'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: 'a4a586a9-9669-a837-9643-4c10e4df4ebd',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: 'a4a586a9-9669-a837-9643-4c10e4df4ebd',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199604946ce
          },
          'e-201': {
            id: 'e-201',
            name: '',
            animationType: 'custom',
            eventTypeId: 'PAGE_START',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-28',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-202'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51',
              appliesTo: 'PAGE',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51',
                appliesTo: 'PAGE',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199c8448160
          },
          'e-203': {
            id: 'e-203',
            name: '',
            animationType: 'custom',
            eventTypeId: 'SCROLLING_IN_VIEW',
            action: {
              id: '',
              actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
              config: {
                actionListId: 'a-18',
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|43ad58d4-e2fe-0ede-04cd-995eb9a33c36',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|43ad58d4-e2fe-0ede-04cd-995eb9a33c36',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: [
              {
                continuousParameterGroupId: 'a-18-p',
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50
              }
            ],
            createdOn: 0x199c85c1eb2
          },
          'e-204': {
            id: 'e-204',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-32',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-216'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '429988e8-fcc2-bf6e-ff1a-f777152fea80',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '429988e8-fcc2-bf6e-ff1a-f777152fea80',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199808089d5
          },
          'e-206': {
            id: 'e-206',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-31',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-209'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '429988e8-fcc2-bf6e-ff1a-f777152fea7a',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '429988e8-fcc2-bf6e-ff1a-f777152fea7a',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980809140
          },
          'e-208': {
            id: 'e-208',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-33',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-205'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '429988e8-fcc2-bf6e-ff1a-f777152fea7d',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '429988e8-fcc2-bf6e-ff1a-f777152fea7d',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980b3c0fd
          },
          'e-209': {
            id: 'e-209',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-32',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-206'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '429988e8-fcc2-bf6e-ff1a-f777152fea7a',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '429988e8-fcc2-bf6e-ff1a-f777152fea7a',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980809140
          },
          'e-210': {
            id: 'e-210',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-31',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-218'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '429988e8-fcc2-bf6e-ff1a-f777152fea7d',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '429988e8-fcc2-bf6e-ff1a-f777152fea7d',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980808b48
          },
          'e-215': {
            id: 'e-215',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-33',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-220'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '429988e8-fcc2-bf6e-ff1a-f777152fea80',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '429988e8-fcc2-bf6e-ff1a-f777152fea80',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980b3ed13
          },
          'e-216': {
            id: 'e-216',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-31',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-204'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '429988e8-fcc2-bf6e-ff1a-f777152fea80',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '429988e8-fcc2-bf6e-ff1a-f777152fea80',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199808089d5
          },
          'e-218': {
            id: 'e-218',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-32',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-210'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '429988e8-fcc2-bf6e-ff1a-f777152fea7d',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '429988e8-fcc2-bf6e-ff1a-f777152fea7d',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980808b48
          },
          'e-222': {
            id: 'e-222',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_MOVE',
            action: {
              id: '',
              actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
              config: {
                actionListId: 'a-34',
                affectedElements: {},
                duration: 0
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51',
              appliesTo: 'PAGE',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51',
                appliesTo: 'PAGE',
                styleBlockIds: []
              }
            ],
            config: [
              {
                continuousParameterGroupId: 'a-34-p',
                selectedAxis: 'X_AXIS',
                basedOn: 'VIEWPORT',
                reverse: !1,
                smoothing: 50,
                restingState: 50
              },
              {
                continuousParameterGroupId: 'a-34-p-2',
                selectedAxis: 'Y_AXIS',
                basedOn: 'VIEWPORT',
                reverse: !1,
                smoothing: 50,
                restingState: 50
              }
            ],
            createdOn: 0x199c862fb0f
          },
          'e-238': {
            id: 'e-238',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-22',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-239'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4caba',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4caba',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980483995
          },
          'e-239': {
            id: 'e-239',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-37',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-238'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4caba',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4caba',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980483995
          },
          'e-240': {
            id: 'e-240',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-22',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-241'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cac3',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cac3',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980483ec1
          },
          'e-241': {
            id: 'e-241',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-37',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-240'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cac3',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cac3',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980483ec1
          },
          'e-242': {
            id: 'e-242',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-22',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-243'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cacc',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cacc',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980484697
          },
          'e-243': {
            id: 'e-243',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-37',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-242'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cacc',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cacc',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980484697
          },
          'e-244': {
            id: 'e-244',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-22',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-245'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cad5',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cad5',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980484a15
          },
          'e-245': {
            id: 'e-245',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-37',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-244'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cad5',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cad5',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19980484a15
          },
          'e-246': {
            id: 'e-246',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-247'
              }
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|9940f0d8-82d6-d82e-4cca-2967900e42af',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|9940f0d8-82d6-d82e-4cca-2967900e42af',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 24,
              scrollOffsetUnit: '%',
              delay: 12,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199cc329f54
          },
          'e-247': {
            id: 'e-247',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_OUT_OF_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: { actionListId: 'slideInLeft', autoStopEventId: 'e-246' }
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|9940f0d8-82d6-d82e-4cca-2967900e42af',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|9940f0d8-82d6-d82e-4cca-2967900e42af',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'LEFT',
              effectIn: !0
            },
            createdOn: 0x199cc329f56
          },
          'e-248': {
            id: 'e-248',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-249'
              }
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|4f146954-8fad-2477-2732-4f0deeb4620f',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|4f146954-8fad-2477-2732-4f0deeb4620f',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 24,
              scrollOffsetUnit: '%',
              delay: 12,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199cc33b85f
          },
          'e-250': {
            id: 'e-250',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-251'
              }
            },
            mediaQueries: ['medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|d40f160d-0bd1-7ec9-1d9a-d8bfe70def22',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|d40f160d-0bd1-7ec9-1d9a-d8bfe70def22',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 24,
              scrollOffsetUnit: '%',
              delay: 12,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199cc34193b
          },
          'e-252': {
            id: 'e-252',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-26',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-253'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8bfed0513ba12c5c346b1|4e62bedf-6e91-42ba-069d-6337a5458a2a',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8bfed0513ba12c5c346b1|4e62bedf-6e91-42ba-069d-6337a5458a2a',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199cd361c0b
          },
          'e-253': {
            id: 'e-253',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-27',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-252'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8bfed0513ba12c5c346b1|4e62bedf-6e91-42ba-069d-6337a5458a2a',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8bfed0513ba12c5c346b1|4e62bedf-6e91-42ba-069d-6337a5458a2a',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199cd361c0b
          },
          'e-254': {
            id: 'e-254',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-255'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e76da9142c21494e272d32|48c89bb8-82ec-00ca-980e-9db8afed8364',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e76da9142c21494e272d32|48c89bb8-82ec-00ca-980e-9db8afed8364',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 10,
              scrollOffsetUnit: '%',
              delay: 100,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x19974ee5ad8
          },
          'e-256': {
            id: 'e-256',
            name: '',
            animationType: 'custom',
            eventTypeId: 'PAGE_START',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-38',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-257'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51',
              appliesTo: 'PAGE',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51',
                appliesTo: 'PAGE',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199dba3aeb8
          },
          'e-258': {
            id: 'e-258',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-26',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-259'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68ec7b8aea93197c4f1a2089|05004618-4b6e-301f-472e-bdafbcd4626f',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68ec7b8aea93197c4f1a2089|05004618-4b6e-301f-472e-bdafbcd4626f',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199dbd6b68f
          },
          'e-259': {
            id: 'e-259',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-27',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-258'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68ec7b8aea93197c4f1a2089|05004618-4b6e-301f-472e-bdafbcd4626f',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68ec7b8aea93197c4f1a2089|05004618-4b6e-301f-472e-bdafbcd4626f',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199dbd6b68f
          },
          'e-260': {
            id: 'e-260',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-26',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-261'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a52|ef9c83a5-83c2-a943-088e-c1b5b81daed0',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a52|ef9c83a5-83c2-a943-088e-c1b5b81daed0',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199e409ee2b
          },
          'e-261': {
            id: 'e-261',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-27',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-260'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a52|ef9c83a5-83c2-a943-088e-c1b5b81daed0',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a52|ef9c83a5-83c2-a943-088e-c1b5b81daed0',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199e409ee2b
          },
          'e-262': {
            id: 'e-262',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-24',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-263'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a53|e74f0193-8e5f-3abc-0157-a1129b1e7f1f',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a53|e74f0193-8e5f-3abc-0157-a1129b1e7f1f',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199e40b92f2
          },
          'e-263': {
            id: 'e-263',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-25',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-262'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a53|e74f0193-8e5f-3abc-0157-a1129b1e7f1f',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a53|e74f0193-8e5f-3abc-0157-a1129b1e7f1f',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199e40b92f2
          },
          'e-264': {
            id: 'e-264',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-265'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a53|e74f0193-8e5f-3abc-0157-a1129b1e7f21',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a53|e74f0193-8e5f-3abc-0157-a1129b1e7f21',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e40b92f2
          },
          'e-266': {
            id: 'e-266',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-267'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8c39e2f23eec5eb4369a6|705b26c9-be12-3d1e-eb02-d16ac8784096',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8c39e2f23eec5eb4369a6|705b26c9-be12-3d1e-eb02-d16ac8784096',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6db6e2a
          },
          'e-268': {
            id: 'e-268',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-269'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8c39e2f23eec5eb4369a6|705b26c9-be12-3d1e-eb02-d16ac8784098',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8c39e2f23eec5eb4369a6|705b26c9-be12-3d1e-eb02-d16ac8784098',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6dbc883
          },
          'e-270': {
            id: 'e-270',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-271'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8c39e2f23eec5eb4369a6|98551e7c-fe3d-e024-e8f2-6e4c5cb9aac3',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8c39e2f23eec5eb4369a6|98551e7c-fe3d-e024-e8f2-6e4c5cb9aac3',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6dc0cc6
          },
          'e-272': {
            id: 'e-272',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-273'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8c39e2f23eec5eb4369a6|98551e7c-fe3d-e024-e8f2-6e4c5cb9aada',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8c39e2f23eec5eb4369a6|98551e7c-fe3d-e024-e8f2-6e4c5cb9aada',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6dc9896
          },
          'e-274': {
            id: 'e-274',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-275'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: 'a4a586a9-9669-a837-9643-4c10e4df4ee4',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: 'a4a586a9-9669-a837-9643-4c10e4df4ee4',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6dea1f7
          },
          'e-276': {
            id: 'e-276',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-277'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8c7d68df5868fa27f3185|b200c49b-8f83-7746-a008-980a219c62d4',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8c7d68df5868fa27f3185|b200c49b-8f83-7746-a008-980a219c62d4',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6df07f2
          },
          'e-278': {
            id: 'e-278',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-279'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8c7d68df5868fa27f3185|982889b9-5227-788c-ffda-dd84302813dc',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8c7d68df5868fa27f3185|982889b9-5227-788c-ffda-dd84302813dc',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6df7eec
          },
          'e-280': {
            id: 'e-280',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-281'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8c7d68df5868fa27f3185|982889b9-5227-788c-ffda-dd84302813e4',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8c7d68df5868fa27f3185|982889b9-5227-788c-ffda-dd84302813e4',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6dfbddb
          },
          'e-282': {
            id: 'e-282',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-283'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8c7d68df5868fa27f3185|982889b9-5227-788c-ffda-dd84302813ec',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8c7d68df5868fa27f3185|982889b9-5227-788c-ffda-dd84302813ec',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6dff062
          },
          'e-284': {
            id: 'e-284',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-285'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8bfed0513ba12c5c346b1|f9cda7bf-91d7-19d7-b4ec-17bfb6f7cfc2',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8bfed0513ba12c5c346b1|f9cda7bf-91d7-19d7-b4ec-17bfb6f7cfc2',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e14ac1
          },
          'e-286': {
            id: 'e-286',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-287'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8bfed0513ba12c5c346b1|f9cda7bf-91d7-19d7-b4ec-17bfb6f7cfc4',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8bfed0513ba12c5c346b1|f9cda7bf-91d7-19d7-b4ec-17bfb6f7cfc4',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e179a9
          },
          'e-288': {
            id: 'e-288',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-289'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8bfed0513ba12c5c346b1|f9cda7bf-91d7-19d7-b4ec-17bfb6f7cfc6',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8bfed0513ba12c5c346b1|f9cda7bf-91d7-19d7-b4ec-17bfb6f7cfc6',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e1c649
          },
          'e-290': {
            id: 'e-290',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-291'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8bfed0513ba12c5c346b1|f9cda7bf-91d7-19d7-b4ec-17bfb6f7d030',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8bfed0513ba12c5c346b1|f9cda7bf-91d7-19d7-b4ec-17bfb6f7d030',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e20f25
          },
          'e-292': {
            id: 'e-292',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-293'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e8bfed0513ba12c5c346b1|f9cda7bf-91d7-19d7-b4ec-17bfb6f7d044',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e8bfed0513ba12c5c346b1|f9cda7bf-91d7-19d7-b4ec-17bfb6f7d044',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e2425d
          },
          'e-294': {
            id: 'e-294',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-295'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68ec7b8aea93197c4f1a2089|8096e20c-15d5-e2f3-b6a4-702d38ed02b1',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68ec7b8aea93197c4f1a2089|8096e20c-15d5-e2f3-b6a4-702d38ed02b1',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e297a6
          },
          'e-296': {
            id: 'e-296',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-297'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68ec7b8aea93197c4f1a2089|8096e20c-15d5-e2f3-b6a4-702d38ed02b3',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68ec7b8aea93197c4f1a2089|8096e20c-15d5-e2f3-b6a4-702d38ed02b3',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e2cbbb
          },
          'e-298': {
            id: 'e-298',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-299'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68ec7b8aea93197c4f1a2089|7f2baf79-a8b3-eb91-7ad5-f7de49e80251',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68ec7b8aea93197c4f1a2089|7f2baf79-a8b3-eb91-7ad5-f7de49e80251',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 25,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e30b18
          },
          'e-300': {
            id: 'e-300',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-301'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e76da9142c21494e272d32|0167da3d-ee0d-5bb3-8122-0a9745bca596',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e76da9142c21494e272d32|0167da3d-ee0d-5bb3-8122-0a9745bca596',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e4e4a4
          },
          'e-302': {
            id: 'e-302',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-303'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e76da9142c21494e272d32|48c89bb8-82ec-00ca-980e-9db8afed8376',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e76da9142c21494e272d32|48c89bb8-82ec-00ca-980e-9db8afed8376',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e51a5c
          },
          'e-304': {
            id: 'e-304',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-305'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e76da9142c21494e272d32|a714f626-9331-3301-9e93-fc4a13f1a956',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e76da9142c21494e272d32|a714f626-9331-3301-9e93-fc4a13f1a956',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e54f25
          },
          'e-306': {
            id: 'e-306',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-307'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a52|60d3fa3a5a19c1169cd58c4100000000000b',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a52|60d3fa3a5a19c1169cd58c4100000000000b',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e5ac15
          },
          'e-308': {
            id: 'e-308',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-309'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a53|864e316f-ae53-343c-ea61-3beb497d5433',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a53|864e316f-ae53-343c-ea61-3beb497d5433',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e5ffa1
          },
          'e-312': {
            id: 'e-312',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-313'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|fe84836e-efad-6ad0-7e8d-eeb850f42357',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|fe84836e-efad-6ad0-7e8d-eeb850f42357',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e71e3d
          },
          'e-314': {
            id: 'e-314',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-315'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|b1a73f2f-a3e4-8215-8e69-9eb704c1982b',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|b1a73f2f-a3e4-8215-8e69-9eb704c1982b',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e8ba0a
          },
          'e-316': {
            id: 'e-316',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-317'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|a3931150-4a20-5fb4-ffbd-47d3a1eb84c6',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|a3931150-4a20-5fb4-ffbd-47d3a1eb84c6',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 600,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e6e91a4b
          },
          'e-326': {
            id: 'e-326',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-31',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-327'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|db5ebff4-f877-c7d3-5948-1d37c4294932',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|db5ebff4-f877-c7d3-5948-1d37c4294932',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199e751e199
          },
          'e-327': {
            id: 'e-327',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-32',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-326'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|db5ebff4-f877-c7d3-5948-1d37c4294932',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|db5ebff4-f877-c7d3-5948-1d37c4294932',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199e751e199
          },
          'e-328': {
            id: 'e-328',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-33',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-329'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|db5ebff4-f877-c7d3-5948-1d37c4294932',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|db5ebff4-f877-c7d3-5948-1d37c4294932',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199e751e199
          },
          'e-330': {
            id: 'e-330',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-33',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-331'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '429988e8-fcc2-bf6e-ff1a-f777152fea7a',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '429988e8-fcc2-bf6e-ff1a-f777152fea7a',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199e76793c1
          },
          'e-332': {
            id: 'e-332',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-29',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-333'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '429988e8-fcc2-bf6e-ff1a-f777152fea6f',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '429988e8-fcc2-bf6e-ff1a-f777152fea6f',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199e77c5d36
          },
          'e-342': {
            id: 'e-342',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-30',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-343'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68ec7b8aea93197c4f1a2089|8096e20c-15d5-e2f3-b6a4-702d38ed02aa',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68ec7b8aea93197c4f1a2089|8096e20c-15d5-e2f3-b6a4-702d38ed02aa',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199e77f7523
          },
          'e-344': {
            id: 'e-344',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-345'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b32562',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c8253b2d-fe33-b1dc-273c-55c070b32562',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e7960b1e
          },
          'e-346': {
            id: 'e-346',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-347'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|b9f85ebb-263a-f09b-b600-0aba8fdaaef7',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|b9f85ebb-263a-f09b-b600-0aba8fdaaef7',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e79681c4
          },
          'e-348': {
            id: 'e-348',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-349'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|b9f85ebb-263a-f09b-b600-0aba8fdaaefc',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|b9f85ebb-263a-f09b-b600-0aba8fdaaefc',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e796b2e7
          },
          'e-350': {
            id: 'e-350',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-351'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|6ea504c7-9140-680c-db46-a848414079d4',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|6ea504c7-9140-680c-db46-a848414079d4',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e797ca5d
          },
          'e-352': {
            id: 'e-352',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-353'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|c70eeb67-29d2-e520-826d-1ac91391bf9e',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|c70eeb67-29d2-e520-826d-1ac91391bf9e',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e798087b
          },
          'e-354': {
            id: 'e-354',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-355'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|2617ea26-a8dc-bb4e-d503-d46880f399f1',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|2617ea26-a8dc-bb4e-d503-d46880f399f1',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e798378c
          },
          'e-356': {
            id: 'e-356',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-357'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|2617ea26-a8dc-bb4e-d503-d46880f399f6',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|2617ea26-a8dc-bb4e-d503-d46880f399f6',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e798797f
          },
          'e-358': {
            id: 'e-358',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-359'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|43ad58d4-e2fe-0ede-04cd-995eb9a33c34',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|43ad58d4-e2fe-0ede-04cd-995eb9a33c34',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 600,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e798ad5b
          },
          'e-360': {
            id: 'e-360',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-361'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|757b0ddd-a2c5-67c5-b9a0-b774bc53d509',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|757b0ddd-a2c5-67c5-b9a0-b774bc53d509',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e798e0a4
          },
          'e-362': {
            id: 'e-362',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-363'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da15',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|3f211edd-d15f-8db0-a636-17b47cf4da15',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e79b4bc6
          },
          'e-364': {
            id: 'e-364',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-365'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|0fd5722a-d831-44e0-ff30-6e7bda029681',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|0fd5722a-d831-44e0-ff30-6e7bda029681',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 400,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e79c7aea
          },
          'e-366': {
            id: 'e-366',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-367'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|0fd5722a-d831-44e0-ff30-6e7bda029686',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|0fd5722a-d831-44e0-ff30-6e7bda029686',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e79cccf7
          },
          'e-368': {
            id: 'e-368',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-369'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|5541a0a9-6134-2fdf-1914-6a0d9d7759e9',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|5541a0a9-6134-2fdf-1914-6a0d9d7759e9',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e79d40b4
          },
          'e-370': {
            id: 'e-370',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-371'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|5541a0a9-6134-2fdf-1914-6a0d9d7759f0',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|5541a0a9-6134-2fdf-1914-6a0d9d7759f0',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e79db646
          },
          'e-372': {
            id: 'e-372',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-373'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|23e9ba4a-e2cb-76d2-4200-5c61f06f7ea4',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|23e9ba4a-e2cb-76d2-4200-5c61f06f7ea4',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199e7a1880c
          },
          'e-374': {
            id: 'e-374',
            name: '',
            animationType: 'preset',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-30',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-375'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '416b34c3-6113-432a-14a2-09f9f49016bf',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '416b34c3-6113-432a-14a2-09f9f49016bf',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199eb0452c9
          },
          'e-376': {
            id: 'e-376',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_CLICK',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-30',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-377'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: 'b75fd866-19f7-aa32-3509-e1d748dfffc9',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: 'b75fd866-19f7-aa32-3509-e1d748dfffc9',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199eb31848e
          },
          'e-378': {
            id: 'e-378',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-379'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cab9',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|28e8258a-b6e9-3c4a-e848-6b36dde4cab9',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199ec0d22f3
          },
          'e-380': {
            id: 'e-380',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-381'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|d0efbdd9-0626-186f-b3e7-209db1121f03',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|d0efbdd9-0626-186f-b3e7-209db1121f03',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 500,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199ec0d7ffd
          },
          'e-382': {
            id: 'e-382',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-383'
              }
            },
            mediaQueries: ['small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51|5baf51c5-7498-1ba8-7e47-8deb0855f852',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51|5baf51c5-7498-1ba8-7e47-8deb0855f852',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: '%',
              delay: 100,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x199ec0f9df5
          },
          'e-448': {
            id: 'e-448',
            name: '',
            animationType: 'custom',
            eventTypeId: 'PAGE_START',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-39',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-449'
              }
            },
            mediaQueries: ['small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51',
              appliesTo: 'PAGE',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51',
                appliesTo: 'PAGE',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199ec320283
          },
          'e-450': {
            id: 'e-450',
            name: '',
            animationType: 'custom',
            eventTypeId: 'PAGE_START',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-4',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-451'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '68e5cc28e8a32c72eb5c6a51',
              appliesTo: 'PAGE',
              styleBlockIds: []
            },
            targets: [
              {
                id: '68e5cc28e8a32c72eb5c6a51',
                appliesTo: 'PAGE',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x199ec3259d1
          },
          'e-452': {
            id: 'e-452',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OVER',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-24',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-453'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '98efbc6c-670a-fc9b-24b7-bd8a28b0c94d',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '98efbc6c-670a-fc9b-24b7-bd8a28b0c94d',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19a2909d6d5
          },
          'e-453': {
            id: 'e-453',
            name: '',
            animationType: 'custom',
            eventTypeId: 'MOUSE_OUT',
            action: {
              id: '',
              actionTypeId: 'GENERAL_START_ACTION',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                actionListId: 'a-25',
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: 'e-452'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '98efbc6c-670a-fc9b-24b7-bd8a28b0c94d',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '98efbc6c-670a-fc9b-24b7-bd8a28b0c94d',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null
            },
            createdOn: 0x19a2909d6d7
          },
          'e-454': {
            id: 'e-454',
            name: '',
            animationType: 'preset',
            eventTypeId: 'SCROLL_INTO_VIEW',
            action: {
              id: '',
              actionTypeId: 'SLIDE_EFFECT',
              instant: !1,
              config: {
                actionListId: 'slideInBottom',
                autoStopEventId: 'e-455'
              }
            },
            mediaQueries: ['main', 'medium', 'small', 'tiny'],
            target: {
              id: '98efbc6c-670a-fc9b-24b7-bd8a28b0c955',
              appliesTo: 'ELEMENT',
              styleBlockIds: []
            },
            targets: [
              {
                id: '98efbc6c-670a-fc9b-24b7-bd8a28b0c955',
                appliesTo: 'ELEMENT',
                styleBlockIds: []
              }
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 22,
              scrollOffsetUnit: '%',
              delay: 0,
              direction: 'BOTTOM',
              effectIn: !0
            },
            createdOn: 0x19a293b9d26
          }
        },
        actionLists: {
          a: {
            id: 'a',
            title: 'Move-Projetct-Hero',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: '68e5cc28e8a32c72eb5c6a51|3880ea18-849c-f3bf-0399-a05605c81465'
                      },
                      xValue: 0,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 36e3,
                      target: {
                        useEventTarget: !0,
                        id: '68e5cc28e8a32c72eb5c6a51|3880ea18-849c-f3bf-0399-a05605c81465'
                      },
                      xValue: -200,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-n-3',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: '68e5cc28e8a32c72eb5c6a51|3880ea18-849c-f3bf-0399-a05605c81465'
                      },
                      xValue: 0,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1994cb915be
          },
          'a-2': {
            id: 'a-2',
            title: 'Hover-Project-Hero-In',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-2-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.hero-name-project-wrap',
                        selectorGuids: ['27ea484a-9c02-f8b9-8ab8-b791737c4e1c']
                      },
                      value: 0,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-2-n-2',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        selector: '.custum-cursor',
                        selectorGuids: ['58561baa-8d7a-165e-5289-4a2a6dabd139']
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-2-n-3',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.hero-name-project-wrap',
                        selectorGuids: ['27ea484a-9c02-f8b9-8ab8-b791737c4e1c']
                      },
                      value: 1,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-2-n-4',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        selector: '.custum-cursor',
                        selectorGuids: ['58561baa-8d7a-165e-5289-4a2a6dabd139']
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1994c69cc3e
          },
          'a-3': {
            id: 'a-3',
            title: 'Hover-Project-Hero-out',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-3-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.hero-name-project-wrap',
                        selectorGuids: ['27ea484a-9c02-f8b9-8ab8-b791737c4e1c']
                      },
                      value: 0,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-3-n-2',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        selector: '.custum-cursor',
                        selectorGuids: ['58561baa-8d7a-165e-5289-4a2a6dabd139']
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1994c69cc3e
          },
          'a-4': {
            id: 'a-4',
            title: 'Hero-Ani-Move',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-4-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.name-project-wrap-animation',
                        selectorGuids: ['27ea484a-9c02-f8b9-8ab8-b791737c4e22']
                      },
                      xValue: 0,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-4-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 24e3,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.name-project-wrap-animation',
                        selectorGuids: ['27ea484a-9c02-f8b9-8ab8-b791737c4e22']
                      },
                      xValue: -70,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-4-n-3',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.name-project-wrap-animation',
                        selectorGuids: ['27ea484a-9c02-f8b9-8ab8-b791737c4e22']
                      },
                      xValue: 0,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1994c75d3b4
          },
          'a-8': {
            id: 'a-8',
            title: 'Logo-Ani-In',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-8-n',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.logo-brand-wrap',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b341a']
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0
                    }
                  },
                  {
                    id: 'a-8-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.background-logo',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b3423']
                      },
                      value: 0,
                      unit: ''
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-8-n-3',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.logo-brand-wrap',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b341a']
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0
                    }
                  },
                  {
                    id: 'a-8-n-4',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.background-logo',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b3423']
                      },
                      value: 1,
                      unit: ''
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1994cebe49c
          },
          'a-9': {
            id: 'a-9',
            title: 'Logo-Ani-Out',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-9-n',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.logo-brand-wrap',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b341a']
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0
                    }
                  },
                  {
                    id: 'a-9-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.background-logo',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b3423']
                      },
                      value: 0,
                      unit: ''
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1994cebe49c
          },
          'a-11': {
            id: 'a-11',
            title: 'Logo-Ani-Out-Moile',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-11-n',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.logo-brand-wrap',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b341a']
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0
                    }
                  },
                  {
                    id: 'a-11-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.background-logo',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b3423']
                      },
                      value: 0,
                      unit: ''
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1994cebe49c
          },
          'a-7': {
            id: 'a-7',
            title: 'Scroll-Number-Partner 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-7-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: [0.77, 0, 0.175, 1],
                      duration: 1500,
                      target: {
                        selector: '.partner-number-group-top',
                        selectorGuids: ['1d36df1b-611d-f782-43d2-c8b68db56a40']
                      },
                      yValue: -80,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-7-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 150,
                      target: {
                        selector: '.partner-number-group-top',
                        selectorGuids: ['1d36df1b-611d-f782-43d2-c8b68db56a40']
                      },
                      yValue: -88,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-7-n-3',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: [0.77, 0, 0.175, 1],
                      duration: 2e3,
                      target: {
                        selector: '.partner-number-group-top',
                        selectorGuids: ['1d36df1b-611d-f782-43d2-c8b68db56a40']
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1995075be0a
          },
          'a-5': {
            id: 'a-5',
            title: 'Title-Ani',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-5-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: '68c12cf02f42471057396fa2|ee1c6d35-86be-511a-3398-7a0d06c46c4e'
                      },
                      yValue: 100,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  },
                  {
                    id: 'a-5-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: '68c12cf02f42471057396fa2|ee1c6d35-86be-511a-3398-7a0d06c46c4e'
                      },
                      value: 0,
                      unit: ''
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-5-n-3',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 400,
                      target: {
                        useEventTarget: !0,
                        id: '68c12cf02f42471057396fa2|ee1c6d35-86be-511a-3398-7a0d06c46c4e'
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  },
                  {
                    id: 'a-5-n-4',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 400,
                      target: {
                        useEventTarget: !0,
                        id: '68c12cf02f42471057396fa2|ee1c6d35-86be-511a-3398-7a0d06c46c4e'
                      },
                      value: 1,
                      unit: ''
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1994cd53280
          },
          'a-10': {
            id: 'a-10',
            title: 'Logo-Ani-In-Mobile',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-10-n',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.logo-brand-wrap',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b341a']
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0
                    }
                  },
                  {
                    id: 'a-10-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.background-logo',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b3423']
                      },
                      value: 0,
                      unit: ''
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-10-n-3',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.logo-brand-wrap',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b341a']
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0
                    }
                  },
                  {
                    id: 'a-10-n-4',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.background-logo',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b3423']
                      },
                      value: 1,
                      unit: ''
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1994cebe49c
          },
          'a-6': {
            id: 'a-6',
            title: 'Scroll-Number-Partner',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-6-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        selector: '.partner-number-group',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b341f']
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-6-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 150,
                      target: {
                        selector: '.partner-number-group',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b341f']
                      },
                      yValue: 8,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-6-n-3',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: [0.77, 0, 0.175, 1],
                      duration: 1500,
                      target: {
                        selector: '.partner-number-group',
                        selectorGuids: ['f04b8db2-50f9-220f-d594-21a2166b341f']
                      },
                      yValue: -80,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1995075be0a
          },
          'a-12': {
            id: 'a-12',
            title: 'Service-Scroll-Animation',
            continuousParameterGroups: [
              {
                id: 'a-12-p',
                type: 'SCROLL_PROGRESS',
                parameterLabel: 'Scroll',
                continuousActionGroups: [
                  {
                    keyframe: 21,
                    actionItems: [
                      {
                        id: 'a-12-n',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._001',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45d'
                            ]
                          },
                          xValue: 1.1,
                          yValue: 1.1,
                          locked: !0
                        }
                      },
                      {
                        id: 'a-12-n-2',
                        actionTypeId: 'STYLE_SIZE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service._01',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45c'
                            ]
                          },
                          heightValue: 7.5,
                          widthUnit: 'PX',
                          heightUnit: 'rem',
                          locked: !1
                        }
                      },
                      {
                        id: 'a-12-n-3',
                        actionTypeId: 'STYLE_SIZE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service._0',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45b'
                            ]
                          },
                          heightValue: 5,
                          widthUnit: 'PX',
                          heightUnit: 'rem',
                          locked: !1
                        }
                      }
                    ]
                  },
                  {
                    keyframe: 25,
                    actionItems: [
                      {
                        id: 'a-12-n-4',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._001',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45d'
                            ]
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0
                        }
                      },
                      {
                        id: 'a-12-n-5',
                        actionTypeId: 'STYLE_FILTER',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._001',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45d'
                            ]
                          },
                          filters: [
                            {
                              type: 'blur',
                              filterId: '579e',
                              value: 0,
                              unit: 'px'
                            }
                          ]
                        }
                      },
                      {
                        id: 'a-12-n-6',
                        actionTypeId: 'STYLE_SIZE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service.gray._02',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45f',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd464'
                            ]
                          },
                          heightValue: 1,
                          widthUnit: 'PX',
                          heightUnit: 'rem',
                          locked: !1
                        }
                      },
                      {
                        id: 'a-12-n-7',
                        actionTypeId: 'STYLE_BACKGROUND_COLOR',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service.gray._02',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45f',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd464'
                            ]
                          },
                          globalSwatchId:
                            '--background-color--background-secondary',
                          rValue: 223,
                          bValue: 10,
                          gValue: 74,
                          aValue: 1
                        }
                      },
                      {
                        id: 'a-12-n-8',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._002',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd462'
                            ]
                          },
                          xValue: 1.1,
                          yValue: 1.1,
                          locked: !0
                        }
                      },
                      {
                        id: 'a-12-n-9',
                        actionTypeId: 'STYLE_SIZE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service._0',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45b'
                            ]
                          },
                          heightValue: 7.5,
                          widthUnit: 'PX',
                          heightUnit: 'rem',
                          locked: !1
                        }
                      }
                    ]
                  },
                  {
                    keyframe: 52,
                    actionItems: [
                      {
                        id: 'a-12-n-10',
                        actionTypeId: 'STYLE_FILTER',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._001',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45d'
                            ]
                          },
                          filters: [
                            {
                              type: 'blur',
                              filterId: 'c1c5',
                              value: 4,
                              unit: 'px'
                            }
                          ]
                        }
                      },
                      {
                        id: 'a-12-n-11',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._001',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45d'
                            ]
                          },
                          xValue: 0.8,
                          yValue: 0.8,
                          locked: !0
                        }
                      },
                      {
                        id: 'a-12-n-12',
                        actionTypeId: 'STYLE_FILTER',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._001',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45d'
                            ]
                          },
                          filters: [
                            {
                              type: 'blur',
                              filterId: '1439',
                              value: 5,
                              unit: 'px'
                            }
                          ]
                        }
                      },
                      {
                        id: 'a-12-n-13',
                        actionTypeId: 'STYLE_SIZE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service.gray._02',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45f',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd464'
                            ]
                          },
                          heightValue: 7.5,
                          widthUnit: 'PX',
                          heightUnit: 'rem',
                          locked: !1
                        }
                      },
                      {
                        id: 'a-12-n-14',
                        actionTypeId: 'STYLE_BACKGROUND_COLOR',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service.gray._02',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45f',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd464'
                            ]
                          },
                          globalSwatchId:
                            '--background-color--background-secondary',
                          rValue: 223,
                          bValue: 10,
                          gValue: 74,
                          aValue: 1
                        }
                      },
                      {
                        id: 'a-12-n-15',
                        actionTypeId: 'STYLE_SIZE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service._01',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45c'
                            ]
                          },
                          heightValue: 1,
                          widthUnit: 'PX',
                          heightUnit: 'rem',
                          locked: !1
                        }
                      },
                      {
                        id: 'a-12-n-16',
                        actionTypeId: 'STYLE_BACKGROUND_COLOR',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service._01',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45c'
                            ]
                          },
                          globalSwatchId: '--base-color-neutral--neutral-500',
                          rValue: 128,
                          bValue: 128,
                          gValue: 128,
                          aValue: 1
                        }
                      },
                      {
                        id: 'a-12-n-17',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._002',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd462'
                            ]
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0
                        }
                      }
                    ]
                  },
                  {
                    keyframe: 59,
                    actionItems: [
                      {
                        id: 'a-12-n-18',
                        actionTypeId: 'STYLE_FILTER',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._002',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd462'
                            ]
                          },
                          filters: [
                            {
                              type: 'blur',
                              filterId: '7476',
                              value: 0,
                              unit: 'px'
                            }
                          ]
                        }
                      },
                      {
                        id: 'a-12-n-19',
                        actionTypeId: 'STYLE_BACKGROUND_COLOR',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service._05',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd460'
                            ]
                          },
                          globalSwatchId: '--base-color-neutral--neutral-500',
                          rValue: 128,
                          bValue: 128,
                          gValue: 128,
                          aValue: 1
                        }
                      },
                      {
                        id: 'a-12-n-20',
                        actionTypeId: 'STYLE_SIZE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service.gray._06',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45f',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd463'
                            ]
                          },
                          heightValue: 1,
                          widthUnit: 'PX',
                          heightUnit: 'rem',
                          locked: !1
                        }
                      },
                      {
                        id: 'a-12-n-21',
                        actionTypeId: 'STYLE_BACKGROUND_COLOR',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service.gray._06',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45f',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd463'
                            ]
                          },
                          globalSwatchId:
                            '--background-color--background-secondary',
                          rValue: 223,
                          bValue: 10,
                          gValue: 74,
                          aValue: 1
                        }
                      },
                      {
                        id: 'a-12-n-22',
                        actionTypeId: 'STYLE_SIZE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service._05',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd460'
                            ]
                          },
                          heightValue: 7.5,
                          widthUnit: 'PX',
                          heightUnit: 'rem',
                          locked: !1
                        }
                      },
                      {
                        id: 'a-12-n-23',
                        actionTypeId: 'STYLE_BACKGROUND_COLOR',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service._05',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd460'
                            ]
                          },
                          globalSwatchId: '--base-color-neutral--neutral-500',
                          rValue: 255,
                          bValue: 255,
                          gValue: 255,
                          aValue: 0.6
                        }
                      },
                      {
                        id: 'a-12-n-24',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._002',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd462'
                            ]
                          },
                          xValue: 0.9,
                          yValue: 0.9,
                          locked: !0
                        }
                      },
                      {
                        id: 'a-12-n-25',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._003',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45e'
                            ]
                          },
                          xValue: 1.1,
                          yValue: 1.1,
                          locked: !0
                        }
                      }
                    ]
                  },
                  {
                    keyframe: 71,
                    actionItems: [
                      {
                        id: 'a-12-n-26',
                        actionTypeId: 'STYLE_FILTER',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._002',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd462'
                            ]
                          },
                          filters: [
                            {
                              type: 'blur',
                              filterId: '720c',
                              value: 4,
                              unit: 'px'
                            }
                          ]
                        }
                      },
                      {
                        id: 'a-12-n-27',
                        actionTypeId: 'STYLE_SIZE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service.gray._06',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45f',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd463'
                            ]
                          },
                          heightValue: 7.5,
                          widthUnit: 'PX',
                          heightUnit: 'rem',
                          locked: !1
                        }
                      },
                      {
                        id: 'a-12-n-28',
                        actionTypeId: 'STYLE_BACKGROUND_COLOR',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service.gray._06',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45f',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd463'
                            ]
                          },
                          globalSwatchId:
                            '--background-color--background-secondary',
                          rValue: 223,
                          bValue: 10,
                          gValue: 74,
                          aValue: 1
                        }
                      },
                      {
                        id: 'a-12-n-29',
                        actionTypeId: 'STYLE_SIZE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.light-service._05',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd457',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd460'
                            ]
                          },
                          heightValue: 1,
                          widthUnit: 'PX',
                          heightUnit: 'rem',
                          locked: !1
                        }
                      },
                      {
                        id: 'a-12-n-30',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-service-layout._003',
                            selectorGuids: [
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd44e',
                              '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd45e'
                            ]
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            createdOn: 0x1995749e791
          },
          'a-16': {
            id: 'a-16',
            title: 'Image-Project-Hover-In',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-16-n',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        selector: '.size-image-project',
                        selectorGuids: ['8f5e89ac-8a09-4861-9ef8-7c79e4508bd9']
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0
                    }
                  },
                  {
                    id: 'a-16-n-2',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        selector: '.custum-cursor',
                        selectorGuids: ['58561baa-8d7a-165e-5289-4a2a6dabd139']
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-16-n-3',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: 'outQuad',
                      duration: 500,
                      target: {
                        selector: '.size-image-project',
                        selectorGuids: ['8f5e89ac-8a09-4861-9ef8-7c79e4508bd9']
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0
                    }
                  },
                  {
                    id: 'a-16-n-4',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        selector: '.custum-cursor',
                        selectorGuids: ['58561baa-8d7a-165e-5289-4a2a6dabd139']
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19975967a84
          },
          'a-17': {
            id: 'a-17',
            title: 'Image-Project-Hover-Out',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-17-n-2',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        selector: '.custum-cursor',
                        selectorGuids: ['58561baa-8d7a-165e-5289-4a2a6dabd139']
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0
                    }
                  },
                  {
                    id: 'a-17-n-3',
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        selector: '.size-image-project',
                        selectorGuids: ['8f5e89ac-8a09-4861-9ef8-7c79e4508bd9']
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19975967a84
          },
          'a-15': {
            id: 'a-15',
            title: 'Project',
            continuousParameterGroups: [
              {
                id: 'a-15-p',
                type: 'SCROLL_PROGRESS',
                parameterLabel: 'Scroll',
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: 'a-15-n',
                        actionTypeId: 'STYLE_OPACITY',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a36'
                          },
                          value: 0,
                          unit: ''
                        }
                      }
                    ]
                  },
                  {
                    keyframe: 35,
                    actionItems: [
                      {
                        id: 'a-15-n-2',
                        actionTypeId: 'STYLE_OPACITY',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a36'
                          },
                          value: 1,
                          unit: ''
                        }
                      }
                    ]
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: 'a-15-n-3',
                        actionTypeId: 'STYLE_OPACITY',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: '68e5cc28e8a32c72eb5c6a51|401f5fcf-53c7-c165-ea66-e8c3ca933a36'
                          },
                          value: 1,
                          unit: ''
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            createdOn: 0x19970ab8c4b
          },
          'a-21': {
            id: 'a-21',
            title: 'FAQ-out',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-21-n',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.stroke.choose',
                        selectorGuids: [
                          '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd458',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca6'
                        ]
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-21-n-2',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.content-faq',
                        selectorGuids: ['a8c7f6e2-10e5-044e-a520-1d1b13c3cca3']
                      },
                      heightValue: 0,
                      widthUnit: 'px',
                      heightUnit: 'px',
                      locked: !1
                    }
                  },
                  {
                    id: 'a-21-n-3',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.content-faq',
                        selectorGuids: ['a8c7f6e2-10e5-044e-a520-1d1b13c3cca3']
                      },
                      value: 0,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-21-n-4',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.icon-faq.choose',
                        selectorGuids: [
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca1',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca5'
                        ]
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-21-n-5',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.icon-faq.choose',
                        selectorGuids: [
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca1',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca5'
                        ]
                      },
                      zValue: 180,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg'
                    }
                  },
                  {
                    id: 'a-21-n-6',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.content-faq',
                        selectorGuids: ['a8c7f6e2-10e5-044e-a520-1d1b13c3cca3']
                      },
                      yValue: -60,
                      xUnit: 'PX',
                      yUnit: 'px',
                      zUnit: 'PX'
                    }
                  },
                  {
                    id: 'a-21-n-7',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.icon-faq.not-choose',
                        selectorGuids: [
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca1',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca7'
                        ]
                      },
                      value: 'flex'
                    }
                  },
                  {
                    id: 'a-21-n-8',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        selector: '.icon-faq.not-choose',
                        selectorGuids: [
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca1',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca7'
                        ]
                      },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19951865842
          },
          'a-20': {
            id: 'a-20',
            title: 'FAQ-In',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-20-n',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.stroke.choose',
                        selectorGuids: [
                          '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd458',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca6'
                        ]
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-20-n-2',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.content-faq',
                        selectorGuids: ['a8c7f6e2-10e5-044e-a520-1d1b13c3cca3']
                      },
                      heightValue: 0,
                      widthUnit: 'px',
                      heightUnit: 'px',
                      locked: !1
                    }
                  },
                  {
                    id: 'a-20-n-3',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.content-faq',
                        selectorGuids: ['a8c7f6e2-10e5-044e-a520-1d1b13c3cca3']
                      },
                      value: 0,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-20-n-4',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.icon-faq.choose',
                        selectorGuids: [
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca1',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca5'
                        ]
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-20-n-5',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.icon-faq.choose',
                        selectorGuids: [
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca1',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca5'
                        ]
                      },
                      zValue: 180,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg'
                    }
                  },
                  {
                    id: 'a-20-n-6',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.content-faq',
                        selectorGuids: ['a8c7f6e2-10e5-044e-a520-1d1b13c3cca3']
                      },
                      yValue: -60,
                      xUnit: 'PX',
                      yUnit: 'px',
                      zUnit: 'PX'
                    }
                  },
                  {
                    id: 'a-20-n-7',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.icon-faq.not-choose',
                        selectorGuids: [
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca1',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca7'
                        ]
                      },
                      value: 'flex'
                    }
                  },
                  {
                    id: 'a-20-n-8',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.icon-faq.not-choose',
                        selectorGuids: [
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca1',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca7'
                        ]
                      },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-20-n-9',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.stroke.choose',
                        selectorGuids: [
                          '6ccedb1c-5ee3-ffa0-c535-be6a6ccdd458',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca6'
                        ]
                      },
                      value: 'block'
                    }
                  },
                  {
                    id: 'a-20-n-10',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.content-faq',
                        selectorGuids: ['a8c7f6e2-10e5-044e-a520-1d1b13c3cca3']
                      },
                      widthUnit: 'PX',
                      heightUnit: 'AUTO',
                      locked: !1
                    }
                  },
                  {
                    id: 'a-20-n-11',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.icon-faq.choose',
                        selectorGuids: [
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca1',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca5'
                        ]
                      },
                      value: 'flex'
                    }
                  },
                  {
                    id: 'a-20-n-12',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.icon-faq.choose',
                        selectorGuids: [
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca1',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca5'
                        ]
                      },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg'
                    }
                  },
                  {
                    id: 'a-20-n-13',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.icon-faq.not-choose',
                        selectorGuids: [
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca1',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca7'
                        ]
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-20-n-14',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.content-faq',
                        selectorGuids: ['a8c7f6e2-10e5-044e-a520-1d1b13c3cca3']
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'px',
                      zUnit: 'PX'
                    }
                  },
                  {
                    id: 'a-20-n-15',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.icon-faq.not-choose',
                        selectorGuids: [
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca1',
                          'a8c7f6e2-10e5-044e-a520-1d1b13c3cca7'
                        ]
                      },
                      zValue: 180,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg'
                    }
                  },
                  {
                    id: 'a-20-n-16',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 250,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.content-faq',
                        selectorGuids: ['a8c7f6e2-10e5-044e-a520-1d1b13c3cca3']
                      },
                      value: 1,
                      unit: ''
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19951865842
          },
          'a-22': {
            id: 'a-22',
            title: 'Awwards-Ani',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-22-n',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.stroke',
                        selectorGuids: ['6ccedb1c-5ee3-ffa0-c535-be6a6ccdd458']
                      },
                      value: 'block'
                    }
                  },
                  {
                    id: 'a-22-n-3',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.content-aw',
                        selectorGuids: ['c0564bc8-65f9-c0e8-95d8-2983478463bb']
                      },
                      globalSwatchId: '--text-color--text-secondary',
                      rValue: 128,
                      bValue: 128,
                      gValue: 128,
                      aValue: 1
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-22-n-2',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.stroke',
                        selectorGuids: ['6ccedb1c-5ee3-ffa0-c535-be6a6ccdd458']
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-22-n-4',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.content-aw',
                        selectorGuids: ['c0564bc8-65f9-c0e8-95d8-2983478463bb']
                      },
                      globalSwatchId: '--text-color--text-primary',
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1996fb367ca
          },
          'a-23': {
            id: 'a-23',
            title: 'Awwards-Ani-Out',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-23-n',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.stroke',
                        selectorGuids: ['6ccedb1c-5ee3-ffa0-c535-be6a6ccdd458']
                      },
                      value: 'block'
                    }
                  },
                  {
                    id: 'a-23-n-2',
                    actionTypeId: 'STYLE_BACKGROUND_COLOR',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: '68e5cc28e8a32c72eb5c6a51|6c4fe672-4219-1e29-e21b-63563ae2acb3'
                      },
                      globalSwatchId: '',
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1996fb367ca
          },
          'a-24': {
            id: 'a-24',
            title: 'Button-Ani-In',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-24-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.text-content-button',
                        selectorGuids: ['78c97271-2cff-7a8b-c6db-2267fbc107bc']
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-24-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.text-content-button',
                        selectorGuids: ['78c97271-2cff-7a8b-c6db-2267fbc107bc']
                      },
                      yValue: -100,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1995b198720
          },
          'a-25': {
            id: 'a-25',
            title: 'Button-Ani-Out',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-25-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.text-content-button',
                        selectorGuids: ['78c97271-2cff-7a8b-c6db-2267fbc107bc']
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1995b198720
          },
          'a-26': {
            id: 'a-26',
            title: 'Button-Ani-In 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-26-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.text-content-button-2',
                        selectorGuids: ['3e841fa9-824f-91f5-b698-c5c627229497']
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-26-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.text-content-button-2',
                        selectorGuids: ['3e841fa9-824f-91f5-b698-c5c627229497']
                      },
                      yValue: -100,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1995b198720
          },
          'a-27': {
            id: 'a-27',
            title: 'Button-Ani-Out 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-27-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.text-content-button-2',
                        selectorGuids: ['3e841fa9-824f-91f5-b698-c5c627229497']
                      },
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: '%',
                      zUnit: 'PX'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1995b198720
          },
          'a-28': {
            id: 'a-28',
            title: 'logo-award',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-28-n',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: { id: 'a4a586a9-9669-a837-9643-4c10e4df4ebf' },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-28-n-2',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 1e4,
                      target: { id: 'a4a586a9-9669-a837-9643-4c10e4df4ebf' },
                      zValue: 360,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-28-n-3',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: { id: 'a4a586a9-9669-a837-9643-4c10e4df4ebf' },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x199c844dce3
          },
          'a-18': {
            id: 'a-18',
            title: 'Blog-Scroll-Animation',
            continuousParameterGroups: [
              {
                id: 'a-18-p',
                type: 'SCROLL_PROGRESS',
                parameterLabel: 'Scroll',
                continuousActionGroups: [
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: 'a-18-n',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-blog._001',
                            selectorGuids: [
                              '3b5a2265-6650-e184-0559-b8bf5a759c9b',
                              '3b5a2265-6650-e184-0559-b8bf5a759c9c'
                            ]
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0
                        }
                      },
                      {
                        id: 'a-18-n-2',
                        actionTypeId: 'STYLE_FILTER',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-blog._001',
                            selectorGuids: [
                              '3b5a2265-6650-e184-0559-b8bf5a759c9b',
                              '3b5a2265-6650-e184-0559-b8bf5a759c9c'
                            ]
                          },
                          filters: [
                            {
                              type: 'blur',
                              filterId: '06ee',
                              value: 0,
                              unit: 'px'
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    keyframe: 52,
                    actionItems: [
                      {
                        id: 'a-18-n-3',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-blog._001',
                            selectorGuids: [
                              '3b5a2265-6650-e184-0559-b8bf5a759c9b',
                              '3b5a2265-6650-e184-0559-b8bf5a759c9c'
                            ]
                          },
                          xValue: 0.8,
                          yValue: 0.8,
                          locked: !0
                        }
                      },
                      {
                        id: 'a-18-n-4',
                        actionTypeId: 'STYLE_FILTER',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-blog._001',
                            selectorGuids: [
                              '3b5a2265-6650-e184-0559-b8bf5a759c9b',
                              '3b5a2265-6650-e184-0559-b8bf5a759c9c'
                            ]
                          },
                          filters: [
                            {
                              type: 'blur',
                              filterId: '9d15',
                              value: 3,
                              unit: 'px'
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    keyframe: 54,
                    actionItems: [
                      {
                        id: 'a-18-n-5',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0
                        }
                      },
                      {
                        id: 'a-18-n-6',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-blog._001',
                            selectorGuids: [
                              '3b5a2265-6650-e184-0559-b8bf5a759c9b',
                              '3b5a2265-6650-e184-0559-b8bf5a759c9c'
                            ]
                          },
                          xValue: 0.7,
                          yValue: 0.7,
                          locked: !0
                        }
                      },
                      {
                        id: 'a-18-n-7',
                        actionTypeId: 'STYLE_FILTER',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-blog._001',
                            selectorGuids: [
                              '3b5a2265-6650-e184-0559-b8bf5a759c9b',
                              '3b5a2265-6650-e184-0559-b8bf5a759c9c'
                            ]
                          },
                          filters: [
                            {
                              type: 'blur',
                              filterId: 'b50f',
                              value: 4,
                              unit: 'px'
                            }
                          ]
                        }
                      },
                      {
                        id: 'a-18-n-8',
                        actionTypeId: 'STYLE_FILTER',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {},
                          filters: [
                            {
                              type: 'blur',
                              filterId: 'c520',
                              value: 0,
                              unit: 'px'
                            }
                          ]
                        }
                      }
                    ]
                  },
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: 'a-18-n-9',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0
                        }
                      },
                      {
                        id: 'a-18-n-10',
                        actionTypeId: 'STYLE_FILTER',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {},
                          filters: [
                            {
                              type: 'blur',
                              filterId: '63a7',
                              value: 0,
                              unit: 'px'
                            }
                          ]
                        }
                      },
                      {
                        id: 'a-18-n-11',
                        actionTypeId: 'TRANSFORM_SCALE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            useEventTarget: 'CHILDREN',
                            selector: '.single-blog._001',
                            selectorGuids: [
                              '3b5a2265-6650-e184-0559-b8bf5a759c9b',
                              '3b5a2265-6650-e184-0559-b8bf5a759c9c'
                            ]
                          },
                          xValue: 0.7,
                          yValue: 0.7,
                          locked: !0
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            createdOn: 0x1995749e791
          },
          'a-32': {
            id: 'a-32',
            title: 'Nav-Hover-Out',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-32-n',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.nav-text',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8aa']
                      },
                      globalSwatchId: '--text-color--text-secondary',
                      rValue: 128,
                      bValue: 128,
                      gValue: 128,
                      aValue: 1
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1998078b0f1
          },
          'a-31': {
            id: 'a-31',
            title: 'Nav-Hover-In',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-31-n',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.nav-text',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8aa']
                      },
                      globalSwatchId: '--base-color-neutral--neutral-500',
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0.6
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-31-n-2',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.nav-text',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8aa']
                      },
                      globalSwatchId: '--text-color--text-primary',
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1998078b0f1
          },
          'a-33': {
            id: 'a-33',
            title: 'tab-section',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-33-n',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'PARENT',
                        selector: '.nav-service',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a4']
                      },
                      heightValue: 0,
                      widthUnit: 'PX',
                      heightUnit: '%',
                      locked: !1
                    }
                  },
                  {
                    id: 'a-33-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        selector: '.background-nav',
                        selectorGuids: ['696c8e31-cca8-7d93-d10e-ea3a77bb35bc']
                      },
                      value: 0,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-33-n-3',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.background-nav',
                        selectorGuids: ['696c8e31-cca8-7d93-d10e-ea3a77bb35bc']
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-33-n-4',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        selector: '.background-nav',
                        selectorGuids: ['696c8e31-cca8-7d93-d10e-ea3a77bb35bc']
                      },
                      heightValue: 0,
                      widthUnit: 'PX',
                      heightUnit: '%',
                      locked: !1
                    }
                  },
                  {
                    id: 'a-33-n-5',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'PARENT',
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      value: 0,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-33-n-7',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'PARENT',
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-33-n-6',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'PARENT',
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      value: 'none'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19980af6474
          },
          'a-34': {
            id: 'a-34',
            title: 'Mouse Animation',
            continuousParameterGroups: [
              {
                id: 'a-34-p',
                type: 'MOUSE_X',
                parameterLabel: 'Mouse X',
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: 'a-34-n',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            id: '68e5cc28e8a32c72eb5c6a51|edd3c6a0-fc81-115a-5588-379b3e78cfd7'
                          },
                          xValue: -50,
                          xUnit: 'vw',
                          yUnit: 'PX',
                          zUnit: 'PX'
                        }
                      }
                    ]
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: 'a-34-n-2',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            id: '68e5cc28e8a32c72eb5c6a51|edd3c6a0-fc81-115a-5588-379b3e78cfd7'
                          },
                          xValue: 50,
                          xUnit: 'vw',
                          yUnit: 'PX',
                          zUnit: 'PX'
                        }
                      }
                    ]
                  }
                ]
              },
              {
                id: 'a-34-p-2',
                type: 'MOUSE_Y',
                parameterLabel: 'Mouse Y',
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: 'a-34-n-3',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            id: '68e5cc28e8a32c72eb5c6a51|edd3c6a0-fc81-115a-5588-379b3e78cfd7'
                          },
                          yValue: -50,
                          xUnit: 'PX',
                          yUnit: 'vh',
                          zUnit: 'PX'
                        }
                      }
                    ]
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: 'a-34-n-4',
                        actionTypeId: 'TRANSFORM_MOVE',
                        config: {
                          delay: 0,
                          easing: '',
                          duration: 500,
                          target: {
                            id: '68e5cc28e8a32c72eb5c6a51|edd3c6a0-fc81-115a-5588-379b3e78cfd7'
                          },
                          yValue: 50,
                          xUnit: 'PX',
                          yUnit: 'vh',
                          zUnit: 'PX'
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            createdOn: 0x199c8630eea
          },
          'a-37': {
            id: 'a-37',
            title: 'Awwards-Ani-Out 2',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-37-n',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.stroke',
                        selectorGuids: ['6ccedb1c-5ee3-ffa0-c535-be6a6ccdd458']
                      },
                      value: 'block'
                    }
                  },
                  {
                    id: 'a-37-n-2',
                    actionTypeId: 'STYLE_BACKGROUND_COLOR',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: '68c12cf02f42471057396fa2|1bdfe66d-8032-0211-dcda-3b89cf9b0ae9'
                      },
                      globalSwatchId: '',
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0
                    }
                  },
                  {
                    id: 'a-37-n-3',
                    actionTypeId: 'STYLE_TEXT_COLOR',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.content-aw',
                        selectorGuids: ['c0564bc8-65f9-c0e8-95d8-2983478463bb']
                      },
                      globalSwatchId: '--text-color--text-secondary',
                      rValue: 128,
                      bValue: 128,
                      gValue: 128,
                      aValue: 1
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1996fb367ca
          },
          'a-38': {
            id: 'a-38',
            title: 'Text-Nav-Contact-Ani',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-38-n',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: { id: 'b20a7e23-f4f9-efcd-82b7-5687bce5a2c2' },
                      xValue: 0,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-38-n-2',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 12e3,
                      target: { id: 'b20a7e23-f4f9-efcd-82b7-5687bce5a2c2' },
                      xValue: -100,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-38-n-3',
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: { id: 'b20a7e23-f4f9-efcd-82b7-5687bce5a2c2' },
                      xValue: 0,
                      xUnit: '%',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x199dba3c240
          },
          'a-29': {
            id: 'a-29',
            title: 'Tab-Button-Menu-In',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-29-n-17',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 200,
                      target: {
                        selector: '.background-nav',
                        selectorGuids: ['696c8e31-cca8-7d93-d10e-ea3a77bb35bc']
                      },
                      value: 0,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-29-n-24',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-29-n-23',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-29-n-22',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.background-nav',
                        selectorGuids: ['696c8e31-cca8-7d93-d10e-ea3a77bb35bc']
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-29-n-21',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 700,
                      target: { id: '429988e8-fcc2-bf6e-ff1a-f777152fea70' },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg'
                    }
                  },
                  {
                    id: 'a-29-n-20',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 700,
                      target: {
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      value: 0,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-29-n-19',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 700,
                      target: {
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      heightValue: 0,
                      widthUnit: 'PX',
                      heightUnit: '%',
                      locked: !1
                    }
                  },
                  {
                    id: 'a-29-n-18',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        selector: '.background-nav',
                        selectorGuids: ['696c8e31-cca8-7d93-d10e-ea3a77bb35bc']
                      },
                      heightValue: 0,
                      widthUnit: 'PX',
                      heightUnit: '%',
                      locked: !1
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-29-n-8',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 200,
                      target: {
                        selector: '.background-nav',
                        selectorGuids: ['696c8e31-cca8-7d93-d10e-ea3a77bb35bc']
                      },
                      value: 1,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-29-n-9',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        selector: '.background-nav',
                        selectorGuids: ['696c8e31-cca8-7d93-d10e-ea3a77bb35bc']
                      },
                      heightValue: 100,
                      widthUnit: 'PX',
                      heightUnit: '%',
                      locked: !1
                    }
                  },
                  {
                    id: 'a-29-n-10',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 700,
                      target: {
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      heightValue: 100,
                      widthUnit: 'PX',
                      heightUnit: '%',
                      locked: !1
                    }
                  },
                  {
                    id: 'a-29-n-11',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 700,
                      target: {
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      value: 1,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-29-n-12',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 700,
                      target: { id: '429988e8-fcc2-bf6e-ff1a-f777152fea70' },
                      zValue: 360,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg'
                    }
                  },
                  {
                    id: 'a-29-n-13',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.background-nav',
                        selectorGuids: ['696c8e31-cca8-7d93-d10e-ea3a77bb35bc']
                      },
                      value: 'block'
                    }
                  },
                  {
                    id: 'a-29-n-14',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      value: 'block'
                    }
                  },
                  {
                    id: 'a-29-n-16',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      value: 'block'
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1998080e81d
          },
          'a-30': {
            id: 'a-30',
            title: 'Tab-Button-Menu-Out',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-30-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      value: 0,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-30-n-2',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-30-n-8',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-30-n-4',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        selector: '.background-nav',
                        selectorGuids: ['696c8e31-cca8-7d93-d10e-ea3a77bb35bc']
                      },
                      heightValue: 0,
                      widthUnit: 'PX',
                      heightUnit: '%',
                      locked: !1
                    }
                  },
                  {
                    id: 'a-30-n-5',
                    actionTypeId: 'GENERAL_DISPLAY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 0,
                      target: {
                        selector: '.background-nav',
                        selectorGuids: ['696c8e31-cca8-7d93-d10e-ea3a77bb35bc']
                      },
                      value: 'none'
                    }
                  },
                  {
                    id: 'a-30-n-6',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        selector: '.background-nav',
                        selectorGuids: ['696c8e31-cca8-7d93-d10e-ea3a77bb35bc']
                      },
                      value: 0,
                      unit: ''
                    }
                  },
                  {
                    id: 'a-30-n-7',
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 400,
                      target: { id: '429988e8-fcc2-bf6e-ff1a-f777152fea70' },
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'deg'
                    }
                  },
                  {
                    id: 'a-30-n-3',
                    actionTypeId: 'STYLE_SIZE',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        selector: '.nav-menu',
                        selectorGuids: ['5311c7c2-020a-3725-f160-18205e18d8a3']
                      },
                      heightValue: 0,
                      widthUnit: 'PX',
                      heightUnit: '%',
                      locked: !1
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1998080e81d
          },
          'a-39': {
            id: 'a-39',
            title: 'hero-mobile',
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: 'a-39-n',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 500,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.hero-name-project-wrap',
                        selectorGuids: ['27ea484a-9c02-f8b9-8ab8-b791737c4e1c']
                      },
                      value: 0,
                      unit: ''
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    id: 'a-39-n-2',
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: '',
                      duration: 300,
                      target: {
                        useEventTarget: 'CHILDREN',
                        selector: '.hero-name-project-wrap',
                        selectorGuids: ['27ea484a-9c02-f8b9-8ab8-b791737c4e1c']
                      },
                      value: 1,
                      unit: ''
                    }
                  }
                ]
              }
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x199ec1a64c3
          },
          slideInRight: {
            id: 'slideInRight',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      value: 0
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      xValue: 100,
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      value: 1
                    }
                  },
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              }
            ]
          },
          slideInLeft: {
            id: 'slideInLeft',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      value: 0
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      xValue: -100,
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      value: 1
                    }
                  },
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              }
            ]
          },
          growIn: {
            id: 'growIn',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      value: 0
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      xValue: 0.7500000000000001,
                      yValue: 0.7500000000000001
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_SCALE',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      xValue: 1,
                      yValue: 1
                    }
                  },
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      value: 1
                    }
                  }
                ]
              }
            ]
          },
          slideInBottom: {
            id: 'slideInBottom',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      value: 0
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      xValue: 0,
                      yValue: 100,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_MOVE',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: 'PX',
                      yUnit: 'PX',
                      zUnit: 'PX'
                    }
                  },
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      value: 1
                    }
                  }
                ]
              }
            ]
          },
          flipInBottom: {
            id: 'flipInBottom',
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      value: 0
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      xValue: -90,
                      yValue: 0,
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'DEG'
                    }
                  }
                ]
              },
              {
                actionItems: [
                  {
                    actionTypeId: 'TRANSFORM_ROTATE',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      xValue: 0,
                      yValue: 0,
                      zValue: 0,
                      xUnit: 'DEG',
                      yUnit: 'DEG',
                      zUnit: 'DEG'
                    }
                  },
                  {
                    actionTypeId: 'STYLE_OPACITY',
                    config: {
                      delay: 0,
                      easing: 'outQuart',
                      duration: 1e3,
                      target: {
                        id: 'N/A',
                        appliesTo: 'TRIGGER_ELEMENT',
                        useEventTarget: !0
                      },
                      value: 1
                    }
                  }
                ]
              }
            ]
          }
        },
        site: {
          mediaQueries: [
            { key: 'main', min: 992, max: 1e4 },
            { key: 'medium', min: 768, max: 991 },
            { key: 'small', min: 480, max: 767 },
            { key: 'tiny', min: 0, max: 479 }
          ]
        }
      })
    }
  }
])
