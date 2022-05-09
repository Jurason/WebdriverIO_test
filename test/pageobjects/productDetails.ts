import {Page} from "./page";
import {ProductDetailsMode} from "../../models/productDetails";


export class ProductDetailsPage extends Page {

    addToCart() {
        const currentItemsInCart = this.header.getQuantity()
        $('.product-buttons .button').click()
        browser.waitUntil(() => {
            return this.header.getQuantity() > currentItemsInCart
        })
    }

    public getProductName(): string {
        return $('h1.product__title').getText()
    }

    public getProductPrice(): string {
        return $('p.product-prices__big').getText()
    }

    getProductDetails(): ProductDetailsMode {
        const productDetails = new ProductDetailsMode()

        productDetails.name = this.getProductName()
        productDetails.price = this.getProductPrice()

       return productDetails
    }
}

export const ProductDetails = new ProductDetailsPage()
