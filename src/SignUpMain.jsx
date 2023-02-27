import React from 'react';
import './SignUpMainStyle.css';
import BgVideo from "./assets/images/nav-video.mp4";

import FacebookLogo from "./assets/images/Icon metro-facebook.png"
import GoogleLogo from "./assets/images/Icon simple-google.png"
import MetamaskLogo2 from "./assets/images/Path 170.png"
import MetamaskLogo1 from "./assets/images/metamask.png"
import ConnetWalet from "./assets/images/Path 167.png"
import AppleLogo from "./assets/images/Icon awesome-apple.png"
import EmailLogo from "./assets/images/Icon material-email.png"
import FooterOpenLogo from "./assets/images/Polygon 1.png"
import BabylonLogo from "./assets/images/BABYLON.png"


const SignUpMain = () => {
  return (
    <div>
      <div className="signup-main-wrapper">
      <div className="bg-video">
      <video src={BgVideo}  autoPlay={"autoplay"}  muted preLoad="auto" loop />
      </div>
      <div className="babylon-signup-sec">
        <div className="row m-0 p-0 ">
          <div className="col-md-12 m-0 p-0" >
              <div className="main-container">
                <div className="babylon-signup-wraper">
                  <div className="babylon-logo">
                    <img src={BabylonLogo} alt="" />
                  </div>
                  <div className="join-babylon">
                    <p>Join the B-Club Experience <sup><img src="./assets/images/Group 933.png" alt="" /></sup> </p>
                  </div>
                  <div className="metamask-btn">
                    <button className="">
                      <img className="btn-inner-logo" src={MetamaskLogo1} alt="" />
                      <p>MetaMask</p>
                      <img className="btn-inner-logo2"  src={MetamaskLogo2} alt="" />
                    </button>

                    <button className="">
                      <img className="btn-inner-logo" src={ConnetWalet} alt="" />
                      <p>Connect Wallet</p>
                      <img className="btn-inner-logo2"  src={MetamaskLogo2} alt="" />
                    </button>

                    <button>
                      <img className="btn-inner-logo" src={FacebookLogo} alt="" />
                      <p>Facebook</p>
                      <img className="btn-inner-logo2"  src={MetamaskLogo2} alt="" />
                    </button>

                    <button className="">
                      <img className="btn-inner-logo" src={GoogleLogo} alt="" />
                      <p>Google</p>
                      <img className="btn-inner-logo2"  src="./assets/images/Path 170.png" alt="" />
                    </button>

                    <button className="">
                      <img className="btn-inner-logo" src={AppleLogo} alt="" />
                      <p>Apple</p>
                      <img className="btn-inner-logo2"  src="./assets/images/Path 170.png" alt="" /> 
                    </button>

                    <button className="">
                      <img className="btn-inner-logo" src={EmailLogo} alt="" />
                      <p>Email</p>
                      <img className="btn-inner-logo2"  src="./assets/images/Path 170.png" alt="" />
                    </button>
                    
                    <div className="signup-identity">
                      <p>For your security, we will ask you to verify your identity <sup><img src="./assets/images/Group 934.png" alt="" /></sup></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="pollSlider"> 
        <div className="footer" >
          <div className="right-col">
            <img   src="./assets/images/Group 332.png" alt="" />
          </div>
          <div className="left-col">
            <img className="btn-inner-logo" src="./assets/images/facebook.png" alt="" />
            <img className="btn-inner-logo" src="./assets/images/Twitter.png" alt="" />
            <img className="btn-inner-logo" src="./assets/images/Instagram.png" alt="" />
            <img className="btn-inner-logo" src="./assets/images/Youtube.png" alt="" />
          </div>
      </div>
      </div>
      <div id="pollSlider-button">
        <img src={FooterOpenLogo} alt="" />
      </div>

    </div>
    </div> 
  )
}

export default SignUpMain
