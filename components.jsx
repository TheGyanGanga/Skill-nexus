import React from 'react';

export function Button({ text, onClick }) {
  return (
    <button className="btn" onClick={onClick}>{text}</button>
  );
}

export function SkillCard({ skill, onClick }) {
  return (
    <div className="skill-card" onClick={onClick}>
      <h3>{skill.title}</h3>
      <p>{skill.teacher}</p>
    </div>
  );
}

// Placeholder for video player modal (for future integration)
export function VideoPlayer({ src }) {
  return (
    <video controls className="video-player">
      <source src={src} type="video/mp4" />
    </video>
  );
}
