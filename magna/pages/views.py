from django.shortcuts import render
from events.models import Event

# # Create your views here.
def index(request):
    
    all_events = Event.objects.all()
    

    context = {
        'events': all_events,
    }
    return render(request, "pages/index.html", context)