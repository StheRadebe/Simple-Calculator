const {add, multiply} = require("../src/simple-calculator");

describe("Add function", ()=>{
    it("should add two numbers", ()=>{
        expect(add(1,2)).toEqual(3);
    });
    it("should be able to add multiple numbers", ()=>{
        expect(add(2,3,4,5)).toEqual(14);
    })
})

describe("Multiply function", ()=>{
    it("should multiply two numbers", ()=>{
        expect(multiply(1,2)).toEqual(2);
    });
    it("should be able to multiply multiple numbers", ()=>{
        expect(multiply(2,5,10)).toEqual(100);
    })
})