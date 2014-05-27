describe("Unit: dynamic loading scripts", function() {

  it("method 1 works, but using setTimeout and done is still ugly"+
    "also, it may interfere with other tests", function(done) {
    console.log('----------- method 1 -------------');
    window.ACOUNTER = undefined;
    loadScript('base/app/scripts/file2.js');
    setTimeout(function(){
        console.log('m1_2: '+window.ACOUNTER);
        expect(window.ACOUNTER).equal(1);
        done()
    }, 1000)
    console.log('m1_1: '+window.ACOUNTER);
  });

  it("method 2 works too, but I don't wanna have acces to the callback", function() {
    window.ACOUNTER = undefined;
    console.log('----------- method 2 -------------');
    loadScript('base/app/scripts/file2.js', function(){
        console.log('m2_2: '+window.ACOUNTER);
        expect(window.ACOUNTER).equal(1);
    });
    console.log('m2_1: '+window.ACOUNTER);
  });

  it("method 3, doesn't work", function() {
    window.ACOUNTER = undefined;
    console.log('----------- method 3 -------------');
    loadScript('base/app/scripts/file2.js');
    describe("wait for all async to finish", function(){
        it("now it will be loaded", function(){
            console.log('m3_2: '+window.ACOUNTER);
            expect(window.ACOUNTER).equal(1);
        })
    })
    console.log('m3_1: '+window.ACOUNTER);
  });

  it("method 4, use jquery. Callback is never invoked.", function() {
    window.ACOUNTER = undefined;
    console.log('----------- method 4 -------------');
    loadScript('base/app/scripts/file2.js');

    $(document).ajaxStop(function () {
        console.log('m4_2: '+window.ACOUNTER);
        expect(window.ACOUNTER).equal(1);
    });

    console.log('m4_1: '+window.ACOUNTER);
  });

});
