import React from "react";
import { Link } from "react-router-dom";

function RecipeRead( {id, description, title, category, ingredients, steps, img_src, created_at }){
    return (
      <div className="h-full w-full mb-20 space-y-4">
          {/* Link to recipe detail when title clicked */}
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
            <h2 className="text-5xl p-2 font-LobsterTwo inline-block text-primary"
              >{title}</h2>
          </Link>
          <p className="h-full w-5/6 p-2 m-2 font-Lobster text-secondary">{description}</p>
          <div className="container flex">
            {/* Link to recipe detail when picture clicked */}
            <Link className="mx-auto h-full"
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
                className="max-h-36em w-5/6 object-scale-down">
              </img>
            </Link>
          </div>
        </div>
    );
}

export default RecipeRead;
