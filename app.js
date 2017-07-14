var myApp = angular.module('myApp', ['ngRoute'])

//ng-route config
.config(function ($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'views/default.html',
    })
    .when('/contact-info/:contact_index', {
      templateUrl: 'views/contact_info.html',
      controller: 'contactInfoCtrl'
    })
    .when('/add', {
      templateUrl: 'views/contact_form.html',
      controller: 'addContactCtrl'
    })
    .when('/edit/:contact_index', {
      templateUrl: 'views/contact_form.html',
      controller: 'editContactCtrl'
    })
    .otherwise({redirectTo: '/home'});
})

// controllers
// .controller('navCtrl', function ($scope) {
//   $scope.nav = {
//     navItems: ['home', 'add'],
//     selectedIndex: 0,
//     navClick: function ($index) {
//       $scope.nav.selectedIndex = $index;
//     }
//   };
// })

// .controller('homeCtrl', function ($scope, ContactService){
//   $scope.contacts = ContactService.getContacts();

 

// })

// .controller('contactInfoCtrl', function ($scope, $routeParams){
//   var index = $routeParams.contact_index;
//   $scope.currentContact = $scope.contacts[index];
// })

// .controller('addContactCtrl', function ($scope, $location) {
//   //needed to show the correct button on the contact form
//   $scope.path = $location.path();

//   $scope.addContact = function () {
//     var contact = $scope.currentContact;
//     contact.id = $scope.contacts.length;
//     $scope.contacts.push(contact);
//   };

// })

// .controller('editContactCtrl', function ($scope, $routeParams){
//   $scope.index = $routeParams.contact_index;
//   $scope.currentContact = $scope.contacts[$scope.index];
// })

// // directives
// .directive('contact', function () {
//   return {
//     restrict: 'E',
//     replace: true,
//     templateUrl: 'views/contact.html'
//   }
// })

// services
// .factory('ContactService', [function () {
//   var factory = {};

//   factory.getContacts = function () {
//     return contactList;
//   }

//   // contact list, usually would be a separate database
//   var contactList = [
//     {firstName: "Joe", lastName: 'Perry', contactEmail: 'joe@cordis.us', contactNumber: '123-456-7890'},
//     {firstName: "Kate", lastName: 'Will', contactEmail: 'kate@cordis.us', contactNumber: '123-456-7890'},
//     {firstName: "Harry", lastName: 'Robert', contactEmail:'harry@cordis.us', contactNumber: '123-456-7890'},
//     {firstName: "Tom", lastName: 'Bill', contactEmail: 'tom@cordis.us', contactNumber: '123-456-7890'},
//     {firstName: "Roger", lastName: 'Steel', contactEmail: 'roger@cordis.us', contactNumber: '123-456-7890'}
   
//   ];

  
//   return factory;
// }]);

