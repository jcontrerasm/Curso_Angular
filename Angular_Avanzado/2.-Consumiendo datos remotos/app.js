
var app = angular.module('myApp', ['ngAnimate']);

app.controller('ctrlAnimate', function($scope , $http){

    /*  Lista de Productos
    =========================================================================== */

    $http.get('productos.json')
        .then(function(res){
            $scope.listaProductos = res.data;
    });

    /*  Agregar Producto
    =========================================================================== */

    $scope.agregarProducto = function(){

        if(document.getElementById('prod').value != ''){
            $scope.listaProductos.push({ nombre: $scope.producto });
            $scope.producto = '';
        }

    }

    /*  Eliminar Producto
    =========================================================================== */

    $scope.eliminarProducto = function(){
        $scope.listaProductos.pop();
    }

    /*  Obtener Clima
    =========================================================================== */

    $scope.obtenerClima = function(){

        var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

        $http.get(url)
            .then(function(res){
                $scope.clima = res.data.query.results.channel.item.condition;
            });
    }

});