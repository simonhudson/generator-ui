<% for (let task in gulpTasks) { %>
let <%= task %> = require('<%= gulpTasks[task] %>');
<% } %>
const dirs = { src: {}, app: {} };

Object.assign(dirs.src, {
	root: './src/',
	assets: './src/assets/',
	css: './src/assets/css/',
	js: './src/assets/js/',
	views: './src/views/'
});

Object.assign(dirs.app, {
	root: './app/',
	assets: './app/assets/',
	css: './app/assets/css/',
	js: './app/assets/js/',
	views: './app/'
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
Copy views
***/
gulp.task('copyviews', function() {
    return gulp.src(dirs.src.views + '**/*.{html,php}')
        .pipe(gulp.dest(dirs.app.views));
});

/***
Concatenate JS
***/
gulp.task('concatjs', ['deljs'], function() {
    return gulp.src(dirs.src.js + '**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest(dirs.app.js));
});

/***
Minify JS
***/
gulp.task('minifyjs', ['concatjs'], function() {
    return gulp.src(dirs.app.js + 'main.js')
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dirs.app.js));
});

/***
Sass -> CSS
***/
gulp.task('sass', ['delcss'], function () {
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
		'copyviews',
        'minifycss',
        'minifyjs',
    ]
);

gulp.task('serve', ['default'], () => {
    gutil.log('Initiating watch');
    browserSync = browserSync.create();
    browserSync.init({
        notify: false,
        proxy: '<%= appRoot %>',
        files: [
            dirs.app.root,
            dirs.app.css,
			dirs.app.js
        ],
        injectChanges: true
    });
    gulp.watch(dirs.src.css + '**/*.{less, scss, css}', { interval: 1000 }, ['minifycss']);
    gulp.watch(dirs.src.js + '**/*.js', { interval: 1000 }, ['minifyjs']);
});
