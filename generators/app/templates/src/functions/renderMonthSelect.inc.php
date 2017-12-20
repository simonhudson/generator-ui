<?php

	function renderMonthSelect($truncate = false) {
		$options = '';
		$months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		foreach ($months as $month) {
			if ($truncate) {
				$month = substr($month, 0, 3);
			}
			$options .= '<option value="'.$month.'">'.$month.'</option>';
		}

		return $options;

	}

?>
