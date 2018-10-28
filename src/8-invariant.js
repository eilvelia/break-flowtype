// @flow

type Fn = () => void

function invariant () {}

const fn: Fn | null = null

invariant(typeof fn === 'function')

fn() // TypeError: fn is not a function
