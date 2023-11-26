(function () {
    angular.module('blog', []);
    angular.module('blog').controller('Rest', function ($scope, $http) {
        $http.get('https://api.themoviedb.org/3/movie/popular?api_key=c84fdb20208809d09e326e0db925fdd1&language=pt-BR&page=1').
            success(function (data) {
                $scope.filmes = data.results;
                console.log(data.results);
            }
            );
    });

    angular.module('post', []);

    angular.module('post').controller('MyController', function ($scope, $http, $location) {
        var absUrl = $location.absUrl();
        var url = absUrl.split("#/");
        console.log(url);
        $http({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/' + url[1] + '?api_key=c84fdb20208809d09e326e0db925fdd1&llanguage=pt-BR&page=1'
        }).then(function (data) {
            $scope.filme = data.data;
            console.log(data.data.release_date);
            var date = data.data.release_date.split("-");
            console.log(date);
            var dataLancamento = date[2] + "/" + date[1] + "/" + date[0];
            $scope.detalhes = dataLancamento;
            var nota = data.data.vote_average.toFixed(1);
            console.log(nota);
            $scope.nota = nota;
        }, function (error) {

        });
    })
})()