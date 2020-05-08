module.exports = {
  "opening up a browser with address": function (browser) {
    browser.url("https://www.twitter.com/").waitForElementVisible("body").end();
  },
};
