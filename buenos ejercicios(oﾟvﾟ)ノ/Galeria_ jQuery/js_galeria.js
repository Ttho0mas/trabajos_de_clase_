$(document).ready(function() {
    var $miniaturas = $('.miniaturas img');
    var indiceActual = 0;
  
    function mostrarImagen(indice) {
      $('.imagen-principal img').hide().attr('src', $miniaturas.eq(indice).attr('src')).fadeIn();
    }
  
    $miniaturas.click(function() {
      indiceActual = $(this).index();
      mostrarImagen(indiceActual);
    });
  
    $('.siguiente').click(function() {
      indiceActual = (indiceActual + 1) % $miniaturas.length;
      mostrarImagen(indiceActual);
    });
  
    $('.anterior').click(function() {
      indiceActual = (indiceActual - 1 + $miniaturas.length) % $miniaturas.length;
      mostrarImagen(indiceActual);
    });
  
    mostrarImagen(indiceActual);
  });
