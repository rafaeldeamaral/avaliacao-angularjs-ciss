agendaApp.controller('AgendaCtrl', function( $scope ) {
	
	$scope.clicouEditar = false;
	$scope.list = [];
	$scope.indexAgenda = 0;
	
	//Adiciona a agenda na lista.
	$scope.adicionarAgenda = function(data) {
		if (!!data && !!data.name) {
			$scope.list.push(data);
			$scope.agenda = undefined;
		}
	};
	
	//Atualiza o cadastro com informações a ser editada.
	$scope.atualizarCadastro = function(data) {
		$scope.clicouEditar = true;
		$scope.agenda = angular.copy($scope.list[data]);
		$scope.indexAgenda = data;
	};
	
	//Atualiza a agenda na lista.
	$scope.editarAgenda = function(data) {
		if (!!data && !!data.name) {
			angular.copy($scope.agenda, $scope.list[$scope.indexAgenda]);
			$scope.cancelarEditarAgenda();
		}
	};
	
	//Cancela o cadastro de editar agenda.
	$scope.cancelarEditarAgenda = function() {
		$scope.clicouEditar = false;
		$scope.agenda = undefined;
		$scope.indexAgenda = 0;
	};
	
	//Remove agenda da lista.
	$scope.removerAgenda = function(data) {
		$scope.list.splice(data, 1);
	};

});