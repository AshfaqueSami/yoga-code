import React, { useEffect, useState } from 'react';
import HomeContent from '../HomeContent/HomeContent';
import bannerImg from '../../images/banner/banner1.jpg';

const HomeData = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('https://ashfaquesami.github.io/jsonfile/fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            {/* banner part */}
            <div class="relative bg-white overflow-hidden">
                <div class="max-w-7xl mx-auto">
                    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <div>
                            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                            </div>
                            <div class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                                <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div class="px-5 pt-4 flex items-center justify-between">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div class="sm:text-center lg:text-left">
                                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span class="block xl:inline"> The Best Yoga  </span>
                                    <span class="block text-green-600 xl:inline"> Campus  </span>
                                </h1>
                                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    This Yoga-Campus is one of the best medical and health care center in your area.Find Your Favourite Course.
                                </p>
                                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div class="rounded-md shadow">
                                        <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-600 md:py-4 md:text-lg md:px-10">
                                            Get started
                                        </a>
                                    </div>
                                    <div class="mt-3 sm:mt-0 sm:ml-3">
                                        <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-indigo-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                                            Hire Teacher
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={bannerImg} alt="" />
                </div>
            </div>
            {/* service part */}
         <div>
             
            <div className='w-full max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
                {
                    courses.map(course => <HomeContent key={course.key} course={course}></HomeContent>)
                        .slice(0, 6)
                }
            </div>
         </div>
            {/* extra part-01 */}

            {/* extra part-02 */}
            
      </div>
    );
};

export default HomeData;