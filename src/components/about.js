import React from 'react';
import styled from 'styled-components'

const Highlight = styled.span`
  font-weight : 800;
`
const Paragraph = styled.p`
  font-size : 28px;
  font-weight : 300;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`
const H1 = styled.h1`
  margin: -20px 0 -10px;
  font-size: 48px;
  @media (max-width: 600px) {
    font-size: 28px;
  }
`

const About = () => {
    return (
      <div className='about'>
        <Paragraph>
            Hi ! I&apos;m{' '}
        </Paragraph>
        <H1> Thidasa Pankaja Paranavitharana.</H1>
        <Paragraph className='justify-text'>
            I&apos;m a junior Fullstack developer @ <Highlight><a className='clickable-link' href='https://www.koku.io/' target="_blank" rel="noopener noreferrer">Koku </a></Highlight>. I&apos;m a Javascript
            enthusiast, who like to keep up with new technologies. I&apos;m on my way
            to specialize in JavaScript and my main area of interest is Fullstack
            Development.
        </Paragraph>
        <Paragraph className='justify-text'>
            My skill set includes{' '}
            <Highlight>
            Javascript, React, Node, GraphQL Angularjs, CSS, HTML, MSSQL, C#, ASP.NET Core, MySQL, Git
            </Highlight>{' '}
            and etc.👨 💻
        </Paragraph>
        <Paragraph className='justify-text'>In my spare time, I try different technologies with hobby projects. Besides coding, I&apos;m very passionate <Highlight><a className='clickable-link' href='https://500px.com/pankajanc' target="_blank" rel="noopener noreferrer">photographer </a>and a gamer</Highlight> 😎</Paragraph>
      </div>
    )
};

export default About;