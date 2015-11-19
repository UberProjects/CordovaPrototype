angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.ride', {
      url: '/ride-form',
      views: {
        'tab1': {
          templateUrl: 'templates/ride.html',
          controller: 'rideCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.friends', {
      url: '/friends',
      views: {
        'tab2': {
          templateUrl: 'templates/friends.html',
          controller: 'friendsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.account', {
      url: '/account',
      views: {
        'tab3': {
          templateUrl: 'templates/account.html',
          controller: 'accountCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signUp', {
      url: '/register',
      templateUrl: 'templates/signUp.html',
      controller: 'signUpCtrl'
    })
        
      
    
      
        
    .state('groups', {
      url: '/groups',
      templateUrl: 'templates/groups.html',
      controller: 'groupsCtrl'
    })
        
      
    
      
        
    .state('tabsController.current', {
      url: '/current',
      views: {
        'tab5': {
          templateUrl: 'templates/current.html',
          controller: 'currentCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});