import styled from 'styled-components'

const Input = styled.input`
  background-color: #2E2E40;
  color: white;
  font-size: 1.4rem;
  margin: 1rem 0;
  padding: .5rem;
  transition: all .3s;
  width: 100%;
  appearance: none;

  &::placeholder{
    color: #a0a0a0;
  }
  &:focus {
    background-color: #cccccc;
    color: #2E2E40;
    
    &::placeholder {
      color: #2E2E40;  
    }
  }

`

export default Input