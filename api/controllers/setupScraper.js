const puppeteer = require('puppeteer');
const fs = require('fs');

let proxies = [];
let browser;

async function buildProxyList(){
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.us-proxy.org/");
    await page.waitForSelector("#proxylisttable");
    const allProxyInfo = await page.$$eval("#proxylisttable > tbody > tr >td", elements => {
        return elements.map(item => item.textContent);
    });

    for(let i=0; i<allProxyInfo.length; i++){
        if(i%8 === 0){
            proxies.push({ip:allProxyInfo[i], port:allProxyInfo[i+1]});
        }
    }

    await browser.close();
}

async function getProxy(){
    await buildProxyList();
    let index = Math.ceil(Math.random()*proxies.length);
    //console.log(proxies[index]);
    return(proxies[index]);
}

module.exports = {

    init: async function(){
        const proxy = await getProxy();
        //console.log(proxy);
        const args = [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-infobars',
            '--window-position=0,0',
            '--ignore-certificate-errors',
            '--ignore-certificate-errors-spki-list',
            '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
            `--proxy-server=http=${proxy.ip}:${proxy.port}`
        ];

        const options = {
            args,
            headless: true,
            ignoreHTTPSErrors: true,
            userDataDir: './tmp', 
        }

        browser = await puppeteer.launch(options);

        const page = await browser.newPage();

        const preloadFile = fs.readFileSync('./preload.js', 'utf8');

        await page.evaluateOnNewDocument(preloadFile);

        return page;

    },

    stopBrowsing: async function(){
       await browser.close();
    }
}