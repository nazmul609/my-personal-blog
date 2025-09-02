export default function Projects() {
  const projects = [
    {
      title: "Restoura – Food Ordering Platform",
      status: "Ongoing",
      description:
        "A full-stack, multi-role platform using React.js and Spring Boot microservices backend. Features secure JWT authentication, SSO integration, payment gateway, and real-time order updates.",
      technologies: [
        "React.js",
        "Spring Boot",
        "PostgreSQL",
        "JWT",
        "Microservices",
      ],
      liveDemo: "https://restoura.com/",
      sourceCode: null,
      highlights: [
        "Multi-role platform with secure authentication",
        "Real-time order tracking system",
        "Integrated payment gateway",
        "Microservices architecture",
      ],
    },
    {
      title: "Healthcare Appointment Booking System",
      status: "2024",
      description:
        "Role-based scheduling system for doctors and patients built with React.js and Spring Boot. Features include intelligent time-slot management and secure access control.",
      technologies: ["React.js", "Spring Boot", "MySQL", "REST APIs"],
      liveDemo: null,
      sourceCode: "https://github.com/nazmul609/doctor-appointment",
      highlights: [
        "Role-based access control (Doctor/Patient)",
        "Smart time-slot management",
        "Secure authentication workflows",
        "RESTful API architecture",
      ],
    },
    {
      title: "AI Snake Game",
      status: "2022",
      description:
        "An intelligent snake game featuring AI agents with heuristic pathfinding algorithms, built with Python and Pygame.",
      technologies: ["Python", "Pygame", "AI Algorithms", "Pathfinding"],
      liveDemo: null,
      sourceCode: "https://github.com/nazmul609/CSE-4110--ai_snail_game",
      highlights: [
        "AI-powered snake agent",
        "Heuristic pathfinding algorithms",
        "Custom game mechanics",
        "Python GUI development",
      ],
    },
  ];

  return (
    <main className='min-h-screen bg-gray-50 py-8'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>My Projects</h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            A collection of applications I have built showcasing full-stack
            development, mobile apps, AI implementations, and modern web
            technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='max-w-6xl mx-auto'>
          <div className='grid gap-8 md:grid-cols-2'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='p-6'>
                  {/* Project Header */}
                  <div className='flex justify-between items-start mb-4'>
                    <h3 className='text-xl font-semibold text-gray-900 flex-1'>
                      {project.title}
                    </h3>
                    <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium ml-2'>
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className='text-gray-700 mb-4 leading-relaxed'>
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className='mb-4'>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      Key Features:
                    </h4>
                    <ul className='text-sm text-gray-700 space-y-1'>
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className='mb-4'>
                    <h4 className='font-semibold text-gray-900 mb-2'>
                      Technologies:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className='bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className='flex gap-3'>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium'
                      >
                        Live Demo
                      </a>
                    )}
                    {project.sourceCode && (
                      <a
                        href={project.sourceCode}
                        className='bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-sm font-medium'
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Section */}
        <div className='max-w-4xl mx-auto mt-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
            Research & Publications
          </h2>

          <div className='space-y-6'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                A Two-Stream Fusion Network for Human Fall Detection in Video
                Surveillance
              </h3>
              <p className='text-blue-600 font-medium mb-2'>Thesis • 2023</p>
              <p className='text-gray-700 leading-relaxed'>
                Proposed a 3D CNN-based neural network with visual-temporal
                fusion architecture, achieving 95.91% precision for human fall
                detection using deep learning techniques.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Deep Learning Techniques in Cyclone Detection with Cyclone Eye
                Localization
              </h3>
              <p className='text-blue-600 font-medium mb-2'>
                Conference Publication • 2022
              </p>
              <p className='text-gray-700 leading-relaxed mb-3'>
                Presented a deep learning and image processing solution for
                cyclone detection and eye localization using satellite images.
              </p>
              <p className='text-sm text-gray-600'>
                Published in International Conference on Big Data, IoT, and
                Machine Learning (BIM), Springer
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

