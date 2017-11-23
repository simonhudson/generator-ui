'use strict';

const __module = 'UI Generator';
const Generator = require('yeoman-generator');
const del = require('del');
const mkdir = require('mkdirp');
const projectName = 'Acme project';

const toSlug = (string) => {
	if (!string || !string.length || typeof string !== 'string') return;
	return string.replace(/\s+/g, '-').toLowerCase();
};

const toCamelCase = (string) => {
	if (!string || !string.length || typeof string !== 'string') return;
	const split = string.split('-');
	this.log(split);
};

const dirs = (self) => {
	return {
		template: {
			root: `${self.templatePath()}\\`,
			src: `${self.templatePath()}\\src\\`,
			assets: `${self.templatePath()}\\src\\assets\\`,
			views: `${self.templatePath()}\\src\\views\\`
		},
		destination: {
			root: `${self.destinationPath()}\\`,
			src: `${self.destinationPath()}\\src\\`,
			assets: `${self.destinationPath()}\\src\\assets\\`,
			views: `${self.destinationPath()}\\src\\views\\`
		},
		app: {
			root: `${self.destinationPath()}\\app\\`,
			assets: `${self.destinationPath()}\\app\\assets\\`,
			css: `${self.destinationPath()}\\app\\assets\\css\\`,
			js: `${self.destinationPath()}\\app\\assets\\js\\`,
		}
	}
};

const gulpTasks = {
	browserSync: 'browser-sync',
	concat: 'gulp-concat',
	del: 'del',
	gulp: 'gulp',
	imagemin: 'gulp-imagemin',
	minifyCss: 'gulp-minify-css',
	rename: 'gulp-rename',
	sass: 'gulp-ruby-sass',
	uglify: 'gulp-uglify',
	gutil: 'gulp-util'
};

module.exports = class extends Generator {

	_logActionStart(action) { return this.log(`START ${action}`); }
	_logActionComplete(action) { return this.log(`COMPLETED ${action}`); }

	_writeFileConfig() {
		return {
			projectName,
			projectNameSlug: toSlug(projectName),
			gulpTasks,
			appRoot: this._urlRoot()
		}
	}

	_urlRoot() {
        let urlRoot = dirs(this).destination.root.split('htdocs');
            urlRoot = 'http://localhost' + urlRoot[1].replace(/\\/g, '/') + 'app/';
        return urlRoot;
    }

	clean() {
		const action = 'Clean';
		this._logActionStart('Clean');
		this.fs.delete(this.destinationPath() + '\\**\\*');
		this._logActionComplete(action);
	}

	greeting() {
		this.log('********************');
		this.log('*');
		this.log(`* ${__module}`);
		this.log('*');
		this.log('********************');
	}

	writeFiles() {
		const action = 'Copy static files';
		this._logActionStart(action);
		const files = ['package.json', 'README.md', 'gulpfile.js', '.gitignore'];
		files.forEach(file => {
			let destinationDir = dirs(this).destination.root;
			this.fs.copyTpl(
				`${dirs(this).template.root}${file}`,
				`${destinationDir}${file}`,
				this._writeFileConfig()
			);
		});
		this._logActionComplete(action);
	}

	copySrc() {
		const action = 'Copy source dir';
		this._logActionStart(action);
		this.fs.copy(
			`${dirs(this).template.src}**\\*`,
			`${dirs(this).destination.src}`
		)
		this._logActionComplete(action);
	}

	copyViews() {
		const action = 'Copy views dir';
		this._logActionStart(action);
		this.fs.copyTpl(
			`${dirs(this).template.views}**\\*`,
			`${dirs(this).destination.views}`,
			this._writeFileConfig()
		)
		this._logActionComplete(action);
	}

	installDependencies() {
		const action = 'npm install';
		this._logActionStart(action);
		this.spawnCommand('npm', ['install']);
		this._logActionComplete(action);
	}

};
