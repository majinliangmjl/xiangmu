angular.module('shop2App')
	.controller("productController",["$scope","$http",function($scope,$http){
    
		$http({
				url: "http://47.88.16.225:412/xiangqing",
				method:'get'
		}).then(function(reqs) {
				$scope.products = reqs.data
				 console.log(reqs.data)
			
		}, function() {
				console.log("请求失败")
		})
		$scope.products = []
		$scope.delete = function($index){
			
			$http({
				url: "http://47.88.16.225:412/xiangqing/"+$scope.products[$index].id,
				method:'delete'			
			}).then(function(reqs){
				$scope.products.splice($index,1)
			},function(){
				
			})
		}
}])

