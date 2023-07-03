import { describe, expect, jest, test } from '@jest/globals';
import { translateDocs, translateText } from '../src/index';
import { Options } from '../src/types';

const opt: Options = { to: 'eo', headless: false };

jest.setTimeout(10000);

describe('fileSize', () => {
	test('docs', async () => {
		await expect(translateDocs('./test/assets/limit.txt', opt)).rejects.toThrow();
	});
	test('docsArray', async () => {
		await expect(translateDocs(['./test/assets/limit.txt'], opt)).rejects.toThrow();
	});
});

describe('fileType', () => {
	test('docs', async () => {
		await expect(translateDocs('./test/assets/err.err', opt)).rejects.toThrow();
	});
	test('docsArray', async () => {
		await expect(translateDocs(['./test/assets/err.err'], opt)).rejects.toThrow();
	});
});

describe('invalidType', () => {
	test('text', async () => {
		expect(() => {
			translateText(null, opt);
		}).toThrow();
	});
	test('textArray', async () => {
		expect(() => {
			translateText(null, opt);
		}).toThrow();
	});
	test('docs', async () => {
		expect(() => {
			translateDocs(null, opt);
		}).toThrow();
	});
	test('docsArray', async () => {
		expect(() => {
			translateDocs(null, opt);
		}).toThrow();
	});
});

describe('textOverflow', () => {
	test('text', async () => {
		expect(() => {
			translateText('error'.repeat(1001), opt);
		}).toThrow();
	});
	test('textArray', async () => {
		expect(() => {
			translateText(['error'.repeat(1001)], opt);
		}).toThrow();
	});
});

describe('textLenZero', () => {
	test('text', async () => {
		expect(() => {
			translateText('', opt);
		}).toThrow();
	});
	test('textArray', async () => {
		expect(() => {
			translateText([''], opt);
		}).toThrow();
	});
});

describe('arrayLenZero', () => {
	test('textArray', async () => {
		expect(() => {
			translateText([], opt);
		}).toThrow();
	});
	test('docsArray', async () => {
		expect(() => {
			translateDocs([], opt);
		}).toThrow();
	});
});
