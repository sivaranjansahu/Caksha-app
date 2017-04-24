// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives',
'starter.filters','ngCordova','youtube-embed','firebase','ngCordova','ngCordovaOauth','ngOpenFB'])

.run(function($ionicPlatform,ngFB) {
  ngFB.init({
    appId: '158543768008352',
    tokenStore: window.localStorage
});
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

     .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.courses', {
    url: '/courses',
    views: {
      'menuContent': {
        templateUrl: 'templates/courses.html',
        controller: 'CoursesCtrl'
      }
    }
  })

  .state('app.coursedetail', {
    url: '/courses/:courseID',
    views: {
      'menuContent': {
        templateUrl: 'templates/coursedetail.html',
        controller: 'courseDetailCtrl'
      }
    }
  })
  .state('app.chapterdetail', {
    url: '/courses/:courseID/:chapterID',
    views: {
      'menuContent': {
        templateUrl: 'templates/chapterdetail.html',
        controller: 'chapterDetailCtrl'
      }
    }
  })
  .state('app.resourcedetail', {
    url: '/:chapterID/:resourceID',
    views: {
      'menuContent': {
        templateUrl: 'templates/resourcedetail.html',
        controller: 'resourceDetailCtrl'
      }
    }
  })
  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })


  .state('app.login2', {
      url: '/login2',
      views: {
        'menuContent': {
          templateUrl: 'templates/log2.html',
          controller: 'AuthCtrl'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/courses');
})


.config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'https://www.youtube.com/**']);
 })

