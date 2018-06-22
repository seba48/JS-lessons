$(document).ready(function(){

    function showModal (){
        $('.overlay').fadeToggle('slow');
        $('.modal').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 1000)
    };
    
    $('.main_btna').click(showModal);
    $('.main_btn').click(showModal);
    $('li:eq(7)').click(showModal);
    
    $('.close').click(()=>{
        $('.overlay').fadeToggle('slow');
        $('.modal').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 1000)
    });
});