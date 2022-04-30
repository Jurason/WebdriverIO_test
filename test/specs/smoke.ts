describe('Smoke test', () => {
    // it('Check title', () => {
    //      browser.url('/')
    //      expect(browser).toHaveTitle('Message. Video. Phone. | RingCentral');
    //  })
     
     it.skip('Find Text', () => {
        browser.url('/')
        const findText = $('') 
        const expectedText = ("")
        expect(findText).toHaveTextContaining(expectedText);
    })

    it('Find Selector', () => {
        browser.url('/')
        const findText = $('h1=Simpler communications')
        console.log(findText.getText());
    })
})




