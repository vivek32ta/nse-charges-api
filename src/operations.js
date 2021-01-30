function calculateIntradayEquity (buyPrice, sellPrice, quantity) {
    bp = buyPrice;
    sp = sellPrice;
    qty = quantity;
    var brokerage_buy =
      bp * qty * 0.0003 > 20
        ? 20
        : parseFloat(parseFloat(bp * qty * 0.0003).toFixed(2));
    var brokerage_sell =
      sp * qty * 0.0003 > 20
        ? 20
        : parseFloat(parseFloat(sp * qty * 0.0003).toFixed(2));
    var brokerage = parseFloat(
      parseFloat(brokerage_buy + brokerage_sell).toFixed(2)
    );
    var turnover = parseFloat(parseFloat((bp + sp) * qty).toFixed(2));
    var stt_total = Math.round(
      parseFloat(parseFloat(sp * qty * 0.00025).toFixed(2))
    );
    var exc_trans_charge = parseFloat(
      parseFloat(0.0000345 * turnover).toFixed(2)
    );
    var cc = 0;
    var stax = parseFloat(
      parseFloat(0.18 * (brokerage + exc_trans_charge)).toFixed(2)
    );
    var sebi_charges = parseFloat(parseFloat(turnover * 0.0000005).toFixed(2));
    var stamp_charges = parseFloat(parseFloat(bp * qty * 0.00003).toFixed(2));
    var total_tax = parseFloat(
      parseFloat(
        brokerage +
          stt_total +
          exc_trans_charge +
          cc +
          stax +
          sebi_charges +
          stamp_charges
      ).toFixed(2)
    );
    var breakeven = parseFloat(parseFloat(total_tax / qty).toFixed(2));
    breakeven = isNaN(breakeven) ? 0 : breakeven;
    var net_profit = parseFloat(
      parseFloat((sp - bp) * qty - total_tax).toFixed(2)
    );

    var gross_pnl = parseFloat(parseFloat((sp - bp) * qty).toFixed(2));

    const returnResult = {
      "gross-pnl": gross_pnl,
      "total-charges": total_tax,
      "net-pnl": net_profit,
      "points-to-breakeven": breakeven,
      "charges-splitup": {
        "turnover": turnover,
        "brokerage": brokerage,
        "stt-charges": stt_total,
        "exc-trans-charge": exc_trans_charge,
        "gst": stax,
        "sebi-charges": sebi_charges,
        "stamp-charges": stamp_charges,
      },
    };
    return (returnResult)
    
}

function calculateDeliveryEquity(buyPrice, sellPrice, quantity) {
    bp = buyPrice
    sp = sellPrice
    qty = quantity
    var turnover = parseFloat(parseFloat((bp + sp) * qty).toFixed(2));
    var brokerage = 0;
    var stt_total = Math.round(parseFloat(parseFloat(turnover * 0.001).toFixed(2)));
    var exc_trans_charge = parseFloat(parseFloat(0.0000345 * turnover).toFixed(2));
    var cc = 0;
    var stax = parseFloat(parseFloat(0.18 * (brokerage + exc_trans_charge)).toFixed(2));
    var sebi_charges = parseFloat(parseFloat(turnover * 0.0000005).toFixed(2));
    var stamp_charges = parseFloat(parseFloat(bp * qty * 0.00015).toFixed(2));
    var total_tax = parseFloat(parseFloat(brokerage + stt_total + exc_trans_charge + cc + stax + sebi_charges + stamp_charges).toFixed(2));
    var breakeven = parseFloat(parseFloat(total_tax / qty).toFixed(2));
    breakeven = isNaN(breakeven) ? 0 : breakeven
    var net_profit = parseFloat(parseFloat(((sp - bp) * qty) - total_tax).toFixed(2));

    var gross_pnl = parseFloat(parseFloat((sp - bp) * qty).toFixed(2));

    const returnResult = {
        "gross-pnl": gross_pnl,
        "total-charges": total_tax,
        "net-pnl": net_profit,
        "points-to-breakeven": breakeven,
        "charges-splitup": {
          turnover: turnover,
          brokerage: brokerage,
          "stt-charges": stt_total,
          "exc-trans-charge": exc_trans_charge,
          gst: stax,
          "sebi-charges": sebi_charges,
          "stamp-charges": stamp_charges,
        }
      };
      return returnResult;
}

function calculateFutures(buyPrice, sellPrice, quantity) {
  bp = buyPrice;
  sp = sellPrice;
  qty = quantity;
  var turnover = parseFloat(parseFloat((bp + sp) * qty).toFixed(2));
  var brokerage_buy =
    bp * qty * 0.0003 > 20
      ? 20
      : parseFloat(parseFloat(bp * qty * 0.0003).toFixed(2));
  var brokerage_sell =
    sp * qty * 0.0003 > 20
      ? 20
      : parseFloat(parseFloat(sp * qty * 0.0003).toFixed(2));
  var brokerage = parseFloat(
    parseFloat(brokerage_buy + brokerage_sell).toFixed(2)
  );
  var stt_total = Math.round(
    parseFloat(parseFloat(sp * qty * 0.0001).toFixed(2))
  );
  var etc = parseFloat(parseFloat(0.00002 * turnover).toFixed(2));
  var stax = parseFloat(parseFloat(0.18 * (brokerage + etc)).toFixed(2));
  var sebi_charges = parseFloat(parseFloat(turnover * 0.0000005).toFixed(2));
  var stamp_charges = parseFloat(parseFloat(bp * qty * 0.00002).toFixed(2));
  var total_tax = parseFloat(
    parseFloat(
      brokerage + stt_total + etc + stax + sebi_charges + stamp_charges
    ).toFixed(2)
  );
  var breakeven = parseFloat(parseFloat(total_tax / qty).toFixed(2));
  breakeven = isNaN(breakeven) ? 0 : breakeven;
  var net_profit = parseFloat(
    parseFloat((sp - bp) * qty - total_tax).toFixed(2)
  );

  var gross_pnl = parseFloat(parseFloat((sp - bp) * qty).toFixed(2));

  const returnResult = {
    "gross-pnl": gross_pnl,
    "total-charges": total_tax,
    "net-pnl": net_profit,
    "points-to-breakeven": breakeven,
    "charges-splitup": {
      turnover: turnover,
      brokerage: brokerage,
      "stt-charges": stt_total,
      "exc-trans-charge": etc,
      gst: stax,
      "sebi-charges": sebi_charges,
      "stamp-charges": stamp_charges,
    },
  };
  return returnResult;
}

function calculateOptions(buyPrice, sellPrice, quantity) {
  bp = buyPrice;
  sp = sellPrice;
  qty = quantity;
  var brokerage = 40;
  if (isNaN(bp) || bp == 0) {
    bp = 0;
    bse_tran_charge_buy = 0;
    brokerage = 20;
  }
  if (isNaN(sp) || sp == 0) {
    sp = 0;
    bse_tran_charge_sell = 0;
    brokerage = 20;
  }
  var turnover = parseFloat(parseFloat((bp + sp) * qty).toFixed(2));
  var stt_total = Math.round(
    parseFloat(parseFloat(sp * qty * 0.0005).toFixed(2))
  );
  var etc = parseFloat(parseFloat(0.00053 * turnover).toFixed(2));
  var stax = parseFloat(parseFloat(0.18 * (brokerage + etc)).toFixed(2));
  var sebi_charges = parseFloat(parseFloat(turnover * 0.0000005).toFixed(2));
  var stamp_charges = parseFloat(parseFloat(bp * qty * 0.00003).toFixed(2));
  var total_tax = parseFloat(
    parseFloat(
      brokerage + stt_total + etc + stax + sebi_charges + stamp_charges
    ).toFixed(2)
  );
  var breakeven = parseFloat(parseFloat(total_tax / qty).toFixed(2));
  breakeven = isNaN(breakeven) ? 0 : breakeven;
  var net_profit = parseFloat(
    parseFloat((sp - bp) * qty - total_tax).toFixed(2)
  );

  var gross_pnl = parseFloat(parseFloat((sp - bp) * qty).toFixed(2));

  const returnResult = {
    "gross-pnl": gross_pnl,
    "total-charges": total_tax,
    "net-pnl": net_profit,
    "points-to-breakeven": breakeven,
    "charges-splitup": {
      turnover: turnover,
      brokerage: brokerage,
      "stt-charges": stt_total,
      "exc-trans-charge": etc,
      gst: stax,
      "sebi-charges": sebi_charges,
      "stamp-charges": stamp_charges,
    },
  };
  
  return returnResult;
}

// calculateFutures(2000, 2010, 5)
//calculateOptions(2000, 2008, 5))
//calculateDeliveryEquity(2000, 2008, 5)
//console.log(calculateIntradayEquity(2000, 2008, 5))

module.exports = {
  calculateDeliveryEquity,
  calculateIntradayEquity,
  calculateFutures,
  calculateOptions,
};
