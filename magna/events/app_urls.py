from django.urls import path
from . import views

"""
Urls for Event Organizer 
    Base: 'magtickets.com/event/...'
"""
urlpatterns = [
    path('<slug:slug>', views.EventDetailView, name='event-detail'),
]