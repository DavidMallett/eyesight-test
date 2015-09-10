"use strict";

var wd = require("wd");
require('mocha');
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
	app: "/Users/david/Downloads/mobile-development-release.apk"
};

var browser = wd.promiseChainRemote("0.0.0.0", 4723);

describe('proof of concept test for automating multiple appium instances on a single machine', function() {

	this.timeout(30000);

	before(function(done) {
		browser.init(desired).then(function() {
			done();
		});
	});

	after(function() {
		return browser.quit();
	});

	it('should log in', function(done) {
		browser
			.elementByUIAutomator('new UiSelector.resourceId("io.pristine.eyesight:id/edit_text_username")').sendKeys('david')
			.elementByUIAutomator('new UiSelector.resourceId("io.pristine.eyesight:id/edit_text_password")').sendKeys('david123#')
			.elementByUIAutomator('new UiSelector.resourceId("io.pristine.eyesight:id/edit_text_domain")').sendKeys('pristine')
			.elementByUIAutomator('new UiSelector.resourceId("io.pristine.eyesight:id/login_button")').click(function() {
				done();
			});
	});

});
