let app = angular.module("myApp", ["ngRoute", "chart.js"]);

app.controller('AppController', function ($scope, $location, apiService, $q) {

});


app.controller('mainController', function ($scope, apiService, $location, $q) {

    $scope.showGallery = true;

    let reader = new FileReader();

    reader.onloadend = function (event) {
        $scope.imgSrc = event.target.result;
        $scope.showGallery = false;
        $scope.$apply();
    };

    $scope.$watch('faceModel', function (newValue, oldValue) {
        if ($scope.faceModel !== undefined)
            reader.readAsDataURL($scope.faceModel);
    });

    $scope.cityList = '济南 青岛 淄博 枣庄 东营 烟台 潍坊 济宁 泰安 威海 日照 滨州 德州 聊城 临沂 菏泽 莱芜'.split(' ');
    $scope.libList = '全国在逃人像库 山东人像库 济宁人像库'.split(' ');

    $scope.labels = ["李明（云天，依图）", "王五（旷世）", "张明（商汤）"];
    $scope.data = [2, 1, 1];
    $scope.colours = ['#007bff', '#ffc107', '#28a745', '#dc3545'];

    $scope.options = {
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontSize: 11
            }
        }
    };

    $scope.resultList = [];

    for (i = 0; i < 18; i++) {
        $scope.resultList.push(i);
    }

});

app.controller('trackController', function ($scope, apiService, $window, $q) {

    $scope.back = function () {
        $window.history.back();
    };

    $scope.resultList = [];

    for (i = 0; i < 10; i++) {
        $scope.resultList.push(i);
    }

});


app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change', function (e) {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);