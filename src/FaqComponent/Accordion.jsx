import React from 'react';
import './Accordion.css'; 
import AccordionData from './AccordionData';


const Accordion = () => {
  
  let accordionItem = [
    { title: 'What does Propelio do?',
     content: 'Propelio is a Real Estate technology-focused platform designed to assist the millennials, Gen Zs and underserved communities in Nigeria who aspire to own a property but face financial constraints and barriers while trying to make entry into the traditional real estate market, and also help real estate investors in streamlining their operations.' 
    },
    { title: 'How can Propelio Real Estate help me sell or buy properties?', 
     content: '<strong>For sellers,</strong> Propelio can assist with everything from staging and marketing your home to navigating offers and closing the deal. <br /><strong>For buyers,</strong> Propelio can help find properties that match your criteria, arrange viewings, and handle negotiations.' 
    },
    { title: 'What benefits can I get when listing or buying a home through Propelio?', 
     content: 'This is the content for Accordion 3Access to an extensive network of buyers and sellers, professional staging and photography services, advanced marketing tactics, local market expertise, and exceptional customer service.' 
    },
    { title: 'What can Propelio do to sell my Property faster?',
     content: 'Propelio provides staging advice, professional photography, marketing plans, and open houses.'
     },
    { title: 'Does Propelio own the listed properties?', 
     content: 'Propelio does not own all the listed properties. But all the properties listed on our platform have been vetted by professionals, and are completely safe to buy, rent, lease or invest in.' 
    },
  ];

  return (
    <section className='section_7'>
         <h2>Frequently Asked Questions</h2>
         <div className="accordion">
           {accordionItem.map(({index, title, content}) =>{
            return (
              <AccordionData
                key={index}
                title={title}
                content={content}
        />
      )})}
    </div>
    </section>
    
  );
};

export default Accordion;
