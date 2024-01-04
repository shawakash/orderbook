import React, { FunctionComponent } from 'react';

interface ButtonProps {
  title: string;
  backgroundColor: string;
  callback: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ title, backgroundColor = 'indigo-700', callback }) => {
  return (
    <button
      className={`px-3 py-1 m-4 rounded bg-${backgroundColor} text-white font-sans text-lg focus:outline-none hover:opacity-80`}
      onClick={callback}
    >
      {title}
    </button>
  );
};

export default Button;
