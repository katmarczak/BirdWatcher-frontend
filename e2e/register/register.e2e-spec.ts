import { RegistrationPage } from './register.po';
import { MainPage } from '../main/main.po';

describe('Registration page', () => {
    let registrationPage: RegistrationPage;
    let mainPage: MainPage;

    beforeEach(() => {
        registrationPage = new RegistrationPage();
        mainPage = new MainPage();
    });

    afterEach(() => {
        mainPage.navigateTo();
        mainPage.logout();
    });

    it('should display error on registration page if a user has entered invalid email', () => {
        registrationPage.navigateTo();
        const invalidCredentials = { email: 'bademail', username: 'name', password: 'Aa!123456'};
        registrationPage.fillCredentials(invalidCredentials).then(() => {
            expect(registrationPage.getErrorMessage().isDisplayed()).toBe(true);
        });        
    });

    it('should display error on registration page if a user has entered invalid password', () => {
        registrationPage.navigateTo();
        let invalidCredentials = { email: 'correctemail@domain.com', username: 'name', password: 'Aa!1'};
        registrationPage.fillCredentials(invalidCredentials).then(() => {
            expect(registrationPage.getErrorMessage().isDisplayed()).toBe(true);
        });
        invalidCredentials = { email: 'correctemail@domain.com', username: 'name', password: '123456789'};
        registrationPage.fillCredentials(invalidCredentials).then(() => {
            expect(registrationPage.getErrorMessage().isDisplayed()).toBe(true);
        });
    });
})