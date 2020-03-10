import React from 'react';

import { Container, Form, SubmitButton } from './styles';

function Add() {
  return (
    <Container >
      <h1>Add Book to the Shelf</h1>
      <Form onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Book Name"
        />
        <input
          type="text"
          placeholder="Author"
        />
        <input
          type="text"
          placeholder="URL image"
        />
        <textarea
          type="text"
          placeholder="Notes"
        />
        <SubmitButton disabled >
          Save
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Add;
