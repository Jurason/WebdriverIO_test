// /**
// * main page object containing all methods, selectors and functionality
// * that is shared across all page objects
// */
export class Page {
    open (path) {
        return browser.url(`https://rozetka.com.ua${path}`)
    }
}

