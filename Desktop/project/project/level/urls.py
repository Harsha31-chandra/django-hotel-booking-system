from django.urls import path
from . import views

urlpatterns = [
    # This connects the homepage URL to your 'index' view
    path('', views.index, name='index'), 
]