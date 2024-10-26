import React, {useState} from 'react'
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";

const AccordionData = ({ title, content }) => {
    const [isActive, setIsActve] = useState(null);

    function handleClick(index) {
        setIsActve(index === isActive ? null: index);
    }
    return (
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => handleClick(index)}>
            <h4>{title}</h4>
            <span>{isActive ? <HiChevronUp className='icon' />: <HiChevronDown className='icon'/>  }</span>
          </div>
          <div className='content'>
             {isActive ? <p className="accordion-content">{content}</p>: null}
          </div>
          
        </div>
      );
}

export default AccordionData
 
