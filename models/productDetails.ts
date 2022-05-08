
export class ProductDetailsMode {
    name: string;
    price: string;
    // price: {
    //     regularPrice: number
    //     discountedPrice: number
    // }

    toString() {
        return JSON.stringify(this, null, 2)
    }
}
