angular.module('swapr').controller('ProfileCtrl', ['$scope', 'Profile', function($scope, Profile) {
    Profile.getProfile().success(function(data) {
        $scope.profile = data;
    });
}]);
