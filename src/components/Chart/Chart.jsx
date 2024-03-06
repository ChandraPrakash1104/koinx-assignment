import React, { useEffect, useRef, memo } from 'react';
import { useSelector } from 'react-redux';

function Chart() {
  const coin = useSelector((state) => state.coin.data);
  const id = coin?.symbol?.toUpperCase();
  const container = useRef(null);
  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    console.log(id);
    script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:${id}USD|1M"
            ]
          ],
          "chartOnly": true,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": true,
          "hideSymbolLogo": true,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "3",
          "changeMode": "no-values",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 1,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "lineColor": "rgba(24, 72, 204, 1)",
          "topColor": "rgba(187, 217, 251, 1)",
          "bottomColor": "rgba(255, 255, 255, 1)",
          "timeHoursFormat": "24-hours"
        }`;
    container.current.appendChild(script);

    return () => {
      if (container.current) {
        while (container.current.firstChild) {
          container.current.removeChild(container.current.firstChild);
        }
      }
    };
  }, [id]);

  return (
    <div className='tradingview-widget-container' ref={container}>
      <div className='tradingview-widget-container__widget'></div>
    </div>
  );
}

export default Chart;
