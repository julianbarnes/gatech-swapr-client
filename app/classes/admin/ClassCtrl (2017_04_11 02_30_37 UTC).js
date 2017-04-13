angular.module('swapr.admin').controller('ClassCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    // eventually use service to get class details. For now it's just mocked out.
    $scope.class = {
        id: $stateParams.id,
        title: 'PHYS 2211 - M',
        students: '108',
        semester: 'Summer 2015'
    };
}]);