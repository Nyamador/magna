from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')), #Event management 
    path('manage/', include('events.urls')),
    path('', include('pages.urls')),
    path('evt/', include('events.single_urls')), #Event detail
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)