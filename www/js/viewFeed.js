


angular.module('feed', ['ionic'])

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




  .controller('feedView', function ($scope, $http, $location) {

    $http.get('../content/content.json')
      .success(function (data) {
        // The json data will now be in scope.

        $scope.feed = data.rss.channel.item;
        //$scope.myJsonData = data.rss.channel.item[0].title.__cdata;


        var url=$location.path();
        var feed_id= url.replace("/feedID=","");


        $scope.feedID=feed_id;
        $scope.feedUrl=data.rss.channel.item[feed_id].link.__cdata;
      });



  })





