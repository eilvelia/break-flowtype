// @flow

const fn = () => {}
type Fn = typeof fn

type O = $Shape<{ a: 1, b: Fn }>

const o: O = { a: 1 }

;(o.b: Fn) // No flow error.

o.b() // TypeError: o.b is not a function
