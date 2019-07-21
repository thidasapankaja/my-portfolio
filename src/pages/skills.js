import React from 'react';
import Layout from '../components/layout';
import { StaticQuery, graphql } from 'gatsby';
import SEO from '../components/seo';

import '../components/layout.css';
import './css/Skills.css';

const Skill = ({node}) => {
  return <span key={node.id}><img alt={node.skill} src={node.displayImage.file.url}/></span>
}

const Skills = () => (
  <Layout>
    <SEO title="My skills" description="Skills of Thidasa Pankaja Paranavitharana" />
    <h1 hidden>My Skills</h1>
    <div className='Full-Content-Skills'>
      <div>
        <StaticQuery
          query={graphql`
            query {
              dev : allContentfulSkill(filter:{type:{eq:"dev"}}, sort:{fields:order,order:ASC}){
                      edges{
                        node{
                          id
                          skill
                          displayImage{
                            file{
                              url
                            }
                          }
                        }
                      }
                    }
              design : allContentfulSkill(filter:{type:{eq:"design"}}, sort:{fields:order,order:ASC}){
                        edges{
                          node{
                            id
                            skill
                            displayImage{
                              file{
                                url
                              }
                            }
                          }
                        }
                      }  
            }
          `}
          render={({ dev, design }) => (
            <>
              <div key='dev'>
                {dev.edges.map((p, i) => (
                  <Skill {...p} />
                ))}
              </div>
              <div className="Design" key='design'>
                {design.edges.map((p, i) => (
                  <Skill {...p} />
                ))}
              </div>
            </>
          )}
        /> 
      </div>
    </div>       
  </Layout>
);

export default Skills;