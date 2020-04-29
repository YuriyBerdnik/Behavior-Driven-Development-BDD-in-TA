const { After, Status, setDefaultTimeout } = require('cucumber');

setDefaultTimeout(60 * 1000);

After(function (testCase) {
	if (testCase.result.status === Status.FAILED) {
		return browser.takeScreenshot().then((screenShot) => {
			const decodedImage = Buffer.from(screenShot, 'base64');
			return this.attach(decodedImage, 'image/png');
		});
	}
});
