import React from "react";
import styles from "./Skills.module.scss";
import { skillsData } from "./skillsData";
import type { SkillLevel } from "./skillsData";

const SkillLevelIndicator: React.FC<{ level: SkillLevel }> = ({ level }) => {
  const dots = {
    expert: 3,
    advanced: 2,
    intermediate: 1,
    beginner: 0,
  };

  return (
    <div className={styles.levelIndicator}>
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className={`${styles.dot} ${i < dots[level] ? styles.active : ""}`}
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
        <div className={styles.legendItem}>
          <SkillLevelIndicator level="beginner" />
          <span>Beginner</span>
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
                  style={{ animationDelay: `${0.2 + skillIndex * 0.05}s` }}
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
