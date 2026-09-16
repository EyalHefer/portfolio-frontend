import { useState } from 'react';
import axios from 'axios';

function ContactSection() {
  // שמירת הנתונים שהמשתמש מקליד בטופס
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });
  
  // מצב להצגת הודעת הצלחה או שגיאה אחרי השליחה
  const [statusMessage, setStatusMessage] = useState('');

  // פונקציה שמעדכנת את הנתונים ברגע שהמשתמש מקליד משהו
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // פונקציה שמופעלת בעת לחיצה על "שלח"
  const handleSubmit = (e) => {
    e.preventDefault(); // מונע מהדף להתרענן אוטומטית
    
    // שליחת בקשת POST לשרת שלנו 
    axios.post('https://formspree.io/f/xoevaypy', formData)
      .then(response => {
        setStatusMessage('Message sent successfully! 🚀');
        setFormData({ name: '', email: '', content: '' }); // איפוס הטופס
      })
      .catch(error => {
        setStatusMessage('Error sending message. Please try again.');
        console.error('Error:', error);
      });
  };

  return (
    <div style={{ padding: '50px 20px', textAlign: 'center', borderTop: '1px solid #333' }}>
      <h2 style={{ color: '#fff' }}>Contact Me</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          style={{ padding: '10px', width: '300px', backgroundColor: '#222', color: '#00ffcc', border: '1px solid #00ffcc', borderRadius: '4px' }}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={{ padding: '10px', width: '300px', backgroundColor: '#222', color: '#00ffcc', border: '1px solid #00ffcc', borderRadius: '4px' }}
        />
        <textarea 
          name="content" 
          placeholder="Your Message" 
          value={formData.content} 
          onChange={handleChange} 
          required 
          rows="5"
          style={{ padding: '10px', width: '300px', backgroundColor: '#222', color: '#00ffcc', border: '1px solid #00ffcc', borderRadius: '4px', fontFamily: 'inherit' }}
        />
        <button type="submit" style={{ 
          padding: '10px 30px', 
          backgroundColor: 'transparent', 
          color: '#00ffcc', 
          border: '1px solid #00ffcc',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Send Message
        </button>
      </form>
      
      {/* הצגת הודעת הסטטוס (אם קיימת) */}
      {statusMessage && <p style={{ color: '#00ffcc', marginTop: '20px' }}>{statusMessage}</p>}
    </div>
  );
}

export default ContactSection;