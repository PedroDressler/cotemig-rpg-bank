import styled from 'styled-components'

const Button = styled.button`
  font-size: 1.5rem;
  padding: .3rem .8rem;
  background-color: #2E2E40;
  color: #eee;
  border-radius: .3rem;
  transition: all .3s;

  &:hover::not(:disabled) {
    background-color: #cccccc;
    color: #2E2E40;
    
    &::placeholder {
      color: #2E2E40;  
    }
  }
  &:disabled {
    color: #7b7b7b;
    background-color: #232330;
  }
`

export default Button