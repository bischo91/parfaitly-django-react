from django.shortcuts import render
from .models import Dessert
from .serializers import DessertSerializer
from rest_framework import generics
from django.views import generic
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

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

# class Assets(View):
#
#     def get(self, _request, filename):
#         path = os.path.join(os.path.dirname(__file__), 'static', filename)
#
#         if os.path.isfile(path):
#             with open(path, 'rb') as file:
#                 return HttpResponse(file.read(), content_type='application/javascript')
#         else:
#             return HttpResponseNotFound()
