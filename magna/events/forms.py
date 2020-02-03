from django.forms import ModelForm
from django_summernote.widgets import SummernoteInplaceWidget, SummernoteWidget
from .models import Event, Ticket, Guest, GuestList

class EventCreationForm(ModelForm):
    class Meta:
        model = Event
        exclude = ['image', 'user', 'slug', 'is_active']
        widgets = {
            'description': SummernoteWidget(),
        }

# class OrderForm(ModelForm):
#     class Meta:
#         model = Ticket
#         fields = ['']

class TicketCreationForm(ModelForm):
    class Meta:
        model = Ticket
        exclude = ['event']

class EventUpdateForm(ModelForm):
    class Meta:
        model = Event
        fields = ['name', 'organizer', 'description']
        widgets = {
            'description': SummernoteWidget(),
        }

class GuestListCreationForm(ModelForm):
    class Meta:
        model = GuestList
        fields = '__all__'

class GuestCreationForm(ModelForm):
    class Meta:
        model = Guest
        fields = '__all__'
