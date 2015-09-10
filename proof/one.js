"use strict";

var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var desired = {
	"appium-version": "1.0",
	platformName: "Android",
	platformVersion: "5.1",
	deviceName: "Android Emulator",
	app: "/Users/david/Downloads/mobile-staging-release.apk",
	"app-package": "",
	"app-activity": ""
};

var browser = wd.promiseChainRemote("0.0.0.0", 4723);

browser.init(desired).then(function() {
	return browser
		.fin(function() {
			return browser.quit();
		});
}).done();
