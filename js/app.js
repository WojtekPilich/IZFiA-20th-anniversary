$(document).ready(function() {

    $('a[href^="#"]').on('click', function(event) {


        if($(this).attr('href')==='#2') {
            $('.link_1991').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_1991').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#3') {
            $('.link_1992-1996').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_1992-1996').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#4') {
            $('.link_1997').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_1997').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#5') {
            $('.link_1998').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_1998').css('background-color', '#913041').removeClass('effect');
        }

        if($(this).attr('href')==='#6') {
            $('.link_1998-2000').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_1998-2000').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#7') {
            $('.link_2001-2002').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2001-2002').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#8') {
            $('.link_2004').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2004').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#9') {
            $('.link_2006').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2006').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#10') {
            $('.link_2007').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2007').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#11') {
            $('.link_2008').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2008').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#12') {
            $('.link_2009-2010').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2009-2010').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#13') {
            $('.link_2011').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2011').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#14') {
            $('.link_2012').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2012').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#15') {
            $('.link_2013').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2013').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#16') {
            $('.link_2014').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2014').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#18') {
            $('.link_2016').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2016').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#19') {
            $('.link_2017').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2017').css('background-color', '#222450').removeClass('effect');
        }

        if($(this).attr('href')==='#20') {
            $('.link_2018').css('background-color', '#d94862').addClass('effect');
        } else {
            $('.link_2018').css('background-color', '#222450').removeClass('effect');
        }



        let target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

});