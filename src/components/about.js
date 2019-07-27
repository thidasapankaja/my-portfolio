import React from 'react';
import styled from 'styled-components'

const Highlight = styled.span`
  font-weight : 700;
`

const About = () => {
    return (
      <div className='about'>
        <p className='about-p '>
            Hi ! I&apos;m{' '}
        </p>
        <h1 className='about-h1'> Thidasa Pankaja Paranavitharana.</h1>
        <p className='about-p justify-text'>
            I&apos;m a Software Engineer @ <Highlight><a className='clickable-link' href='https://www.koku.io/' target="_blank" rel="noopener noreferrer">Koku</a></Highlight>. I&apos;m a Javascript
            enthusiast, who like to keep up with new technologies. My main area of interest is Fullstack Development. I&apos;m working towards my goal of becoming a better Software Engineer.
        </p>
        <p className='about-p justify-text'>
            My skill set includes{' '}
            <Highlight>
            Javascript, React, Node, GraphQL, MSSQL, C#, ASP.NET Core, CSS, HTML, MySQL, Git Angularjs
            </Highlight>{' '}
            and etc.👨 💻
        </p>
        <p className='about-p justify-text'>In my spare time, I try different technologies with hobby projects. Besides coding, I&apos;m very passionate <Highlight><a className='clickable-link' href='https://500px.com/pankajanc' target="_blank" rel="noopener noreferrer">photographer </a>and a gamer</Highlight> 😎</p>
      </div>
    )
};

export default About;