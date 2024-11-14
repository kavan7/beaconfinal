import { useState, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import emailjs from '@emailjs/browser'
import {styles} from '../styles';
import { slideIn } from '../utils/motion';
import { staggerContainer } from '../utils/motion';
import { textVariant } from '../utils/motion';
import { motion } from "framer-motion-3d";
import { Mailbox } from './Mailbox';
import '../index.css';
import { OrbitControls } from '@react-three/drei';

const Contact = () => {
  const formRef = useRef();
    const [form, setForm] = useState({

    name: '',
    email: '',
    message: '',

  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_c37uz7i', 'template_q567k5e',
    {
      from_name: form.name,
      to_name: 'Beacon',
      from_email: form.email,
      to_email: 'contactmcibeacon@gmail.com',
      message: form.message,

    },
    'TatXTYiVC966_Fzwt'
    )
    .then(() =>{
      setLoading(false);
      alert('Thank you. We will get back to you as soon as possible.')
      
      setForm({
        name: '',
        email: '',
        message: '',

      })

    }, (error) => {
      setLoading(false)
      console.log(error)

      alert('Something went wrong.')
    })
  }
  return (
    <motion.section
  
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    staggerContainer
    viewport={{once: true, amount: 0.25}}
    className="px-[100px]"
   >
    <div className='xl:mt-8 ml-[10px] xl:flex-row
    flex-col-reverse flex  overlow-hidden'>
     
        <motion.div variants={textVariant()}
         className='flex-[0.45] contact-card-container p-8'>         
          <h5 className=' text-gray-500'>Send a message to the editors!</h5>
          <motion.div variants={textVariant()}
         className=''>  
          <h3 className={styles.sectionHeadText} >Contact.</h3>
          </motion.div>
        <div className="">
          
          <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-0 flex flex-col gap-8'>
            
            <label className='flex flex-col'>
              <span className='text-gray-900 ml-[10px] mb-[10px] font-semibold underline-offset-1'>
                Your Name
              </span>
              <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className='bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium '>

              </input>

            </label>
            <label className='flex flex-col'>
              <span className='text-gray-900 ml-[10px] mb-[10px] font-semibold underline-offset-1'>
                Your Email
              </span>
              <input
              type='email'
              name='email'
              value={form.email}
              placeholder="What's your email"
              onChange={handleChange}
              className='bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium'>

              </input>

            </label>
            <label className='flex flex-col'>
              <span className='text-gray-900 ml-[10px] mb-[10px] font-semibold underline-offset-1'>
               Message
              </span>
              <textarea
              rows="7"
              
              name='message'
              value={form.message}
              placeholder="What would you like to say"
              onChange={handleChange}
              className='bg-gray-100 py-4 px-6 placeholder:text-gray-500 focus:outline-none text-gray-900 rounded-lg outlined-none border-none font-medium'>

              </textarea>

            </label>
            <button
            type='submit'
            className=' mt-[-23px] justify-right  bg-gray-300 py-3 px-8 outline-none w-fit text-gray-700 font-bold shadow-md shadow-primary rounded-xl'>
              {loading ? 'Sending...' : 'Send'}
            </button>
            
          </form>
      
  
   
          </div>
          
      </motion.div>
      <div className='w-full '>
    
    <Canvas camera={{  fov: 15, position: [0, 0, 15]}}>
      <Suspense fallback={null}>
        <ambientLight/>
        <directionalLight intensity={2} position={[0, 0, 50]} />       
          <Mailbox/>
          <OrbitControls enableRotate={true} enableZoom={true}  autoRotate autoRotateSpeed={3}  />
        </Suspense>
      </Canvas>
    </div>
      </div>
      
</motion.section>
  
  )
}

export default Contact;