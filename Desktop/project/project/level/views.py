from django.shortcuts import render
from .models import BookingSearch, Room  # Make sure Room is imported!

def index(request):
    if request.method == 'POST':
        # 1. Save the search data
        dest = request.POST['destination']
        c_in = request.POST['checkin']
        c_out = request.POST['checkout']
        adult_count = request.POST['adults']
        child_count = request.POST['children']
        room_count = request.POST['rooms']

        new_search = BookingSearch(
            destination=dest,
            check_in=c_in,
            check_out=c_out,
            adults=adult_count,
            children=child_count,
            rooms=room_count
        )
        new_search.save()
        print("Data saved!")

        # 2. FETCH ROOMS from Database
        all_rooms = Room.objects.all()

        # 3. Send the user to the new 'results.html' page with the room data
        return render(request, 'results.html', {'rooms': all_rooms})

    # If it's a normal visit (GET request), just show the home page
    return render(request, 'index.html')