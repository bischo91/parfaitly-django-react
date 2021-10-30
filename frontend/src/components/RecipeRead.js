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
          <div className="h-64">
            <br/>
            <h2>{title}</h2>
            <img
              src={img_src}
              alt={title}
              title={title}
              className="h-48"></img>
            <br/><br/>
          </div>
        </Link>
    );
}

export default RecipeRead;
