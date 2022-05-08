import {expect} from "chai";
import {App} from "../pageobjects/application";


describe('Cart', function () {
    it('can add item', function (){
        App.product.open('/lindo-4826722170045/p331586443/')
        App.product.addToCart()
        App.cart.open()
        expect(App.cart.isItemsInCart()).to.be.true
    })

    it('can add correct item', function() {
        App.product.open('/lindo-4826722170045/p331586443/')
        const productDetails = App.product.getProductDetails()

        console.log('$$$$productDetails', productDetails.toString())

        App.product.addToCart()

        App.cart.open()
        expect(App.cart.isItemsInCart()).to.be.true

        expect(App.cart.items.length).to.equal(1)
        const productNameInCart = App.cart.items[0].getProductName()
        const productPriceInCart = App.cart.items[0].getProductPrice()

        console.log('productNameInCart', productNameInCart)
        console.log('productPriceInCart', productPriceInCart)

        expect(productNameInCart).to.equal(productDetails.name)
        expect(productPriceInCart).to.equal(productDetails.price)

    })
})
