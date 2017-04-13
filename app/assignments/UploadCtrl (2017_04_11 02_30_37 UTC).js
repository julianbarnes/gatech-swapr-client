/**
 * Created by Vaughan on 10/27/2014.
 */
angular.module('swapr').controller('UploadCtrl',['$scope', '$stateParams', '$http', 'YoutubeValidation',
    function ($scope, $stateParams, $http, YoutubeValidation) {
        
    $scope.upload = {
        title: 'Lab 1 Video Upload',
        dueDate: '8/31/14',
        dueTime: '11:59 pm',
        status: 'Incomplete',
        type: 'video',
        id: $stateParams.id
    };

    $scope.inputUrl = "";
    $scope.videoUrl = "";
    $scope.urlIsValid = true;

    $scope.checkUrl = function () {
        YoutubeValidation.checkUrl($scope.inputUrl, function (urlIsValid, urlIsUploading) {
            $scope.urlIsValid = urlIsValid;
            $scope.urlIsUploading = urlIsUploading;
            if (urlIsValid) {
                $scope.videoUrl = $scope.inputUrl;
            }
        })
    };

    //$scope.videoUrl = "https://www.youtube.com/watch?v=0Bmhjf0rKe8";

    $scope.intro = "Upload yer video here, matey! Arrgh...";
}]);