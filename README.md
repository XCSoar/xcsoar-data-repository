# XCSoar File Manager Data Repository

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0d699796e8984182be062691b0dffef6)](https://app.codacy.com/gh/XCSoar/xcsoar-data-repository?utm_source=github.com&utm_medium=referral&utm_content=XCSoar/xcsoar-data-repository&utm_campaign=Badge_Grade_Settings)
[![Test URls and Deploy](https://github.com/XCSoar/xcsoar-data-repository/actions/workflows/deploy.yml/badge.svg)](https://github.com/XCSoar/xcsoar-data-repository/actions/workflows/deploy.yml)

This repository describes the data that the File Manager of
[XCSoar](https://xcsoar.org/) is able to download. This data includes
terrain and topography maps, airspace, waypoint and other files like the FlarmNet
database.

## Contributing

Contributions here have to pass:

* A URL availability check
* A review by another contributer

If both checks pass, the resulting repository file is automatically generated
and deployed to
[http://download.xcsoar.org/repository](http://download.xcsoar.org/repository)

If you feel that some important files are missing, please fork this repository
and send a [pull request](https://github.com/XCSoar/xcsoar-data-repository/pulls).

### Datafiles

* [airspace-special.json](data/airspace-special.json)
  Speciality based airspace such as competition borders
* [airspace.json](data/airspace.json) National airspace
* [flarmnet.json](data/flarmnet.json) FlarmNet database sources
* [maps.json](data/maps.json) Prebuilt maps for XCSoar
* [openaip.json](data/openaip.json) Autogenerated thermal hotspots
* [travel-by-glider.json](data/travel-by-glider.json) Travel by glider
  waypoint details for cross country holidays
* [waypoints-by-country.json](data/waypoints-by-country.json) - Waypoints,
  airfields etc. by country
  ([data maintained here](https://github.com/XCSoar/xcsoar-data-content/tree/master/waypoints))
* [waypoints-special.json](data/waypoints-special.json) Waypoints,
  outlanding fields, competitions

### Structure of entry

Example entry:

```json
{
  "name": "ARG_CENTRO_HighRes.xcm",
  "uri": "http://download.xcsoar.org/maps/ARG_CENTRO_HighRes.xcm",
  "type": "map",
  "area": "ar",
  "update": "2013-02-16"
},
```

#### name

This should be the file name on the XCSoar client side.
Try to keep this consistent during updates.

#### uri

The URL of the location of the file to download.
Please note:

* Use HTTP URLs when possible as some platforms can't do SSL
* The URL is checked before the resulting repository file is deployed

#### type

File type of the referenced file:

* waypoint (Turnpoints in CUP format)
* waypoint-details (Additonal description of waypoints)
* map (XCM map)
* airspace (Airspace in OpenAIR format)
* flarmnet (Flarmnet or OGN database)

#### area

This is the
[ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)
country code, of the area the file is active in.

#### update

Here we specify the date from which the data is valid.
A special value is 'daily' for files that should be updated daily.

## Installation on Debian

To run the test manually you require [nodejs](https://nodejs.org):

```bash
apt-get install nodejs npm
npm install
```

## Usage

### URL tester

To run the URL check manually:

```bash
npm test
```

### Generate repository flat file

To generate the repository flat file used by XCSoar, use the following command:

```bash
npm run convert
```
