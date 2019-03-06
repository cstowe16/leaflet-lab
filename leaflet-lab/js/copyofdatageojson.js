//copy of data from geojson.io
//var myfeat = {
//  "type": "FeatureCollection",
//  "features": [
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -64.760358,
//          32.301822
//        ]
//      },
//      "properties": {
//        "name": "Bermuda",
//        "Country": "Bermuda",
//        "1980_1": 0.05473,
//        "1985_1": 0.05618,
//        "1990_1": 0.05778,
//        "1995_1": 0.06029,
//        "2000_1": 0.06306,
//        "2005_1": 0.06591,
//        "2010_1": 0.06827,
//        "latitude": 32.301822,
//        "longitude": -64.760358,
//        "desc": "BM",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -107.991707,
//          61.066692
//        ]
//      },
//      "properties": {
//        "name": "Canada",
//        "Country": "Canada",
//        "1980_1": 24.5933,
//        "1985_1": 25.9416,
//        "1990_1": 27.7906,
//        "1995_1": 29.69053,
//        "2000_1": 31.09956,
//        "2005_1": 32.38638,
//        "2010_1": 33.75974,
//        "latitude": 61.066692,
//        "longitude": -107.991707,
//        "desc": "CA",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -42.812597,
//          77.619235
//        ]
//      },
//      "properties": {
//        "name": "Greenland",
//        "Country": "Greenland",
//        "1980_1": 0.05021,
//        "1985_1": 0.05315,
//        "1990_1": 0.05563,
//        "1995_1": 0.05619,
//        "2000_1": 0.05689,
//        "2005_1": 0.05778,
//        "2010_1": 0.05764,
//        "latitude": 77.619235,
//        "longitude": -42.812597,
//        "desc": "GL",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -100.000037,
//          22.500049
//        ]
//      },
//      "properties": {
//        "name": "Mexico",
//        "Country": "Mexico",
//        "1980_1": 68.34748,
//        "1985_1": 76.76723,
//        "1990_1": 84.91365,
//        "1995_1": 92.88035,
//        "2000_1": 99.92662,
//        "2005_1": 106.2029,
//        "2010_1": 112.46886,
//        "latitude": 22.500049,
//        "longitude": -100.000037,
//        "desc": "MX",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -100.445882,
//          39.78373
//        ]
//      },
//      "properties": {
//        "name": "Saint Pierre and Miquelon",
//        "Country": "Saint Pierre and Miquelon",
//        "1980_1": 0.00599,
//        "1985_1": 0.00616,
//        "1990_1": 0.00632,
//        "1995_1": 0.0064,
//        "2000_1": 0.00641,
//        "2005_1": 0.0062,
//        "2010_1": 0.00594,
//        "latitude": 39.78373,
//        "longitude": -100.445882,
//        "desc": "US",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -100.445882,
//          39.78373
//        ]
//      },
//      "properties": {
//        "name": "United States",
//        "Country": "United States",
//        "1980_1": 227.22468,
//        "1985_1": 237.9238,
//        "1990_1": 249.62281,
//        "1995_1": 266.27839,
//        "2000_1": 282.17196,
//        "2005_1": 295.75315,
//        "2010_1": 310.23286,
//        "latitude": 39.78373,
//        "longitude": -100.445882,
//        "desc": "US",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -61.822252,
//          17.079128
//        ]
//      },
//      "properties": {
//        "name": "Antigua and Barbuda",
//        "Country": "Antigua and Barbuda",
//        "1980_1": 0.06855,
//        "1985_1": 0.0644,
//        "1990_1": 0.06416,
//        "1995_1": 0.06871,
//        "2000_1": 0.07535,
//        "2005_1": 0.08128,
//        "2010_1": 0.08675,
//        "latitude": 17.079128,
//        "longitude": -61.822252,
//        "desc": "AG",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -64.967282,
//          -34.996496
//        ]
//      },
//      "properties": {
//        "name": "Argentina",
//        "Country": "Argentina",
//        "1980_1": 28.3698,
//        "1985_1": 30.67176,
//        "1990_1": 33.03558,
//        "1995_1": 35.27384,
//        "2000_1": 37.33565,
//        "2005_1": 39.18126,
//        "2010_1": 41.3432,
//        "latitude": -34.996496,
//        "longitude": -64.967282,
//        "desc": "AR",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -78.000055,
//          24.773655
//        ]
//      },
//      "properties": {
//        "name": "Bahamas, The",
//        "Country": "Bahamas, The",
//        "1980_1": 0.20976,
//        "1985_1": 0.2282,
//        "1990_1": 0.24513,
//        "1995_1": 0.26518,
//        "2000_1": 0.28259,
//        "2005_1": 0.29671,
//        "2010_1": 0.31043,
//        "latitude": 24.773655,
//        "longitude": -78.000055,
//        "desc": "BS",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -59.52503,
//          13.150033
//        ]
//      },
//      "properties": {
//        "name": "Barbados",
//        "Country": "Barbados",
//        "1980_1": 0.25197,
//        "1985_1": 0.25725,
//        "1990_1": 0.26226,
//        "1995_1": 0.26767,
//        "2000_1": 0.27368,
//        "2005_1": 0.28004,
//        "2010_1": 0.28565,
//        "latitude": 13.150033,
//        "longitude": -59.52503,
//        "desc": "BB",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -88.760093,
//          16.825979
//        ]
//      },
//      "properties": {
//        "name": "Belize",
//        "Country": "Belize",
//        "1980_1": 0.14442,
//        "1985_1": 0.16556,
//        "1990_1": 0.19087,
//        "1995_1": 0.21717,
//        "2000_1": 0.248,
//        "2005_1": 0.28129,
//        "2010_1": 0.31452,
//        "latitude": 16.825979,
//        "longitude": -88.760093,
//        "desc": "BZ",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -64.991229,
//          -17.05687
//        ]
//      },
//      "properties": {
//        "name": "Bolivia",
//        "Country": "Bolivia",
//        "1980_1": 5.4413,
//        "1985_1": 5.93494,
//        "1990_1": 6.5739,
//        "1995_1": 7.37487,
//        "2000_1": 8.1951,
//        "2005_1": 9.07294,
//        "2010_1": 9.94742,
//        "latitude": -17.05687,
//        "longitude": -64.991229,
//        "desc": "BO",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -53.2,
//          -10.333333
//        ]
//      },
//      "properties": {
//        "name": "Brazil",
//        "Country": "Brazil",
//        "1980_1": 123.01963,
//        "1985_1": 137.38198,
//        "1990_1": 151.17006,
//        "1995_1": 163.54428,
//        "2000_1": 176.31962,
//        "2005_1": 188.99308,
//        "2010_1": 201.10333,
//        "latitude": -10.333333,
//        "longitude": -53.2,
//        "desc": "BR",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -80.566713,
//          19.541721
//        ]
//      },
//      "properties": {
//        "name": "Cayman Islands",
//        "Country": "Cayman Islands",
//        "1980_1": 0.01708,
//        "1985_1": 0.02085,
//        "1990_1": 0.02636,
//        "1995_1": 0.03249,
//        "2000_1": 0.03844,
//        "2005_1": 0.04434,
//        "2010_1": 0.05021,
//        "latitude": 19.541721,
//        "longitude": -80.566713,
//        "desc": "KY",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -71.31877,
//          -31.761336
//        ]
//      },
//      "properties": {
//        "name": "Chile",
//        "Country": "Chile",
//        "1980_1": 11.09372,
//        "1985_1": 12.0678,
//        "1990_1": 13.12892,
//        "1995_1": 14.20661,
//        "2000_1": 15.15574,
//        "2005_1": 15.99504,
//        "2010_1": 16.74649,
//        "latitude": -31.761336,
//        "longitude": -71.31877,
//        "desc": "CL",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -73.783892,
//          2.889443
//        ]
//      },
//      "properties": {
//        "name": "Colombia",
//        "Country": "Colombia",
//        "1980_1": 26.63129,
//        "1985_1": 29.74762,
//        "1990_1": 33.14725,
//        "1995_1": 36.53183,
//        "2000_1": 38.91035,
//        "2005_1": 41.48778,
//        "2010_1": 44.20529,
//        "latitude": 2.889443,
//        "longitude": -73.783892,
//        "desc": "CO",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -84.07391,
//          10.273563
//        ]
//      },
//      "properties": {
//        "name": "Costa Rica",
//        "Country": "Costa Rica",
//        "1980_1": 2.29912,
//        "1985_1": 2.64431,
//        "1990_1": 3.02327,
//        "1995_1": 3.44474,
//        "2000_1": 3.88258,
//        "2005_1": 4.20869,
//        "2010_1": 4.51622,
//        "latitude": 10.273563,
//        "longitude": -84.07391,
//        "desc": "CR",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -80.832875,
//          23.013134
//        ]
//      },
//      "properties": {
//        "name": "Cuba",
//        "Country": "Cuba",
//        "1980_1": 9.65298,
//        "1985_1": 10.06563,
//        "1990_1": 10.51344,
//        "1995_1": 10.86545,
//        "2000_1": 11.10586,
//        "2005_1": 11.32615,
//        "2010_1": 11.47746,
//        "latitude": 23.013134,
//        "longitude": -80.832875,
//        "desc": "CU",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -61.365362,
//          15.411314
//        ]
//      },
//      "properties": {
//        "name": "Dominica",
//        "Country": "Dominica",
//        "1980_1": 0.07389,
//        "1985_1": 0.07311,
//        "1990_1": 0.07001,
//        "1995_1": 0.07142,
//        "2000_1": 0.07082,
//        "2005_1": 0.07212,
//        "2010_1": 0.07281,
//        "latitude": 15.411314,
//        "longitude": -61.365362,
//        "desc": "DM",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -70.302803,
//          19.097403
//        ]
//      },
//      "properties": {
//        "name": "Dominican Republic",
//        "Country": "Dominican Republic",
//        "1980_1": 5.69686,
//        "1985_1": 6.37855,
//        "1990_1": 7.08362,
//        "1995_1": 7.75897,
//        "2000_1": 8.46891,
//        "2005_1": 9.16447,
//        "2010_1": 9.82382,
//        "latitude": 19.097403,
//        "longitude": -70.302803,
//        "desc": "DO",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -79.366696,
//          -1.339767
//        ]
//      },
//      "properties": {
//        "name": "Ecuador",
//        "Country": "Ecuador",
//        "1980_1": 7.9205,
//        "1985_1": 9.06166,
//        "1990_1": 10.31804,
//        "1995_1": 11.26561,
//        "2000_1": 12.44584,
//        "2005_1": 13.66232,
//        "2010_1": 14.79061,
//        "latitude": -1.339767,
//        "longitude": -79.366696,
//        "desc": "EC",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -88.914068,
//          13.800038
//        ]
//      },
//      "properties": {
//        "name": "El Salvador",
//        "Country": "El Salvador",
//        "1980_1": 4.57041,
//        "1985_1": 4.67105,
//        "1990_1": 5.10982,
//        "1995_1": 5.47983,
//        "2000_1": 5.84982,
//        "2005_1": 5.95622,
//        "2010_1": 6.05206,
//        "latitude": 13.800038,
//        "longitude": -88.914068,
//        "desc": "SV",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -100.445882,
//          39.78373
//        ]
//      },
//      "properties": {
//        "name": "Falkland Islands (Islas Malvinas)",
//        "Country": "Falkland Islands (Islas Malvinas)",
//        "1980_1": 0.002,
//        "1985_1": 0.002,
//        "1990_1": 0.002,
//        "1995_1": 0.002,
//        "2000_1": 0.00285,
//        "2005_1": 0.00297,
//        "2010_1": 0.00314,
//        "latitude": 39.78373,
//        "longitude": -100.445882,
//        "desc": "US",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -100.445882,
//          39.78373
//        ]
//      },
//      "properties": {
//        "name": "French Guiana",
//        "Country": "French Guiana",
//        "1980_1": 0.07,
//        "1985_1": 0.09,
//        "1990_1": 0.12,
//        "1995_1": 0.15,
//        "2000_1": 0.17,
//        "2005_1": 0.19131,
//        "2010_1": 0.19131,
//        "latitude": 39.78373,
//        "longitude": -100.445882,
//        "desc": "US",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -61.690404,
//          12.136037
//        ]
//      },
//      "properties": {
//        "name": "Grenada",
//        "Country": "Grenada",
//        "1980_1": 0.09016,
//        "1985_1": 0.09306,
//        "1990_1": 0.0942,
//        "1995_1": 0.09774,
//        "2000_1": 0.10161,
//        "2005_1": 0.10459,
//        "2010_1": 0.10782,
//        "latitude": 12.136037,
//        "longitude": -61.690404,
//        "desc": "GD",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -100.445882,
//          39.78373
//        ]
//      },
//      "properties": {
//        "name": "Guadeloupe",
//        "Country": "Guadeloupe",
//        "1980_1": 0.337,
//        "1985_1": 0.354,
//        "1990_1": 0.39,
//        "1995_1": 0.42,
//        "2000_1": 0.43,
//        "2005_1": 0.44452,
//        "2010_1": 0.44452,
//        "latitude": 39.78373,
//        "longitude": -100.445882,
//        "desc": "US",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -89.898809,
//          15.635609
//        ]
//      },
//      "properties": {
//        "name": "Guatemala",
//        "Country": "Guatemala",
//        "1980_1": 6.64959,
//        "1985_1": 7.58084,
//        "1990_1": 8.96555,
//        "1995_1": 10.02782,
//        "2000_1": 11.08503,
//        "2005_1": 12.18255,
//        "2010_1": 13.55044,
//        "latitude": 15.635609,
//        "longitude": -89.898809,
//        "desc": "GT",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -58.93988,
//          4.88732
//        ]
//      },
//      "properties": {
//        "name": "Guyana",
//        "Country": "Guyana",
//        "1980_1": 0.75935,
//        "1985_1": 0.76225,
//        "1990_1": 0.77153,
//        "1995_1": 0.76916,
//        "2000_1": 0.78556,
//        "2005_1": 0.7765,
//        "2010_1": 0.74849,
//        "latitude": 4.88732,
//        "longitude": -58.93988,
//        "desc": "GY",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -72.357097,
//          19.139995
//        ]
//      },
//      "properties": {
//        "name": "Haiti",
//        "Country": "Haiti",
//        "1980_1": 5.5077,
//        "1985_1": 6.11992,
//        "1990_1": 6.79794,
//        "1995_1": 7.5704,
//        "2000_1": 8.41289,
//        "2005_1": 9.20467,
//        "2010_1": 9.64892,
//        "latitude": 19.139995,
//        "longitude": -72.357097,
//        "desc": "HT",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -86.075514,
//          15.257243
//        ]
//      },
//      "properties": {
//        "name": "Honduras",
//        "Country": "Honduras",
//        "1980_1": 3.40247,
//        "1985_1": 4.07731,
//        "1990_1": 4.79403,
//        "1995_1": 5.55079,
//        "2000_1": 6.3594,
//        "2005_1": 7.19307,
//        "2010_1": 7.98942,
//        "latitude": 15.257243,
//        "longitude": -86.075514,
//        "desc": "HN",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -77.394769,
//          18.185051
//        ]
//      },
//      "properties": {
//        "name": "Jamaica",
//        "Country": "Jamaica",
//        "1980_1": 2.2288,
//        "1985_1": 2.31818,
//        "1990_1": 2.34701,
//        "1995_1": 2.46907,
//        "2000_1": 2.61563,
//        "2005_1": 2.73651,
//        "2010_1": 2.84723,
//        "latitude": 18.185051,
//        "longitude": -77.394769,
//        "desc": "JM",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -100.445882,
//          39.78373
//        ]
//      },
//      "properties": {
//        "name": "Martinique",
//        "Country": "Martinique",
//        "1980_1": 0.339,
//        "1985_1": 0.353,
//        "1990_1": 0.374,
//        "1995_1": 0.394,
//        "2000_1": 0.416,
//        "2005_1": 0.426,
//        "2010_1": 0.426,
//        "latitude": 39.78373,
//        "longitude": -100.445882,
//        "desc": "US",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -62.191684,
//          16.741704
//        ]
//      },
//      "properties": {
//        "name": "Montserrat",
//        "Country": "Montserrat",
//        "1980_1": 0.01177,
//        "1985_1": 0.01132,
//        "1990_1": 0.01073,
//        "1995_1": 0.01027,
//        "2000_1": 0.00395,
//        "2005_1": 0.00453,
//        "2010_1": 0.00512,
//        "latitude": 16.741704,
//        "longitude": -62.191684,
//        "desc": "MS",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -100.445882,
//          39.78373
//        ]
//      },
//      "properties": {
//        "name": "Netherlands Antilles",
//        "Country": "Netherlands Antilles",
//        "1980_1": 0.23244,
//        "1985_1": 0.24443,
//        "1990_1": 0.18879,
//        "1995_1": 0.19891,
//        "2000_1": 0.21018,
//        "2005_1": 0.2201,
//        "2010_1": 0.22869,
//        "latitude": 39.78373,
//        "longitude": -100.445882,
//        "desc": "US",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -84.870031,
//          12.372493
//        ]
//      },
//      "properties": {
//        "name": "Nicaragua",
//        "Country": "Nicaragua",
//        "1980_1": 2.80565,
//        "1985_1": 3.19084,
//        "1990_1": 3.68513,
//        "1995_1": 4.38462,
//        "2000_1": 4.93515,
//        "2005_1": 5.46918,
//        "2010_1": 5.99593,
//        "latitude": 12.372493,
//        "longitude": -84.870031,
//        "desc": "NI",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -81.306625,
//          8.309607
//        ]
//      },
//      "properties": {
//        "name": "Panama",
//        "Country": "Panama",
//        "1980_1": 1.95957,
//        "1985_1": 2.16762,
//        "1990_1": 2.39344,
//        "1995_1": 2.63817,
//        "2000_1": 2.89951,
//        "2005_1": 3.15503,
//        "2010_1": 3.41068,
//        "latitude": 8.309607,
//        "longitude": -81.306625,
//        "desc": "PA",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -58.169344,
//          -23.316593
//        ]
//      },
//      "properties": {
//        "name": "Paraguay",
//        "Country": "Paraguay",
//        "1980_1": 3.1716,
//        "1985_1": 3.63346,
//        "1990_1": 4.20049,
//        "1995_1": 4.82556,
//        "2000_1": 5.41824,
//        "2005_1": 5.92554,
//        "2010_1": 6.37583,
//        "latitude": -23.316593,
//        "longitude": -58.169344,
//        "desc": "PY",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -75.045851,
//          -6.86997
//        ]
//      },
//      "properties": {
//        "name": "Peru",
//        "Country": "Peru",
//        "1980_1": 17.2953,
//        "1985_1": 19.43193,
//        "1990_1": 21.59975,
//        "1995_1": 23.94219,
//        "2000_1": 26.0867,
//        "2005_1": 28.05111,
//        "2010_1": 29.907,
//        "latitude": -6.86997,
//        "longitude": -75.045851,
//        "desc": "PE",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -100.445882,
//          39.78373
//        ]
//      },
//      "properties": {
//        "name": "Puerto Rico",
//        "Country": "Puerto Rico",
//        "1980_1": 3.20965,
//        "1985_1": 3.38211,
//        "1990_1": 3.53691,
//        "1995_1": 3.6831,
//        "2000_1": 3.81441,
//        "2005_1": 3.91072,
//        "2010_1": 3.9787,
//        "latitude": 39.78373,
//        "longitude": -100.445882,
//        "desc": "US",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -62.768728,
//          17.346228
//        ]
//      },
//      "properties": {
//        "name": "Saint Kitts and Nevis",
//        "Country": "Saint Kitts and Nevis",
//        "1980_1": 0.04357,
//        "1985_1": 0.04293,
//        "1990_1": 0.04166,
//        "1995_1": 0.04313,
//        "2000_1": 0.04566,
//        "2005_1": 0.0479,
//        "2010_1": 0.0499,
//        "latitude": 17.346228,
//        "longitude": -62.768728,
//        "desc": "KN",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -60.975036,
//          13.825049
//        ]
//      },
//      "properties": {
//        "name": "Saint Lucia",
//        "Country": "Saint Lucia",
//        "1980_1": 0.12248,
//        "1985_1": 0.13101,
//        "1990_1": 0.13756,
//        "1995_1": 0.1465,
//        "2000_1": 0.1533,
//        "2005_1": 0.15737,
//        "2010_1": 0.16092,
//        "latitude": 13.825049,
//        "longitude": -60.975036,
//        "desc": "LC",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -61.276557,
//          12.90447
//        ]
//      },
//      "properties": {
//        "name": "Saint Vincent/Grenadines",
//        "Country": "Saint Vincent/Grenadines",
//        "1980_1": 0.09814,
//        "1985_1": 0.10385,
//        "1990_1": 0.10739,
//        "1995_1": 0.10879,
//        "2000_1": 0.10786,
//        "2005_1": 0.10607,
//        "2010_1": 0.10422,
//        "latitude": 12.90447,
//        "longitude": -61.276557,
//        "desc": "VC",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -56.077119,
//          4.141303
//        ]
//      },
//      "properties": {
//        "name": "Suriname",
//        "Country": "Suriname",
//        "1980_1": 0.35408,
//        "1985_1": 0.38042,
//        "1990_1": 0.3948,
//        "1995_1": 0.40283,
//        "2000_1": 0.43249,
//        "2005_1": 0.4605,
//        "2010_1": 0.48662,
//        "latitude": 4.141303,
//        "longitude": -56.077119,
//        "desc": "SR",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -60.982107,
//          10.867785
//        ]
//      },
//      "properties": {
//        "name": "Trinidad and Tobago",
//        "Country": "Trinidad and Tobago",
//        "1980_1": 1.09051,
//        "1985_1": 1.18903,
//        "1990_1": 1.25519,
//        "1995_1": 1.26432,
//        "2000_1": 1.25178,
//        "2005_1": 1.23669,
//        "2010_1": 1.22869,
//        "latitude": 10.867785,
//        "longitude": -60.982107,
//        "desc": "TT",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -71.620178,
//          21.721468
//        ]
//      },
//      "properties": {
//        "name": "Turks and Caicos Islands",
//        "Country": "Turks and Caicos Islands",
//        "1980_1": 0.00747,
//        "1985_1": 0.00932,
//        "1990_1": 0.01151,
//        "1995_1": 0.01444,
//        "2000_1": 0.01751,
//        "2005_1": 0.02057,
//        "2010_1": 0.02353,
//        "latitude": 21.721468,
//        "longitude": -71.620178,
//        "desc": "TC",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -56.020152,
//          -32.875555
//        ]
//      },
//      "properties": {
//        "name": "Uruguay",
//        "Country": "Uruguay",
//        "1980_1": 2.93049,
//        "1985_1": 3.0121,
//        "1990_1": 3.10954,
//        "1995_1": 3.21926,
//        "2000_1": 3.32808,
//        "2005_1": 3.42489,
//        "2010_1": 3.51039,
//        "latitude": -32.875555,
//        "longitude": -56.020152,
//        "desc": "UY",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -66.110932,
//          8.001871
//        ]
//      },
//      "properties": {
//        "name": "Venezuela",
//        "Country": "Venezuela",
//        "1980_1": 14.76789,
//        "1985_1": 16.99751,
//        "1990_1": 19.32522,
//        "1995_1": 21.549,
//        "2000_1": 23.49275,
//        "2005_1": 25.26918,
//        "2010_1": 27.22323,
//        "latitude": 8.001871,
//        "longitude": -66.110932,
//        "desc": "VE",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -100.445882,
//          39.78373
//        ]
//      },
//      "properties": {
//        "name": "Virgin Islands, U.S.",
//        "Country": "Virgin Islands,  U.S.",
//        "1980_1": 0.09964,
//        "1985_1": 0.10076,
//        "1990_1": 0.10396,
//        "1995_1": 0.10782,
//        "2000_1": 0.10864,
//        "2005_1": 0.1096,
//        "2010_1": 0.10975,
//        "latitude": 39.78373,
//        "longitude": -100.445882,
//        "desc": "US",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    },
//    {
//      "type": "Feature",
//      "geometry": {
//        "type": "Point",
//        "coordinates": [
//          -100.445882,
//          39.78373
//        ]
//      },
//      "properties": {
//        "name": "Virgin Islands, British",
//        "Country": "Virgin Islands, British",
//        "1980_1": 0.011,
//        "1985_1": 0.01318,
//        "1990_1": 0.01569,
//        "1995_1": 0.01813,
//        "2000_1": 0.02038,
//        "2005_1": 0.02268,
//        "2010_1": 0.02494,
//        "latitude": 39.78373,
//        "longitude": -100.445882,
//        "desc": "US",
//        "source": "MapQuest Open",
//        "precision": "country"
//      }
//    }
//  ]
//};