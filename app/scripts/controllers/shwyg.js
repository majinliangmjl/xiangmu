angular.module('shop2App')
	.controller("shgrxg",["$scope","$http",function ($scope,$http) {
			$scope.dat = [];
			 $http({
	             	method:'get',
	             	url:""
		    })
            .then(function(reqs){
             	$scope.dat = reqs.data.data
             	//alert($scope.dat)
             },function(){
             	console.log()
             })
	}])

