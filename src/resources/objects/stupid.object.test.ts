/* eslint-disable import/no-extraneous-dependencies */
import tape from 'tape';
import {
	StupidFactory, StupidItem,
} from './stupid.object';

tape('Stupid factory test', (test) => {
	const expectedValue = StupidFactory.IS_STUPID;
	const stupidFactory = new StupidFactory(expectedValue);

	test.equal(
		stupidFactory.create(),
		expectedValue,
		'Created value (using no parameters) is equal to `StupidFactory.IS_STUPID`',
	);

	test.equal(
		stupidFactory.create({
			wrappedBoolean: false,
		}),
		expectedValue,
		'Created value (using `{ wrappedBoolean: false }`) is equal to `StupidFactory.IS_STUPID`',
	);

	test.equal(
		stupidFactory.create({
			wrappedBoolean: true,
		}).valueOf(),
		expectedValue,
		'Created value (using `{ wrappedBoolean: true }`) is equal to `StupidFactory.IS_STUPID`',
	);

	test.throws(
		() => {
			new StupidFactory(false);
		},
		'An `UnexpectedValueError` is thrown when an incorrect parameter is passed into the factory',
	);

	test.end();
});

tape('Stupid item test', async (test) => {
	const expectedValue = StupidFactory.IS_STUPID;
	const stupidFactory = new StupidFactory(true);
	const stupidItem = stupidFactory.create({
		wrappedBoolean: true,
	});

	test.equal(
		stupidItem[Symbol.toPrimitive](),
		expectedValue,
		'Primitive conversion via symbol method returns correct primitive',
	);

	// @ts-expect-error
	const thinkingDuration = StupidItem.getThinkingDuration();

	test.equal(
		typeof thinkingDuration === 'number'
		&& thinkingDuration >= 0
		&& thinkingDuration < 2000,
		true,
		'Thinking duration is a valid number',
	);

	test.equal(
		stupidItem.isSureAboutBeingSure(),
		true,
		'Item is sure about its decision',
	);

	test.equal(
		await stupidItem.takeSomeTimeToRethinkIsSure(),
		stupidItem.isSureAboutBeingSure(),
		'Item smart rethink\'s (async) return value is same as `isSure`',
	);

	test.equal(
		stupidItem.takeSomeTimeToRethinkIsSureSync(),
		stupidItem.isSureAboutBeingSure(),
		'Item smart rethink\'s (sync) return value is same as `isSure`',
	);

	test.end();
});

