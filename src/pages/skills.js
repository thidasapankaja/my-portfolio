import React from 'react';
import Layout from '../components/layout';

import node from '../assets/Skills/nodejs.svg';
import javascript from '../assets/Skills/javascript.svg';
import java from '../assets/Skills/Java.svg';
import php from '../assets/Skills/php.svg';
import angular from '../assets/Skills/angular.svg';
import python from '../assets/Skills/python.svg'
import es6 from '../assets/Skills/es6.svg';
import react from '../assets/Skills/react.svg';
import mysql from '../assets/Skills/mysql.svg';
import lightroom from '../assets/Skills/lightroom.svg';
import photoshop from '../assets/Skills/photoshop.svg';

import '../components/layout.css';
import './css/Skills.css';

const Skills = () => (
  <Layout>
      <div className='Full-Content-Skills'>
    <div>
      <span><img src={javascript} /></span>
      <span><img src={react} /></span>
      <span><img src={angular} /></span>
      <span><img src={es6} /></span>
      <span><img src={java} /></span>
      <span><img src={php} /></span>
      <span><img src={python} /></span>
      <span><img src={node} /></span>
      <span><img width='500px' src={mysql} /></span>
    </div>
    <div className='Design'>
      <span><img src={photoshop} /></span>
      <span><img src={lightroom} /></span>
    </div>
  </div>
  </Layout>
);

export default Skills;