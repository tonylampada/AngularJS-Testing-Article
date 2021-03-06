module.exports = function() {
  return {
    basePath: '../',
    frameworks: ['mocha'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: true,

    // these are default values anyway
    singleRun: false,
    colors: true,
    
    files : [
      //3rd Party Code
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angularjs-scope.safeapply/src/Scope.SafeApply.js',
      'app/scripts/lib/**/*.js',

      //App-specific Code
      'app/scripts/config/config.js',
      'app/scripts/services/**/*.js',
      'app/scripts/directives/**/*.js',
      'app/scripts/controllers/**/*.js',
      'app/scripts/filters/**/*.js',
      'app/scripts/config/routes.js',
      'app/scripts/app.js',
      'app/scripts/file1.js',
      {pattern: 'app/scripts/file2.js', included: false},
      // 'app/scripts/file2.js', // Hum, should I add this or not? *

      //Test-Specific Code
      'node_modules/chai/chai.js',
      'test/lib/chai-should.js',
      'test/lib/chai-expect.js'
    ]
  }
};
