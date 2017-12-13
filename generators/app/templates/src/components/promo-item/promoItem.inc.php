<?php

	function promoItem($heading, $content, $ctaText = null, $ctaLink = null, $img = null) {

		$cta = null;
		$img = null;

		if ($heading) $heading = '<p class="promo-item__heading">'.$heading.'</p>';
		if ($content) $content = '<p>'.$content.'</p>';
		if ($img) $img = '<img alt="" class="promo-item__img" src="'.$img.'" />';
		if ($ctaText && $ctaLink) $cta = '<a class="promo-item__cta" href="'.$ctaLink.'">'.$ctaText.'</a>';

	return
		'<div class="promo-item">'
			.$img.
			'<div class="promo-item__content">'
				.$heading.$content.$cta.
			'</div>
		</div>';
	}

?>
