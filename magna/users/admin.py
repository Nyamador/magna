from django.contrib import admin
from django.conf import  settings
from django.contrib.auth.admin import UserAdmin


from .forms import CustomUserChangeForm,MagnaUserCreationForm
from .models import MagnaUser, Profile

class MagnaUserAdmin(UserAdmin):
    model = MagnaUser
    add_form = MagnaUserCreationForm
    form = CustomUserChangeForm


admin.site.register(MagnaUser, MagnaUserAdmin)
admin.site.register(Profile)