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
          <div className="xl:h-96 xl:ml-28 lg:h-80 lg:ml-24 md:h-72 md:ml-16 sm:h-64 sm:ml-12 ml-10 h-60 mb-10">
            <br/>
            <h2 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg p-2 font-IrishGover">{title}</h2>
            <img
              src={img_src}
              alt={title}
              title={title}
              className="xl:h-80 lg:h-64 md:h-56 sm:h-48 h-40"></img>
            <br/><br/>
          </div>
        </Link>
    );
}

export default RecipeRead;
