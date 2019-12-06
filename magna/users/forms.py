from allauth.account.forms import SignupForm
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import MagnaUser


class MagnaUserCreationForm(UserCreationForm):

    class Meta:
        model = MagnaUser
        fields = ('email','mobile',)


class MagnaSignUpForm(SignupForm):
    """
    Overriding AllAuth's SignupForm to add an option for telephone number
    """

    mobile = forms.CharField(max_length=20)

    def save(self, request):
        user = super(MagnaSignUpForm, self).save(request)
        return user



class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = MagnaUser
        # fields = UserChangeForm.Meta.fields
        fields = ('email',)