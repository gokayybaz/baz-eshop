import React, { useState } from 'react';

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='border-b border-gray-300'>
            <button className='w-full text-left py-4' onClick={toggleAccordion}>
                <h3 className='text-lg font-semibold'>{title}</h3>
            </button>
            {isOpen && <div className='py-4'>{children}</div>}
        </div>
    );
}

export default Accordion;
