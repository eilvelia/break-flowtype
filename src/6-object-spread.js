// @flow

const fn = () => {}
type Fn = typeof fn

const before: {| fn?: Fn |} = { fn: undefined }

const after = { ...before } // {| fn: Fn |}

after.fn() // TypeError: after.fn is not a function
