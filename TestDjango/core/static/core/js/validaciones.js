const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const formularioprod = document.getElementById('formCrudProd');
const inputsprod = document.querySelectorAll('#formCrudProd input');
const formulariopromo = document.getElementById('formCrudPromo');
const inputspromo = document.querySelectorAll('#formCrudPromo input');



const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9}$/, // 7 a 14 numeros.
    precio: /^\d{1,12}$/, // 7 a 14 numeros.
    descuento: /^\d{0,2}$/ // 7 a 14 numeros.
}

const validacionCampos = {
    nombre : false,
    apellido : false,
    usuario : false,
    contraseña : false,
    correo : false,
    telefono : false,
    idprod : false,
    nombre1 : false,
    marca : false,
    precio : false,
    idprom : false,
    idprod_prom : false,
    precioprom : false,
    porcen_desc : false
}

const validarContrasena = () =>{
    const inputPass = document.getElementById('password');
    const inputPass2 = document.getElementById('password2');
    if(inputPass.value !== inputPass2.value){
                document.getElementById('grupo-password2').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-password2').classList.remove('formulario-grupo-correctp');
                document.querySelector('#grupo-password2 i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-password2 i').classList.add('fa-times-circle');
                document.querySelector('#grupo-password2 .formulario-input-error').classList.add('formulario-input-error-activo');
                validacionCampos.contraseña = false;
    }else{
                document.getElementById('grupo-password2').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-password2').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-password2 i').classList.add('fa-check-circle');
                document.querySelector('#grupo-password2 i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-password2 .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.contraseña = true;
    }
}

const validarform = (e) => {
    switch (e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo-nombre').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-nombre').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-nombre i').classList.add('fa-check-circle');
                document.querySelector('#grupo-nombre i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-nombre .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.nombre = true;
            }else{
                document.getElementById('grupo-nombre').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-nombre').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-nombre i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-nombre i').classList.add('fa-times-circle');
                document.querySelector('#grupo-nombre .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "apellido":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo-apellido').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-apellido').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-apellido i').classList.add('fa-check-circle');
                document.querySelector('#grupo-apellido i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-apellido .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.apellido = true;
            }else{
                document.getElementById('grupo-apellido').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-apellido').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-apellido i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-apellido i').classList.add('fa-times-circle');
                document.querySelector('#grupo-apellido .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById('grupo-usuario').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-usuario').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-usuario i').classList.add('fa-check-circle');
                document.querySelector('#grupo-usuario i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-usuario .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.usuario = true;
            }else{
                document.getElementById('grupo-usuario').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-usuario').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-usuario i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-usuario i').classList.add('fa-times-circle');
                document.querySelector('#grupo-usuario .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "password":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('grupo-password').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-password').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-password i').classList.add('fa-check-circle');
                document.querySelector('#grupo-password i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-password .formulario-input-error').classList.remove('formulario-input-error-activo');
                validarContrasena();
            }else{
                document.getElementById('grupo-password').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-password').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-password i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-password i').classList.add('fa-times-circle');
                document.querySelector('#grupo-password .formulario-input-error').classList.add('formulario-input-error-activ');
                validarContrasena();
            }
        break; 
        case "password2":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('grupo-password2').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-password2').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-password2 i').classList.add('fa-check-circle');
                document.querySelector('#grupo-password2 i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-password2 .formulario-input-error').classList.remove('formulario-input-error-activo');
                validarContrasena();
            }else{
                document.getElementById('grupo-password2').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-password2').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-password2 i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-password2 i').classList.add('fa-times-circle');
                document.querySelector('#grupo-password2 .formulario-input-error').classList.add('formulario-input-error-activo');
                
            }
        break; 
        case "correo":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupo-correo').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-correo').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-correo i').classList.add('fa-check-circle');
                document.querySelector('#grupo-correo i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-correo .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.correo = true;
            }else{
                document.getElementById('grupo-correo').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-correo').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-correo i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-correo i').classList.add('fa-times-circle');
                document.querySelector('#grupo-correo .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "telefono":
            if(expresiones.telefono.test(e.target.value)){
                document.getElementById('grupo-telefono').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-telefono').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-telefono i').classList.add('fa-check-circle');
                document.querySelector('#grupo-telefono i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-telefono .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.telefono = true;
            }else{
                document.getElementById('grupo-telefono').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-telefono').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-telefono i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-telefono i').classList.add('fa-times-circle');
                document.querySelector('#grupo-telefono .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 

    }
}

const validarformProd = (e) =>{
    switch (e.target.name){
        case "id-prod":
            if(expresiones.precio.test(e.target.value)){
                document.getElementById('grupo-id-prod').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-id-prod').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-id-prod i').classList.add('fa-check-circle');
                document.querySelector('#grupo-id-prod i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-id-prod .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.idprod = true;
            }else{
                document.getElementById('grupo-id-prod').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-id-prod').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-id-prod i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-id-prod i').classList.add('fa-times-circle');
                document.querySelector('#grupo-id-prod .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "nombre1":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo-nombre1').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-nombre1').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-nombre1 i').classList.add('fa-check-circle');
                document.querySelector('#grupo-nombre1 i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-nombre1 .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.nombre1 = true;
            }else{
                document.getElementById('grupo-nombre1').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-nombre1').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-nombre1 i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-nombre1 i').classList.add('fa-times-circle');
                document.querySelector('#grupo-nombre1 .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "marca":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo-marca').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-marca').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-marca i').classList.add('fa-check-circle');
                document.querySelector('#grupo-marca i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-marca .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.marca = true;
            }else{
                document.getElementById('grupo-marca').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-marca').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-marca i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-marca i').classList.add('fa-times-circle');
                document.querySelector('#grupo-marca .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "precio":
            if(expresiones.precio.test(e.target.value)){
                document.getElementById('grupo-precio').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-precio').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-precio i').classList.add('fa-check-circle');
                document.querySelector('#grupo-precio i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-precioprecio .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.precio = true;
            }else{
                document.getElementById('grupo-precio').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-precio').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-precio i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-precio i').classList.add('fa-times-circle');
                document.querySelector('#grupo-precio .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
}
}

const validarformPromo = (e) =>{
    switch (e.target.name){
        case "id-prom":
            if(expresiones.precio.test(e.target.value)){
                document.getElementById('grupo-id-prom').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-id-prom').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-id-prom i').classList.add('fa-check-circle');
                document.querySelector('#grupo-id-prom i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-id-prom .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.idprom = true;
            }else{
                document.getElementById('grupo-id-prom').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-id-prom').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-id-prom i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-id-prom i').classList.add('fa-times-circle');
                document.querySelector('#grupo-id-prom .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "id-prodprom":
            if(expresiones.precio.test(e.target.value)){
                document.getElementById('grupo-id-prodprom').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-id-prodprom').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-id-prodprom i').classList.add('fa-check-circle');
                document.querySelector('#grupo-id-prodprom i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-id-prodprom .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.idprod_prom = true;
            }else{
                document.getElementById('grupo-id-prodprom').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-id-prodprom').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-id-prodprom i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-id-prodprom i').classList.add('fa-times-circle');
                document.querySelector('#grupo-id-prodprom .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "precio-prom":
            if(expresiones.precio.test(e.target.value)){
                document.getElementById('grupo-precio-prom').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-precio-prom').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-precio-prom i').classList.add('fa-check-circle');
                document.querySelector('#grupo-precio-prom i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-precio-prom .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.precioprom = true;
            }else{
                document.getElementById('grupo-precio-prom').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-precio-prom').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-precio-prom i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-precio-prom i').classList.add('fa-times-circle');
                document.querySelector('#grupo-precio-prom .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
        case "porcentaje":
            if(expresiones.descuento.test(e.target.value)){
                document.getElementById('grupo-porcentaje').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('grupo-porcentaje').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-porcentaje i').classList.add('fa-check-circle');
                document.querySelector('#grupo-porcentaje i').classList.remove('fa-times-circle');
                document.querySelector('#grupo-porcentaje .formulario-input-error').classList.remove('formulario-input-error-activo');
                validacionCampos.porcen_desc = true;
            }else{
                document.getElementById('grupo-porcentaje').classList.add('formulario-grupo-incorrecto');
                document.getElementById('grupo-porcentaje').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-porcentaje i').classList.remove('fa-check-circle');
                document.querySelector('#grupo-porcentaje i').classList.add('fa-times-circle');
                document.querySelector('#grupo-porcentaje .formulario-input-error').classList.add('formulario-input-error-activo');
            }
        break; 
}
}


inputs.forEach((input) => {
    input.addEventListener('keyup', (validarform));
    input.addEventListener('blur', (validarform));
})

inputsprod.forEach((input) => {
    input.addEventListener('keyup', (validarformProd));
    input.addEventListener('blur', (validarformProd));
})

inputspromo.forEach((input) => {
    input.addEventListener('keyup', (validarformPromo));
    input.addEventListener('blur', (validarformPromo));
})


const terminos = document.getElementById('terminos');

formulario.addEventListener('submit', (e) => {
    e.preventDefault;
    if(validacionCampos.nombre && validacionCampos.apellido && validacionCampos.usuario && validacionCampos.contraseña && validacionCampos.correo && validacionCampos.telefono && terminos.checked){
       
        document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo')
        setTimeout(()=>{
            document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
        }, 5000)
    }else{
        document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo')
        setTimeout(()=>{
            document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
        }, 5000)
    }
})

formularioprod.addEventListener('submit', (e) => {
    e.preventDefault;
    if( validacionCampos.idprod && validacionCampos.nombre  && validacionCampos.nombre1  && validacionCampos.marca   && validacionCampos.precio){
       
        document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo')
        setTimeout(()=>{
            document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
        }, 5000)
    }else{
        document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo')
        setTimeout(()=>{
            document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
        }, 5000)
    }
})

formulariopromo.addEventListener('submit', (e) => {
    e.preventDefault;
    if( validacionCampos.idprom && validacionCampos.idprod_prom  && validacionCampos.precioprom  && validacionCampos.porcen_desc){
       
        document.getElementById('formulario-mensaje-exito').classList.add('formulario-mensaje-exito-activo')
        setTimeout(()=>{
            document.getElementById('formulario-mensaje-exito').classList.remove('formulario-mensaje-exito-activo');
        }, 5000)
    }else{
        document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo')
        setTimeout(()=>{
            document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
        }, 5000)
    }
})

