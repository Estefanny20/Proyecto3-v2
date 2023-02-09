import { RickAndMorty } from "./RickAndMorty.js";

var data= RickAndMorty;

var position =localStorage.getItem("position");


$(document).ready(
    function () {
        alert(localStorage.getItem("position"));
        cartasper(position);
        
    }

)

function cartasper(i) {
    let div =$("<div></div>");
    div.addClass("contenedor-pokemon");

    let img =$("<img></img>");
    img.attr("src",data.results[i].image);
    img.addClass("imagenpersonaje");
    div.append(imagen);
    // <div>
    //<img src=data.pokemon[index].img>
    //</div>
    let nombre=$("<p></p>");
    nombre.append(data.results[i].name);
    nombre.addClass("nombrepersonaje");
    div.append(nombre);
    // <div>
    //<img src=data.pokemon[index].img>
    //<p>data.pokemon[index].nombre</p>
    //</div>

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
    // <div>
    //<img src=data.pokemon[index].img>
    //<p>data.pokemon[index].nombre</p>
    //<p>data.pokemon[index].tipo</p>
    //</div>
    let episode=$("<p></p>");
    episode.append(data.results[i].episode);
    episode.addClass("episode");
    div.append(episode);

    $('#cartapersonaje').append(div);  
    
}
