import Head from 'next/head';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Socials from '../components/Socials';
import { logo } from '../components/ImageExports';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GeoTech developers</title>
        <meta name='description' content='GeoTech Developers Limited official website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero
      logo={logo}
      heading='GeoTech Developers Ltd' 
      message='Investing on solid ground.' 
      action='Explore' 
      onClicked='/work#services'
      title='For all your Engineering and Construction needs'
      text='Construction, Architectural & Structural design, Plumbing, Electrical installation and HVAC services, Partitioning, Landscaping, Demolitions, Repair and Maintenance,  Road Construction and Water, Waste Water and Drainage'
      />
      <div className='h-screeen[25%]'></div>
      <Slider slides={SliderData} />
      <Socials />
      <Instagram />
    </div>
  );
}
