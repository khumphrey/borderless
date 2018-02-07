app.factory('CompletedFormsFactory', function(DatabaseFactory) {
	let db = DatabaseFactory.getLocalDb();

	return {
		fetchAll: function(templateId) {
			// fetch all documents that are type formTemplate
			return db.query(function(doc, emit) {
				if (doc.type === 'completedForm' && doc.formTemplateId === templateId) emit(doc);
			})
			.then(function(results) {
				return results.rows.map(function(row) {
					return row.key;
				});
			});
		},
		fetchOne: function(completedFormId) {
			return db.get(completedFormId);
		},
		updateOne: function(form) {
			return db.put(form)
					.then(function (updateResponse) {
						form._rev = updateResponse.rev;
						return form;
					});
		},
		createOne: function(completedForm) {
			return db.post(completedForm);
		}
	};
});