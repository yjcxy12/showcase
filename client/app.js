'use strict';

angular.module('showcase', [
  'ui.router',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate'
])
  .config(function ($urlRouterProvider, $locationProvider, $httpProvider) {

    $urlRouterProvider.otherwise("/signup");

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');

  })
  .factory('authInterceptor',
  function ($rootScope, $q, $cookieStore, $location) {
    return {

      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      responseError: function (response) {
        if (response.status === 401) {
          $location.url('/');
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }

    };
  })

  .run(function ($rootScope, $state, Auth) {

    $rootScope.Auth = Auth;

    $rootScope.$on('$routeChangeStart', function (event, next) {
      Auth.isReadyLogged().catch(function () {
        if (next.authenticate) {
          $state.go('signup');
        }
      });
    });

  });
