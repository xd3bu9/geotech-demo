import Head from 'next/head';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Socials from '../components/Socials';
import { newLogo, logo } from '../components/ImageExports';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GeoTech developers</title>
        <meta name='description' content='GeoTech Developers Limited official website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div class="flex p-2 flex-1">
          <img class="object-cover overflow-hidden rounded-2xl" src={newLogo} alt="image" height="90" width="250" />
        </div>
      <Hero
      logo="geotech-logo1.png"
      heading='GeoTech Developers Ltd' 
      message='Investing on solid ground.' 
      action='Explore' 
      onClicked='/work#services'
      title='For all your Engineering and Construction needs'
      text='Construction, Architectural & Structural design, Plumbing, Electrical installation and HVAC services, Partitioning, Landscaping, Demolitions, Repair and Maintenance,  Road Construction and Water, Waste Water and Drainage'
      />
      <Slider slides={SliderData} />
      <Socials />
      <Instagram />
    </div>
  );
}
