"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var m = require("../lib/main.js");
var main = m.main;
var printByNumbers = m.printByNumbers;
var printLastPart = m.printLastPart;


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("测试printByNumbers(3-99)", function(){

        var inputs = 99;
        var result = printByNumbers(inputs);
        var expect_string = '99 bottles of beer on the wall, 99 bottles of beer.\n' +
                              'Take one down and pass it around, 98 bottles of beer on the wall.\n';
        
        expect(expect_string).to.equal(result);
    });
    
    it("测试printByNumbers(2)", function(){

        var inputs = 2;
        var result = printByNumbers(inputs);
        var expect_string = '2 bottles of beer on the wall, 2 bottles of beer.\n' +
                              'Take one down and pass it around, 1 bottle of beer on the wall.\n';
        
        expect(expect_string).to.equal(result);
    });
    
    it("测试printByNumbers(1)", function(){

        var inputs = 1;
        var result = printByNumbers(inputs);
        var expect_string = '1 bottle of beer on the wall, 1 bottle of beer.\n' +
                              'Take one down and pass it around, no more bottles of beer on the wall.\n';
        
        expect(expect_string).to.equal(result);
    });

    it("测试printLastPart", function(){

        
        var result = printLastPart();
        var expect_string = 'No more bottles of beer on the wall, no more bottles of beer.\n' +
                              'Go to the store and buy some more, 99 bottles of beer on the wall.';

        expect(expect_string).to.equal(result);
    });
});