import { browser, by, element } from 'protractor';

export class RegistrationPage {

    navigateTo() {
        return browser.get('/register');
    }

    fillCredentials(credentials) {
        element(by.css('[id="email-register"]')).sendKeys(credentials.email);
        element(by.css('[id="login-register"]')).sendKeys(credentials.username);
        element(by.css('[id="password-register"]')).sendKeys(credentials.password);
        return element(by.css('.btn-primary')).click();
    }

    clickRegisterButton() {        
        element(by.css('.btn-primary')).click();
    }

    getPageTitleText() {
        return element(by.tagName('h1')).getText();
    }

    getErrorMessage() {
        return element(by.css('[id="register-error"]'));
    }
}