import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Selectors
  firstNameInput = () => this.page.locator('[data-test="firstName"]');
  lastNameInput = () => this.page.locator('[data-test="lastName"]');
  postalCodeInput = () => this.page.locator('[data-test="postalCode"]');
  continueButton = () => this.page.locator('[data-test="continue"]');

  // Verify we're on step one
  async verifyOnCheckoutStepOne() {
    await expect(this.page).toHaveURL(/.*checkout-step-one.html/);
    await expect(this.firstNameInput()).toBeVisible();
  }

  // Fill form and continue
  async fillCustomerInfo(first: string, last: string, zip: string) {
    await this.firstNameInput().fill(first);
    await this.lastNameInput().fill(last);
    await this.postalCodeInput().fill(zip);
    await this.continueButton().click();
  }
}
