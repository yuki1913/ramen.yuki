//スクロールしたら色が変わるようにしたかった
jQuery(function(){

	var logo = jQuery('menu-item');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 500) { //スクロールが500pxを越えたら
			logo.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			logo.removeClass('invert');
		}
	});

});