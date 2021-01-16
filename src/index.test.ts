/* eslint-disable import/no-extraneous-dependencies */
import tape from 'tape';
import isStupid from './index';
import { StupidFactory } from './resources/objects/stupid.object';


tape('Stupid test', (test) => {
	const stupidFactory = new StupidFactory(true);

	test.equal(
		isStupid,
		stupidFactory.create(),
		'isStupid should be the same value as what is created from the factory without any parameters for `create`',
	);

	test.end();
});

