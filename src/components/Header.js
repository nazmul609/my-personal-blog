"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='bg-white shadow-sm border-b'>
      <nav className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center'>
          {/* Logo/Name */}
          <Link
            href='/'
            className='text-xl font-bold text-gray-900 hover:text-blue-600'
          >
            Nazmul Haque
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-6'>
            <Link
              href='/'
              className='text-gray-700 hover:text-blue-600 transition-colors'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='text-gray-700 hover:text-blue-600 transition-colors'
            >
              About
            </Link>
            <Link
              href='/projects'
              className='text-gray-700 hover:text-blue-600 transition-colors'
            >
              Projects
            </Link>
            <Link
              href='/blog'
              className='text-gray-700 hover:text-blue-600 transition-colors'
            >
              Blog
            </Link>
            <Link
              href='/contact'
              className='text-gray-700 hover:text-blue-600 transition-colors'
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 pb-4 border-t border-gray-200'>
            <div className='flex flex-col space-y-3 mt-4'>
              <Link
                href='/'
                className='text-gray-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href='/about'
                className='text-gray-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href='/projects'
                className='text-gray-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href='/blog'
                className='text-gray-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href='/contact'
                className='text-gray-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
