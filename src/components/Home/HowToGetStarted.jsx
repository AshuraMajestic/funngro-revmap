import React from 'react'
import Symbol from './Symbol'
import start from '../../assets/start.svg'

export default function HowToGetStarted() {
    return (
        <section className="bg-white mt-12" id="how-to-get-started">
            <div className="flex items-center justify-center my-5">
                <div className="flex-grow border-t-2 border-gray-500"></div>
                <span className="mx-4 text-4xl font-bold">How to Get Started?</span>
                <div className="flex-grow border-t-2 border-gray-500"></div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 lg:pt-10">
                <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
                    <div className="lg:py-6 lg:pr-16">
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <Symbol />
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">Register</p>
                                <p className="text-gray-700">
                                    Register for Earning on Funngro app, select your area of interest
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <Symbol />
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">Complete Profile</p>
                                <p className="text-gray-700">
                                    Add details about your interests, experience and past work
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <Symbol />
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">Finish First Project</p>
                                <p className="text-gray-700">
                                    Complete one project to show your skills, get paid
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <Symbol />
                                </div>
                                <div className="w-px h-full bg-gray-300" />
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold">Apply to Comapnies</p>
                                <p className="text-gray-700">
                                    Hundreds of companies waiting for you, start applying
                                </p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                        <svg
                                            className="w-6 text-gray-600"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <polyline
                                                fill="none"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeMiterlimit="10"
                                                points="6,12 10,16 18,8"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="mb-2 text-lg font-bold">Start Earning</p>
                                <p className="text-gray-700" > Complete the project - earn money and get certificate</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img
                            className=" h-96 "
                            src={start}
                            alt="start svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
