import React from 'react'
import {Link} from 'react-router-dom'
import Container from './Container'

const Index = () => {
  return (
    <Container>
      <span>Ir para:</span>
      <br />
      <Link to='/rpg'>Atividade RPG</Link>
      <Link to='/bank'>Atividade Banco</Link>
    </Container>
  )
}

export default Index