<?php

	function mainNavList($context = 'main-nav__') {

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
			$returnVal = $returnVal . '<li class="'.$context.'item"><a class="'.$context.'link" href="'.$item->href.'">'.$item->text.'</a></li>';
		}
		return $returnVal;
	}
?>
