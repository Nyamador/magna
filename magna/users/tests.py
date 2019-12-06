from django.contrib.auth import get_user_model
from django.test import TestCase, Client


class AuthenticationTests(TestCase):

    def setUp(self):
        self.user = get_user_model().objects.create_user(
            email='test@foo.com',
            mobile = '+233298883883',
            password = 'testingpass2032'
        )
    
    def test_user_login_sucess(self):
        self.client.login(email='test@foo.com', password='testingpass2032')
        response =  self.client.get('accounts/login')
        self.assertRedirects(response, '/')
