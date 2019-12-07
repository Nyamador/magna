from django.urls import path
from . import views

urlpatterns = [
    path('events/create/', views.create.as_view(), name='create-event'),
]