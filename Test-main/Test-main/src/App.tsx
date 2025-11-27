import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Company } from './components/Company';
import { CaseStudies } from './components/CaseStudies';
import { Recruitment } from './components/Recruitment';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Company />
        <CaseStudies />
        <Recruitment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
