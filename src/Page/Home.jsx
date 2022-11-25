import React from 'react'
import { Hero } from '../Component'
import {heroapi} from '../data/data'

const Home = () => {


  return (
    <Hero heroapi={heroapi}/>
  )
}

export default Home