<?php
	 function currentPage() {
		 $returnVal;
		 $exploded = explode('/', $_SERVER['REQUEST_URI']);
		 $returnVal = str_replace('.php', '', end($exploded));
		 if (!$returnVal) $returnVal = 'home';
		 return $returnVal;
	 }
?>
