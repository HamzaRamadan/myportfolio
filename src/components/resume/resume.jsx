import React from 'react'
import './resume.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { SiTypescript } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiJquery } from 'react-icons/si';
import { SiSass } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';

const resume = () => {
  return (
    <div className="container resume">
    <h1 className="resume-title">Resume</h1>

    <section className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
            <div className="skill-card">
                <i className="fab fa-react skill-icon"></i>
                <p>React JS</p>
            </div>
            <div className="skill-card">
            <SiNextdotjs className="skill-icon" />

                <p>Next.JS</p>
            </div>
            <div className="skill-card">
                <i className="fab fa-js skill-icon"></i>
                <p>JavaScript</p>
            </div>
            <div className="skill-card">
                <SiTypescript className="skill-icon" />
                <p>TypeScript</p>
            </div>
            <div className="skill-card ">
                <SiRedux className="skill-icon" />

                <p>Redux</p>
            </div>
            <div className="skill-card ">
                <SiSass className="skill-icon" />

                <p>Sass</p>
            </div>
            <div className="skill-card">
                <SiJquery className="skill-icon" />

                <p>jQuery</p>
            </div>
            <div className="skill-card">
                <i className="fab fa-html5 skill-icon"></i>
                <p>HTML</p>
            </div>
            <div className="skill-card">
                <i className="fab fa-css3-alt skill-icon"></i>
                <p>CSS</p>
            </div>
            <div className="skill-card">
                <i className="fab fa-bootstrap skill-icon"></i>
                <p>Bootstrap</p>
            </div>
            <div className="skill-card ">

                <SiTailwindcss className="skill-icon" />
                <p>Tailwind CSS</p>
            </div>
           
            <div className="skill-card">
                <i className="fab fa-github skill-icon"></i>
                <p>Git - GitHub</p>
            </div>
        </div>
    </section>
</div>

  )
}

export default resume