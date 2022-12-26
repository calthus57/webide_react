import logo from './logo.svg';
import './IdeIndex.css';
import {NavBar} from "./components/NavBar";
import {Banner} from './components/Banner';
import {Projects} from './components/Projects';
import {Skills} from './components/Skills';
import {Footer} from './components/Footer';
import {Contact} from './components/Contact';
import React from "react";
import {Nav} from "@douyinfe/semi-ui";
import {IconSemiLogo, IconStar, IconUser, IconUserGroup} from "@douyinfe/semi-icons";


function IdeIndex() {
  return (
    <div className="index">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default IdeIndex;
