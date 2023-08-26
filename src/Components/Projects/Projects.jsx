import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import Portfolyo from "../../assets/po.png";
import SP from "../../assets/logo-512x512.png";
import GeekConnect from "../../assets/logo.png";
import BeingBest from "../../assets/beingbest.jpg";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Portfolyo}
                    alt="Rockstar Games"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PORTFOLYO</h2>
                <p>
                Portfolyo is a web application we developed, featuring secure user registration, personalized portfolio management, customizable templates, and responsive design for optimal cross-device usability.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
    
                </div>
                <div>
                  
                  <a
                    href="https://github.com/Portfolyo-mern/portfolyo-mern"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={SP}
                    alt="Sk-Weather-App"

                  />
                </div>
              </div>
              <div className="project_information">
                <h2>SHIKSHAK PRABANDAN</h2>
                <p>
                ShikshakPrabandan: A Smart India Hackathon 2022 web app for comprehensive teacher management. Includes user, admin, and superadmin panels, covering recruitment to retirement and facilitating teacher and school management.
                </p>
                <div>
                <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://docs.google.com/presentation/d/1Ek3vau_ILcCp3OxEmCu-UHYMkx8QqrvBAyZ_j6olFzE/edit#slide=id.g1204ed91e08_4_75"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Details
                    </span>
                  </a>
                  <a
                    href="https://github.com/harshavb08/shikshak-prabandan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={GeekConnect} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>
                  Geek Connect
                </h2>
                <p>
                

Geek Connekt is a web application that creates a private social network, uniting students, teachers, and institution management for streamlined information sharing and communication.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://docs.google.com/presentation/d/1iM8wrGGdGPkKH2XFI6we9vScAFrbLVir/edit?usp=sharing&ouid=101431720661982722802&rtpof=true&sd=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Details
                    </span>
                  </a>
                  <a
                    href="https://github.com/akshaymurari/Geek_Connekt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={BeingBest}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>
                  Being Best
                </h2>
                <p>
                I contributed to crafting a mobile-friendly website for "Being Best" Instagram, enhancing webinar access and product sales, aligning design with seamless user experience.
                Also I have done SEO for this website.
              

               
                </p>
                <div>
                  <FaReact />

                </div>
                <div>
                  <a
                    href="https://64de4c8e822d0c25812f34fc--tranquil-crisp-f4235d.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Demo - 1
                    </span>
                  </a>
                  <a
                    href="https://64cd23af4077e02e4b8fe807--cheerful-monstera-66e43f.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Demo - 2
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/32812640/89111197-799d5080-d470-11ea-83c7-08e0f356b923.gif"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>
                  News IO
                </h2>
                <p>
                "New IO" is a React-based web app that leverages the NewsAPI to offer a platform for accessing news content. Its interface and features are built to provide a user-friendly and efficient news browsing experience.
                </p>
                <div>
                  <FaReact/>
                </div>
                <div>
                 
                  <a
                    href="https://github.com/kranthi0212/newsio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};
