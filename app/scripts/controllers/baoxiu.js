angular.module('shop2App')
	.controller('baoxiu',['$scope','$location',"$http",function($scope,$location,$http){
	     $scope.zyx_bc=function(){
	     	    $http({
	      	url:"http://47.88.16.225:412/baoxiu",
	      	method:"post",
	      	data:{
	      		"uid":$scope.xingming , "shouji":$scope.tel,"zhuzhi":$scope.num ,"xiangqing":$scope.xiangqing,"zhuangtai":"未处理"
	      	}
	      	
	      }).then(function(e){
	      		$scope.data=e.data
	      		$location.url("/manage")
	      })
	     }
	}]);