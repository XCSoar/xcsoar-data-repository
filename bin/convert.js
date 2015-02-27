#!/usr/bin/env node

var fs = require('fs');

var repository = require('..');

var stream = fs.createWriteStream('./repository');
repository.sections.forEach(writeSection.bind(this, stream));
stream.end();

function writeSection(stream, section) {
    if (section.title)
        stream.write('# ' + section.title + '\n\n');

    section.records.forEach(writeRecord.bind(this, stream));
}

function writeRecord(stream, record) {
    for (var key in record)
        if (record.hasOwnProperty(key))
            stream.write(key + '=' + record[key] + '\n')

    stream.write('\n');
}
