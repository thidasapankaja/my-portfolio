import React, { Component } from "react";
import styled from 'styled-components';

import Layout from '../components/layout';

import www from '../assets/www.svg';
import github from '../assets/github.svg';

import '../components/layout.css'
import './css/Projects.css';

const TechStack = styled.span`
color : hsl(0,0%,13%);
  font-weight : 600;
`
const Title = styled.h3`
  color : hsl(0,0%,13%);
  font-weight : 800;
  padding-top : -30px;
  margin-bottom : -1px;
  font-size : 50px;
`
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "Old Sinhala Book Digitizer",
          description: `
    A system to digitize old Sinhala books which were published in between 1950 - 1970. 
    My contribution was to develop an OCR correction system and an Author identification system.
  `,
          special: {
            description: 'This was a research project which we published the research paper on ',
            link: 'https://ieeexplore.ieee.org/document/8615585?fbclid=IwAR2Z7CU91jPzymMPnGibIo963EUmPTu1rCipNIT2uAdCqTOMlVHeNIuUsoo',
            placeholder: 'Summarization based approach for Old Sinhala Text Archival Search and Preservation',
            descriptionSecondary: 'at 2018 18th International Conference on Advances in ICT for Emerging Regions (ICTer).'
          },
          tech: 'Python, NLP, NLTK, Tkinter',
          github: "",
          live: "",
        },
        {
          title: "Virtual Architect market",
          description: `
    An Online portal to connect customers and architects together.
  `,
          tech: 'PHP, Javascript, JQuery, Blender, d3.js',
          github: "",
          live: "",
        },
        {
          title: "Automated Juice Maker",
          description: `Automated Juice Maker for the preferred amount of ingredients.`,
          tech: 'Microcontroller, C, Microcontrollers, PIC Programming',
          github: "",
          live: "",
        },
        {
          title: "Hackernews Finder",
          description: 'Simple Hackernews Clone',
          tech: 'Javascript, ReactJS, Material-ui, HN algolia API',
          github: "https://github.com/pankaja92/hackernews-clone-without-redux",
          live: "https://hackernews-app.herokuapp.com/",
        },
        {
          title: "Movie Finder",
          description: 'Find Important details of Movies',
          tech: 'Javascript, ReactJS, MovieDB API',
          github: "https://github.com/pankaja92/movie-search",
          live: "https://limitless-sea-65223.herokuapp.com/",
        },
        {
          title: "Live Weather App",
          description: 'Display Live weather in your location',
          tech: 'Javascript, React, forismatic API, CORS API',
          github: "https://github.com/pankaja92/weather-app",
          live: "https://curent-location-weather.herokuapp.com/",
        },
        {
          title: "Newsletter",
          description: 'Simple Newsletter Subscription Component',
          tech: 'Javascript, ReactJS',
          github: "https://github.com/pankaja92/newsletter-subscription",
          live: "https://subscribe-newsletter.herokuapp.com/",
        },
        {
          title: "React simple Search",
          description: 'Simple Search through static List',
          tech: 'Javascript, ReactJS',
          github: "https://github.com/pankaja92/react-simple-search",
          live: "https://react-simple-search.herokuapp.com/",
        },
        {
          title: "Random Quote Generator",
          description: 'Generate random quotes from and Quote API',
          tech: 'Javascript, ReactJS, forismatic API, CORS API',
          github: "https://github.com/pankaja92/random-quote-generator",
          live: "http://generate-random-quote.herokuapp.com/",
        },
      ],
      visible: false,
      selected: {
        title: "",
        github: "",
        live: ""
      }
    };
  }

  render() {
    const Checkstatus = (project) => {
      if (project.github !== "") {
        return (
          <span>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <img alt='website' className="Image" src={www} />
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img alt='github' className="Image" src={github} />
            </a>
          </span>
        )
      }
      else {
        return;
      }
    };

    return (
      <Layout>
          <div>
            {this.state.projects.map(project => (
          <div key={project.title} className='Card'>
            <div className='Full'>
              <Title>{project.title}</Title>
              <p><span>{project.description}</span></p>
              {project.special ? 
                <span style={{ color: 'white'}}>{project.special.description}
                  <a style={{ color: 'white'}} href={project.special.link} target="_blank" rel="noopener noreferrer">
                    {project.special.placeholder}
                  </a> {project.special.descriptionSecondary}
                </span> 
                : ''}
              <p><TechStack>{project.tech}</TechStack></p>
              <div className="Links">
                {Checkstatus(project)}
              </div>
            </div>
          </div>
        ))}
      </div>
      </Layout>
    );
  }
}

export default Projects;