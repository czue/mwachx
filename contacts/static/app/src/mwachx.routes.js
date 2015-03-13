(function(){
  'use strict';

  var routePrefix = '/static/app/';

  // Setup the routes for the 'mwachx' module
  angular.module('mwachx')
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        
        // Redirect to home in case we get lost
        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('home', {
            url:          '/',
            templateUrl:  routePrefix + 'src/components/home/homePartial.html',
            controller:   'HomeController'
          })

          // Participant state and substates
          .state('participant', {
            url:          '/participant',
            templateUrl:  routePrefix + 'src/components/participant/participantListPartial.html',
            controller:   'ParticipantListController'
          })
          .state('participantNew', {
            url:          '/participant/new',
            templateUrl:  routePrefix + 'src/components/participant/participantNewPartial.html',
            controller:   'ParticipantNewController'
          })
          .state('participantDetails', {
            url:          '/participant/:study_id',
            templateUrl: routePrefix  + 'src/components/participant/participantPartial.html',
            controller:  'ParticipantController'
          });
      }]);

})();