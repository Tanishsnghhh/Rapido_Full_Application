import React,{ useContext }from "react";
import "./home.css";
import safetyOverviewImage from "../../Assets/safety-overview-header.png";
import whoWe1 from "../../Assets/who_we_1.webp";
import whoWe2 from "../../Assets/who_we_2.webp";
import presence1 from "../../Assets/presence_1.webp"
import presence2 from "../../Assets/presence_2.webp"
import presence3 from "../../Assets/presence_3.webp"
import presence4 from "../../Assets/presence_4.webp"
import business1 from "../../Assets/Rapido4business1.png"
import business2 from "../../Assets/Rapido4business2.png"
import Toggle from "../Toggle/Toggle";
import DataContext from '../../Context/Context'
import Desc from "../Toggle/Desc";
import { customerDesc , captainDesc ,homeFeedback , feedCaptains} from "../../Assets/Data";
import Temp1 from "./Temp1";
import Slider1 from "../Slider/Slider";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';

const Home = () => {
  const {toggleActive,setToggleActive} = useContext(DataContext)
  const {toggleActive1,setToggleActive1} = useContext(DataContext)
  return (
    <div className="home-container">
      <div className="row home-row" >
        <div className="col-lg-5 home-left text-center text-lg-start" >
          <div className="hero-content">
            <h1 className="hero-title">India's largest<br/><span className="highlight">taxi service</span></h1>
            <div className="hero-description">
              <p>
                Experience the convenience of India's first and fastest-growing taxi service. 
                Trusted by over <span className="highlight">25 Million+</span> customers across 
                <span className="highlight"> 100+ cities</span>.
              </p>
            </div>
          </div>
        </div>
        <div  className="col-lg-7 home-right d-none d-lg-block"  >
        <div className="background_image">
                <div className="page_one_image">
                    <img 
                      src="https://media.assettype.com/homegrown%2Fimport%2Fvqjufqjysp-1499330430.jpg" 
                      alt="taxi-img" 
                      loading="lazy" 
                      className="taxi-image" 
                    />
                </div>
            </div>
        </div>
   
      </div>
      <div className="safety-img-container">
        <img src={safetyOverviewImage} alt="safety-img" className="img-fluid" loading="lazy" />
      </div>
      <div className="bike-img-mobile d-lg-none">
        <img 
          src="https://media.assettype.com/homegrown%2Fimport%2Fvqjufqjysp-1499330430.jpg" 
          alt="taxi-img" 
          className="img-fluid taxi-image" 
          loading="lazy" 
        />
      </div>
      <div className="row know-us-container">
        <div className="col-lg-6 order-2 order-lg-1 ">
          <Temp1 img1={whoWe1} img2={whoWe2}/>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 text-center text-lg-start py-3 py-lg-0 ">
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <h2>Know Us Better</h2>
            <span className="head-line"></span>
          </div>
          <p className="know-us-text mx-auto mx-lg-0">
            We have crossed 10 million happy customers and 100 million rides.
            Rapido is here to revolutionize intra-city travel as we bring you
            redefined comfort & convenience with our disruptive service model.
          </p>
        </div>
      </div>

      <div className="our-impact-container">
        <div className="container-1 text-center">
          <div className="d-flex flex-column align-items-center">
            <h2>Our Impact</h2>
            <span className="head-line"></span>
          </div>
          <p className="impact-text mx-auto px-4 px-md-0">
            Our presence in the country has changed the concept of intra-city
            travel and made last-mile connectivity affordable for all.
          </p>
        </div>
        <div className="container-2">
          <div className="box-1" >
          <div className="box">
            <img src={presence1} alt="presence-img" className="presence-img" loading="lazy" />
            <bold>25 M</bold>
            <p>Downloads</p>
          </div>
          </div>
          <div className="box-1"  >
          <div className="box">
          <img src={presence2} alt="presence-img" className="presence-img" />
            <bold>100 +</bold>
            <p>Cities</p>
          </div>
          </div> <div className="box-1" >
          <div className="box">
          <img src={presence3} alt="presence-img" className="presence-img" />
            <bold>1 M+</bold>
            <p>Captains</p>
          </div>
          </div> <div className="box-1" >
          <div className="box">
          <img src={presence4} alt="presence-img" className="presence-img" />
            <bold>10 M+</bold>
            <p>Customers</p>
          </div>
          </div>
        </div>
      </div>

      <div className="what-for-you-container mt-2 py-2">
      <div className="container-1 text-center">
          <div className="d-flex flex-column align-items-center">
            <h2>What's in it for you</h2>
            <span className="head-line"></span>
          </div>
          <Toggle toggleActive={toggleActive} setToggleActive={setToggleActive}/>
          {<Desc desc={(toggleActive === "Customers") ? customerDesc : captainDesc} />}
        </div>
      </div>

      <div className="customer-feed-container mt-2 py-2">
      <div className="container-1 text-center">
          <div className="d-flex flex-column align-items-center">
            <h2 className="px-5 ">Straight from the Customer's heart</h2>
            <span className="head-line"></span>
          </div>
          <Toggle toggleActive={toggleActive1} setToggleActive={setToggleActive1}/>
           <Slider1
feedback={(toggleActive1 === "Customers") ? homeFeedback : feedCaptains}
            />
        </div>
      </div>
      <div className="row know-us-container">
    
        <div className="col-lg-6 text-center  py-3 py-lg-0 " >
          <div 
          className="d-inline-flex flex-column align-items-center align-items-lg-start"
          >
            <h2 className="mx-auto">Rapido Business Solutions</h2>
            <span className="head-line"></span>
          </div>
          <p className="know-us-text mx-auto text-center text-lg-start ps-2">
          Get onboard with Rapido B2B services to earn more while you deliver. With highly reliable deliveries and a strong customer base, we are one of the fastest growing networks in the country. Sign up as a Rapido Partner for on-time services.
          </p>
  
        </div>
        <div className="col-lg-6 ">
          <Temp1 img1={business1} img2={business2}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
