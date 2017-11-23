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
			views: `${self.templatePath()}\\src\\assets\\`
		},
		destination: {
			root: `${self.destinationPath()}\\`,
			src: `${self.destinationPath()}\\src\\`
		}
	}
};

const gulpTasks = {
	browserSync: 'browser-sync',
	concat: 'gulp-concat',
	cucumber: 'gulp-cucumber',
	del: 'del',
	imagemin: 'gulp-imagemin',
	minifyCss: 'gulp-minify-css',
	rename: 'gulp-rename',
	rubySass: 'gulp-ruby-sass',
	uglify: 'gulp-uglify',
	util: 'gulp-util'
};

module.exports = class extends Generator {

	_logActionComplete(action) { return this.log(`COMPLETED ${action}`); }

	clean() {
		this.fs.delete(this.destinationPath() + '\\**\\*');
		this._logActionComplete('Clean');
	}

	greeting() {
		this.log('********************');
		this.log('*');
		this.log(`* ${__module}`);
		this.log('*');
		this.log('********************');
	}

	writeFiles() {
		const files = ['package.json', 'README.md', 'gulpfile.js', '.gitignore'];
		const config = {
			projectName,
			projectNameSlug: toSlug(projectName),
			gulpTasks
		};
		files.forEach(file => {
			this.fs.copyTpl(
				`${dirs(this).template.root}${file}`,
				`${dirs(this).destination.root}${file}`,
				config
			);
		});
		this._logActionComplete('writeFiles');
	}

	copySrc() {
		this.fs.copy(
			`${dirs(this).template.src}**\\*`,
			`${dirs(this).destination.src}`
		)
		this._logActionComplete('copySrc');
	}

	installDependencies() {
		this.spawnCommand('npm', ['install']);
	}

};
