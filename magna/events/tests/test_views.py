from django.test import TestCase, Client
from django.urls import reverse

class EventCreationViewTestCase(TestCase):

    def setUp(self):
        client = Client()
        url = reverse('create-event')

class LoginRequiredEventCreationViewTests(EventCreationViewTestCase):
        login_url = reverse('account_login')
        response = self.client.get(self.url)
        self.assertRedirects(response, f'{login_url}?next={url}')

# class EventAuthorTestCase(TestCase):

#     def setup(self):
#         client = Client()
#         url = reverse('event-detail')

#     def test_redirect_if_user_is_not_author(self):
