import React from 'react'
import "./Hero.css"
import CountUp from 'react-countup'
import {HiLocationMarker} from 'react-icons/hi' 
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">


            {/* left-side */}
            <motion.div
                initial={{x: "-2rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                 transition={{duration: 2, type: "spring"}}
            className="flexColStart hero-left">

                <div className="hero-title">
                    <div className="orange-circle"/>

                    <h1>
                        Discover <br /> Most Suitable <br /> Property
                    </h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>
                        Find a variety of properties that suit you easily
                    </span>
                    <span className='secondaryText'>
                        Forget all difficulties in finding a residence for you
                    </span>
                </div>
                <div className="flexCenter search-bar">

                    <HiLocationMarker color='var(--blue)' size={25} />
                    <input type="text" />
                    <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>

                
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>
                

                
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp  end={28} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Awards Winning</span>
                    </div>
                </div>
                </motion.div>
                {/* right-side */}
            <motion.div
                            initial={{x: "7rem", opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 2, type: "spring"}}
            className="flexCenter hero-right">
                <div

                className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>

            </motion.div>
        </div>
    </section>
  )
}

export default Hero
