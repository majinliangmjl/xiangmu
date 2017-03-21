angular.module('shop2App')
.controller("zxx_bm",["$scope",function($scope){
	$scope.zxx_ul=false;
	$scope.zxx_sq=function(){
		$scope.zxx_ul=!$scope.zxx_ul;
	}
}])
