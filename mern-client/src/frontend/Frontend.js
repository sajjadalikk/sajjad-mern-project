import React, { Component } from 'react'
import { Body } from "../components/body";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Features } from "../components/features";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";
import { Jobs } from "../components/jobs";
import SmoothScroll from "smooth-scroll";
import "../App.css";




export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });






export default class Frontend extends Component {
    render() {

        return (
           <div>
                <Body/>
                <Navigation />
                <Header />
                <Features />
                <About  />
                <Services  />
                <Jobs /> 
                <Gallery />
                <Testimonials />
                <Team  />
                <Contact  /> 
          </div>

        )
    }
    }
