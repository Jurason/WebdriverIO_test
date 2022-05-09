
export class Header {
    getQuantity(): number {
        let quantity;
        if ($('span.counter--green').isExisting()) {
            quantity = $('span.counter--green').getText()
        } else {
            quantity = 0
        }
        return parseInt(quantity)

        // let quantity = '0';
        // try {
        //     $('span.counter--green').isExisting()
        //     quantity = $('span.counter--green').getText()
        // } catch(err) {
        //     console.log('MISTAKE')
        // }
        // return parseInt(quantity)
    }
}

