// var mymap = L.map('mapid').setView([48.6739267, -3.5871429], 13);
var mymap = L.map('mapid', {zoomControl: false}).setView([48.6739267, -3.5871429], 14);
L.tileLayer.wms('https://geobretagne.fr/geoserver/ign/ows?', {
    layers: 'WMS:scan_littoral'
}).addTo(mymap);

mymap.dragging.disable();
mymap.touchZoom.disable();
mymap.doubleClickZoom.disable();
mymap.scrollWheelZoom.disable();
mymap.boxZoom.disable();
mymap.keyboard.disable();