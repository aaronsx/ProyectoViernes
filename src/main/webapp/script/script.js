class Usuario{
	//Clase usuario con sus constructores
	  constructor (dni, nombre,apellidos,edad) {
	    this.dni = dni;
	    this.nombre = nombre;
	    this.apellidos = apellidos;
	    this.edad = edad;
	   
  }
 }



//Verificar lo que hace es comprobarte la contra y si son correcta se guarda en clase usuario y te redifire al login
function verificarPasswords(form) 
{
	 var dni=form.dni.value;
	var nombre=form.nombre.value;
	var apellidos=form.apellidos.value;
	var edad=form.edad.value;
       
     var user = new Usuario(dni, nombre,apellidos,edad);
  	localStorage.setItem(dni, JSON.stringify(user));
       	    
}
//Que te envia a recuperar
function buscar(form)
{
	 var dni=form.dni.value;
	console.log(dni);
		 var valor = localStorage.getItem(dni);
  		  var objetoJS = JSON.parse(valor); 
  		  document.write("DNI "+objetoJS.dni+" Nombre "+objetoJS.nombre+" Apellido "+objetoJS.apellidos+" Edad "+objetoJS.edad);
}
function gotoIndicie()
{
	  document.write();
       		location.href ='http://localhost:8080/ProyectoViernes/web.html';
}


