import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login to Swag Labs with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Assertion: URL or product title
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
});
