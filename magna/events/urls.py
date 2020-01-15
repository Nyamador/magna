from django.urls import path
from . import views

urlpatterns = [
    # path('', views.index, name='events-home'),
    # path('events/detail/<slug:slug>', views.EventInformation.as_view(), name='event-information'),
    path('events/create', views.EventCreation.as_view() , name='create-event'),
    path('events/', views.dashboard, name='event-dashboard'),
    path('events/detail', views.detail, name='event-detail'),
    path('events/tickets', views.ticket, name='event-ticket'),
    path('events/all', views.event_list, name='all-events'),
    path('events/dashboard/info', views.event_information, name='event-information'),
]