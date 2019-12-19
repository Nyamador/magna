from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='events-home'),
    # path('events/detail/<slug:slug>', views.EventInformation.as_view(), name='event-information'),
    path('events/create', views.EventCreate.as_view() , name='create-event'),
    path('events/dashboard', views.dashboard, name='event-dashboard')
]