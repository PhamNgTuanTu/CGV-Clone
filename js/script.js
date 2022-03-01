


// Slider
// ------
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
// ----------
// End Slider 

//Tab Toggle event
// ---------------
    $("document").ready(function(){
        $(".tab-slider--body").hide();
        $(".tab-slider--body:first").show();
    });
    $(".main_toggle-wrap li").click(function() {
        $(".tab-slider--body").hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();
          if($(this).attr("rel") == "tab2"){
              $('.toggle-tabs').addClass('slide');
          }else{
              $('.toggle-tabs').removeClass('slide');
          }
        $(".main_toggle-wrap li").removeClass("active");
        $(this).addClass("active");
      });
// --------------------
//End Tab Toggle envent

//Tab Toggle day
// -------------
        $("document").ready(function(){
            $(".toggle-tab-list").hide();
            $(".toggle-tab-list:first").show();
            });

            $(".calendar-part").click(function() {
            $(".toggle-tab-list").hide();
            var activeTab = $(this).attr("rel");
            $("#"+activeTab).fadeIn();
                if($(this).attr("rel") == "tab02"){
                    $('.calendar').addClass('slide');
                }
                if($(this).attr("rel") == "tab03"){
                    $('.calendar').addClass('slide');
                }
                else{
                    $('.calendar').removeClass('slide');
                }
            $(".calendar-part").removeClass("active-day");
            $(this).addClass("active-day");
        });
// -----------------
//End Tab Toggle day

// owl carousel news and git 
// -------------------------
        $('.owl-carousel').owlCarousel({
            rtl:false,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:2,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                900:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })
// -----------------------------
// End owl carousel news and git 
// popup
// -----
function toggle(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var popup = document.getElementById('popup');
    var iframe = document.getElementById('myVideo');
    popup.classList.toggle('active');
    iframe.src = iframe.src;
    iframe.classList.toggle('active');
}
// ---------
// End popup
// popup booking ticket
// --------------------
    function toggle1(){
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')
    var popup1 = document.getElementById('popup1');
    popup1.classList.toggle('active');
    }
// ------------------------
// End popup booking ticket


// Active day
// ----------
        $(document).on('click','.calendar-part',function(){
            $(this).addClass('active-day').siblings().removeClass('active-day')
        })

        $(document).on('click','.address-theater',function(){
        $(this).addClass('active-add').siblings().removeClass('active-add')
        })

        $(document).on('click','.category-movie-detai',function(){
        $(this).addClass('active-add').siblings().removeClass('active-add')
        })
// --------------
// End Active day

