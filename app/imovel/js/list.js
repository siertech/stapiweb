"use strict";
(function(){
	angular.module("adm") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/imovel",{

		templateUrl:"app/imovel/html/list.html",

		controller: function(imovelUtil, stService, $route, stUtil, $scope){
			
			 //Editar item ou cadastrar novo
			$scope.openItem = function(item){
				
				imovelUtil.openItem(item, function(event, modal){
					
					/*
					 Possíveis valores para event
					 
					 * add - O item foi salvo
					 * add-error - erro ao salvar o item
					 * delete - O item foi deletado
					 * delete-error -  Erro ao deletar o objeto
					
					 */
					
					 modal.close();
					 $route.reload();
					
					
				});

			}

			//Deletar item
			$scope.deletarItem = function(item){
						
				stService.executePost("imovel/delete/", [item.id]).success(function(){
					
					stUtil.showMessage("","Item deletado com sucesso","info");	
					$route.reload();
					
				}).error(function(){
					
					stUtil.showMessage("","Ocorreu um erro ao deletar","danger");	
				});

			}

		}

	}); 

})

})();
