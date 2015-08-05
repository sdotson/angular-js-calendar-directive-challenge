angular.module('calendarDemoApp', [])

// your controller and directive code go here
.directive('calendar', calendar);

function calendar() {
  calendarController.$inject = ['$scope','$filter'];
  function calendarController($scope, $filter) {
    $scope.calendarRange = CalendarRange.getMonthlyRange(new Date());
    $scope.currentMonth = $filter('date')($scope.calendarRange.start,'M') - 1;

    console.log($scope.calendarRange);
  }

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'calendar.html',
    controller: calendarController
  };
}