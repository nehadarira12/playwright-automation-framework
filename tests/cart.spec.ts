import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('Remove item from cart and proceed to checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.verifyOnInventoryPage();
  await inventoryPage.addFirstNItemsToCart(2);
  await inventoryPage.goToCart();

  await cartPage.verifyCartPage();
  await cartPage.removeItem('Sauce Labs Backpack');
  await cartPage.proceedToCheckout();

  await expect(page).toHaveURL(/.*checkout-step-one.html/);
});
