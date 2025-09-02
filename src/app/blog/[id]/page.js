// Sample blog post data - in a real app, this would come from a CMS or database
import Link from "next/link";

const blogPosts = {
  1: {
    id: 1,
    title: "Getting Started with Microservices Architecture",
    content: `
  # Introduction
  
  Microservices architecture has revolutionized how we build and deploy applications. In my experience at Peytosoft Corporation, I've worked extensively with microservices using Java and Spring Boot, and I want to share some key insights.
  
  ## What are Microservices?
  
  Microservices are small, independent services that communicate over well-defined APIs. Unlike monolithic applications where all components are interconnected, microservices allow teams to develop, deploy, and scale services independently.
  
  ## Key Benefits I've Experienced
  
  ### 1. Independent Deployment
  Each service can be deployed independently, reducing the risk of system-wide failures.
  
  ### 2. Technology Diversity
  Different services can use different technologies based on their specific needs.
  
  ### 3. Scalability
  Services can be scaled independently based on demand.
  
  ## Implementation Strategy
  
  When we implemented microservices at Peytosoft, we followed these steps:
  
  1. **Identify Service Boundaries**: We analyzed our domain and identified clear business boundaries.
  2. **Start Small**: We began by extracting one service from our monolith.
  3. **API-First Design**: We designed our APIs before implementation.
  4. **Implement Circuit Breakers**: To handle service failures gracefully.
  
  ## Challenges and Solutions
  
  ### Challenge 1: Service Communication
  **Problem**: Managing communication between services
  **Solution**: We used REST APIs with proper error handling and implemented message queues for asynchronous communication.
  
  ### Challenge 2: Data Management
  **Problem**: Each service needs its own database
  **Solution**: We implemented the Database-per-Service pattern and used event sourcing for data consistency.
  
  ## Docker and Kubernetes Integration
  
  Containerization is crucial for microservices. Here's how we approached it:
  
  \`\`\`bash
  # Dockerfile example for Spring Boot service
  FROM openjdk:11-jre-slim
  COPY target/service.jar app.jar
  EXPOSE 8080
  ENTRYPOINT ["java", "-jar", "/app.jar"]
  \`\`\`
  
  We deployed these containers on Azure Kubernetes Service (AKS), which provided:
  - Automatic scaling
  - Load balancing
  - Service discovery
  - Health checks
  
  ## Best Practices
  
  1. **Keep Services Small**: A service should do one thing well
  2. **Design for Failure**: Assume services will fail and plan accordingly
  3. **Monitor Everything**: Comprehensive logging and monitoring are essential
  4. **Automate Testing**: Unit, integration, and contract testing
  5. **Security**: Implement proper authentication and authorization
  
  ## Conclusion
  
  Microservices aren't a silver bullet, but when implemented correctly, they can significantly improve your application's scalability and maintainability. The key is to start small, learn from experience, and iterate.
  
  If you're considering microservices for your project, I'd recommend starting with a pilot service and gradually expanding your architecture.
      `,
    date: "2024-09-01",
    readTime: "8 min read",
    category: "Architecture",
    author: "Nazmul Haque",
  },
  2: {
    id: 2,
    title: "React.js Best Practices for Enterprise Applications",
    content: `
  # React.js Best Practices for Enterprise Applications
  
  Having worked on React applications serving 500+ active users at Peytosoft Corporation, I've learned several best practices that are crucial for enterprise-level applications.
  
  ## Component Architecture
  
  ### 1. Component Composition over Inheritance
  React favors composition over inheritance. Here's how we structure our components:
  
  \`\`\`jsx
  // Good: Composition
  function UserProfile({ user, children }) {
    return (
      <div className="user-profile">
        <UserAvatar user={user} />
        <UserInfo user={user} />
        {children}
      </div>
    );
  }
  \`\`\`
  
  ### 2. Custom Hooks for Business Logic
  Extract business logic into custom hooks for reusability:
  
  \`\`\`jsx
  // useUserData.js
  function useUserData(userId) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      fetchUser(userId).then(setUser).finally(() => setLoading(false));
    }, [userId]);
    
    return { user, loading };
  }
  \`\`\`
  
  ## State Management
  
  ### Use Context API Wisely
  For enterprise applications, we use Context API for global state that doesn't change frequently:
  
  \`\`\`jsx
  const AuthContext = createContext();
  
  function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    );
  }
  \`\`\`
  
  ## Performance Optimization
  
  ### 1. Code Splitting
  We implement route-based code splitting:
  
  \`\`\`jsx
  const Dashboard = lazy(() => import('./Dashboard'));
  const Profile = lazy(() => import('./Profile'));
  
  function App() {
    return (
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    );
  }
  \`\`\`
  
  ### 2. Memoization
  Use React.memo and useMemo for expensive operations:
  
  \`\`\`jsx
  const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
    const processedData = useMemo(() => {
      return processLargeDataset(data);
    }, [data]);
    
    return <div>{processedData}</div>;
  });
  \`\`\`
  
  ## Error Handling
  
  Implement error boundaries for graceful error handling:
  
  \`\`\`jsx
  class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    
    render() {
      if (this.state.hasError) {
        return <ErrorFallback />;
      }
      return this.props.children;
    }
  }
  \`\`\`
  
  ## Testing Strategy
  
  We maintain a comprehensive testing strategy:
  
  1. **Unit Tests**: Test individual components and hooks
  2. **Integration Tests**: Test component interactions
  3. **E2E Tests**: Test complete user workflows
  
  ## Conclusion
  
  These practices have helped us build robust, scalable React applications. The key is to establish patterns early and stick to them consistently across your team.
      `,
    date: "2024-08-25",
    readTime: "6 min read",
    category: "React",
    author: "Nazmul Haque",
  },
  3: {
    id: 3,
    title: "Deploying Applications with Docker and Kubernetes",
    content: `
  # Deploying Applications with Docker and Kubernetes
  
  Container orchestration has become essential for modern application deployment. Here's my experience deploying applications using Docker and Kubernetes on Azure Cloud.
  
  ## Docker Fundamentals
  
  ### Creating Efficient Dockerfiles
  Here's how we structure our Dockerfiles for optimal performance:
  
  \`\`\`dockerfile
  # Multi-stage build for Spring Boot
  FROM maven:3.8.4-openjdk-11 AS build
  WORKDIR /app
  COPY pom.xml .
  RUN mvn dependency:go-offline
  COPY src ./src
  RUN mvn clean package -DskipTests
  
  FROM openjdk:11-jre-slim
  WORKDIR /app
  COPY --from=build /app/target/*.jar app.jar
  EXPOSE 8080
  ENTRYPOINT ["java", "-jar", "app.jar"]
  \`\`\`
  
  ## Kubernetes Deployment
  
  ### Deployment Configuration
  \`\`\`yaml
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: my-app
  spec:
    replicas: 3
    selector:
      matchLabels:
        app: my-app
    template:
      metadata:
        labels:
          app: my-app
      spec:
        containers:
        - name: my-app
          image: my-app:latest
          ports:
          - containerPort: 8080
          resources:
            requests:
              memory: "256Mi"
              cpu: "250m"
            limits:
              memory: "512Mi"
              cpu: "500m"
  \`\`\`
  
  ## Best Practices
  
  1. **Security**: Use non-root users in containers
  2. **Resource Management**: Set proper resource limits
  3. **Health Checks**: Implement liveness and readiness probes
  4. **Monitoring**: Use tools like Prometheus and Grafana
  
  ## Conclusion
  
  Docker and Kubernetes provide powerful tools for application deployment and scaling. The key is to start simple and gradually adopt more advanced features as your needs grow.
      `,
    date: "2024-08-15",
    readTime: "10 min read",
    category: "DevOps",
    author: "Nazmul Haque",
  },
  4: {
    id: 4,
    title: "Building RESTful APIs with Spring Boot",
    content: `
  # Building RESTful APIs with Spring Boot
  
  Spring Boot makes it incredibly easy to build production-ready RESTful APIs. Here's what I've learned from building scalable APIs for enterprise applications.
  
  ## Project Structure
  
  We follow a layered architecture approach:
  
  \`\`\`
  src/main/java/com/example/api/
  ├── controller/
  ├── service/
  ├── repository/
  ├── model/
  ├── dto/
  └── config/
  \`\`\`
  
  ## Controller Best Practices
  
  ### 1. Use DTOs for Request/Response
  \`\`\`java
  @RestController
  @RequestMapping("/api/users")
  public class UserController {
      
      @PostMapping
      public ResponseEntity<UserResponseDTO> createUser(
              @Valid @RequestBody UserCreateDTO userDto) {
          User user = userService.createUser(userDto);
          return ResponseEntity.status(HttpStatus.CREATED)
                  .body(UserMapper.toResponseDTO(user));
      }
  }
  \`\`\`
  
  ### 2. Implement Proper Error Handling
  \`\`\`java
  @ControllerAdvice
  public class GlobalExceptionHandler {
      
      @ExceptionHandler(ValidationException.class)
      public ResponseEntity<ErrorResponse> handleValidation(
              ValidationException e) {
          ErrorResponse error = new ErrorResponse(
              "VALIDATION_ERROR", 
              e.getMessage()
          );
          return ResponseEntity.badRequest().body(error);
      }
  }
  \`\`\`
  
  ## Service Layer
  
  Keep business logic in service classes:
  
  \`\`\`java
  @Service
  @Transactional
  public class UserService {
      
      private final UserRepository userRepository;
      
      public User createUser(UserCreateDTO userDto) {
          if (userRepository.existsByEmail(userDto.getEmail())) {
              throw new ValidationException("Email already exists");
          }
          
          User user = UserMapper.toEntity(userDto);
          return userRepository.save(user);
      }
  }
  \`\`\`
  
  ## Database Integration
  
  Use JPA repositories with custom queries when needed:
  
  \`\`\`java
  @Repository
  public interface UserRepository extends JpaRepository<User, Long> {
      
      boolean existsByEmail(String email);
      
      @Query("SELECT u FROM User u WHERE u.status = :status")
      List<User> findByStatus(@Param("status") UserStatus status);
  }
  \`\`\`
  
  ## Security Implementation
  
  Implement JWT-based authentication:
  
  \`\`\`java
  @Configuration
  @EnableWebSecurity
  public class SecurityConfig {
      
      @Bean
      public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
          return http
              .csrf().disable()
              .authorizeHttpRequests(auth -> auth
                  .requestMatchers("/api/auth/**").permitAll()
                  .anyRequest().authenticated()
              )
              .oauth2ResourceServer(oauth2 -> oauth2.jwt())
              .build();
      }
  }
  \`\`\`
  
  ## Testing
  
  Write comprehensive tests for your APIs:
  
  \`\`\`java
  @SpringBootTest
  @AutoConfigureTestDatabase
  class UserControllerTest {
      
      @Autowired
      private MockMvc mockMvc;
      
      @Test
      void shouldCreateUser() throws Exception {
          UserCreateDTO userDto = new UserCreateDTO("John", "john@example.com");
          
          mockMvc.perform(post("/api/users")
                  .contentType(MediaType.APPLICATION_JSON)
                  .content(objectMapper.writeValueAsString(userDto)))
                  .andExpect(status().isCreated())
                  .andExpect(jsonPath("$.name").value("John"));
      }
  }
  \`\`\`
  
  ## Documentation
  
  Use OpenAPI/Swagger for API documentation:
  
  \`\`\`java
  @Configuration
  public class OpenApiConfig {
      
      @Bean
      public OpenAPI customOpenAPI() {
          return new OpenAPI()
              .info(new Info()
                  .title("User Management API")
                  .version("1.0")
                  .description("API for managing users"));
      }
  }
  \`\`\`
  
  ## Conclusion
  
  Building robust RESTful APIs with Spring Boot requires attention to structure, security, testing, and documentation. These practices have helped us build APIs that are maintainable and scalable.
      `,
    date: "2024-08-05",
    readTime: "7 min read",
    category: "Backend",
    author: "Nazmul Haque",
  },
};

export default function BlogPost({ params }) {
  const { id } = params;
  const post = blogPosts[id];

  // If post doesn't exist, show not found
  if (!post) {
    return (
      <main className='min-h-screen bg-gray-50 py-8'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Post Not Found
          </h1>
          <p className='text-gray-600 mb-8'>
            The blog post you`re looking for doesn`t exist.
          </p>
          <a
            href='/blog'
            className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'
          >
            Back to Blog
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className='min-h-screen bg-gray-50 py-8'>
      <article className='container mx-auto px-4'>
        {/* Breadcrumb */}
        <nav className='mb-8'>
          <div className='flex items-center space-x-2 text-sm text-gray-600'>
            <Link href='/' className='hover:text-blue-600'>
              Home
            </Link>
            <span>›</span>
            <a href='/blog' className='hover:text-blue-600'>
              Blog
            </a>
            <span>›</span>
            <span className='text-gray-900'>{post.title}</span>
          </div>
        </nav>

        {/* Article Header */}
        <header className='max-w-4xl mx-auto mb-12'>
          <div className='bg-white rounded-lg shadow-md p-8'>
            <div className='flex items-center mb-4'>
              <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'>
                {post.category}
              </span>
            </div>

            <h1 className='text-4xl font-bold text-gray-900 mb-6 leading-tight'>
              {post.title}
            </h1>

            <div className='flex items-center justify-between text-gray-600 border-t pt-6'>
              <div className='flex items-center space-x-4'>
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <div className='flex space-x-4'>
                <button className='text-gray-500 hover:text-blue-600'>
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-lg shadow-md p-8'>
            <div className='prose prose-lg max-w-none'>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/\n/g, "<br>")
                    .replace(/#{1,3} /g, (match) => {
                      const level = match.length - 1;
                      return `<h${level} class="text-${
                        4 - level
                      }xl font-bold text-gray-900 mt-8 mb-4">`;
                    })
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(
                      /`([^`]+)`/g,
                      '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>'
                    )
                    .replace(
                      /```(\w+)?\n([\s\S]*?)\n```/g,
                      '<pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6"><code>$2</code></pre>'
                    ),
                }}
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className='max-w-4xl mx-auto mt-12'>
          <div className='flex justify-between items-center'>
            <a
              href='/blog'
              className='bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors'
            >
              ← Back to Blog
            </a>

            <div className='flex space-x-4'>
              {parseInt(id) > 1 && (
                <a
                  href={`/blog/${parseInt(id) - 1}`}
                  className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  ← Previous
                </a>
              )}
              {parseInt(id) < Object.keys(blogPosts).length && (
                <a
                  href={`/blog/${parseInt(id) + 1}`}
                  className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  Next →
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

