var request = require('request');

var repository = require('./');
repository.sections.forEach(describeSection);

function describeSection(section) {
    describe(section.title, function() {
        section.records.forEach(checkRecord);
    })
}

function checkRecord(record) {
    it(record.name, function(done) {
        this.timeout(10000);

        request.head(record.uri, function (error, response) {
            if (error)
                throw new Error(record.uri + ' failed with ' + error);

            if (response.statusCode != 200)
                throw new Error(record.uri + ' returned with HTTP status code ' + response.statusCode);

            done();
        });
    });
}
