// import hero component
import Header from './components/Home/Header';
import Hero from './components/Home/Hero';
import AboutUs from './components/Home/AboutUs';
import BottomHero from './components/Home/BottomHero';
import OurService from './components/Home/OurService';
import MakeAppointmetn from './components/Home/MakeAppointmetn';

export default function Home() {
  return (
  <main className=' relative'>
    <Header />
    <Hero />
    <AboutUs />
    <BottomHero />
    <OurService />
    <MakeAppointmetn />
  </main>
  );
}
