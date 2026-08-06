from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_tracker, name='user-tracker'),
    path('addListing/', views.addListing, name='addListing'),
]