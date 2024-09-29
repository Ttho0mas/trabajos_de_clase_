document.getElementById('inicio').addEventListener('click',iniciarppt);
function iniciarppt(){
    var manos= ['piedra','papel','tijera'];
    var randomop= Math.floor(Math.random()*3);
    var mano=manos[randomop];

    
    if (mano === 'piedra') {
        Manoimg.src = 'piedra.jpg';
        Manoimg.alt = mano;
    } else if (mano === 'papel') {
        Manoimg.src = 'papel.jpg';
        Manoimg.alt = mano;
    } else if (mano === 'tijera') {
        Manoimg.src = 'tijera.jpg';
        Manoimg.alt = mano;
    }
  
}