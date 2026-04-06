import { expect, test } from '@playwright/test';

test.describe('Authentication', () => {
  test('allows a standard user to log in successfully', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('shows an error message for a locked out user', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText(/Sorry, this user has been locked out/)).toBeVisible();
  });
});
