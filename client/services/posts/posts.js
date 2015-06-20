'use strict';

angular.module('showcase')
  .service('Post', function ($q, $http) {

    this.getPosts = function () {
      var def = $q.defer();

      $http.get('/api/post/getPosts')
        .then(function (res) {
          def.resolve(res.data);
        })
        .catch(function (err) {
          def.reject(err.data);
        });
      return def.promise;
    };
    
});
