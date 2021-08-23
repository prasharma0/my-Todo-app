import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Layout from "./components/Layout";

interface ITodo {
  id: number;
  todo: string;
}

const EditForm = (props: any) => {
  const [todo, setTodo] = useState({} as ITodo);
  const history = useHistory();

  const todoId = props.match.params.id;
  console.log(todoId);

  const handleInputChange = (event: any) => {
    event.persist();
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.persist();
    let response = await axios.patch(
      `http://localhost:4000/todo/${todoId}`,
      todo
    );
    history.push("/");
  };

  const getTodoDetail = async () => {
    let response = await axios.get(`http://localhost:4000/todo/${todoId}`);
    setTodo(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getTodoDetail();
  }, []);

  return (
    <div>
      <Layout>
        <Container>
          <div style={{ margin: 10 }}>
            <h3>Edit Todo</h3>

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
                Edit Submit
              </Button>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default EditForm;
