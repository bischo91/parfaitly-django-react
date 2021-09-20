import React from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap";
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
        <div className="container-fluid">
          <br/>
          <div className="text-primary"><h5>{title}</h5></div>
          <img src={img_src} alt={title} title={title} className="figure-img img-fluid rounded"></img>
          <br/><br/>
        </div>
      </Link>
    );
}

export default RecipeRead;
