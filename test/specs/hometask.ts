/**
 - Try to implement as many tests as you can
 - Do not overload tests with logic, be simple
 - browser.pause() allowed
 - copy/paste is allowed
 - prefer css selectors
 */

// Each implemented test gives you 15 points (max total - 45)
import {assert} from "chai";

describe("Items search", function() {
    it("should show results in case multiple items matches", function () {
        browser.url('/')
        const searchInputText = "Термометр для води Lindo"
        $('input[name="search"]').setValue(searchInputText)
        browser.keys("\uE007")

        assert($('[class="goods-tile ng-star-inserted"]').waitForDisplayed(), 'Search result are not displayed')
        const foundItemsAmount = $$('[class="goods-tile ng-star-inserted"]')
        if (foundItemsAmount.length < 2) {
            throw new Error('Should be displayed more than one item')
        }
    })

    it("should redirect to item page in case only one result matches",
        function () {
            browser.url('/')
            const searchInputText = "Термометр для води Lindo Pk 004U (4826722170045)"
            $('input[name="search"]').setValue(searchInputText)
            browser.keys("\uE007")

            assert($('h1.product__title').waitForDisplayed(), 'Page with one item did not open')
            const titleName = $('h1.product__title').getText()
            console.log(titleName)
            console.log(searchInputText)
            if (searchInputText == titleName) {
                throw new Error('NOT IMPLEMENTED')
            }
            // const foundItems = $('rz-product-top') // just for .waitForExist method
            // foundItems.waitForExist({timeout: 5000});

            // if (foundItems.isDisplayed()) {
            //     throw new Error('NOT IMPLEMENTED')

        })

    //
    it("should redirect to 'no matching results' in case no items matched", function() {
        browser.url('/')
        const searchInputText = "нвыанвырпвфшапщшфоицк"
        $('input[name="search"]').setValue(searchInputText)
        browser.keys("\uE007")

        $('rz-empty span').waitForDisplayed()
        $('rz-empty span').isExisting()
        // const foundItems = $('rz-empty span').getText()
        // // console.log(foundItems)
        // expect (foundItems).toExist()
    })

    //
    // // Each implemented test gives you 20 points (max total - 40)
    describe("Search results sorting", function() {
        it("correctly arranges items when using 'by price' sorting", function () {
            browser.url('/')
            const searchInputText = "Термометр для води Lindo"
            $('input[name="search"]').setValue(searchInputText)
            browser.keys("\uE007")

            $('select [value="2: expensive"]').click()
            browser.pause(1000)
            const item1 = $('li.catalog-grid__cell:nth-child(1)').$('p span.goods-tile__price-value').getText()
            const item2 = $('li.catalog-grid__cell:nth-child(2)').$('p span.goods-tile__price-value').getText()
            assert(item1 > item2)
        })
    })

    // DATAPROVIDER
    let dataCollection = [1, 2, 3, 4, 5];
    dataCollection.map(data => {
        it(`${counter.c} TEST for ${data}`, function() {
            console.log(`TEST number ${data} executed!`);
        });
    });
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

// console.log(`${counter.c} - file parsing finished`);


