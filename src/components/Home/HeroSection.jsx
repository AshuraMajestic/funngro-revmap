import React from 'react'
import arrow from '../../assets/rightarrow.svg'
import freelance from '../../assets/freelance.svg'

export default function HeroSection() {
    return <section className="bg-white dark:bg-gray-900 mt-1">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Unlock Your Potential with Teenlancing</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Empowering Teens to Earn, Learn, and Grow</p>
                <a href="/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Get started
                    <img src={arrow} className='h-6 pl-2' />
                </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={freelance} className='h-96' alt="mockup" />
            </div>
        </div>
    </section>

}
