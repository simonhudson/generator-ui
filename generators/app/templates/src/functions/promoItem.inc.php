<?php

	function promoItem($heading, $content, $img = null) {

		if ($heading) $heading = '<p class="promo-item__heading">'.$heading.'</p>';
		if ($content) $content = '<p>'.$content.'</p>';
		if ($img) $img = '<img alt="" class="promo-item__img" src="'.$img.'" />';

	return
		'<div class="promo-item">'
			.$img.
			'<div class="promo-item__content">'
				.$heading.$content.
			'</div>
		</div>';
	}

?>
