import { Page, expect } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  finishButton = () => this.page.locator('[data-test="finish"]');

  async verifyOnOverviewPage() {
    await expect(this.page).toHaveURL(/.*checkout-step-two.html/);
    await expect(this.finishButton()).toBeVisible();
  }

  async completeOrder() {
    await this.finishButton().click();
  }
}
