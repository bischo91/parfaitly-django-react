import React from "react";
import Profile_pic from "../images/profile.png";
import Profile_animated from "../images/profile_animated.png";
import Footer from "../components/Footer";

function flipimg(){
  // Flip image when hovered in/out
  profileimg.classList.toggle('flipped');
}

function About(props){
    // Change page title to Parfaitlyme
    document.title = "Parfaitlyme"
    return (
      <div>
        {/* Profile image */}
        <div className="flip relative top-10 z-40">
          <div id="profileimg"
            className="flip-image"
            onMouseOver={flipimg}
            onMouseOut={flipimg}>
              <img src={Profile_animated} alt="Brian Cho" className="profile-front profile-img"/>
              <img src={Profile_pic} alt="" className="profile-back profile-img"/>
           </div>
        </div>
        {/* Intro */}
        <div className="bg-primary h-full relative top-96 block justify-around">
          <p className="font-mono text-center text-secondary text-lg">
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
