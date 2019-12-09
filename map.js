// var mymap = L.map('mapid').setView([48.6739267, -3.5871429], 13);
var mymap = L.map('mapid', {zoomControl: false}).setView([48.6837671, -3.5896207], 14);
let phototile = L.tileLayer.wms('https://geobretagne.fr/geoserver/photo/wms?', {
    layers: 'WMS:ortho-22-2015'
}).addTo(mymap);
let osmtile = L.tileLayer.wms('https://geobretagne.fr/geoserver/ign/ows?', {
    layers: 'WMS:scan_littoral'
});

mymap.dragging.disable();
mymap.touchZoom.disable();
mymap.doubleClickZoom.disable();
mymap.scrollWheelZoom.disable();
mymap.boxZoom.disable();
mymap.keyboard.disable();
