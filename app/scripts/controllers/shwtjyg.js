 angular.module('shop2App')
.controller("myCtrl", function($scope) {
	 $scope.email = ""
	 $scope.username = ""
	 $scope.zhiwei = ""
	 $scope.sex = ""
	 $scope.phone = ""
	 $scope.address = ""
	 $scope.user = function(){
	 	if( $scope.username == ""){
	 		$scope.sHow = true
	 	}else{
	 		$scope.sHow = false
	 	}
	 	
	 }
	 
	 $scope.emailyz = function(){
	 	var name = $("#email").val()
	 	var yx = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
	 	if($scope.email == ""){
	 		$scope.sHow2 = true
	 	}else{
	 		$scope.sHow2 = false
	 	}
	 	if(!yx.test(name)){
	 		$scope.sHow2 = true
	 	}else{
	 		$scope.sHow2 = false
	 	}
	 }
	 $scope.phone2 = function(){
	 	var phone = $("#phone").val()
	 	var phone2 = /^0{0,1}(13[4-9]|15[7-9]|15[0-2]|18[7-8])[0-9]{8}$/
	 	if($scope.phone == ""){
	 		$scope.sHow3 = true
	 	}else{
	 		$scope.sHow3 = false
	 	}
	 	
	 	if(!phone2.test(phone)){
	 		$scope.sHow3 = true
	 	}else{
	 		$scope.sHow3 = false
	 	}

	 }
    $scope.check = function(){
    	 var zhiwei = $("#xiala").val();
 		 var sex = $("#sex").val();
 		 localStorage.sex = $scope.sex
		localStorage.zhiwei = $scope.zhiwei
		localStorage.username = $scope.username
    	
    }
});