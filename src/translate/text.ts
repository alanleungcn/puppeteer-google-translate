import launch from '../launch';
import { PuppeteerOptions } from '../types';

export default async (
	query: string,
	opt: PuppeteerOptions
): Promise<string> => {
	const { browser, page, timeout } = await launch(opt);
    try {
        await page.goto('https://translate.google.com/' + query);
        const el1 = await page.waitForSelector('span>span[data-phrase-index="0"]>span[jsaction]', {
            timeout
        });
        const texts = [await el1.evaluate((e) => e.textContent)];

        const counter = (await page.$$('span>span[data-phrase-index]>span[jsaction]')).length;
        if (counter > 1) {
            for (let i=1; i<counter; i++) {
                const elx = await page.waitForSelector('span>span[data-phrase-index="'+i+'"]>span[jsaction]', {
                    timeout
                });
                texts.push(await elx.evaluate((e) => e.textContent));
            }
        }

        return texts.join(' ');
    }
    catch (err) {
        throw err;
    }
    finally {
        await browser.close();
    }
};
