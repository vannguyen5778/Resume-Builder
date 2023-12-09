import logo5 from "../../assets/images/logo20.svg";
import logo1 from "../../assets/images/logo1.svg";
import logo3 from "../../assets/images/logo21.svg";
import logo4 from "../../assets/images/logo11.svg";
import logo2 from "../../assets/images/logo6.png";
import Logo from "../../assets/images/hired-logo.svg";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/effect-coverflow";
import "swiper/scss/autoplay";

import ReviewSlider from "./ReviewSlider";
import Carousel from "./TemplateCarousel";
import AutoplaySlider from "./AutoplaySlider";
import CardAnimation from "./Animations";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const Home = () => {
  const slidingImg = {
    hidden: { y: "320px", opacity: 0 },

    show: { y: 0, opacity: 1 },
  };
  return (
    <>
      <Navbar />

      <div className="home">
        <section className="intro section">
          <p className="title">ONLINE RESUME BUILDER</p>
          <h2>
            Only 2% of resumes make it past the first round. Be in the top 2%
          </h2>
          <p className="description ">
            Use professional field-tested resume templates that follow the exact
            ‘resume rules’ employers look for. Easy to use and done within
            minutes - try now for free!
          </p>
          <button className="button">Create My Resume</button>
          <h4>31,749 resumes created today</h4>
          <motion.img
            src="https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=1.5,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg"
            alt="resume img"
            className="sliding-img"
            variants={slidingImg}
            initial="hidden"
            animate="show"
            transition={{ duration: 2, ease: [0.25, 0.1, 0.2, 1]}}
          />
        </section>

        <section className="logos-wrapper">
          <div className="logos">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
          </div>
        </section>

        <section id="about-us" className="reviews section">
          <h2>Reviewed by the community. Trusted by professionals</h2>
          <div className="review-wrap">
            <div className="overall">
              <h4>4.5 out of 5</h4>
              <div className="stars-wrapper">
                {[...Array(4)].map((_, i) => (
                  <span className="stars" key={i}>
                    <img
                      src="https://resume.io/assets/media/star-green20e9737f3d819bbc6c7b.svg"
                      alt=""
                      className="stars"
                    />
                  </span>
                ))}

                <span>
                  <img
                    src="https://resume.io/assets/landing/home/star-half-gray-1381ba71665d6c22d9d8b04b6bf8eb18b6ee19455d0e31e0b38857500bc08e0b.svg"
                    alt=""
                  />
                </span>
              </div>
              <h3 className="source">
                <span>
                  <img
                    src="https://resume.io/assets/media/star-green20e9737f3d819bbc6c7b.svg"
                    alt=""
                  />
                </span>
                Trustpilot
              </h3>
              <p className="sm-text">based on 47,905 reviews</p>
            </div>
            <div className="detailed-wrapper">
              <ReviewSlider />
            </div>
          </div>
        </section>

        <section id="getting-started" className="instructions section">
          <img
            src="https://resume.io/assets/landing/home/how/icon-580ea8bcc1e527c9acb382f70dbe3b5f81dc9a03428cfcf7ee715fd4266afc0c.svg"
            alt=""
          />
          <h2>Create perfect resumes for the modern job market</h2>
          <p className="description">
            Creating a resume has never been this easy! In three simple steps,
            create the perfect document to impress hiring managers and
            employers. Minimum time, maximum professional quality.
          </p>
          <button className=".button">Get Started Now</button>
          <div className="autoplay-wrap">
            <AutoplaySlider />
          </div>
        </section>

        <section id="templates" className="templates">
          <div className="template-wrapper section">
            <img
              src="https://resume.io/assets/landing/home/templates/icon-078b625c05982debafe1358b056b0c40312d1c2ed4d17e21f03e83163353e45a.svg"
              alt=""
            />
            <h2>Proven resume templates</h2>
            <p className="description">
              Win over employers and recruiters by using one of our 27
              professionally-designed cover letter templates. Download to Word
              or PDF.
            </p>
            <Carousel />
          </div>
        </section>

        <section id="reviews" className="callToAction ">
          <div className="content-wrapper ">
            <h2>
              User-friendly. Professional. Effective. Try our CV builder today!
            </h2>
            <p className="description">
              How long does it take to write a resume? Hours? Days? With our
              resume maker you can be done in minutes. Create a convincing and
              effective application letter in several clicks. Use our
              pre-generated phrases, choose a design, fill in your details and
              ideas. Fast and simple.
            </p>
            <button className="button">Try it now!</button>
          </div>
          <img
            src="https://resume.io/assets/landing/home/letter-maker/visual-13cdbab63916313dab4caff704097bae2aafc990be5e86f9cc50260bffe6bc75.svg"
            alt=""
          />
        </section>

        <section className="join section">
          <h1>
            Join over <mark>32,268,000 </mark>
            users worldwide
          </h1>
          <p className="description">
            Start for free — try our resume builder now
          </p>
          <button className="button">Create My Resume</button>
        </section>

        <footer id="contact" className="footer">
          <div className="top">
            <div className="social-media">
              <p>Connect with us on social media</p>
              <div className="icon-wrapper">
                <span className="linkedin">
                  <img
                    src="https://resume.io/assets/landing/footer/linkedin-fe985f05668929dbc4905d4b85ca3785af5e96a29c0cf83a89125fb7e0cdfde5.svg"
                    alt="linkedin log"
                  />
                </span>
                <span className="pinterest">
                  <img
                    src="https://resume.io/assets/landing/footer/pinterest-3ff483f03a3e2f1027c7f7acd8d19c776e59885edfdf98eb853423f67f81efd3.svg"
                    alt="pinterest log"
                  />
                </span>
                <span className="instagram">
                  <img
                    src="https://resume.io/assets/landing/footer/instagram-1328b79f86cad877a2b0717880ff52eae22b37410f127037b1493c5c8a38f203.svg"
                    alt="instagram log"
                  />
                </span>
                <span className="facebook">
                  <img
                    src="https://resume.io/assets/landing/footer/facebook-5a0e2cc900e7f33f9a20573a7008db716e315d2462852b05b105a792bbc8a8a0.svg"
                    alt="facebook log"
                  />
                </span>
              </div>
            </div>
            <div className="categories">
              <div className="category">
                <p className="title">Job seekers</p>
                <ul>
                  <li>Create a Resume</li>
                  <li> Resume Examples</li>
                  <li>Resume Templates</li>
                  <li>Cover Letter Templates</li>
                  <li>Job Search</li>
                </ul>
              </div>
              <div className="category">
                <p className="title">CAREER RESOURCES</p>
                <ul>
                  <li>Resume Help</li>
                  <li>Job Interview</li>
                  <li>Career</li>
                  <li>Cover Letter</li>
                  <li>Blog</li>
                </ul>
              </div>

              <div className="category">
                <p className="title">OUR COMPANY</p>
                <ul>
                  <li>About Us</li>
                  <li>Pricing</li>
                  <li>Product Updates</li>
                  <li>Sponsorship Program</li>
                  <li>Media Kit</li>
                  <li>Affiliates</li>
                </ul>
              </div>
              <div className="category">
                <p className="title">SUPPORT</p>
                <ul>
                  <li>FAQ</li>
                  <li>Contact Us</li>
                  <li>Terms of Service</li>
                  <li>Privacy</li>
                  <li>Right of Withdrawal</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom">
            <p>
              <span>
                <img src={Logo} alt="flag" />
                International
              </span>
            </p>
            <img
              className="verified"
              src="https://resume.io/assets/landing/shared/cprw-c78f635373c794595d7e68d118f7aefb509aee249ff8c516a40cc4e450edcf3c.png"
              alt=""
            />
            <p className="sm-text copyright">Copyright 2023 • HIRED</p>
          </div>
        </footer>

        <div className="card-container">
          <CardAnimation />
        </div>
      </div>
    </>
  );
};

export default Home;
