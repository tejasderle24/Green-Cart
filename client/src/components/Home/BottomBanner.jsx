import React from 'react'
import { assets, features } from '../../assets/assets'

const BottomBanner = () => {
    return (
        // <div className="relative mt-24">
        //     <img src={assets.bottom_banner_image} alt="banner" className='w-full hidden md:block' />
        //     <img src={assets.bottom_banner_image_sm} alt="banner" className='w-full md:hidden' />

        //     <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
        //         <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
        //             Why We Are the Best?
        //         </h1>
        //         {
        //             features.map((feature, index) => (
        //                 <div key={index} className="flex items-center gap-4 mt-2">
        //                     <img src={feature.icon} alt={feature.title} className='md:w-11 w-9' />
        //                     <div>
        //                         <h3 className="text-lg md:text-xl font-semibold">{feature.title}</h3>
        //                         <p className="text-gray-500 text-xs md:text-sm">{feature.description}</p>

        //                     </div>
        //                 </div>
        //             ))
        //         }
        //     </div>
        // </div>

        <div className="relative mt-24">
            <img src={assets.bottom_banner_image} alt="banner" className='w-full hidden md:block' />
            <img src={assets.bottom_banner_image_sm} alt="banner" className='w-full md:hidden' />

            {/* Optional overlay */}
            <div className="absolute inset-0 z-0" />

            <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24 z-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-6">
                    Why We Are the Best?
                </h1>
                <div className="flex flex-col gap-y-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <img src={feature.icon} alt={feature.title} className='md:w-11 w-9' />
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold">{feature.title}</h3>
                                <p className="text-gray-500/70 text-xs md:text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default BottomBanner