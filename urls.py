from django.urls import path
import views
from django.urls import path, include

urlpatterns = [
    path('', views.index ),
]
