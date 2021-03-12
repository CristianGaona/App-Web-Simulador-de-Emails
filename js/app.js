// Variables

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail'); // Agregar el parrado al formulario

// Variables para campos
const email =  document.querySelector('#email');
const asunto =  document.querySelector('#asunto');
const mensaje =  document.querySelector('#mensaje');

eventListeners();
function eventListeners(){
    //Cuanod la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario) // evento blur cuando sale del input para validar en tiempo real
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)

}

// Funciones
 function iniciarApp(){
     btnEnviar.disabled = true;
     btnEnviar.classList.add('cursor-not-allowed', 'opacity-50') // claces de tailwind (framework para css)
 }


 // Valida el formulario
 function validarFormulario(e){ 
     if(e.target.value > 0){
         console.log('Hay texto');

     }else{
        e.target.classList.add('border', 'border-red-500');
        mostrarError();
     }
 }

// Mostrar mensaje de error mediante un parráfo
 function mostrarError(){
     const mensajeError = document.createElement('p');
     mensajeError.textContent = 'Todos los campos son obligatorios';
     mensajeError.classList.add('border', 'border-red-500', 'background-red', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

     const errores = document.querySelectorAll('.error'); // Revisar un solo valor
     if (errores.length === 0){
         // formulario.insertBefore(mensajeError, document.querySelector('.mb-10')); // agregar el mensaje al parráfo del formulario
          formulario.appendChild(mensajeError); // agregar el mensaje al parráfo del formulario
     }

    
 }