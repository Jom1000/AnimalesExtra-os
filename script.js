var nombreAnimal1 = document.querySelector(".animal1>p").textContent;
var caracteristicas1  = "Este pez no utiliza sus aletas para nadar, sino que las utiliza para caminar por el fondo del agua"

var nombreAnimal2 = document.querySelector(".animal2>p").textContent;
var caracteristicas2  = "¡Con sus patas delanteras alcanzan ramas de más de dos metros de altura!"

var nombreAnimal3 = document.querySelector(".animal3>p").textContent;
var caracteristicas3  = "Esta ave de aspecto prehistórico mide 1.4m y 2.5m de envergadura. Usa su enorme pico para decapitar a sus presas"

var nombreAnimal4 = document.querySelector(".animal4>p").textContent;
var caracteristicas4  = "El Bedlington Terrier es una de las razas de perro de aspecto más extraño debido a su apariencia de cordero"

var nombreAnimal5 = document.querySelector(".animal5>p").textContent;
var caracteristicas5  = "El gavial Se caracteriza por una boca muy flaca, dieta a base de peces, ya que no sirve para cazar grandes mamíferos"

var nombreAnimal6 = document.querySelector(".animal6>p").textContent;
var caracteristicas6  = "Cada vez que el topo presiona la nariz estrellada contra el suelo, crea una vista en forma de estrella de lo que le rodea, y estas imágenes se unen en su cerebro como si fueran piezas de un puzzle."

var nombreAnimal7 = document.querySelector(".animal7>p").textContent;
var caracteristicas7  = "Se localiza en determinadas zonas de África y su picadura es una de las mas venenosas del mundo."

var nombreAnimal8 = document.querySelector(".animal8>p").textContent;
var caracteristicas8  = "El tiburon sierra tiene prolongaciones carnosas en el hocico, las cuales son adaptaciones que podrían ayudar a encontrar presas enterradas en arena."

var nombreAnimal9 = document.querySelector(".animal9>p").textContent;
var caracteristicas9  = "El día a día de este pez es muy aburrido ya que lo único que hacen es pasear y comer lo que encuentren por donde pasan, no busca las presas, no las caza, come cuando se las encuentra casualmente."

var nombreAnimal10 = document.querySelector(".animal10>p").textContent;
var caracteristicas10  = "La rana tiene una piel brillante y púrpura y un anillo de color azul claro alrededor de sus ojos, así como una nariz protuberante, parecida a la de un cerdo."

var nombreAnimal11 = document.querySelector(".animal11>p").textContent;
var caracteristicas11  = "Es reconocible por sus estornudos cuando llueve, ya que carece de nariz y el agua se le introduce por las fosas nasales. "

var nombreAnimal12 = document.querySelector(".animal12>p").textContent;
var caracteristicas12  = "Cuando se sienten atacados, secretan una mucosidad transparente que se solidifica y asfixia hasta la muerte a sus depredadores, principalmente tiburones."

var textoPrincipal = document.querySelector("#descripcion");

var caracteristicas = document.querySelector("#caracteristicas");

var imagen = document.querySelector("#imagen");



var botonNombre1 = document.querySelector(".animal1>p");
botonNombre1.addEventListener("click",animalSeleccionado1);


function animalSeleccionado1(event){
    var animalTocado = event.target;
    var animalTocado_P = animalTocado.textContent;
    textoPrincipal.textContent = animalTocado_P;
    imagen.src = "imagen1.webp"
    caracteristicas.textContent = caracteristicas1; 
}





var botonNombre2 = document.querySelector(".animal2>p");
botonNombre2.addEventListener("click",animalSeleccionado2);


function animalSeleccionado2(event){
    var animalTocado = event.target;
    var animalTocado_P = animalTocado.textContent;
    textoPrincipal.textContent = animalTocado_P;
    imagen.src = "imagen2.jpg"
    caracteristicas.textContent = caracteristicas2; 
}





var botonNombre3 = document.querySelector(".animal3>p");
botonNombre3.addEventListener("click",animalSeleccionado3);


function animalSeleccionado3(event){
    var animalTocado = event.target;
    var animalTocado_P = animalTocado.textContent;
    textoPrincipal.textContent = animalTocado_P;
    imagen.src = "imagen3.jpg"
    caracteristicas.textContent = caracteristicas3; 
}





var botonNombre4 = document.querySelector(".animal4>p");
botonNombre4.addEventListener("click",animalSeleccionado4);


function animalSeleccionado4(event){
    var animalTocado = event.target;
    var animalTocado_P = animalTocado.textContent;
    textoPrincipal.textContent = animalTocado_P;
    imagen.src = "imagen4.webp"
    caracteristicas.textContent = caracteristicas4; 
}





var botonNombre5 = document.querySelector(".animal5>p");
botonNombre5.addEventListener("click",animalSeleccionado5);


function animalSeleccionado5(event){
    var animalTocado = event.target;
    var animalTocado_P = animalTocado.textContent;
    textoPrincipal.textContent = animalTocado_P;
    imagen.src = "imagen5.jpg"
    caracteristicas.textContent = caracteristicas5; 
}





var botonNombre6 = document.querySelector(".animal6>p");
botonNombre6.addEventListener("click",animalSeleccionado6);


function animalSeleccionado6(event){
    var animalTocado = event.target;
    var animalTocado_P = animalTocado.textContent;
    textoPrincipal.textContent = animalTocado_P;
    imagen.src = "imagen6.jpeg"
    caracteristicas.textContent = caracteristicas6; 
}





var botonNombre7 = document.querySelector(".animal7>p");
botonNombre7.addEventListener("click",animalSeleccionado7);


function animalSeleccionado7(event){
    var animalTocado = event.target;
    var animalTocado_P = animalTocado.textContent;
    textoPrincipal.textContent = animalTocado_P;
    imagen.src = "imagen7.jpg"
    caracteristicas.textContent = caracteristicas7; 
}





var botonNombre8 = document.querySelector(".animal8>p");
botonNombre8.addEventListener("click",animalSeleccionado8);


function animalSeleccionado8(event){
    var animalTocado = event.target;
    var animalTocado_P = animalTocado.textContent;
    textoPrincipal.textContent = animalTocado_P;
    imagen.src = "imagen8.jpg"
    caracteristicas.textContent = caracteristicas8; 
}





var botonNombre9 = document.querySelector(".animal9>p");
botonNombre9.addEventListener("click",animalSeleccionado9);


function animalSeleccionado9(event){
    var animalTocado = event.target;
    var animalTocado_P = animalTocado.textContent;
    textoPrincipal.textContent = animalTocado_P;
    imagen.src = "imagen9.jpg"
    caracteristicas.textContent = caracteristicas9; 
}





var botonNombre10 = document.querySelector(".animal10>p");
botonNombre10.addEventListener("click",animalSeleccionado10);


function animalSeleccionado10(event){
    var animalTocado = event.target;
    var animalTocado_P = animalTocado.textContent;
    textoPrincipal.textContent = animalTocado_P;
    imagen.src = "imagen10.jpg"
    caracteristicas.textContent = caracteristicas10; 
}





var botonNombre11 = document.querySelector(".animal11>p");
botonNombre11.addEventListener("click",animalSeleccionado11);


function animalSeleccionado11(event){
    var animalTocado = event.target;
    var animalTocado_P = animalTocado.textContent;
    textoPrincipal.textContent = animalTocado_P;
    imagen.src = "imagen11.jpg"
    caracteristicas.textContent = caracteristicas11; 
}





var botonNombre12 = document.querySelector(".animal12>p");
botonNombre12.addEventListener("click",animalSeleccionado12);


function animalSeleccionado12(event){
    var animalTocado = event.target;
    var animalTocado_P = animalTocado.textContent;
    textoPrincipal.textContent = animalTocado_P;
    imagen.src = "imagen12.webp"
    caracteristicas.textContent = caracteristicas12; 
}


