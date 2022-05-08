import {Page} from "./page";
import {ProductDetailsMode} from "../../models/productDetails";

export class ProductDetailsPage extends Page {

    addToCart() {
        $('.product-buttons .button').click()
        browser.pause(3000)
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
