function getBaseUrl() {
    var baseurl = window.location.pathname.replace("index.html",'');
    baseurl = baseurl.replace(/\/$/,'');
    if (baseurl == 'www') {
        // Windows
        baseurl = '/www';
    }
    return baseurl;
}

require.config({
    'config': {
        'disasters/config': {
             'router': {
                 'base_url': getBaseUrl()
             },
             'store': {
                 'service': 'https://desastres.rivera.pro',
                 'defaults': {'format': 'json'}
             },
        }
    }
});

document.addEventListener('deviceready', function() {
    require(['js/disasters'], function() {
        require(['disasters/main', 'wq/app'], function(ready, app) {
            ready.then(function() {
                app.replaceState('');
                setTimeout(navigator.splashscreen.hide, 10);
            });
        });
    });
});
