describe('Fade left big animation', function() {
  var prefixes = {
    '-webkit-transform': true,
    '-moz-transform': true,
    '-o-transform': true,
    'transform': true
  };
  var trans;
  beforeEach(module('ngAnimate'));
  beforeEach(module('ngAnimateMock'));
  beforeEach(module('fx.animations'));

  it("should fade-left-big in", function(done) {
    inject(function($animate, $compile, $document, $rootScope, $rootElement, $window, $timeout) {
      var element = $compile('<div class="fx-fade-left-big">fade-left-big</div>')($rootScope);
      $rootElement.append(element);
      angular.element($document[0].body).append($rootElement);
      $rootScope.$digest();

      $animate.enabled(true);
      $animate.enter(element, $rootElement);
      $rootScope.$digest();
      $timeout.flush();
      $window.setTimeout(function(){
        angular.forEach(prefixes, function(bool, prefix){
          if(element.css(prefix)){
            trans = prefix;
          }
        });
        expect(element.css('opacity')).to.be('1');
        expect(element.css(trans)).to.be('matrix(1, 0, 0, 1, 0, 0)');
        done();
      },500);
    });
  });

  it("should fade-left-big leave", function(done) {
    inject(function($animate, $compile, $document, $rootScope, $rootElement, $window, $timeout) {
      var element = $compile('<div class="fx-fade-left-big">fade-left-big</div>')($rootScope);
      $rootElement.append(element);
      angular.element($document[0].body).append($rootElement);
      $rootScope.$digest();

      $animate.enabled(true);
      $animate.leave(element);
      $rootScope.$digest();
      $timeout.flush();
      $window.setTimeout(function(){
        angular.forEach(prefixes, function(bool, prefix){
          if(element.css(prefix)){
            trans = prefix;
          }
        });
        expect(element.css('opacity')).to.be('0');
        expect(element.css(trans)).to.be('');
        done();
      },500);
    });
  });

  it("should fade-left-big move", function(done) {
    inject(function($animate, $compile, $document, $rootScope, $rootElement, $window, $timeout) {
      var element = $compile('<div class="fx-fade-left-big">fade-left-big</div>')($rootScope);
      $rootElement.append(element);
      angular.element($document[0].body).append($rootElement);
      $rootScope.$digest();

      $animate.enabled(true);
      $animate.move(element, $rootElement);
      $rootScope.$digest();
      $timeout.flush();
      $window.setTimeout(function(){
        angular.forEach(prefixes, function(bool, prefix){
          if(element.css(prefix)){
            trans = prefix;
          }
        });
        expect(element.css('opacity')).to.be('1');
        expect(element.css(trans)).to.be('matrix(1, 0, 0, 1, 0, 0)');
        done();
      },500);
    });
  });

  xit('should fade-left-big removeClass', function(done){
    inject(function($animate, $compile, $document, $rootScope, $rootElement, $window, $timeout) {
      var element = $compile('<div class="fx-fade-left-big ng-hide">fade-left-big</div>')($rootScope);
      $rootElement.append(element);
      angular.element($document[0].body).append($rootElement);
      $rootScope.$digest();

      $animate.enabled(true);
      $animate.removeClass(element, 'ng-hide');
      $rootScope.$digest();

      $window.setTimeout(function(){
        angular.forEach(prefixes, function(bool, prefix){
          if(element.css(prefix)){
            trans = prefix;
          }
        });
        expect(element.css('opacity')).to.be('1');
        expect(element.css(trans)).to.be('matrix(1, 0, 0, 1, 0, 0)');
        done();
      },500);
    });
  });

  xit('should fade-left-big addClass', function(done){
    inject(function($animate, $compile, $document, $rootScope, $rootElement, $window, $timeout) {
      var element = $compile('<div class="fx-fade-left-big">fade-left-big</div>')($rootScope);
      $rootElement.append(element);
      angular.element($document[0].body).append($rootElement);
      $rootScope.$digest();

      $animate.enabled(true);
      $animate.addClass(element, 'ng-hide');
      $rootScope.$digest();
      $window.setTimeout(function(){
        angular.forEach(prefixes, function(bool, prefix){
          if(element.css(prefix)){
            trans = prefix;
          }
        });
        expect(element.css('opacity')).to.be('0');
        expect(element.css(trans)).to.be('');
        done();
      },500);
    });
  });
});
