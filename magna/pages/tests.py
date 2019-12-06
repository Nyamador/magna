from django.test import TestCase, Client

class PageTests(TestCase):

    def test_homepage_view(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
