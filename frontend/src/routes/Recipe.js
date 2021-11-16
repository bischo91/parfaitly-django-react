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
      filtereddata: [],
      placeholder: "Loading",
      selectedcategory: "",
      scrollindex: Array.from( { length: 3}),
      hasMore:true,
    };
  }

  fetchData = () => {
    if (this.state.scrollindex.length >= this.state.filtereddata.length){
      this.setState({
        hasMore: false, });
      console.log('fetchdata, but hasMore is false')
      return;
    }
     // a fake async api call like which sends
     setTimeout(() => {
       this.setState({
         scrollindex: this.state.scrollindex.concat(Array.from({ length: 1 })),
         hasMore:true,
     });
       console.log('fetchdata');
       console.log(this.state);
     }, 2000);
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
    if (this.state.scrollindex.length >= this.state.filtereddata.length){
      this.state.hasMore = false;
    } else{
      this.state.hasMore = true;
    }
    const { isLoading } = this.state;
    var uniquecategory=[];
    var subnav=[];
    console.log('render');
    console.log(this.state);
    for (var i=0; i<this.state.data.length; i++) {
      if (!uniquecategory.includes(this.state.data[i].category))
        {
        uniquecategory.push(this.state.data[i].category)
        var test = this.state.data[i].category
        subnav.push(<li key={i}>
          <Link
            className="flex flex-row items-center h-12 transform hover:translate-x-4 transition-transform ease-in duration-300 text-gray-500 hover:text-gray-800"
            to={"#/"+this.state.data[i].category}
            onClick={()=> this.setState( {
                  scrollindex: Array.from( {length: 3}),
                })}
            >
            <span className="inline-flex items-center justify-center h-12 w-6 text-lg text-gray-400"><i className="bx bx-home"></i></span>
            <span className="text-sm font-medium">
              {this.state.data[i].category}
            </span>
          </Link>
        </li>)
        }
      }
    return (
      <div className="bg-gray-100 min-h-max relative top-20 flex flex-row">
        <div className="flex flex-col w-full h-full">
          <ul className="flex flex-col py-4 fixed top-14 bg-white rounded-br-3xl min-w-max max-w-xs w-1/4">
            {subnav}
          </ul>
        </div>
        <InfiniteScroll
          dataLength={this.state.scrollindex.length} //This is important field to render the next data
          next={()=> this.fetchData()}
          hasMore={this.state.hasMore}
          loader={
            <div className="relative bottom-5 w-window bg-gray-100 flex items-center justify-center space-x-10 animate-pulse">
              <div className="my-8 w-4 h-4 bg-red-900 rounded-full"></div>
              <div className="my-8 w-4 h-4 bg-red-900 rounded-full"></div>
              <div className="my-8 w-4 h-4 bg-red-900 rounded-full"></div>
            </div>
          }
          endMessage={
            <div></div>
          }
          style={{oveflow:"hidden !important"}}
          className="w-full relative top-14 z-40"
        >
          <div className="overflow-hidden">
              {
                  this.state.filtereddata.slice(0, this.state.scrollindex.length).map((item, index) => (
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
          <div className="bg-gray-100 absolute -bottom-20 w-full flex h-20">
            <Footer/>
          </div>
        </div>
    );
  }
}

export default Recipe;
