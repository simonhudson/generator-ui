<?php

	function convertDataToJson($data) {
		$return = array();
		while($row = mysqli_fetch_assoc($data)) {
			$return[] = $row;
		}
		return json_encode($return);
	}

?>
