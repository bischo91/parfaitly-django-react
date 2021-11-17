import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function RecipeRead( {id, description, title, category, ingredients, steps, img_src, created_at }){
    return (

      <div className="h-full w-full mb-12 space-y-4">
          <Link className="text-decoration-none"
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
              }}>
            <h2 className="text-5xl p-2 font-LobsterTwo inline-block"
              >{title}</h2>
          </Link>
          <p className="h-full w-5/6 p-2 m-2 font-Lobster">{description}</p>
          <Link className="text-decoration-none h-full"
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
            }}>
            <img
              src={img_src}
              alt={title}
              title={title}
              className="max-h-36em w-5/6 object-center object-scale-down m-4 inline-block">
            </img>
          </Link>
        </div>
    );
}

export default RecipeRead;
