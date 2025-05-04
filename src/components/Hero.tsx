import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight
            className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
            fill='white'
            />
            <Spotlight
            className='h-[80vh] w-[50vw] top-10 left-full'
            fill='purple'
            />
            <Spotlight
            className='left-80 top-28 h-[80vh] w-[50v]'
            fill='blue'
            />

        </div>

        <div className='h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.3]
        bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center'>
            <div className='absolute pointer-events-none inset-0 flex items-center justify-center
            dark:bg-black bg-white [mask-image:radial-graditude(ellipse_at_center,transparent_20%,black)]'
            ></div>
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <p className='uppercase tracking-widest text-s text-center text-blue-200 max-w-80'>
                    Hey, there
                </p>

                <TextGenerateEffect
                words="I'm Yudhishtar a Software Engineer"
                className='text-center text-[40px] md:text-5xl lg:text-6xl'
                />
            {//Added Text white
            }
                <p className='text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    currently focused on building user experiences that drive growth.
                    </p>

            <a href='#about'>
                <MagicButton
                title='Show my work'
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>
                
            </div>
        </div>
    </div>
  )
}
  export default Hero;