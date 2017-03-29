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
	$stateProvider.state('zc', {
			url: "/zc",
			templateUrl: "views/zhuce.html"
	})
	.state('login', {
			url: "/login",
			templateUrl: "views/login.html"
	})
	.state('index', {
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
			url: "/chakan1/:ccc",
			templateUrl: "views/chakan1.html"
	})

	.state("guanli", {
			url: "/guanli",
			templateUrl: "views/zxxgl_bm.html"
	})
	.state("gonggao", {
			url: "/gonggao",
			templateUrl: "views/zxxgl_gg.html"
	})
	.state("tianjiabm", {
			url: "/tianjiabm",
			templateUrl: "views/zxxgl_tjbm.html"
	})
	.state("tianjiagg", {
			url: "/tianjiagg",
			templateUrl: "views/zxxgl_tjgg.html"
	})
	.state("jiben", {
			url: "/jiben",
			templateUrl: "views/ql_jbzl.html"
	})
	$urlRouterProvider.when("", "/login")

 							
}])
