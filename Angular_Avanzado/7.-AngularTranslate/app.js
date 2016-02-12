
angular.module('myApp', ['ngAnimate' , 'pascalprecht.translate'])

	//Configurando la Traduccion

	.config(function($translateProvider){
		$translateProvider
			.translations('en' , {
				ADD: 'Add',
				DELETE: 'Delete',
				LIST: 'List Products',
				CHANGE: 'Change language',
				EN: 'English',
				ES: 'Spanish'
			})
			.translations('es' , {
				ADD: 'Agregar',
				DELETE: 'Eliminar',
				LIST: 'Lista de Productos',
				CHANGE: 'Cambiar idioma',
				EN: 'Ingles',
				ES: 'Español'
			})
			.preferredLanguage('es');
	})

	//Controllador

	.controller('ctrlTraduce', function($scope , $translate){
		$scope.listaProductos = [
			{nombre:'manzanas'},
			{nombre:'peras'},
			{nombre:'zanahorias'}
		];

		$scope.agregarProducto = function(){
			$scope.listaProductos.push({
				nombre: $scope.producto
			});

			 $scope.producto = '';
		}

		$scope.eliminarProducto = function(){
			$scope.listaProductos.pop();
		}

		$scope.cambiarIdioma = function(idioma){
			$translate.use(idioma);
		}

	});