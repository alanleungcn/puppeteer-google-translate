import puppeteer from 'puppeteer';
import { PuppeteerOptions } from './types';

export default async (
	opt: PuppeteerOptions
): Promise<{
	browser: puppeteer.Browser;
	page: puppeteer.Page;
	timeout: number;
}> => {
	const browser = await puppeteer.launch({
		headless: opt.headless === null ? true : opt.headless
	});
	const [page] = await browser.pages();
	const timeout: number = opt.timeout === null ? 10000 : opt.timeout;
	return { browser, page, timeout };
};
