<% for (let task in gulpTasks) { %>
const <%= task %> = require('<%= gulpTasks[task] %>');
<% } %>
const dirs = {
	src: { root: '/src/', assets: '/src/assets/' },
	app: { root:'/app/', assets: '/app/assets/' }
};
const dirsToAdd = ['assets/css', 'js'];
dirsToAdd.forEach(dir => {
	dirs.src[dir] = `${dirs.src.assets}${dir}/`;
	dirs.app[dir] = `${dirs.app.assets}${dir}/`;
});

/***
Clean output dir
***/
gulp.task(
	'del', [
		'delcss',
		'deljs',
		'delimgs'
	]
);
gulp.task('delcss', function() {
	del(dirs.app.css + '**/*.css');
});
gulp.task('deljs', function() {
	del(dirs.app.js + '**/*.js');
});
gulp.task('delimgs', function() {
	del(config.dest.imgs + '**/*.{gif,jpg,jpeg,png,svg}');
});

/***
Sass -> CSS
***/
gulp.task('sass', function () {
    return sass(dirs.src.css + 'main.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(rename('main.css'))
        .pipe(gulp.dest(dirs.app.css));
});

/***
Minify CSS
***/
gulp.task('minifycss', ['sass'], function() {
    gulp.src(dirs.app.css + 'main.css')
        .pipe(rename('main.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(dirs.app.css));
});

gulp.task(
    'default', [
        'minifycss',
        'minifyjs',
    ]
);
