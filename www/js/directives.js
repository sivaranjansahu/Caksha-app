//This directive takes a uid and shows media object for the user
angular.module('starter.directives', [])
.directive('resourceDisplay', function($state) {
    return {
      restrict: 'E',
      scope:{resource:"="},
      replace: true,
      template:"<div ng-include='myTemplate'></div>",
      link: function(scope){
            var templateToUse = 'templates/partials/other.tpl.html';
          scope.$watch ('resource', function (newVal) {
            if (newVal.siteDomain == 'www.youtube.com') {
                templateToUse ='templates/partials/youtube.tpl.html';
              } else if (newVal.siteDomain == 'codepen.io') {
                templateToUse= '../Templates/radio.html';
              } 
              else if (newVal.siteDomain == 'github.com') {
                templateToUse= 'templates/partials/github.tpl.html';
              } 
              scope.myTemplate = templateToUse;
            }
          )},
             
              
    };
});