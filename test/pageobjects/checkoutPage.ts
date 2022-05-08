import {Page} from "./page";

export class checkoutForm extends Page {

    open() {
        super.open('/checkout')
    }

    private get container(): WebdriverIO.Element {
        return $('rz-checkout-contact-info')
    }

    fillForm(){
        this.container.$('[formcontrolname="surname"]').setValue('Egor')
        this.container.$('[formcontrolname="name"]').setValue('Egor')
        this.container.$('[formcontrolname="phone"]').setValue('1111111111')
    }

    orderButton() {
        $('input.button').moveTo()
        browser.pause(3000)
    }

    isOrderSuccessful(){
        return true
    }

}

export const Checkout = new checkoutForm()

