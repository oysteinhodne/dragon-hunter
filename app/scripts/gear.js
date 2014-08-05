angular.module('Gear', [])
    .factory('GearModel', function(){
        var Gear = function (power, gearType){
            this.power = power;
            this.gearType = gearType;

            this.id = 1; //GenerateUniqueId.next();
        };

        return Gear;
    })