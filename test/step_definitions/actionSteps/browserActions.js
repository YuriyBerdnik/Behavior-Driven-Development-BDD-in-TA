const { When } = require('cucumber');
const PageFactory = require('../../page_objects/pageObject');

When(/^I open "([^"]*)" page$/, async (pageName) => {
	await PageFactory.getPage(pageName).visit();
});

When(/^I click on Advanced search button$/, async () => {
	await PageFactory.getPage('Home').openAdvancedSearch();
});

When(/^I open "([^"]*)" url$/, (url) => {
    return browser.get(url);
});
