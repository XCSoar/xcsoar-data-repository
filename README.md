XCSoar File Manager Data Repository
===================================

[![Travis Build Status](https://img.shields.io/travis/XCSoar/xcsoar-data-repository/master.svg)](https://travis-ci.org/XCSoar/xcsoar-data-repository)

This repository describes the data that the File Manager of
[XCSoar](https://xcsoar.org/) is able to download. This data includes
terrain and topography maps, airspace, waypoint and other files like FlarmNet
database.

Contributing
------------
If you feel that some important files are missing, please fork this repository
and send pull requests. The structure of the file should be pretty self-explanatory.

Requirements
------------

* [NodeJS](https://nodejs.org)

Installation on Debian 
----------------------

```
apt-get install nodejs
npm install
```

Usage 
-----

#### URL tester:

`npm test`

#### Generate repository flat file

To generate the repository flat file used by xcsoar, use the following command:

`npm run convert`
