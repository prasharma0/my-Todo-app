import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Layout from "./components/Layout";

interface ITodo {
  id: number;
  todo: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState([] as ITodo[]);
  const history = useHistory();

  const handleEdit = (id: number) => {
    history.push(`/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    console.log(id);
    let response = await axios.delete(`http://localhost:4000/todo/${id}`);
    getAllTodos();
  };

  const getAllTodos = async () => {
    const response = await axios.get("http://localhost:4000/todo");
    setTodos(response.data);
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div>
      <Layout>
        <div className="wrapper">
          {todos.map((todo) => (
            <div className="card">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  {/* <Card.Title>{todo.id}</Card.Title> */}
                  <Card.Text>{todo.todo}</Card.Text>
                  <div className="buttons">
                    <Button
                      onClick={() => {
                        handleEdit(todo.id);
                      }}
                      variant="warning"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        handleDelete(todo.id);
                      }}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}

          <Card className="add-new-card" style={{ width: "18rem" }}>
            <Card.Body>
              <Button
                onClick={() => {
                  history.push("/add");
                }}
                variant="primary"
              >
                Add New Todo
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Layout>
    </div>
  );
};

export default TodoList;
