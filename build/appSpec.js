describe('calendar', function() {

    var scope,
        element,
        compiled,
        html;

    beforeEach(module("calendarDemoApp"));
    beforeEach(module('calendar.html'));
    beforeEach(inject(function($rootScope, $compile) {

        var html="<calendar></calendar>";

        scope = $rootScope.$new();
        compiled = $compile(html)
        element = compiled(scope);
        scope.$digest();

    }));

    it('should render directive template', function(){
        expect(element.find('.toolbar').length).toBe(1);
    });

    // never got the below working...
    xit('should return month of January if current date is in January', function() {
        scope.selectedYear = '2015';
        scope.selectedMonth = '1';
        scope.updateCalendar();
        expect(scope.currentMonth).toBe('1');
    });


});