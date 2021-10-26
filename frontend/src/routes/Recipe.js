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
      scrollindex: Array.from( { length: 2}),
      hasMore:true,

    };
  }

  fetchData = () => {
    // if (this.state.scrollindex.length >= filtered.length){
    //   this.setState({ hasMore: false });
    //   return;
    // }
     // a fake async api call like which sends
     // 20 more records in .5 secs
     setTimeout(() => {
       //var newindex = this.state.scrollindex + 1
       this.setState({
         scrollindex: this.state.scrollindex.concat(Array.from({ length: 2 })),
         loaded:false,
     })
       console.log('fetchdata');
       console.log(this.state);
     }, 1500);
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
        subnav.push(<li className="nav-item text-secondary text-start" key={i}>
        <Link
          className="nav-link"
          to={"#/"+this.state.data[i].category}>
            {this.state.data[i].category}</Link>
        </li>)
        }
      }
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-2 nav flex-column top-3 navbar-expand-lg navbar-light bg-light">
            <nav>
            {subnav}
             </nav>
          </div>
          <div className="col-7 mx-auto">
            <hr />
              <InfiniteScroll
                dataLength={this.state.scrollindex.length} //This is important field to render the next data
                next={this.fetchData}
                hasMore={this.state.hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
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
              </InfiniteScroll>
            </div>
          </div>
      </div>
    );
  }
}


export default Recipe;
