$(document).ready(function(){

    var viewport = $('#viewport');
    var navigation = viewport.find('#navigation-ipad');
    var content = viewport.find('#content');
    var container = content.find('#container');
    var pageContainer = container.children('.pages');

    navigation.load('include_menu.html');
	 
    var pages = pageContainer.children();

    var pagesHeight;

    var subpageWidth;
	 var pagesWidth;
    var pageWidth;
    var pageHeight;
    
    var currentPageIndex;

    var menu = 0;
    
    var titles = [
        'Mobile retail',
        'mAutomotive',
        'mHealth',
        'mUtilities',
        'Smart Cities',
        'mEducation',
        'mAgriculture',
        'mAgriculture',
        'mAgriculture'
    ];

    
	//function hideAddressBar()
    //{
      //if(!window.location.hash)
      //{
        //  if(document.height < window.outerHeight)
          //{
             // document.body.style.height = (window.outerHeight + 50) + 'px';
          //}

          //setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
      //}
    //}

    //window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
    //window.addEventListener("orientationchange", hideAddressBar );

    function toggleMenu() {
    	if (menu === 0) {
        	showMenu();
    	} else {
        	hideMenu();
        }
    }
    function showMenu() {
    	navigation.show();
    	content.css({
            '-webkit-transition': 'all 0.3s ease-out',
            '-webkit-transform': 'translatex(350px)',
			'-moz-transition': 'all 0.5s ease-out',
            '-moz-transform': 'translatex(350px)',
            'transition': 'all 0.5s ease-out',
            'transform': 'translatex(350px)'
		});
		menu = 1;
    }
    function hideMenu() {
    	content.css({
            '-webkit-transition': 'all 0.3s ease-out',
            '-webkit-transform': 'translatex(0)',
			'-moz-transition': 'all 0.5s ease-out',
            '-moz-transform': 'translatex(0)',
            'transition': 'all 0.5s ease-out',
            'transform': 'translatex(0)'
		});
    	setTimeout(function(){
    		navigation.hide();
    	},400);
		menu = 0;
    }
   
    $('#link-navigation-ipad').on('click',function(event){
        event.preventDefault();
    	event.stopPropagation();
    	toggleMenu();
		setTimeout(function(){
    		hideMenu();
    	},7000);
		
		
    });

    $('#navigation a[href=#]').on('click',function(event){
    	event.preventDefault();
    	event.stopPropagation();
		gotoPage($(this).data('page'),false);
    	hideMenu();
		
	});
	
	 $('#container-scroll a').on('click',function(event){
    
    	hideMenu();
		
	});

	//$('#logo').on('click',function(event){
		//event.preventDefault();
    	//event.stopPropagation();
    	//hideMenu();
		//gotoPage(0,true);
	//event.preventDefault();
    //event.stopPropagation();
    //toggleMenu();	
		//setTimeout(function(){
    		//hideMenu();
    	//},10000);
		
    //});
		
		
});