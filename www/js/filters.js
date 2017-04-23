angular.module('starter.filters', [])
.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}])
.filter('replacev',function(){
    return function(d){
        return d.replace("watch?v=", "v/")
    }
    //console.log(d)
    
})