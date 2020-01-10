import { browser, by, element } from 'protractor';

export class MainPage {

    navigateTo() {
        return browser.get('/');
    }

    getPageTitleText() {
        return element(by.tagName('h1')).getText();
    }

    getActiveSidebarLink() {
        return element(by.css('.active')).getText();
    }

    logout() {
        const logoutButton = element(by.css('[id="logout-link"]'));
        logoutButton.isPresent().then((present) => {
            if(present) {
                browser.actions().mouseMove(logoutButton).perform();
                browser.actions().click().perform();
            }
        });
    }
}