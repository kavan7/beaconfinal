import { Link } from "react-router-dom";

import { footerLinks } from "../constants/Footer";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Rocks } from "./Rocks";
import { OrbitControls } from "@react-three/drei";

const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        
        <h5 className='text-base text-gray-700'>
          The Beacon  <br />
          All Rights Reserved &copy;
        </h5>
      </div>

      
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <h5>@2024 The Beacon. All rights reserved</h5>

      <div className="footer__copyrights-link">
        
        <a target='_blank'
            rel='noopener noreferrer' href="https://mcibeacon.com">Visit our old website!</a>
      </div>
    </div>
    <Canvas camera={{  fov: 35,  position: [0, 0, 0]}}>
      <Suspense fallback={null}>
        <ambientLight/>
        <directionalLight intensity={0.5} position={[0, 0, 80]} />       
        
          <Rocks/>
          <OrbitControls enableZoom={false} enableRotate={false}   />
        </Suspense>
      </Canvas>
  </footer>
);

export default Footer;