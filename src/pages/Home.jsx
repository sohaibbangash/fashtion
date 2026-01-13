import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Card from '../components/Card-section';
import Brand from "../components/Brand";
import Deal from "../components/Deal";
import Collection from "../components/Collection";
import SubscriptionBar from '../components/SubscriptionBar';
import Footer from '../components/footer';
const Home = () => {
  return (
<>
  <Navbar />
  <main>
    <Hero />
    <Card />
    <Brand />
    <Deal/>
    <Collection />
    <SubscriptionBar/>
  </main>
  <Footer/>
</>

  )
}

export default Home
