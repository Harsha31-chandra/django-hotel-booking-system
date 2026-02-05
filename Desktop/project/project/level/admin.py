from django.contrib import admin
from .models import BookingSearch, Room  # We added 'Room' here

# Register your models here.
admin.site.register(BookingSearch)
admin.site.register(Room)