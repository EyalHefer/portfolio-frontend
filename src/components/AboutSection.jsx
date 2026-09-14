function AboutSection() {
  return (
    <div style={{ padding: '50px 20px', textAlign: 'center', backgroundColor: '#111', borderTop: '1px solid #333' }}>
      <h2 style={{ color: '#fff' }}>About Me</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto 30px auto', lineHeight: '1.6', color: '#ccc' }}>
        Hi, I'm Eyal. I am a passionate Full-Stack Developer who loves building futuristic and interactive web applications. 
        I specialize in React, Node.js, and MongoDB, constantly exploring new technologies to improve my craft.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <a 
          href="Eyal Hefer CV Junior..pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ padding: '10px 20px', backgroundColor: '#00ffcc', color: '#000', textDecoration: 'none', fontWeight: 'bold', borderRadius: '4px' }}
        >
          Download CV
        </a>
        <a 
          href="https://www.linkedin.com/in/eyal-hefer-755088265/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ padding: '10px 20px', backgroundColor: 'transparent', color: '#00ffcc', border: '1px solid #00ffcc', textDecoration: 'none', fontWeight: 'bold', borderRadius: '4px' }}
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
}

export default AboutSection;