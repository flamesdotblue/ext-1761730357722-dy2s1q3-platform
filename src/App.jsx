import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuShowcase from './components/MenuShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <MenuShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
