from rest_framework import serializers
from .models import Dessert

class DessertSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dessert
        fields = ('id', 'title', 'description', 'category', 'ingredients', 'steps', 'img_src', 'created_at')
