'use strict';

angular.module('showcase')
  .directive('navBarSearch', function () {
    return {
      restrict: 'E',
      templateUrl: 'directives/nav-bar-search/nav-bar-search.html',
      link: function (scope, element, attr) {
      	element.find('input')
	      	.on('focus', function () {
	      		var group = this.closest('.input-group');
	      		angular.element(group).addClass('focus');
	      	})
	      	.on('blur', function () {
	      		var group = this.closest('.input-group');
	      		angular.element(group).removeClass('focus');
	      	});
      }
    };
  });
