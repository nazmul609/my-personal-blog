export default function Home() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-8'>
        {/* Hero Section */}
        <section className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Md. Nazmul Haque
          </h1>
          <p className='text-xl text-gray-600 mb-6'>
            Software Engineer | Full-Stack Developer
          </p>
          <p className='text-lg text-gray-700 max-w-2xl mx-auto'>
            Welcome to my personal blog where I share my journey in software
            development, insights about modern web technologies, and experiences
            building scalable applications.
          </p>
        </section>

        {/* Quick Info */}
        <section className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>About Me</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <h3 className='font-semibold mb-2'>Current Role</h3>
              <p className='text-gray-700'>
                Software Engineer at Peytosoft Corporation (Remote)
              </p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Location</h3>
              <p className='text-gray-700'>Dhaka, Bangladesh</p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Education</h3>
              <p className='text-gray-700'>B.Sc. CSE from KUET</p>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>Specialization</h3>
              <p className='text-gray-700'>
                React.js, Spring Boot, Microservices
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className='text-center'>
          <h2 className='text-2xl font-semibold mb-4'>
            Blog Posts Coming Soon!
          </h2>
          <p className='text-gray-600'>
            I am currently setting up this blog. Stay tuned for posts about web
            development, software engineering best practices, and my project
            experiences.
          </p>
        </section>
      </div>
    </main>
  );
}
