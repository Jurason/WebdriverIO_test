// describe('Smoke test', () => {
//     it('Check title', () => {
//          browser.url('/')
//          expect(browser).toHaveTitle('Message. Video. Phone. | RingCentral');
//      })
//
//     it('Find picture', () => {
//         browser.url('/')
//         const img = $('.IID-image-219eb8a7 > div:nth-child(2) > img:nth-child(1)')
//         if(!img.isExisting()) {
//             throw new Error('Website should be opened, and logo displayed')
//         }
//     })
//
//     it('Find Text', () => {
//         browser.url('/')
//         const findText = $('div.cta__wrapper:nth-child(4) > a:nth-child(1) > span:nth-child(1) > span:nth-child(1)')
//         const expectedText = ("Join a meeting")
//         expect(findText).toHaveTextContaining(expectedText);
//     })
//
//     it('Find Selector', () => {
//         browser.url('/')
//         const findText = $('h1=Simpler communications')
//         console.log(findText.getText());
//     })
// })

// function pow(x,n) {
//     let result = 1
//     for(i=0; i < n; i++) {
//         result *= x
//     }
//     return result
// }
//
//
// describe('pow', function(){
//     function makeTest(x){
//         let expected = x * x * x
//         it('${x} в степени 3 будет ${expected}', function (){
//             assert.equal(pow(x,3), expected)
//         });
//     }
//
//     for (let x = 1; x <= 5; x++) {
//         makeTest(x)
//     }
// })


