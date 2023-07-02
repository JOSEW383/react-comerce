import { test, expect } from "@playwright/test";

const xpaths = {
  "price_from": '//div[@class="price-from"]//input[@type="range"]',
  "samsung_universe_9": '//div[@class="product-card" and .//img[contains(@src,"/products/3")]]//button',
  "samsung_galaxy_book": '//div[@class="product-card" and .//img[contains(@src,"/products/7")]]//button',
  "cart_icon": '//nav[contains(@class,"navbar")]//button[//img[contains(@src,"cart.svg")]]',
  "cart_total_price": '//div[@class="cart-footer-price"]',
  "add_product": '//div[@class="product-cart-amount"]//button[contains(@class,"btn-success")]',
  "remove_product": '//div[@class="product-cart-amount"]//button[contains(@class,"btn-danger")]',
  "clear_cart": '//div[@class="cart-footer"]//button[@class="btn btn-secondary"]',
  "close_cart": '//div[contains(@class,"cart-container")]//button[@aria-label="Close"]',
  "pay": '//div[@class="cart-footer"]//button[@class="btn btn-primary"]',
}

test("Buy items", async ({ page }) => {
  // Open the page and check the title
  await page.goto("/");
  await expect(page).toHaveTitle("React comerce");

  // Filter products by price
  await page.locator(xpaths["price_from"]).fill('1000');

  // Filter products by category and add products to the cart
  await page.getByRole('combobox', { name: 'Category' }).selectOption('smartphones');
  await page.locator(xpaths["samsung_universe_9"]).click();
  
  await page.getByRole('combobox', { name: 'Category' }).selectOption('laptops');
  await page.locator(xpaths["samsung_galaxy_book"]).click();

  // Check cart total price
  await page.locator(xpaths["cart_icon"]).click();

  const price = page.locator(xpaths["cart_total_price"]);
  await expect(price).toContainText('2748€');
  const initialPrice = await price.textContent();

  // Increment the quantity of one product
  await page.locator(xpaths["add_product"]).first().click();

  // Check cart total price is updated
  await expect(page.locator(xpaths["cart_total_price"])).not.toContainText(initialPrice);

  // Remove one product from the cart
  await page.locator(xpaths["remove_product"]).first().click();

  // Check cart total price
  await expect(page.locator(xpaths["cart_total_price"])).toContainText(initialPrice);

  // Clear the cart
  await page.locator(xpaths["clear_cart"] ).click();

  // Check the cart is empty
  await expect(page.locator(xpaths["cart_total_price"])).toContainText("0€");
  await page.locator(xpaths["close_cart"]).click();

  // Add product to cart
  await page.getByRole('combobox', { name: 'Category' }).selectOption('laptops');
  await page.locator(xpaths["samsung_galaxy_book"]).click();;

  // check the cart total price
  await page.locator(xpaths["cart_icon"]).click();;
  await expect(page.locator(xpaths["cart_total_price"])).not.toContainText("0€");

  // Checkout
  await page.locator(xpaths["pay"]).click();

  // Check the cart is empty
  await page.locator(xpaths["cart_icon"]).click();
  await expect(page.locator(xpaths["cart_total_price"])).toContainText("0€");

});