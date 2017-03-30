 angular.module('shop2App')
.controller("grxx",["$scope","$http","$state",function($scope,$http,$state){
	laydate({
	  elem: '#test1', //目标元素。由于laydate.js封装了一个轻量级的选择器引擎，因此elem还允许你传入class、tag但必须按照这种方式 '#id .class'
	  event: 'focus' //响应事件。如果没有传入event，则按照默认的click
	});
	$(".tjxx input").click(function(){
		$(this).css("background","#fff")
	})
	$scope.user=""
	$scope.sex=""
	$scope.email=""
	$scope.phone=""
	$scope.sr=""
	$scope.qq=""
	$scope.dz=""
	$scope.srr1 = function(){
			var nut = setInterval(function(){
				var sr = $("#test1").val()
				
				$scope.sr = sr
				//				console.log($scope.sr)
			},30)
			
	}
	$scope.tjxx = function(){
		
		if($scope.user == "" || $scope.sex == "" || $scope.qq == "" || $scope.dz ==""){
			$(".bnwk").css("display","block")
			setInterval(function(){
				$(".bnwk").css("display","none")
			},1000)
		}else{
			
     		$http({
		     method:'post',
		     url: "http://47.88.16.225:412/users/"+localStorage.uid,
		     data:{
		     	xingming:$scope.user,
		     	xingbei:$scope.sex,
		     	shengri:$scope.sr,
		     	youxiang:$scope.email,
		     	shoujihao:$scope.phone,
		     	qq:$scope.qq,
		     	zhuzhi:$scope.dz,
		     	uid:localStorage.uid
	     	}
		     }).then(function(e){
				console.log(e.data)
				
				alert("cg")
				
		    },function(){
//		     	alert('error')		     	
		    })
     
		}
	}
	$scope.qq2 = function(){
		var qqyz = /^[1-9]\d{4,11}$/
		var tel = $("#qq").val()	
		if(!qqyz.test(tel)){
			$scope.qq3 = true
		}else{
			$scope.qq3 = false
		}
					
	}
	
	$scope.p = function(){
		var tel = $("#pssj").val()	
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
}])