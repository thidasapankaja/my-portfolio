import React from "react"
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby';
import SEO from '../components/seo';

import './css/Contact.css';

const Contact = ({node}) => (
  <a
    href={node.url}
    target="_blank"
    rel="noopener noreferrer"
    key={node.key}
  >
    <img className='Image' alt={node.displayImage.title} src={node.displayImage.file.url} />
  </a>
)

export default () => (
  <Layout>
    <SEO title="Contact me" description="Contact me via any of the mentioned ways" />
    <h1 hidden>Contact Me</h1>
     <div className='Full-Content'>
      <div className='Topic'>
        Get in touch!
        <div className='Content'>
          <StaticQuery 
              query={graphql`
                query ContactsQuery{
                  allContentfulContact(sort:{fields:order,order:ASC}){
                    edges{
                      node{
                        id
                        name
                        url
                        displayImage {
                          title
                          file{
                            url
                          }
                        }
                      }
                    }
                  }
                }
              `}

              render = {({allContentfulContact}) => (
                <div>
                  {allContentfulContact.edges.map((p, i) => (
                      <Contact key={p.node.id} {...p} />
                  ))}
                </div>
              )}
          />
        </div>
      </div>
    </div>  
  </Layout>
)