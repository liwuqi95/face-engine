app.service('apiService', function ($http) {

    this.getData = function () {
        return $http.get('/images');
    };

});