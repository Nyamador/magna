from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('', include('pages.urls')),
    path('event/', include('events.app_urls')), # App Urls
    path('evt/', include('events.dashboard_urls')), # Event Dashboard Urls
    # path('api/v1/', include())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
