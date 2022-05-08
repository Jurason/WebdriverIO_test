// import * as assert from 'assert'; // native asserts
import * as chai from 'chai'
const expectChai = chai.expect
const assert = chai.assert

chai.should();


console.time('Time "can register" took')
describe('Website', function () {
    it('should be alive', function () {
        browser.url(`/`)         
        const img = $('#svg-78604338-263886854')
        if(!img.isExisting()) { // isPresent()
            throw new Error('Website should be opened, and logo displayed');
        }
    })

    it('checking assertions', function () {
        try {
            assert.ok(false)
        } catch (err) {
            console.dir(err)
        }
    })
})
console.timeEnd('Time "can register" took')

// describe("Chai", function() {
//     it("should", function() {
//         browser.url('/');
//         $("div").isDisplayed().should.equal(true, 'error message');
//         $("div").isDisplayed().should.to.be.equal(true, 'error message')
//     });

//     it("expect", function() {
//         browser.url('/');
//         expectChai($("div").isDisplayed(), 'error message').to.be.true
//     });

//     it("assert", function() {
//         browser.url('/');
//         assert.isTrue($("div").isDisplayed(), 'error message')
//     });
// });

// describe("WDIO expect", function() {
//     it("expect", function() {
//         browser.url('/');
//         // expectChai($("div").isDisplayed(), 'error message').to.be.true
//         expect($('div')).not.toBeDisplayed();
//     });
// });