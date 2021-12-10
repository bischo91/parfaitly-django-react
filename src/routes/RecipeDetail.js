import React from "react";
import { Link, Route } from "react-router-dom"
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Footer from "../components/Footer";

class RecipeDetail extends React.Component{
  componentDidMount(){
      const { location } = this.props;
      // Change page title to recipe title
      document.title = location.state.title;
      // Scroll to top
      window.scrollTo(0, 0);
  }

  render() {
      const { location } = this.props;
      return (
        <div className="w-full top-16 relative bg-primary">
          <div className="container m-auto mb-16">
            {/* BreadCrumb */}
            <ol className="my-2 mx-4 flex text-sm text-secondary font-BalsamiqSans">
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
            <div className="mx-8 lg:my-8 my-2 text-primary
              text-xl sm:text-2xl md:text-3xl lg:text-5xl
              font-bold font-LobsterTwo">{location.state.title}</div>
            <div className="mx-8 mt-4 text-sm sm:text-md md:text-xl text-secondary
              font-semibold font-BebasNeue">Ingredients:</div>
            <ol className="mx-8 text-sm sm:text-md text-secondary
              font-OpenSansCondensed lg:grid lg:grid-cols-2 lg:mb-12 gap-2">
              {/* Format and list raw data for Ingredients.
                The ingredients section is responsive.
                Raw data have - symbol to list each ingredient,
                and * is also used for heaing
                 */}
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
              <div className="m-auto mx-8 text-lg md:text-md text-secondary font-OpenSansCondensed">
                <ol>
                  {/* Format and list raw data for Ingredients.
                    Raw data have Step 1. to describe the steps.
                    For the page, the word, Step, and . is removed*/}
                  {location.state.steps
                    .replace(/step./gi,'*temp*').split('*temp*')
                    .map(str => <li className="pb-2 lg:pb-4">{str}</li>)
                    }
                </ol>
              </div>
            </div>
          </div>
        </div>
        );

  }
}

export default RecipeDetail;

// https://www.npmjs.com/package/react-infinite-scroller
