 let cantidad = prompt("Cuantos alumnos hay en la clase");
 let alumnosTotales = [];

 for (i = 0; i < cantidad; i++) {
     alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];     
 }

 const tomarAsistencia = (nombre,p)=>{
     let asistencia = prompt(nombre);
     if (asistencia == "p" || asistencia == "P"){
         alumnosTotales[i][1]++;
     }
 }

 for (i=0; i < 30; i++){
     for (alumno in alumnosTotales){
         tomarAsistencia(alumnosTotales[alumno][0],alumno);
     }
 }