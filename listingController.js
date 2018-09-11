angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
     $scope.selectedListing = null;
     $scope.setListing = function (selectedListing) {
       $scope.selectedListing = selectedListing;
     }
    $scope.visible = false;

    $scope.addListing = function() {
      $scope.listings.push({
        code: $scope.newCode,
        name: $scope.newName,
        latitude: $scope.newLat,
        longitude: $scope.newLong,
        address: $scope.newAddy
      });

      //clears input fields
      $scope.newCode = '';
      $scope.newName = '';
      $scope.newLat = '';
      $scope.newLong = '';
      $scope.newAddy = '';
    };

    $scope.deleteListing = function(item) {
      var index = $scope.listings.indexOf(item); //looks up item
      $scope.listings.splice(index, 1); //removes item using index of item.
    };

    $scope.showDetails = function(item) {
      // detailedInfo = "Code: "+ item.code "<br></br>" +
      // "Name: " item.name + "<br></br>" +
      // "Latitude: " + item.latitude + "<br></br>" +
      // "Longitude: " + item.longitude + "<br></br>" +
      // "Address: " + item.address + "<br></br>";
      console.log(detailedInfo);
    };

  }
]);
