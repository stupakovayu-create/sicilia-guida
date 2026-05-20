import React, { useState, useEffect } from 'react';
import './styles.css';
import SiestaAlert from './components/SiestaAlert';
import CheckList from './components/CheckList';
import { tabs } from './data/tabs';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  // ГЛОБАЛЬНЫЙ СБРОС ОКНА ДЛЯ IPHONE
  useEffect(() => {
    // Метод перематывает само окно браузера/PWA в координаты (0, 0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Мгновенный сброс без задержек анимации
    });
  }, [activeTab]); // Четко срабатывает при клике на любую кнопку меню

  const renderContent = (content) => {
    if (content === '<CheckList />') {
      return <CheckList />;
    }
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  };

  return (
    <div className="app">
      <SiestaAlert />

      <main className="main-content">
        <div className="tab-content-wrapper">
          {renderContent(tabs[activeTab].content)}
        </div>
      </main>

      <nav className="tab-bar">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon && <span className="tab-icon">{tab.icon}</span>}
            <span className="tab-text">{tab.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
