var app = angular.module('census');
app.service("service", function($http, $q) {



    var key = "cbaba87e9261ae529517b87bfff5af6b3c265404";

    this.getPop = function(stateNum){
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: "http://api.census.gov/data/2013/acs5?get=NAME,B01001_001E&for=state:" + stateNum + "&key=" + key
        }).then(function(res){
            var parsedData = res.data[1];
            console.log(res);
            dfd.resolve(parsedData);
        });
        return dfd.promise;



        };

    this.getData = function(selected, stateNum){
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: "http://api.census.gov/data/2013/acs5/profile?get=" + selected + "&for=state:" + stateNum + "&key=" + key
            }).then(function(response){
                var newData = response.data[1];
                console.log(response);
                deferred.resolve(newData);
            });
        return deferred.promise;
        };



    });





