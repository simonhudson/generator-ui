/* Get Our Elements */
var player = document.querySelector('.video-player');
if (player) {
    var video = player.querySelector('.viewer');
    var progress = player.querySelector('.progress');
    var progressBar = player.querySelector('.progress__filled');
    var toggle = player.querySelector('.toggle');
    var skipButtons = player.querySelectorAll('[data-skip]');
    var ranges = player.querySelectorAll('.video-player__slider');

    /* Build out functions */
    function togglePlay() {
      var method = video.paused ? 'play' : 'pause';
      if (video.paused) video.play();
      else video.pause();
    }

    function updateButton() {
      var icon = this.paused ? '►' : '❚ ❚';
      console.log(icon);
      toggle.textContent = icon;
    }

    function skip() {
     video.currentTime += parseFloat(this.dataset.skip);
    }

    function handleRangeUpdate() {
      video[this.name] = this.value;
    }

    function handleProgress() {
      var percent = (video.currentTime / video.duration) * 100;
      progressBar.style.flexBasis = percent + '%';
    }

    function scrub(e) {
      var scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
      video.currentTime = scrubTime;
    }

    /* Hook up the event listners */
    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', handleProgress);

    toggle.addEventListener('click', togglePlay);
    skipButtons.forEach(function(button) { button.addEventListener('click', skip); });
    ranges.forEach(function(range) { range.addEventListener('change', handleRangeUpdate); });
    ranges.forEach(function(range) { range.addEventListener('mousemove', handleRangeUpdate); });

    var mousedown = false;
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', function(e) { mousedown && scrub(e) });
    progress.addEventListener('mousedown', function() { mousedown = true });
    progress.addEventListener('mouseup', function() { mousedown = false });
}
