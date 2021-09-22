import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function RecipeRead( {id, title, category, ingredients, steps, img_src, created_at }){
    return (

      <Link className="text-decoration-none"
          to={{
          pathname:`/recipe/${title.replace(/\s+/g,'')}`,
          state: {
              id,
              title,
              category,
              ingredients,
              steps,
              img_src,
              created_at
          }
      }}>
        <div className="container-fluid d-flex justify-content-center row">
          <br/>
          <div className="row text-secondary"><h2>{title}</h2></div>
          <img src={img_src} alt={title} title={title} className="figure-img img-fluid rounded"></img>
          <br/><br/>
        </div>
      </Link>
    );
}

export default RecipeRead;
