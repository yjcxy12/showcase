'use strict';

angular.module('showcase')
  .controller('HomeCtrl', function ($state, Auth) {

    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl'
    });

    Auth.isReadyLogged().catch(function () {
      $state.go('signup');
    });

    return vm;
  });
