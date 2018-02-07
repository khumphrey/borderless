app.controller('FormTemplatesCtrl', function($scope, forms, FormTemplatesFactory, $state) {
    $scope.originalForms = forms;
    $scope.forms = $scope.originalForms;

    $scope.createNewForm = function() {
        FormTemplatesFactory.createForm()
            .then(function(form) {
                $state.go("form-templates.form-builder", { id: form.id });
            });
    };
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