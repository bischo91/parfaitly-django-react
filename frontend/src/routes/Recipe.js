import React from "react";
import RecipeRead from "../components/RecipeRead";
import { Link, HashRouter, Route } from "react-router-dom";


import Navigation from "../components/Navigation";

class Recipe extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",
      selectedcategory: "",
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
      .then(
        data => {
          this.setState(() => {
            return {
              data,
              loaded: true,
            };
          });
        })
      this.setState({selectedcategory:window.location.hash.split('/')[2]})
      }

    componentWillReceiveProps(){
      this.setState({selectedcategory:window.location.hash.split('/')[2]})
    }

  render(){
    const { isLoading } = this.state;

    if (this.state.selectedcategory === undefined) {
      var filtered = this.state.data;
    } else {
      var filtered = this.state.data.filter((item) => item.category === this.state.selectedcategory);
    }


    console.log(this.state.selectedcategory);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="nav flex-column">
               <li className="nav-item" >
                 <Link className="nav-link" to="#/Cookies">Cookies</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="#/Drinks">Drinks</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="#/Cakes">Cakes</Link>
               </li>
             </nav>
          </div>
          <div className="col">
                <ul>{
                    filtered.map((item) => {
                    return (
                      <RecipeRead
                      key = {item.id}
                      id = {item.id}
                      title = {item.title}
                      category = {item.category}
                      ingredients = {item.ingredients}
                      steps = {item.steps}
                      img_src = {item.img_src}
                      created_at = {item.created_at}
                      />
                    );
                  })
              }
              </ul>
            </div>
          </div>
      </div>

    );

  }
}


export default Recipe;