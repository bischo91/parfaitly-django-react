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
        <div className="w-full top-28 relative bg-gray-100">
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
            <div className="mt-2 mb-2 4xl text-pink-900">{location.state.title}</div>
            <div className='my-2 2xl text-pink-500	'>Ingredients:</div>
            <ol className="p-2 lg:grid lg:grid-cols-2 lg:mb-12 gap-2 text-pink-500">
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
              <div className="text-pink-800">
                <ol>{location.state.steps
                    .replace(/step./gi,'*temp*').split('*temp*')
                    .map(str => <li className="pb-2 lg:pb-4">{str}</li>)
                    }
                </ol>
              </div>
            </div>
            <div className="bg-gray-100 absolute -bottom-20 w-full flex h-20">
              <Footer/>
            </div>
        </div>
        );

  }
}

export default RecipeDetail;

// https://www.npmjs.com/package/react-infinite-scroller
