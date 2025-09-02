import Link from "next/link";

export default function Header() {
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

          {/* Navigation Links */}
          <div className='flex space-x-6'>
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
        </div>
      </nav>
    </header>
  );
}
