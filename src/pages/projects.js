import React, { Component } from "react";
import { StaticQuery, graphql } from 'gatsby';
import Project from '../components/project';
import SEO from '../components/seo';

import Layout from '../components/layout';

import '../components/layout.css'
import './css/Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selected: {
        title: "",
        github: "",
        live: ""
      }
    };
  }

  render() {
    return (
      <Layout>
        <SEO title="My projects" description="Projects which were completed/contributed by me"/>
        <h1 hidden>My Projects</h1>
        <StaticQuery
            query={graphql`
                query ProjectsQuery {
                  allContentfulProject(sort:{fields:order,order:ASC}){
                    edges{
                      node{
                        id
                        title
                        description{
                          description
                        }
                        liveUrl
                        githubUrl
                        projectSpecial{
                          description{
                            description
                          }
                          descriptionSecondary{
                            descriptionSecondary
                          }
                          link
                          placeholder
                        }
                      }
                    }
                  }
                }
            `}
            render={({ allContentfulProject }) => (
                <div key='projects'>
                  {allContentfulProject.edges.map((p, i) => (
                      <Project {...p} />
                  ))}
                </div>
            )}
            />
     
      </Layout>
    );
  }
}

export default Projects;