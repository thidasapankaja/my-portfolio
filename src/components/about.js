import React from 'react';
import styled from 'styled-components'

const Highlight = styled.span`
  font-weight : 800;
`
const Paragraph = styled.p`
  color : #333;
  font-size : 28px;
  font-weight : 300;
`
const H1 = styled.h1`
  margin: -20px 0 -10px;
  font-size: 48px;
`

const About = () => {
    return (
        <div className='about'>
            <Paragraph>
                Hi ! I&apos;m{' '}
            </Paragraph>
            <H1> Thidasa Pankaja Paranavitharana.</H1>
            <Paragraph>
                I&apos;m a junior Fullstack developer @ <Highlight><a className='clickable-link' href='https://www.koku.io/' target="_blank" rel="noopener noreferrer">Koku </a></Highlight>. I&apos;m a Javascript
                enthusiast, who like to keep up with new technologies. I&apos;m on my way
                to specialize in JavaScript and my main area of interest is Fullstack
                Development.
            </Paragraph>
            <Paragraph>
                My skill set includes{' '}
                <Highlight>
                Javascript, React, Node, Angularjs, CSS, HTML, MSSQL, C#, ASP.NET Core, Java, Python, MySQL, Git
                </Highlight>{' '}
                and etc.👨 💻
            </Paragraph>
            <Paragraph>Besides coding, I&apos;m very passionate <Highlight><a className='clickable-link' href='https://500px.com/pankajanc' target="_blank" rel="noopener noreferrer">photographer </a>and a gamer</Highlight> 😎</Paragraph>
        </div>
    )
};

export default About;