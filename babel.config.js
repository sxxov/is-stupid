module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					esmodules: true,
				},
				corejs: '3.6.5',
				useBuiltIns: 'usage',
				shippedProposals: true,
			},
		],
	],
};
