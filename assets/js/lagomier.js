$(document).ready(function(){
    initializeMenu();
});

function initializeMenu() {
    let body = $('body'),
        fab = $('button#fab-menu');
    
    body.removeClass('scrolled');
    fab.click(function(event){    
        body.toggleClass('menu-open');
    });

    let controller = new ScrollMagic.Controller();
    
    let fabScene = new ScrollMagic.Scene({duration: '100%'})
        .on('progress', function(event){
            if ("FORWARD" === event.scrollDirection) {
                body.addClass('scrolled');
            } else {
                body.removeClass('scrolled');
            }
        })
        .addTo(controller);
}