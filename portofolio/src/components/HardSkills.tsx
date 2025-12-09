import "../styles/main.css";

const hardSkills = [
  {
    category: "Languages",
    skills: ["Java", "Kotlin", "SQL", "JavaScript (ES6+)"]
  },
  {
    category: "Messaging",
    skills: ["RabbitMQ", "Kafka", "WebSocket/STOMP"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "Spring Boot", "Spring Cloud", "Spring Security", "Spring Data JPA", "Hibernate", "GraphQL", "Retrofit", "Lombok", "MapStruct", "Feign Client", "OneSignal API", "Stripe SDK", "OAuth 2.0", "JWT (JSON Web Tokens)", "ZK Framework"
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: ["Azure", "Docker", "Kubernetes", "Git", "Docker Compose"]
  },
  {
    category: "Backend & Architecture",
    skills: ["Microservices", "Event-Driven Systems", "Distributed Systems", "API Design (REST & GraphQL)", "API Integration"]
  },
  {
    category: "Testing",
    skills: ["JUnit", "Mockito", "Integration Testing"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQL Server", "SQL Query Optimization"]
  },
  {
    category: "Tools",
    skills: ["IntelliJ IDEA", "Postman", "Swagger/OpenAPI", "Jira", "GitHub", "Maven"]
  }
];

export default function HardSkills() {
  return (
    <section id="hard-skills" className="hard-skills-section">
      <h2 className="hard-skills-title">Hard Skills</h2>
      <div className="hard-skills-table">
        {hardSkills.map(({ category, skills }) => (
          <div className="hard-skills-row" key={category}>
            <div className="hard-skills-category">{category}</div>
            <div className="hard-skills-list">
              {skills.map(skill => (
                <span className="hard-skill-pill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
