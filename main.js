import puppeteer from 'puppeteer';
import { dimensions } from './os-tasks.js';

const { 
    2: user,
    3: password,
    4: ip,
    5: port
} = process.argv

const main = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        ignoreDefaultArgs: ['--enable-automation']
    });

    const { width, height } = dimensions

    const page = await browser.newPage();

    const pages = await browser.pages();
    pages[0].close()

    await page.setViewport({
        width: +width,
        height: +height
    });

    await page.goto(`http://${ip}:${port}/web/login`);

    await page.type("#login", user);
    await page.type("#password", password);

    await page.click('.btn-primary');

    await browser.close()
}

main()