'use strict';

angular.module('showcase')
  .controller('SignupCtrl', function ($location, Auth) {

    var vm = this;

    angular.extend(vm, {

      /**
       * User credentials
       */
      user: { email: '', password: '' },

      /**
       * Signup
       */
      signup: function () {
        Auth.signup(vm.user)
          .then(function () {
            $location.path('/');
          })
          .catch(function (err) {
            vm.error = err;
          });
      }

    });

  });
