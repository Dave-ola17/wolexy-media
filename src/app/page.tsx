import Navbar from '@/components/Navbar'
import Image from 'next/image'


const images = [
  {
    url: '/wolexy/qudus 1 (1).jpg'
  },
  {
    url: '/wolexy/wolexyImage6.jpg'
  },
  {
    url: '/wolexy/sharon4.jpg'
  },
  {
    url: '/wolexy/wolexyImage2.jpg'
  },
  {
    url: '/wolexy/david 4.jpg'
  },
]

export default function Home() {
 

  return (
    <main className="">
      <Navbar />
      <section id='contact' className=' text-white h-screen bg-gray-300 text-center '>
        <h1 className=' m-auto font-waterfall text-7xl text-purple-600 font-bold '>Contact Us</h1>
      </section>
      <section id='gallery' className='   m-auto h-screen  text-7xl bg-white '>
        <h1 className=' m-auto font-waterfall text-7xl font-waterfall text-purple-600 font-bold '>Gallery</h1>
      </section>
      <section id='about' className='   m-auto h-screen font-waterfall text-7xl bg-black '>
        <h1 className=' m-auto font-waterfall text-7xl text-purple-600 font-bold '>About Us</h1>
      </section>
    </main>
  )
}
