import React, { useState } from 'react';
import { get } from 'lodash';
import { isEmail, isInt, isFloat } from 'validator';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', 0);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErros = false;

    if ((nome.length < 3) | (nome.length > 255)) {
      toast.error('Nome precisa ter entre 3 e 255 caracteres');
      formErros = true;
    }
    if ((sobrenome.length < 3) | (sobrenome.length > 255)) {
      toast.error('Sobrenome precisa ter entre 3 e 255 caracteres');
      formErros = true;
    }

    if (!isEmail(email)) {
      toast.error('Email inválido');
      formErros = true;
    }

    if (!isInt(String(idade))) {
      toast.error('Idade inválida');
      formErros = true;
    }
    if (!isFloat(String(peso))) {
      toast.error('Peso inválido');
      formErros = true;
    }
    if (!isFloat(String(altura))) {
      toast.error('Altura inválida');
      formErros = true;
    }
  };
  return (
    <Container>
      <h1>{id ? 'Editar aluno' : 'Novo aluno'}</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso"
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura"
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
