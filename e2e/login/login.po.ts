import { browser, by, element } from 'protractor';

export class LoginPage {

    navigateTo() {
        return browser.get('/login');
    }

    fillCredentials(credentials) {
        element(by.css('[id="email-login"]')).sendKeys(credentials.email);
        element(by.css('[id="password-login"]')).sendKeys(credentials.password);
        return element(by.css('.btn-primary')).click();
    }

    clickLoginButton() {        
        element(by.css('.btn-primary')).click();
    }

    getPageTitleText() {
        return element(by.tagName('h1')).getText();
    }

    getErrorMessage() {
        return element(by.css('[id="login-error"]'));
    }
}