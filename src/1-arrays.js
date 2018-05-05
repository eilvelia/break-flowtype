// @flow

const fn = () => {}
type Fn = typeof fn

const arr: Fn[] = [fn, fn]

arr[5]() // TypeError: arr[5] is not a function
