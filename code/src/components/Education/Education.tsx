import React from 'react';
import styles from './Education.module.scss';

// Define education data
interface EducationItem {
  id: string;
  institution: string;
  institutionLogo?: string;
  degree: string;
  field: string;
  location: string;
  startDate: string; // Format: "YYYY"
  endDate: string;
  description?: string;
  relevantCourses?: string[];
  achievements?: string[];
}

const educationData: EducationItem[] = [
  {
    id: "edu-1",
    institution: "University of Technology",
    institutionLogo: "https://via.placeholder.com/80",
    degree: "Master of Science",
    field: "Information and Communications Technology Engineering",
    location: "Chicago, IL",
    startDate: "2014",
    endDate: "2016",
    description: "Focused on advanced networking, distributed systems, and cloud architecture with an emphasis on scalable solutions.",
    relevantCourses: [
      "Advanced Distributed Systems",
      "Cloud Computing Architecture",
      "Network Security Principles",
      "Advanced Database Systems",
      "Software Engineering Methodologies"
    ],
    achievements: [
      "Graduated with honors (GPA: 3.8/4.0)",
      "Teaching Assistant for Introduction to Programming",
      "Completed thesis on 'Optimizing Microservice Communication Patterns'"
    ]
  },
  {
    id: "edu-2",
    institution: "Technical Institute",
    institutionLogo: "https://via.placeholder.com/80",
    degree: "Bachelor of Science",
    field: "Mechatronics Engineering",
    location: "Mexico City, MX",
    startDate: "2009",
    endDate: "2013",
    description: "Multidisciplinary program combining mechanical engineering, electronics, computer science, and control systems.",
    relevantCourses: [
      "Digital Systems Design",
      "Embedded Systems Programming",
      "Control Systems",
      "Robotics Fundamentals",
      "Computer Architecture"
    ],
    achievements: [
      "Graduated summa cum laude",
      "Led team that won 2nd place in National Robotics Competition",
      "Published undergraduate research paper on automation systems"
    ]
  },
  {
    id: "edu-3",
    institution: "Professional Certifications",
    degree: "Technical Certifications",
    field: "Software Development & Cloud",
    location: "Online",
    startDate: "2017",
    endDate: "Present",
    description: "Ongoing professional development through industry-recognized certifications.",
    achievements: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Cloud Developer",
      "Microsoft Certified: Azure Developer Associate",
      "Professional Scrum Master (PSM I)"
    ]
  }
];

const Education: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Education</h2>
        <div className={styles.headingUnderline}></div>
      </div>
      
      <div className={styles.educationList}>
        {educationData.map((education) => (
          <div key={education.id} className={styles.educationCard}>
            <div className={styles.cardHeader}>
              {education.institutionLogo && (
                <div className={styles.logoContainer}>
                  <img 
                    src={education.institutionLogo} 
                    alt={`${education.institution} logo`} 
                    className={styles.institutionLogo}
                  />
                </div>
              )}
              
              <div className={styles.headerInfo}>
                <h3 className={styles.degree}>{education.degree} in {education.field}</h3>
                <div className={styles.institution}>{education.institution}</div>
                <div className={styles.details}>
                  <span className={styles.date}>{education.startDate} - {education.endDate}</span>
                  <span className={styles.location}>{education.location}</span>
                </div>
              </div>
            </div>
            
            {education.description && (
              <p className={styles.description}>{education.description}</p>
            )}
            
            {education.relevantCourses && education.relevantCourses.length > 0 && (
              <div className={styles.coursesContainer}>
                <h4 className={styles.sectionTitle}>Relevant Coursework</h4>
                <div className={styles.courseList}>
                  {education.relevantCourses.map((course, index) => (
                    <span key={`${education.id}-course-${index}`} className={styles.courseItem}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {education.achievements && education.achievements.length > 0 && (
              <div className={styles.achievementsContainer}>
                <h4 className={styles.sectionTitle}>Achievements</h4>
                <ul className={styles.achievementsList}>
                  {education.achievements.map((achievement, index) => (
                    <li key={`${education.id}-achievement-${index}`} className={styles.achievementItem}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;