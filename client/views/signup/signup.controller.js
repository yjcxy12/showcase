'use strict';

angular.module('showcase')
  .controller('SignupCtrl', function ($location, Auth, Topic) {

    var vm = this;

    angular.extend(vm, {

      /**
       * User credentials
       */
      user: { email: '', password: '' },

      topics: [],

      isSignin: false,

      signup: function () {
        Auth.signup(vm.user)
          .then(function () {
            $location.path('/');
          })
          .catch(function (err) {
            vm.error = err;
          });
      },

      signin: function () {
        Auth.login(vm.user)
          .then(function () {
            $location.path('/');
          })
          .catch(function (err) {
            vm.error = err;
          });
      },

      topicUrl: function (topic) {
        return topic.toLowerCase().replace(/\s/g, '_');
      }

    });

    Topic.getTopicList().then(function (res) {
      vm.topics = (res);
    });

  });
