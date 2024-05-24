import * as angular from "angular"
import { StateProvider, Ng1StateDeclaration, UrlRouterProvider } from "@uirouter/angularjs"

export const routing = (
	$locationProvider: angular.ILocationProvider,
	$stateProvider: StateProvider,
	$urlRouterProvider: UrlRouterProvider
) => {
	"ngInject";

	$locationProvider.html5Mode({
		enabled: false,
	});

	$stateProvider
	.state("home", <Ng1StateDeclaration>{
		url: "/home",
		views: {
			"content@": { template: "<movielist></movielist>" },
		},
	})
	.state("movieedit", <Ng1StateDeclaration>{
		url: "/movieedit/{id:int}",
		views: {
			"content@": { template: "<movielistedit></movielistedit>" },
		}
	})
	.state("moviecreate", <Ng1StateDeclaration>{
		url: "/movieedit",
		views: {
			"content@": { template: "<movielistedit></movielistedit>" },
		}
	})
	;

	$urlRouterProvider.otherwise("/home");
};

routing.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];