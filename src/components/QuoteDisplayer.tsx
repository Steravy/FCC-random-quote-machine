import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { Quote } from "../Home";
import Button from './Button';

interface QuoteDisplayerProps {
    quotes: Quote;
    onClick: () => void;
}

const QuoteDisplayer: React.FC<QuoteDisplayerProps> = ({ quotes, onClick }: QuoteDisplayerProps) => {

    const { quote, author } = quotes;

    return (

        <section className='flex flex-col gap-4 ' >

            <article id="quote-box" className='flex flex-col gap-6 max-w-[90vw] lg:max-w-[35vw] bg-gray-700 text-white rounded-lg p-8' >

                <article className='flex flex-row gap-3' >
                    <i>
                        <BiSolidQuoteAltLeft size={30} />
                    </i>
                    <p id="text" className='text-start text-xl md:text-3xl font-normal' >{quote}</p>
                </article>
                <article className='flex flex-row justify-end' >
                    <span id="author" > - {author}</span>
                </article>

                <article className='flex flex-row items-center justify-between' >
                    <div className='flex flex-row items-center gap-3' >
                        <a target="_blank" href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}>
                            <FaTwitter size={25} />
                        </a>
                        <i>
                            <BiSolidQuoteAltLeft size={30} />
                        </i>
                    </div>

                    <Button label='New quote' onClick={onClick} />
                </article>

            </article>

            <span className='text-center text-sm font-light' > by Stefan Vitoria</span>

        </section>
    )
}

export default QuoteDisplayer;