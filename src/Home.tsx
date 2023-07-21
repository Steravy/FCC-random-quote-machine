import { Fragment, useState } from 'react';
import './App.css';

import getRandomQuote from './providers/getRandomQuote';


export interface Quote {
  quote: string
  author: string
}
function Home() {

  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  return (
    <Fragment>
      <p>{quote.quote}</p>
    </Fragment>
  )
}

export default Home

// https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json