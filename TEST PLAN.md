TEST PLAN

Targets:
Web App
Android App
iOS App
Glass App
Admin App (web)

Glass Camera
Glass Wifi Manager
Glass Wearable Manager

Start with a single-device test that logs in to ensure that that works.

Then do the multi-device tests (virtually all tests will involve multiple devices)

I definitely want to automate on staging (beta). Those tests will be running 24/7 eventually. I will manually test and implement stuff on alpha (development). 

Test: Log in and call another user. Accept the call as the other user, and disconnect.
Test: Log in and request a call. As another user, verify the state change.
This needs to be done for the following device combinations:
Web <-> Web
Web <-> iOS
Web <-> Android
Web <-> Glass
iOS <-> iOS
iOS <-> Android
iOS <-> Glass
Android <-> Android
Android <-> Glass

Needs to be done each way for a total of 18 implementations per test.