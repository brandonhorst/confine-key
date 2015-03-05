/* eslint-env mocha */
var Confine = require('confine')
var expect = require('chai').expect
var key = require('..')

describe('confine-key', function () {
  var s = new Confine()
  s.types.key = key

  it('validate', function () {
    expect(s.validate({key: 2, string: '2'}, {type: 'key'})).to.be.true
    expect(s.validate({key: 2, string: '2', meta: true}, {type: 'key'})).to.be.true
    expect(s.validate({key: 0, string: '2'}, {type: 'key'})).to.be.false
    expect(s.validate({key: 2, string: '2', win: true}, {type: 'key'})).to.be.false
  })
})
