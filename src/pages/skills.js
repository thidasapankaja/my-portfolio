import React from 'react';
import Layout from '../components/layout';
import { StaticQuery, graphql } from 'gatsby';

import '../components/layout.css';
import './css/Skills.css';

const SKill = ({node}) => {
  return <span key={node.id}><img alt={node.skill} src={node.displayImage.file.url}/></span>
}
const Skills = () => (
  <Layout>
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
              <div>
                {dev.edges.map((p, i) => (
                  <SKill key={p.id} {...p} />
                ))}
              </div>
                <div className="Design">
                {design.edges.map((p, i) => (
                  <SKill key={p.id} {...p} />
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