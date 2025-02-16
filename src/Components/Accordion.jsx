import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=' border border-gray-200 rounded-lg shadow-sm mb-4'>
            <button className='w-full cursor-pointer flex justify-between items-center text-left font-semibold text-gray-600 px-6 py-4 bg-gray-100 rounded-t-lg' onClick={toggleAccordion}>
                {title}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen && (
                <div className='px-6 py-4 text-gray-600'>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;
