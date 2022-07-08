from dataclasses import field
from pyexpat import model
from django import forms
from django.forms import ModelForm
from .models import *
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import User


class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = '__all__'

class PromocionForm(forms.ModelForm):
    class Meta:
        model = Promocion
        fields = '__all__'



class Producto1Form(ModelForm):
    class Meta:
        model = Productos1
        fields = ["nombre", "descripcion", "precio", "stock", "imagen"]