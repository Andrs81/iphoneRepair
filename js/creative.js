(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    });

    //animate main button on hover
    $('.fa-angle-down').hover(function(){
      var animationName = 'animated bounce';
      var animationends = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(this).addClass(animationName).one(animationends,function(){
        $(this).removeClass(animationName);
      });
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
      offset: {
        top: 100
      }
    })
    // Offset for Main Navigation
    $('#mainNavigation').affix({
      offset: {
        top: -10
      }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
      duration: 1000,
      delay: 200
    });
    sr.reveal('.sr-contact', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
          }
        });

    function toggleIcon(e) {
      $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

    //switch home and repair buttons on scroll
    $(window).scroll(function(e){
      let scrollval = $(window).scrollTop();
      //console.log(`scroll value = ${scrollval}`);
      if(mq) {
        if(scrollval >= 415){
         $('.logo').hide();
         $('.repair-button').addClass('show');
       }else{
        $('.logo').show();
        $('.repair-button').removeClass('show');
      }
    }else{
      if(scrollval >= 245){
       $('.logo').hide();
       $('.repair-button').addClass('show');
     }else{
      $('.logo').show();
      $('.repair-button').removeClass('show');
    }
  }


  if('.navbar-inverse'){
    $('.logo').show();
  }
});
//material inputs design
$('.form-control').each(function(){
  changeState($(this));
});
$('.form-control').on('focusout',function(){
  changeState($(this));
});

function changeState($formControl){
  if ($formControl.val().length > 0) {
    $formControl.addClass('has-value');
  }else{
    $formControl.removeClass('has-value');
  }
}

let ipModel, phone, scolor, address, floor, email, phoneNumber, instructions = "", name, pNumber, problems = "", more, dataString, code;
const mq = matchMedia('(min-width: 768px)').matches;
//const email = $('#email').val();

address =       $('#address').val();
floor =         $('#floor').val();
code =          $('#code').val();
instructions =  $('#instructions').val();
code =          $('#code').val();
email =         $('#email').val();
name =          $('#name').val();
phoneNumber =   $('#phoneNumber').val();

// initialize plugin
$('.form').validate({
  errorPlacement: function (error, element) {
    return false;
  },
  rules: {
    name: {
      required: true,
      minlength: 2
    },
    phoneNumber: {
      required: true,
      phoneUS: true
    }
  }
});

//phone prices
let screen, price = 0, total;
const turn = 0, pbutton = 0, sbutton = 0, wdamage = 0, diagnostic=19.99, cport = 49.99, fcamera = 49.99, bcamera = 49.99, wbluetoth = 49.99, hbutton = 49.99, ispeaker= 49.99, hplug = 59.99,battery = 49.99;


/* repairing process buttons */
$('.color-btns').hide();
$('.problem-btns').hide();
$('.date-btns').hide();
$('.fields').hide();
$('.edit-phones').hide();
$('.bottom').hide();
$('.bottom .describe-issue').hide();
$('.bottom .total').hide();
$('.bottom .confirm').hide();
$('.bottom .contact').hide();
$('.bottom .submit').hide();
$('.bottom .continue').hide();
$('.color-button').hide();
$('.other-issues').hide();


/* show color buttons when iPhone clicked */
$('.btn.phone-button').on('click',function(){
  let phone = $('input[type=radio]', this).val();
  console.log("funciona " + phone);
  $('.color-btns').show();
  $('.color-button').hide();
  switch (phone) {
    case '5':
    $('.white').show();
    $('.black').show();
    break;
    case '5C':
    $('.white').show();
    $('.blue').show();
    $('.green').show();
    $('.pink').show();
    $('.yellow').show();
    break;
    case '5S':
    case '6':
    case '6Plus':
    case '8':
    case '8 Plus':
    $('.spacegray').show();
    $('.gold').show();
    $('.silver').show();
    break;
    case 'SE':
    case '6S':
    case '6S Plus':
    $('.spacegray').show();
    $('.gold').show();
    $('.silver').show();
    $('.rosegold').show();
    break;
    case '7':
    case '7 Plus':
    $('.gold').show();
    $('.silver').show();
    $('.rosegold').show();
    $('.black').show();
    $('.jetblack').show();
    $('.red').show();
    break;
    case 'X':
    $('.spacegray').show();
    $('.silver').show();
    break;
  }
  $('.edit-phones').show();
  $('.chose-phone').hide();
});

/*diplay phone buttons to edit*/
$('.btn.edit-phones').on('click',function(){
  $(this).hide();
  $('.chose-phone').show();
  $('.color-btns').hide();
});

/*select a color and go to the next step*/
$('.color-button').on('click',function(){
  scolor = $('input[type=radio]', this).val();
  $('.phone-btns').hide();
  $('.color-btns').hide();
  $('.problem-btns').show();

  /* progressbar steps */
  $('.progressbar .step-1').removeClass('active');
  $('.progressbar .step-2').removeClass('done');
  $('.progressbar .step-3').removeClass('active done');
  $('.progressbar .step-1').addClass('done');
  $('.progressbar .step-2').addClass('active');
});


/* checks if a problem was selected if not popup a message */
$('.total .btn').on('click',function(){
  if($('input:checkbox:checked').length > 0){
    $('.problem-btns').hide();
    $('.date-btns').show();

            //progressbar steps
            $('.progressbar .step-2').removeClass('active');
            $('.progressbar .step-3').removeClass('done');
            $('.progressbar .step-2').addClass('done');
            $('.progressbar .step-3').addClass('active');

            //add description to a vaiable
            more = $('.problems-description textarea').val();
          }else{
            alert('Select a problem to fix');
          }
        });
/* Toggle other issues */
  $('.other').on('click',function(){
    $('.other-issues').toggle();
  });

  $('.multiple').on('click',function(){
    $('.section-heading.issue-t1').show();
    $('.section-heading.issue-t2').hide();
    $('.main-issues').hide();
    $('.other-issues').show();
  });
  $('.no-screen').on('click',function(){
    $('.section-heading.issue-t1').show();
    $('.section-heading.issue-t2').hide();
    $('.main-issues').hide();
    $('.other-issues').show();
    $('.other-issues').find('div').first().hide();
  });

//Initialice geocomplete on #address Input
$('#address').geocomplete();

/*initialize navbar*/
$('.progressbar .step-2 span.text').text('Issues');

if (mq) {
  /* the viewport {mq} is more than 768 pixels wide */

  $('.color-button').on('click',function(){
    scolor = $('input[type=radio]', this).val();
    $('.bottom').show();
    if($('.problem-btns input:checkbox:checked').length > 0){
      $('.bottom > div').hide();
      $('.bottom .total').show();
    }else{
      $('.bottom > div').hide();
      $('.bottom .issue-btns').show();
      $('.bottom .issue-btns .not-found a').show();
    }
  });

  $('.color-button input[type=radio]').change(function(){
    scolor = $(this).val();
    $('.progressbar .step-1 span.text').text(`${ipModel} ${scolor}`);
  });

  $('.not-found a').on('click',function(){
    $(this).hide();
    $('.describe-issue').show();
  });
  $('.chose-problem .problem-button').on('change',function(){
    if($('.chose-problem input:checkbox:checked').length > 0){
      $('.issue-btns').hide();
      $('.bottom .total').show();
    }else{
      $('.total').hide();
      $('.issue-btns').show();
    }
  });

  //onclick check if this has a value and continue
  $('.describe-issue .btn').on('click',function(){
    if($('.describe-issue input').val()){
      $('.describe-issue').hide();
      $('.confirm').show();
      $('.problem-btns').hide();
      $('.date-btns').show();
      $('.progressbar .step-2').removeClass('active');
      $('.progressbar .step-2').addClass('done');
      $('.progressbar .step-3').addClass('active');
    }
  });
  $('.bottom .total').on('click',function(){
    $('.bottom .total').hide();
    $('.confirm').show();
  });

  //adds date at the end of the span
  $('.btn.hour-button').on('change',function(e){
    visitTime = $('input[type=radio]', this).val();
    if (mq) {
      $('.progressbar .step-3 span.text').text(`${month} ${fechaFinal} ${visitTime}`);
    } else {
      $('.progressbar .step-3 span.text').text(`${month} ${fechaFinal.substring(4,6)} ${visitTime}`);
    }
  });

  //confirm button to go to the rest of the form
  $('.confirm .btn').on('click',function(){

    $('.date-btns').hide();
    $('.fields').show();
    $('.confirm').hide();
    $('.submit').show();
    $('.progressbar .step-3').removeClass('active');
    $('.progressbar .step-3').addClass('done');
  });

  /* confirm button to go to the rest of the form */
  $('.submit .btn').on('click',function(){

    if ($('#name').valid() && $('#email').valid() && $('#phoneNumber').valid() && $('#address').valid()) {
      name =          $('#name').val();
      email =         $('#email').val();
      phoneNumber =   $('#phoneNumber').val();
      address =       $('#address').val();
      floor =         $('#floor').val();
      instructions =  $('#instructions').val();
      code =          $('#code').val();
      
      if(more == null)
        more = "";

      dataString = {
        "ipModel" : ipModel,
        "scolor" : scolor,
        "instructions" : instructions,
        "problems" : problems,
        "more" : more,
        "name" : name,
        "email" : email,
        "phoneNumber" : phoneNumber,
        "address" : address,
        "floor" : floor,
        "code" : code,
        "fechaFinal" : fechaFinal,
        "visitTime" : visitTime,
        "total" : total,
        "price" : price.toFixed(2)
      };

      submitData(dataString);
      $('#name').text(JSON.stringify(dataString.name));
      //window.location.replace("http://ifixorlando.com/summary.html");
    }

    console.log(`name ${name}, email ${email }, phoneNumber ${phoneNumber} --- address ${address}, floor ${floor }, instructions ${instructions}, code ${code}`);


        /*$('.address').val().length;
        $('.floor').val().length;
        $('.instructions').val().length;
        $('.email').val().length;
        $('.name').val().length;
        $('.phone').val().length;

        $('.date-btns').hide();
        $('.fields').show();
        $('.confirm').hide();
        $('.submit').show();
        $('.progressbar .step-3').removeClass('active');
        $('.progressbar .step-3').addClass('done');*/
      });



} else {
  /* the viewport {mq} is less than 768 pixels wide */

  $('.navbar-toggle').on('click',function(){
    if ($('.navbar-toggle').hasClass('collapsed')) {
      $('.navbar-default').addClass('affix-toggle');
    } else {
      $('.navbar-default').removeClass('affix-toggle');
    }
  });

  $('.chose-phone input[type=radio]').change(function(){
    $('.progressbar .step-1 span.text').text(`${ipModel}`);
  });

  $('.btn.phone-button').on('click',function(){
    $('.phone-btns').hide();
  });

  $('.problem-button input:checkbox').change(function(){

    price = 0;

    $('.screen input[type=checkbox]').attr('rel',screen.toFixed(2));
    $('.battery input[type=checkbox]').attr('rel',battery.toFixed(2));
    $('.turn input[type=checkbox]').attr('rel',turn.toFixed(2));
    $('.cport input[type=checkbox]').attr('rel',cport.toFixed(2));
    $('.hplug input[type=checkbox]').attr('rel',hplug.toFixed(2));
    $('.pbutton input[type=checkbox]').attr('rel',pbutton.toFixed(2));
    $('.fcamera input[type=checkbox]').attr('rel',fcamera.toFixed(2));
    $('.bcamera input[type=checkbox]').attr('rel',bcamera.toFixed(2));
    $('.sbutton input[type=checkbox]').attr('rel',sbutton.toFixed(2));
    $('.wbluetoth input[type=checkbox]').attr('rel',wbluetoth.toFixed(2));
    $('.wdamage input[type=checkbox]').attr('rel',wdamage.toFixed(2));
    $('.hbutton input[type=checkbox]').attr('rel',hbutton.toFixed(2));
    $('.ispeaker input[type=checkbox]').attr('rel',ispeaker.toFixed(2));
    /*    $('.diagnostic input[type=checkbox]').attr('rel',diagnostic.toFixed(2));*/

    $('.issue-btns').hide();

    $(".problem-button.active input[type=checkbox]").each(function() {
      price += parseFloat($(this).attr("rel"));
      problems += `${$(this).val()}, `;
    });

    $('.progressbar .step-2 span.text').text(`cost: $${price.toFixed(2)}`);
    $('span.cost-text').text(`$${price.toFixed(2)}`);
    total = price.toFixed(2);
    

    if($('.other-issues input:checkbox:checked').length > 0){
      $('.bottom').show();
      $('.bottom .total').show();
    }else{
      $('.bottom').hide();
      $('.bottom .total').hide();
    }

    /*On click screen go to the next step*/
    $('.main-issues .screen').on('change',function(e){
      e.preventDefault();
      $('.problem-btns').hide();
      $('.date-btns').show();
      $('.date-btns .date').hide();
      $('.date-btns .hour').hide();
    });

    $('.bottom .contact').on('click',function(){

      if ($('#name').valid() && $('#email').valid() && $('#phoneNumber').valid()) {
        name =          $('#name').val();
        email =         $('#email').val();
        phoneNumber =   $('#phoneNumber').val();

        $('.fields .personal-info').hide();
        $('.fields .meeting-info').show();
        $('.bottom > div').hide();
        $('.bottom .submit').show();
        
      }

    });
      
    /*confirm button to go to the rest of the form*/
    $('.confirm .btn').on('click',function(){

      $('.confirm').hide();
      $('.date-btns').hide();
      $('.fields').show();
      $('.submit').show();
      $('.progressbar .step-3').removeClass('active');
      $('.progressbar .step-3').addClass('done');
    });

  }); /* this is the end of the code that selects the problems $('.problem-button input:checkbox' */

  //check if description has value then send
  $('.bottom .contact').on('click',function(){

    if($('#unknown-issue-description').val().length > 10){
      $('.fields .personal-info').hide();
      $('.fields .meeting-info').show();
      $('.bottom > div').hide();
      $('.bottom .submit').show();
    }

  });

  /* checks if a problem was selected if not popup a message */
  $('.total .btn').on('click',function(){
    if($('input:checkbox:checked').length > 0){
      $('.problem-btns').hide();
      $('.bottom').hide();
      $('.date-btns').show();
      $('.date-btns .mobile-datetime').show();
      $('.date-btns .date').hide();
      $('.date-btns .hour').hide();

      /* add description to a vaiable */
      more = $('.problems-description textarea').val();
    }
  });

  /*On click change dates and times*/
  $('.btn.date-button').on('change',function(e){
    $('.date-btns .date').hide();
    $('.date-btns .hour').show();
  });
  /*On click change dates and times*/
  $('.btn.hour-button').on('change',function(e){
    $('.date-btns').hide();
    $('.fields').show();
    $('.fields .personal-info').show();
    $('.bottom').show();
    $('.bottom > div').hide();
    $('.bottom .contact').show();
    $('.fields .meeting-info').hide();
  });

  /* checks if a problem was selected if not popup a message */
  $('.mobile-datetime .ttime').on('click',function(){
    $('.progressbar .step-3').removeClass('active');
    $('.progressbar .step-3').addClass('done');
    $('.date-btns').hide();
    $('.fields').show();
    $('.fields .personal-info').show();
    $('.bottom').show();
    $('.bottom > div').hide();
    $('.bottom .contact').show();
    $('.fields .meeting-info').hide();
  });
  $('.mobile-datetime .mtime').on('click',function(){
    $('.date-btns .mobile-datetime').hide();
    $('.date-btns .date').show();
  });

  $('.submit .btn').on('click',function(){

    if ($('#address').valid()) {
      address      =   $('#address').val();
      floor        =   $('#floor').val();
      instructions =   $('#instructions').val();
      name =          $('#name').val();
      email =         $('#email').val();
      phoneNumber =   $('#phoneNumber').val();
      code =          $('#code').val();


      if(more == null)
        more = "";

      dataString = {
        "ipModel" : ipModel,
        "scolor" : scolor,
        "instructions" : instructions,
        "problems" : problems,
        "price" : price.toFixed(2),
        "more" : more,
        "name" : name,
        "email" : email,
        "phoneNumber" : phoneNumber,
        "address" : address,
        "floor" : floor,
        "code" : code,
        "fechaFinal" : fechaFinal,
        "visitTime" : visitTime,
        "total" : total,
        "price" : price.toFixed(2)
      };

      submitData(dataString);
      $('#name').text(JSON.stringify(dataString.name));
    }

    console.log(JSON.stringify(dataString)+ " - mq")

  });

  /*second-step button clicked*/
  $('.step-2 .bar-edit').on('click',function(){
      /*$('.chose-problem ').find('label.btn.active').removeClass('active');
      price = 0;*/
      $('.main-issues > div').hide();
      $('.main-issues').show();
      $('.main-issues .issue-t2').show();
      $('.section-heading.issue-t1').hide();
      $('.section-heading.issue-t2').show();
      $('.unknown-issue').hide();
    });

  /*can't find my issue button clicked*/
  $('#issue-not-found').on('click',function(){
    $('.section-heading').hide();
    $('.other-issues').hide();
    $('.unknown-issue').show();
    $('.unknown-issue .section-heading').show();
      /*$('.bottom').show();
      $('.bottom .continue').show();*/
    });

  $('#unknown-issue-description').on('keyup',function(){
    $('.not-found').hide();
    if($('#unknown-issue-description').val().length > 0){
      $('.bottom').show();
      $('.bottom .continue').show();
    }else{
      $('.bottom').hide();
      $('.bottom .continue').show();
    }

  });

  /* checks if a problem was selected if not popup a message */
  $('.continue .btn').on('click',function(){
    $('.unknown-issue').hide();
    $('.unknown-issue .section-heading').hide();
    $('.problem-btns').hide();
    $('.bottom').hide();
    $('.section-heading.issue-t1').show();
    $('.date-btns').show();
    $('.date-btns .mobile-datetime').show();
    $('.date-btns .date').hide();
    $('.date-btns .hour').hide();

    /*add description to a vaiable */
    more = $('.problems-description textarea').val();
  });

}/*End else mq*/


    //show section depending on edit buttons click
    $('.step-1 .bar-edit').on('click',function(){
      $('.phone-btns').show();
      $('.color-btns').show();
      $('.problem-btns').hide();
    });


 //progressbar steps
 $('.step-1 .bar-edit').on('click',function(){
  $('.phone-btns').show();
  $('.color-btns').hide();
  $('.problem-btns').hide();
  $('.problem-btns label').removeClass('active');
  $('.problem-btns .main-issues').show();
  $('.problem-btns .other-issues').hide();
  $('.date-btns').hide();
  $('.fields').hide();
  $('.edit-phones').hide();
  $('.chose-phone').show();
  $('.bottom > div').hide();
  $('.bottom .issue-btns').show();
  $('.bottom').hide();
  $('.progressbar .step-1').removeClass('done');
  $('.progressbar .step-1').addClass('active');
  $('.progressbar .step-2').removeClass('active done');
  $('.progressbar .step-3').removeClass('active done');
});
 $('.step-2 .bar-edit').on('click',function(){
  $('.phone-btns').hide();
  $('.color-btns').hide();
  $('.problem-btns').show();
  $('.problem-btns .main-issues').show();
  $('.problem-btns .other-issues').hide();
  $('.date-btns').hide();
  $('.fields').hide();
  $('.bottom > div').hide();
  $('.bottom .issue-btns').show();

  $('.progressbar .step-1').removeClass('active done');
  $('.progressbar .step-2').removeClass('active done');
  $('.progressbar .step-3').removeClass('active done');
  $('.progressbar .step-1').addClass('done');
  $('.progressbar .step-2').addClass('active');

  if($('.problem-btns input:checkbox:checked').length > 0){
    $('.bottom > div').hide();
    $('.bottom .total').show();
  }else{
    $('.bottom > div').hide();
    $('.bottom .issue-btns').show();
    $('.bottom .issue-btns .not-found a').show();
  }
});
 $('.step-3 .bar-edit').on('click',function(){
  $('.phone-btns').hide();
  $('.color-btns').hide();
  $('.problem-btns').hide();
  $('.date-btns').show();
  $('.fields').hide();
  $('.bottom > div').hide();
  $('.bottom .confirm').show();
  $('.progressbar .step-1').removeClass('active done');
  $('.progressbar .step-2').removeClass('active done');
  $('.progressbar .step-3').removeClass('active done');
  $('.progressbar .step-1').addClass('done');
  $('.progressbar .step-2').addClass('done');
  $('.progressbar .step-3').addClass('active');
});

//progressbar buttons text
$('.chose-phone .phone-button input[type=radio]').change(function(){
  $('.progressbar .step-1 span.text').text($(this).val());
  $('span.phone-title').text(`${$(this).val()}`);
  ipModel = $(this).val();
});


$('#date').change(function(){
  $('.progressbar .step-3 span.text').text($('#date').val());
});

//navbar buttons
if ($('.problem-btns').is(':visible')) {
  $('.step-1').addClass('done');
  $('.step-2').addClass('active');
}
if ($('.date-btns').is(':visible')) {
  $('.step-1').addClass('done');
  $('.step-2').addClass('done');
  $('.step-3').addClass('active');
}
if ($('.final-part').is(':visible')) {
  $('.step-1').addClass('done');
  $('.step-2').addClass('done');
  $('.step-3').addClass('done');
}


//prices depending on the iphone model
$('.phone-button input[type=radio]').change(function(){
  phone = $(this).val();

  switch (phone) {
    case '5':
    case '5C':
    case '5S':
    case 'SE':
    screen=54.99;
    break;
    case '6':
    screen=69.99;
    break;
    case '6Plus':
    screen=69.99;
    break;
    case '6S':
    screen=89.99;
    break;
    case '6S Plus':
    screen=89.99;
    break;
    case '7':
    case '7 Plus':
    screen=109.99;
    break;
    case '8':
    case '8 Plus':
    screen=129.99;
    break;
    case 'X':
    screen=0;
    break;
  }
});
$('.screen input[type=checkbox]').attr('rel',0);
$('.battery input[type=checkbox]').attr('rel',0);
$('.turn input[type=checkbox]').attr('rel',0);
$('.diagnostic input[type=checkbox]').attr('rel',0);
$('.other input[type=checkbox]').attr('rel',0);

console.log('antes');
console.log('phone ' + phone)
  $('.problem-button.screen input:checkbox').change(function(){
    if(phone == "X"){
      if($('.problem-button.screen').hasClass('active'))
          alert("Coming soon...");
    }else{
      console.log('No entro');
    }
  });

$('.problem-button.turn input:checkbox, .problem-button.pbutton input:checkbox, .problem-button.sbutton input:checkbox, .problem-button.wdamage input:checkbox, .problem-button.hbutton input:checkbox').change(function(){
  if($('.problem-button.turn, .problem-button.pbutton, .problem-button.sbutton, .problem-button.wdamage').hasClass('active'))
    alert("To Be Determined");
});
$('.problem-button input:checkbox').change(function(){

  price = 0;

  $('.screen input[type=checkbox]').attr('rel',screen.toFixed(2));
  $('.battery input[type=checkbox]').attr('rel',battery.toFixed(2));
  $('.turn input[type=checkbox]').attr('rel',turn.toFixed(2));
  $('.cport input[type=checkbox]').attr('rel',cport.toFixed(2));
  $('.hplug input[type=checkbox]').attr('rel',hplug.toFixed(2));
  $('.pbutton input[type=checkbox]').attr('rel',pbutton.toFixed(2));
  $('.fcamera input[type=checkbox]').attr('rel',fcamera.toFixed(2));
  $('.bcamera input[type=checkbox]').attr('rel',bcamera.toFixed(2));
  $('.sbutton input[type=checkbox]').attr('rel',sbutton.toFixed(2));
  $('.wbluetoth input[type=checkbox]').attr('rel',wbluetoth.toFixed(2));
  $('.wdamage input[type=checkbox]').attr('rel',wdamage.toFixed(2));
  $('.hbutton input[type=checkbox]').attr('rel',hbutton.toFixed(2));
  $('.ispeaker input[type=checkbox]').attr('rel',ispeaker.toFixed(2));
  $('.diagnostic input[type=checkbox]').attr('rel',diagnostic.toFixed(2));

  problems = '';
  $(".problem-button.active input[type=checkbox]").each(function() {
    price += parseFloat($(this).attr("rel"));
    problems += `${$(this).val()}, `;
  });
  if(mq){
    $('.progressbar .step-2 span.text').text(`Issues ${$('input:checkbox:checked').length}, cost: $${price.toFixed(2)}`);
    $('span.cost-text').text(`$${price.toFixed(2)}`);
    total = price.toFixed(2);
  }

});

/* datetimepicker */

let today = new Date();
let date = moment(today).add(i,'day').format('llll');
let day, number, month, hour, mn, time;
const timeFormat = 'hh:mm';

/* Set the names in the date buttons */
for (var i = 0; i < 5; i++) {
  date = moment(today).add(i,'day').format('llll');
  day = date.split(', ')[0];
  number = date.split(' ')[2].split(',')[0];
  month = date.split(' ')[1];
  hour = date.split(' ')[4];
  mn = date.split(' ')[5];
  time = moment(today, timeFormat);

  switch (i) {
    case 0:
    $('.today input[type=radio]').attr({day:day,number:number});
        /*$('.today .date-inner .date-day').text(day);
        $('.today .date-inner .date-number').text(number);*/
        $('.today .date-inner').text('Today');
        break;
        case 1:
        $('.day1 input[type=radio]').attr({day:day,number:number});
        $('.day1 .date-inner .date-day').text(day);
        $('.day1 .date-inner .date-number').text(number);
        break;
        case 2:
        $('.day2 input[type=radio]').attr({day:day,number:number});
        $('.day2 .date-inner .date-day').text(day);
        $('.day2 .date-inner .date-number').text(number);
        break;
        case 3:
        $('.day3 input[type=radio]').attr({day:day,number:number});
        $('.day3 .date-inner .date-day').text(day);
        $('.day3 .date-inner .date-number').text(number);
        break;
        case 4:
        $('.day4 input[type=radio]').attr({day:day,number:number});
        $('.day4 .date-inner .date-day').text(day);
        $('.day4 .date-inner .date-number').text(number);
        break;
      }
    }

    /* Esta debe configurarse para ser enviada al servidor*/
    let fechaFinal, visitTime, innerValue;
    fechaFinal = $('.date-button.active input[type=radio]').attr('day');
    fechaFinal += ' ' + $('.date-button.active input[type=radio]').attr('number');
    visitTime = $('.hour-button.active input[type=radio]').val();

    /*If is more than 7:50 schedule visits for tomorrow*/
    if (time.isSameOrAfter(moment('19:50', timeFormat))) {
      $('.date-button').removeClass('active');
      $('.date-button.day1').addClass('active');
      $('.date-button.today').hide();
      fechaFinal = $('.date-button.active input[type=radio]').attr('day');
      fechaFinal += ' ' + $('.date-button.active input[type=radio]').attr('number');
      /*If is more than 00:00 schedule visits for today*/
    }else if (time.isSameOrAfter(moment('00:00', timeFormat))) {
      $('.date-button').removeClass('active');
      $('.date-button.today').addClass('active');
      $('.date-button.today').css('display','block');
    }


    /*On click change dates and times*/
    $('.btn.date-button').on('change',function(e){
      fechaFinal = $('input[type=radio]', this).attr('day');
      fechaFinal += ' ' + $('input[type=radio]', this).attr('number');
      visitTime = $('.hour-button.active input[type=radio]').val();

      $('.btn.hour-button').on('change',function(e){
        visitTime = $('input[type=radio]', this).val();
        if (mq) {
          $('.progressbar .step-3 span.text').text(` ${month} ${fechaFinal} ${visitTime}`);
        } else {
          $('.progressbar .step-3 span.text').text(` ${month} ${fechaFinal.substring(4,6)} ${visitTime}`);
        }
      });

      if (mq) {
        $('.progressbar .step-3 span.text').text(` ${fechaFinal}`);
      } else {
        $('.progressbar .step-3 span.text').text(`${month} ${fechaFinal.substring(4,6)} ${visitTime}`);
      }
      

      if($('.today').hasClass('active')){
        if(time.isBetween(moment('07:00', timeFormat), moment('08:00', timeFormat))){
          $('.btn.hour-button').show();
          innerValue = $('.btn.hour-button:nth-child(1) .hour-inner').text();
          $('.btn.hour-button:nth-child(1) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(1)').addClass('active');
        }else if(time.isBetween(moment('08:00', timeFormat), moment('09:00', timeFormat))){
          $('.btn.hour-button:nth-child(-1n+1)').hide();
          innerValue = $('.btn.hour-button:nth-child(2) .hour-inner').text();
          $('.btn.hour-button:nth-child(2) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(2)').addClass('active');
        }else if(time.isBetween(moment('09:00', timeFormat), moment('10:00', timeFormat))){
          $('.btn.hour-button:nth-child(-1n+2)').hide();
          innerValue = $('.btn.hour-button:nth-child(3) .hour-inner').text();
          $('.btn.hour-button:nth-child(3) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(3)').addClass('active');
        }else if(time.isBetween(moment('10:00', timeFormat), moment('11:00', timeFormat))){
          $('.btn.hour-button:nth-child(-1n+3)').hide();
          innerValue = $('.btn.hour-button:nth-child(4) .hour-inner').text();
          $('.btn.hour-button:nth-child(4) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(4)').addClass('active');
        }else if(time.isBetween(moment('11:00', timeFormat), moment('12:00', timeFormat))){
          $('.btn.hour-button:nth-child(-1n+4)').hide();
          innerValue = $('.btn.hour-button:nth-child(5) .hour-inner').text();
          $('.btn.hour-button:nth-child(5) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(5)').addClass('active');
        }else if(time.isBetween(moment('12:00', timeFormat), moment('13:00', timeFormat))){
          $('.btn.hour-button:nth-child(-1n+5)').hide();
          innerValue = $('.btn.hour-button:nth-child(6) .hour-inner').text();
          $('.btn.hour-button:nth-child(6) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(6)').addClass('active');
        }else if(time.isBetween(moment('13:00', timeFormat), moment('14:00', timeFormat))){
          $('.btn.hour-button:nth-child(-1n+6)').hide();
          innerValue = $('.btn.hour-button:nth-child(7) .hour-inner').text();
          $('.btn.hour-button:nth-child(7) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(7)').addClass('active');
        }else if(time.isBetween(moment('14:00', timeFormat), moment('15:00', timeFormat))){
          $('.btn.hour-button:nth-child(-1n+7)').hide();
          innerValue = $('.btn.hour-button:nth-child(8) .hour-inner').text();
          $('.btn.hour-button:nth-child(8) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(8)').addClass('active');
        }else if(time.isBetween(moment('15:00', timeFormat), moment('16:00', timeFormat))){
          $('.btn.hour-button:nth-child(-1n+8)').hide();
          innerValue = $('.btn.hour-button:nth-child(9) .hour-inner').text();
          $('.btn.hour-button:nth-child(9) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(9)').addClass('active');
        }else if(time.isBetween(moment('16:00', timeFormat), moment('17:00', timeFormat))){
          $('.btn.hour-button:nth-child(-1n+9)').hide();
          innerValue = $('.btn.hour-button:nth-child(10) .hour-inner').text();
          $('.btn.hour-button:nth-child(10) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(10)').addClass('active');
        }else if(time.isBetween(moment('17:00', timeFormat), moment('18:00', timeFormat))){
          $('.btn.hour-button:nth-child(-1n+10)').hide();
          innerValue = $('.btn.hour-button:nth-child(11) .hour-inner').text();
          $('.btn.hour-button:nth-child(11) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(11)').addClass('active');
        }else if(time.isBetween(moment('18:00', timeFormat), moment('19:00', timeFormat))){
          $('.btn.hour-button:nth-child(-1n+11)').hide();
          innerValue = $('.btn.hour-button:nth-child(12) .hour-inner').text();
          $('.btn.hour-button:nth-child(12) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(12)').addClass('active');
        }else if(time.isBetween(moment('19:00', timeFormat), moment('20:00', timeFormat))){
          $('.btn.hour-button:nth-child(-1n+12)').hide();
          innerValue = $('.btn.hour-button:nth-child(13) .hour-inner').text();
          $('.btn.hour-button:nth-child(13) .hour-inner').text('Within the next hour');
          $('.btn.hour-button:nth-child(13)').addClass('active');
        }
        console.log(`Esta es la hora ${innerValue}`);
        visitTime = $('.hour-button.active input[type=radio]').val();
      }else{
        $('.btn.hour-button').show();
        $('.btn.hour-button').removeClass('active');
        $('.btn.hour-button:nth-child(1)').addClass('active');
        if(time.isBetween(moment('07:00', timeFormat), moment('08:00', timeFormat))){
          $('.btn.hour-button:nth-child(1) .hour-inner').text(innerValue);
        }else if(time.isBetween(moment('08:00', timeFormat), moment('09:00', timeFormat))){
          $('.btn.hour-button:nth-child(2) .hour-inner').text(innerValue);
        }else if(time.isBetween(moment('09:00', timeFormat), moment('10:00', timeFormat))){
          $('.btn.hour-button:nth-child(3) .hour-inner').text(innerValue);
        }else if(time.isBetween(moment('10:00', timeFormat), moment('11:00', timeFormat))){
          $('.btn.hour-button:nth-child(4) .hour-inner').text(innerValue);
        }else if(time.isBetween(moment('11:00', timeFormat), moment('12:00', timeFormat))){
          $('.btn.hour-button:nth-child(5) .hour-inner').text(innerValue);
        }else if(time.isBetween(moment('12:00', timeFormat), moment('13:00', timeFormat))){
          $('.btn.hour-button:nth-child(6) .hour-inner').text(innerValue);
        }else if(time.isBetween(moment('13:00', timeFormat), moment('14:00', timeFormat))){
          $('.btn.hour-button:nth-child(7) .hour-inner').text(innerValue);
        }else if(time.isBetween(moment('14:00', timeFormat), moment('15:00', timeFormat))){
          $('.btn.hour-button:nth-child(8) .hour-inner').text(innerValue);
        }else if(time.isBetween(moment('15:00', timeFormat), moment('16:00', timeFormat))){
          $('.btn.hour-button:nth-child(9) .hour-inner').text(innerValue);
        }else if(time.isBetween(moment('16:00', timeFormat), moment('17:00', timeFormat))){
          $('.btn.hour-button:nth-child(10) .hour-inner').text(innerValue);
        }else if(time.isBetween(moment('17:00', timeFormat), moment('18:00', timeFormat))){
          $('.btn.hour-button:nth-child(11) .hour-inner').text(innerValue);
        }else if(time.isBetween(moment('18:00', timeFormat), moment('19:00', timeFormat))){
          $('.btn.hour-button:nth-child(12) .hour-inner').text(innerValue);
        }else if(time.isBetween(moment('19:00', timeFormat), moment('20:00', timeFormat))){
          $('.btn.hour-button:nth-child(13) .hour-inner').text(innerValue);
        }
        visitTime = $('.btn.hour-button:nth-child(1) input[type=radio]').val();

      }

    });
/**/
visitTime = $('.hour-button.active input[type=radio]').val();

if($('.today').hasClass('active')){
  if(time.isBetween(moment('07:00', timeFormat), moment('08:00', timeFormat))){
    $('.btn.hour-button').show();
    innerValue = $('.btn.hour-button:nth-child(1) .hour-inner').text();
    $('.btn.hour-button:nth-child(1) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(1)').addClass('active');
  }else if(time.isBetween(moment('08:00', timeFormat), moment('09:00', timeFormat))){
    $('.btn.hour-button:nth-child(-1n+1)').hide();
    innerValue = $('.btn.hour-button:nth-child(2) .hour-inner').text();
    $('.btn.hour-button:nth-child(2) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(2)').addClass('active');
  }else if(time.isBetween(moment('09:00', timeFormat), moment('10:00', timeFormat))){
    $('.btn.hour-button:nth-child(-1n+2)').hide();
    innerValue = $('.btn.hour-button:nth-child(3) .hour-inner').text();
    $('.btn.hour-button:nth-child(3) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(3)').addClass('active');
  }else if(time.isBetween(moment('10:00', timeFormat), moment('11:00', timeFormat))){
    $('.btn.hour-button:nth-child(-1n+3)').hide();
    innerValue = $('.btn.hour-button:nth-child(4) .hour-inner').text();
    $('.btn.hour-button:nth-child(4) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(4)').addClass('active');
  }else if(time.isBetween(moment('11:00', timeFormat), moment('12:00', timeFormat))){
    $('.btn.hour-button:nth-child(-1n+4)').hide();
    innerValue = $('.btn.hour-button:nth-child(5) .hour-inner').text();
    $('.btn.hour-button:nth-child(5) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(5)').addClass('active');
  }else if(time.isBetween(moment('12:00', timeFormat), moment('13:00', timeFormat))){
    $('.btn.hour-button:nth-child(-1n+5)').hide();
    innerValue = $('.btn.hour-button:nth-child(6) .hour-inner').text();
    $('.btn.hour-button:nth-child(6) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(6)').addClass('active');
  }else if(time.isBetween(moment('13:00', timeFormat), moment('14:00', timeFormat))){
    $('.btn.hour-button:nth-child(-1n+6)').hide();
    innerValue = $('.btn.hour-button:nth-child(7) .hour-inner').text();
    $('.btn.hour-button:nth-child(7) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(7)').addClass('active');
  }else if(time.isBetween(moment('14:00', timeFormat), moment('15:00', timeFormat))){
    $('.btn.hour-button:nth-child(-1n+7)').hide();
    innerValue = $('.btn.hour-button:nth-child(8) .hour-inner').text();
    $('.btn.hour-button:nth-child(8) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(8)').addClass('active');
  }else if(time.isBetween(moment('15:00', timeFormat), moment('16:00', timeFormat))){
    $('.btn.hour-button:nth-child(-1n+8)').hide();
    innerValue = $('.btn.hour-button:nth-child(9) .hour-inner').text();
    console.log(`Esta es la hora ${innerValue}`);
    $('.btn.hour-button:nth-child(9) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(9)').addClass('active');
  }else if(time.isBetween(moment('16:00', timeFormat), moment('17:00', timeFormat))){
    $('.btn.hour-button:nth-child(-1n+9)').hide();
    innerValue = $('.btn.hour-button:nth-child(10) .hour-inner').text();
    $('.btn.hour-button:nth-child(10) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(10)').addClass('active');
  }else if(time.isBetween(moment('17:00', timeFormat), moment('18:00', timeFormat))){
    $('.btn.hour-button:nth-child(-1n+10)').hide();
    innerValue = $('.btn.hour-button:nth-child(11) .hour-inner').text();
    $('.btn.hour-button:nth-child(11) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(11)').addClass('active');
  }else if(time.isBetween(moment('18:00', timeFormat), moment('19:00', timeFormat))){
    $('.btn.hour-button:nth-child(-1n+11)').hide();
    innerValue = $('.btn.hour-button:nth-child(12) .hour-inner').text();
    $('.btn.hour-button:nth-child(12) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(12)').addClass('active');
  }else if(time.isBetween(moment('19:00', timeFormat), moment('20:00', timeFormat))){
    $('.btn.hour-button:nth-child(-1n+12)').hide();
    innerValue = $('.btn.hour-button:nth-child(13) .hour-inner').text();
    $('.btn.hour-button:nth-child(13) .hour-inner').text('Within the next hour');
    $('.btn.hour-button:nth-child(13)').addClass('active');
  }
  visitTime = innerValue;

}else{
  visitTime = $('.btn.hour-button:nth-child(1) input[type=radio]').val();
  $('.btn.hour-button').show();

}


/* Resets the date to todays date so it doesn't show the next month on the navbar */
date = moment(today).format('llll');
day = date.split(', ')[0];
number = date.split(' ')[2].split(',')[0];
month = date.split(' ')[1];
hour = date.split(' ')[4];
mn = date.split(' ')[5];
if (mq) {
  $('.progressbar .step-3 span.text').text(` ${month} ${fechaFinal} ${visitTime}`);
} else {
  $('.progressbar .step-3 span.text').text(` ${month} ${fechaFinal.substring(4,6)} ${visitTime}`);
}

$('.submit .btn').on('click',function(e){
  $('.modal-body p').text(`<h1>
    Iphone ${ipModel} ${scolor}, \n
    Visit date: ${fechaFinal} at ${visitTime}\n
    Problems: ${problems} ${more}\n
    Price for the repair:$${price.toFixed(2)}
    address: ${address} ${floor} 
    Instructions: ${instructions},
    Promo Code: ${code},
    Email: ${email}, 
    Phone number: ${pNumber}
    Name ${name}</h1>`);
  $('.progressbar .step-3 span.text').text(` ${month} ${fechaFinal} ${visitTime}`);

    //console.log(` ${ipModel} ${scolor} ${fechaFinal} ${visitTime}`);
  });

let submitData = (dataString) => {
  console.log(dataString);
    //dataString.replace(/\"/g, "");
    localStorage.setItem( 'data', JSON.stringify(dataString.name) );
    $('#summary #name').text(`${JSON.stringify(dataString.name).replace(/\"/g, "")}`);

    if(dataString.problems == ''){
      $('#summary #issue').text($('#unknown-issue-description').val());
    }else{
      $('#summary #issue').text(`${JSON.stringify(dataString.problems).replace(/\"/g, "")}`);
    }
    
    $('#summary #location').text(`${JSON.stringify(dataString.address).replace(/\"/g, "")} ${JSON.stringify(dataString.floor).replace(/\"/g, "")}`);
    $('#summary #date').text(`${JSON.stringify(dataString.fechaFinal).replace(/\"/g, "")} at ${JSON.stringify(dataString.visitTime).replace(/\"/g, "")}`);
    $('#summary #device').text(`${JSON.stringify(dataString.ipModel).replace(/\"/g, "")}, ${JSON.stringify(dataString.scolor).replace(/\"/g, "")}`);
    $('#summary #number a').text(`${JSON.stringify(dataString.phoneNumber).replace(/\"/g, "")}`);
    $('#summary #code').text(`${JSON.stringify(dataString.code).replace(/\"/g, "")}`);
    $('#summary #email').text(`${JSON.stringify(dataString.email).replace(/\"/g, "")}`);
    $('#summary #total').text(`${JSON.stringify(dataString.price).replace(/\"/g, "")}`);
    
    console.log( localStorage.getItem( 'data' ) );
    $.ajax({
      type: "POST",
      url: "parser.php",
      data: dataString,
      success: function(){
        //alert('We will contact you soon');
      }
    });
  }

  $('.close').on('click',function(e){
    window.location.replace("http://ifixorlando.com");
  });

})(jQuery); // End of use strict