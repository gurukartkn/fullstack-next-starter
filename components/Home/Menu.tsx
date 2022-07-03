import { Transition } from '@headlessui/react';
import Link from 'next/Link';
import { useEffect, useRef, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';

const Menu = () => {
  const [show, setShow] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!container?.current?.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, container]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!show) return;

      if (event.key === 'Escape') {
        setShow(false);
      }
    };

    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);

  return (
    <div ref={container} className="relative">
      <button
        className="menu focus:outline-none focus:shadow-solid "
        onClick={() => setShow(!show)}
      >
        <button className="bg-gray-300 p-3 rounded-full">
          <FaUserAlt />
        </button>
      </button>

      <Transition
        show={show}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="origin-top-right absolute right-0 w-48 py-2 mt-1 bg-white rounded shadow-md">
          <Link href="/profile">
            <a className="block px-4 py-2 ">Profile</a>
          </Link>
          <Link href="/api/logout">
            <a className="block px-4 py-2 ">Logout</a>
          </Link>
        </div>
      </Transition>
    </div>
  );
};

export default Menu;
