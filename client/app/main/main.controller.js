'use strict';

angular.module('acpApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    var Init = function() {
      animationsInit();  
      sidebarMainInit();
      sidebarCollapseInit();
      scrollInit();
      coreInit();
    };

    $scope.$on('$viewContentLoaded', Init);

    $scope.addThing = function() {
      if($scope.newThing === '') return;
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });