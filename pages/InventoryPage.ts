import { Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // 🔍 Corrected selectors
  pageTitle = () => this.page.locator('.title');
  sortDropdown = () => this.page.locator('[data-test="product-sort-container"]');
  addToCartButtons = () => this.page.locator('button.btn_inventory');
  cartIcon = () => this.page.locator('.shopping_cart_link');

  // ✅ Confirm you're on the inventory page
  async verifyOnInventoryPage() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(this.pageTitle()).toHaveText('Products');
  }

  // 🔃 Sort products using dropdown
  async sortBy(option: string) {
    const dropdown = this.sortDropdown();
    await dropdown.waitFor({ state: 'attached', timeout: 10000 }); // Ensure it's in the DOM
    await dropdown.scrollIntoViewIfNeeded();                       // Ensure it's visible on screen
    await dropdown.selectOption({ label: option });                // Perform sort
  }

  // ➕ Add first N products to cart
  async addFirstNItemsToCart(count: number) {
    const buttons = this.addToCartButtons();
    for (let i = 0; i < count; i++) {
      await buttons.nth(i).click();
    }
  }

  // 🛒 Navigate to the cart page
  async goToCart() {
    await this.cartIcon().click();
  }
}
