from django.shortcuts import render
from events.models import Event

# # Create your views here.
def index(request):
    # request.hj
    all_events = Event.objects.all()
    

    context = {
        'events': all_events,
    }
    print(request)
    return render(request, "pages/index.html", context)