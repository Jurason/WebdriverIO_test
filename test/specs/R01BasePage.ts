//Autotests for headers visual properties

describe('Main Header', () => {
    it('is displayed', () => {
        browser.url('/')
        const header = $('rz-header')
        if (!header.isDisplayed()) {
            throw new Error('Header did not displayed')
        }
    })
})







