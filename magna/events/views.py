from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse_lazy, reverse
from django.views.generic.edit import CreateView
from django.views.generic import ListView
from .models import Event, Ticket, Organizer
from .forms import EventCreationForm, TicketCreationForm



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

    # def get_form(self):
    #     organizer = Organizer.objects.filter(user=self.request.user)
    #     form = EventCreationForm(initial={'organizer': organizer})
    #     print(form, organizer)
    #     return form


def EventDetailView(request, slug):
    """
    Event Detail View for Attendee
    """
    event = get_object_or_404(Event, slug=slug)
    tickets = event.ticket_set.all()
    context = {
        'event': event,
        'tickets': tickets
    }

    # Link Tracking
    # referrer = request.GET['mg_source']
    # channel = request.GET['mg_channel']
    return render(request, 'events/event_detail.html', context)


def user_is_author(user,event):
    """
    Checks if request.user is the author/creator of the event
    """
    event = get_object_or_404(Event, slug=slug)
    return user == user

# @user_passes_test(user_is_author)
def ManageView(request, slug):
    """
    Homepage for dashboard per event
    """
    #  todo: Make sure the user visiting the page is the owner of the event
    event = get_object_or_404(Event, slug=slug)

    if request.user != event.user:
        return redirect(reverse('home'))

    context = {
        'event': event
    }
    return render(request, 'events/dashboard/home.html', context)




class TicketListView(ListView, LoginRequiredMixin):

    context_object_name = 'tickets'
    template_name = 'events/dashboard/tickets/all-tickets.html'

    def get_queryset(self):
        qs = Ticket.objects.all() # Get all Tickets
        if self.kwargs.get('slug'):
            # Filter initial qs list and get only tickets belonging to the current event
            qs = qs.filter(event__slug=self.kwargs['slug'])
        return qs

    def get_context_data(self, **kwargs):
         # Call the base implementation first to get a context
        context = super().get_context_data(**kwargs)
        event = get_object_or_404(Event, slug=self.kwargs['slug'])
        context['slug'] = self.kwargs['slug']
        context['event'] = event
        return context



class TicketCreationView(LoginRequiredMixin, CreateView):
    """
    View for creating an event
    """
    model = Ticket
    template_name = 'events/dashboard/tickets/new-ticket.html'
    form_class = TicketCreationForm

    def get_context_data(self, **kwargs):
        # Call the base class implementation first to get a context
        context = super().get_context_data(**kwargs)
        event = get_object_or_404(Event, slug=self.kwargs['slug'])
        context['event'] = event
        return context

    def form_valid(self, form):
        event = get_object_or_404(Event, slug=self.kwargs['slug'])
        form.instance.event = event
        return super().form_valid(form)

    def get_success_url(self):
        return reverse_lazy('ticket-list', args=[self.kwargs['slug']])



def EventSettings(request, slug):
    event = get_object_or_404(Event, slug=slug)
    context = {
        'event': event
    }
    return render(request, 'events/dashboard/settings.html', context)



def EventPayout(request, slug):
    event = get_object_or_404(Event, slug=slug)
    context = {
        'event': event
    }
    return render(request, 'events/dashboard/payout.html', context)



def EventOrders(request, slug):
    event = get_object_or_404(Event, slug=slug)
    context = {
        'event': event
    } 
    return render(request, 'events/dashboard/orders.html', context)  