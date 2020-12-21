import React, { Fragment } from 'react';

import GridCard from '../components/GridCard';

import angular from '../images/programacion/angular-color.svg';
import react from '../images/programacion/react.svg';
import nodejs from '../images/programacion/nodejs-color.svg';
import css3 from '../images/programacion/css3.svg';
import html5 from '../images/programacion/HTML5.svg';
import mysql from '../images/programacion/mysql-color.svg';
import javascript from '../images/programacion/javacript.svg';
import bootstrap from '../images/programacion/bootstrap.svg';
import php from '../images/programacion/php-color.png';
import aws from '../images/programacion/aws.svg';
import marvelApp from '../images/programacion/marvelapp.svg';
import tailwind from '../images/programacion/tailwindcss.svg';
import sass from '../images/programacion/sass.svg';


import Header from '../components/Header';

const Skills = () => {

  const softSkills = [{
    image: angular,
    title: 'Angular',
    description: 'Framework css',
    level: 'Básico',
    type: 'Frontend'
  },{
    image: nodejs,
    title: 'nodejs',
    description: 'Framework javascript',
    level: 'Básico',
    type: 'Backend'
  },{
    image: react,
    title: 'React',
    description: 'Framework css',
    level: 'Básico',
    type: 'Frontend'
  },{
    image: tailwind,
    title: 'Tailwind',
    description: 'Framework css',
    level: 'Básico',
    type: 'css'
  },{
    image: sass,
    title: 'Saas',
    description: 'Framework css',
    level: 'Básico',
    type: 'preprocessor'
  },{
    image: css3,
    title: 'CSS3',
    description: 'CSS',
    level: 'Intermedio',
    type: 'Base'
  },{
    image: html5,
    title: 'HTML5',
    description: 'HTML5',
    level: 'Intermedio',
    type: 'Base'
  },{
    image: javascript,
    title: 'Javascript',
    description: 'Javascript',
    level: 'Intermedio',
    type: 'Base'
  },{
    image: bootstrap,
    title: 'Bootstrap',
    description: 'Framework css',
    level: 'Intermedio',
    type: 'css'
  },{
    image: mysql,
    title: 'Mysql',
    description: 'Sistema Gestor de Base de Datos',
    level: 'Intermedio',
    type: 'BaseDatos'
  },{
    image: php,
    title: 'PHP 7',
    description: 'Lenguaje de programación',
    level: 'Intermedio',
    type: 'Backend'
  },{
    image: marvelApp,
    title: 'MarvelApp',
    description: 'Diseño UI',
    level: 'Intermedio',
    type: 'UI'
  },{
    image: aws,
    title: 'AWS',
    description: 'Servicio en la nube',
    level: 'Básico',
    type: 'Cloud'
  }];

  return (
    <Fragment>
      <Header></Header>
      <section className="relative px-32 py-32 flex ">
        <div className="absolute left-0 right-0 top-0 pb-2 m-auto text-black w-32 text-center pt-12 text-3xl border-b-2 border-red-500 shadow-sm">My skills</div>
        <div className="w-2/4 flex flex-col justify-center items-center bg-gray-100">
          <span className="font-semibold text-3xl text-gray-200 mb-4">Nivel de habilidades :</span>
          <ul>
            <li className="text-purple-400 flex">Nivel Básico     <div className="bg-red-500 w-40 "></div></li>
            <li className="text-purple-400 flex">Nivel Intermedio <div className="bg-green-500 w-40 "></div></li>
            <li className="text-purple-400 flex">Nivel Avanzado   <div className="bg-blue-500 w-40 "></div></li>
          </ul>
        </div>
        <div className="w-2/4 opacity-80 shadow-lg pt-8 bg-gradient-to-r from-green-400 to-blue-500">
          <h1 className="text-center text-black font-bold font-mono text-2xl mx-10">Esta son algunas de las herramientas que manejo</h1>
          <GridCard softSkills={softSkills} />
        </div>
      </section>
    </Fragment>
  )
}

export default Skills;