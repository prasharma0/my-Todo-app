import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Layout from "./Layout";

interface ITodo {
  id: number;
  todo: string;
}

const AddForm = () => {
  const [todo, setTodo] = useState({} as ITodo);

  const history = useHistory();

  const handleInputChange = (event: any) => {
    event.persist();
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.persist();
    let response = await axios.post(`http://localhost:4000/todo`, todo);
    history.push("/");
  };

  return (
    <div>
      <Layout>
        <Container>
          <div style={{ margin: 10 }}>
            <h3>Add Todo</h3>

            <Form.Group>
              <Form.Label>Todo</Form.Label>
              <Form.Control
                value={todo.todo}
                type="text"
                name="todo"
                onChange={handleInputChange}
              />
            </Form.Group>

            <div className="submit">
              <Button onClick={handleSubmit} variant="primary">
                Submit
              </Button>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default AddForm;
