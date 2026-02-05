from django.test import TestCase
from .models import BookingSearch

class LevelAppTests(TestCase):

    # TEST 1: Check if the Database Model works
    def test_booking_creation(self):
        entry = BookingSearch.objects.create(
            destination="Hyderabad",
            check_in="2026-05-20",
            check_out="2026-05-25",
            adults=2,
            children=1,
            rooms=1
        )
        self.assertEqual(entry.destination, "Hyderabad")
        print("\n✅ Database Model Test Passed!")

    # TEST 2: Check if the Homepage loads (Views & URLs)
    def test_homepage_status(self):
        # Visit the homepage
        response = self.client.get('') 
        
        # Check if it loaded successfully (Status Code 200)
        self.assertEqual(response.status_code, 200)
        print("✅ Homepage View Test Passed!")