import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function RecipeRead( {id, description, title, category, ingredients, steps, img_src, created_at }){
    return (

      <div className="h-full ml-10 mb-12 space-y-4">
        <Link className="text-decoration-none"
            >
          <h2 className="text-5xl p-2 font-LobsterTwo inline-block"
            to={{
            pathname:`/recipe/${title.replace(/\s+/g,'')}`,
            state: {
                id,
                title,
                description,
                category,
                ingredients,
                steps,
                img_src,
                created_at
              }
            }}>{title}</h2>
        </Link>
        <p className="h-full p-2 m-2 font-Lobster">{description}</p>
        <Link className="text-decoration-none"
          >
          <img
            src={img_src}
            alt={title}
            title={title}
            className="h-96 m-4 inline-block"
            to={{
            pathname:`/recipe/${title.replace(/\s+/g,'')}`,
            state: {
                id,
                title,
                description,
                category,
                ingredients,
                steps,
                img_src,
                created_at
              }
            }}></img>
        </Link>
      </div>
    );
}

export default RecipeRead;
