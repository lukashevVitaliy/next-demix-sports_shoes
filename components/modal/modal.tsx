import React from 'react';
import { RiArrowLeftRightFill } from 'react-icons/ri';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  active: boolean;
}

const Modal = ({ children, title, onClose, active }: ModalProps) => {
  return (
    <div className={active ? 'visible opacity-100 ' : 'invisible opacity-0 '}>
      <div
        className={
          active
            ? 'absolute bg-black/70 top-0 right-0 left-0 bottom-0 scale-100 z-10 backdrop-blur-sm'
            : 'absolute bg-black/70 top-0 right-0 left-0 bottom-0 scale-0 z-10'
        }
        onClick={onClose}
      />
      <div
        className={
          active
            ? 'w-[1024px] p-5 rounded bg-white absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 shadow shadow-lg shadow-black z-10 visible opacity-100 transition-all'
            : 'w-[1024px] p-5 rounded bg-white absolute top-1/2 -right-[100%] z-10 invisible opacity-0 transition-all'
        }
      >
        <RiArrowLeftRightFill
          className="absolute top-5 right-5 text-lg hover:text-lime-400 transition-all"
          onClick={onClose}
        />
        <h5 className="mb-5">{title}</h5>
        {children}
      </div>
    </div>
  );
};

export default Modal;
