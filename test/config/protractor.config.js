const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');

const reporterOptions = {
	theme: 'bootstrap',
	jsonFile: './reports/cucumber_report.json',
	output: './reports/cucumber_report.html',
	reportSuiteAsScenarios: true,
	launchReport: true,
};

exports.config = {
	allScriptsTimeout: 60000,
	getPageTimeout: 60000,
	specs: [path.resolve('./test/features/*.feature')],
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	capabilities: {
		browserName: yargs.browser || 'chrome',
		shardTestFiles: yargs.instances > 1,
		maxInstances: yargs.instances || 1,
	},
	disableChecks: true,
	cucumberOpts: {
		require: [path.resolve('./test/step_definitions/**/*.js')],
		ignoreUncaughtExceptions: true,
		format: ['json:./reports/cucumber_report.json', './node_modules/cucumber-pretty'],
		tags: yargs.tag || '@all',
	},
	onPrepare: () => {
		browser.waitForAngularEnabled(false);
		browser.manage().window().maximize();
	},
	afterLaunch: () => {
		reporter.generate(reporterOptions);
	},
};