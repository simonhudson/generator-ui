<?php

	function renderNumberSelect($max, $start = 1) {
		$options = '';

		while ($start <= $max) {
			$options .= '<option value="'.$start.'">'.$start.'</option>';
			$start++;
		}

		return $options;

	}

?>
