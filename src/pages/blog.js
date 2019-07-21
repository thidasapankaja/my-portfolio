import React from 'react';
import Layout from '../components/layout';
import { StaticQuery, graphql } from 'gatsby';
import SEO from '../components/seo';

import BlogItem from '../components/BlogItem';

import '../components/layout.css';
import './css/Blog.css';

const Blogs = () => (
  <Layout>
    <SEO title="My Blog posts" description="List of articles of Thidasa Pankaja Paranavitharana" />
    <h1 hidden>My Blog posts</h1>
    <div className='Container'>
      <div>
        <StaticQuery
          query={graphql`
            query BlogsQuery{
                allContentfulBlog(sort:{fields:createdAt, order:DESC}) {
                    edges {
                        node {
                            id
                            title
                            link
                            date
                        }
                    }
                }
            }
          `}
          render={({ allContentfulBlog }) => (
            <div key='projects'>
              {allContentfulBlog.edges.map(({node}) => (
                <BlogItem {...node} />
              ))}
            </div>
        )}
        /> 
      </div>
    </div>       
  </Layout>
);

export default Blogs;