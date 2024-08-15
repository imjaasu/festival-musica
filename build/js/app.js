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

    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'imagen galería';

    //Generar modal

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;
    modal.appendChild(imagen);

    //Botón cerrar modal

    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick = cerrarModal;
    modal.appendChild(cerrarModalBtn);

    //Agregar al HTML

    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);

}

function cerrarModal(){
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out')
    setTimeout(() => {
        modal?.remove();

        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    }, 500);
}