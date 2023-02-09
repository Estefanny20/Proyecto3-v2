import { RickAndMorty } from "./RickAndMorty.js";

var data= RickAndMorty;

var position =localStorage.getItem("position");
alert(data.results[position].name);

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
    img.addClass("imagenpersonaje");
    div.append(img);
    $('#cartapersonaje').append(div);

    let nombre=$("<h4></h4>");
    nombre.append(data.results[i].name);
    nombre.addClass("nombrepersonaje");
    div.append(nombre);

    let status=$("<p></p>");
    status.append(data.results[i].status);
    status.addClass("status");
    div.append(status);

    let gender=$("<p></p>");
    gender.append(data.results[i].gender);
    gender.addClass("gender");
    div.append(gender);

    let species=$("<p></p>");
    species.append(data.results[i].species);
    species.addClass("species");
    div.append(species);

    let episode=$("<p></p>");
    for (let index = 0; index < data.results[i].episode.length; index++) {
        episode.append(data.results[i].episode[index]);
        episode.append("<br>");
        
    }
    
    episode.addClass("episode");
    div.append(episode);
}

/*
    

    
    

    
    

    


    


   
    

    

      */