document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();

})

function crearGaleria(){

    const cantidad_imagenes = 16;
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i=1; i<=cantidad_imagenes; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'imagen galería';
        
        
        // Event Handler
        
        imagen.onclick = function(){
            mostarImagen(i);
        }
        
        galeria.appendChild(imagen);

    }
}

function mostarImagen(i){
    //Generar modal

    const modal = document.createElement('DIV');
    modal.classList.add('modal');

    modal.onclick = cerrarModal;

    //Agregar al HTML

    const body = document.querySelector('body');
    body.appendChild(modal);

}

function cerrarModal(){
    const modal = document.querySelector('.modal');

    modal?.remove();
}