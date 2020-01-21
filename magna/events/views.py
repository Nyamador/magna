from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse_lazy, reverse
from django.views.generic.edit import CreateView
from .models import Event, Ticket
from .forms import EventCreationForm


class EventCreation(LoginRequiredMixin, CreateView):
    """
    View for Creation of New Event
    """
    model = Event
    template_name = 'events/event_creation_form.html'
    form_class = EventCreationForm
    success_url = reverse_lazy('event-dashboard')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


def EventDetailView(request, slug):
    """
    Event Detail View
    """
    event = get_object_or_404(Event, slug=slug)
    context = {
        'event': event
    }
    return render(request, 'events/event_detail.html', context)


def ManageView(request, slug):

    event = get_object_or_404(Event, slug=slug)

    context = {
        'event': event
    }
    return render(request, 'events/dashboard/all_events.html', context)