import React, { useEffect, useRef, memo } from 'react';

function MiniChart({ id }) {
  const container = useRef(null);

  useEffect(() => {
    console.log('TradingViewWidget useEffect triggered');

    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    if (container.current.querySelector('script')) {
      return;
    }

    script.innerHTML = `
        {
          "symbol": "BITSTAMP:BTCUSD",
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "dateRange": "1M",
          "colorTheme": "light",
          "trendLineColor": "rgba(11, 83, 148, 1)",
          "isTransparent": false,
          "autosize": true,
          "largeChartUrl": "",
          "chartOnly": true
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className='tradingview-widget-container' ref={container}>
      <div className='tradingview-widget-container__widget'></div>
    </div>
  );
}

export default memo(MiniChart);
