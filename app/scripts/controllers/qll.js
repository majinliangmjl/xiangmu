angular.module('shop2App')
.controller('qll', ["$scope","$http","$state","$stateParams",function ($scope,$http,$state,$stateParams) {
     $scope.wdzy=function(){
     	$scope.isred=!$scope.isred;
     }
     $scope.q_xl=function(){
     	$scope.isred2=!$scope.isred2;
     }
     $scope.q_xl2=function(){
     	$scope.isred3=!$scope.isred3;
     }
     
     
     $scope.uname='';
     $scope.pass='';

     $scope.qfn=function(){
     	if($scope.uname=='' || $scope.pass==''){
     		alert('请输入用户名和密码')
     	}else{
     	
     		$http({
	     		method:'post',
	     		url:'http://47.88.16.225:412/users/login',
	     		data:{
	     			username:$scope.uname,password:$scope.pass
	     		}
	     	}).then(function(e){
//	     		alert('登录成功')
	     		$scope.data=e.data					
					$('.dl').css({"opacity":"1","top":"15px"})
					$('.row').html('登录成功')
					$('.zhezao').css({"display":"block"})
					setTimeout(function () {
					    $(".dl").css({"opacity":"0"})
					    $('.row').html('')
					    $('.zhezao').css({"display":"none"})
					    $state.go('index')
					},2000);
//				console.log(e)
				localStorage.loginID=$scope.data.id
	
	     	},function(){
	     		alert('登录失败')
	     	})
     	}
     	
     }

     $scope.zc=function(){
//   	var res = verifyCode.validate(document.getElementById("code_input").value);

     	$('.abc').blur();
			tot = 0;
		$('.abc').each(function(){
			tot+=$(this).data('s')
		})	
//			alert(tot)
		if(tot!=2){
			alert('资料不完整')
				return false
		}
//		if(res){
////			alert("验证正确");
//		}else{
//			alert("信息有误");
//			return
//		}
     	if($scope.name=='' || $scope.pass==''){
     		alert('请输入用户名和密码')   
     	}else{
     		$http({
	     		method:'post',
	     		url:'http://47.88.16.225:412/users',
	     		data:{
	     			username:$scope.name,password:$scope.pass
     		}
	     	}).then(function(e){
//	     		alert('注册成功')

				$('.row').html('注册成功')
				$('.dl').css({"opacity":"1","top":"15px"})
				$('.zhezao').css({"display":"block"})
				setTimeout(function () {
					 $(".dl").css({"opacity":"0"})
					$('.zhezao').css({"display":"none"})
					$state.go('login')
				},1500);
	     		
				console.log(e)
	     	},function(){
	     		alert('注册失败')
	     	})
     	}
     }

	$scope.loginName="七年";
	$scope.loginNan="男";
	$scope.loginSheng="1998-02-03";
	$scope.loginTel='15225505963';
	$scope.loginEmail='958488568@qq.com';
	
	$scope.xm='';$scope.nan='';$scope.sr='';$scope.yx='';
	$scope.sjh='';$scope.qqh='';$scope.zhuzhi='';
    $scope.zlxg=function(){
//  	alert(1);
		if($scope.xm=='' || $scope.nan=='' || $scope.sr=='' || $scope.yx=='' || $scope.sjh=='' || $scope.qqh=='' || $scope.zhuzhi==''){
     		alert('请先填写资料')
     	}else{
     		$http({
		     method:'post',
		     url:'http://47.88.16.225:412/jibenziliao',
		     data:{
		     	xingming:$scope.xm,
		     	xingbei:$scope.nan,
		     	shengri:$scope.sr,
		     	youxiang:$scope.yx,
		     	shoujihao:$scope.sjh,
		     	qq:$scope.qqh,
		     	zhuzhi:$scope.zhuzhi,
		     	uid:localStorage.loginID
	     	}
		     }).then(function(e){
	//			console.log(e)
				$('.dl').css({"opacity":"1","top":"5rem"})
				$('.row').html('登录成功')
				$('.zhezao').css({"display":"block","height":"32rem"})
				setTimeout(function () {
					$('.dl').css({"opacity":"0","top":"-60px"})
					$('.zhezao').css({"display":"none"})
					$state.go('index')
				},1500);
				
		     },function(){
//		     	alert('error')
		     })
     	}
    	
    }   
    
    $http({
		     method:'get',
		     url:'http://47.88.16.225:412/jibenziliao'
    }).then(function(e){
//  	console.log(e)
			for (var k=0;k<e.data.length;k++) {
				if(e.data[k].uid==localStorage.loginID){
					$scope.loginQQ=e.data[k].qq;
					$scope.loginNan=e.data[k].xingbei;
					$scope.loginSheng=e.data[k].shengri;
					$scope.loginTel=e.data[k].shoujihao;
					$scope.loginName=e.data[k].xingming;
					$scope.loginEmail=e.data[k].youxiang;
					$scope.loginAdd=e.data[k].zhuzhi;		
				}
			}
	},function(){
	     	alert('error')
    })
    
}])
.controller('ds', ["$scope","$http","$state",function ($scope,$http,$state) {
  	$http({
		url: "http://47.88.16.225:412/gonggao",
		method: 'get'
	}).then(function(reqs) {
//		console.log(reqs)
		$scope.data = reqs.data
	}, function() {
		
	})
}])