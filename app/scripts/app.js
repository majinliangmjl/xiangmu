'use strict';

/**
 * @ngdoc overview
 * @name shop2App
 * @description
 * # shop2App
 *
 * Main module of the application.
 */
angular.module('shop2App', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('index', {
			url: "/index",
			templateUrl: "views/index_ql.html"
	})
	.state('manage', {
			url: "/manage",
			templateUrl: "views/manage.html"
	})
	.state('chakan', {
			url: "/chakan/:aaa",
			templateUrl: "views/chakan.html"
	})
	.state('baoxiu', {
			url: "/baoxiu",
			templateUrl: "views/baoxiu.html"
	})
	.state('daishenpi', {
			url: "/daishenpi",
			templateUrl: "views/daishenpi.html"
	})

	.state('shwgr', {
			url: "/shwgr",
			templateUrl: "views/shwgr.html"
	})
	.state('shwtjyg', {
			url: "/shwtjyg",
			templateUrl: "views/shwtjyg.html"
	})

	.state('qj', {
			url: "/qj",
			templateUrl: "views/qj.html"
	})
	.state("woyaoqingjia", {
			url: "/woyaoqingjia",
			templateUrl: "views/woyaoqingjia.html"
	})
	.state("chakan1", {
			url: "/chakan1",
			templateUrl: "views/chakan1.html"
	})

	.state("guanli", {
			url: "/guanli",
			templateUrl: "views/zxx_bggl.html"
	})
	.state("gonggao", {
			url: "/gonggao",
			templateUrl: "views/zxx_gl.html"
	})
	$urlRouterProvider.when("", "/index")


}])
