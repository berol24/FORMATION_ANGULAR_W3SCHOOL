 var app = angular.module("myApp", [])
        app.controller("myCtrl", function ($scope) {
            $scope.firstName = "John";
            $scope.lastName = "Doe",
            $scope.first = "JACK"
            $scope.fullName = () => {
                return $scope.firstName + " " + $scope.lastName;
            }
            console.log($scope);
            
            $scope.changeName = function(){
                $scope.first = "Nelly";
            }
        })