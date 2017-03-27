angular.module('shop2App')
	.controller('daishenpi',['$scope','$location',"$http","$stateParams",function($scope,$location,$http,$stateParams){
		  
		  $scope.isshow=true
		$scope.zyx="images/zy_1x.jpg"
	      $scope.img=function(){
	          	if ($scope.isshow) {
	          		$scope.zyx="images/zyx1.png"
	          		$scope.isshow=false
	          	} else{
	          		$scope.zyx="images/zy_1x.jpg"
	          		
	          		$scope.isshow=true
	          	}
	      }
		  
		  
		  $http({
	      	url:'http://47.88.16.225:412/baoxiu?{"zhuangtai":"未处理"}',
	      	method:"get",

	      }).then(function(e){/**/
	      		$scope.data=e.data
	      		console.log($scope.data)
	      })
	
	
	     
	}])