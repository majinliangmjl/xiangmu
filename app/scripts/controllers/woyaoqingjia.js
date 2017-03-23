angular.module("shop2App").controller('woyaoqingjia', ['$scope','$http','$location', function($scope,$http,$location){
            $scope.Submit=function(){
                 $http({
                 	 url:"http://47.88.16.225:412/qingjia",
                 	 method:"post",
                 	 data:{
                 	 	"leixing":$scope.qjlx,"shijian1":$scope.riqi,"shijian2":$scope.tianshu,"shiyou":$scope.shiyou,"shenpiren":$scope.shenpiren,"uid":$scope.qjr,"zhuangtai":"未处理"
                 	 }
                 }).then(function(e){
                      $scope.data=e.data
                      console.log($scope.data)
                      $location.url("/qj")
                 })
            }
}])