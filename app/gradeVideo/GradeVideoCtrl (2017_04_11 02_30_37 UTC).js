/**
 * Created by tituswoo on 10/31/14.
 */

angular.module('swapr').controller('GradeVideoCtrl', ['$scope', 'localStorageService',
    function ($scope, localStorageService) {
    var original = {};

    (function () {
        var peerReview = localStorageService.get('peerReview');
        if (peerReview) {
            $scope.peerReview = peerReview;
        } else {
            // this will be loaded from the server eventually.
            $scope.peerReview = {
                video: {
                    url: "https://www.youtube.com/watch?v=TMKj0BxzVgw",
                    title: "Grunt is cool"
                },
                criteria: [
                    {
                        title: 'Organizational Structure',
                        rating: {
                            rate: 0,
                            max: 5,
                            readonly: false
                        },
                        feedback: 'enter feedback here.'
                    },
                    {
                        title: 'Content Models',
                        rating: {
                            rate: 0,
                            max: 5,
                            readonly: false
                        },
                        feedback: 'enter feedback here.'
                    },
                    {
                        title: 'Content Prediction Discussion',
                        rating: {
                            rate: 0,
                            max: 5,
                            readonly: false
                        },
                        feedback: 'enter feedback here.'
                    },
                    {
                        title: 'Content Overall',
                        rating: {
                            rate: 0,
                            max: 5,
                            readonly: false
                        },
                        feedback: 'enter feedback here.'
                    },
                    {
                        title: 'Production Delivery',
                        rating: {
                            rate: 0,
                            max: 5,
                            readonly: false
                        },
                        feedback: 'enter feedback here.'
                    }
                ]
            };
        }
        original = angular.copy($scope.peerReview);
    })();

    $scope.save = function () {
        localStorageService.set('peerReview', $scope.peerReview);
    };

    $scope.reset = function () {
        angular.copy(original, $scope.peerReview);
    };
}]);
