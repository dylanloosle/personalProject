var app = angular.module('census');

app.controller('stateCtrl', function($scope, $routeParams, service, stateData){
    $scope.stateData = stateData;
    console.log($scope.stateData);
    $scope.currentState = $scope.stateData[0];
    $scope.displayPopulation = Number($scope.stateData[1]).toLocaleString('en');
    $scope.population = ($scope.stateData[1]);

    if($scope.currentState === 'Alabama') {
        $scope.stateImage = 'images/state-alabama.png';
    }
    else if($scope.currentState === 'Alaska') {
        $scope.stateImage = 'images/state-alaska.png';
    }
    else if($scope.currentState === 'Arizona') {
        $scope.stateImage = 'images/state-arizona.png';
    }
    else if($scope.currentState === 'Arkansas') {
        $scope.stateImage = 'images/state-arkansas.png';
    }
    else if($scope.currentState === 'California') {
        $scope.stateImage = 'images/state-california.png';
    }
    else if($scope.currentState === 'Colorado') {
        $scope.stateImage = 'images/state-colorado.png';
    }
    else if($scope.currentState === 'Connecticut') {
        $scope.stateImage = 'images/state-connecticut.png';
    }
    else if($scope.currentState === 'Delaware') {
        $scope.stateImage = 'images/state-delaware.png';
    }
    else if($scope.currentState === 'District of Columbia') {
        $scope.stateImage = 'images/The-WhiteHouse-icon.png';
    }
    else if($scope.currentState === 'Florida') {
        $scope.stateImage = 'images/state-florida.png';
    }
    else if($scope.currentState === 'Georgia') {
        $scope.stateImage = 'images/state-georgia.png';
    }
    else if($scope.currentState === 'Hawaii') {
        $scope.stateImage = 'images/state-hawaii.png';
    }
    else if($scope.currentState === 'Idaho') {
        $scope.stateImage = 'images/state-idaho.png';
    }
    else if($scope.currentState === 'Illinois') {
        $scope.stateImage = 'images/state-illinois.png';
    }
    else if($scope.currentState === 'Indiana') {
        $scope.stateImage = 'images/state-indiana.png';
    }
    else if($scope.currentState === 'Iowa') {
        $scope.stateImage = 'images/state-iowa.png';
    }
    else if($scope.currentState === 'Kansas') {
        $scope.stateImage = 'images/state-kansas.png';
    }
    else if($scope.currentState === 'Kentucky') {
        $scope.stateImage = 'images/state-kentucky.png';
    }
    else if($scope.currentState === 'Louisiana') {
        $scope.stateImage = 'images/state-louisiana.png';
    }
    else if($scope.currentState === 'Maine') {
        $scope.stateImage = 'images/state-maine.png';
    }
    else if($scope.currentState === 'Maryland') {
        $scope.stateImage = 'images/state-maryland.png';
    }
    else if($scope.currentState === 'Massachusetts') {
        $scope.stateImage = 'images/state-massachussets.png';
    }
    else if($scope.currentState === 'Michigan') {
        $scope.stateImage = 'images/state-michigan.png';
    }
    else if($scope.currentState === 'Minnesota') {
        $scope.stateImage = 'images/state-minnesota.png';
    }
    else if($scope.currentState === 'Mississippi') {
        $scope.stateImage = 'images/state-mississippi.png';
    }
    else if($scope.currentState === 'Missouri') {
        $scope.stateImage = 'images/state-missouri.png';
    }
    else if($scope.currentState === 'Montana') {
        $scope.stateImage = 'images/state-montana.png';
    }
    else if($scope.currentState === 'Nebraska') {
        $scope.stateImage = 'images/state-nebraska.png';
    }
    else if($scope.currentState === 'Nevada') {
        $scope.stateImage = 'images/state-nevada.png';
    }
    else if($scope.currentState === 'New Hampshire') {
        $scope.stateImage = 'images/state-new-hampshire.png';
    }
    else if($scope.currentState === 'New Jersey') {
        $scope.stateImage = 'images/state-new-jersey.png';
    }
    else if($scope.currentState === 'New Mexico') {
        $scope.stateImage = 'images/state-new-mexico.png';
    }
    else if($scope.currentState === 'New York') {
        $scope.stateImage = 'images/state-new-york.png';
    }
    else if($scope.currentState === 'North Carolina') {
        $scope.stateImage = 'images/state-north-carolina.png';
    }
    else if($scope.currentState === 'North Dakota') {
        $scope.stateImage = 'images/state-north-dakota.png';
    }
    else if($scope.currentState === 'Ohio') {
        $scope.stateImage = 'images/state-ohio.png';
    }
    else if($scope.currentState === 'Oklahoma') {
        $scope.stateImage = 'images/state-oklahoma.png';
    }
    else if($scope.currentState === 'Oregon') {
        $scope.stateImage = 'images/state-oregon.png';
    }
    else if($scope.currentState === 'Pennsylvania') {
        $scope.stateImage = 'images/state-pennsylvania.png';
    }
    else if($scope.currentState === 'Rhode Island') {
        $scope.stateImage = 'images/state-rhode-island.png';
    }
    else if($scope.currentState === 'South Carolina') {
        $scope.stateImage = 'images/state-south-carolina.png';
    }
    else if($scope.currentState === 'South Dakota') {
        $scope.stateImage = 'images/state-south-dakota.png';
    }
    else if($scope.currentState === 'Tennessee') {
        $scope.stateImage = 'images/state-tennessee.png';
    }
    else if($scope.currentState === 'Texas') {
        $scope.stateImage = 'images/state-texas.png';
    }
    else if($scope.currentState === 'Utah') {
        $scope.stateImage = 'images/state-utah.png';
    }
    else if($scope.currentState === 'Vermont') {
        $scope.stateImage = 'images/state-vermont.png';
    }
    else if($scope.currentState === 'Virginia') {
        $scope.stateImage = 'images/state-virginia.png';
    }
    else if($scope.currentState === 'Washington') {
        $scope.stateImage = 'images/state-washington.png';
    }
    else if($scope.currentState === 'West Virginia') {
        $scope.stateImage = 'images/state-west-virginia.png';
    }
    else if($scope.currentState === 'Wisconsin') {
        $scope.stateImage = 'images/state-wisconsin.png';
    }
    else if($scope.currentState === 'Wyoming') {
        $scope.stateImage = 'images/state-wyoming.png';
    }




    $scope.getData = function(){
        service.getData($scope.selected, $routeParams.state).then(function(result){
            console.log(result);
            if($scope.selected === 'DP03_0062E') {
                $scope.displayAnswer = numeral(result[0]).format('$ 0,0[.]00');
                $scope.fixedPercentage = 'N/A';
            }
            else if($scope.selected === 'DP02_0067PE') {
                $scope.displayAnswer = (result[0]) + '%';
                $scope.fixedPercentage = $scope.displayAnswer;
            }
            else if($scope.selected === 'DP02_0015E') {
                $scope.displayAnswer = result[0];
                $scope.fixedPercentage = 'N/A';
            }
            else {
                $scope.answer = (result[0]);
                $scope.displayAnswer = Number(result[0]).toLocaleString('en');
                $scope.percentage = $scope.answer/$scope.population;
                $scope.fixedPercentage = numeral($scope.percentage).format('0.000 %');
                console.log($scope.percentage);
            }
        })
    };

});