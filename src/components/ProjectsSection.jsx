function ProjectsSection() {
  const projects = [
    {
      name: "My Futuristic Website",
      description: "My very first Full-Stack project! Built entirely from scratch with React, Node.js, and MongoDB.",
      toolsAndSkills: ["React", "Node.js", "Web Development"],
      githubLink: "https://github.com/eyal/my-project"
    },
    
    {
      name: "Cherry-picking-restoration",
      description: "Analyzed and implemented complex cherry-picking algorithms based on theoretical research from an academic paper. Successfully converted advanced data management concepts into efficient code, demonstrating high-level problem-solving and independent research skills.",
      toolsAndSkills: ["Python", "Github", "Algoritmic Thinking"], 
      githubLink: "https://github.com/eyal/your-new-repo" 
    }
  ];

  return (
    <div id="projects" style={{ padding: '50px 20px', textAlign: 'center', borderTop: '1px solid #333' }}>
      <h2 style={{ color: '#fff' }}>My Projects</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ 
            border: '1px solid #00ffcc', 
            padding: '20px', 
            borderRadius: '8px',
            width: '250px'
          }}>
            <h3 style={{ marginTop: '0' }}>{project.name}</h3>
            <p>{project.description}</p>
            {/* אפשר גם להוסיף את הקישור לגיטהאב ככפתור קטן אם תרצה */}
            <p style={{ fontSize: '14px', color: '#ccc' }}>
              <strong style={{ color: '#00ffcc' }}>Tools & Skills:</strong> {project.toolsAndSkills.join(', ')}
            </p>

            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#00ffcc', textDecoration: 'none', fontSize: '14px' }}
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;