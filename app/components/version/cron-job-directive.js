'use strict';

angular.module('myApp.version.cron-job-directive', [])

.directive('cronJob', ['version', function(version) {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'components/version/cron_job.html'
  };

}])
.directive('cronJobEdit', ['version', function(version) {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'components/version/cron_job_edit.html'
  };

}])
.factory('Job', ['$http', '$q', function($http, $q) {
  var deffered = $q.defer();
  var data = [];
  var jobService = {};

  jobService.async = function() {
    $http.get('components/version/jobs.json')
    .success(function (d) {
      data = d;
      console.log(d);
      deffered.resolve();
    });
    return deffered.promise;
  };
  jobService.data = function() { return data; };

  return jobService;
}]);

