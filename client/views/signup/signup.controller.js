'use strict';

angular.module('showcase')
  .controller('SignupCtrl', function ($state, Auth, Topic) {

    var vm = this;

    angular.extend(vm, {

      /**
       * User credentials
       */
      user: { email: '', username: '', password: '' },

      topics: [],

      isSignin: false,

      signup: function () {
        Auth.signup(vm.user)
          .then(function () {
            $state.go('home');
          })
          .catch(function (err) {
            vm.error = err;
          });
      },

      signin: function () {
        Auth.login(vm.user)
          .then(function (res) {
            $state.go('home');
          })
          .catch(function (err) {
            vm.isSignin = true;
            vm.error = err;
            $state.go('signup');
            console.log(err.message);
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
