$(function(){
        $('.nohide').click(function(){
                $('.zamer_form_tpl').toggle();
        });

        if($("#findID").length>0) {

        }

        if($('.errors')[0]) {
            $('.zamer_form_tpl').show();
        }


        $('.close').click(function(){
                $('.zamer_form_tpl').toggle();
        });
        

})


