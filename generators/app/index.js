'use strict';

const __module = 'UI Generator';
const Generator = require('yeoman-generator');
const del = require('del');
const mkdir = require('mkdirp');

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

const projectName = 'Acme project';
const projectNameSlug = projectName.replace(/\s+/g, '-').toLowerCase();

module.exports = class extends Generator {

	_logActionStart(action) { return this.log(`\nSTART ${action}`); }
	_logActionComplete(action) { return this.log(`COMPLETED ${action}`); }

	greeting() {
		this.log('********************');
		this.log('*');
		this.log(`* ${__module}`);
		this.log('*');
		this.log('********************');
	}

	clean() {
		const action = 'Clean';
		this._logActionStart(action);
		del(this.destinationPath() + '/**/*', () => {
			del(
			[
				self.destinationPath() + '/.yo-rc.json',
				self.destinationPath() + '/.gitignore',
				self.destinationPath() + '/.sass-cache',
				self.destinationPath() + '/package.json',
				self.destinationPath() + '/node_modules',
			], () => {
				self.config.save();
				done();
			});
		});
		this._logActionComplete(action);
	}

	writeFiles() {
		const action = 'writeFiles';
		const files = ['package.json', 'README.md'];
		const config = {
			projectName,
			projectNameSlug
		};
		this._logActionStart(action);
		files.forEach(file => {
			this.fs.copyTpl(
				`${dirs(this).template.root}${file}`,
				`${dirs(this).destination.root}${file}`,
				config
			);
		});
		this._logActionComplete(action);
	}

	copyFiles() {
		const action = 'copyFiles';
		this._logActionStart(action);
		this.fs.copy(
			`${dirs(this).template.root}.gitignore`,
			`${dirs(this).destination.root}.gitignore`
		)
		this._logActionComplete(action);
	}

};
