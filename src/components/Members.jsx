import React from 'react';
import {
  editorsInChief,
  managingEditor,
  copyEditors,
  layoutHead,
  comicsIllustrationsHead,
  photographyHead,
  webTeamHead,
  secretary,
  publicityHead,
  columnist,
} from "../constants/Members";
import './Members.css'; // Import the CSS file
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';


const Members = () => {
  return (
    <motion.section
  
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    staggerContainer
    viewport={{once: true, amount: 0.25}}
    className="px-[100px]"
   >
       <motion.div
      variants={fadeIn("right", "spring", 0.5, 0.75)}
      className=''
    >
    <div className="members-container">
      <Category title="Editors-in-Chief" members={editorsInChief} />
      <Category title="Managing Editor" members={managingEditor} />
      <Category title="Copy Editors" members={copyEditors} />
      <Category title="Layout Head" members={layoutHead} />
      <Category title="Comics/Illustrations Head" members={comicsIllustrationsHead} />
      <Category title="Photography Head" members={photographyHead} />
      <Category title="Web Team Head" members={webTeamHead} />
      <Category title="Secretary" members={secretary} />
      <Category title="Publicity Head" members={publicityHead} />
      <Category title="Columnist" members={columnist} />
      {/* Add more categories here */}
      {/* 01001110 01100001 01101101 01100101 
      78 97 109 101 */}
    </div>
    </motion.div>
    </motion.section>
  );
}

const Category = ({ title, members }) => (
  <div className="category-container">
    <h2 className="category-title">{title}</h2>
    <ul className="member-list">
      {members.map((member, index) => (
        <li key={index} className="member-item">
          <div className="member-info">
            <img src={member.pfp} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
          </div>
          <a
            href={member.iglink}
            target="_blank"
            rel="noopener noreferrer"
            className="member-link"
          >
            Instagram
          </a>
        </li>
      ))}
    </ul>
  </div>
 
);

export default Members;
