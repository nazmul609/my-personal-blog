export default function Contact() {
  return (
    <main className='min-h-screen bg-gray-50 py-8'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Get In Touch
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Have a project in mind or want to discuss opportunities? I would
            love to hear from you!
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                Contact Information
              </h2>

              <div className='space-y-6'>
                {/* Email */}
                <div className='flex items-start space-x-4'>
                  <div className='bg-blue-100 p-3 rounded-lg'>
                    <svg
                      className='w-6 h-6 text-blue-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900'>Email</h3>
                    <p className='text-gray-700'>nazmul.haq.cse@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className='flex items-start space-x-4'>
                  <div className='bg-green-100 p-3 rounded-lg'>
                    <svg
                      className='w-6 h-6 text-green-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900'>Phone</h3>
                    <p className='text-gray-700'>+880-1846245658</p>
                  </div>
                </div>

                {/* Location */}
                <div className='flex items-start space-x-4'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <svg
                      className='w-6 h-6 text-purple-600'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900'>Location</h3>
                    <p className='text-gray-700'>Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className='mt-8'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Connect With Me
                </h3>
                <div className='flex space-x-4'>
                  <a
                    href='https://linkedin.com/in/nazmul-hq'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                  <a
                    href='https://github.com/nazmul609'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                Send a Message
              </h2>

              <form className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Your Name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={5}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Tell me about your project or question...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium'
                >
                  Send Message
                </button>
              </form>

              <p className='mt-4 text-sm text-gray-600'>
                Note: This form is currently for display purposes. For now,
                please reach out directly via email or LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
