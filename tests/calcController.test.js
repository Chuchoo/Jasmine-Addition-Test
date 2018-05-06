describe("calculator", function () {

    var $scope;

    beforeEach(module("Calculator"));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller("CalcController", {$scope: $scope});
    }));

    it("1 + 2 should = 3", function () {
        
        $scope.first = 1;
        $scope.second = 2;

        // Call the $scope.sum() function, imitating the ng-click on the <button> element
        $scope.sum();

        // Check that the result is correct.
        expect($scope.result).toBe(3);
    });
	
	
	it("1 + (-2) should = -1", function () {
        
        $scope.first = 1;
        $scope.second = -2;

        // Call the $scope.sum() function, imitating the ng-click on the <button> element
        $scope.sum();

        // Check that the result is correct.
        expect($scope.result).toBe(-1);
    });
	
	
	it("(-1) + (-2) should = -3", function () {
        
        $scope.first = -1;
        $scope.second = -2;

        // Call the $scope.sum() function, imitating the ng-click on the <button> element
        $scope.sum();

        // Check that the result is correct.
        expect($scope.result).toBe(-3);
    });
	
});