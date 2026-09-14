import { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectsSection() {
  // יצירת משתנה שישמור את הפרויקטים שיגיעו מהשרת
  const [projects, setProjects] = useState([]);

  // useEffect אומר ל-React: "תבצע את הקוד הזה פעם אחת ברגע שהרכיב עולה למסך"
  useEffect(() => {
    // פנייה לנתיב ה-GET שיצרנו בשרת ה-Backend שלנו
    axios.get('https://portfolio-backend-r6vr.onrender.com/api/projects')
      .then(response => {
        // אם ההבאה הצליחה, נשמור את המידע שהגיע במשתנה שלנו
        setProjects(response.data);
      })
      .catch(error => {
        console.error('שגיאה בשליפת הפרויקטים:', error);
      });
  }, []); // הסוגריים המרובעים הריקים אומרים שזה יקרה רק פעם אחת בטעינה

  return (
    // ממש כאן בשורה הזו מוסיפים את ה-id, על ה-div החיצוני
    <div id="projects" style={{ padding: '50px 20px', textAlign: 'center', borderTop: '1px solid #333' }}>
      <h2 style={{ color: '#fff' }}>My Projects</h2>
      
      {/* בדיקה: האם יש פרויקטים להציג? */}
      {projects.length === 0 ? (
        <p style={{ color: '#888' }}>Waiting for data from server...</p>
      ) : (
        // מכאן הורדתי את ה-id שהוספת בטעות, זה נשאר רק עם ה-style
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {/* מעבר על כל פרויקט ויצירת "כרטיסייה" עבורו */}
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
      )}
    </div>
  );
}

export default ProjectsSection;