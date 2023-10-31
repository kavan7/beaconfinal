import React from 'react';
import instagram from '../assets/instagram.svg';
import './Members.css'; // Import the CSS file
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { editorsInChief,managingEditor,copyEditors,layoutHead,comicsIllustrationsHead,photographyHead,webTeamHead,secretary,publicityHead,columnist } from '../constants/Event';

const Members = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      staggerContainer
      viewport={{ once: true, amount: 0.25 }}
      className="px-[100px]"
    >
      <motion.div variants={textVariant()}
className='' >
  <h1 className={`members-container mr-11 ${styles.heroSubText} uppercase underline`}>Editors in Chief</h1>
      <div className="members-container ">
        
        {editorsInChief.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium">
              <div className="mt-0 flex flex-col gap-8">
                <li className="member-item">
                  <div className="member-info">
                  <motion.div variants={textVariant()}
className='' >
                    <img src={member.pfp} alt={member.name} className="member-image" />
                    </motion.div>
                    <div className='flex-col'>
                    <h3 className="member-name ">{member.name}</h3>
                   
                    
                    
                    </div>
                  </div>
                  
                  <a href={member.iglink} className="w-5 align-center mr-4">
                    <img src={instagram} alt="ig" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
      <motion.div variants={textVariant()}
className='' >
  <h1 className={`members-container mr-11 ${styles.heroSubText} uppercase underline`}>Managing Editor</h1>
      <div className="members-container ">
        
        {managingEditor.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium">
              <div className="mt-0 flex flex-col gap-8">
                <li className="member-item">
                  <div className="member-info">
                  <motion.div variants={textVariant()}
className='' >
                    <img src={member.pfp} alt={member.name} className="member-image" />
                    </motion.div>
                    <div className='flex-col'>
                    <h3 className="member-name ">{member.name}</h3>
                   
                    
                    
                    </div>
                  </div>
                  
                  <a href={member.iglink} className="w-5 align-center mr-4">
                    <img src={instagram} alt="ig" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
      <motion.div variants={textVariant()}
className='' >
  <h1 className={`members-container mr-11 ${styles.heroSubText} uppercase underline`}>Copy Editors</h1>
      <div className="members-container ">
        
        {copyEditors.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium">
              <div className="mt-0 flex flex-col gap-8">
                <li className="member-item">
                  <div className="member-info">
                  <motion.div variants={textVariant()}
className='' >
                    <img src={member.pfp} alt={member.name} className="member-image" />
                    </motion.div>
                    <div className='flex-col'>
                    <h3 className="member-name ">{member.name}</h3>
                   
                    
                    
                    </div>
                  </div>
                  
                  <a href={member.iglink} className="w-5 align-center mr-4">
                    <img src={instagram} alt="ig" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
      <motion.div variants={textVariant()}
className='' >
  <h1 className={`members-container mr-11 ${styles.heroSubText} uppercase underline`}>Layout Head</h1>
      <div className="members-container ">
        
        {layoutHead.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium">
              <div className="mt-0 flex flex-col gap-8">
                <li className="member-item">
                  <div className="member-info">
                  <motion.div variants={textVariant()}
className='' >
                    <img src={member.pfp} alt={member.name} className="member-image" />
                    </motion.div>
                    <div className='flex-col'>
                    <h3 className="member-name ">{member.name}</h3>
                   
                    
                    
                    </div>
                  </div>
                  
                  <a href={member.iglink} className="w-5 align-center mr-4">
                    <img src={instagram} alt="ig" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
      <motion.div variants={textVariant()}
className='' >
  <h1 className={`members-container mr-11 ${styles.heroSubText} uppercase underline`}>Comics/Illustrations Head</h1>
      <div className="members-container ">
        
        {comicsIllustrationsHead.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium">
              <div className="mt-0 flex flex-col gap-8">
                <li className="member-item">
                  <div className="member-info">
                  <motion.div variants={textVariant()}
className='' >
                    <img src={member.pfp} alt={member.name} className="member-image" />
                    </motion.div>
                    <div className='flex-col'>
                    <h3 className="member-name ">{member.name}</h3>
                   
                    
                    
                    </div>
                  </div>
                  
                  <a href={member.iglink} className="w-5 align-center mr-4">
                    <img src={instagram} alt="ig" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
      <motion.div variants={textVariant()}
className='' >
  <h1 className={`members-container mr-11 ${styles.heroSubText} uppercase underline`}>Photography Head</h1>
      <div className="members-container ">
        
        {photographyHead.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium">
              <div className="mt-0 flex flex-col gap-8">
                <li className="member-item">
                  <div className="member-info">
                  <motion.div variants={textVariant()}
className='' >
                    <img src={member.pfp} alt={member.name} className="member-image" />
                    </motion.div>
                    <div className='flex-col'>
                    <h3 className="member-name ">{member.name}</h3>
                   
                    
                    
                    </div>
                  </div>
                  
                  <a href={member.iglink} className="w-5 align-center mr-4">
                    <img src={instagram} alt="ig" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
      <motion.div variants={textVariant()}
className='' >
  <h1 className={`members-container mr-11 ${styles.heroSubText} uppercase underline`}>Web Team Head</h1>
      <div className="members-container ">
        
        {webTeamHead.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium">
              <div className="mt-0 flex flex-col gap-8">
                <li className="member-item">
                  <div className="member-info">
                  <motion.div variants={textVariant()}
className='' >
                    <img src={member.pfp} alt={member.name} className="member-image" />
                    </motion.div>
                    <div className='flex-col'>
                    <h3 className="member-name ">{member.name}</h3>
                   
                    
                    
                    </div>
                  </div>
                  
                  <a href={member.iglink} className="w-5 align-center mr-4">
                    <img src={instagram} alt="ig" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
      <motion.div variants={textVariant()}
className='' >
  <h1 className={`members-container mr-11 ${styles.heroSubText} uppercase underline`}>Secretary</h1>
      <div className="members-container ">
        
        {secretary.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium">
              <div className="mt-0 flex flex-col gap-8">
                <li className="member-item">
                  <div className="member-info">
                  <motion.div variants={textVariant()}
className='' >
                    <img src={member.pfp} alt={member.name} className="member-image" />
                    </motion.div>
                    <div className='flex-col'>
                    <h3 className="member-name ">{member.name}</h3>
                   
                    
                    
                    </div>
                  </div>
                  
                  <a href={member.iglink} className="w-5 align-center mr-4">
                    <img src={instagram} alt="ig" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
      <motion.div variants={textVariant()}
className='' >
  <h1 className={`members-container mr-11 ${styles.heroSubText} uppercase underline`}>Publicity Head</h1>
      <div className="members-container ">
        
        {publicityHead.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium">
              <div className="mt-0 flex flex-col gap-8">
                <li className="member-item">
                  <div className="member-info">
                  <motion.div variants={textVariant()}
className='' >
                    <img src={member.pfp} alt={member.name} className="member-image" />
                    </motion.div>
                    <div className='flex-col'>
                    <h3 className="member-name ">{member.name}</h3>
                   
                    
                    
                    </div>
                  </div>
                  
                  <a href={member.iglink} className="w-5 align-center mr-4">
                    <img src={instagram} alt="ig" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
      <motion.div variants={textVariant()}
className='' >
  <h1 className={`members-container mr-11 ${styles.heroSubText} uppercase underline`}>Columnist</h1>
      <div className="members-container ">
        
        {columnist.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium">
              <div className="mt-0 flex flex-col gap-8">
                <li className="member-item">
                  <div className="member-info">
                  <motion.div variants={textVariant()}
className='' >
                    <img src={member.pfp} alt={member.name} className="member-image" />
                    </motion.div>
                    <div className='flex-col'>
                    <h3 className="member-name ">{member.name}</h3>
                   
                    
                    
                    </div>
                  </div>
                  
                  <a href={member.iglink} className="w-5 align-center mr-4">
                    <img src={instagram} alt="ig" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </motion.section>
  );
};

export default Members;
