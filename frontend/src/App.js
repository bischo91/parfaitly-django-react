import React, { Component } from "react";
import { render } from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Recipe from "./routes/Recipe";
import RecipeDetail from "./routes/RecipeDetail";
import Footer from "./components/Footer";
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
    // Chnage page title to Parfaitlyme
    document.title = "Parfaitlyme"
    // Scroll to stop when page loaded
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <div className="bg-primary flex flex-col h-full min-h-screen z-20">
          <HashRouter>
          <Navigation />
            <Route path="/" exact={true} component={About} />
            <Route path="/recipe" exact={true} component={Recipe} />
            <Route path="/recipe/:category" component={RecipeDetail}/>
          </HashRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
