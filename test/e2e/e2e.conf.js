exports.config = {

    allScriptsTimeout: 11000,

    getPageTimeout: 10000,

    suites: {
        all: 'features/*.feature',
        login: 'features/login.feature'
    },

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'https://analytics.spaceknow.com/',

    // cucumber framework support
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: 'features',   // path to features and steps
        format: 'pretty'                // prints all the steps on console
    },

    restartBrowserBetweenTests: true

};
