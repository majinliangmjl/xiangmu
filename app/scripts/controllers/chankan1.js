angular.module("shop2App").controller('chakan1', ['$scope','$http','$stateParams', function($scope,$http,$stateParams){
var id=$stateParams.ccc
console.log(id)
                 $http({
                 	 url:"http://47.88.16.225:412/qingjia/"+id,
                 	 method:"get"
                 }).then(function(e){
                      $scope.data=e.data
                      console.log($scope.data)
                 })
                 $scope.tongyi=function(){
      $http({
                   url:"http://47.88.16.225:412/qingjia/"+id,
                   method:"put",
                   data:{
                     "zhuangtai":"同意"
                   }
                 }).then(function(e){
                      $scope.data=e.data
                      console.log($scope.data)
                 })
               }
}])