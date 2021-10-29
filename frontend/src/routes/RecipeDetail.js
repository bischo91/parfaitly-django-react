import React from "react";
import { Link, Route } from "react-router-dom"
import Breadcrumb from 'react-bootstrap/Breadcrumb'

class RecipeDetail extends React.Component{
  componentDidMount(){
      const { location, history } = this.props;
      if (location.state === undefined){
          history.push("/");
      }
  }

  render() {
      const { location } = this.props;

      return (
        <div className="container">
          <div className="row">
            <ol>
              <li>
                <a href="#/recipe" className="text-blue-500 font-bold">Recipe</a>
              </li>
              <li>
                <a href={"#/recipe#/"+location.state.category}
                  className="text-blue-500 font-bold">{location.state.category}
                </a>
              </li>
            </ol>
          </div>
          <div className="row">
            <div className="text-primary">
              <h5>{location.state.title}</h5>
            </div>
            <div className="text-primary">{location.state.category}</div>
            <div className="list-group-item">
              Ingredients:
              {location.state.ingredients
                .split("-")
                .map(str => <p>{"- "+str}</p>)
              }</div>
            <img
              src={location.state.img_src}
              alt={location.state.title}
              title={location.state.title}
              className="figure-img img-fluid rounded">
            </img>
            <div className="list-group-item">
              <h6>{location.state.steps
                  .replace(/step./gi,'*temp*').split('*temp*')
                  .map(str => <p>{str}</p>)
                  }</h6>
            </div>
          </div>
        </div>
        );

  }
}

export default RecipeDetail;

// https://www.npmjs.com/package/react-infinite-scroller
