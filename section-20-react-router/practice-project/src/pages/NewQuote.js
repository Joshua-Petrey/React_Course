import QuoteForm from '../components/quotes/QuoteForm'
import { useNavigate } from 'react-router-dom'
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api' 
import { useEffect } from 'react'

const NewQuote = () => {
  const navigate = useNavigate()
  const {sendRequest, status} = useHttp(addQuote);

  useEffect(() => {
    if(status === 'completed'){
      navigate('/quotes', {replace: true})
    }
  }, [status, navigate])

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData)
  }

  return <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === 'pending'}>
  </QuoteForm>;
}

export default NewQuote