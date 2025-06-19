import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Complete checkout step one in Swag Labs', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.verifyOnInventoryPage();
  await inventoryPage.sortBy('Price (low to high)');
  await inventoryPage.addFirstNItemsToCart(2);
  await inventoryPage.goToCart();

  await cartPage.verifyCartPage();
  await cartPage.proceedToCheckout();

  await checkoutPage.verifyOnCheckoutStepOne();
  await checkoutPage.fillCustomerInfo('Neha', 'Rayn', '12345');

  // Assert we're now on step two (overview page)
  await expect(page).toHaveURL(/.*checkout-step-two.html/);
});
