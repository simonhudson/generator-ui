<?php include('layout/precontent.inc.php'); ?>

<div class="promo__wrap">
	<?=
		promoItem(
			'Lorem ipsum 1',
			'Donec nulla orci, suscipit commodo faucibus vel, lacinia vitae ligula. Proin eget maximus libero, ac gravida dolor.',
			'Find out more',
			'#',
			'http://http://via.placeholder.com/1x1'
		);
	?>
	<?=
		promoItem(
			'Lorem ipsum 2',
			'Donec nulla orci, suscipit commodo faucibus vel, lacinia vitae ligula. Proin eget maximus libero, ac gravida dolor.',
			'Find out more',
			'#',
			'http://http://via.placeholder.com/1x1'
		);
	?>
	<?=
		promoItem(
			'Lorem ipsum 3',
			'Donec nulla orci, suscipit commodo faucibus vel, lacinia vitae ligula. Proin eget maximus libero, ac gravida dolor.',
			'Find out more',
			'#',
			'http://http://via.placeholder.com/1x1'
		);
	?>
</div>

<?= videoPlayer(); ?>

<?php include('layout/postcontent.inc.php'); ?>
