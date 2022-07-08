from re import template
from xml.dom.minidom import Document
from unicodedata import name
from django.urls import  path
from .views import  *
from django.contrib.auth.views import LoginView, LogoutView
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',index,name="index"),
    path('catalogo-prod',catalogoprod,name="catalogo-prod"),
    path('catalogo-promo',listarPromociones,name="catalogo-promo"),
    path('Crud-prod',Crudprod,name="Crud-prod"),
    path('Crud-prod1',listarProductos1,name="Crud-prod1"),
    path('eliminarProd/<int:id>', eliminarProd, name="eliminarProd"),
    path('eliminarProd1/<int:id>', eliminarProd1, name="eliminarProd1"),
    path('eliminarPromo/<int:id>', eliminarPromo, name="eliminarPromo"),
    path('editarProd/<int:id>', editarProd, name="editarProd"),
    path('editarProd1/<int:id>', editarProd1, name="editarProd1"),
    path('editarPromo/<int:id>', editarPromo, name="editarPromo"),
    path('crearProd',crearProd,name="crearProd"),
    path('crearProd1',crearProd1,name="crearProd1"),
    path('crearPromo',crearPromo,name="crearPromo"),
    path('Crud-prom',Crudprom,name="Crud-prom"),
    path('plantilla',plantilla,name="plantilla"),
    path('detalleProducto/<int:id>',detalleProducto,name="detalleProducto"),
    path('subscripciones',subscripciones,name="subscripciones"),
    path('Ver-compras',Vercompras,name="Ver-compras"),
    path('login', LoginView.as_view(template_name="core/login.html"), name="login"),
    #path carrito
    path('viewcart/', views.viewcart, name="viewcart"),

    path('addcart/<producto_id>/', agregar_producto, name="addcart"),

    path('delcart/<producto_id>/', views.eliminar_producto, name="delcart"),

    path('restarcart/<producto_id>/', views.restar_producto, name="restarcart"),

    path('cleancart/', views.cleancart, name="cleancart"),

    path('procesar_compra/', views.procesar_compra, name="procesar_compra"),

    path('detalleproducto/<id>/', views.detalleProducto, name='detalleproducto'),

    path('logout', LogoutView.as_view(template_name="core/logout.html"), name="logout"),
    path('registro', registro, name="registro"),
    


]