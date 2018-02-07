app.controller('AnalysisCtrl', function($scope, forms, CompletedFormsFactory, DatabaseFactory) {
    $scope.forms = forms;
    $scope.values = null;
    $scope.currentForm = null;
    $scope.labels = [];
    $scope.data = [[]];
    $scope.chartTypes = ['bar graph', 'pie chart', 'donut chart'];
    $scope.drillDownValues = [];
    $scope.series = [];

    $scope.scourForms = function(forms, soughtItem) {
        let result = {};
        forms.forEach(function(form) {
            form.formElements.forEach(function(element) {
                if (element[soughtItem]) {
                  if (element[soughtItem] === 'Address') element[soughtItem] = 'Nearest Village';
                    if (result[form._id]) {
                        result[form._id].push(element[soughtItem]);
                    } else {
                        result[form._id] = [element[soughtItem]];
                    }
                }
            });
        });
        return result;
    };

    $scope.formLabels = $scope.scourForms($scope.forms, 'label');

$scope.resultFilter = function(form, firstDrillDown, drillDownValue) {
  if (!firstDrillDown) return true;
  if (firstDrillDown === 'Nearest Village') firstDrillDown = 'Address';
    let match = false;
    form.formElements.forEach(function(elem) {
        if (elem.label === firstDrillDown) {
            if (typeof elem.value === 'object') {
                if (Array.isArray(elem.value)) {
                  elem.value.forEach(function(e) {
                    if (e == drillDownValue) match = true;
                  });
                } else {
                    if (firstDrillDown === 'Address') {
                        if (elem.value.city == drillDownValue) match = true;
                    } else {
                      for (let key in elem.value) {
                        if (elem.value[key] == drillDownValue) match = true;
                      }
                    }
                }
            }
            else {
              if (elem.value == drillDownValue) {
              match = true;
            }
          }
        }
    });
    return match;
};

    $scope.valuesFromLabels = function(soughtLabel, options, firstDrillDown, drillDownValue) {
      if (soughtLabel === 'Nearest Village') soughtLabel = 'Address';
        CompletedFormsFactory.fetchAll($scope.currentForm)
            .then(function(forms) {
                let result = [];
                forms.forEach(function(form) {
                    form.formElements.forEach(function(element) {
                        if (element.label && element.label === soughtLabel) {
                          if ($scope.resultFilter(form, firstDrillDown, drillDownValue)) {
                          if (typeof element.value === 'object') {
                            if (Array.isArray(element.value)) {
                                element.value.forEach(function(item) {
                                  result.push(item);
                                });
                            } else {
                                if (element.label === 'Address') {
                                  result.push(element.value.city);
                                } else {
                                  for (let key in element.value) {
                                    result.push(element.value[key]);
                                  }
                                }
                              }
                          } else {
                            result.push(element.value);
                          }
                        }
                      }
                    });
                });
                return result;
            }).then(function(result) {
                let labelsDataObject = {};
                $scope.labels = [];
                if (!options) {
                  if ($scope.chartOptions === 'bar graph') $scope.data = [
                    []
                  ];
                  else $scope.data = []; 
                }
                result.forEach(function(value) {
                    if (labelsDataObject[value]) {
                        labelsDataObject[value]++;
                    } else {
                        labelsDataObject[value] = 1;
                    }
                });
                for (let key in labelsDataObject) {
                    if (options) {
                      $scope.drillDownValues.push(key);
                    } else {
                      $scope.labels.push(key);
                    }
                    if (!options) {
                      if ($scope.chartOptions === 'bar graph') $scope.data[0].push(labelsDataObject[key]);
                      else $scope.data.push(labelsDataObject[key]);
                    }
                }
            }).then(function(result) {
                $scope.$evalAsync();
            });
    };

    $scope.seedLabels = function(form) {
        $scope.currentForm = form._id;
        $scope.firstDrillDown = null;
        $scope.furtherDrillDown = null;
    };

    $scope.graphChange = function() {
        $scope.valuesFromLabels($scope.dataOptions);
        $scope.firstDrillDown = null;
        $scope.furtherDrillDown = null;
    };

    $scope.drillDown = function(option) {
        if (!option) {
          $scope.drillDownValues = [];
          $scope.furtherDrillDown = null;
          $scope.valuesFromLabels($scope.firstDrillDown, true);
        }
        else {
          $scope.valuesFromLabels($scope.dataOptions, false, $scope.firstDrillDown, $scope.furtherDrillDown);
        }
    };

    $scope.filter = function() {
      if (!$scope.filtering) {
        $scope.filtering = true;
      } else {
          $scope.drillDownValues = [];
          $scope.firstDrillDown = null;
          $scope.furtherDrillDown = null;
          $scope.filtering = false;
          $scope.graphChange();
      }
    };
});
