import { browser, by, element } from 'protractor';

export class ObservationFormPage {

    navigateTo() {
        return browser.get('/observations/create');
    }

    getPageTitleText() {
        return element(by.tagName('h1')).getText();
    }
    
    fillData() {
        element(by.tagName("select#species-list-dropdown")).click();
		browser.sleep(100);
		element(by.css("#species-list-dropdown [value='0: Object']")).click();
        element(by.css('[id="latitude-input"]')).sendKeys(1);
        element(by.css('[id="longitude-input"]')).sendKeys(2);
    }

    clickSendButton() {
        return element(by.id('send')).click();
    }
}