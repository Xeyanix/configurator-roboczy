// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const path = require('path');

// // === Funkcja: konwertuje .json do .js bez cudzysłowów na kluczach ===
// function convertJsonToJs(jsonPath) {
//     const jsPath = jsonPath.replace('.json', '.js');
//     const jsonData = fs.readFileSync(jsonPath, 'utf-8');
//     const products = JSON.parse(jsonData);

//     const fileBaseName = path.basename(jsPath, '.js'); // np. products_PłytagłównaSocket1700
//     let str = JSON.stringify(products, null, 2).replace(/"(\w+)"\s*:/g, '$1:');
//     const jsContent = `const ${fileBaseName} = ${str};\n\nmodule.exports = ${fileBaseName};\n`;
//     fs.writeFileSync(jsPath, jsContent, 'utf-8');
//     console.log(`Plik JS utworzony: ${jsPath}`);
// }

// // === Funkcja zapisująca produkty jako .json i .js, scala i dopisuje do istniejącego pliku ===
// const saveProducts = (products, type) => {
//     const dirPath = path.join(__dirname, 'common', 'consts');
//     if (!fs.existsSync(dirPath)) {
//         fs.mkdirSync(dirPath, { recursive: true });
//     }

//     const jsonPath = path.join(dirPath, `products_${type.replace(/\s/g, '')}.json`);
//     const jsPath = path.join(dirPath, `products_${type.replace(/\s/g, '')}.js`);

//     fs.writeFileSync(jsonPath, JSON.stringify(products, null, 2));
//     console.log(`Tymczasowo zapisano ${products.length} produktów do: ${jsonPath}`);

//     let existingProducts = [];
//     if (fs.existsSync(jsPath)) {
//         try {
//             delete require.cache[require.resolve(jsPath)];
//             existingProducts = require(jsPath);
//             if (!Array.isArray(existingProducts) && existingProducts.default) {
//                 existingProducts = existingProducts.default;
//             }
//         } catch (err) {
//             console.error('Błąd wczytywania istniejącego pliku JS:', err.message);
//             existingProducts = [];
//         }
//     }

//     const combined = [...existingProducts, ...products];
//     const uniqueProducts = combined.filter((prod, index, self) =>
//         index === self.findIndex(p => p.id === prod.id)
//     );

//     let str = JSON.stringify(uniqueProducts, null, 2).replace(/"(\w+)"\s*:/g, '$1:');
//     const fileBaseName = path.basename(jsPath, '.js');
//     const jsContent = `const ${fileBaseName} = ${str};\n\nmodule.exports = ${fileBaseName};\n`;

//     fs.writeFileSync(jsPath, jsContent, 'utf-8');
//     console.log(`Zapisano scalony plik JS z ${uniqueProducts.length} produktami: ${jsPath}`);

//     try {
//         fs.unlinkSync(jsonPath);
//         console.log(`Usunięto plik JSON: ${jsonPath}`);
//     } catch (err) {
//         console.error(`Błąd usuwania pliku JSON: ${jsonPath}`, err.message);
//     }
// };

// const scrapeCategory = async (categoryUrl, type) => {
//     const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
//     const page = await browser.newPage();

//     await page.goto(categoryUrl, { waitUntil: 'networkidle2' });
//     console.log('Załadowano stronę:', categoryUrl);
//     await clickConsentButton(page);

//     async function clickConsentButton(page) {
//         try {
//             // poczekaj chwilę na pojawienie się popupu
//             await page.waitForSelector('button', { timeout: 5000 });

//             const buttons = await page.$$('button');

//             for (const button of buttons) {
//                 const text = await page.evaluate(el => el.innerText.trim(), button);
//                 if (text === 'W porządku') {
//                     await button.evaluate(btn => btn.scrollIntoView());
//                     await button.click();
//                     console.log('Kliknięto przycisk "W porządku"');
//                     return;
//                 }
//             }

//             console.log('Nie znaleziono przycisku "W porządku".');
//         } catch (error) {
//             console.log('Błąd przy obsłudze cookies:', error.message);
//         }
//     }

//     // Czekaj na produkty
//     try {
//         await page.waitForSelector('div.parts__ProductCardWrapper-sc-66c51a9f-3', { timeout: 15000 });
//     } catch (e) {
//         console.error('Nie znaleziono produktów! Być może X-KOM blokuje bota lub selektor się zmienił.');
//         const html = await page.content();
//         fs.writeFileSync(path.join(__dirname, 'debug_last.html'), html);
//         await browser.close();
//         return [];
//     }

//     // Wyciąganie produktów
//     const products = await page.evaluate(() => {
//         return Array.from(document.querySelectorAll('div.parts__ProductCardWrapper-sc-66c51a9f-3')).map(el => {
//             const a = el.querySelector('a[href*="/p/"]');
//             const link = a ? (a.href.startsWith('http') ? a.href : 'https://www.x-kom.pl' + a.getAttribute('href')) : '';
//             const id = link ? (link.match(/\/p\/(\d+)-/)?.[1] || '') : '';
//             const name = el.querySelector('h3')?.innerText || '';
//             const priceRaw = el.querySelector('span[data-name="productPrice"]')?.innerText || '';
//             const price = priceRaw
//                 ? parseFloat(priceRaw.replace(/[^\d,]/g, '').replace(',', '.'))
//                 : 0;
//             const image = el.querySelector('img')?.src || '';
//             return { id, name, price, image, link };
//         });
//     });

//     await browser.close();
//     return products.map(prod => ({ ...prod, type }));
// };

// // === Główna funkcja scrapera ===
// async function main() {
//     const categories = [
//         // --- Płyty główne ---
//         { url: 'https://www.x-kom.pl/g-5/c/14-plyty-glowne.html', type: 'Płyta główna' },
//         { url: 'https://www.x-kom.pl/g-5/c/14-plyty-glowne.html?page=2', type: 'Płyta główna' },
//         { url: 'https://www.x-kom.pl/g-5/c/14-plyty-glowne.html?page=3', type: 'Płyta główna' },
//         { url: 'https://www.x-kom.pl/g-5/c/14-plyty-glowne.html?page=4', type: 'Płyta główna' },
//         { url: 'https://www.x-kom.pl/g-5/c/14-plyty-glowne.html?page=5', type: 'Płyta główna' },
//         { url: 'https://www.x-kom.pl/g-5/c/14-plyty-glowne.html?page=6', type: 'Płyta główna' },
//         { url: 'https://www.x-kom.pl/g-5/c/14-plyty-glowne.html?page=7', type: 'Płyta główna' },
//         { url: 'https://www.x-kom.pl/g-5/c/14-plyty-glowne.html?page=8', type: 'Płyta główna' },
//         { url: 'https://www.x-kom.pl/g-5/c/14-plyty-glowne.html?page=9', type: 'Płyta główna' },
//         { url: 'https://www.x-kom.pl/g-5/c/14-plyty-glowne.html?page=10', type: 'Płyta główna' },

//         // --- Procesory  ---
//         { url: 'https://www.x-kom.pl/g-5/c/11-procesory.html', type: 'Procesor' },
//         { url: 'https://www.x-kom.pl/g-5/c/11-procesory.html?page=2', type: 'Procesor' },
//         { url: 'https://www.x-kom.pl/g-5/c/11-procesory.html?page=3', type: 'Procesor' },
//         { url: 'https://www.x-kom.pl/g-5/c/11-procesory.html?page=4', type: 'Procesor' },

//         // --- Karty graficzne ---
//         { url: 'https://www.x-kom.pl/g-5/c/345-karty-graficzne.html', type: 'Karta graficzna' },
//         { url: 'https://www.x-kom.pl/g-5/c/345-karty-graficzne.html?page=2', type: 'Karta graficzna' },
//         { url: 'https://www.x-kom.pl/g-5/c/345-karty-graficzne.html?page=3', type: 'Karta graficzna' },
//         { url: 'https://www.x-kom.pl/g-5/c/345-karty-graficzne.html?page=4', type: 'Karta graficzna' },
//         { url: 'https://www.x-kom.pl/g-5/c/345-karty-graficzne.html?page=5', type: 'Karta graficzna' },
//         { url: 'https://www.x-kom.pl/g-5/c/345-karty-graficzne.html?page=6', type: 'Karta graficzna' },
//         { url: 'https://www.x-kom.pl/g-5/c/345-karty-graficzne.html?page=7', type: 'Karta graficzna' },
//         { url: 'https://www.x-kom.pl/g-5/c/345-karty-graficzne.html?page=8', type: 'Karta graficzna' },

//         // --- Dyski ---
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=1', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=2', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=3', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=4', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=5', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=6', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=7', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=8', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=9', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=10', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=11', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=12', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=13', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=14', type: 'Dysk SSD' },
//         { url: 'https://www.x-kom.pl/g-5/c/89-dyski-twarde-hdd-i-ssd.html?page=15', type: 'Dysk SSD' },


//         // --- Obudowy ---
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=1', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=2', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=3', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=4', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=5', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=6', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=7', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=8', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=9', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=10', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=11', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=12', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=13', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=14', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=15', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=16', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=17', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=18', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=19', type: 'Obudowa' },
//         { url: 'https://www.x-kom.pl/g-5/c/388-obudowy-komputerowe.html?page=20', type: 'Obudowa' },


//         // --- Pamięci RAM ---
//         // --- RAM ---
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=1', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=2', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=3', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=4', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=5', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=6', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=7', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=8', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=9', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=10', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=11', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=12', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=13', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=14', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=15', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=16', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=17', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=18', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=19', type: 'RAM' },
//         { url: 'https://www.x-kom.pl/g-5/c/28-pamieci-ram.html?page=20', type: 'RAM' },


//         // --- Zasilacze ---
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=1', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=2', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=3', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=4', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=5', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=6', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=7', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=8', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=9', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=10', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=11', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=12', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=13', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=14', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=15', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=16', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=17', type: 'Zasilacz' },
//         { url: 'https://www.x-kom.pl/g-5/c/158-zasilacze-do-komputera.html?page=18', type: 'Zasilacz' },


//         // --- Chłodzenia ---
//         { url: 'https://www.x-kom.pl/g-5/c/2650-chlodzenia-wodne.html', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/2650-chlodzenia-wodne.html?page=2', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/2650-chlodzenia-wodne.html?page=3', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/2650-chlodzenia-wodne.html?page=4', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/2650-chlodzenia-wodne.html?page=5', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/2650-chlodzenia-wodne.html?page=6', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/2650-chlodzenia-wodne.html?page=7', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/2650-chlodzenia-wodne.html?page=8', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/105-chlodzenia-procesorow.html', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/105-chlodzenia-procesorow.html?page=2', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/105-chlodzenia-procesorow.html?page=3', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/105-chlodzenia-procesorow.html?page=4', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/105-chlodzenia-procesorow.html?page=5', type: 'Chłodzenie' },
//         { url: 'https://www.x-kom.pl/g-5/c/105-chlodzenia-procesorow.html?page=6', type: 'Chłodzenie' },
//     ];


//    let allProducts = [];
//     for (const category of categories) {
//         try {
//             console.log(`Scrapowanie kategorii: ${category.type}, URL: ${category.url}`);
//             const products = await scrapeCategory(category.url, category.type);
//             allProducts = allProducts.concat(products);
//             saveProducts(allProducts, category.type);
//             // Mała pauza, żeby nie obciążać serwera
//             await new Promise(r => setTimeout(r, 2000));
//         } catch (err) {
//             console.error(`Błąd podczas scrapowania ${category.url}:`, err.message);
//         }
//     }

//     console.log(`Zakończono scrapowanie. Łącznie produktów: ${allProducts.length}`);
// }

// // Eksport do uruchamiania z innych plików
// module.exports = main;

// // Uruchomienie scraper ręcznie jeśli chcesz
// main();
