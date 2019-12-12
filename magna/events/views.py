from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404
from django.views.generic.edit import FormView, CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from .forms import EventCreationForm
from .models import Event, Ticket
from django.urls import reverse_lazy

# Create your views here.
#create
#manage/event
# @login_required()
# def create(request):
    
    
#     context ={
#         'EventCreationForm' : EventCreationForm
#     }
#     return render(request, 'events/create_event.html', context)
class create(CreateView, LoginRequiredMixin):
    # template_name = 'events/create_event.html'
    # form_class = EventCreationForm
    # success_url = '/'
    model = Event
    fields = '__all__'
    success_url = reverse_lazy('/')


def event(request, id):

    event = get_object_or_404(Event, event_id=id)

    # tickets = Ticket.objects.filter(event=event)
    #Create a modal form
    # 1. Load all tickets for the event and their prices
    #2. Allow the user to add  the event to a cart
    # Checkout with Firstname, lastname and mobile/email

    context = {
        'event': event,
    }
    return render(request, 'events/event_detail.html', context)
