import { Options } from '../src/types';
import { translateText, translateDocs } from '../src/index';

const opt: Options = { to: 'eo', headless: false };

jest.setTimeout(10000);

test('text', async () => {
	const result = await translateText('text', opt);
	expect(result).toBe('teksto');
});

test('textArray', async () => {
	const result = await translateText(['text', 'array'], opt);
	expect(result).toStrictEqual(['teksto', 'tabelo']);
});

test('docs', async () => {
	const result = await translateDocs('./test/assets/txt.txt', opt);
	expect(result).toBe('txt');
});

test('docsArray', async () => {
	const result = await translateDocs(
		['./test/assets/txt.txt', './test/assets/docx.docx'],
		opt
	);
	expect(result).toStrictEqual(['txt', 'docx']);
});
