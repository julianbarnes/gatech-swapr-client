angular.module('swapr.admin').controller('ClassesCtrl', ['$scope', function ($scope) {
    // Example classes object
    $scope.classes = [
        {
            name: 'PHYS 2211 - M',
            students: '108',
            semester: 'Summer 2015'
        },
        {
            name: 'PHYS 2211 - N',
            students: '98',
            semester: 'Summer 2015'
        },
        {
            name: 'PHYS 2110 - D',
            students: '121',
            semester: 'Summer 2015'
        }
    ];
}]);