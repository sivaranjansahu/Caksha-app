//This directive takes a uid and shows media object for the user
angular.module('starter.directives', [])
.directive('resourceDisplay', function($state) {
    return {
      restrict: 'E',
      scope:{resource:"="},
      replace: true,
      template:"<div ng-include='myTemplate'></div>",
      link: function(scope){
        scope.getIframeSrc = function (videoId) {
  return 'https://www.youtube.com/embed/' + videoId;
};
            var templateToUse = 'templates/partials/other.tpl.html';
          scope.$watch ('resource', function (newVal) {
            if (newVal && newVal.siteDomain == 'www.youtube.com') {
                templateToUse ='templates/partials/youtube.tpl.html';
              } else if (newVal && newVal.siteDomain == 'codepen.io') {
                templateToUse= '../Templates/radio.html';
              } 
              else if (newVal && newVal.siteDomain == 'github.com') {
                templateToUse= 'templates/partials/github.tpl.html';
              }else{
                templateToUse= 'templates/partials/blog.tpl.html';
              }
              scope.myTemplate = templateToUse;
            }
          )},
             
              
    };
});