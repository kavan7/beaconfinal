import React from 'react';
import instagram from '../assets/instagram.svg';
import './Members.css'; 
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { editorsInChief, secretary, publicityHead, layoutHead, layoutTeam, copyEditors, photographyTeam, photographyHead, comicsIllustrationsTeam, comicsIllustrationsHead, webTeam, webHead, writersAndContributors, headColumnist, columnist } from '../constants/Event';

const categories = [
  { title: 'Editors in Chief', members: editorsInChief },
  { title: 'Secretary', members: secretary },
  { title: 'Copy Editor', members: copyEditors },
  { title: 'Photography Head', members: photographyHead },
  { title: 'Illustrations Head', members: comicsIllustrationsHead },
  { title: 'Head Columnist', members: headColumnist },
  { title: 'Publicity Head', members: publicityHead },
  { title: 'Layout Head', members: layoutHead },
  { title: 'Web Team Head', members: webHead },
  { title: 'Columnist', members: columnist },
  { title: 'Illustrations Team', members: comicsIllustrationsTeam },
  { title: 'Web Team', members: webTeam },
  { title: 'Photography Team', members: photographyTeam },
  { title: 'Layout Team', members: layoutTeam },
  { title: 'Writers and Contributors', members: writersAndContributors },
 
];

const Members = () => {
  console.log(writersAndContributors);
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="px-[100px] parent-container" 
    >
      <div className="members-grid">
        {categories.map((category, index) => (
          <motion.div key={index} variants={textVariant()} className="category-container">
            <h1 className={`members-container ${styles.heroSubText} uppercase`}>{category.title}</h1>
            <div className="member-list">
              {category.members.map((member, memberIndex) => (
                <div className="member-card" key={memberIndex}>
                  <div className="bg-blue-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium">
                    <div className="mt-0 flex flex-col gap-8">
                      <li className="member-item">
                        <div className="member-info">
                          <motion.div variants={textVariant()}>
                            <img src={member.pfp} alt={member.name} className="member-image" />
                          </motion.div>
                          <div className="flex-col">
                            <h3 className="member-name">{member.name}</h3>
                          </div>
                        </div>
                        {member.iglink && (
                          <a href={member.iglink} className="w-5 align-center mr-4">
                            <img src={instagram} alt="Instagram" />
                          </a>
                        )}
                      </li>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Members;
