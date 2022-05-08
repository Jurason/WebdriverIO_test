import {Page} from "./page";

export class CartPage extends Page {

    private get noItemsLabel() { return $('h4.cart-dummy__heading') }

    open() {
        super.open('/cart')
    }

    isNoItemsInCart() {
        if(this.noItemsLabel.isDisplayed()) {
            return this.noItemsLabel.getText()
                .includes('Кошик порожній') //тут другую проверку пло
        } else {
            return false
        }
    }

    isItemsInCart() {
        return !this.isNoItemsInCart() //call isNoItemsInCart() with !
    }

    setQuantityItem(quantity) {
        $('input.cart-counter__input').setValue(quantity)
    }

    private get container(): WebdriverIO.Element {
        return $('main.cart-page__holder')
    }

    public get items(): Item[] {
        return this.container.$$('ul.cart-list')
            .map(item => {
                return new Item(item)
            })
    }

    public getItemByName(name: string): Item {
        return this.items.find(item => item.getProductName().includes(name))
    }
}

class Item {
    container

    constructor(itemContainer) {
        this.container = itemContainer
    }

    public getProductName(): string {
        return this.container.$('a.cart-product__title').getText()
    }

    public getProductPrice(): number {
        return parseInt(this.container.$('p[class$="__price"]').getText())
    }
}

export const Cart = new CartPage()