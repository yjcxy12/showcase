'use strict';

angular.module('showcase')
  .controller('NavbarCtrl', function ($state) {

    var vm = this;

	vm.changeUrl = function (state) {
		$state.go(state);
	};

	return vm;

  });
