<% for (let task in gulpTasks) { %>
let <%= task %> = require('<%= gulpTasks[task] %>');
<% } %>
const dirs = { src: {}, app: {} };

Object.assign(dirs.src, {
	assets: './src/assets/',
	config: './src/config/',
	css: './src/assets/css/',
	functions: './src/functions/',
	includes: './src/includes/',
	js: './src/assets/js/',
	layout: './src/layout/',
	root: './src/',
	views: './src/views/',
});

Object.assign(dirs.app, {
	assets: './app/assets/',
	config: './app/config/',
	css: './app/assets/css/',
	functions: './app/functions/',
	includes: './app/includes/',
	js: './app/assets/js/',
	layout: './app/layout/',
	root: './app/',
	views: './app/',
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
Copy config
***/
gulp.task('copyconfig', function() {
	return gulp.src(dirs.src.config + '**/*.php')
	.pipe(gulp.dest(dirs.app.config));
});

/***
Copy functions
***/
gulp.task('copyfunctions', function() {
	return gulp.src(dirs.src.functions + '**/*.php')
	.pipe(gulp.dest(dirs.app.functions));
});

/***
Copy includes
***/
gulp.task('copyincludes', function() {
	return gulp.src(dirs.src.includes + '**/*.php')
	.pipe(gulp.dest(dirs.app.includes));
});

/***
Copy layout
***/
gulp.task('copylayout', function() {
	return gulp.src(dirs.src.layout + '**/*.php')
	.pipe(gulp.dest(dirs.app.layout));
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
		'copyconfig',
		'copyfunctions',
		'copyincludes',
		'copylayout',
		'copyviews',
        'minifycss',
        'minifyjs'
    ]
);

const watchTaskConfig = [
	{
		dir: 'css',
		extensions: 'scss',
		task: 'minifycss'
	},
	{
		dir: 'js',
		extensions: 'js',
		task: 'minifyjs'
	},
	{
		dir: 'config',
		extensions: 'php',
		task: 'copyconfig'
	},
	{
		dir: 'functions',
		extensions: 'php',
		task: 'copyfunctions'
	},
	{
		dir: 'includes',
		extensions: 'php',
		task: 'copyincludes'
	},
	{
		dir: 'layout',
		extensions: 'php',
		task: 'copylayout'
	},
	{
		dir: 'views',
		extensions: 'php',
		task: 'copyviews'
	}
];

gulp.task('serve', ['default'], () => {
    gutil.log('Initiating watch');
    browserSync = browserSync.create();
    browserSync.init({
        notify: false,
        proxy: 'http://localhost/generated-ui/app/',
        files: [
            dirs.app.root,
            dirs.app.css,
			dirs.app.js
        ],
        injectChanges: true
    });
	watchTaskConfig.forEach(item => {
		const { dir, extensions, task } = item;
		gulp.watch(dirs.src[dir] + `**/*.${extensions}`, { interval: 1000 }, [task])
	});
});
