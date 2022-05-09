// /**
// * main page object containing all methods, selectors and functionality
// * that is shared across all page objects
// */
import {Header} from "./header";

export class Page {
    header = new Header()


    open (path: string) {
        return browser.url(`https://rozetka.com.ua${path}`)
    }
}

