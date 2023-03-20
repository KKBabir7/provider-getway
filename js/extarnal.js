 
 
 
 
 	
    const scrollToTopButton = document.getElementById('js-top');
    const scrollnai = document.getElementById('js-top');
    const support = document.getElementById('support');
 
 
 /////////////........navbar fixed
 $('html,body').scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() >80);
    var scroll = $('body').scrollTop();
    if (scroll >= 100) {
 scrollToTopButton.style.bottom = '5px';
  support.style.right = '50px';
    }
   
  else if (scroll < 100) {
    scrollToTopButton.style.bottom = '-205px';
    support.style.right = '19px';
  }  
    

   
   
   
});

	
	/////////////...................back to top
		
		
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        
        return false;
      });		
	
     

   



		

		
		
		
		
		



