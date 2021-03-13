// Variables

const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn')
const formulario = document.querySelector('#enviar-mail'); // Agregar el parrado al formulario
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Variables para campos
const email =  document.querySelector('#email');
const asunto =  document.querySelector('#asunto');
const mensaje =  document.querySelector('#mensaje');

eventListeners();
function eventListeners(){
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Reinicia el formulario
    btnReset.addEventListener('submit', enviarEmail);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario) // evento blur cuando sale del input para validar en tiempo real
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)
    formulario.addEventListener('submit', enviarEmail);

}

// Funciones
 function iniciarApp(){
     btnEnviar.disabled = true;
     btnEnviar.classList.add('cursor-not-allowed', 'opacity-50') // claces de tailwind (framework para css)
 }


 // Valida el formulario
 function validarFormulario(e){ 
    

     if(e.target.value.length > 0){

        //Elimina los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
        
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
     }else{
        e.target.classList.add('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
     }
     
     //Validar tipo de campo email
     if(e.target.type === 'email'){
         if(er.test(e.target.value)){
            //Elimina los errores
        const error = document.querySelector('p.error');
        
        if (error){
            error.remove();
        }

        // Cmabiar el color del borde de los inputs
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');

         }else{
            e.target.classList.add('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
             mostrarError('Email no valido');
         }
     }
     // Validar cuando todos los inputs esten llenos
     if (er.test(email.value) && asunto.value !== '' &&  mensaje.value !=='' ){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50') // claces de tailwind (framework para css)

     }
 }

// Mostrar mensaje de error mediante un parráfo
 function mostrarError(mensaje){
     console.log(mensaje)
     const mensajeError = document.createElement('p');
     mensajeError.textContent = mensaje;
     mensajeError.classList.add('border', 'border-red-500', 'background-red', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

     const errores = document.querySelectorAll('.error'); // Revisar un solo valor
     if (errores.length === 0){
         // formulario.insertBefore(mensajeError, document.querySelector('.mb-10')); // agregar el mensaje al parráfo del formulario
          formulario.appendChild(mensajeError); // agregar el mensaje al parráfo del formulario
     }
    
     //formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
    
 }

 // Envia el email
 function enviarEmail(e){
     e.preventDefault();
     // Mostrar spinner
     const spinner = document.querySelector('#spinner');
     spinner.style.display= 'flex';

     // Después de 3 segundos ocultar el spinner
     setTimeout(() =>{
         spinner.style.display = 'none';

     // Mensaje que dice que se envio correctamente
     const parrafo = document.createElement('p');
     parrafo.textContent = 'El mensaje se envió correctamente';
     parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase')

     // Inserta el parrafo antes del spinner
     formulario.insertBefore(parrafo, spinner);
     setTimeout(() =>{
         parrafo.remove(); // Elimina el mensaje de eniviado
         resetFormulario();
     }, 5000);
     }, 3000);
    

 }


 function resetFormulario(){
     formulario.reset();
     iniciarApp();
}