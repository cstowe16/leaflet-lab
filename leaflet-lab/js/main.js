//main js
var map = L.map('mapid').setView([41, -90], 1.5);

//Instantiates a tile layer object from the URL template
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);


function jQueryAjax(){
    //define a variable to hold the data
    var mydata;

    //basic jQuery ajax method
    $.ajax("data/AmericaCounteyPop.geojson", {
        dataType: "json",
        success: function(response){
            var mydata = response;
            //check the data
            //console.log(mydata);
            //L.geoJSON(mydata).addTo(map);
            var attributes = processData(response);
            console.log(attributes);
            var featureLayer = createPropSymbols(mydata, map,attributes);
            createSequenceControls(map,attributes);
            searchBar(featureLayer);
        }

    });
  
};

//Example 2.1 line 34...Add circle markers for point features to the map
function createPropSymbols(data, map, attributes){
    //create a Leaflet GeoJSON layer and add it to the map
    var featureLayer = L.geoJson(data, {
        pointToLayer: function(feature, latlng){
            return pointToLayer(feature, latlng, attributes);
        }
    }).addTo(map);
    return featureLayer;
};


//calculate the radius of each proportional symbol
function calcPropRadius(attValue) {
    //scale factor to adjust symbol size evenly
    var scaleFactor = 20;
    //area based on attribute value and scale factor
    var area = attValue * scaleFactor;
    //radius calculated based on area
    var radius = Math.sqrt(area/Math.PI);

    return radius;
};

//function to convert markers to circle markers
function pointToLayer(feature, latlng, attributes){
     //Step 4: Assign the current attribute based on the first index of the attributes array
    var attribute = attributes[0];
    //check
    console.log(attribute);
    //Determine which attribute to visualize with proportional symbols
    var attribute = "2010_1";

    //create marker options
    var options = {
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    //For each feature, determine its value for the selected attribute
    var attValue = Number(feature.properties[attribute]);

    //Give each feature's circle marker a radius based on its attribute value
    options.radius = calcPropRadius(attValue);

    //create circle marker layer
    var layer = L.circleMarker(latlng, options);

    //build popup content string
     var popupContent = "<p><b>Country:</b> " + feature.properties.Country + "</p>";

    //add formatted attribute to popup content string
    var year = attribute.split("_")[0];
    popupContent += "<p><b>Population in " + year + ":</b> " + feature.properties[attribute] + " million</p>";

    //bind the popup to the circle marker
    layer.bindPopup(popupContent);
    
      ///event listeners to open popup on hover and fill panel on click...Example 2.5 line 4
    layer.on({
        mouseover: function(){
            this.openPopup();
        },
        mouseout: function(){
            this.closePopup();
        },
        click: function(){
            $("#panel").html(popupContent);
        }
    });

    //return the circle marker to the L.geoJson pointToLayer option
    return layer;
};

//Step 1: Create new sequence controls
function createSequenceControls(map,attributes){
    //create range input element (slider)
    $('#panel').append('<input class="range-slider" type="range">');
    
     //set slider attributes
    $('.range-slider').attr({
        max: 6,
        min: 0,
        value: 0,
        step: 1
    });

    $('#panel').append('<button class="skip" id="reverse">Reverse</button>');
    $('#panel').append('<button class="skip" id="forward">Skip</button>');
    
    //Step 5: click listener for buttons
    $('.skip').click(function(){
        //sequence
          //get the old index value
        var index = $('.range-slider').val();

        //Step 6: increment or decrement depending on button clicked
        if ($(this).attr('id') == 'forward'){
            index++;
            //Step 7: if past the last attribute, wrap around to first attribute
            index = index > 6 ? 0 : index;
        } else if ($(this).attr('id') == 'reverse'){
            index--;
            //Step 7: if past the first attribute, wrap around to last attribute
            index = index < 0 ? 6 : index;
        };

        //Step 8: update slider
        $('.range-slider').val(index);
           //Called in both skip button and slider event listener handlers
        //Step 9: pass new attribute to update symbols
        updatePropSymbols(map, attributes[index]);
    });

    //Step 5: input listener for slider
    $('.range-slider').on('input', function(){
        //sequence
            //Step 6: get the new index value
        var index = $(this).val();
           //Called in both skip button and slider event listener handlers
        //Step 9: pass new attribute to update symbols
        updatePropSymbols(map, attributes[index]);
    });
};

//Step 10: Resize proportional symbols according to new attribute values
function updatePropSymbols(map, attribute){
    map.eachLayer(function(layer){
//Example 3.16 line 4
        if (layer.feature && layer.feature.properties[attribute]){
            //access feature properties
            var props = layer.feature.properties;

            //update each feature's radius based on new attribute values
            var radius = calcPropRadius(props[attribute]);
            layer.setRadius(radius);

            //add city to popup content string
            var popupContent = "<p><b>City:</b> " + props.City + "</p>";

            //add formatted attribute to panel content string
            var year = attribute.split("_")[1];
            popupContent += "<p><b>Population in " + year + ":</b> " + props[attribute] + " million</p>";

            //replace the layer popup
            layer.bindPopup(popupContent, {
                offset: new L.Point(0,-radius)
            });
        };
    });
};

function searchBar(featuresLayer){
    //add search bar
    //map.addLayer(featuresLayer);
	//sample data values for populate map
    
    var searchControl = new L.Control.Search({
        layer: featuresLayer,
        propertyName: 'name',
        marker: false,
        moveToLocation: function(latlng, title, map) {
            //map.fitBounds( latlng.layer.getBounds() );
            var zoom = map.getBoundsZoom(latlng.layer.getBounds());
            map.setView(latlng, zoom); // access the zoom
        }
    });

    searchControl.on('search:locationfound', function(e) {

        console.log('search:locationfound', );

        //map.removeLayer(this._markerSearch)

        e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
        if(e.layer._popup)
            e.layer.openPopup();

    }).on('search:collapsed', function(e) {

        featuresLayer.eachLayer(function(layer) {	//restore feature color
            featuresLayer.resetStyle(layer);
        });	
    });

    map.addControl( searchControl );  //inizialize search control
};




//Above Example 3.8...Step 3: build an attributes array from the data
 function processData(data){
   //empty array to hold attributes
    var attributes = [];

    //properties of the first feature in the dataset
    var properties = data.features[0].properties;
     //console.log('prop:',properties);

    //push each attribute name into attributes array
    for (var attribute in properties){
        //console.log('attr:',attribute);
        //only take attributes with population values
       if (attribute.indexOf("_") > -1){
         attributes.push(attribute);
    };
        
    };
     return attributes;

};



////Import GeoJSON data
//function getData(map){
//    //load the data
//    $.ajax("data/AmericaCounteyPop.geojson", {
//        dataType: "json",
//        success: function(response){
//            
//
//
//   
//         
//    //create an attributes array
//            var attributes = processData(response);
//            console.log('tst');
//            createPropSymbols(response, map);
//            createSequenceControls(map);
//
//        }
//    });
//};

////Step 2: Import GeoJSON data
//function getData(map){
//    //load the data
//    $.ajax("data/MegaCities.geojson", {
//        dataType: "json",
//        success: function(response){
//            //call function to create proportional symbols
//            createPropSymbols(response, map);
//        }
//    });
//};
$(document).ready(jQueryAjax);