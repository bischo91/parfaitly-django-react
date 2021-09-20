import React from "react";
import bootstrap from "bootstrap";

function RecipeCatory(props){
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="nav flex-column">
               <li className="nav-item" >
                 <Link className="nav-link" to="#/Cookies" onClick={() => this.setState({selectedcategory:"Cookies"})}>Cookies</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="#/Drinks" onClick={() => this.setState({selectedcategory:"Drinks"})}>Drinks</Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link" to="#/Cakes" onClick={() => this.setState({selectedcategory:"Cakes"})}>Cakes</Link>
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
    )
}

export default RecipeCatory;
