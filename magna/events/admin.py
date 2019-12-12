from django.contrib import admin

from .models import Event, Organizer, Guest, GuestList, GuestTicket, Ticket

admin.site.register(Event)
admin.site.register(Organizer)
admin.site.register(Guest)
admin.site.register(GuestList)
admin.site.register(GuestTicket)
admin.site.register(Ticket)