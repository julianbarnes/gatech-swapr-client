angular.module('swapr').controller('GradesDetailsCtrl',['$scope', '$stateParams', 'Grades',
    function ($scope, $stateParams, Grades) {
    // Note; for mock service, it will return the same object regardless of the id you give it.

    Grades.getGrade($stateParams.id).success(function(data) {
        $scope.grade = data;
    });
}]);
