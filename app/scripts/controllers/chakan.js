angular.module('shop2App')
	.controller('chakan',['$scope','$location',"$http","$stateParams",function($scope,$location,$http,$stateParams){
	   var id=$stateParams.aaa
	       console.log(id) 
	      	  $http({
	      	  	 url:"http://47.88.16.225:412/baoxiu/"+id,
	      	  	 method:"get"
	      	  }).then(function(e){
	      	  	 $scope.data=e.data
	 	 
	 
	      	  	  console.log($scope.data)
	      	  })
	     
	     $scope.tongyi=function(){
	     	  	  $http({
	      	  	 url:"http://47.88.16.225:412/baoxiu/"+id,
	      	  	 method:"put",
	      	  	 data:{
	      	  	 	"zhuangtai":"已处理"
	      	  	 }
	      	  }).then(function(e){
	      	  	 $scope.data=e.data
	      	  	 $location.url("/manage")
	      	  	  console.log($scope.data)
	      	  })
	     }
	
	     
	}]);