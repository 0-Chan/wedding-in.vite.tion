import { useState } from 'react';

function Accordion({ title, children, open = false }) {
  const [isOpen, setIsOpen] = useState(open);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="mt-1 overflow-hidden rounded-lg border border-orange-300">
      <button
        className="focus:shadow-outline flex w-full items-center justify-center bg-orange-100 px-4 py-3 text-center text-lg font-medium transition duration-300 focus:bg-orange-200 focus:outline-none active:bg-orange-300"
        onClick={handleToggle}
      >
        <span className="mx-auto">{title}</span>
        <svg
          className={`h-6 w-6 transform ${
            isOpen ? '-rotate-90' : ''
          } transition duration-300`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 0 1 1 1v6.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 10.586V4a1 1 0 0 1 1-1z"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } border-t border-orange-200 bg-orange-100 px-4 py-3`}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
