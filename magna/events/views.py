from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse_lazy, reverse
from django.views.generic.edit import CreateView
from .models import Event, Ticket
from .forms import EventCreationForm


class EventCreation(LoginRequiredMixin, CreateView):
    model = Event
    template_name = 'events/event_form.html'
    form_class = EventCreationForm
    success_url = reverse_lazy('event-dashboard')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


@login_required()
def dashboard(request):
    return render(request, 'events/dashboard/home.html')


def event_information(request):
    return render(request, 'events/dashboard/information.html')


@login_required()
def event_list(request):
    events = Event.objects.filter(user=request.user)
    context = {
        'events': events
    }

    return render(request, 'events/dashboard/all_events.html', context)


def ticket(request):
    tickets = Ticket.objects.all()
    context = {
        'tickets': tickets
    }
    return render(request, 'events/dashboard/tickets.html', context)


def detail(request, slug):
    event = get_object_or_404(Event, slug=slug)
    if request.user != event.user:
        return redirect(reverse('home'))

    context = {
        'event': event
    }
    return render(request, 'events/event_detail.html', context)
