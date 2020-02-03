from django.urls import path
from . import views


"""
Urls for Event Organizer 
    Base: 'magtickets.com/evt/...'
"""
urlpatterns = [
    path('create/', views.EventCreation.as_view() , name='create-event'),
    path('<slug:slug>/manage/', views.ManageView, name='event-dashboard'),
    path('<slug:slug>/manage/info', views.EventInformationView.as_view(), name='event-information'),
    path('<slug:slug>/manage/settings/', views.EventSettings, name='event-settings'),
    path('<slug:slug>/manage/orders/', views.EventOrders, name='event-orders'),
    path('<slug:slug>/manage/pay/', views.EventPayout, name='event-payout'),
    path('<slug:slug>/manage/tickets/', views.TicketListView.as_view(), name='ticket-list'),
    path('<slug:slug>/manage/tickets/new', views.TicketCreationView.as_view(), name='ticket-creation'),
]