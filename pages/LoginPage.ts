import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Selectors for Swag Labs
  usernameInput = () => this.page.locator('#user-name');
  passwordInput = () => this.page.locator('#password');
  loginButton = () => this.page.locator('#login-button');

  // Navigation
  async goto() {
    await this.page.goto('https://www.saucedemo.com/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
  }

  // Action: Login
  async login(username: string, password: string) {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }
}
