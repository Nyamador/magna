from django.urls import path
from .import views

urlpatterns = [
    path('<uuid:id>',views.event, name='event-detail'),
]