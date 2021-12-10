var path = require("path");
var request = require("request");
var repository = require("./");

function describeSection(section) {
    describe(section.title, function() {
        section.records.forEach(checkRecord);
    });
}

function isValidFilename (fileName) {
    var rgxForbiddenChars = /^[^\\/:\*\?"<>\|]+$/; // Forbidden characters \ / : * ? " < > |
    var rgxNoLeadingDot = /^\./; // Cannot start with dot (.)
    var rgxForbiddenFileNames = /^(nul|prn|con|aux|lpt[0-9]|com[0-9])(\.|$)/i; // Forbidden file names
    return rgxForbiddenChars.test(fileName) && !rgxNoLeadingDot.test(fileName) && !rgxForbiddenFileNames.test(fileName);
}

function checkRecord(record) {
    it(record.name, function(done) {
        this.timeout(10000);

        if (!isValidFilename(record.name)) {
            throw new Error(record.name + " is an invalid filename");
        }

        var expectExt = null;
        switch (record.type) {
            case "map":
                expectExt = "xcm";
                break;
            case "airspace":
                expectExt = "txt";
                break;
            case "waypoint":
                expectExt = "cup";
                break;
            case "waypoint-details":
                expectExt = "txt";
                break;
            case "flarmnet":
                expectExt = "fln";
                break;
            default:
                break;
        }
        if (expectExt && path.extname(record.name).substr(1) !== expectExt) {
            throw new Error(record.name + " has an invalid extension for its type (expected \"" + expectExt + "\")");
        }

        var r = request.head(record.uri, function (error, response) {
            if (error && error.code !== "HPE_INVALID_CONSTANT") {
                throw new Error(record.uri + " failed with " + error);
            }
            if (r.response.statusCode !== 200) {
                throw new Error(record.uri + " returned with HTTP status code " + r.response.statusCode);
            }
            done();
        });
    });
}

repository.sections.forEach(describeSection);
