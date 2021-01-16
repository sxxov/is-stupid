import { UnexpectedValueError } from '../errors/unexpectedValue.error';

export class StupidItem extends Boolean {
	public static readonly IS_SURE = true;

	public [Symbol.toPrimitive](): boolean {
		return this.valueOf();
	}

	public isSureAboutBeingSure(): boolean {
		return StupidItem.IS_SURE;
	}

	public async takeSomeTimeToRethinkIsSure(): Promise<boolean> {
		await new Promise<void>((resolve) => setTimeout(resolve, StupidItem.getThinkingDuration()));

		return this.isSureAboutBeingSure();
	}

	public takeSomeTimeToRethinkIsSureSync(): boolean {
		const duration = StupidItem.getThinkingDuration();

		if (typeof Atomics !== 'undefined') {
			try {
				Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, duration);

				return this.isSureAboutBeingSure();
			} catch (err) {
				//
			}
		}

		const endTime = Date.now() + duration;

		while (Date.now() < endTime);

		return this.isSureAboutBeingSure();
	}

	private static getThinkingDuration(): number {
		return Math.random() * 2000;
	}
}

export class StupidFactory {
	public static readonly IS_STUPID = true;

	constructor(private isStupid: boolean) {
		if (isStupid !== StupidFactory.IS_STUPID) {
			throw new UnexpectedValueError(`${isStupid} !== ${StupidFactory.IS_STUPID}`);
		}
	}

	// either a bug in vscode, or ts, causing inconsistent errors here
	// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
	// @ts-ignore
	public create({ wrappedBoolean }?: { wrappedBoolean?: false }): boolean
	public create({ wrappedBoolean }: { wrappedBoolean?: true }): StupidItem
	public create({ wrappedBoolean }: { wrappedBoolean?: boolean } = {}): unknown {
		if (wrappedBoolean) {
			return new StupidItem(this.isStupid);
		}

		return this.isStupid;
	}
}
