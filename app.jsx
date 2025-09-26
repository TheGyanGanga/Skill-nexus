import React from 'react';
import { Home, SkillDetail, Profile, Login } from './pages';
import './styles.css';

export default function App() {
  const [route, setRoute] = React.useState('home');

  const renderPage = () => {
    switch(route) {
      case 'home': return <Home navigate={setRoute} />;
      case 'skill': return <SkillDetail navigate={setRoute} />;
      case 'profile': return <Profile navigate={setRoute} />;
      case 'login': return <Login navigate={setRoute} />;
      default: return <Home navigate={setRoute} />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="logo" onClick={() => setRoute('home')}>SkillNexus</h1>
        <nav>
          <button onClick={() => setRoute('login')}>Login</button>
          <button onClick={() => setRoute('profile')}>Profile</button>
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
    }
