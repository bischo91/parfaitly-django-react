import React from "react";
import Recipe from "../components/RecipeRead";
import profile_pic from "../images/profile.png";
import profile_animated from "../images/profile_animated.png";

function flipimg(){
  profileimg.classList.toggle('flipped');
}


function About(props){
    return (
      <div>
        <div className="flip -mt-20">
          <div id="profileimg"
            className="flip-image"
            onMouseOver={flipimg}
            onMouseOut={flipimg}>
            <img src={profile_animated} alt="Brian Cho" className="profile-front profile-img"/>
            <img src={profile_pic} alt="" className="profile-back profile-img"/>
          </div>
        </div>
        <div className="relative top-80 mt-12 block justify-around">
          <p className="font-mono text-center text-gray-600">
            Hello World! <br></br>
            I'm Brian.<br></br>
            I'm an enthusiastic developer and an engineer<br></br>
            This is a demo website.
          </p>
        </div>
      </div>
    )
}

export default About;
