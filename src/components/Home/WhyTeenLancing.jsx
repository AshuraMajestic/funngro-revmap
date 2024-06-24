import React from 'react'
import choice from '../../assets/choice.svg'
import control from '../../assets/control.svg'
import growth from '../../assets/growth.svg'
import income from '../../assets/income.svg'

export default function WhyTeenLancing() {
    return (
        <section className="bg-white mt-12" id="why-teenlancing">
            <div className="flex items-center justify-center my-5">
                <div className="flex-grow border-t-2 border-gray-500"></div>
                <span className="mx-4 text-4xl font-bold">Why Teenlancing?</span>
                <div className="flex-grow border-t-2 border-gray-500"></div>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-5 mx-10'>
                <div className='col-span-1'>
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="/">
                            <img className="p-8 h-36 rounded-t-lg" src={control} alt="Control" />
                        </a>
                        <div className="px-5 pb-5">

                            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Flexibility & Control</h5>
                            <div className="flex items-center mt-2.5 mb-5">
                                <span className='text-gray-500 text-sm'>Choose projects whenever and whatever.</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="/">
                            <img className="p-5 h-36 rounded-t-lg" src={choice} alt="Variety" />
                        </a>
                        <div className="px-5 pb-5">

                            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Variety of Opportunities</h5>
                            <div className="flex items-center mt-2.5 mb-5">
                                <span className='text-gray-500 text-sm'>Explore diverse industries and skills freely.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="/">
                            <img className="p-8 h-36 rounded-t-lg" src={growth} alt="Develop" />
                        </a>
                        <div className="px-5 pb-5">

                            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Skill Development</h5>
                            <div className="flex items-center mt-2.5 mb-5">
                                <span className='text-gray-500 text-sm'> Develop diverse and valuable career skills.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="/">
                            <img className="p-8 h-36 rounded-t-lg" src={income} alt="Income" />
                        </a>
                        <div className="px-5 pb-5">

                            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Income Potential</h5>
                            <div className="flex items-center mt-2.5 mb-5">
                                <span className='text-gray-500 text-sm'>Potential for higher and variable earnings.</span>
                            </div>

                        </div>
                    </div>
                </div>


            </div >
        </section >
    )
}
