const fs = require('fs');
const puppeteer = require('puppeteer-extra');
const axios = require('axios');
const cheerio = require('cheerio');
const lineReader = require('line-reader');

puppeteer.use(require('puppeteer-extra-plugin-stealth')());

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
            //let loadtheegg = await loadNewegg(nlink, nkey);
            //let title = await getProductTitle(`${nkey}.html`);
            //product.title = title;
            let amazonPrice = await getPriceAmazon(alink);
            product.amazonprice = amazonPrice;
            let neweggPrice = await checkPriceNewegg(nlink);
            console.log(neweggPrice);
            product.neweggprice = neweggPrice;
            productList.push(product);
            console.log(product);
        }
        resolve();
    });
}

async function getPriceAmazon(link){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    var text;
    
    await page.goto(link);
    if(await page.$("#priceblock_ourprice") !== null){
        const element = await page.$("#priceblock_ourprice");
        text = await page.evaluate(element => element.textContent, element);
    } else {
        text = 'NA';
    }
    
    browser.close();

    return(text);
}


async function checkPriceNewegg(link){
    
}

async function getProductTitle(name){
    
}