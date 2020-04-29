const { Then } = require('cucumber');
const expect = require('chai').expect;

Then(/^Page title should be "([^"]*)"$/, async (title) => {
	const pageTitle = await browser.getTitle();
	return expect(pageTitle).to.be.equal(title);
});

Then(/^I wait while Advanced search form appears with url "([^"]*)"$/, async (currentUrl) => {
	const url = await browser.getCurrentUrl();
	return expect(url).to.be.equal(currentUrl);
});
