function HeroSection() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>Eyal's Futuristic Portfolio! 🚀</h1>
      <p>Full-Stack Developer | Building Digital Experiences</p>
<button 
  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
  style={{ 
    marginTop: '20px', 
    padding: '10px 20px', 
    backgroundColor: 'transparent', 
    color: '#00ffcc', 
    border: '1px solid #00ffcc',
    cursor: 'pointer',
    fontWeight: 'bold'
  }}
>
  View Projects
</button>
    </div>
  );
}

export default HeroSection;