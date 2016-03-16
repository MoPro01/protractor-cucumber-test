var assertStyles = require('../support/assert-styles');
var app = require('../../pages/app.js');

var steps = function() {

    var expect = assertStyles.expect;
    var should = assertStyles.should;
    var currentUser,
        loginPage = app.loginPage;

    this.Given('$user is a subscribed user', function (user) {
        currentUser = this.getUser(currentUser, user);
    });

    //the user parameter is there only for convenience so that I can address users as both he or she.
    this.When('$user enters his credentials', function (user) {
        loginPage.navigate();
        return loginPage.loginAs(currentUser.username, currentUser.password)
    });

    this.Then('$user can login to his SpaceKnow account', function (user) {
        // I am checking just the logging user email for simplicity.
        browser.sleep(5000);
        return expect(loginPage.userSignedInAs()).to.eventually.equal(currentUser.username);
    });


};

module.exports = steps;
