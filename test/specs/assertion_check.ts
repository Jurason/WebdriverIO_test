import * as assert from "assert";


describe('Smoke test', () => {
    it('Find picture', () => {
        browser.url('/')
        const img = $('.IID-image-219eb8a7 > div:nth-child(2) > img:nth-child(1)')

        if(!img.isExisting()) {
            throw new Error('Website should be opened, and logo displayed')
        }
    })
        
    it.only('checking assertion', () => {
        try {
            assert(false)
        } catch (err) {
            console.dir(err)
        }
    })
})




