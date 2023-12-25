from django.shortcuts import render
from django.views.decorators.cache import cache_page
from django.core.cache import cache
# Create your views here.

def setsession(request):
    request.session['name'] = 'Abhishek'
    request.session['city'] = 'Kanpur'
    return render(request, 'learning/setsession.html')

def getsession(request):
    name = request.session.get('name', None)
    city = request.session.get('city', None)
    return render(request, 'learning/getsession.html', {'name': name, 'city': city})


def delsession(request):
    if 'name' in request.session:
        del request.session['name']
    city = request.session.get('city', None)
    return render(request, 'learning/delsession.html', {'city': city})


def cache_page_view(request):
    return render(request, 'learning/caching.html')

''' 
You can cache the view by using this cache_page decorator in view or if you want to use same view with and with caching use cache_page
in the urls.py and use the same view function with and without cache_page for two different urls
@cache_page(60)
def my_view(request):
    return render(request, 'learning/per_view_cache.html')
'''

def my_view(request):
    value = cache.get_or_set('movie', 'James Bond', 60)
    return render(request, 'learning/per_view_cache.html', {'movie': value})