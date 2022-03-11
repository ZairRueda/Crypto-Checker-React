import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectCurrency from '../hooks/useSelectCurrency'
import {coins} from '../data/coins';

// === Style Components ===
const InputSubmit = styled.input`
  background-color: var(--principalColorLight);
  color: var(--white);
  border: none;
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  border-radius: 5px;
  transition: background-color 0.5s;
  

  &:hover {
    cursor: pointer;
    background-color: var(--principalColorDark);
    
  }

  &:active {
    transform: translateY(2px) translateX(2px);
    background-color: var(--principalColorDark);
  }
`
// === End Style Components ===

const Formulary = ({setPrices}) => {

  const [cryptos, setCryptos] = useState([])
  const [error, setError] = useState(false)

  // The name is not need to be same to declaration, in useSelectCurrency is state, but here is coin
  // because is array destructuring, not object destructuring
  const [ coin, SelectCurrency ] = useSelectCurrency("Select Your Currency", coins);

  const [ crypto, SelectCrypto ] = useSelectCurrency("Select Your Crypto", cryptos)

  useEffect(() => {
    const searchInApi = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD"

      const response = await fetch(url)
      const result = await response.json()

      const arrayCriptos = result.Data.map(cripto => {
        const {CoinInfo} = cripto
        const {Name, FullName} = CoinInfo
        return {id: Name, name: FullName}
      })

      setCryptos(arrayCriptos)
    }

    searchInApi()
  }, [])

  
  const handleSubmit = (e) => {
    e.preventDefault()

    if([crypto, coin].includes('')) {
      setError(true)

      return
    }

    setError(false)

    setPrices({
      coin,
      crypto
    })
  }

  return (
    <>
      <form 
        onSubmit={handleSubmit}
      >

        <SelectCurrency />

        <SelectCrypto />
        
        <InputSubmit 
          type="submit" 
          value="Quote" 
          className='liquid'
        />
      </form>
      {error && <Error>Select some crypto and coin</Error>}
    </>
  )
}

export default Formulary
