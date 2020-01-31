from django.urls import path
from . import views 

urlpatterns = [
    path('', views.index, name="home"),
    path('organizer/new', views.OrganizerCreationView.as_view(), name="new-organizer"),
]