import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { Quote } from "../Home";
import Button from './Button';

interface QuoteDisplayerProps {
    quotes: Quote;
    onClick: () => void;
    color: string;
    colorSetter: () => void;
}

const QuoteDisplayer: React.FC<QuoteDisplayerProps> = ({ quotes, onClick, color, colorSetter }: QuoteDisplayerProps) => {

    const { quote, author } = quotes;

    return (

        <section className='flex flex-col gap-4' style={{ color: color }} >

            <article id="quote-box" className='flex flex-col gap-6 w-[90vw] lg:w-[35vw] bg-white shadow-lg rounded-lg p-8' >

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
                        {/* <a target="_blank" href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}> */}
                        <a target="_top" href="twitter.com/intent/tweet">
                            <FaTwitter size={25} />
                        </a>
                        <i>
                            <BiSolidQuoteAltLeft size={30} />
                        </i>
                    </div>

                    <Button label='New quote' onClick={onClick} color={color} colorSetter={colorSetter} />
                </article>

            </article>

            <p className='text-center text-md font-light' ><span className='text-sm' >by </span> Stefan Vitoria</p>

        </section>
    )
}

export default QuoteDisplayer;