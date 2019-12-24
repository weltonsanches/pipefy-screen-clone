import React from 'react';

import { Container, Label } from './styles';

const Card = () => {
  return (
    <Container>
      <header>
        <Label color='#7159c1' />
      </header>
      <p>Fazer a migração completa de servidor.</p>
      <img src="https://api.adorable.io/avatars/100/abott@adorable.png" alt=""/>
    </Container>
  );
}

export default Card;
