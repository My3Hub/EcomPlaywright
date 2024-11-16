// @ts-check
const { devices} = require('@playwright/test');

const config = {
  testDir: './tests',
  timeout:30000,
  expect:{
    timeout:5000
  },
 
  reporter: 'html',
 
  use: {
  
    browserName: 'chromium',
    headless: false
  },

  
  
};
   
module.exports=config;
