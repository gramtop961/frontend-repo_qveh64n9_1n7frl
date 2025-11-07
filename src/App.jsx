import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AboutSection, PortfolioSection, BlogSection, ContactSection } from './components/Sections';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Enable smooth scrolling on the document
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('scroll-smooth');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-50 text-slate-900">
      <Navbar />

      {/* Soft background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute top-24 left-10 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-200 rounded-full blur-3xl opacity-50" />
      </div>

      <main>
        <Hero />
        <AboutSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
