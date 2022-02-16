import { useState } from 'react'
import styled from '@emotion/styled'

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Heading>Desde APP</Heading>
      </header>
    </div>
  )
}

export default App