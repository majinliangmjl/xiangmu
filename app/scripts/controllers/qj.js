angular.module("shop2App").controller('zyqj', ['$scope','$http','$stateParams', function($scope,$http,$stateParams){
	$scope.zybool=true;
	 	$scope.zy_img="images/zy-1.jpg"
	$scope.zy_xiala=function(){
       if ($scope.zybool) {
              	$scope.zy_img="images/zy-2.png"

       	   $scope.zybool=false;
       }else{
       		$scope.zy_img="images/zy-1.jpg"
       	$scope.zybool=true;
       }
	} 

                 $http({
                 	 url:"http://47.88.16.225:412/qingjia",
                 	 method:"get"
                 }).then(function(e){
                      $scope.data=e.data
                      console.log($scope.data)
                 })


}])