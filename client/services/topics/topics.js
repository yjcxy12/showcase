'use strict';

angular.module('showcase')
  .service('Topic', function ($q, $http) {

    this.getTopicList = function () {
      var def = $q.defer();

      $http.get('/api/topic/getAll')
        .then(function (res) {
          def.resolve(res.data);
        })
        .catch(function (err) {
          def.reject(err.data);
        });
      return def.promise;
    };
    
});
