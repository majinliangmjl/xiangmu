angular.module('shop2App')
	.controller("zxx_bm", ["$scope", "$http", "$state",function($scope, $http,$state) {

		$scope.zxx_sq = function() {
			$scope.zxx_ul = !$scope.zxx_ul;
		}
		$http({
			url: "http://47.88.16.225:412/zhiwei",
			method: 'get'
		}).then(function(reqs) {
			$scope.zhicheng = reqs.data
		}, function() {})
		$scope.zxx_tjbm_zw="";
		$scope.zxx_tjbm_zwms="";
		$scope.zhicheng=[];
		
		$scope.zxx_tjbm = function() {
			
			if($scope.zxx_tjbm_zw=="" || $scope.zxx_tjbm_zwms==""){
				alert("请填写信息")
			}else{
				$http({
				url: "http://47.88.16.225:412/zhiwei",
				method: 'post',
				data: {
					zhiwei: $scope.zxx_tjbm_zw,
					miaoshu: $scope.zxx_tjbm_zwms
				}
			}).then(function(reqs) {
				$state.go("guanli") 
			}, function() {})
			}

		}
        
		$http({
			url: "http://47.88.16.225:412/zhiwei",
			method: 'get'
		}).then(function(reqs) {
			$scope.zhicheng = reqs.data
		}, function() {})
		
		$scope.zx_remove=function($index){
			$http({
			url: "http://47.88.16.225:412/zhiwei/"+$scope.zhicheng[$index].id,
			method: 'delete'
		}).then(function(reqs) {
			$scope.zhicheng.splice($index,1)
		}, function() {})
		}
	}])
	
//	  公告
	.controller("zxx_gg", ["$scope", "$http","$state","$timeout", function($scope, $http,$state,$timeout) {
		$scope.shangxia=true;

		$scope.zxx_sq = function() {
			if($scope.shangxia){
				$scope.shangxia=false;
			}else{
				$scope.shangxia=true;
			}

			$scope.zxx_ul = !$scope.zxx_ul
		}
		$http({
			url: "http://47.88.16.225:412/gonggao",
			method: 'get'
		}).then(function(reqs) {
			$scope.products = reqs.data
		}, function() {})
		$scope.zxx_tjgg_ms="";
		$scope.zxx_tjgg_nc="";
		$scope.zxx_tjgg = function() {
			
			if($scope.zxx_tjgg_ms==""||$scope.zxx_tjgg_nc==""){
				alert("请输入内容")
			}else{
				$http({
				url: "http://47.88.16.225:412/gonggao",
				method: 'post',
				data: {
					biao: $scope.zxx_tjgg_nc,
					xiangqing: $scope.zxx_tjgg_ms,
					shijian:(new Date()).getTime()
				}
			}).then(function(reqs) {
				$state.go("gonggao")
			}, function() {})
			}
		}
		
		$http({
			url: "http://47.88.16.225:412/gonggao",
			method: 'get'
		}).then(function(reqs) {
			$scope.products = reqs.data
		}, function() {})
		
		$scope.products=[];
		$scope.zx_remove=function($index){
			$http({
			url: "http://47.88.16.225:412/gonggao/"+$scope.products[$index].id,
			method: 'delete'
		}).then(function(reqs) {
			$scope.products.splice($index,1)
		}, function() {})
			
		}
	}])