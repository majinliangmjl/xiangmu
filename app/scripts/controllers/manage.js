angular.module('shop2App')
	.controller('manage',['$scope','$location',"$http",function($scope,$location,$http){
		$scope.isshow=true
		$scope.zyx="../images/zy_1x.jpg"
	      $scope.img=function(){
	          	if ($scope.isshow) {
	          		$scope.zyx="../images/zyx1.png"
	          		$scope.isshow=false
	          	} else{
	          		$scope.zyx="../images/zy_1x.jpg"
	          		
	          		$scope.isshow=true
	          	}
	      }
//	      $scope.shangchuan=function(){
	      $http({
	      	url:"http://47.88.16.225:412/baoxiu",
	      	method:"get",
//	      	data:{
//	      		"uid":$scope.uid , "shouji":$scope.shouji,"zhuzhi":$scope.zhuzhi ,"xiangqing":$scope.xiangqing,"zhuangtai":$scope.zhuangtai
//	      	}
	      }).then(function(e){
	      		$scope.data=e.data
	      		console.log($scope.data)
	      })
	
//	      }
	}]);