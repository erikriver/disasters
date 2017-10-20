# from django.contrib import admin
from django.contrib.gis import admin
from .models import Site, Assessment, AssessmentType, Map


class SiteAdmin(admin.GeoModelAdmin):
    openlayers_url = "https://cdnjs.cloudflare.com/ajax/libs/openlayers/2.13.1/OpenLayers.js"

admin.site.register(Site, SiteAdmin)
admin.site.register(Assessment)
admin.site.register(AssessmentType)
admin.site.register(Map)
