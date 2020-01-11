import { browser, by, element } from 'protractor';

export class UserSettingsPage {

    navigateTo() {
        return browser.get('/settings');
    }

    getAvatarImg() {
        return element(by.css('[id="avatarImg"]'));
    }
    
}