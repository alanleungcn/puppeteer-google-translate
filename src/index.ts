import { Options } from './types';
import fromText from './translate/text';
import fromDocs from './translate/docs';
import buildQuery from './utils/buildQuery';
import fromTextArray from './translate/textArray';
import fromDocsArray from './translate/docsArray';
import { errArrayLenZero, errInvalidType } from './error';

function translateText(
	text: string | string[],
	opt: Options
): Promise<string | string[]> {
	if (typeof text === 'string')
		return fromText(
			buildQuery({ text, to: opt.to, from: opt.from, op: 'translate' }),
			{ headless: opt.headless, timeout: opt.timeout }
		);
	if (Array.isArray(text)) {
		if (text.length === 0) return errArrayLenZero();
		const queryArr: string[] = [];
		for (let i = 0; i < text.length; i++)
			queryArr[i] = buildQuery({
				text: text[i],
				to: opt.to,
				from: opt.from,
				op: 'translate'
			});
		return fromTextArray(queryArr, {
			headless: opt.headless,
			timeout: opt.timeout
		});
	}
	return errInvalidType(typeof text);
}

function translateDocs(
	path: string | string[],
	opt: Options
): Promise<string | string[]> {
	if (typeof path === 'string') {
		return fromDocs(
			buildQuery({ to: opt.to, from: opt.from, op: 'docs' }),
			path,
			{
				headless: opt.headless,
				timeout: opt.timeout
			}
		);
	}
	if (Array.isArray(path)) {
		if (path.length === 0) return errArrayLenZero();
		const queryArr: string[] = [];
		for (let i = 0; i < path.length; i++)
			queryArr[i] = buildQuery({
				to: opt.to,
				from: opt.from,
				op: 'docs'
			});
		return fromDocsArray(queryArr, path, {
			headless: opt.headless,
			timeout: opt.timeout
		});
	}
	return errInvalidType(typeof path);
}

export { translateText, translateDocs };
