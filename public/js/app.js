app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/view/main.html"
        })
        .when("/result", {
            templateUrl: "/view/result.html"
        })
        .when("/track", {
            templateUrl: "/view/track.html"
        })
});