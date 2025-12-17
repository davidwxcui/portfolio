import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import AiChatAssistant from './components/AiChatAssistant';

function App() {
  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] selection:bg-[#0071e3] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
      <AiChatAssistant />
    </div>
  );
}

export default App;