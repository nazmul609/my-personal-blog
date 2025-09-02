export default function About() {
  return (
    <main className='min-h-screen bg-gray-50 py-8'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>About Me</h1>
          <p className='text-xl text-gray-600'>
            Software Engineer passionate about building scalable applications
          </p>
        </div>

        {/* Main Content */}
        <div className='max-w-4xl mx-auto'>
          {/* Introduction */}
          <section className='bg-white rounded-lg shadow-md p-8 mb-8'>
            <h2 className='text-2xl font-semibold mb-4'>Introduction</h2>
            <p className='text-gray-700 text-lg leading-relaxed mb-4'>
              Hi! I am Md. Nazmul Haque, a Software Engineer based in Dhaka,
              Bangladesh. I specialize in full-stack development with expertise
              in modern web technologies and microservices architecture.
            </p>
            <p className='text-gray-700 text-lg leading-relaxed'>
              Currently, I work remotely at Peytosoft Corporation (Canada),
              where I develop scalable microservices and frontend applications
              that serve hundreds of users.
            </p>
          </section>

          {/* Experience */}
          <section className='bg-white rounded-lg shadow-md p-8 mb-8'>
            <h2 className='text-2xl font-semibold mb-6'>
              Professional Experience
            </h2>

            <div className='border-l-4 border-blue-500 pl-6'>
              <div className='mb-6'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  Software Engineer
                </h3>
                <p className='text-blue-600 font-medium'>
                  Peytosoft Corporation, Canada (Remote)
                </p>
                <p className='text-gray-600 mb-3'>March 2024 – Present</p>
                <ul className='text-gray-700 space-y-2'>
                  <li>
                    • Developed scalable microservices using Java and Spring
                    Boot
                  </li>
                  <li>
                    • Built React.js frontend features supporting 500+ active
                    users
                  </li>
                  <li>
                    • Deployed applications using Docker/Kubernetes on Azure
                    Cloud
                  </li>
                  <li>
                    • Collaborated with cross-functional teams using Agile/Scrum
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className='bg-white rounded-lg shadow-md p-8 mb-8'>
            <h2 className='text-2xl font-semibold mb-6'>Technical Skills</h2>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h3 className='font-semibold text-gray-900 mb-3'>Languages</h3>
                <div className='flex flex-wrap gap-2'>
                  {["Java", "JavaScript", "TypeScript", "Python", "C++"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900 mb-3'>
                  Frameworks & Technologies
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {["React.js", "Spring Boot", "Node.js", "TailwindCSS"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm'
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900 mb-3'>Databases</h3>
                <div className='flex flex-wrap gap-2'>
                  {["MySQL", "PostgreSQL", "Oracle", "MongoDB"].map((skill) => (
                    <span
                      key={skill}
                      className='bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className='font-semibold text-gray-900 mb-3'>
                  Tools & Platforms
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {["Docker", "Kubernetes", "Azure", "Git", "Nginx"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className='bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm'
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className='bg-white rounded-lg shadow-md p-8'>
            <h2 className='text-2xl font-semibold mb-4'>Education</h2>
            <div className='border-l-4 border-green-500 pl-6'>
              <h3 className='text-xl font-semibold text-gray-900'>
                Bachelor of Science in Computer Science and Engineering
              </h3>
              <p className='text-green-600 font-medium'>
                Khulna University of Engineering and Technology (KUET)
              </p>
              <p className='text-gray-600'>2018 – 2023 | CGPA: 3.57/4.00</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
