import {Config} from 'protractor';

export let config: Config = {
   // set to "custom" instead of cucumber.
   framework: 'custom',
   // path relative to the current config file
   frameworkPath: require.resolve('protractor-cucumber-framework'),
   specs: ['../features/*.feature'],
  //directConnect:true,
  //chromeDriver:'D:\Protractor\node-v10.14.0-win-x64\node_modules\protractor\node_modules\webdriver-manager\selenium',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },
  cucumberOpts: {
    // require step definitions
    require: [
      './steps/*.js' // accepts a glob
    ]
  }
  };