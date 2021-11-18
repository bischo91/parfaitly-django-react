import React from "react";
import { Link, Route } from "react-router-dom"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Footer from "../components/Footer";

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
        <div className="w-full top-28 relative bg-primary">
          <div className="container m-auto">
            <ol className="my-2 mx-4 flex text-sm text-secondary font-BebasNeue">
              <li><a href="#/recipe" className="font-semibold">
                Recipe
              </a></li>
              <li><span className="mx-1">/</span></li>
              <li><a href={"#/recipe#/"+location.state.category} className="font-semibold">
                {location.state.category}
              </a></li>
              <li><span class="mx-1">/</span></li>
              <li className="font-semibold">
                {location.state.title}
              </li>
            </ol>
            <div className="mx-8 my-8 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-primary font-LobsterTwo">{location.state.title}</div>
            <div className="mx-8 my-4 text-md sm:text-xl md:text-2xl font-semibold text-secondary font-BebasNeue">Ingredients:</div>
            <ol className="mx-8 m-4 text-md font-BebasNeue text-secondary lg:grid lg:grid-cols-2 lg:mb-12 gap-2">
              {location.state.ingredients
                .replaceAll('* ', '-* ')
                .split('-')
                .filter(e => e)
                .map(str => <div><li>{("-"+str).replace("-*", "*")}</li></div>)
              }</ol>
            <div className="lg:grid lg:grid-cols-2 gap-4">
              <div className="flex object-center">
                <img
                  src={location.state.img_src}
                  alt={location.state.title}
                  title={location.state.title}
                  className="mx-auto my-4 w-5/6 object-scale-down max-h-36em">
                </img>
              </div>
              <div className="text-lg text-secondary font-BebasNeue">
                <ol>{location.state.steps
                    .replace(/step./gi,'*temp*').split('*temp*')
                    .map(str => <li className="pb-2 lg:pb-4">{str}</li>)
                    }
                </ol>
              </div>
            </div>
          </div>
            <div className="bg-primary absolute -bottom-20 w-full flex h-20">
              <Footer/>
            </div>
        </div>
        );

  }
}

export default RecipeDetail;

// https://www.npmjs.com/package/react-infinite-scroller
