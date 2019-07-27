import React from 'react';
import styled from 'styled-components';

import githubImage from '../assets/github.svg';
import www from '../assets/www.svg';

const TechStack = styled.span`
  font-weight : 400;
`
const Title = styled.h3`
  font-weight : 700;
  padding-top : -30px;
  margin-bottom : -1px;
  font-size : 48px;
  @media (max-width: 600px) {
    font-size: 28px;
  }
`

const Checkstatus = (github, live) => {
  if (github !== null && live === null) {
    return(
      <span>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img alt='github' className="Image" src={githubImage} />
        </a>
      </span>
    )
  }
  else if(github === null && live !== null){
    return(
      <span>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <img alt='website' className="Image" src={www} />
        </a>
      </span>
    )
  }
  else if(github !== null && live !== null){
    return(
      <span>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img alt='github' className="Image" src={githubImage} />
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer">
          <img alt='website' className="Image" src={www} />
        </a>
      </span>
    )
  }
  else {
    return;
  }
  };

const Project = ({ node }) => {
    return(
      <div key={node.id}  className='Card'>
        <div className='Full'>
            <Title>{node.title}</Title>
            <p><span className='justify-text'>{node.description.description}</span></p>
            {node.projectSpecial ? 
                <span style={{ color: 'white'}} className='justify-text'>
                  {node.projectSpecial.description.description}
                  <a style={{ color: 'white'}} href={node.projectSpecial.link} target="_blank" rel="noopener noreferrer">
                      {node.projectSpecial.placeholder}
                  </a> {node.projectSpecial.descriptionSecondary.descriptionSecondary}
                </span> 
                : ''}
            <p><TechStack>{node.tech}</TechStack></p>
            <div className="Links">
                {Checkstatus(node.githubUrl, node.liveUrl)}
            </div>
        </div>
      </div>
    )
}

export default Project;