from django.contrib import admin

from .models import Event, Organizer

admin.site.register(Event)
admin.site.register(Organizer)