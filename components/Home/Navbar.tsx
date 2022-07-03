import Link from 'next/Link';
import Menu from './Menu';

interface Props {
  loggedIn: boolean;
  email: string;
}

export const Navbar = ({ loggedIn }: Props) => {
  return (
    <div className=" sticky top-0 z-50 ">
      <nav className="bg-white shadow-md font-medium">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <button>
                  <svg
                    className="w-8 text-purple-500"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    stroke="currentColor"
                    fill="none"
                  >
                    <rect x="3" y="1" width="7" height="12" />
                    <rect x="3" y="17" width="7" height="6" />
                    <rect x="14" y="1" width="7" height="6" />
                    <rect x="14" y="11" width="7" height="12" />
                  </svg>
                </button>
              </Link>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            {loggedIn ? (
              <div className="px-3 py-2 flex items-center gap-5">
                <Menu />
              </div>
            ) : (
              <div className="px-3 py-2 flex items-center gap-5">
                <Link href="/login">
                  <button className="px-3 py-2 text-purple-500 hover:text-purple-800">
                    Sign in
                  </button>
                </Link>
                <Link href="/register">
                  <button className="px-3 py-2 border-2 border-purple-500 text-purple-500 rounded-md">
                    Sign up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
