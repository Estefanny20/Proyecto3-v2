import { RickAndMorty } from "./RickAndMorty.js";

var data= RickAndMorty;

var position =localStorage.getItem("position");


$(document).ready(
    function () {
        cartasper(position);
       
    }

)


function cartasper(i) {
    let div =$("<div></div>");
    div.addClass("carta");


    let img =$("<img></img>");
    img.attr("src",data.results[i].image);
    img.addClass("imagenpersonajecarta");
    div.append(img);
    
    let divAux=$("<div></div>");
    divAux.addClass("cartaAux");

    let nombre=$("<h4></h4>");
    nombre.append(data.results[i].name);
    nombre.addClass("nombrepersonaje");
    divAux.append(nombre);

    let status=$("<p></p>");
    status.append(data.results[i].status);
    status.addClass("status");
    divAux.append(status);

    let gender=$("<p></p>");
    gender.append(data.results[i].gender);
    gender.addClass("gender");
    divAux.append(gender);

    let species=$("<p></p>");
    species.append(data.results[i].species);
    species.addClass("species");
    divAux.append(species);

    let episode=$("<p></p>");
    for (let index = 0; index < data.results[i].episode.length; index++) {
        episode.append(data.results[i].episode[index]);
        episode.append("<br>");
        
    }
    
    episode.addClass("episode");
    divAux.append(episode);

    div.append(divAux);

    $('#cartapersonaje').append(div);
}

/*
    

    
    

    
    

    


    


   
    

    

      */