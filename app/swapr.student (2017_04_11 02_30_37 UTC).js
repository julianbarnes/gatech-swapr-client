/**
 * Created by Titus on 9/26/2014.
 */

angular.module('swapr.student', ['swapr', 'ui.bootstrap', 'ui.router', 'youtube-embed', 'LocalStorageModule']);

angular.module('swapr.student').config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('swapr.student');
}]);

angular.module('swapr.student').controller('MainCtrl', ['$scope', function ($scope) {
    $scope.hello = 'hi there!';
    $scope.menuVisible = false;

    $scope.toggleMenu = function () {
        $scope.menuVisible = !$scope.menuVisible;
    };
}]);


angular.module('swapr.student').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/student/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('grades', {
            abstract: true,
            template: '<ui-view />',
            url: '/grades'
        })
        .state('grades.grades', {
            url: '',
            templateUrl: 'templates/grades.html',
            controller: 'GradesCtrl'
        })
        .state('grades.detail', {
            url: '/detail/:id',
            templateUrl: 'templates/grades.detail.html',
            controller: 'GradesDetailsCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileCtrl'
        })
        .state('assignments', {
            abstract: true,
            template: '<ui-view />',
            url: '/assignments'
        })
        .state('assignments.assignments', {
            url: '',
            templateUrl: 'templates/assignments.html',
            controller: 'AssignmentsCtrl'
        })
        .state('assignments.upload', {
            url: '/upload',
            templateUrl: 'templates/upload.html',
            controller: 'UploadCtrl'
        })
        .state('assignments.peerreviews', {
            url: '/review',
            templateUrl: 'templates/peerReviewMenu.html',
            controller: 'PeerReviewCtrl'
        })
        .state('assignments.gradeVideo', {
            url: '/gradeVideo',
            templateUrl: 'templates/gradeVideo.html',
            controller: 'GradeVideoCtrl'
        })
}]);
