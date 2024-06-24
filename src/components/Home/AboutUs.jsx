import React from 'react'

export default function AboutUs() {

    return (

        <>
            <section className="py-14 lg:py-24 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                        <div className="img-box">
                            <img src="https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638de81514dc6e31e2578d60_about-funngro.png" alt="About Us tailwind page"
                                className="max-lg:mx-auto" />
                        </div>
                        <div className="lg:pl-[100px] flex items-center">
                            <div className="data w-full">
                                <h2
                                    className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                                    The name says it all.
                                    "Its Fun to Grow” </h2>
                                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                    Funngro is built by educators, Tech enthusiasts, IIM alumni, Finance experts but most importantly by Loving parents. We are thankful to those mentors who helped us in early stage of our lives and Funngro is our effort to give back to the society. Funngro is a mission to enable Teenagers to become Financially empowered and grow up to be responsible citizens.
                                </p>
                                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                                    Mission - Enable Smart Teenagers and Smart Companies to realize their full potentials
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>)
}
