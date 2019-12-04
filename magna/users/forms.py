from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import MagnaUser


class MagnaUserCreationForm(UserCreationForm):

    class Meta:
        model = MagnaUser
        fields = ('email',)


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = MagnaUser
        # fields = UserChangeForm.Meta.fields
        fields = ('email',)