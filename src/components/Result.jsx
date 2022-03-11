import styled from '@emotion/styled'

const Resulter = styled.div`
  color: #FFFFFF;
  font-family: var(--font-principal);

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 30px;
`

const Text = styled.p`
  font-size: 18px;

  span { 
    font-weight: 700;
  }
`

const Price = styled.p`
  font-size: 24px;
  span { 
    font-weight: 700;
  }
`

const Imagen = styled.img`
  display: block;
  width: 150px;
`

const Result = ({resultes}) => {
  const {HIGHDAY, PRICE, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultes

  return (
    <Resulter>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='Imagen Cripto'/>
      <div>
        <Price>Price Now: <span>$ {PRICE}</span></Price>
        <Text>Max Price Today: <span>$ {HIGHDAY}</span></Text>
        <Text>Low Price Today: <span>$ {LOWDAY}</span></Text>
        <Text>Change In Percentage: <span>{CHANGEPCT24HOUR} %</span></Text>
        <Text>Last Updated: <span>{LASTUPDATE}</span></Text>
      </div>
    </Resulter>
  )
}

export default Result