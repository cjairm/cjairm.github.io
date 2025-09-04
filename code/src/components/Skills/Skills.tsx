import React from 'react';
import styles from './Skills.module.scss';

// Skill type definition
type SkillLevel = 'expert' | 'advanced' | 'intermediate';

interface Skill {
  name: string;
  level: SkillLevel;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

// Skills data - same as original
const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'HTML5', level: 'expert' },
      { name: 'CSS3/SCSS', level: 'expert' },
      { name: 'Next.js', level: 'advanced' },
      { name: 'Redux', level: 'advanced' },
      { name: 'Vue.js', level: 'intermediate' },
      { name: 'Angular', level: 'intermediate' },
      { name: 'Tailwind CSS', level: 'advanced' },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 'expert' },
      { name: 'Express', level: 'advanced' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'GraphQL', level: 'advanced' },
      { name: 'REST API', level: 'expert' },
      { name: 'Firebase', level: 'intermediate' },
      { name: 'AWS', level: 'intermediate' },
    ]
  },
  {
    name: 'Tools & Practices',
    skills: [
      { name: 'Git/GitHub', level: 'expert' },
      { name: 'Jest', level: 'advanced' },
      { name: 'Testing Library', level: 'advanced' },
      { name: 'CI/CD', level: 'advanced' },
      { name: 'Webpack', level: 'advanced' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'Agile/Scrum', level: 'expert' },
      { name: 'Performance Optimization', level: 'advanced' },
    ]
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Team Leadership', level: 'expert' },
      { name: 'Technical Mentoring', level: 'expert' },
      { name: 'Problem Solving', level: 'expert' },
      { name: 'Project Management', level: 'advanced' },
      { name: 'Communication', level: 'expert' },
      { name: 'Collaboration', level: 'expert' },
      { name: 'Adaptability', level: 'advanced' },
      { name: 'Continuous Learning', level: 'expert' },
    ]
  }
];

// Helper to render skill level indicators
const SkillLevelIndicator: React.FC<{ level: SkillLevel }> = ({ level }) => {
  const dots = {
    expert: 3,
    advanced: 2,
    intermediate: 1
  };
  
  return (
    <div className={styles.levelIndicator}>
      {Array.from({ length: 3 }).map((_, i) => (
        <span 
          key={i} 
          className={`${styles.dot} ${i < dots[level] ? styles.active : ''}`}
        />
      ))}
    </div>
  );
};

const SkillsAlt: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Skills & Expertise</h2>
        <div className={styles.headingUnderline}></div>
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <SkillLevelIndicator level="expert" />
          <span>Expert</span>
        </div>
        <div className={styles.legendItem}>
          <SkillLevelIndicator level="advanced" />
          <span>Advanced</span>
        </div>
        <div className={styles.legendItem}>
          <SkillLevelIndicator level="intermediate" />
          <span>Intermediate</span>
        </div>
      </div>

      <div className={styles.skillsGrid}>
        {skillsData.map((category, categoryIndex) => (
          <div 
            key={`category-${categoryIndex}`} 
            className={styles.categoryCard}
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <h3 className={styles.categoryTitle}>{category.name}</h3>
            
            <div className={styles.skillsTable}>
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={`skill-${categoryIndex}-${skillIndex}`} 
                  className={styles.skillRow}
                  style={{ animationDelay: `${0.2 + (skillIndex * 0.05)}s` }}
                >
                  <div className={styles.skillName}>{skill.name}</div>
                  <SkillLevelIndicator level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAlt;
