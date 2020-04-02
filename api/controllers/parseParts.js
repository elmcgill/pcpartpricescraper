const fs = require('fs');
const scraper = require('./setupScraper');

let amazon = [];
let newegg = [];
let productList = [];

function getData(){
    return new Promise((resolve, reject) => {
        fs.readFile('../../sitelist.json', (err, data) => {
            if (err) throw err;

            const list = JSON.parse(data);
            resolve(list);
        });
    })
}

async function deconstructAmazon (){
    return new Promise(async (resolve, reject) => {
    const partslist = await getData();
    for(let item of partslist.amazon){
        let key = Object.keys(item);
        if(item[key] !== ''){
            amazon.push(item);
        }
    }
    resolve();
    });
}

async function deconstructNewegg (){
    return new Promise(async (resolve, reject) => {
    const partslist = await getData();
    for(let item of partslist.newegg){
        let key = Object.keys(item);
        if(item[key] !== ''){
            newegg.push(item);
        }
    }
    resolve();
    });
}

async function constructPartlist(){
    return new Promise(async (resolve, reject) => {
    
        const deconAmazon = await deconstructAmazon();
        const deconNewegg = await deconstructNewegg();

        let product = {};
        for(let i =0; i<amazon.length; i++){
            let a = amazon[i];
            let akey = Object.keys(a);
            product.type = akey;
            let alink = a[akey];
            let n = newegg[i];
            let nkey = Object.keys(n);
            let nlink = n[nkey];
            let title = await getProductTitle(alink);
            product.title = title;
            let amazonPrice = await getPriceAmazon(alink);
            product.amazonprice = amazonPrice;
            let neweggPrice = await checkPriceNewegg(nlink);
            product.neweggprice = neweggPrice;
            productList.push(product);
            console.log(product);
        }
        resolve();
    });
}

async function getPriceAmazon(link){
    const page = await scraper.init();
    var text;
    
    await page.goto(link);
    if(await page.$("#priceblock_ourprice") !== null){
        const element = await page.$("#priceblock_ourprice");
        text = await page.evaluate(element => element.textContent, element);
    } else {
        text = 'NA';
    }
    
    await scraper.stopBrowsing();

    console.log('returning text..');
    return(text);
}


async function checkPriceNewegg(link){
    const page = await scraper.init();
    var text;
    
    await page.goto(link);
    if(await page.$("#landingpage-price > div > div > ul > li.price-current") !== null){
        const element = await page.$("#landingpage-price > div > div > ul > li.price-current");
        text = await page.evaluate(element => element.textContent, element);
    } else {
        text = 'NA';
    }
    
    console.log('closing browser...');
    await scraper.stopBrowsing();

    return(text);
}

async function getProductTitle(link){
    const page = await scraper.init();
    var text;
    
    await page.goto(link);
    if(await page.$("#productTitle") !== null){
        const element = await page.$("#productTitle");
        text = await page.evaluate(element => element.textContent, element);
        text = text.trim();
    } else {
        text = 'NA';
    }
    
    console.log('closing browser...');
    await scraper.stopBrowsing();

    console.log(text);
    return(text);
}

constructPartlist();