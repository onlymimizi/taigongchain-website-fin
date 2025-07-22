import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import Verifier from './components/Verifier'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Dashboard />
      <Verifier />
      <Footer />
    </>
  )
}

export default App
