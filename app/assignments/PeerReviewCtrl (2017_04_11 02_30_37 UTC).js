/**
 * Created by Vaughan on 10/24/2014.
 */
angular.module('swapr').controller('PeerReviewCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.assignment = {
        title: 'Lab 1 Video Upload',
        dueDate: '8/31/14',
        dueTime: '11:59 pm',
        status: 'Incomplete',
        type: 'video',
        id: $stateParams.id
    };

    $scope.rubric = "Let's get down to business/To defeat the Huns/Did they send me daughters/When I asked for sons?"+
        "You're the saddest bunch/I ever met/But you can bet/Before we're through/Mister, I'll make a man out of you";

    $scope.reviewList = [
        {
            title: "Video 1",
            percentage: "50"
        },
        {
            title: "Video 2",
            percentage: "0"
        },
        {
            title: "Video 3",
            percentage: "0"
        }
    ];
}]);