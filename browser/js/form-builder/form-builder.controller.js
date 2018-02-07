app.controller('FormBuilder', function($scope, FormTemplatesFactory, formTemplate, $uibModal) {
    $scope.selected = undefined;
    $scope.formTemplate = formTemplate;
    $scope.title = $scope.formTemplate.title;
    $scope.description = $scope.formTemplate.description;
    $scope.formElements = $scope.formTemplate.formElements;

    $scope.save = function() {
        FormTemplatesFactory.updateForm($scope.formTemplate)
            .then(function(savedForm) {
                $uibModal.open({
                    templateUrl: '/js/form-builder/templates/form-editor-success.html',
                    controller: 'CompletedFormModalCtrl',
                    size: 'sm'
                });
                $scope.formTemplate = savedForm;
                $scope.$evalAsync();
            });
    };

    $scope.tabSelected = 'one';

    $scope.placeElements = function(type) {
        $scope.elementToAdd = { type: type };
        $scope.formElements.push($scope.elementToAdd);
        if (type === 'checkbox' || type === 'dropdown' || type === 'multipleChoice') {
            $scope.elementToAdd.options = [{ value: "option 1" }, { value: "option 2" }, { value: "option 3" }];
            $scope.elementToAdd.label = "Select";
        } else if (type === 'number') $scope.elementToAdd.label = "Enter Value";
        else if (type === 'lineText' || type === 'paragraphText') $scope.elementToAdd.label = "Enter Text";
        else if (type === 'phone') $scope.elementToAdd.label = "Phone Number";
        else if (type === 'email') $scope.elementToAdd.label = "Email";
        else if (type === 'address') $scope.elementToAdd.label = "Address";
        else if (type === 'section') {
            $scope.elementToAdd.label = "Section";
            $scope.elementToAdd.sectionDescription = "Section Description";
        };

        $scope.elementToAdd.id = nextId;
        nextId++;
        $scope.elementToAdd.required = false;
    };

    $scope.require = function(element) {
        if (element.required === true && !element.value) {
            return true;
        }
    }

    $scope.selectElement = function(e) {
        $scope.selected = e;
        $scope.tabSelected = 'two';
    };

    $scope.onHover = function(e) {
        $scope.hovered = e;
    };

    $scope.removeElement = function(e) {
        let indexToRemove = $scope.formElements.indexOf(e);
        $scope.formElements.splice(indexToRemove, 1);
        $scope.selected = {};
    };

    $scope.clearForm = function() {
        $scope.formElements = [];
        $scope.formTemplate.formElements = [];
        $scope.selected = {};
    };

    let nextId = $scope.formElements.length + 1;

    $scope.addChoice = function(element) {
        element.options.push({ value: "New Option" });
    };

    $scope.removeChoice = function(element, choice) {
        if (element.options.length > 1) {
            element.options.splice(element.options.indexOf(choice), 1);
        }
    };

    $scope.setAlignment = function(alignment, type) {
        if (type === "description") $scope.formTemplate.descAlign = alignment;
        if (type === "title") $scope.formTemplate.titleAlign = alignment;
    };

    $scope.dragControlListeners = {
        containment: '#form-template-body'
    };
});

