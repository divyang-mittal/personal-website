import React, { Component } from 'react';
import './app.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import ProfileImage from './Profile.png';

class About extends Component {
  render () {
      return (
          <div class="About">
            <div class="AboutText"> 
              <p class="Text">
               I am a Master of Science in Computer Science student at Columbia University, pursuing the software systems track. I have worked as a Software Developer in the Data Platform team at <a href="https://www.appdynamics.com/">Cisco AppDynamics</a> for two years. I worked as a backend developer where I took charge of end-to-end development of features in the microservices, ranging from design, development to deployment. I completed my Bachelor’s in Computer Science and Engineering from <a href = "https://www.iitkgp.ac.in/">Indian Institute of Technology Kharagpur</a>.
              </p>
            </div>


          <div class="AboutImage">
            <img src={ProfileImage} alt="react" height="250px" width="300px" />
          </div>
            
          </div>
          
      );
  }
  
}

export default class App extends Component {
  state = { username: null };
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    // const { username } = this.state
    const MenuBar = () => {
      return (
        <div class="MenuBar">
          <button class="MenuButton"><span>Home</span></button>
          <button class="MenuButton"><span>About</span></button>
          <button class="MenuButton"><span>Research</span></button>
          <button class="MenuButton"><span>Software</span></button>
        </div>
      );
    };

    const IntroSection = () => {
      return (
        <div class="Intro">
          <h1>Divyang Mittal</h1>
          <h3>MS CS Student at <a class="links" href="https://www.columbia.edu/">Columbia University</a></h3>
          <p textsize="22px"><a href="https://github.com/divyang-mittal"><FaGithub size="22px"/></a>  |  <a href="https://www.linkedin.com/in/divyang-mittal/"><FaLinkedin size="22px"/></a>  |  <a href="https://scholar.google.com/citations?hl=en&user=_BgJ5I0AAAAJ"><SiGooglescholar size="22px"/></a>  |  <a href="mailto:dm3880@columbia.edu"><CiMail size="22px"/></a></p>
        </div>
        
      );
    }

    return (
      <div>
        <MenuBar />
        <IntroSection />        
        <About />
      </div>
    );
  }
}
