from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Artist, Album
from .serializers import ArtistSerializer, AlbumSerializer

# Create your views here.


@api_view(['GET'])
def get_all_artists(request):
    artists = Artist.objects.all()
    serializer = ArtistSerializer(artists, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def get_all_albums(request):
    albums = Album.objects.all()
    serializer = AlbumSerializer(albums, many=True)

    return Response(serializer.data)

