import styled from '@emotion/styled'

const Texto = styled.div`
  background-color: var(--errorColor);
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: var(--font-principal);
  font-weight: 700;
  text-align: center;
`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error