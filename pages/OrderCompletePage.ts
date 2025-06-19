import { Page, expect } from '@playwright/test';

export class OrderCompletePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Selectors
  completeHeader = () => this.page.locator('.complete-header');
  backHomeButton = () => this.page.locator('[data-test="back-to-products"]');

  // Validate we're on the completion page
  async verifyOrderComplete() {
    await expect(this.page).toHaveURL(/.*checkout-complete.html/);
    await expect(this.completeHeader()).toHaveText('Thank you for your order!');
  }

  // Reset session and go back
  async returnToHome() {
    await this.backHomeButton().click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  }
}
