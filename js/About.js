$(this).ready(function(e) {
    
	$('.hinh-hover-1').hide();
	$('.hinh-hover-2').hide();
	$('.hinh-hover-3').hide();
	$('.movie').hide();
	$('.book').hide();
	$('.backstage').hide();
	
	
	$('.hinh-ban-dau-1').hover(function () {
		$('.hinh-hover-1').fadeIn(500);
		$('.movie').fadeIn(500);
	
	},function () {
		$('.hinh-hover-1').fadeOut(500);
		$('.movie').fadeOut(500);	
	});
	
	$('.hinh-ban-dau-2').hover(function () {
		$('.hinh-hover-2').fadeIn(500);	
		$('.book').fadeIn(500);
		
	},function () {
		$('.hinh-hover-2').fadeOut(500);
		$('.book').fadeOut(500);	
	});
	
	$('.hinh-ban-dau-3').hover(function () {
		$('.hinh-hover-3').fadeIn(500);	
		$('.backstage').fadeIn(500);
	
	},function () {
		$('.hinh-hover-3').fadeOut(500);
		$('.backstage').fadeOut(500);	
	});
	
	//-----------Book------
	$('.title-booktablet').animate({bottom: '30%'}, 900);
	
	//-----------Book------
	var card = $(".card");

	$(document).on("mousemove",function(e) {  
	  var ax = -($(window).innerWidth()/2- e.pageX)/20;
	  var ay = ($(window).innerHeight()/2- e.pageY)/10;
	  card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
	});
	
	//-------picture---------
	$(document).ready(function(){
		
	   $('.thumbnail img').on('click',function(){
			var src = $(this).attr('src');
			var img = '<img src="' + src + '" class="img-responsive"/>';
			
			var index = $(this).parent('.col-md-3').index();
			  var html = '';
			  html += img;
			  html += '<div style="height:25px;clear:both;display:block;">';
			  html += '<a class="controls next" href="'+ (index+2) + '">next &raquo;</a>';
			  html += '<a class="controls previous" href="' + (index) + '">&laquo; prev</a>';
			  html += '</div>';
			
			$('#myModal').modal();
			$('#myModal').on('shown.bs.modal', function(){
				$('#myModal .modal-body').html(img);
			});
			$('#myModal').on('hidden.bs.modal', function(){
				$('#myModal .modal-body').html('');
			});
	   });
	});	
	
});