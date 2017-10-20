define(['wq/app', 'wq/map', 'wq/photos', 'wq/locate',
        './locateform', './nested', './outboxphotos', './config',
        'leaflet.draw', 'leaflet.markercluster'],
function(app, map, photos, locate, locateform, nested, outboxphotos, config) {

app.use(map);
app.use(photos);
app.use(locate);
app.use(locateform);
app.use(outboxphotos);
app.use(nested);

config.presync = presync;
config.postsync = postsync;
var ready = app.init(config).then(function() {
    app.jqmInit();
    app.prefetchAll();
    app.prefetchAll();
});

// Sync UI
function presync() {
    $('button.sync').html("Syncing...");
    $('li a.ui-icon-minus, li a.ui-icon-alert')
       .removeClass('ui-icon-minus')
       .removeClass('ui-icon-alert')
       .addClass('ui-icon-refresh');
}

function postsync(items) {
    $('button.sync').html("Sync Now");
    app.syncRefresh(items);
}

return ready;

});
