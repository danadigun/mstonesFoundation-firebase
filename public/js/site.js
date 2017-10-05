// Write your Javascript code.
(function($){
    $(document).ready(function(){

        $(function(){
            $(window).scroll(function(){
                if($(this).scrollTop() > 100){
                    //remove logo
                    $('.navbar-brand').fadeOut();
                    
                }else{
                    //show logo
                    $('.navbar-brand').fadeIn();
                    
                }
            })
        })

    });
}(jQuery));