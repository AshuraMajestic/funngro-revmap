import React from 'react'
import market from '../../assets/market.svg'
import writing from '../../assets/writing.svg'
import influencer from '../../assets/influencer.svg'
import mic from '../../assets/mic.svg'
import mobiledev from '../../assets/mobiledev.svg'
import survey from '../../assets/survey.svg'
import campus from '../../assets/campus.svg'
import data_enter from '../../assets/data_enter.svg'
import graphic from '../../assets/graphic.svg'
import testing from '../../assets/testing.svg'
import video from '../../assets/video.svg'
import website from '../../assets/website.svg'

export default function ProjectCategories() {
    return (
        <section className="bg-white mt-12 project" id="project-categories">
            <div className="flex items-center justify-center my-5">
                <div className="flex-grow border-t-2 border-gray-500"></div>
                <span className="mx-4 text-4xl font-bold">Project Categories</span>
                <div className="flex-grow border-t-2 border-gray-500"></div>
            </div>

            <div className='grid grid-cols-4 gap-4 mt-8 mx-10'>
                <div className='col-span-1'>
                    <div className="w-full h-[254px] rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex items-center justify-center flex-col">
                        <img src={market} alt='Marketing' className='row h-16' />
                        <h3 className='text-2xl text-black mt-2'>Marketing</h3>
                        <p className='text-xl text-gray-800 mt-2 text-center'>Manage social media pages of companies</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full h-[254px] rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex items-center justify-center flex-col">
                        <img src={video} alt='Video editing' className='row h-16' />
                        <h3 className='text-2xl text-black mt-2'>Video Creation</h3>
                        <p className='text-xl text-gray-800 mt-2 text-center'>Create and edit videos for companies and use your video creation skills</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full h-[254px] rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex items-center justify-center flex-col">
                        <img src={website} alt='Video Creation' className='row h-16' />
                        <h3 className='text-2xl text-black mt-2'>Website Design</h3>
                        <p className='text-xl text-gray-800 mt-2 text-center'>Design and build a website for companies</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full h-[254px] rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex items-center justify-center flex-col">
                        <img src={influencer} alt='Influencer Marketing' className='row h-16' />
                        <h3 className='text-2xl text-black mt-2'>Influencer Marketing</h3>
                        <p className='text-xl text-gray-800 mt-2 text-center'>Create Reels, Memes, posts and videos for social media handles of companies</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full h-[254px] rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex items-center justify-center flex-col">
                        <img src={mobiledev} alt='Mobile App Development' className='row h-16' />
                        <h3 className='text-2xl text-black mt-2'>Mobile App Development</h3>
                        <p className='text-xl text-gray-800 mt-2 text-center'>Develop market ready apps for companies</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full h-[254px] rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex items-center justify-center flex-col">
                        <img src={survey} alt='Research & Survey' className='row h-16' />
                        <h3 className='text-2xl text-black mt-2'>Research & Survey</h3>
                        <p className='text-xl text-gray-800 mt-2 text-center'>Run Surveys for companies and complete research assignments</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full h-[254px] rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex items-center justify-center flex-col">
                        <img src={testing} alt='Testing' className='row h-16' />
                        <h3 className='text-2xl text-black mt-2'>Testing</h3>
                        <p className='text-xl text-gray-800 mt-2 text-center'>Test company products and give feedback, app, website, physical product</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full h-[254px] rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex items-center justify-center flex-col">
                        <img src={graphic} alt='Graphic Design' className='row h-16' />
                        <h3 className='text-2xl text-black mt-2'>Graphic Design</h3>
                        <p className='text-xl text-gray-800 mt-2 text-center'>Logos, Brochures, pamphlets, website, posts etc</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full h-[254px] rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex items-center justify-center flex-col">
                        <img src={writing} alt='Content Writing' className='row h-16' />
                        <h3 className='text-2xl text-black mt-2'>Content Writing</h3>
                        <p className='text-xl text-gray-800 mt-2 text-center'>Blogs, articles, website content and a lot more. Write for companies</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full h-[254px] rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex items-center justify-center flex-col">
                        <img src={mic} alt='Voice Over' className='row h-16' />
                        <h3 className='text-2xl text-black mt-2'>Voice Over</h3>
                        <p className='text-xl text-gray-800 mt-2 text-center'>Work with companies in recording content with your voice over skills</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full h-[254px] rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex items-center justify-center flex-col">
                        <img src={data_enter} alt='Data Entry' className='row h-16' />
                        <h3 className='text-2xl text-black mt-2'>Data Entry</h3>
                        <p className='text-xl text-gray-800 mt-2 text-center'>Create databases for companies with your data research skills</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className="w-full h-[254px] rounded-[30px] bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex items-center justify-center flex-col">
                        <img src={campus} alt='Campus Ambassador' className='row h-16' />
                        <h3 className='text-2xl text-black mt-2'>Campus Ambassador</h3>
                        <p className='text-xl text-gray-800 mt-2 text-center'>Drive sales for companies by acquiring customers</p>
                    </div>
                </div>
            </div>
        </section >
    )
}
