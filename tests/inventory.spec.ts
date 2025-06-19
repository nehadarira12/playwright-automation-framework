import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Add items to cart after sorting in Swag Labs', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.verifyOnInventoryPage();
  await inventoryPage.sortBy('Price (low to high)');
  await inventoryPage.addFirstNItemsToCart(2);
  await inventoryPage.goToCart();

  // Assertion: Check if cart page opened
  await expect(page).toHaveURL(/.*cart.html/);
});
