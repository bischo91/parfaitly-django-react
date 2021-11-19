import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Footer(props){
    return (
      <div className="bg-secondary shadow flex w-full absolute bottom-0">
        <p className="m-auto my-2 font-mono text-sm text-primary">
          This is a test footer.
        </p>
      </div>
    );
}

export default Footer;
