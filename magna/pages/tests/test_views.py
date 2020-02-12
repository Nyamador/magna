from django.test import TestCase, Client
from django.shortcuts import reverse


class PageTests(TestCase):

    def test_homepage_view(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(template_name="index.html")
    
    def test_organizer_creation_form_view(self):
        response = self.client.get("/organizer/new")
        login_url = reverse('account_login')
        self.assertRedirects(response, f'{login_url}?next=/organizer/new') 
        self.assertTemplateUsed(template_name="organizer_creation_form.html")
