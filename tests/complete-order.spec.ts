import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { OrderCompletePage } from '../pages/OrderCompletePage';

test('Complete order and verify confirmation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const overviewPage = new CheckoutOverviewPage(page);
  const orderCompletePage = new OrderCompletePage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.verifyOnInventoryPage();
  await inventoryPage.sortBy('Price (low to high)');
  await inventoryPage.addFirstNItemsToCart(1);
  await inventoryPage.goToCart();

  await cartPage.verifyCartPage();
  await cartPage.proceedToCheckout();

  await checkoutPage.verifyOnCheckoutStepOne();
  await checkoutPage.fillCustomerInfo('Neha', 'Rayn', '12345');

  // ✅ This is the missing step!
  await overviewPage.verifyOnOverviewPage();
  await overviewPage.completeOrder();

  // ✅ Now this will work!
  await orderCompletePage.verifyOrderComplete();
  await orderCompletePage.returnToHome();
});
