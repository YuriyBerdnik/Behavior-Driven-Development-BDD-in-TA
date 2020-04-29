
const { After, Status, setDefaultTimeout } = require('cucumber');

setDefaultTimeout(60 * 1000);

After((testCase) => {
	if (testCase.result.status === Status.FAILED) {
		return browser.takeScreenshot().then((screenShot) => {
			return this.attach(Buffer.from(screenShot, 'base64'), 'image/png');
		});
	}
});