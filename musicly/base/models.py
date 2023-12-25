from django.db import models

# Create your models here.
class Artist(models.Model):
    artist_name = models.CharField(max_length=255, blank=False)
    genre = models.CharField(max_length=100)
    bio = models.TextField()
    image = models.ImageField(upload_to='artist_images/', null=True, blank=True)

    def __str__(self) -> str:
        return self.artist_name
    
class Album(models.Model):
    album_name = models.CharField(max_length=255)
    release_date = models.DateField(blank=True)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='album_images/', null=True, blank=True)

    def __str__(self):
        return self.album_name