/**
 * Created by Vaughan on 10/24/2014.
 */
angular.module('swapr')

.service("assignment", function assign(){
    var assignment = this;
    var current = null;

})

.controller('AssignmentsCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {
    $scope.todo = [
        {
            title: 'Lab 1 Video Upload',
            dueDate: '8/31/14',
            dueTime: '11:59 pm',
            status: 'Incomplete',
            type: 'video',
            route: 'assignments.upload',
            id: $stateParams.id
        },
        {
            title: 'Lab 1 Peer Review',
            dueDate: '8/31/14',
            dueTime: '11:59 pm',
            status: 'Incomplete',
            type: 'review',
            route: 'assignments.gradeVideo',
            id: $stateParams.id
        }
    ]
    $scope.completed = [
        {
            title: 'Lab 2 Video Upload',
            dueDate: '8/31/14',
            dueTime: '11:59 pm',
            status: 'Incomplete',
            type: 'video',
            route: 'assignments.upload',
            id: $stateParams.id
        },
        
    ]
    $scope.complete = function(assignment) {
        var index = indexOf(assignment); 
        var removed = $scope.todo.splice(index,1);
        completed.push(removed[0]);
    }

    
    
}]);