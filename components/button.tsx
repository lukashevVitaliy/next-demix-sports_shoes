import React from 'react';

interface IProps {
  title: string;
  addClass: string | undefined;
  onClick: () => void;
}

const Button = ({ title, onClick, addClass }: IProps) => {
  return (
    <button
      className={`block mx-auto mt-10 py-2 w-1/2 bg-black/80 ring-2 ring-lime-400 rounded-lg shadow text-white text-xs font-bold tracking-wider uppercase hover:text-lime-400 hover:shadow-lg hover:shadow-lime-400 transition-all ${addClass}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
