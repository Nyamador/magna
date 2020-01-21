from django.urls import path
from . import views


"""
Urls for Event Organizer 
    Base: 'magtickets.com/evt/...'
"""
urlpatterns = [
    path('create', views.EventCreation.as_view() , name='create-event'),
    path('<slug:slug>/manage', views.ManageView, name='event-dashboard'),
]