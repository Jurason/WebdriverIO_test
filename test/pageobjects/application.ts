import {ProductDetails} from "./productDetails";
import {Cart} from "./cartPage";
import {Checkout} from "./checkoutPage";

class Application {
    product = ProductDetails
    cart = Cart
    checkout = Checkout
}

export const App: Application = new Application()