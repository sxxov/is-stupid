import { StupidFactory } from './resources/objects/stupid.object';
import type { StupidItem } from './resources/objects/stupid.object';

const stupidFactory = new StupidFactory(true);

export default stupidFactory.create();

export const recalculate = (): boolean => stupidFactory.create();

export const smartRecalculate = (): StupidItem => stupidFactory.create({
	wrappedBoolean: true,
});


