import React, { useEffect, useState } from 'react'
import Container from './Container'
import Button from './Button'
import {Title, Text} from './Texts'
import Input from './Input'

const Bank = () => {

  const [input, setInput] = useState(0)
  const [dinheiro, setDinheiro] = useState(0)
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    if(input) setIsEnabled(true)
    else setIsEnabled(false)
  }, [input])

  const handleDeposit = () => {
    setDinheiro(prev => 
      prev + input
    )
    setInput('')
  }

  const handleSaque = () => {
    setDinheiro(prev => 
      prev - input
    )
    setInput('')
  }

  return (
    <Container>
      <div className='container'>
        <Title>Banco Sandrex</Title>
        <Text>Banco digital para você fazer o seu saque e depósito.</Text>
        <Text>Dinheiro: R$ {dinheiro.toFixed(2)}</Text>
        <Input 
          value={input || ''}
          placeholder='Digite um valor' 
          onChange={(e) => setInput(+e.currentTarget.value)}
          type='number'
          />
          <div className='btn-container'>
            <Button disabled={!isEnabled} onClick={handleDeposit}>Depositar</Button>
            <Button disabled={!isEnabled} onClick={handleSaque}>Sacar</Button>
          </div>
      </div>
    </Container>
  )
}

export default Bank