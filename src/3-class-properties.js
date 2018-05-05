// @flow

const fn = () => {}
type Fn = typeof fn

class Cl {
  a: Fn

  method () {
    this.a() // TypeError: this.a is not a function
  }
}

const e = new Cl()

e.method()
