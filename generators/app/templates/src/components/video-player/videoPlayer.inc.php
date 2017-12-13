<?php

	function videoPlayer() {

		return
		'<div class="video-player">
			<video class="video-player__video viewer" src="https://video-player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"></video>
			<div class="video-player__controls">
				<div class="progress">
					<div class="progress__filled"></div>
				</div>
				<button class="video-player__button toggle" title="Toggle Play">►</button>
				<input type="range" name="volume" class="video-player__slider" min="0" max="1" step="0.05" value="1">
				<input type="range" name="playbackRate" class="video-player__slider" min="0.5" max="2" step="0.1" value="1">
				<button class="video-player__button video-player__mute">&#x1f50a;</button>
				<button data-skip="-10" class="video-player__button">&#x23ea;</button>
				<button data-skip="25" class="video-player__button">&#x23e9;</button>
				<span class="video-player__time video-player__button">
					<span class="video-player__button video-player__elapsed"></span>&nbsp;/&nbsp;
					<span class="video-player__button video-player__duration"></span>
				</span>
				<button class="video-player__button video-player__fullscreen">Full screen</button>
			</div>
		</div>';
}
