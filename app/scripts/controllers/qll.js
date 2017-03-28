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
//   		alert('请输入用户名和密码')
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
					$('.dl').css({"opacity":"1","top":"1rem"})
					$('.row').html('登录成功')
					localStorage.id=4;
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
//   		alert('请输入用户名和密码')   
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
				localStorage.clear();
				$('.dl').css({"opacity":"1","top":"1rem"})
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

	/*资料修改*/

	$scope.loginName="七年";
	$scope.loginNan="男";
	$scope.loginSheng="1998-02-03";
	$scope.loginTel='15225505963';
	$scope.loginEmail='958488568@qq.com';	
	$scope.xm='';$scope.nan='';$scope.sr='';$scope.yx='';
	$scope.sjh='';$scope.qqh='';$scope.zhuzhi='';
    $scope.zlxg=function(){
//  	alert(1);
		$('.xgzl').blur();
		tot2 = 0;
		$('.xgzl').each(function(){
			tot2+=$(this).data('s')	
		})	
//		alert(tot2)
		if(tot2!=5){
			alert('有错误')
			return false
		}
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
				$('.dl').css({"opacity":"1","top":"8.5rem"})
				$('.row').html('修改成功')
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
    
    /*退出当前账户*/
   $scope.tuichu=function(){
	  $('.dl').css({"opacity":"1","top":"1rem"})
		$('.row').html('退出成功')
		  localStorage.clear();
		$('.zhezao').css({"display":"block","height":"32rem"})
		setTimeout(function () {
			$('.dl').css({"opacity":"0","top":"-30px"})
			$('.zhezao').css({"display":"none"})
		    $state.go("login");
		},1800);
   }
    
   $scope.fan=function(){
     	localStorage.id=4
     	$state.go('zc')
   } 
    
   if(localStorage.id!=4){
   		$state.go('login')
   }
    
   $scope.a = function(){
   		alert(1)
		$http({
			url: "http://47.88.16.225:412/touxiang",
			method:'get'
		}).then(function(reqs) {
			 $scope.touxian = reqs.data
			 console.log(reqs.data)	
			 $('.sctp').css({"transform":"translateY(5.7rem)"})
		}, function() {
					console.log("请求失败")
		})
	}
    
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


.controller('tx', ["$scope","$http","$state",function ($scope,$http,$state) {
 /*头像修改*/
var Ainput = document.getElementById("demo_input"); 
//			var result= document.getElementById("result"); 
//			var img_area = document.getElementById("img_area"); 
			if ( typeof(FileReader) === 'undefined' ){ 
			result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！"; 
			Ainput.setAttribute( 'disabled','disabled' ); 
			} else { 
			Ainput.addEventListener('change',readFile,false );} 
			 
			function readFile(){ 
			var file = this.files[0]; 
			//这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件 
			if(!/image\/\w+/.test(file.type)){ 
				alert("请确保文件为图像类型"); 
				return false; 
			} 
			var reader = new FileReader(); 
			reader.readAsDataURL(file); 
			reader.onload = function(e){ 
//			result.innerHTML = '<img src="'+this.result+'" alt=""/>'; 
			//img_area.innerHTML = '<div class="sitetip">图片img标签展示：</div><img src="'+this.result+'" alt=""/>'; 
			$scope.img = this.result;
			
			$http({
			url: "http://47.88.16.225:412/touxiang",
			method:'post',
			data:{
				base : $scope.img,
				}
			}).then(function(reqs) {
					alert("ok")
					 console.log(reqs)
					 
			}, function() {
					console.log("请求失败")
			})
		
			}
		} 
   

}])