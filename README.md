XCSoar File Manager Data Repository
===================================

[![Travis Build Status](https://img.shields.io/travis/XCSoar/xcsoar-data-repository/master.svg)](https://travis-ci.org/XCSoar/xcsoar-data-repository)

This repository describes the data that the File Manager of
[XCSoar](http://www.xcsoar.org/) is able to download. This data includes
terrain and topography maps, airspace, waypoint and other files like FlarmNet
information.

Contributing
------------

If you feel that some important files are missing please fork this repository
and send pull requests including those missing file descriptions. The structure
of the file should pretty much explain itself.

Requirements
------------
 * [NodeJS](https://nodejs.org)
 * [Request Library](https://github.com/request/request)
 * [mocha](http://mochajs.org/)

Installation on Debian 
----------------------

From Packagemanager: 
Install with:

`apt-get install nodejs mocha node-request`

Via npm:

`npm install`

Usage 
-----

#### URL tester:

`mocha test`

#### Generate repository flat file

To Generate the repository flat file used by xcsoar, use the following command:

`nodejs ./bin/convert.js`
