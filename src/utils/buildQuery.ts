import { Query } from '../types';
import { errTextOverflow, errTextLenZero } from '../error';

export default (opt: Query): string => {
	const { text, to, op } = opt;
	const from: string = opt.from || 'auto';
	if (opt.op === 'translate') {
		if (text.length > 5000) return errTextOverflow(text.length);
		if (text.length === 0) return errTextLenZero();
	}
	return `?text=${encodeURIComponent(text)}&sl=${from}&tl=${to}&op=${op}`;
};
