<?php
include('config/__import.inc.php');
include('functions/__import.inc.php');
$currentPage = currentPage();
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

    <header class="header">
        <div class="wrap header__wrap">
            <div class="site-logo">
                <a href="<?= $root; ?>">
                    <img alt="<?= $siteName; ?>" src="http://via.placeholder.com/175x75" />
                </a>
            </div>
            <nav class="main-nav">
                <button class="main-nav__toggle js-main-nav__toggle">Menu</button>
                <ul class="main-nav__list js-main-nav__list">
                    <?= mainNavList(); ?>
                </ul>
            </nav>
        </div>
    </header>

    <?php include('includes/hero/'.$currentPage.'.inc.php'); ?>

    <main class="main-content" id="main-content">
        <div class="wrap">
