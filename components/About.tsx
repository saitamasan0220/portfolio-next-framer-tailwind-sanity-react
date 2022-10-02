import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen
                    text-center md:text-left md:flex-row
                    max-w-7xl px-10 justify-evenly mx-auto
                    items-center'
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

        <motion.img 
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            src="https://i.pinimg.com/originals/7c/0a/cf/7c0acf5a74a7c98c5e33cb3a66c28249.jpg"
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
            </h4>
            <p className='text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec feugiat. Ut morbi tincidunt augue interdum velit euismod. Luctus accumsan tortor posuere ac ut consequat semper viverra. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Blandit massa enim nec dui nunc. Magna ac placerat vestibulum lectus mauris ultrices eros in. Varius morbi enim nunc faucibus a pellentesque sit amet. Nibh nisl condimentum id venenatis a condimentum vitae. Ipsum nunc aliquet bibendum enim facilisis gravida. In hendrerit gravida rutrum quisque. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Pellentesque nec nam aliquam sem et tortor. Venenatis tellus in metus vulputate eu scelerisque felis.

                Habitant morbi tristique senectus et netus et malesuada fames ac. Tellus elementum sagittis vitae et. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Tortor at risus viverra adipiscing at. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Sed tempus urna et pharetra pharetra massa. In mollis nunc sed id semper. Vulputate odio ut enim blandit volutpat maecenas.
            </p>
        </div>
    </motion.div>
  )
}