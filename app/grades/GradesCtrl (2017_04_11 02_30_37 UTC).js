angular.module('swapr').controller('GradesCtrl', ['$scope', 'Grades', function($scope, Grades) {
    Grades.getGrades().success(function(data, status) {
        $scope.grades = data;
    });
}]);
