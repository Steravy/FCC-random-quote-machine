import { Quote } from '../Home';
import quotes from '../assets/quotes-db/quotes.json';;

const getRandomQuote = (): Quote => {
    
    return quotes[Math.floor(Math.random() * quotes.length)];
}

export default getRandomQuote;