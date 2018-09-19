$(document).ready(function(){

    //grafik
    $('.gr_box .gr_block .arr').live('click',function(){
        if($(this).parent().hasClass('open')) {
            $('.gr_box .text').slideUp(100);
            $(this).parent().removeClass('open');
            $('.gr_circle span').removeClass('active');
            return false;
        } else {
            $('.gr_box .text').slideUp(100);
            $('.gr_block').removeClass('open');
            $(this).parent().children('.text').slideDown(100);
            $(this).parent().addClass('open');
            if($(this).parent().hasClass('item1')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item1').addClass('active');
            }
            if($(this).parent().hasClass('item2')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item2').addClass('active');
            }
            if($(this).parent().hasClass('item3')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item3').addClass('active');
            }
            if($(this).parent().hasClass('item4')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item4').addClass('active');
            }
            return false;
        }
    })
    $('.gr_box .gr_block .name').live('click',function(){
        if($(this).parent().hasClass('open')) {
            $('.gr_box .text').slideUp(100);
            $(this).parent().removeClass('open');
            $('.gr_circle span').removeClass('active');
            return false;
        } else {
            $('.gr_box .text').slideUp(100);
            $('.gr_block').removeClass('open');
            $(this).parent().children('.text').slideDown(100);
            $(this).parent().addClass('open');
            if($(this).parent().hasClass('item1')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item1').addClass('active');
            }
            if($(this).parent().hasClass('item2')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item2').addClass('active');
            }
            if($(this).parent().hasClass('item3')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item3').addClass('active');
            }
            if($(this).parent().hasClass('item4')) {
                $('.gr_circle span').removeClass('active');
                $('.gr_circle span.item4').addClass('active');
            }
            return false;
        }
    })
    //colorbox
    $('.sert a').colorbox();
    $('.gallery a').colorbox({
        maxWidth: '65%',
        maxHeight: '70%'
    })
    $('#price-material_show').colorbox({
        inline: true,
        href: '#price-material'
    })

    $('.online_form .submit').on('click',function(event){
        event.preventDefault();
        var url = $('.online_form form').attr('action');
        var template = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        var template2 = /^[0-9-+()]+$/;
        var email = $('.online_form input[name=email]').val();
        var phone = $('.online_form input[name=phone]').val();
        var error = false;
        if($('.online_form input[name=name]').val()=='')
        {
            $('.online_form input[name=name]').attr("placeholder","Укажите свое имя");
            error = true;
        }
        if(template.test(email)==false)
        {
            $('.online_form input[name=email]').val('');
            $('.online_form input[name=email]').attr("placeholder","Неправильный e-mail");
            error = true;
        }
        if(template2.test(phone)==false)
        {
            $('.online_form input[name=phone]').val('');
            $('.online_form input[name=phone]').attr("placeholder","Неправильный телефон");
            error = true;
        }
        if(error == true)
            return false;
        $.ajax({
            url:url,
            type:'post',
            data:{'name':$('.online_form input[name=name]').val(),'email':$('.online_form input[name=email]').val(),'phone':$('.online_form input[name=phone]').val()},
            success: function(data){
                $('#order_ok').dialog('open');
            }
        });
    });
    
    $('.scrollup').click(function() {
        $("html, body").animate({
        scrollTop:0
        },1000);
    })
    })
    $(window).scroll(function() {
    if ($(this).scrollTop()>200) {
        $('.scrollup').fadeIn();
    }
    else {
        $('.scrollup').fadeOut();
    }
   
});