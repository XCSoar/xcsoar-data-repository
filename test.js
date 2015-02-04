var fs = require('fs');
var request = require('request');

describe('repository', function() {
    this.timeout(10000);

    var repo = fs.readFileSync('repository')
        .toString()
        .split('\n\n')
        .map(function(record) {
            return record.split('\n')
                .map(function(line) {
                    return line.trim();
                })
                .filter(function(line) {
                    return line !== '' && line[0] != '#';
                });
        })
        .filter(function(record) {
            return record.length !== 0;
        })
        .map(function(record) {
            var result = {};

            for (var i = 0; i < record.length; i++) {
                var line = record[i].split('=');
                if (line.length != 2) {
                    console.error('Record line misformed: ' + record[i]);
                    continue;
                }

                result[line[0]] = line[1];
            }

            return result;
        })
        .map(function(record) {
            it(record.name, function(done) {
                request.head(record.uri, function (error, response, body) {
                    if (error)
                        throw new Error(record.uri + ' failed with ' + error);

                    if (response.statusCode != 200)
                        throw new Error(record.uri + ' returned with HTTP status code ' + response.statusCode);

                    done();
                });
            });
        });
});
