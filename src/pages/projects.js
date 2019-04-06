import React, { Component } from "react";
import { StaticQuery, graphql } from 'gatsby';
import Project from '../components/project';

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
                <div>
                {allContentfulProject.edges.map((p, i) => (
                    <Project key={p.id} {...p} />
                ))}
                </div>
            )}
            />
     
      </Layout>
    );
  }
}

export default Projects;