// Variables

const btnEnviar = document.querySelector('#enviar');

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
     }
 }