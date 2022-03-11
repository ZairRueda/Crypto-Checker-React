import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import ImgCripto from './img/imagen-criptos.png'

import Formulary from './components/Formulary'
import Result from './components/Result'
import Loader from './components/Loader'

// === Style Components ===
const Conteiner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: var(--font-principal);
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top:80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: var(--principalColorLight);
    display: block;
    margin: 10px auto 0 auto;
  }
`;

// === End Style Components ===

function App() {

  const [prices, setPrices] = useState({})
  const [resultes, setResultes] = useState({})
  const [loader, setLoader] = useState(false)

  // Olways we is reload the page, this function is called
  useEffect(() => {
    // Then we prevent a reload
    if (Object.keys(prices).length > 0) {
      
      const getPrices = async () => {
        setLoader(true)
        setResultes({})

        const {coin, crypto} = prices
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`
        
        fetch(url)
          .then( resp => {
            return resp.json()
          })
          .then( result => {
            return result.DISPLAY[crypto][coin]
          })
          .then( organization => {
            setLoader(false)
            setResultes(organization);
          })
          .catch( error => {
            console.log(error);
          })
      }

      getPrices()
    }
  }, [prices])
  
  return (
    <Conteiner>
      <Image 
        src={ImgCripto}
        alt='Image of Cripto'
      />
      <div>
        <Heading>Speed Quote Cryptocurrency</Heading>
        <Formulary 
          setPrices={setPrices}
        />

        {loader && <Loader/>}
        {resultes && resultes.PRICE &&
          <Result 
            resultes={resultes}
          />
        }
      </div>

      
    </Conteiner>
  )
}

export default App