from django.forms import ModelForm
from .models import Event, Ticket, Guest, GuestList

class EventCreationForm(ModelForm):
    class Meta:
        model = Event
        exclude = ['user', 'image']

class TicketCreationForm(ModelForm):
    class Meta:
        model = Ticket
        fields = '__all__'

class GuestListCreationForm(ModelForm):
    class Meta:
        model = GuestList
        fields = '__all__'

class GuestCreationForm(ModelForm):
    class Meta:
        model = Guest
        fields = '__all__'
