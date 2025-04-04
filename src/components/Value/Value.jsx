import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'
import "./Value.css"
import data from "../../utils/accordion"

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>

            {/* right side  */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondaryText'>
                    We always be ready to help by providing the best service for you. 
                    <br />
                    We belive a good place to live can make your life better.
                </span>

                <Accordion className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {
                        data.map ((items, i) => {
                            const [className, setClassName] = useState(null)
                            return(
                                <AccordionItem className= {'accordionItem &{className}'} key={i} uuid={i}> 
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>

                                            <AccordionItemState>
                                                {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState>

                                            <div className="flexCenter icon">
                                                {items.icon}
                                            </div>
                                            <span className="primaryText">
                                                {items.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {items.detail}
                                        </p>
                                    </AccordionItemPanel>

                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value
