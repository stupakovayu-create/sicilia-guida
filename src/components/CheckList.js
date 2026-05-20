import React, { useState, useEffect } from 'react';

const foodCategories = [
  {
    title: "Культ стритфуда (Pezzi di Rosticceria) 🍊",
    items: [
      { id: 'arancina_accarne', name: 'Arancina Accarne (с мясом и горошком)' },
      { id: 'arancina_burro', name: 'Arancina Burro (с ветчиной и моцареллой)' },
      { id: 'milza_maritata', name: 'Pane con la Milza Maritata (с сыром)' },
      { id: 'milza_schetta', name: 'Pane con la Milza Schetta (с лимоном)' },
      { id: 'panelle_crocche', name: 'Panelle e Crocchè (фритюр-сет в булке)' },
      { id: 'sfincione', name: 'Sfincione (пышная палермитанская пицца)' },
      { id: 'stigghiola', name: 'Stigghiola (внутренности ягненка на углях)' }
    ]
  },
  {
    title: "Первые блюда (Pasta) 🍝",
    items: [
      { id: 'pasta_sarde', name: 'Pasta con le Sarde (с сардинами и фенхелем)' },
      { id: 'pasta_norma', name: 'Pasta alla Norma (с баклажанами и рикоттой)' },
      { id: 'anelletti', name: 'Anelletti al Forno (запеченные колечки пасты)' }
    ]
  },
  {
    title: "Основные блюда (Secondi) 🐟",
    items: [
      { id: 'involtini', name: 'Involtini di Pesce Spada (рулетики из рыбы-меч)' },
      { id: 'sarde_beccafico', name: 'Sarde a Beccafico (фаршированные сардины)' },
      { id: 'caponata', name: 'Caponata (закуска из баклажанов — на гарнир!)' }
    ]
  },
  {
    title: "Десерты (Dolci) 🥮",
    items: [
      { id: 'cannolo', name: 'Cannolo Siciliano (крем должны заправить при вас!)' },
      { id: 'cassata', name: 'Cassata Siciliana (торт с рикоттой и марципаном)' },
      { id: 'brioche_gelato', name: 'Brioche con Gelato (булка с мороженым)' },
      { id: 'granita', name: 'Granita (кофейная или миндальная ледяная крошка)' },
      { id: 'frutta_martorana', name: 'Frutta Martorana (фрукты из марципана)' }
    ]
  },
  {
    title: "Что пить? 🥂",
    items: [
      { id: 'spremuta', name: 'Spremuta d’Arancia (сок из красных апельсинов)' },
      { id: 'vino_local', name: 'Vino Grillo / Catarratto (белое местное вино)' },
      { id: 'marsala', name: 'Marsala (крепленое вино для дижестива)' },
      { id: 'birra_messina', name: 'Birra Messina (местное пиво с кристаллами соли)' }
    ]
  }
];

const CheckList = () => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('sicilia_food_checklist_v2');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('sicilia_food_checklist_v2', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleToggle = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="checklist-container">
      <h2>Чек-лист еды в Палермо 🍕</h2>
      <p style={{ fontStyle: 'italic', marginBottom: '20px', fontSize: '14px', color: '#666' }}>
        Эти позиции — гастрономическая база Сицилии. Отмечайте то, что уже успели попробовать!
      </p>

      {foodCategories.map((category, catIndex) => (
        <div key={catIndex} style={{ marginBottom: '25px' }}>
          <h3 className="checklist-cat-title">{category.title}</h3>
          <div>
            {category.items.map(item => (
              <div key={item.id} className="checklist-item">
                <label style={{ display: 'flex', alignItems: 'center', width: '100%', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={!!checkedItems[item.id]}
                    onChange={() => handleToggle(item.id)}
                    style={{ marginRight: '15px', transform: 'scale(1.3)' }}
                  />
                  <span style={{
                    textDecoration: checkedItems[item.id] ? 'line-through' : 'none',
                    color: checkedItems[item.id] ? '#aaa' : '#444',
                    fontSize: '15px',
                    transition: 'all 0.2s'
                  }}>
                    {item.name}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckList;