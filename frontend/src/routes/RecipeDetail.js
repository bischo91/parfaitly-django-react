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
        <div className="container w-full p-4 mx-auto">
            <ol className="list-reset flex text-grey-dark">
              <li><a href="#/recipe" className="font-bold">
                Recipe
              </a></li>
              <li><span className="mx-2">/</span></li>
              <li><a href={"#/recipe#/"+location.state.category} className="font-bold">
                {location.state.category}
                </a></li>
              <li><span class="mx-2">/</span></li>
              <li className="font-bold">
                {location.state.title}
              </li>
            </ol>
            <h5 className="mt-2 mb-2">{location.state.title}</h5>
            <h6 className='my-2'>Ingredients:</h6>
            <ol className="p-2 lg:grid lg:grid-cols-2 lg:mb-12 gap-2">
              {location.state.ingredients
                .replaceAll('* ', '-* ')
                .split('-')
                .filter(e => e)
                .map(str => <div><li>{("-"+str).replace("-*", "*")}</li></div>)
              }</ol>
            <div className="lg:grid lg:grid-cols-2 gap-4">
              <div>
                <img
                  src={location.state.img_src}
                  alt={location.state.title}
                  title={location.state.title}
                  className="mx-auto my-4 w-full sm:w-5/6 md:w-4/6">
                </img>
              </div>
              <div>
                <ol>{location.state.steps
                    .replace(/step./gi,'*temp*').split('*temp*')
                    .map(str => <li className="pb-2 lg:pb-4">{str}</li>)
                    }
                </ol>
            </div>
            </div>
        </div>
        );

  }
}

export default RecipeDetail;

// https://www.npmjs.com/package/react-infinite-scroller
