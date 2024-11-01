// portfolio.test.js

const Portfolio = require('../src/services/portfolio');

describe('Portfolio', () => {
    it('Should be existing', () => {
        const portfolio = new Portfolio();
        expect(portfolio).toBeInstanceOf(Portfolio);
    })

    it('isFirstDayOfMonth false', () => {
        const portfolio = new Portfolio();
        portfolio.stocksData = [{
            "date": "1999-03-10", "SPY": 129.1875, "QQQ": 51.0625
        }, {
            "date": "1999-03-11", "SPY": 130.625, "QQQ": 51.3125
        }];
        portfolio.index = 1;
        const res = portfolio.isFirstDayOfMonth();
        console.log(res);
        expect(res).toBeFalsy();
    });


    it('isFirstDayOfMonth true', () => {
        const portfolio = new Portfolio();
        portfolio.stocksData = [{
            "date": "1999-03-10", "SPY": 129.1875, "QQQ": 51.0625
        }, {
            "date": "1999-04-11", "SPY": 130.625, "QQQ": 51.3125
        }];
        portfolio.index = 1;
        const res = portfolio.isFirstDayOfMonth();
        console.log(res);
        expect(res).toBeTruthy();
    });

    it('convertStringToDate', ()=>{
        const portfolio = new Portfolio();
        const validDate = portfolio.convertStringToDate('1999-03-10');
        expect(() => portfolio.convertStringToDate(null)).toThrow();
    })

})