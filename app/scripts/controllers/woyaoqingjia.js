angular.module("shop2App").controller('woyaoqingjia', ['$scope','$http','$location', function($scope,$http,$location){
           $scope.qjlx=""
           $scope.riqi=""
           $scope.tianshu=""
           $scope.shiyou=""
           $scope.shenpiren=""
           $scope.qjr=""
           $scope.Submit=function(){
            	if($scope.qjlx!=""&&$scope.riqi!=""&&$scope.tianshu!=""&&$scope.shiyou!=""&&$scope.shenpiren!=""&&$scope.qjr!=""){
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
                 }else{
                 	 alert("数据提交不完整")
                 }
            }
            
            
            
              $http({
                 	 url:"http://47.88.16.225:412/qingjia",
                 	 method:"get",                	
                 }).then(function(e){
                      $scope.respon=e.data
                     
                 })
}])