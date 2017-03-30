angular.module('shop2App')
	.controller("zxx_bm", ["$scope", "$http", "$state", function($scope, $http, $state) {
		//点击图片翻转
		$scope.shangxia = true;
		$scope.zxx_sq = function() {
			$scope.zxx_ul = !$scope.zxx_ul;
			if($scope.shangxia) {
				$scope.shangxia = false;
			} else {
				$scope.shangxia = true;
			}
		}
		//获取服务器传送数据
		$http({
			url: "http://47.88.16.225:412/zhiwei",
			method: 'get'
		}).then(function(reqs) {
			$scope.zhicheng = reqs.data
		}, function() {})

		//向服务器传送数据  弹窗 
		$scope.zxx_tjbm_zw = "";
		$scope.zxx_tjbm_zwms = "";
		$scope.zxx_sr = true;
		$scope.zxx_tjbm = function() {
			if($scope.zxx_tjbm_zw == "" || $scope.zxx_tjbm_zwms == "") {
				$scope.zxx_sr = false;
			} else {
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

		$scope.zxx_xs = function() {
			$scope.zxx_sr = true
		}

		$http({
			url: "http://47.88.16.225:412/zhiwei",
			method: 'get'
		}).then(function(reqs) {
			$scope.zhicheng = reqs.data
		}, function() {})

		$scope.zx_remove = function($index) {
			$http({
				url: "http://47.88.16.225:412/zhiwei/" + $scope.zhicheng[$index].id,
				method: 'delete'
			}).then(function(reqs) {
				$scope.zhicheng.splice($index, 1)
			}, function() {})
		}
	}])

	//	  公告
	.controller("zxx_gg", ["$scope", "$http", "$state", "$timeout", function($scope, $http, $state, $timeout) {
		$scope.shangxia = true;
		$scope.zxx_sq = function() {
			$scope.zxx_ul = !$scope.zxx_ul;
			if($scope.shangxia) {
				$scope.shangxia = false;
			} else {
				$scope.shangxia = true;
			}
		}
		$http({
			url: "http://47.88.16.225:412/gonggao",
			method: 'get'
		}).then(function(reqs) {
			$scope.products = reqs.data
		}, function() {})
		$scope.zxx_tjgg_ms = "";
		$scope.zxx_tjgg_nc = "";

		$scope.zxx_sr = true;
		$scope.zxx_tjgg = function() {
			if($scope.zxx_tjgg_ms == "" || $scope.zxx_tjgg_nc == "") {
				$scope.zxx_sr = false
			} else {
				$http({
					url: "http://47.88.16.225:412/gonggao",
					method: 'post',
					data: {
						biao: $scope.zxx_tjgg_nc,
						xiangqing: $scope.zxx_tjgg_ms,
						shijian: (new Date()).getTime()
					}
				}).then(function(reqs) {
					$state.go("gonggao")
				}, function() {})
			}
		}
		$scope.zxx_xs = function() {
			$scope.zxx_sr = true
		}

		$http({
			url: "http://47.88.16.225:412/gonggao",
			method: 'get'
		}).then(function(reqs) {
			$scope.products = reqs.data
		}, function() {})

		$scope.products = [];
		$scope.zx_remove = function($index) {
			$http({
				url: "http://47.88.16.225:412/gonggao/" + $scope.products[$index].id,
				method: 'delete'
			}).then(function(reqs) {
				$scope.products.splice($index, 1)
			}, function() {})

		}
		$scope.zxx_zhuzhi = "";
		$scope.zxx_phone = "";
		$scope.zxx_name = "";
		$scope.zxx_nr = "";
		$scope.zxx_rs = true
		$scope.zxx_fw = function() {
			if($scope.zxx_zhuzhi == "" || $scope.zxx_phone == "" || $scope.zxx_name == "" || $scope.zxx_nr == "") {
				alert('请输入内容')
			} else {
				$http({
					url: "http://47.88.16.225:412/zhuhu",
					method: 'post',
					data: {
						dizhi: $scope.zxx_zhuzhi,
						dianhua: $scope.zxx_phone,
						xingming: $scope.zxx_name,
						neirong: $scope.zxx_nr,
						shijian: (new Date()).getTime(),
						zt: "2"
					}
				}).then(function(reqs) {
					$scope.zxx_zhuzhi = "";
					$scope.zxx_phone = "";
					$scope.zxx_name = "";
					$scope.zxx_nr = "";
					$('.dl').css({"opacity":"1","top":"1rem"});
					$('.row').html('已提交，请耐心等待服务人员');			
					$('.zhezao').css({"display":"block"});
					setTimeout(function () {
					    $(".dl").css({"opacity":"0"});
					    $('.row').html('');
					    $('.zhezao').css({"display":"none"});
					},2000);
					

				}, function() {})
			}
		}
		
	}])