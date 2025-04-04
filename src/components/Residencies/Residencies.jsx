import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import "./Residencies.css"
import data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/common'
import { motion } from 'framer-motion'
const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <motion.div
                        initial={{x: "-2rem", opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                         transition={{duration: 2, type: "spring"}}
        className="r-head flexColStart">
          <span className='orangeText'>
            Best Choices
          </span>
          <span className='primaryText'>
            Popular Residencies
          </span>
        </motion.div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {
            data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />


                  <span className="secondaryText r-price">
                    <span>$</span>
                    <span style={{color: "orange"}}>{card.price}</span>
                  </span>

                  <span className="primaryText">{card.name}</span>
                  <span className="SecondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            )

          )
          }
        </Swiper>

      </div>
    </section>
  )
}

export default Residencies

const SliderButtons = () => {
  const swiper = useSwiper();
  return(
    <div className="flexCenter r-buttons">
    <button onClick={() => swiper.slidePrev ()}>&lt;</button>
    <button onClick={() => swiper.slideNext ()}>&gt;</button>
    </div>
  );
};
