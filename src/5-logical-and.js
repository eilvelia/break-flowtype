// @flow

function fn<A, B> (a: A, b: B): A {
  return a && b
}

const a = fn(() => 2, 'a') // () => number

a() // TypeError: a is not a function




// ---

function fn2<A, B> (a: A, b: B) {
  ;(a && b: A) // it's fine.
}
