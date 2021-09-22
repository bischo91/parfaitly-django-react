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
            <Breadcrumb>
              <Breadcrumb.Item href="#/recipe">Recipe</Breadcrumb.Item>
              <Breadcrumb.Item
                href={"#/recipe#/"+location.state.category}>{location.state.category}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="row">
            <div className="text-primary">
              <h5>{location.state.title}</h5>
            </div>
            <div className="text-primary">{location.state.category}</div>
            <div className="list-group-item">
              Ingredients - {location.state.ingredients}</div>
            <img
              src={location.state.img_src}
              alt={location.state.title}
              title={location.state.title}
              className="figure-img img-fluid rounded">
            </img>
            <div className="list-group-item">
              <h6>{location.state.steps
                  .replace(/step/gi,'').split(/(?=\d\.)/g)
                  .map(str => <p>{str}</p>)
                  }</h6>
            </div>
          </div>
        </div>
        );

  }
}

export default RecipeDetail;
