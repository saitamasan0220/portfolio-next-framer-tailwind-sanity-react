import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, the name's Daniel",
            "Addicted-To-Coffee.tsx", 
            "<SoftwareEngineer/>"
        ],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className='h-screen flex flex-col space-y-8
                        items-center justify-center
                        text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover' 
                src="https://media.comicbook.com/2018/12/one-punch-man-season-2-trailer-saitama-1151267.jpeg" 
                alt="" />
            <div>
                <h2 className="text-sm uppercase
                                text-gray-500 pb-2
                                tracking-[15px]"
                >
                    Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='#F7AB0A'/>
                </h1>

                <div className='pt-5'>
                    <button className='heroButton'>About</button>
                    <button className='heroButton'>Experience</button>
                    <button className='heroButton'>Skills</button>
                    <button className='heroButton'>Projects</button>
                </div>
            </div>
        </div>
    )
}