angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams,$firebaseObject) {
  var ref = firebase.database().ref();
  
})

.controller('CoursesCtrl', function($scope, $stateParams,$firebaseObject,$firebaseArray) {
  //get all courses
  var ref = firebase.database().ref();
  $scope.courses = $firebaseArray(ref.child('courses'));
  $scope.categories=$firebaseArray(ref.child('categoories'));
  // $scope.courses.$loaded().then(function(){
  //   console.log($scope.courses);
  // })
  $scope.switchCategory=function(d){
    console.log(d);
    if(d=="All"){
      $scope.courses = $firebaseArray(ref.child('courses'));
    }else{
      $scope.courses = $firebaseArray(ref.child('courses').orderByChild('courseCategory').equalTo(d));
    }
    
  }
  
})
.controller('courseDetailCtrl', function($scope, $stateParams,$firebaseObject,$firebaseArray) {
  var ref = firebase.database().ref();
  
  $scope.course = $firebaseObject(ref.child('courses').child($stateParams.courseID));
  $scope.chapters = $firebaseArray(ref.child('chapters').orderByChild('courseID').equalTo($stateParams.courseID));
  $scope.chapters.$loaded().then(function(){
    console.log($scope.chapters);
  })
})
.controller('chapterDetailCtrl', function($scope, $stateParams,$firebaseObject,$firebaseArray) {
  var ref = firebase.database().ref();
  console.log($stateParams);
  $scope.chapter = $firebaseObject(ref.child('chapters').child($stateParams.chapterID));
  $scope.resources = $firebaseArray(ref.child('resources').orderByChild('chapterID').equalTo($stateParams.chapterID));
  $scope.chapter.$loaded().then(function(){
    $scope.course=$firebaseObject(ref.child('courses').child($scope.chapter.courseID));
  })
  
})
.controller('resourceDetailCtrl', function($scope, $stateParams,$firebaseObject) {
  var ref = firebase.database().ref();
  var res=  $firebaseObject(ref.child('resources').child($stateParams.resourceID));
  res.$loaded().then(function(data){
    $scope.resource=data;
  })
  $scope.getIframeSrc = function (videoId) {
  return 'https://www.youtube.com/embed/' + videoId;
};
})
