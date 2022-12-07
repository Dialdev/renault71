$(function(){
        if($('.input-phone').length) {
            //$(".input-phone").mask("+7 (999) 999-99-99", { placeholder: "_" });

            $('html').on('focus', '.input-phone', function() {
                    $(this).mask("+7 (999) 999-99-99", { placeholder: "_" });
            }); 
        }

        //Задать вопрос
        if($('.headerCall').length) {

            $('#questionForm').trigger('reset');

            $('.headerCall').click(function(e) {
                    e.preventDefault();
                    $('.darkBg').css('display', 'block');
            });

            if($('.modalClose').length) {
                $('.modalClose').click(function(e) {
                        e.preventDefault();
                        $('.darkBg').css('display', 'none'); 
                });

                //закрытие формы по Esc
                $('html').keydown(function(e){ 
                        if (e.keyCode == 27) { 
                            $('.darkBg').css('display', 'none');
                        }
                });

            }


            $('html').on('click', '#questionForm input:submit', function(e) {

                    e.preventDefault();

                    //Если есть ошибки в заполнении, выделяем поле красным

                    // Имя
                    if(!$('input[name="userName"]').val() || $('input[name="userName"]').val().search(/^(\s)+$/)!=-1) {
                        $('input[name="userName"]').addClass('errField');
                    }


                    // Телефон
                    if(!$('input[name="userPhone"]').val() || $('input[name="userPhone"]').val().search(/^(\s)+$/)!=-1) {
                        $('input[name="userPhone"]').addClass('errField');
                    }

                    // Вопрос
                    if(!$('textarea[name="userQuestion"]').val() || $('textarea[name="userQuestion"]').val().search(/^(\s)+$/)!=-1) {
                        $('textarea[name="userQuestion"]').addClass('errField');
                    }

                    //Если ошибок нет отправляем данные
                    if(
                        !$("#questionForm input").hasClass("errField")
                        && !$("#questionForm textarea").hasClass("errField")
                    ) {

                        var formHtml = $('.questionFormWrap').html();
                        var sForm = $("#questionForm").serialize();

                        $(this).val('Подождите, идет отправка...').css('textTransform', 'none');

                        $.ajax({     
                                type: "POST",
                                data: sForm,
                                url: "/ajax/question.php",
                                cache: false,
                                success: function(data) {
                                yaCounter21677146.reachGoal('Zakaz');
                                console.log('Zakaz ok');
                                    $('.questionFormWrap').html(data);

                                    // Скрываем сообщение серез 1,5 сек.
                                    setTimeout(function() {
                                            $('.questionFormWrap').html(formHtml);
                                            $('#questionForm').trigger('reset');
                                            e.preventDefault();
                        $('.darkBg').css('display', 'none');
                                        }, 3000);
                                }
                        });

                    }


            });


            //При фокусе поля убираем красную рамку
            $('input:text, textarea').focus(function() {
                    $(this).removeClass('errField'); 
            });

        }
});