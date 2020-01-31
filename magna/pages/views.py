from django.shortcuts import render
from django.views.generic.edit import CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from events.models import Event, Organizer
from .forms import OrganizerForm

# # Create your views here.
def index(request):
    
    all_events = Event.objects.all()
    

    context = {
        'events': all_events,
    }
    return render(request, "pages/index.html", context)


class OrganizerCreationView(LoginRequiredMixin, CreateView):
    """
    View for creating an organizer
    """
    model = Organizer
    form_class = OrganizerForm
    template_name = "pages/organizer_creation_form.html"
    success_url = reverse_lazy('home')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)