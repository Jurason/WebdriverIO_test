/**
 - Try to implement as many tests as you can
 - Do not overload tests with logic, be simple
 - browser.pause() allowed
 - copy/paste is allowed
 - prefer css selectors
 */

// Each implemented test gives you 15 points (max total - 45)
describe("Items search", function() {
    it("should show results in case multiple items matches", function () {
        browser.url('/')
        const searchInputText = "Термометр для води Lindo"
        $('input[name="search"]').setValue(searchInputText)
        browser.keys("\uE007")

        $('[class="goods-tile ng-star-inserted"]').waitForDisplayed()
        // const foundItems = $('[class="goods-tile ng-star-inserted"]') // just for .waitForExist method
        // foundItems.waitForExist({timeout: 5000});
        const foundItemsAmount = $$('[class="goods-tile ng-star-inserted"]')
        if (foundItemsAmount.length < 2) {
            throw new Error('Should be displayed more than one item')
        }
    })

    it("should redirect to item page in case only one result matches", function () {
        browser.url('/')
        const searchInputText = "Термометр для води Lindo Pk 004U (4826722170045)"
        $('input[name="search"]').setValue(searchInputText)
        browser.keys("\uE007")

        $('h1.product__title').waitForDisplayed()
        const titleName = $('h1.product__title').getText()
        console.log(titleName)
        console.log(searchInputText)
        if (searchInputText == titleName){
            throw new Error('NOT IMPLEMENTED')
        }
        // const foundItems = $('rz-product-top') // just for .waitForExist method
        // foundItems.waitForExist({timeout: 5000});

        // if (foundItems.isDisplayed()) {
        //     throw new Error('NOT IMPLEMENTED')

    })

    //
    // it("should redirect to 'no matching results' in case no items matched", function() {
    //     browser.url('/')
    //     const searchInput = $('input[name="search"]')
    //     const searchInputText = "нвыанвырпвфшапщшфоицк"
    //     searchInput.setValue(searchInputText)
    //     browser.keys("\uE007")
    //
    //     const foundItems = $('span*=не знайдено жодної моделі')
    //     foundItems.waitForExist({timeout: 5000});
    //
    //     // const foundItems = $('span*=не знайдено жодної моделі').getText()
    //     // expect (foundItems).to.match(
    //     //          /text/
    //     // );
    //
    //
    //
    //     if (foundItems.isDisplayed()) {
    //         throw new Error('NOT IMPLEMENTED')
    //     }
    // })

    //
    // // Each implemented test gives you 20 points (max total - 40)
    // describe("Search results sorting", function() {
    //   it("correctly arranges items when using 'by price' sorting", function() {
    //     throw new Error("NOT IMPLEMENTED");
    //   });
    //
    //   it("correctly arranges items when using 'by name' sorting", function() {
    //     throw new Error("NOT IMPLEMENTED");
    //   });
    // });
    //
    // // BONUS LEVEL - this test gives you 15 points
    // describe("Contact us form", function() {
    //   it("must send messages to shop administration", function() {
    //     throw new Error("NOT IMPLEMENTED");
    //   });
    // })
})




