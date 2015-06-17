'use strict';

angular.module('showcase')
  .controller('NavbarCtrl', function ($location) {

    var vm = this;

	vm.changeUrl = function (url) {
		$location.path('/' + url);
	};

	return vm;

  });
