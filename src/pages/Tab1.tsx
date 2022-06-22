import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import MovingTitle from "../components/MovingTitle";
import Coffee from "../components/Coffee";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import medium from "../images/medium.png";
import github from "../images/github.png";

const Tab1: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen class="tab-one-fullscreen">
        <div className="animation-container-homepage">
          <div className="narative">
           
            <div className="moving-title">
              <MovingTitle></MovingTitle>
            </div>
            <div>
              <p>
                As an Information System undergraduate at NUS, I am very much
                curious about everything computer science related. However, if I
                have to choose, I am probably most interested in the
                development of enterprise system.
              </p>
            </div>
            <div className = "social-media-pic">
              <a title = "Github" href = "https://github.com/ireneliee"><img className="individual-socmed-pic github" src={github} alt="Github" /></a>
              <a title = "Medium" href = "https://medium.com/@irenelie1412"><img className="individual-socmed-pic medium" src={medium} alt="Medium" /></a>
              <a title = "LinkedIn" href = "https://www.linkedin.com/in/irene-lie/"><img className="individual-socmed-pic linkedin" src={linkedin} alt="LinkedIn" /></a>
              <a title = "Twitter" href = "https://twitter.com/irenelie1412"><img className="individual-socmed-pic twitter" src={twitter} alt="Twitter" /></a>
              <a title = "Instagram" href = "https://www.instagram.com/thebrokennessgallery/"><img className="individual-socmed-pic instagram" src={instagram} alt="Instagram" /></a>
            </div>
          </div>

          <div className="coffee-machine">
            <Coffee></Coffee>
          </div>
        </div>
        <div></div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
