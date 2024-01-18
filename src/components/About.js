import React from 'react';


import CountUp from 'react-countup';

import {useInView} from 'react-intersection-observer';
 
//motion 
import {motion} from 'framer-motion';

//variant
import {fadeIn} from '../variants';

const About = () => {
  const [ref , inView] = useInView({
    threshold : 0.5,
  });

  return (
  <section  className='section' id='about' ref={ref} >
    <div className='container mx-auto'>

     <div>
      {/* image */}
      <div className='flex-1 bg-about bg-contain bg-no-repeat h-[510px] mix-blend-lighten bg-top'></div>

        {/* text */}
        <div>
        <h2>About me.</h2>
        <h3>
        I'm a freelance front-end with over 5 years of experience.
        </h3>
        <p>
        In the heart of me, there city with steel structures and scattered spirits.
            Streets are filled with mysterious shadows and sudden silences.
        </p>
       {/* stats */}
       <div>
        <div>

        <div>

        </div>

          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
  );    
};

export default About;
