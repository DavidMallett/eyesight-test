grunt.initConfig({
  mochaAppium: {
    options: {
      // Mocha options 
      reporter: 'spec',
      timeout: 30e3,
      // Toggles wd's promises API, default:false 
      usePromises: false
      // Path to appium executable, default:'appium' 
      appiumPath: 'appium'
    },

    proof1: {
      src: [

      ],
      options: {
        deviceName: 'Android Emulator',
        platformName: 'Android',
        version: '5.1',
        
      }
    }

    iphone: {
      src: ['test/*.js'],
      options: {
        // Appium Options 
        deviceName: 'iPhone Simulator',
        platformName: 'iOS',
        version: '6.1',
        // A url of a zip file containg your .app package 
        // or 
        // A local absolute path to your simulator-compiled .app directory 
        app: 'http://appium.s3.amazonaws.com/TestApp6.0.app.zip'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-mocha-appium');