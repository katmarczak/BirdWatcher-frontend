import { LoginPage } from './login.po';
import { MainPage } from '../main/main.po';

describe('Login page', () => {
    let loginPage: LoginPage;
    let mainPage: MainPage;

    beforeEach(() => {
        loginPage = new LoginPage();
        mainPage = new MainPage();
    });

    afterEach(() => {
        mainPage.navigateTo();
        mainPage.logout();
    });

    it('should redirect to main page if the user has entered valid credenatials', () => {
        loginPage.navigateTo();
        const validCredentials = { email: 'test', password: 'test'};
        loginPage.fillCredentials(validCredentials);
        expect(mainPage.getActiveSidebarLink()).toEqual('Strona główna');
    });

    it('should display error on login page if the user has entered invalid credenatials', () => {
        loginPage.navigateTo();
        const invalidCredentials = { email: 'test', password: '123'};
        loginPage.fillCredentials(invalidCredentials).then(() => {
            expect(loginPage.getErrorMessage().isDisplayed()).toBe(true);
        });        
    });
})