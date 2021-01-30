# NSE Trade Taxes and Charges API
This API calculates and returns an estimated value of the total charges, taxes, and brokerage for a given trade. It's functional for Equities and F&O for now.

## Endpoints
*Buy Price and Sell Price indicate the buying and selling price irrespective of whether the trade was a long or a short.*

```
[GET] /ping
[GET] /api/intraday-equity/<Buy Price>/<Sell Price>/<Quantity>
[GET] /api/delivery-equity/<Buy Price>/<Sell Price>/<Quantity>
[GET] /api/futures/<Buy Price>/<Sell Price>/<Quantity>
[GET] /api/options/<Buy Price>/<Sell Price>/<Quantity>
```
## Response
```
{
	gross-pnl: 40
	total-charges: 11.22
	net-pnl: 28.78
	points-to-breakeven: 2.24
	charges-splitup: {
		turnover: 20040
		brokerage: 6.01
		stt-charges: 3
		exc-trans-charge: 0.69
		gst: 1.21
		brokerage: 6.01
		sebi-charges: 0.01
		stamp-charges: 0.3
	}
}

```
### Description of Charges

- **Securities Transaction Tax** : Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on the selling side when trading intraday or on F&O.
- **Transaction/Turnover Charges** : Exchange transaction charges + Clearing charges. Charged by exchanges (NSE,BSE,MCX) and clearing member.
- **Stamp Charges** : Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
- **GST** : Tax levied by the government on the services rendered. 18% of ( brokerage + transaction charges)
- **SEBI Charges** : Charged at ₹5 per crore by Securities and Exchange Board of India for regulating the markets.
- **Brokerage** : Assumed to be 0 for Equity(Delivery), 0.03% or Rs. 20/executed order whichever is lower for Equity(Intraday) and Futures, and Flat Rs. 20 per executed order for Options.

## Underlying Motive

I built this so I could stress test my strategies more precisely and also get an understanding of whether the overall return is truly net positive, after considering the costs in each and every trade. Anyway, I hope you'll find some use for this as well.

Feel free to reach out if you have any queries or reach out even if you just wanna talk lol.