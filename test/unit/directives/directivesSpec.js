//
// test/unit/directives/directivesSpec.js
//
describe("Unit: Testing Directives", function() {

  var $compile, $rootScope, $templateCache;

  beforeEach(angular.mock.module('App'));

  beforeEach(inject(
    ['$compile','$rootScope', '$templateCache', function($c, $r, $tc) {
      $compile = $c;
      $rootScope = $r;

      //Added $templateCache and mytemplate
      $templateCache = $tc;
      $templateCache.put('mytemplate.html', '<div>hello world 2!</div>');
    }]
  ));

  //This was already here
  it("should display the welcome text properly", function() {
    var element = $compile('<div data-app-welcome>User</div>')($rootScope);
    expect(element.html()).to.match(/Welcome/i);
  });


  //Added this test - it passes
  it("should render inline templates", function() {
    var element = $compile('<hello-world></hello-world>')($rootScope);
    expect(element.text()).equal("hello world!");
  });

  //Added this test - it fails
  it("should render cached templates", function() {
    var element = $compile('<hello-world2></hello-world2>')($rootScope);
    $rootScope.$digest(); // Million thanks @ExpertSystem!!! 
    // https://stackoverflow.com/questions/23871901/trouble-unit-testing-directives-that-use-templateurl
    expect(element.text()).equal("hello world 2!");
  });

});
