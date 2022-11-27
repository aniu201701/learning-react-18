const config = require('commitlint-config-gitmoji');
const commitlintTypes = require('@commitlint/types');
const czEmojiTypes = require('cz-emoji/lib/types.json');

const types = czEmojiTypes.map((t) => t.code);

module.exports = {
	extends: ['gitmoji'],
	rules: {
		...config.rules,
		'type-enum': [commitlintTypes.RuleConfigSeverity.Error, 'always', types]
	},
	parserPreset: {
		parserOpts: {
			headerPattern:
				/^(:\w*:)(?:\s)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
			headerCorrespondence: ['type', 'scope', 'subject']
		}
	}
};
