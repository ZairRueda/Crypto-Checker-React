import { useState } from "react";
import styled from '@emotion/styled'

const Label = styled.label`
    color: var(--white);
    display: block;
    font-family: var(--font-principal);
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    padding: 14px;
    border-radius: 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; 
    background-image: url(https://img.icons8.com/stickers/50/000000/hand-right.png);
    background-repeat: no-repeat;
    background-position: right;
    background-size: 30px;
`

const useSelectCurrency = (label, options) => {
  const [state, setState] = useState('')
  
  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <Select
        value={state}
        onChange={e => setState(e.target.value)}
      >
          <option value="">Select</option>

          {options.map(option => (
            <option 
              value={option.id} 
              key={option.id}
            > {option.name} </option>
          ))}
      </Select>
    </>
  )

  return [state, SelectCurrency];
}

export default useSelectCurrency