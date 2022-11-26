import Head from 'next/head';
import {BsFillMoonStarsFill, BsLinkedin} from 'react-icons/bs';
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import avatar from '../public/img/avatar.png';
import webdev from '../public/img/webdev.png';
import softwaredev from '../public/img/softwaredev.png';
import webdesign from '../public/img/webdesign.png';
import { useState } from 'react';

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Femke Valckenier</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-gradient-to-b from-white to-gray-200 px-10 md:px-20 lg:px-40 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900'>
        <section className='min-h-screen'>       
            <nav className='py-10 mb-12 flex justify-between '>
              <h1 className='text-5xl dark:text-white font-thin'>FV</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white transition ease-in-out hover:scale-105 duration-300'/>
                </li>
              </ul>
            </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-amber-800 font-medium md:text-6xl dark:text-yellow-400 mb-3'>Femke Valckenier</h2>
            <span className='text-3xl py-2 md:text-3xl dark:text-gray-300 type-me'></span>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-50'>I currently study Computer Science at Odisee University College in Brussels. My biggest passions are software and web development. Find out more about me below!</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-700 dark:text-gray-300'>
            <a className=' transition ease-in-out hover:text-gray-500 hover:ease-in duration-100' href='https://github.com/femkevalckenier'><AiFillGithub /></a>
            <a className=' transition ease-in-out hover:text-gray-500 hover:ease-in duration-100' href="https://www.linkedin.com/in/femke-valckenier/"><AiFillLinkedin /></a>
            <a className=' transition ease-in-out hover:text-gray-500 hover:ease-in duration-100' href="https://www.instagram.com/femke_val/"><AiFillInstagram /></a>
          </div>

          <div className='mx-auto mt-10 w-72 h-72'>
            <Image src="https://i.postimg.cc/J0zj3Rm4/avatar.png" width={300} height={300}/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 font-semibold dark:text-white underline mt-20'>About Me</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>I am a 21-year-old student in her final year of Applied Computer Science at Odisee University College in Brussels. During my three years I've spent at this college I've acquired knowledge about a variety of IT-skills such as developing software through <span className='text-yellow-500 font-bold'>C# and .NET</span>, but also developing websites using <span className='text-yellow-500 font-bold'>HTML, CSS, JavaScript</span> and web application frameworks such as <span className='text-yellow-500 font-bold'>Vue.js and React</span>. Besides that, I have also learned how to design and develop business analyses, databases and how to test software.</p>
            <p className='text-md py-3 leading-8 text-gray-800 dark:text-gray-100'>I do not only use my computer for programming or school, at night, you'll probably find me playing computer games with friends. I also love listening to music, seriously, you'll catch me listening to music all day long. </p>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 font-semibold dark:text-white underline mt-20'>Experience</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>
              Here is a brief overview of all software and languages I have experience with.
            </p>
            <div className='lg:flex gap-10'>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1 transition ease-in-out hover:scale-105 duration-300 ">
              <Image src="https://i.postimg.cc/zfLzgM9Z/webdev.png" width={100} height={100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Web Development
              </h3>
              <h4 className='py-4 text-yellow-500 font-semibold'>Languages I use</h4>
              <p className='text-gray-800 py-1 dark:text-white'>HTML</p>
              <p className='text-gray-800 py-1 dark:text-white'>CSS</p>
              <p className='text-gray-800 py-1 dark:text-white'>JavaScript</p>
              <p className='text-gray-800 py-1 dark:text-white'>PHP</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1 transition ease-in-out hover:scale-105 duration-300 ">
              <Image src="https://i.postimg.cc/Pxw5Bc4z/softwaredev.png" width={100} height={100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Software Development
              </h3>
              <h4 className='py-4 text-yellow-500 font-semibold'>Languages I use</h4>
              <p className='text-gray-800 py-1 dark:text-white'>C#</p>
              <p className='text-gray-800 py-1 dark:text-white'>.NET</p>
              <p className='text-gray-800 py-1 dark:text-white'>Java</p>
              <p className='text-gray-800 py-1 dark:text-white'>Python</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1 transition ease-in-out hover:scale-105 duration-300 ">
              <Image src="https://i.postimg.cc/zXJqj39k/webdesign.png" width={100} height={100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Photo & Video Editing
              </h3>
              <h4 className='py-4 text-yellow-500 font-semibold'>Editing tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-white'>Adobe Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-white'>Adobe Lightroom</p>
              <p className='text-gray-800 py-1 dark:text-white'>Adobe After Effects</p>
              <p className='text-gray-800 py-1 dark:text-white'>VEGAS Pro</p>
            </div>
          </div>
          </div>
        </section>
        <section>
          <h3 className='text-3xl py-1 font-semibold underline mt-20 dark:text-white'>Contact</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100 mb-10'>
              Submit the form below to get in touch with me.
          </p>
          <div className='flex flex-col justify-center items-center mt-5'>
                <form action="https://getform.io/f/9b9d851d-80ce-4db6-b536-d6ac5cd106a0" method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name' required className='p-2 bg-transparent placeholder-gray-600 shadow-lg rounded-md text-black focus:outline-none dark:text-white dark:border-white dark:placeholder-gray-400'/>

                    <input type="text" name="email" placeholder='Enter your e-mail' required className='my-4 p-2 bg-transparent placeholder-gray-600 shadow-lg rounded-md text-black focus:outline-none dark:text-white dark:border-white dark:placeholder-gray-400'/>

                    <textarea name="message" rows="10" 
                    placeholder='Enter your message...'
                    required
                    className='p-2 bg-transparent shadow-lg placeholder-gray-600 rounded-md text-black focus:outline-none dark:text-white dark:border-white dark:placeholder-gray-400'></textarea>

                    <button className='mx-auto mt-5 mb-5 font-bold bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-md dark:text-black transition ease-in-out hover:scale-105 duration-300'>Submit</button>
                </form>
            </div>

        </section>
      </main>
      <footer className="p-4 bg-gray-200  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Made by <a href="https://www.linkedin.com/in/femke-valckenier/" class="hover:underline">Femke Valckenier</a>
        </span>
    </footer>
    </div>
  )
}
