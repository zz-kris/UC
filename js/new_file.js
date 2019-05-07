$(function(){
	$('.xiao,.da').hover(function(){
		$('.da').toggle()
	})
	
//	var flag=true;
	document.addEventListener('mousewheel',function(event){
		var src=$(document).scrollTop();
		console.log(src);
//		event.preventDefault();
		
		if (src>480) {
//			flag=false;
			if (event.deltaY>0) {
				$('.li').stop().css('animation','xia 1s linear forwards')
				$('.wai').stop().css('animation','shang 1s linear forwards')
				$('.waiz').stop().css('animation','wzx 1s linear forwards')
				$('.buu').stop().css('animation','bs 1s linear forwards')
			}else{
				$('.li').stop().css('animation','shang 1s linear forwards')
				$('.wai').stop().css('animation','xia 1s linear forwards')
				$('.waiz').stop().css('animation','wzs 1.5s linear forwards')
				$('.buu').stop().css('animation','bx 1s linear forwards')
			}
		}
		
		
		if (event.deltaY>0) {
				$('section').stop().animate({'top':'-50px'},500)
			}else{
				$('section').stop().animate({'top':'0px'},500)
			}
		
		
				
	})
	
	
	
})