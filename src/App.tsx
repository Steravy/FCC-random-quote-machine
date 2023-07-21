import { Fragment, useState } from 'react'
import './App.css'

interface Quote {
  quote: string
  author: string
}
function Home() {

  const [quote, setQuote] = useState<Quote>()

  return (
    <Fragment>
      
    </Fragment>
  )
}

export default Home
