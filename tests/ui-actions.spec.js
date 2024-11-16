const {test} = require('@playwright/test');

test('playwright test',async({browser,page})=>
    {
    //    const context=browser.newContext();
    //    const page = await context.newPage();
       await page.goto("https://practicesoftwaretesting.com/");
    });