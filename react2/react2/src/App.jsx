import React from 'react';
import CardList from './component/CardList';
import { cardData } from './component/CardData'; 

const App = () => {
    return (
        <div className="app">
            <h1>Card List</h1>
            <CardList cards={cardData} />
        </div>
    );
};

export default App;
