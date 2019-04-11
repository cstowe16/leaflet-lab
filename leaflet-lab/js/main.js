//main js
var map = L.map('mapid').setView([25, -90], 1.5);

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
            createLegend(map, attributes);
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
    var attribute = "1980_1";

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

    

    createPopup(feature.properties, attribute, layer, options.radius);

    
//    //build popup content string
//     var popupContent = "<p><b>Country:</b> " + feature.properties.Country + "</p>";
//
//    //add formatted attribute to popup content string
//    var year = attribute.split("_")[0];
//    popupContent += "<p><b>Population in " + year + ":</b> " + feature.properties[attribute] + " million</p>";
//
//    //bind the popup to the circle marker
//    layer.bindPopup(popupContent,{
//        offset: new L.Point(0,-options.radius),
//        closeButton: false 
//    });
    
      ///event listeners to open popup on hover and fill panel on click...Example 2.5 line 4
    layer.on({
        mouseover: function(){
            this.openPopup();
        },
        mouseout: function(){
            this.closePopup();
        },
//        click: function(){
//            $("#panel").html(popupContent);
//        }
    });

    //return the circle marker to the L.geoJson pointToLayer option
    return layer;
};


function createPopup(properties, attribute, layer, radius){
    //add city to popup content string
    var popupContent = "<p><b>Country:</b> " + properties.Country + "</p>";

    //add formatted attribute to panel content string
    var year = attribute.split("_")[0];
    popupContent += "<p><b>Population in " + year + ":</b> " + properties[attribute] + " million</p>";

    //replace the layer popup
    layer.bindPopup(popupContent, {
        offset: new L.Point(0,-radius)
    });
};
    
//function createPopup(props, attribute, radius){
//     //build popup content string
//     var popupContent = "<p><b>Country:</b> " + props + "</p>";
//
//    //add formatted attribute to popup content string
//    var year = attribute.split("_")[0];
//    popupContent += "<p><b>Population in " + year + ":</b> " + attri + " million</p>";
//
//    //bind the popup to the circle marker
//    layer.bindPopup(popupContent,{
//        offset: new L.Point(0,-options.radius),
//        closeButton: false 
//    });
//       
//}

//Create new sequence controls
function createSequenceControls(map, attributes){   
    var SequenceControl = L.Control.extend({
        options: {
            position: 'bottomleft'
        },

       //Example 2.3 line 1
        onAdd: function (map) {
            // create the control container with a particular class name
            var container = L.DomUtil.create('div', 'sequence-control-container');

            //create range input element (slider)
            $(container).append('<input class="range-slider" type="range">');

            //add skip buttons
            $(container).append('<button class="skip" id="reverse" title="Reverse">Reverse</button>');
            $(container).append('<button class="skip" id="forward" title="Forward">Skip</button>');
            
             //disable any mouse event listeners for the container
            L.DomEvent.disableClickPropagation(container);

            return container;
            
        }     
    });

    map.addControl(new SequenceControl());
    $('.range-slider').attr({
        max: 6,
        min: 0,
        value: 0,
        step: 1
    });
//   Step 5: click listener for buttons
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
        //console.log(attributes[index]);
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

////Step 1: Create new sequence controls
//function createSequenceControls(map,attributes){
//    //create range input element (slider)
//    $('#panel').append('<input class="range-slider" type="range">');
//    
//     //set slider attributes
//    $('.range-slider').attr({
//        max: 6,
//        min: 0,
//        value: 0,
//        step: 1
//    });
//
//    $('#panel').append('<button class="skip" id="reverse">Reverse</button>');
//    $('#panel').append('<button class="skip" id="forward">Skip</button>');
//    
//    //Step 5: click listener for buttons
//    $('.skip').click(function(){
//        //sequence
//          //get the old index value
//        var index = $('.range-slider').val();
//
//        //Step 6: increment or decrement depending on button clicked
//        if ($(this).attr('id') == 'forward'){
//            index++;
//            //Step 7: if past the last attribute, wrap around to first attribute
//            index = index > 6 ? 0 : index;
//        } else if ($(this).attr('id') == 'reverse'){
//            index--;
//            //Step 7: if past the first attribute, wrap around to last attribute
//            index = index < 0 ? 6 : index;
//        };
//
//        //Step 8: update slider
//        $('.range-slider').val(index);
//           //Called in both skip button and slider event listener handlers
//        //Step 9: pass new attribute to update symbols
//        updatePropSymbols(map, attributes[index]);
//    });
//
//    //Step 5: input listener for slider
//    $('.range-slider').on('input', function(){
//        //sequence
//            //Step 6: get the new index value
//        var index = $(this).val();
//           //Called in both skip button and slider event listener handlers
//        //Step 9: pass new attribute to update symbols
//        updatePropSymbols(map, attributes[index]);
//    });
//};

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

         createPopup(props, attribute, layer, radius);
  
//            //add city to popup content string
//            var popupContent = "<p><b>Country:</b> " + props.Country + "</p>";
//
//            //add formatted attribute to panel content string
//            var year = attribute.split("_")[0];
//            popupContent += "<p><b>Population in " + year + ":</b> " + props[attribute] + " million</p>";
//
//            //replace the layer popup
//            layer.bindPopup(popupContent, {
//                offset: new L.Point(0,-radius)
//            });
        };
    });
    updateLegend(map, attribute);
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
            //var zoom = map.getBoundsZoom(latlng.layer.getBounds());
            map.setView(latlng); // access the zoom
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

function createLegend(map, attributes){
    var LegendControl = L.Control.extend({
        options: {
            position: 'bottomright'
        },

        onAdd: function (map) {
            // create the control container with a particular class name
            var container = L.DomUtil.create('div', 'legend-control-container');

            //add temporal legend div to container
            $(container).append('<div id="temporal-legend">')

            //Step 1: start attribute legend svg string
            var svg = '<svg id="attribute-legend" width="200px" height="100px" >';
            
            
            //array of circle names to base loop on
           //object to base loop on...replaces Example 3.10 line 1
        var circles = {
            max: 20,
            mean: 40,
            min: 60
        };

        //loop to add each circle and text to svg string
        for (var circle in circles){
            //circle string
            svg += '<circle class="legend-circle" id="' + circle + '" fill="#F47821" fill-opacity="0.8" stroke="#000000" cx="50"/>';

            //text string
            svg += '<text id="' + circle + '-text" x="100" y="' + circles[circle] + '"></text>';
        };
            //
//            //Step 2: loop to add each circle and text to svg string
//        for (var i=0; i<circles.length; i++){
//            //circle string
//            svg += '<circle class="legend-circle" id="' + circles[i] + 
//            '" fill="#F47821" fill-opacity="0.8" stroke="#000000" cx="60"/>';
//
//            //text string
//            svg += '<text id="' + circles[i] + '-text" x="65" y="60"></text>';
//        };

        //close svg string
        svg += "</svg>";

        //add attribute legend svg to container
        $(container).append(svg);

            return container;
        }
    });

    map.addControl(new LegendControl());

    updateLegend(map, attributes[0]);
};


//Calculate the max, mean, and min values for a given attribute
function getCircleValues(map, attribute){
    //start with min at highest possible and max at lowest possible number
    var min = Infinity,
        max = -Infinity;

    map.eachLayer(function(layer){
        //get the attribute value
        if (layer.feature){
            var attributeValue = Number(layer.feature.properties[attribute]);

            //test for min
            if (attributeValue < min){
                min = attributeValue;
            };

            //test for max
            if (attributeValue > max){
                max = attributeValue;
            };
        };
    });

    //set mean
    var mean = (max + min) / 2;

    //return values as an object
    return {
        max: max,
        mean: mean,
        min: min
    };
};


//Example 3.7 Update the legend with new attribute
function updateLegend(map, attribute){
    //create content for legend
    var year = attribute.split("_")[0];
    var content = "Population in " + year;

    //replace legend content
    $('#temporal-legend').html(content);
   //Example 3.8 line 43...get the max, mean, and min values as an object
    var circleValues = getCircleValues(map, attribute);

    for (var key in circleValues){
        //get the radius
        var radius = calcPropRadius(circleValues[key]);

        //Step 3: assign the cy and r attributes
        $('#'+key).attr({
            cy: 90 - radius,
            r: radius
        });
        //Step 4: add legend text
        $('#'+key+'-text').text(Math.round(circleValues[key]*100)/100 + " million");
    };
    
};

$(document).ready(jQueryAjax);
    