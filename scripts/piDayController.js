(function() {
    'use strict';
//http://www.delimited.io/blog/2014/7/16/d3-directives-in-angularjs
// http://www.ng-newsletter.com/posts/d3-on-angular.html
    angular
        .module('piDayApp')
        .controller('piDayController',piDayController);

    piDayController.$inject =  ['$scope', '$log'];

    function piDayController($scope,  $log) {

        $scope.iterations = 10;
        determinePi($scope.iterations,$scope);
        $scope.isCalculating = true;

        $scope.calculatePi = function() {
            $scope.isCalculating = true;
            determinePi($scope.iterations,$scope);
        }

    }

    // local
    function determinePi(iterations,$scope) {
        var hitsInCircle;
        hitsInCircle = 0;
        var xPos,yPos;

        for (var i=0;i<iterations;i++) {
            xPos = Math.random();
            yPos = Math.random();

            if (xPos*xPos + yPos*yPos <= 1.0) {
                hitsInCircle = hitsInCircle+1;
            }
        }

        $scope.pi = 4.0 * hitsInCircle/iterations;
        $scope.delta = Math.abs(3.1415927 - $scope.pi);
        $scope.isCalculating = false;
    }

})();