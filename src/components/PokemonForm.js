import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: 0,
    frontUrl: "",
    backUrl: ""
  });

  function handleFormInput(event) {
    console.log(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function onSubmit() {
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }

    handleFormSubmit(newPokemon)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={onSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleFormInput} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleFormInput} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFormInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleFormInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
