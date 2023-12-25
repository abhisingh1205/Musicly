from django.urls import path
from .views import setsession, getsession, delsession, cache_page_view, my_view
from django.views.decorators.cache import cache_page

urlpatterns = [
    path('set/', setsession, name="setsession"),
    path('get/', getsession, name="getsession"),
    path('del/', delsession, name="delsession"),
    path('cache/', cache_page_view, name="cachepage"),
    path('viewcache/', cache_page(60)(my_view), name="viewcache"),
    path('withoutcache/', my_view, name="viewcache"),
]