var fs = require('fs');
var data = require('./incendies.json');

var parsed_data = {
  type: "FeatureCollection",
  features: data.features.map(function(region){
    return {
      type: "Feature",
      properties: {
        name: region.properties.Nom_Region,
        start: (new Date(
          region.properties.date 
        )).getTime(),
        end: (new Date(
          region.properties.date 
        )).getTime()
      },
      geometry: region.geometry
    };
  })
};

fs.writeFile('incendiess.jsonp', 'onLoadData(' + JSON.stringify(parsed_data) + ');',() => {});
