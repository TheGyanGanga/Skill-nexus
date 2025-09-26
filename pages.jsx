import React from 'react';
import { SkillCard, Button } from './components';

export function Home({ navigate }) {
  const dummySkills = [
    { id: 1, title: 'React Basics', teacher: 'Alice' },
    { id: 2, title: 'Python Automation', teacher: 'Bob' }
  ];

  return (
    <div className="page">
      <h2>Explore Skills</h2>
      <div className="skills-grid">
        {dummySkills.map(skill => (
          <SkillCard key={skill.id} skill={skill} onClick={() => navigate('skill')} />
        ))}
      </div>
    </div>
  );
}

export function SkillDetail({ navigate }) {
  return (
    <div className="page">
      <h2>React Basics</h2>
      <p>Teacher: Alice</p>
      <Button text="Book Session" onClick={() => alert('Booking...')} />
      <Button text="Back" onClick={() => navigate('home')} />
    </div>
  );
}

export function Profile({ navigate }) {
  return (
    <div className="page">
      <h2>My Profile</h2>
      <p>Name: User</p>
      <p>Skills Taught: 3</p>
      <Button text="Back" onClick={() => navigate('home')} />
    </div>
  );
}

export function Login({ navigate }) {
  return (
    <div className="page">
      <h2>Login / Register</h2>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Button text="Login" onClick={() => navigate('home')} />
    </div>
  );
}
