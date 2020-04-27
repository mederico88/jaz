(function(){
    //Creacion de variables a utilizar
    
    var lista = document.querySelector("#lista"),
        tareainput = document.getElementById('tareaInput'),
        btnNuevaTarea = document.querySelector("#btn-agregar");
        
    //Funciones

    var agregarTarea = function(){
        var tarea = tareainput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement ("a"),
            contenido = document.createTextNode(tarea);

        if(tarea===""){
            tareainput.setAttribute("placeholder","Agrega una tarea valida");
            tareainput.className = "error";
            return false;
        }

        enlace.appendChild(contenido);// asii solo le a;adimos <a></a>
        //le establecemos un atriburo href
        enlace.setAttribute("href","#");
        nuevaTarea.appendChild(enlace);//appendChild es para anadir el enlace dentro de li
        lista.appendChild(nuevaTarea)

        tareainput.value = "";

        for (var i =0; i<=lista.children.length -1; i++){
            lista.children[i].addEventListener("click", function(){
              //  this.parentNode.removeChild(this);
              this.className= "tachado";
            });
        }
    };

    var comprobarEntrada = function(){
        tareainput.className="";
        tareainput.setAttribute("placeholder","Agrega la tarea aqui")
    };

    var tachandoTareas = function(){
     //   this.parentNode.removeChild(this);
        this.className= "tachado";
    };

    //Eventos
    //AGREGAR LAS TAREAS
    btnNuevaTarea.addEventListener("click",agregarTarea);

    //COMPROBAR EL CUADRO DE ENTRADA
    tareainput.addEventListener("click",comprobarEntrada);


    //Borrando elementos de la lista o tachando
    for (var i =0; i<=lista.children.length -1; i++){
        lista.children[i].addEventListener("click", tachandoTareas);
    }

}());
