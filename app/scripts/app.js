'use strict';

var app = angular.module('dragonHunter', ['ngAnimate'])
    .controller('GameController', function($scope){
        var scope = $scope;

        scope.inventorySize = 20;
        scope.getInventorySize = function(num) {
            return new Array(num);
        }
    });