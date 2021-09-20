import React, { Component } from "react";
import "./App.css";
import { render } from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Recipe from "./routes/Recipe";
import Blog from "./routes/Blog";
import RecipeDetail from "./routes/RecipeDetail";

import bootstrap from "bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",
    };

  }

  componentDidMount() {
    fetch("api/dessert")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true,
          };
        });
      });
  }
  render() {
    const handleClick = () => {
      this.state.selectedcategory ='all';
    }
    return (
      <HashRouter>
      <Navigation />
        <Route path="/" exact={true} component={About} />
        <Route path="/recipe" exact={true} component={Recipe} />
        <Route path="/blog" exact={true} component={Blog} />
        <Route path="/recipe/:category" component={RecipeDetail}/>


      </HashRouter>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);