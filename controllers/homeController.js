myApp.controller('homeCtrl', function ($scope, ContactService){
  $scope.contacts = ContactService.getContacts();

 

})