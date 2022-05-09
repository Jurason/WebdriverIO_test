// import * as assert from "assert";

describe('User', () => {
    it('can register', () => {
        browser.url('/')
        $('button[class="header__button ng-star-inserted"]').click()
        $('button[class="auth-modal__register-link button button--link ng-star-inserted"]').click()
        const registrationForm = $('div[class="modal__holder modal__holder_show_animation modal__holder--medium"]')
        const email = `test${new Date().getTime() / 1000}@test.com` //generate fake email
        const password = 'juventus1991'
        registrationForm.$('#registerUserName').setValue('Test')
        registrationForm.$('#registerUserSurname').setValue('Test')
        registrationForm.$('#registerUserPhone').setValue('9134924808')
        registrationForm.$('#registerUserEmail').setValue(email)
        registrationForm.$('#registerUserPassword').setValue(password)
        browser.pause(1000)

        //check successful registration
        // const alert = $('')
        // assert(alert.isDisplayed(), 'Expected success alert to be visible after registration')
        // const alertText = alert.getText()
        // const expectedText = 'some text which should be displayed'
        //assert(alertText === expectedText, 'Alert text: "${alertText}" match to expected text: "${expectedText}" after successful registration')
        // console.log('Alert text: "${expectedText}" match to expected')



    })
})




