// Karma configuration
// Generated on Wed Sep 13 2017 18:16:47 GMT+0530 (IST)

module.exports = function(config) {
'use strict';
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/lib/angularjs/angular.min.js',
      'app/lib/angularjs/angular-mocks.js',
      'app/lib/angular-route/angular-route.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit', 'coverage'],
    preprocessors: {
      'app/scripts/**/*.js': ['coverage']
    },
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    coverageReporter: {
      type : 'clover',
      dir : 'coverage/',
      outputFile: 'clover.xml',
    },
    plugins: [
      'karma-jsdom-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-coverage-istanbul-reporter',
      'karma-coverage'
    ],
    junitReporter: {
      useBrowserName: false,
      outputFile: 'test-results.xml',
      suite: 'unit'
    },


    // web server port
    port: 9876,

    browsers: ['ChromeHeadless'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
