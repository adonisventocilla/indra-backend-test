/* eslint-disable no-undef */
const common = [
	'tests/features/**/*.feature',
	'--require-module ts-node/register',
	'--require tests/features/**/step-definitions/*.ts',
	'--format progress-bar',
	'--format node_modules/cucumber-pretty',
	'link node_modules/@cucumber/cucumber'
].join(' ');

module.exports = {
	default: common
};
