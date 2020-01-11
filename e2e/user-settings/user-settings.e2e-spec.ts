import { LoginPage } from '../login/login.po';
import { MainPage } from '../main/main.po';
import { UserSettingsPage } from '../user-settings/user-settings.po'
import { browser } from 'protractor';

describe('User settings page', () => {
    let loginPage: LoginPage;
    let mainPage: MainPage;
    let settingsPage: UserSettingsPage;

    beforeEach(() => {
        loginPage = new LoginPage();
        mainPage = new MainPage();
        settingsPage = new UserSettingsPage();
    });

    afterEach(() => {
        mainPage.navigateTo();
        mainPage.logout();
    })

    it('should redirect to login page if user is not logged in', () => {
        mainPage.navigateTo();
        mainPage.logout();
        settingsPage.navigateTo();
        expect(loginPage.getPageTitleText()).toEqual('Logowanie')
    });

    it('should display page & avatar change form if user is logged in', () => {
        loginPage.navigateTo();
        const validCredentials = { email: 'test', password: 'test'};
        loginPage.fillCredentials(validCredentials);
        browser.sleep(500);
        settingsPage.navigateTo();
        expect(settingsPage.getAvatarImg().isDisplayed()).toBe(true);
    });
});

