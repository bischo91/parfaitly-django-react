import React from "react";
import RecipeRead from "../components/RecipeRead";
import { Link, HashRouter, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import InfiniteScroll from 'react-infinite-scroll-component';
import Footer from "../components/Footer";

class Recipe extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      FilteredData: [],
      placeholder: "Loading",
      SelectedCategory: "",
      scrollindex: Array.from( { length: 3}),
      hasMore:true,
    };
  }

  fetchData = () => {
    // Load more data (recipes) with infinite scroll
    // if number of recipes are equal or more than filtered data, hasMore is set to false
    if (this.state.scrollindex.length >= this.state.FilteredData.length){
      this.setState({
        hasMore: false, });
      return;
    }
    // Show more recipe with infinite scroll one by one
    // How many to load is defined by length: 1
    // Loading after 1500ms
     setTimeout(() => {
       this.setState({
         scrollindex: this.state.scrollindex.concat(Array.from({ length: 1 })),
         hasMore:true,
        });
      }, 1500);
   }

  componentDidMount() {
    // Chnage page title to Parfaitlyme Recipe
    document.title = "Parfaitlyme Recipe"
    // Scroll to stop when page loaded
    window.scrollTo(0, 0)
    // Fetch data from API defined by admin
    fetch("api/dessert")
      .then(response => {
        if (response.status > 400) {
          // If failed to load
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
            // Define selected category
            SelectedCategory:window.location.hash.split('/')[2],
          };
        });
        if (window.location.hash.split('/')[2] === undefined | '') {
          // If no selected category, show all recipes (filtered data is all the data)
          this.setState({FilteredData: this.state.data})
        } else {
          // Filter data with the SelectedCategory
          this.setState({FilteredData: this.state.data.filter((item) =>
            item.category === window.location.hash.split('/')[2])})
          }
        })
      }

    componentWillReceiveProps(){
      // Scroll to stop when page loaded
      window.scrollTo(0, 0)
      // Update SelectedCategory
      this.setState({SelectedCategory:window.location.hash.split('/')[2]})
      if (window.location.hash.split('/')[2] === undefined | "") {
        // If no selected category, show all recipes (filtered data is all the data)
        this.setState({FilteredData: this.state.data})
      } else {
        // Filter data with the SelectedCategory
        this.setState({FilteredData: this.state.data.filter((item) =>
          item.category === window.location.hash.split('/')[2])})
        }
      }

  render(){
    // Check if all data (recipes) have been loaded
    if (this.state.scrollindex.length >= this.state.FilteredData.length){
      this.state.hasMore = false;
    } else{
      this.state.hasMore = true;
    }

    // BreadCrumb to describe which category (Recipe/Category)
    var BreadCrumb;
    if (this.state.SelectedCategory !== undefined | "") {
      // If category is selected
      BreadCrumb = <ol className="relative right-8 top-8 mt-2 mx-4 flex text-sm text-secondary font-BalsamiqSans">
        <li><a href="#/recipe" className="font-semibold">
          Recipe
        </a></li>
        <li><span className="mx-1">/</span></li>
        <li><a href={"#/recipe#/"+this.state.SelectedCategory} className="font-semibold">
          {this.state.SelectedCategory}
        </a></li>
      </ol>
    } else {
      // No category selected
      BreadCrumb = <ol className="relative right-8 top-8 my-2 mx-4 flex text-sm text-secondary font-BalsamiqSans">
        <li><a href="#/recipe" className="font-semibold">
          Recipe
        </a></li>
      </ol>
    }

    // SubNav showing categories from data
    var UniqueCategory=[];
    var SubNav=[];
    for (var i=0; i<this.state.data.length; i++) {
      if (!UniqueCategory.includes(this.state.data[i].category))
      // If category is unique, push to SubNav
        {
        UniqueCategory.push(this.state.data[i].category)
        SubNav.push(
          <li key={i}>
            <Link
                className="flex flex-row
                items-center h-12 text-lg text-primary
                transform transition-transform ease-in duration-300
                hover:text-secondary hover:translate-x-4"
                to={"#/"+this.state.data[i].category}
                onClick={()=> this.setState({
                scrollindex: Array.from( {length: 3} ),
                })}
              >
              <span
                className="inline-flex items-center justify-center
                h-12 w-6 text-lg text-gray-400"><i className="bx bx-home"></i></span>
              <span className="font-medium">
                {this.state.data[i].category}
              </span>
            </Link>
          </li>
        )}
      }
      return (
        <div className="bg-primary min-h-max relative top-8 flex flex-row mb-16">
          <div className="container h-full min-h-screen flex min-w-full">
            {/* SubNav */}
            <div className="flex flex-col w-2/6 h-full">
              <ul className="flex flex-col py-4 fixed top-14 bg-secondary
                rounded-br-3xl min-w-max max-w-xs w-1/4 font-LobsterTwo">
                {SubNav}
              </ul>
            </div>
            {/* Content */}
            <div className="w-4/6">
              {BreadCrumb}
              {/* InfiniteScroll (endMessage left empty for now)*/}
              <InfiniteScroll
                dataLength={this.state.scrollindex.length}
                next={()=> this.fetchData()}
                hasMore={this.state.hasMore}
                loader={
                  <div className="relative bottom-5 flex items-center justify-center
                    space-x-10 w-window h-full bg-primary animate-pulse">
                    <div className="lds-spinner">
                      <div></div><div></div><div></div><div></div>
                      <div></div><div></div><div></div><div></div>
                      <div></div><div></div><div></div><div></div>
                    </div>
                  </div>
                }
                style={{oveflow:"hidden !important"}}
                className="mb-12 w-full relative top-14 right-6"
                endMessage={<div></div>}
              >
                <div className="overflow-hidden w-full">
                    {
                      // Map filtered data and define properties to RecipeRead
                      this.state.FilteredData.slice(0, this.state.scrollindex.length).map((item, index) => (
                        <RecipeRead
                        key = {item.id}
                        id = {item.id}
                        description = {item.description}
                        title = {item.title}
                        category = {item.category}
                        ingredients = {item.ingredients}
                        steps = {item.steps}
                        img_src = {item.img_src}
                        created_at = {item.created_at}
                        />
                    ))
                  }
                  </div>
              </InfiniteScroll>
            </div>
          </div>
        </div>
      );
    }
  }

export default Recipe;
