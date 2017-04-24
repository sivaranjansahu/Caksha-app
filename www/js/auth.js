//Google scopes - https://developers.google.com/identity/protocols/googlescopes
//myConfig - Angular constants
(function(firebase) {
'use strict';

    angular.module('starter.auth', [])
        .factory('Auth', Auth);

    Auth.$inject = ['$cordovaOauth'];
    function Auth($cordovaOauth) {
        
        return {
            login : function () {
                if(ionic.Platform.isWebView()){
                    return $cordovaOauth.facebook('158543768008352' + '&include_profile=true', ["email", "profile"]).then(function (result) {
                        var credential = firebase.auth.FacebookAuthProvider.credential(result.id_token);
                        return firebase.auth().signInWithCredential(credential);
                    });
                }
                else{
                    var provider = new firebase.auth.FacebookAuthProvider();
                    provider.addScope('email');
                    provider.addScope('profile');
                    return firebase.auth().signInWithPopup(provider);
                }
            }
        };
    }
})(firebase);