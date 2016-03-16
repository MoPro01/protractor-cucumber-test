var LoginPage = function() {

    var username = element(by.model('loginInfo.email'));
    var password = element(by.model('loginInfo.password'));
    var signInButton = element(by.buttonText('Sign in'));
    var signedInAs = element(by.model('userInfo | skDisplayName'));

    this.navigate = function() {
        /*
        You are using $timeout which is effectively preventing protractor to do it's full magic with page synchronisation.
        More here: https://github.com/angular/protractor/blob/master/docs/timeouts.md
        To get around that, browser.ignoreSynchronization = true is used, but it means I have to synchronize with the page.
         */
        browser.ignoreSynchronization = true;
        browser.get('/'); //path relative to the baseUrl
    };

    this.setUsername = function(uname) {
        return username.sendKeys(uname);
    };

    this.setPassword = function(pw) {
        return password.sendKeys(pw);
    };

    this.signIn = function() {
        return signInButton.click();
    };

    this.loginAs = function(username, password) {
        this.setUsername(username);
        this.setPassword(password);
        return this.signIn();
    };

    this.userSignedInAs = function() {
        return signedInAs.getText()
    }
};

module.exports = LoginPage;
