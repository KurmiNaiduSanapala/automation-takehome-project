export const PageLocators = {
  SEARCH_TEXTBOX: 'input[name="field-keywords"]',
  SEARCH_BUTTON: 'input[id="nav-search-submit-button"]',
  FILTER_FREE_SHIPPING_CHKBOX: '(//li[@aria-label="Free Shipping by Amazon"]//a)[1]',
  SORT_DROPDOWN: '.a-dropdown-prompt',
  LOW_TO_HIGH_LBL: '#s-result-sort-select_1',
  SEARCH_RESULTS:
    '//span[@data-component-type="s-search-results"]//div[@data-component-type="s-search-result"]',
  PRODUCT_NAME:
    '(//div[@data-component-type="s-search-result"]//*[contains(@class,"s-title-instructions-style")])[<value>]',
  PRODUCT_PRICE:
    '(//div[@data-component-type="s-search-result"]//span[@class="a-offscreen"])[<value>]',
  PRODUCT_LINK:
    '((//div[@data-component-type="s-search-result"]//*[contains(@class,"s-title-instructions-style")])[<value>]//a)[1]',
};
