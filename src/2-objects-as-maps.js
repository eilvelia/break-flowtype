// @flow

const fn = () => {}
type Fn = typeof fn

const obj: { [key: string]: Fn } = {
  a: fn,
  b: fn
}

obj.c() // TypeError: obj.c is not a function
