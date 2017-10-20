requirejs.config({
    'baseUrl': '/js/lib',
    'paths': {
        'disasters': '../disasters',
        'data': '../data/'
    }
});

requirejs(['disasters/main']);
