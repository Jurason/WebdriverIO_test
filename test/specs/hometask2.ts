/**
 - Try to implement as many tests as you can
 - Do not overload tests with logic, be simple
 - browser.pause() allowed
 - copy/paste is allowed
 - prefer css selectors
 */

import {App} from "../pageobjects/application";
import {expect} from "chai";

describe('Cart', function() {
    it('add right quantity', function () {
        App.product.open('/lindo-4826722170045/p331586443/')
        App.product.addToCart()
    })
})

describe("Order", function() {
    beforeEach(function (){
        browser.deleteAllCookies()
    })

    it("is successful for regular item", function () {
        App.product.open('/lindo-4826722170045/p331586443/')
        App.product.addToCart()
        App.cart.open()
        expect(App.cart.isItemsInCart()).to.be.true

        App.checkout.open()
        App.checkout.fillForm()
        App.checkout.orderButton()
        expect(App.checkout.isOrderSuccessful()).to.be.true
    });

    it.skip("is successful for discounted item", function () {
        App.product.open('/path1/')
        App.product.addToCart()
        App.cart.open()
        expect(App.cart.isItemsInCart()).to.be.true

        App.checkout.open()
        App.checkout.fillForm()
        App.checkout.orderButton()
        expect(App.checkout.isOrderSuccessful()).to.be.true
    });

    it("is successful for sold out item", function () {
        App.product.open('/177364405/p177364405/')
        if($('.product-buttons .button').isExisting()){
            throw new Error('NOT IMPLEMENTED')
        }
    });

    it("is successful for 2 same items in cart", function () {
        App.product.open('/lindo-4826722170045/p331586443/')
        App.product.addToCart()
        App.cart.open()
        expect(App.cart.isItemsInCart()).to.be.true

        App.cart.setQuantityItem(2)
        App.checkout.open()
        App.checkout.fillForm()
        App.checkout.orderButton()
        expect(App.checkout.isOrderSuccessful()).to.be.true
    });

    it("is successful for 2 different items in cart", function () {
        App.product.open('/lindo-4826722170045/p331586443/')
        App.product.addToCart()
        App.product.open('/canpol_babies_56_151_pin/p126513342/')
        App.product.addToCart()
        App.cart.open()
        expect(App.cart.isItemsInCart()).to.be.true

        App.checkout.open()
        App.checkout.fillForm()
        App.checkout.orderButton()
        expect(App.checkout.isOrderSuccessful()).to.be.true
    });

})










    // DATAPROVIDER
    // let dataCollection = [1, 2, 3, 4, 5];
    // dataCollection.map(data => {
    //     it(`${counter.c} TEST for ${data}`, function() {
    //         console.log(`TEST number ${data} executed!`);
    //     });
    // });
