$(function(){
	window.swiper = initSlide();
});

function initSlide(){
	return new Swiper('.swiper-container', {
//        pagination: '.swiper-pagination',
        direction: 'vertical',
        effect: 'coverflow',
        slidesPerView: 1,
//        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true,
        coverflow: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
}
function addSlidePage(){
	console.log('add slide');
	$('.swiper-wrapper').append('<div class="swiper-slide" style="background: #bce8f1">Slide added</div>');
	swiper.update();//修改silde后使用
}

var old_style = 's';
function changeAni(){
	var spans = document.getElementsByClassName('words');
	var time = document.getElementById('ani_duration').value;
	var sleector = document.getElementById('selects').value;
	console.log(spans);
	$(spans).each(function(){
		this.classList.remove(old_style);
		this.classList.add(sleector);
		this.style.animationDuration = time + 's';
	});
	old_style = sleector;
}
