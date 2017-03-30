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
     $scope.uname=localStorage.uname;
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
//				localStorage.uid = e.data.id
	     		$scope.data=e.data;	
	     		console.log(e.data);
					$('.dl').css({"opacity":"1","top":"1rem"});
					$('.row').html('登录成功');
					localStorage.uid = e.data.uid;
					localStorage.id=4;					
					$('.zhezao').css({"display":"block"});
					setTimeout(function () {
					    $(".dl").css({"opacity":"0"});
					    $('.row').html('');
					    $('.zhezao').css({"display":"none"});
					    $state.go('jiben');
					},2000);						
					
//				console.log(e)
//				localStorage.loginID=$scope.data.id
	
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
				
				localStorage.setItem('uname',$('.zc_yh').val());
				
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

//	$scope.loginName="七年";
//	$scope.loginNan="男";
//	$scope.loginSheng="1998-02-03";
//	$scope.loginTel='15225505963';
//	$scope.loginEmail='958488568@qq.com';	
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
		     url: "http://47.88.16.225:412/users/"+localStorage.uid,
		     data:{
		     	xingming:$scope.xm,
		     	xingbei:$scope.nan,
		     	shengri:$scope.sr,
		     	youxiang:$scope.yx,
		     	shoujihao:$scope.sjh,
		     	qq:$scope.qqh,
		     	zhuzhi:$scope.zhuzhi,
		     	uid:localStorage.uid
	     	}
		     }).then(function(e){
	//			console.log(e)
				
				$('.dl').css({"opacity":"1","top":"8.5rem"})
				$('.row').html('修改成功')
				$('.zhezao').css({"display":"block","height":"32rem"})
				setTimeout(function () {
					$('.dl').css({"opacity":"0","top":"-60px"});
					$('.zhezao').css({"display":"none"});
					$state.go('index');
//					localStorage.setItem('xingming',$('.xingming').val());
//					localStorage.setItem('xingbie',$('.xingbie').val());
//					localStorage.setItem('sr',$('.sr').val());
//					localStorage.setItem('dh',$('.dh').val());
//					localStorage.setItem('youxiang',$('.youxiang').val());
				},1500);
				
		    },function(){
//		     	alert('error')		     	
		    })
     }
   	
    }   
    
    $http({
		     method:'get',
		      url: "http://47.88.16.225:412/users/"+localStorage.uid,
    }).then(function(e){
		$scope.arr = e.data;
//		console.log($scope.arr)
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
 
	$http({
			url: "http://47.88.16.225:412/users/"+localStorage.uid,
			method:'get'
	}).then(function(reqs) {
		//			console.log(reqs)
					 $scope.touxian = reqs.data.base
		//			 localStorage.tx=reqs.data.base
		//			 console.log(reqs.data[0].base)	
				}, function() {
				console.log("请求失败")
			})
    
}])

/*公告展示*/
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

/*住户反映*/
.controller('zhuhu', ["$scope","$http","$state",function ($scope,$http,$state) {
	$http({
		url: "http://47.88.16.225:412/zhuhu",
		method: 'get'
	}).then(function(reqs) {
//		console.log(reqs)
		$scope.data = reqs.data
//		console.log($scope.data)
	}, function() {
		
	})
	$scope.weichuli=function(){
		  $http({
	      	url:'http://47.88.16.225:412/zhuhu?{"tz":"2"}',
	      	method:"get",

	      }).then(function(e){
	      		$scope.data=e.data
	      		console.log($scope.data)
	      })
	}
	$scope.yichuli=function(){
		  $http({
	      	url:'http://47.88.16.225:412/zhuhu?{"zt":"嫖娼"}',
	      	method:"get",

	      }).then(function(e){
	      		$scope.data=e.data
	      		console.log($scope.data)
	      })
	}
}])

/*头像修改*/
.controller('tx', ["$scope","$http","$state",function ($scope,$http,$state) {
			$http({
					url: "http://47.88.16.225:412/users/"+localStorage.uid,
					method:'get'
				}).then(function(reqs) {
		//			console.log(reqs)
					 $scope.touxian = reqs.data.base
		//			 localStorage.tx=reqs.data.base
		//			 console.log(reqs.data[0].base)	
				}, function() {
				console.log("请求失败")
			})
   
	
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
			$('.jz_b').css({"display":"block"})
			$('.zhezao').css({"display":"block"})
			$('.sctp').css({"transform":"translateY(4rem)"})
			$http({
				url:"http://47.88.16.225:412/users/"+localStorage.uid,
			method:'put',
			data:{
				base : $scope.img,
				}
			}).then(function(reqs) {
				console.log(reqs)
				$('.wenzi').html('上传成功.....')
				setTimeout(function () {
					$('.jz_b').css({"display":"none"})
					$('.zhezao').css({"display":"none"})
					$('.sctp').css({"transform":"translateY(4rem)"})
				},1000);
					$http({
						url: "http://47.88.16.225:412/users/"+localStorage.uid,
						method:'get'
					}).then(function(reqs) {
			//			console.log(reqs)
						 $scope.touxian = reqs.data.base
			//			 localStorage.tx=reqs.data.base
			//			 console.log(reqs.data[0].base)	
					}, function() {
					console.log("请求失败")
					})
				
//				alert("ok")
			}, function() {
					console.log("请求失败")
			})
		
			}
		} 
		
		
			
   

}])