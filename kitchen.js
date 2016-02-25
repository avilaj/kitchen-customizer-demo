(function(){
    'use strict';
    
    function setAlacena (element) {
        var src = $(element.currentTarget).data().src;
        $('#alacena-shape').attr('xlink:href', src);
    }

    function setFondo (element) {
        var src = $(element.currentTarget).data().src;
        $('#fondo-shape').attr('xlink:href', src);
    }

    $('button.alacena').click(setAlacena);
    $('button.fondo').click(setFondo);
})();