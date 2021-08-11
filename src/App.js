import React from "react";
import { Row, Col } from 'antd';
import Header from "./Components/Header.js";
import Features from "./Components/Features.js";
import About from "./Components/About.js";
import About2 from "./Components/About2.js";
import aboutimage from './images/about.mp4'
import aboutimage1 from './images/link_to_anywhere.mp4'
import aboutimage2 from './images/linktree-for-tiktok-hero-2.mp4'
import aboutimage3 from './images/website_security_8s.mp4'
import aboutimage4 from './images/linktree-for-tiktok-hero-2.mp4'
import downloadimage from './images/download.mp4'
import Footer from "./Components/Footer.js";
function App() {
  return (
    <div className="App">
      <Header />
     
     <About image={aboutimage1} title='Use it anywhere' para='Take your Linktree wherever your audience is, to help them to discover all your important content.'/>
     <About2 image={aboutimage2} title='Link to everywhere' para='Linktree is the launchpad to your latest video, article, recipe, tour, store, website, social post - everywhere you are online..'/> 
     <About image={downloadimage} title='Collect payments' para='From tips for your content, to donations for your projects, let your fans & followers support you in monetizing your passions.'/>
     <About2 image={aboutimage} title='Easily managed' para='Creating a Linktree takes seconds. Use our simple drag-and-drop editor to effortlessly manage your content.'/>
     <About image={aboutimage3} title='Safe, trusted, private' para='Privacy is non-negotiable. Linktree doesn’t track any personal data on your visitors, so your Linktree remains your place on the internet.'/>
     <Features/>
     <Footer/>
    </div>
  );
}

export default App;
