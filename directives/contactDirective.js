// directives


myApp.directive('contact', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/contact.html'
  }
})