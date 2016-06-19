


angular.module('feedApp', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })




.controller('feedList', function ($scope, $http, $location) {

  $http.get('../content/content.json')
    .success(function (data) {
      // The json data will now be in scope.


      $scope.feed = data.rss.channel.item;
      //$scope.myJsonData = data.rss.channel.item[0].title.__cdata;

    });


  /*$scope.feed = [
    {id: 0},
    {id: 1},
    {id: 2}
  ]*/

  $scope.bt_home = function () {

    var url = $location.path();
    alert(url);
  }
})





