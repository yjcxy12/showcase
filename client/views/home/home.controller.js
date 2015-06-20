'use strict';

angular.module('showcase')
  .controller('HomeCtrl', function ($state, Auth, Post) {

    var vm = this;

    Auth.isReadyLogged()
    .then(function () {
      Post.getPosts()
      .then(function (res) {
        vm.postList = res;
      });
    })
    .catch(function () {
      $state.go('signup');
    });

    
    return vm;
  });
