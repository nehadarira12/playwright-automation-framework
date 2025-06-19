import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  cartTitle = () => this.page.locator('.title');
  cartItems = () => this.page.locator('.cart_item');
  removeButton = (itemName: string) =>
    this.page.locator(`.cart_item:has-text("${itemName}") button`);

  checkoutButton = () => this.page.locator('[data-test="checkout"]');

  async verifyCartPage() {
    await expect(this.page).toHaveURL(/.*cart.html/);
    await expect(this.cartTitle()).toHaveText('Your Cart');
  }

  async removeItem(itemName: string) {
    await this.removeButton(itemName).click();
  }

  async proceedToCheckout() {
    await this.checkoutButton().click();
  }
}
