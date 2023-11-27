from django.urls import path, include
from .views import index

urlpatterns = [
    path('', index),
    path('before', index),
    path('while', index),
    path('visa', index),
    path('exam', index),
    path('insurance', index),
    path('communication', index),
    path('transportation', index),
    path('finance', index),
    path('study&work', index),
    path('dining&accommodation', index),
    path('entertainment', index)
    
]