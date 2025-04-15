import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'

const MainBanner = () => {
    return (
        <div className='relative' >
            <img src={assets.main_banner_bg} alt="Main Banner Bg" className='w-full hidden md:block' />
            <img src={assets.main_banner_bg_sm} alt="Main Banner Bg SM" className='w-full md:hidden' />
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
                <h1
                    className='text-3xl md:text4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'
                >Freshness You Can Trust, Saving You will Love</h1>

                <div className="flex items-center mt-6 font-medium">
                    <Link
                        to={"/products"}
                        className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'
                    >
                        Shop Now
                    </Link>


                    <Link
                        to={"/products"}
                        className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'
                    >
                        Explore Deails
                        <MoveRight size={28} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainBanner