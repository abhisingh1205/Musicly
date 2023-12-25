from django.urls import path
from .views import get_all_artists, get_all_albums

urlpatterns = [
    path('artists/', get_all_artists, name="get_all_artists"),
    path('albums/', get_all_albums, name="get_all_albums"),
]