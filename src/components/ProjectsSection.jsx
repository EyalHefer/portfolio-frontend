function ProjectsSection() {
  // רשימת הפרויקטים שלנו שמורה עכשיו ישירות בקוד (Hardcoded)
  const projects = [
    {
      name: "My Futuristic Website",
      description: "My very first Full-Stack project! Built entirely from scratch with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/eyal/my-project"
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;