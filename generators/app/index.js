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

const dirs = (self) => {
	return {
		template: {
			assets: `${self.templatePath()}\\src\\assets\\`,
			components: `${self.templatePath()}\\src\\components\\`,
			config: `${self.templatePath()}\\src\\config\\`,
			functions: `${self.templatePath()}\\src\\functions\\`,
			layout: `${self.templatePath()}\\src\\layout\\`,
			root: `${self.templatePath()}\\`,
			src: `${self.templatePath()}\\src\\`,
			views: `${self.templatePath()}\\src\\views\\`,
		},
		destination: {
			assets: `${self.destinationPath()}\\src\\assets\\`,
			components: `${self.destinationPath()}\\src\\components\\`,
			config: `${self.destinationPath()}\\src\\config\\`,
			functions: `${self.destinationPath()}\\src\\functions\\`,
			layout: `${self.destinationPath()}\\src\\layout\\`,
			root: `${self.destinationPath()}\\`,
			src: `${self.destinationPath()}\\src\\`,
			views: `${self.destinationPath()}\\src\\views\\`,
		},
		app: {
			assets: `${self.destinationPath()}\\app\\assets\\`,
			components: `${self.destinationPath()}\\app\\components\\`,
			config: `${self.destinationPath()}\\app\\config\\`,
			css: `${self.destinationPath()}\\app\\assets\\css\\`,
			functions: `${self.destinationPath()}\\app\\functions\\`,
			js: `${self.destinationPath()}\\app\\assets\\js\\`,
			layout: `${self.destinationPath()}\\app\\layout\\`,
			root: `${self.destinationPath()}\\app\\`,
		}
	}
};

const gulpTasks = {
	babel: 'gulp-babel',
	browserSync: 'browser-sync',
	concat: 'gulp-concat',
	del: 'del',
	gulp: 'gulp',
	imagemin: 'gulp-imagemin',
	minifyCss: 'gulp-minify-css',
	rename: 'gulp-rename',
	sass: 'gulp-ruby-sass',
	uglify: 'gulp-uglify',
	gutil: 'gulp-util',
	pump: 'pump'
};

module.exports = class extends Generator {

	_logActionStart(action) { return this.log(`START ${action}`); }
	_logActionComplete(action) { return this.log(`COMPLETED ${action}`); }

	_urlRoot() {
		let urlRoot = dirs(this).destination.root.split('htdocs');
		urlRoot = 'http://localhost' + urlRoot[1].replace(/\\/g, '/') + 'app/';
		return urlRoot;
	}

	_writeFileConfig() {
		return {
			projectName,
			projectNameSlug: toSlug(projectName),
			gulpTasks,
			appRoot: this._urlRoot()
		}
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
