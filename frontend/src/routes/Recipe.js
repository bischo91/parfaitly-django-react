import React from "react";
import RecipeRead from "../components/RecipeRead";
import { Link, HashRouter, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import InfiniteScroll from 'react-infinite-scroll-component';

class Recipe extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filtereddata: [],
      loaded: false,
      placeholder: "Loading",
      selectedcategory: "",
      scrollindex: Array.from( { length: 3}),
      hasMore:true,

    };
  }

  fetchData = () => {
    if (this.state.scrollindex.length >= this.state.filtereddata.length){
      this.setState({ hasMore: false });
      return;
    }
     // a fake async api call like which sends
     setTimeout(() => {
       this.setState({
         scrollindex: this.state.scrollindex.concat(Array.from({ length: 1 })),
         loaded:false,
     })
       console.log('fetchdata');
       console.log(this.state);
     }, 1000);
   };

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
              selectedcategory:window.location.hash.split('/')[2],
            };
          });
          if (window.location.hash.split('/')[2] === undefined | '') {
            this.setState({filtereddata: this.state.data})
          } else {
            this.setState({filtereddata: this.state.data.filter((item) => item.category === window.location.hash.split('/')[2])})
          }
        })
      console.log('fetch');
      console.log(this.state);
      }

    componentWillReceiveProps(){
      this.setState({selectedcategory:window.location.hash.split('/')[2]})
      if (window.location.hash.split('/')[2] === undefined | '') {
        this.setState({filtereddata: this.state.data})
      } else {
        this.setState({filtereddata: this.state.data.filter((item) => item.category === window.location.hash.split('/')[2])})
      }
      console.log('receiveprops');
      console.log(this.state);
    }

  render(){
    const { isLoading } = this.state;
    var uniquecategory=[];
    var subnav=[];
    console.log('render');
    console.log(this.state);
    for (var i=0; i<this.state.data.length; i++) {
      if (!uniquecategory.includes(this.state.data[i].category))
        {
        uniquecategory.push(this.state.data[i].category)
        subnav.push(<li key={i}>
          <Link
            className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            to={"#/"+this.state.data[i].category}>
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
            <span className="text-sm font-medium">
              {this.state.data[i].category}
            </span>
          </Link>
        </li>)
        }
      }
    return (
      <div className="flex flex-row bg-gray-100 container">
        <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
        <ul className="flex flex-col py-4">
          {subnav}
        </ul>
        </div>
        <InfiniteScroll
          dataLength={this.state.scrollindex.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.hasMore}
          loader={
            <div class="flex items-center justify-center space-x-2 animate-pulse"><br></br>
              <div class="w-1 h-1 bg-black-400 rounded-full"></div>
              <div class="w-1 h-1 bg-black-400 rounded-full"></div>
              <div class="w-1 h-1 bg-black-400 rounded-full"></div>
            </div>
          }
          endMessage={
            <hr />
          }
          style={{oveflow:"hidden !important"}}
          className=""
        >
          <div className="overflow-hidden">
              {
                  this.state.filtereddata.slice(0, this.state.scrollindex.length).map((item, index) => (
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
                ))
              }
            </div>
          </InfiniteScroll>
        </div>
    );
  }
}

export default Recipe;
