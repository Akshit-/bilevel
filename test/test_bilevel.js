/*
 * bilevel
 * https://github.com/Akshit-/bilevel
 *
 * Copyright (c) 2014 akshit
 * Licensed under the MIT license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var bilevel = require('../');

describe('bilevel module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(bilevel.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      bilevel.hello('biojs').should.equal("hello biojs");
    });
  });
});
