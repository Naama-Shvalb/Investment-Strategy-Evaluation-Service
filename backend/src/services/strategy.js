const constants = require("constants");
const https = require("https");

https.globalAgent.options.rejectUnauthorized = false;

class Strategy {
  stockSymbol;
  quantity;
  months;
  portfolio;
  constructor(stockSymbol, quantity, months = 60) {
    this.stockSymbol = stockSymbol;
    this.quantity = quantity;
    this.months = months;
    this.portfolio = null;
  }

  firstDayActions() {
    console.warn("firstDayActions() must be implemented");
  }

  dayActions() {
    console.warn("dayActions() must be implemented");
  }
}
module.exports = Strategy;
