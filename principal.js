import { RickAndMorty } from "./RickAndMorty.js";

var data= RickAndMorty;

$(document).ready(
    function () {
        for (let i = 0; i < 200; i++) {
                personajes(i);
                      
        }
    },
    $("#species").change(function () {
        $("#contenedor").children().not("#contenedor").remove();
        for (let i = 0; i < 10; i++) {

            if (($("#species").val()=="general")||($("#species").val()==data.results[i].species)) {
                personajes(i);
                
            }   
            if (($("#status").val()=="general")||($("#status").val()==data.results[i].status)) {
                personajes(i);
                
            }         
        }
    }
    )
);
function personajes(i){
    let div =$("<div></div>");  //creamos un div
    div.addClass("carta-personaje");  //le añadimos una etiqueta class

    let img =$("<img></img>");  //agregamos una imagen
    img.attr("src",data.results[i].image);  //indicamos de donde sacara la imagen
    img.click(function () {                  //agregamos una funcion para cuando le hagamos click
        window.location.href = "personaje.html";
        localStorage.setItem("position", i);
        // guardame en el navegador var position = valor del i
    });
    img.addClass("imagenpersonaje");             //agregamos class a la imagen
    div.append(img);                             //agregamos la imagen al div

    let nombre=$("<h3></h3>");
    nombre.append(data.results[i].name);
    nombre.addClass("nombrepersonaje");
    div.append(nombre);

    let gender=$("<p></p>");
    gender.append(data.results[i].gender);
    gender.addClass("gender");
    div.append(gender);

    $('#contenedor').append(div);
}

