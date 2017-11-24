<?php
include('config/__import.inc.php');
include('functions/__import.inc.php');
?>
<!doctype html>
<head>
<meta charset="utf-8"/>
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
<meta content="width=device-width, initial-scale=1" name="viewport" />
<title><?= $siteName; ?></title>
<link href="<?= $paths->css; ?>main.min.css" rel="stylesheet" />
<link rel="shortcut icon" href="<?= $paths->imgs; ?>favicon.ico">
</head>
<body>

    <nav class="access-nav">
        <ul class="access-nav__list">
            <li class="access-nav__item">
                <a class="access-nav__link" href="#main-content">Skip to main content</a>
            </li>
        </ul>
    </nav>

    <main class="main-content" id="main-content">
