import { LoginPage } from '../login/login.po';
import { MainPage } from '../main/main.po';
import { ObservationFormPage } from '../observation/observation-form.po'
import { browser, by, element } from 'protractor';

describe('Adding new observation page', () => {
    let loginPage: LoginPage;
    let mainPage: MainPage;
    let formPage: ObservationFormPage;

    beforeEach(() => {
        loginPage = new LoginPage();
        mainPage = new MainPage();
        formPage = new ObservationFormPage();
    });

    afterEach(() => {
        mainPage.navigateTo();
        mainPage.logout();
    })

    it('should redirect to login page if user is not logged in', () => {
        mainPage.navigateTo();
        mainPage.logout();
        formPage.navigateTo();
        browser.sleep(500);
        expect(loginPage.getPageTitleText()).toEqual('Logowanie');
    });

    it('should display error if user tries to send empty data', () => {
        loginPage.navigateTo();
        const validCredentials = { email: 'test', password: 'test'};
        loginPage.fillCredentials(validCredentials);
        formPage.navigateTo();
        formPage.clickSendButton();
        expect(formPage.getPageTitleText()).toEqual('Dodaj nową obserwację');
    });

    it('should redirect to observation display if a user has posted valid data', () => {
        loginPage.navigateTo();
        const validCredentials = { email: 'test', password: 'test'};
        loginPage.fillCredentials(validCredentials);
        const linkToForm = element(by.linkText('Dodaj nowa obserwacje'));
        linkToForm.click(); // for keeping x-auth-token saved
        formPage.fillData();
        formPage.clickSendButton();
        expect(element(by.id('main-photo')).isDisplayed()).toBe(true);
        expect(element(by.tagName('app-comments')).isDisplayed()).toBe(true);
    });
});

