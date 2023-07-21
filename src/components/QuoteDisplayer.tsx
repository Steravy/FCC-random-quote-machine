import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { Quote } from "../Home";

interface QuoteDisplayerProps {
    quotes: Quote
}

const QuoteDisplayer: React.FC<QuoteDisplayerProps> = ({ quotes }: QuoteDisplayerProps) => {

    const { quote, author } = quotes;

    return (

        <section className='flex flex-col gap-4 ' >

            <article id="quote-box" className='flex flex-col gap-4 max-w-[90vw] lg:max-w-[35vw] bg-gray-700 text-white rounded-lg p-8' >

                <article className='flex flex-row gap-3' >
                    <i>
                        <BiSolidQuoteAltLeft size={30} />
                    </i>
                    <p id="text" className='text-start text-xl md:text-3xl font-normal' >{quote}</p>
                </article>
                <article className='flex flex-row justify-end' >
                    <span id="author" > - {author}</span>
                </article>

                <article className='flex flex-row gap-3' >
                    <a target="_blank" href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}>
                        <FaTwitter size={25} />
                    </a>
                    <i>
                        <BiSolidQuoteAltLeft size={30} />
                    </i>
                </article>

            </article>

            <span className='text-center text-sm font-light' > by Stefan Vitoria</span>

        </section>
    )
}

export default QuoteDisplayer;