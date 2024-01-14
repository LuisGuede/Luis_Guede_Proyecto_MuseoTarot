// ----------- This is my responsive (Hamburger Menu)----------- //

// seleciono mis elementos
const menuBtn = document.querySelector('.header__responsiveMenue__Button');
const closeBtn = document.querySelector('.header__responsiveMenue__close');
const menuResponsive = document.querySelector('.header__responsiveMenue');

// acción de mi los elementos
menuBtn.addEventListener('click', function(){
     // Cuando se hace clic en el botón de menú, agrega la clase 'is__active' al menú responsivo
    menuResponsive.classList.add('is__active');
})

 // Cuando se hace clic en el botón de cierre, elimina la clase 'is__active' del menú responsivo
closeBtn.addEventListener('click', function(){
    menuResponsive.classList.remove('is__active');
})

// ----------- This is the end of responsive (Hamburger Menu)----------- //

// ----------- This is my Header Scroll up----------- //

// Selecciono el elemento con la clase '.header'
const menu = document.querySelector('.header');
    
// acción de mi los elementos

// Variable para almacenar el valor del desplazamiento vertical en la última posición registrada.
lastScrollTop = 0;

window.addEventListener('scroll', function(){
    
    // Obtengo el valor actual del desplazamiento vertical.
    let scrolltop = window.pageYOffset

    // Compruebo la dirección del desplazamiento.

    // Si scrolltop es mayor que lastScrollTop, la página se está desplazando hacia abajo.
    if( scrolltop > lastScrollTop) {
        // Oculto el menú al desplazarse hacia abajo.
        menu.style.display="none";
    }
     // Si lastScrollTop es mayor que scrolltop, la página se está desplazando hacia arriba.
    else if (lastScrollTop > scrolltop){
         // Muestro el menú al desplazarse hacia arriba.
        menu.style.display="inline-flex";
    }

     // Actualizo la variable lastScrollTop
    lastScrollTop = scrolltop
});

// ----------- This is the end of Header Scroll up----------- //
