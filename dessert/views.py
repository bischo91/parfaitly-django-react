from django.shortcuts import render
from .models import Dessert
from .serializers import DessertSerializer
from rest_framework import generics
from django.views import generic

class DessertListView(generics.ListAPIView):
    queryset = Dessert.objects.all()
    serializer_class = DessertSerializer

class DessertListCreate(generics.ListCreateAPIView):
    queryset = Dessert.objects.all()
    serializer_class = DessertSerializer

class DessertListDelete(generics.DestroyAPIView):
    queryset = Dessert.objects.all()
    serializer_class = DessertSerializer

class DessertListUpdate(generics.UpdateAPIView):
    queryset = Dessert.objects.all()
    serializer_class = DessertSerializer
# Create your views here.
