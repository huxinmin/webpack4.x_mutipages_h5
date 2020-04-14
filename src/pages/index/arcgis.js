import { loadModules } from 'esri-loader';
import '../../lib/arcgisConf';

// this will lazy load the ArcGIS API
// and then use Dojo's loader to require the classes
loadModules(['esri/Map','esri/views/MapView'])
  .then(([Map, MapView]) => {
    var map = new Map({
      basemap: 'topo-vector'
    });

    new MapView({
      container: 'viewDiv',
      map: map,
      center: [-118.80500, 34.02700], // longitude, latitude
      zoom: 13
    });
  })
  .catch(err => {
    // handle any errors
    console.error(err);
  });
