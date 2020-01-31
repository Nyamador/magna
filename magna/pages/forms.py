from django.forms import ModelForm
from events.models import Organizer


class OrganizerForm(ModelForm):
    class Meta:
        model = Organizer
        exclude = ['user']