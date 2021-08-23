import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AddForm from "./pages/components/AddForm";
import Layout from "./pages/components/Layout";
import EditForm from "./pages/EditForm";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/edit/:id" component={EditForm} />
        <Route exact path="/add" component={AddForm} />
        <Route path="*">
          <Layout>
            <h3 className="page-not-found">404 page not found</h3>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
