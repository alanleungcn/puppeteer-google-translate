import launch from '../launch';
import { PuppeteerOptions } from '../types';

export default async (
	query: string,
	opt: PuppeteerOptions
): Promise<string> => {
	const { browser, page, timeout } = await launch(opt);
	try {
		await page.goto('https://translate.google.com/' + query);
		const el = await page.waitForSelector('span>span>span[jsaction]', {
			timeout
		});
		const result = await el.evaluate((e) => e.textContent);
		return result;
	} catch (err) {
		throw err;
	} finally {
		await browser.close();
	}
};
