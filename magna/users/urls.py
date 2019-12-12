from django.urls import path
# from allauth.account.views import LoginView
from .views import LoginView, ProfileDetail

urlpatterns = [
#  /   path('login/', LoginView, name="account_login")
        # path('profile/<str:str>/', ProfileDetail, name="profile-detail"),
]