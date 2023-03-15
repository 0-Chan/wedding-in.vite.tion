import { NavLink } from 'react-router-dom';
import { cls } from '../libs/utils';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 flex w-full max-w-xl justify-between border-t bg-white/40 px-10 pb-2 pt-3 text-xs text-gray-700">
      <NavLink
        to="/guest-book"
        className={({ isActive }) =>
          cls(
            'flex flex-col items-center space-y-2 ',
            isActive
              ? 'text-orange-500'
              : 'transition-colors hover:text-gray-500',
          )
        }
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          ></path>
        </svg>
        <span className="text-base font-bold">방명록</span>
      </NavLink>
      <NavLink
        to="/invitation"
        className={({ isActive }) =>
          cls(
            'flex flex-col items-center space-y-2 ',
            isActive
              ? 'text-orange-500'
              : 'transition-colors hover:text-gray-500',
          )
        }
      >
        {({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          ></path>
        </svg>
        <span className="text-base font-bold">홈</span>
      </NavLink>
      <NavLink
        to="/map"
        className={({ isActive }) =>
          cls(
            'flex flex-col items-center space-y-2 ',
            isActive
              ? 'text-orange-500'
              : 'transition-colors hover:text-gray-500',
          )
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        <span className="text-base font-bold">오시는 길</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
