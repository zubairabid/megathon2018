$(document).ready(function() {
  $('.dropdown-trigger').dropdown({ hover: true });

  $('.sidenav').sidenav({
  	edge: 'right',
  	draggable: false,
  	closeOnClick: true
  });

  $('.scrollspy').scrollSpy();
});
$(document).scroll(function(){
	$('.scrollspy').each(function(){
	  	if($(this).is(':visible'))
	  	{
	  		$(this).addClass('active');
	  		console.log(this);
	  	}
	  	else{
  			$(this).removeClass('active');
        console.log(this);
  		}
  	});
});
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton({
      direction: 'top',
      hoverEnabled: false,
    });
  });
        