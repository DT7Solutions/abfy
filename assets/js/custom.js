(function($) {
  
  "use strict";

  // Preloader
  function stylePreloader() {
    $('body').addClass('preloader-deactive');
  }

  // Background Image
  $('[data-bg-img]').each(function() {
    $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
  });
  // Background Color
  $('[data-bg-color]').each(function() {
    $(this).css('background-color', $(this).data("bg-color"));
  });

  // Donate Form Input Active JS
  $(".donate-form .amount-info .donate-amount, .donation-form .amount-info .donate-amount, .widget-causes-item .amount-info .donate-amount").on('click', function() {
    $(".donate-amount").removeClass('active');
    $(this).addClass('active');
  });

  // Off Canvas JS
  var canvasWrapper = $(".off-canvas-wrapper");
  $(".btn-menu").on('click', function() {
    canvasWrapper.addClass('active');
    $("body").addClass('fix');
  });

  $(".close-action > .btn-close, .off-canvas-overlay").on('click', function() {
    canvasWrapper.removeClass('active');
    $("body").removeClass('fix');
  });

  //Responsive Slicknav JS
  $('.main-menu').slicknav({
    appendTo: '.res-mobile-menu',
    closeOnClick: true,
    removeClasses: true,
    closedSymbol: '<i class="icon_plus"></i>',
    openedSymbol: '<i class="icon_minus-06"></i>'
  });

  // Swipper JS
  var testimonialSlider = new Swiper('.testimonial-slider-container', {
    slidesPerView : 1,
    speed: 1000,
    loop: true,
    spaceBetween : 30,
    autoplay: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var teamSlider = new Swiper('.team-slider-container', {
    slidesPerView: 3,
    loop: true,
    spaceBetween : 36,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200:{
          slidesPerView : 1
      },

      992:{
          slidesPerView : 1
      },

      768:{
          slidesPerView : 1

      },

      576:{
          slidesPerView : 1,
          
      },

      0:{
          slidesPerView : 1,
          spaceBetween : 300
        
      }
    }
  });

  // Progress Bar JS
  var skillsBar = $(".progress-bar-line");
  skillsBar.appear(function() {
    skillsBar.each(function(index, elem) {
      var elementItem = $(elem),
      skillBarAmount = elementItem.data('percent');
      elementItem.animate({width: skillBarAmount}, 800);
      elementItem.closest('.progress-item').find('.percent').text(skillBarAmount);
    });
  });

  var chartSelector = $(".pie-chart-circle");
  chartSelector.each(function() {
    $(this).appear(function() {
      var $this = $(this),
        amount = '<span class="skill-percent">' + $this.data('percent') + '%</span>';
      $this.html(amount);
      $this.easyPieChart({
        trackColor: $this.data('track-color'),
        lineCap: $this.data('line-cap'),
        scaleColor: false,
        lineWidth: $this.data('line-width'),
      });
    })
  });

  //Parallax Motion Animation 
  $('.scene').each(function () {
    new Parallax($(this)[0]);
  });
  
  //Video Popup
  $('.play-video-popup').fancybox();

  // Scroll Top Hide Show
  var varWindow = $(window);
  varWindow.on('scroll', function(){
    if ($(this).scrollTop() > 250) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }

    // Sticky Header
    if($('.sticky-header').length){
      var windowpos = $(this).scrollTop();
      if (windowpos >= 80) {
        $('.sticky-header').addClass('sticky');
      } else {
        $('.sticky-header').removeClass('sticky');
      }
    }
  });

  // Ajax Contact Form JS
  var form = $('#contact-form');
  var formMessages = $('.form-message');

  $(form).submit(function(e) {
    e.preventDefault();
    var formData = form.serialize();
    $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: formData
    }).done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('alert alert-danger');
        $(formMessages).addClass('alert alert-success fade show');

        // Set the message text.
        formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
        formMessages.append(response);

        // Clear the form.
        $('#contact-form input,#contact-form textarea').val('');
    }).fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('alert alert-success');
        $(formMessages).addClass('alert alert-danger fade show');

        // Set the message text.
        if (data.responseText !== '') {
            formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
            formMessages.append(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occurred and your message could not be sent.');
        }
    });
  });
  
  //Counter JS
  var counterId = $('.counter-animate');
  if (counterId.length) {
    counterId.counterUp({
      delay: 10,
      time: 1000
    });
  }

  //Tilt Animation
  $('.tilt-animation').tilt({
    base: window,
    reset: !0, 
    scale: 1.04, 
    reverse: !1, 
    max: 15, 
    perspective: 3e3, 
    speed: 4e3
  });

  //Scroll To Top
  $('.scroll-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  // Reveal Footer JS
  let revealId = $(".reveal-footer"),
    footerHeight = revealId.outerHeight(),
    windowWidth = $(window).width(),
    windowHeight = $(window).outerHeight();

  if (windowWidth > 991 && windowHeight > footerHeight) {
    $(".site-wrapper-reveal").css({
      'margin-bottom': footerHeight + 'px'
    });
  }
  
  
/*=============================================
	=          services Active               =
=============================================*/
$('.services-item').hover(function () {
	$(this).find('.services-overlay-content').slideToggle(300);
	return false;
});
$('.services-item').hover(function () {
	$(this).find('.services-content .title').slideToggle(300);
	return true;
});
$('.services-item').hover(function () {
	$(this).find('.services-icon').slideToggle(300);
	return true;
});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  
  varWindow.on('load', function() {
    AOS.init({
      once: true,
    });
    stylePreloader();
  });
  

})(window.jQuery);


function sendingmail() {
  
  var name = document.myform.inputname.value;
  var lastname = document.myform.inputlastname.value;
  var x = document.myform.email.value;
  var contactadd = document.myform.phone.value;
  var orgname = document.myform.company_name.value;
  var company_addr = document.myform.orgadd.value;

 
  let busid = document.getElementById("bcategory");
  
  var checkboxes = busid.querySelectorAll('input[type="checkbox"]:checked');
  var values = [];
  for (let i=0; i< checkboxes.length; i++){
      let business_values = checkboxes[i].value;
      values.push(business_values)
      if (business_values == 'others'){
        working_others()
      }

  }

  var specific_product = document.myform.specific_product.value;
  var specific_product1 = document.myform.specific_product1.value;
  
  var vdradios = document.getElementsByName('exampleRadios');
  var selectedradios = '';
  for (var i = 0; i < vdradios.length; i++) {
    if (vdradios[i].checked) {
      selectedradios = vdradios[i].value;
      break;
    }
  }

  // console.log('Selected gender: ' + selectedradios);

  var intfounder = document.getElementsByName('xampleRadios');
  var selectedintfounder = '';
  for (var i = 0; i < intfounder.length; i++) {
    if (intfounder[i].checked) {
      selectedintfounder = intfounder[i].value;
      break;
    }
  }

  // console.log('Selected gender: ' + selectedintfounder);


  let expid = document.getElementById("expanid");
  
  var checkboxed = expid.querySelectorAll('input[type="checkbox"]:checked');
  var exp_values = [];
  for (let i=0; i< checkboxed.length; i++){
      let business_exp_values = checkboxed[i].value;
      exp_values.push(business_exp_values)

  }
  
  var subject = document.myform.isubj.value;
  var your_comment = document.myform.comments.value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "abfy.website@gmail.com",
    Password: "D8CEB7F5A3EE48981DBD76FA9EA23CD3DDC9",
    To: 'biz@abfyglobal.com',
    From: "abfy.website@gmail.com",
    Subject: subject ,
    Body: "Name:" + name +  "<br/> last name:" +  lastname +  "<br/> Email:" +  x +  "<br/> Phonenum:" +  contactadd +  "<br/> Name of Organization:" +  orgname +  "<br/> Organization Address:" +  company_addr + "<br/> Business category:" +  values +  "<br/> Specific Product:" +  specific_product1 +  "<br/> Vshoot:" +  selectedradios +  "<br/> InterviewFounder:" +  selectedintfounder +  "<br/> Mode of expansion:" +  exp_values +  "<br/> Comments:" +  your_comment
  }).then(
  alert("Sending email successfully....")
  );

  // console.log("Name:" + name +  "<br/> last name:" +  lastname +  "<br/> Email:" +  email +  "<br/> Phonenum:" +  contactadd +  "<br/> Name of Organization:" +  orgname +  "<br/> Organization Address:" +  company_addr + "<br/> Business category:" +  values +  "<br/> Specific Product:" +  specific_product1 +  "<br/> Vshoot:" +  selectedradios +  "<br/> InterviewFounder:" +  selectedintfounder +  "<br/> Mode of expansion:" +  exp_values +  "<br/> Comments:" +  your_comment );

}




function working_others() {
  let item_check = document.getElementById("blankCheckbox30");
    if(item_check.checked) {
      document.getElementById('select-ev-session').style.display="block"
    }else{
      document.getElementById('select-ev-session').style.display="none"
    }
   
  
}


function contmail(){
  // debugger
  var fname = document.contform.con_name.value;
  var y = document.contform.con_email.value;
  var cnum = document.contform.con_phone.value;
  var csub = document.contform.con_sub.value;
  var cmsg = document.contform.con_message.value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "abfy.website@gmail.com",
    Password: "D8CEB7F5A3EE48981DBD76FA9EA23CD3DDC9",
    To: 'biz@abfyglobal.com',
    From: "abfy.website@gmail.com",
    Subject: csub ,
    Body: "Name:" + fname +  "<br/> Email:" +  y + "<br/> Phonenum:" +  cnum + "<br/> Message:" +  cmsg
  }).then(
  alert("Sending mail successfully....")
  );

}

  // var name = document.getElementById("name").value;
  // var y = document.getElementById("email").value;
  // var Contact = document.getElementById("Phone").value;

//   let message = document.getElementById("message").value;
//   Email.send({
//   Host : "smtp.elasticemail.com",
//   Username : "abfy.website@gmail.com",
//   Password :"D8CEB7F5A3EE48981DBD76FA9EA23CD3DDC9",
//   To : 'honeypriya6741@gmail.com',
//   From : "abfy.website@gmail.com",
//   Subject : "This is the subject",
//   Body : "Name:" + name + "<br/> For email:" +  y + "<br/> Subject:" + subject + "<br/> Message:"
//   + message
// }).then(
//   alert("Sending email successfully....")
// );

// console.log("Name:" + fname +  "<br/> Email:" +  y + "<br/> Phonenum:" +  cnum + "<br/> Message:" +  cmsg );
  


// function Mail() {
//   email.send({
//   Subject : subject,
//   Body :"Name:" + name + "<br/> Form email:" +  email + "<br/> Subject:" + subject + "<br/> Message:"
//       + message
    
// }).then(
// message => alert("Your message has been sending sucessfully.")
// );
// }



// Email.send({
//   Host : "smtp.elasticemail.com",
//   Username : "username",
//   Password : "password",
//   To : 'them@website.com',
//   From : "you@isp.com",
//   Subject : "This is the subject",
//   Body : "And this is the body"
// }).then(
// message => alert(message)
// );


// checkboxes.length

 // var bid = document.myform.businessid.value;
  // var bid1 = document.myform.businessid1.value;
  // var exid = document.myform.expanid.value;
  // var comment = document.myform.comments.value;


