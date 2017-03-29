 angular.module('shop2App')
.controller("myCtrl",["$scope","$http","$state",function($scope,$http,$state){
	 $scope.email = ""    //邮箱
	 $scope.username = "" //用户名
	 $scope.phone = ""   //手机号
	 $scope.address = "" //住址
	 $scope.sex = ""
	 $scope.zt = ""
	 $scope.zhiwei = ""
 	 $scope.user = '用户名';
 	 
   	 $scope.email = 'john.doe@gmail.com';
	$scope.p = function(){
		var tel = $("#phone").val()	
		var reg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/
	   			if($scope.phone == "" ){
					$scope.gh2 = true
				}else{
					$scope.gh2 = false
					
					if(!reg.test(tel)){
						$scope.gh5 = true
					}else{
						$scope.gh5 = false
					}
	
				}
	}
	$scope.add = function(){
			if($scope.address == ""){
				$scope.gh = true
			}else{
				$scope.gh = false
			}
	}
	
						    
   $scope.check = function(){
   	
		if($scope.user == "" || $scope.phone == "" || $scope.zt == ""|| $scope.email == "" || $scope.address == "" || $scope.sex == ""){
			
			if($scope.zhiwei == ""){
				$scope.ku = true
			}else{
				$scope.ku = false
			}
			if($scope.address == ""){
				$scope.gh = true
			}
			if($scope.phone == "" ){
					$scope.gh2 = true
			}
			
			if($scope.sex == ""){
				$scope.gh3 = true
			}else{
				$scope.gh3 = false
			}
			if($scope.zt == ""){
				$scope.gh4 = true
			}else{
				$scope.gh4 = false
			}
		}else if($scope.gh5 == false){
			$http({
				url: "http://47.88.16.225:412/xiangqing",
				method:'post',
				data:{
					uid : $scope.user,
					shouji : $scope.phone,
					zhuzhi : $scope.address,
					zhuangtai : $scope.zt,
					sex : $scope.sex
				}
			}).then(function(reqs) {
				
				$state.go("shwgr")
				 console.log(reqs)
				 
			}, function() {
				console.log("请求失败")
			})
		}
	}
}])