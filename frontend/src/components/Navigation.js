import React from "react";
import { Link } from "react-router-dom";
import Recipe from "../routes/Recipe";

function togglebutton(){
  resultnav.classList.toggle('hidden');
}

function navdisappear(){
  if (!resultnav.classList.contains('hidden')){
    resultnav.classList.toggle('hidden');
  }
}

function Navigation(){
    return (
      <nav className="z-50 top-0 fixed w-full bg-secondary shadow">
        <div
          className="
            container
            px-6
            py-3
            mx-auto
            md:flex md:justify-between md:items-center
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <Link
                className="
                  text-xl
                  font-bold
                  text-primary
                  hover:text-secondary
                  md:text-2xl
                  font-LobsterTwo
                "
                to="/"
                onClick={navdisappear}
                >
                Parfaitlyme
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="
                  text-primary
                  hover:text-secondary
                  focus:outline-none focus:text-secondary
                "
                aria-label="toggle menu"
                onClick={togglebutton}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div id="resultnav" className="hidden items-center md:flex">
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                className="
                  my-1
                  text-primary
                  text-lg
                  font-bold
                  hover:text-secondary
                  md:mx-4 md:my-0
                  font-LobsterTwo
                "
                to="/"
                onClick={navdisappear}
                >
                Home
              </Link>
              <Link
                className="
                  my-1
                  text-primary
                  text-lg
                  font-bold
                  hover:text-secondary
                  md:mx-4 md:my-0
                  font-LobsterTwo
                "
                to="/recipe"
                onClick={navdisappear}
                >
                Recipe
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navigation;
