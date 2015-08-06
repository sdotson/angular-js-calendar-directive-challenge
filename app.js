(function() {

})();
angular.module('calendarDemoApp', [])

// your controller and directive code go here
.directive('calendar', calendar);

function calendar() {
  calendarController.$inject = ['$scope','$filter'];
  function calendarController($scope, $filter) {

    function updateDate(date) {
      $scope.calendarRange = CalendarRange.getMonthlyRange(date);
      $scope.currentMonth = $filter('date')($scope.calendarRange.start,'M') - 1;
      $scope.currentYear = parseInt($filter('date')($scope.calendarRange.start,'y'));
      $scope.years = getYears($scope.currentYear);  
    }

    function getYears(year) {
      var start = year - 20,
        end = year + 20,
        yearsArray = [];
      for (var i = start; i < end; i++) {
        yearsArray.push(start);
        start++;
      };
      return yearsArray;
    }

    updateDate(new Date());

    $scope.updateCalendar = function() {
      updateDate(new Date($scope.selectedYear, $scope.selectedMonth));
    }
  }
  
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'calendar.html',
    controller: calendarController
  };
}


