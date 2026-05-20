/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import SiestaAlert from './components/SiestaAlert';
import CheckList from './components/CheckList';
import { tabs } from './data/tabs';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  // Безопасный сброс скролла окна браузера при смене вкладки
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    }
  }, [activeTab]);

  const renderContent = (content) => {
    if (!content) return null;
    if (content === '<CheckList />') {
      return <CheckList />;
    }
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  };

  // Проверка на случай, если массив вкладок пуст или поврежден
  if (!tabs || tabs.length === 0 || !tabs[activeTab]) {
    return <div style={{ padding: '50px', textAlign: 'center' }}>Загрузка путеводителя...</div>;
  }

  return (
    <div className="app">
      <SiestaAlert /> 
      
      <main className="main-content">
        <div className="tab-content-wrapper">
          {renderContent(tabs[activeTab].content)}
        </div>
      </main>
      
      <nav className="tab-bar">
        {tabs.map((tab, index) => {
          if (!tab) return null;
          return (
            <button
              key={tab.id || index}
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.icon && <span className="tab-icon">{tab.icon}</span>}
              <span className="tab-text">{tab.title || `Вкладка ${index + 1}`}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default App;
