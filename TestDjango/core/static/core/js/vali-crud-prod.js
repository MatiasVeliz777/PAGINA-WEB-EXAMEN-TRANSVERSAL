const formulario = document.getElementById('formCrudProm');
const inputs = document.querySelectorAll('#formCrudProm input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{9}$/ // 7 a 14 numeros.
}

const validacionCampos = {
    nombre : false,
    apellido : false,
    usuario : false,
    contraseña : false,
    correo : false,
    telefono : false
}


const validarform = (e) => {
    switch (e.target.name){
        case "telefono1":
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
       

    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', (validarform));
    input.addEventListener('blur', (validarform));
})


const terminos = document.getElementById('terminos');

formulario.addEventListener('submit', (e) => {
    e.preventDefault;
    if( validacionCampos.telefono){
       
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