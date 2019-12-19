from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from .models import Event
from .forms import EventCreationForm


class EventCreate(LoginRequiredMixin, CreateView):
    model = Event
    template_name = 'events/event_form.html'
    form_class = EventCreationForm
    success_url = reverse_lazy('event-dashboard')
    # slug_url_kwarg = 'uuid'
    # slug_field = 'event_id'
    # success_url = 'details/{event_id}'
    # fields = ['category', 'name', 'organizer', 'description', 'venue', 'start_date', 'start_time','end_date', 'end_time', 'time_zone']

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


def index(request):

    return render(request, 'dashboard/base.html')

def dashboard(request):

    return render(request, 'events/event_tickets.html')