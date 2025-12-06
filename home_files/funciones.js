$(document).ready(function()
{

	 $(".pestana").click(function(){
	 	$(".footer ul").toggle();
	 	$(".footer div.postfooter").toggle();
	 	$("html,body").animate({ scrollTop: $(document).height() }, 500);
	 	$(".footer .pestana .mas").toggle();
	 	$(".footer .pestana .menos").toggle();
	 	$(".footer .copyright-in").toggle();
	 });

	 $(".acordeon h4").click(function(){
	 		$(this).find("i").toggle();
	 		$(this).parents(".panel").siblings().find(".icon-signomenos").hide();
	 		$(this).parents(".panel").siblings().find(".icon-signomas").show();
	 	
	 });
     $(".acordeon.archivos h4").click(function(){
            $(this).find("i").show();
     });

	 $(".bannernuevo").click(function(){
            $(".modal").fadeIn(400,function()
            { });  
        }); 
	  $(".modal .cerrar").click(function(){
                $(".modal").fadeOut(); 
            });
        $(".modal .close").click(function(){
                $(".modal").fadeOut(); 
        }); 

		$(".iconmobile.inactivo").click(function(){
			 $(this).removeClass("inactivo");
			 $(".wrap").addClass("back");
 			 $(".menumobile").show();
 			 $(".menumobile").animate({"left":"0%"},150);

 			 $(".wrap").animate({"left":"80%"},150);
 			
 			 $(".transparent").fadeIn("fast");
        });
         $(".transparent, .back").click(function(){
         	 $(".menumobile").animate({"left":"-100%"},150);
         	 $(".menumobile").hide();
         	 $(".wrap").animate({"left":"0px"},150);
         	 $(".transparent").fadeOut("fast"); 
         	 $(".wrap").removeClass("back"); 
         	 $(".iconmobile").addClass("inactivo");    

        });

 		 $(".menumobile > ul li").click(function(){
 			 $(this).find("ul").slideToggle("fast");
 			 $(this).siblings().find("ul").slideUp("fast");
 			  $(this).siblings().find("i").removeClass("activo");
 			 $(this).find("i").toggleClass("activo");

        });


 	    Liferay.on('initLayout', function(event) {
 		  Liferay.once(function() {
 		    Liferay.Layout.on([ 'drag:end', 'drag:start' ], function(event) {
 		      console.log('event type', event.type, event);
 		      AUI().one("#main-content").toggleClass('dragging', event.type == 'drag:start');
 		    });
 		  }, Liferay.Layout, 'bindDragDropListeners');
 		});
 	    
 	    
  	   $('.panel-heading a').on('click', function(e){
  			var $this = $(this), href;
  			var target = $this.attr('data-target');
  			var parent = $this.attr('data-parent');
  			var $target = $(target);
  			if($target.hasClass('in')){
  				$target.collapse('hide');
  			}else{
  				$(parent + ' .collapse').collapse('hide');
  				$target.collapse('toggle');
  			}
  		});
  	   
     $(".submenu2 ul li.first").click(function(){
         $(this).siblings().slideToggle("fast");
         $(".submenu2 ul li.first i").toggle();
     });

 	if ( $(window).width() > 992) 
 	{      
		$(".submenu2 ul li.first").siblings().slideDown("fast");
	} else {
        $(".submenu2 ul li.first .icomoon-right").show();
        $(".submenu2 ul li.first .icomoon-left").hide();
	}
});

$(window).resize(function () {
	if ( $(window).width() > 992) {      
		$(".submenu2 ul li.first").siblings().slideDown("fast");
	} else {
        $(".submenu2 ul li.first .icomoon-right").show();
        $(".submenu2 ul li.first .icomoon-left").hide();
	}
});

function updateDateTime() {
    var today = new Date();
    
    var h = today.getHours();
    var m = today.getMinutes();
    var d = today.getDate();
    var y = today.getFullYear();
    
    var ampm = h >= 12 ? 'PM' : 'AM';
    
    h = h % 12;
    h = h ? h : 12; 
    h = checkTime(h);
    m = checkTime(m);

    var days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sabado'];
    var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    var day = days[ today.getDay() ];
    var month = months[ today.getMonth() ];
    
    document.getElementById('date_paragraph').innerHTML = day + " " + d + " de " + month + " de " + y + "  &#903; " +  h + ":" + m + " " + ampm;
    var t = setTimeout(updateDateTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}