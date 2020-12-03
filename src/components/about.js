import React from "react"
import styled from "styled-components"

const Highlight = styled.span`
  font-weight: 700;
`

const About = () => {
  return (
    <div className="about">
      <p className="about-p ">Hi ! I&apos;m </p>
      <h1 className="about-h1"> Thidasa Pankaja Paranavitharana.</h1>
      <p className="about-p justify-text">
        I&apos;m a Software Engineer at{" "}
        <Highlight>
          <a
            className="clickable-link"
            href="https://www.twire.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twire
          </a>
        </Highlight>
        , currently working on{" "}
        <Highlight>
          <a
            className="clickable-link"
            href="https://www.appspotr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Appspotr
          </a>
        </Highlight>
        . I&apos;m a Javascript enthusiast, who likes to keep up with the new
        technologies. My main area of interest is Fullstack Development.
        I&apos;m working towards my goal of becoming a better Software Engineer.
      </p>
      <p className="about-p justify-text">
        My skill set includes{" "}
        <Highlight>
          Javascript, React, Go, React-native, PostgreSQL, Node, GraphQL, MSSQL, C#, .NET
          Core, CSS, HTML, MySQL, Git, Angularjs
        </Highlight>{" "}
        and etc.👨 💻
      </p>
      <p className="about-p justify-text">
        In my spare time, I try different technologies with hobby projects.
        Besides coding, I watch football and I&apos;m a passionate{" "}
        <Highlight>
          <a
            className="clickable-link"
            href="https://500px.com/pankajanc"
            target="_blank"
            rel="noopener noreferrer"
          >
            photographer{" "}
          </a>
          and a gamer.
        </Highlight>{" "}
        📷 🎮 😎 
      </p>
    </div>
  )
}

export default About
