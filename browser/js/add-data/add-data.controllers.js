app.controller('AddDataCtrl', function($scope, forms) {
	$scope.originalForms = forms;
    $scope.forms = $scope.originalForms;
    $scope.$watch('searchBar', function() {
        $scope.filteredForms = $scope.originalForms;
        if ($scope.searchBar) {
            let reg = new RegExp($scope.searchBar, 'i');
            $scope.filteredForms = $scope.filteredForms.filter(function(form) {
                return reg.test(form.title);
            });
        }
        $scope.forms = $scope.filteredForms.slice($scope.startSlice, $scope.endSlice);
        $scope.$evalAsync();
    });
});

app.controller('CompletedFormModalCtrl', function($scope, $uibModalInstance) {
	$scope.close = function(result) {
		$uibModalInstance.close(result);
	};
});

app.controller('AddDataSubmitCtrl', function($scope, form, CompletedFormsFactory, $uibModal, $state) {
	$scope.form = form;
	$scope.formValues = [];

	$scope.submitForm = function() {
		// merge values with the formTemplate data and save as completed form

		let completedForm = angular.copy(form);
		completedForm.formElements = completedForm.formElements.map(function(el, i) {
			el.value = $scope.formValues[i];
			return el;
		});
		completedForm.type = 'completedForm';
		completedForm.formTemplateId = completedForm._id;
		completedForm.formTemplateVer = completedForm._rev;
		delete completedForm._id;
		delete completedForm._rev;

		CompletedFormsFactory.createOne(completedForm)
			.then(function(createdForm) {
				let modalInstance = $uibModal.open({
					templateUrl: '/js/add-data/add-data-success.html',
					controller: 'CompletedFormModalCtrl',
					size: 'md'
				});

				modalInstance.result.then(function(result){
					switch(result) {
						case 'add':
							$state.go('add-data.submit', {formTemplateId: $scope.form.formTemplateId});
							break;
						case 'viewOne':
							$state.go('completed-forms.individual-form', {completedFormId: createdForm.id});
							break;
						case 'viewAll':
							$state.go('completed-forms.forms-list', {formTemplateId: $scope.form.formTemplateId});
							break;
						default: $state.go('add-data.submit', {formTemplateId: $scope.form.formTemplateId});
					}
				});
			});
	};
});