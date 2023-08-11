import { IEcommerceSite } from '../interfaces/ecommerce-site';
import { config } from '../util/config';
import { exportToCSV } from '../util/datawriter';
import { PageLocators } from '../locators/searchpage';
import { Product } from '../interfaces/products';
import { clickElement, enterText } from '../util/actions';
import { Given, When, Then } from '@cucumber/cucumber';

const products: Product[] = [];
let filteredProducts: Product[] = [];
let search = '';

Given('Go to defined website', async function (this: IEcommerceSite) {
  const page = this.page!;
  await page.goto(config.BASE_URL, { waitUntil: 'domcontentloaded' });
});

When('I enter {string} in search', async function (this: IEcommerceSite, searchText: string) {
  search = searchText;
  const page = this.page!;
  await enterText(page, PageLocators.SEARCH_TEXTBOX, searchText);
});

When('I click Go and fetch results', async function (this: IEcommerceSite) {
  const page = this.page!;
  await clickElement(page, PageLocators.SEARCH_BUTTON);
  await clickElement(page, PageLocators.FILTER_FREE_SHIPPING_CHKBOX);
  await clickElement(page, PageLocators.SORT_DROPDOWN);
  await clickElement(page, PageLocators.LOW_TO_HIGH_LBL);

  const count = await page.locator(PageLocators.SEARCH_RESULTS).count();
  console.log('Result count ' + count);
  if (count > 0) {
    for (let i = 1; i < count + 1; ) {
      const productName = await page
        .locator(PageLocators.PRODUCT_NAME.replace('<value>', i.toString()))
        .innerText();
      let productPrice = await page
        .locator(PageLocators.PRODUCT_PRICE.replace('<value>', i.toString()))
        .innerText();
      productPrice = productPrice.replace('$', '');
      let productLink = await page
        .locator(PageLocators.PRODUCT_LINK.replace('<value>', i.toString()))
        .getAttribute('href');
      productLink = config.BASE_URL + productLink;
      products.push({ name: productName, price: parseFloat(productPrice), link: productLink });

      i = i + 1;
    }
    products.sort((a, b) => a.price - b.price);
  }
});

When('I filter {int} lowest product information', async function (records: number) {
  filteredProducts = products.slice(0, records);
});

Then('I write into csv file', async function () {
  exportToCSV(
    filteredProducts,
    'Product Name,Price,SearchTerm,Product Link',
    'C:/reports',
    'product_data.csv',
    search,
  );
});
