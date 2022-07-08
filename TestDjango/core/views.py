from django.shortcuts import render, redirect, get_object_or_404
from .models import * 
from .forms import *
from django.contrib.auth.forms import UserCreationForm
from .models import *
from django.contrib import messages
from django.views.generic import ListView, CreateView
from django.http import Http404
from django.db.models import Q
from django.core.paginator import Paginator
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.decorators import login_required
from django.views.generic import ListView, CreateView
from .carro import Carro


# Create your views here.
def index(request):
    prod = Productos1.objects.all()
    return render(request, 'core/index.html',{'prod' : prod})



def catalogoprod(request):
    prod = Productos1.objects.all()  
    
    return render(request, 'core/catalogo-prod.html', {'prod' : prod})

def Crudprod(request):
    prod = Producto.objects.all()     
    return render(request, 'core/Crud-prod.html', {'prod' : prod})

def crearProd(request):
    formulario = ProductoForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('Crud-prod')
    return render(request, 'core/crearProd.html', {'formulario': formulario})

def crearPromo(request):
    formulario = PromocionForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('Crud-prom')
    return render(request, 'core/crearPromo.html', {'formulario': formulario})

def Crudprom(request):
    prom = Promocion.objects.all()     
    return render(request, 'core/Crud-prom.html', {'prom' : prom})

def eliminarProd(request, id):
    prod = Producto.objects.get(idProducto = id)
    prod.delete()
    return redirect('Crud-prod')

def eliminarPromo(request, id):
    prom = Promocion.objects.get(idPromocion = id)
    prom.delete()
    return redirect('Crud-prom')

def editarProd(request, id):
    prod = Producto.objects.get(idProducto = id)
    formulario = ProductoForm(request.POST or None, request.FILES or None, instance=prod)
    if formulario.is_valid() and request.POST:
        formulario.save()
        return redirect('Crud-prod')
    return render(request, 'core/editarProd.html', {'formulario': formulario})

def editarPromo(request, id):
    promo = Promocion.objects.get(idPromocion = id)
    formulario = PromocionForm(request.POST or None, request.FILES or None, instance=promo)
    if formulario.is_valid() and request.POST:
        formulario.save()
        return redirect('Crud-prom')
    return render(request, 'core/editarPromo.html', {'formulario': formulario})


def plantilla(request):
    
    return render(request, 'core/plantilla.html') 

def subscripciones(request):
    
    return render(request, 'core/subscripciones.html')    

def Vercompras(request):
    
    return render(request, 'core/Ver-compras.html') 

def listarProductos(request):
    prod = Producto.objects.all()  
    print(prod)
    return render(request, 'core/Crud-prod.html', {'prod' : prod})

def listarPromociones(request):
    prod = Promocion.objects.all()  
    print(prod)
    return render(request, 'core/catalogo-promo.html', {'prod' : prod})

#productos1 carrito
def listarProductos1(request):
    prod = Productos1.objects.all()
    return render(request, 'core/Crud-prod1.html', {'prod' : prod})

def crearProd1(request):
    formulario = Producto1Form(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('Crud-prod1')
    return render(request, 'core/crearProd1.html', {'formulario': formulario})

def editarProd1(request, id):
    prod = Productos1.objects.get(id = id)
    formulario = Producto1Form(request.POST or None, request.FILES or None, instance=prod)
    if formulario.is_valid() and request.POST:
        formulario.save()
        return redirect('Crud-prod1')
    return render(request, 'core/editarProd1.html', {'formulario': formulario})

def eliminarProd1(request, id):
    prod = Productos1.objects.get(id= id)
    prod.delete()
    return redirect('Crud-prod1')

def registro(request):
    form = UserCreationForm()
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(to="login")
    return render(request, 'core/registro.html', {'form':form})


def detalleProducto(request, id):
    prod = get_object_or_404(Productos1, id=id)
    return render(request, 'core/detalle_prod.html', {'prod': prod})


#viewcarrito

def viewcart(request):
    return render(request, 'core/carrito/cart.html', {'carro': request.session['carro']})


def agregar_producto(request, producto_id):
    carro=Carro(request)
    producto = Productos1.objects.get(id = producto_id)
    carro.agregar(producto=producto)
    return redirect(to="/viewcart")

def eliminar_producto(request, producto_id):
    carro=Carro(request)
    producto=Productos1.objects.get(id=producto_id)
    carro.eliminar(producto=producto)
    return redirect(to="/viewcart")


def restar_producto(request, producto_id):
    carro = Carro(request)
    producto = Productos1.objects.get(id=producto_id)
    carro.restar(producto=producto)
    return redirect(to="/viewcart")

def cleancart(request):
    carro=Carro(request)
    carro.limpiar_carro()
    return redirect(to="/viewcart")


def procesar_compra(request):
    messages.success(request, 'Gracias por su Compra!!')
    carro = Carro(request)
    carro.limpiar_carro()
    return redirect('/')