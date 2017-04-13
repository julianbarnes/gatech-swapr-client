angular.module('swapr').controller('DashboardCtrl', ['$scope', 'Grades', function ($scope, Grades) {
    Grades.getGrades().success(function (data) {
        $scope.grades = data;
    })
}]);
