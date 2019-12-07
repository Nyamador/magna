from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.views.generic.edit import FormView, CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from .forms import EventCreationForm
from .models import Event
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
