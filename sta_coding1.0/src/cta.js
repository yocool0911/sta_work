jQuery(function ($) {

    var items = $('.item');
    var len = $('.item').length;


    $(window).scroll(function(){

        if(  $(window).scrollTop() > $('#buyproduct').offset().top ){


            if( $(window).scrollTop() > $('.final').offset().top - $(window).height() / 15 ){

                $('.fixed-obj').removeClass('show_sta');
                $('.timer-obj').removeClass('show_sta');
            }
            else{
                $('.fixed-obj').addClass('show_sta');
                $('.timer-obj').addClass('show_sta');

            }
        }
        else{

            $('.fixed-obj').removeClass('show_sta');
            $('.timer-obj').removeClass('show_sta');

        }


        items.map(function(index, item){
            if( !$(item).hasClass('show_sta')){
                if( $(window).scrollTop() > $(item).offset().top - $(window).height() / 5  || (len - 1) == index ){
                    $(item).addClass('show_sta');
                }
            }

        });

    });

    $('.more-btn').click(function(){
        $(this).toggleClass('showMore');

    });

});