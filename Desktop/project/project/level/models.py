from django.db import models

class BookingSearch(models.Model):
    destination = models.CharField(max_length=200)
    check_in = models.DateField()
    check_out = models.DateField()
    adults = models.PositiveIntegerField(default=1)
    children = models.PositiveIntegerField(default=0)
    rooms = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.destination} | {self.check_in} to {self.check_out}"
# Keep your existing BookingSearch class here...

class Room(models.Model):
    name = models.CharField(max_length=100)       # e.g., "Deluxe Ocean View"
    price = models.IntegerField()                 # e.g., 5000
    capacity = models.IntegerField()              # e.g., 2
    image_url = models.CharField(max_length=2083, default="https://via.placeholder.com/300") # Link to room image

    def __str__(self):
        return f"{self.name} - ₹{self.price}"