import React, { useEffect, useState, useRef } from 'react';
import './Beardle.css';
import mytext from './words.js';

const wordList = mytext;
let chosenWords = ["math","bear","paws","hall","club","band","book","work","milk","dens","chem","grad","hard","test","quiz","room","tech","news","dope","food","drip","fear","cool","bold","quad","claw","exam","epic","film","grow","rail","step","fail","door","food","beat","tree","note","seat","form","desk","bell","wall","dean","read","team","teen","sing","play"]
const wordArray = wordList.split('\n');
const chosen = chosenWords[Math.floor(Math.random() * chosenWords.length)];
import gsap, { Power4 } from 'gsap';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import Confetti from 'react-confetti';

function Beardle() {
  const [showConfetti, setShowConfetti] = useState(false);

  gsap.set(document.getElementsByClassName("error"), { scaleX: 0 });
  const squareToAnimateRef = useRef(null);
  const currentRowRef = useRef(null); 
  const [squares, setSquares] = useState(Array(20).fill(null));
  const [colors, setColors] = useState(Array(20).fill(''));
  const [message, setMessage] = useState(" ");
  const [i, setI] = useState(0);
  const [currentRow, setCurrentRow] = useState(0);
  const [guess, setGuess] = useState(false);
  
  const keyboardLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Del','Z', 'X', 'C', 'V', 'B', 'N', 'M', '>'],
    
  ];
  const handleBearClick = () => {
    const squaresToAnimate = Array.from(document.querySelectorAll('.square'));
    gsap.to(squaresToAnimate, {
      x: () => (Math.random() - 0.5) * 1000,
      y: () => (Math.random() - 0.5) * 600,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(squaresToAnimate, { x: 0, y: 0, opacity: 1 });
      },
    });
  }
  const keyColors = {
    yellow: '#713b0f',
    green: '#50C878',
    grey: '#CCCCCC',
  };

  

  const detectKeyDown = (e) => {
    if(!guess){
      gsap.set(document.getElementsByClassName("error"), {scaleX: 0});
      console.log(chosen);
      if (e.key === 'Enter') {
        Enter();
        function Enter(){
        const word = squares.slice(currentRow * 4, (currentRow + 1) * 4).join('');
        console.log(word);

        if (i !== 4) {
          console.log('Too short');
          shakeRow();
          setMessage("Too Short!");
          revealError();
          return;
        } else if (!wordList.includes(word.toLowerCase())) {
          console.log('Not a word');
          shakeRow();
          setMessage("Not a word!");
          revealError();
          return;
        } else {
          
          
          revealLetters();
          setI(0);
          setCurrentRow(currentRow + 1);
          
          let temp = chosen;
          // Set the background color of the previous row to grey
          const prevRow = currentRow;
          const prevRowColors = Array(4).fill(''); // Grey color
          
          
          for (let i = 0; i < 4; i++) {
            if (temp.includes(word[i].toLowerCase()) && word[i].toLowerCase() === temp[i]) {
              prevRowColors[i] = '#50C878';
              
            }
            
            else if (temp.includes(word[i].toLowerCase())) {
              prevRowColors[i] = '#FFD300';
              
            }
            if (!temp.includes(word[i].toLowerCase())) {
              prevRowColors[i] = '#CCCCCC';
            }
            
          }
          
          
          setColors([...colors.slice(0, prevRow * 4), ...prevRowColors, ...colors.slice(prevRow * 4 + 4)]);
          if (word.toLowerCase() === chosen) {
            console.log('YOU WIN!!!');
            setMessage("YOU WIN 💸")
            setGuess(true);
            revealError();
            setShowConfetti(true);
          }
          else if (currentRow === 4) {
            setMessage("YOU LOSE 😔, Word was: " + chosen)
            revealError();
            setGuess(true);
            return;
          }
        }
        }
      } else if (e.key.length === 1 && e.key.toUpperCase() !== e.key.toLowerCase()) {
        if (i < 4 && currentRow < 5) {
          const updatedSquares = [...squares];
          updatedSquares[currentRow * 4 + i] = e.key.toUpperCase();
          setSquares(updatedSquares);
          setI(i + 1);
        }
      } else if (e.key === 'Backspace') {
        if (i > 0) {
          const updatedSquares = [...squares];
          updatedSquares[currentRow * 4 + i - 1] = null;
          setSquares(updatedSquares);
          setI(i - 1);
        }
        // Prevent Backspace from moving to the previous row
        e.preventDefault();
      }
    }
  };
  const handleKeyClick = (key) => {
    if (!guess) {
      gsap.set(document.getElementsByClassName("error"), { scaleX: 0 });
      if (key === '-' && i > 0) {
        const updatedSquares = [...squares];
        updatedSquares[currentRow * 4 + i - 1] = null;
        setSquares(updatedSquares);
        setI(i - 1);
      }
      else if (key === '>') {
        const word = squares.slice(currentRow * 4, (currentRow + 1) * 4).join('');
        console.log(word);

        if (i !== 4) {
          console.log('Too short');
          shakeRow();
          setMessage("Too Short!");
          revealError();
          return;
        } else if (!wordList.includes(word.toLowerCase())) {
          console.log('Not a word');
          shakeRow();
          setMessage("Not a word!");
          revealError();
          return;
        } else {
          
          
          revealLetters();
          setI(0);
          setCurrentRow(currentRow + 1);
          
          let temp = chosen;
          // Set the background color of the previous row to grey
          const prevRow = currentRow;
          const prevRowColors = Array(4).fill(''); // Grey color
          
          
          for (let i = 0; i < 4; i++) {
            if (temp.includes(word[i].toLowerCase()) && word[i].toLowerCase() === temp[i]) {
              prevRowColors[i] = '#50C878';
              
            }
            
            else if (temp.includes(word[i].toLowerCase())) {
              prevRowColors[i] = '#FFD300';
              
            }
            if (!temp.includes(word[i].toLowerCase())) {
              prevRowColors[i] = '#CCCCCC';
            }
            
          }
          
          
          setColors([...colors.slice(0, prevRow * 4), ...prevRowColors, ...colors.slice(prevRow * 4 + 4)]);
        }
          if (word.toLowerCase() === chosen) {
            console.log('YOU WIN!!!');
            setMessage("YOU WIN 💸")
            setGuess(true);
            revealError();
          }
          else if (currentRow === 5) {
            setMessage("YOU LOSE 😔")
            revealError();
            setGuess(true);
            return;
          }
      }
      else if (i < 4 && currentRow < 5 && key !== '>' && key !== '-') {
        const updatedSquares = [...squares];
        updatedSquares[currentRow * 4 + i] = key;
        setSquares(updatedSquares);
        setI(i + 1);
      }
  
      // Handle Backspace key
      
  
      // Handle Enter key
      
    }
  };
  const shakeRow = () => {
    const rowSquares = Array.from(currentRowRef.current.children);

    rowSquares.forEach((square) => {
      gsap.set(square, {x:0})
      gsap.to(square, {
        x: 10, // Adjust the shaking distance
        duration: 0.1,
        ease: Power4.easeInOut,
        repeat: 1, // Number of shakes
        yoyo: true, // Back and forth shaking
      });
      
      
    });
    
  };
  const revealLetters = () =>{
    const rowSquares = Array.from(currentRowRef.current.children);

    
      gsap.set(rowSquares, {scaleY: 0})
      gsap.to(rowSquares, { scaleY:1, duration: 0.5, stagger: 0.2});
    
  }
  const revealError = () =>{
    gsap.set(document.getElementsByClassName("error"), {scaleX: 0});
    gsap.to(document.getElementsByClassName("error"), { scaleX:1, duration: 0.1, stagger: 0.2});
  }


  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown);
    return () => {
      document.removeEventListener('keydown', detectKeyDown);
    };
  }, [squares, i, currentRow]);

  const rows = [];
  for (let row = 0; row <= 5; row++) {
    const rowSquares = squares.slice(row * 4, (row + 1) * 4);
    const rowColors = colors.slice(row * 4, (row + 1) * 4);

    rows.push(
      <div className='row' key={row} ref={row === currentRow ? currentRowRef : null}>
        {rowSquares.map((square, index) => (
          <div
            className='square'
            key={index}
            style={{ backgroundColor: rowColors[index] }}
            ref={squareToAnimateRef} // Keep this ref for individual square animation if needed
          >
            {square}
          </div>
        ))}
      </div>
    );
  }


  return (
    <>
    {showConfetti && <Confetti width={1920} height={1080} />} {/* Show confetti */}
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        staggerContainer
        viewport={{ once: true, amount: 0.25 }}
        className="px-[100px]"
      >

<motion.div
          variants={textVariant()}
          className=''
          onClick={handleBearClick}
        >
          <div className='bear-title'>
            <h1 className='bear'>Bear</h1>
            <h1 className='dle'>dle</h1>
          </div>
        </motion.div>

        <motion.div variants={textVariant()}>
          {rows}
          <h1 className='error'>{message}</h1>
          <div className='keyboard'>
            {keyboardLayout.map((row, rowIndex) => (
              <div key={rowIndex} className='keyboard-row '>
                {row.map((key, keyIndex) => (
                  <div
                    key={keyIndex}
                    className='keyboard-key rounded-2xl'
                    style={{}}
                    onClick={() => handleKeyClick(key)}
                  >
                    {key}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div>
            <h2>&nbsp;</h2>
            <h2>&nbsp;</h2>
            <h2>&nbsp;</h2>
            <h2>&nbsp;</h2>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Beardle;
