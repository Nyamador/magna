from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse_lazy, reverse
from django.views.generic.edit import CreateView
from django.views.generic import ListView
from .models import Event, Ticket
from .forms import EventCreationForm


class EventCreation(LoginRequiredMixin, CreateView):
    """
    View for Creation of New Event
    """
    model = Event
    template_name = 'events/event_creation_form.html'
    form_class = EventCreationForm
    slug_field = 'slug'
    slug_url_kwarg = 'slug'

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


def EventDetailView(request, slug):
    """
    Event Detail View for Attendee
    """
    event = get_object_or_404(Event, slug=slug)
    context = {
        'event': event
    }
    return render(request, 'events/event_detail.html', context)


@login_required()
def ManageView(request, slug):
    """
    Homepage for event dashboard per event
    """

    event = get_object_or_404(Event, slug=slug)

    context = {
        'event': event
    }
    return render(request, 'events/dashboard/home.html', context)


class TicketListView(ListView, LoginRequiredMixin):

    context_object_name = 'tickets'
    template_name = 'events/dashboard/tickets/all-tickets.html'

    def get_queryset(self):
        qs = Ticket.objects.all()
        if self.kwargs.get('slug'):
            qs = qs.filter(event__slug=self.kwargs['slug'])
        return qs


@login_required()
def TicketCreationView(request):

    return render(request, 'events/dashboard/new-ticket.html')
