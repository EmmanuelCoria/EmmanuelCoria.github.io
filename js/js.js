//Este es mi JS para mi proyecto final de Argentina Programa 4.0//

function showTab(tab){
    document.getElementById("infoycontacto").style.display="none";
    document.getElementById("formacion").style.display="none";
    document.getElementById("habilidad").style.display="none";
    document.getElementById(tab).style.display="block";
    if(tab=="infoycontacto"){
        document.getElementById("botoninfoycontacto").classList.add("active");
        document.getElementById("botonformacion").classList.remove("active");
        document.getElementById("botonhabilidad").classList.remove("active");

    }else if(tab=="formacion"){
        document.getElementById("botoninfoycontacto").classList.remove("active");
        document.getElementById("botonformacion").classList.add("active");
        document.getElementById("botonhabilidad").classList.remove("active");
    }else{
        document.getElementById("botoninfoycontacto").classList.remove("active");
        document.getElementById("botonformacion").classList.remove("active");
        document.getElementById("botonhabilidad").classList.add("active");
    }

}