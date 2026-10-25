function ProjectsSection() {
  const projects = [
    {
      name: "My Futuristic Website",
      description: "My very first Full-Stack project! Built entirely from scratch with React, Node.js, and MongoDB.",
      toolsAndSkills: ["React", "Node.js", "Web Development"],
      githubLink: "https://github.com/EyalHefer/portfolio-frontend"
    },
    
    {
      name: "Cherry-picking-restoration",
      description: "Analyzed and implemented complex cherry-picking algorithms based on theoretical research from an academic paper. Successfully converted advanced data management concepts into efficient code, demonstrating high-level problem-solving and independent research skills.",
      toolsAndSkills: ["Python", "Github", "Algoritmic Thinking"], 
      githubLink: "https://github.com/EyalHefer/cherry-picking-restoration" 
    },

    {
      name: "Calorie-Tracker",
      description: "Built a Calorie tracker PWA. Users describe meals in natural language, Google Gemini estimates calories and protein, and the app generates smart meal recommendations to hit remaining daily targets. Weekly charts track goals. Vanilla JavaScript, Cloudflare Workers, works offline.",
      toolsAndSkills: ["Vanilla JavaScript", "Cloudflare Workers", "Web Development", "Claude Code", "Gemini API"], 
      githubLink: "https://github.com/EyalHefer/calorie-tracker" 
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