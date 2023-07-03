import { expect, jest, test } from '@jest/globals';
import { translateDocs, translateText } from '../src/index';
import { Options } from '../src/types';

const opt: Options = { to: 'es', headless: true };

jest.setTimeout(10000);

test('text', async () => {
	const result = await translateText('text', opt);
	expect(result).toBe('texto');
});

test('textArray', async () => {
	const result = await translateText(['text', 'array'], opt);
	expect(result).toStrictEqual(['texto', 'formación']);
});

test('docs', async () => {
	const result = await translateDocs('./test/assets/txt.txt', opt);
	expect(result).toBe('TXT');
});

test('docsArray', async () => {
	const result = await translateDocs(['./test/assets/txt.txt', './test/assets/docx.docx'], opt);
	expect(result).toStrictEqual(['TXT', 'docx']);
});
