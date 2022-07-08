from django.urls import path
from rest_producto.views import *
from rest_producto.viewslogin import * 

urlpatterns = [
    path('lista_producto', lista_producto, name="lista_producto"),
    path('detalle_prod/<id>', detalle_prod, name="detalle_prod"),
    path('lista_producto1', lista_producto1, name="lista_producto1"),
    path('detalle_prod1/<id>', detalle_prod1, name="detalle_prod1"),
    path('lista_promocion', lista_promocion, name="lista_promocion"),
    path('detalle_promo/<id>', detalle_promo, name="detalle_promo"),
    path('loginAPI', loginAPI, name="loginAPI"),
    
]
