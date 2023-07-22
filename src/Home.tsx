import { useState } from 'react';

import getRandomQuote from './providers/getRandomQuote';
import QuoteDisplayer from './components/QuoteDisplayer';
import setRandomColor from './providers/setRandomColor';


export interface Quote {
  quote: string
  author: string
}
function Home() {

  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [color, setColor] = useState<string>(setRandomColor());

  return (
    <main className='flex flex-col items-center justify-center h-[100vh] w-full' style={{ backgroundColor: color }} >
      <QuoteDisplayer quotes={quote} onClick={() => setQuote(getRandomQuote())} color={color} colorSetter={() => setColor(setRandomColor())} />
    </main>
  )
}

export default Home;

// https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json