import React from 'react';

import styles from '../../style';
import { discount, robot } from '../../assets';
import GetStarted from './GetStarted';

const Hero = () => (
    <section id="home" className={`${styles.paddingY} flex flex-col md:flex-row`}>
        {/* Left side of Hero */}
        <div className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px16 xl:px-0`}>
            {/* Discount text */}
            <div className='flex flex-row items-center py-1.5 px-4 bg-discount-gradient rounded-[10px] mb-2'>
                <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                <p className={`${styles.paragraph} ml-2 text-sm`}>
                    <span className="text-white">20% </span>
                    DISCOUNT FOR
                    <span className="text-white"> 1 MONTH </span>
                    ACCOUNT
                </p>
            </div>

            {/* Next Generation text */}
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] 
                    text-[52px] text-white ss:leading-100px leading-[75px]'>
                    The Next <br className='hidden sm:block' />
                    <span className='text-gradient'>{" "}
                        Generation
                    </span>{" "}
                </h1>

                <div className='hidden ss:flex mr-0 md:mr-4'>
                    <GetStarted />
                </div>
            </div>

            <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-100px leading-[75px] w-full'>
                Payment Method
            </h1>

            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
        </div>

        <div
            className={`${styles.flexCenter} flex flex-1 md:my-0 my-10 relative`}
        />

        {/* Right side of Hero */}
        <div>
            <img src={robot} alt={"robotImg"} className='w-full h-full relative z-[5]' />
            <div className='absolute z-0 w-[40%] h-[35%] top-0 pink__gradient' />
            <div className='absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient' />
            <div className='absolute z-[2] w-[0%] h-[50%] right-20 bottom-20 blue__gradient' />
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
        </div>
    </section>
)

export default Hero;