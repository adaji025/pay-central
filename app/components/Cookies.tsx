"use client"

import { useEffect, useState } from "react"
import posthog from 'posthog-js'

export const Cookies = () => {
    const [showCookie, setShowCookie] = useState(false)


    const acceptCookie = () => {
        setShowCookie(false)
        posthog.opt_in_capturing();
    }

    const declineCookie = () => {
        setShowCookie(false)
        posthog.opt_out_capturing();

    }
    useEffect(() => {
        if (!(posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing())) {
            setShowCookie(true);
        }
      }, []);

  return (
    <>
    {showCookie && (
        <div className='fixed bottom-0 px-[1rem] lg:px-[80px] py-[40px] bg-[#332C2D] block lg:flex items-center justify-between w-full'>
        <div className="flex gap-[16px] w-full lg:w-[702px] justify-between">
            <div className="w-[40px]">
            <img src="/svgs/CookiesLogo.svg" />
            </div>
            <div className="text-white">
                <h3 className="font-Spline-Sans text-base lg:text-2xl font-semibold">We use Cookies</h3>
                <p className="font-Spline-Sans text-sm lg:text-base">This website uses cookies in order to offer you the most relevant information. You don’t have to eat them, but please accept them for optimal perfromance.</p>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button 
            onClick={declineCookie}
            className="w-[168px] py-[16px] border-[2px] border-white text-white">No, I decline</button>
            <button 
            onClick={acceptCookie}
            className="w-[168px] py-[16px] border-[2px] bg-white">Accept all cookies</button>
        </div>
    </div>
    )}
        
    </>
  )
}
