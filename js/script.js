$(document).ready(function(){
    
    $('#banner').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:1,
                nav:false,
            },

            1000:{
                items:1
            }
        }
    })

     
    $('#pricing_icon').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:false,
      autoplay:true,
    
      responsive:{
          0:{
              items:2,
              nav:false,
              center:true,
          },
          500:{
              items:3,
              nav:false,
          },

          1000:{
              items:6
          }
      }
  })

  // tetimoanail

   
  $('#testi').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:['&larr;' , '&rarr;'],
   responsive:{
        0:{
            items:1,
         
        },
        600:{
            items:2,
            nav:false,
        },

        1000:{
            items:3,
            nav:true,
        }
    }
})
    

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

// init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  }); 

  $("a.group").fancybox({
    'transitionIn'	:	'elastic',
    'transitionOut'	:	'elastic',
    'speedIn'		:	600, 
    'speedOut'		:	200, 
    'overlayShow'	:	false
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});

// $('.owl-carousel').owlCarousel({
//   items:1,
//   merge:true,
//   loop:true,
//   margin:10,
//   video:true,
//   lazyLoad:true,
//   center:true,
//   responsive:{
//       480:{
//           items:2
//       },
//       600:{
//           items:4
//       }
//   }
// })

// collape
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// //mail
//<![CDATA[
  $(document).on('click','.send_form', function(){
    var input_blanter = document.getElementById('wa_email');
    
    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6285155455088',
        walink2 = 'Halo Sosialy.com',
        text_yes = 'Terkirim.',
        text_no = 'Isi semua Formulir lalu klik Send.';
    
    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
    }
    
    if("" != input_blanter.value){
    
     /* Call Input Form */
    var input_select1 = $("#wa_select :selected").text(),
        input_name1 = $("#wa_name").val(),
        input_email1 = $("#wa_email").val(),
        input_number1 = $("#wa_number").val(),
        input_url1 = $("#wa_url").val(),
        input_textarea1 = $("#wa_textarea").val();
    
    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
        '*Name* : ' + input_name1 + '%0A' +
        '*Email Address* : ' + input_email1 + '%0A' +
      
        '*Input Number* : ' + input_number1 + '%0A' +
        '*URL/Link* : ' + input_url1 + '%0A' +
        '*Description* : ' + input_textarea1 + '%0A';
    
    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');
    document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
    } else {
    document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
    }
    });
    //]]>

    // header fixed
    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
    
    // top to bottom
  
    $('.bottom_top').click(function () {
      $('html, body').animate({
          scrollTop: '0px'
      },800);
      return false;
  });
    $('.bottom_top').hide();

$(window).scroll(function(){
    if($(window).scrollTop() > 200){
        $('.bottom_top').fadeIn();}
    else{
        $('.bottom_top').fadeOut();}
    })

});