app.factory("SyncFactory", function(DatabaseFactory) {
    let db = DatabaseFactory.getLocalDb();
    let remoteDb = DatabaseFactory.getRemoteDb();

    return {

        syncUp: function() {
            return DatabaseFactory.replicateUp();
        },

        syncDown: function() {
            return DatabaseFactory.replicateDown();
        },

        clearDb: function() {
            return DatabaseFactory.clearLocalDb();
        },

        getStats: function() {
            // This has to be optimized using design docs and views
            return DatabaseFactory.getLocalDb().allDocs({ include_docs: true })
                .then(function(docs) {

                    let groupedCompleted = _.groupBy(docs.rows.filter(function(row) {
                        return row.doc.type === "completedForm";
                    }).map(function(row) {
                        return row.doc }), function(doc) {
                        return doc.formTemplateId;
                    })

                    let formTemplates = docs.rows.filter(function(row) {
                        return row.doc.type === "formTemplate";
                    }).map(function(row) {
                        return row.doc;
                    });

                    return {
                        completedFormsCount: docs.rows.filter(function(row) {
                            return row.doc.type === "completedForm";
                        }).length,
                        formTemplatesCount: docs.rows.filter(function(row) {
                            return row.doc.type === "formTemplate";
                        }).length,
                        completedFormsPerTemplate: formTemplates.map(function(formTemplate) {
                            return {
                                title: formTemplate.title,
                                count: groupedCompleted[formTemplate._id] ? groupedCompleted[formTemplate._id].length : 0
                            }
                        })
                    }
                })
        }

    }
})