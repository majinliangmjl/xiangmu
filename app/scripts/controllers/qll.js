angular.module('shop2App')
.controller('qll', ["$scope",function ($scope) {
//	 $scope.bool=false;
//	  $scope.bool2=false;
//	  $scope.bool3=false;
//	  $scope.boox=false;
     $scope.wdzy=function(){
//   	$scope.bool=!$scope.bool;
     	$scope.isred=!$scope.isred;
     }
     $scope.q_xl=function(){
//   	$scope.bool2=!$scope.bool2;
     	$scope.isred2=!$scope.isred2;
     }
     $scope.q_xl2=function(){
//   	$scope.bool3=!$scope.bool3;
     	$scope.isred3=!$scope.isred3;
     }
//   $scope.q_xlt=function(){
//   	$scope.boox=!$scope.boox;
//   }
    
  
     
  }]);