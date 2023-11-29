import React from "react";
import logo1 from "../assets/images/logo1.svg";
import logo2 from "../assets/images/logo20.svg";
import logo3 from "../assets/images/logo21.svg";
import logo4 from "../assets/images/logo11.svg";
import logo5 from "../assets/images/logo6.png";
const Home = () => {
  return (
    <div className="home">
      <div className="main-content">
        <p className="title">ONLINE RESUME BUILDER</p>
        <h2>
          Only 2% of resumes make it past the first round. Be in the top 2%
        </h2>
        <p className="description">
          Use professional field-tested resume templates that follow the exact
          ‘resume rules’ employers look for. Easy to use and done within minutes
          - try now for free!
        </p>
        <button>Create My Resume</button>
        <h4>31,749 resumes created today</h4>
        <img
          src="https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=1.5,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg"
          alt="resume img"
        />
      </div>
      <div className="logos">
        <img src={logo5} alt="" />
        <img src={logo1} alt="" />
        <img src={logo4} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
      </div>
      <div className="reviews-ctn">
        <h2>Reviewed by the community. Trusted by professionals</h2>
        <div className="overall">
          <p>4.5 out of 5</p>
          <img src="" alt="" className="stars" />
          <p className="source"></p>
          <p>based on 47,905 reviews</p>
        </div>
        <div className="detailed">
          <div className="individual">
            <div className="review">
              <img
                src="https://resume.io/assets/landing/home/star-green-165f651514ac48ee6e7f5a3bcabec39097349b3150df38ff4082dcbf3be79410.svg"
                alt=""
                className="stars"
              />
              <h3 className="short-desc">Very easy to use</h3>
              <p className="long-desc">
                A very easy to use and intuitive platform to create a high
                quality CV. The additional CV review makes a great impact in
                composing a successful CV that puts you on top of other
                applicants.
              </p>
              <div className="bottom">
                <p className="name">Mike Alexandru</p>
                <span></span>
                <p className="time">about 1 hour ago</p>
              </div>
            </div>
          </div>
          <div className="scroll">
            <span className="back"></span>
            <span className="forward"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
