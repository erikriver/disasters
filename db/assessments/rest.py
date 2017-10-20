from wq.db import rest
from .models import Site, AssessmentType, Assessment, Map
from .serializers import AssessmentTypeSerializer, AssessmentSerializer, MapSerializer
from django.conf import settings

rest.router.register_model(
    Site,
    fields="__all__",
    cache="none",
    map=[{
        'mode': 'list',
        'autoLayers': True,
    }, {
        'mode': 'detail',
        'autoLayers': True,
    }, {
        'mode': 'edit',
        'autoLayers': True,
    }],
    #  partial=True,
)

rest.router.register_model(
    AssessmentType,
    serializer=AssessmentTypeSerializer,
    fields="__all__",
)

# this could enable filtering of own assessments

def user_filter(qs, request):
    if request.user.is_authenticated():
        return qs.filter(user=request.user)
    else:
        return qs.none()


rest.router.register_model(
    Assessment,
    serializer=AssessmentSerializer,
    fields="__all__",
    cache="none",
    map=[{
        'mode': 'list',
        'autoLayers': True,
    }, {
        'mode': 'detail',
        'autoLayers': True,
    }],
)


rest.router.register_model(
    Map,
    serializer=MapSerializer,
    fields="__all__",
)



rest.router.add_page('index', {'url': ''})
rest.router.add_page('locate', {
    'url': 'locate',
    'map': {'layers': []},
    'locate': True
})

rest.router.set_extra_config(
    mapbox_token=settings.MAPBOX_TOKEN,
)
