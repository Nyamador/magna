from django.forms import ModelForm
from .models import Event

class EventCreationForm(ModelForm):
    class Meta:
        model = Event
        exclude = ['user', 'image']
