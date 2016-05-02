#!/usr/bin/env node

var fs = require('fs');

var repository = require('..');

var stream = fs.createWriteStream('./airspace_list.txt');
	repository.sections.forEach(writeSection.bind(this, stream));
stream.end();

function writeSection(stream, section) {
    if (section.title == "Airspace") {
        stream.write('# ' + section.title + '\n\n')
	section.records.forEach(writeRecord.bind(this, stream));
    }
}

function writeRecord(stream, record) {
    if ( record.type == "airspace" ) {
	stream.write( record.area + " " + record.uri + '\n');
    }
    stream.write('\n');
}
