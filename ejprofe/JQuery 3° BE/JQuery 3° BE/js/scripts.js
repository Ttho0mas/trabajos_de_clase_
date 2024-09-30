window.onload = () => {
    $(".enviar").hide();


    //$('.texto').show()
    
    $('.texto').fadeIn(4000)

    setTimeout(() =>{
        $('.texto').fadeOut(10000)
    }, 5000)
}