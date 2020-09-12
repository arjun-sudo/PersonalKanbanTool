import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import {BrowserRouter as Router, Route} from "react-router-dom"
import AddProject from "./components/Project/AddProject";
import LoginForm from "./components/Project/LoginForm";
import {Provider} from "react-redux"
import store from "./store";
function App() {
  return (
      <Router>
          <Provider store={store}>
          <div className="App">
              <Header/>
              <Route exact path={"/dashboard"} component={Dashboard}/>
              <Route exact path={"/addProject"} component={AddProject}/>
              <Route exact path={"/login"} component={LoginForm}/>
          </div>
          </Provider>
      </Router>

  );
}

export default App;
