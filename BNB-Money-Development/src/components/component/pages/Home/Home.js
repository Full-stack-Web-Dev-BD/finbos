import React from 'react'
import About from '../../components/About/About'
import Affiliate from '../../components/Affiliate/Affiliate'
import Faq from '../../components/Faq/Faq'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Invest from '../../components/Invest/Invest'
import Navbar from '../../components/Navbar/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Invest />
      <Affiliate />
      <Faq />
      <Footer />
    </div>
  )
}
