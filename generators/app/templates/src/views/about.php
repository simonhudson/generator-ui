<?php include('layout/precontent.inc.php'); ?>

<h1>Lorem ipsum dolor sit amet</h1>

<div class="alert alert--error">
	<p>Error alert</p>
</div>
<div class="alert alert--warning">
	<p>Warning alert</p>
</div>
<div class="alert alert--success">
	<p>Success alert</p>
</div>
<div class="alert alert--info">
	<p>Info alert</p>
</div>

<form>
	<legend>Your details</legend>
	<label for="name">Name</label>
	<input id="name" type="text" />
	<label for="email">email</label>
	<input id="email" type="text" />
	<label for="foo">
		Label with info text
		<span class="label-info">This text can give some extra context or help</span>
	</label>
	<input id="foo" type="text" />
	<label for="phone">Phone number<span class="input-error-msg">Please enter your phone number</span></label>
	<input class="input-error" id="phone" type="text" />
	<fieldset>
		<legend class="faux-label">Date of birth</legend>
		<div class="select-row">
			<label class="visuallyhidden" for="day">Day</label>
			<select class="select-row__item" id="day">
				<option>Day</option>
				<?= renderNumberSelect(31); ?>
			</select>
			<label class="visuallyhidden" for="month">Month</label>
			<select class="select-row__item" id="month">
				<option>Month</option>
				<?= renderMonthSelect(); ?>
			</select>
			<label class="visuallyhidden" for="year">Year</label>
			<select class="select-row__item" id="year">
				<option>Year</option>
				<?= renderNumberSelect((date('Y') - 18), (date('Y') - 100), true); ?>
			</select>
		</div>
	</fieldset>
</form>

<p>Consectetur adipiscing elit. Morbi id orci pretium, consectetur sapien et, <strong>sagittis neque</strong>. Donec sed urna at mauris convallis lacinia vitae vitae orci. Donec laoreet nisl quis volutpat iaculis. Nunc lorem erat, posuere non lacinia et, varius nec metus. Mauris suscipit turpis at molestie aliquet. In placerat tempor eleifend. Mauris aliquet consequat tortor sagittis dignissim. Integer et ante mauris. Vestibulum imperdiet enim id quam iaculis, in tincidunt quam feugiat. Curabitur dignissim massa eu tortor consequat, eu dapibus augue molestie. Praesent sed lectus quis nibh varius iaculis. Aenean vitae vehicula erat, at mollis urna. Morbi tincidunt auctor pretium. Integer rutrum urna mauris, ac ultricies urna lacinia eget. Phasellus lacinia pharetra massa, et pellentesque sem aliquam non.</p>
<p>Phasellus sed aliquam nulla, nec rutrum massa. Aliquam finibus velit orci, ut sodales felis tincidunt id. Mauris non arcu eget metus imperdiet rhoncus. Maecenas consequat diam arcu, sit amet congue elit interdum eu. Nam accumsan nisi libero. Fusce venenatis turpis non est luctus semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed facilisis est id nisi aliquam, vitae feugiat quam eleifend. Integer libero enim, condimentum eu luctus nec, pharetra sed risus. Sed quis dapibus purus.</p>

<h2>Lorem ipsum dolor sit amet</h2>
<p>Consectetur adipiscing elit. Morbi id orci pretium, consectetur sapien et, sagittis neque. Donec sed urna at mauris convallis lacinia vitae vitae orci. Donec laoreet nisl quis volutpat iaculis. Nunc lorem erat, posuere non lacinia et, varius nec metus. Mauris suscipit turpis at molestie aliquet. In placerat tempor eleifend. Mauris aliquet consequat tortor sagittis dignissim. Integer et ante mauris. Vestibulum imperdiet enim id quam iaculis, in tincidunt quam feugiat. Curabitur dignissim massa eu tortor consequat, eu dapibus augue molestie. Praesent sed lectus quis nibh varius iaculis. Aenean vitae vehicula erat, at mollis urna. Morbi tincidunt auctor pretium. Integer rutrum urna mauris, ac ultricies urna lacinia eget. Phasellus lacinia pharetra massa, et pellentesque sem aliquam non.</p>
<p>Phasellus sed aliquam nulla, nec rutrum massa. Aliquam finibus velit orci, ut sodales felis tincidunt id. Mauris non arcu eget metus imperdiet rhoncus. Maecenas consequat diam arcu, sit amet congue elit interdum eu. Nam accumsan nisi libero. Fusce venenatis turpis non est luctus semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed facilisis est id nisi aliquam, vitae feugiat quam eleifend. Integer libero enim, condimentum eu luctus nec, pharetra sed risus. Sed quis dapibus purus.</p>

<?php include('layout/postcontent.inc.php'); ?>
