'use strict'

var assert = require('assert')

var chop = require("./chop")
describe('chop', function() {
  it('chops a single character', function() {
    assert.equal(chop("Howdy!"), 'Howdy')
    assert.equal(chop("Howdy!\n"), 'Howdy!')
    assert.equal(chop("Howdy!\n\n"), 'Howdy!\n')
    assert.equal(chop("Howdy!\r\n"), 'Howdy!\r')
  })
  it('is aliased to chop.chop', function() {
   assert.strictEqual(chop.chop, chop) 
  })
})
describe('chomp', function() {
  it('chomps off \r and \n characters', function() {
    assert.equal(chop.chomp("Howdy!\n\n"), 'Howdy!')
	  assert.equal(chop.chomp("Howdy!\n\n"), 'Howdy!')
    assert.equal(chop.chomp("Howdy!\r\n"), 'Howdy!')
  })
})
