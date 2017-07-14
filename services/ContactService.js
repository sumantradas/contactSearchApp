// services
myApp.factory('ContactService', [function () {
  var factory = {};

  factory.getContacts = function () {
    return contactList;
  }

  // contact list, usually would be a separate database
  var contactList = [
    {firstName: "Joe", lastName: 'Perry', contactEmail: 'joe@cordis.us', contactNumber: '123-456-7890'},
    {firstName: "Kate", lastName: 'Will', contactEmail: 'kate@cordis.us', contactNumber: '123-456-7890'},
    {firstName: "Harry", lastName: 'Robert', contactEmail:'harry@cordis.us', contactNumber: '123-456-7890'},
    {firstName: "Tom", lastName: 'Bill', contactEmail: 'tom@cordis.us', contactNumber: '123-456-7890'},
    {firstName: "Roger", lastName: 'Steel', contactEmail: 'roger@cordis.us', contactNumber: '123-456-7890'}
   
  ];

  
  return factory;
}]);