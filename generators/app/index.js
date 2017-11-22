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
			root: `${self.templatePath()}\\`,
			assets: `${self.templatePath()}\\assets\\`
		},
		destination: {
			root: `${self.destinationPath()}\\`,
			assets: `${self.destinationPath()}\\assets\\`
		}
	}
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
		const files = ['package.json', 'README.md', 'index.html'];
		const config = {
			projectName,
			projectNameSlug: toSlug(projectName)
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

	copyFiles() {
		this.fs.copy(
			`${dirs(this).template.root}.gitignore`,
			`${dirs(this).destination.root}.gitignore`
		)
		this._logActionComplete('copyFiles');
	}

	copyAssets() {
		this.fs.copy(
			`${dirs(this).template.assets}**\\*`,
			`${dirs(this).destination.assets}`
		)
		this._logActionComplete('copyAssets');
	}

};
