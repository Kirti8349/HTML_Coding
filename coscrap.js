const puppeteer = require('puppeteer');

(async () => {
let movieUrl = 'https://www.imdb.com/title/tt6751668/?ref_=hm_stp_pvs_piv_tt_i_4';

let browser = await puppeteer.launch();
let page = await browser.newPage();
await page.goto(movieUrl, { waitUntil: "networkidle2"});

let data = await page.evaluate(() => {
    
    let title = document.querySelector('div[class="title_wrapper"] > h1').innerText;
    let ratingValue = document.querySelector('span[itemprop="ratingValue"]').innerText;
    let ratingCount = document.querySelector('span[itemprop="ratingCount"]').innerText;
    let reviews = document.querySelector('div[class="user-comments"] > span').innerText;

    return {

        title,
        ratingValue,
        ratingCount,
        reviews
    }

});

console.log(data);

debugger;

await browser.close();

})();
