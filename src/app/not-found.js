import Link from "next/link";

export default function NotFound() {
  return (
    <main className='min-h-screen bg-gray-50 flex items-center justify-center py-8'>
      <div className='text-center px-4'>
        <div className='max-w-md mx-auto'>
          {/* 404 Illustration */}
          <div className='mb-8'>
            <div className='text-8xl font-bold text-gray-300 mb-4'>404</div>
            <div className='w-24 h-1 bg-blue-600 mx-auto rounded'></div>
          </div>

          {/* Error Message */}
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            Page Not Found
          </h1>
          <p className='text-gray-600 mb-8 leading-relaxed'>
            Oops! The page you`re looking for doesn`t exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>

          {/* Navigation Options */}
          <div className='space-y-4'>
            <Link
              href='/'
              className='inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium'
            >
              Go Home
            </Link>

            <div className='flex justify-center space-x-4 mt-6'>
              <Link
                href='/blog'
                className='text-blue-600 hover:text-blue-700 transition-colors'
              >
                Browse Blog
              </Link>
              <span className='text-gray-400'>•</span>
              <Link
                href='/projects'
                className='text-blue-600 hover:text-blue-700 transition-colors'
              >
                View Projects
              </Link>
              <span className='text-gray-400'>•</span>
              <Link
                href='/contact'
                className='text-blue-600 hover:text-blue-700 transition-colors'
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
