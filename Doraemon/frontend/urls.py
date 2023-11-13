from django.urls import path, include
from .views import index

urlpatterns = [
    path('', index),
    path('before', index),
    path('while', index),
    path('visa', index)
    
]