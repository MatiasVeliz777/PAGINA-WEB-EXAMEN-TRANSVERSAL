from rest_framework import serializers
from core.models import *

class ProductoSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Producto
        fields = '__all__'

class PromocionSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Promocion
        fields = '__all__'


class Productos1Serializer(serializers.ModelSerializer):
    class Meta: 
        model = Productos1
        fields =  ["nombre", "descripcion", "precio", "stock", "imagen"]
    