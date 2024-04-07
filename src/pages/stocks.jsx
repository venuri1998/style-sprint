import { Helmet } from 'react-helmet-async';

import { StockView } from 'src/sections/stocks/view';

// ----------------------------------------------------------------------

export default function StockPage() {
  return (
    <>
      <Helmet>
        <title> Stocks | Style Sprint </title>
      </Helmet>

      <StockView />
    </>
  );
}
