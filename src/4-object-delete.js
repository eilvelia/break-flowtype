// @flow

const fn = () => {}
type Fn = typeof fn

const obj: { a: Fn } = { a: fn }

delete obj.a

obj.a() // TypeError: obj.a is not a function
