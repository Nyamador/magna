from django.test import TestCase, Client
from django.urls import reverse

class EventCreationViewTestCase(TestCase):

    def setUp(self):
        self.client = Client()
        self.url = reverse('create-event')

    def test_login_required_creation_view(self):
        login_url = reverse('account_login')
        response = self.client.get(self.url)
        self.assertRedirects(response, f'{login_url}?next={self.url}')            
