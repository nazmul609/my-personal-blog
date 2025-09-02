export default function Blog() {
  // Sample blog posts - we'll make this dynamic later
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Microservices Architecture",
      excerpt:
        "A comprehensive guide to building scalable applications using microservices, based on my experience at Peytosoft Corporation.",
      date: "2024-09-01",
      readTime: "8 min read",
      category: "Architecture",
      featured: true,
    },
    {
      id: 2,
      title: "React.js Best Practices for Enterprise Applications",
      excerpt:
        "Key principles and patterns I've learned while building React applications that serve hundreds of users.",
      date: "2024-08-25",
      readTime: "6 min read",
      category: "React",
    },
    {
      id: 3,
      title: "Deploying Applications with Docker and Kubernetes",
      excerpt:
        "Step-by-step guide to containerizing your applications and deploying them on Kubernetes clusters.",
      date: "2024-08-15",
      readTime: "10 min read",
      category: "DevOps",
    },
    {
      id: 4,
      title: "Building RESTful APIs with Spring Boot",
      excerpt:
        "Learn how to create robust, scalable APIs using Spring Boot with proper error handling and security.",
      date: "2024-08-05",
      readTime: "7 min read",
      category: "Backend",
    },
  ];

  const categories = ["All", "Architecture", "React", "DevOps", "Backend"];

  return (
    <main className='min-h-screen bg-gray-50 py-8'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Blog</h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Thoughts, tutorials, and insights about software development, web
            technologies, and my journey as a software engineer.
          </p>
        </div>

        {/* Categories Filter */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category) => (
            <button
              key={category}
              className='px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors'
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className='max-w-4xl mx-auto mb-12'>
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <div
                key={post.id}
                className='bg-white rounded-lg shadow-lg overflow-hidden'
              >
                <div className='p-8'>
                  <div className='flex items-center mb-4'>
                    <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                      Featured
                    </span>
                    <span className='ml-3 text-sm text-gray-500'>
                      {post.category}
                    </span>
                  </div>
                  <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                    <a
                      href={`/blog/${post.id}`}
                      className='hover:text-blue-600 transition-colors'
                    >
                      {post.title}
                    </a>
                  </h2>
                  <p className='text-gray-700 text-lg leading-relaxed mb-4'>
                    {post.excerpt}
                  </p>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center text-sm text-gray-500'>
                      <span>{post.date}</span>
                      <span className='mx-2'>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <a
                      href={`/blog/${post.id}`}
                      className='text-blue-600 hover:text-blue-700 font-medium'
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Blog Posts Grid */}
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-8'>
            Recent Posts
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <article
                  key={post.id}
                  className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
                >
                  <div className='p-6'>
                    <div className='flex items-center mb-3'>
                      <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm'>
                        {post.category}
                      </span>
                    </div>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                      <a
                        href={`/blog/${post.id}`}
                        className='hover:text-blue-600 transition-colors'
                      >
                        {post.title}
                      </a>
                    </h3>
                    <p className='text-gray-600 mb-4 line-clamp-3'>
                      {post.excerpt}
                    </p>
                    <div className='flex items-center justify-between text-sm text-gray-500'>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className='max-w-2xl mx-auto mt-16 bg-white rounded-lg shadow-md p-8 text-center'>
          <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
            Stay Updated
          </h3>
          <p className='text-gray-600 mb-6'>
            Subscribe to get notified about new blog posts and updates.
          </p>
          <div className='flex gap-4 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
