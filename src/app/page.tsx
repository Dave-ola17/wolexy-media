import BackgroundSlider from '@/components/BackgroundSlider'
import Biography from '@/components/Biography';
import Navbar from '@/components/Navbar'
import Tab from '@/components/Tab';
import Footer from '@/components/Footer';


export default function Home() {
 

  return (
    <main className="">
      <Navbar />
      <BackgroundSlider />
      <Tab />
      <Biography />
      <Footer />
    </main>
  )
}
