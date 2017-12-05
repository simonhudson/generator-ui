<?php

	function mainNavList($context = 'main') {

		$items = (object) array(
			'about' => (object) array(
				'href' => 'about',
				'text' => 'About us'
			),
			'products' => (object) array(
				'href' => 'products',
				'text' => 'Products'
			),
			'contact' => (object) array(
				'href' => 'contact',
				'text' => 'Contact us'
			),
		);

		$returnVal = '';
		foreach($items as $item) {
			$returnVal = $returnVal . '<li class="'.$context.'-nav__item"><a class="'.$context.'-nav__link" href="'.$item->href.'.php">'.$item->text.'</a></li>';
		}
		return $returnVal;
	}
?>
