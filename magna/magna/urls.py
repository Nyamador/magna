from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from events.views import detail as EventDetail


urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('manage/', include('events.urls')),
    path('evt/<slug:slug>', EventDetail, name="evt"),
    path('', include('pages.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)