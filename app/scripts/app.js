'use strict';

var app = angular.module('dragonHunter', ['ngAnimate', 'ui.router'])
    .config(function($stateProvider){
        $stateProvider
            .state('main', {
                views:{
                    'status': {
                        templateUrl: 'views/status.html'
                    },
                    'inventory': {
                        templateUrl: 'views/inventory.html'
                    },
                    'game':{
                        templateUrl: 'views/menu-hub.html'
                    }
                }
            })
    })
    .controller('GameController', function($scope, $state){
        var scope = $scope;

        scope.inventorySize = 20;
        scope.getInventorySize = function(num) {
            return new Array(num);
        }

        $state.go('main');

        scope.inventorySlots = [
            {
                'id':1,
                'item': {
                    'iconUrl': 'images/armor/steel_helmet.png',
                    'type': 'headgear',
                    'power': 8,
                    'equipped': true
                }
            },
            {
                'id':2,
                'item': {
                    'iconUrl': 'images/armor/steel_gloves.png',
                    'type': 'gloves',
                    'power': 8,
                    'equipped': true
                }
            },
            {
                'id':3,
                'item': {
                    'iconUrl': 'images/armor/steel_armor.png',
                    'type': 'chest',
                    'power': 8,
                    'equipped': true
                }
            },
            {
                'id':4,
                'item': {
                    'iconUrl': 'images/armor/steel_boots.png',
                    'type': 'boots',
                    'power': 8,
                    'equipped': true
                }
            },
            {
                'id':5,
                'item': {
                    'iconUrl': 'images/armor/steel_leggings.png',
                    'type': 'leggings',
                    'power': 8,
                    'equipped': true
                }
            },
            {
                'id':6,
                 'item': {
                    'iconUrl': 'images/weapons/greatsword.png',
                    'type': 'weapon',
                    'power': 7,
                    'equipped': true
                }
            },
            {
                'id':7,
                 'item': {
                    'iconUrl': 'images/weapons/steel_shield.png',
                    'type': 'offhand',
                    'power': 8,
                    'equipped': true
                }
            },
            {
                'id':8,
                'item': {
                    'iconUrl': 'images/weapons/greatbow.png',
                    'type': 'weapon',
                    'power': 5,
                    'equipped': false
                }
            },
            {
                'id':9,
                'item': {}
            },
            {
                'id':10,
                'item': {}
            },
            {
                'id':11,
                'item': {}
            }
            ,
            {
                'id':11,
                'item': {}
            }
        ]
    });