import { ClientError } from './client.error';

export class UnexpectedValueError extends ClientError {
	constructor(message: string) {
		super(`${'Unexpected value found'}${message ? `: ${message}` : ''}`);
	}
}
