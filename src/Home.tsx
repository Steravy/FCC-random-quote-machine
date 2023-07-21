import { useState } from 'react';

import getRandomQuote from './providers/getRandomQuote';
import QuoteDisplayer from './components/QuoteDisplayer';


export interface Quote {
  quote: string
  author: string
}
function Home() {

  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  return (
    <main className='flex flex-col items-center justify-center h-[100vh]' >
      <QuoteDisplayer quotes={quote} onClick={() => setQuote(getRandomQuote())} />
    </main>
  )
}

export default Home;

// https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json